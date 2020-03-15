import Vue from 'vue'
import VueI18n from 'vue-i18n'

import de from '@/lang/de'
import en from '@/lang/en'
import es from '@/lang/es'
import fr from '@/lang/fr'
import nl from '@/lang/nl'
import ru from '@/lang/ru'

Vue.use(VueI18n)

const detectBrowserLanguage = () => {
  var language = (navigator.language || navigator.userLanguage).substring(0,2)

  switch (language) {
    case "de":
    case "en":
    case "es":
    case "fr":
    case "nl":
    case "ru":
      return language
    default:
      return "en"
  }
}

export const i18n = new VueI18n({
  locale: detectBrowserLanguage(),
  fallbackLocale: 'en',
  messages: {
    de, en, es, fr, nl, ru
  }
})