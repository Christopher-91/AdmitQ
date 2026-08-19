import Redis from 'ioredis';
import config from './index.js';

let redis;

try {
  redis = new Redis({
    host: config.redis.host,
    port: config.redis.port,
    maxRetriesPerRequest: 3,
    retryStrategy(times) {
      if (times > 3) {
        console.warn('Redis connection failed after 3 retries, continuing without cache');
        return null; // stop retrying
      }
      return Math.min(times * 200, 2000);
    },
    lazyConnect: true,
  });

  redis.on('error', (err) => {
    console.warn('Redis error (non-fatal):', err.message);
  });

  redis.on('connect', () => {
    console.log('✓ Redis connected');
  });
} catch (err) {
  console.warn('Redis initialization failed (non-fatal):', err.message);
  redis = null;
}

/**
 * Cache helper - get or set with TTL
 * @param {string} key
 * @param {number} ttl - TTL in seconds
 * @param {Function} fetchFn - Function to call if cache miss
 */
export const cacheGet = async (key, ttl, fetchFn) => {
  if (!redis) return fetchFn();

  try {
    const cached = await redis.get(key);
    if (cached) return JSON.parse(cached);
  } catch (err) {
    // Cache miss or error, proceed to fetch
  }

  const data = await fetchFn();

  try {
    if (redis && data) {
      await redis.setex(key, ttl, JSON.stringify(data));
    }
  } catch (err) {
    // Cache set failed, non-fatal
  }

  return data;
};

/**
 * Invalidate cache keys matching a pattern
 */
export const cacheInvalidate = async (pattern) => {
  if (!redis) return;
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (err) {
    // Non-fatal
  }
};

export const checkRedisConnection = async () => {
  if (!redis) return false;
  try {
    await redis.ping();
    return true;
  } catch {
    return false;
  }
};

export default redis;
