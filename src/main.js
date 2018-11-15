// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import 'lib-flexible/flexible.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store/store'
import i18n from './langs/index'
import {getData, postData, deleteData, putData} from './api/api'
import { JSEncrypt } from 'jsencrypt'
Vue.prototype.$getData = getData
Vue.prototype.$postData = postData
Vue.prototype.$deleteData = deleteData
Vue.prototype.$putData = putData
 

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Mint)
Vue.use(VueAxios, axios)
Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.$store = store
Vue.prototype.$store.commit('GET_LANG')
Vue.config.productionTip = false
window.i18n = i18n
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  JSEncrypt,
  data: {eventHub: new Vue()
  },
  components: { App },
  template: '<App/>'
})
