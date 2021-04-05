[@gapizza/redis](../README.md) / [cache](../modules/cache.md) / Cache

# Class: Cache<T\>

[cache](../modules/cache.md).Cache

## Type parameters

Name |
:------ |
`T` |

## Implements

* [*CacheInterface*](../interfaces/cache.cacheinterface.md)<T\>

## Table of contents

### Constructors

- [constructor](cache.cache-1.md#constructor)

### Properties

- [config](cache.cache-1.md#config)
- [enabled](cache.cache-1.md#enabled)
- [invalidateOnConnection](cache.cache-1.md#invalidateonconnection)
- [services](cache.cache-1.md#services)
- [LIST\_PREFIX](cache.cache-1.md#list_prefix)
- [PREFIX\_TERMINATOR](cache.cache-1.md#prefix_terminator)
- [TIMESTAMP\_SEC\_PREFIX](cache.cache-1.md#timestamp_sec_prefix)
- [TIMESTAMP\_US\_PREFIX](cache.cache-1.md#timestamp_us_prefix)

### Methods

- [del](cache.cache-1.md#del)
- [delList](cache.cache-1.md#dellist)
- [delListSafe](cache.cache-1.md#dellistsafe)
- [delLists](cache.cache-1.md#dellists)
- [delSafe](cache.cache-1.md#delsafe)
- [disable](cache.cache-1.md#disable)
- [enable](cache.cache-1.md#enable)
- [get](cache.cache-1.md#get)
- [getKey](cache.cache-1.md#getkey)
- [getList](cache.cache-1.md#getlist)
- [getListKey](cache.cache-1.md#getlistkey)
- [getTime](cache.cache-1.md#gettime)
- [getTimeKeys](cache.cache-1.md#gettimekeys)
- [getTimeListKeys](cache.cache-1.md#gettimelistkeys)
- [getTtlSec](cache.cache-1.md#getttlsec)
- [invalidate](cache.cache-1.md#invalidate)
- [invalidateOnReconnection](cache.cache-1.md#invalidateonreconnection)
- [set](cache.cache-1.md#set)
- [setList](cache.cache-1.md#setlist)
- [setListSafe](cache.cache-1.md#setlistsafe)
- [setSafe](cache.cache-1.md#setsafe)
- [suppressConnectionError](cache.cache-1.md#suppressconnectionerror)

## Constructors

### constructor

\+ **new Cache**<T\>(`services`: ServicesInterface, `config`: *ConfigInterface*<T\>): [*Cache*](cache.cache-1.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`services` | ServicesInterface |
`config` | *ConfigInterface*<T\> |

**Returns:** [*Cache*](cache.cache-1.md)<T\>

Defined in: [cache.ts:66](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L66)

## Properties

### config

• `Private` `Readonly` **config**: *ConfigInterface*<T\>

Defined in: [cache.ts:110](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L110)

___

### enabled

• `Private` **enabled**: *boolean*

Defined in: [cache.ts:112](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L112)

___

### invalidateOnConnection

• `Private` **invalidateOnConnection**: *boolean*

Defined in: [cache.ts:114](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L114)

___

### services

• `Private` `Readonly` **services**: ServicesInterface

Defined in: [cache.ts:108](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L108)

___

### LIST\_PREFIX

▪ `Static` `Readonly` **LIST\_PREFIX**: *--<<$$LIST$$>>--*= '--<<$$LIST$$\>\>--'

Defined in: [cache.ts:62](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L62)

___

### PREFIX\_TERMINATOR

▪ `Static` `Readonly` **PREFIX\_TERMINATOR**: *--<<$$PRE_TERM$$>>--*= '--<<$$PRE\_TERM$$\>\>--'

Defined in: [cache.ts:60](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L60)

___

### TIMESTAMP\_SEC\_PREFIX

▪ `Static` `Readonly` **TIMESTAMP\_SEC\_PREFIX**: *--<<$$T_SEC$$>>--*= '--<<$$T\_SEC$$\>\>--'

Defined in: [cache.ts:64](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L64)

___

### TIMESTAMP\_US\_PREFIX

▪ `Static` `Readonly` **TIMESTAMP\_US\_PREFIX**: *--<<$$T_US$$>>--*= '--<<$$T\_US$$\>\>--'

Defined in: [cache.ts:66](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L66)

## Methods

### del

▸ **del**(`key`: *string*): *Promise*<void\>

Delete value from cache by key

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:462](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L462)

___

### delList

▸ **delList**(`key`: *string*): *Promise*<void\>

Delete list value from cache

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:507](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L507)

___

### delListSafe

▸ **delListSafe**(`key`: *string*, `setTime`: [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

Delete list value from cache by key

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`setTime` | [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:483](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L483)

___

### delLists

▸ **delLists**(): *Promise*<void\>

Delete all lists with prefix from cache

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:525](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L525)

___

### delSafe

▸ **delSafe**(`key`: *string*, `setTime`: [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

Safe delete value from cache by key

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`setTime` | [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:438](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L438)

___

### disable

▸ **disable**(): *void*

**Returns:** *void*

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:221](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L221)

___

### enable

▸ **enable**(): *void*

**Returns:** *void*

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:214](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L214)

___

### get

▸ **get**(`key`: *string*): *Promise*<*null* \| T\>

Get value from cache by key

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<*null* \| T\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:389](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L389)

___

### getKey

▸ **getKey**(`key`: *string*): *string*

Get prefixed key

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *string*

Defined in: [cache.ts:183](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L183)

___

### getList

▸ **getList**(`key`: *string*): *Promise*<*null* \| T[]\>

Get list from cache

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<*null* \| T[]\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:409](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L409)

___

### getListKey

▸ **getListKey**(`key`: *string*): *string*

Get prefixed list key

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *string*

Defined in: [cache.ts:193](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L193)

___

### getTime

▸ **getTime**(): *Promise*<[*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md)\>

Get time from redis

**Returns:** *Promise*<[*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md)\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:230](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L230)

___

### getTimeKeys

▸ **getTimeKeys**(`key`: *string*): *object*

Get setTime keys

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`timestampMicrosecondKey` | *string* |
`timestampSecondKey` | *string* |

Defined in: [cache.ts:157](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L157)

___

### getTimeListKeys

▸ **getTimeListKeys**(`key`: *string*): *object*

Get setTime list keys

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *object*

Name | Type |
:------ | :------ |
`timestampMicrosecondKey` | *string* |
`timestampSecondKey` | *string* |

Defined in: [cache.ts:170](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L170)

___

### getTtlSec

▸ **getTtlSec**(`overrideTtlSec?`: *number*): *number*

Get ttl seconds

#### Parameters:

Name | Type |
:------ | :------ |
`overrideTtlSec?` | *number* |

**Returns:** *number*

Defined in: [cache.ts:203](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L203)

___

### invalidate

▸ **invalidate**(`prefix?`: *string*): *Promise*<void\>

Invalidate any entries for this cache

#### Parameters:

Name | Type |
:------ | :------ |
`prefix` | *string* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:536](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L536)

___

### invalidateOnReconnection

▸ `Private`**invalidateOnReconnection**<I\>(`result`: I): *Promise*<*null* \| I\>

Invalidate on reconnection

#### Type parameters:

Name |
:------ |
`I` |

#### Parameters:

Name | Type |
:------ | :------ |
`result` | I |

**Returns:** *Promise*<*null* \| I\>

Defined in: [cache.ts:139](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L139)

___

### set

▸ **set**(`key`: *string*, `instance`: T, `overrideTtlSec?`: *number*): *Promise*<void\>

Set value in cache

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instance` | T |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:286](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L286)

___

### setList

▸ **setList**(`key`: *string*, `instances`: T[], `overrideTtlSec?`: *number*): *Promise*<void\>

Set list in cache

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instances` | T[] |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:358](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L358)

___

### setListSafe

▸ **setListSafe**(`key`: *string*, `instances`: T[], `setTime`: [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

Set list in cache if setTime is latest

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instances` | T[] |
`setTime` | [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:320](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L320)

___

### setSafe

▸ **setSafe**(`key`: *string*, `instance`: T, `setTime`: [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

Set the cache, but only if the provided times are the latest

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instance` | T |
`setTime` | [*CacheTimestampInterface*](../interfaces/cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Implementation of: [CacheInterface](../interfaces/cache.cacheinterface.md)

Defined in: [cache.ts:248](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L248)

___

### suppressConnectionError

▸ `Private`**suppressConnectionError**(`error`: { `message`: *string*  }): *null*

Suppress connection errors

#### Parameters:

Name | Type |
:------ | :------ |
`error` | *object* |
`error.message` | *string* |

**Returns:** *null*

Defined in: [cache.ts:123](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L123)
