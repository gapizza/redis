local keyIndex = 1;
local TARGET_KEY = KEYS[keyIndex];
keyIndex = keyIndex + 1;
local SET_TIME_SEC_KEY = KEYS[keyIndex];
keyIndex = keyIndex + 1;
local SET_TIME_US_KEY = KEYS[keyIndex];

if (not KEYS[keyIndex]) then
    return redis.error_reply("Not all keys were provided to delSafe");
end

local argIndex = 1;
local ttlSec = tonumber(ARGV[argIndex]);
argIndex = argIndex + 1;
local setTimeSec = tonumber(ARGV[argIndex]);
argIndex = argIndex + 1;
local setTimeUs = tonumber(ARGV[argIndex]);

if (not ARGV[argIndex]) then
    return redis.error_reply("Not all args were provided to delSafe");
end

if (ARGV[argIndex + 1]) then
    return redis.error_reply("Extra args were provided to delSafe");
end

if setTimeUs >= 1000000 or setTimeUs < 0 then
    return redis.error_reply("Set time us must be in microseconds");
end

-- Always del, no harm in that
redis.call("DEL", TARGET_KEY);

local curSetTimeSec = tonumber(redis.call("GET", SET_TIME_SEC_KEY));
local curSetTimeUs = tonumber(redis.call("GET", SET_TIME_US_KEY));

local doUpdate = false;

if not curSetTimeSec or curSetTimeSec < setTimeSec then
    doUpdate = true;
end

if not doUpdate and (not curSetTimeUs or curSetTimeUs < setTimeUs) then
    doUpdate = true;
end

if not doUpdate then
    return false;
end

redis.call("SET", SET_TIME_SEC_KEY, setTimeSec, "EX", ttlSec);
redis.call("SET", SET_TIME_US_KEY, setTimeUs, "EX", ttlSec);

return true;
