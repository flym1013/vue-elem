<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view /> -->
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <transition name="fade">
        <p class="show_delete_tip" v-if="$root.showDeleteTip">再次点击退出 app</p>
        <!-- 需要使用$root.showDeleteTip来判断，要挂载到vue实例上，在mian.js设置它的值未false。而只是单纯的showDeleteTip，只能在内部使用，无法在外部获取到 -->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './style/common.scss';
@import 'src/style/mixin.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.show_delete_tip{
    position: fixed;
    top: 50%;
    left: 15%;
    width: 70%;
    transform: translateY(-50%);
    background-color: rgba(0,0,0,.8);
    z-index: 18;
    @include sc(.65rem, #fff);
    text-align: center;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.25rem;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
