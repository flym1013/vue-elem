import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)
const state = {
  userInfo: null, // 用户信息
  latitude: null, // 当前位置纬度
  longitude: null, // 当前位置经度
  geohash: '31.22299,121.36025' // 地址geohash值
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
