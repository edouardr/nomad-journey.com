const path = require('path');
const basePage = require('./basePage');
const kcItemTypeIdentifier = 'KenticoCloudItem';
const articleTypeIdentifier = 'LandingPage';
const templateName = 'landingPage';
const homeTemplate = 'home';
const homeCodename = 'home';

exports.createNode = async ({ node, actions, store, cache, createNodeId }) => {
  const { createNodeField } = actions;

  await basePage.createNode({ node, actions, store, cache, createNodeId });

  createNodeField({
    node,
    name: 'templateName',
    value: (node.system.codename === homeCodename) ? homeTemplate : templateName
  });

  createNodeField({
    node,
    name: 'slug',
    value: node.elements.slug.value
  });
};

exports.createPage = (nodes, createPage) => {
  nodes.forEach(({ node }) => {
    if (node.fields !== undefined && node.fields !== null && node.fields.templateName !== undefined && node.fields.templateName !== null) {
      createPage({
        path: resolvePath(node),
        component: path.resolve(`./src/templates/${node.fields.templateName}.js`),
        context: {
          templateName: node.fields.templateName,
          slug: node.fields.slug,
          language: node.fields.language,
          codename: node.fields.codename
        },
      });
    }
  });
}

exports.match = (node) => node.internal.type === `${kcItemTypeIdentifier}${articleTypeIdentifier}`;

const resolvePath = (node) => {
  return node.fields.codename === homeCodename
    ? `${node.fields.language}`
    : `${node.fields.language}/${node.fields.slug}`;
};
