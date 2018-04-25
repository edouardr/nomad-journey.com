import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'

const cacheService = new CacheService()

export class LocationCleaner {
  isMatch (codename) {
    return ContentTypes.Location.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.Location.codeName}`)
  }
}
