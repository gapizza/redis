import Bluebird from 'bluebird';
import IORedis, { KeyType, ScanStreamOption } from 'ioredis';
import Redlock from 'redlock';

// @ts-expect-error override the Promise implementation for IORedis
IORedis.Promise = Bluebird;

enum SEARCH_FIELD_TYPES {
  TAG = 'tag',
  TEXT = 'text',
  NUMERIC = 'numeric',
  GEO = 'geo',
}

/**
 * Process the returned array from a transaction, throwing errors if any exist
 *
 * @param {object[]} results
 * @returns {object[]}
 */
export const processMultiResults = (results: (string | null | number)[][]): (string | null | number)[] => {
  const ERR_INDEX = 0;
  const RESULT_INDEX = 1;

  if (!Array.isArray(results) || !results.every(Array.isArray)) {
    throw new Error('results must be an array of arrays');
  }

  return results.map((result) => {
    if (result[ERR_INDEX]) {
      throw new Error(`error during multi: ${result[ERR_INDEX]}`);
    }

    return result[RESULT_INDEX];
  });
};

/**
 * @class
 */
export class Redis extends IORedis {
  static readonly CONSTANTS = {
    DEFAULT_SKEW_MS: 5,
    SEARCH_FIELD_TYPES,
    SEARCH_FIELD_TYPE_VALUES: Object.values(SEARCH_FIELD_TYPES),
  };

  /**
   * @param {{}} args
   */
  constructor(...args: any[]) {
    super(...args);

    this.NAME = 'redis';
    this.redlock = this.createRedlock();

    this.debounced = {};
  }

  NAME: string;

  readonly redlock: Redlock;

  // eslint-disable-next-line no-undef
  readonly debounced: { [k: string]: NodeJS.Timeout };

  /**
   * Acquire lock in Redis
   *
   * @param {string} key
   * @param {number} ttl
   * @returns {Promise<Lock|null>}
   */
  async lock(key: string, ttl: number): Promise<Redlock.Lock | null> {
    return this.redlock
      .lock(key, ttl)
      .then((redlock) => {
        return {
          ...redlock,
          unlock: async () => {
            try {
              await redlock.unlock();
            } catch (error: any) {
              if (error?.message?.includes('Unable to fully release the lock on resource')) {
                // eslint-disable-next-line no-console
                console.error(error?.message);
                // eslint-disable-next-line no-console
                console.error('Above error is likely caused by the lock expiring before unlock');
                return;
              }

              throw error;
            }
          },
        } as any;
      })
      .catch((error) => {
        if (error && error.message && error.message.includes('attempts to lock the resource')) {
          return null;
        }

        throw error;
      });
  }

  /* eslint-disable unicorn/no-object-as-default-parameter */
  /**
   * Get redlock instance
   *
   * @link https://www.npmjs.com/package/redlock
   * @param {object} [config={ retryCount: 5 }]
   * @returns {Redlock}
   */
  createRedlock(config: Redlock.Options = { retryCount: 0 }): Redlock {
    return new Redlock([this], config);
  }
  /* eslint-enable unicorn/no-object-as-default-parameter */

  /**
   * Wrapper for scanStream that returns a promise
   *
   * @param {ScanStreamOption} options
   * @returns {Promise<string[]>}
   */
  async scanPromise(options?: ScanStreamOption): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const stream = this.scanStream(options);
      const keys = [] as string[];

      stream.on('data', (resultKeys) => {
        for (const element of resultKeys) {
          keys.push(element);
        }
      });

      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(keys));
    });
  }

  /**
   * Wrapper for scanStream that returns a promise
   *
   * @param {KeyType} key
   * @param {ScanStreamOption} options
   * @returns {Promise<string[]>}
   */
  async zscanPromise(key: KeyType, options?: ScanStreamOption): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const stream = this.zscanStream(key, options);
      const keys = [] as string[];

      stream.on('data', (resultKeys) => {
        for (const element of resultKeys) {
          keys.push(element);
        }
      });

      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(keys));
    });
  }

  /**
   * Debounce a callback using Redis and setTimeout locally
   *
   * @param {Function} callback
   * @param {string} key
   * @param {number} timeoutMs
   * @param {number} [skewMs=5]
   * @returns {Promise<void>}
   */
  async debounce(callback: () => void | Promise<void>, key: string, timeoutMs: number, skewMs = Redis.CONSTANTS.DEFAULT_SKEW_MS): Promise<any> {
    if (this.debounced[key]) {
      clearTimeout(this.debounced[key]);
      delete this.debounced[key];
    }

    const transaction = this.multi()
      .pttl(key)
      // @ts-expect-error this typing is not correct
      .set(key, 'true', 'NX', 'PX', timeoutMs);

    const [expiryMs, setResult] = processMultiResults(await transaction.exec()) as [number, number];
    const retryMs = expiryMs < 0 ? timeoutMs : Math.max(expiryMs + skewMs, timeoutMs);

    if (!setResult) {
      this.debounced[key] = setTimeout(async () => {
        if (await this.set(key, 'true', 'NX', 'PX', timeoutMs)) {
          return callback();
        }

        return null;
      }, retryMs);
      return null;
    }

    return callback();
  }
}
