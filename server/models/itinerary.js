import { ContentItem } from 'kentico-cloud-delivery-node-sdk'
import { ContentTypes } from '../../content-types'

export class Itinerary extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.Itinerary.fields.bodyText) {
          return 'bodyText'
        }
        if (fieldName === ContentTypes.Itinerary.fields.mapId) {
          return 'mapId'
        }
        if (fieldName === ContentTypes.Itinerary.fields.keyFacts) {
          return 'keyFacts'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.title) {
          return 'metaTitle'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.description) {
          return 'metaDescription'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.keywords) {
          return 'metaKeywords'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.ogImage) {
          return 'ogImage'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.ogTitle) {
          return 'ogTitle'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.ogDescription) {
          return 'ogDescription'
        }
        return fieldName
      }
    })
  }
}
