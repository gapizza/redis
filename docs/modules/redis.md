[@gapizza/redis](../README.md) / redis

# Module: redis

## Table of contents

### Classes

- [Redis](../classes/redis.redis-1.md)

### Functions

- [processMultiResults](redis.md#processmultiresults)

## Functions

### processMultiResults

▸ **processMultiResults**(`results`: (*string* \| *null* \| *number*)[][]): (*string* \| *null* \| *number*)[]

Process the returned array from a transaction, throwing errors if any exist

#### Parameters:

Name | Type |
:------ | :------ |
`results` | (*string* \| *null* \| *number*)[][] |

**Returns:** (*string* \| *null* \| *number*)[]

Defined in: [redis.ts:21](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L21)
