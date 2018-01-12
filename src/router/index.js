import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import App from '../App'

const home = () => import('../page/home/home.vue')
const foodCategory = () => import('../page/home/foodCategory.vue')
const shopDetail = () => import('../page/home/shopDetail.vue')

const loginPage = () => import('../page/login/loginPage.vue')
const forgetPage = () => import('../page/login/forget.vue')
const selectLoction = () => import('../page/login/selectLoction.vue')
const city = () => import('../page/login/city.vue')

const search = () => import('../page/search/search.vue')
const order = () => import('../page/order/order.vue')

const myInformation = () => import('../page/myInformation/myInformation.vue')
const balance = () => import('../page/myInformation/balance.vue')
const balanceDetail = () => import('../page/myInformation/balanceDetail.vue')
const points = () => import('../page/myInformation/points.vue')
const pointsDetail = () => import('../page/myInformation/pointsDetail.vue')
const discount = () => import('../page/myInformation/discount.vue')
const redEnvelopDetail = () => import('../page/myInformation/redEnvelopDetail.vue')
const vouchersDetail = () => import('../page/myInformation/vouchersDetail.vue')
const overdueRedEnvelope = () => import('../page/myInformation/overdueRedEnvelope')
const exchangeRedEnvelop = () => import('../page/myInformation/exchangeRedEnvelop')
const recommend = () => import('../page/myInformation/recommend.vue')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    // 登录注册页
    { path: '/loginPage', component: loginPage },
    // 重置密码页面
    { path: '/forgetPage', component: forgetPage },
    // 首页home
    { path: '/home', component: home },
    // 首页-选择地址
    { path: '/selectLoction', component: selectLoction },
    // 首页-选择地址-选择详细地址
    { path: '/city/:cityid', component: city },
    // 首页-选择分类
    { path: '/foodCategory', component: foodCategory },
    // 首页-选择分类-详情
    { path: '/shopDetail', component: shopDetail },
    // 搜索search
    { path: '/search', component: search },
    // 订单order
    { path: '/order', component: order },

    // 我的信息myInformation
    { path: '/myInformation', component: myInformation },
        // 我的信息-我的余额
    { path: '/balance', component: balance },
    // 我的信息-我的余额-余额说明
    { path: '/balanceDetail', component: balanceDetail },
    // 我的信息-我的积分
    { path: '/points', component: points },
    // 我的信息-我的积分-积分说明
    { path: '/pointsDetail', component: pointsDetail },
    // 我的信息-我的优惠
    { path: '/discount', component: discount },
    // 我的信息-我的优惠-红包说明
    { path: '/redEnvelopDetail', component: redEnvelopDetail },
    // 我的信息-我的优惠-代金券说明
    { path: '/vouchersDetail', component: vouchersDetail },
    // 我的信息-我的优惠-历史红包
    { path: '/overdueRedEnvelope', component: overdueRedEnvelope },
    // 我的信息-我的优惠-兑换红包
    { path: '/exchangeRedEnvelop', component: exchangeRedEnvelop },
    // 我的信息-我的优惠-推荐有奖
    { path: '/recommend', component: recommend }
  ]
})
