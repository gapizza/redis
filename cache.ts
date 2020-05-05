import Bluebird from 'bluebird';
import fs from 'fs';
import { isBoolean, isInteger, isObject, isString } from 'lodash';
import path from 'path';

import { Redis } from './redis';

interface ServicesInterface {
  redis: Redis;
}

interface ConfigInterface<T> {
  prefix: string;
  ttlSec: number;
  resetOnReconnection?: boolean;
  stringifyForCache(instance: T): Promise<string> | string;
  parseFromCache(instance: string): Promise<T> | T;
}

export interface CacheInterface<T> {
  enable(): void;
  disable(): void;
  set(key: string, instance: T, overrideTtlSec?: number): Promise<void>;
  setSafe(key: string, instance: T, setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void>;
  setList(key: string, instances: T[], overrideTtlSec?: number): Promise<void>;
  setListSafe(key: string, instances: T[], setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void>;
  get(key: string): Promise<T | null>;
  getList(key: string): Promise<T[] | null>;
  del(key: string): Promise<void>;
  delSafe(key: string, setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void>;
  delList(key: string): Promise<void>;
  delListSafe(key: string, setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void>;
  delLists(): Promise<void>;
  invalidate(prefix?): Promise<void>;
  getTime(): Promise<SetTimeInterface>;
}

export interface SetTimeInterface {
  setTimeSec: number;
  setTimeUs: number;
}

/**
 * @param {SetTimeInterface} setTime
 * @returns {void}
 */
const validateSetTime = (setTime: SetTimeInterface): void => {
  if (setTime.setTimeSec < 0) throw new Error('setTimeSec must be positive');
  if (setTime.setTimeUs < 0) throw new Error('setTimeUs must be positive');
  // eslint-disable-next-line no-magic-numbers
  if (setTime.setTimeUs > 1000000) throw new Error('setTimeUs must be in microseconds');
};

/**
 * @class
 */
export class Cache<T> implements CacheInterface<T> {
  // This has to be a sufficiently unique string that other prefixes will not include it
  // Adding this to the end of each prefix allows a wildcard delete for invalidating cache
  static readonly PREFIX_TERMINATOR = '--<<$$PRE_TERM$$>>--';

  static readonly LIST_PREFIX = '--<<$$LIST$$>>--';

  static readonly SET_TIME_SEC_PREFIX = '--<<$$T_SEC$$>>--';

  static readonly SET_TIME_US_PREFIX = '--<<$$T_US$$>>--';

  /**
   * @param {ServicesInterface} services
   * @param {ConfigInterface} config
   */
  constructor(services: ServicesInterface, config: ConfigInterface<T>) {
    if (!isObject(services.redis)) {
      throw new TypeError('redis must be an object');
    }

    if (!isString(config.prefix) || config.prefix.length === 0) {
      throw new Error('prefix must be a string with length');
    }

    if (!isInteger(config.ttlSec) || config.ttlSec <= 0) {
      throw new Error('ttlSec must be an integer gte 0');
    }

    if (config.prefix.includes(Cache.PREFIX_TERMINATOR)) {
      throw new Error(`prefix cannot include: ${Cache.PREFIX_TERMINATOR}`);
    }

    this.services = services;
    this.config = {
      ...config,
      prefix: config.prefix + Cache.PREFIX_TERMINATOR,
      resetOnReconnection: isBoolean(config.resetOnReconnection) ? config.resetOnReconnection : true,
    };
    this.invalidateOnConnection = false;
    this.enabled = true;

    this.services.redis.defineCommand('setSafe', {
      numberOfKeys: 3,
      lua: fs.readFileSync(path.join(__dirname, './setSafe.lua'), 'utf8'),
    });
    this.services.redis.defineCommand('delSafe', {
      numberOfKeys: 3,
      lua: fs.readFileSync(path.join(__dirname, './delSafe.lua'), 'utf8'),
    });
  }

  private readonly services: ServicesInterface;

  private readonly config: ConfigInterface<T>;

  private enabled: boolean;

  private invalidateOnConnection: boolean;

  /**
   * Suppress connection errors
   * @param {Error} error
   * @returns {null}
   */
  private suppressConnectionError(error: { message: string }): null {
    // eslint-disable-next-line prettier/prettier
    if (error && error.message && error.message.toLowerCase().includes('stream isn\'t writeable')) {
      this.invalidateOnConnection = true;
      return null;
    }

    throw error;
  }

  /**
   * Invalidate on reconnection
   * @param {any} result
   * @returns {any}
   */
  private async invalidateOnReconnection<T>(result: T): Promise<T | null> {
    if (this.config.resetOnReconnection && this.invalidateOnConnection) {
      // eslint-disable-next-line no-console
      console.log(`Resetting cache on: ${this.config.prefix}`);
      this.invalidateOnConnection = false;
      await this.invalidate();
      return null;
    }

    return result;
  }

  /**
   * Get setTime keys
   * @param {string} key
   * @returns {{}}
   */
  getTimeKeys(key: string): { setTimeSecKey: string; setTimeUsKey: string } {
    return {
      setTimeSecKey: `${this.config.prefix}${Cache.SET_TIME_SEC_PREFIX}${key}`,
      setTimeUsKey: `${this.config.prefix}${Cache.SET_TIME_US_PREFIX}${key}`,
    };
  }

  /**
   * Get setTime list keys
   * @param {string} key
   * @returns {{}}
   */
  getTimeListKeys(key: string): { setTimeSecKey: string; setTimeUsKey: string } {
    return {
      setTimeSecKey: `${this.config.prefix}${Cache.LIST_PREFIX}${Cache.SET_TIME_SEC_PREFIX}${key}`,
      setTimeUsKey: `${this.config.prefix}${Cache.LIST_PREFIX}${Cache.SET_TIME_US_PREFIX}${key}`,
    };
  }

  /**
   * Get prefixed key
   * @param {string} key
   * @returns {string}
   */
  getKey(key: string): string {
    return `${this.config.prefix}${key}`;
  }

  /**
   * Get prefixed list key
   * @param {string} key
   * @returns {string}
   */
  getListKey(key: string): string {
    return `${this.config.prefix}${Cache.LIST_PREFIX}${key}`;
  }

  /**
   * Get ttl seconds
   * @param {number} overrideTtlSec
   * @returns {number}
   */
  getTtlSec(overrideTtlSec?: number): number {
    if (overrideTtlSec && (!isInteger(overrideTtlSec) || overrideTtlSec <= 0)) {
      throw new Error('overrideTtlSec must be an integer gte 0');
    }

    return overrideTtlSec && isInteger(overrideTtlSec) ? overrideTtlSec : this.config.ttlSec;
  }

  /**
   * @returns {void}
   */
  enable(): void {
    this.enabled = true;
  }

  /**
   * @returns {void}
   */
  disable(): void {
    this.enabled = false;
  }

  /**
   * Get time from redis
   * @returns {Promise<SetTimeInterface>}
   */
  async getTime(): Promise<SetTimeInterface> {
    const result = await this.services.redis.time();
    const [setTimeSec, setTimeUs] = result;
    return {
      setTimeSec: parseInt(setTimeSec, 10),
      setTimeUs: parseInt(setTimeUs, 10),
    };
  }

  /**
   * Set the cache, but only if the provided times are the latest
   * @param {string} key
   * @param {T} instance
   * @param {SetTimeInterface} setTime
   * @param {number} overrideTtlSec
   * @returns {Promise<void>}
   */
  async setSafe(key: string, instance: T, setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void> {
    if (!this.enabled) return;

    validateSetTime(setTime);

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    if (instance === null) {
      await this.delSafe(key, setTime, overrideTtlSec);
      return;
    }

    const value = await this.config.stringifyForCache(instance);

    if (!isString(value) || value.length === 0) {
      await this.delSafe(key, setTime, overrideTtlSec);
      return;
    }

    const { setTimeSecKey, setTimeUsKey } = this.getTimeKeys(key);
    const { setTimeSec, setTimeUs } = setTime;

    await (this.services.redis as any)
      .setSafe(this.getKey(key), setTimeSecKey, setTimeUsKey, value, this.getTtlSec(overrideTtlSec), setTimeSec, setTimeUs)
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Set value in cache
   * @param {string} key
   * @param {T} instance
   * @param {number} [overrideTtlSec]
   * @returns {Promise<void>}
   */
  async set(key: string, instance: T, overrideTtlSec?: number): Promise<void> {
    if (!this.enabled) return;

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    if (instance === null) {
      await this.del(key);
      return;
    }

    const value = await this.config.stringifyForCache(instance);

    if (!isString(value) || value.length === 0) {
      await this.del(key);
      return;
    }

    await this.services.redis
      .setex(this.getKey(key), this.getTtlSec(overrideTtlSec), value)
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Set list in cache if setTime is latest
   * @param {string} key
   * @param {T[]} instances
   * @param {SetTimeInterface} setTime
   * @param {number} [overrideTtlSec]
   * @returns {Promise<void>}
   */
  async setListSafe(key: string, instances: T[], setTime: SetTimeInterface, overrideTtlSec?: number) {
    if (!this.enabled) return;

    validateSetTime(setTime);

    if (instances.length === 0) {
      await this.delListSafe(key, setTime, overrideTtlSec);
      return;
    }

    const stringifiedInstances = await Bluebird.filter(instances, (instance) => !!instance)
      .map((instance) => this.config.stringifyForCache(instance))
      .filter((instance) => !!instance);

    if (stringifiedInstances.length === 0) {
      await this.delListSafe(key, setTime, overrideTtlSec);
      return;
    }

    const value = JSON.stringify(stringifiedInstances);

    const { setTimeSecKey, setTimeUsKey } = this.getTimeListKeys(key);
    const { setTimeSec, setTimeUs } = setTime;

    await (this.services.redis as any)
      .setSafe(this.getKey(key), setTimeSecKey, setTimeUsKey, value, this.getTtlSec(overrideTtlSec), setTimeSec, setTimeUs)
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Set list in cache
   * @param {string} key
   * @param {T[]} instances
   * @param {number} [overrideTtlSec]
   * @returns {Promise<void>}
   */
  async setList(key: string, instances: T[], overrideTtlSec?: number): Promise<void> {
    if (!this.enabled) return;

    if (instances.length === 0) {
      await this.delList(key);
      return;
    }

    const stringifiedInstances = await Bluebird.filter(instances, (instance) => !!instance)
      .map((instance) => this.config.stringifyForCache(instance))
      .filter((instance) => !!instance);

    if (stringifiedInstances.length === 0) {
      await this.delList(key);
      return;
    }

    const value = JSON.stringify(stringifiedInstances);

    await this.services.redis
      .setex(this.getListKey(key), this.getTtlSec(overrideTtlSec), value)
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Get value from cache by key
   * @param {string} key
   * @returns {Promise<*>}
   */
  async get(key: string): Promise<T | null> {
    if (!this.enabled) return null;

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    return this.services.redis
      .get(this.getKey(key))
      .then((result) => this.invalidateOnReconnection(result))
      .then((result) => (result ? this.config.parseFromCache(result) : null))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Get list from cache
   * @param {string} key
   * @returns {Promise<T[] | null>}
   */
  async getList(key: string): Promise<T[] | null> {
    if (!this.enabled) return null;

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    const value = await this.services.redis
      .get(this.getListKey(key))
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));

    if (!value) return null;

    const stringifiedInstances = JSON.parse(value) as string[];

    if (stringifiedInstances.length === 0) return [];

    return Bluebird.map(stringifiedInstances, (stringified) => this.config.parseFromCache(stringified));
  }

  /**
   * Safe delete value from cache by key
   * @param {string} key
   * @param {SetTimeInterface} setTime
   * @param {number} overrideTtlSec
   * @returns {Promise<void>}
   */
  async delSafe(key: string, setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void> {
    if (!this.enabled) return;

    validateSetTime(setTime);

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    const { setTimeSecKey, setTimeUsKey } = this.getTimeKeys(key);
    const { setTimeSec, setTimeUs } = setTime;

    await (this.services.redis as any)
      .delSafe(this.getKey(key), setTimeSecKey, setTimeUsKey, this.getTtlSec(overrideTtlSec), setTimeSec, setTimeUs)
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Delete value from cache by key
   * @param {string} key
   * @returns {Promise<void>}
   */
  async del(key: string): Promise<void> {
    if (!this.enabled) return;

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    await this.services.redis
      .del(this.getKey(key))
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Delete list value from cache by key
   * @param {string} key
   * @param {SetTimeInterface} setTime
   * @param {number} overrideTtlSec
   * @returns {Promise<void>}
   */
  async delListSafe(key: string, setTime: SetTimeInterface, overrideTtlSec?: number): Promise<void> {
    if (!this.enabled) return;

    validateSetTime(setTime);

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    const { setTimeSecKey, setTimeUsKey } = this.getTimeListKeys(key);
    const { setTimeSec, setTimeUs } = setTime;

    await (this.services.redis as any)
      .delSafe(this.getKey(key), setTimeSecKey, setTimeUsKey, this.getTtlSec(overrideTtlSec), setTimeSec, setTimeUs)
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Delete list value from cache
   * @param {string} key
   * @returns {Promise<void>}
   */
  async delList(key: string): Promise<void> {
    if (!this.enabled) return;

    if (!isString(key) || key.length === 0) {
      throw new Error('key must be a string with length');
    }

    await this.services.redis
      .del(this.getListKey(key))
      .then((result) => this.invalidateOnReconnection(result))
      .catch((error) => this.suppressConnectionError(error));
  }

  /**
   * Delete all lists with prefix from cache
   * @returns {Promise<void>}
   */
  async delLists(): Promise<void> {
    if (!this.enabled) return;
    await this.invalidate(this.config.prefix + Cache.LIST_PREFIX);
  }

  /**
   * Invalidate any entries for this cache
   * @param {string} [prefix]
   * @returns {Promise<void>}
   */
  async invalidate(prefix = this.config.prefix): Promise<void> {
    if (!this.enabled) return;

    await new Promise((resolve, reject) => {
      const stream = this.services.redis.scanStream({
        match: `${prefix}*`,
        count: 100,
      });
      stream.on('data', async (resultKeys) => {
        stream.pause();
        if (resultKeys.length > 0) {
          await this.services.redis.del(...resultKeys);
        }
        stream.resume();
      });

      stream.on('end', () => resolve());
      stream.on('error', (err) => reject(err));
    });
  }
}
