webpackJsonp([33],{aJH8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Xxa5"),a=s.n(i),n=s("exGp"),r=s.n(n),c=s("hxP8"),o=s("i84Q"),_={data:function(){return{redEnvelopList:[]}},components:{headerTop:c.a},created:function(){this.getOverduRedEnvelope()},methods:{getOverduRedEnvelope:function(){var t=this;return r()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.u)({user_id:1,limit:20,offset:0});case 2:s=e.sent,t.redEnvelopList=s.data;case 4:case"end":return e.stop()}},e,t)}))()}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("header-Top",{attrs:{"head-title":"历史红包",goBack:"true"}}),t._v(" "),s("section",{staticClass:"redpack-container"},[s("ul",{staticClass:"redpack-list-ul"},t._l(t.redEnvelopList,function(e){return s("li",{staticClass:"redpack-list-li"},[s("section",{staticClass:"list-item"},[s("div",{staticClass:"list-item-left"},[s("span",[t._v("¥")]),t._v(" "),s("span",[t._v(t._s(String(e.amount).split(".")[0]))]),t._v(" "),s("span",[t._v(".")]),t._v(" "),s("span",[t._v(t._s(String(e.amount).split(".")[1]||0))]),t._v(" "),s("p",[t._v(t._s(e.description_map.sum_condition))])]),t._v(" "),s("div",{staticClass:"list-item-right"},[s("h4",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v(t._s(e.description_map.validity_periods))]),t._v(" "),s("p",[t._v(t._s(e.description_map.phone))])]),t._v(" "),s("div",{staticClass:"list-item-time"},[t._v("\n            已过期\n          ")])]),t._v(" "),e.limit_map?s("div",{staticClass:"list-item-footer"},[s("p",[t._v(t._s(e.limit_map.restaurant_flavor_ids))])]):t._e()])}))])],1)},staticRenderFns:[]},v=s("VU/8")(_,l,!1,function(t){s("jN2D")},"data-v-1685c480",null);e.default=v.exports},jN2D:function(t,e){}});
//# sourceMappingURL=33.97b06f0cc3f1aae0b717.js.map