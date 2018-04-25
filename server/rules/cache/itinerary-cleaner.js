import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'

const cacheService = new CacheService()

export class ItineraryCleaner {
  isMatch (codename) {
    return ContentTypes.Itinerary.codeName === codename ||
      ContentTypes.KeyFact.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.Itinerary.codeName}-${entry.language}`)
  }
}
