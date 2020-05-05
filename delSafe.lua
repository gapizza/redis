local keyIndex = 1;
local TARGET_KEY = KEYS[keyIndex];
keyIndex = keyIndex + 1;
local TIMESTAMP_SEC_KEY = KEYS[keyIndex];
keyIndex = keyIndex + 1;
local TIMESTAMP_US_KEY = KEYS[keyIndex];

if (not KEYS[keyIndex]) then
    return redis.error_reply("Not all keys were provided to delSafe");
end

local argIndex = 1;
local ttlSec = tonumber(ARGV[argIndex]);
argIndex = argIndex + 1;
local timestampSec = tonumber(ARGV[argIndex]);
argIndex = argIndex + 1;
local timestampUs = tonumber(ARGV[argIndex]);

if (not ARGV[argIndex]) then
    return redis.error_reply("Not all args were provided to delSafe");
end

if (ARGV[argIndex + 1]) then
    return redis.error_reply("Extra args were provided to delSafe");
end

if timestampUs >= 1000000 or timestampUs < 0 then
    return redis.error_reply("Set time us must be in microseconds");
end

-- Always del, no harm in that
redis.call("DEL", TARGET_KEY);

local curtimestampSec = tonumber(redis.call("GET", TIMESTAMP_SEC_KEY));
local curtimestampUs = tonumber(redis.call("GET", TIMESTAMP_US_KEY));

local doUpdate = false;

if not curtimestampSec or curtimestampSec < timestampSec then
    doUpdate = true;
end

if not doUpdate and (not curtimestampUs or curtimestampUs < timestampUs) then
    doUpdate = true;
end

if not doUpdate then
    return false;
end

redis.call("SET", TIMESTAMP_SEC_KEY, timestampSec, "EX", ttlSec);
redis.call("SET", TIMESTAMP_US_KEY, timestampUs, "EX", ttlSec);

return true;
