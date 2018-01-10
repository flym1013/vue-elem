<template lang="html">
  <div class="page">
    <header-Top signin-up='home'>
      <span slot='logo' class="head-logo"  @click="reload">ele.me</span>
    </header-Top>
    <section class="city-guess">
      <div class="guess-tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess-city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </section>
    <section class="city-hot">
      <h4>热门城市</h4>
      <ul class="hotcity-list clear">
        <router-link :to="'/city/'+item.id" tag="li" v-for="item in hotCityList" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>
    <section class="city-group">
      <ul class="city-category">
        <li v-for="(value,key,index) in sortgroupcity" :key="key" class="city-group-li">
          <h4 class="city-group-title">{{key}}
            <span v-if="index == 0">按字母排序</span>
          </h4>
          <ul class="groupcity-list clear">
            <router-link :to="'/city/'+item.id" tag="li" v-for="item in value" :key="item.id" class="groupcity-list-li ellipsis">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import { getCity } from '../../service/getData.js'
export default {
  data () {
    return {
      guessCity: null,
      hotCityList: [],
      groupCityList: {},
      guessCityid: null
    }
  },
  created () {
    this.getGuessCity()
    this.getHotCity()
    this.getGroupCity()
  },
  computed: {
    sortgroupcity () {
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if (this.groupCityList[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupCityList[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },
  components: {
    headerTop
  },
  methods: {
    reload () {
      window.location.reload()
    },
    async getGuessCity () {
      let res = await getCity({
        type: 'guess'
      })
      this.guessCity = res.data.name
      this.guessCityid = res.data.id
    },
    async getHotCity () {
      let res = await getCity({
        type: 'hot'
      })
      this.hotCityList = res.data
    },
    async getGroupCity () {
      let res = await getCity({
        type: 'group'
      })
      this.groupCityList = res.data
    }
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
.head-logo{
  left: 0.4rem;
  font-weight: 400;
  @include sc(.7rem,#fff);
  @include wh(2.3rem,.7rem);
  @include ct;
}
.city-guess{
  padding-top: .4rem;
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
  margin-bottom: .4rem;
  .guess-tip{
    display: flex;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 .45rem;
    span:nth-of-type(1){
      @include sc(.55rem,#666);
    }
    span:nth-of-type(2){
      font-weight: 900;
      @include sc(.475rem,#9f9f9f);
    }
  }
  .guess-city{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.8rem;
    padding: 0 .45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: .75rem/1.8rem Microsoft YaHei;
    .arrow_right{
        @include wh(.6rem, .6rem);
        fill: #999;
    }
    span{
      color: #3190e8;
    }
  }
}
.city-hot {
  margin-bottom: .4rem;
  background-color: #fff;
  h4{
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    text-align: left;
  }
  .hotcity-list{
    li{
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025rem solid $bc;
      border-right: 0.025rem solid $bc;
      @include wh(25%, 1.75rem);
      @include font(0.6rem, 1.75rem);
    }
    li:nth-of-type(4n){
      border-right: none;
    }
  }
}
.city-group{
  .city-category{
    .city-group-li{
      margin-bottom: .4rem;
      background-color: #fff;
      border-bottom: 1px solid $bc;
      .city-group-title{
        color: #666;
        font-weight: 400;
        text-indent: .45rem;
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        font: .55rem/1.45rem Helvetica Neue;
        text-align: left;
        span{
          @include sc(.475rem,#999);
        }
      }
      .groupcity-list{
        .groupcity-list-li{
          float: left;
          text-align: center;
          color: #666;
          border-bottom: 0.025rem solid $bc;
          border-right: 0.025rem solid $bc;
          @include wh(25%, 1.75rem);
          @include font(0.6rem, 1.75rem);
        }
        li:nth-of-type(4n){
          border-right: none;
        }
      }
    }
  }
}
</style>
