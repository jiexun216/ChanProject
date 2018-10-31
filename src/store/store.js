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
    //加载loading
    loading: {
      status:false,
      text: ''
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    getPage (state, data) {
      state.page = data
    },
    //修改loading状态
    updateLoadingStatus(state, status) {
      state.loading.status = status.status;
      state.loading.text = status.text;
    },
  },
  actions:{
    //控制loading
    startLoding({state, commit},status){

      commit('updateLoadingStatus', status)
    },

  },
  mutations
})
