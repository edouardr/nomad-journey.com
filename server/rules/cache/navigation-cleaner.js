import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'

const cacheService = new CacheService()

export class NavigationCleaner {
  isMatch (codename) {
    return ContentTypes.NavigationItem.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.NavigationItem.codeName}-${entry.language}`)
    cacheService.invalidate(`${ContentTypes.NavigationItem.codeName}-${entry.language}-${entry.codename}`)
  }
}
