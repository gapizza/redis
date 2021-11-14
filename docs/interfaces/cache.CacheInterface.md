[@gapizza/redis](../README.md) / [cache](../modules/cache.md) / CacheInterface

# Interface: CacheInterface<T\>

[cache](../modules/cache.md).CacheInterface

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`Cache`](../classes/cache.Cache.md)

## Table of contents

### Methods

- [del](cache.CacheInterface.md#del)
- [delList](cache.CacheInterface.md#dellist)
- [delListSafe](cache.CacheInterface.md#dellistsafe)
- [delLists](cache.CacheInterface.md#dellists)
- [delSafe](cache.CacheInterface.md#delsafe)
- [disable](cache.CacheInterface.md#disable)
- [enable](cache.CacheInterface.md#enable)
- [get](cache.CacheInterface.md#get)
- [getList](cache.CacheInterface.md#getlist)
- [getTime](cache.CacheInterface.md#gettime)
- [invalidate](cache.CacheInterface.md#invalidate)
- [set](cache.CacheInterface.md#set)
- [setList](cache.CacheInterface.md#setlist)
- [setListSafe](cache.CacheInterface.md#setlistsafe)
- [setSafe](cache.CacheInterface.md#setsafe)

## Methods

### del

▸ **del**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:29](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L29)

___

### delList

▸ **delList**(`key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:31](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L31)

___

### delListSafe

▸ **delListSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:32](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L32)

___

### delLists

▸ **delLists**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:33](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L33)

___

### delSafe

▸ **delSafe**(`key`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `setTime` | [`CacheTimestampInterface`](cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:30](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L30)

___

### disable

▸ **disable**(): `void`

#### Returns

`void`

#### Defined in

[cache.ts:22](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L22)

___

### enable

▸ **enable**(): `void`

#### Returns

`void`

#### Defined in

[cache.ts:21](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L21)

___

### get

▸ **get**(`key`): `Promise`<``null`` \| `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`\>

#### Defined in

[cache.ts:27](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L27)

___

### getList

▸ **getList**(`key`): `Promise`<``null`` \| `T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `T`[]\>

#### Defined in

[cache.ts:28](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L28)

___

### getTime

▸ **getTime**(): `Promise`<[`CacheTimestampInterface`](cache.CacheTimestampInterface.md)\>

#### Returns

`Promise`<[`CacheTimestampInterface`](cache.CacheTimestampInterface.md)\>

#### Defined in

[cache.ts:35](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L35)

___

### invalidate

▸ **invalidate**(`prefix?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:34](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L34)

___

### set

▸ **set**(`key`, `instance`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:23](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L23)

___

### setList

▸ **setList**(`key`, `instances`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:25](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L25)

___

### setListSafe

▸ **setListSafe**(`key`, `instances`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instances` | `T`[] |
| `setTime` | [`CacheTimestampInterface`](cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:26](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L26)

___

### setSafe

▸ **setSafe**(`key`, `instance`, `setTime`, `overrideTtlSec?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `instance` | `T` |
| `setTime` | [`CacheTimestampInterface`](cache.CacheTimestampInterface.md) |
| `overrideTtlSec?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[cache.ts:24](https://github.com/gapizza/redis/blob/2a117db/cache.ts#L24)
