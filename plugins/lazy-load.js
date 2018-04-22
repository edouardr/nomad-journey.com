import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/_nuxt/img/logo.a04e995.png',
  loading: '/_nuxt/img/logo.a04e995.png',
  attempt: 1
})
