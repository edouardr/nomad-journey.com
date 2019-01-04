import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { Symbols } from '../../constants'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.Location.fields.latitude,
  ContentTypes.Location.fields.longitude,
  ContentTypes.Location.fields.name
]
const cacheService = new CacheService(process.env.USE_CACHING)

export class LocationService {
  getCurrentLocation () {
    const key = `${ContentTypes.Location.codeName}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(Symbols.CODENAMES.CURRENT_LOCATION)
        .elementsParameter(fields)
        .getPromise()

      return item
    })
  }
}
