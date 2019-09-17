const path = require(`path`);
const queries = require('./src/utils/algolia');
const feedOptions = require('./src/utils/feed');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const hostname = new URL(process.env.GATSBY_HOSTNAME);

module.exports = {
  siteMetadata: {
    siteUrl: hostname.href,
    title: ` Nomad-Journey`,
    author: {
      name: 'Edouard Riviere',
    },
    organization: {
      name: 'Nomad Journey',
      url: hostname.href,
      logo: `${hostname.href}/icons/icon-512x512.png`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: process.env.GATSBY_KENTICO_PROJECT_ID,
        },
        languageCodenames: process.env.GATSBY_KENTICO_LANGUAGES.split(';'),
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nomad-Journey`,
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
        includePaths: ['src/styles/_variables'],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: feedOptions,
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATSBY_GTM_CODE,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: hostname.href,
        sitemap: `${hostname.href}sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
