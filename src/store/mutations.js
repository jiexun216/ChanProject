import * as types from './mutation-types'
import { type } from 'os';

export default {
  [types.SET_LANG] (state, lang) {
    state.lang = lang
    localStorage.setItem('lang', lang)
  },
  [types.GET_LANG] (state) {
    let lang = localStorage.getItem('lang')
    state.lang = lang
  }
}
