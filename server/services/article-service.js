import { deliveryClient } from '../services/kentico-client'
import { ContentTypes } from '../../content-types'

export class ArticleService {
  get (language, slug) {
    return deliveryClient.items()
      .type(ContentTypes.Article.codeName)
      .elementsParameter([
        ContentTypes.Article.fields.bodyText,
        ContentTypes.Article.fields.posted,
        ContentTypes.Article.fields.urlSlug,
        ContentTypes.SnippetJumbotron.fields.description,
        ContentTypes.SnippetJumbotron.fields.image,
        ContentTypes.SnippetJumbotron.fields.title,
        ContentTypes.SnippetPageMetaData.fields.description,
        ContentTypes.SnippetPageMetaData.fields.keywords,
        ContentTypes.SnippetPageMetaData.fields.ogDescription,
        ContentTypes.SnippetPageMetaData.fields.ogTitle,
        ContentTypes.SnippetPageMetaData.fields.title
      ])
      .equalsFilter(`elements.${ContentTypes.Article.fields.urlSlug}`, slug)
      .languageParameter(language)
      .getPromise()
  }

  getLatest (language, limit) {
    return deliveryClient.items()
      .type(ContentTypes.Article.codeName)
      .elementsParameter([
        ContentTypes.Article.fields.bodyText,
        ContentTypes.Article.fields.posted,
        ContentTypes.Article.fields.urlSlug,
        ContentTypes.SnippetJumbotron.fields.description,
        ContentTypes.SnippetJumbotron.fields.image,
        ContentTypes.SnippetJumbotron.fields.title,
        ContentTypes.SnippetPageMetaData.fields.description,
        ContentTypes.SnippetPageMetaData.fields.keywords,
        ContentTypes.SnippetPageMetaData.fields.ogDescription,
        ContentTypes.SnippetPageMetaData.fields.ogTitle,
        ContentTypes.SnippetPageMetaData.fields.title
      ])
      .orderParameter(`elements.${ContentTypes.Article.fields.posted}`)
      .languageParameter(language)
      .limitParameter(limit)
      .getPromise()
  }
}
