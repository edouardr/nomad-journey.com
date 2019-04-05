import { CacheService } from './cache-service'
import { deliveryClient } from './kentico-client'
import { ContentTypes } from '../../content-types'

const fields = [
  ContentTypes.About_Us.fields.bodyText,
  ContentTypes.About_Us.fields.persons,
  ContentTypes.Person.fields.image,
  ContentTypes.Person.fields.interview,
  ContentTypes.QuestionAnswer.fields.question,
  ContentTypes.QuestionAnswer.fields.answer,
  ContentTypes.SnippetJumbotron.fields.description,
  ContentTypes.SnippetJumbotron.fields.image,
  ContentTypes.SnippetJumbotron.fields.title,
  ContentTypes.SnippetPageMetaData.fields.description,
  ContentTypes.SnippetPageMetaData.fields.keywords,
  ContentTypes.SnippetPageMetaData.fields.ogDescription,
  ContentTypes.SnippetPageMetaData.fields.ogImage,
  ContentTypes.SnippetPageMetaData.fields.ogTitle,
  ContentTypes.SnippetPageMetaData.fields.title
]
const cacheService = new CacheService(process.env.USE_CACHING)

export class AboutService {
  get (language, codename) {
    const key = `${ContentTypes.About_Us.codeName}-${language}`
    return cacheService.getOrCreate(key, async () => {
      const { item } = await deliveryClient.item(codename)
        .elementsParameter(fields)
        .languageParameter(language)
        .depthParameter(3)
        .getPromise()

      return item
    })
  }
}