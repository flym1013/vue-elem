<template lang="html">
  <div class="paddingTop search_page">
    <header-Top head-title="订单列表" goBack="true"></header-Top>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from '../../components/footer/footGuide'
import headerTop from '../../components/header/header.vue'
export default {
  data () {
    return {}
  },
  components: {
    footGuide, headerTop
  }
}
</script>

<style lang="css">
</style>
