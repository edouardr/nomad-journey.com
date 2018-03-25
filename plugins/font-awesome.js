import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import Vue from 'vue'

fontawesome.library.add(brands)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
