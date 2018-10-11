import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as config from '../../config/config.js'

Vue.use(VueI18n)

export default new VueI18n({
  locale: config.lang,  // 语言标识
  messages: {
    'chinese': require('./zh'), // 中文
    'english': require('./en'), // 英文
    'character': require('./char') // 繁体
  }
})
