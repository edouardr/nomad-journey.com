import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'
import { DestinationService } from '../../services/destination-service'
import { ArticleService } from '../../services/article-service'

const cacheService = new CacheService()
const articleService = new ArticleService()
const destinationService = new DestinationService()

export class DestinationCleaner {
  isMatch (type) {
    return ContentTypes.Destination.codeName === type ||
      ContentTypes.Article.codeName === type
  }

  async clean (entry) {
    let destinationCodename = entry.codename

    if (ContentTypes.Article.codeName === entry.type) {
      const article = await articleService.getByCodename(entry.language, entry.codename)
      destinationCodename = article.system[ContentTypes.System.fields.sitemapLocations][0]
    }

    const destination = await destinationService.getByCodename(entry.language, destinationCodename)
    cacheService.invalidate(`${ContentTypes.Destination.codeName}-${entry.language}-${destination.urlSlug.value}`)
    cacheService.invalidate(`${ContentTypes.Destination.codeName}-${entry.language}-${destinationCodename}`)
    cacheService.invalidate(`${ContentTypes.Destination.codeName}-${entry.language}`)
  }
}
