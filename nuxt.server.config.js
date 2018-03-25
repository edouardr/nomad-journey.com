module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'A Nomad Journey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Nomad Journey API' }
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
  modules: [],
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'kentico-cloud-delivery-node-sdk'
    ]
  }
}
