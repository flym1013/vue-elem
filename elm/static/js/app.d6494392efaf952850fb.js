webpackJsonp([36],{Jr8I:function(e,t){},KOga:function(e,t,n){"use strict";var r=n("//Fk"),o=n.n(r),i=n("mvHQ"),a=n.n(i),u=n("mtWM"),s=n.n(u),c=s.a.create({baseURL:"http://cangdu.org:8001",timeout:1e4,transformRequest:[function(e){return a()(e)}]});s.a.defaults.withCredentials=!0,c.interceptors.request.use(function(e){return e.headers["Content-Type"]="application/json",e},function(e){console.log(e),o.a.reject(e)}),c.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),o.a.reject(e)}),t.a=c},NHnr:function(e,t,n){"use strict";function r(){if("home"===C.$route.path.split("/")[1]||"order"===C.$route.path.split("/")[1]||"search"===C.$route.path.split("/")[1]||"myInformation"===C.$route.path.split("/")[1]){document.removeEventListener("backbutton",r,!1),C.$root.showDeleteTip=!0,clearTimeout(C.timer),C.timer=setTimeout(function(){clearTimeout(C.timer),C.$root.showDeleteTip=!1},1500),document.addEventListener("backbutton",o,!1);window.setTimeout(function(){document.removeEventListener("backbutton",o,!1),document.addEventListener("backbutton",r,!1)},2e3)}else history.go(-1)}function o(){navigator.app.exitApp()}Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view"),this._v(" "),t("transition",{attrs:{name:"fade"}},[this.$root.showDeleteTip?t("p",{staticClass:"show_delete_tip"},[this._v("再次点击退出 app")]):this._e()])],1)},staticRenderFns:[]},u=n("VU/8")({name:"app"},a,!1,function(e){n("kQGk")},null,null).exports,s=n("/ocq");i.a.use(s.a);var c,l=new s.a({routes:[{path:"/",redirect:"/home"},{path:"/loginPage",component:function(){return Promise.all([n.e(0),n.e(34)]).then(n.bind(null,"2bX7"))}},{path:"/forgetPage",component:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,"XeHu"))}},{path:"/home",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"X6d5"))}},{path:"/selectLoction",component:function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"+7v2"))},meta:{keepAlive:!1}},{path:"/city/:cityid",component:function(){return Promise.all([n.e(0),n.e(29)]).then(n.bind(null,"+l6I"))},meta:{keepAlive:!1}},{path:"/foodCategory",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"gH4G"))}},{path:"/shopDetail",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"7AR5"))}},{path:"/shopIntroduce",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"t7zj"))}},{path:"/foodSafe",component:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"F6HU"))}},{path:"/foodDetail",component:function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,"Vnen"))}},{path:"/confirmOrder",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"JVEZ"))}},{path:"/search",component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"vCr1"))}},{path:"/order",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"9zw/"))}},{path:"/orderRemark",component:function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,"NMNj"))}},{path:"/invoice",component:function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"xboD"))}},{path:"/choosedAddress",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"Upps"))}},{path:"/payment",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"Vpxt"))}},{path:"/orderDetail",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"tsRO"))}},{path:"/myInformation",component:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,"pee1"))}},{path:"/myInformation/userInfo",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"uqAk"))}},{path:"/myInformation/editUsername",component:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,"e4MJ"))}},{path:"/myInformation/editAddress",component:function(){return Promise.all([n.e(0),n.e(28)]).then(n.bind(null,"vnhw"))},meta:{keepAlive:!0}},{path:"/myInformation/addNewAddress",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"NptX"))},meta:{keepAlive:!0}},{path:"/myInformation/addAddressDetail",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"KV7U"))},meta:{keepAlive:!0}},{path:"/balance",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"bOnn"))}},{path:"/balanceDetail",component:function(){return Promise.all([n.e(0),n.e(23)]).then(n.bind(null,"4wjT"))}},{path:"/points",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"R1wA"))}},{path:"/pointsDetail",component:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"1T9Y"))}},{path:"/discount",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"mCzk"))}},{path:"/redEnvelopDetail",component:function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,"kBSO"))}},{path:"/vouchersDetail",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"9Lbf"))}},{path:"/overdueRedEnvelope",component:function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,"aJH8"))}},{path:"/exchangeRedEnvelop",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"EpHq"))}},{path:"/recommend",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"fduN"))}}]}),d=(n("uySu"),n("7QTg")),m=n.n(d),p=(n("UAgs"),n("NYxO")),f=n("bOdI"),h=n.n(f),b=n("Gu7T"),v=n.n(b),g=n("woOf"),_=n.n(g),O=n("Dd8w"),A=n.n(O),E=n("R2SV"),j=(c={},h()(c,"GET_USERINFO",function(e,t){e.userInfo&&e.userInfo.username!==t.username||e.login&&(t.message?e.userInfo=null:e.userInfo=A()({},t))}),h()(c,"RECORD_ADDRESS",function(e,t){var n=t.latitude,r=t.longitude;e.latitude=n,e.longitude=r}),h()(c,"SAVE_GEOHASH",function(e,t){e.geohash=t}),h()(c,"ADD_CART",function(e,t){var n=t.shopid,r=t.category_id,o=t.item_id,i=t.food_id,a=t.name,u=t.price,s=t.specs,c=t.packing_fee,l=t.sku_id,d=t.stock,m=e.cartList,p=m[n]=m[n]||{},f=p[r]=p[r]||{},h=f[o]=f[o]||{};h[i]?h[i].num++:h[i]={num:1,id:i,name:a,price:u,specs:s,packing_fee:c,sku_id:l,stock:d},e.cartList=A()({},m),Object(E.d)("buyCart",e.cartList)}),h()(c,"REDUCE_CART",function(e,t){var n=t.shopid,r=t.category_id,o=t.item_id,i=t.food_id,a=(t.name,t.price,t.specs,e.cartList),u=((a[n]||{})[r]||{})[o]||{};u&&u[i]&&(u[i].num>0?(u[i].num--,e.cartList=A()({},a),Object(E.d)("buyCart",e.cartList)):u[i]=null)}),h()(c,"INIT_BUYCART",function(e){var t=Object(E.b)("buyCart");t&&(e.cartList=JSON.parse(t))}),h()(c,"CLEAR_CART",function(e,t){e.cartList[t]=null,e.cartList=A()({},e.cartList),Object(E.d)("buyCart",e.cartList)}),h()(c,"RECORD_USERINFO",function(e,t){e.userInfo=t,e.login=!0,Object(E.d)("user_id",t.user_id)}),h()(c,"SAVE_AVANDER",function(e,t){e.imgPath=t}),h()(c,"OUT_LOGIN",function(e){e.userInfo={},e.login=!1,Object(E.c)("user_id")}),h()(c,"RETSET_NAME",function(e,t){e.userInfo=_()({},e.userInfo,{username:t})}),h()(c,"SAVE_ADDRESS",function(e,t){e.removeAddress=t}),h()(c,"ADD_ADDRESS",function(e,t){e.removeAddress=[t].concat(v()(e.removeAddress))}),h()(c,"SAVE_ADDDETAIL",function(e,t){e.addAddress=t}),h()(c,"RECORD_SHOPDETAIL",function(e,t){e.shopDetail=t}),h()(c,"CHOOSE_ADDRESS",function(e,t){var n=t.address,r=t.index;e.choosedAddress=n,e.addressIndex=r}),h()(c,"NEED_VALIDATION",function(e,t){e.needValidation=t}),h()(c,"SAVE_CART_ID_SIG",function(e,t){var n=t.cart_id,r=t.sig;e.cart_id=n,e.sig=r}),h()(c,"SAVE_ORDER_PARAM",function(e,t){e.orderParam=t}),h()(c,"ORDER_SUCCESS",function(e,t){e.cartPrice=null,e.orderMessage=t}),h()(c,"SAVE_ORDER",function(e,t){e.orderDetail=t}),h()(c,"SAVE_SHOPID",function(e,t){e.shopid=t}),h()(c,"CONFIRM_REMARK",function(e,t){var n=t.remarkText,r=t.inputText;e.remarkText=n,e.inputText=r}),h()(c,"CONFIRM_INVOICE",function(e,t){var n=t.invoice,r=t.invoiceTxt;e.invoice=n,e.invoiceTxt=r}),c),D=n("Xxa5"),I=n.n(D),P=n("exGp"),R=n.n(P),S=n("i84Q"),w={getUserInfo:function(e){var t=this,n=e.commit;e.state;return R()(I.a.mark(function e(){var r;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.r)({user_id:Object(E.b)("user_id")});case 2:r=e.sent,n("GET_USERINFO",r.data);case 4:case"end":return e.stop()}},e,t)}))()},saveAddress:function(e){var t=this,n=e.commit,r=e.state;return R()(I.a.mark(function e(){var o;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.removeAddress.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(S.g)({user_id:r.userInfo.user_id});case 4:o=e.sent,n("SAVE_ADDRESS",o.data);case 6:case"end":return e.stop()}},e,t)}))()}},k=n("UjVw"),T=n.n(k);i.a.use(p.a);var x=new p.a.Store({state:{userInfo:null,latitude:null,longitude:null,cartList:{},shopDetail:null,imgPath:null,removeAddress:[],login:!0,newAddress:[],addressIndex:null,orderMessage:null,addAddress:"",remarkText:null,inputText:"",invoice:!1,orderDetail:null,invoiceTxt:null,choosedAddress:null,cartPrice:null,orderParam:null,geohash:""},getters:T.a,actions:w,mutations:j}),y=n("gNVM"),L=n.n(y);n("Jr8I");i.a.config.productionTip=!1,i.a.use(m.a),i.a.use(L.a);var C=new i.a({router:l,store:x,el:"#app",render:function(e){return e(u)},data:function(){return{showDeleteTip:!1}}});i.a.use({vm:C}),document.addEventListener("deviceready",function(){document.addEventListener("backbutton",r,!1)},!1)},R2SV:function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return s});var r=n("mvHQ"),o=n.n(r),i=function(e,t){e&&("string"!=typeof t&&(t=o()(t)),window.localStorage.setItem(e,t))},a=function(e){if(e)return window.localStorage.getItem(e)},u=function(e){e&&window.localStorage.removeItem(e)},s=function(e){var t=void 0;if(!e)return"http://test.fe.ptdev.cn/elm/elmlogo.jpeg";t=-1!==e.indexOf("jpeg")?".jpeg":".png";return"https://fuss10.elemecdn.com"+("/"+e.substr(0,1)+"/"+e.substr(1,2)+"/"+e.substr(3)+t)}},UAgs:function(e,t){!function(e,t){var n=e.documentElement,r="orientationchange"in window?"orientationchange":"resize",o=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/320*20+"px")};e.addEventListener&&(t.addEventListener(r,o,!1),e.addEventListener("DOMContentLoaded",o,!1))}(document,window)},UjVw:function(e,t){},i84Q:function(e,t,n){"use strict";t.z=function(e){return Object(r.a)({url:"/v2/index_entry",method:"get",params:e})},t.y=function(e){return Object(r.a)({url:"/v2/pois/"+e,method:"get",params:e})},t.D=function(e){return Object(r.a)({url:"/shopping/restaurants",method:"get",params:{latitude:e.latitude,longitude:e.longitude,"extras[]":"activities","restaurant_category_ids[]":e.restaurant_category_ids,"delivery_mode[]":e.delivery_mode+e.support_ids,order_by:e.order_by}})},t.w=function(e){return Object(r.a)({url:"/promotion/v2/users/"+e.user_id+"/hongbaos",method:"get",params:{limit:e.limit,offset:e.offset}})},t.u=function(e){return Object(r.a)({url:"/promotion/v2/users/"+e.user_id+"/expired_hongbaos",method:"get",params:{limit:e.limit,offset:e.offset}})},t.e=function(e){return Object(r.a)({url:"/v1/users/"+e.user_id+"/hongbao/exchange",method:"post",data:e})},t.o=function(e){return Object(r.a)({url:"/v1/captchas",method:"post",data:e})},t.x=function(e){return Object(r.a)({url:"/v2/login",method:"post",data:e})},t.r=function(e){return Object(r.a)({url:"/v1/user",method:"get",params:e})},t.n=function(e){return Object(r.a)({url:"/v1/cities",method:"get",params:e})},t.p=function(e){return Object(r.a)({url:"/v1/cities/"+e,method:"get",params:e})},t.B=function(e){return Object(r.a)({url:"v1/pois",method:"get",params:e})},t.h=function(e){return Object(r.a)({url:"shopping/v2/restaurant/category",method:"get",params:e})},t.q=function(e){return Object(r.a)({url:"shopping/v1/restaurants/delivery_modes",method:"get",params:e})},t.f=function(e){return Object(r.a)({url:"shopping/v1/restaurants/activity_attributes",method:"get",params:e})},t.l=function(e){return Object(r.a)({url:"shopping/restaurant/"+e.shopid,method:"get",params:{latitude:e.latitude,longitude:e.longitude+"&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics"}})},t.m=function(e){return Object(r.a)({url:"shopping/v2/menu",method:"get",params:e})},t.i=function(e){return Object(r.a)({url:"ugc/v2/restaurants/"+e.restaurant_id+"/ratings",method:"get",params:{has_content:!0,tag_name:e.tag_name,offset:e.offset,limit:e.limit}})},t.j=function(e){return Object(r.a)({url:"ugc/v2/restaurants/"+e.restaurant_id+"/ratings/scores",method:"get",params:{has_content:!0,tag_name:e.tag_name,offset:e.offset,limit:e.limit}})},t.k=function(e){return Object(r.a)({url:"ugc/v2/restaurants/"+e.restaurant_id+"/ratings/tags",method:"get",params:{has_content:!0,tag_name:e.tag_name,offset:e.offset,limit:e.limit}})},t.g=function(e){return Object(r.a)({url:"/v1/users/"+e.user_id+"/addresses",method:"get"})},t.d=function(e){return Object(r.a)({url:"/v1/users/"+e.user_id+"/addresses/"+e.address_id,method:"DELETE"})},t.a=function(e){return Object(r.a)({url:"/v1/users/"+e.user_id+"/addresses",method:"post",data:e})},t.b=function(e){return Object(r.a)({url:"/v2/changepassword",method:"post",data:e})},t.E=function(e){return Object(r.a)({url:"/v2/signout",method:"get"})},t.c=function(e){return Object(r.a)({url:"/v1/carts/checkout",method:"post",data:e})},t.A=function(e){return Object(r.a)({url:"/v1/users/"+e.user_id+"/carts/"+e.cart_id+"/orders",method:"post",data:e})},t.v=function(e){return Object(r.a)({url:"/v1/carts/"+e.cart_id+"/remarks",method:"get",params:{sig:e.sig}})},t.t=function(e){return Object(r.a)({url:"/bos/v2/users/"+e.user_id+"/orders",method:"get",params:{limit:1e4,offset:e.offset}})},t.s=function(e){return Object(r.a)({url:"/bos/v1/users/"+e.user_id+"/orders/"+e.order_id+"/snapshot",method:"get"})},t.C=function(e){return Object(r.a)({url:"/v4/restaurants",method:"get",params:e})};var r=n("KOga")},kQGk:function(e,t){},uySu:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d6494392efaf952850fb.js.map