import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)
const state = {
  userInfo: null, // 用户信息
  latitude: null, // 当前位置纬度s
  longitude: null, // 当前位置经度
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null, // 商家详情信息
  imgPath: null, // 头像地址
  removeAddress: [], // 移除地址
  login: true, // 是否登录
  newAddress: [], // 确认订单页新的地址
  addressIndex: null, // 选择地址的索引值
  orderMessage: null, // 订单返回的信息
  addAddress: '', // 新增地址
  remarkText: null, // 可选备注内容
  inputText: '', // 输入备注内容
  invoice: false, // 开发票
  orderDetail: null, // 订单详情
  invoiceTxt: null, // 是否开发票
  choosedAddress: null, // 选择地址
  cartPrice: null, // 会员卡价格
  orderParam: null, // 订单的参数
  geohash: '' // 地址geohash值
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
