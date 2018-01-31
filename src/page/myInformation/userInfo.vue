<template lang="html">
  <div class="page">
    <header-Top head-title="账户信息" goBack="true"></header-Top>
    <section class="accout_info">
      <section class="headportrait">
        <input type="file" name="name" value="" class="picture_upload" @change="uploadAvatar">
        <h2>头像</h2>
        <div class="info_div_right">
          <img  v-if="userInfo" :src="imgBaseUrl + userInfo.avatar" class="picture_div_infoL">
          <span class="picture_div_infoL" v-else>
            <svg>
            </svg>
          </span>
          <span class="picture_div_infoR">
            <svg fill="#d8d8d8">
                <line x1="4" x2="13" y1="18" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
                <line x1="4" x2="13" y1="8" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
            </svg>
          </span>
        </div>
      </section>
      <router-link :to="'/myInformation/editUsername'" class="info_router">
        <section class="headportrait headportraitwo">
          <h2>用户名</h2>
          <div class="info_div_right">
            <p>{{username}}</p>
            <span class="picture_div_infoR">
              <svg fill="#d8d8d8">
                  <line x1="4" x2="13" y1="18" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
                  <line x1="4" x2="13" y1="8" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
              </svg>
            </span>
          </div>
        </section>
      </router-link>
      <router-link :to="'/myInformation/editAddress'" class="info_router">
        <section class="headportrait headportraitwo headportraithree">
          <h2>收货地址</h2>
          <div class="info_div_right">
            <span class="picture_div_infoR">
              <svg fill="#d8d8d8">
                  <line x1="4" x2="13" y1="18" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
                  <line x1="4" x2="13" y1="8" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
              </svg>
            </span>
          </div>
        </section>
      </router-link>
      <section class="bind_phone">
        账号绑定
      </section>
      <section class="info_router" @click="changePhone">
        <section class="headportrait headportraitwo headportraithree">
          <h2><img src="../../images/bindphone.png" style="display:inline-block;margin-right:.4rem;" alt="">手机</h2>
          <div class="info_div_right">
            <span class="picture_div_infoR">
              <svg fill="#d8d8d8">
                  <line x1="4" x2="13" y1="18" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
                  <line x1="4" x2="13" y1="8" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
              </svg>
            </span>
          </div>
        </section>
      </section>
      <section class="bind_phone">
        安全设置
      </section>
      <router-link :to="'/forgetPage'" class="info_router">
        <section class="headportrait headportraitwo headportraithree">
          <h2>登录密码</h2>
          <div class="info_div_right">
            <p>修改</p>
            <span class="picture_div_infoR">
              <svg fill="#d8d8d8">
                  <line x1="4" x2="13" y1="18" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
                  <line x1="4" x2="13" y1="8" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
              </svg>
            </span>
          </div>
        </section>
      </router-link>
      <section class="exitlogin" @click="exitlogin">退出登录</section>
      <section class="coverpart" v-if="show">
        <section class="cover_background"></section>
        <section class="cover_content">
          <div class="sa_icon">
            <span class="sa_body"></span>
            <span class="sa_dot"></span>
          </div>
          <h2>是否退出登录</h2>
          <div class="sa_botton">
            <button class="waiting" @click="waitingThing">再等等</button>
            <div style="display:inline-block;">
                <button class="quitlogin"  @click="outLogin">退出登录</button>
            </div>
          </div>
        </section>
      </section>
      <alert-Tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-Tip>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import alertTip from '../../components/common/alertTip.vue'
import {mapMutations, mapState} from 'vuex'
import fetch from '../../config/fetch.js'
import { siginOut } from '../../service/getData.js'
import { removeStore } from '../../config/utils.js'
export default {
  data () {
    return {
      imgBaseUrl: 'http://cangdu.org:8001/img/', // 图片域名地址
      username: '',    // 用户名
      resetname: '',  // 重置用户名
      infotel: '',     // 用户手机
      avatar: '',     // 用户头像
      showAlert: false,   // 弹框显示
      show: false
    }
  },
  created () {
    this.username = this.userInfo.username ? this.userInfo.username : ''
  },
  components: {
    headerTop, alertTip
  },
  computed: {
    ...mapState([
      'userInfo', 'imgPath'
    ])
  },
  methods: {
    ...mapMutations([
      'OUT_LOGIN', 'SAVE_AVANDER'
    ]),
    changePhone () {
      this.showAlert = true
      this.alertText = '请在手机APP中设置'
    },
    exitlogin () {
      this.show = true
    },
    waitingThing () {
      this.show = false
    },
    async outLogin () {
      this.OUT_LOGIN()
      this.show = false
      this.$router.go(-1)
      removeStore('this.userInfo.user_id')
      await siginOut()
    },
    async uploadAvatar () {
      // 上传头像
      if (this.userInfo) {
        let input = document.querySelector('.picture_upload')
        let data = new FormData()
        data.append('file', input.files[0])
        try {
          let response = await fetch('0' + this.userInfo.user_id + '/avatar', {
            method: 'POST',
            credentials: 'include',
            body: data
          })
          let res = await response.json()
          if (res.status === 1) {
            this.userInfo.avatar = res.image_path
          }
        } catch (error) {
          this.showAlert = true
          this.alertText = '上传失败'
          throw new Error(error)
        }
      }
    }
  },
  watch: {
    userInfo: function (value) {
      if (value && value.user_id) {
        this.username = value.username ? value.username : ''
        this.infotel = value.mobile
        this.avatar = value.avatar
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.page{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 202;
  padding-top: 1.95rem;
  p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.accout_info{
  @include wh(100%, 3.1rem);
  .picture_upload{
    display: block;
    position: absolute;
    top: 2.35rem;
    opacity: 0;
    left: 0;
    @include wh(100%, 3.1rem);
  }
  .headportrait{
    margin-top: .4rem;
    padding: .5rem .4rem;
    @include fj(space-between);
    align-items:center;
    border-top:1px solid #ddd;
    background:#fff;
    h2{
      @include sc(.6rem,#333);
      font-weight:500;
      display:flex;
      align-items:center;
    }
    .info_div_right{
      span{
        display: inline-block;
        svg{
          @include wh(100%,100%);
        }
      }
      .picture_div_infoL{
        @include wh(2rem,2rem);
        @include borderRadius(50%);
        vertical-align:middle;
      }
      .picture_div_infoR{
        @include wh(.66667rem,1.4rem);
        position:relative;
        top:0.44rem;
      }
    }
  }
  .headportraitwo{
    margin-top: 0;
    padding:.3rem .4rem;
    .info_div_right{
      @include fj(left)
      p{
        text-align: left;
        line-height: 1.39rem;
        @include sc(.7rem,#999);
        margin-right:.2rem;
        font-weight:100;
        font-family:Arial;
      }
      .picture_div_infoR{
        top: 0.2rem;
      }
    }
  }
  .headportraithree{
      border-bottom:1px solid #ddd;
  }
  .bind_phone{
    padding: .4rem;
    @include sc(.5rem,#666);
    text-align: left;
  }
  .exitlogin{
    width: 96%;
    margin: 1.3rem auto 0;
    line-height: 1.5rem;
    @include borderRadius(5px);
    text-align: center;
    background:#d8584a;
    @include sc(.6rem,#fff);
  }
  .exitlogin:active{
    opacity: 7;
    background: #c1c1c1;
  }
}
.coverpart{
  @include wh(100%,100%);
  @include allcover;
  .cover_background{
    @include wh(100%,100%);
    @include allcover;
    background:#000;
    z-index:100;
    opacity:.2;
  }
  .cover_content{
    width: 94%;
    background: #fff;
    padding:17px;
    position:absolute;
    top:20%;
    left:3%;
    z-index:1000;
    @include borderRadius(5px);
    .sa_icon{
      @include wh(90px,90px);
      border:4px solid #f8bb86;
      @include borderRadius(50%);
      margin:20px auto;
      position:relative;
      .sa_body{
        @include wh(5px,47px);
        @include borderRadius(2px);
        background:#f8bb86;
        @include cl;
        top:10px;
      }
      .sa_dot{
        @include wh(7px,7px);
        @include borderRadius(50%);
        background:#f8bb86;
        @include cl;
        bottom:10px;
      }
    }
    h2{
      width:100%;
      text-align:center;
      @include sc(30px,#575757);
      font-weight:500;
      margin:25px 0;
    }
    .sa_botton{
      width:100%;
      text-align:center;
      button{
        display:inline-block;
        padding:.4rem 1rem;
        @include borderRadius(5px);
        @include sc(.6rem,$fc);
        letter-spacing:1px;
        margin-top:26px;
      }
      .waiting{
        background:#C1C1C1;
        margin-right:.4rem;
      }
      .quitlogin{
        background:rgb(221, 107, 85);
      }
    }
  }
}
</style>
