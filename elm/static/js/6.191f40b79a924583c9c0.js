webpackJsonp([6],{"J/v0":function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCFJREFUWAnNmUtsU0cUhs9cQkKCAwgJpxgJqWqXEQS84CHaIpZsKAhKu2JNUwISsAWFLSBBxGPNihYqqmxYIqCIx8I8qi5bIVXCYLdSW2ISHIiH84091sW5wQ8w10e69r3jmTnfnczj/CdGWrT0WO6zkpVt2jwt1qbEmJTec2FZLctqWVbvM4GR8czIwJ/ulyY/TDP1N56fSE5NT/5gxG63VgabaWuM/G7F/NLb3Xfm9t7+fKNtGwLcfDafeP7aHrQih3RkEnTevyCwX37aY9av7JZP+ufJsoWBu7SO/POiJH/r9WxiRu7+NS03HxftxMtS2ZcxBb05sajLnLw+nCzUA60LuHYst0NH65yCDdDZls8XyLer+2TNivkyr27rsvsZpX7w5JX8+GhSrv3xslxoTE5H9fv7IwNXygXRn3O6sNaa9Fj+iPZ9VOHMUKpbDmxKyKrl86N7arD0t6ev5NStgjzMTovOUasAo5mR5DGj91FdRAJuuGR7i9n8BSt2VxAYe/CLhPluqC+qfctlFx9OyslfC7ZUsjqQ5nJPKrnnzjdmqrbDoLaAkfNwiZ7Ant225IPD4ZMXpm98MBDOp/qu5ZkFWP6z2l00vLB7qVmni6BdRt/48JD4rvX1FnFlQfys+5Z7u3bChUHu6UofHv/P6r6q01J2hhdOdQTZSiqr1TDnWoFbezonXM0avvDJYoQBFt9HFZB9jq2E1fqhF4R39q5vfOIbBsdSqewAOSF0dA9RxlYSl3nfsMAEhwMsFqf2KXmCTfh997n3eTl8wwALR2oV0JrS1zxwQsRtnoHzHpaAqEQn5iBnK8dX3AYDLDDBFlRCJvlKD/5Gz9Z2vgQMsOADNuZgmodWthXatcNCLOlAJ6QLMgmZOsWqLMoWVCJhF8t1CiCxpTON0rv0xo1gtTCCstnTodH69/e7EHOWxxBLSoMpcXGY+5hVNZ4CzwJblwY4TxWxnzB95ZLoeTjXm9bi+5FrtH5te/8MCwYbiwTl5TQE351g6BlnysYicYAInE6xKouysVwygBGTdYqhBCuWUckh4zzcUGmI+orbYECmwgFbgOJHVKNbkYZxGwywwASb2xFR/IChW+M2z+CZHCDpCF0sBUQ1ujUuw7cT9srimBTEAZIr0fDhBGCI6rjM+4bF528cIEDkSnQUcyh+RPXHNnxWsg05x1IBcHGXh+lo2QkkelSJR0lHHL76v338b/s3b3zgq5wCkdGwJobprRGkwCWNTud/Ih2B4j++dXFLGpm+6hmHA3CFom4rmp/J7E/urk0iVeeg74wKJHJoQEMUfzvmJH3St4dzPiMyXLNG0IN2dPrNQ/LdsQnMMORcKWDUFwInnAKmHeGSTwEzzzjn25YCDoOSjiALgdBHt4Z/q3fP2dq2JHqU84/1b4g3B4s+pKLE0ioAAAAASUVORK5CYII="},Upps:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("Xxa5"),a=t.n(n),r=t("exGp"),i=t.n(r),d=t("Dd8w"),o=t.n(d),l=t("hxP8"),c=t("i84Q"),u=t("NYxO"),v={data:function(){return{addressList:[],deliverable:[],deliverdisable:[],id:null,sig:null,showAlert:!1,alertText:null}},created:function(){this.init()},computed:o()({},Object(u.d)(["userInfo","addressIndex","newAddress"]),{defaultIndex:function(){return this.addressIndex?this.addressIndex:0}}),components:{headerTop:l.a},watch:{userInfo:function(e){e&&e.user_id&&this.initData()},newAddress:function(e){this.initData()}},methods:o()({},Object(u.c)(["CHOOSE_ADDRESS"]),{init:function(){var e=this;return i()(a.a.mark(function s(){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(e.addressList=[],e.deliverable=[],e.deliverdisable=[],!e.userInfo||!e.userInfo.user_id){s.next=7;break}return s.next=6,e.getAddress(e.userInfo.user_id);case 6:e.addressList.forEach(function(s){s.is_deliverable?e.deliverable.push(s):e.deliverdisable.push(s)});case 7:case"end":return s.stop()}},s,e)}))()},chooseAddress:function(e,s){this.CHOOSE_ADDRESS({address:e,index:s}),this.$router.go(-1)},iconColor:function(e){switch(e){case"公司":return"#4cd964";case"学校":return"#3190e8"}},getAddress:function(e){var s=this;return i()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.g)({user_id:e});case 2:n=t.sent,s.addressList=n.data;case 4:case"end":return t.stop()}},t,s)}))()}})},_={render:function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{staticClass:"page"},[n("header-Top",{attrs:{"head-title":"选择地址",goBack:"true"}}),e._v(" "),n("section",{staticClass:"scroll_container"},[n("section",{staticClass:"list_cotainer"},[n("ul",{staticClass:"deliverable_address"},e._l(e.deliverable,function(s,t){return n("li",{on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.chooseAddress(s,t)}}},[n("svg",{staticClass:"choosed_address",class:{default_address:e.defaultIndex==t}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})]),e._v(" "),n("div",{},[n("header",[n("span",[e._v(e._s(s.name))]),e._v(" "),n("span",[e._v(e._s(1==s.sex?"先生":"女士"))]),e._v(" "),n("span",[e._v(e._s(s.phone))])]),e._v(" "),n("div",{staticClass:"address_detail ellipsis"},[s.tag?n("span",{style:{backgroundColor:e.iconColor(s.tag)}},[e._v(e._s(s.tag))]):e._e(),e._v(" "),n("p",[e._v(e._s(s.address_detail))])])])])})),e._v(" "),e.deliverdisable.length?n("section",{attrs:{id:"out_delivery"}},[n("header",{staticClass:"out_header"},[e._v("以下地址超出配送范围")]),e._v(" "),n("ul",{staticClass:"deliverable_address"},e._l(e.deliverdisable,function(s,t){return n("li",[n("svg",{staticClass:"choosed_address"},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#select"}})]),e._v(" "),n("div",[n("header",[n("span",[e._v(e._s(s.name))]),e._v(" "),n("span",[e._v(e._s(1==s.sex?"先生":"女士"))]),e._v(" "),n("span",[e._v(e._s(s.phone))])]),e._v(" "),n("div",{staticClass:"address_detail ellipsis"},[s.tag?n("span",{style:{backgroundColor:"#ccc",color:"#fff"}},[e._v(e._s(s.tag))]):e._e(),e._v(" "),n("p",[e._v(e._s(s.address_detail))])])])])}))]):e._e()])]),e._v(" "),n("router-link",{staticClass:"add_icon_footer",attrs:{to:"/myInformation/addNewAddress"}},[n("img",{attrs:{src:t("J/v0"),height:"24",width:"24"}}),e._v(" "),n("span",[e._v("新增收货地址")])])],1)},staticRenderFns:[]},f=t("VU/8")(v,_,!1,function(e){t("kBoa")},"data-v-aa2cd380",null);s.default=f.exports},kBoa:function(e,s){}});
//# sourceMappingURL=6.191f40b79a924583c9c0.js.map