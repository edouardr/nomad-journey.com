const factoriesManager = require('./factories/runner');

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId }) => {
  if (node.internal.type.match(/KenticoCloudItem/)) {
    await factoriesManager.createNode({ node, actions, store, cache, createNodeId });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allKenticoCloudItemArticle {
        edges {
          node {
            fields {
              codename
              language
              templateName
              slug
            }
          }
        }
      }
    }
  `);

  const articles = new Array(...result.data.allKenticoCloudItemArticle.edges);
  articleFactory.createPage(articles, createPage)
};
