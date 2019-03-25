module.exports = {
  siteMetadata: {
    title: ` | Nomad-Journey`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nomag-Journey`,
        short_name: `Nomad-Journey`,
        start_url: `/`,
        background_color: `#dbdcd1`,
        theme_color: `#1ad2eb`,
        display: `standalone`,
        icon: `src/images/logo-simple-transp-square-260x260.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
  ]
};
