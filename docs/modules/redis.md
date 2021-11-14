[@gapizza/redis](../README.md) / redis

# Module: redis

## Table of contents

### Classes

- [Redis](../classes/redis.Redis.md)

### Functions

- [processMultiResults](redis.md#processmultiresults)

## Functions

### processMultiResults

▸ `Const` **processMultiResults**(`results`): (``null`` \| `string` \| `number`)[]

Process the returned array from a transaction, throwing errors if any exist

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | (``null`` \| `string` \| `number`)[][] |

#### Returns

(``null`` \| `string` \| `number`)[]

#### Defined in

[redis.ts:21](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L21)
