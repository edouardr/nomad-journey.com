import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class KeyFact extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.KeyFact.fields.icon) {
          return 'icon'
        }
        if (fieldName === ContentTypes.KeyFact.fields.iconGroup) {
          return 'iconGroup'
        }
        if (fieldName === ContentTypes.KeyFact.fields.title) {
          return 'title'
        }
        if (fieldName === ContentTypes.KeyFact.fields.unit) {
          return 'unit'
        }
        if (fieldName === ContentTypes.KeyFact.fields.value) {
          return 'value'
        }
        return fieldName
      }
    })
  }
}
