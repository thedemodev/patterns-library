var StyleGuideWebComponent=function(){"use strict";var e,m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),u=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},v=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},w=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},g=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":m(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),n=".m-dropdown {\n  position: relative;\n  display: inline-block; }\n\n.m-dropdown--sm {\n  height: 40px;\n  line-height: 40px; }\n\n.m-dropdown__select-wrap {\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333;\n  position: relative;\n  display: block;\n  width: 100%;\n  /* undo padding frame padding */\n  padding: 0 !important;\n  overflow: hidden;\n  cursor: pointer; }\n  .m-dropdown__select-wrap:hover, .m-dropdown__select-wrap:active, .m-dropdown__select-wrap:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__select-wrap:hover .m-dropdown__icon, .m-dropdown__select-wrap:active .m-dropdown__icon, .m-dropdown__select-wrap:focus .m-dropdown__icon {\n      color: #00008f; }\n\n.m-dropdown__select-wrap--sm {\n  height: 40px; }\n\n.m-dropdown__select {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* important: fake it to have 0 width */\n  float: left;\n  /* overflow is indented to fix browser who don't support hiding the native arrow */\n  width: 120%;\n  height: 50px;\n  padding: 0;\n  margin-right: -120%;\n  line-height: 50px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  text-indent: 20px;\n  /* not ideal, firefox is buggy here - see fix at the bottom */\n  vertical-align: middle;\n  cursor: pointer;\n  /* don't use background nor border - the parent deals with that */\n  background: transparent;\n  border: none;\n  color: inherit;\n  /* disable native appearance like arrow */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  /* disable outline styles */\n  /* fix firefox focus stuff */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable */\n  /* fix ugly blue screen at focused option value in IE */\n  /* fix native select arrows on IE */\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  .m-dropdown__select:active, .m-dropdown__select:focus {\n    border: none;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus {\n    color: #333; }\n    .m-dropdown__select:focus + .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__select::-moz-focus-inner,\n  .m-dropdown__select option::-moz-focus-inner {\n    border: none;\n    box-shadow: none !important;\n    outline: none !important; }\n  .m-dropdown__select:focus::-ms-value {\n    color: inherit;\n    background: transparent; }\n  .m-dropdown__select::-ms-expand {\n    display: none; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .m-dropdown__select {\n      /* IE10+ CSS styles go here */\n      /* fix IE not adhering to `text-indent` rules at <select> tags */\n      padding-left: 20px; } }\n\n@-moz-document url-prefix() {\n  .m-dropdown__select {\n    /* ugly fix of firefox related issues */\n    /* Fix Firefox doubles text-indent value */\n    text-indent: 10px;\n    /* fix firefox dotted border on focused selects */ }\n    .m-dropdown__select:focus {\n      color: transparent;\n      text-shadow: 0 0 0 #00008f; } }\n  @media (min-width: 576px) {\n    .m-dropdown__select {\n      font-size: 18px; } }\n\n.m-dropdown__select--sm {\n  height: 40px;\n  line-height: 40px; }\n\n.m-dropdown__select-icon {\n  display: block;\n  float: right;\n  height: 50px;\n  padding: 0 20px;\n  margin-left: 20px;\n  pointer-events: none;\n  background: #fff;\n  /* fix missing height of wrapping root node of <axa-icon> */ }\n  .m-dropdown__select-icon > * {\n    display: block;\n    height: 100%; }\n  .m-dropdown__select-icon .m-dropdown__icon {\n    position: relative;\n    right: auto; }\n\n@-moz-document url-prefix() {\n  .m-dropdown__select-icon {\n    /* ugly fix of firefox related issues */\n    /* Fix Firefox doubles text-indent value */\n    margin-left: 10px; } }\n\n.m-dropdown__select-option--hidden {\n  display: none; }\n\n.m-dropdown__toggle {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 55px 10.5px 20px;\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #333; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-dropdown__toggle {\n      font-size: 18px; } }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    cursor: pointer; }\n  .m-dropdown__toggle:hover, .m-dropdown__toggle:active, .m-dropdown__toggle:focus {\n    outline: none;\n    border-color: #00008f; }\n    .m-dropdown__toggle:hover .m-dropdown__icon, .m-dropdown__toggle:active .m-dropdown__icon, .m-dropdown__toggle:focus .m-dropdown__icon {\n      color: #00008f; }\n  .m-dropdown__toggle:hover::after, .m-dropdown__toggle:active::after, .m-dropdown__toggle:focus::after {\n    display: block; }\n  .m-dropdown__toggle::after {\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    z-index: 1001;\n    display: none;\n    width: 100%;\n    height: 1px;\n    overflow: hidden;\n    content: '';\n    background: #00008f; }\n\n.m-dropdown__toggle--sm {\n  height: 40px;\n  padding: 5.5px 55px 5.5px 20px; }\n\n.m-dropdown__icon {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -7.5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-dropdown__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .is-dropdown-animating.m-dropdown--gpu > .m-dropdown__icon {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n\n.m-dropdown__select-icon--sm {\n  height: 40px; }\n\n.m-dropdown__content {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1000;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  margin-top: -1px;\n  background: #fff; }\n  .is-dropdown-open > .m-dropdown__content {\n    height: auto; }\n  .m-dropdown--in-flow > .m-dropdown__content {\n    position: static; }\n  .is-dropdown-animating.m-dropdown--gpu > .m-dropdown__content {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n\n.m-dropdown__item {\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #ccc; }\n  .m-dropdown__item:first-child {\n    border-top: 1px solid #ccc; }\n  .m-dropdown__item:last-child {\n    border-bottom: 3px solid #ccc; }\n\n.m-dropdown__link {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: block;\n  padding: 10.5px 20px;\n  color: #333;\n  white-space: nowrap; }\n  @media (min-width: 576px) {\n    .m-dropdown__link {\n      font-size: 18px; } }\n  .m-dropdown__link:hover, .m-dropdown__link:active, .m-dropdown__link:focus {\n    color: #00008f;\n    text-decoration: none;\n    background: #f5f5f5; }\n",y=/\n[\s]+$/,b=/^\n[\s]+/,x=/[\s]+$/,C=/^[\s]+/,k=/[\n\s]+/g,O=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],A=["code","pre","textarea"],E=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var d=n[s];if(Array.isArray(d))e(t,d);else{("number"==typeof d||"boolean"==typeof d||"function"==typeof d||d instanceof Date||d instanceof RegExp)&&(d=d.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof d)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=d:(d=document.createTextNode(d),t.appendChild(d),c=d),s===l-1&&(a=!1,-1===O.indexOf(i)&&-1===A.indexOf(i)?""===(o=c.nodeValue.replace(b,"").replace(x,"").replace(y,"").replace(k," "))?t.removeChild(c):c.nodeValue=o:-1===A.indexOf(i)&&(r=0===s?"":" ",o=c.nodeValue.replace(b,r).replace(C," ").replace(x,"").replace(y,"").replace(k," "),c.nodeValue=o));else if(d&&d.nodeType){a&&(a=!1,-1===O.indexOf(i)&&-1===A.indexOf(i)?""===(o=c.nodeValue.replace(b,"").replace(y,"").replace(k," "))?t.removeChild(c):c.nodeValue=o:-1===A.indexOf(i)&&(o=c.nodeValue.replace(C," ").replace(b,"").replace(y,"").replace(k," "),c.nodeValue=o));var u=d.nodeName;u&&(i=u.toLowerCase()),t.appendChild(d)}}}};var N=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},T='<axa-icon icon="angle-bracket-down" classes="m-dropdown__icon"></axa-icon>',j=function(e){var t,n,o,r,i=e.title,a=e.items,s=e.size,l=e.value;return(o=document.createElement("div")).setAttribute("tabindex","0"),o.setAttribute("class",""+String(g("m-dropdown__select-wrap",u({},"m-dropdown__select-wrap--"+s,s)))),E(o,["\n    ",(t=document.createElement("select"),t.setAttribute("class",""+String(g("m-dropdown__select",u({},"m-dropdown__select--"+s,s)))),E(t,["\n    ",i&&(r=document.createElement("option"),r.setAttribute("value",""),r.setAttribute("disabled","disabled"),r.setAttribute("hidden","hidden"),r.setAttribute("selected","selected"),r.setAttribute("class","m-dropdown__select-option--hidden"),E(r,[i]),r),"\n    ",Array.isArray(a)&&a.map(function(e){var t,n=e.name,o=e.value,r=e.url;return(t=document.createElement("option")).setAttribute("value",""+String(o)),t.setAttribute("data-url",""+String(r)),function e(t,n,o){if("object"!==(void 0===n?"undefined":m(n)))n&&("className"===n&&(n="class"),"htmlFor"===n&&(n="for"),"on"===n.slice(0,2)?t[n]=o:(!0===o&&(o=n),t.setAttribute(n,o)));else for(var r in n)n.hasOwnProperty(r)&&e(t,r,n[r])}(t,o===l?"selected":"",o===l?"selected":""),E(t,[n]),t}),"\n    "]),t),"\n    ",(n=document.createElement("div"),n.setAttribute("class",""+String(g("m-dropdown__select-icon",u({},"m-dropdown__select-icon--"+s,s)))),E(n,[N(T)]),n),"\n  "]),o},o=function(e){var t,n,o,r,i,a,s,l=e.native,d=h(e,["native"]);return l?j(d):(r=(t=d).title,i=t.items,a=t.size,s=t.value,[(n=document.createElement("button"),n.setAttribute("type","button"),n.setAttribute("class",""+String(g("m-dropdown__toggle js-dropdown__toggle",u({},"m-dropdown__toggle--"+a,a)))),E(n,["\n    ",function(o,e,t){if(!e)return t||"";var n=e.filter(function(e,t){var n=e.value;return void 0===n&&(n=t),""+n==""+o});return 1===n.length?n[0].name:t}(s,i,r)||"",N(T),"\n  "]),n),(o=document.createElement("ul"),o.setAttribute("class","m-dropdown__content js-dropdown__content"),E(o,["\n    ",Array.isArray(i)&&i.map(function(e,t){var n,o,r=e.name,i=e.url,a=e.value;return(o=document.createElement("li")).setAttribute("class","m-dropdown__item"),E(o,["\n        ",(n=document.createElement("a"),n.setAttribute("data-index",""+String(a||t)),n.setAttribute("data-selected",""+String(a===s?"true":"false")),n.setAttribute("href",""+String(i)),n.setAttribute("class","m-dropdown__link"),E(n,[r]),n),"\n      "]),o}),"\n  "]),o)])},t={},s=function(e){return e in t||(t[e]=0),++t[e]},l=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var d=l.preventDefault;return l.preventDefault=function(){d.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function P(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new l(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var S=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),d=/^\s+|\s{2,}|\s+$/g;function D(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function R(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=I.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(L,[])),i&&(e.className+=" "+i.join(" "))}}function L(e,t){var n=t.className;return t.hasClass||e.push(n),e}function I(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=D(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function M(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=I.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(U,[])),i){var a=e.className;e.className=i.reduce(z,a)}}}function U(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function z(e,t){var n=D(t,"g");return e.replace(n," ").replace(d," ")}var F=/\s+/,V={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function H(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(V[e]&&(e=V[e]),!n||!e)return null;var d=void 0===o?"undefined":m(o),c=o&&"string"===d;if("function"===d){if(r){var u=r;a=u.capture,l=u.passive}r=o}for(var p=S?{capture:a,passive:l}:a,f=c?function(e){var t=e.target;for(;!I(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(F),v=h.length,_=0;_<v;++_)n.addEventListener(h[_],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function K(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,d=void 0,c=void 0,u=void 0,p=void 0,f=!1,h=r!==l,v=!1!==l;function _(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return d=t,h&&(c&&clearTimeout(c),c=setTimeout(m,r)),v&&!u&&(u=setTimeout(g,l)),i&&!f&&(f=!0,p=o.apply(void 0,w(d))),p}return _.flush=function(){(c||u)&&(p=o.apply(void 0,w(d)));return b(),p},_.cancel=b,_;function m(){u&&clearTimeout(u),y()}function g(){c&&clearTimeout(c),y()}function y(){a&&(p=o.apply(void 0,w(d))),u=c=null,f=!1}function b(){c&&(clearTimeout(c),c=null),u&&(clearTimeout(u),u=null),d=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var q=window.__subscriptions;function W(e,t){var n=H(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);q[e]||(q[e]={count:0});var o,r=q[e];return r.count++,r.onsubscribe||(r.onsubscribe=K((o=e,function(){P(document,"pubsub/onsubscribe",o),P(document,"pubsub/onsubscribe/"+o,o),q[o]&&delete q[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete q[e]}}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;q[t]||(q[t]={count:0});var n=q[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=a(e,3),n=t[0],o=t[1],r=t[2];P(r,n,o)}),delete n.queue)});var $,G=function(e,t){return e===t},B=(($=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:G;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?$.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;c(this,l);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=v(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return f(l,e),l}(Error)),Z=/[A-Z]/g;function J(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var X=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Y(t,n){var e=t;if(t&&n!==t){if(X.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var Q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ee=/[-_]+/g;function te(e){return e.replace(Q,ne)}function ne(e,t){return 0==+e||ee.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function oe(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=Y(n,t)}var re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ie(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,d=n.ownerDocument.documentElement,c=H(d,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=d,re&&(t.style.cursor="pointer"),c}var ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend"),se="axa-change",le="data-prevent-default",de=function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(ae.ENTER,t),i._onInteractive()):o&&i._notify(ae.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===ae.ESCAPE||e.key===ae.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=H(this._container,ae.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=H(this._container,ae.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ie(this._container,ae.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=H(this._container.ownerDocument,ae.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(le)?oe(e,le):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ae.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}();de.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ce=["title","checked","disabled"],ue=[];var pe=1,fe=3,he=8;function ve(e,t){var n=e.nodeType,o=e.nodeName;n===pe&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;0<=l;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var d=s.localName;t.getAttributeNS(r,d||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;0<=c;--c)!1!==(s=n[c]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==fe&&n!==he||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;_e(e,t,"checked"),_e(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?_e(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function _e(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var me=3;function ge(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ve(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ye(o,n))(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(ye(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=ge(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ge(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ye(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===me&&e.nodeValue===t.nodeValue)}var be=function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=v(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return f(s,e),s}(Error),we=!!document.createDocumentFragment().children;function xe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(xe.prototype,HTMLElement.prototype),Object.setPrototypeOf(xe,HTMLElement);var Ce=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;c(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=v(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=W("context/available",n._makeContextReady)},v(n,t)}return f(a,t),r(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;q[e]||(q[e]={count:0,queue:[]});var o=q[e].queue;Array.isArray(o)?o.push([e,t,n]):P(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return c(this,n),v(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else _(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else _(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else _(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function d(e){c(this,d);var l=v(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=l._hasKeys[t];if(-1===ce.indexOf(t)&&r)throw new B(t,l);var i="_"+t,a=n[t],s=l[i];return o||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,r&&_(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=K(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=te(e),o=n in l;if(-1===ce.indexOf(n)&&o)throw new B(n,l);l._hasKeys[n]=o,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&_(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return f(d,t),r(d,[{key:"connectedCallback",value:function(){var r=this;if(p(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"connectedCallback",this)&&p(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=te(e);if(r.hasAttribute(e)){var n=oe(r,e),o=r._hasKeys[t];r._props[t]=n,o&&_(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),t,n,r)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=te(e);this.hasAttribute(e)?this[o]=Y(n):this[o]=null,"value"===e&&null!==n&&P(this,se,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(Z,J))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),d}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=h(e,["template"]);c(this,l);var o=v(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return f(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});we||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new be(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");ge(t,e)}(this,s),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=h(e,["styles"]);c(this,i);var r=v(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return f(i,t),r(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){c(this,n);var t=v(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=s(t.nodeName),t}return f(n,xe),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ke={},Oe=function(e){function a(){var e,t,n;c(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=v(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},v(n,t)}return f(a,Ce),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ce.uuidv4();if(e&&!ke[t]){var n=document.createElement("style"),o=document.createTextNode(e);ke[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Ae,Ee=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Ne=function(){var e=window.requestAnimationFrame||window[Ee+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),Te=(Ae=(Ae=window.cancelAnimationFrame||window[Ee+"CancelAnimationFrame"]||window[Ee+"CancelRequestAnimationFrame"])?Ae.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){c(this,o),t=i({},o.DEFAULTS,t);var n=v(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.handleTransitionEnd=function(e){"height"===e.propertyName&&(n._removeHeightOnElement(e.target),n.offInteractive(),M(n.wcNode,n.options.isAnimatingClass))},n.handleClick=function(e){if(e.preventDefault(),n.offClicks(),n.wcNode.getAttribute("value")===e.target.dataset.index)n.leave(n.lastToggleNode),n.deleteLastToggleNode();else{var t=e.target.dataset.index;n.wcNode.setAttribute("value",t)}},n.options=t,n.wcNode=e,n.isOpen=!1,n}return f(o,de),r(o,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=H(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"onClicks",value:function(){this.offClicks(),this.unClickEnd=H(this.wcNode,ae.CLICK,this.options.selectClass,this.handleClick,{capture:!0,passive:!1})}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,R(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),this.onClicks(),n.style.height=o+"px",R(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,r=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),this.onClicks(),R(n,this.options.isAnimatingClass),Ne(function(){o.style.height=r+"px",Ne(function(){M(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"_removeHeightOnElement",value:function(e){this.isOpen&&(e.style.height="")}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",M(e,this.options.isOpenClass))}},{key:"destroy",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),o}());Te.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating",selectClass:"js-dropdown__content"};var je,Pe,Se=function(e){function t(){return c(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:n,template:o}))}return f(t,Oe),r(t,null,[{key:"observedAttributes",get:function(){return["in-flow","items","native","size","title","value"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.inFlow,t=this.size,n=this.gpu;this.className=g(this.initialClassName,"m-dropdown js-dropdown",u({"m-dropdown--in-flow":e,"m-dropdown--gpu":n},"m-dropdown--"+t,t))}},{key:"didRenderCallback",value:function(){this.dropDown&&this.dropDown.destroy(),this.dropDown=new Te(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){this.dropDown&&(this.dropDown.destroy(),delete this.dropDown)}}]),t}();return Se.tagName="axa-dropdown",je=Se.tagName,Pe=Se,customElements.get(je)||customElements.define(je,Pe),Se}();
