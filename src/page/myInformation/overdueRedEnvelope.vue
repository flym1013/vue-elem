<template lang="html">
  <div class="page">
    <header-Top head-title="历史红包" goBack="true"></header-Top>
    <section class="redpack-container">
      <ul class="redpack-list-ul">
        <li class="redpack-list-li" v-for="item in redEnvelopList">
          <section class="list-item">
            <div class="list-item-left">
              <span>¥</span>
              <span>{{String(item.amount).split('.')[0]}}</span>
              <span>.</span>
              <span>{{String(item.amount).split('.')[1]||0}}</span>
              <p>{{item.description_map.sum_condition}}</p>
            </div>
            <div class="list-item-right">
              <h4>{{item.name}}</h4>
              <p>{{item.description_map.validity_periods}}</p>
              <p>{{item.description_map.phone}}</p>
            </div>
            <div class="list-item-time">
              <!-- {{item.description_map.validity_delta}} -->
              已过期
            </div>
          </section>
          <div class="list-item-footer" v-if="item.limit_map">
            <p>{{item.limit_map.restaurant_flavor_ids}}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import { getOverduRedEnvelope } from '../../service/getData.js'
export default {
  data () {
    return {
      redEnvelopList: []
    }
  },
  components: {
    headerTop
  },
  created () {
    this.getOverduRedEnvelope()
  },
  methods: {
    async getOverduRedEnvelope () {
      let res = await getOverduRedEnvelope({
        user_id: 1,
        limit: 20,
        offset: 0
      })
      this.redEnvelopList = res.data
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
.redpack-container{
  padding: 1rem .7rem;
  .redpack-list-ul{
    .redpack-list-li{
      background: #fff url(../../images/expired.png) repeat-x;
      background-size: .5rem .3rem;
      margin-bottom: .5rem;
      border-radius: .25rem;
      .list-item{
        @include fj;
        padding: 1rem .5rem .8rem;
        .list-item-left{
          font-size: 0;
          border-right: 0.025rem dotted #ccc;
          flex: 1;
          padding-right: .2rem;
          span:nth-of-type(1){
            @include sc(.75rem,#ccc);
            font-weight: bold;
          }
          span:nth-of-type(2){
            @include sc(1.5rem,#ccc);
          }
          span:nth-of-type(3), span:nth-of-type(4){
            @include sc(.8rem,#ccc);
            font-weight: bold;
          }
          p{
            @include sc(.4rem,#999);
          }
        }
        .list-item-right{
          flex: 2;
          margin-left: 1.5rem;
          h4{
            @include sc(.7rem,#666);
            margin-left: -0.7rem;
          }
          p{
            list-style-type: disc;
            margin-left: -0.7rem;
            @include sc(.4rem, #999);
          }
        }
        .list-item-time{
          @include sc(.75rem, #ccc);
        }
      }
      .list-item-footer{
        background-color: #f9f9f9;
        padding: .4rem;
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
        p{
          @include sc(.4rem,#999);
          list-style-type: disc;
          margin-left: .4rem;
        }
      }
    }
  }
}
</style>
