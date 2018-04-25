import redis from 'redis'
import { promisify } from 'util'
import url from 'url'

const cacheClientFactory = () => {
  let client = null

  if (process.env.REDISTOGO_URL) {
    let redisUrl = url.parse(process.env.REDISTOGO_URL)
    client = redis.createClient(redisUrl.port, redisUrl.hostname)
    redis.auth(redisUrl.auth.split(':')[1])
  } else {
    client = redis.createClient()
  }

  return client
}

export const redisClient = cacheClientFactory()
export const getAsync = promisify(redisClient.get).bind(redisClient)