const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kcItemTypeIdentifier = `KenticoCloudItem`;
const articleTypeIdentifier = `Article`;

exports.onCreateNode = async ({ node, actions, store, cache, createNodeId }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type.match(/KenticoCloudItem/)) {
    let withDetailView = false;
    let templateName;

    if (node.internal.type === `${kcItemTypeIdentifier}${articleTypeIdentifier}`) {
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

      try {
        /// TODO: having a different image by language
        const fileNode = await createRemoteFileNode({
          url: node.elements.jumbotron__image.value[0].url,
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId
        });

        if (fileNode) {
          createNodeField({
            node,
            name: `jumbotronImage___NODE`,
            value: fileNode.id,
          });
        }
      } catch (e) {
        // Ignore
      }
    }

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
              codename
              language
              templateName
              slug
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
              templateName: node.fields.templateName,
              slug: node.fields.slug,
              language: node.fields.language,
              codename: node.fields.codename
            },
          });
        }
      });
      resolve();
    });
  });
};
