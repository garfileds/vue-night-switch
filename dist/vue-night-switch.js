!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-night-switch.js"]=e():t["vue-night-switch.js"]=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),a=i(o),r=n(3),s=i(r),A=n(8),d="@@Night",h=function(){if(!this.binded){this.binded=!0;var t=this,e=t.el,n=document.createElement("div"),i=document.createElement("div");a.default.addClassName(n,"vn-night","vn-linear","vn-none"),a.default.addClassName(i,"vn-daytime"),n.innerHTML=s.default.vnNightHtml,i.innerHTML=s.default.vnDaytimeHtml,document.body.appendChild(n),document.body.appendChild(i),t.nightTarget=e;var o=function(){var e=document.querySelector(".vn-daytime"),n=document.querySelector(".vn-night");t.isNight=!t.isNight,a.default.toggleClass(e,"vn-none"),a.default.toggleClass(n,"vn-none"),a.default.toggleClass(document.body,["vn-night-show","vn-daytime-show"]),t.vm.$nextTick(function(){setTimeout(function(){a.default.toggleClass(document.body,"vn-night-body")},500)})};t.nightSwitchListener=o,t.isNight=!1,A(e),a.default.insertStyle(s.default.cssText),e.addEventListener("click",o)}};e.default={bind:function(t,e,n){t[d]={el:t,vm:n.context};var i=arguments;t[d].vm.$on("hook:mounted",function(){t[d].vm.$nextTick(function(){a.default.isAttached(t[d].el)&&h.call(t[d],i)})}),t[d].bindTryCount=0;!function e(){++t[d].bindTryCount>10||(a.default.isAttached(t[d].el)?h.call(t[d],i):setTimeout(e,50))}()},unbind:function(t){t[d].nightTarget.removeEventListener("click",t[d].nightSwtichListener)}}},function(t,e,n){n(13);var i=n(11)(n(2),n(12),null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"night-switch",data:function(){return{isNight:!1}},methods:{switchNight:function(){this.isNight=!this.isNight}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=["body {","        position: relative","        }","        /* night */","        .vn-night-body {","            color: #d3d3d3;","            background: #2b3131!important;","        }","        /*night-background*/","        .vn-night-show .vn-night{","            position: fixed;","            top: 0;","            left: 0;","            bottom: 0;","            right: 0;","            animation: bg-ani 0.5s, disappear-ani 0.5s 1.5s;","            animation-fill-mode: forwards, forwards;","        }","        .vn-night.vn-none {","            display: none;","        }","        .vn-linear{","            background: -ms-linear-gradient(top, #000,  #00002F);","            background:-moz-linear-gradient(top, #000,#00002F);","            background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#000), to(#00002F));","            background: -webkit-linear-gradient(top, #000, #00002F);","            background: -o-linear-gradient(top, #000, #00002F);","        }","        /*star*/","        .vn-night-show .vn-night .star{position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 98;}","        .vn-night-show .vn-night .star>div{position: absolute; }","        .vn-night-show .vn-night .star>div:nth-child(5n){ width:2px; height: 2px; border-radius: 2px; background:#ddd; -webkit-animation:shine 1s linear 1s infinite; animation:shine 1s linear 1s infinite;}","        .vn-night-show .vn-night .star>div:nth-child(5n+1){ width:4px; height: 4px; border-radius: 4px; background:#fff; -webkit-animation:shine 1s linear 2s infinite; animation:shine 1s linear 2s infinite;}","        .vn-night-show .vn-night .star>div:nth-child(5n+2){ width:2px; height: 2px; border-radius: 2px; background:#fff; -webkit-animation:shine 1s linear 3s infinite; animation:shine 1s linear 3s infinite;}","        .vn-night-show .vn-night .star>div:nth-child(5n+3){ width:4px; height: 4px; border-radius: 4px; background:#fff; -webkit-animation:shine 1s linear 1.5s infinite; animation:shine 1s linear 1.5s infinite;}","        .vn-night-show .vn-night .star>div:nth-child(5n+4){ width:1px; height: 1px; border-radius: 2px; background:#fff; -webkit-animation:shine 1s linear 2.5s infinite; animation:shine 1s linear 2.5s infinite;}","        .vn-night-show .vn-night .star>div:nth-child(1){top: 20%; left: 80%;}","        .vn-night-show .vn-night .star>div:nth-child(2){top: 30%; left: 20%;}","        .vn-night-show .vn-night .star>div:nth-child(3){top: 50%; left: 40%;}","        .vn-night-show .vn-night .star>div:nth-child(4){top: 70%; left: 50%;}","        .vn-night-show .vn-night .star>div:nth-child(5){top: 10%; left: 60%;}","        .vn-night-show .vn-night .star>div:nth-child(6){top: 20%; left: 30%;}","        .vn-night-show .vn-night .star>div:nth-child(7){top: 30%; left: 10%;}","        .vn-night-show .vn-night .star>div:nth-child(8){top: 40%; left: 50%;}","        .vn-night-show .vn-night .star>div:nth-child(9){top: 60%; left: 10%;}","        .vn-night-show .vn-night .star>div:nth-child(10){top: 10%; left: 50%;}","        .vn-night-show .vn-night .star>div:nth-child(11){top: 40%; left: 30%;}","        .vn-night-show .vn-night .star>div:nth-child(12){top: 70%; left: 20%;}","        .vn-night-show .vn-night .star>div:nth-child(13){top: 20%; left: 40%;}","        .vn-night-show .vn-night .star>div:nth-child(14){top: 40%; left: 70%;}","        .vn-night-show .vn-night .star>div:nth-child(15){top: 60%; left: 60%;}","        .vn-night-show .vn-night .star>div:nth-child(16){top: 20%; left: 40%;}","        .vn-night-show .vn-night .star>div:nth-child(17){top: 50%; left: 95%;}","        .vn-night-show .vn-night .star>div:nth-child(18){top: 70%; left: 20%;}","        .vn-night-show .vn-night .star>div:nth-child(19){top: 20%; left: 40%;}","        .vn-night-show .vn-night .star>div:nth-child(20){top: 65%; left: 15%;}","        .vn-night-show .vn-night .star>div:nth-child(21){top: 35%; left: 55%;}","        .vn-night-show .vn-night .star>div:nth-child(22){top: 75%; left: 65%;}","        .vn-night-show .vn-night .star>div:nth-child(23){top: 25%; left: 25%;}","        .vn-night-show .vn-night .star>div:nth-child(24){top: 45%; left: 90%;}","        .vn-night-show .vn-night .star>div:nth-child(25){top: 25%; left: 75%;}","        .vn-night-show .vn-night .star>div:nth-child(26){top: 75%; left: 75%;}","        .vn-night-show .vn-night .star>div:nth-child(27){top: 45%; left: 65%;}","        .vn-night-show .vn-night .star>div:nth-child(28){top: 25%; left: 35%;}","        .vn-night-show .vn-night .star>div:nth-child(29){top: 65%; left: 55%;}","        .vn-night-show .vn-night .star>div:nth-child(30){top: 55%; left: 45%;}","        .vn-night-show .vn-night .star>div:nth-child(31){top: 75%; left: 75%;}","        .vn-night-show .vn-night .star>div:nth-child(32){top: 25%; left: 25%;}","        .vn-night-show .vn-night .star>div:nth-child(33){top: 35%; left: 85%;}","        .vn-night-show .vn-night .star>div:nth-child(34){top: 35%; left: 45%;}","        .vn-night-show .vn-night .star>div:nth-child(35){top: 15%; left: 25%;}","        .vn-night-show .vn-night .star>div:nth-child(36){top: 55%; left: 45%;}","        .vn-night-show .vn-night .star>div:nth-child(37){top: 75%; left: 55%;}","        .vn-night-show .vn-night .star>div:nth-child(38){top: 25%; left: 55%;}","        .vn-night-show .vn-night .star>div:nth-child(39){top: 55%; left: 65%;}","        .vn-night-show .vn-night .star>div:nth-child(40){top: 65%; left: 25%;}","        @-webkit-keyframes shine{0%{opacity:0.5} 100%{opacity: 1}}","        @keyframes shine{0%{opacity:0.5} 100%{opacity: 1}}","        /*moon*/","        .vn-night-show .vn-night .moon{ position: absolute; top:6%; left: 10% ;width: 200px; height: 200px; border-radius: 200px; background:#fff;z-index: 99 ;}","        .vn-night-show .vn-night .shadow{-moz-box-shadow:0 0 100px #fff;  -webkit-box-shadow:0 0 100px #fff;  box-shadow:0 0 100px #fff;}","        /*room*/","        .vn-night-show .vn-night .house{ position: absolute;bottom: 0; left: 20%;width:300px; height: 160px; }","        .vn-night-show .vn-night .house .roof{position: absolute; top: 0; left: 0; width: 0; height: 0;border-left: 150px solid transparent; border-right: 150px solid transparent;border-bottom: 100px solid black;}","        .vn-night-show .vn-night .house .wall{position: absolute; bottom: 0; left:50px; width: 200px; height: 80px; background: black;}","        .vn-night-show .vn-night .house .chimney{position: absolute; top: 10px; left:200px; width: 30px; height: 80px; background: black;}","        .vn-night-show .vn-night .house .window{position: absolute; top: 100px; left:130px; width: 40px; height: 40px; background: yellow;}",'        .vn-night-show .vn-night .house .window::before{position: absolute; top: 50%; left: 0 ;content:"";width:40px; height:1px; background:#999;}','        .vn-night-show .vn-night .house .window::after{position: absolute; top: 0; left: 50% ;content:"";width:1px; height:40px; background:#999;}',"        .vn-night-show .vn-night .meteor > .star-basic {","            width: 6px;","            height: 6px;","            -webkit-border-radius: 50%;","            -moz-border-radius: 50%;","            border-radius: 50%;","            background: #ffffff;","            position: absolute;","            top: 100px;","            left: 100%;","            box-shadow:  0 0 18px 10px #fff;","            transform-origin: 0 100%;","            transform: rotate(-45deg);","            animation: meteor-ani 0.5s ease-in 0.5s, disappear-ani 1s 1.5s;","            animation-fill-mode: forwards, forwards;","            opacity: 0;","        }","        .vn-night-show .vn-night .meteor > .star-basic::after {","            content: '';","            display: block;","            border: 0px solid #fff;","            border-width: 6px 150px 6px 150px;","            border-color: transparent transparent transparent rgba(255, 255, 255, .3);","            ","            top: 3px;","            left: 6px;","        }","        @keyframes meteor-ani{","            0% {","                opacity: 0;","                transform: scale(0) rotate(-45deg) translate(0, 0);","            }","            100% {","                opacity: 1;","                transform: scale(1) rotate(-45deg) translate(-1000px, 0);","            }","        }","        @keyframes bg-ani {","            0% {","                opacity: 0;","                transform: translate(100%, 0);","            }","            100% {","                opacity: 1;","                transform: translate(0, 0)","            }","        }","        @keyframes disappear-ani {","            0% {","                opacity: 1;","                z-index: auto;","            }","            100% {","                opacity: 0;","                z-index: -100;","            }","        }","        /* daytime */","        .vn-daytime-show .vn-daytime {","            position: fixed;","            top: 0;","            left: 0;","            bottom: 0;","            right: 0;","            background: radial-gradient(ellipse at center, rgba(209,228,234,1) 0%,rgba(186,228,244,1) 100%);","            animation: bg-ani 0.5s, disappear-ani 1s 1.8s;","            animation-fill-mode: forwards, forwards;","        }","        .vn-daytime.vn-none {","            display: none;","        }","        .vn-daytime-show .vn-sun {","            position: absolute;","            top: 50%;","            left: 50%;","            margin: -50px 0 0 -50px;","            width: 100px;","            height: 100px;","            border-radius: 50%;","            border: solid 5px #ffff00;","            opacity: 0;","            animation: appear-ani 0.2s 0.5s, disappear-ani 1s 1.8s;","            animation-fill-mode: forwards, forwards;","        }","        .vn-daytime-show .vn-sun .sunshine {","            position: absolute;","            top: 0;","            left: 0;","            width: 100%;","            height: 100%;","        }","        .vn-daytime-show .vn-sun .sunshine-first {","            animation:sunshine-rotate 0.5s linear 1.3s;","            animation-fill-mode: forwards;","        }","        .vn-daytime-show .vn-sun .sunshine-sencond {","            animation: sunshine-rotate 0.5s linear 1.3s;","            animation-fill-mode: forwards;","        }","        .vn-daytime-show .vn-sun .sunshine-sencond > .light-basic {","            opacity: 0;","        }","        .vn-daytime-show .vn-sun .light-basic {","            position: absolute;","            left: -40%;","            top: 50%;","            transform-origin: right;","            width: 90%;","            height: 3px;","            background: linear-gradient(-90deg, transparent 65%, #ffff00 0);","        }","        .vn-daytime-show .vn-sun .light-1 {","            transform: rotate(45deg);","        }","        .vn-daytime-show .vn-sun .light-2 {","            transform: rotate(90deg);","        }","        .vn-daytime-show .vn-sun .light-3 {","            transform: rotate(135deg);","        }","        .vn-daytime-show .vn-sun .light-4 {","            transform: rotate(180deg);","        }","        .vn-daytime-show .vn-sun .light-5 {","            transform: rotate(225deg);","            animation: appear-ani 0.2s 0.7s;","            animation-fill-mode: forwards;","        }","        .vn-daytime-show .vn-sun .light-6 {","            transform: rotate(270deg);","            animation: appear-ani 0.2s 0.9s;","            animation-fill-mode: forwards;","        }","        .vn-daytime-show .vn-sun .light-7 {","            transform: rotate(315deg);","            animation: appear-ani 0.2s 1.1s;","            animation-fill-mode: forwards;","        }","        .vn-daytime-show .hill {","            position: absolute;","            bottom: -70px;","            right: 0;","            width: 100%;","            height: 250px;","            border-top-right-radius: 160%;","            border-top-left-radius: 100%;","            background-color: #adde60;","            z-index: -1;","        }","        .vn-daytime-show .hill::before {","            background-color: #93cc3a;","            border-top-left-radius: 0;","            border-top-right-radius: 100%;","            bottom: -70px;",'            content: "";',"            height: 110%;","            left: -54px;","            position: absolute;","            transform: rotate(4deg);","            width: 120%;","        }","        .vn-daytime-show .hill::after {","            content: '';","            position: absolute;","            bottom: -100px;","            right: -400px;","            width: 120%;","            height: 110%;","            border-top-right-radius: 100%;","            border-top-left-radius: 0%;","            background-color: #94c943;","            -moz-transform: rotate(-12deg);","            -webkit-transform: rotate(-12deg);","            box-shadow: 0 0 25px #cbf191 inset;","        }","        @keyframes sunshine-rotate {","            0% {","                transform: rotate(0);","            }","            100% {","                transform: rotate(180deg);","            }","        }","        @keyframes appear-ani {","            0% {","                opacity: 0;","            }","            100% {","                opacity: 1;","            }","        }"].join(""),o=['<div class="moon shadow"></div>','            <div class="star">',"                <!-- 10 -->","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <!-- 20 -->","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <!-- 30 -->","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <!-- 40 -->","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","                <div></div>","            </div>",'            <div class="meteor">','                <div class="star-basic star1"></div>',"            </div>",'            <div class="house">','                <div class="roof"></div>','                <div class="wall"></div>','                <div class="chimney"></div>','                <div class="window"></div>',"            </div>"].join(""),a=['<div class="hill"></div>','           <div class="vn-sun">','            <div class="sunshine sunshine-first">','                <div class="light-basic"></div>','                <div class="light-basic light-1"></div>','                <div class="light-basic light-2"></div>','                <div class="light-basic light-3"></div>','                <div class="light-basic light-4"></div>',"            </div>",'            <div class="sunshine sunshine-sencond">','                <div class="light-basic light-5"></div>','                <div class="light-basic light-6"></div>','                <div class="light-basic light-7"></div>',"            </div>","        </div>"].join("");e.default={cssText:i,vnNightHtml:o,vnDaytimeHtml:a}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.NightDirective=void 0;var o=n(0),a=i(o),r=n(1),s=i(r),A=function(t){t.directive("Night",a.default)},d=function(t){t.directive("Night",a.default),t.component("night-switch",s.default)};window.Vue&&(window.night=s.default,Vue.use(d)),a.default.install=A,s.default.install=d,e.NightDirective=a.default,e.default=s.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.hasClass=i,e.isAttached=o,e.addClassName=a,e.removeClassName=r,e.toggleClass=s,e.insertStyle=A;var i=function(t,e){var n=void 0;return n=new RegExp("\\s"+e+"|"+e+"\\s|^"+e+"$"),t.className.search(n)>-1},o=function(t){for(var e=t.parentNode;e;){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},a=function(t){var e=t.className;e=e.split(" ");for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var a=!0,r=!1,s=void 0;try{for(var A,d=i[Symbol.iterator]();!(a=(A=d.next()).done);a=!0){var h=A.value;e.indexOf(h)>-1||e.push(h)}}catch(t){r=!0,s=t}finally{try{!a&&d.return&&d.return()}finally{if(r)throw s}}t.className=e.join(" ")},r=function(t){for(var e=t.className,n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];i.forEach(function(t){var n=new RegExp("\\s"+t+"|"+t+"\\s|^"+t+"$");e=e.replace(n,"")}),t.className=e},s=function t(e,n){if("string"==typeof n)i(e,n)?r(e,n):a(e,n);else if(n instanceof Array){var o=i(e,n[0]),s=i(e,n[1]);o||s?o&&!s||!o&&s?(t(e,n[0]),t(e,n[1])):console.error("toggleClass: wrong condition."):a(e,n[0])}else console.error("toggleClass: wrong argument2.")},A=function(t){var e=document.createElement("style");e.setAttribute("type","text/css"),e.appendChild(document.createTextNode(t)),document.head.appendChild(e)};e.default={hasClass:i,addClassName:a,removeClassName:r,toggleClass:s,insertStyle:A,isAttached:o}},function(t,e,n){e=t.exports=n(7)(void 0),e.push([t.i,"@font-face{font-family:icomoon;src:url("+n(10)+') format("woff");font-weight:400;font-style:normal}i.icon{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon.off:before{content:"\\F011"}.vnight-label{position:absolute;right:0;top:0;width:4em;height:4em;background:linear-gradient(45deg,transparent 50%,#e8e8e8 0)}.vnight-label .icon{cursor:default;position:relative;top:.667em;left:2em;margin:0;font-size:1.2em}.vnight-label.night{color:#f8f8ff;background:linear-gradient(45deg,transparent 50%,#2f3f3f 0);text-shadow:1px 0 2px}.vnight-label.daytime{color:rgba(0,0,0,.6)}',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e){var a=i(o),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(r).concat([a]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new Buffer(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(i[a]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e){var n=!1;!function(){"use strict";/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
function e(t,n){var i;if(n=n||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=n.touchBoundary||10,this.layer=t,this.tapDelay=n.tapDelay||200,this.tapTimeout=n.tapTimeout||700,!e.notNeeded(t)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,s=0,A=a.length;s<A;s++)r[a[s]]=function(t,e){return function(){return t.apply(e,arguments)}}(r[a[s]],r);o&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(i=t.onclick,t.addEventListener("click",function(t){i(t)},!1),t.onclick=null)}}var i=navigator.userAgent.indexOf("Windows Phone")>=0,o=navigator.userAgent.indexOf("Android")>0&&!i,a=/iP(ad|hone|od)/.test(navigator.userAgent)&&!i,r=a&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=a&&/OS [6-7]_\d/.test(navigator.userAgent),A=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(a&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},e.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!o;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},e.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},e.prototype.determineEventType=function(t){return o&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(t){var e;a&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},e.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},e.prototype.onTouchStart=function(t){var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],a){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!r){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},e.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},e.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},e.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(t){var e,n,i,A,d,h=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(d=t.changedTouches[0],h=document.elementFromPoint(d.pageX-window.pageXOffset,d.pageY-window.pageYOffset)||h,h.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(i=h.tagName.toLowerCase())){if(e=this.findControl(h)){if(this.focus(h),o)return!1;h=e}}else if(this.needsFocus(h))return t.timeStamp-n>100||a&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(h),this.sendClick(h,t),a&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return!(!a||r||!(A=h.fastClickScrollParent)||A.fastClickLastScrollTop===A.scrollTop)||(this.needsClick(h)||(t.preventDefault(),this.sendClick(h,t)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},e.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||(e=this.onMouse(t),e||(this.targetElement=null),e)},e.prototype.destroy=function(){var t=this.layer;o&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(t){var e,n,i;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!o)return!0;if(e=document.querySelector("meta[name=viewport]")){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(A&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(e.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(e.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction))},e.attach=function(t,n){return new e(t,n)},"function"==typeof n&&"object"==typeof n.amd&&n.amd?n(function(){return e}):void 0!==t&&t.exports?(t.exports=e.attach,t.exports.FastClick=e):window.FastClick=e}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var a=e[o],r=a[0],s=a[1],A=a[2],d=a[3],h={id:t+":"+o,css:s,media:A,sourceMap:d};i[r]?i[r].parts.push(h):n.push(i[r]={id:r,parts:[h]})}return n}},function(t,e){t.exports="data:application/font-woff;base64,d09GRgABAAAAAAVAAAsAAAAABPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgD2MLFmNtYXAAAAFoAAAAVAAAAFQQReCpZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAATgAAAE4WlZNE2hlYWQAAAL8AAAANgAAADYMUUdWaGhlYQAAAzQAAAAkAAAAJAbdA3RobXR4AAADWAAAABQAAAAUCQAAAGxvY2EAAANsAAAADAAAAAwAKACwbWF4cAAAA3gAAAAgAAAAIAAIAFZuYW1lAAADmAAAAYYAAAGGmUoJ+3Bvc3QAAAUgAAAAIAAAACAAAwAAAAMCgAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8BEDbf9uAJIDbQCSAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIPAR//3//wAAAAAAIPAR//3//wAB/+MP8wADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/6kDbgNgAEAAUwAAARQHBgcGBwYjIicmJyYnJjU0NzY3NhcWFxYHBgcGBwYVFBcWFxYXFjMyNzY3Njc2NTQnJicmJyY3Njc2FxYXFhUBERQHBiMiJyY1ETQ3NjMyFxYVA24jIzs7UVFZWVFSOjsjIy4uUxkeHhISBAUYOB4fFxgnJzY2PDs2NignFxceHzgYBAQSEh4eGFQuLv6SFhUeHhYVFRYeHhUWAWBZUVE7OyMjIyM7O1FRWWhcXD4TBAQZGB4eEis9PUU7NjYoJxcYGBcnKDY2O0U9PSsSHh4YGQQEEz5cXGgBt/6SHhUWFhUeAW4eFRYWFR4AAQAAAAAAAN7g/E1fDzz1AAsEAAAAAADU4oGoAAAAANTigagAAP+pA24DYAAAAAgAAgAAAAAAAAABAAADbf9uAAAEAAAAAAADbgABAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAEAAAAEAAAAAAAAAAAKABQAHgCcAAEAAAAFAFQAAgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(t,e){t.exports=function(t,e,n,i){var o,a=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var A=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];A[t]=function(){return e}}),s.computed=A}return{esModule:o,exports:a,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"night",rawName:"v-night"}],staticClass:"vnight-label",class:[t.isNight?"night":"daytime"],on:{click:t.switchNight}},[n("i",{staticClass:"icon off"})])},staticRenderFns:[]}},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(14)("43e0ea63",i,!0)},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=h[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(a(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(a(n.parts[o]));h[n.id]={id:n.id,refs:1,parts:r}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function a(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(v)return f;i.parentNode.removeChild(i)}if(g){var a=u++;i=c||(c=o()),e=r.bind(null,i,a,!1),n=r.bind(null,i,a,!0)}else i=o(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function r(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var a=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function s(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var A="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!A)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(9),h={},l=A&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,v=!1,f=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var o=d(t,e);return i(o),function(e){for(var n=[],a=0;a<o.length;a++){var r=o[a],s=h[r.id];s.refs--,n.push(s)}e?(o=d(t,e),i(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var A=0;A<s.parts.length;A++)s.parts[A]();delete h[s.id]}}}};var p=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}])});
//# sourceMappingURL=vue-night-switch.js.map