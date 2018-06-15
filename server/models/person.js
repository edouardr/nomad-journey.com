import { ContentItem } from 'kentico-cloud-delivery'
import { ContentTypes } from '../../content-types'

export class Person extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.Person.fields.image) {
          return 'image'
        }
        if (fieldName === ContentTypes.Person.fields.interview) {
          return 'interview'
        }
        return fieldName
      }
    })
  }
}
