import { SortOrder } from 'kentico-cloud-delivery-node-sdk'
import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class NavigationService {
  getAll (language) {
    return deliveryClient.items()
      .type(ContentTypes.NavigationItem.codeName)
      .elementsParameter([
        ContentTypes.NavigationItem.fields.redirectTo,
        ContentTypes.NavigationItem.fields.order,
        ContentTypes.NavigationItem.fields.title])
      .orderParameter(`elements.${ContentTypes.NavigationItem.fields.order}`, SortOrder.asc)
      .languageParameter(language)
      .getPromise()
  }

  getNavItem (language, codename) {
    return deliveryClient.item(codename)
      .elementsParameter([
        ContentTypes.NavigationItem.fields.redirectTo,
        ContentTypes.NavigationItem.fields.order,
        ContentTypes.NavigationItem.fields.title])
      .languageParameter(language)
      .getPromise()
  }
}
