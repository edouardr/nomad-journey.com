import { redisClient, getAsync } from './redis-client'

export class CacheService {
  async getOrCreate (key, valueFactory) {
    let cachedValue = await getAsync(key)
    if (cachedValue) {
      return cachedValue
    }

    cachedValue = valueFactory()
    redisClient.set(key, cachedValue)

    return cachedValue
  }

  async invalidate () {
    console.log('invalidate')
  }
}
