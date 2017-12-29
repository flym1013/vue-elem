// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './plugins/swiper.min.js'
import './style/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './config/rem'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

let vm = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

Vue.use({
  vm
})

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app') // 不需要在main.js写父路由了
