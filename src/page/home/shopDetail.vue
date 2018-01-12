<template lang="html">
  <div class="">
    <section class="shopDetail-container">
      <nav class="goback" @click="goback">
        <svg width="4rem" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:3"/>
        </svg>
      </nav>
      <header class="shopDetail_header" ref="shopheader" :style="{zIndex: showActivities? '14':'10'}">
        <img :src="imgBaseUrl + canteenDetail.image_path" class="header_cover_img">
        <section class="descript_header">
          <router-link :to="{ name: '', params: {} }" class="description_top">
            <section class="description_left">
                <img :src="imgBaseUrl + canteenDetail.image_path">
            </section>
            <section class="description_right">
                <h4 class="description_title ellipsis">{{canteenDetail.name}}</h4>
                <p class="description_text">商家配送／{{canteenDetail.order_lead_time}}分钟送达／配送费¥{{canteenDetail.float_delivery_fee}}</p>
                <p class="description_promotion ellipsis">公告：{{promotionInfo}}</p>
            </section>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description_arrow" >
                <path d="M0 0 L8 7 L0 14"  stroke="#fff" stroke-width="1" fill="none"/>
            </svg>
          </router-link>
          <footer class="description_footer" v-if="canteenDetail.activities.length" @click="showActivitiesFun">
              <p class="ellipsis">
                  <span class="tip_icon" :style="{backgroundColor: '#' + canteenDetail.activities[0].icon_color, borderColor: '#' + canteenDetail.activities[0].icon_color}">{{canteenDetail.activities[0].icon_name}}</span>
                  <span>{{canteenDetail.activities[0].description}}（APP专享）</span>
              </p>
              <p>{{canteenDetail.activities.length}}个活动</p>
              <svg class="footer_arrow">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
              </svg>
          </footer>
        </section>
      </header>
      <transition name="fade">
        <section class="activities_details" v-if="showActivities">
          <svg width="60" height="60" class="close_activities" @click.stop="showActivitiesFun">
              <circle cx="30" cy="30" r="25" stroke="#555" stroke-width="1" fill="none"/>
              <line x1="22" y1="38" x2="38" y2="22" style="stroke:#999;stroke-width:2"/>
              <line x1="22" y1="22" x2="38" y2="38" style="stroke:#999;stroke-width:2"/>
          </svg>
        </section>
      </transition>
      <section  class="change_show_type" ref="chooseType">
        <div class="">
          <!-- <span :class="{activity_show: changeShowType =="food"}" @click="changeShowType='food'">商品</span> -->
          <span :class='{activity_show: changeShowType =="food"}' @click="changeShowType='food'">商品</span>
        </div>
        <div class="">
          <!-- <span :class="{activity_show: changeShowType == "rating"}" @click="changeShowType='rating'">评价</span> -->
          <span :class='{activity_show: changeShowType == "rating"}' @click="changeShowType='rating'">评价</span>
        </div>
      </section>
      <transition name="fade-choose">
        <section v-show="changeShowType =='food'" class="food_container">
          <section class="menu_container">
            <section class="menu_left" id="wrapper_menu" ref="wrapperMenu">
              <ul>
                <li v-for="(item,index) in canteenFoodList" :key="index" class="menu_left_li" :class="{activity_menu: index == menuIndex}" @click="chooseMenu(index, $event)">
                  <img :src="getImgPath(item.icon_url)" v-if="item.icon_url">
                  <span>{{item.name}}</span>
                  <span></span>
                </li>
              </ul>
            </section>
            <section class="menu_right" ref="menuFoodList">
              <ul>
                <li v-for="(item,index) in canteenFoodList" :key="index" class="food-list-hook">
                  <header class="menu_detail_header">
                    <section class="menu_detail_header_left">
                      <strong class="menu_item_title">{{item.name}}</strong>
                      <span class="menu_item_description">{{item.description}}</span>
                    </section>
                    <span class="menu_detail_header_right" @click="showTitleDetail(index)"></span>
                    <p class="description_tip" v-if="index == TitleDetailIndex">
                        <span>{{item.name}}</span>
                        {{item.description}}
                    </p>
                  </header>
                  <section v-for="(foods,foodindex) in item.foods" :key="foodindex" class="menu_detail_list">
                    <router-link :to="{ name: '', params: {} }" tag="div" class="menu_detail_link">
                      <section class="menu_food_img">
                        <img :src="imgBaseUrl + foods.image_path">
                      </section>
                      <section class="menu_food_description">
                        <h3 class="food_description_head">
                          <strong class="description_foodname">{{foods.name}}</strong>
                          <ul  v-if="foods.attributes.length" class="attributes_ul">
                            <li v-for="(attribute, foodindex) in foods.attributes" :key="foodindex" :style="{color: '#' + attribute.icon_color,borderColor:'#' +attribute.icon_color}" :class="{attribute_new: attribute.icon_name == '新'}">
                              <p :style="{color: attribute.icon_name == '新'? '#fff' : '#' + attribute.icon_color}">{{attribute.icon_name == '新'? '新品':attribute.icon_name}}</p>
                            </li>
                          </ul>
                        </h3>
                        <p class="food_description_content">{{foods.description}}</p>
                        <p class="food_description_sale_rating">
                            <span>月售{{foods.month_sales}}份</span>
                            <span>好评率{{foods.satisfy_rate}}%</span>
                        </p>
                        <p v-if="foods.activity" class="food_activity">
                          <span :style="{color: '#' + foods.activity.image_text_color,borderColor:'#' +foods.activity.icon_color}">{{foods.activity.image_text}}</span>
                        </p>
                      </section>
                    </router-link>
                    <footer class="menu_detail_footer">
                      <section class="food_price">
                        <span>¥</span>
                        <span>{{foods.specfoods[0].price}}</span>
                        <span v-if="foods.specifications.length">起</span>

                      </section>
                    </footer>
                  </section>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </transition>
      <transition name="fade-choose">
        <section v-show="changeShowType =='rating'" class="rating_container">

        </section>
      </transition>
    </section>
  </div>
</template>

<script>
import { getCanteenDetail, getCanteenFoodList, getCanteenComment, getCanteenCommentScores, getCanteenCommentTag, msiteAdress } from '../../service/getData.js'
import {mapState, mapMutations} from 'vuex'
import { getImgPath } from '../../config/utils.js'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      canteenDetail: {
        activities: []
      }, // 餐馆详情
      // menuIndex: 0, // 已选菜单索引值，默认为0
      TitleDetailIndex: null, // 点击展示列表头部详情
      canteenFoodList: {
        foods: []
      }, // 餐馆食品列表
      canteenCommentList: [], // 餐馆评论列表
      showActivities: false, // 是否显示活动详情
      changeShowType: 'food', // 切换显示商品或者评价
      listHeight: [], // 右侧食物的的高度
      scrollY: '', // 存放实时获取右侧的y值
      foodScroll: null,  // 食品列表scroll
      canteenQuery: {
        tag_name: '',
        offset: 0,
        limit: 10,
        restaurant_id: null
      }
    }
  },
  async created () {
    this.geohash = this.$route.query.geohash
    this.shopId = this.$route.query.id
    this.init()
    await this.getCanteenDetail()
    await this.getCanteenFoodList()
    await this.getCanteenComment()
    await this.getCanteenCommentScores()
    await this.getCanteenCommentTag()
    this.initScorll()
    this.calculateHeight()
  },
  components: {},
  computed: {
    ...mapState([
      'latitude', 'longitude'
    ]),
    promotionInfo: function () {
      return this.canteenDetail.promotion_info || '欢迎光临，用餐高峰期请提前下单，谢谢。'
    },
    menuIndex: function () {
      for (let i = 0; i < this.listHeight.length; i++) {
        // 判断当currentIndex在height1和height2之间的时候显示
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        // 最后一个区间没有height2
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    ...mapMutations([
      'RECORD_ADDRESS'
    ]),
    getImgPath (path) {
      getImgPath(path)
    },
    async init () {
      if (!this.latitude) {
        // 获取位置信息
        let res = await msiteAdress(this.geohash)
        // 记录当前经度纬度进入vuex
        this.RECORD_ADDRESS(res.data)
      }
    },
    goback () {
      this.$router.go(-1)
    },
    // 控制活动详情页显示和隐藏
    showActivitiesFun () {
      this.showActivities = !this.showActivities
    },
    // 选中左侧的菜单列表
    chooseMenu (index, event) {
      // this.menuIndex = index
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.menuFoodList.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodScroll.scrollToElement(el, 200)
    },
    showTitleDetail (index) {
      if (this.TitleDetailIndex === index) {
        this.TitleDetailIndex = null
      } else {
        this.TitleDetailIndex = index
      }
    },
    // better-scroll包使用
    initScorll () {
      this.meunScroll = new BScroll(this.$refs.wrapperMenu, {
        click: true
      })
      this.foodScroll = new BScroll(this.$refs.menuFoodList, {
        click: true,
        // 探针作用，实时监测滚动位置
        probeType: 3
      })
      // 设置监听滚动位置
      this.foodScroll.on('scroll', (pos) => {
        // scrollY接收变量
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    calculateHeight () {
      let foodlist = this.$refs.menuFoodList.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodlist.length; i++) {
        let item = foodlist[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    // 获取餐馆详情
    async getCanteenDetail () {
      let res = await getCanteenDetail({
        shopid: this.shopId,
        latitude: this.latitude ? this.latitude : '',
        longitude: this.longitude ? this.longitude : ''
      })
      this.canteenDetail = res.data
    },
    // 获取餐馆食品列表
    async getCanteenFoodList () {
      let res = await getCanteenFoodList({
        restaurant_id: this.shopId
      })
      this.canteenFoodList = res.data
    },
    // 获取餐馆评论列表
    async getCanteenComment () {
      this.canteenQuery.restaurant_id = this.shopId
      let res = await getCanteenComment(this.canteenQuery)
      this.canteenCommentList = res.data
    },
    // 获取餐馆评价分数
    async getCanteenCommentScores () {
      this.canteenQuery.restaurant_id = this.shopId
      let res = await getCanteenCommentScores(this.canteenQuery)
      this.canteenScoresList = res.data
    },
    // 获取商品评价分类
    async getCanteenCommentTag () {
      this.canteenQuery.restaurant_id = this.shopId
      let res = await getCanteenCommentTag(this.canteenQuery)
      this.canteenTagList = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.shopDetail-container{
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        left: 0;
        height: 100%;
    }
.goback{
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 2rem;
       z-index: 11;
       padding-top: 0.2rem;
       padding-left: 0.2rem;
       text-align: left;
  }
  .shopDetail_header{ // 父盒子被子盒子撑开，定位的元素不在文档流中，故对父盒子没有影响，超出的部分被父盒子隐藏
      overflow: hidden;
      position: relative;
      .header_cover_img{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        filter: blur(10px);
      }
      .descript_header{
        position: relative;
        z-index: 10;
        background-color: rgba(119,103,137,.43);
        padding: 0.4rem 0 0.4rem 0.4rem;
        width: 100%;
        overflow: hidden;
        .description_top{
            display: flex;
            .description_left{
                margin-right: 0.3rem;
                img{
                    @include wh(2.9rem, 2.9rem);
                    display: block;
                    border-radius: 0.15rem;
                }
            }
            .description_right{
                flex: 1;
                text-align: left;
                .description_title{
                    @include sc(.8rem, #fff);
                    font-weight: bold;
                    width: 100%;
                    margin-bottom: 0.3rem;
                }
                .description_text{
                    @include sc(.5rem, #fff);
                    margin-bottom: 0.3rem;
                }
                .description_promotion{
                    @include sc(.5rem, #fff);
                    width: 11.5rem;
                }
            }
            .description_arrow{
                @include ct;
                right: 0.3rem;
                z-index: 11;
            }
        }
        .description_footer{
            @include fj;
            margin-top: 0.5rem;
            padding-right: 1rem;
            text-align: left;
            p{
                @include sc(.5rem, #fff);
                span{
                    color: #fff;
                }
                .tip_icon{
                    padding: 0 .04rem;
                    border: 0.025rem solid #fff;
                    border-radius: 0.1rem;
                    font-size: .4rem;
                    display: inline-block;
                }
            }
            .ellipsis{
                width: 84%;
            }
            .footer_arrow{
                @include wh(.45rem, .45rem);
                position: absolute;
                right: .3rem;
            }
        }
      }
  }
  .activities_details{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #262626;
    z-index: 200;
    padding: 1.25rem;
  }
  .change_show_type{
    display: flex;
    background-color: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    div{
      flex: 1;
      text-align: center;
      span{
        @include sc(.65rem,#666);
        padding: .2rem .1rem;
        border-bottom: 0.12rem solid #fff;
      }
      .activity_show{
        color: #3190e8;
        border-color: #3190e8;
      }
    }
  }
  .food_container{
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }
  .menu_container{
    display: flex;
    flex: 1;
    overflow-y: hidden;
    position: relative;
    .menu_left{
      width: 3.8rem;
      overflow: auto;
      .menu_left_li{
        padding: .7rem .3rem;
        border-bottom: .025rem solid #ededed;
        box-sizing: border-box;
        border-left: .15rem solid #f8f8f8;
        position: relative;
        img{
          @include wh(.5rem,.6rem);
        }
        span{
          @include sc(.6rem,#666);
        }
        .category_num{}
      }
      .activity_menu{
        border-left: .15rem solid #3190e8;
        background-color: #fff;
        span:nth-of-type(1){
          font-weight: bold;
        }
      }
    }
    .menu_right{
      flex: 4;
      overflow-y: auto;
      .menu_detail_header{
        width: 100%;
        padding: .4rem;
        position: relative;
        @include fj;
        align-items: center;
        .menu_detail_header_left{
          width: 11rem;
          white-space: nowrap;
          overflow: hidden;
          text-align: left;
          .menu_item_title{
            @include sc(.7rem,#666);
            font-weight: bold;
          }
          .menu_item_description{
            @include sc(.5rem,#999);
            width: 30%;
            overflow: hidden;
          }
        }
        .menu_detail_header_right{
          @include wh(.5rem, 1rem);
          display: block;
          @include bis('../../images/icon_point.png');
          background-size: 100% .4rem;
          background-position: left center;
        }
        .description_tip{
          background-color: #39373a;
          opacity: 0.95;
          @include sc(.5rem, #fff);
          position: absolute;
          top: 1.5rem;
          z-index: 14;
          width: 8rem;
          right: .2rem;
          padding: .5rem .4rem;
          border: 1px;
          border-radius: .2rem;
          span{
            color: #fff;
            line-height: .6rem;
            font-size: .55rem;
          }
        }
        .description_tip::after{
            content: '';
            position: absolute;
            @include wh(.4rem, .4rem);
            background-color: #39373a;
            top: -.5rem;
            right: .7rem;
            transform: rotate(-45deg) translateY(.41rem);
        }
      }
      .menu_detail_list{
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: hidden;
        .menu_detail_link{
          display:flex;
          .menu_food_img{
            margin-right: .4rem;
            img{
              @include wh(2rem, 2rem);
              display: block;
            }
          }
          .menu_food_description{
            width: 100%;
            .food_description_head{
              @include fj;
              margin-bottom: .2rem;
              .description_foodname{
                @include sc(.7rem, #333);
              }
              .attributes_ul{
                display: flex;
                li{
                  font-size: .3rem;
                  height: .6rem;
                  line-height: .35rem;
                  padding: .1rem;
                  border: 1px solid #666;
                  border-radius: 0.3rem;
                  margin-right: .1rem;
                  transform: scale(1);
                  p{
                      white-space: nowrap;
                  }
                }
                .attribute_new{
                  position: absolute;
                  top: 0;
                  left: 0;
                  background-color: #4cd964;
                  @include wh(2rem,2rem);
                  display: flex;
                  align-items: flex-end;
                  transform: rotate(-45deg) translate(-.1rem, -1.5rem);
                  border: none;
                  border-radius: 0;
                  p{
                      @include sc(.4rem, #fff);
                      text-align: center;
                      flex: 1;
                  }
                }
              }
            }
            .food_description_content{
              @include sc(.5rem, #999);
              line-height: .6rem;
              text-align: left;
            }
            .food_description_sale_rating{
              line-height: .8rem;
              text-align: left;
              span{
                @include sc(.5rem, #333);
              }
            }
            .food_activity{
              line-height: .4rem;
              text-align: left;
              span{
                font-size: .3rem;
                border: 1px solid currentColor;
                border-radius: .3rem;
                padding: .08rem;
                display: inline-block;
                transform: scale(1);
                margin-left: -.38rem;
              }
            }
          }
        }
        .menu_detail_footer{
          margin-left: 2.4rem;
          font-size: 0;
          margin-top: .3rem;
          @include fj;
          .food_price{
            span{
                font-family: 'Helvetica Neue',Tahoma,Arial;
            }
            span:nth-of-type(1){
                @include sc(.5rem, #f60);
                margin-right: .05rem;
            }
            span:nth-of-type(2){
                @include sc(.7rem, #f60);
                font-weight: bold;
                margin-right: .3rem;
            }
            span:nth-of-type(3){
                @include sc(.5rem, #666);
            }
          }
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
      opacity: 0;
  }
</style>
