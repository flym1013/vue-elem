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
    url: '/v2/pois',
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
