import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class Destination extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.Destination.fields.articles) {
          return 'articles'
        }
        if (fieldName === ContentTypes.Destination.fields.bodyText) {
          return 'bodyText'
        }
        if (fieldName === ContentTypes.Destination.fields.urlSlug) {
          return 'urlSlug'
        }
        if (fieldName === ContentTypes.SnippetListItem.fields.title) {
          return 'tileTitle'
        }
        if (fieldName === ContentTypes.SnippetListItem.fields.description) {
          return 'tileDescription'
        }
        if (fieldName === ContentTypes.SnippetListItem.fields.thumbnail) {
          return 'tileThumbnail'
        }
        if (fieldName === ContentTypes.SnippetJumbotron.fields.title) {
          return 'jumbotronTitle'
        }
        if (fieldName === ContentTypes.SnippetJumbotron.fields.description) {
          return 'jumbotronDescription'
        }
        if (fieldName === ContentTypes.SnippetJumbotron.fields.image) {
          return 'jumbotronImage'
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
