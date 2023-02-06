import Cache from "node-cache";

const userCache = new Cache();

export const set = (key: string, value, ttl = 3000) => {
  return userCache.set(key, value, ttl);
};

export const get = (key: string) => {
  return userCache.get(key);
};

export const clearAllCache = () => {
  return userCache.flushAll();
};
