<template lang="html">
  <div class="page">
    <header-Top head-title="商家代金券说明" goBack="true"></header-Top>
    <div class="question">
      <h3 id="q1-">Q1: 什么是商家代金券？</h3>
            <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
            <h3 id="q2-">Q2: 怎么获得商家代金券？</h3>
            <ul>
                <li>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li>
                <li>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
            </ul>
            <h3 id="q3-">Q3: 商家代金券使用条件</h3>
            <ul>
                <li>商家代金券仅限在指定商家使用</li>
                <li>商家代金券仅限在线支付使用</li>
                <li>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
            </ul>
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
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 1.95rem;
        z-index: 203;
        background-color: #fff;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
.question{
  @include sc(.6rem,#666);
  padding: 0 .5rem .5rem;
  h3{
    padding-bottom: .1rem;
    padding-top: .4rem;
    text-align: left;
  }
  p{
    @include sc(.6rem,#666);
    line-height: 1rem;
    text-align: left;
  }
  li{
    text-align: left;
  }
}
</style>
