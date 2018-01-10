<template lang="html">
  <div class="city-page">
    <header-Top :head-title="cityName" gp-back="true">
      <router-link to="/selectLoction" slot="changecity" class="chang-city">
        切换城市
      </router-link>
    </header-Top>
    <form class="city-form" v-on:submit.prevent>
      <!-- v-on:submit.preven 阻止form表单刷新整个页面 -->
      <div>
        <input type="text" name="search" placeholder="请输入附近地址" required v-model="inputValue" class="city-input input-style">
      </div>
      <div>
        <input type="submit" name="submit" value="提交" class="city-submit input-style" @click="submits">
      </div>
    </form>
    <div class="search-history" v-if="historyTitle">
      搜索历史
    </div>
    <ul class="addresss-list">
      <li v-for="(item,index) in addressList" :key="index" @click="nextpage(index, item.geohash)">
        <h4 class="ellipsis address-name">{{item.name}}</h4>
        <p class="ellipsis address-location">{{item.address}}</p>
      </li>
    </ul>
    <div class="clear-history" v-if="historyTitle&&addressList.length" @click="clearAll">
      清空所有
    </div>
    <div class="search-result" v-if="result">
      很抱歉！暂无搜索结果
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {
  getCurrentCity,
  searchAddrress
 } from '../../service/getData.js'
import { getStore, setStore, removeStore } from '../../config/utils.js'
export default {
  data () {
    return {
      cityName: null,
      cityid: null,
      inputValue: null,
      addressList: [],
      placeHistory: [],
      historyTitle: true,
      result: false
    }
  },
  created () {
    this.cityid = this.$route.params.cityid // 获取路由信息console.log(this.$route.params.cityid)
    this.getCurrentCity()
    this.init()
  },
  computed: {},
  components: {
    headerTop
  },
  methods: {
    init () {
      if (getStore('placeHistory')) {
        this.addressList = JSON.parse(getStore('placeHistory'))
      } else {
        this.addressList = []
      }
    },
    nextpage (index, geohash) {
      let history = getStore('placeHistory')
      let choosePlace = this.addressList[index]
      if (history) {
        let checkrepeat = false
        this.placeHistory = JSON.parse(history)
        this.placeHistory.forEach(item => {
          if (item.geohash === geohash) {
            checkrepeat = true
          }
        })
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace)
        }
      } else {
        this.placeHistory.push(choosePlace)
      }
      setStore('placeHistory', this.placeHistory)
      this.$router.push({path: '/home', query: {geohash}})  // 跳转到首页
    },
    clearAll () {
      removeStore('placeHistory')
      this.init()
    },
    async submits () {
      if (this.inputValue) {
        await this.getSearchAddress()
        this.historyTitle = false
        this.result = !this.addressList.length
      }
    },
    async getCurrentCity () {
      let res = await getCurrentCity(this.cityid)
      this.cityName = res.data.name
    },
    async getSearchAddress () {
      let res = await searchAddrress({
        city_id: this.cityid,
        keyword: this.inputValue,
        type: 'search'
      })
      this.addressList = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.city-page{
  padding-top: 2.35rem;
  p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.chang-city{
  right: .4rem;
  @include sc(.6rem,#fff);
  @include ct;
}
.city-form{
  padding-top: .4rem;
  background-color: #fff;
  border-top: 1px solid $bc;
  border-bottom: 1px solid $bc;
  div{
    width: 90%;
    margin: 0 auto;
    text-align: center;
    .city-input{
      border: 1px solid $bc;
      padding: 0 .3rem;
      @include sc(.65rem,#333);
    }
    .city-submit{
      background-color: $blue;
      @include sc(.65rem,#fff);
    }
    .input-style{
      @include wh(100%,1.4rem);
      margin-bottom: .4rem;
      border-radius: .1rem;
    }
  }
}
.search-history{
  border-top: 1px solid $bc;
  border-bottom: 1px solid $bc;
  padding-left: .5rem;
  @include font(0.475rem, 0.8rem);
  text-align: left;
}
.addresss-list{
  background-color: #fff;
  border-top: 1px solid $bc;
  li{
    margin: 0 auto;
    border-bottom: 1px solid $bc;
    padding-top: .65rem;
    text-align: left;
    .address-name{
      margin: 0 auto .35rem;
      width: 90%;
      @include sc(.65rem,#333);
    }
    .address-location{
      margin: 0 auto .55rem;
      width: 90%;
      @include sc(.45rem,#999);
    }
  }
}
.clear-history{
  @include sc(.7rem,#666);
  text-align: center;
  line-height: 2rem;
  background-color: #fff;
}
.search-result{
  margin: 0 auto;
  @include font(0.65rem, 1.75rem);
  background-color: #fff;
  color: #333;
  text-indent: .5rem;
  text-align: left;
}
</style>
