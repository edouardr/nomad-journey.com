import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'
import { Symbols } from '../../../constants'

const cacheService = new CacheService()

export class ItineraryCleaner {
  isMatch (codename) {
    return ContentTypes.Itinerary.codeName === codename ||
      ContentTypes.KeyFact.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.Itinerary.codeName}-${entry.language}`)
    cacheService.invalidate(`${ContentTypes.Itinerary.codeName}-${entry.language}-${Symbols.CODENAMES.ITINERARY}`)
  }
}
