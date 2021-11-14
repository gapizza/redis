[@gapizza/redis](../README.md) / [cache](../modules/cache.md) / Cache

# Class: Cache<T\>

[cache](../modules/cache.md).Cache

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`CacheInterface`](../interfaces/cache.CacheInterface.md)<`T`\>

## Table of contents

### Constructors

- [constructor](cache.Cache.md#constructor)

### Properties

- [config](cache.Cache.md#config)
- [enabled](cache.Cache.md#enabled)
- [invalidateOnConnection](cache.Cache.md#invalidateonconnection)
- [services](cache.Cache.md#services)
- [LIST\_PREFIX](cache.Cache.md#list_prefix)
- [PREFIX\_TERMINATOR](cache.Cache.md#prefix_terminator)
- [TIMESTAMP\_SEC\_PREFIX](cache.Cache.md#timestamp_sec_prefix)
- [TIMESTAMP\_US\_PREFIX](cache.Cache.md#timestamp_us_prefix)

### Methods

- [del](cache.Cache.md#del)
- [delList](cache.Cache.md#dellist)
- [delListSafe](cache.Cache.md#dellistsafe)
- [delLists](cache.Cache.md#dellists)
- [delSafe](cache.Cache.md#delsafe)
- [disable](cache.Cache.md#disable)
- [enable](cache.Cache.md#enable)
- [get](cache.Cache.md#get)
- [getKey](cache.Cache.md#getkey)
- [getList](cache.Cache.md#getlist)
- [getListKey](cache.Cache.md#getlistkey)
- [getTime](cache.Cache.md#gettime)
- [getTimeKeys](cache.Cache.md#gettimekeys)
- [getTimeListKeys](cache.Cache.md#gettimelistkeys)
- [getTtlSec](cache.Cache.md#getttlsec)
- [invalidate](cache.Cache.md#invalidate)
- [invalidateOnReconnection](cache.Cache.md#invalidateonreconnection)
- [set](cache.Cache.md#set)
- [setList](cache.Cache.md#setlist)
- [setListSafe](cache.Cache.md#setlistsafe)
- [setSafe](cache.Cache.md#setsafe)
- [suppressConnectionError](cache.Cache.md#suppressconnectionerror)

## Constructors

### constructor

• **new Cache**<`T`\>(`services`, `config`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | `ServicesInterface` |
| `config` | `ConfigInterface`<`T`\> |

#### Defined in

[cache.ts:72](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L72)

## Properties

### config

• `Private` `Readonly` **config**: `ConfigInterface`<`T`\>

#### Defined in

[cache.ts:110](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L110)

___

### enabled

• `Private` **enabled**: `boolean`

#### Defined in

[cache.ts:112](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L112)

___

### invalidateOnConnection

• `Private` **invalidateOnConnection**: `boolean`

#### Defined in

[cache.ts:114](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L114)

___

### services

• `Private` `Readonly` **services**: `ServicesInterface`

#### Defined in

[cache.ts:108](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L108)

___

### LIST\_PREFIX

▪ `Static` `Readonly` **LIST\_PREFIX**: ``"--<<$$LIST$$>>--"``

#### Defined in

[cache.ts:62](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L62)

___

### PREFIX\_TERMINATOR

▪ `Static` `Readonly` **PREFIX\_TERMINATOR**: ``"--<<$$PRE_TERM$$>>--"``

#### Defined in

[cache.ts:60](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L60)

___

### TIMESTAMP\_SEC\_PREFIX

▪ `Static` `Readonly` **TIMESTAMP\_SEC\_PREFIX**: ``"--<<$$T_SEC$$>>--"``

#### Defined in

[cache.ts:64](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L64)

___

### TIMESTAMP\_US\_PREFIX

▪ `Static` `Readonly` **TIMESTAMP\_US\_PREFIX**: ``"--<<$$T_US$$>>--"``

#### Defined in

[cache.ts:66](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L66)

## Methods

### del

▸ **del**(`key`): `Promise`<`void`\>

Delete value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[del](../interfaces/cache.CacheInterface.md#del)

#### Defined in

[cache.ts:462](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L462)

___

### delList

▸ **delList**(`key`): `Promise`<`void`\>

Delete list value from cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[delList](../interfaces/cache.CacheInterface.md#dellist)

#### Defined in

[cache.ts:507](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L507)

___

### delListSafe

▸ **delListSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Delete list value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](../interfaces/cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[delListSafe](../interfaces/cache.CacheInterface.md#dellistsafe)

#### Defined in

[cache.ts:483](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L483)

___

### delLists

▸ **delLists**(): `Promise`<`void`\>

Delete all lists with prefix from cache

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[delLists](../interfaces/cache.CacheInterface.md#dellists)

#### Defined in

[cache.ts:525](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L525)

___

### delSafe

▸ **delSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Safe delete value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](../interfaces/cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[delSafe](../interfaces/cache.CacheInterface.md#delsafe)

#### Defined in

[cache.ts:438](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L438)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[disable](../interfaces/cache.CacheInterface.md#disable)

#### Defined in

[cache.ts:221](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L221)

___

### enable

▸ **enable**(): `void`

#### Returns

`void`

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[enable](../interfaces/cache.CacheInterface.md#enable)

#### Defined in

[cache.ts:214](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L214)

___

### get

▸ **get**(`key`): `Promise`<``null`` \| `T`\>

Get value from cache by key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[get](../interfaces/cache.CacheInterface.md#get)

#### Defined in

[cache.ts:389](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L389)

___

### getKey

▸ **getKey**(`key`): `string`

Get prefixed key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[cache.ts:183](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L183)

___

### getList

▸ **getList**(`key`): `Promise`<``null`` \| `T`[]\>

Get list from cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`[]\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[getList](../interfaces/cache.CacheInterface.md#getlist)

#### Defined in

[cache.ts:409](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L409)

___

### getListKey

▸ **getListKey**(`key`): `string`

Get prefixed list key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[cache.ts:193](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L193)

___

### getTime

▸ **getTime**(): `Promise`<[`CacheTimestampInterface`](../interfaces/cache.CacheTimestampInterface.md)\>

Get time from redis

#### Returns

`Promise`<[`CacheTimestampInterface`](../interfaces/cache.CacheTimestampInterface.md)\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[getTime](../interfaces/cache.CacheInterface.md#gettime)

#### Defined in

[cache.ts:230](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L230)

___

### getTimeKeys

▸ **getTimeKeys**(`key`): `Object`

Get setTime keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `timestampMicrosecondKey` | `string` |
| `timestampSecondKey` | `string` |

#### Defined in

[cache.ts:157](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L157)

___

### getTimeListKeys

▸ **getTimeListKeys**(`key`): `Object`

Get setTime list keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `timestampMicrosecondKey` | `string` |
| `timestampSecondKey` | `string` |

#### Defined in

[cache.ts:170](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L170)

___

### getTtlSec

▸ **getTtlSec**(`overrideTtlSec?`): `number`

Get ttl seconds

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrideTtlSec?` | `number` |

#### Returns

`number`

#### Defined in

[cache.ts:203](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L203)

___

### invalidate

▸ **invalidate**(`prefix?`): `Promise`<`void`\>

Invalidate any entries for this cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[invalidate](../interfaces/cache.CacheInterface.md#invalidate)

#### Defined in

[cache.ts:536](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L536)

___

### invalidateOnReconnection

▸ `Private` **invalidateOnReconnection**<`I`\>(`result`): `Promise`<``null`` \| `I`\>

Invalidate on reconnection

#### Type parameters

| Name |
| :------ |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `I` |

#### Returns

`Promise`<``null`` \| `I`\>

#### Defined in

[cache.ts:139](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L139)

___

### set

▸ **set**(`key`, `instance`, `overrideTtlSec?`): `Promise`<`void`\>

Set value in cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[set](../interfaces/cache.CacheInterface.md#set)

#### Defined in

[cache.ts:286](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L286)

___

### setList

▸ **setList**(`key`, `instances`, `overrideTtlSec?`): `Promise`<`void`\>

Set list in cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[setList](../interfaces/cache.CacheInterface.md#setlist)

#### Defined in

[cache.ts:358](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L358)

___

### setListSafe

▸ **setListSafe**(`key`, `instances`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Set list in cache if setTime is latest

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `setTime` | [`CacheTimestampInterface`](../interfaces/cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[setListSafe](../interfaces/cache.CacheInterface.md#setlistsafe)

#### Defined in

[cache.ts:320](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L320)

___

### setSafe

▸ **setSafe**(`key`, `instance`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

Set the cache, but only if the provided times are the latest

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `setTime` | [`CacheTimestampInterface`](../interfaces/cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[CacheInterface](../interfaces/cache.CacheInterface.md).[setSafe](../interfaces/cache.CacheInterface.md#setsafe)

#### Defined in

[cache.ts:248](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L248)

___

### suppressConnectionError

▸ `Private` **suppressConnectionError**(`error`): ``null``

Suppress connection errors

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Object` |
| `error.message` | `string` |

#### Returns

``null``

#### Defined in

[cache.ts:123](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L123)
