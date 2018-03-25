import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class LandingPageService {
  get (language, codename) {
    return deliveryClient.item(codename)
      .elementsParameter([
        ContentTypes.LandingPage.fields.bodyText,
        ContentTypes.LandingPage.fields.urlSlug,
        ContentTypes.SnippetJumbotron.fields.description,
        ContentTypes.SnippetJumbotron.fields.image,
        ContentTypes.SnippetJumbotron.fields.title,
        ContentTypes.SnippetPageMetaData.fields.description,
        ContentTypes.SnippetPageMetaData.fields.keywords,
        ContentTypes.SnippetPageMetaData.fields.ogDescription,
        ContentTypes.SnippetPageMetaData.fields.ogTitle,
        ContentTypes.SnippetPageMetaData.fields.title
      ])
      .languageParameter(language)
      .getPromise()
  }
}
