<template lang="html">
  <div class="page">
    <header-Top head-title="兑换红包" goBack="true"></header-Top>
    <form class="" class="exchange-container">
      <input type="text" placeholder="请输入兑换码" class="exchange-code" v-model="exchangeCode">
      <section class="validation-container">
        <input type="text" placeholder="验证码" v-model="codeNumber" maxlength="4">
        <div class="img-container">
          <img :src="imgCode" v-show="imgCode" >
          <div class="change-img" @click="getCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <div class="determine" :class="{active: status}" @click="exchangeRedEnvelope">兑换</div>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {
  exchangeRedEnvelope,
  getCode
} from '../../service/getData.js'
import alertTip from '../../components/common/alertTip.vue'
export default {
  data () {
    return {
      redpackList: [],
      imgCode: null,
      showAlert: false,
      alertText: null,
      exchangeCode: '',
      codeNumber: ''
    }
  },
  created () {
    this.getCode()
  },
  computed: {
    status: function () {
      let status = (/^\d+$/gi.test(this.exchangeCode)) && (/^\w{4}$/gi.test(this.codeNumber))
      return status
    }
  },
  components: {
    headerTop, alertTip
  },
  methods: {
    async exchangeRedEnvelope () {
      if (this.status) {
        let res = await exchangeRedEnvelope({
          user_id: 1,
          exchange_code: this.exchangeCode,
          captcha_code: this.codeNumber
        })
        if (res.data.message) {
          this.getCode()
          this.showAlert = true
          this.alertText = res.data.message
        }
      }
    },
    async getCode () {
      let res = await getCode()
      this.imgCode = res.data.code
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.page{
  padding-top: 1.95rem;
  p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.exchange-container{
  margin-top: .7rem;
  padding: 0 .5rem;
  .exchange-code{
    width: 100%;
    @include sc(.7rem,#666);
    padding: .6rem .4rem;
    border-radius: .15rem;
  }
  .validation-container{
    height: 2.2rem;
    display: flex;
    margin-top: .7rem;
    input{
      @include sc(.7rem,#666);
      flex: 3;
      padding: .4rem;
      border-radius: .15rem;
    }
    .img-container{
      flex: 2;
      display: flex;
      align-items: center;
      margin-left: .3rem;
      background-color: #fff;
      padding-left: .2rem;
      border-radius: .15rem;
      img{
        @include wh(3.5rem,1.5rem);
        margin-right: .2rem;
      }
      .change-img{
        display: flex;
        width: 2rem;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        p{
          @include sc(.55rem,#666);
        }
        p:nth-of-type(2){
          color: #3b95e9;
          margin-top: .2rem;
        }
      }
    }
  }
}
.determine{
  background-color: #ccc;
  @include sc(.7rem,#fff);
  text-align: center;
  margin: 0 .7rem;
  line-height: 1.8rem;
  border-top: .2rem;
  margin-top: .7rem;
}
.active{
  background-color: #4cd964;
}
</style>
