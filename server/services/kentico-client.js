import { DeliveryClientConfig, DeliveryNodeClient, TypeResolver } from 'kentico-cloud-delivery-node-sdk'
import { ContentTypes } from '../../content-types'
import { AboutUs, Article, Destination, Itinerary, KeyFact, Location, LandingPage, NavigationItem, Person, QuestionAnswer } from '../models'

const deliveryClientFactory = () => {
  const projectId = '38f25638-156d-44ce-991f-87e4bfc93a72'

  const typeResolvers = [
    new TypeResolver(ContentTypes.About_Us.codeName, () => new AboutUs()),
    new TypeResolver(ContentTypes.Article.codeName, () => new Article()),
    new TypeResolver(ContentTypes.Destination.codeName, () => new Destination()),
    new TypeResolver(ContentTypes.Itinerary.codeName, () => new Itinerary()),
    new TypeResolver(ContentTypes.KeyFact.codeName, () => new KeyFact()),
    new TypeResolver(ContentTypes.Location.codeName, () => new Location()),
    new TypeResolver(ContentTypes.LandingPage.codeName, () => new LandingPage()),
    new TypeResolver(ContentTypes.NavigationItem.codeName, () => new NavigationItem()),
    new TypeResolver(ContentTypes.Person.codeName, () => new Person()),
    new TypeResolver(ContentTypes.QuestionAnswer.codeName, () => new QuestionAnswer())
  ]

  return new DeliveryNodeClient(
    new DeliveryClientConfig(projectId, typeResolvers)
  )
}

export const deliveryClient = deliveryClientFactory()
