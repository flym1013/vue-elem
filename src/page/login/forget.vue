<template lang="html">
  <div class="forget-page">
    <header-Top head-title="重置密码" goBack="true"></header-Top>
    <form class="rest-form">
      <section class="input-container">
        <input type="text" placeholder="账号" name="phone" maxlength="11">
      </section>
      <section class="input-container">
        <input type="text" name="oldPassword" placeholder="旧密码">
      </section>
      <section class="input-container">
        <input type="text" name="newPassword" placeholder="请输入新密码">
      </section>
      <section class="input-container">
        <input type="text" name="confirmPassword" placeholder="请确认密码">
      </section>
      <section class="input-container captcha_code_container">
        <input type="text" maxlength="4" placeholder="验证码">
        <div class="img_change_img">
            <img v-show="captchaCodeImg" :src="captchaCodeImg">
            <div class="change_img" @click="getCode">
                <p>看不清</p>
                <p>换一张</p>
            </div>
        </div>
      </section>
    </form>
    <div class="login_container">确认修改</div>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import { getCode } from '../../service/getData.js'
export default {
  data () {
    return {
      captchaCodeImg: null
    }
  },
  created () {
    this.getCode()
  },
  components: {
    headerTop
  },
  methods: {
    async getCode () {
      let res = await getCode()
      this.captchaCodeImg = res.data.code
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
