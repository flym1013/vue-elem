<template lang="html">
  <div class="login-contanier">
    <header-Top :head-title="loginWay? '登录':'密码登录'" goBack="true"></header-Top>
    <form class="login-form" >
      <section class="input-container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input-container">
        <input v-if="!showPassword" type="password" placeholder="密码"  v-model="passWord">
        <input v-else type="text" placeholder="密码"  v-model="passWord">
        <div class="button-switch" :class="{change_to_text: showPassword}">
          <div class="circel_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="input-container captcha_code_container">
        <input type="text" maxlength="4" placeholder="验证码" v-model="codeNumber">
        <div class="img_change_img">
            <img v-show="captchaCodeImg" :src="captchaCodeImg">
            <div class="change_img" @click="getCaptchaCode">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </div>
      </section>
    </form>
    <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="login_tips">
        注册过的用户可凭账号密码登录
    </p>
    <div class="login-btn">登录</div>
    <router-link to="/forgetPage" class="forget-password">重置密码？</router-link>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {
  getCode,
  login
 } from '../../service/getData.js'
export default {
  data () {
    return {
      loginWay: null,
      userAccount: null,
      passWord: null,
      codeNumber: null,
      captchaCodeImg: null,
      showPassword: false
    }
  },
  created () {
    this.getCaptchaCode()
  },
  components: {
    headerTop
  },
  methods: {
    changePassWordType () {
      this.showPassword = !this.showPassword
    },
    async getCaptchaCode () {
      let res = await getCode()
      this.captchaCodeImg = res.data.code
    },
    async login () {
      let res = await login()
      this.list = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.login-contanier{
  padding-top: 1.95rem;
  p, span, input{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.login-form{
  margin-top: .6rem;
  background: #fff;
  .input-container{
    display: flex;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    input{
      @include sc(.7rem, #666);
    }
    button{
      @include sc(.65rem, #fff);
      font-family: Helvetica Neue,Tahoma,Arial;
      padding: .28rem .4rem;
      border: 1px;
      border-radius: 0.15rem;
    }
  }
  .captcha_code_container{
    height: 2.2rem;
    .img_change_img{
      display: flex;
      align-items: center;
      img{
        @include wh(3.5rem, 1.5rem);
        margin-right: .2rem;
      }
      .change_img{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 2rem;
        justify-content: center;
        p{
          @include sc(.55rem,#666)
        }
        p:nth-of-type(2){
          color: #3b95e9;
          margin-top: .2rem;
        }
      }
    }
  }
}
.button-switch{
  background-color: #ccc;
  display: flex;
  justify-content: center;
  @include wh(2rem, .7rem);
  padding: 0 .2rem;
  border: 1px;
  border-radius: .5rem;
  position: relative;
  .circel_button{
    transition: all .3s;
    position: absolute;
    top: -0.2rem;
    z-index: 1;
    left: -0.3rem;
    @include wh(1.2rem,1.2rem);
    box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
    background-color: #f1f1f1;
    border-radius: 50%;
  }
  .trans_to_right{
      transform: translateX(1.3rem);
  }
  span{
      @include sc(.45rem, #fff);
      transform: translateY(.05rem);
      line-height: .6rem;
  }
  span:nth-of-type(2){
      transform: translateY(-.08rem);
  }
}
.change_to_text{
  background-color: #4cd964;
}
.login_tips{
  @include sc(.5rem, red);
  padding: .4rem .6rem;
  display: flex;
  line-height: .5rem;
  a{
    color: #3b95e9;
  }
}
.login-btn{
  margin: 0.2rem .5rem 1rem;
  @include sc(.7rem, #fff);
  background-color: #4cd964;
  padding: .5rem 0;
  border: 1px;
  border-radius: .15rem;
  text-align: center;
}
.forget-password{
  float: right;
  @include sc(.6rem,#3b95e9);
  margin-right: .3rem;
}
</style>
