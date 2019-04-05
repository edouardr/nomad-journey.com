import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class LandingPage extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.LandingPage.fields.bodyText) {
          return 'bodyText'
        }
        if (fieldName === ContentTypes.LandingPage.fields.urlSlug) {
          return 'urlSlug'
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
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.ogDescription) {
          return 'ogDescription'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.ogImage) {
          return 'ogImage'
        }
        if (fieldName === ContentTypes.SnippetPageMetaData.fields.ogTitle) {
          return 'ogTitle'
        }
        return fieldName
      }
    })
  }
}
