import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'
import { SortOrder } from 'kentico-cloud-delivery'
import { ArticleService } from './article-service'

const fields = [
  ContentTypes.Article.fields.location,
  ContentTypes.Article.fields.images,
  ContentTypes.Article.fields.posted,
  ContentTypes.Destination.fields.articles,
  ContentTypes.Destination.fields.bodyText,
  ContentTypes.Destination.fields.urlSlug,
  ContentTypes.SnippetJumbotron.fields.description,
  ContentTypes.SnippetJumbotron.fields.image,
  ContentTypes.SnippetJumbotron.fields.title,
  ContentTypes.SnippetListItem.fields.description,
  ContentTypes.SnippetListItem.fields.thumbnail,
  ContentTypes.SnippetListItem.fields.title,
  ContentTypes.SnippetAppearance.fields.sortOrder,
  ContentTypes.SnippetPageMetaData.fields.description,
  ContentTypes.SnippetPageMetaData.fields.keywords,
  ContentTypes.SnippetPageMetaData.fields.ogDescription,
  ContentTypes.SnippetPageMetaData.fields.ogImage,
  ContentTypes.SnippetPageMetaData.fields.ogTitle,
  ContentTypes.SnippetPageMetaData.fields.title,
  ContentTypes.YoutubeVideo.fields.id
]
const cacheService = new CacheService(process.env.USE_CACHING)
const articleService = new ArticleService()

export class DestinationService {
  getAll (language) {
    const key = `${ContentTypes.Destination.codeName}-${language}`
    return cacheService.getOrCreate(key, async () => {
      const { items } = await deliveryClient.items()
        .type(ContentTypes.Destination.codeName)
        .elementsParameter(fields)
        .languageParameter(language)
        .orderParameter(`elements.${ContentTypes.SnippetAppearance.fields.sortOrder}`, SortOrder.asc)
        .depthParameter(3)
        .getPromise()

      items.forEach(destination => {
        destination.articles.forEach(article => {
          articleService.resolveHtml(article)
        })
      })
      return items
    })
  }

  getBySlug (language, slug) {
    const key = `${ContentTypes.Destination.codeName}-${language}-${slug}`
    return cacheService.getOrCreate(key, async () => {
      const { firstItem } = await deliveryClient.items()
        .type(ContentTypes.Destination.codeName)
        .elementsParameter(fields)
        .equalsFilter(`elements.${ContentTypes.Destination.fields.urlSlug}`, slug)
        .languageParameter(language)
        .depthParameter(3)
        .getPromise()

      firstItem.articles.forEach(article => {
        articleService.resolveHtml(article)
      })
      return firstItem
    })
  }

  getByCodename (language, codename) {
    const key = `${ContentTypes.Destination.codeName}-${language}-${codename}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .depthParameter(3)
        .getPromise()

      item.articles.forEach(article => {
        articleService.resolveHtml(article)
      })

      return item
    })
  }
}
