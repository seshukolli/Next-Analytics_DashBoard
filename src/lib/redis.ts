import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-allowing-ray-32577.upstash.io',
  token: process.env.REDIS_KEY!,
})

