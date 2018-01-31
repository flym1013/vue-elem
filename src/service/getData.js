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
    method: 'get',
    params: opt
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
    data: opt
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

// 餐馆详情
/**
*@param latitude  纬度
*@param longitude  经度
*@param shopid 餐馆id
*/
export function getCanteenDetail (opt) {
  return fetch({
    url: 'shopping/restaurant' + '/' + opt.shopid,
    method: 'get',
    params: {latitude: opt.latitude, longitude: opt.longitude + '&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'}
  })
}

// 获取餐馆食品列表
/**
*@param restaurant_id  餐馆ID
*/
export function getCanteenFoodList (opt) {
  return fetch({
    url: 'shopping/v2/menu',
    method: 'get',
    params: opt
  })
}

// 获取评价信息
/**
*@param restaurant_id  餐馆ID
*@param tag_name  评价类型，默认全部
*@param offset   跳过数据条数
*@param limit     单次获取数据条数
*/
export function getCanteenComment (opt) {
  return fetch({
    url: 'ugc/v2/restaurants/' + opt.restaurant_id + '/ratings',
    method: 'get',
    params: {has_content: true, tag_name: opt.tag_name, offset: opt.offset, limit: opt.limit}
  })
}

// 获取评价分数
/**
*@param restaurant_id  餐馆ID
*@param tag_name  评价类型，默认全部
*@param offset   跳过数据条数
*@param limit     单次获取数据条数
*/
export function getCanteenCommentScores (opt) {
  return fetch({
    url: 'ugc/v2/restaurants/' + opt.restaurant_id + '/ratings/scores',
    method: 'get',
    params: {has_content: true, tag_name: opt.tag_name, offset: opt.offset, limit: opt.limit}
  })
}

// 获取评价分类
/**
*@param restaurant_id  餐馆ID
*@param tag_name  评价类型，默认全部
*@param offset   跳过数据条数
*@param limit     单次获取数据条数
*/
export function getCanteenCommentTag (opt) {
  return fetch({
    url: 'ugc/v2/restaurants/' + opt.restaurant_id + '/ratings/tags',
    method: 'get',
    params: {has_content: true, tag_name: opt.tag_name, offset: opt.offset, limit: opt.limit}
  })
}

// 获取收货地址列表
/**
*@param user_id    用户id y
*/
export function getAddressList (opt) {
  return fetch({
    url: '/v1/users/' + opt.user_id + '/addresses',
    method: 'get'
  })
}

// 删除收获地址爱
/**
*@param user_id    用户id y
*@param address_id    收货地址id y
*/
export function deleteAddress (opt) {
  return fetch({
    url: '/v1/users/' + opt.user_id + '/addresses/' + opt.address_id,
    method: 'DELETE'
  })
}

// 添加收货地址
/**
*@param user_id    用户id y
*@param address_id    收货地址id y
.........
*/
export function addNewAddress (opt) {
  return fetch({
    url: '/v1/users/' + opt.user_id + '/addresses',
    method: 'post',
    data: opt
  })
}

// 修改密码
/**
*@param username    用户名 y
*@param oldpassWord  旧密码 y
.........
*/
export function changePassword (opt) {
  return fetch({
    url: '/v2/changepassword',
    method: 'post',
    data: opt
  })
}

// 退出登录
export function siginOut (opt) {
  return fetch({
    url: '/v2/signout',
    method: 'get'
  })
}

// 加入购物车
/**
*@param restaurant_id     餐馆ID y
*@param geohash  经纬度 y
*@param entities   购物车数据 y
.........
*/
export function checkout (opt) {
  return fetch({
    url: '/v1/carts/checkout',
    method: 'post',
    data: opt
  })
}

// 下单
/**
*@param user_id    用户ID y
*@param cart_id  购物车ID y
*@param address_id   收货地址ID y
*@param restaurant_id      餐馆ID y
*@param geohash  经纬度 y
*@param description   备注 y
*@param entities  购物车数据 y
.........
*/
export function placeOrders (opt) {
  return fetch({
    url: '/v1/users/' + opt.user_id + '/carts/' + opt.cart_id + '/orders',
    method: 'post',
    data: opt
  })
}

/**
 * 获取快速备注列表
 */
export function getRastRemark (opt) {
  return fetch({
    url: '/v1/carts/' + opt.cart_id + '/remarks',
    method: 'get',
    params: {sig: opt.sig}
  })
}

// 获取订单列表
export function getOrderList (opt) {
  return fetch({
    url: '/bos/v2/users/' + opt.user_id + '/orders',
    method: 'get',
    params: {limit: 10000, offset: opt.offset}
  })
}
// 获取订单详情
export function getOrderDetail (opt) {
  return fetch({
    url: '/bos/v1/users/' + opt.user_id + '/orders/' + opt.order_id + '/snapshot',
    method: 'get'
  })
}

// 搜索餐馆
export function searchRestaurants (opt) {
  return fetch({
    url: '/v4/restaurants',
    method: 'get',
    params: opt
  })
}
