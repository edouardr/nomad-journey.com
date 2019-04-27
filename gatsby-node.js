const factoriesManager = require('./factories/runner');
const articleFactory = require('./factories/article');
const aboutUsFactory = require('./factories/aboutUs');
const landingPageFactory = require('./factories/landingPage');

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId }) => {
  if (node.internal.type.match(/KenticoCloudItem/)) {
    await factoriesManager.createNode({ node, actions, store, cache, createNodeId });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allKenticoCloudItemAboutUs {
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

      allKenticoCloudItemLandingPage {
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

      allKenticoCloudItemArticle (sort: { order: DESC, fields: [elements___posted___value] }){
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
  articleFactory.createPage(articles, createPage);

  const aboutUsNodes = new Array(...result.data.allKenticoCloudItemAboutUs.edges);
  aboutUsFactory.createPage(aboutUsNodes, createPage);

  const landingPages = new Array(...result.data.allKenticoCloudItemLandingPage.edges);
  landingPageFactory.createPage(landingPages, createPage);
};
