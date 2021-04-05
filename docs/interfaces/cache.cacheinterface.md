[@gapizza/redis](../README.md) / [cache](../modules/cache.md) / CacheInterface

# Interface: CacheInterface<T\>

[cache](../modules/cache.md).CacheInterface

## Type parameters

Name |
:------ |
`T` |

## Implemented by

* [*Cache*](../classes/cache.cache-1.md)

## Table of contents

### Methods

- [del](cache.cacheinterface.md#del)
- [delList](cache.cacheinterface.md#dellist)
- [delListSafe](cache.cacheinterface.md#dellistsafe)
- [delLists](cache.cacheinterface.md#dellists)
- [delSafe](cache.cacheinterface.md#delsafe)
- [disable](cache.cacheinterface.md#disable)
- [enable](cache.cacheinterface.md#enable)
- [get](cache.cacheinterface.md#get)
- [getList](cache.cacheinterface.md#getlist)
- [getTime](cache.cacheinterface.md#gettime)
- [invalidate](cache.cacheinterface.md#invalidate)
- [set](cache.cacheinterface.md#set)
- [setList](cache.cacheinterface.md#setlist)
- [setListSafe](cache.cacheinterface.md#setlistsafe)
- [setSafe](cache.cacheinterface.md#setsafe)

## Methods

### del

▸ **del**(`key`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:29](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L29)

___

### delList

▸ **delList**(`key`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:31](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L31)

___

### delListSafe

▸ **delListSafe**(`key`: *string*, `setTime`: [*CacheTimestampInterface*](cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`setTime` | [*CacheTimestampInterface*](cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:32](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L32)

___

### delLists

▸ **delLists**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [cache.ts:33](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L33)

___

### delSafe

▸ **delSafe**(`key`: *string*, `setTime`: [*CacheTimestampInterface*](cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`setTime` | [*CacheTimestampInterface*](cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:30](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L30)

___

### disable

▸ **disable**(): *void*

**Returns:** *void*

Defined in: [cache.ts:22](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L22)

___

### enable

▸ **enable**(): *void*

**Returns:** *void*

Defined in: [cache.ts:21](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L21)

___

### get

▸ **get**(`key`: *string*): *Promise*<*null* \| T\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<*null* \| T\>

Defined in: [cache.ts:27](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L27)

___

### getList

▸ **getList**(`key`: *string*): *Promise*<*null* \| T[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<*null* \| T[]\>

Defined in: [cache.ts:28](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L28)

___

### getTime

▸ **getTime**(): *Promise*<[*CacheTimestampInterface*](cache.cachetimestampinterface.md)\>

**Returns:** *Promise*<[*CacheTimestampInterface*](cache.cachetimestampinterface.md)\>

Defined in: [cache.ts:35](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L35)

___

### invalidate

▸ **invalidate**(`prefix?`: *any*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`prefix?` | *any* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:34](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L34)

___

### set

▸ **set**(`key`: *string*, `instance`: T, `overrideTtlSec?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instance` | T |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:23](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L23)

___

### setList

▸ **setList**(`key`: *string*, `instances`: T[], `overrideTtlSec?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instances` | T[] |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:25](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L25)

___

### setListSafe

▸ **setListSafe**(`key`: *string*, `instances`: T[], `setTime`: [*CacheTimestampInterface*](cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instances` | T[] |
`setTime` | [*CacheTimestampInterface*](cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:26](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L26)

___

### setSafe

▸ **setSafe**(`key`: *string*, `instance`: T, `setTime`: [*CacheTimestampInterface*](cache.cachetimestampinterface.md), `overrideTtlSec?`: *number*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`instance` | T |
`setTime` | [*CacheTimestampInterface*](cache.cachetimestampinterface.md) |
`overrideTtlSec?` | *number* |

**Returns:** *Promise*<void\>

Defined in: [cache.ts:24](https://github.com/gapizza/redis/blob/4aeef85/cache.ts#L24)
