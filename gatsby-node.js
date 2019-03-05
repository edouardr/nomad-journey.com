const path = require(`path`);
const kcItemTypeIdentifier = `KenticoCloudItem`;
const projectReferenceTypeIdentifier = `Article`;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type.match(/KenticoCloudItem/)) {
    let withDetailView = false;
    let templateName;

    if (node.internal.type === `${kcItemTypeIdentifier}${projectReferenceTypeIdentifier}`) {
      templateName = `article`;
      withDetailView = true;
    }

    if (withDetailView) {
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
    }

    createNodeField({
      node,
      name: `language`,
      value: node.system.language
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allKenticoCloudItemArticle {
        edges {
          node {
            fields {
              templateName
              slug
              language
            }
          }
        }
      }
    }
    `).then(result => {
        const union = new Array(...result.data.allKenticoCloudItemArticle.edges);

        union.forEach(({ node }) => {
          if (node.fields !== undefined && node.fields !== null && node.fields.templateName !== undefined && node.fields.templateName !== null) {
            createPage({
              path: `${node.fields.language}/${node.fields.slug}`,
              component: path.resolve(`./src/templates/${node.fields.templateName}.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                templateName: node.fields.templateName,
                slug: node.fields.slug,
                language: node.fields.language
              },
            });
          }
        });
        resolve();
      });
  });
};
