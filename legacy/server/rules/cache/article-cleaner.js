import { ContentTypes } from '../../../content-types'
import { CacheService } from '../../services/cache-service'
import { ArticleService } from '../../services/article-service'
import { Symbols } from '../../../constants'

const cacheService = new CacheService()
const articleService = new ArticleService()

export class ArticleCleaner {
  isMatch (codename) {
    return ContentTypes.Article.codeName === codename
  }

  async clean (entry) {
    const article = await articleService.getByCodename(entry.language, entry.codename)
    cacheService.invalidate(`${ContentTypes.Article.codeName}-${entry.language}-${article.urlSlug.value}`)
    cacheService.invalidate(`${ContentTypes.Article.codeName}-${entry.language}-${entry.codename}`)
    cacheService.invalidate(`${ContentTypes.Article.codeName}-${entry.language}-latest-${Symbols.DATA.HOME_ARTICLES_LIMIT}`)
  }
}
