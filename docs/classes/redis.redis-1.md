[@gapizza/redis](../README.md) / [redis](../modules/redis.md) / Redis

# Class: Redis

[redis](../modules/redis.md).Redis

## Hierarchy

* *IORedis*

  ↳ **Redis**

## Table of contents

### Constructors

- [constructor](redis.redis-1.md#constructor)

### Properties

- [NAME](redis.redis-1.md#name)
- [Promise](redis.redis-1.md#promise)
- [blpop](redis.redis-1.md#blpop)
- [brpop](redis.redis-1.md#brpop)
- [bzpopmax](redis.redis-1.md#bzpopmax)
- [bzpopmin](redis.redis-1.md#bzpopmin)
- [client](redis.redis-1.md#client)
- [cluster](redis.redis-1.md#cluster)
- [debounced](redis.redis-1.md#debounced)
- [debug](redis.redis-1.md#debug)
- [del](redis.redis-1.md#del)
- [eval](redis.redis-1.md#eval)
- [evalsha](redis.redis-1.md#evalsha)
- [geohash](redis.redis-1.md#geohash)
- [geopos](redis.redis-1.md#geopos)
- [hdel](redis.redis-1.md#hdel)
- [hmget](redis.redis-1.md#hmget)
- [hmset](redis.redis-1.md#hmset)
- [hscan](redis.redis-1.md#hscan)
- [hset](redis.redis-1.md#hset)
- [lpush](redis.redis-1.md#lpush)
- [lpushBuffer](redis.redis-1.md#lpushbuffer)
- [lpushx](redis.redis-1.md#lpushx)
- [mget](redis.redis-1.md#mget)
- [migrate](redis.redis-1.md#migrate)
- [mset](redis.redis-1.md#mset)
- [msetnx](redis.redis-1.md#msetnx)
- [object](redis.redis-1.md#object)
- [options](redis.redis-1.md#options)
- [pfadd](redis.redis-1.md#pfadd)
- [pfcount](redis.redis-1.md#pfcount)
- [pfmerge](redis.redis-1.md#pfmerge)
- [psubscribe](redis.redis-1.md#psubscribe)
- [punsubscribe](redis.redis-1.md#punsubscribe)
- [redlock](redis.redis-1.md#redlock)
- [restore](redis.redis-1.md#restore)
- [rpush](redis.redis-1.md#rpush)
- [rpushBuffer](redis.redis-1.md#rpushbuffer)
- [rpushx](redis.redis-1.md#rpushx)
- [sadd](redis.redis-1.md#sadd)
- [script](redis.redis-1.md#script)
- [sdiff](redis.redis-1.md#sdiff)
- [sdiffstore](redis.redis-1.md#sdiffstore)
- [sinter](redis.redis-1.md#sinter)
- [sinterstore](redis.redis-1.md#sinterstore)
- [sort](redis.redis-1.md#sort)
- [srem](redis.redis-1.md#srem)
- [sscan](redis.redis-1.md#sscan)
- [status](redis.redis-1.md#status)
- [subscribe](redis.redis-1.md#subscribe)
- [sunion](redis.redis-1.md#sunion)
- [sunionstore](redis.redis-1.md#sunionstore)
- [unlink](redis.redis-1.md#unlink)
- [unsubscribe](redis.redis-1.md#unsubscribe)
- [watch](redis.redis-1.md#watch)
- [xack](redis.redis-1.md#xack)
- [xadd](redis.redis-1.md#xadd)
- [xclaim](redis.redis-1.md#xclaim)
- [xdel](redis.redis-1.md#xdel)
- [xgroup](redis.redis-1.md#xgroup)
- [xinfo](redis.redis-1.md#xinfo)
- [xpending](redis.redis-1.md#xpending)
- [xrange](redis.redis-1.md#xrange)
- [xread](redis.redis-1.md#xread)
- [xreadgroup](redis.redis-1.md#xreadgroup)
- [xrevrange](redis.redis-1.md#xrevrange)
- [xtrim](redis.redis-1.md#xtrim)
- [zadd](redis.redis-1.md#zadd)
- [zinterstore](redis.redis-1.md#zinterstore)
- [zrem](redis.redis-1.md#zrem)
- [zscan](redis.redis-1.md#zscan)
- [zunionstore](redis.redis-1.md#zunionstore)
- [CONSTANTS](redis.redis-1.md#constants)
- [Cluster](redis.redis-1.md#cluster)
- [Command](redis.redis-1.md#command)

### Methods

- [addListener](redis.redis-1.md#addlistener)
- [append](redis.redis-1.md#append)
- [auth](redis.redis-1.md#auth)
- [bgrewriteaof](redis.redis-1.md#bgrewriteaof)
- [bgsave](redis.redis-1.md#bgsave)
- [bitcount](redis.redis-1.md#bitcount)
- [brpoplpush](redis.redis-1.md#brpoplpush)
- [config](redis.redis-1.md#config)
- [connect](redis.redis-1.md#connect)
- [createBuiltinCommand](redis.redis-1.md#createbuiltincommand)
- [createRedlock](redis.redis-1.md#createredlock)
- [dbsize](redis.redis-1.md#dbsize)
- [debounce](redis.redis-1.md#debounce)
- [decr](redis.redis-1.md#decr)
- [decrby](redis.redis-1.md#decrby)
- [defineCommand](redis.redis-1.md#definecommand)
- [discard](redis.redis-1.md#discard)
- [disconnect](redis.redis-1.md#disconnect)
- [dump](redis.redis-1.md#dump)
- [duplicate](redis.redis-1.md#duplicate)
- [echo](redis.redis-1.md#echo)
- [emit](redis.redis-1.md#emit)
- [eventNames](redis.redis-1.md#eventnames)
- [exec](redis.redis-1.md#exec)
- [exists](redis.redis-1.md#exists)
- [expire](redis.redis-1.md#expire)
- [expireat](redis.redis-1.md#expireat)
- [flushall](redis.redis-1.md#flushall)
- [flushdb](redis.redis-1.md#flushdb)
- [geoadd](redis.redis-1.md#geoadd)
- [geodist](redis.redis-1.md#geodist)
- [georadius](redis.redis-1.md#georadius)
- [georadiusbymember](redis.redis-1.md#georadiusbymember)
- [get](redis.redis-1.md#get)
- [getBuffer](redis.redis-1.md#getbuffer)
- [getBuiltinCommands](redis.redis-1.md#getbuiltincommands)
- [getMaxListeners](redis.redis-1.md#getmaxlisteners)
- [getbit](redis.redis-1.md#getbit)
- [getrange](redis.redis-1.md#getrange)
- [getrangeBuffer](redis.redis-1.md#getrangebuffer)
- [getset](redis.redis-1.md#getset)
- [hexists](redis.redis-1.md#hexists)
- [hget](redis.redis-1.md#hget)
- [hgetBuffer](redis.redis-1.md#hgetbuffer)
- [hgetall](redis.redis-1.md#hgetall)
- [hincrby](redis.redis-1.md#hincrby)
- [hincrbyfloat](redis.redis-1.md#hincrbyfloat)
- [hkeys](redis.redis-1.md#hkeys)
- [hlen](redis.redis-1.md#hlen)
- [hscanStream](redis.redis-1.md#hscanstream)
- [hsetBuffer](redis.redis-1.md#hsetbuffer)
- [hsetnx](redis.redis-1.md#hsetnx)
- [hstrlen](redis.redis-1.md#hstrlen)
- [hvals](redis.redis-1.md#hvals)
- [incr](redis.redis-1.md#incr)
- [incrby](redis.redis-1.md#incrby)
- [incrbyfloat](redis.redis-1.md#incrbyfloat)
- [info](redis.redis-1.md#info)
- [keys](redis.redis-1.md#keys)
- [lastsave](redis.redis-1.md#lastsave)
- [lindex](redis.redis-1.md#lindex)
- [linsert](redis.redis-1.md#linsert)
- [listenerCount](redis.redis-1.md#listenercount)
- [listeners](redis.redis-1.md#listeners)
- [llen](redis.redis-1.md#llen)
- [lock](redis.redis-1.md#lock)
- [lpop](redis.redis-1.md#lpop)
- [lpopBuffer](redis.redis-1.md#lpopbuffer)
- [lpos](redis.redis-1.md#lpos)
- [lrange](redis.redis-1.md#lrange)
- [lrangeBuffer](redis.redis-1.md#lrangebuffer)
- [lrem](redis.redis-1.md#lrem)
- [lset](redis.redis-1.md#lset)
- [ltrim](redis.redis-1.md#ltrim)
- [memory](redis.redis-1.md#memory)
- [monitor](redis.redis-1.md#monitor)
- [move](redis.redis-1.md#move)
- [multi](redis.redis-1.md#multi)
- [off](redis.redis-1.md#off)
- [on](redis.redis-1.md#on)
- [once](redis.redis-1.md#once)
- [persist](redis.redis-1.md#persist)
- [pexpire](redis.redis-1.md#pexpire)
- [pexpireat](redis.redis-1.md#pexpireat)
- [ping](redis.redis-1.md#ping)
- [pipeline](redis.redis-1.md#pipeline)
- [prependListener](redis.redis-1.md#prependlistener)
- [prependOnceListener](redis.redis-1.md#prependoncelistener)
- [psetex](redis.redis-1.md#psetex)
- [pttl](redis.redis-1.md#pttl)
- [publish](redis.redis-1.md#publish)
- [publishBuffer](redis.redis-1.md#publishbuffer)
- [quit](redis.redis-1.md#quit)
- [randomkey](redis.redis-1.md#randomkey)
- [rawListeners](redis.redis-1.md#rawlisteners)
- [removeAllListeners](redis.redis-1.md#removealllisteners)
- [removeListener](redis.redis-1.md#removelistener)
- [rename](redis.redis-1.md#rename)
- [renamenx](redis.redis-1.md#renamenx)
- [rpop](redis.redis-1.md#rpop)
- [rpoplpush](redis.redis-1.md#rpoplpush)
- [rpoplpushBuffer](redis.redis-1.md#rpoplpushbuffer)
- [save](redis.redis-1.md#save)
- [scan](redis.redis-1.md#scan)
- [scanPromise](redis.redis-1.md#scanpromise)
- [scanStream](redis.redis-1.md#scanstream)
- [scard](redis.redis-1.md#scard)
- [select](redis.redis-1.md#select)
- [sendCommand](redis.redis-1.md#sendcommand)
- [send\_command](redis.redis-1.md#send_command)
- [set](redis.redis-1.md#set)
- [setBuffer](redis.redis-1.md#setbuffer)
- [setMaxListeners](redis.redis-1.md#setmaxlisteners)
- [setbit](redis.redis-1.md#setbit)
- [setex](redis.redis-1.md#setex)
- [setnx](redis.redis-1.md#setnx)
- [setrange](redis.redis-1.md#setrange)
- [shutdown](redis.redis-1.md#shutdown)
- [sismember](redis.redis-1.md#sismember)
- [slaveof](redis.redis-1.md#slaveof)
- [smembers](redis.redis-1.md#smembers)
- [smove](redis.redis-1.md#smove)
- [spop](redis.redis-1.md#spop)
- [srandmember](redis.redis-1.md#srandmember)
- [sscanStream](redis.redis-1.md#sscanstream)
- [strlen](redis.redis-1.md#strlen)
- [substr](redis.redis-1.md#substr)
- [sync](redis.redis-1.md#sync)
- [time](redis.redis-1.md#time)
- [ttl](redis.redis-1.md#ttl)
- [type](redis.redis-1.md#type)
- [unwatch](redis.redis-1.md#unwatch)
- [xlen](redis.redis-1.md#xlen)
- [zaddBuffer](redis.redis-1.md#zaddbuffer)
- [zcard](redis.redis-1.md#zcard)
- [zcount](redis.redis-1.md#zcount)
- [zincrby](redis.redis-1.md#zincrby)
- [zpopmax](redis.redis-1.md#zpopmax)
- [zpopmin](redis.redis-1.md#zpopmin)
- [zrange](redis.redis-1.md#zrange)
- [zrangeBuffer](redis.redis-1.md#zrangebuffer)
- [zrangebylex](redis.redis-1.md#zrangebylex)
- [zrangebylexBuffer](redis.redis-1.md#zrangebylexbuffer)
- [zrangebyscore](redis.redis-1.md#zrangebyscore)
- [zrangebyscoreBuffer](redis.redis-1.md#zrangebyscorebuffer)
- [zrank](redis.redis-1.md#zrank)
- [zremrangebylex](redis.redis-1.md#zremrangebylex)
- [zremrangebyrank](redis.redis-1.md#zremrangebyrank)
- [zremrangebyscore](redis.redis-1.md#zremrangebyscore)
- [zrevrange](redis.redis-1.md#zrevrange)
- [zrevrangeBuffer](redis.redis-1.md#zrevrangebuffer)
- [zrevrangebylex](redis.redis-1.md#zrevrangebylex)
- [zrevrangebylexBuffer](redis.redis-1.md#zrevrangebylexbuffer)
- [zrevrangebyscore](redis.redis-1.md#zrevrangebyscore)
- [zrevrangebyscoreBuffer](redis.redis-1.md#zrevrangebyscorebuffer)
- [zrevrank](redis.redis-1.md#zrevrank)
- [zscanPromise](redis.redis-1.md#zscanpromise)
- [zscanStream](redis.redis-1.md#zscanstream)
- [zscore](redis.redis-1.md#zscore)

## Constructors

### constructor

\+ **new Redis**(...`args`: *any*[]): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`...args` | *any*[] |

**Returns:** [*Redis*](redis.redis-1.md)

Overrides: void

Defined in: [redis.ts:46](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L46)

## Properties

### NAME

• **NAME**: *string*

Defined in: [redis.ts:60](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L60)

___

### Promise

• **Promise**: PromiseConstructor

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1162

___

### blpop

• **blpop**: *OverloadedBlockingListCommand*<KeyType, [*string*, *string*]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:334

___

### brpop

• **brpop**: *OverloadedBlockingListCommand*<KeyType, [*string*, *string*]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:332

___

### bzpopmax

• **bzpopmax**: *OverloadedBlockingListCommand*<KeyType, [*string*, *string*, *string*]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:422

___

### bzpopmin

• **bzpopmin**: *OverloadedBlockingListCommand*<KeyType, [*string*, *string*, *string*]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:420

___

### client

• **client**: *OverloadedSubCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1057

___

### cluster

• **cluster**: *OverloadedSubCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1046

___

### debounced

• `Readonly` **debounced**: *object*

#### Type declaration:

Defined in: [redis.ts:65](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L65)

___

### debug

• **debug**: *OverloadedSubCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1019

___

### del

• **del**: *OverloadedListCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:267

___

### eval

• **eval**: *OverloadedEvalCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1059

___

### evalsha

• **evalsha**: *OverloadedEvalCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1061

___

### geohash

• **geohash**: *OverloadedKeyCommand*<string, string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:860

___

### geopos

• **geopos**: *OverloadedKeyCommand*<string, string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:862

___

### hdel

• **hdel**: *OverloadedKeyCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:837

___

### hmget

• **hmget**: *OverloadedKeyCommand*<KeyType, (*null* \| string)[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:826

___

### hmset

• **hmset**: *OverloadedKeyedHashCommand*<ValueType, *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:824

___

### hscan

• **hscan**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1116

___

### hset

• **hset**: *OverloadedKeyedHashCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:811

___

### lpush

• **lpush**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:303

___

### lpushBuffer

• **lpushBuffer**: *OverloadedKeyCommand*<Buffer, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:304

___

### lpushx

• **lpushx**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:308

___

### mget

• **mget**: *OverloadedListCommand*<KeyType, (*null* \| string)[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:298

___

### migrate

• **migrate**: *OverloadedListCommand*<ValueType, *OK* \| *NOKEY*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1050

___

### mset

• **mset**: *OverloadedHashCommand*<ValueType, *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:908

___

### msetnx

• **msetnx**: *OverloadedHashCommand*<ValueType, BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:909

___

### object

• **object**: *OverloadedListCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1055

___

### options

• `Readonly` **options**: RedisOptions

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1163

___

### pfadd

• **pfadd**: *OverloadedKeyCommand*<string, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1122

___

### pfcount

• **pfcount**: *OverloadedListCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1124

___

### pfmerge

• **pfmerge**: *OverloadedKeyCommand*<KeyType, *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1120

___

### psubscribe

• **psubscribe**: *OverloadedListCommand*<string, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1032

___

### punsubscribe

• **punsubscribe**: *OverloadedCommand*<string, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1034

___

### redlock

• `Readonly` **redlock**: *Redlock*

Defined in: [redis.ts:62](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L62)

___

### restore

• **restore**: *OverloadedListCommand*<ValueType, *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1048

___

### rpush

• **rpush**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:300

___

### rpushBuffer

• **rpushBuffer**: *OverloadedKeyCommand*<Buffer, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:301

___

### rpushx

• **rpushx**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:306

___

### sadd

• **sadd**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:366

___

### script

• **script**: *OverloadedSubCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1063

___

### sdiff

• **sdiff**: *OverloadedListCommand*<KeyType, string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:397

___

### sdiffstore

• **sdiffstore**: *OverloadedKeyCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:399

___

### sinter

• **sinter**: *OverloadedListCommand*<KeyType, string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:389

___

### sinterstore

• **sinterstore**: *OverloadedKeyCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:391

___

### sort

• **sort**: *OverloadedListCommand*<number \| KeyType, number \| string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:995

___

### srem

• **srem**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:368

___

### sscan

• **sscan**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1114

___

### status

• `Readonly` **status**: *string*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1164

___

### subscribe

• **subscribe**: *OverloadedListCommand*<string, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1028

___

### sunion

• **sunion**: *OverloadedListCommand*<KeyType, string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:393

___

### sunionstore

• **sunionstore**: *OverloadedKeyCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:395

___

### unlink

• **unlink**: *OverloadedListCommand*<KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:269

___

### unsubscribe

• **unsubscribe**: *OverloadedCommand*<string, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1030

___

### watch

• **watch**: *OverloadedListCommand*<KeyType, *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1041

___

### xack

• **xack**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1133

___

### xadd

• **xadd**: *OverloadedKeyCommand*<ValueType, string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1135

___

### xclaim

• **xclaim**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]][]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1137

___

### xdel

• **xdel**: *OverloadedKeyCommand*<string, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1139

___

### xgroup

• **xgroup**: *OverloadedSubCommand*<ValueType, *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1141

___

### xinfo

• **xinfo**: *OverloadedSubCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1143

___

### xpending

• **xpending**: *OverloadedKeyCommand*<ValueType, any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1148

___

### xrange

• **xrange**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]][]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1150

___

### xread

• **xread**: *OverloadedListCommand*<ValueType, [*string*, [*string*, *string*[]][]][]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1152

___

### xreadgroup

• **xreadgroup**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]][]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1154

___

### xrevrange

• **xrevrange**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]][]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1156

___

### xtrim

• **xtrim**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1158

___

### zadd

• **zadd**: *OverloadedKeyCommand*<number \| KeyType, string \| number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:404

___

### zinterstore

• **zinterstore**: *OverloadedKeyCommand*<number \| KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:446

___

### zrem

• **zrem**: *OverloadedKeyCommand*<ValueType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:424

___

### zscan

• **zscan**: *OverloadedKeyCommand*<ValueType, [*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1118

___

### zunionstore

• **zunionstore**: *OverloadedKeyCommand*<number \| KeyType, number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:444

___

### CONSTANTS

▪ `Static` `Readonly` **CONSTANTS**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`DEFAULT_SKEW_MS` | *number* |
`SEARCH_FIELD_TYPES` | *typeof* SEARCH\_FIELD\_TYPES |
`SEARCH_FIELD_TYPE_VALUES` | SEARCH\_FIELD\_TYPES[] |

Defined in: [redis.ts:42](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L42)

___

### Cluster

▪ `Static` **Cluster**: *ClusterStatic*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:41

___

### Command

▪ `Static` **Command**: *typeof* Command

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:62

___

### append

▸ **append**(`key`: KeyType, `value`: ValueType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:261

▸ **append**(`key`: KeyType, `value`: ValueType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:262

___

### auth

▸ **auth**(`username`: *string*, `password`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`username` | *string* |
`password` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:946

▸ **auth**(`password`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`password` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:947

▸ **auth**(`username`: *string*, `password`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`username` | *string* |
`password` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:949

▸ **auth**(`password`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`password` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:950

___

### bgrewriteaof

▸ **bgrewriteaof**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:965

▸ **bgrewriteaof**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:966

___

### bgsave

▸ **bgsave**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:962

▸ **bgsave**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:963

___

### bitcount

▸ **bitcount**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:201

▸ **bitcount**(`key`: KeyType, `start`: *number*, `end`: *number*, `callback`: (`err`: Error, `res`: *number*) => *void*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |
`callback` | (`err`: Error, `res`: *number*) => *void* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:202

▸ **bitcount**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:203

▸ **bitcount**(`key`: KeyType, `start`: *number*, `end`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:204

___

### brpoplpush

▸ **brpoplpush**(`source`: *string*, `destination`: *string*, `timeout`: *number*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`timeout` | *number* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:336

▸ **brpoplpush**(`source`: *string*, `destination`: *string*, `timeout`: *number*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`timeout` | *number* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:337

___

### config

▸ **config**(`op`: *GET*, `cfg`: *string*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *GET* |
`cfg` | *string* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1021

▸ **config**(`op`: *GET*, `cfg`: *string*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *GET* |
`cfg` | *string* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1022

▸ **config**(`op`: *REWRITE* \| *RESETSTAT*): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *REWRITE* \| *RESETSTAT* |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1023

▸ **config**(`op`: *REWRITE* \| *RESETSTAT*, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *REWRITE* \| *RESETSTAT* |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1024

▸ **config**(`op`: *SET*, `key`: *string*, `value`: ValueType): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *SET* |
`key` | *string* |
`value` | ValueType |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1025

▸ **config**(`op`: *SET*, `key`: *string*, `value`: ValueType, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`op` | *SET* |
`key` | *string* |
`value` | ValueType |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1026

___

### connect

▸ **connect**(`callback?`: () => *void*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`callback?` | () => *void* |

**Returns:** *Promise*<void\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1165

___

### createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`: *string*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`commandName` | *string* |

**Returns:** *object*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:50

___

### createRedlock

▸ **createRedlock**(`config?`: Options): *Redlock*

Get redlock instance

**`link`** https://www.npmjs.com/package/redlock

#### Parameters:

Name | Type |
:------ | :------ |
`config` | Options |

**Returns:** *Redlock*

Defined in: [redis.ts:114](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L114)

___

### dbsize

▸ **dbsize**(`callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:943

▸ **dbsize**(): *Promise*<number\>

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:944

___

### debounce

▸ **debounce**(`callback`: () => *void* \| *Promise*<void\>, `key`: *string*, `timeoutMs`: *number*, `skewMs?`: *number*): *Promise*<any\>

Debounce a callback using Redis and setTimeout locally

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | () => *void* \| *Promise*<void\> |
`key` | *string* |
`timeoutMs` | *number* |
`skewMs` | *number* |

**Returns:** *Promise*<any\>

Defined in: [redis.ts:176](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L176)

___

### decr

▸ **decr**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:295

▸ **decr**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:296

___

### decrby

▸ **decrby**(`key`: KeyType, `decrement`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`decrement` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:902

▸ **decrby**(`key`: KeyType, `decrement`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`decrement` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:903

___

### defineCommand

▸ **defineCommand**(`name`: *string*, `definition`: { `lua?`: *string* ; `numberOfKeys?`: *number*  }): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`definition` | *object* |
`definition.lua?` | *string* |
`definition.numberOfKeys?` | *number* |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:51

___

### discard

▸ **discard**(`callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:983

▸ **discard**(): *Promise*<*OK*\>

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:984

___

### disconnect

▸ **disconnect**(): *void*

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1166

___

### dump

▸ **dump**(`key`: KeyType, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1052

▸ **dump**(`key`: KeyType): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1053

___

### duplicate

▸ **duplicate**(): *Redis*

**Returns:** *Redis*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1167

___

### echo

▸ **echo**(`message`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:956

▸ **echo**(`message`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:957

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:77

___

### exec

▸ **exec**(`callback`: *Callback*<[*null* \| Error, *string*][]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<[*null* \| Error, *string*][]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:980

▸ **exec**(): *Promise*<[*null* \| Error, *string*][]\>

**Returns:** *Promise*<[*null* \| Error, *string*][]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:981

___

### exists

▸ **exists**(...`keys`: KeyType[]): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`...keys` | KeyType[] |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:271

▸ **exists**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:272

___

### expire

▸ **expire**(`key`: KeyType, `seconds`: *number*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`seconds` | *number* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:928

▸ **expire**(`key`: KeyType, `seconds`: *number*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`seconds` | *number* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:929

___

### expireat

▸ **expireat**(`key`: KeyType, `timestamp`: *number*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`timestamp` | *number* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:934

▸ **expireat**(`key`: KeyType, `timestamp`: *number*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`timestamp` | *number* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:935

___

### flushall

▸ **flushall**(`callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:992

▸ **flushall**(): *Promise*<*OK*\>

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:993

___

### flushdb

▸ **flushdb**(`callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:989

▸ **flushdb**(): *Promise*<*OK*\>

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:990

___

### geoadd

▸ **geoadd**(`key`: KeyType, `longitude`: *number*, `latitude`: *number*, `member`: *string*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`longitude` | *number* |
`latitude` | *number* |
`member` | *string* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:854

▸ **geoadd**(`key`: KeyType, `longitude`: *number*, `latitude`: *number*, `member`: *string*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`longitude` | *number* |
`latitude` | *number* |
`member` | *string* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:855

___

### geodist

▸ **geodist**(`key`: KeyType, `member1`: *string*, `member2`: *string*, `unit`: *m* \| *km* \| *ft* \| *mi*, `callback`: *Callback*<*null* \| string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member1` | *string* |
`member2` | *string* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`callback` | *Callback*<*null* \| string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:857

▸ **geodist**(`key`: KeyType, `member1`: *string*, `member2`: *string*, `unit`: *m* \| *km* \| *ft* \| *mi*): *Promise*<*null* \| string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member1` | *string* |
`member2` | *string* |
`unit` | *m* \| *km* \| *ft* \| *mi* |

**Returns:** *Promise*<*null* \| string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:858

___

### georadius

▸ **georadius**(`key`: KeyType, `longitude`: *number*, `latitude`: *number*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`longitude` | *number* |
`latitude` | *number* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:864

▸ **georadius**(`key`: KeyType, `longitude`: *number*, `latitude`: *number*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*, `sort?`: *ASC* \| *DESC*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`longitude` | *number* |
`latitude` | *number* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`sort?` | *ASC* \| *DESC* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:872

▸ **georadius**(`key`: KeyType, `longitude`: *number*, `latitude`: *number*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*, `count`: *COUNT*, `countValue`: *number*, `sort?`: *ASC* \| *DESC*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`longitude` | *number* |
`latitude` | *number* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`count` | *COUNT* |
`countValue` | *number* |
`sort?` | *ASC* \| *DESC* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:880

___

### georadiusbymember

▸ **georadiusbymember**(`key`: KeyType, `member`: *string*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:891

▸ **georadiusbymember**(`key`: KeyType, `member`: *string*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*, `count`: *COUNT*, `countValue`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`count` | *COUNT* |
`countValue` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:892

▸ **georadiusbymember**(`key`: KeyType, `member`: *string*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:893

▸ **georadiusbymember**(`key`: KeyType, `member`: *string*, `radius`: *number*, `unit`: *m* \| *km* \| *ft* \| *mi*, `count`: *COUNT*, `countValue`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`radius` | *number* |
`unit` | *m* \| *km* \| *ft* \| *mi* |
`count` | *COUNT* |
`countValue` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:894

___

### get

▸ **get**(`key`: KeyType, `callback`: *Callback*<*null* \| string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<*null* \| string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:206

▸ **get**(`key`: KeyType): *Promise*<*null* \| string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<*null* \| string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:207

___

### getBuffer

▸ **getBuffer**(`key`: KeyType, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:209

▸ **getBuffer**(`key`: KeyType): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:210

___

### getBuiltinCommands

▸ **getBuiltinCommands**(): *string*[]

**Returns:** *string*[]

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:49

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:69

___

### getbit

▸ **getbit**(`key`: KeyType, `offset`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`offset` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:277

▸ **getbit**(`key`: KeyType, `offset`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`offset` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:278

___

### getrange

▸ **getrange**(`key`: KeyType, `start`: *number*, `end`: *number*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:283

▸ **getrange**(`key`: KeyType, `start`: *number*, `end`: *number*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:284

___

### getrangeBuffer

▸ **getrangeBuffer**(`key`: KeyType, `start`: *number*, `end`: *number*, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:286

▸ **getrangeBuffer**(`key`: KeyType, `start`: *number*, `end`: *number*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:287

___

### getset

▸ **getset**(`key`: KeyType, `value`: ValueType, `callback`: *Callback*<*null* \| string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`callback` | *Callback*<*null* \| string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:905

▸ **getset**(`key`: KeyType, `value`: ValueType): *Promise*<*null* \| string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise*<*null* \| string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:906

___

### hexists

▸ **hexists**(`key`: KeyType, `field`: *string*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:851

▸ **hexists**(`key`: KeyType, `field`: *string*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:852

___

### hget

▸ **hget**(`key`: KeyType, `field`: *string*, `callback`: *Callback*<*null* \| string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`callback` | *Callback*<*null* \| string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:819

▸ **hget**(`key`: KeyType, `field`: *string*): *Promise*<*null* \| string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |

**Returns:** *Promise*<*null* \| string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:820

___

### hgetBuffer

▸ **hgetBuffer**(`key`: KeyType, `field`: *string*, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:821

▸ **hgetBuffer**(`key`: KeyType, `field`: *string*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:822

___

### hgetall

▸ **hgetall**(`key`: KeyType, `callback`: *Callback*<Record<string, string\>\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<Record<string, string\>\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:848

▸ **hgetall**(`key`: KeyType): *Promise*<Record<string, string\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<Record<string, string\>\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:849

___

### hincrby

▸ **hincrby**(`key`: KeyType, `field`: *string*, `increment`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`increment` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:831

▸ **hincrby**(`key`: KeyType, `field`: *string*, `increment`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`increment` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:832

___

### hincrbyfloat

▸ **hincrbyfloat**(`key`: KeyType, `field`: *string*, `increment`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`increment` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:834

▸ **hincrbyfloat**(`key`: KeyType, `field`: *string*, `increment`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`increment` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:835

___

### hkeys

▸ **hkeys**(`key`: KeyType, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:842

▸ **hkeys**(`key`: KeyType): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:843

___

### hlen

▸ **hlen**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:839

▸ **hlen**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:840

___

### hscanStream

▸ **hscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1130

___

### hsetBuffer

▸ **hsetBuffer**(`key`: KeyType, `field`: *string*, `value`: ValueType, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`value` | ValueType |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:813

▸ **hsetBuffer**(`key`: KeyType, `field`: *string*, `value`: ValueType): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`value` | ValueType |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:814

___

### hsetnx

▸ **hsetnx**(`key`: KeyType, `field`: *string*, `value`: ValueType, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`value` | ValueType |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:816

▸ **hsetnx**(`key`: KeyType, `field`: *string*, `value`: ValueType): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`value` | ValueType |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:817

___

### hstrlen

▸ **hstrlen**(`key`: KeyType, `field`: *string*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:828

▸ **hstrlen**(`key`: KeyType, `field`: *string*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`field` | *string* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:829

___

### hvals

▸ **hvals**(`key`: KeyType, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:845

▸ **hvals**(`key`: KeyType): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:846

___

### incr

▸ **incr**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:292

▸ **incr**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:293

___

### incrby

▸ **incrby**(`key`: KeyType, `increment`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`increment` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:896

▸ **incrby**(`key`: KeyType, `increment`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`increment` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:897

___

### incrbyfloat

▸ **incrbyfloat**(`key`: KeyType, `increment`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`increment` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:899

▸ **incrbyfloat**(`key`: KeyType, `increment`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`increment` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:900

___

### info

▸ **info**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:997

▸ **info**(`section`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`section` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:998

▸ **info**(`section?`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`section?` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:999

___

### keys

▸ **keys**(`pattern`: *string*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pattern` | *string* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:940

▸ **keys**(`pattern`: *string*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`pattern` | *string* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:941

___

### lastsave

▸ **lastsave**(`callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:971

▸ **lastsave**(): *Promise*<number\>

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:972

___

### lindex

▸ **lindex**(`key`: KeyType, `index`: *number*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`index` | *number* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:342

▸ **lindex**(`key`: KeyType, `index`: *number*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`index` | *number* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:343

___

### linsert

▸ **linsert**(`key`: KeyType, `direction`: *BEFORE* \| *AFTER*, `pivot`: *string*, `value`: ValueType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`direction` | *BEFORE* \| *AFTER* |
`pivot` | *string* |
`value` | ValueType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:310

▸ **linsert**(`key`: KeyType, `direction`: *BEFORE* \| *AFTER*, `pivot`: *string*, `value`: ValueType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`direction` | *BEFORE* \| *AFTER* |
`pivot` | *string* |
`value` | ValueType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:317

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:70

___

### llen

▸ **llen**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:339

▸ **llen**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:340

___

### lock

▸ **lock**(`key`: *string*, `ttl`: *number*): *Promise*<*null* \| Lock\>

Acquire lock in Redis

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`ttl` | *number* |

**Returns:** *Promise*<*null* \| Lock\>

Defined in: [redis.ts:74](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L74)

___

### lpop

▸ **lpop**(`key`: KeyType, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:322

▸ **lpop**(`key`: KeyType): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:323

▸ **lpop**(`key`: KeyType, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:324

▸ **lpop**(`key`: KeyType, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:325

___

### lpopBuffer

▸ **lpopBuffer**(`key`: KeyType, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:329

▸ **lpopBuffer**(`key`: KeyType): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:330

___

### lpos

▸ **lpos**(`key`: KeyType, `value`: ValueType, `rank?`: *number*, `count?`: *number*, `maxlen?`: *number*): *Promise*<*null* \| number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`rank?` | *number* |
`count?` | *number* |
`maxlen?` | *number* |

**Returns:** *Promise*<*null* \| number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:327

___

### lrange

▸ **lrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:348

▸ **lrange**(`key`: KeyType, `start`: *number*, `stop`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:349

___

### lrangeBuffer

▸ **lrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:351

▸ **lrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:352

___

### lrem

▸ **lrem**(`key`: KeyType, `count`: *number*, `value`: ValueType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`value` | ValueType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:357

▸ **lrem**(`key`: KeyType, `count`: *number*, `value`: ValueType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`value` | ValueType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:358

___

### lset

▸ **lset**(`key`: KeyType, `index`: *number*, `value`: ValueType, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`index` | *number* |
`value` | ValueType |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:345

▸ **lset**(`key`: KeyType, `index`: *number*, `value`: ValueType): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`index` | *number* |
`value` | ValueType |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:346

___

### ltrim

▸ **ltrim**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:354

▸ **ltrim**(`key`: KeyType, `start`: *number*, `stop`: *number*): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:355

___

### memory

▸ **memory**(`argument`: *USAGE*, `key`: KeyType, `callback?`: *Callback*<number\>): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`argument` | *USAGE* |
`key` | KeyType |
`callback?` | *Callback*<number\> |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:911

___

### monitor

▸ **monitor**(`callback`: *Callback*<EventEmitter\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<EventEmitter\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1004

▸ **monitor**(): *Promise*<EventEmitter\>

**Returns:** *Promise*<EventEmitter\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1005

___

### move

▸ **move**(`key`: KeyType, `db`: *string*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`db` | *string* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:919

▸ **move**(`key`: KeyType, `db`: *string*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`db` | *string* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:920

___

### multi

▸ **multi**(`commands?`: *string*[][], `options?`: MultiOptions): Pipeline

#### Parameters:

Name | Type |
:------ | :------ |
`commands?` | *string*[][] |
`options?` | MultiOptions |

**Returns:** Pipeline

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:977

▸ **multi**(`options`: { `pipeline`: *false*  }): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`options` | *object* |
`options.pipeline` | *false* |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:978

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:64

___

### persist

▸ **persist**(`key`: KeyType, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1013

▸ **persist**(`key`: KeyType): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1014

___

### pexpire

▸ **pexpire**(`key`: KeyType, `milliseconds`: *number*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`milliseconds` | *number* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:931

▸ **pexpire**(`key`: KeyType, `milliseconds`: *number*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`milliseconds` | *number* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:932

___

### pexpireat

▸ **pexpireat**(`key`: KeyType, `millisecondsTimestamp`: *number*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`millisecondsTimestamp` | *number* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:937

▸ **pexpireat**(`key`: KeyType, `millisecondsTimestamp`: *number*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`millisecondsTimestamp` | *number* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:938

___

### ping

▸ **ping**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:952

▸ **ping**(`message`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:953

▸ **ping**(`message?`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`message?` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:954

___

### pipeline

▸ **pipeline**(`commands?`: *string*[][]): Pipeline

#### Parameters:

Name | Type |
:------ | :------ |
`commands?` | *string*[][] |

**Returns:** Pipeline

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1126

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:76

___

### psetex

▸ **psetex**(`key`: KeyType, `milliseconds`: *number*, `value`: ValueType, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`milliseconds` | *number* |
`value` | ValueType |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:258

▸ **psetex**(`key`: KeyType, `milliseconds`: *number*, `value`: ValueType): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`milliseconds` | *number* |
`value` | ValueType |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:259

___

### pttl

▸ **pttl**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1010

▸ **pttl**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1011

___

### publish

▸ **publish**(`channel`: *string*, `message`: *string*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`channel` | *string* |
`message` | *string* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1036

▸ **publish**(`channel`: *string*, `message`: *string*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`channel` | *string* |
`message` | *string* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1037

___

### publishBuffer

▸ **publishBuffer**(`channel`: *string*, `message`: *Buffer*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`channel` | *string* |
`message` | *Buffer* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1039

___

### quit

▸ **quit**(`callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1065

▸ **quit**(): *Promise*<*OK*\>

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1066

___

### randomkey

▸ **randomkey**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:913

▸ **randomkey**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:914

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:65

___

### rename

▸ **rename**(`key`: KeyType, `newkey`: KeyType, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`newkey` | KeyType |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:922

▸ **rename**(`key`: KeyType, `newkey`: KeyType): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`newkey` | KeyType |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:923

___

### renamenx

▸ **renamenx**(`key`: KeyType, `newkey`: KeyType, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`newkey` | KeyType |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:925

▸ **renamenx**(`key`: KeyType, `newkey`: KeyType): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`newkey` | KeyType |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:926

___

### rpop

▸ **rpop**(`key`: KeyType, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:319

▸ **rpop**(`key`: KeyType): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:320

___

### rpoplpush

▸ **rpoplpush**(`source`: *string*, `destination`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:360

▸ **rpoplpush**(`source`: *string*, `destination`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:361

___

### rpoplpushBuffer

▸ **rpoplpushBuffer**(`source`: *string*, `destination`: *string*, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:363

▸ **rpoplpushBuffer**(`source`: *string*, `destination`: *string*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:364

___

### save

▸ **save**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:959

▸ **save**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:960

___

### scan

▸ **scan**(`cursor`: *string* \| *number*, `matchOption`: *match* \| *MATCH*, `pattern`: *string*): *Promise*<[*string*, *string*[]]\>

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`matchOption` | *match* \| *MATCH* |
`pattern` | *string* |

**Returns:** *Promise*<[*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1068

▸ **scan**(`cursor`: *string* \| *number*, `matchOption`: *match* \| *MATCH*, `pattern`: *string*, `callback`: *Callback*<[*string*, *string*[]]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`matchOption` | *match* \| *MATCH* |
`pattern` | *string* |
`callback` | *Callback*<[*string*, *string*[]]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1069

▸ **scan**(`cursor`: *string* \| *number*, `countOption`: *COUNT* \| *count*, `count`: *number*): *Promise*<[*string*, *string*[]]\>

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`countOption` | *COUNT* \| *count* |
`count` | *number* |

**Returns:** *Promise*<[*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1075

▸ **scan**(`cursor`: *string* \| *number*, `countOption`: *COUNT* \| *count*, `count`: *number*, `callback`: *Callback*<[*string*, *string*[]]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`countOption` | *COUNT* \| *count* |
`count` | *number* |
`callback` | *Callback*<[*string*, *string*[]]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1076

▸ **scan**(`cursor`: *string* \| *number*, `matchOption`: *match* \| *MATCH*, `pattern`: *string*, `countOption`: *COUNT* \| *count*, `count`: *number*): *Promise*<[*string*, *string*[]]\>

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`matchOption` | *match* \| *MATCH* |
`pattern` | *string* |
`countOption` | *COUNT* \| *count* |
`count` | *number* |

**Returns:** *Promise*<[*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1083

▸ **scan**(`cursor`: *string* \| *number*, `matchOption`: *match* \| *MATCH*, `pattern`: *string*, `countOption`: *COUNT* \| *count*, `count`: *number*, `callback`: *Callback*<[*string*, *string*[]]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`matchOption` | *match* \| *MATCH* |
`pattern` | *string* |
`countOption` | *COUNT* \| *count* |
`count` | *number* |
`callback` | *Callback*<[*string*, *string*[]]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1090

▸ **scan**(`cursor`: *string* \| *number*, `countOption`: *COUNT* \| *count*, `count`: *number*, `matchOption`: *match* \| *MATCH*, `pattern`: *string*): *Promise*<[*string*, *string*[]]\>

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`countOption` | *COUNT* \| *count* |
`count` | *number* |
`matchOption` | *match* \| *MATCH* |
`pattern` | *string* |

**Returns:** *Promise*<[*string*, *string*[]]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1098

▸ **scan**(`cursor`: *string* \| *number*, `countOption`: *COUNT* \| *count*, `count`: *number*, `matchOption`: *match* \| *MATCH*, `pattern`: *string*, `callback`: *Callback*<[*string*, *string*[]]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cursor` | *string* \| *number* |
`countOption` | *COUNT* \| *count* |
`count` | *number* |
`matchOption` | *match* \| *MATCH* |
`pattern` | *string* |
`callback` | *Callback*<[*string*, *string*[]]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1105

___

### scanPromise

▸ **scanPromise**(`options?`: ScanStreamOption): *Promise*<string[]\>

Wrapper for scanStream that returns a promise

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | ScanStreamOption |

**Returns:** *Promise*<string[]\>

Defined in: [redis.ts:125](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L125)

___

### scanStream

▸ **scanStream**(`options?`: ScanStreamOption): *Readable*

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | ScanStreamOption |

**Returns:** *Readable*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1128

___

### scard

▸ **scard**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:376

▸ **scard**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:377

___

### select

▸ **select**(`index`: *number*, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:916

▸ **select**(`index`: *number*): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:917

___

### sendCommand

▸ **sendCommand**(): *void*

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:58

___

### send\_command

▸ **send_command**(`command`: *string*, ...`args`: ValueType[]): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`command` | *string* |
`...args` | ValueType[] |

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1169

___

### set

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode?`: *string* \| *any*[], `time?`: *string* \| *number*, `setMode?`: *string* \| *number*): *Promise*<*null* \| *OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode?` | *string* \| *any*[] |
`time?` | *string* \| *number* |
`setMode?` | *string* \| *number* |

**Returns:** *Promise*<*null* \| *OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:212

▸ **set**(`key`: KeyType, `value`: ValueType, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:220

▸ **set**(`key`: KeyType, `value`: ValueType, `setMode`: *string* \| *any*[], `callback`: *Callback*<*null* \| *OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`setMode` | *string* \| *any*[] |
`callback` | *Callback*<*null* \| *OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:221

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode`: *string*, `time`: *string* \| *number*, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | *string* |
`time` | *string* \| *number* |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:222

▸ **set**(`key`: KeyType, `value`: ValueType, `expiryMode`: *string*, `time`: *string* \| *number*, `setMode`: *string* \| *number*, `callback`: *Callback*<*null* \| *OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | *string* |
`time` | *string* \| *number* |
`setMode` | *string* \| *number* |
`callback` | *Callback*<*null* \| *OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:223

___

### setBuffer

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode?`: *string* \| *any*[], `time?`: *string* \| *number*, `setMode?`: *string* \| *number*): *Promise*<Buffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode?` | *string* \| *any*[] |
`time?` | *string* \| *number* |
`setMode?` | *string* \| *number* |

**Returns:** *Promise*<Buffer\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:232

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:240

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `setMode`: *string*, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`setMode` | *string* |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:241

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode`: *string*, `time`: *number*, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | *string* |
`time` | *number* |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:242

▸ **setBuffer**(`key`: KeyType, `value`: ValueType, `expiryMode`: *string*, `time`: *string* \| *number*, `setMode`: *string* \| *number*, `callback`: *Callback*<Buffer\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`expiryMode` | *string* |
`time` | *string* \| *number* |
`setMode` | *string* \| *number* |
`callback` | *Callback*<Buffer\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:243

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Redis*](redis.redis-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Redis*](redis.redis-1.md)

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:68

___

### setbit

▸ **setbit**(`key`: KeyType, `offset`: *number*, `value`: ValueType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`offset` | *number* |
`value` | ValueType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:274

▸ **setbit**(`key`: KeyType, `offset`: *number*, `value`: ValueType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`offset` | *number* |
`value` | ValueType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:275

___

### setex

▸ **setex**(`key`: KeyType, `seconds`: *number*, `value`: ValueType, `callback`: *Callback*<*OK*\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`seconds` | *number* |
`value` | ValueType |
`callback` | *Callback*<*OK*\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:255

▸ **setex**(`key`: KeyType, `seconds`: *number*, `value`: ValueType): *Promise*<*OK*\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`seconds` | *number* |
`value` | ValueType |

**Returns:** *Promise*<*OK*\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:256

___

### setnx

▸ **setnx**(`key`: KeyType, `value`: ValueType, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:252

▸ **setnx**(`key`: KeyType, `value`: ValueType): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`value` | ValueType |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:253

___

### setrange

▸ **setrange**(`key`: KeyType, `offset`: *number*, `value`: ValueType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`offset` | *number* |
`value` | ValueType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:280

▸ **setrange**(`key`: KeyType, `offset`: *number*, `value`: ValueType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`offset` | *number* |
`value` | ValueType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:281

___

### shutdown

▸ **shutdown**(`save`: *SAVE* \| *NOSAVE*, `callback`: *Callback*<never\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`save` | *SAVE* \| *NOSAVE* |
`callback` | *Callback*<never\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:968

▸ **shutdown**(`save`: *SAVE* \| *NOSAVE*): *Promise*<never\>

#### Parameters:

Name | Type |
:------ | :------ |
`save` | *SAVE* \| *NOSAVE* |

**Returns:** *Promise*<never\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:969

___

### sismember

▸ **sismember**(`key`: KeyType, `member`: *string*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:373

▸ **sismember**(`key`: KeyType, `member`: *string*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:374

___

### slaveof

▸ **slaveof**(`host`: *string*, `port`: *number*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`host` | *string* |
`port` | *number* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1016

▸ **slaveof**(`host`: *string*, `port`: *number*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`host` | *string* |
`port` | *number* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1017

___

### smembers

▸ **smembers**(`key`: KeyType, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:401

▸ **smembers**(`key`: KeyType): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:402

___

### smove

▸ **smove**(`source`: *string*, `destination`: *string*, `member`: *string*, `callback`: *Callback*<BooleanResponse\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`member` | *string* |
`callback` | *Callback*<BooleanResponse\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:370

▸ **smove**(`source`: *string*, `destination`: *string*, `member`: *string*): *Promise*<BooleanResponse\>

#### Parameters:

Name | Type |
:------ | :------ |
`source` | *string* |
`destination` | *string* |
`member` | *string* |

**Returns:** *Promise*<BooleanResponse\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:371

___

### spop

▸ **spop**(`key`: KeyType, `callback`: *Callback*<*null* \| string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<*null* \| string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:379

▸ **spop**(`key`: KeyType): *Promise*<*null* \| string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<*null* \| string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:380

▸ **spop**(`key`: KeyType, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:381

▸ **spop**(`key`: KeyType, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:382

___

### srandmember

▸ **srandmember**(`key`: KeyType, `callback`: *Callback*<*null* \| string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<*null* \| string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:384

▸ **srandmember**(`key`: KeyType): *Promise*<*null* \| string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<*null* \| string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:385

▸ **srandmember**(`key`: KeyType, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:386

▸ **srandmember**(`key`: KeyType, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:387

___

### sscanStream

▸ **sscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1129

___

### strlen

▸ **strlen**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:264

▸ **strlen**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:265

___

### substr

▸ **substr**(`key`: KeyType, `start`: *number*, `end`: *number*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:289

▸ **substr**(`key`: KeyType, `start`: *number*, `end`: *number*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`end` | *number* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:290

___

### sync

▸ **sync**(`callback`: *Callback*<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<any\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:986

▸ **sync**(): *Promise*<any\>

**Returns:** *Promise*<any\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:987

___

### time

▸ **time**(`callback`: *Callback*<[*string*, *string*]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<[*string*, *string*]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1001

▸ **time**(): *Promise*<[*string*, *string*]\>

**Returns:** *Promise*<[*string*, *string*]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1002

___

### ttl

▸ **ttl**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1007

▸ **ttl**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1008

___

### type

▸ **type**(`key`: KeyType, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:974

▸ **type**(`key`: KeyType): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:975

___

### unwatch

▸ **unwatch**(`callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1043

▸ **unwatch**(): *Promise*<string\>

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1044

___

### xlen

▸ **xlen**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1145

▸ **xlen**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1146

___

### zaddBuffer

▸ **zaddBuffer**(`key`: KeyType, `score1`: *number*, `member1`: *Buffer*, `callback`: *Callback*<string \| number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`score1` | *number* |
`member1` | *Buffer* |
`callback` | *Callback*<string \| number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:406

▸ **zaddBuffer**(`key`: KeyType, `score1`: *number*, `member1`: *Buffer*): *Promise*<string \| number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`score1` | *number* |
`member1` | *Buffer* |

**Returns:** *Promise*<string \| number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:407

___

### zcard

▸ **zcard**(`key`: KeyType, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:799

▸ **zcard**(`key`: KeyType): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:800

___

### zcount

▸ **zcount**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:796

▸ **zcount**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:797

___

### zincrby

▸ **zincrby**(`key`: KeyType, `increment`: *number*, `member`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`increment` | *number* |
`member` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:409

▸ **zincrby**(`key`: KeyType, `increment`: *number*, `member`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`increment` | *number* |
`member` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:410

___

### zpopmax

▸ **zpopmax**(`key`: KeyType, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:416

▸ **zpopmax**(`key`: KeyType, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:417

▸ **zpopmax**(`key`: KeyType, `count?`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count?` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:418

___

### zpopmin

▸ **zpopmin**(`key`: KeyType, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:412

▸ **zpopmin**(`key`: KeyType, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:413

▸ **zpopmin**(`key`: KeyType, `count?`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`count?` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:414

___

### zrange

▸ **zrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:448

▸ **zrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:449

▸ **zrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores?`: *WITHSCORES*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:450

___

### zrangeBuffer

▸ **zrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:452

▸ **zrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:453

▸ **zrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores?`: *WITHSCORES*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:454

___

### zrangebylex

▸ **zrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:680

▸ **zrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:685

▸ **zrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:693

▸ **zrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:699

___

### zrangebylexBuffer

▸ **zrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:709

▸ **zrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:714

▸ **zrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:722

▸ **zrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:728

___

### zrangebyscore

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores?`: *WITHSCORES*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:476

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:482

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:491

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:499

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:500

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:507

▸ **zrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:517

___

### zrangebyscoreBuffer

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores?`: *WITHSCORES*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:527

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:533

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:542

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:550

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:551

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:558

▸ **zrangebyscoreBuffer**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:568

___

### zrank

▸ **zrank**(`key`: KeyType, `member`: *string*, `callback`: *Callback*<*null* \| number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`callback` | *Callback*<*null* \| number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:805

▸ **zrank**(`key`: KeyType, `member`: *string*): *Promise*<*null* \| number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |

**Returns:** *Promise*<*null* \| number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:806

___

### zremrangebylex

▸ **zremrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:432

▸ **zremrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:437

___

### zremrangebyrank

▸ **zremrangebyrank**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:429

▸ **zremrangebyrank**(`key`: KeyType, `start`: *number*, `stop`: *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:430

___

### zremrangebyscore

▸ **zremrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*, `callback`: *Callback*<number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |
`callback` | *Callback*<number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:426

▸ **zremrangebyscore**(`key`: KeyType, `min`: *string* \| *number*, `max`: *string* \| *number*): *Promise*<number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* \| *number* |
`max` | *string* \| *number* |

**Returns:** *Promise*<number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:427

___

### zrevrange

▸ **zrevrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:456

▸ **zrevrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:457

▸ **zrevrange**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores?`: *WITHSCORES*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:464

___

### zrevrangeBuffer

▸ **zrevrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:466

▸ **zrevrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:467

▸ **zrevrangeBuffer**(`key`: KeyType, `start`: *number*, `stop`: *number*, `withScores?`: *WITHSCORES*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`start` | *number* |
`stop` | *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:474

___

### zrevrangebylex

▸ **zrevrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:738

▸ **zrevrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:743

▸ **zrevrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:751

▸ **zrevrangebylex**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:757

___

### zrevrangebylexBuffer

▸ **zrevrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:767

▸ **zrevrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:772

▸ **zrevrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:780

▸ **zrevrangebylexBuffer**(`key`: KeyType, `min`: *string*, `max`: *string*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`min` | *string* |
`max` | *string* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:786

___

### zrevrangebyscore

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores?`: *WITHSCORES*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:578

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:584

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<string[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<string[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:593

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:601

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:602

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:609

▸ **zrevrangebyscore**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<string[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<string[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:619

___

### zrevrangebyscoreBuffer

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores?`: *WITHSCORES*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores?` | *WITHSCORES* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:629

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:635

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*): *Promise*<Buffer[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |

**Returns:** *Promise*<Buffer[]\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:644

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:652

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores`: *WITHSCORES*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:653

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `withScores`: *WITHSCORES*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`withScores` | *WITHSCORES* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:660

▸ **zrevrangebyscoreBuffer**(`key`: KeyType, `max`: *string* \| *number*, `min`: *string* \| *number*, `limit`: *LIMIT*, `offset`: *number*, `count`: *number*, `callback`: *Callback*<Buffer[]\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`max` | *string* \| *number* |
`min` | *string* \| *number* |
`limit` | *LIMIT* |
`offset` | *number* |
`count` | *number* |
`callback` | *Callback*<Buffer[]\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:670

___

### zrevrank

▸ **zrevrank**(`key`: KeyType, `member`: *string*, `callback`: *Callback*<*null* \| number\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`callback` | *Callback*<*null* \| number\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:808

▸ **zrevrank**(`key`: KeyType, `member`: *string*): *Promise*<*null* \| number\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |

**Returns:** *Promise*<*null* \| number\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:809

___

### zscanPromise

▸ **zscanPromise**(`key`: KeyType, `options?`: ScanStreamOption): *Promise*<string[]\>

Wrapper for scanStream that returns a promise

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Promise*<string[]\>

Defined in: [redis.ts:149](https://github.com/gapizza/redis/blob/4aeef85/redis.ts#L149)

___

### zscanStream

▸ **zscanStream**(`key`: KeyType, `options?`: ScanStreamOption): *Readable*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`options?` | ScanStreamOption |

**Returns:** *Readable*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:1131

___

### zscore

▸ **zscore**(`key`: KeyType, `member`: *string*, `callback`: *Callback*<string\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |
`callback` | *Callback*<string\> |

**Returns:** *void*

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:802

▸ **zscore**(`key`: KeyType, `member`: *string*): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | KeyType |
`member` | *string* |

**Returns:** *Promise*<string\>

Inherited from: void

Defined in: node_modules/@types/ioredis/index.d.ts:803
