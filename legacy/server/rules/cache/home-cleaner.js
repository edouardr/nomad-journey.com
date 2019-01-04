import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'
import { Symbols } from '../../../constants'

const cacheService = new CacheService()

export class HomeCleaner {
  isMatch (codename) {
    return ContentTypes.LandingPage.codeName === codename ||
      ContentTypes.Location.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.Location.codeName}`)
    cacheService.invalidate(`${ContentTypes.LandingPage.codeName}-${entry.language}-${Symbols.CODENAMES.HOME}`)
  }
}
