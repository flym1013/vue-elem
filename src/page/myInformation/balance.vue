<template lang="html">
  <div class="page">
    <header-Top head-title="我的余额" goBack="true"></header-Top>
    <section class="content-cantainer">
      <section class="content">
        <header class="content-header">
          <span class="header-left">当前余额</span>
          <section class="header-right">
            <img src="../../images/description.png" height="24" width="24">
            <router-link to="/balanceDetail" class="header-right-title">余额说明</router-link>
          </section>
        </header>
        <p class="content-num">
            <span>0.00</span>
            <span>元</span>
        </p>
        <div class="withdrawal-btn">
          提现
        </div>
      </section>
    </section>
    <p class="transition-detail">
      交易明细
    </p>
    <div class="no-log">
        <img src="../../images/no-log.png">
        <p>暂无明细记录</p>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
export default {
  data () {
    return {}
  },
  components: {
    headerTop
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
.content-cantainer{
  padding: .3rem;
  background-color: $blue;
  .content{
    padding: .4rem;
    background-color: #fff;
    border-radius: .15rem;
    .content-header{
      @include fj;
      font-size: .55rem;
      .header-right{
        display: flex;
        align-items: center;
        img{
          @include wh(.6rem,.6rem);
          margin-right: .2rem;
        }
        .header-right-title{
          color: $blue;
        }
      }
      .header-left{
        color: #666;
      }
    }
    .content-num{
      span:nth-of-type(1){
        @include sc(1.8rem,#333);
      }
      span:nth-of-type(2){
        @include sc(.7rem,#333);
      }
    }
    .withdrawal-btn{
      @include wh(100%,2rem);
      @include sc(.8rem,#fff);
      border-radius: .15rem;
      line-height: 2rem;
      margin-top: 1rem;
      text-align: center;
      background-color: #ccc;
    }
  }
}
.transition-detail{
  @include sc(.5rem,#999);
  line-height: 2rem;
  margin-left: .5rem;
  display: flex;
}
.no-log{
  text-align: center;
  margin-top: 1rem;
  img{
    @include wh(8rem,5rem);
  }
  p{
    @include sc(.7rem,#666);
    margin-top: .5rem;
  }
}
</style>
