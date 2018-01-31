<template lang="html">
  <div class="page">
    <header-Top head-title="搜索地址" goBack="true"></header-Top>
    <section>
      <div class="add_detail">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="inputAdress">
        <button @click="inputThing">确认</button>
      </div>
      <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
      <div class="point" v-show="warning">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>
    </section>
    <section class="search_container" v-show="searchList">
      <ul>
        <li v-for="(item, index) in addressList" @click="listClick(index)">
          <p>{{item.name}}</p>
          <p>{{item.address}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {mapMutations, mapState} from 'vuex'
import {searchAddrress} from '../../service/getData.js'
export default {
  data () {
    return {
      inputAdress: null,
      addressList: [],
      warning: true,
      searchList: false
    }
  },
  created () {
    this.inputAdress = this.addAddress ? this.addAddress : this.inputAdress
  },
  components: {
    headerTop
  },
  computed: {
    ...mapState([
      'addAddress'
    ])
  },
  methods: {
    ...mapMutations([
      'SAVE_ADDDETAIL', 'SAVE_GEOHASH'
    ]),
    async inputThing () {
      let res = await searchAddrress({
        type: 'nearby',
        keyword: this.inputAdress
      })
      this.addressList = res.data
      this.warning = true
      if (this.addressList.length > 0) {
        this.warning = false
        this.searchList = true
        if (this.inputAdress === '') {
          this.warning = true
          this.addressList = []
        }
      }
    },
    listClick (index) {
      this.SAVE_ADDDETAIL(this.addressList[index].name)
      this.SAVE_GEOHASH(this.addressList[index].geohash)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import 'src/style/mixin.scss';
.page{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 202;
  padding-top: 1.95rem;
  p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.add_detail{
  @include fj(space-between)
  background:#fff;
  padding:.5rem;
  input{
    display: block;
    width:11.8rem;
    padding:.4rem;
    background:#f2f2f2;
    border:1px solid #ddd;
    @include borderRadius(5px);
    font-size:.6rem;
  }
  button{
    display:block;
    width:3rem;
    background:#3199e8;
    @include sc(.7rem,#fff);
    @include borderRadius(5px);
  }
}
.warnpart{
  background-color: #FFF6E4;
  @include sc(.62rem,#FF883F);
  text-align:center;
  padding: .2rem 0;
}
.point{
  @include center;
  width: 100%;
  p{
    width: 100%;
    text-align:center;
    @include sc(.7rem,#969696);
    margin-bottom:.4rem;
  }
}
.search_container{
  background:#f2f2f2;
  li{
    border-bottom:1px solid #ccc;
    padding:.4rem;
    p{
      text-align: left;
      @include sc(.65rem,#969696);
    }
    p:first-child{
      margin-bottom:.2rem;
    }
  }
  li:last-child{
    border:0;
  }
}
</style>
