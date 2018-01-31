<template lang="html">
  <div class="rating_page">
    <header-Top head-title="编辑地址" goBack="true">
      <span slot="edit" class="edit" @click="editThing">{{editText}}</span>
    </header-Top>
    <section class="address">
      <ul class="addresslist">
        <li v-for="(item, index) in removeAddress">
          <div class="">
            <p>{{item.address}}</p>
            <p><span>{{item.phone}}</span><span v-if="item.phonepk">、{{item.phonepk}}</span></p>
          </div>
          <div class="deletesite" v-if="deletesite">
            <span @click="deleteSite(index, item)">x</span>
          </div>
        </li>
      </ul>
      <router-link :to="'/myInformation/addNewAddress'">
        <div class="addsite">
          <span>新增地址</span>
          <span class="addsvg">
            <svg fill="#d8d8d8">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import {mapState, mapActions} from 'vuex'
import {deleteAddress} from '../../service/getData.js'
export default {
  data () {
    return {
      deletesite: false, // 是否编辑状态
      editText: '编辑'
    }
  },
  created () {
    this.init()
  },
  computed: {
    ...mapState([
      'userInfo', 'removeAddress'
    ])
  },
  components: {
    headerTop
  },
  watch: {
    userInfo: function (value) {
      if (value && value.user_id) {
        this.init()
      }
    }
  },
  methods: {
    ...mapActions([
      'saveAddress'
    ]),
    init () {
      if (this.userInfo && this.userInfo.user_id) {
        this.saveAddress()
      }
    },
    async deleteSite (index, item) {
      if (this.userInfo && this.userInfo.user_id) {
        await deleteAddress({
          user_id: this.userInfo.user_id,
          address_id: item.id
        })
        this.removeAddress.splice(index, 1)
      }
    },
    editThing () {
      if (this.editText === '编辑') {
        this.editText = '完成'
        this.deletesite = true
      } else {
        this.editText = '编辑'
        this.deletesite = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.rating_page{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 1.95rem;
  background-color: #f2f2f2;
  z-index: 202;
  p, span{
    font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.edit{
  right: .4rem;
  @include sc(0.7rem, #fff);
  @include ct;
}
.address{
  width: 100%;
  margin-top: .4rem;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  .addresslist{
    background: #fff;
    li{
      border-bottom: 1px solid #d9d9d9;
      padding: .4rem;
      @include fj(space-between);
      p{
        line-height: .9rem;
        text-align: left;
        @include sc(.6rem,#333);
        span{
          display: inline-block;
          @include sc(.6rem,#333);
        }
      }
      .deletesite{
        display: flex;
        align-items:center;
        span{
          display: block;
          @include sc(.8rem,#999)
        }
      }
    }
  }
  .addsite{
    margin-top:.4rem;
    background:#fff;
    padding:.2rem .4rem;
    border-top:1px solid #d9d9d9;
    @include fj(space-between);
    span{
      display:block;
      @include sc(.7rem,#333);
      line-height:1.4rem;
    }
    .addsvg{
      @include wh(.66667rem,1.4rem);
      svg{
        @include wh(100%,100%);
      }
    }
  }
}
</style>
