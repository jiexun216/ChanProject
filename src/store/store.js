import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../store/action'
import mutations from '../store/mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    page: '',
    goodsQuantity: '',
    soldthings: 10,
    price: '',
    marketPrice: '',
    value: '',
    lang: 'chinese', 
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    getPage (state, data) {
      state.page = data
    }
  },
  actions,
  mutations
})
