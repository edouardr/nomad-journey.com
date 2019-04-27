const basePage = require( './basePage');
const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `AboutUs`;
const templateName = `aboutUs`;

exports.createNode = async ({ node, actions, store, cache, createNodeId }) => {
  const { createNodeField } = actions;

  await basePage.createNode({ node, actions, store, cache, createNodeId });

  createNodeField({
    node,
    name: `templateName`,
    value: templateName
  });

  createNodeField({
    node,
    name: `slug`,
    value: node.elements.slug.value
  });
};

exports.createPage = (results, createPage) => {
  basePage.createPage(results, createPage)
};


exports.match = (node) => node.internal.type === `${kcItemTypeIdentifier}${articleTypeIdentifier}`;
