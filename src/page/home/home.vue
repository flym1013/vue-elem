<template lang="html">
  <div>
    <header-Top signin-up='home'>
      <router-link to="/search" class="link_search" slot="search">
	    		<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
	    			<circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"/>
	    			<line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
	    		</svg>
    		</router-link>
			<router-link to="/selectLoction" slot="msite-title" class="msite_title">
				<span class="title_text ellipsis">{{msietTitle}}</span>
			</router-link>
    </header-Top>
    <nav class="msite_nav">
    		<div class="swiper-container" v-if="foodTypes.length">
          <swiper :options="swiperOption"  ref="mySwiper">
		        <!-- <div class="swiper-wrapper"> -->
		            <swiper-slide class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
	            		<router-link :to="{path: '/foodCategory', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
	            			<figure>
	            				<img :src="imgBaseUrl + foodItem.image_url">
	            				<figcaption>{{foodItem.title}}</figcaption>
	            			</figure>
	            		</router-link>
		            </swiper-slide>
		        <!-- </div> -->
		        <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
		    </div>
		    <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else>
    	</nav>
      <div class="shop_list_container">
  	    <header class="shop_header">
  	    	<svg class="shop_icon">
  	    		<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
  	    	</svg>
  	    	<span class="shop_header_title">附近商家</span>
  	    </header>
  	    <shop-List v-if="hasGetData" :geohash="geohash"></shop-List>
      </div>
      <foot-guide></foot-guide>
  </div>
</template>

<script>
import headerTop from '../../components/header/header.vue'
import shopList from '../../components/common/shoplist.vue'
import footGuide from '../../components/footer/footGuide'
import { msiteFoodTypes, getCity, msiteAdress } from '../../service/getData'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      geohash: '',
      hasGetData: false, // 是否已经获取地理位置数据，成功之后再获取商铺列表信息
      msietTitle: '请选择地址...',
      addressInfo: [],
      foodTypes: [], // 食品分类列表
      imgBaseUrl: 'https://fuss10.elemecdn.com', // 图片域名地址
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        loop: true,
        autoplay: true,
        centeredSlides: true,
        paginationClickable: true,
        // spaceBetween: 300,
        // loop: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  components: {
    headerTop, swiper, swiperSlide, shopList, footGuide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  async created () {
    await this.getGeohash()
    await this.getAddressName()
    // 保存geohash到vuex中
    this.SAVE_GEOHASH(this.geohash)
    // 获取位置信息(经度。纬度)保存到vuex里面
    this.RECORD_ADDRESS(this.addressInfo)
    this.hasGetData = true
  },
  async beforeMount () {},
  mounted () {
    msiteFoodTypes({
      geohash: this.geohash, // 参数
      group_type: '1',
      'flags[]': 'F'
    }).then(res => {
      let resLength = res.data.length
      let resArr = [...res.data]// 返回一个新的数组
      let foodArr = []
      for (let i = 0, j = 0; i < resLength; i += 8, j++) {
        foodArr[j] = resArr.splice(0, 8)
      }
      this.foodTypes = foodArr
    }).then(() => {
      // 初始化swiper
    })
    // swiper.slideTo(0, 0, false)
  },
  methods: {
    ...mapMutations([
      'RECORD_ADDRESS', 'SAVE_GEOHASH'
    ]),
    async getGeohash () {
      if (this.$route.query.geohash) {
        this.geohash = this.$route.query.geohash
      } else {
        const address = await getCity({
          type: 'guess'
        })
        this.geohash = address.data.latitude + ',' + address.data.longitude
      }
    },
    async getAddressName () {
      if (this.geohash) {
        let res = await msiteAdress(this.geohash)
        this.msietTitle = res.data.name
        this.addressInfo = res.data
      }
    },
    // 解码url地址，求去restaurant_category_id值
    getCategoryId (url) {
      let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name', ''))
      if (/restaurant_category_id/gi.test(urlData)) {
        return JSON.parse(urlData).restaurant_category_id.id
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/style/mixin.scss';
.link_search{
		left: .8rem;
		@include wh(0.9rem, 0.9rem);
		@include ct;
	}
  .msite_title{
  @include center;
      width: 50%;
      color: #fff;
      text-align: center;
      margin-left: -0.5rem;
      .title_text{
          @include sc(0.8rem, #fff);
          text-align: center;
          display: block;
      }
}
  .msite_nav{
  padding-top: 2.1rem;
  background-color: #fff;
  border-bottom: 0.025rem solid $bc;
  height: 10.6rem;
  .swiper-container{
    @include wh(100%, auto);
    padding-bottom: 0.6rem;
    .swiper-pagination{
      bottom: 0.2rem;
    }
  }
  .fl_back{
    @include wh(100%, 100%);
  }
}

.food_types_container{
  display:flex;
  flex-wrap: wrap;
  .link_to_food{
    width: 25%;
    padding: 0.3rem 0rem;
    @include fj(center);
    figure{
      img{
        margin-bottom: 0.3rem;
        @include wh(1.8rem, 1.8rem);
      }
      figcaption{
        text-align: center;
        @include sc(0.55rem, #666);
      }
    }
  }
}

.shop_list_container{
		margin-top: .4rem;
		border-top: 0.025rem solid $bc;
		background-color: #fff;
		.shop_header{
		  display: flex;
			.shop_icon{
				fill: #999;
				margin-left: 0.6rem;
				vertical-align: middle;
				@include wh(0.6rem, 0.6rem);
			}
			.shop_header_title{
				color: #999;
				@include font(0.55rem, 1.6rem);
			}
		}
	}
</style>
