const articleFactory = require('./article');
const aboutUsFactory = require( './aboutUs');
const landingPageFactory = require( './landingPage');

const factories = [
  articleFactory,
  aboutUsFactory,
  landingPageFactory
];

const getMatchingFactories = (factories, node) => factories.filter(factory => factory.match(node));

exports.createNode = async ({ node, actions, store, cache, createNodeId }) => {
  const matchingFactories = getMatchingFactories(factories, node);

  for(let i = 0; i < matchingFactories.length; ++i) {
    await matchingFactories[i].createNode({ node, actions, store, cache, createNodeId });
  }
};
