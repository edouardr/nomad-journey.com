export const cardify = (articles, currentPage) => {
  return articles
    .filter((article) => {
      return article && article.jumbotronTitle && article.jumbotronDescription
    })
    .map((article) => {
      return {
        id: article.system.id,
        title: article.jumbotronTitle.text,
        text: article.jumbotronDescription.text,
        url: `destinations/${currentPage.urlSlug.value}/${article.urlSlug.value}`,
        img: {
          url: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].url : '',
          alt: article.jumbotronImage.assets.length ? article.jumbotronImage.assets[0].text : ''
        }
      }
    })
}
