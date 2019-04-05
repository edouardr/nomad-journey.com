import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'

const cacheService = new CacheService()

export class AboutUsCleaner {
  isMatch (codename) {
    return ContentTypes.About_Us.codeName === codename ||
      ContentTypes.Person.codeName === codename ||
      ContentTypes.QuestionAnswer.codeName === codename
  }

  async clean (entry) {
    cacheService.invalidate(`${ContentTypes.About_Us.codeName}-${entry.language}`)
  }
}
