import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { v } from '@/common/variable'
import { i18n } from '@/common/i18n'
import { version } from './common/version'
import thirdParty from './common/thirdParty'

Vue.config.productionTip = false
Vue.prototype.$var = v

thirdParty.init();

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

console.log('%cFETLADS ', 'font-weight: 900; font-size: 50px;color: #d7ff3f; text-shadow: 3px 3px 0 #101010')
console.log('%cVersion ' + version, 'font-weight: bold; color: #8056ff; font-size: 16px;')
console.log('%cPowered by Vue and many late nights.', 'color: #1fb281;')
