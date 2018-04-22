import { ContentItem } from 'kentico-cloud-delivery-node-sdk'
import { ContentTypes } from '../../content-types'

export class Location extends ContentItem {
  constructor () {
    super({
      propertyResolver: fieldName => {
        if (fieldName === ContentTypes.Location.fields.latitude) {
          return 'latitude'
        }
        if (fieldName === ContentTypes.Location.fields.longitude) {
          return 'longitude'
        }
        if (fieldName === ContentTypes.Location.fields.name) {
          return 'name'
        }
        return fieldName
      }
    })
  }
}
