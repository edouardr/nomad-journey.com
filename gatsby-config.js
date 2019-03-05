module.exports = {
  siteMetadata: {
    title: `Gatsby starter site with Kentico Cloud`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: `38f25638-156d-44ce-991f-87e4bfc93a72`,
        },
        languageCodenames: [
          `en`,
          `fr`,
        ]
      }
    }
  ]
};
