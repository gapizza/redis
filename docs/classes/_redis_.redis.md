[@ehacke/redis](../README.md) › ["redis"](../modules/_redis_.md) › [Redis](_redis_.redis.md)

# Class: Redis

## Hierarchy

* Redis

  ↳ **Redis**

## Index

### Constructors

* [constructor](_redis_.redis.md#constructor)

### Properties

* [NAME](_redis_.redis.md#name)
* [Promise](_redis_.redis.md#promise)
* [blpop](_redis_.redis.md#blpop)
* [brpop](_redis_.redis.md#brpop)
* [client](_redis_.redis.md#client)
* [cluster](_redis_.redis.md#cluster)
* [debounced](_redis_.redis.md#readonly-debounced)
* [debug](_redis_.redis.md#debug)
* [del](_redis_.redis.md#del)
* [eval](_redis_.redis.md#eval)
* [evalsha](_redis_.redis.md#evalsha)
* [hdel](_redis_.redis.md#hdel)
* [hmget](_redis_.redis.md#hmget)
* [hmset](_redis_.redis.md#hmset)
* [hscan](_redis_.redis.md#hscan)
* [lpush](_redis_.redis.md#lpush)
* [lpushBuffer](_redis_.redis.md#lpushbuffer)
* [lpushx](_redis_.redis.md#lpushx)
* [mget](_redis_.redis.md#mget)
* [migrate](_redis_.redis.md#migrate)
* [mset](_redis_.redis.md#mset)
* [msetnx](_redis_.redis.md#msetnx)
* [object](_redis_.redis.md#object)
* [pfadd](_redis_.redis.md#pfadd)
* [pfcount](_redis_.redis.md#pfcount)
* [pfmerge](_redis_.redis.md#pfmerge)
* [psubscribe](_redis_.redis.md#psubscribe)
* [punsubscribe](_redis_.redis.md#punsubscribe)
* [redlock](_redis_.redis.md#readonly-redlock)
* [restore](_redis_.redis.md#restore)
* [rpush](_redis_.redis.md#rpush)
* [rpushBuffer](_redis_.redis.md#rpushbuffer)
* [rpushx](_redis_.redis.md#rpushx)
* [sadd](_redis_.redis.md#sadd)
* [script](_redis_.redis.md#script)
* [sdiff](_redis_.redis.md#sdiff)
* [sdiffstore](_redis_.redis.md#sdiffstore)
* [sinter](_redis_.redis.md#sinter)
* [sinterstore](_redis_.redis.md#sinterstore)
* [sort](_redis_.redis.md#sort)
* [srem](_redis_.redis.md#srem)
* [sscan](_redis_.redis.md#sscan)
* [status](_redis_.redis.md#status)
* [subscribe](_redis_.redis.md#subscribe)
* [sunion](_redis_.redis.md#sunion)
* [sunionstore](_redis_.redis.md#sunionstore)
* [unlink](_redis_.redis.md#unlink)
* [unsubscribe](_redis_.redis.md#unsubscribe)
* [watch](_redis_.redis.md#watch)
* [xack](_redis_.redis.md#xack)
* [xadd](_redis_.redis.md#xadd)
* [xclaim](_redis_.redis.md#xclaim)
* [xdel](_redis_.redis.md#xdel)
* [xgroup](_redis_.redis.md#xgroup)
* [xinfo](_redis_.redis.md#xinfo)
* [xpending](_redis_.redis.md#xpending)
* [xrange](_redis_.redis.md#xrange)
* [xread](_redis_.redis.md#xread)
* [xreadgroup](_redis_.redis.md#xreadgroup)
* [xrevrange](_redis_.redis.md#xrevrange)
* [xtrim](_redis_.redis.md#xtrim)
* [zadd](_redis_.redis.md#zadd)
* [zinterstore](_redis_.redis.md#zinterstore)
* [zrem](_redis_.redis.md#zrem)
* [zscan](_redis_.redis.md#zscan)
* [zunionstore](_redis_.redis.md#zunionstore)

### Methods

* [addListener](_redis_.redis.md#addlistener)
* [append](_redis_.redis.md#append)
* [auth](_redis_.redis.md#auth)
* [bgrewriteaof](_redis_.redis.md#bgrewriteaof)
* [bgsave](_redis_.redis.md#bgsave)
* [bitcount](_redis_.redis.md#bitcount)
* [brpoplpush](_redis_.redis.md#brpoplpush)
* [config](_redis_.redis.md#config)
* [connect](_redis_.redis.md#connect)
* [createBuiltinCommand](_redis_.redis.md#createbuiltincommand)
* [createRedlock](_redis_.redis.md#createredlock)
* [dbsize](_redis_.redis.md#dbsize)
* [debounce](_redis_.redis.md#debounce)
* [decr](_redis_.redis.md#decr)
* [decrby](_redis_.redis.md#decrby)
* [defineCommand](_redis_.redis.md#definecommand)
* [discard](_redis_.redis.md#discard)
* [disconnect](_redis_.redis.md#disconnect)
* [dump](_redis_.redis.md#dump)
* [duplicate](_redis_.redis.md#duplicate)
* [echo](_redis_.redis.md#echo)
* [emit](_redis_.redis.md#emit)
* [eventNames](_redis_.redis.md#eventnames)
* [exec](_redis_.redis.md#exec)
* [exists](_redis_.redis.md#exists)
* [expire](_redis_.redis.md#expire)
* [expireat](_redis_.redis.md#expireat)
* [flushall](_redis_.redis.md#flushall)
* [flushdb](_redis_.redis.md#flushdb)
* [get](_redis_.redis.md#get)
* [getBuffer](_redis_.redis.md#getbuffer)
* [getBuiltinCommands](_redis_.redis.md#getbuiltincommands)
* [getMaxListeners](_redis_.redis.md#getmaxlisteners)
* [getbit](_redis_.redis.md#getbit)
* [getrange](_redis_.redis.md#getrange)
* [getset](_redis_.redis.md#getset)
* [hexists](_redis_.redis.md#hexists)
* [hget](_redis_.redis.md#hget)
* [hgetBuffer](_redis_.redis.md#hgetbuffer)
* [hgetall](_redis_.redis.md#hgetall)
* [hincrby](_redis_.redis.md#hincrby)
* [hincrbyfloat](_redis_.redis.md#hincrbyfloat)
* [hkeys](_redis_.redis.md#hkeys)
* [hlen](_redis_.redis.md#hlen)
* [hscanStream](_redis_.redis.md#hscanstream)
* [hset](_redis_.redis.md#hset)
* [hsetBuffer](_redis_.redis.md#hsetbuffer)
* [hsetnx](_redis_.redis.md#hsetnx)
* [hvals](_redis_.redis.md#hvals)
* [incr](_redis_.redis.md#incr)
* [incrby](_redis_.redis.md#incrby)
* [incrbyfloat](_redis_.redis.md#incrbyfloat)
* [info](_redis_.redis.md#info)
* [keys](_redis_.redis.md#keys)
* [lastsave](_redis_.redis.md#lastsave)
* [lindex](_redis_.redis.md#lindex)
* [linsert](_redis_.redis.md#linsert)
* [listenerCount](_redis_.redis.md#listenercount)
* [listeners](_redis_.redis.md#listeners)
* [llen](_redis_.redis.md#llen)
* [lock](_redis_.redis.md#lock)
* [lpop](_redis_.redis.md#lpop)
* [lpopBuffer](_redis_.redis.md#lpopbuffer)
* [lrange](_redis_.redis.md#lrange)
* [lrangeBuffer](_redis_.redis.md#lrangebuffer)
* [lrem](_redis_.redis.md#lrem)
* [lset](_redis_.redis.md#lset)
* [ltrim](_redis_.redis.md#ltrim)
* [monitor](_redis_.redis.md#monitor)
* [move](_redis_.redis.md#move)
* [multi](_redis_.redis.md#multi)
* [off](_redis_.redis.md#off)
* [on](_redis_.redis.md#on)
* [once](_redis_.redis.md#once)
* [persist](_redis_.redis.md#persist)
* [pexpire](_redis_.redis.md#pexpire)
* [pexpireat](_redis_.redis.md#pexpireat)
* [ping](_redis_.redis.md#ping)
* [pipeline](_redis_.redis.md#pipeline)
* [prependListener](_redis_.redis.md#prependlistener)
* [prependOnceListener](_redis_.redis.md#prependoncelistener)
* [psetex](_redis_.redis.md#psetex)
* [pttl](_redis_.redis.md#pttl)
* [publish](_redis_.redis.md#publish)
* [publishBuffer](_redis_.redis.md#publishbuffer)
* [quit](_redis_.redis.md#quit)
* [randomkey](_redis_.redis.md#randomkey)
* [rawListeners](_redis_.redis.md#rawlisteners)
* [removeAllListeners](_redis_.redis.md#removealllisteners)
* [removeListener](_redis_.redis.md#removelistener)
* [rename](_redis_.redis.md#rename)
* [renamenx](_redis_.redis.md#renamenx)
* [rpop](_redis_.redis.md#rpop)
* [rpoplpush](_redis_.redis.md#rpoplpush)
* [rpoplpushBuffer](_redis_.redis.md#rpoplpushbuffer)
* [save](_redis_.redis.md#save)
* [scan](_redis_.redis.md#scan)
* [scanPromise](_redis_.redis.md#scanpromise)
* [scanStream](_redis_.redis.md#scanstream)
* [scard](_redis_.redis.md#scard)
* [select](_redis_.redis.md#select)
* [sendCommand](_redis_.redis.md#sendcommand)
* [send_command](_redis_.redis.md#send_command)
* [set](_redis_.redis.md#set)
* [setBuffer](_redis_.redis.md#setbuffer)
* [setMaxListeners](_redis_.redis.md#setmaxlisteners)
* [setbit](_redis_.redis.md#setbit)
* [setex](_redis_.redis.md#setex)
* [setnx](_redis_.redis.md#setnx)
* [setrange](_redis_.redis.md#setrange)
* [shutdown](_redis_.redis.md#shutdown)
* [sismember](_redis_.redis.md#sismember)
* [slaveof](_redis_.redis.md#slaveof)
* [smembers](_redis_.redis.md#smembers)
* [smove](_redis_.redis.md#smove)
* [spop](_redis_.redis.md#spop)
* [srandmember](_redis_.redis.md#srandmember)
* [sscanStream](_redis_.redis.md#sscanstream)
* [strlen](_redis_.redis.md#strlen)
* [substr](_redis_.redis.md#substr)
* [sync](_redis_.redis.md#sync)
* [time](_redis_.redis.md#time)
* [ttl](_redis_.redis.md#ttl)
* [type](_redis_.redis.md#type)
* [unwatch](_redis_.redis.md#unwatch)
* [xlen](_redis_.redis.md#xlen)
* [zaddBuffer](_redis_.redis.md#zaddbuffer)
* [zcard](_redis_.redis.md#zcard)
* [zcount](_redis_.redis.md#zcount)
* [zincrby](_redis_.redis.md#zincrby)
* [zrange](_redis_.redis.md#zrange)
* [zrangebyscore](_redis_.redis.md#zrangebyscore)
* [zrank](_redis_.redis.md#zrank)
* [zremrangebyrank](_redis_.redis.md#zremrangebyrank)
* [zremrangebyscore](_redis_.redis.md#zremrangebyscore)
* [zrevrange](_redis_.redis.md#zrevrange)
* [zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)
* [zrevrank](_redis_.redis.md#zrevrank)
* [zscanPromise](_redis_.redis.md#zscanpromise)
* [zscanStream](_redis_.redis.md#zscanstream)
* [zscore](_redis_.redis.md#zscore)

### Object literals

* [CONSTANTS](_redis_.redis.md#static-readonly-constants)

## Constructors

###  constructor

\+ **new Redis**(...`args`: any[]): *[Redis](_redis_.redis.md)*

*Defined in [redis.ts:46](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L46)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] |   |

**Returns:** *[Redis](_redis_.redis.md)*

## Properties

###  NAME

• **NAME**: *string*

*Defined in [redis.ts:60](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L60)*

___

###  Promise

• **Promise**: *typeof Promise*

*Inherited from [Redis](_redis_.redis.md).[Promise](_redis_.redis.md#promise)*

Defined in node_modules/@types/ioredis/index.d.ts:841

___

###  blpop

• **blpop**: *OverloadedBlockingListCommand‹KeyType, [string, string]›*

*Inherited from [Redis](_redis_.redis.md).[blpop](_redis_.redis.md#blpop)*

Defined in node_modules/@types/ioredis/index.d.ts:319

___

###  brpop

• **brpop**: *OverloadedBlockingListCommand‹KeyType, [string, string]›*

*Inherited from [Redis](_redis_.redis.md).[brpop](_redis_.redis.md#brpop)*

Defined in node_modules/@types/ioredis/index.d.ts:317

___

###  client

• **client**: *OverloadedSubCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[client](_redis_.redis.md#client)*

Defined in node_modules/@types/ioredis/index.d.ts:736

___

###  cluster

• **cluster**: *OverloadedSubCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[cluster](_redis_.redis.md#cluster)*

Defined in node_modules/@types/ioredis/index.d.ts:725

___

### `Readonly` debounced

• **debounced**: *object*

*Defined in [redis.ts:64](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L64)*

#### Type declaration:

* \[ **k**: *string*\]: Timeout

___

###  debug

• **debug**: *OverloadedSubCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[debug](_redis_.redis.md#debug)*

Defined in node_modules/@types/ioredis/index.d.ts:698

___

###  del

• **del**: *OverloadedListCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[del](_redis_.redis.md#del)*

Defined in node_modules/@types/ioredis/index.d.ts:259

___

###  eval

• **eval**: *OverloadedEvalCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[eval](_redis_.redis.md#eval)*

Defined in node_modules/@types/ioredis/index.d.ts:738

___

###  evalsha

• **evalsha**: *OverloadedEvalCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[evalsha](_redis_.redis.md#evalsha)*

Defined in node_modules/@types/ioredis/index.d.ts:740

___

###  hdel

• **hdel**: *OverloadedKeyCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[hdel](_redis_.redis.md#hdel)*

Defined in node_modules/@types/ioredis/index.d.ts:563

___

###  hmget

• **hmget**: *OverloadedKeyCommand‹KeyType, Array‹string | null››*

*Inherited from [Redis](_redis_.redis.md).[hmget](_redis_.redis.md#hmget)*

Defined in node_modules/@types/ioredis/index.d.ts:555

___

###  hmset

• **hmset**: *OverloadedKeyedHashCommand‹ValueType, Ok›*

*Inherited from [Redis](_redis_.redis.md).[hmset](_redis_.redis.md#hmset)*

Defined in node_modules/@types/ioredis/index.d.ts:553

___

###  hscan

• **hscan**: *OverloadedKeyCommand‹ValueType, [string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[hscan](_redis_.redis.md#hscan)*

Defined in node_modules/@types/ioredis/index.d.ts:795

___

###  lpush

• **lpush**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[lpush](_redis_.redis.md#lpush)*

Defined in node_modules/@types/ioredis/index.d.ts:292

___

###  lpushBuffer

• **lpushBuffer**: *OverloadedKeyCommand‹Buffer, number›*

*Inherited from [Redis](_redis_.redis.md).[lpushBuffer](_redis_.redis.md#lpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:293

___

###  lpushx

• **lpushx**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[lpushx](_redis_.redis.md#lpushx)*

Defined in node_modules/@types/ioredis/index.d.ts:297

___

###  mget

• **mget**: *OverloadedListCommand‹KeyType, Array‹string | null››*

*Inherited from [Redis](_redis_.redis.md).[mget](_redis_.redis.md#mget)*

Defined in node_modules/@types/ioredis/index.d.ts:287

___

###  migrate

• **migrate**: *OverloadedListCommand‹ValueType, Ok | "NOKEY"›*

*Inherited from [Redis](_redis_.redis.md).[migrate](_redis_.redis.md#migrate)*

Defined in node_modules/@types/ioredis/index.d.ts:729

___

###  mset

• **mset**: *OverloadedHashCommand‹ValueType, Ok›*

*Inherited from [Redis](_redis_.redis.md).[mset](_redis_.redis.md#mset)*

Defined in node_modules/@types/ioredis/index.d.ts:592

___

###  msetnx

• **msetnx**: *OverloadedHashCommand‹ValueType, BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[msetnx](_redis_.redis.md#msetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:593

___

###  object

• **object**: *OverloadedListCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[object](_redis_.redis.md#object)*

Defined in node_modules/@types/ioredis/index.d.ts:734

___

###  pfadd

• **pfadd**: *OverloadedKeyCommand‹string, number›*

*Inherited from [Redis](_redis_.redis.md).[pfadd](_redis_.redis.md#pfadd)*

Defined in node_modules/@types/ioredis/index.d.ts:801

___

###  pfcount

• **pfcount**: *OverloadedListCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[pfcount](_redis_.redis.md#pfcount)*

Defined in node_modules/@types/ioredis/index.d.ts:803

___

###  pfmerge

• **pfmerge**: *OverloadedKeyCommand‹KeyType, Ok›*

*Inherited from [Redis](_redis_.redis.md).[pfmerge](_redis_.redis.md#pfmerge)*

Defined in node_modules/@types/ioredis/index.d.ts:799

___

###  psubscribe

• **psubscribe**: *OverloadedListCommand‹string, number›*

*Inherited from [Redis](_redis_.redis.md).[psubscribe](_redis_.redis.md#psubscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:711

___

###  punsubscribe

• **punsubscribe**: *OverloadedCommand‹string, number›*

*Inherited from [Redis](_redis_.redis.md).[punsubscribe](_redis_.redis.md#punsubscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:713

___

### `Readonly` redlock

• **redlock**: *Redlock*

*Defined in [redis.ts:62](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L62)*

___

###  restore

• **restore**: *OverloadedListCommand‹ValueType, Ok›*

*Inherited from [Redis](_redis_.redis.md).[restore](_redis_.redis.md#restore)*

Defined in node_modules/@types/ioredis/index.d.ts:727

___

###  rpush

• **rpush**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[rpush](_redis_.redis.md#rpush)*

Defined in node_modules/@types/ioredis/index.d.ts:289

___

###  rpushBuffer

• **rpushBuffer**: *OverloadedKeyCommand‹Buffer, number›*

*Inherited from [Redis](_redis_.redis.md).[rpushBuffer](_redis_.redis.md#rpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:290

___

###  rpushx

• **rpushx**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[rpushx](_redis_.redis.md#rpushx)*

Defined in node_modules/@types/ioredis/index.d.ts:295

___

###  sadd

• **sadd**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[sadd](_redis_.redis.md#sadd)*

Defined in node_modules/@types/ioredis/index.d.ts:351

___

###  script

• **script**: *OverloadedSubCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[script](_redis_.redis.md#script)*

Defined in node_modules/@types/ioredis/index.d.ts:742

___

###  sdiff

• **sdiff**: *OverloadedListCommand‹KeyType, string[]›*

*Inherited from [Redis](_redis_.redis.md).[sdiff](_redis_.redis.md#sdiff)*

Defined in node_modules/@types/ioredis/index.d.ts:382

___

###  sdiffstore

• **sdiffstore**: *OverloadedKeyCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[sdiffstore](_redis_.redis.md#sdiffstore)*

Defined in node_modules/@types/ioredis/index.d.ts:384

___

###  sinter

• **sinter**: *OverloadedListCommand‹KeyType, string[]›*

*Inherited from [Redis](_redis_.redis.md).[sinter](_redis_.redis.md#sinter)*

Defined in node_modules/@types/ioredis/index.d.ts:374

___

###  sinterstore

• **sinterstore**: *OverloadedKeyCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[sinterstore](_redis_.redis.md#sinterstore)*

Defined in node_modules/@types/ioredis/index.d.ts:376

___

###  sort

• **sort**: *OverloadedListCommand‹KeyType | number, string[] | number›*

*Inherited from [Redis](_redis_.redis.md).[sort](_redis_.redis.md#sort)*

Defined in node_modules/@types/ioredis/index.d.ts:674

___

###  srem

• **srem**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[srem](_redis_.redis.md#srem)*

Defined in node_modules/@types/ioredis/index.d.ts:353

___

###  sscan

• **sscan**: *OverloadedKeyCommand‹ValueType, [string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[sscan](_redis_.redis.md#sscan)*

Defined in node_modules/@types/ioredis/index.d.ts:793

___

###  status

• **status**: *string*

*Inherited from [Redis](_redis_.redis.md).[status](_redis_.redis.md#status)*

Defined in node_modules/@types/ioredis/index.d.ts:842

___

###  subscribe

• **subscribe**: *OverloadedListCommand‹string, number›*

*Inherited from [Redis](_redis_.redis.md).[subscribe](_redis_.redis.md#subscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:707

___

###  sunion

• **sunion**: *OverloadedListCommand‹KeyType, string[]›*

*Inherited from [Redis](_redis_.redis.md).[sunion](_redis_.redis.md#sunion)*

Defined in node_modules/@types/ioredis/index.d.ts:378

___

###  sunionstore

• **sunionstore**: *OverloadedKeyCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[sunionstore](_redis_.redis.md#sunionstore)*

Defined in node_modules/@types/ioredis/index.d.ts:380

___

###  unlink

• **unlink**: *OverloadedListCommand‹KeyType, number›*

*Inherited from [Redis](_redis_.redis.md).[unlink](_redis_.redis.md#unlink)*

Defined in node_modules/@types/ioredis/index.d.ts:261

___

###  unsubscribe

• **unsubscribe**: *OverloadedCommand‹string, number›*

*Inherited from [Redis](_redis_.redis.md).[unsubscribe](_redis_.redis.md#unsubscribe)*

Defined in node_modules/@types/ioredis/index.d.ts:709

___

###  watch

• **watch**: *OverloadedListCommand‹KeyType, Ok›*

*Inherited from [Redis](_redis_.redis.md).[watch](_redis_.redis.md#watch)*

Defined in node_modules/@types/ioredis/index.d.ts:720

___

###  xack

• **xack**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[xack](_redis_.redis.md#xack)*

Defined in node_modules/@types/ioredis/index.d.ts:812

___

###  xadd

• **xadd**: *OverloadedKeyCommand‹ValueType, string›*

*Inherited from [Redis](_redis_.redis.md).[xadd](_redis_.redis.md#xadd)*

Defined in node_modules/@types/ioredis/index.d.ts:814

___

###  xclaim

• **xclaim**: *OverloadedKeyCommand‹ValueType, Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xclaim](_redis_.redis.md#xclaim)*

Defined in node_modules/@types/ioredis/index.d.ts:816

___

###  xdel

• **xdel**: *OverloadedKeyCommand‹string, number›*

*Inherited from [Redis](_redis_.redis.md).[xdel](_redis_.redis.md#xdel)*

Defined in node_modules/@types/ioredis/index.d.ts:818

___

###  xgroup

• **xgroup**: *OverloadedSubCommand‹ValueType, Ok›*

*Inherited from [Redis](_redis_.redis.md).[xgroup](_redis_.redis.md#xgroup)*

Defined in node_modules/@types/ioredis/index.d.ts:820

___

###  xinfo

• **xinfo**: *OverloadedSubCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[xinfo](_redis_.redis.md#xinfo)*

Defined in node_modules/@types/ioredis/index.d.ts:822

___

###  xpending

• **xpending**: *OverloadedKeyCommand‹ValueType, any›*

*Inherited from [Redis](_redis_.redis.md).[xpending](_redis_.redis.md#xpending)*

Defined in node_modules/@types/ioredis/index.d.ts:827

___

###  xrange

• **xrange**: *OverloadedKeyCommand‹ValueType, Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xrange](_redis_.redis.md#xrange)*

Defined in node_modules/@types/ioredis/index.d.ts:829

___

###  xread

• **xread**: *OverloadedListCommand‹ValueType, Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xread](_redis_.redis.md#xread)*

Defined in node_modules/@types/ioredis/index.d.ts:831

___

###  xreadgroup

• **xreadgroup**: *OverloadedKeyCommand‹ValueType, Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xreadgroup](_redis_.redis.md#xreadgroup)*

Defined in node_modules/@types/ioredis/index.d.ts:833

___

###  xrevrange

• **xrevrange**: *OverloadedKeyCommand‹ValueType, Array‹[string, string[]]››*

*Inherited from [Redis](_redis_.redis.md).[xrevrange](_redis_.redis.md#xrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:835

___

###  xtrim

• **xtrim**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[xtrim](_redis_.redis.md#xtrim)*

Defined in node_modules/@types/ioredis/index.d.ts:837

___

###  zadd

• **zadd**: *OverloadedKeyCommand‹KeyType | number, number | string›*

*Inherited from [Redis](_redis_.redis.md).[zadd](_redis_.redis.md#zadd)*

Defined in node_modules/@types/ioredis/index.d.ts:389

___

###  zinterstore

• **zinterstore**: *OverloadedKeyCommand‹KeyType | number, number›*

*Inherited from [Redis](_redis_.redis.md).[zinterstore](_redis_.redis.md#zinterstore)*

Defined in node_modules/@types/ioredis/index.d.ts:407

___

###  zrem

• **zrem**: *OverloadedKeyCommand‹ValueType, number›*

*Inherited from [Redis](_redis_.redis.md).[zrem](_redis_.redis.md#zrem)*

Defined in node_modules/@types/ioredis/index.d.ts:397

___

###  zscan

• **zscan**: *OverloadedKeyCommand‹ValueType, [string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[zscan](_redis_.redis.md#zscan)*

Defined in node_modules/@types/ioredis/index.d.ts:797

___

###  zunionstore

• **zunionstore**: *OverloadedKeyCommand‹KeyType | number, number›*

*Inherited from [Redis](_redis_.redis.md).[zunionstore](_redis_.redis.md#zunionstore)*

Defined in node_modules/@types/ioredis/index.d.ts:405

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[addListener](_redis_.redis.md#addlistener)*

Defined in node_modules/@types/node/globals.d.ts:554

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  append

▸ **append**(`key`: KeyType, `value`: ValueType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[append](_redis_.redis.md#append)*

Defined in node_modules/@types/ioredis/index.d.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **append**(`key`: KeyType, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[append](_redis_.redis.md#append)*

Defined in node_modules/@types/ioredis/index.d.ts:254

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  auth

▸ **auth**(`password`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[auth](_redis_.redis.md#auth)*

Defined in node_modules/@types/ioredis/index.d.ts:628

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **auth**(`password`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[auth](_redis_.redis.md#auth)*

Defined in node_modules/@types/ioredis/index.d.ts:629

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *Promise‹string›*

___

###  bgrewriteaof

▸ **bgrewriteaof**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[bgrewriteaof](_redis_.redis.md#bgrewriteaof)*

Defined in node_modules/@types/ioredis/index.d.ts:644

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **bgrewriteaof**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[bgrewriteaof](_redis_.redis.md#bgrewriteaof)*

Defined in node_modules/@types/ioredis/index.d.ts:645

**Returns:** *Promise‹string›*

___

###  bgsave

▸ **bgsave**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[bgsave](_redis_.redis.md#bgsave)*

Defined in node_modules/@types/ioredis/index.d.ts:641

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **bgsave**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[bgsave](_redis_.redis.md#bgsave)*

Defined in node_modules/@types/ioredis/index.d.ts:642

**Returns:** *Promise‹string›*

___

###  bitcount

▸ **bitcount**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:193

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **bitcount**(`key`: KeyType, `start`: number, `end`: number, `callback`: function): *void*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:194

**Parameters:**

▪ **key**: *KeyType*

▪ **start**: *number*

▪ **end**: *number*

▪ **callback**: *function*

▸ (`err`: Error, `res`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error |
`res` | number |

**Returns:** *void*

▸ **bitcount**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:195

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

▸ **bitcount**(`key`: KeyType, `start`: number, `end`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[bitcount](_redis_.redis.md#bitcount)*

Defined in node_modules/@types/ioredis/index.d.ts:196

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |

**Returns:** *Promise‹number›*

___

###  brpoplpush

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[brpoplpush](_redis_.redis.md#brpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:321

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`timeout` | number |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **brpoplpush**(`source`: string, `destination`: string, `timeout`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[brpoplpush](_redis_.redis.md#brpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:322

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`timeout` | number |

**Returns:** *Promise‹string›*

___

###  config

▸ **config**(`op`: "GET", `cfg`: string): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:700

**Parameters:**

Name | Type |
------ | ------ |
`op` | "GET" |
`cfg` | string |

**Returns:** *Promise‹string[]›*

▸ **config**(`op`: "GET", `cfg`: string, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:701

**Parameters:**

Name | Type |
------ | ------ |
`op` | "GET" |
`cfg` | string |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **config**(`op`: "REWRITE" | "RESETSTAT"): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:702

**Parameters:**

Name | Type |
------ | ------ |
`op` | "REWRITE" &#124; "RESETSTAT" |

**Returns:** *Promise‹Ok›*

▸ **config**(`op`: "REWRITE" | "RESETSTAT", `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:703

**Parameters:**

Name | Type |
------ | ------ |
`op` | "REWRITE" &#124; "RESETSTAT" |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **config**(`op`: "SET", `key`: string, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:704

**Parameters:**

Name | Type |
------ | ------ |
`op` | "SET" |
`key` | string |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

▸ **config**(`op`: "SET", `key`: string, `value`: ValueType, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[config](_redis_.redis.md#config)*

Defined in node_modules/@types/ioredis/index.d.ts:705

**Parameters:**

Name | Type |
------ | ------ |
`op` | "SET" |
`key` | string |
`value` | ValueType |
`callback` | Callback‹Ok› |

**Returns:** *void*

___

###  connect

▸ **connect**(`callback?`: undefined | function): *Promise‹void›*

*Inherited from [Redis](_redis_.redis.md).[connect](_redis_.redis.md#connect)*

Defined in node_modules/@types/ioredis/index.d.ts:843

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | undefined &#124; function |

**Returns:** *Promise‹void›*

___

###  createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`: string): *object*

*Inherited from [Redis](_redis_.redis.md).[createBuiltinCommand](_redis_.redis.md#createbuiltincommand)*

Defined in node_modules/@types/ioredis/index.d.ts:48

**Parameters:**

Name | Type |
------ | ------ |
`commandName` | string |

**Returns:** *object*

___

###  createRedlock

▸ **createRedlock**(`config`: Options): *Redlock*

*Defined in [redis.ts:110](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L110)*

Get redlock instance

**`link`** https://www.npmjs.com/package/redlock

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | Options | { retryCount: 0 } |

**Returns:** *Redlock*

___

###  dbsize

▸ **dbsize**(`callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[dbsize](_redis_.redis.md#dbsize)*

Defined in node_modules/@types/ioredis/index.d.ts:625

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **dbsize**(): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[dbsize](_redis_.redis.md#dbsize)*

Defined in node_modules/@types/ioredis/index.d.ts:626

**Returns:** *Promise‹number›*

___

###  debounce

▸ **debounce**(`callback`: Function, `key`: string, `timeoutMs`: number, `skewMs`: number): *Promise‹any›*

*Defined in [redis.ts:168](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L168)*

Debounce a callback using Redis and setTimeout locally

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`callback` | Function | - |
`key` | string | - |
`timeoutMs` | number | - |
`skewMs` | number | Redis.CONSTANTS.DEFAULT_SKEW_MS |

**Returns:** *Promise‹any›*

___

###  decr

▸ **decr**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[decr](_redis_.redis.md#decr)*

Defined in node_modules/@types/ioredis/index.d.ts:284

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **decr**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[decr](_redis_.redis.md#decr)*

Defined in node_modules/@types/ioredis/index.d.ts:285

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  decrby

▸ **decrby**(`key`: KeyType, `decrement`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[decrby](_redis_.redis.md#decrby)*

Defined in node_modules/@types/ioredis/index.d.ts:586

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`decrement` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **decrby**(`key`: KeyType, `decrement`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[decrby](_redis_.redis.md#decrby)*

Defined in node_modules/@types/ioredis/index.d.ts:587

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`decrement` | number |

**Returns:** *Promise‹number›*

___

###  defineCommand

▸ **defineCommand**(`name`: string, `definition`: object): *void*

*Inherited from [Redis](_redis_.redis.md).[defineCommand](_redis_.redis.md#definecommand)*

Defined in node_modules/@types/ioredis/index.d.ts:49

**Parameters:**

▪ **name**: *string*

▪ **definition**: *object*

Name | Type |
------ | ------ |
`lua?` | undefined &#124; string |
`numberOfKeys?` | undefined &#124; number |

**Returns:** *void*

___

###  discard

▸ **discard**(`callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[discard](_redis_.redis.md#discard)*

Defined in node_modules/@types/ioredis/index.d.ts:662

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **discard**(): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[discard](_redis_.redis.md#discard)*

Defined in node_modules/@types/ioredis/index.d.ts:663

**Returns:** *Promise‹Ok›*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [Redis](_redis_.redis.md).[disconnect](_redis_.redis.md#disconnect)*

Defined in node_modules/@types/ioredis/index.d.ts:844

**Returns:** *void*

___

###  dump

▸ **dump**(`key`: KeyType, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[dump](_redis_.redis.md#dump)*

Defined in node_modules/@types/ioredis/index.d.ts:731

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **dump**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[dump](_redis_.redis.md#dump)*

Defined in node_modules/@types/ioredis/index.d.ts:732

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  duplicate

▸ **duplicate**(): *Redis*

*Inherited from [Redis](_redis_.redis.md).[duplicate](_redis_.redis.md#duplicate)*

Defined in node_modules/@types/ioredis/index.d.ts:845

**Returns:** *Redis*

___

###  echo

▸ **echo**(`message`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[echo](_redis_.redis.md#echo)*

Defined in node_modules/@types/ioredis/index.d.ts:635

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **echo**(`message`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[echo](_redis_.redis.md#echo)*

Defined in node_modules/@types/ioredis/index.d.ts:636

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *Promise‹string›*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Redis](_redis_.redis.md).[emit](_redis_.redis.md#emit)*

Defined in node_modules/@types/node/globals.d.ts:564

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Redis](_redis_.redis.md).[eventNames](_redis_.redis.md#eventnames)*

Defined in node_modules/@types/node/globals.d.ts:569

**Returns:** *Array‹string | symbol›*

___

###  exec

▸ **exec**(`callback`: Callback‹Array‹[Error | null, string]››): *void*

*Inherited from [Redis](_redis_.redis.md).[exec](_redis_.redis.md#exec)*

Defined in node_modules/@types/ioredis/index.d.ts:659

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹Array‹[Error &#124; null, string]›› |

**Returns:** *void*

▸ **exec**(): *Promise‹Array‹[Error | null, string]››*

*Inherited from [Redis](_redis_.redis.md).[exec](_redis_.redis.md#exec)*

Defined in node_modules/@types/ioredis/index.d.ts:660

**Returns:** *Promise‹Array‹[Error | null, string]››*

___

###  exists

▸ **exists**(...`keys`: KeyType[]): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[exists](_redis_.redis.md#exists)*

Defined in node_modules/@types/ioredis/index.d.ts:263

**Parameters:**

Name | Type |
------ | ------ |
`...keys` | KeyType[] |

**Returns:** *Promise‹number›*

▸ **exists**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[exists](_redis_.redis.md#exists)*

Defined in node_modules/@types/ioredis/index.d.ts:264

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

___

###  expire

▸ **expire**(`key`: KeyType, `seconds`: number, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[expire](_redis_.redis.md#expire)*

Defined in node_modules/@types/ioredis/index.d.ts:610

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`seconds` | number |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **expire**(`key`: KeyType, `seconds`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[expire](_redis_.redis.md#expire)*

Defined in node_modules/@types/ioredis/index.d.ts:611

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`seconds` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  expireat

▸ **expireat**(`key`: KeyType, `timestamp`: number, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[expireat](_redis_.redis.md#expireat)*

Defined in node_modules/@types/ioredis/index.d.ts:616

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`timestamp` | number |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **expireat**(`key`: KeyType, `timestamp`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[expireat](_redis_.redis.md#expireat)*

Defined in node_modules/@types/ioredis/index.d.ts:617

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`timestamp` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  flushall

▸ **flushall**(`callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[flushall](_redis_.redis.md#flushall)*

Defined in node_modules/@types/ioredis/index.d.ts:671

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **flushall**(): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[flushall](_redis_.redis.md#flushall)*

Defined in node_modules/@types/ioredis/index.d.ts:672

**Returns:** *Promise‹Ok›*

___

###  flushdb

▸ **flushdb**(`callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[flushdb](_redis_.redis.md#flushdb)*

Defined in node_modules/@types/ioredis/index.d.ts:668

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **flushdb**(): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[flushdb](_redis_.redis.md#flushdb)*

Defined in node_modules/@types/ioredis/index.d.ts:669

**Returns:** *Promise‹Ok›*

___

###  get

▸ **get**(`key`: KeyType, `callback`: Callback‹string | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[get](_redis_.redis.md#get)*

Defined in node_modules/@types/ioredis/index.d.ts:198

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string &#124; null› |

**Returns:** *void*

▸ **get**(`key`: KeyType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[get](_redis_.redis.md#get)*

Defined in node_modules/@types/ioredis/index.d.ts:199

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string | null›*

___

###  getBuffer

▸ **getBuffer**(`key`: KeyType, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[getBuffer](_redis_.redis.md#getbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:201

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **getBuffer**(`key`: KeyType): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[getBuffer](_redis_.redis.md#getbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:202

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹Buffer›*

___

###  getBuiltinCommands

▸ **getBuiltinCommands**(): *string[]*

*Inherited from [Redis](_redis_.redis.md).[getBuiltinCommands](_redis_.redis.md#getbuiltincommands)*

Defined in node_modules/@types/ioredis/index.d.ts:47

**Returns:** *string[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Redis](_redis_.redis.md).[getMaxListeners](_redis_.redis.md#getmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:561

**Returns:** *number*

___

###  getbit

▸ **getbit**(`key`: KeyType, `offset`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[getbit](_redis_.redis.md#getbit)*

Defined in node_modules/@types/ioredis/index.d.ts:269

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **getbit**(`key`: KeyType, `offset`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[getbit](_redis_.redis.md#getbit)*

Defined in node_modules/@types/ioredis/index.d.ts:270

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |

**Returns:** *Promise‹number›*

___

###  getrange

▸ **getrange**(`key`: KeyType, `start`: number, `end`: number, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[getrange](_redis_.redis.md#getrange)*

Defined in node_modules/@types/ioredis/index.d.ts:275

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **getrange**(`key`: KeyType, `start`: number, `end`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[getrange](_redis_.redis.md#getrange)*

Defined in node_modules/@types/ioredis/index.d.ts:276

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |

**Returns:** *Promise‹string›*

___

###  getset

▸ **getset**(`key`: KeyType, `value`: ValueType, `callback`: Callback‹string | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[getset](_redis_.redis.md#getset)*

Defined in node_modules/@types/ioredis/index.d.ts:589

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`callback` | Callback‹string &#124; null› |

**Returns:** *void*

▸ **getset**(`key`: KeyType, `value`: ValueType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[getset](_redis_.redis.md#getset)*

Defined in node_modules/@types/ioredis/index.d.ts:590

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹string | null›*

___

###  hexists

▸ **hexists**(`key`: KeyType, `field`: string, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[hexists](_redis_.redis.md#hexists)*

Defined in node_modules/@types/ioredis/index.d.ts:577

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **hexists**(`key`: KeyType, `field`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hexists](_redis_.redis.md#hexists)*

Defined in node_modules/@types/ioredis/index.d.ts:578

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  hget

▸ **hget**(`key`: KeyType, `field`: string, `callback`: Callback‹string | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[hget](_redis_.redis.md#hget)*

Defined in node_modules/@types/ioredis/index.d.ts:548

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`callback` | Callback‹string &#124; null› |

**Returns:** *void*

▸ **hget**(`key`: KeyType, `field`: string): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[hget](_redis_.redis.md#hget)*

Defined in node_modules/@types/ioredis/index.d.ts:549

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |

**Returns:** *Promise‹string | null›*

___

###  hgetBuffer

▸ **hgetBuffer**(`key`: KeyType, `field`: string, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[hgetBuffer](_redis_.redis.md#hgetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:550

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **hgetBuffer**(`key`: KeyType, `field`: string): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[hgetBuffer](_redis_.redis.md#hgetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:551

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |

**Returns:** *Promise‹Buffer›*

___

###  hgetall

▸ **hgetall**(`key`: KeyType, `callback`: Callback‹Record‹string, string››): *void*

*Inherited from [Redis](_redis_.redis.md).[hgetall](_redis_.redis.md#hgetall)*

Defined in node_modules/@types/ioredis/index.d.ts:574

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹Record‹string, string›› |

**Returns:** *void*

▸ **hgetall**(`key`: KeyType): *Promise‹Record‹string, string››*

*Inherited from [Redis](_redis_.redis.md).[hgetall](_redis_.redis.md#hgetall)*

Defined in node_modules/@types/ioredis/index.d.ts:575

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹Record‹string, string››*

___

###  hincrby

▸ **hincrby**(`key`: KeyType, `field`: string, `increment`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[hincrby](_redis_.redis.md#hincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:557

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`increment` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **hincrby**(`key`: KeyType, `field`: string, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hincrby](_redis_.redis.md#hincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:558

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  hincrbyfloat

▸ **hincrbyfloat**(`key`: KeyType, `field`: string, `increment`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[hincrbyfloat](_redis_.redis.md#hincrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`increment` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **hincrbyfloat**(`key`: KeyType, `field`: string, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hincrbyfloat](_redis_.redis.md#hincrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:561

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  hkeys

▸ **hkeys**(`key`: KeyType, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[hkeys](_redis_.redis.md#hkeys)*

Defined in node_modules/@types/ioredis/index.d.ts:568

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **hkeys**(`key`: KeyType): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[hkeys](_redis_.redis.md#hkeys)*

Defined in node_modules/@types/ioredis/index.d.ts:569

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string[]›*

___

###  hlen

▸ **hlen**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[hlen](_redis_.redis.md#hlen)*

Defined in node_modules/@types/ioredis/index.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **hlen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[hlen](_redis_.redis.md#hlen)*

Defined in node_modules/@types/ioredis/index.d.ts:566

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  hscanStream

▸ **hscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[hscanStream](_redis_.redis.md#hscanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:809

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  hset

▸ **hset**(`key`: KeyType, `field`: string, `value`: ValueType, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[hset](_redis_.redis.md#hset)*

Defined in node_modules/@types/ioredis/index.d.ts:540

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **hset**(`key`: KeyType, `field`: string, `value`: ValueType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hset](_redis_.redis.md#hset)*

Defined in node_modules/@types/ioredis/index.d.ts:541

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |

**Returns:** *Promise‹BooleanResponse›*

___

###  hsetBuffer

▸ **hsetBuffer**(`key`: KeyType, `field`: string, `value`: ValueType, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[hsetBuffer](_redis_.redis.md#hsetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:542

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **hsetBuffer**(`key`: KeyType, `field`: string, `value`: ValueType): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[hsetBuffer](_redis_.redis.md#hsetbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:543

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |

**Returns:** *Promise‹Buffer›*

___

###  hsetnx

▸ **hsetnx**(`key`: KeyType, `field`: string, `value`: ValueType, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[hsetnx](_redis_.redis.md#hsetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:545

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **hsetnx**(`key`: KeyType, `field`: string, `value`: ValueType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[hsetnx](_redis_.redis.md#hsetnx)*

Defined in node_modules/@types/ioredis/index.d.ts:546

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`field` | string |
`value` | ValueType |

**Returns:** *Promise‹BooleanResponse›*

___

###  hvals

▸ **hvals**(`key`: KeyType, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[hvals](_redis_.redis.md#hvals)*

Defined in node_modules/@types/ioredis/index.d.ts:571

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **hvals**(`key`: KeyType): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[hvals](_redis_.redis.md#hvals)*

Defined in node_modules/@types/ioredis/index.d.ts:572

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string[]›*

___

###  incr

▸ **incr**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[incr](_redis_.redis.md#incr)*

Defined in node_modules/@types/ioredis/index.d.ts:281

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **incr**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[incr](_redis_.redis.md#incr)*

Defined in node_modules/@types/ioredis/index.d.ts:282

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  incrby

▸ **incrby**(`key`: KeyType, `increment`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[incrby](_redis_.redis.md#incrby)*

Defined in node_modules/@types/ioredis/index.d.ts:580

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **incrby**(`key`: KeyType, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[incrby](_redis_.redis.md#incrby)*

Defined in node_modules/@types/ioredis/index.d.ts:581

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  incrbyfloat

▸ **incrbyfloat**(`key`: KeyType, `increment`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[incrbyfloat](_redis_.redis.md#incrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:583

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **incrbyfloat**(`key`: KeyType, `increment`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[incrbyfloat](_redis_.redis.md#incrbyfloat)*

Defined in node_modules/@types/ioredis/index.d.ts:584

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |

**Returns:** *Promise‹number›*

___

###  info

▸ **info**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[info](_redis_.redis.md#info)*

Defined in node_modules/@types/ioredis/index.d.ts:676

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **info**(`section`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[info](_redis_.redis.md#info)*

Defined in node_modules/@types/ioredis/index.d.ts:677

**Parameters:**

Name | Type |
------ | ------ |
`section` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **info**(`section?`: undefined | string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[info](_redis_.redis.md#info)*

Defined in node_modules/@types/ioredis/index.d.ts:678

**Parameters:**

Name | Type |
------ | ------ |
`section?` | undefined &#124; string |

**Returns:** *Promise‹string›*

___

###  keys

▸ **keys**(`pattern`: string, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[keys](_redis_.redis.md#keys)*

Defined in node_modules/@types/ioredis/index.d.ts:622

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **keys**(`pattern`: string): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[keys](_redis_.redis.md#keys)*

Defined in node_modules/@types/ioredis/index.d.ts:623

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | string |

**Returns:** *Promise‹string[]›*

___

###  lastsave

▸ **lastsave**(`callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[lastsave](_redis_.redis.md#lastsave)*

Defined in node_modules/@types/ioredis/index.d.ts:650

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **lastsave**(): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[lastsave](_redis_.redis.md#lastsave)*

Defined in node_modules/@types/ioredis/index.d.ts:651

**Returns:** *Promise‹number›*

___

###  lindex

▸ **lindex**(`key`: KeyType, `index`: number, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[lindex](_redis_.redis.md#lindex)*

Defined in node_modules/@types/ioredis/index.d.ts:327

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`index` | number |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **lindex**(`key`: KeyType, `index`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[lindex](_redis_.redis.md#lindex)*

Defined in node_modules/@types/ioredis/index.d.ts:328

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`index` | number |

**Returns:** *Promise‹string›*

___

###  linsert

▸ **linsert**(`key`: KeyType, `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: ValueType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[linsert](_redis_.redis.md#linsert)*

Defined in node_modules/@types/ioredis/index.d.ts:299

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`direction` | "BEFORE" &#124; "AFTER" |
`pivot` | string |
`value` | ValueType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **linsert**(`key`: KeyType, `direction`: "BEFORE" | "AFTER", `pivot`: string, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[linsert](_redis_.redis.md#linsert)*

Defined in node_modules/@types/ioredis/index.d.ts:306

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`direction` | "BEFORE" &#124; "AFTER" |
`pivot` | string |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Redis](_redis_.redis.md).[listenerCount](_redis_.redis.md#listenercount)*

Defined in node_modules/@types/node/globals.d.ts:565

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Redis](_redis_.redis.md).[listeners](_redis_.redis.md#listeners)*

Defined in node_modules/@types/node/globals.d.ts:562

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  llen

▸ **llen**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[llen](_redis_.redis.md#llen)*

Defined in node_modules/@types/ioredis/index.d.ts:324

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **llen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[llen](_redis_.redis.md#llen)*

Defined in node_modules/@types/ioredis/index.d.ts:325

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  lock

▸ **lock**(`key`: string, `ttl`: number): *Promise‹Lock | null›*

*Defined in [redis.ts:72](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L72)*

Acquire lock in Redis

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`ttl` | number |

**Returns:** *Promise‹Lock | null›*

___

###  lpop

▸ **lpop**(`key`: KeyType, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[lpop](_redis_.redis.md#lpop)*

Defined in node_modules/@types/ioredis/index.d.ts:311

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **lpop**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[lpop](_redis_.redis.md#lpop)*

Defined in node_modules/@types/ioredis/index.d.ts:312

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  lpopBuffer

▸ **lpopBuffer**(`key`: KeyType, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[lpopBuffer](_redis_.redis.md#lpopbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:314

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **lpopBuffer**(`key`: KeyType): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[lpopBuffer](_redis_.redis.md#lpopbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:315

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹Buffer›*

___

###  lrange

▸ **lrange**(`key`: KeyType, `start`: number, `stop`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[lrange](_redis_.redis.md#lrange)*

Defined in node_modules/@types/ioredis/index.d.ts:333

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **lrange**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[lrange](_redis_.redis.md#lrange)*

Defined in node_modules/@types/ioredis/index.d.ts:334

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹string[]›*

___

###  lrangeBuffer

▸ **lrangeBuffer**(`key`: KeyType, `start`: number, `stop`: number, `callback`: Callback‹Buffer[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[lrangeBuffer](_redis_.redis.md#lrangebuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:336

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`callback` | Callback‹Buffer[]› |

**Returns:** *void*

▸ **lrangeBuffer**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹Buffer[]›*

*Inherited from [Redis](_redis_.redis.md).[lrangeBuffer](_redis_.redis.md#lrangebuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:337

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹Buffer[]›*

___

###  lrem

▸ **lrem**(`key`: KeyType, `count`: number, `value`: ValueType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[lrem](_redis_.redis.md#lrem)*

Defined in node_modules/@types/ioredis/index.d.ts:342

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |
`value` | ValueType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **lrem**(`key`: KeyType, `count`: number, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[lrem](_redis_.redis.md#lrem)*

Defined in node_modules/@types/ioredis/index.d.ts:343

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  lset

▸ **lset**(`key`: KeyType, `index`: number, `value`: ValueType, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[lset](_redis_.redis.md#lset)*

Defined in node_modules/@types/ioredis/index.d.ts:330

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`index` | number |
`value` | ValueType |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **lset**(`key`: KeyType, `index`: number, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[lset](_redis_.redis.md#lset)*

Defined in node_modules/@types/ioredis/index.d.ts:331

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`index` | number |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  ltrim

▸ **ltrim**(`key`: KeyType, `start`: number, `stop`: number, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[ltrim](_redis_.redis.md#ltrim)*

Defined in node_modules/@types/ioredis/index.d.ts:339

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **ltrim**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[ltrim](_redis_.redis.md#ltrim)*

Defined in node_modules/@types/ioredis/index.d.ts:340

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹Ok›*

___

###  monitor

▸ **monitor**(`callback`: Callback‹EventEmitter›): *void*

*Inherited from [Redis](_redis_.redis.md).[monitor](_redis_.redis.md#monitor)*

Defined in node_modules/@types/ioredis/index.d.ts:683

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹EventEmitter› |

**Returns:** *void*

▸ **monitor**(): *Promise‹EventEmitter›*

*Inherited from [Redis](_redis_.redis.md).[monitor](_redis_.redis.md#monitor)*

Defined in node_modules/@types/ioredis/index.d.ts:684

**Returns:** *Promise‹EventEmitter›*

___

###  move

▸ **move**(`key`: KeyType, `db`: string, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[move](_redis_.redis.md#move)*

Defined in node_modules/@types/ioredis/index.d.ts:601

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`db` | string |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **move**(`key`: KeyType, `db`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[move](_redis_.redis.md#move)*

Defined in node_modules/@types/ioredis/index.d.ts:602

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`db` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  multi

▸ **multi**(`commands?`: string[][], `options?`: MultiOptions): *Pipeline*

*Inherited from [Redis](_redis_.redis.md).[multi](_redis_.redis.md#multi)*

Defined in node_modules/@types/ioredis/index.d.ts:656

**Parameters:**

Name | Type |
------ | ------ |
`commands?` | string[][] |
`options?` | MultiOptions |

**Returns:** *Pipeline*

▸ **multi**(`options`: object): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[multi](_redis_.redis.md#multi)*

Defined in node_modules/@types/ioredis/index.d.ts:657

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`pipeline` | false |

**Returns:** *Promise‹Ok›*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[off](_redis_.redis.md#off)*

Defined in node_modules/@types/node/globals.d.ts:558

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[on](_redis_.redis.md#on)*

Defined in node_modules/@types/node/globals.d.ts:555

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[once](_redis_.redis.md#once)*

Defined in node_modules/@types/node/globals.d.ts:556

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  persist

▸ **persist**(`key`: KeyType, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[persist](_redis_.redis.md#persist)*

Defined in node_modules/@types/ioredis/index.d.ts:692

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **persist**(`key`: KeyType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[persist](_redis_.redis.md#persist)*

Defined in node_modules/@types/ioredis/index.d.ts:693

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹BooleanResponse›*

___

###  pexpire

▸ **pexpire**(`key`: KeyType, `milliseconds`: number, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[pexpire](_redis_.redis.md#pexpire)*

Defined in node_modules/@types/ioredis/index.d.ts:613

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`milliseconds` | number |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **pexpire**(`key`: KeyType, `milliseconds`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[pexpire](_redis_.redis.md#pexpire)*

Defined in node_modules/@types/ioredis/index.d.ts:614

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`milliseconds` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  pexpireat

▸ **pexpireat**(`key`: KeyType, `millisecondsTimestamp`: number, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[pexpireat](_redis_.redis.md#pexpireat)*

Defined in node_modules/@types/ioredis/index.d.ts:619

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`millisecondsTimestamp` | number |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **pexpireat**(`key`: KeyType, `millisecondsTimestamp`: number): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[pexpireat](_redis_.redis.md#pexpireat)*

Defined in node_modules/@types/ioredis/index.d.ts:620

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`millisecondsTimestamp` | number |

**Returns:** *Promise‹BooleanResponse›*

___

###  ping

▸ **ping**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[ping](_redis_.redis.md#ping)*

Defined in node_modules/@types/ioredis/index.d.ts:631

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **ping**(`message`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[ping](_redis_.redis.md#ping)*

Defined in node_modules/@types/ioredis/index.d.ts:632

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **ping**(`message?`: undefined | string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[ping](_redis_.redis.md#ping)*

Defined in node_modules/@types/ioredis/index.d.ts:633

**Parameters:**

Name | Type |
------ | ------ |
`message?` | undefined &#124; string |

**Returns:** *Promise‹string›*

___

###  pipeline

▸ **pipeline**(`commands?`: string[][]): *Pipeline*

*Inherited from [Redis](_redis_.redis.md).[pipeline](_redis_.redis.md#pipeline)*

Defined in node_modules/@types/ioredis/index.d.ts:805

**Parameters:**

Name | Type |
------ | ------ |
`commands?` | string[][] |

**Returns:** *Pipeline*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[prependListener](_redis_.redis.md#prependlistener)*

Defined in node_modules/@types/node/globals.d.ts:567

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[prependOnceListener](_redis_.redis.md#prependoncelistener)*

Defined in node_modules/@types/node/globals.d.ts:568

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  psetex

▸ **psetex**(`key`: KeyType, `milliseconds`: number, `value`: ValueType, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[psetex](_redis_.redis.md#psetex)*

Defined in node_modules/@types/ioredis/index.d.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`milliseconds` | number |
`value` | ValueType |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **psetex**(`key`: KeyType, `milliseconds`: number, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[psetex](_redis_.redis.md#psetex)*

Defined in node_modules/@types/ioredis/index.d.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`milliseconds` | number |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  pttl

▸ **pttl**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[pttl](_redis_.redis.md#pttl)*

Defined in node_modules/@types/ioredis/index.d.ts:689

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **pttl**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[pttl](_redis_.redis.md#pttl)*

Defined in node_modules/@types/ioredis/index.d.ts:690

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  publish

▸ **publish**(`channel`: string, `message`: string, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[publish](_redis_.redis.md#publish)*

Defined in node_modules/@types/ioredis/index.d.ts:715

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | string |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **publish**(`channel`: string, `message`: string): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[publish](_redis_.redis.md#publish)*

Defined in node_modules/@types/ioredis/index.d.ts:716

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | string |

**Returns:** *Promise‹number›*

___

###  publishBuffer

▸ **publishBuffer**(`channel`: string, `message`: Buffer): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[publishBuffer](_redis_.redis.md#publishbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:718

**Parameters:**

Name | Type |
------ | ------ |
`channel` | string |
`message` | Buffer |

**Returns:** *Promise‹number›*

___

###  quit

▸ **quit**(`callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[quit](_redis_.redis.md#quit)*

Defined in node_modules/@types/ioredis/index.d.ts:744

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **quit**(): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[quit](_redis_.redis.md#quit)*

Defined in node_modules/@types/ioredis/index.d.ts:745

**Returns:** *Promise‹Ok›*

___

###  randomkey

▸ **randomkey**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[randomkey](_redis_.redis.md#randomkey)*

Defined in node_modules/@types/ioredis/index.d.ts:595

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **randomkey**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[randomkey](_redis_.redis.md#randomkey)*

Defined in node_modules/@types/ioredis/index.d.ts:596

**Returns:** *Promise‹string›*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Redis](_redis_.redis.md).[rawListeners](_redis_.redis.md#rawlisteners)*

Defined in node_modules/@types/node/globals.d.ts:563

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Redis](_redis_.redis.md).[removeAllListeners](_redis_.redis.md#removealllisteners)*

Defined in node_modules/@types/node/globals.d.ts:559

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Redis](_redis_.redis.md).[removeListener](_redis_.redis.md#removelistener)*

Defined in node_modules/@types/node/globals.d.ts:557

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rename

▸ **rename**(`key`: KeyType, `newkey`: KeyType, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[rename](_redis_.redis.md#rename)*

Defined in node_modules/@types/ioredis/index.d.ts:604

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`newkey` | KeyType |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **rename**(`key`: KeyType, `newkey`: KeyType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[rename](_redis_.redis.md#rename)*

Defined in node_modules/@types/ioredis/index.d.ts:605

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`newkey` | KeyType |

**Returns:** *Promise‹Ok›*

___

###  renamenx

▸ **renamenx**(`key`: KeyType, `newkey`: KeyType, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[renamenx](_redis_.redis.md#renamenx)*

Defined in node_modules/@types/ioredis/index.d.ts:607

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`newkey` | KeyType |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **renamenx**(`key`: KeyType, `newkey`: KeyType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[renamenx](_redis_.redis.md#renamenx)*

Defined in node_modules/@types/ioredis/index.d.ts:608

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`newkey` | KeyType |

**Returns:** *Promise‹BooleanResponse›*

___

###  rpop

▸ **rpop**(`key`: KeyType, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[rpop](_redis_.redis.md#rpop)*

Defined in node_modules/@types/ioredis/index.d.ts:308

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **rpop**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[rpop](_redis_.redis.md#rpop)*

Defined in node_modules/@types/ioredis/index.d.ts:309

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  rpoplpush

▸ **rpoplpush**(`source`: string, `destination`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[rpoplpush](_redis_.redis.md#rpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:345

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **rpoplpush**(`source`: string, `destination`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[rpoplpush](_redis_.redis.md#rpoplpush)*

Defined in node_modules/@types/ioredis/index.d.ts:346

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |

**Returns:** *Promise‹string›*

___

###  rpoplpushBuffer

▸ **rpoplpushBuffer**(`source`: string, `destination`: string, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[rpoplpushBuffer](_redis_.redis.md#rpoplpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:348

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **rpoplpushBuffer**(`source`: string, `destination`: string): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[rpoplpushBuffer](_redis_.redis.md#rpoplpushbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:349

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |

**Returns:** *Promise‹Buffer›*

___

###  save

▸ **save**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[save](_redis_.redis.md#save)*

Defined in node_modules/@types/ioredis/index.d.ts:638

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **save**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[save](_redis_.redis.md#save)*

Defined in node_modules/@types/ioredis/index.d.ts:639

**Returns:** *Promise‹string›*

___

###  scan

▸ **scan**(`cursor`: number | string, `matchOption`: "match" | "MATCH", `pattern`: string): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:747

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `matchOption`: "match" | "MATCH", `pattern`: string, `callback`: Callback‹[string, string[]]›): *void*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:748

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`callback` | Callback‹[string, string[]]› |

**Returns:** *void*

▸ **scan**(`cursor`: number | string, `countOption`: "count" | "COUNT", `count`: number): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:754

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `countOption`: "count" | "COUNT", `count`: number, `callback`: Callback‹[string, string[]]›): *void*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:755

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`callback` | Callback‹[string, string[]]› |

**Returns:** *void*

▸ **scan**(`cursor`: number | string, `matchOption`: "match" | "MATCH", `pattern`: string, `countOption`: "count" | "COUNT", `count`: number): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:762

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `matchOption`: "match" | "MATCH", `pattern`: string, `countOption`: "count" | "COUNT", `count`: number, `callback`: Callback‹[string, string[]]›): *void*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:769

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`callback` | Callback‹[string, string[]]› |

**Returns:** *void*

▸ **scan**(`cursor`: number | string, `countOption`: "count" | "COUNT", `count`: number, `matchOption`: "match" | "MATCH", `pattern`: string): *Promise‹[string, string[]]›*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:777

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |

**Returns:** *Promise‹[string, string[]]›*

▸ **scan**(`cursor`: number | string, `countOption`: "count" | "COUNT", `count`: number, `matchOption`: "match" | "MATCH", `pattern`: string, `callback`: Callback‹[string, string[]]›): *void*

*Inherited from [Redis](_redis_.redis.md).[scan](_redis_.redis.md#scan)*

Defined in node_modules/@types/ioredis/index.d.ts:784

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number &#124; string |
`countOption` | "count" &#124; "COUNT" |
`count` | number |
`matchOption` | "match" &#124; "MATCH" |
`pattern` | string |
`callback` | Callback‹[string, string[]]› |

**Returns:** *void*

___

###  scanPromise

▸ **scanPromise**(`options?`: ScanStreamOption): *Promise‹string[]›*

*Defined in [redis.ts:119](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L119)*

Wrapper for scanStream that returns a promise

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScanStreamOption |

**Returns:** *Promise‹string[]›*

___

###  scanStream

▸ **scanStream**(`options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[scanStream](_redis_.redis.md#scanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:807

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  scard

▸ **scard**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[scard](_redis_.redis.md#scard)*

Defined in node_modules/@types/ioredis/index.d.ts:361

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **scard**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[scard](_redis_.redis.md#scard)*

Defined in node_modules/@types/ioredis/index.d.ts:362

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  select

▸ **select**(`index`: number, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[select](_redis_.redis.md#select)*

Defined in node_modules/@types/ioredis/index.d.ts:598

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **select**(`index`: number): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[select](_redis_.redis.md#select)*

Defined in node_modules/@types/ioredis/index.d.ts:599

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Promise‹Ok›*

___

###  sendCommand

▸ **sendCommand**(): *void*

*Inherited from [Redis](_redis_.redis.md).[sendCommand](_redis_.redis.md#sendcommand)*

Defined in node_modules/@types/ioredis/index.d.ts:56

**Returns:** *void*

___

###  send_command

▸ **send_command**(`command`: string, ...`args`: ValueType[]): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[send_command](_redis_.redis.md#send_command)*

Defined in node_modules/@types/ioredis/index.d.ts:847

**Parameters:**

Name | Type |
------ | ------ |
`command` | string |
`...args` | ValueType[] |

**Returns:** *Promise‹any›*

___

###  set

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:204

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode?` | string &#124; any[] |
`time?` | number &#124; string |
`setMode?` | number &#124; string |

**Returns:** *Promise‹Ok›*

▸ **set**(`key`: KeyType, `value`: ValueType, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:212

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **set**(`key`: KeyType, `value`: ValueType, `setMode`: string | any[], `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:213

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`setMode` | string &#124; any[] |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number | string, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:214

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | string |
`time` | number &#124; string |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number | string, `setMode`: number | string, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[set](_redis_.redis.md#set)*

Defined in node_modules/@types/ioredis/index.d.ts:215

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | string |
`time` | number &#124; string |
`setMode` | number &#124; string |
`callback` | Callback‹Ok› |

**Returns:** *void*

___

###  setBuffer

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode?`: string | any[], `time?`: number | string, `setMode?`: number | string): *Promise‹Buffer›*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:224

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode?` | string &#124; any[] |
`time?` | number &#124; string |
`setMode?` | number &#124; string |

**Returns:** *Promise‹Buffer›*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:232

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `setMode`: string, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:233

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`setMode` | string |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:234

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | string |
`time` | number |
`callback` | Callback‹Buffer› |

**Returns:** *void*

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode`: string, `time`: number | string, `setMode`: number | string, `callback`: Callback‹Buffer›): *void*

*Inherited from [Redis](_redis_.redis.md).[setBuffer](_redis_.redis.md#setbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:235

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | string |
`time` | number &#124; string |
`setMode` | number &#124; string |
`callback` | Callback‹Buffer› |

**Returns:** *void*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Redis](_redis_.redis.md).[setMaxListeners](_redis_.redis.md#setmaxlisteners)*

Defined in node_modules/@types/node/globals.d.ts:560

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setbit

▸ **setbit**(`key`: KeyType, `offset`: number, `value`: ValueType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[setbit](_redis_.redis.md#setbit)*

Defined in node_modules/@types/ioredis/index.d.ts:266

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`value` | ValueType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **setbit**(`key`: KeyType, `offset`: number, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[setbit](_redis_.redis.md#setbit)*

Defined in node_modules/@types/ioredis/index.d.ts:267

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  setex

▸ **setex**(`key`: KeyType, `seconds`: number, `value`: ValueType, `callback`: Callback‹Ok›): *void*

*Inherited from [Redis](_redis_.redis.md).[setex](_redis_.redis.md#setex)*

Defined in node_modules/@types/ioredis/index.d.ts:247

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`seconds` | number |
`value` | ValueType |
`callback` | Callback‹Ok› |

**Returns:** *void*

▸ **setex**(`key`: KeyType, `seconds`: number, `value`: ValueType): *Promise‹Ok›*

*Inherited from [Redis](_redis_.redis.md).[setex](_redis_.redis.md#setex)*

Defined in node_modules/@types/ioredis/index.d.ts:248

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`seconds` | number |
`value` | ValueType |

**Returns:** *Promise‹Ok›*

___

###  setnx

▸ **setnx**(`key`: KeyType, `value`: ValueType, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[setnx](_redis_.redis.md#setnx)*

Defined in node_modules/@types/ioredis/index.d.ts:244

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **setnx**(`key`: KeyType, `value`: ValueType): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[setnx](_redis_.redis.md#setnx)*

Defined in node_modules/@types/ioredis/index.d.ts:245

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise‹BooleanResponse›*

___

###  setrange

▸ **setrange**(`key`: KeyType, `offset`: number, `value`: ValueType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[setrange](_redis_.redis.md#setrange)*

Defined in node_modules/@types/ioredis/index.d.ts:272

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`value` | ValueType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **setrange**(`key`: KeyType, `offset`: number, `value`: ValueType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[setrange](_redis_.redis.md#setrange)*

Defined in node_modules/@types/ioredis/index.d.ts:273

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`offset` | number |
`value` | ValueType |

**Returns:** *Promise‹number›*

___

###  shutdown

▸ **shutdown**(`save`: "SAVE" | "NOSAVE", `callback`: Callback‹never›): *void*

*Inherited from [Redis](_redis_.redis.md).[shutdown](_redis_.redis.md#shutdown)*

Defined in node_modules/@types/ioredis/index.d.ts:647

**Parameters:**

Name | Type |
------ | ------ |
`save` | "SAVE" &#124; "NOSAVE" |
`callback` | Callback‹never› |

**Returns:** *void*

▸ **shutdown**(`save`: "SAVE" | "NOSAVE"): *Promise‹never›*

*Inherited from [Redis](_redis_.redis.md).[shutdown](_redis_.redis.md#shutdown)*

Defined in node_modules/@types/ioredis/index.d.ts:648

**Parameters:**

Name | Type |
------ | ------ |
`save` | "SAVE" &#124; "NOSAVE" |

**Returns:** *Promise‹never›*

___

###  sismember

▸ **sismember**(`key`: KeyType, `member`: string, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[sismember](_redis_.redis.md#sismember)*

Defined in node_modules/@types/ioredis/index.d.ts:358

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **sismember**(`key`: KeyType, `member`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[sismember](_redis_.redis.md#sismember)*

Defined in node_modules/@types/ioredis/index.d.ts:359

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  slaveof

▸ **slaveof**(`host`: string, `port`: number, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[slaveof](_redis_.redis.md#slaveof)*

Defined in node_modules/@types/ioredis/index.d.ts:695

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |
`port` | number |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **slaveof**(`host`: string, `port`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[slaveof](_redis_.redis.md#slaveof)*

Defined in node_modules/@types/ioredis/index.d.ts:696

**Parameters:**

Name | Type |
------ | ------ |
`host` | string |
`port` | number |

**Returns:** *Promise‹string›*

___

###  smembers

▸ **smembers**(`key`: KeyType, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[smembers](_redis_.redis.md#smembers)*

Defined in node_modules/@types/ioredis/index.d.ts:386

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **smembers**(`key`: KeyType): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[smembers](_redis_.redis.md#smembers)*

Defined in node_modules/@types/ioredis/index.d.ts:387

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string[]›*

___

###  smove

▸ **smove**(`source`: string, `destination`: string, `member`: string, `callback`: Callback‹BooleanResponse›): *void*

*Inherited from [Redis](_redis_.redis.md).[smove](_redis_.redis.md#smove)*

Defined in node_modules/@types/ioredis/index.d.ts:355

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`member` | string |
`callback` | Callback‹BooleanResponse› |

**Returns:** *void*

▸ **smove**(`source`: string, `destination`: string, `member`: string): *Promise‹BooleanResponse›*

*Inherited from [Redis](_redis_.redis.md).[smove](_redis_.redis.md#smove)*

Defined in node_modules/@types/ioredis/index.d.ts:356

**Parameters:**

Name | Type |
------ | ------ |
`source` | string |
`destination` | string |
`member` | string |

**Returns:** *Promise‹BooleanResponse›*

___

###  spop

▸ **spop**(`key`: KeyType, `callback`: Callback‹string | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:364

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string &#124; null› |

**Returns:** *void*

▸ **spop**(`key`: KeyType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:365

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string | null›*

▸ **spop**(`key`: KeyType, `count`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:366

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **spop**(`key`: KeyType, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[spop](_redis_.redis.md#spop)*

Defined in node_modules/@types/ioredis/index.d.ts:367

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |

**Returns:** *Promise‹string[]›*

___

###  srandmember

▸ **srandmember**(`key`: KeyType, `callback`: Callback‹string | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:369

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string &#124; null› |

**Returns:** *void*

▸ **srandmember**(`key`: KeyType): *Promise‹string | null›*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:370

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string | null›*

▸ **srandmember**(`key`: KeyType, `count`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:371

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **srandmember**(`key`: KeyType, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[srandmember](_redis_.redis.md#srandmember)*

Defined in node_modules/@types/ioredis/index.d.ts:372

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`count` | number |

**Returns:** *Promise‹string[]›*

___

###  sscanStream

▸ **sscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[sscanStream](_redis_.redis.md#sscanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:808

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  strlen

▸ **strlen**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[strlen](_redis_.redis.md#strlen)*

Defined in node_modules/@types/ioredis/index.d.ts:256

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **strlen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[strlen](_redis_.redis.md#strlen)*

Defined in node_modules/@types/ioredis/index.d.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  substr

▸ **substr**(`key`: KeyType, `start`: number, `end`: number, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[substr](_redis_.redis.md#substr)*

Defined in node_modules/@types/ioredis/index.d.ts:278

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **substr**(`key`: KeyType, `start`: number, `end`: number): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[substr](_redis_.redis.md#substr)*

Defined in node_modules/@types/ioredis/index.d.ts:279

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`end` | number |

**Returns:** *Promise‹string›*

___

###  sync

▸ **sync**(`callback`: Callback‹any›): *void*

*Inherited from [Redis](_redis_.redis.md).[sync](_redis_.redis.md#sync)*

Defined in node_modules/@types/ioredis/index.d.ts:665

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹any› |

**Returns:** *void*

▸ **sync**(): *Promise‹any›*

*Inherited from [Redis](_redis_.redis.md).[sync](_redis_.redis.md#sync)*

Defined in node_modules/@types/ioredis/index.d.ts:666

**Returns:** *Promise‹any›*

___

###  time

▸ **time**(`callback`: Callback‹[string, string]›): *void*

*Inherited from [Redis](_redis_.redis.md).[time](_redis_.redis.md#time)*

Defined in node_modules/@types/ioredis/index.d.ts:680

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹[string, string]› |

**Returns:** *void*

▸ **time**(): *Promise‹[string, string]›*

*Inherited from [Redis](_redis_.redis.md).[time](_redis_.redis.md#time)*

Defined in node_modules/@types/ioredis/index.d.ts:681

**Returns:** *Promise‹[string, string]›*

___

###  ttl

▸ **ttl**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[ttl](_redis_.redis.md#ttl)*

Defined in node_modules/@types/ioredis/index.d.ts:686

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **ttl**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[ttl](_redis_.redis.md#ttl)*

Defined in node_modules/@types/ioredis/index.d.ts:687

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  type

▸ **type**(`key`: KeyType, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[type](_redis_.redis.md#type)*

Defined in node_modules/@types/ioredis/index.d.ts:653

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **type**(`key`: KeyType): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[type](_redis_.redis.md#type)*

Defined in node_modules/@types/ioredis/index.d.ts:654

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹string›*

___

###  unwatch

▸ **unwatch**(`callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[unwatch](_redis_.redis.md#unwatch)*

Defined in node_modules/@types/ioredis/index.d.ts:722

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **unwatch**(): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[unwatch](_redis_.redis.md#unwatch)*

Defined in node_modules/@types/ioredis/index.d.ts:723

**Returns:** *Promise‹string›*

___

###  xlen

▸ **xlen**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[xlen](_redis_.redis.md#xlen)*

Defined in node_modules/@types/ioredis/index.d.ts:824

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

▸ **xlen**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[xlen](_redis_.redis.md#xlen)*

Defined in node_modules/@types/ioredis/index.d.ts:825

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

___

###  zaddBuffer

▸ **zaddBuffer**(`key`: KeyType, `score1`: number, `member1`: Buffer, `callback`: Callback‹string | number›): *void*

*Inherited from [Redis](_redis_.redis.md).[zaddBuffer](_redis_.redis.md#zaddbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:391

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`score1` | number |
`member1` | Buffer |
`callback` | Callback‹string &#124; number› |

**Returns:** *void*

▸ **zaddBuffer**(`key`: KeyType, `score1`: number, `member1`: Buffer): *Promise‹string | number›*

*Inherited from [Redis](_redis_.redis.md).[zaddBuffer](_redis_.redis.md#zaddbuffer)*

Defined in node_modules/@types/ioredis/index.d.ts:392

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`score1` | number |
`member1` | Buffer |

**Returns:** *Promise‹string | number›*

___

###  zcard

▸ **zcard**(`key`: KeyType, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[zcard](_redis_.redis.md#zcard)*

Defined in node_modules/@types/ioredis/index.d.ts:528

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **zcard**(`key`: KeyType): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zcard](_redis_.redis.md#zcard)*

Defined in node_modules/@types/ioredis/index.d.ts:529

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |

**Returns:** *Promise‹number›*

___

###  zcount

▸ **zcount**(`key`: KeyType, `min`: number | string, `max`: number | string, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[zcount](_redis_.redis.md#zcount)*

Defined in node_modules/@types/ioredis/index.d.ts:525

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **zcount**(`key`: KeyType, `min`: number | string, `max`: number | string): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zcount](_redis_.redis.md#zcount)*

Defined in node_modules/@types/ioredis/index.d.ts:526

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |

**Returns:** *Promise‹number›*

___

###  zincrby

▸ **zincrby**(`key`: KeyType, `increment`: number, `member`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[zincrby](_redis_.redis.md#zincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:394

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |
`member` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **zincrby**(`key`: KeyType, `increment`: number, `member`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[zincrby](_redis_.redis.md#zincrby)*

Defined in node_modules/@types/ioredis/index.d.ts:395

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`increment` | number |
`member` | string |

**Returns:** *Promise‹string›*

___

###  zrange

▸ **zrange**(`key`: KeyType, `start`: number, `stop`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrange](_redis_.redis.md#zrange)*

Defined in node_modules/@types/ioredis/index.d.ts:409

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrange](_redis_.redis.md#zrange)*

Defined in node_modules/@types/ioredis/index.d.ts:410

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`withScores` | "WITHSCORES" |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrange](_redis_.redis.md#zrange)*

Defined in node_modules/@types/ioredis/index.d.ts:411

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

___

###  zrangebyscore

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:423

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores`: "WITHSCORES", `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:429

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores` | "WITHSCORES" |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:438

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:446

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores`: "WITHSCORES", `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:447

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores` | "WITHSCORES" |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `withScores`: "WITHSCORES", `limit`: "LIMIT", `offset`: number, `count`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:454

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`withScores` | "WITHSCORES" |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `limit`: "LIMIT", `offset`: number, `count`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrangebyscore](_redis_.redis.md#zrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:464

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

___

###  zrank

▸ **zrank**(`key`: KeyType, `member`: string, `callback`: Callback‹number | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrank](_redis_.redis.md#zrank)*

Defined in node_modules/@types/ioredis/index.d.ts:534

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |
`callback` | Callback‹number &#124; null› |

**Returns:** *void*

▸ **zrank**(`key`: KeyType, `member`: string): *Promise‹number | null›*

*Inherited from [Redis](_redis_.redis.md).[zrank](_redis_.redis.md#zrank)*

Defined in node_modules/@types/ioredis/index.d.ts:535

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹number | null›*

___

###  zremrangebyrank

▸ **zremrangebyrank**(`key`: KeyType, `start`: number, `stop`: number, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyrank](_redis_.redis.md#zremrangebyrank)*

Defined in node_modules/@types/ioredis/index.d.ts:402

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **zremrangebyrank**(`key`: KeyType, `start`: number, `stop`: number): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyrank](_redis_.redis.md#zremrangebyrank)*

Defined in node_modules/@types/ioredis/index.d.ts:403

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |

**Returns:** *Promise‹number›*

___

###  zremrangebyscore

▸ **zremrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string, `callback`: Callback‹number›): *void*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyscore](_redis_.redis.md#zremrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:399

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |
`callback` | Callback‹number› |

**Returns:** *void*

▸ **zremrangebyscore**(`key`: KeyType, `min`: number | string, `max`: number | string): *Promise‹number›*

*Inherited from [Redis](_redis_.redis.md).[zremrangebyscore](_redis_.redis.md#zremrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:400

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`min` | number &#124; string |
`max` | number &#124; string |

**Returns:** *Promise‹number›*

___

###  zrevrange

▸ **zrevrange**(`key`: KeyType, `start`: number, `stop`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrange](_redis_.redis.md#zrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:413

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrevrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores`: "WITHSCORES", `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrange](_redis_.redis.md#zrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:414

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`withScores` | "WITHSCORES" |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrevrange**(`key`: KeyType, `start`: number, `stop`: number, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrange](_redis_.redis.md#zrevrange)*

Defined in node_modules/@types/ioredis/index.d.ts:421

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`start` | number |
`stop` | number |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

___

###  zrevrangebyscore

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `withScores?`: undefined | "WITHSCORES"): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:474

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`withScores?` | undefined &#124; "WITHSCORES" |

**Returns:** *Promise‹string[]›*

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `withScores`: "WITHSCORES", `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:480

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`withScores` | "WITHSCORES" |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `limit`: "LIMIT", `offset`: number, `count`: number): *Promise‹string[]›*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:489

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |

**Returns:** *Promise‹string[]›*

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:497

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `withScores`: "WITHSCORES", `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:498

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`withScores` | "WITHSCORES" |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `withScores`: "WITHSCORES", `limit`: "LIMIT", `offset`: number, `count`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:505

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`withScores` | "WITHSCORES" |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

▸ **zrevrangebyscore**(`key`: KeyType, `max`: number | string, `min`: number | string, `limit`: "LIMIT", `offset`: number, `count`: number, `callback`: Callback‹string[]›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrangebyscore](_redis_.redis.md#zrevrangebyscore)*

Defined in node_modules/@types/ioredis/index.d.ts:515

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`max` | number &#124; string |
`min` | number &#124; string |
`limit` | "LIMIT" |
`offset` | number |
`count` | number |
`callback` | Callback‹string[]› |

**Returns:** *void*

___

###  zrevrank

▸ **zrevrank**(`key`: KeyType, `member`: string, `callback`: Callback‹number | null›): *void*

*Inherited from [Redis](_redis_.redis.md).[zrevrank](_redis_.redis.md#zrevrank)*

Defined in node_modules/@types/ioredis/index.d.ts:537

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |
`callback` | Callback‹number &#124; null› |

**Returns:** *void*

▸ **zrevrank**(`key`: KeyType, `member`: string): *Promise‹number | null›*

*Inherited from [Redis](_redis_.redis.md).[zrevrank](_redis_.redis.md#zrevrank)*

Defined in node_modules/@types/ioredis/index.d.ts:538

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹number | null›*

___

###  zscanPromise

▸ **zscanPromise**(`key`: KeyType, `options?`: ScanStreamOption): *Promise‹string[]›*

*Defined in [redis.ts:142](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L142)*

Wrapper for scanStream that returns a promise

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Promise‹string[]›*

___

###  zscanStream

▸ **zscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

*Inherited from [Redis](_redis_.redis.md).[zscanStream](_redis_.redis.md#zscanstream)*

Defined in node_modules/@types/ioredis/index.d.ts:810

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

___

###  zscore

▸ **zscore**(`key`: KeyType, `member`: string, `callback`: Callback‹string›): *void*

*Inherited from [Redis](_redis_.redis.md).[zscore](_redis_.redis.md#zscore)*

Defined in node_modules/@types/ioredis/index.d.ts:531

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |
`callback` | Callback‹string› |

**Returns:** *void*

▸ **zscore**(`key`: KeyType, `member`: string): *Promise‹string›*

*Inherited from [Redis](_redis_.redis.md).[zscore](_redis_.redis.md#zscore)*

Defined in node_modules/@types/ioredis/index.d.ts:532

**Parameters:**

Name | Type |
------ | ------ |
`key` | KeyType |
`member` | string |

**Returns:** *Promise‹string›*

## Object literals

### `Static` `Readonly` CONSTANTS

### ▪ **CONSTANTS**: *object*

*Defined in [redis.ts:42](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L42)*

###  DEFAULT_SKEW_MS

• **DEFAULT_SKEW_MS**: *number* = 5

*Defined in [redis.ts:43](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L43)*

###  SEARCH_FIELD_TYPES

• **SEARCH_FIELD_TYPES**: *[SEARCH_FIELD_TYPES](../enums/_redis_.search_field_types.md)*

*Defined in [redis.ts:44](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L44)*

###  SEARCH_FIELD_TYPE_VALUES

• **SEARCH_FIELD_TYPE_VALUES**: *[TAG](../enums/_redis_.search_field_types.md#tag) | [TEXT](../enums/_redis_.search_field_types.md#text) | [NUMERIC](../enums/_redis_.search_field_types.md#numeric) | [GEO](../enums/_redis_.search_field_types.md#geo)[]* = Object.values(SEARCH_FIELD_TYPES)

*Defined in [redis.ts:45](https://github.com/ehacke/redis/blob/e965a3d/redis.ts#L45)*
