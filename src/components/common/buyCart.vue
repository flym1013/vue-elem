<template lang="html">
  <section class="cart_module">
    <section class="cart_button" v-if="!foods.specifications.length">
      <transition name="showReduce">
        <span @click="removeOutCart(foods.category_id, foods.item_id, foods.specfoods[0].food_id, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packing_fee, foods.specfoods[0].sku_id, foods.specfoods[0].stock)" v-if="foodNum">
          <svg xmlns="http://www.w3.org/200/svg" version="1.1" class="add_icon">
             <line x1="3" x2="13" y1="9" y2="9" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
          </svg>
        </span>
      </transition>
      <transition name="fade">
        <span class="cart_num" v-if="foodNum">{{foodNum}}</span>
      </transition>
      <svg xmlns="http://www.w3.org/200/svg" version="1.1" class="add_icon" @touchstart="addToCart(foods.category_id, foods.item_id, foods.specfoods[0].food_id, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packing_fee, foods.specfoods[0].sku_id, foods.specfoods[0].stock, $event)">
         <line x1="3" x2="13" y1="8" y2="8" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
         <line x1="8" x2="8" y1="3" y2="13" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
      </svg>
    </section>
    <section v-else class="choose_specification">
      <section class="choose_icon_container">
        <transition name="showReduce">
          <svg xmlns="http://www.w3.org/200/svg" version="1.1" class="add_icon" v-if="foodNum" @click="showReduceTip">
             <line x1="3" x2="13" y1="9" y2="9" stroke="black" stroke-width="2" style="stroke:rgb(49,144,232)" />
          </svg>
        </transition>
        <transition name="fade">
          <span class="cart_num" v-if="foodNum">{{foodNum}}</span>
        </transition>
        <span class="show_chooselist" @click="showChooseList(foods)">选规格</span>
      </section>
    </section>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      showMoveDot: []
    }
  },
  created () {},
  computed: {
    ...mapState([
      'cartList'
    ]),
    // 监听cartList变化，更新当前商铺的购物车信息shopCart，同时返回一个新的对象
    shopCart: function () {
      return Object.assign({}, this.cartList[this.shopId])
    },
    // shopCart变化的时候重新计算当前商品的数量
    foodNum: function () {
      let category_id = this.foods.category_id
      let item_id = this.foods.item_id
      if (this.shopCart && this.shopCart[category_id] && this.shopCart[category_id][item_id]) {
        let num = 0
        Object.values(this.shopCart[category_id][item_id]).forEach((item, index) => {
          num += item.num
        })
        return num
      } else {
        return 0
      }
    }
  },
  props: ['foods', 'shopId'],
  methods: {
    ...mapMutations([
      'ADD_CART','REDUCE_CART'
    ]),
    // 加入购物车计算按钮位置
    addToCart (category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock, event) {
      this.ADD_CART({shopid: this.shopId, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock})
      // let elLeft = event.target.getBoundingClientRect().left
      // let elBottom = event.target.getBoundingClientRect().bottom
      // this.showMoveDot.push(true)
      // this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom)
    },
    // 移出购物车
    removeOutCart (category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock) {
      if (this.foodNum > 0) {
        this.REDUCE_CART({shopid: this.shopId, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock})
      }
    },
    // 显示规格
    showChooseList (foodScroll) {
      this.$emit('showChooseList', foodScroll)
    },
    // 点击多规格商品的减按钮，弹出提示
    showReduceTip () {
      this.$emit('showReduceTip')
    }
  }
}
</script>

<style lang="scss">
@import 'src/style/mixin.scss';
.cart_module{
  .cart_button{
    display: flex;
    align-items: center;
  }
  .add_icon{
    position: relative;
    z-index: 999;
  }
  .cart_num{
      @include sc(.65rem, #666);
      min-width: 1rem;
      text-align: center;
      font-family: Helvetica Neue,Tahoma;
  }
  svg{
    @include wh(.9rem, .9rem);
    fill: #3190e8;
  }
  .choose_specification{
    .choose_icon_container{
      display: flex;
      align-items: center;
      .show_chooselist{
        display: block;
        @include sc(.55rem,#fff);
        padding: .1rem .2rem;
        background-color: #3190e8;
        border-radius: .2rem;
        border: 1px solid #3190e8;
      }
    }
  }
}
.showReduce-enter-active, .showReduce-leave-active {
    transition: all .3s ease-out;
}
.showReduce-enter, .showReduce-leave-active {
    opacity: 0;
    transform: translateX(1rem);
}
.fade-enter-active, .fade-leave-active {
    transition: all .3s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
.fadeBounce-enter-active, .fadeBounce-leave-active {
    transition: all .3s;
}
.fadeBounce-enter, .fadeBounce-leave-active {
    opacity: 0;
    transform: scale(.7);
}
</style>
