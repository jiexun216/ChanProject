import Vue from 'vue'
import VueI18n from 'vue-i18n'
import getCookie from './cookie'
import * as config from '../../config/config.js'

Vue.use(VueI18n)
const DEFAULT_LANG = 'SET_LANG'
//  const LOCALE_KEY = 'localeLanguage'
const locales = {
  'chinese': require('./zh'),
  'english': require('./en'),
  'character': require('./char')
}

export default new VueI18n({
  // locale: 'chinese',  // 语言标识
  // messages: {
  //   'chinese': require('./zh'), // 中文
  //   'english': require('./en'), // 英文
  //   'character': require('./char') // 繁体
  // },
  locale: localStorage.getItem('local')||'chinese',
  messages: locales,
})
// export const setup = lang => {
//   if (lang === undefined) {
//     lang = window.localStorage.getItem(LOCALE_KEY)
//     if (locales[lang] === undefined) {s
//       lang = DEFAULT_LANG
//     }
//   }
//   window.localStorage.setItem(LOCALE_KEY, lang)

//   Object.keys(locales).forEach(lang => {
//     document.body.classList.remove(`lang-${lang}`)
//   })
//   document.body.classList.add(`lang-${lang}`)
//   document.body.setAttribute('lang', lang)

//   Vue.config.lang = lang
//   i18n.locale = lang
// }

// setup()
// export default i18n