import { DeliveryClientConfig, DeliveryNodeClient, TypeResolver } from 'kentico-cloud-delivery-node-sdk'
import { ContentTypes } from '../../content-types'
import { Article, Destination, LandingPage, NavigationItem } from '../models'

const deliveryClientFactory = () => {
  const projectId = '38f25638-156d-44ce-991f-87e4bfc93a72'

  const typeResolvers = [
    new TypeResolver(ContentTypes.Article.codeName, () => new Article()),
    new TypeResolver(ContentTypes.Destination.codeName, () => new Destination()),
    new TypeResolver(ContentTypes.LandingPage.codeName, () => new LandingPage()),
    new TypeResolver(ContentTypes.NavigationItem.codeName, () => new NavigationItem())
  ]

  return new DeliveryNodeClient(
    new DeliveryClientConfig(projectId, typeResolvers)
  )
}

export const deliveryClient = deliveryClientFactory()
