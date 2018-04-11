import { ContentTypes } from '~/content-types'

export const cardify = (articles, destinations) => {
  return articles
    .filter((article) => {
      return article && article.jumbotronTitle && article.jumbotronDescription
    })
    .map((article) => {
      const destination = destinations.filter(dest => dest.system.codename === article.system[ContentTypes.System.fields.sitemapLocations][0])[0]
      return {
        id: article.system.id,
        title: article.jumbotronTitle.text,
        text: article.jumbotronDescription.text,
        url: `/destinations/${destination.urlSlug.value}/${article.urlSlug.value}`,
        img: {
          url: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].url : '',
          alt: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].text : ''
        }
      }
    })
}
