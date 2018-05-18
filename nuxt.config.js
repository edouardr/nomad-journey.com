module.exports = {
  loading: {
    color: '#1ad2eb',
    height: '3px'
  },
  env: {
    CANONICAL_DOMAIN: process.env.CANONICAL_DOMAIN,
    DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
    FB_USERNAME: process.env.FB_USERNAME,
    INSTA_USERNAME: process.env.INSTA_USERNAME,
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    REDISTOGO_URL: process.env.REDISTOGO_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'A Nomad Journey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Nomad Journey' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/plugins/font-awesome',
    '~/plugins/google-maps',
    '~/plugins/lazy-load'
  ],
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/main.scss', lang: 'sass' }
  ],
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', [
      '~/assets/css/_colours.scss'
    ]]
  ],
  /*
  ** Add Nuxt.js middleware
  */
  router: {
    middleware: 'lang',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios'
    ],
    extend (config) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
