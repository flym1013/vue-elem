<template lang="html">
  <div class="paddingTop search_page order_page">
    <header-Top head-title="订单列表" goBack="true"></header-Top>
    <div class="" id="scroll_section" class="scroll_container">
      <ul class="order_list_ul">
        <li class="order_list_li" v-for="item in orderList" :key="item.id">
          <img :src="imgBaseUrl + item.restaurant_image_url" class="restaurant_image">
          <section class="order_item_right">
            <section @click="showDetail(item)">
              <header class="order_item_right_header">
                <section class="order_header">
                  <h4>
                    <span class="ellipsis">{{item.restaurant_name}} </span>
                    <svg fill="#333" class="arrow_right">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                  </h4>
                  <p class="order_time">{{item.formatted_created_at}}</p>
                </section>
                <p class="order_status">
                  {{item.status_bar.title}}
                </p>
              </header>
              <section class="order_basket">
                <p class="order_name ellipsis">{{item.basket.group[0][0].name}}{{item.basket.group[0].length > 1 ? ' 等' + item.basket.group[0].length + '件商品' : ''}}</p>
                <p class="order_amount">¥{{item.total_amount.toFixed(2)}}</p>
              </section>
            </section>
            <div class="order_again">
              <compute-time v-if="item.status_bar.title == '等待支付'" :time="item.time_pass"></compute-time>
              <router-link :to="{path: '/shopDetail', query: {geohash, id: item.restaurant_id}}" tag="span" class="buy_again" v-else>再来一单</router-link>
            </div>
          </section>
        </li>
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from '../../components/footer/footGuide'
import headerTop from '../../components/header/header.vue'
import computeTime from '../../components/common/computeTime.vue'
import {getOrderList} from '../../service/getData.js'
import {mapState, mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      offset: 0,
      orderList: [],
      imgBaseUrl: 'http://cangdu.org:8001/img/'
    }
  },
  mounted () {
    this.$nextTick(() => {
      new BScroll('#scroll_section', {
        deceleration: 0.001,
        bounce: true,
        swipeTime: 1800,
        click: true
      })
    })
  },
  created () {
    this.getOrderList()
  },
  components: {
    footGuide, headerTop, computeTime
  },
  computed: {
    ...mapState([
      'userInfo', 'geohash'
    ])
  },
  methods: {
    ...mapMutations([
      'SAVE_ORDER'
    ]),
    // 显示详情页
    showDetail (item) {
      this.SAVE_ORDER(item)
      this.$router.push('/orderDetail')
    },
    // 获取订单列表
    async getOrderList () {
      let res = await getOrderList({
        user_id: this.userInfo.user_id,
        offset: this.offset
      })
      this.orderList = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.order_page{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f1f1f1;
    margin-bottom: 1.95rem;
    p, span, h4{
        font-family: Helvetica Neue,Tahoma,Arial;
    }
  }
  .scroll_container{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 1.95rem;
  }
  .order_list_ul{
    // padding-top: 1.95rem;
    .order_list_li{
      background-color: #fff;
      display: flex;
      margin-bottom: 0.5rem;
      padding: .6rem .6rem 0;
      .restaurant_image{
        @include wh(2rem, 2rem);
        margin-right: 0.4rem;
      }
      .order_item_right{
        text-align: left;
        flex: 5;
        .order_item_right_header{
          border-bottom: 0.025rem solid #f5f5f5;
          padding-bottom: .3rem;
          @include fj;
          .order_header{
            h4{
              display: flex;
              align-items: center;
              justify-content: flex-start;
              @include sc(.75rem, #333);
              line-height: 1rem;
              width: 9rem;
              .arrow_right{
                @include wh(.4rem, .4rem);
                fill: #ccc;
                margin-right: .2rem;
              }
            }
            .order_time{
              @include sc(.55rem, #999);
              line-height: .8rem;
            }
          }
          .order_status{
            @include sc(.6rem, #333);
          }
        }
        .order_basket{
            @include fj;
            border-bottom: 0.025rem solid #f5f5f5;
            line-height: 2rem;
            .order_name{
              @include sc(.6rem, #666);
              width: 10rem;
            }
            .order_amount{
              @include sc(.6rem, #f60);
              font-weight: bold;
            }
        }
        .order_again{
          text-align: right;
          line-height: 1.6rem;
          .buy_again{
            @include sc(.55rem, #3190e8);
            border: 0.025rem solid #3190e8;
            padding: .1rem .2rem;
            border-radius: .15rem;
          }
        }
      }
    }
  }
</style>
