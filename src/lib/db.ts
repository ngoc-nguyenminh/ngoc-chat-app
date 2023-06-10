import { Redis } from '@upstash/redis'

const a = process.env.UPSTASH_REDIS_REST_TOKEN

export const db = Redis.fromEnv()