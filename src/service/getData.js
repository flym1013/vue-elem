import fetch from '../config/fetch.js'

// get请求 params   post请求 data
// 获取商品列表
export function msiteFoodTypes (opt) {
  return fetch({
    url: '/v2/index_entry',
    method: 'get',
    params: opt
  })
}

// 获取首页默认城市
export function cityGuess (opt) {
  return fetch({
    url: '/v1/cities',
    method: 'get',
    params: opt
  })
}

// 根据经纬度详细定位
/**
 * @param {String} geohash 经纬度 必选
 */
export function msiteAdress (opt) {
  return fetch({
    url: '/v2/pois/' + opt,
    method: 'get'
  })
}

// 获取商铺列表
/**
 * @param {String} latitude  纬度 必选
 * @param {String} longitude 经度 必选
 * @param {String} offset    跳过多少条数据，默认0
 * @param {String} limit 请求数据的数量，默认20
 * @param {String} restaurant_category_id  餐馆分类id
 * @param {String} order_by  排序方式id： 1：起送价、2：配送速度、3:评分、4: 智能排序(默认)、5:距离最近、6:销量最高
 * @param {String} delivery_mode 配送方式id
 * @param {String} support_ids 餐馆支持特权的id
 */
export function shopList (opt) {
  return fetch({
    url: '/shopping/restaurants',
    method: 'get',
    params: opt
  })
}

// 获取红包
/**
*@param {String} user_id  用户id 必选
*@param {String} limit 获取数据数量
*@param {String} offset 跳过数据条数
*/
export function getRedEnvelope (opt) {
  return fetch({
    url: '/promotion/v2/users/' + opt.user_id + '/hongbaos',
    method: 'get',
    params: {'limit': opt.limit, 'offset': opt.offset}
  })
}

// 获取历史红包
/**
*@param {String} user_id  用户id 必选
*@param {String} limit 获取数据数量
*@param {String} offset 跳过数据条数
*/
export function getOverduRedEnvelope (opt) {
  return fetch({
    url: '/promotion/v2/users/' + opt.user_id + '/expired_hongbaos',
    method: 'get',
    params: {'limit': opt.limit, 'offset': opt.offset}
  })
}

// 兑换红包
/**
*@param {String} user_id  用户id 必选
*@param {String} limit 获取数据数量
*@param {String} offset 跳过数据条数
*/
export function exchangeRedEnvelope (opt) {
  return fetch({
    url: '/v1/users/' + opt.user_id + '/hongbao/exchange',
    method: 'post',
    data: {'limit': opt.limit, 'offset': opt.offset}
  })
}

// 获取验证码
/**
*/
export function getCode (opt) {
  return fetch({
    url: '/v1/captchas',
    method: 'post',
    data: opt
  })
}

// 登录
/**
*@param username  用户名 Y
*@param password    密码 Y
*@param captcha_code   验证码 Y
*/
export function login (opt) {
  return fetch({
    url: '/v2/login',
    method: 'post',
    data: opt
  })
}

// 获取用户信息
export function getInfo (opt) {
  return fetch({
    url: '/v1/user',
    method: 'get',
    params: opt
  })
}

// 获取城市
/**
*@param guess  定位城市
*@param hot    热门城市
*@param group   所有城市
*/
export function getCity (opt) {
  return fetch({
    url: '/v1/cities',
    method: 'get',
    params: opt
  })
}

// 获取当前城市，搜索城市中的不同位置
/**
*@param guess  定位城市
*@param hot    热门城市
*@param group   所有城市
*/
export function getCurrentCity (opt) {
  return fetch({
    url: '/v1/cities' + '/' + opt,
    method: 'get',
    params: opt
  })
}

// 搜索地址
/**
*@param city_id 城市id Y
*@param keyword 搜索关键词 Y
*@param type 类型
*/
export function searchAddrress (opt) {
  return fetch({
    url: 'v1/pois',
    method: 'get',
    params: opt
  })
}

// 获取所有商铺分类列表
/**
*@param latitude  纬度
*@param longitude  经度
*/
export function getAllClassification (opt) {
  return fetch({
    url: 'shopping/v2/restaurant/category',
    method: 'get',
    params: opt
  })
}

// 获取配送方式
/**
*@param latitude  纬度
*@param longitude  经度
*/
export function getDeliveryMethods (opt) {
  return fetch({
    url: 'shopping/v1/restaurants/delivery_modes',
    method: 'get',
    params: opt
  })
}

// 商家属性活动列表
/**
*@param latitude  纬度
*@param longitude  经度
*/
export function getActiveMethods (opt) {
  return fetch({
    url: 'shopping/v1/restaurants/activity_attributes',
    method: 'get',
    params: opt
  })
}
