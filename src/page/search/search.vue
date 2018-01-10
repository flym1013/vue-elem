<template lang="html">
  <div class="paddingTop search_page">
    <header-Top head-title="搜索" goBack="true"></header-Top>
    <form class="search_form">
      <input type="search" name="search" value="" placeholder="请输入商家和美食名称" class="search_input">
      <input type="submit" name="submit" value="提交" class="search_submit">
    </form>
    <section>

    </section>
    
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

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
  .search_page{
    margin-bottom: 2rem;
  }
  .search_form{
    background-color: #ffffff;
    display: flex;
    padding: 0.5rem;
    input{
      height: 1.5rem;
    }
    .search_input{
      flex: 4;
      border: 0.025rem solid $bc;
      @include sc(0.65rem, #333);
      border-radius: 0.125rem;
      background-color: #f2f2f2;
      font-weight: bold;
      padding: 0 0.25rem;
    }
    .search_submit{
      flex: 1;
      border: 0.025rem solid $blue;
      margin-left: .2rem;
      @include sc(0.65rem, #fff);
      border-radius: 0.125rem;
      background-color: $blue;
      font-weight: bold;
      padding: 0 0.25rem;
    }
  }
</style>
