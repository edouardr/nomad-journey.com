import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/logo-simple-grey.png',
  loading: '/logo-simple-grey.png',
  attempt: 1
})
