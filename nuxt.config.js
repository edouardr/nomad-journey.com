module.exports = {
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
  ],
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Add Nuxt.js middleware
  */
  router: {
    middleware: 'lang'
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios',
      'kentico-cloud-delivery-node-sdk'
    ],
    /*
    ** Run ESLINT on save
    */
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
