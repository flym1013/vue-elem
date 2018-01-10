<template lang="html">
  <div class="footCategory-page">
    <header-Top :headTitle="headTitle" goBack="true"></header-Top>
    <section class="sort-container">
      <div class="sort-item" :class="{choose_type:sortBy == 'food'}">
        <div class="sort-item-container" @click="chooseType('food')">
          <div class="sort-item-border">
            <span :class="{category_title: sortBy == 'food'}">{{foodTitle}}</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
			    			<polygon points="0,3 10,3 5,8"/>
			    		</svg>
          </div>
        </div>
        <transition name="showList" v-show="classificationList">
          <section class="category-cantainer style-common" v-show="sortBy == 'food'">
            <section class="category-left">
              <ul>
                <li class="category-left-li" v-for="(item, index) in classificationList" :key="index" @click="selectCategoryName(item.id, index)" :class="{category_active:restaurant_category_id == item.id}">
                  <section>
                    <img :src="getImgPath(item.image_url)" v-if="index" class="category-icon">
                    <span>{{item.name}}</span>
                  </section>
                  <section>
                    <span class="category-count">{{item.count}}</span>
                    <svg v-if="index" width="8" height="8" xmlns="http://www.w3.org/2000/svg" version="1.1" class="category_arrow" >
                      <path d="M0 0 L6 4 L0 8"  stroke="#bbb" stroke-width="1" fill="none"/>
                    </svg>
                  </section>
                </li>
              </ul>
            </section>
            <section class="category-right">
              <ul >
                <li class="category-right-li" v-for="(item, index) in classificationListDetail" :key="index" @click="getCategoryIds(item.id, item.name)" :class="{category_right_choosed: restaurant_category_ids == item.id || (!restaurant_category_ids)&&index == 0}">
                  <span>{{item.name}}</span>
	    						<span>{{item.count}}</span>
                </li>
              </ul>
              <!-- <p v-if="classificationDetail">
                暂无数据
              </p> -->
            </section>
          </section>
        </transition>
      </div>
      <div class="sort-item" :class="{choose_type:sortBy == 'sort'}">
        <div class="sort-item-container" @click="chooseType('sort')">
          <div class="sort-item-border">
            <span :class="{category_title: sortBy == 'sort'}">排序</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
			    			<polygon points="0,3 10,3 5,8"/>
			    		</svg>
          </div>
        </div>
          <transition name="showList">
            <section class="style-common" v-show="sortBy == 'sort'">
              <ul class="sort-container-list" @click="sortList($event)">
                <li class="sort-container-li" data="4">
                  <svg>
									  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
								  </svg>
	    						<p :class="{sort_select: sortByType == 4}" data="4">
	    						<span>智能排序</span>
	    						<svg v-if="sortByType == 4">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
	    						</p>
                </li>
                <li class="sort-container-li" data="5">
	    						<svg>
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
								</svg>
	    						<p  :class="{sort_select: sortByType == 5}" data="5">
	    							<span>距离最近</span>
	    							<svg v-if="sortByType == 5">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
	    						</p>
	    					</li>
	    					<li class="sort-container-li" data="6">
	    						<svg>
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
								</svg>
	    						<p  :class="{sort_select: sortByType == 6}" data="6">
	    							<span>销量最高</span>
	    							<svg v-if="sortByType == 6">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
	    						</p>
	    					</li>
	    					<li class="sort-container-li" data="1">
	    						<svg>
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
								</svg>
	    						<p  :class="{sort_select: sortByType == 1}" data="1">
	    							<span>起送价最低</span>
	    							<svg v-if="sortByType == 1">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
								</p>
	    					</li>
	    					<li class="sort-container-li" data="2">
	    						<svg>
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
								</svg>
	    						<p  :class="{sort_select: sortByType == 2}" data="2">
	    							<span>配送速度最快</span>
	    							<svg v-if="sortByType == 2">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
	    						</p>
	    					</li>
	    					<li class="sort-container-li" data="3">
	    						<svg>
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
								</svg>
	    						<p  :class="{sort_select: sortByType == 3}" data="3">
	    							<span>评分最高</span>
	    							<svg v-if="sortByType == 3">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
	    						</p>
	    					</li>
              </ul>
            </section>
          </transition>
      </div>
      <div class="sort-item" :class="{choose_type: sortBy == 'active'}">
        <div class="sort-item-container" @click="chooseType('active')">
            <span :class="{category_title: sortBy == 'active'}">筛选</span>
            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
			    			<polygon points="0,3 10,3 5,8"/>
			    		</svg>
        </div>
        <transition name="showList">
          <section class="style-common filter-container" v-show="sortBy == 'active'">
            <section style="100%">
              <header class="filter-header-style">
                配送方式
              </header>
              <ul class="filter-ul">
                <li class="filter-li" v-for="item in deliveryList" :key="item.id" @click="selectDeliveryMode(item.id)">
                  <svg :style="{opacity: (item.id == 0)&&(delivery_mode !== 0)? 0: 1}">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="delivery_mode == item.id? '#selected':'#fengniao'"></use>
									</svg>
                  <span :class="{selected_filter: delivery_mode == item.id}">{{item.text}}</span>
                </li>
              </ul>
            </section>
            <section style="100%">
              <header class="filter-header-style">
                商家属性(可以多选)
              </header>
              <ul class="filter-ul" style="paddingBottom: .5rem;">
                <li class="filter-li" v-for="(item, index) in activeList" :key="item.id" @click="selectSupportIds(index, item.id)">
                <svg v-show="support_ids[index] ? support_ids[index].status : false" class="activity_svg">
  								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
  							</svg>
  	    				<span class="filter_icon" :style="{color: '#' + item.icon_color, borderColor: '#' + item.icon_color}" v-show="support_ids[index] ? !support_ids[index].status : false">{{item.icon_name}}</span>
  	    				<span :class="{selected_filter: support_ids[index] ? support_ids[index].status : false}">{{item.name}}</span>
                </li>
              </ul>
            </section>
            <section class="confirm-filter">
              <div class="clear-all filter-button-style" @click="clearSelect">清空</div>
	    				<div class="confirm-select filter-button-style" @click="confirmSelectFun">确定<span v-show="filterNum">({{filterNum}})</span></div>
            </section>
          </section>
        </transition>
      </div>
    </section>
    <transition name="showcover">
    		<div class="back_cover" v-show="sortBy"></div>
    </transition>
    <section class="shop_list_container">
	    	<shop-List :geohash="geohash" :restaurantCategoryId="restaurant_category_id" :restaurantCategoryIds="restaurant_category_ids" :sortByType='sortByType' :deliveryMode="delivery_mode" :confirmSelect="confirmStatus" :supportIds="support_ids" v-if="true" @DidConfrim="clearAll"></shop-List>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import headerTop from '../../components/header/header.vue'
import shopList from '../../components/common/shoplist.vue'
import { msiteAdress, getAllClassification, getDeliveryMethods, getActiveMethods } from '../../service/getData.js'
import { getImgPath } from '../../config/utils.js'
export default {
  data () {
    return {
      geohash: null,
      headTitle: null,
      foodTitle: null,
      restaurant_category_id: null, // 餐馆分类id
      restaurant_category_ids: null, // 筛选类型的id
      classificationList: [], // 所有食品分类列表
      classificationListDetail: [], // 所有食品分类列表详情
      classificationDetail: false,
      sortBy: '', // 筛选的条件
      sortByType: null, // 根据何种方式排序
      deliveryList: [], // 配送方式
      activeList: [], // 活动列表
      delivery_mode: null, // 选中的配送方式
      support_ids: [], // 选中的商铺活动列表
      confirmStatus: false, // 确认选择
      filterNum: 0 // 所选中的所有样式的集合
    }
  },
  watch: {

  },
  created () {
    this.init()
    this.getAllClassification()
    this.getDeliveryMethods()
    this.getActiveMethods()
  },
  components: {
    headerTop, shopList
  },
  computed: {
    ...mapState([
      'latitude', 'longitude'
    ])
  },
  // mixins: [getImgPath],
  methods: {
    ...mapMutations([
      'RECORD_ADDRESS'
    ]),
    getImgPath (path) {
      getImgPath(path)
    },
    async init () {
      this.geohash = this.$route.query.geohash
      this.headTitle = this.$route.query.title
      this.foodTitle = this.headTitle
      this.restaurant_category_id = this.$route.query.restaurant_category_id
      // 防止刷新页面时，vuex状态丢失，经度纬度需要重新获取，并存入vuex
      if (!this.latitude) {
          // 获取位置信息
        let res = await msiteAdress(this.geohash)
          // 记录当前经度纬度进入vuex
        this.RECORD_ADDRESS(res)
      }
    },
    async getAllClassification () {
      let res = await getAllClassification({
        latitude: this.latitude ? this.latitude : '',
        longitude: this.longitude ? this.longitude : ''
      })
      this.classificationList = res.data
      this.classificationList.forEach(item => {
        if (this.restaurant_category_id === item.id) {
          this.classificationListDetail = item.sub_categories
          // this.classificationDetail = true
        }
      })
    },
    // 获取配送方式
    async getDeliveryMethods () {
      let res = await getDeliveryMethods({
        latitude: this.latitude ? this.latitude : '',
        longitude: this.longitude ? this.longitude : ''
      })
      this.deliveryList = res.data
    },
    // 获取商家属性活动列表
    async getActiveMethods () {
      let res = await getActiveMethods({
        latitude: this.latitude ? this.latitude : '',
        longitude: this.longitude ? this.longitude : ''
      })
      this.activeList = res.data
      // 记录support_ids的状态，默认不选中，点击状态取反，status为true时为选中状态
      this.activeList.forEach((item, index) => {
        this.support_ids[index] = {status: false, id: item.id}
      })
    },
    // 点击顶部三个选项，展示不同的列表，选中当前选项进行展示，同时收回其他选项
    chooseType (type) {
      if (this.sortBy !== type) {
        this.sortBy = type
        if (type === 'food') {
          this.foodTitle = '分类'
        } else {
          // 将foodTitle 和 headTitle 进行同步
          this.foodTitle = this.headTitle
        }
      } else {
        // 再次点击相同选项时收回列表
        this.sortBy = ''
        if (type === 'food') {
          // 将foodTitle 和 headTitle 进行同步
          this.foodTitle = this.headTitle
        }
      }
    },
    // 选中左侧某个类，右侧相应的渲染出来
    selectCategoryName (id, index) {
      if (index === 0) {
        this.restaurant_category_ids = null
        this.sortBy = ''
      } else {
        this.restaurant_category_id = id
        this.classificationListDetail = this.classificationList[index].sub_categories
      }
    },
    // 选中Category右侧列表的某个选项时，进行筛选，重新获取数据并渲染
    getCategoryIds (id, name) {
      this.restaurant_category_ids = id
      this.sortBy = ''
      this.foodTitle = this.headTitle = name
    },
    // 点击配送方式
    selectDeliveryMode (id) {
      if (this.delivery_mode == null) {
        this.filterNum++
        this.delivery_mode = id
      } else if (this.delivery_mode === id) {
        this.filterNum--
        this.delivery_mode = null
      } else {
        this.delivery_mode = id
      }
    },
    // 点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染,事件冒泡
    sortList (event) {
      // console.log(event)
      // console.log(event.target.getAttribute('data'))
      this.sortByType = event.path[1].getAttribute('data')
      this.sortBy = ''
    },
    // 点击商家属性活动
    selectSupportIds (index, id) {
      this.support_ids.splice(index, 1, {status: !this.support_ids[index].status, id})
      // 重新计算filterNum的个数
      this.filterNum = this.delivery_mode == null ? 0 : 1
      this.support_ids.forEach(item => {
        if (item.status) {
          this.filterNum ++
        }
      })
    },
    // 返回一个自定义事件通知父级，已经接收到数据，此时父级才可以清除已选状态
    clearAll () {
      this.delivery_mode = null
    },
    // 清空筛选条件
    clearSelect () {
      this.support_ids.forEach(item => { item.status = false })
      this.filterNum = 0
    },
    // 确定筛选条件 点击确认时，将需要筛选的id值传递给子组件，并且收回列表
    confirmSelectFun () {
      // 状态改变时，因为子组件进行了监听，会重新获取数据进行筛选
      this.confirmStatus = !this.confirmStatus
      this.sortBy = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.footCategory-page {
  padding-top: 3.6rem;
}
.category_active{
  background-color: #fff;
}
.sort-container {
  position: fixed;
  background-color: #fff;
  border-bottom: .025rem solid #f1f1f1;
  top: 1.95rem;
  right: 0;
  width: 100%;
  display: flex;
  z-index: 13;
  box-sizing: border-box;
  .sort-item{
    @include sc(.55rem,#444);
    @include wh(33.3%,1.6rem);
    text-align: center;
    line-height: 1rem;
    .sort-item-container{
      @include wh(100%,100%);
      position: relative;
      z-index: 14;
      background-color: #fff;
      box-sizing: border-box;
      padding-top: .3rem;
      .sort-item-border{
        height: 1rem;
        border-right: .025rem solid #e4e4e4;
      }
    }
    .sort_icon{
      vertical-align: middle;
      transition: .3 all;
      fill: #666;
    }
    .style-common {
      width: 100%;
      position: absolute;
      display: flex;
      top: 1.6rem;
      left: 0;
      border-top: .025rem solid #e4e4e4;
      background-color: #fff;
    }
    .category-cantainer{
      .category-left{
        flex: 1;
        background-color: #f1f1f1;
        height: 16rem;
        overflow-y: auto;
        .category-left-li{
          display: flex;
          justify-content: space-between;
          padding: 0 .5rem;
          .category_icon{
						@include wh(.8rem, .8rem);
						vertical-align: middle;
						margin-right: .2rem;
					}
          span{
            @include sc(.5rem,#666);
            line-height: 1.8rem;
          }
          .category-count{
            background-color: #ccc;
            font-size: .4rem;
            color: #fff;
            padding: 0 .1rem;
            border: .025rem solid #ccc;
            border-radius: .8rem;
            vertical-align: middle;
            margin-right: .25rem;
          }
          .category_arrow{
						vertical-align: middle;
					}
        }
      }
      .category-right{
        flex: 1;
        background-color: #fff;
        padding-left: .5rem;
        height: 16rem;
        overflow-y: auto;
        .category-right-li{
          display: flex;
          justify-content: space-between;
          height: 1.8rem;
          line-height: 1.8rem;
          padding-right: .5rem;
          border-bottom: .025rem solid #e4e4e4;
          span{
            color: #666;
          }
        }
      }
    }
  }
  .choose_type{
			.sort-item-container{
				.category_title{
					color: $blue;
				}
				.sort_icon{
					transform: rotate(180deg);
					fill:$blue;
				}
			}
		}
    .showList-enter-active, .showList-leave-active {
  		transition: all .5s;
  		transform: translateY(0);
  	}
  	.showList-enter, .showList-leave-active {
  		opacity: 0;
  		transform: translateY(-100%);
  	}
}
.sort-container-list {
  width: 100%;
  .sort-container-li{
    height: 2.5rem;
    display: flex;
    align-items: center;
    svg{
      @include wh(.7rem,.7rem);
      margin: 0 .3rem 0 .8rem;
    }
    p{
      line-height: 2.5rem;
      flex: auto;
      text-align: left;
      text-indent: .25rem;
      border-bottom: .025rem solid #e4e4e4;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.filter-container {
  flex-direction: column;
	align-items: flex-start;
	min-height: 10.6rem;
	background-color: #f1f1f1;
  .filter-header-style{
    @include sc(.4rem,#333);
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .5rem;
    background-color: #fff;
  }
  .filter-ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 .5rem;
    background-color: #fff;
    .filter-li{
      display: flex;
      align-items: center;
      border: .025rem solid #eee;
      @include wh(4.7rem,1.4rem);
      margin-right: .25rem;
      border-radius: .125rem;
      padding: 0 .25rem;
      margin-bottom: .25rem;
      svg{
        width: .8rem;
        height: .8rem;
        margin-right: .125rem;
      }
      .selected_filter{
        color: #3190e8;
      }
      .filter_icon{
        @include wh(.8rem, .8rem);
        font-size: 0.5rem;
        border: 0.025rem solid $bc;
        border-radius: 0.15rem;
        margin-right: 0.25rem;
        line-height: .8rem;
        text-align: center;
      }
    }
  }
  .confirm-filter{
    display: flex;
    background-color: #f1f1f1;
    width: 100%;
    padding: .2rem .3rem;
    .filter-button-style{
      width: 50%;
      height: 1.8rem;
      line-height: 1.8rem;
      font-size: .8rem;
      border-radius: .3rem
    }
    .clear-all{
      background-color: #fff;
      margin-right: .5rem;
      border: .025rem solid #fff;
    }
    .confirm-select{
      background-color: #56d176;
      color: #fff;
      border: .025rem solid #56d176;
    }
  }
}
.back_cover{
		position: fixed;
		@include wh(100%, 100%);
		z-index: 10;
		background-color: rgba(0,0,0,0.3);
	}
.showcover-enter-active, .showcover-leave-active {
  transition: opacity .3s
}
.showcover-enter, .showcover-leave-active {
  opacity: 0
}
</style>
