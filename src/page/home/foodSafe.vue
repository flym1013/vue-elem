<template lang="html">
  <div class="page">
    <header-Top head-title="食品监督安全公示" goBack="true"></header-Top>
    <section id="scroll_section" class="scroll_container">
      <section>
        <section class="shop_status_container">
          <header>食品监督安全公示</header>
          <section class="shop_statu_detail">
            <div class="">
              <svg class="shop_status" v-if="shopDetail.status == 1">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-well"></use>
              </svg>
              <svg class="res-well" v-else>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-bad"></use>
              </svg>
            </div>
            <div class="check_date">
                <p>
                    <span>监督检查结果：</span>
                    <span class="shop_status_well" v-if="shopDetail.status == 1">良好</span>
                    <span class="shop_status_bad" v-else>差</span>
                </p>
                <p>
                    <span>检查日期：</span>
                    <span>{{shopDetail.identification.identificate_date && shopDetail.identification.identificate_date.split('T')[0]}}</span>
                </p>
            </div>
          </section>
        </section>
        <section class="shop_status_container">
              <header>
                  <span>工商登记信息</span>
              </header>
              <ul>
                  <li>
                      <p>企业名称</p>
                      <p>{{shopDetail.identification.company_name}}</p>
                  </li>
                  <li>
                      <p>工商执照注册号</p>
                      <p>{{shopDetail.identification.identificate_agency}}</p>
                  </li>
                  <li>
                      <p>注册资本</p>
                      <p>{{shopDetail.identification.registered_number}}</p>
                  </li>
                  <li>
                      <p>注册地址</p>
                      <p>{{shopDetail.identification.registered_address}}</p>
                  </li>
                  <li>
                      <p>属地监管所</p>
                      <p>{{shopDetail.identification.registered_principal}}</p>
                  </li>
                  <li>
                      <p>法定代表人</p>
                      <p>{{shopDetail.identification.legal_person}}</p>
                  </li>
                  <li>
                      <p>经营范围</p>
                      <p>{{shopDetail.identification.operation_period}}</p>
                  </li>
              </ul>
          </section>
          <section class="shop_status_container">
            <header>餐饮许可证</header>
            <ul>
                <li>
                    <p>营业范围</p>
                    <p>{{shopDetail.identification.operation_period}}</p>
                </li>
                <li>
                    <p>许可证有效期</p>
                    <p>{{shopDetail.identification.licenses_date}}</p>
                </li>
                <li>
                    <p>许可证号</p>
                    <p>{{shopDetail.identification.licenses_number}}</p>
                </li>
                <li>
                    <p>发证时间</p>
                    <p>{{shopDetail.identification.licenses_scope}}</p>
                </li>
                <li>
                    <p>发证机关</p>
                    <p>{{shopDetail.identification.registered_principal}}</p>
                </li>
            </ul>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  created () {},
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
  computed: {
    ...mapState([
      'shopDetail'
    ])
  },
  components: {
    headerTop
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.page{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
  padding-top: 1.95rem;
  background-color: #ebebeb;
}
.scroll_container{
    @include wh(100%, 100%);
}
.shop_status_container{
  background-color: #fff;
  margin-bottom: .4rem;
  text-align: left;
  header{
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: 0.025rem solid #f1f1f1;
    @include sc(.75rem, #333);
  }
  .shop_statu_detail{
    display: flex;
    padding: .6rem;
    svg{
      @include wh(2rem, 2rem);
      margin-right: .6rem;
    }
    .check_date{
      span{
        @include sc(.55rem, #666);
      }
      .shop_status_well{
        color: rgb(126, 211, 33);
      }
      .shop_status_bad{
        color: red;
      }
    }
  }
}
ul{
    margin-left: 1rem;
    padding: .4rem 0;
    li{
        margin-bottom: .4rem;
        p{
            line-height: 1rem;
        }
        p:nth-of-type(1){
            @include sc(.55rem, #333);
        }
        p:nth-of-type(2){
            @include sc(.5rem, #999);
        }
    }
}
</style>
