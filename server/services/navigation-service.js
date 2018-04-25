import { CacheService } from './cache-service'
import { SortOrder } from 'kentico-cloud-delivery-node-sdk'
import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.NavigationItem.fields.redirectTo,
  ContentTypes.NavigationItem.fields.order,
  ContentTypes.NavigationItem.fields.title
]
const cacheService = new CacheService()

export class NavigationService {
  getAll (language) {
    const key = `${ContentTypes.NavigationItem.codeName}-${language}`
    return cacheService.getOrCreate(key, () => (
      deliveryClient.items()
        .type(ContentTypes.NavigationItem.codeName)
        .elementsParameter(fields)
        .orderParameter(`elements.${ContentTypes.NavigationItem.fields.order}`, SortOrder.asc)
        .languageParameter(language)
        .getPromise()
    ))
  }

  getNavItem (language, codename) {
    const key = `${ContentTypes.NavigationItem.codeName}-${language}-${codename}`
    return cacheService.getOrCreate(key, () => (
      deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()
    ))
  }
}
