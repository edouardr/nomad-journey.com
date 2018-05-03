import { redisClient, getAsync } from './redis-client'
import { JsonHelper } from '../helpers/json-helper'

const jsonHelper = new JsonHelper()

export class CacheService {
  async getOrCreate (key, valueFactory) {
    let cachedValue = await getAsync(key)
    if (cachedValue) {
      return JSON.parse(cachedValue)
    }

    cachedValue = await valueFactory()
    let cleanedValue = jsonHelper.removeCircularReferences(cachedValue)
    redisClient.set(key, cleanedValue)

    return JSON.parse(cleanedValue)
  }

  async invalidate (key) {
    redisClient.del(key)
  }

  async invalidateByPattern (keysPattern) {
    redisClient.keys(keysPattern, (keys) => {
      for (let key of keys) {
        this.invalidate(key)
      }
    })
  }
}
