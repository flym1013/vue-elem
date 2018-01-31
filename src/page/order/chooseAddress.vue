<template lang="html">
  <div class="page">
    <header-Top head-title="选择地址" goBack="true"></header-Top>
    <section class="scroll_container">
      <section class="list_cotainer">
        <ul class="deliverable_address">
          <li v-for="(item,index) in deliverable" @click.prevent.stop="chooseAddress(item, index)">
            <svg class="choosed_address" :class="{default_address: defaultIndex == index}">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select"></use>
            </svg>
            <div class="">
              <header>
                <span>{{item.name}}</span>
                <span>{{item.sex == 1? '先生' : '女士'}}</span>
                <span>{{item.phone}}</span>
              </header>
              <div class="address_detail ellipsis">
                <span v-if="item.tag" :style="{backgroundColor: iconColor(item.tag)}">{{item.tag}}</span>
                <p>{{item.address_detail}}</p>
              </div>
            </div>
          </li>
        </ul>
        <section id="out_delivery" v-if="deliverdisable.length">
            <header class="out_header">以下地址超出配送范围</header>
            <ul class="deliverable_address">
                <li v-for="(item,index) in deliverdisable">
                    <svg class="choosed_address">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#select"></use>
                    </svg>
                    <div>
                        <header>
                            <span>{{item.name}}</span>
                            <span>{{item.sex == 1? '先生' : '女士'}}</span>
                            <span>{{item.phone}}</span>
                        </header>
                        <div class="address_detail ellipsis">
                            <span v-if="item.tag" :style="{backgroundColor: '#ccc', color: '#fff'}">{{item.tag}}</span>
                            <p>{{item.address_detail}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
      </section>
    </section>
    <router-link to="/myInformation/addNewAddress" class="add_icon_footer" >
        <img src="../../images/add_address.png" height="24" width="24">
        <span>新增收货地址</span>
    </router-link>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {getAddressList} from '../../service/getData.js'
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      addressList: [],  // 地址列表
      deliverable: [],  // 有效地址列表
      deliverdisable: [],  // 无效地址列表
      id: null, // ID
      sig: null,
      showAlert: false,
      alertText: null
    }
  },
  created () {
    this.init()
  },
  computed: {
    ...mapState([
      'userInfo', 'addressIndex', 'newAddress'
    ]),
    defaultIndex: function () {
      if (this.addressIndex) {
        return this.addressIndex
      } else {
        return 0
      }
    }
  },
  components: {
    headerTop
  },
  watch: {
    userInfo: function (value) {
      if (value && value.user_id) {
        this.initData()
      }
    },
    newAddress: function (value) {
      this.initData()
    }
  },
  methods: {
    ...mapMutations([
      'CHOOSE_ADDRESS'
    ]),
    async init () {
      this.addressList = []
      this.deliverable = []
      this.deliverdisable = []
      if (this.userInfo && this.userInfo.user_id) {
        await this.getAddress(this.userInfo.user_id)
        this.addressList.forEach(item => {
          if (item.is_deliverable) {
            this.deliverable.push(item)
          } else {
            this.deliverdisable.push(item)
          }
        })
      }
    },
    chooseAddress (address, index) {
      this.CHOOSE_ADDRESS({address, index})
      this.$router.go(-1)
    },
    iconColor (name) {
      switch (name) {
        case '公司' : return '#4cd964'
        case '学校' : return '#3190e8'
      }
    },
    async getAddress (ID) {
      let res = await getAddressList({
        user_id: ID
      })
      this.addressList = res.data
    }
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
    background-color: #fff;
    z-index: 202;
    padding-top: 1.95rem;
    p, span{
        font-family: Helvetica Neue,Tahoma,Arial;
    }
  }
  .scroll_container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 1.95rem;
    overflow-y: auto;
  }
  .list_cotainer{
    padding-bottom: 5rem;
  }
  .deliverable_address{
    background-color: #fff;
    li{
        display: flex;
        align-items: center;
        border-bottom: 0.025rem solid #f5f5f5;
        padding: .7rem;
        line-height: 1rem;
        .choosed_address{
            @include wh(.8rem, .8rem);
            margin-right: .4rem;
            background-color: #ddd;
        }
        .default_address{
            background-color: #4cd964;
        }
        header{
            text-align: left;
            @include sc(.7rem, #333);
            span:nth-of-type(1){
                font-size: .8rem;
                font-weight: bold;
            }
        }
        .address_detail{
            width: 100%;
            display: flex;
            align-items: center;
            span{
                @include sc(.5rem, #fff);
                border-radius: .15rem;
                background-color: #ff5722;
                height: .6rem;
                line-height: .6rem;
                padding: 0 .2rem;
                margin-right: .3rem;
            }
            p{
                @include sc(.6rem, #777);
            }
        }
    }
  }
  .add_icon_footer{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2.5rem;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 204;
      span{
          @include sc(.7rem, $blue);
          margin-left: .3rem;
      }
  }
</style>
