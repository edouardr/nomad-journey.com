import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'
import { SortOrder } from 'kentico-cloud-delivery'

const fields = [
  ContentTypes.Article.fields.bodyText,
  ContentTypes.Article.fields.location,
  ContentTypes.Article.fields.images,
  ContentTypes.Article.fields.posted,
  ContentTypes.Article.fields.urlSlug,
  ContentTypes.SnippetJumbotron.fields.description,
  ContentTypes.SnippetJumbotron.fields.image,
  ContentTypes.SnippetJumbotron.fields.title,
  ContentTypes.SnippetListItem.fields.description,
  ContentTypes.SnippetListItem.fields.thumbnail,
  ContentTypes.SnippetListItem.fields.title,
  ContentTypes.SnippetPageMetaData.fields.description,
  ContentTypes.SnippetPageMetaData.fields.keywords,
  ContentTypes.SnippetPageMetaData.fields.ogDescription,
  ContentTypes.SnippetPageMetaData.fields.ogImage,
  ContentTypes.SnippetPageMetaData.fields.ogTitle,
  ContentTypes.SnippetPageMetaData.fields.title
]
const cacheService = new CacheService()

export class ArticleService {
  async get (language, slug) {
    const key = `${ContentTypes.Article.codeName}-${language}-${slug}`
    return cacheService.getOrCreate(key, async () => {
      const { firstItem } = await deliveryClient.items()
        .type(ContentTypes.Article.codeName)
        .elementsParameter(fields)
        .equalsFilter(`elements.${ContentTypes.Article.fields.urlSlug}`, slug)
        .languageParameter(language)
        .getPromise()

      return firstItem
    })
  }

  async getByCodename (language, codename) {
    const key = `${ContentTypes.Article.codeName}-${language}-${codename}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()

      return item
    })
  }

  async getLatest (language, limit) {
    const key = `${ContentTypes.Article.codeName}-${language}-latest-${limit}`

    return cacheService.getOrCreate(key, async () => {
      const { items } = await deliveryClient.items()
        .type(ContentTypes.Article.codeName)
        .elementsParameter(fields)
        .orderParameter(`elements.${ContentTypes.Article.fields.posted}`, SortOrder.desc)
        .languageParameter(language)
        .limitParameter(limit)
        .getPromise()

      return items
    })
  }
}
