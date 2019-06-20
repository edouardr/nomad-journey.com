const path = require(`path`);
const basePage = require( './basePage');
const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `Itinerary`;
const templateName = `itinerary`;

exports.createNode = async ({ node, actions, store, cache, createNodeId }) => {
  const { createNodeField } = actions;

  createNodeField({
    node,
    name: `language`,
    value: node.system.language
  });

  createNodeField({
    node,
    name: `codename`,
    value: node.system.codename
  });

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
  results.forEach(({ node }) => {
    if (node.fields !== undefined && node.fields !== null && node.fields.templateName !== undefined && node.fields.templateName !== null) {
      createPage({
        path: `${node.fields.language}/${node.fields.slug}`,
        component: path.resolve(`./src/templates/${node.fields.templateName}.js`),
        context: {
          codename: node.fields.codename,
          language: node.fields.language,
          templateName: node.fields.templateName,
          slug: node.fields.slug,
        },
      });
    }
  });
};


exports.match = (node) => node.internal.type === `${kcItemTypeIdentifier}${articleTypeIdentifier}`;
