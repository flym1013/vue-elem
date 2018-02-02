// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './plugins/swiper.min.js'
import './style/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import mui from 'vue-mui'
import './config/rem'
import store from './store'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
// Vue.use(mui)
Vue.use(CxltToastr)

let vm = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
  data () {
    return {
      showDeleteTip: false
    }
  }
})

Vue.use({
  vm
})

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app') // 不需要在main.js写父路由了

// console.log(vm)

/* 监听cordova加载 */
document.addEventListener('deviceready', onDeviceReady, false)
function onDeviceReady () {
  document.addEventListener('backbutton', eventBackButton, false) // 返回键
  // alert(1)
}
// 返回键
function eventBackButton () {
  // alert(8)
  if (vm.$route.path.split('/')[1] === 'home' || vm.$route.path.split('/')[1] === 'order' || vm.$route.path.split('/')[1] === 'search' || vm.$route.path.split('/')[1] === 'myInformation') {
    document.removeEventListener('backbutton', eventBackButton, false) // 注销返回键
    // window.$toast.show('再次点击退出APP', 2000)
    alertExit()
    // vm.$toast.success({
    //   title: '是否退出app',
    //   message: '再次点击退出APP',
    //   progressBar: true,
    //   position: 'Bottom Center',
    //   timeOut: 1000
    // })
    // 注册退出事件
    document.addEventListener('backbutton', exitApp, false) // 返回键
    // 1.5秒后重新注册
    let intervalID = window.setTimeout(() => {
      document.removeEventListener('backbutton', exitApp, false) // 注销退出事件
      document.addEventListener('backbutton', eventBackButton, false) // 返回键
    }, 2000)
  } else {
    history.go(-1)
  }
}
// 退出app
function exitApp () {
  navigator.app.exitApp()
}
// 弹出信息框提示
function alertExit () {
  vm.$root.showDeleteTip = true
  clearTimeout(vm.timer)
  vm.timer = setTimeout(() => {
    clearTimeout(vm.timer)
    vm.$root.showDeleteTip = false
  }, 1500)
}
