const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.nomad-journey.com/`,
    title: ` | Nomad-Journey`,
  },
  plugins: [
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/styles/_variables"],
      },
    },
  ]
};
