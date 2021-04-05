[@gapizza/redis](../README.md) / [cached](../modules/cached.md) / Cached

# Class: Cached<T\>

[cached](../modules/cached.md).Cached

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](cached.cached-1.md#constructor)

### Properties

- [\_cache](cached.cached-1.md#_cache)

### Accessors

- [cache](cached.cached-1.md#cache)

### Methods

- [configureCache](cached.cached-1.md#configurecache)

## Constructors

### constructor

\+ **new Cached**<T\>(): [*Cached*](cached.cached-1.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

**Returns:** [*Cached*](cached.cached-1.md)<T\>

Defined in: [cached.ts:70](https://github.com/gapizza/redis/blob/4aeef85/cached.ts#L70)

## Properties

### \_cache

• `Private` **\_cache**: [*CacheInterface*](../interfaces/cache.cacheinterface.md)<T\>

Defined in: [cached.ts:97](https://github.com/gapizza/redis/blob/4aeef85/cached.ts#L97)

## Accessors

### cache

• get **cache**(): [*CacheInterface*](../interfaces/cache.cacheinterface.md)<T\>

Cache getter

**Returns:** [*CacheInterface*](../interfaces/cache.cacheinterface.md)<T\>

Defined in: [cached.ts:93](https://github.com/gapizza/redis/blob/4aeef85/cached.ts#L93)

## Methods

### configureCache

▸ **configureCache**(`services`: ServicesInterface, `config`: *ConfigInterface*<T\>): *void*

Initialize cache configuration

#### Parameters:

Name | Type |
:------ | :------ |
`services` | ServicesInterface |
`config` | *ConfigInterface*<T\> |

**Returns:** *void*

Defined in: [cached.ts:84](https://github.com/gapizza/redis/blob/4aeef85/cached.ts#L84)
