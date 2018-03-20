import { SortOrder } from 'kentico-cloud-delivery-node-sdk'
import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class NavigationService {
  getAll (language) {
    return deliveryClient.items()
      .type(ContentTypes.NavigationItem.codeName)
      .elementsParameter(['redirect_to_url', 'order', 'title'])
      .orderParameter(`elements.${ContentTypes.NavigationItem.fields.order}`, SortOrder.asc)
      .languageParameter(language)
      .getPromise()
  }
}
