"use strict";

import { createClient } from "redis";
const redisInstance = {};
export const RedisClient = async () => {
  if (redisInstance.client) {
    return redisInstance.client;
  }

  const client = await createClient({
    url: "redis://:thoaiky1992@localhost:6379",
  });
  await client.connect();
  redisInstance.client = client;

  return client;
};
