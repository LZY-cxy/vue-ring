!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("v-circle-ring",[],e):"object"==typeof exports?exports["v-circle-ring"]=e():t["v-circle-ring"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"vue-ring",props:{option:{type:Object,default:{width:150,height:150,ringContainerId:"canvas-ring",progressColor:"#1479E1",ringBackgroundColor:"#eee",numerator:186,denominator:200,numColor:"#000",textColor:"#000",numFontSize:16,textFontSize:19,textContent:"部分 / 全部",lineWidth:10}}},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){this.drawRing()},drawRing:function(){function t(t,e,n){o.beginPath(),o.lineWidth=c,o.strokeStyle=d,o.arc(t,e,n,1*Math.PI,2*Math.PI),o.stroke()}function e(t,e,n,r,i){o.beginPath(),o.lineWidth=c,o.strokeStyle=l,o.lineCap="round",o.arc(t,e,n,1*Math.PI,1*Math.PI+i/100*(5*Math.PI/3),!1),o.stroke()}function n(){w>=y&&clearInterval(S),o.clearRect(0,0,2*s,2*a),o.font=""===p?"0px April":p+"px April",o.textAlign="center",o.textBaseline="middle",o.fillStyle=""===h?"#000":h,o.fillText(m+"/"+x,s,a),o.font=""===f?"0px April":f+"px April",o.textAlign="center",o.textBaseline="middle",o.fillStyle=""===v?"#000":v,o.fillText(g,s,a+30),t(s,a,u),e(s,a,u,2*Math.PI/3,w),w+=w/y>.9?.3:w/y>.8?.55:w/y>.7?.75:1}var r=document.getElementById(this.option.ringContainerId),o=r.getContext("2d"),i=window.devicePixelRatio,s=r.width/2,a=r.height/2,u=(this.option.width-this.option.lineWidth)/2,c=this.option.lineWidth,d=this.option.ringBackgroundColor,l=this.option.progressColor,f=this.option.numFontSize,p=this.option.textFontSize,h=this.option.numColor,v=this.option.textColor,g=this.option.textContent,m="",x="",y="";this.option.numerator>this.option.denominator?(x=this.option.denominator,m=x):(x=this.option.denominator,m=this.option.numerator),y=m/x*60;var C=r.getBoundingClientRect(),b=C.width,_=C.height;r.width=i*b,r.height=i*_,o.scale(i,i);var w=0,S=window.setInterval(function(){n()},15)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);r.a.install=function(t){t.component("v-circle-ring",r.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),e.default=r.a},function(t,e,n){"use strict";function r(t){n(3)}var o=n(0),i=n(9),s=n(8),a=r,u=s(o.a,i.a,!1,a,null,null);e.a=u.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("c6c4d924",r,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(x){var i=p++;r=f||(f=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),g.ssrId&&t.setAttribute(m,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},g=null,m="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){h=n,g=o||{};var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=d[s.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],u=i[2],c=i[3],d={id:t+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(t,e){return d.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ring"}},[n("div",{staticClass:"canvas-ring"},[n("canvas",{attrs:{id:t.option.ringContainerId,width:t.option.width,height:t.option.height}},[n("p",[t._v("您的设备当前暂不支持canvas")])])])])},o=[],i={render:r,staticRenderFns:o};e.a=i}])});
//# sourceMappingURL=v-circle-ring.js.map