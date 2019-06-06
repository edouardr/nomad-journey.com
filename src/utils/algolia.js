const INDEX_NAME = `articles`;

const articleQuery = `{
  allKenticoCloudItemArticle {
    edges {
      node {
        id
        system {
          language
        }
        elements {
          page_metadata__meta_description {
            value
          }
          page_metadata__meta_keywords {
            value
          }
          page_metadata__meta_title {
            value
          }
          body_text {
            value
          }
          location {
            value
          }
          posted {
            value
          }
          jumbotron__title {
            value
          }
          jumbotron__description {
            value
          }
          slug {
            value
          }
        }
      }
    }
  }
}`;

const mapArticle = article => {
  return {
    objectID: article.node.id,
    metaTitle: article.node.elements.page_metadata__meta_title.value,
    description: article.node.elements.page_metadata__meta_description.value,
    keywords: article.node.elements.page_metadata__meta_keywords.value.split(
      ', '
    ),
    location: article.node.elements.location.value,
    title: article.node.elements.jumbotron__title.value,
    content: article.node.elements.body_text.value,
    shortDescription: article.node.elements.jumbotron__description.value,
    language: article.node.system.language,
    slug: `/${article.node.system.language}/${article.node.elements.slug.value}`,
    posted: article.node.elements.posted.value,
    posted_timestamp: Math.round(
      new Date(article.node.elements.posted.value).getTime() / 1000
    ),
  };
};

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) => {
      const articles = new Array(...data.allKenticoCloudItemArticle.edges);

      return articles.map(mapArticle);
    },
    indexName: INDEX_NAME,
    settings,
  },
];

module.exports = queries;
