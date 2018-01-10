<template lang="html">
  <div class="page">
    <header-Top head-title="推荐有奖" goBack="true"></header-Top>
    <section class="active-banner">
      <img src="../../images/activity.png" alt="" />
    </section>
    <section class="active-invite">
      <div class="active-invite-methods" @click="share">
        <img src="../../images/weixin.png" alt="" />
        <p>邀请微信好友</p>
      </div>
      <div class="active-invite-methods" @click="share">
        <img src="../../images/qq.png" alt="" />
        <p>邀请QQ好友</p>
      </div>
      <div class="active-invite-methods" @click="share">
        <img src="../../images/fenxiang.png" alt="" />
        <p>面对面邀请</p>
      </div>
    </section>
    <section class="active-number">
      <div class="invite-number">
        <p>累积收益</p>
        <p><span>0</span>元</p>
      </div>
      <div class="invite-number" style="border-left:0.025rem solid #ddd">
        <p>成功邀请</p>
        <p><span>0</span>人</p>
      </div>
    </section>
    <p class="income-detail">
      收益明细
    </p>
    <section class="active-tips">
      <img src="../../images/qianbao.png" alt="" />
      <p>还不赶紧去邀请好友</p>
    </section>
    <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import alertTip from '../../components/common/alertTip.vue'
export default {
  data () {
    return {
      showAlert: false,
      alertText: null
    }
  },
  created () {},
  cpmputed: {},
  components: {
    headerTop, alertTip
  },
  methods: {
    share () {
      this.showAlert = true
      this.alertText = '请更新App版本'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.page{
  padding-top: 1.96rem;
  p, span{
    font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.active-banner{
  img{
    @include wh(100%,10rem);
  }
}
.active-invite{
  display: flex;
  background-color: #fff;
  padding: 1rem 0;
  .active-invite-methods{
    flex: 1;
    text-align: center;
    img{
      @include wh(2.5rem,2.5rem);
    }
    p{
      @include sc(.5rem,#333);
    }
  }
}
.active-number{
  display: flex;
  margin-top: 1.5rem;
  @include sc(.5rem,#666);
  .invite-number{
    flex: 1;
    text-align: center;
    p{
      color: #666;
      span{
        @include sc(.8rem,#ff5633);
        font-weight: 700;
      }
    }
  }
}
.income-detail{
  margin-top: 1rem;
  @include sc(.5rem,#666);
  text-align: center;
}
.active-tips{
  margin-top: 1rem;
  text-align: center;
  img{
    @include wh (1.3rem,1.6rem);
  }
  p{
    @include sc (.5rem,#999);
  }
}
</style>
