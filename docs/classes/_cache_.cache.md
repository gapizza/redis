[@ehacke/redis](../README.md) › ["cache"](../modules/_cache_.md) › [Cache](_cache_.cache.md)

# Class: Cache <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Cache**

## Implements

* [CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›

## Index

### Constructors

* [constructor](_cache_.cache.md#constructor)

### Properties

* [config](_cache_.cache.md#private-readonly-config)
* [enabled](_cache_.cache.md#private-enabled)
* [invalidateOnConnection](_cache_.cache.md#private-invalidateonconnection)
* [services](_cache_.cache.md#private-readonly-services)
* [LIST_PREFIX](_cache_.cache.md#static-readonly-list_prefix)
* [PREFIX_TERMINATOR](_cache_.cache.md#static-readonly-prefix_terminator)
* [SET_TIME_SEC_PREFIX](_cache_.cache.md#static-readonly-set_time_sec_prefix)
* [SET_TIME_US_PREFIX](_cache_.cache.md#static-readonly-set_time_us_prefix)

### Methods

* [del](_cache_.cache.md#del)
* [delList](_cache_.cache.md#dellist)
* [delListSafe](_cache_.cache.md#dellistsafe)
* [delLists](_cache_.cache.md#dellists)
* [delSafe](_cache_.cache.md#delsafe)
* [disable](_cache_.cache.md#disable)
* [enable](_cache_.cache.md#enable)
* [get](_cache_.cache.md#get)
* [getKey](_cache_.cache.md#getkey)
* [getList](_cache_.cache.md#getlist)
* [getListKey](_cache_.cache.md#getlistkey)
* [getTime](_cache_.cache.md#gettime)
* [getTimeKeys](_cache_.cache.md#gettimekeys)
* [getTimeListKeys](_cache_.cache.md#gettimelistkeys)
* [getTtlSec](_cache_.cache.md#getttlsec)
* [invalidate](_cache_.cache.md#invalidate)
* [invalidateOnReconnection](_cache_.cache.md#private-invalidateonreconnection)
* [set](_cache_.cache.md#set)
* [setList](_cache_.cache.md#setlist)
* [setListSafe](_cache_.cache.md#setlistsafe)
* [setSafe](_cache_.cache.md#setsafe)
* [suppressConnectionError](_cache_.cache.md#private-suppressconnectionerror)

## Constructors

###  constructor

\+ **new Cache**(`services`: [ServicesInterface](../interfaces/_cache_.servicesinterface.md), `config`: [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T›): *[Cache](_cache_.cache.md)*

*Defined in [cache.ts:66](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L66)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`services` | [ServicesInterface](../interfaces/_cache_.servicesinterface.md) | - |
`config` | [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T› |   |

**Returns:** *[Cache](_cache_.cache.md)*

## Properties

### `Private` `Readonly` config

• **config**: *[ConfigInterface](../interfaces/_cache_.configinterface.md)‹T›*

*Defined in [cache.ts:110](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L110)*

___

### `Private` enabled

• **enabled**: *boolean*

*Defined in [cache.ts:112](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L112)*

___

### `Private` invalidateOnConnection

• **invalidateOnConnection**: *boolean*

*Defined in [cache.ts:114](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L114)*

___

### `Private` `Readonly` services

• **services**: *[ServicesInterface](../interfaces/_cache_.servicesinterface.md)*

*Defined in [cache.ts:108](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L108)*

___

### `Static` `Readonly` LIST_PREFIX

▪ **LIST_PREFIX**: *"--<<$$LIST$$>>--"* = "--<<$$LIST$$>>--"

*Defined in [cache.ts:62](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L62)*

___

### `Static` `Readonly` PREFIX_TERMINATOR

▪ **PREFIX_TERMINATOR**: *"--<<$$PRE_TERM$$>>--"* = "--<<$$PRE_TERM$$>>--"

*Defined in [cache.ts:60](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L60)*

___

### `Static` `Readonly` SET_TIME_SEC_PREFIX

▪ **SET_TIME_SEC_PREFIX**: *"--<<$$T_SEC$$>>--"* = "--<<$$T_SEC$$>>--"

*Defined in [cache.ts:64](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L64)*

___

### `Static` `Readonly` SET_TIME_US_PREFIX

▪ **SET_TIME_US_PREFIX**: *"--<<$$T_US$$>>--"* = "--<<$$T_US$$>>--"

*Defined in [cache.ts:66](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L66)*

## Methods

###  del

▸ **del**(`key`: string): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:445](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L445)*

Delete value from cache by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delList

▸ **delList**(`key`: string): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:488](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L488)*

Delete list value from cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹void›*

___

###  delListSafe

▸ **delListSafe**(`key`: string, `setTime`: [SetTimeInterface](../interfaces/_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:465](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L465)*

Delete list value from cache by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`setTime` | [SetTimeInterface](../interfaces/_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  delLists

▸ **delLists**(): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:505](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L505)*

Delete all lists with prefix from cache

**Returns:** *Promise‹void›*

___

###  delSafe

▸ **delSafe**(`key`: string, `setTime`: [SetTimeInterface](../interfaces/_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:422](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L422)*

Safe delete value from cache by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`setTime` | [SetTimeInterface](../interfaces/_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  disable

▸ **disable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:213](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L213)*

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:206](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L206)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *Promise‹T | null›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:375](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L375)*

Get value from cache by key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T | null›*

___

###  getKey

▸ **getKey**(`key`: string): *string*

*Defined in [cache.ts:177](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L177)*

Get prefixed key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

###  getList

▸ **getList**(`key`: string): *Promise‹T[] | null›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:394](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L394)*

Get list from cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *Promise‹T[] | null›*

___

###  getListKey

▸ **getListKey**(`key`: string): *string*

*Defined in [cache.ts:186](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L186)*

Get prefixed list key

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string*

___

###  getTime

▸ **getTime**(): *Promise‹[SetTimeInterface](../interfaces/_cache_.settimeinterface.md)›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:221](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L221)*

Get time from redis

**Returns:** *Promise‹[SetTimeInterface](../interfaces/_cache_.settimeinterface.md)›*

___

###  getTimeKeys

▸ **getTimeKeys**(`key`: string): *object*

*Defined in [cache.ts:153](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L153)*

Get setTime keys

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *object*

* **setTimeSecKey**: *string*

* **setTimeUsKey**: *string*

___

###  getTimeListKeys

▸ **getTimeListKeys**(`key`: string): *object*

*Defined in [cache.ts:165](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L165)*

Get setTime list keys

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *object*

* **setTimeSecKey**: *string*

* **setTimeUsKey**: *string*

___

###  getTtlSec

▸ **getTtlSec**(`overrideTtlSec?`: undefined | number): *number*

*Defined in [cache.ts:195](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L195)*

Get ttl seconds

**Parameters:**

Name | Type |
------ | ------ |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *number*

___

###  invalidate

▸ **invalidate**(`prefix`: string): *Promise‹void›*

*Defined in [cache.ts:515](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L515)*

Invalidate any entries for this cache

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`prefix` | string | this.config.prefix |

**Returns:** *Promise‹void›*

___

### `Private` invalidateOnReconnection

▸ **invalidateOnReconnection**<**T**>(`result`: T): *Promise‹T | null›*

*Defined in [cache.ts:136](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L136)*

Invalidate on reconnection

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

**Returns:** *Promise‹T | null›*

___

###  set

▸ **set**(`key`: string, `instance`: T, `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:275](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L275)*

Set value in cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instance` | T |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  setList

▸ **setList**(`key`: string, `instances`: T[], `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:345](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L345)*

Set list in cache

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instances` | T[] |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  setListSafe

▸ **setListSafe**(`key`: string, `instances`: T[], `setTime`: [SetTimeInterface](../interfaces/_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:308](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L308)*

Set list in cache if setTime is latest

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instances` | T[] |
`setTime` | [SetTimeInterface](../interfaces/_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

###  setSafe

▸ **setSafe**(`key`: string, `instance`: T, `setTime`: [SetTimeInterface](../interfaces/_cache_.settimeinterface.md), `overrideTtlSec?`: undefined | number): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cache.ts:238](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L238)*

Set the cache, but only if the provided times are the latest

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`instance` | T |
`setTime` | [SetTimeInterface](../interfaces/_cache_.settimeinterface.md) |
`overrideTtlSec?` | undefined &#124; number |

**Returns:** *Promise‹void›*

___

### `Private` suppressConnectionError

▸ **suppressConnectionError**(`error`: object): *null*

*Defined in [cache.ts:121](https://github.com/ehacke/redis/blob/07fa980/cache.ts#L121)*

Suppress connection errors

**Parameters:**

▪ **error**: *object*

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *null*
