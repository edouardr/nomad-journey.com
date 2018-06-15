import { CacheService } from './cache-service'
import { SortOrder } from 'kentico-cloud-delivery'
import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.NavigationItem.fields.redirectTo,
  ContentTypes.NavigationItem.fields.order,
  ContentTypes.NavigationItem.fields.title,
  ContentTypes.SnippetAppearance.fields.sortOrder
]
const cacheService = new CacheService()

export class NavigationService {
  getAll (language) {
    const key = `${ContentTypes.NavigationItem.codeName}-${language}`
    return cacheService.getOrCreate(key, async () => {
      const { items } = await deliveryClient.items()
        .type(ContentTypes.NavigationItem.codeName)
        .elementsParameter(fields)
        .orderParameter(`elements.${ContentTypes.SnippetAppearance.fields.sortOrder}`, SortOrder.asc)
        .languageParameter(language)
        .getPromise()

      return items
    })
  }

  getNavItem (language, codename) {
    const key = `${ContentTypes.NavigationItem.codeName}-${language}-${codename}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .getPromise()

      return item
    })
  }
}
