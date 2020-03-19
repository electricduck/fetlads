import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { v } from '@/common/variable'
import { i18n } from '@/common/i18n'
import { version } from './common/version'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowsAltV, faArrowLeft, faAt,
  faBars, faBiohazard, faBirthdayCake,
  faChevronLeft, faChevronRight, faCompressAlt,
  faDownload,
  faExpand, faExternalLinkAlt,
  faHome,
  faImage, faImages, faInfoCircle,
  faMapMarkerAlt,
  faRandom,
  faTimes, faToggleOn,
  faVenusMars, faVideo
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faFlickr,
  faGithub,
  faInstagram,
  faReddit,
  faSnapchat,
  faTelegramPlane, faTwitter,
  faVuejs,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VueMasonryPlugin } from 'vue-masonry'

library.add(
  faArrowsAltV, faArrowLeft, faAt,
  faBars, faBiohazard, faBirthdayCake,
  faChevronLeft, faChevronRight, faCompressAlt,
  faDownload,
  faExpand, faExternalLinkAlt,
  faFacebook, faFlickr,
  faGithub,
  faHome,
  faImage, faImages, faInfoCircle, faInstagram,
  faMapMarkerAlt,
  faRandom, faReddit,
  faSnapchat,
  faTelegramPlane, faTimes, faToggleOn, faTwitter,
  faVenusMars, faVideo, faVuejs,
  faWhatsapp
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMasonryPlugin)
Vue.use(require('vue-shortkey'))

Vue.config.productionTip = false

Vue.prototype.$var = v

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

console.log('%cFETLADS ', 'font-weight: 900; font-size: 50px;color: #d7ff3f; text-shadow: 3px 3px 0 #101010')
console.log('%cVersion ' + version, 'font-weight: bold; color: #8056ff; font-size: 16px;')
console.log('%cPowered by Vue and many late nights.', 'color: #1fb281;')
