import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'

const cacheService = new CacheService()

export class LandingPageCleaner {
  isMatch (codename) {
    return ContentTypes.LandingPage.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.LandingPage.codeName}-${entry.language}-${entry.codename}`)
  }
}
