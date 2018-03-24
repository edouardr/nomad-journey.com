import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class DestinationService {
  getAll (language) {
    return deliveryClient.items()
      .type(ContentTypes.Destination.codeName)
      .elementsParameter([
        ContentTypes.Destination.fields.urlSlug,
        ContentTypes.Destination.fields.bodyText,
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

  get (language, slug) {
    return deliveryClient.items()
      .type(ContentTypes.Destination.codeName)
      .elementsParameter([
        ContentTypes.Destination.fields.articles,
        ContentTypes.Destination.fields.bodyText,
        ContentTypes.Destination.fields.urlSlug,
        ContentTypes.SnippetJumbotron.fields.description,
        ContentTypes.SnippetJumbotron.fields.image,
        ContentTypes.SnippetJumbotron.fields.title,
        ContentTypes.SnippetPageMetaData.fields.description,
        ContentTypes.SnippetPageMetaData.fields.keywords,
        ContentTypes.SnippetPageMetaData.fields.ogDescription,
        ContentTypes.SnippetPageMetaData.fields.ogTitle,
        ContentTypes.SnippetPageMetaData.fields.title
      ])
      .equalsFilter(`elements.${ContentTypes.Destination.fields.urlSlug}`, slug)
      .languageParameter(language)
      .getPromise()
  }
}
