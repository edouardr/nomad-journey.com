const factoriesManager = require('./src/factories/runner');
const articleFactory = require('./src/factories/article');
const aboutUsFactory = require('./src/factories/aboutUs');
const itineraryFactory = require( './src/factories/itinerary');
const landingPageFactory = require('./src/factories/landingPage');

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

      allKenticoCloudItemItinerary {
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

  const itineraryPages = new Array(...result.data.allKenticoCloudItemItinerary.edges);
  itineraryFactory.createPage(itineraryPages, createPage);

  const landingPages = new Array(...result.data.allKenticoCloudItemLandingPage.edges);
  landingPageFactory.createPage(landingPages, createPage);
};
