import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'

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
  ContentTypes.SnippetPageMetaData.fields.description,
  ContentTypes.SnippetPageMetaData.fields.keywords,
  ContentTypes.SnippetPageMetaData.fields.ogDescription,
  ContentTypes.SnippetPageMetaData.fields.ogImage,
  ContentTypes.SnippetPageMetaData.fields.ogTitle,
  ContentTypes.SnippetPageMetaData.fields.title
]
const cacheService = new CacheService()

export class DestinationService {
  getAll (language) {
    const key = `destinations-${language}`
    return cacheService.getOrCreate(key, () => (
      deliveryClient.items()
        .type(ContentTypes.Destination.codeName)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()
    ))
  }

  getBySlug (language, slug) {
    const key = `destinations-${language}-${slug}`
    return cacheService.getOrCreate(key, () => (
      deliveryClient.items()
        .type(ContentTypes.Destination.codeName)
        .elementsParameter(fields)
        .equalsFilter(`elements.${ContentTypes.Destination.fields.urlSlug}`, slug)
        .languageParameter(language)
        .getPromise()
    ))
  }

  getByCodename (language, codename) {
    const key = `destinations-${language}-${codename}`
    return cacheService.getOrCreate(key, () => (
      deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()
    ))
  }
}
