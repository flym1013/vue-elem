<template lang="html">
  <div class="discount-page">
    <header-Top head-title="我的优惠" goBack="true"></header-Top>
    <section>
      <section class="discount-category">
        <span :class="{choosed: categoryType === 1}" @click="categoryType = 1">红包</span>
        <span :class="{choosed: categoryType === 2}" @click="categoryType = 2">商家代金券</span>
      </section>
      <section v-if="categoryType === 1">
        <section class="category-left">
          <header class="left-header">
            <section class="redpack-num">
              有<span>{{redEnvelopList.length}}</span>个红包即将到期
            </section>
            <section class="redpack-description">
              <img src="../../images/description.png" height="24" width="24" alt="" />
              <router-link to="/redEnvelopDetail" class="redpack-detail">红包说明</router-link>
            </section>
          </header>
          <ul class="redpack-list-ul">
            <li class="redpack-list-li" v-for="item in redEnvelopList">
              <section class="list-item">
                <div class="list-item-left">
                  <span>¥</span>
                  <span>{{String(item.amount).split('.')[0]}}</span>
                  <span>.</span>
                  <span>{{String(item.amount).split('.')[1]||0}}</span>
                  <p>{{item.description_map.sum_condition}}</p>
                </div>
                <div class="list-item-right">
                  <h4>{{item.name}}</h4>
                  <p>{{item.description_map.validity_periods}}</p>
                  <p>{{item.description_map.phone}}</p>
                </div>
                <div class="list-item-time">
                  {{item.description_map.validity_delta}}
                </div>
              </section>
              <div class="list-item-footer" v-if="item.limit_map">
                <p>{{item.limit_map.restaurant_flavor_ids}}</p>
              </div>
            </li>
          </ul>
        </section>
        <router-link to="/overdueRedEnvelope" class="redpack-history">
          <span class="redpack-view">查看历史红包</span>
          <svg class="history-right">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </router-link>
        <footer class="category-left-footer">
          <router-link to="/exchangeRedEnvelop" class="left-footer" style="border-right: 1px solid #f5f5f5">兑换红包</router-link>
          <router-link to="/recommend" class="left-footer">推荐有奖</router-link>
        </footer>
      </section>
      <section v-if="categoryType === 2" class="vouchers-cantainer">
        <section class="redpack-description cash-vouchers">
          <img src="../../images/description.png" height="24" width="24">
          <router-link to="/vouchersDetail" class="redpack-detail">商家代金券说明</router-link>
        </section>
        <section class="unable-use">
          <img src="../../images/voucher.png" height="170" width="300" alt="" />
          <p>无法使用代金券</p>
          <p>客户端版本过低</p>
          <router-link :to="{ name: '', params: {} }" class="down-app">更新客户端</router-link>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import { getRedEnvelope } from '../../service/getData.js'
export default {
  data () {
    return {
      categoryType: 1,
      redEnvelopList: []
    }
  },
  created () {
    this.getRedEnvelope()
  },
  components: {
    headerTop
  },
  methods: {
    async getRedEnvelope () {
      let res = await getRedEnvelope({
        user_id: 1,
        limit: 20,
        offset: 0
      })
      this.redEnvelopList = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.discount-page{
  padding-top: 1.95rem;
  p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.discount-category{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  background-color: #fff;
  span{
    text-align: center;
    @include sc(.65rem,#333);
    padding-bottom: .2rem;
    border-bottom: .1rem solid #fff;
  }
  .choosed{
    color: $blue;
    border-bottom-color: $blue;
  }
}
.category-left{
  padding: 0 .7rem;
  .left-header{
      @include fj;
      font-size: .5rem;
      line-height: 2rem;
      .redpack-num{
        color: #666;
        span{
          color: #ff5340;
        }
      }
      .redpack-description{
        display: flex;
        align-items: center;
        img{
          @include wh(.6rem,.6rem);
          margin-right: .2rem;
        }
        .redpack-detail{
          color: $blue;
        }
      }
  }
}
.redpack-list-ul{
  .redpack-list-li{
    background: #fff url(../../images/hongbao.png) repeat-x;
    background-size: .5rem .3rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    .list-item{
      @include fj;
      padding: 1rem .5rem .8rem;
      .list-item-left{
        font-size: 0;
        border-right: 0.025rem dotted #ccc;
        flex: 1;
        padding-right: .2rem;
        span:nth-of-type(1){
          @include sc(.75rem,#ff5340);
          font-weight: bold;
        }
        span:nth-of-type(2){
          @include sc(1.5rem,#ff5340);
        }
        span:nth-of-type(3), span:nth-of-type(4){
          @include sc(.8rem,#ff5340);
          font-weight: bold;
        }
        p{
          @include sc(.4rem,#999);
        }
      }
      .list-item-right{
        flex: 2;
        margin-left: 1.5rem;
        h4{
          @include sc(.7rem,#666);
          margin-left: -0.7rem;
        }
        p{
          list-style-type: disc;
          margin-left: -0.7rem;
          @include sc(.4rem, #999);
        }
      }
      .list-item-time{
        @include sc(.75rem, #ff5340);
      }
    }
    .list-item-footer{
      background-color: #f9f9f9;
      padding: .4rem;
      border-bottom-left-radius: .25rem;
      border-bottom-right-radius: .25rem;
      p{
        @include sc(.4rem,#999);
        list-style-type: disc;
        margin-left: .4rem;
      }
    }
  }
}
.redpack-history{
  padding: .5rem 0 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .redpack-view{
    @include sc(.5rem,#999);
    margin-right: .2rem;
  }
  .history-right{
    @include wh(.4rem,.4rem);
    fill: #aaa;
  }
}
.category-left-footer{
  display: flex;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  position: fixed;
  .left-footer{
    text-align: center;
    flex: 1;
    line-height: 2rem;
    @include sc(.7rem,#555);
  }
}
.vouchers-cantainer{
  .cash-vouchers{
    font-size: .5rem;
    justify-content: flex-end;
    line-height: 2rem;
    margin-right: .5rem;
    display: -webkit-box;
    img{
      @include wh(.6rem,.6rem);
      margin-right: .2rem;
    }
    .redpack-detail{
      color: $blue;
    }
  }
}
.unable-use{
  text-align: center;
  margin-top: 4rem;
  img{
    @include wh(6rem,3.4rem);
  }
  p:nth-of-type(1){
    @include sc(.7rem,#666);
    margin-top: .4rem;
  }
  p:nth-of-type(2){
    @include sc(.5rem,#999);
    margin: .3rem 0;
  }
  .down-app{
    background-color: #56d176;
    @include sc(.65rem,#fff);
    padding: .3rem;
    border-radius: .15rem;
  }
}
</style>
