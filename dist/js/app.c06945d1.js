(function(e){function t(t){for(var r,c,i=t[0],a=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],o[c]&&d.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"221fc2cd"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=c(e),u=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+u+")");c.type=r,c.request=u,n[1](c)}o[e]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:a})},12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b78":function(e,t,n){"use strict";var r=n("4a14"),o=n.n(r);o.a},1:function(e,t){},2:function(e,t){},"4a14":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},u=[],c=(n("7c55"),n("2877")),i={},a=Object(c["a"])(i,o,u,!1,null,null,null),s=a.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[e._v("通过getter获取:"+e._s(e.getterAge))]),r("h1",[e._v(e._s(e.count))]),r("button",{on:{click:function(t){return e.handlerAdd({num:2})}}},[e._v("增加")]),r("button",{on:{click:function(t){return e.handlerSub({num:2})}}},[e._v("减少")]),r("button",{on:{click:function(t){return e.handlerAddasy()}}},[e._v("异步增加(2s后执行)")]),r("button",{on:{click:function(t){return e.handlerSubasy()}}},[e._v("异步减少(2s后执行)")])])},d=[],p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),b=n("2f62");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(p["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h={name:"home",computed:g({},Object(b["e"])(["count"]),{},Object(b["c"])(["getterAge"])),methods:g({},Object(b["d"])({handlerAdd:"addCount",handlerSub:"subCount"}),{},Object(b["b"])({handlerAddasy:"addCountasy",handlerSubasy:"subCountasy"}))},m=h,y=(n("0b78"),Object(c["a"])(m,f,d,!1,null,"7e93718e",null)),O=y.exports;r["a"].use(l["a"]);var w=new l["a"]({routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("24f8");r["a"].use(b["a"]);var j=new b["a"].Store({state:{count:0,age:0},mutations:{addCount:function(e,t){return e.count+=t.num},subCount:function(e,t){return e.count-=t.num}},actions:{addCountasy:function(e){setTimeout(function(){e.commit("addCount",{num:2})},2e3)},subCountasy:function(e){setTimeout(function(){e.commit("subCount",{num:2})},2e3)}},getters:{getterAge:function(e){return e.age+=10}}}),_=n("9483");Object(_["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:w,store:j,render:function(e){return e(s)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c06945d1.js.map