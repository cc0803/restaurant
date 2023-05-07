(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(131),t.b),u=new URL(t(950),t.b),d=a()(o()),f=s()(l),p=s()(u);d.push([e.id,"@font-face {\n    font-family: 'Grafitti';\n    src: url("+f+");\n}\n\n:root {\n    --black: rgb(45, 39, 31);\n    --beige: rgb(255, 237, 205);\n}\n\nbody {\n    margin: 0;\n}\n\nheader {\n    width: 100vw;\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--black);\n    position: fixed;\n    top: 0;\n    left: 0;\n    color: var(--beige);\n    z-index: 10;\n}\n\nheader>ul {\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n    width: 40%;\n    padding: 0;\n    margin: 0;\n}\n\nul {\n    font-size: 2rem;\n}\n\nheader>ul>li {\n    font-family: monospace;\n    justify-self: center;\n    padding: 1rem;\n    font-family: 'Grafitti';\n    letter-spacing: 2px;\n}\n\nheader>ul>li:hover {\n    transform: scale(1.2);\n}\n/* Styles for home page*/\n\n\n.content {\n    height: 200vh;\n    margin-top: 10vh;\n    width: 100vw;\n    background-image: url("+p+");\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n}\n\n.content.home {\n    background-image: url("+p+");\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n}\n\nh1.home-heading {\n    color: rgb(32, 241, 0);\n    text-align: center;\n    transform: rotate(-2deg);\n    font-family: 'Grafitti';\n}\n\nh1 {\n    padding-top: 4rem;\n    font-size: 6rem;\n}\n\nfooter {\n    height: 30vh;\n    background-color: var(--black);\n    font-family: monospace, serif;\n}\n\nfooter>h3 {\n    margin: 0;\n    font-size: 1.5rem;\n    text-align: center;\n    padding: 1rem;\n    color: var(--beige);\n}\n\nfooter p {\n    text-align: center;\n    color: var(--beige);\n}\n\nh2 {\n    text-align: center;\n    font-family: monospace;\n    font-size: 3rem;\n}\n\n.text-container {\n    width: 40vw;\n    padding: 4rem;\n    background-color: rgba(255, 237, 205, 0.5);\n    margin: 0 auto;\n    border-radius: 2rem;\n}\n\n.text-container>p {\n    font-family: monospace;\n    font-size: 1.7rem;\n    font-weight: 600;\n    margin: 3rem 0;\n}",""]);const m=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},950:(e,n,t)=>{e.exports=t.p+"c0f81770547f2c20f591.jpg"},131:(e,n,t)=>{e.exports=t.p+"b402f1402093730f5118.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),f=t.n(d),p=t(28),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,t.p;const h=document.querySelector(".content");function g(e){let n=document.createElement("p");return n.textContent=e,n}console.log("hello customer"),function(){console.log(h),h.appendChild(function(){let e=document.createElement("h1");return e.textContent="Tim`s Tofu Temple",e.classList.add("home-heading"),e}());let e=function(){let e=document.createElement("div");return e.classList.add("text-container"),e}();e.appendChild(function(e){let n=document.createElement("h2");return n.textContent="A divine tofu expirience",n}()),e.appendChild(g("At the age of fifteen Tim was enlightened. It was his first time to eat tofu and scince then he made it his God given mission to bring every body the real spirit of tofu.")),e.appendChild(g("With creative new ways to serve tofu, tim made thousands of people fall in love with this divine food. He is most famous for his teriyaki tofu dish or his creative Tofu Ramen.")),e.appendChild(g('To carry on his mission, Tim opened "Tim`s Tofu Temple" as a way to bring evrybody the joy of Tofu.')),e.appendChild(g("Tim`s Kitchen is opened daily from 12am till 10pm. Every Tofu lover and potential future tofu lover is welcome to visit us at this time.")),h.appendChild(e)}()})()})();