import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class ItineraryService {
  get (language, codename) {
    return deliveryClient.item(codename)
      .elementsParameter([
        ContentTypes.Itinerary.fields.bodyText,
        ContentTypes.Itinerary.fields.mapId,
        ContentTypes.Itinerary.fields.keyFacts,
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
