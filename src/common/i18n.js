import Vue from 'vue'
import VueI18n from 'vue-i18n'

import de from '@/lang/de'
import en from '@/lang/en'
import es from '@/lang/es'
import fr from '@/lang/fr'
import ja from '@/lang/ja'
import nl from '@/lang/nl'
import ru from '@/lang/ru'

Vue.use(VueI18n)

const setLanguage = (defaultLanguage, forceLanguage) => {
  forceLanguage = forceLanguage || false

  if(!forceLanguage) {
    var browserLanguage = (navigator.language || navigator.userLanguage).substring(0,2)

    switch (browserLanguage) {
      case "de":
      case "en":
      case "es":
      case "fr":
      case "ja":
      case "nl":
      case "ru":
        return browserLanguage
      default:
        return defaultLanguage
    }
  } else {
    return defaultLanguage
  }
}

export const i18n = new VueI18n({
  locale: setLanguage('en', false),
  fallbackLocale: 'en',
  messages: {
    de, en, es, fr, ja, nl, ru
  }
})
