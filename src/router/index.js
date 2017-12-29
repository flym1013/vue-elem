import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import App from '../App'

const home = () => import('../page/home/home.vue')
const search = () => import('../page/search/search.vue')
const order = () => import('../page/order/order.vue')
const myInformation = () => import('../page/myInformation/myInformation.vue')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    // 首页home
    { path: '/home', component: home },
    // 搜索search
    { path: '/search', component: search },
    // 订单order
    { path: '/order', component: order },
    // 我的信息myInformation
    { path: '/myInformation', component: myInformation }
  ]
})
