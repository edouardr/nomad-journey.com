import { redisClient, getAsync } from './redis-client'
import { JsonHelper } from '../helpers/json-helper'

const jsonHelper = new JsonHelper()

export class CacheService {
  async getOrCreate (key, valueFactory) {
    console.log(`CACHE::${key}:: Retrieving from cache`)
    let cachedValue = await getAsync(key)
    if (cachedValue) {
      console.log(`CACHE::${key}:: Value retrieved from cache`)
      return JSON.parse(cachedValue)
    }

    console.log(`CACHE::${key}:: Querying value`)
    cachedValue = await valueFactory()
    let cleanedValue = jsonHelper.removeCircularReferences(cachedValue)
    console.log(`CACHE::${key}:: Putting value to cache`)
    redisClient.set(key, cleanedValue)

    console.log(`CACHE::${key}:: Return cachedValue`)
    return JSON.parse(cleanedValue)
  }

  async invalidate (key) {
    console.log(`CACHE::${key}:: Deleting key`)
    redisClient.del(key)
    console.log(`CACHE::${key}:: Key deleted`)
  }

  async invalidateByPattern (keysPattern) {
    console.log(`CACHE::${keysPattern}:: Deleting keys for pattern`)
    redisClient.keys(keysPattern, (keys) => {
      for (let key of keys) {
        this.invalidate(key)
      }
    })
  }
}
