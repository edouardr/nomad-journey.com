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
        title: article.tileTitle.text,
        text: article.tileDescription.text,
        url: `/destinations/${destination.urlSlug.value}/${article.urlSlug.value}`,
        img: {
          url: article.tileThumbnail.assets.length ? article.tileThumbnail.assets[0].url : '',
          alt: article.tileThumbnail.assets.length ? article.tileThumbnail.assets[0].text : ''
        }
      }
    })
}
