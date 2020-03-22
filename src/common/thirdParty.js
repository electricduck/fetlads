import Vue from "vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VueMasonryPlugin } from 'vue-masonry'
import InfiniteLoading from 'vue-infinite-loading';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowsAltV, faArrowLeft, faAt,
  faBars, faBirthdayCake, faBullseye,
  faChevronLeft, faChevronRight, faCompressAlt,
  faDownload,
  faExclamationTriangle, faExpand, faExternalLinkAlt,
  faGlobe,
  faHome,
  faImage, faImages, faInfoCircle,
  faMapMarkerAlt,
  faPaintBrush,
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

const thirdParty = {
  init() {
    library.add(
      faArrowsAltV, faArrowLeft, faAt,
      faBars, faBirthdayCake, faBullseye,
      faChevronLeft, faChevronRight, faCompressAlt,
      faDownload,
      faExclamationTriangle, faExpand, faExternalLinkAlt,
      faFacebook, faFlickr,
      faGithub, faGlobe,
      faHome,
      faImage, faImages, faInfoCircle, faInstagram,
      faMapMarkerAlt,
      faPaintBrush,
      faRandom, faReddit,
      faSnapchat,
      faTelegramPlane, faTimes, faToggleOn, faTwitter,
      faVenusMars, faVideo, faVuejs,
      faWhatsapp
    )

    Vue.component('font-awesome-icon', FontAwesomeIcon)

    Vue.use(VueMasonryPlugin)
    Vue.use(require('vue-shortkey'))
    Vue.use(InfiniteLoading);
  }
}

export default thirdParty