const { createRemoteFileNode } = require( 'gatsby-source-filesystem');
const path = require(`path`);

exports.createNode = async ({node, actions, store, cache, createNodeId}) => {
  const { createNode, createNodeField } = actions;

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
};

exports.createPage = (nodes, createPage) => {
  nodes.forEach(({ node }) => {
    if (node.fields !== undefined && node.fields !== null && node.fields.templateName !== undefined && node.fields.templateName !== null) {
      createPage({
        path: `${node.fields.language}/${node.fields.slug}`,
        component: path.resolve(`./src/templates/${node.fields.templateName}.js`),
        context: {
          codename: node.fields.codename,
          jumbotronImage: node.fields.jumbotronImage,
          language: node.fields.language,
          templateName: node.fields.templateName,
          slug: node.fields.slug,
        },
      });
    }
  });
}
