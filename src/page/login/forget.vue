<template lang="html">
  <div class="forget-page">
    <header-Top head-title="重置密码" goBack="true"></header-Top>
    <form class="rest-form">
      <section class="input-container">
        <input type="text" placeholder="账号" name="phone" maxlength="11" v-model="phoneNumber">
      </section>
      <section class="input-container">
        <input type="password" name="oldPassword" placeholder="旧密码" v-model="oldPassWord">
      </section>
      <section class="input-container">
        <input type="password" name="newPassword" placeholder="请输入新密码" v-model="newPassWord">
      </section>
      <section class="input-container">
        <input type="password" name="confirmPassword" placeholder="请确认密码" v-model="confirmPassWord">
      </section>
      <section class="input-container captcha_code_container">
        <input type="text" maxlength="4" placeholder="验证码" v-model="mobileCode">
        <div class="img_change_img">
            <img v-show="captchaCodeImg" :src="captchaCodeImg">
            <div class="change_img" @click="getCode">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </div>
      </section>
    </form>
    <div class="login_container" @click="sureRevise">确认修改</div>
    <alert-Tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-Tip>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import alertTip from '../../components/common/alertTip.vue'
import { getCode, changePassword } from '../../service/getData.js'
export default {
  data () {
    return {
      captchaCodeImg: null,
      phoneNumber: null,
      oldPassWord: null,
      newPassWord: null,
      confirmPassWord: null,
      mobileCode: null,
      showAlert: false
    }
  },
  created () {
    this.getCode()
  },
  components: {
    headerTop, alertTip
  },
  methods: {
    async getCode () {
      let res = await getCode()
      this.captchaCodeImg = res.data.code
    },
    async sureRevise () {
      if (!this.phoneNumber) {
        this.showAlert = true
        this.alertText = '请输入正确的账号'
      } else if (!this.oldPassWord) {
        this.showAlert = true
        this.alertText = '请输入旧密码'
      } else if (!this.newPassWord) {
        this.showAlert = true
        this.alertText = '请输入新密码'
      } else if (!this.confirmPassWord) {
        this.showAlert = true
        this.alertText = '请输确认密码'
      } else if (this.newPassWord !== this.confirmPassWord) {
        this.showAlert = true
        this.alertText = '两次输入的密码不一致'
      } else if (!this.mobileCode) {
        this.showAlert = true
        this.alertText = '请输验证码'
      }
      let res = await changePassword({
        username: this.phoneNumber,
        oldpassWord: this.oldPassWord,
        newpassword: this.newPassWord,
        confirmpassword: this.confirmPassWord,
        captcha_code: this.mobileCode
      })
      if (res.data.message) {
        this.showAlert = true
        this.alertText = res.message
        this.getCode()
      } else {
        this.showAlert = true
        this.alertText = '密码修改成功'
        this.$router.go(-1)
      }
    },
    closeTip () {
      this.showAlert = false
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
.rest-form{
  margin-top: 2.6rem;
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
.login_container{
  margin: 1rem .5rem;
  @include sc(.7rem, #fff);
  background-color: #4cd964;
  padding: .5rem 0;
  border: 1px;
  border-radius: .15rem;
  text-align: center;
}
</style>
