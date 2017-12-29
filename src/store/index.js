import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)
const state = {
  latitude: '31.22299', // 当前位置纬度
  longitude: '121.36025' // 当前位置经度
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
