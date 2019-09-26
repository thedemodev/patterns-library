var StyleGuideWebComponent=function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function e(t,e){return t(e={exports:{}},e.exports),e.exports}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:u(o,e,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function p(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e,n,r){var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var i=Object.getPrototypeOf(t);null!==i&&s(i,e,n,r)}else if("value"in o&&o.writable)o.value=n;else{var a=o.set;void 0!==a&&a.call(r,n)}return n}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},n=e(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,g=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118;function b(t){if("object"===(void 0===t?"undefined":x(t))&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case c:case p:case i:case l:case a:case f:return t;default:switch(t=t&&t.$$typeof){case u:case d:case s:return t;default:return e}}case y:case g:case o:return e}}}function m(t){return b(t)===p}e.typeOf=b,e.AsyncMode=c,e.ConcurrentMode=p,e.ContextConsumer=u,e.ContextProvider=s,e.Element=r,e.ForwardRef=d,e.Fragment=i,e.Lazy=y,e.Memo=g,e.Portal=o,e.Profiler=l,e.StrictMode=a,e.Suspense=f,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===p||t===l||t===a||t===f||t===h||"object"===(void 0===t?"undefined":x(t))&&null!==t&&(t.$$typeof===y||t.$$typeof===g||t.$$typeof===s||t.$$typeof===u||t.$$typeof===d||t.$$typeof===v||t.$$typeof===_)},e.isAsyncMode=function(t){return m(t)||b(t)===c},e.isConcurrentMode=m,e.isContextConsumer=function(t){return b(t)===u},e.isContextProvider=function(t){return b(t)===s},e.isElement=function(t){return"object"===(void 0===t?"undefined":x(t))&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return b(t)===d},e.isFragment=function(t){return b(t)===i},e.isLazy=function(t){return b(t)===y},e.isMemo=function(t){return b(t)===g},e.isPortal=function(t){return b(t)===o},e.isProfiler=function(t){return b(t)===l},e.isStrictMode=function(t){return b(t)===a},e.isSuspense=function(t){return b(t)===f}});t(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var h=e(function(t,e){});t(h);h.typeOf,h.AsyncMode,h.ConcurrentMode,h.ContextConsumer,h.ContextProvider,h.Element,h.ForwardRef,h.Fragment,h.Lazy,h.Memo,h.Portal,h.Profiler,h.StrictMode,h.Suspense,h.isValidElementType,h.isAsyncMode,h.isConcurrentMode,h.isContextConsumer,h.isContextProvider,h.isElement,h.isForwardRef,h.isFragment,h.isLazy,h.isMemo,h.isPortal,h.isProfiler,h.isStrictMode,h.isSuspense,e(function(t){t.exports=n});var g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function _(){}function b(){}b.resetWarningCache=_;function m(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}function O(t){return A((a(e,t),r(e,[{key:"init",value:function(){this._id=function(t){return t in N||(N[t]=0),++N[t]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e));function e(){return l(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}}var w,k,P,T,j=e(function(t){t.exports=function(){function t(t,e,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:b,resetWarningCache:_};return n.PropTypes=n}()}),E=e(function(t){function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=void 0===n?"undefined":x(n);if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&t.push(o)}else if("object"===r)for(var i in n)l.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}var l;l={}.hasOwnProperty,t.exports?(a.default=a,t.exports=a):window.classNames=a}),N={},A=(w=Object,k=w.getPrototypeOf||function(t){return t.__proto__},P=w.setPrototypeOf||function(t,e){return t.__proto__=e,t},T="object"===("undefined"==typeof Reflect?"undefined":x(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),P(new r,n.prototype)},function(t){var e=k(t);return P(t,P(function(){return T(e,arguments,k(this).constructor)},e))}),S={},R=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function M(t,e,n,r){var o=new R(e,i({},3<arguments.length&&void 0!==r?r:{},{detail:n}));return t.dispatchEvent(o)}var D=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function L(t){for(var n=t.className,r=!1,o=!0,e=arguments.length,i=Array(1<e?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var l=i.map(function(t){var e=function(t,e){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",e)}(t).test(n);e?r=!0:o=!1;return{className:t,hasClass:e}});return!(!o&&!r)&&l}function F(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}return!1}var I=/\s+/,U={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function $(n,t,r,o,e){var i=4<arguments.length&&void 0!==e?e:{},a=i.capture,l=void 0!==a&&a,s=i.passive,u=void 0===s||s;if(U[t]&&(t=U[t]),!n||!t)return null;var c=void 0===r?"undefined":x(r),p=r&&"string"===c;if("function"===c){if(o){var d=o;l=d.capture,u=d.passive}o=r}for(var f=D?{capture:l,passive:u}:l,h=p?function(t){var e=t.target;for(;!L(e,r)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,g=t.split(I),y=g.length,v=0;v<y;++v)n.addEventListener(g[v],h,f);return function t(){for(var e=0;e<y;++e)n.removeEventListener(g[e],h,f);F(this,t)}}function z(r,t,e){var o=1<arguments.length&&void 0!==t?t:0,n=2<arguments.length&&void 0!==e?e:{},i=n.leading,a=void 0!==i&&i,l=n.trailing,s=void 0===l||l,u=n.maxWait,c=void 0!==u&&u,p=void 0,d=void 0,f=void 0,h=void 0,g=!1,y=o!==c,v=!1!==c;function _(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return p=e,y&&(d&&clearTimeout(d),d=setTimeout(b,o)),v&&!f&&(f=setTimeout(m,c)),a&&!g&&(g=!0,h=r.apply(void 0,C(p))),h}return _.flush=function(){(d||f)&&(h=r.apply(void 0,C(p)));return O(),h},_.cancel=O,_;function b(){f&&clearTimeout(f),x()}function m(){d&&clearTimeout(d),x()}function x(){s&&(h=r.apply(void 0,C(p))),f=d=null,g=!1}function O(){d&&(clearTimeout(d),d=null),f&&(clearTimeout(f),f=null),p=void 0,g=!1}}window.__subscriptions=window.__subscriptions||{};var V=window.__subscriptions;function q(t,e,n){var r=$(2<arguments.length&&void 0!==n?n:document,t,e);V[t]||(V[t]={count:0});var o=V[t];return o.count++,o.onsubscribe||(o.onsubscribe=z(function(t){return function(){M(document,"pubsub/onsubscribe",t),M(document,"pubsub/onsubscribe/"+t,t),V[t]&&delete V[t].unsubscribe}}(t),100)),o.onsubscribe(),function(){o.count--,r.call(this),o.count<=0&&delete V[t]}}$(document,"pubsub/onsubscribe",function(t){var e=t.detail;V[e]||(V[e]={count:0});var n=V[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=f(t,3),n=e[0],r=e[1];M(e[2],n,r)}),delete n.queue)});function W(t,e){return t===e}var K;K=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:W;return function(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,e))?K.apply(void 0,arguments):void 0}}}}()(!0);function B(t){return-1!==Object.prototype.toString.call(t).indexOf("DocumentFragment")}var H=[];var G=1,J=3,Y=8;function Z(t,e){var n=t.nodeType;n===G&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),r=e.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(t){return n&&o&&-1===r.indexOf(t)},a=e.attributes,l=t.attributes,s=null,u=null,c=null,p=null,d=l.length-1;0<=d;--d)if(p=l[d],c=p.name,s=p.namespaceURI,u=p.value,!i(c))if(s){var f=p.localName;e.getAttributeNS(s,f||c)!==u&&e.setAttributeNS(s,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,s=p.namespaceURI,i(c))continue;s?(c=p.localName||c,t.hasAttributeNS(s,c)||e.removeAttributeNS(s,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==J&&n!==Y||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function X(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,r=e.value;Q(t,e,"checked"),Q(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?function(t,e){Q(t,e,"selected")}(t,e):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,r=0,o=e.firstChild,i=void 0,a=void 0;for(;o;)if("OPTGROUP"===(a=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===a){if(o.hasAttributeNS(null,"selected")){n=r;break}r+=1}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}e.selectedIndex=n}(0,e)}function Q(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var tt=3;function et(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(Z(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=e.childNodes[l],r=t.childNodes[l-a],n||r;l++)if(r)if(n)if(nt(r,n))(o=et(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var s=l;s<e.childNodes.length;s++)if(nt(e.childNodes[s],r)){i=e.childNodes[s];break}i?((o=et(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=et(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),l--}(t,e),X(t,e),e):null:t}function nt(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===tt&&t.nodeValue===e.nodeValue)}var rt,ot,it,at,lt,st=(rt=Object,ot=rt.getPrototypeOf||function(t){return t.__proto__},it=rt.setPrototypeOf||function(t,e){return t.__proto__=e,t},at="object"===("undefined"==typeof Reflect?"undefined":x(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),it(new r,n.prototype)},function(t){var e=ot(t);return it(t,it(function(){return at(e,arguments,ot(this).constructor)},e))})((lt=Error,a(ut,lt),ut));function ut(t){var e;l(this,ut);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(e=ut.__proto__||Object.getPrototypeOf(ut)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,ut),a.name="TemplateNoStringReturnException",a}var ct=!!document.createDocumentFragment().children,pt=0;function dt(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===pt&&(pt++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(dt,n),pt--),n}(n)),t}var ft=j;Object.keys(ft).reduce(dt,ft);var ht=ft.oneOf(["left","center","right"]),gt=ft.oneOf(["left","right"]),yt=(ft.oneOf(["top","bottom"]),ft.oneOf(["up","down"])),vt=ft.oneOf(["ok","pending","error","unknown"]),_t=ft.oneOf(["row","col","rowgroup","colgroup","auto"]),bt=ft.oneOfType([ft.string,ft.number]),mt={text:bt,value:ft.any,rowspan:bt,colspan:bt,scope:_t,align:ht,dense:ft.bool},xt={float:gt,strong:ft.bool,bold:ft.bool},Ot=ft.oneOfType([ft.string,ft.number]),Ct=ft.oneOfType([Ot,ft.shape(i({},mt,{sort:yt,sortActive:ft.bool}))]),wt=ft.oneOfType([Ot,ft.shape(i({},mt,xt,{action:ft.bool,state:vt}))]),kt=ft.oneOfType([Ot,ft.shape(i({},mt,xt))]),Pt=ft.oneOfType([ft.arrayOf(Ct),ft.shape({cells:ft.arrayOf(Ct)})]),Tt=ft.oneOfType([ft.arrayOf(wt),ft.shape({cells:ft.arrayOf(wt),action:ft.bool})]),jt=ft.oneOfType([ft.arrayOf(kt),ft.shape({cells:ft.arrayOf(kt)})]),Et=(ft.oneOfType([Pt,ft.arrayOf(Pt)]),ft.oneOfType([Tt,ft.arrayOf(Tt)]),ft.oneOfType([jt,ft.arrayOf(jt)]),/[A-Z]/g);function Nt(t){return t.replace(Et,At)}function At(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var St=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Rt(e,n,t){var r=e;if(t)return function(e,n,t){var r=e;switch(t){case ft.string:case ft.string.isRequired:return e;case ft.bool:case ft.bool.isRequired:if(!e||n===e)return!0;case ft.number:case ft.number.isRequired:case ft.object:case ft.object.isRequired:case ft.array:case ft.array.isRequired:default:if(St.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return r}(e,n,t);if(e&&n!==e){if(St.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else r=!0;return r}var Mt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Dt=/[-_]+/g;function Lt(t){return t.replace(Mt,Ft)}function Ft(t,e){return 0==+t||Dt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function It(t,e,n){var r=1===t.nodeType,o=t.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Lt(e)]);if(r&&!t.hasAttribute(e))return i!==ft.bool&&i!==ft.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=Rt(a,e,i)}var Ut=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function $t(n,t,r,e){var o=3<arguments.length&&void 0!==e?e:{},i=o.capture,a=void 0===i||i,l=o.passive,s=void 0===l||l,u=n.ownerDocument.documentElement,c=$(u,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return r(t)},{capture:a,passive:s});return function(t){Ut&&(t.style.cursor="pointer")}(u),c}var zt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=e.length,o={},i=0;i<r;++i){var a=e[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Vt="axa-change",qt="data-prevent-default";function Wt(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,Wt),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,r=e!==i._lastToggleNode,o=!n&&!r;n?(i._notify(zt.ENTER,e),i._onInteractive()):r&&i._notify(zt.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){t.key!==zt.ESCAPE&&t.key!==zt.ESC&&27!==t.keyCode||(t.preventDefault(),i._close())},this._init(t,e)}(r(Wt,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=i({},Wt.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=$(this._container,zt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,r=e.outerClose,o=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=$(t,zt.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=$t(t,zt.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=$(t.ownerDocument,zt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(qt)?It(t,qt):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(zt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),Wt).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Kt=m(function(t){var e,n;return a(r,t),n=e=r,e.version="2.0.1-beta.264",n;function r(){return l(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}},function(t){return a(n,t),r(n,[{key:"init",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=q("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e,n){var r=2<arguments.length&&void 0!==n?n:document;V[t]||(V[t]={count:0,queue:[]});var o=V[t].queue;Array.isArray(o)?o.push([t,e,r]):M(r,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n;function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},function(t){return a(i,t),r(i,[{key:"appendChild",value:function(t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,t);var e=this._lightDOMRefs;return B(t)?Array.from(t.childNodes).forEach(function(t){t.__isPatching=!0,e.push(t)}):(t.__isPatching=!0,e.push(t)),this.render(),t}},{key:"append",value:function(){for(var t,e=this,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];!this._isMorphing&&this._hasTemplate&&this._hasRendered?(r.forEach(function(t){"string"==typeof t&&(t=document.createTextNode(t)),t.__isPatching=!0,e._lightDOMRefs.push(t)}),this.render()):(t=u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"append",this)).call.apply(t,[this].concat(r))}},{key:"insertBefore",value:function(t,e){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"insertBefore",this).call(this,t,e);var n=this._lightDOMRefs,r=n.indexOf(e);return-1!==r&&(r=n.length),B(t)?Array.from(t.childNodes).forEach(function(t,e){t.__isPatching=!0,n.splice(r+e,0,t)}):(t.__isPatching=!0,n.splice(r,0,t)),this.render(),t}},{key:"removeChild",value:function(e){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"removeChild",this).call(this,e);var t=e.parentNode.removeChild(e);return this._lightDOMRefs=this._lightDOMRefs.filter(function(t){return t!==e}),this.render(),t}},{key:"replaceChild",value:function(t,e){return!this._isMorphing&&this._hasTemplate&&this._hasRendered?e.parentNode.replaceChild(t,e):u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"replaceChild",this).call(this,t,e)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);e.__isPatching=!0,this._lightDOMRefs=[e],this.render()}else s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);e.__isPatching=!0,this._lightDOMRefs=[e],this.render()}else s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children).map(function(t){return t.__isPatching=!0,t}),this.render()}else s(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",t,this)}}]),i;function i(){return l(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(t){return a(i,t),r(i,[{key:"init",value:function(t){var e=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=z(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){Lt(t)})}},{key:"connectedCallback",value:function(){var r=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var e=Lt(t);if(r.hasAttribute(t)){var n=It(r,t,o[e]);r.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var r=Lt(t);if(this.hasAttribute(t)){var o=this.constructor.propTypes;this.props[r]=Rt(n,t,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==n&&M(this,Vt,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var a=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var e=this.constructor.observedAttributes,n=void 0===e?[]:e,r=Object.keys(t).filter(function(t){return-1<n.indexOf(Nt(t))}).reduce(function(t,e){var n=t.props,r=t.shouldUpdate,o=n[e],i=a.props&&a.props[e]?a.props[e]:void 0;return r||a.shouldUpdateCallback(o,i)?(a.props[e]=o,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected?this.updated&&this.updated():r&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,r=this.props;e&&ft.checkPropTypes(e,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Nt)}}]),i;function i(){return l(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(t){return a(s,t),r(s,[{key:"init",value:function(t){var e=0<arguments.length&&void 0!==t?t:{},n=e.template,r=p(e,["template"]);u(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"init",this).call(this,r),this._template=n,this._hasTemplate=!!n,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){if(!0===t.__isPatching)return n.childrenFragment.appendChild(t),void delete t.__isPatching;var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});ct||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new st(this);a.appendChild(i)}if(t)u(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":x(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":x(e)))throw new Error("componentMorph: newTree should be an object");et(e,t)}(this,l),function(){for(var t=void 0;t=H.pop();)delete t.isSameNode;H=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),s;function s(){return l(this,s),d(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}},function(t){return a(i,t),r(i,[{key:"init",value:function(t){var e=0<arguments.length&&void 0!==t?t:{},n=e.styles,r=void 0===n?"":n,o=p(e,["styles"]);u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,o),this._styles=r}},{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(t){var e=0<arguments.length&&void 0!==t?t:this;if(this._styles){var n=document.createElement("style"),r=document.createTextNode(this._styles);n.appendChild(r),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}}]),i;function i(){return l(this,i),d(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}}),Bt=(m(Kt,O),m(Kt,function(i){return a(n,i),r(n,[{key:"init",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t,e){var n=1<arguments.length&&void 0!==e?e:i.uuidv4();if(t&&!S[n]){var r=document.createElement("style"),o=document.createTextNode(t);S[n]=!0,r.appendChild(o),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n;function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},O));var Ht,Gt,Jt,Yt=Bt(HTMLTableCellElement),Zt=(a(Xt,Yt),r(Xt,[{key:"init",value:function(){u(Xt.prototype.__proto__||Object.getPrototypeOf(Xt.prototype),"init",this).call(this,{styles:".a-td {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 10px 15px;\n  border-top: 1px solid #e5e5e5;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .a-td {\n      font-size: 16px; } }\n  .a-td:first-child {\n    padding-left: 14px;\n    border-left: 1px solid transparent; }\n  .a-td:last-child {\n    padding-right: 14px;\n    border-right: 1px solid transparent; }\n  @media (max-width: 767px) {\n    .a-td {\n      display: block;\n      padding: 2px 10px;\n      border-top: none; }\n      .a-td:first-child {\n        padding-left: 9px;\n        border-left: 1px solid transparent; }\n      .a-td:last-child {\n        padding-right: 9px;\n        border-right: 1px solid transparent; } }\n\n.a-td--foot {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #333;\n  background: #f5f5f5; }\n  @media (min-width: 576px) {\n    .a-td--foot {\n      font-size: 16px; } }\n\n.o-table__row--foot:first-child > .a-td--foot {\n  border-top: none; }\n\n.a-td--state-ok::before, .a-td--state-pending::before, .a-td--state-error::before, .a-td--state-unknown::before {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  margin-right: 20px;\n  border-radius: 8px;\n  vertical-align: middle;\n  content: ''; }\n  @media (max-width: 767px) {\n    .a-td--state-ok::before, .a-td--state-pending::before, .a-td--state-error::before, .a-td--state-unknown::before {\n      margin-right: 10px; } }\n\n.u-align-left {\n  text-align: left; }\n\n.u-align-center {\n  text-align: center; }\n\n.u-align-right {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs-down {\n    text-align: left; }\n  .u-align-center-xs-down {\n    text-align: center; }\n  .u-align-right-xs-down {\n    text-align: right; } }\n\n.u-align-left-xs-up {\n  text-align: left; }\n\n.u-align-center-xs-up {\n  text-align: center; }\n\n.u-align-right-xs-up {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs {\n    text-align: left; }\n  .u-align-center-xs {\n    text-align: center; }\n  .u-align-right-xs {\n    text-align: right; } }\n\n@media (max-width: 767px) {\n  .u-align-left-sm-down {\n    text-align: left; }\n  .u-align-center-sm-down {\n    text-align: center; }\n  .u-align-right-sm-down {\n    text-align: right; } }\n\n@media (min-width: 576px) {\n  .u-align-left-sm-up {\n    text-align: left; }\n  .u-align-center-sm-up {\n    text-align: center; }\n  .u-align-right-sm-up {\n    text-align: right; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .u-align-left-sm {\n    text-align: left; }\n  .u-align-center-sm {\n    text-align: center; }\n  .u-align-right-sm {\n    text-align: right; } }\n\n@media (max-width: 991px) {\n  .u-align-left-md-down {\n    text-align: left; }\n  .u-align-center-md-down {\n    text-align: center; }\n  .u-align-right-md-down {\n    text-align: right; } }\n\n@media (min-width: 768px) {\n  .u-align-left-md-up {\n    text-align: left; }\n  .u-align-center-md-up {\n    text-align: center; }\n  .u-align-right-md-up {\n    text-align: right; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .u-align-left-md {\n    text-align: left; }\n  .u-align-center-md {\n    text-align: center; }\n  .u-align-right-md {\n    text-align: right; } }\n\n@media (max-width: 1199px) {\n  .u-align-left-lg-down {\n    text-align: left; }\n  .u-align-center-lg-down {\n    text-align: center; }\n  .u-align-right-lg-down {\n    text-align: right; } }\n\n@media (min-width: 992px) {\n  .u-align-left-lg-up {\n    text-align: left; }\n  .u-align-center-lg-up {\n    text-align: center; }\n  .u-align-right-lg-up {\n    text-align: right; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .u-align-left-lg {\n    text-align: left; }\n  .u-align-center-lg {\n    text-align: center; }\n  .u-align-right-lg {\n    text-align: right; } }\n\n@media (max-width: 1439px) {\n  .u-align-left-xl-down {\n    text-align: left; }\n  .u-align-center-xl-down {\n    text-align: center; }\n  .u-align-right-xl-down {\n    text-align: right; } }\n\n@media (min-width: 1200px) {\n  .u-align-left-xl-up {\n    text-align: left; }\n  .u-align-center-xl-up {\n    text-align: center; }\n  .u-align-right-xl-up {\n    text-align: right; } }\n\n@media (min-width: 1200px) and (max-width: 1439px) {\n  .u-align-left-xl {\n    text-align: left; }\n  .u-align-center-xl {\n    text-align: center; }\n  .u-align-right-xl {\n    text-align: right; } }\n\n.u-align-left-xxl-down {\n  text-align: left; }\n\n.u-align-center-xxl-down {\n  text-align: center; }\n\n.u-align-right-xxl-down {\n  text-align: right; }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl-up {\n    text-align: left; }\n  .u-align-center-xxl-up {\n    text-align: center; }\n  .u-align-right-xxl-up {\n    text-align: right; } }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl {\n    text-align: left; }\n  .u-align-center-xxl {\n    text-align: center; }\n  .u-align-right-xxl {\n    text-align: right; } }\n\n.a-td--dense {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.a-td--strong {\n  color: #333; }\n\n.a-td--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #333; }\n  @media (min-width: 576px) {\n    .a-td--bold {\n      font-size: 16px; } }\n\n.a-td--action:hover, .a-td--action:focus {\n  cursor: pointer;\n  color: #00008f; }\n\n.a-td--state-ok {\n  color: #1cc54e !important; }\n  .a-td--state-ok::before {\n    background: #1cc54e; }\n\n.a-td--state-pending {\n  color: #f07662 !important; }\n  .a-td--state-pending::before {\n    background: #f07662; }\n\n.a-td--state-error {\n  color: #c91432 !important; }\n  .a-td--state-error::before {\n    background: #c91432; }\n\n.a-td--state-unknown {\n  color: #ccc !important; }\n  .a-td--state-unknown::before {\n    background: #ccc; }\n"})}},{key:"willRenderCallback",value:function(){var t,e=this.props,n=e.classes,r=e.action,o=e.align,i=e.bold,a=e.dense,l=e.float,s=e.state,u=e.strong;this.className=E("a-td",n,(c(t={"a-td--action":r,"a-td--strong":u,"a-td--bold":i,"a-td--dense":a},"u-align-"+o,o),c(t,"o-table__cell--float-"+l,l),c(t,"a-td--state-"+s,s),t))}}]),Xt);function Xt(){return l(this,Xt),d(this,(Xt.__proto__||Object.getPrototypeOf(Xt)).apply(this,arguments))}return Zt.tagName="axa-td",Zt.builtInTagName="td",Zt.propTypes={classes:j.string,action:j.bool,align:ht,bold:j.bool,dense:j.bool,float:gt,state:vt,strong:j.bool},Ht=Zt.tagName,Jt={extends:(Gt=Zt).builtInTagName},customElements.get(Ht)||customElements.define(Ht,Gt,Jt),Zt}();
