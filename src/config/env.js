/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseURL = 'http://cangdu.org:8001'
let routerMode = 'hash'
let imgBaseUrl

if (process.env.NODE_ENV === 'development') {
  imgBaseUrl = 'http://cangdu.org:8001/img/'
} else if (process.env.NODE_ENV === 'production') {
// baseUrl = 'http://cangdu.org:8001';
  imgBaseUrl = 'http://cangdu.org:8001/img/'
}

export default {
  baseURL,
  routerMode,
  imgBaseUrl
}
