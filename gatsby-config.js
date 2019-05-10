const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const siteAddress = new URL(process.env.HOSTNAME);

module.exports = {
  siteMetadata: {
    siteUrl: siteAddress.href,
    title: ` | Nomad-Journey`,
  },
  plugins: [
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: process.env.KENTICO_PROJECT_ID,
        },
        languageCodenames: process.env.KENTICO_LANGUAGES.split(';')
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
