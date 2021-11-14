[@gapizza/redis](../README.md) / [redis](../modules/redis.md) / Redis

# Class: Redis

[redis](../modules/redis.md).Redis

## Hierarchy

- `IORedis`

  ↳ **`Redis`**

## Table of contents

### Constructors

- [constructor](redis.Redis.md#constructor)

### Properties

- [NAME](redis.Redis.md#name)
- [Promise](redis.Redis.md#promise)
- [blpop](redis.Redis.md#blpop)
- [brpop](redis.Redis.md#brpop)
- [bzpopmax](redis.Redis.md#bzpopmax)
- [bzpopmin](redis.Redis.md#bzpopmin)
- [client](redis.Redis.md#client)
- [cluster](redis.Redis.md#cluster)
- [debounced](redis.Redis.md#debounced)
- [debug](redis.Redis.md#debug)
- [del](redis.Redis.md#del)
- [eval](redis.Redis.md#eval)
- [evalsha](redis.Redis.md#evalsha)
- [geohash](redis.Redis.md#geohash)
- [geopos](redis.Redis.md#geopos)
- [hdel](redis.Redis.md#hdel)
- [hmget](redis.Redis.md#hmget)
- [hmgetBuffer](redis.Redis.md#hmgetbuffer)
- [hmset](redis.Redis.md#hmset)
- [hscan](redis.Redis.md#hscan)
- [hset](redis.Redis.md#hset)
- [lpush](redis.Redis.md#lpush)
- [lpushBuffer](redis.Redis.md#lpushbuffer)
- [lpushx](redis.Redis.md#lpushx)
- [mget](redis.Redis.md#mget)
- [migrate](redis.Redis.md#migrate)
- [mset](redis.Redis.md#mset)
- [msetnx](redis.Redis.md#msetnx)
- [object](redis.Redis.md#object)
- [options](redis.Redis.md#options)
- [pfadd](redis.Redis.md#pfadd)
- [pfcount](redis.Redis.md#pfcount)
- [pfmerge](redis.Redis.md#pfmerge)
- [psubscribe](redis.Redis.md#psubscribe)
- [punsubscribe](redis.Redis.md#punsubscribe)
- [redlock](redis.Redis.md#redlock)
- [restore](redis.Redis.md#restore)
- [rpush](redis.Redis.md#rpush)
- [rpushBuffer](redis.Redis.md#rpushbuffer)
- [rpushx](redis.Redis.md#rpushx)
- [sadd](redis.Redis.md#sadd)
- [script](redis.Redis.md#script)
- [sdiff](redis.Redis.md#sdiff)
- [sdiffstore](redis.Redis.md#sdiffstore)
- [sinter](redis.Redis.md#sinter)
- [sinterstore](redis.Redis.md#sinterstore)
- [sort](redis.Redis.md#sort)
- [srem](redis.Redis.md#srem)
- [sscan](redis.Redis.md#sscan)
- [status](redis.Redis.md#status)
- [subscribe](redis.Redis.md#subscribe)
- [sunion](redis.Redis.md#sunion)
- [sunionstore](redis.Redis.md#sunionstore)
- [unlink](redis.Redis.md#unlink)
- [unsubscribe](redis.Redis.md#unsubscribe)
- [watch](redis.Redis.md#watch)
- [xack](redis.Redis.md#xack)
- [xadd](redis.Redis.md#xadd)
- [xautoclaim](redis.Redis.md#xautoclaim)
- [xclaim](redis.Redis.md#xclaim)
- [xdel](redis.Redis.md#xdel)
- [xgroup](redis.Redis.md#xgroup)
- [xinfo](redis.Redis.md#xinfo)
- [xpending](redis.Redis.md#xpending)
- [xrange](redis.Redis.md#xrange)
- [xread](redis.Redis.md#xread)
- [xreadgroup](redis.Redis.md#xreadgroup)
- [xrevrange](redis.Redis.md#xrevrange)
- [xtrim](redis.Redis.md#xtrim)
- [zadd](redis.Redis.md#zadd)
- [zinterstore](redis.Redis.md#zinterstore)
- [zrem](redis.Redis.md#zrem)
- [zscan](redis.Redis.md#zscan)
- [zunionstore](redis.Redis.md#zunionstore)
- [CONSTANTS](redis.Redis.md#constants)
- [Cluster](redis.Redis.md#cluster)
- [Command](redis.Redis.md#command)

### Methods

- [addListener](redis.Redis.md#addlistener)
- [append](redis.Redis.md#append)
- [auth](redis.Redis.md#auth)
- [bgrewriteaof](redis.Redis.md#bgrewriteaof)
- [bgsave](redis.Redis.md#bgsave)
- [bitcount](redis.Redis.md#bitcount)
- [bitfield](redis.Redis.md#bitfield)
- [brpoplpush](redis.Redis.md#brpoplpush)
- [config](redis.Redis.md#config)
- [connect](redis.Redis.md#connect)
- [createBuiltinCommand](redis.Redis.md#createbuiltincommand)
- [createRedlock](redis.Redis.md#createredlock)
- [dbsize](redis.Redis.md#dbsize)
- [debounce](redis.Redis.md#debounce)
- [decr](redis.Redis.md#decr)
- [decrby](redis.Redis.md#decrby)
- [defineCommand](redis.Redis.md#definecommand)
- [discard](redis.Redis.md#discard)
- [disconnect](redis.Redis.md#disconnect)
- [dump](redis.Redis.md#dump)
- [duplicate](redis.Redis.md#duplicate)
- [echo](redis.Redis.md#echo)
- [emit](redis.Redis.md#emit)
- [eventNames](redis.Redis.md#eventnames)
- [exec](redis.Redis.md#exec)
- [exists](redis.Redis.md#exists)
- [expire](redis.Redis.md#expire)
- [expireat](redis.Redis.md#expireat)
- [flushall](redis.Redis.md#flushall)
- [flushdb](redis.Redis.md#flushdb)
- [geoadd](redis.Redis.md#geoadd)
- [geodist](redis.Redis.md#geodist)
- [georadius](redis.Redis.md#georadius)
- [georadiusbymember](redis.Redis.md#georadiusbymember)
- [geosearch](redis.Redis.md#geosearch)
- [get](redis.Redis.md#get)
- [getBuffer](redis.Redis.md#getbuffer)
- [getBuiltinCommands](redis.Redis.md#getbuiltincommands)
- [getMaxListeners](redis.Redis.md#getmaxlisteners)
- [getbit](redis.Redis.md#getbit)
- [getdel](redis.Redis.md#getdel)
- [getrange](redis.Redis.md#getrange)
- [getrangeBuffer](redis.Redis.md#getrangebuffer)
- [getset](redis.Redis.md#getset)
- [hexists](redis.Redis.md#hexists)
- [hget](redis.Redis.md#hget)
- [hgetBuffer](redis.Redis.md#hgetbuffer)
- [hgetall](redis.Redis.md#hgetall)
- [hincrby](redis.Redis.md#hincrby)
- [hincrbyfloat](redis.Redis.md#hincrbyfloat)
- [hkeys](redis.Redis.md#hkeys)
- [hlen](redis.Redis.md#hlen)
- [hscanStream](redis.Redis.md#hscanstream)
- [hsetBuffer](redis.Redis.md#hsetbuffer)
- [hsetnx](redis.Redis.md#hsetnx)
- [hstrlen](redis.Redis.md#hstrlen)
- [hvals](redis.Redis.md#hvals)
- [incr](redis.Redis.md#incr)
- [incrby](redis.Redis.md#incrby)
- [incrbyfloat](redis.Redis.md#incrbyfloat)
- [info](redis.Redis.md#info)
- [keys](redis.Redis.md#keys)
- [lastsave](redis.Redis.md#lastsave)
- [lindex](redis.Redis.md#lindex)
- [linsert](redis.Redis.md#linsert)
- [listenerCount](redis.Redis.md#listenercount)
- [listeners](redis.Redis.md#listeners)
- [llen](redis.Redis.md#llen)
- [lock](redis.Redis.md#lock)
- [lpop](redis.Redis.md#lpop)
- [lpopBuffer](redis.Redis.md#lpopbuffer)
- [lpos](redis.Redis.md#lpos)
- [lrange](redis.Redis.md#lrange)
- [lrangeBuffer](redis.Redis.md#lrangebuffer)
- [lrem](redis.Redis.md#lrem)
- [lset](redis.Redis.md#lset)
- [ltrim](redis.Redis.md#ltrim)
- [memory](redis.Redis.md#memory)
- [monitor](redis.Redis.md#monitor)
- [move](redis.Redis.md#move)
- [multi](redis.Redis.md#multi)
- [off](redis.Redis.md#off)
- [on](redis.Redis.md#on)
- [once](redis.Redis.md#once)
- [persist](redis.Redis.md#persist)
- [pexpire](redis.Redis.md#pexpire)
- [pexpireat](redis.Redis.md#pexpireat)
- [ping](redis.Redis.md#ping)
- [pipeline](redis.Redis.md#pipeline)
- [prependListener](redis.Redis.md#prependlistener)
- [prependOnceListener](redis.Redis.md#prependoncelistener)
- [psetex](redis.Redis.md#psetex)
- [pttl](redis.Redis.md#pttl)
- [publish](redis.Redis.md#publish)
- [publishBuffer](redis.Redis.md#publishbuffer)
- [quit](redis.Redis.md#quit)
- [randomkey](redis.Redis.md#randomkey)
- [rawListeners](redis.Redis.md#rawlisteners)
- [removeAllListeners](redis.Redis.md#removealllisteners)
- [removeListener](redis.Redis.md#removelistener)
- [rename](redis.Redis.md#rename)
- [renamenx](redis.Redis.md#renamenx)
- [rpop](redis.Redis.md#rpop)
- [rpoplpush](redis.Redis.md#rpoplpush)
- [rpoplpushBuffer](redis.Redis.md#rpoplpushbuffer)
- [save](redis.Redis.md#save)
- [scan](redis.Redis.md#scan)
- [scanPromise](redis.Redis.md#scanpromise)
- [scanStream](redis.Redis.md#scanstream)
- [scard](redis.Redis.md#scard)
- [select](redis.Redis.md#select)
- [sendCommand](redis.Redis.md#sendcommand)
- [send\_command](redis.Redis.md#send_command)
- [set](redis.Redis.md#set)
- [setBuffer](redis.Redis.md#setbuffer)
- [setMaxListeners](redis.Redis.md#setmaxlisteners)
- [setbit](redis.Redis.md#setbit)
- [setex](redis.Redis.md#setex)
- [setnx](redis.Redis.md#setnx)
- [setrange](redis.Redis.md#setrange)
- [shutdown](redis.Redis.md#shutdown)
- [sismember](redis.Redis.md#sismember)
- [slaveof](redis.Redis.md#slaveof)
- [smembers](redis.Redis.md#smembers)
- [smismember](redis.Redis.md#smismember)
- [smove](redis.Redis.md#smove)
- [spop](redis.Redis.md#spop)
- [srandmember](redis.Redis.md#srandmember)
- [sscanStream](redis.Redis.md#sscanstream)
- [strlen](redis.Redis.md#strlen)
- [substr](redis.Redis.md#substr)
- [sync](redis.Redis.md#sync)
- [time](redis.Redis.md#time)
- [ttl](redis.Redis.md#ttl)
- [type](redis.Redis.md#type)
- [unwatch](redis.Redis.md#unwatch)
- [xlen](redis.Redis.md#xlen)
- [zaddBuffer](redis.Redis.md#zaddbuffer)
- [zcard](redis.Redis.md#zcard)
- [zcount](redis.Redis.md#zcount)
- [zincrby](redis.Redis.md#zincrby)
- [zpopmax](redis.Redis.md#zpopmax)
- [zpopmin](redis.Redis.md#zpopmin)
- [zrange](redis.Redis.md#zrange)
- [zrangeBuffer](redis.Redis.md#zrangebuffer)
- [zrangebylex](redis.Redis.md#zrangebylex)
- [zrangebylexBuffer](redis.Redis.md#zrangebylexbuffer)
- [zrangebyscore](redis.Redis.md#zrangebyscore)
- [zrangebyscoreBuffer](redis.Redis.md#zrangebyscorebuffer)
- [zrank](redis.Redis.md#zrank)
- [zremrangebylex](redis.Redis.md#zremrangebylex)
- [zremrangebyrank](redis.Redis.md#zremrangebyrank)
- [zremrangebyscore](redis.Redis.md#zremrangebyscore)
- [zrevrange](redis.Redis.md#zrevrange)
- [zrevrangeBuffer](redis.Redis.md#zrevrangebuffer)
- [zrevrangebylex](redis.Redis.md#zrevrangebylex)
- [zrevrangebylexBuffer](redis.Redis.md#zrevrangebylexbuffer)
- [zrevrangebyscore](redis.Redis.md#zrevrangebyscore)
- [zrevrangebyscoreBuffer](redis.Redis.md#zrevrangebyscorebuffer)
- [zrevrank](redis.Redis.md#zrevrank)
- [zscanPromise](redis.Redis.md#zscanpromise)
- [zscanStream](redis.Redis.md#zscanstream)
- [zscore](redis.Redis.md#zscore)

## Constructors

### constructor

• **new Redis**(...`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Overrides

IORedis.constructor

#### Defined in

[redis.ts:51](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L51)

## Properties

### NAME

• **NAME**: `string`

#### Defined in

[redis.ts:60](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L60)

___

### Promise

• **Promise**: `PromiseConstructor`

#### Inherited from

IORedis.Promise

#### Defined in

node_modules/@types/ioredis/index.d.ts:1300

___

### blpop

• **blpop**: `OverloadedBlockingListCommand`<`KeyType`, [`string`, `string`]\>

#### Inherited from

IORedis.blpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:345

___

### brpop

• **brpop**: `OverloadedBlockingListCommand`<`KeyType`, [`string`, `string`]\>

#### Inherited from

IORedis.brpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:343

___

### bzpopmax

• **bzpopmax**: `OverloadedBlockingListCommand`<`KeyType`, [`string`, `string`, `string`]\>

#### Inherited from

IORedis.bzpopmax

#### Defined in

node_modules/@types/ioredis/index.d.ts:435

___

### bzpopmin

• **bzpopmin**: `OverloadedBlockingListCommand`<`KeyType`, [`string`, `string`, `string`]\>

#### Inherited from

IORedis.bzpopmin

#### Defined in

node_modules/@types/ioredis/index.d.ts:433

___

### client

• **client**: `OverloadedSubCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.client

#### Defined in

node_modules/@types/ioredis/index.d.ts:1191

___

### cluster

• **cluster**: `OverloadedSubCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.cluster

#### Defined in

node_modules/@types/ioredis/index.d.ts:1180

___

### debounced

• `Readonly` **debounced**: `Object`

#### Index signature

▪ [k: `string`]: `NodeJS.Timeout`

#### Defined in

[redis.ts:65](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L65)

___

### debug

• **debug**: `OverloadedSubCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.debug

#### Defined in

node_modules/@types/ioredis/index.d.ts:1153

___

### del

• **del**: `OverloadedListCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.del

#### Defined in

node_modules/@types/ioredis/index.d.ts:276

___

### eval

• **eval**: `OverloadedEvalCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.eval

#### Defined in

node_modules/@types/ioredis/index.d.ts:1193

___

### evalsha

• **evalsha**: `OverloadedEvalCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.evalsha

#### Defined in

node_modules/@types/ioredis/index.d.ts:1195

___

### geohash

• **geohash**: `OverloadedKeyCommand`<`string`, `string`[]\>

#### Inherited from

IORedis.geohash

#### Defined in

node_modules/@types/ioredis/index.d.ts:851

___

### geopos

• **geopos**: `OverloadedKeyCommand`<`string`, `string`[]\>

#### Inherited from

IORedis.geopos

#### Defined in

node_modules/@types/ioredis/index.d.ts:853

___

### hdel

• **hdel**: `OverloadedKeyCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.hdel

#### Defined in

node_modules/@types/ioredis/index.d.ts:822

___

### hmget

• **hmget**: `OverloadedKeyCommand`<`KeyType`, (``null`` \| `string`)[]\>

#### Inherited from

IORedis.hmget

#### Defined in

node_modules/@types/ioredis/index.d.ts:810

___

### hmgetBuffer

• **hmgetBuffer**: `OverloadedKeyCommand`<`KeyType`, (``null`` \| `Buffer`)[]\>

#### Inherited from

IORedis.hmgetBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:811

___

### hmset

• **hmset**: `OverloadedKeyedHashCommand`<`ValueType`, ``"OK"``\>

#### Inherited from

IORedis.hmset

#### Defined in

node_modules/@types/ioredis/index.d.ts:808

___

### hscan

• **hscan**: `OverloadedKeyCommand`<`ValueType`, [`string`, `string`[]]\>

#### Inherited from

IORedis.hscan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1252

___

### hset

• **hset**: `OverloadedKeyedHashCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.hset

#### Defined in

node_modules/@types/ioredis/index.d.ts:795

___

### lpush

• **lpush**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.lpush

#### Defined in

node_modules/@types/ioredis/index.d.ts:312

___

### lpushBuffer

• **lpushBuffer**: `OverloadedKeyCommand`<`Buffer`, `number`\>

#### Inherited from

IORedis.lpushBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:313

___

### lpushx

• **lpushx**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.lpushx

#### Defined in

node_modules/@types/ioredis/index.d.ts:317

___

### mget

• **mget**: `OverloadedListCommand`<`KeyType`, (``null`` \| `string`)[]\>

#### Inherited from

IORedis.mget

#### Defined in

node_modules/@types/ioredis/index.d.ts:307

___

### migrate

• **migrate**: `OverloadedListCommand`<`ValueType`, ``"OK"`` \| ``"NOKEY"``\>

#### Inherited from

IORedis.migrate

#### Defined in

node_modules/@types/ioredis/index.d.ts:1184

___

### mset

• **mset**: `OverloadedHashCommand`<`ValueType`, ``"OK"``\>

#### Inherited from

IORedis.mset

#### Defined in

node_modules/@types/ioredis/index.d.ts:1042

___

### msetnx

• **msetnx**: `OverloadedHashCommand`<`ValueType`, `BooleanResponse`\>

#### Inherited from

IORedis.msetnx

#### Defined in

node_modules/@types/ioredis/index.d.ts:1043

___

### object

• **object**: `OverloadedListCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.object

#### Defined in

node_modules/@types/ioredis/index.d.ts:1189

___

### options

• `Readonly` **options**: `RedisOptions`

#### Inherited from

IORedis.options

#### Defined in

node_modules/@types/ioredis/index.d.ts:1301

___

### pfadd

• **pfadd**: `OverloadedKeyCommand`<`string`, `number`\>

#### Inherited from

IORedis.pfadd

#### Defined in

node_modules/@types/ioredis/index.d.ts:1258

___

### pfcount

• **pfcount**: `OverloadedListCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.pfcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:1260

___

### pfmerge

• **pfmerge**: `OverloadedKeyCommand`<`KeyType`, ``"OK"``\>

#### Inherited from

IORedis.pfmerge

#### Defined in

node_modules/@types/ioredis/index.d.ts:1256

___

### psubscribe

• **psubscribe**: `OverloadedListCommand`<`string`, `number`\>

#### Inherited from

IORedis.psubscribe

#### Defined in

node_modules/@types/ioredis/index.d.ts:1166

___

### punsubscribe

• **punsubscribe**: `OverloadedCommand`<`string`, `number`\>

#### Inherited from

IORedis.punsubscribe

#### Defined in

node_modules/@types/ioredis/index.d.ts:1168

___

### redlock

• `Readonly` **redlock**: `Redlock`

#### Defined in

[redis.ts:62](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L62)

___

### restore

• **restore**: `OverloadedListCommand`<`ValueType`, ``"OK"``\>

#### Inherited from

IORedis.restore

#### Defined in

node_modules/@types/ioredis/index.d.ts:1182

___

### rpush

• **rpush**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.rpush

#### Defined in

node_modules/@types/ioredis/index.d.ts:309

___

### rpushBuffer

• **rpushBuffer**: `OverloadedKeyCommand`<`Buffer`, `number`\>

#### Inherited from

IORedis.rpushBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:310

___

### rpushx

• **rpushx**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.rpushx

#### Defined in

node_modules/@types/ioredis/index.d.ts:315

___

### sadd

• **sadd**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.sadd

#### Defined in

node_modules/@types/ioredis/index.d.ts:377

___

### script

• **script**: `OverloadedSubCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.script

#### Defined in

node_modules/@types/ioredis/index.d.ts:1197

___

### sdiff

• **sdiff**: `OverloadedListCommand`<`KeyType`, `string`[]\>

#### Inherited from

IORedis.sdiff

#### Defined in

node_modules/@types/ioredis/index.d.ts:410

___

### sdiffstore

• **sdiffstore**: `OverloadedKeyCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.sdiffstore

#### Defined in

node_modules/@types/ioredis/index.d.ts:412

___

### sinter

• **sinter**: `OverloadedListCommand`<`KeyType`, `string`[]\>

#### Inherited from

IORedis.sinter

#### Defined in

node_modules/@types/ioredis/index.d.ts:402

___

### sinterstore

• **sinterstore**: `OverloadedKeyCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.sinterstore

#### Defined in

node_modules/@types/ioredis/index.d.ts:404

___

### sort

• **sort**: `OverloadedListCommand`<`number` \| `KeyType`, `number` \| `string`[]\>

#### Inherited from

IORedis.sort

#### Defined in

node_modules/@types/ioredis/index.d.ts:1129

___

### srem

• **srem**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.srem

#### Defined in

node_modules/@types/ioredis/index.d.ts:379

___

### sscan

• **sscan**: `OverloadedKeyCommand`<`ValueType`, [`string`, `string`[]]\>

#### Inherited from

IORedis.sscan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1250

___

### status

• `Readonly` **status**: `string`

#### Inherited from

IORedis.status

#### Defined in

node_modules/@types/ioredis/index.d.ts:1302

___

### subscribe

• **subscribe**: `OverloadedListCommand`<`string`, `number`\>

#### Inherited from

IORedis.subscribe

#### Defined in

node_modules/@types/ioredis/index.d.ts:1162

___

### sunion

• **sunion**: `OverloadedListCommand`<`KeyType`, `string`[]\>

#### Inherited from

IORedis.sunion

#### Defined in

node_modules/@types/ioredis/index.d.ts:406

___

### sunionstore

• **sunionstore**: `OverloadedKeyCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.sunionstore

#### Defined in

node_modules/@types/ioredis/index.d.ts:408

___

### unlink

• **unlink**: `OverloadedListCommand`<`KeyType`, `number`\>

#### Inherited from

IORedis.unlink

#### Defined in

node_modules/@types/ioredis/index.d.ts:278

___

### unsubscribe

• **unsubscribe**: `OverloadedCommand`<`string`, `number`\>

#### Inherited from

IORedis.unsubscribe

#### Defined in

node_modules/@types/ioredis/index.d.ts:1164

___

### watch

• **watch**: `OverloadedListCommand`<`KeyType`, ``"OK"``\>

#### Inherited from

IORedis.watch

#### Defined in

node_modules/@types/ioredis/index.d.ts:1175

___

### xack

• **xack**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.xack

#### Defined in

node_modules/@types/ioredis/index.d.ts:1269

___

### xadd

• **xadd**: `OverloadedKeyCommand`<`ValueType`, `string`\>

#### Inherited from

IORedis.xadd

#### Defined in

node_modules/@types/ioredis/index.d.ts:1271

___

### xautoclaim

• **xautoclaim**: `OverloadedSubCommand`<`ValueType`, [`string`, [`string`, `string`[]][]]\>

#### Inherited from

IORedis.xautoclaim

#### Defined in

node_modules/@types/ioredis/index.d.ts:1275

___

### xclaim

• **xclaim**: `OverloadedKeyCommand`<`ValueType`, [`string`, `string`[]][]\>

#### Inherited from

IORedis.xclaim

#### Defined in

node_modules/@types/ioredis/index.d.ts:1273

___

### xdel

• **xdel**: `OverloadedKeyCommand`<`string`, `number`\>

#### Inherited from

IORedis.xdel

#### Defined in

node_modules/@types/ioredis/index.d.ts:1277

___

### xgroup

• **xgroup**: `OverloadedSubCommand`<`ValueType`, `number` \| ``"OK"``\>

#### Inherited from

IORedis.xgroup

#### Defined in

node_modules/@types/ioredis/index.d.ts:1279

___

### xinfo

• **xinfo**: `OverloadedSubCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.xinfo

#### Defined in

node_modules/@types/ioredis/index.d.ts:1281

___

### xpending

• **xpending**: `OverloadedKeyCommand`<`ValueType`, `any`\>

#### Inherited from

IORedis.xpending

#### Defined in

node_modules/@types/ioredis/index.d.ts:1286

___

### xrange

• **xrange**: `OverloadedKeyCommand`<`ValueType`, [`string`, `string`[]][]\>

#### Inherited from

IORedis.xrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:1288

___

### xread

• **xread**: `OverloadedListCommand`<`ValueType`, [`string`, [`string`, `string`[]][]][]\>

#### Inherited from

IORedis.xread

#### Defined in

node_modules/@types/ioredis/index.d.ts:1290

___

### xreadgroup

• **xreadgroup**: `OverloadedKeyCommand`<`ValueType`, [`string`, [`string`, `string`[]][]][]\>

#### Inherited from

IORedis.xreadgroup

#### Defined in

node_modules/@types/ioredis/index.d.ts:1292

___

### xrevrange

• **xrevrange**: `OverloadedKeyCommand`<`ValueType`, [`string`, `string`[]][]\>

#### Inherited from

IORedis.xrevrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:1294

___

### xtrim

• **xtrim**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.xtrim

#### Defined in

node_modules/@types/ioredis/index.d.ts:1296

___

### zadd

• **zadd**: `OverloadedKeyCommand`<`number` \| `KeyType`, `string` \| `number`\>

#### Inherited from

IORedis.zadd

#### Defined in

node_modules/@types/ioredis/index.d.ts:417

___

### zinterstore

• **zinterstore**: `OverloadedKeyCommand`<`number` \| `KeyType`, `number`\>

#### Inherited from

IORedis.zinterstore

#### Defined in

node_modules/@types/ioredis/index.d.ts:450

___

### zrem

• **zrem**: `OverloadedKeyCommand`<`ValueType`, `number`\>

#### Inherited from

IORedis.zrem

#### Defined in

node_modules/@types/ioredis/index.d.ts:437

___

### zscan

• **zscan**: `OverloadedKeyCommand`<`ValueType`, [`string`, `string`[]]\>

#### Inherited from

IORedis.zscan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1254

___

### zunionstore

• **zunionstore**: `OverloadedKeyCommand`<`number` \| `KeyType`, `number`\>

#### Inherited from

IORedis.zunionstore

#### Defined in

node_modules/@types/ioredis/index.d.ts:448

___

### CONSTANTS

▪ `Static` `Readonly` **CONSTANTS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DEFAULT_SKEW_MS` | `number` |
| `SEARCH_FIELD_TYPES` | typeof `SEARCH_FIELD_TYPES` |
| `SEARCH_FIELD_TYPE_VALUES` | `SEARCH_FIELD_TYPES`[] |

#### Defined in

[redis.ts:42](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L42)

___

### Cluster

▪ `Static` **Cluster**: `ClusterStatic`

#### Inherited from

IORedis.Cluster

#### Defined in

node_modules/@types/ioredis/index.d.ts:42

___

### Command

▪ `Static` **Command**: typeof `Command`

#### Inherited from

IORedis.Command

#### Defined in

node_modules/@types/ioredis/index.d.ts:43

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.addListener

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### append

▸ **append**(`key`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.append

#### Defined in

node_modules/@types/ioredis/index.d.ts:270

▸ **append**(`key`, `value`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.append

#### Defined in

node_modules/@types/ioredis/index.d.ts:271

___

### auth

▸ **auth**(`username`, `password`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.auth

#### Defined in

node_modules/@types/ioredis/index.d.ts:1080

▸ **auth**(`password`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.auth

#### Defined in

node_modules/@types/ioredis/index.d.ts:1081

▸ **auth**(`username`, `password`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.auth

#### Defined in

node_modules/@types/ioredis/index.d.ts:1083

▸ **auth**(`password`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.auth

#### Defined in

node_modules/@types/ioredis/index.d.ts:1084

___

### bgrewriteaof

▸ **bgrewriteaof**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.bgrewriteaof

#### Defined in

node_modules/@types/ioredis/index.d.ts:1099

▸ **bgrewriteaof**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.bgrewriteaof

#### Defined in

node_modules/@types/ioredis/index.d.ts:1100

___

### bgsave

▸ **bgsave**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.bgsave

#### Defined in

node_modules/@types/ioredis/index.d.ts:1096

▸ **bgsave**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.bgsave

#### Defined in

node_modules/@types/ioredis/index.d.ts:1097

___

### bitcount

▸ **bitcount**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.bitcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:204

▸ **bitcount**(`key`, `start`, `end`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |
| `callback` | (`err`: `Error`, `res`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

IORedis.bitcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:205

▸ **bitcount**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.bitcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:206

▸ **bitcount**(`key`, `start`, `end`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.bitcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:207

___

### bitfield

▸ **bitfield**(`key`, `args`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `args` | `ValueType` |
| `callback` | `Callback`<`number`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.bitfield

#### Defined in

node_modules/@types/ioredis/index.d.ts:209

▸ **bitfield**(`key`, `args`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `args` | `ValueType` |

#### Returns

`Promise`<`number`[]\>

#### Inherited from

IORedis.bitfield

#### Defined in

node_modules/@types/ioredis/index.d.ts:210

___

### brpoplpush

▸ **brpoplpush**(`source`, `destination`, `timeout`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.brpoplpush

#### Defined in

node_modules/@types/ioredis/index.d.ts:347

▸ **brpoplpush**(`source`, `destination`, `timeout`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `timeout` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.brpoplpush

#### Defined in

node_modules/@types/ioredis/index.d.ts:348

___

### config

▸ **config**(`op`, `cfg`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | ``"GET"`` |
| `cfg` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.config

#### Defined in

node_modules/@types/ioredis/index.d.ts:1155

▸ **config**(`op`, `cfg`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | ``"GET"`` |
| `cfg` | `string` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.config

#### Defined in

node_modules/@types/ioredis/index.d.ts:1156

▸ **config**(`op`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | ``"REWRITE"`` \| ``"RESETSTAT"`` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.config

#### Defined in

node_modules/@types/ioredis/index.d.ts:1157

▸ **config**(`op`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | ``"REWRITE"`` \| ``"RESETSTAT"`` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.config

#### Defined in

node_modules/@types/ioredis/index.d.ts:1158

▸ **config**(`op`, `key`, `value`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | ``"SET"`` |
| `key` | `string` |
| `value` | `ValueType` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.config

#### Defined in

node_modules/@types/ioredis/index.d.ts:1159

▸ **config**(`op`, `key`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | ``"SET"`` |
| `key` | `string` |
| `value` | `ValueType` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.config

#### Defined in

node_modules/@types/ioredis/index.d.ts:1160

___

### connect

▸ **connect**(`callback?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Inherited from

IORedis.connect

#### Defined in

node_modules/@types/ioredis/index.d.ts:1303

___

### createBuiltinCommand

▸ **createBuiltinCommand**(`commandName`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commandName` | `string` |

#### Returns

`Object`

#### Inherited from

IORedis.createBuiltinCommand

#### Defined in

node_modules/@types/ioredis/index.d.ts:51

___

### createRedlock

▸ **createRedlock**(`config?`): `Redlock`

Get redlock instance

**`link`** https://www.npmjs.com/package/redlock

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Options` |

#### Returns

`Redlock`

#### Defined in

[redis.ts:114](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L114)

___

### dbsize

▸ **dbsize**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.dbsize

#### Defined in

node_modules/@types/ioredis/index.d.ts:1077

▸ **dbsize**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.dbsize

#### Defined in

node_modules/@types/ioredis/index.d.ts:1078

___

### debounce

▸ **debounce**(`callback`, `key`, `timeoutMs`, `skewMs?`): `Promise`<`any`\>

Debounce a callback using Redis and setTimeout locally

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback` | () => `void` \| `Promise`<`void`\> | `undefined` |
| `key` | `string` | `undefined` |
| `timeoutMs` | `number` | `undefined` |
| `skewMs` | `number` | `Redis.CONSTANTS.DEFAULT_SKEW_MS` |

#### Returns

`Promise`<`any`\>

#### Defined in

[redis.ts:173](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L173)

___

### decr

▸ **decr**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.decr

#### Defined in

node_modules/@types/ioredis/index.d.ts:304

▸ **decr**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.decr

#### Defined in

node_modules/@types/ioredis/index.d.ts:305

___

### decrby

▸ **decrby**(`key`, `decrement`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `decrement` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.decrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:1036

▸ **decrby**(`key`, `decrement`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `decrement` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.decrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:1037

___

### defineCommand

▸ **defineCommand**(`name`, `definition`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | `Object` |
| `definition.lua?` | `string` |
| `definition.numberOfKeys?` | `number` |

#### Returns

`void`

#### Inherited from

IORedis.defineCommand

#### Defined in

node_modules/@types/ioredis/index.d.ts:52

___

### discard

▸ **discard**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.discard

#### Defined in

node_modules/@types/ioredis/index.d.ts:1117

▸ **discard**(): `Promise`<``"OK"``\>

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.discard

#### Defined in

node_modules/@types/ioredis/index.d.ts:1118

___

### disconnect

▸ **disconnect**(`reconnect?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reconnect?` | `boolean` |

#### Returns

`void`

#### Inherited from

IORedis.disconnect

#### Defined in

node_modules/@types/ioredis/index.d.ts:1304

___

### dump

▸ **dump**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.dump

#### Defined in

node_modules/@types/ioredis/index.d.ts:1186

▸ **dump**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.dump

#### Defined in

node_modules/@types/ioredis/index.d.ts:1187

___

### duplicate

▸ **duplicate**(): `Redis`

#### Returns

`Redis`

#### Inherited from

IORedis.duplicate

#### Defined in

node_modules/@types/ioredis/index.d.ts:1305

___

### echo

▸ **echo**(`message`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.echo

#### Defined in

node_modules/@types/ioredis/index.d.ts:1090

▸ **echo**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.echo

#### Defined in

node_modules/@types/ioredis/index.d.ts:1091

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

IORedis.emit

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

IORedis.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### exec

▸ **exec**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<[``null`` \| `Error`, `string`][]\> |

#### Returns

`void`

#### Inherited from

IORedis.exec

#### Defined in

node_modules/@types/ioredis/index.d.ts:1114

▸ **exec**(): `Promise`<[``null`` \| `Error`, `string`][]\>

#### Returns

`Promise`<[``null`` \| `Error`, `string`][]\>

#### Inherited from

IORedis.exec

#### Defined in

node_modules/@types/ioredis/index.d.ts:1115

___

### exists

▸ **exists**(...`keys`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | `KeyType`[] |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.exists

#### Defined in

node_modules/@types/ioredis/index.d.ts:280

▸ **exists**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.exists

#### Defined in

node_modules/@types/ioredis/index.d.ts:281

___

### expire

▸ **expire**(`key`, `seconds`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `seconds` | `number` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.expire

#### Defined in

node_modules/@types/ioredis/index.d.ts:1062

▸ **expire**(`key`, `seconds`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `seconds` | `number` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.expire

#### Defined in

node_modules/@types/ioredis/index.d.ts:1063

___

### expireat

▸ **expireat**(`key`, `timestamp`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `timestamp` | `number` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.expireat

#### Defined in

node_modules/@types/ioredis/index.d.ts:1068

▸ **expireat**(`key`, `timestamp`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `timestamp` | `number` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.expireat

#### Defined in

node_modules/@types/ioredis/index.d.ts:1069

___

### flushall

▸ **flushall**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.flushall

#### Defined in

node_modules/@types/ioredis/index.d.ts:1126

▸ **flushall**(): `Promise`<``"OK"``\>

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.flushall

#### Defined in

node_modules/@types/ioredis/index.d.ts:1127

___

### flushdb

▸ **flushdb**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.flushdb

#### Defined in

node_modules/@types/ioredis/index.d.ts:1123

▸ **flushdb**(): `Promise`<``"OK"``\>

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.flushdb

#### Defined in

node_modules/@types/ioredis/index.d.ts:1124

___

### geoadd

▸ **geoadd**(`key`, `longitude`, `latitude`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `longitude` | `number` |
| `latitude` | `number` |
| `member` | `string` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.geoadd

#### Defined in

node_modules/@types/ioredis/index.d.ts:839

▸ **geoadd**(`key`, `longitude`, `latitude`, `member`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `longitude` | `number` |
| `latitude` | `number` |
| `member` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.geoadd

#### Defined in

node_modules/@types/ioredis/index.d.ts:840

___

### geodist

▸ **geodist**(`key`, `member1`, `member2`, `unit`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member1` | `string` |
| `member2` | `string` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.geodist

#### Defined in

node_modules/@types/ioredis/index.d.ts:842

▸ **geodist**(`key`, `member1`, `member2`, `unit`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member1` | `string` |
| `member2` | `string` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.geodist

#### Defined in

node_modules/@types/ioredis/index.d.ts:849

___

### georadius

▸ **georadius**(`key`, `longitude`, `latitude`, `radius`, `unit`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `longitude` | `number` |
| `latitude` | `number` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.georadius

#### Defined in

node_modules/@types/ioredis/index.d.ts:855

▸ **georadius**(`key`, `longitude`, `latitude`, `radius`, `unit`, `sort?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `longitude` | `number` |
| `latitude` | `number` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.georadius

#### Defined in

node_modules/@types/ioredis/index.d.ts:863

▸ **georadius**(`key`, `longitude`, `latitude`, `radius`, `unit`, `count`, `countValue`, `sort?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `longitude` | `number` |
| `latitude` | `number` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.georadius

#### Defined in

node_modules/@types/ioredis/index.d.ts:871

___

### georadiusbymember

▸ **georadiusbymember**(`key`, `member`, `radius`, `unit`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.georadiusbymember

#### Defined in

node_modules/@types/ioredis/index.d.ts:882

▸ **georadiusbymember**(`key`, `member`, `radius`, `unit`, `count`, `countValue`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.georadiusbymember

#### Defined in

node_modules/@types/ioredis/index.d.ts:889

▸ **georadiusbymember**(`key`, `member`, `radius`, `unit`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.georadiusbymember

#### Defined in

node_modules/@types/ioredis/index.d.ts:898

▸ **georadiusbymember**(`key`, `member`, `radius`, `unit`, `count`, `countValue`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `radius` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.georadiusbymember

#### Defined in

node_modules/@types/ioredis/index.d.ts:904

___

### geosearch

▸ **geosearch**(`key`, `from`, `member`, `by`, `radius`, `radiusUnit`, `count`, `countValue`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

https://redis.io/commands/geosearch

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMMEMBER"`` |
| `member` | `string` |
| `by` | ``"BYRADIUS"`` |
| `radius` | `number` |
| `radiusUnit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:916

▸ **geosearch**(`key`, `from`, `member`, `by`, `width`, `height`, `unit`, `count`, `countValue`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMMEMBER"`` |
| `member` | `string` |
| `by` | ``"BYBOX"`` |
| `width` | `number` |
| `height` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:930

▸ **geosearch**(`key`, `from`, `longitude`, `latitude`, `by`, `radius`, `radiusUnit`, `count`, `countValue`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMLONLAT"`` |
| `longitude` | `number` |
| `latitude` | `number` |
| `by` | ``"BYRADIUS"`` |
| `radius` | `number` |
| `radiusUnit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:945

▸ **geosearch**(`key`, `from`, `longitude`, `latitude`, `by`, `width`, `height`, `unit`, `count`, `countValue`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMLONLAT"`` |
| `longitude` | `number` |
| `latitude` | `number` |
| `by` | ``"BYBOX"`` |
| `width` | `number` |
| `height` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `count` | ``"COUNT"`` |
| `countValue` | `number` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:960

▸ **geosearch**(`key`, `from`, `member`, `by`, `radius`, `radiusUnit`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMMEMBER"`` |
| `member` | `string` |
| `by` | ``"BYRADIUS"`` |
| `radius` | `number` |
| `radiusUnit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:977

▸ **geosearch**(`key`, `from`, `member`, `by`, `width`, `height`, `unit`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMMEMBER"`` |
| `member` | `string` |
| `by` | ``"BYBOX"`` |
| `width` | `number` |
| `height` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:989

▸ **geosearch**(`key`, `from`, `longitude`, `latitude`, `by`, `radius`, `radiusUnit`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMLONLAT"`` |
| `longitude` | `number` |
| `latitude` | `number` |
| `by` | ``"BYRADIUS"`` |
| `radius` | `number` |
| `radiusUnit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:1002

▸ **geosearch**(`key`, `from`, `longitude`, `latitude`, `by`, `width`, `height`, `unit`, `sort?`, `withCoord?`, `withDist?`, `withHash?`): `Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `from` | ``"FROMLONLAT"`` |
| `longitude` | `number` |
| `latitude` | `number` |
| `by` | ``"BYBOX"`` |
| `width` | `number` |
| `height` | `number` |
| `unit` | ``"m"`` \| ``"km"`` \| ``"ft"`` \| ``"mi"`` |
| `sort?` | ``"ASC"`` \| ``"DESC"`` |
| `withCoord?` | ``"WITHCOORD"`` |
| `withDist?` | ``"WITHDIST"`` |
| `withHash?` | ``"WITHHASH"`` |

#### Returns

`Promise`<`string`[] \| (`string`[] \| `string`[][])[]\>

#### Inherited from

IORedis.geosearch

#### Defined in

node_modules/@types/ioredis/index.d.ts:1015

___

### get

▸ **get**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.get

#### Defined in

node_modules/@types/ioredis/index.d.ts:212

▸ **get**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.get

#### Defined in

node_modules/@types/ioredis/index.d.ts:213

___

### getBuffer

▸ **getBuffer**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.getBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:218

▸ **getBuffer**(`key`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.getBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:219

___

### getBuiltinCommands

▸ **getBuiltinCommands**(): `string`[]

#### Returns

`string`[]

#### Inherited from

IORedis.getBuiltinCommands

#### Defined in

node_modules/@types/ioredis/index.d.ts:50

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to {@link defaultMaxListeners}.

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

IORedis.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### getbit

▸ **getbit**(`key`, `offset`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `offset` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.getbit

#### Defined in

node_modules/@types/ioredis/index.d.ts:286

▸ **getbit**(`key`, `offset`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `offset` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.getbit

#### Defined in

node_modules/@types/ioredis/index.d.ts:287

___

### getdel

▸ **getdel**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.getdel

#### Defined in

node_modules/@types/ioredis/index.d.ts:215

▸ **getdel**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.getdel

#### Defined in

node_modules/@types/ioredis/index.d.ts:216

___

### getrange

▸ **getrange**(`key`, `start`, `end`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.getrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:292

▸ **getrange**(`key`, `start`, `end`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.getrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:293

___

### getrangeBuffer

▸ **getrangeBuffer**(`key`, `start`, `end`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.getrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:295

▸ **getrangeBuffer**(`key`, `start`, `end`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.getrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:296

___

### getset

▸ **getset**(`key`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.getset

#### Defined in

node_modules/@types/ioredis/index.d.ts:1039

▸ **getset**(`key`, `value`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.getset

#### Defined in

node_modules/@types/ioredis/index.d.ts:1040

___

### hexists

▸ **hexists**(`key`, `field`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.hexists

#### Defined in

node_modules/@types/ioredis/index.d.ts:836

▸ **hexists**(`key`, `field`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.hexists

#### Defined in

node_modules/@types/ioredis/index.d.ts:837

___

### hget

▸ **hget**(`key`, `field`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.hget

#### Defined in

node_modules/@types/ioredis/index.d.ts:803

▸ **hget**(`key`, `field`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.hget

#### Defined in

node_modules/@types/ioredis/index.d.ts:804

___

### hgetBuffer

▸ **hgetBuffer**(`key`, `field`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.hgetBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:805

▸ **hgetBuffer**(`key`, `field`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.hgetBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:806

___

### hgetall

▸ **hgetall**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`Record`<`string`, `string`\>\> |

#### Returns

`void`

#### Inherited from

IORedis.hgetall

#### Defined in

node_modules/@types/ioredis/index.d.ts:833

▸ **hgetall**(`key`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Inherited from

IORedis.hgetall

#### Defined in

node_modules/@types/ioredis/index.d.ts:834

___

### hincrby

▸ **hincrby**(`key`, `field`, `increment`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `increment` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.hincrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:816

▸ **hincrby**(`key`, `field`, `increment`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `increment` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.hincrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:817

___

### hincrbyfloat

▸ **hincrbyfloat**(`key`, `field`, `increment`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `increment` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.hincrbyfloat

#### Defined in

node_modules/@types/ioredis/index.d.ts:819

▸ **hincrbyfloat**(`key`, `field`, `increment`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `increment` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.hincrbyfloat

#### Defined in

node_modules/@types/ioredis/index.d.ts:820

___

### hkeys

▸ **hkeys**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.hkeys

#### Defined in

node_modules/@types/ioredis/index.d.ts:827

▸ **hkeys**(`key`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.hkeys

#### Defined in

node_modules/@types/ioredis/index.d.ts:828

___

### hlen

▸ **hlen**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.hlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:824

▸ **hlen**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.hlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:825

___

### hscanStream

▸ **hscanStream**(`key`, `options?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `options?` | `ScanStreamOption` |

#### Returns

`Readable`

#### Inherited from

IORedis.hscanStream

#### Defined in

node_modules/@types/ioredis/index.d.ts:1266

___

### hsetBuffer

▸ **hsetBuffer**(`key`, `field`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `value` | `ValueType` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.hsetBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:797

▸ **hsetBuffer**(`key`, `field`, `value`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `value` | `ValueType` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.hsetBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:798

___

### hsetnx

▸ **hsetnx**(`key`, `field`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `value` | `ValueType` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.hsetnx

#### Defined in

node_modules/@types/ioredis/index.d.ts:800

▸ **hsetnx**(`key`, `field`, `value`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `value` | `ValueType` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.hsetnx

#### Defined in

node_modules/@types/ioredis/index.d.ts:801

___

### hstrlen

▸ **hstrlen**(`key`, `field`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.hstrlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:813

▸ **hstrlen**(`key`, `field`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `field` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.hstrlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:814

___

### hvals

▸ **hvals**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.hvals

#### Defined in

node_modules/@types/ioredis/index.d.ts:830

▸ **hvals**(`key`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.hvals

#### Defined in

node_modules/@types/ioredis/index.d.ts:831

___

### incr

▸ **incr**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.incr

#### Defined in

node_modules/@types/ioredis/index.d.ts:301

▸ **incr**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.incr

#### Defined in

node_modules/@types/ioredis/index.d.ts:302

___

### incrby

▸ **incrby**(`key`, `increment`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `increment` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.incrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:1030

▸ **incrby**(`key`, `increment`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `increment` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.incrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:1031

___

### incrbyfloat

▸ **incrbyfloat**(`key`, `increment`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `increment` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.incrbyfloat

#### Defined in

node_modules/@types/ioredis/index.d.ts:1033

▸ **incrbyfloat**(`key`, `increment`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `increment` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.incrbyfloat

#### Defined in

node_modules/@types/ioredis/index.d.ts:1034

___

### info

▸ **info**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.info

#### Defined in

node_modules/@types/ioredis/index.d.ts:1131

▸ **info**(`section`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `section` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.info

#### Defined in

node_modules/@types/ioredis/index.d.ts:1132

▸ **info**(`section?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `section?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.info

#### Defined in

node_modules/@types/ioredis/index.d.ts:1133

___

### keys

▸ **keys**(`pattern`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.keys

#### Defined in

node_modules/@types/ioredis/index.d.ts:1074

▸ **keys**(`pattern`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.keys

#### Defined in

node_modules/@types/ioredis/index.d.ts:1075

___

### lastsave

▸ **lastsave**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.lastsave

#### Defined in

node_modules/@types/ioredis/index.d.ts:1105

▸ **lastsave**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.lastsave

#### Defined in

node_modules/@types/ioredis/index.d.ts:1106

___

### lindex

▸ **lindex**(`key`, `index`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `index` | `number` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.lindex

#### Defined in

node_modules/@types/ioredis/index.d.ts:353

▸ **lindex**(`key`, `index`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `index` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.lindex

#### Defined in

node_modules/@types/ioredis/index.d.ts:354

___

### linsert

▸ **linsert**(`key`, `direction`, `pivot`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `direction` | ``"BEFORE"`` \| ``"AFTER"`` |
| `pivot` | `string` |
| `value` | `ValueType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.linsert

#### Defined in

node_modules/@types/ioredis/index.d.ts:319

▸ **linsert**(`key`, `direction`, `pivot`, `value`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `direction` | ``"BEFORE"`` \| ``"AFTER"`` |
| `pivot` | `string` |
| `value` | `ValueType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.linsert

#### Defined in

node_modules/@types/ioredis/index.d.ts:326

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

IORedis.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

IORedis.listeners

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### llen

▸ **llen**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.llen

#### Defined in

node_modules/@types/ioredis/index.d.ts:350

▸ **llen**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.llen

#### Defined in

node_modules/@types/ioredis/index.d.ts:351

___

### lock

▸ **lock**(`key`, `ttl`): `Promise`<``null`` \| `Lock`\>

Acquire lock in Redis

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `ttl` | `number` |

#### Returns

`Promise`<``null`` \| `Lock`\>

#### Defined in

[redis.ts:74](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L74)

___

### lpop

▸ **lpop**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.lpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:333

▸ **lpop**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.lpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:334

▸ **lpop**(`key`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.lpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:335

▸ **lpop**(`key`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.lpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:336

___

### lpopBuffer

▸ **lpopBuffer**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.lpopBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:340

▸ **lpopBuffer**(`key`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.lpopBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:341

___

### lpos

▸ **lpos**(`key`, `value`, `rank?`, `count?`, `maxlen?`): `Promise`<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `rank?` | `number` |
| `count?` | `number` |
| `maxlen?` | `number` |

#### Returns

`Promise`<``null`` \| `number`\>

#### Inherited from

IORedis.lpos

#### Defined in

node_modules/@types/ioredis/index.d.ts:338

___

### lrange

▸ **lrange**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.lrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:359

▸ **lrange**(`key`, `start`, `stop`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.lrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:360

___

### lrangeBuffer

▸ **lrangeBuffer**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.lrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:362

▸ **lrangeBuffer**(`key`, `start`, `stop`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.lrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:363

___

### lrem

▸ **lrem**(`key`, `count`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `value` | `ValueType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.lrem

#### Defined in

node_modules/@types/ioredis/index.d.ts:368

▸ **lrem**(`key`, `count`, `value`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `value` | `ValueType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.lrem

#### Defined in

node_modules/@types/ioredis/index.d.ts:369

___

### lset

▸ **lset**(`key`, `index`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `index` | `number` |
| `value` | `ValueType` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.lset

#### Defined in

node_modules/@types/ioredis/index.d.ts:356

▸ **lset**(`key`, `index`, `value`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `index` | `number` |
| `value` | `ValueType` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.lset

#### Defined in

node_modules/@types/ioredis/index.d.ts:357

___

### ltrim

▸ **ltrim**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.ltrim

#### Defined in

node_modules/@types/ioredis/index.d.ts:365

▸ **ltrim**(`key`, `start`, `stop`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.ltrim

#### Defined in

node_modules/@types/ioredis/index.d.ts:366

___

### memory

▸ **memory**(`argument`, `key`, `callback?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `argument` | ``"USAGE"`` |
| `key` | `KeyType` |
| `callback?` | `Callback`<`number`\> |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.memory

#### Defined in

node_modules/@types/ioredis/index.d.ts:1045

___

### monitor

▸ **monitor**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`EventEmitter`\> |

#### Returns

`void`

#### Inherited from

IORedis.monitor

#### Defined in

node_modules/@types/ioredis/index.d.ts:1138

▸ **monitor**(): `Promise`<`EventEmitter`\>

#### Returns

`Promise`<`EventEmitter`\>

#### Inherited from

IORedis.monitor

#### Defined in

node_modules/@types/ioredis/index.d.ts:1139

___

### move

▸ **move**(`key`, `db`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `db` | `string` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.move

#### Defined in

node_modules/@types/ioredis/index.d.ts:1053

▸ **move**(`key`, `db`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `db` | `string` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.move

#### Defined in

node_modules/@types/ioredis/index.d.ts:1054

___

### multi

▸ **multi**(`commands?`, `options?`): `Pipeline`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands?` | `string`[][] |
| `options?` | `MultiOptions` |

#### Returns

`Pipeline`

#### Inherited from

IORedis.multi

#### Defined in

node_modules/@types/ioredis/index.d.ts:1111

▸ **multi**(`options`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.pipeline` | ``false`` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.multi

#### Defined in

node_modules/@types/ioredis/index.d.ts:1112

___

### off

▸ **off**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.off

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.on

#### Defined in

node_modules/@types/node/events.d.ts:330

___

### once

▸ **once**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.once

#### Defined in

node_modules/@types/node/events.d.ts:359

___

### persist

▸ **persist**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.persist

#### Defined in

node_modules/@types/ioredis/index.d.ts:1147

▸ **persist**(`key`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.persist

#### Defined in

node_modules/@types/ioredis/index.d.ts:1148

___

### pexpire

▸ **pexpire**(`key`, `milliseconds`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `milliseconds` | `number` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.pexpire

#### Defined in

node_modules/@types/ioredis/index.d.ts:1065

▸ **pexpire**(`key`, `milliseconds`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `milliseconds` | `number` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.pexpire

#### Defined in

node_modules/@types/ioredis/index.d.ts:1066

___

### pexpireat

▸ **pexpireat**(`key`, `millisecondsTimestamp`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `millisecondsTimestamp` | `number` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.pexpireat

#### Defined in

node_modules/@types/ioredis/index.d.ts:1071

▸ **pexpireat**(`key`, `millisecondsTimestamp`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `millisecondsTimestamp` | `number` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.pexpireat

#### Defined in

node_modules/@types/ioredis/index.d.ts:1072

___

### ping

▸ **ping**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.ping

#### Defined in

node_modules/@types/ioredis/index.d.ts:1086

▸ **ping**(`message`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.ping

#### Defined in

node_modules/@types/ioredis/index.d.ts:1087

▸ **ping**(`message?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.ping

#### Defined in

node_modules/@types/ioredis/index.d.ts:1088

___

### pipeline

▸ **pipeline**(`commands?`): `Pipeline`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commands?` | `string`[][] |

#### Returns

`Pipeline`

#### Inherited from

IORedis.pipeline

#### Defined in

node_modules/@types/ioredis/index.d.ts:1262

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:595

___

### psetex

▸ **psetex**(`key`, `milliseconds`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `milliseconds` | `number` |
| `value` | `ValueType` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.psetex

#### Defined in

node_modules/@types/ioredis/index.d.ts:267

▸ **psetex**(`key`, `milliseconds`, `value`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `milliseconds` | `number` |
| `value` | `ValueType` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.psetex

#### Defined in

node_modules/@types/ioredis/index.d.ts:268

___

### pttl

▸ **pttl**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.pttl

#### Defined in

node_modules/@types/ioredis/index.d.ts:1144

▸ **pttl**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.pttl

#### Defined in

node_modules/@types/ioredis/index.d.ts:1145

___

### publish

▸ **publish**(`channel`, `message`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `string` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.publish

#### Defined in

node_modules/@types/ioredis/index.d.ts:1170

▸ **publish**(`channel`, `message`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.publish

#### Defined in

node_modules/@types/ioredis/index.d.ts:1171

___

### publishBuffer

▸ **publishBuffer**(`channel`, `message`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` |
| `message` | `Buffer` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.publishBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:1173

___

### quit

▸ **quit**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.quit

#### Defined in

node_modules/@types/ioredis/index.d.ts:1199

▸ **quit**(): `Promise`<``"OK"``\>

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.quit

#### Defined in

node_modules/@types/ioredis/index.d.ts:1200

___

### randomkey

▸ **randomkey**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.randomkey

#### Defined in

node_modules/@types/ioredis/index.d.ts:1047

▸ **randomkey**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.randomkey

#### Defined in

node_modules/@types/ioredis/index.d.ts:1048

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

IORedis.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Redis`](redis.Redis.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Redis`](redis.Redis.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### rename

▸ **rename**(`key`, `newkey`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `newkey` | `KeyType` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.rename

#### Defined in

node_modules/@types/ioredis/index.d.ts:1056

▸ **rename**(`key`, `newkey`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `newkey` | `KeyType` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.rename

#### Defined in

node_modules/@types/ioredis/index.d.ts:1057

___

### renamenx

▸ **renamenx**(`key`, `newkey`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `newkey` | `KeyType` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.renamenx

#### Defined in

node_modules/@types/ioredis/index.d.ts:1059

▸ **renamenx**(`key`, `newkey`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `newkey` | `KeyType` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.renamenx

#### Defined in

node_modules/@types/ioredis/index.d.ts:1060

___

### rpop

▸ **rpop**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.rpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:328

▸ **rpop**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.rpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:329

▸ **rpop**(`key`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.rpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:330

▸ **rpop**(`key`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.rpop

#### Defined in

node_modules/@types/ioredis/index.d.ts:331

___

### rpoplpush

▸ **rpoplpush**(`source`, `destination`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.rpoplpush

#### Defined in

node_modules/@types/ioredis/index.d.ts:371

▸ **rpoplpush**(`source`, `destination`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.rpoplpush

#### Defined in

node_modules/@types/ioredis/index.d.ts:372

___

### rpoplpushBuffer

▸ **rpoplpushBuffer**(`source`, `destination`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.rpoplpushBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:374

▸ **rpoplpushBuffer**(`source`, `destination`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.rpoplpushBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:375

___

### save

▸ **save**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.save

#### Defined in

node_modules/@types/ioredis/index.d.ts:1093

▸ **save**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.save

#### Defined in

node_modules/@types/ioredis/index.d.ts:1094

___

### scan

▸ **scan**(`cursor`): `Promise`<[`string`, `string`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |

#### Returns

`Promise`<[`string`, `string`[]]\>

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1202

▸ **scan**(`cursor`, `matchOption`, `pattern`): `Promise`<[`string`, `string`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `matchOption` | ``"match"`` \| ``"MATCH"`` |
| `pattern` | `string` |

#### Returns

`Promise`<[`string`, `string`[]]\>

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1204

▸ **scan**(`cursor`, `matchOption`, `pattern`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `matchOption` | ``"match"`` \| ``"MATCH"`` |
| `pattern` | `string` |
| `callback` | `Callback`<[`string`, `string`[]]\> |

#### Returns

`void`

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1205

▸ **scan**(`cursor`, `countOption`, `count`): `Promise`<[`string`, `string`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `countOption` | ``"COUNT"`` \| ``"count"`` |
| `count` | `number` |

#### Returns

`Promise`<[`string`, `string`[]]\>

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1211

▸ **scan**(`cursor`, `countOption`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `countOption` | ``"COUNT"`` \| ``"count"`` |
| `count` | `number` |
| `callback` | `Callback`<[`string`, `string`[]]\> |

#### Returns

`void`

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1212

▸ **scan**(`cursor`, `matchOption`, `pattern`, `countOption`, `count`): `Promise`<[`string`, `string`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `matchOption` | ``"match"`` \| ``"MATCH"`` |
| `pattern` | `string` |
| `countOption` | ``"COUNT"`` \| ``"count"`` |
| `count` | `number` |

#### Returns

`Promise`<[`string`, `string`[]]\>

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1219

▸ **scan**(`cursor`, `matchOption`, `pattern`, `countOption`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `matchOption` | ``"match"`` \| ``"MATCH"`` |
| `pattern` | `string` |
| `countOption` | ``"COUNT"`` \| ``"count"`` |
| `count` | `number` |
| `callback` | `Callback`<[`string`, `string`[]]\> |

#### Returns

`void`

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1226

▸ **scan**(`cursor`, `countOption`, `count`, `matchOption`, `pattern`): `Promise`<[`string`, `string`[]]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `countOption` | ``"COUNT"`` \| ``"count"`` |
| `count` | `number` |
| `matchOption` | ``"match"`` \| ``"MATCH"`` |
| `pattern` | `string` |

#### Returns

`Promise`<[`string`, `string`[]]\>

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1234

▸ **scan**(`cursor`, `countOption`, `count`, `matchOption`, `pattern`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` \| `number` |
| `countOption` | ``"COUNT"`` \| ``"count"`` |
| `count` | `number` |
| `matchOption` | ``"match"`` \| ``"MATCH"`` |
| `pattern` | `string` |
| `callback` | `Callback`<[`string`, `string`[]]\> |

#### Returns

`void`

#### Inherited from

IORedis.scan

#### Defined in

node_modules/@types/ioredis/index.d.ts:1241

___

### scanPromise

▸ **scanPromise**(`options?`): `Promise`<`string`[]\>

Wrapper for scanStream that returns a promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScanStreamOption` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[redis.ts:125](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L125)

___

### scanStream

▸ **scanStream**(`options?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScanStreamOption` |

#### Returns

`Readable`

#### Inherited from

IORedis.scanStream

#### Defined in

node_modules/@types/ioredis/index.d.ts:1264

___

### scard

▸ **scard**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.scard

#### Defined in

node_modules/@types/ioredis/index.d.ts:389

▸ **scard**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.scard

#### Defined in

node_modules/@types/ioredis/index.d.ts:390

___

### select

▸ **select**(`index`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.select

#### Defined in

node_modules/@types/ioredis/index.d.ts:1050

▸ **select**(`index`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.select

#### Defined in

node_modules/@types/ioredis/index.d.ts:1051

___

### sendCommand

▸ **sendCommand**(): `void`

#### Returns

`void`

#### Inherited from

IORedis.sendCommand

#### Defined in

node_modules/@types/ioredis/index.d.ts:59

___

### send\_command

▸ **send_command**(`command`, ...`args`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `...args` | `ValueType`[] |

#### Returns

`Promise`<`any`\>

#### Inherited from

IORedis.send\_command

#### Defined in

node_modules/@types/ioredis/index.d.ts:1307

___

### set

▸ **set**(`key`, `value`, `expiryMode?`, `time?`, `setMode?`): `Promise`<``null`` \| ``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `expiryMode?` | `string` \| `any`[] |
| `time?` | `string` \| `number` |
| `setMode?` | `string` \| `number` |

#### Returns

`Promise`<``null`` \| ``"OK"``\>

#### Inherited from

IORedis.set

#### Defined in

node_modules/@types/ioredis/index.d.ts:221

▸ **set**(`key`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.set

#### Defined in

node_modules/@types/ioredis/index.d.ts:229

▸ **set**(`key`, `value`, `setMode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `setMode` | `string` \| `any`[] |
| `callback` | `Callback`<``null`` \| ``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.set

#### Defined in

node_modules/@types/ioredis/index.d.ts:230

▸ **set**(`key`, `value`, `expiryMode`, `time`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `expiryMode` | `string` |
| `time` | `string` \| `number` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.set

#### Defined in

node_modules/@types/ioredis/index.d.ts:231

▸ **set**(`key`, `value`, `expiryMode`, `time`, `setMode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `expiryMode` | `string` |
| `time` | `string` \| `number` |
| `setMode` | `string` \| `number` |
| `callback` | `Callback`<``null`` \| ``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.set

#### Defined in

node_modules/@types/ioredis/index.d.ts:232

___

### setBuffer

▸ **setBuffer**(`key`, `value`, `expiryMode?`, `time?`, `setMode?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `expiryMode?` | `string` \| `any`[] |
| `time?` | `string` \| `number` |
| `setMode?` | `string` \| `number` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

IORedis.setBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:241

▸ **setBuffer**(`key`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.setBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:249

▸ **setBuffer**(`key`, `value`, `setMode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `setMode` | `string` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.setBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:250

▸ **setBuffer**(`key`, `value`, `expiryMode`, `time`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `expiryMode` | `string` |
| `time` | `number` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.setBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:251

▸ **setBuffer**(`key`, `value`, `expiryMode`, `time`, `setMode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `expiryMode` | `string` |
| `time` | `string` \| `number` |
| `setMode` | `string` \| `number` |
| `callback` | `Callback`<`Buffer`\> |

#### Returns

`void`

#### Inherited from

IORedis.setBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:252

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Redis`](redis.Redis.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Redis`](redis.Redis.md)

#### Inherited from

IORedis.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### setbit

▸ **setbit**(`key`, `offset`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `offset` | `number` |
| `value` | `ValueType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.setbit

#### Defined in

node_modules/@types/ioredis/index.d.ts:283

▸ **setbit**(`key`, `offset`, `value`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `offset` | `number` |
| `value` | `ValueType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.setbit

#### Defined in

node_modules/@types/ioredis/index.d.ts:284

___

### setex

▸ **setex**(`key`, `seconds`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `seconds` | `number` |
| `value` | `ValueType` |
| `callback` | `Callback`<``"OK"``\> |

#### Returns

`void`

#### Inherited from

IORedis.setex

#### Defined in

node_modules/@types/ioredis/index.d.ts:264

▸ **setex**(`key`, `seconds`, `value`): `Promise`<``"OK"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `seconds` | `number` |
| `value` | `ValueType` |

#### Returns

`Promise`<``"OK"``\>

#### Inherited from

IORedis.setex

#### Defined in

node_modules/@types/ioredis/index.d.ts:265

___

### setnx

▸ **setnx**(`key`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.setnx

#### Defined in

node_modules/@types/ioredis/index.d.ts:261

▸ **setnx**(`key`, `value`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `value` | `ValueType` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.setnx

#### Defined in

node_modules/@types/ioredis/index.d.ts:262

___

### setrange

▸ **setrange**(`key`, `offset`, `value`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `offset` | `number` |
| `value` | `ValueType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.setrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:289

▸ **setrange**(`key`, `offset`, `value`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `offset` | `number` |
| `value` | `ValueType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.setrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:290

___

### shutdown

▸ **shutdown**(`save`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | ``"SAVE"`` \| ``"NOSAVE"`` |
| `callback` | `Callback`<`never`\> |

#### Returns

`void`

#### Inherited from

IORedis.shutdown

#### Defined in

node_modules/@types/ioredis/index.d.ts:1102

▸ **shutdown**(`save`): `Promise`<`never`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `save` | ``"SAVE"`` \| ``"NOSAVE"`` |

#### Returns

`Promise`<`never`\>

#### Inherited from

IORedis.shutdown

#### Defined in

node_modules/@types/ioredis/index.d.ts:1103

___

### sismember

▸ **sismember**(`key`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.sismember

#### Defined in

node_modules/@types/ioredis/index.d.ts:384

▸ **sismember**(`key`, `member`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.sismember

#### Defined in

node_modules/@types/ioredis/index.d.ts:385

___

### slaveof

▸ **slaveof**(`host`, `port`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.slaveof

#### Defined in

node_modules/@types/ioredis/index.d.ts:1150

▸ **slaveof**(`host`, `port`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.slaveof

#### Defined in

node_modules/@types/ioredis/index.d.ts:1151

___

### smembers

▸ **smembers**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.smembers

#### Defined in

node_modules/@types/ioredis/index.d.ts:414

▸ **smembers**(`key`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.smembers

#### Defined in

node_modules/@types/ioredis/index.d.ts:415

___

### smismember

▸ **smismember**(`key`, ...`members`): `Promise`<`BooleanResponse`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `...members` | `string`[] |

#### Returns

`Promise`<`BooleanResponse`[]\>

#### Inherited from

IORedis.smismember

#### Defined in

node_modules/@types/ioredis/index.d.ts:387

___

### smove

▸ **smove**(`source`, `destination`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `member` | `string` |
| `callback` | `Callback`<`BooleanResponse`\> |

#### Returns

`void`

#### Inherited from

IORedis.smove

#### Defined in

node_modules/@types/ioredis/index.d.ts:381

▸ **smove**(`source`, `destination`, `member`): `Promise`<`BooleanResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |
| `member` | `string` |

#### Returns

`Promise`<`BooleanResponse`\>

#### Inherited from

IORedis.smove

#### Defined in

node_modules/@types/ioredis/index.d.ts:382

___

### spop

▸ **spop**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.spop

#### Defined in

node_modules/@types/ioredis/index.d.ts:392

▸ **spop**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.spop

#### Defined in

node_modules/@types/ioredis/index.d.ts:393

▸ **spop**(`key`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.spop

#### Defined in

node_modules/@types/ioredis/index.d.ts:394

▸ **spop**(`key`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.spop

#### Defined in

node_modules/@types/ioredis/index.d.ts:395

___

### srandmember

▸ **srandmember**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.srandmember

#### Defined in

node_modules/@types/ioredis/index.d.ts:397

▸ **srandmember**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.srandmember

#### Defined in

node_modules/@types/ioredis/index.d.ts:398

▸ **srandmember**(`key`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.srandmember

#### Defined in

node_modules/@types/ioredis/index.d.ts:399

▸ **srandmember**(`key`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.srandmember

#### Defined in

node_modules/@types/ioredis/index.d.ts:400

___

### sscanStream

▸ **sscanStream**(`key`, `options?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `options?` | `ScanStreamOption` |

#### Returns

`Readable`

#### Inherited from

IORedis.sscanStream

#### Defined in

node_modules/@types/ioredis/index.d.ts:1265

___

### strlen

▸ **strlen**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.strlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:273

▸ **strlen**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.strlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:274

___

### substr

▸ **substr**(`key`, `start`, `end`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.substr

#### Defined in

node_modules/@types/ioredis/index.d.ts:298

▸ **substr**(`key`, `start`, `end`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `end` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.substr

#### Defined in

node_modules/@types/ioredis/index.d.ts:299

___

### sync

▸ **sync**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

IORedis.sync

#### Defined in

node_modules/@types/ioredis/index.d.ts:1120

▸ **sync**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

IORedis.sync

#### Defined in

node_modules/@types/ioredis/index.d.ts:1121

___

### time

▸ **time**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<[`string`, `string`]\> |

#### Returns

`void`

#### Inherited from

IORedis.time

#### Defined in

node_modules/@types/ioredis/index.d.ts:1135

▸ **time**(): `Promise`<[`string`, `string`]\>

#### Returns

`Promise`<[`string`, `string`]\>

#### Inherited from

IORedis.time

#### Defined in

node_modules/@types/ioredis/index.d.ts:1136

___

### ttl

▸ **ttl**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.ttl

#### Defined in

node_modules/@types/ioredis/index.d.ts:1141

▸ **ttl**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.ttl

#### Defined in

node_modules/@types/ioredis/index.d.ts:1142

___

### type

▸ **type**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.type

#### Defined in

node_modules/@types/ioredis/index.d.ts:1108

▸ **type**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.type

#### Defined in

node_modules/@types/ioredis/index.d.ts:1109

___

### unwatch

▸ **unwatch**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.unwatch

#### Defined in

node_modules/@types/ioredis/index.d.ts:1177

▸ **unwatch**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.unwatch

#### Defined in

node_modules/@types/ioredis/index.d.ts:1178

___

### xlen

▸ **xlen**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.xlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:1283

▸ **xlen**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.xlen

#### Defined in

node_modules/@types/ioredis/index.d.ts:1284

___

### zaddBuffer

▸ **zaddBuffer**(`key`, `score1`, `member1`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `score1` | `number` |
| `member1` | `Buffer` |
| `callback` | `Callback`<`string` \| `number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zaddBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:419

▸ **zaddBuffer**(`key`, `score1`, `member1`): `Promise`<`string` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `score1` | `number` |
| `member1` | `Buffer` |

#### Returns

`Promise`<`string` \| `number`\>

#### Inherited from

IORedis.zaddBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:420

___

### zcard

▸ **zcard**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zcard

#### Defined in

node_modules/@types/ioredis/index.d.ts:783

▸ **zcard**(`key`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.zcard

#### Defined in

node_modules/@types/ioredis/index.d.ts:784

___

### zcount

▸ **zcount**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:780

▸ **zcount**(`key`, `min`, `max`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.zcount

#### Defined in

node_modules/@types/ioredis/index.d.ts:781

___

### zincrby

▸ **zincrby**(`key`, `increment`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `increment` | `number` |
| `member` | `string` |
| `callback` | `Callback`<`string`\> |

#### Returns

`void`

#### Inherited from

IORedis.zincrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:422

▸ **zincrby**(`key`, `increment`, `member`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `increment` | `number` |
| `member` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

IORedis.zincrby

#### Defined in

node_modules/@types/ioredis/index.d.ts:423

___

### zpopmax

▸ **zpopmax**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zpopmax

#### Defined in

node_modules/@types/ioredis/index.d.ts:429

▸ **zpopmax**(`key`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zpopmax

#### Defined in

node_modules/@types/ioredis/index.d.ts:430

▸ **zpopmax**(`key`, `count?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count?` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zpopmax

#### Defined in

node_modules/@types/ioredis/index.d.ts:431

___

### zpopmin

▸ **zpopmin**(`key`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zpopmin

#### Defined in

node_modules/@types/ioredis/index.d.ts:425

▸ **zpopmin**(`key`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zpopmin

#### Defined in

node_modules/@types/ioredis/index.d.ts:426

▸ **zpopmin**(`key`, `count?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `count?` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zpopmin

#### Defined in

node_modules/@types/ioredis/index.d.ts:427

___

### zrange

▸ **zrange**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:452

▸ **zrange**(`key`, `start`, `stop`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:453

▸ **zrange**(`key`, `start`, `stop`, `withScores?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:454

___

### zrangeBuffer

▸ **zrangeBuffer**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:456

▸ **zrangeBuffer**(`key`, `start`, `stop`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:457

▸ **zrangeBuffer**(`key`, `start`, `stop`, `withScores?`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:464

___

### zrangebylex

▸ **zrangebylex**(`key`, `min`, `max`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:700

▸ **zrangebylex**(`key`, `min`, `max`, `limit`, `offset`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:701

▸ **zrangebylex**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:709

▸ **zrangebylex**(`key`, `min`, `max`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:710

___

### zrangebylexBuffer

▸ **zrangebylexBuffer**(`key`, `min`, `max`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:720

▸ **zrangebylexBuffer**(`key`, `min`, `max`, `limit`, `offset`, `count`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:721

▸ **zrangebylexBuffer**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:729

▸ **zrangebylexBuffer**(`key`, `min`, `max`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:730

___

### zrangebyscore

▸ **zrangebyscore**(`key`, `min`, `max`, `withScores?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:486

▸ **zrangebyscore**(`key`, `min`, `max`, `withScores`, `limit`, `offset`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:492

▸ **zrangebyscore**(`key`, `min`, `max`, `limit`, `offset`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:501

▸ **zrangebyscore**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:509

▸ **zrangebyscore**(`key`, `min`, `max`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:510

▸ **zrangebyscore**(`key`, `min`, `max`, `withScores`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:517

▸ **zrangebyscore**(`key`, `min`, `max`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:527

___

### zrangebyscoreBuffer

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `withScores?`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:537

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `withScores`, `limit`, `offset`, `count`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:543

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `limit`, `offset`, `count`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:552

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:560

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:566

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `withScores`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:573

▸ **zrangebyscoreBuffer**(`key`, `min`, `max`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:583

___

### zrank

▸ **zrank**(`key`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `callback` | `Callback`<``null`` \| `number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zrank

#### Defined in

node_modules/@types/ioredis/index.d.ts:789

▸ **zrank**(`key`, `member`): `Promise`<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |

#### Returns

`Promise`<``null`` \| `number`\>

#### Inherited from

IORedis.zrank

#### Defined in

node_modules/@types/ioredis/index.d.ts:790

___

### zremrangebylex

▸ **zremrangebylex**(`key`, `min`, `max`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.zremrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:445

▸ **zremrangebylex**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zremrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:446

___

### zremrangebyrank

▸ **zremrangebyrank**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zremrangebyrank

#### Defined in

node_modules/@types/ioredis/index.d.ts:442

▸ **zremrangebyrank**(`key`, `start`, `stop`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.zremrangebyrank

#### Defined in

node_modules/@types/ioredis/index.d.ts:443

___

### zremrangebyscore

▸ **zremrangebyscore**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |
| `callback` | `Callback`<`number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zremrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:439

▸ **zremrangebyscore**(`key`, `min`, `max`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` \| `number` |
| `max` | `string` \| `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

IORedis.zremrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:440

___

### zrevrange

▸ **zrevrange**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:466

▸ **zrevrange**(`key`, `start`, `stop`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:467

▸ **zrevrange**(`key`, `start`, `stop`, `withScores?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrevrange

#### Defined in

node_modules/@types/ioredis/index.d.ts:474

___

### zrevrangeBuffer

▸ **zrevrangeBuffer**(`key`, `start`, `stop`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:476

▸ **zrevrangeBuffer**(`key`, `start`, `stop`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:477

▸ **zrevrangeBuffer**(`key`, `start`, `stop`, `withScores?`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `start` | `number` |
| `stop` | `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrevrangeBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:484

___

### zrevrangebylex

▸ **zrevrangebylex**(`key`, `min`, `max`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrevrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:740

▸ **zrevrangebylex**(`key`, `min`, `max`, `limit`, `offset`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrevrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:741

▸ **zrevrangebylex**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:749

▸ **zrevrangebylex**(`key`, `min`, `max`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebylex

#### Defined in

node_modules/@types/ioredis/index.d.ts:750

___

### zrevrangebylexBuffer

▸ **zrevrangebylexBuffer**(`key`, `min`, `max`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrevrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:760

▸ **zrevrangebylexBuffer**(`key`, `min`, `max`, `limit`, `offset`, `count`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrevrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:761

▸ **zrevrangebylexBuffer**(`key`, `min`, `max`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:769

▸ **zrevrangebylexBuffer**(`key`, `min`, `max`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `min` | `string` |
| `max` | `string` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebylexBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:770

___

### zrevrangebyscore

▸ **zrevrangebyscore**(`key`, `max`, `min`, `withScores?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:593

▸ **zrevrangebyscore**(`key`, `max`, `min`, `withScores`, `limit`, `offset`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:599

▸ **zrevrangebyscore**(`key`, `max`, `min`, `limit`, `offset`, `count`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:608

▸ **zrevrangebyscore**(`key`, `max`, `min`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:616

▸ **zrevrangebyscore**(`key`, `max`, `min`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:617

▸ **zrevrangebyscore**(`key`, `max`, `min`, `withScores`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:624

▸ **zrevrangebyscore**(`key`, `max`, `min`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`string`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:634

___

### zrevrangebyscoreBuffer

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `withScores?`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores?` | ``"WITHSCORES"`` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:644

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `withScores`, `limit`, `offset`, `count`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:650

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `limit`, `offset`, `count`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`Promise`<`Buffer`[]\>

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:659

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:667

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `withScores`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:673

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `withScores`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `withScores` | ``"WITHSCORES"`` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:680

▸ **zrevrangebyscoreBuffer**(`key`, `max`, `min`, `limit`, `offset`, `count`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `max` | `string` \| `number` |
| `min` | `string` \| `number` |
| `limit` | ``"LIMIT"`` |
| `offset` | `number` |
| `count` | `number` |
| `callback` | `Callback`<`Buffer`[]\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrangebyscoreBuffer

#### Defined in

node_modules/@types/ioredis/index.d.ts:690

___

### zrevrank

▸ **zrevrank**(`key`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `callback` | `Callback`<``null`` \| `number`\> |

#### Returns

`void`

#### Inherited from

IORedis.zrevrank

#### Defined in

node_modules/@types/ioredis/index.d.ts:792

▸ **zrevrank**(`key`, `member`): `Promise`<``null`` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |

#### Returns

`Promise`<``null`` \| `number`\>

#### Inherited from

IORedis.zrevrank

#### Defined in

node_modules/@types/ioredis/index.d.ts:793

___

### zscanPromise

▸ **zscanPromise**(`key`, `options?`): `Promise`<`string`[]\>

Wrapper for scanStream that returns a promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `options?` | `ScanStreamOption` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[redis.ts:148](https://github.com/gapizza/redis/blob/2a117db/redis.ts#L148)

___

### zscanStream

▸ **zscanStream**(`key`, `options?`): `Readable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `options?` | `ScanStreamOption` |

#### Returns

`Readable`

#### Inherited from

IORedis.zscanStream

#### Defined in

node_modules/@types/ioredis/index.d.ts:1267

___

### zscore

▸ **zscore**(`key`, `member`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |
| `callback` | `Callback`<``null`` \| `string`\> |

#### Returns

`void`

#### Inherited from

IORedis.zscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:786

▸ **zscore**(`key`, `member`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `KeyType` |
| `member` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

IORedis.zscore

#### Defined in

node_modules/@types/ioredis/index.d.ts:787
