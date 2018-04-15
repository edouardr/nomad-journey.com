import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class LocationService {
  getCurrentLocation () {
    return deliveryClient.item('current_location')
      .elementsParameter([
        ContentTypes.Location.fields.latitude,
        ContentTypes.Location.fields.longitude,
        ContentTypes.Location.fields.name
      ])
      .getPromise()
  }
}
