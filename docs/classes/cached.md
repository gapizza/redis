[@gapizza/redis](../README.md) / Cached

# Class: Cached<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](cached.md#constructor)

### Properties

- [\_cache](cached.md#_cache)

### Accessors

- [cache](cached.md#cache)

### Methods

- [configureCache](cached.md#configurecache)

## Constructors

### constructor

\+ **new Cached**<T\>(): [*Cached*](cached.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

**Returns:** [*Cached*](cached.md)<T\>

Defined in: [cached.ts:70](https://github.com/gapizza/redis/blob/8bff90f/cached.ts#L70)

## Properties

### \_cache

• `Private` **\_cache**: *CacheInterface*<T\>

Defined in: [cached.ts:97](https://github.com/gapizza/redis/blob/8bff90f/cached.ts#L97)

## Accessors

### cache

• get **cache**(): *CacheInterface*<T\>

Cache getter

**Returns:** *CacheInterface*<T\>

Defined in: [cached.ts:93](https://github.com/gapizza/redis/blob/8bff90f/cached.ts#L93)

## Methods

### configureCache

▸ **configureCache**(`services`: ServicesInterface, `config`: *ConfigInterface*<T\>): *void*

Initialize cache configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | ServicesInterface |
| `config` | *ConfigInterface*<T\> |

**Returns:** *void*

Defined in: [cached.ts:84](https://github.com/gapizza/redis/blob/8bff90f/cached.ts#L84)
