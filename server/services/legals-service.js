import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.Legals.fields.bodyText,
  ContentTypes.SnippetJumbotron.fields.description,
  ContentTypes.SnippetJumbotron.fields.image,
  ContentTypes.SnippetJumbotron.fields.title,
  ContentTypes.SnippetPageMetaData.fields.description,
  ContentTypes.SnippetPageMetaData.fields.keywords,
  ContentTypes.SnippetPageMetaData.fields.ogDescription,
  ContentTypes.SnippetPageMetaData.fields.ogImage,
  ContentTypes.SnippetPageMetaData.fields.ogTitle,
  ContentTypes.SnippetPageMetaData.fields.title
]
const cacheService = new CacheService()

export class LandingPageService {
  getPage (language, codename) {
    const key = `${ContentTypes.Legals.codeName}-${language}-${codename}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()

      return item
    })
  }
}
