[@ehacke/redis](../README.md) › ["cached"](../modules/_cached_.md) › [Cached](_cached_.cached.md)

# Class: Cached <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Cached**

## Index

### Constructors

* [constructor](_cached_.cached.md#constructor)

### Properties

* [_cache](_cached_.cached.md#private-_cache)

### Accessors

* [cache](_cached_.cached.md#cache)

### Methods

* [configureCache](_cached_.cached.md#configurecache)

## Constructors

###  constructor

\+ **new Cached**(): *[Cached](_cached_.cached.md)*

*Defined in [cached.ts:70](https://github.com/ehacke/redis/blob/e965a3d/cached.ts#L70)*

**Returns:** *[Cached](_cached_.cached.md)*

## Properties

### `Private` _cache

• **_cache**: *[CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›*

*Defined in [cached.ts:95](https://github.com/ehacke/redis/blob/e965a3d/cached.ts#L95)*

## Accessors

###  cache

• **get cache**(): *[CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›*

*Defined in [cached.ts:91](https://github.com/ehacke/redis/blob/e965a3d/cached.ts#L91)*

Cache getter

**Returns:** *[CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›*

## Methods

###  configureCache

▸ **configureCache**(`services`: [ServicesInterface](../interfaces/_cache_.servicesinterface.md), `config`: [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T›): *void*

*Defined in [cached.ts:83](https://github.com/ehacke/redis/blob/e965a3d/cached.ts#L83)*

Initialize cache configuration

**Parameters:**

Name | Type |
------ | ------ |
`services` | [ServicesInterface](../interfaces/_cache_.servicesinterface.md) |
`config` | [ConfigInterface](../interfaces/_cache_.configinterface.md)‹T› |

**Returns:** *void*
