webpackJsonp([12],{"+S6r":function(t,e){},vCr1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Xxa5"),r=s.n(a),i=s("exGp"),n=s.n(i),c=s("Dd8w"),o=s.n(c),l=s("FPXY"),h=s("hxP8"),u=s("i84Q"),_=s("Uoa1"),p=s("NYxO"),v=s("R2SV"),y={data:function(){return{searchValue:null,restaurantList:[],showAlert:!1,alertText:null,imgBaseUrl:"http://cangdu.org:8001/img/",searchHistory:[],showHistory:!0,emptyResult:!1}},created:function(){Object(v.b)("searchHistory")&&(this.searchHistory=JSON.parse(Object(v.b)("searchHistory")))},computed:o()({},Object(p.d)(["geohash"])),components:{footGuide:l.a,headerTop:h.a,alertTip:_.a},methods:{searchTarget:function(t){var e=this;return n()(r.a.mark(function s(){var a,i;return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(e.$root.showDeleteTip=!0,clearTimeout(e.timer),e.timer=setTimeout(function(){clearTimeout(e.timer),e.$root.showDeleteTip=!1},1500),!t){s.next=7;break}e.searchValue=t,s.next=9;break;case 7:if(e.searchValue){s.next=9;break}return s.abrupt("return");case 9:return e.showHistory=!1,s.next=12,e.searchRestaurants();case 12:e.emptyResult=!e.restaurantList.length,(a=Object(v.b)("searchHistory"))?(i=!1,e.searchHistory=JSON.parse(a),e.searchHistory.forEach(function(t){t===e.searchValue&&(i=!0)}),i||e.searchHistory.push(e.searchValue)):e.searchHistory.push(e.searchValue),Object(v.d)("searchHistory",e.searchHistory);case 16:case"end":return s.stop()}},s,e)}))()},closeTipFun:function(){this.showAlert=!1},deleteHistory:function(t){this.searchHistory.splice(t,1),Object(v.d)("searchHistory",this.searchHistory)},clearAllHistory:function(){this.searchHistory=[],Object(v.d)("searchHistory",this.searchHistory)},checkInput:function(){""===this.searchValue&&(this.showHistory=!0,this.restaurantList=[],this.emptyResult=!1)},searchRestaurants:function(){var t=this;return n()(r.a.mark(function e(){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.geohash||(t.showAlert=!0,t.alertText="自动获取位置失败"),e.next=3,Object(u.C)({geohash:t.geohash,keyword:t.searchValue});case 3:s=e.sent,t.restaurantList=s.data;case 5:case"end":return e.stop()}},e,t)}))()}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"paddingTop search_page"},[s("header-Top",{attrs:{"head-title":"搜索",goBack:"true"}}),t._v(" "),s("form",{staticClass:"search_form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search_input",attrs:{type:"search",name:"search",placeholder:"请输入商家和美食名称"},domProps:{value:t.searchValue},on:{input:[function(e){e.target.composing||(t.searchValue=e.target.value)},t.checkInput]}}),t._v(" "),s("input",{staticClass:"search_submit",attrs:{type:"submit",name:"submit",value:"提交"},on:{click:function(e){e.preventDefault(),t.searchTarget("")}}})]),t._v(" "),t.restaurantList.length?s("section",[s("h4",{staticClass:"title_restaurant"},[t._v("商家")]),t._v(" "),s("ul",{staticClass:"list_container"},t._l(t.restaurantList,function(e){return s("router-link",{key:e.id,staticClass:"list_li",attrs:{to:{path:"/shopDetail",query:{id:e.id}},tag:"li"}},[s("section",{staticClass:"item_left"},[s("img",{staticClass:"restaurant_img",attrs:{src:t.imgBaseUrl+e.image_path}})]),t._v(" "),s("section",{staticClass:"item_right"},[s("div",{staticClass:"item_right_text"},[s("p",[s("span",[t._v(t._s(e.name))]),t._v(" "),s("svg",{staticClass:"pay_icon",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"24",height:"14"}},[s("polygon",{staticStyle:{fill:"none",stroke:"#FF6000","stroke-width":"1"},attrs:{points:"0,14 4,0 24,0 20,14"}}),t._v(" "),s("line",{staticStyle:{stroke:"#FF6000","stroke-width":"1.5"},attrs:{x1:"1.5",y1:"12",x2:"20",y2:"12"}}),t._v(" "),s("text",{staticStyle:{fill:"#FF6000","font-size":"9","font-weight":"bold"},attrs:{x:"3.5",y:"9"}},[t._v("支付")])])]),t._v(" "),s("p",[t._v("月售 "+t._s(e.month_sales||e.recent_order_num)+" 单")]),t._v(" "),s("p",[t._v(t._s(e.delivery_fee||e.float_minimum_order_amount)+" 元起送 / 距离"+t._s(e.distance))])]),t._v(" "),s("ul",{staticClass:"item_right_detail"},t._l(e.restaurant_activity,function(e){return s("li",{key:e.id},[s("span",{staticClass:"activities_icon",style:{backgroundColor:"#"+e.icon_color}},[t._v(t._s(e.icon_name))]),t._v(" "),s("span",[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"only_phone"},[t._v("(手机客户端专享)")])])}))])])}))]):t._e(),t._v(" "),t.searchHistory.length&&t.showHistory?s("section",{staticClass:"search_history"},[s("h4",{staticClass:"title_restaurant"},[t._v("搜索历史")]),t._v(" "),s("ul",t._l(t.searchHistory,function(e,a){return s("li",{key:a,staticClass:"history_list"},[s("span",{staticClass:"history_text ellipsis",on:{click:function(s){t.searchTarget(e)}}},[t._v(t._s(e))]),t._v(" "),s("svg",{staticClass:"delete_icon",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},on:{click:function(e){t.deleteHistory(a)}}},[s("line",{staticStyle:{stroke:"#999","stroke-width":"3"},attrs:{x1:"8",y1:"8",x2:"18",y2:"18"}}),t._v(" "),s("line",{staticStyle:{stroke:"#999","stroke-width":"3"},attrs:{x1:"18",y1:"8",x2:"8",y2:"18"}})])])})),t._v(" "),s("footer",{staticClass:"clear_history",on:{click:t.clearAllHistory}},[t._v("清空搜索历史")])]):t._e(),t._v(" "),s("foot-guide"),t._v(" "),t.emptyResult?s("div",{staticClass:"search_none"},[t._v("很抱歉！无搜索结果")]):t._e(),t._v(" "),t.showAlert?s("alert-tip",{attrs:{alertText:t.alertText},on:{closeTip:t.closeTipFun}}):t._e()],1)},staticRenderFns:[]},m=s("VU/8")(y,d,!1,function(t){s("+S6r")},"data-v-eddf929a",null);e.default=m.exports}});
//# sourceMappingURL=12.39b64c83098e56fd4dc2.js.map