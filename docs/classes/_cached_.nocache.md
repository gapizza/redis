[@ehacke/redis](../README.md) › ["cached"](../modules/_cached_.md) › [NoCache](_cached_.nocache.md)

# Class: NoCache <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **NoCache**

## Implements

* [CacheInterface](../interfaces/_cache_.cacheinterface.md)‹T›

## Index

### Methods

* [del](_cached_.nocache.md#del)
* [delList](_cached_.nocache.md#dellist)
* [delListSafe](_cached_.nocache.md#dellistsafe)
* [delLists](_cached_.nocache.md#dellists)
* [delSafe](_cached_.nocache.md#delsafe)
* [disable](_cached_.nocache.md#disable)
* [enable](_cached_.nocache.md#enable)
* [get](_cached_.nocache.md#get)
* [getList](_cached_.nocache.md#getlist)
* [getTime](_cached_.nocache.md#gettime)
* [invalidate](_cached_.nocache.md#invalidate)
* [set](_cached_.nocache.md#set)
* [setList](_cached_.nocache.md#setlist)
* [setListSafe](_cached_.nocache.md#setlistsafe)
* [setSafe](_cached_.nocache.md#setsafe)

## Methods

###  del

▸ **del**(): *Promise‹void›*

*Defined in [cached.ts:19](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L19)*

**Returns:** *Promise‹void›*

___

###  delList

▸ **delList**(): *Promise‹void›*

*Defined in [cached.ts:23](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L23)*

**Returns:** *Promise‹void›*

___

###  delListSafe

▸ **delListSafe**(): *Promise‹void›*

*Defined in [cached.ts:27](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L27)*

**Returns:** *Promise‹void›*

___

###  delLists

▸ **delLists**(): *Promise‹void›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:31](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L31)*

**Returns:** *Promise‹void›*

___

###  delSafe

▸ **delSafe**(): *Promise‹void›*

*Defined in [cached.ts:21](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L21)*

**Returns:** *Promise‹void›*

___

###  disable

▸ **disable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:35](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L35)*

**Returns:** *void*

___

###  enable

▸ **enable**(): *void*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:37](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L37)*

**Returns:** *void*

___

###  get

▸ **get**(): *Promise‹T | null›*

*Defined in [cached.ts:39](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L39)*

**Returns:** *Promise‹T | null›*

___

###  getList

▸ **getList**(): *Promise‹T[] | null›*

*Defined in [cached.ts:43](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L43)*

**Returns:** *Promise‹T[] | null›*

___

###  getTime

▸ **getTime**(): *Promise‹[SetTimeInterface](../interfaces/_cache_.settimeinterface.md)›*

*Implementation of [CacheInterface](../interfaces/_cache_.cacheinterface.md)*

*Defined in [cached.ts:57](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L57)*

**Returns:** *Promise‹[SetTimeInterface](../interfaces/_cache_.settimeinterface.md)›*

___

###  invalidate

▸ **invalidate**(): *Promise‹void›*

*Defined in [cached.ts:47](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L47)*

**Returns:** *Promise‹void›*

___

###  set

▸ **set**(): *Promise‹void›*

*Defined in [cached.ts:49](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L49)*

**Returns:** *Promise‹void›*

___

###  setList

▸ **setList**(): *Promise‹void›*

*Defined in [cached.ts:53](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L53)*

**Returns:** *Promise‹void›*

___

###  setListSafe

▸ **setListSafe**(): *Promise‹void›*

*Defined in [cached.ts:55](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L55)*

**Returns:** *Promise‹void›*

___

###  setSafe

▸ **setSafe**(): *Promise‹void›*

*Defined in [cached.ts:51](https://github.com/ehacke/redis/blob/07fa980/cached.ts#L51)*

**Returns:** *Promise‹void›*
