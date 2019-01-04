import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class NavigationItem extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.NavigationItem.fields.order) {
          return 'order'
        }
        if (fieldName === ContentTypes.NavigationItem.fields.title) {
          return 'title'
        }
        if (fieldName === ContentTypes.NavigationItem.fields.redirectTo) {
          return 'redirectTo'
        }
        if (fieldName === ContentTypes.NavigationItem.fields.urlSlug) {
          return 'urlSlug'
        }
        return fieldName
      }
    })
  }
}
