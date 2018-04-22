import { deliveryClient } from '../services/kentico-client'
import { Symbols } from '../../constants'
import { ContentTypes } from '../../content-types'

export class LocationService {
  getCurrentLocation () {
    return deliveryClient.item(Symbols.CODENAMES.CURRENT_LOCATION)
      .elementsParameter([
        ContentTypes.Location.fields.latitude,
        ContentTypes.Location.fields.longitude,
        ContentTypes.Location.fields.name
      ])
      .getPromise()
  }
}
