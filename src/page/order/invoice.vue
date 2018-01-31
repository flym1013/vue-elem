<template lang="html">
  <div class="page">
    <header-Top head-title="选择发票抬头" goBack="true"></header-Top>
    <section class="choose_invoice">
      <span v-if="invoice">需要开发票</span>
      <span v-else>不需要开发票</span>
      <svg @click="chooseInvoice" :class="{choosed: invoice}">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select"></use>
      </svg>
    </section>
    <div class="determine" @click="confrimInvoice">确定</div>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      invoice: true,
      invoiceTxt: '需要开发票'
    }
  },
  created () {},
  computed: {},
  components: {
    headerTop
  },
  methods: {
    ...mapMutations([
      'CONFIRM_INVOICE'
    ]),
    chooseInvoice () {
      this.invoice = !this.invoice
      if (this.invoice) {
        this.invoiceTxt = '需要开发票'
      } else {
        this.invoiceTxt = '不需要开发票'
      }
    },
    confrimInvoice () {
      this.CONFIRM_INVOICE({invoice: this.invoice, invoiceTxt: this.invoiceTxt})
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.page{
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  padding-top: 1.95rem;
  z-index: 201;
  background-color: #f5f5f5;
  p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.choose_invoice{
  	@include fj;
    align-items: center;
    background-color: #fff;
    line-height: 2.5rem;
    padding: 0 .7rem;
    margin-top: 0.5rem;
    span{
      @include sc(.75rem, #333);
    }
    svg{
      @include wh(.8rem, .8rem);
      background-color: #999;
    }
    .choosed{
      fill: #4cd964;
      background-color: #4cd964;
    }
}
.determine{
  background-color: #4cd964;
  text-align: center;
  @include sc(.7rem, #fff);
  margin: 0 .7rem;
  line-height: 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
}
</style>
