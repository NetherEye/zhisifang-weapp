(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tel/tel"],{"0045":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));a(n("784f")),a(n("65d7"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,a,c,i){try{var o=t[c](i),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function o(t){c(i,r,a,o,u,"next",t)}function u(t){c(i,r,a,o,u,"throw",t)}o(void 0)})}}var o=n("bec1"),u={data:function(){return{}},onLoad:function(){var e=i(r.default.mark(function e(){var n,a,c,i;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.isLogin();case 2:if(n=e.sent,n){e.next=8;break}return e.next=6,o.logining();case 6:a=e.sent,a||(c=getCurrentPages(),i=c[c.length-1].route.slice(c[c.length-1].route.lastIndexOf("/")+1),t.redirectTo({url:"../userInfoAuth/userInfoAuth?goBack="+i}));case 8:return e.t0=this.$store,e.next=11,o.getMoneyHide();case 11:e.t1=e.sent,e.t0.commit.call(e.t0,"setMoneyHide",e.t1);case 13:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),onShow:function(){},methods:{contact:function(t){console.log(t)}},watch:{}};e.default=u}).call(this,n("543d")["default"])},"06bd":function(t,e,n){"use strict";n.r(e);var r=n("0045"),a=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=a.a},"802a":function(t,e,n){},"9c39":function(t,e,n){"use strict";var r=n("802a"),a=n.n(r);a.a},b2ce:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"card"},[n("image",{attrs:{src:"../../static/image/kf.png",mode:""}}),t._m(0),n("button",{staticStyle:{opacity:"0",width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},attrs:{type:"primary","open-type":"contact",eventid:"15151efc-0"},on:{contact:t.contact}})],1),t._m(1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"card-right"},[n("text",[t._v("微信客服：点击可直接联系知四方客服")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"card"},[n("image",{attrs:{src:"../../static/image/kf2.png",mode:""}}),n("view",{staticClass:"card-right"},[n("text",[t._v("客服热线：0854-235498787")]),n("text",[t._v("工作时间：9：00-17：00")])])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},bd4e:function(t,e,n){"use strict";n.r(e);var r=n("b2ce"),a=n("06bd");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("9c39");var i=n("2877"),o=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},f0d5:function(t,e,n){"use strict";n("ce60");var r=c(n("b0ce")),a=c(n("bd4e"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(a.default))}},[["f0d5","common/runtime","common/vendor"]]]);