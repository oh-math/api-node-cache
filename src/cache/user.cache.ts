import Cache from "node-cache";

export const userCache = new Cache();

export const set = (key: string, value: any, ttl = 3000) => {
  return userCache.set(key, value, ttl);
};

export const clearAllCache = () => {
  return userCache.flushAll();
};

export const getCached = (key: string): [] | null => {
  const result = userCache.get(key);

  if (!result) {
    return null;
  }

  console.log("Using cache to return");
  return result as [];
};
