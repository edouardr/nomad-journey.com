const path = require(`path`);
const basePage = require( './basePage');
const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `LandingPage`;
const templateName = `landingPage`;

exports.createNode = async ({ node, actions, store, cache, createNodeId }) => {
  const { createNodeField } = actions;

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

  await basePage.createNode({ node, actions, store, cache, createNodeId });
};

exports.createPages = (nodes, createPage) => {
  nodes.forEach(({ node }) => {
    if (node.fields !== undefined && node.fields !== null && node.fields.templateName !== undefined && node.fields.templateName !== null) {
      createPage({
        path: defaultLang === node.fields.language ? node.fields.slug : `${node.fields.language}/${node.fields.slug}`,
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
