import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.Itinerary.fields.bodyText,
  ContentTypes.Itinerary.fields.mapId,
  ContentTypes.Itinerary.fields.keyFacts,
  ContentTypes.KeyFact.fields.icon,
  ContentTypes.KeyFact.fields.iconGroup,
  ContentTypes.KeyFact.fields.title,
  ContentTypes.KeyFact.fields.unit,
  ContentTypes.KeyFact.fields.value,
  ContentTypes.SnippetPageMetaData.fields.description,
  ContentTypes.SnippetPageMetaData.fields.keywords,
  ContentTypes.SnippetPageMetaData.fields.ogDescription,
  ContentTypes.SnippetPageMetaData.fields.ogImage,
  ContentTypes.SnippetPageMetaData.fields.ogTitle,
  ContentTypes.SnippetPageMetaData.fields.title
]
const cacheService = new CacheService()

export class ItineraryService {
  get (language, codename) {
    const key = `${ContentTypes.Itinerary.codeName}-${language}-${codename}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()

      return item
    })
  }
}
