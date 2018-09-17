import Vue from 'vue'
import Vuex from 'vuex'
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
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    getPage (state, data) {
      state.page = data
    }
  }
})
