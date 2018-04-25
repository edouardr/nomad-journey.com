import { deliveryClient } from '../services/kentico-client'
import { redisClient, getAsync } from '../services/redis-client'
import { ContentTypes } from '../../content-types'
import { SortOrder } from 'kentico-cloud-delivery-node-sdk'

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

export class ArticleService {
  async get (language, slug) {
    const key = `article-${language}-${slug}`
    let cachedValue = await getAsync(key)
    if (cachedValue) {
      return cachedValue
    }

    let valueToBeCached = await deliveryClient.items()
      .type(ContentTypes.Article.codeName)
      .elementsParameter(fields)
      .equalsFilter(`elements.${ContentTypes.Article.fields.urlSlug}`, slug)
      .languageParameter(language)
      .getPromise()

    redisClient.set(key, valueToBeCached)

    return valueToBeCached
  }

  async getLatest (language, limit) {
    const key = `articles-latest-${language}-${limit}`
    let cachedValue = await getAsync(key)
    if (cachedValue) {
      console.log('GOT FROM CACHE')
      return cachedValue
    }

    let valueToBeCached = await deliveryClient.items()
      .type(ContentTypes.Article.codeName)
      .elementsParameter(fields)
      .orderParameter(`elements.${ContentTypes.Article.fields.posted}`, SortOrder.desc)
      .languageParameter(language)
      .limitParameter(limit)
      .getPromise()

    redisClient.set(key, valueToBeCached)

    console.log('GOT FROM KENTICO')
    return valueToBeCached
  }
}
