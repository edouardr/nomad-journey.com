import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.LandingPage.fields.bodyText,
  ContentTypes.LandingPage.fields.urlSlug,
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
  get (language, codename) {
    const key = `landing-page-${language}-${codename}`
    return cacheService.getOrCreate(key, () => (
      deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()
    ))
  }
}
