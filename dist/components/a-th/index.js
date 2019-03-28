var StyleGuideWebComponent=function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function e(t,e){return t(e={exports:{}},e.exports),e.exports}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),s=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},l=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},p=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},o=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},d=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},n=e(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function g(t){if("object"===(void 0===t?"undefined":b(t))&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case c:case p:case i:case l:case a:case f:return t;default:switch(t=t&&t.$$typeof){case u:case d:case s:return t;default:return e}}case y:case h:case o:return e}}}function v(t){return g(t)===p}e.typeOf=g,e.AsyncMode=c,e.ConcurrentMode=p,e.ContextConsumer=u,e.ContextProvider=s,e.Element=r,e.ForwardRef=d,e.Fragment=i,e.Lazy=y,e.Memo=h,e.Portal=o,e.Profiler=l,e.StrictMode=a,e.Suspense=f,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===p||t===l||t===a||t===f||"object"===(void 0===t?"undefined":b(t))&&null!==t&&(t.$$typeof===y||t.$$typeof===h||t.$$typeof===s||t.$$typeof===u||t.$$typeof===d)},e.isAsyncMode=function(t){return v(t)||g(t)===c},e.isConcurrentMode=v,e.isContextConsumer=function(t){return g(t)===u},e.isContextProvider=function(t){return g(t)===s},e.isElement=function(t){return"object"===(void 0===t?"undefined":b(t))&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return g(t)===d},e.isFragment=function(t){return g(t)===i},e.isLazy=function(t){return g(t)===y},e.isMemo=function(t){return g(t)===h},e.isPortal=function(t){return g(t)===o},e.isProfiler=function(t){return g(t)===l},e.isStrictMode=function(t){return g(t)===a},e.isSuspense=function(t){return g(t)===f}});t(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var f=e(function(t,e){});t(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,e(function(t){t.exports=n});var h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function _(){}_.resetWarningCache=v;var m,C,O,w,k=e(function(t){t.exports=function(){function t(t,e,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_,resetWarningCache:v};return n.PropTypes=n}()}),P=e(function(t){!function(){var a={}.hasOwnProperty;function l(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var r=void 0===n?"undefined":b(n);if("string"===r||"number"===r)t.push(n);else if(Array.isArray(n)&&n.length){var o=l.apply(null,n);o&&t.push(o)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(l.default=l,t.exports=l):window.classNames=l}()}),T=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},j={},E=(m=Object,C=m.getPrototypeOf||function(t){return t.__proto__},O=m.setPrototypeOf||function(t,e){return t.__proto__=e,t},w="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),O(new r,n.prototype)},function(t){var e=C(t);return O(t,O(function(){return w(e,arguments,C(this).constructor)},e))}),A=function(n){return E(function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,n),a(e,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in j||(j[t]=0),++j[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},N={},S=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function R(t,e,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new S(e,i({},r,{detail:n}));return t.dispatchEvent(o)}var M=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function D(t){for(var o=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&l}function L(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}return!1}var F=/\s+/,I={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function U(n,t,r,o){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,l=e.passive,s=void 0===l||l;if(I[t]&&(t=I[t]),!n||!t)return null;var u=void 0===r?"undefined":b(r),c=r&&"string"===u;if("function"===u){if(o){var p=o;a=p.capture,s=p.passive}o=r}for(var d=M?{capture:a,passive:s}:a,f=c?function(t){var e=t.target;for(;!D(e,r)&&e!==n;)e=e.parentNode;if(e!==n)return o(t,e)}:o,h=t.split(F),y=h.length,g=0;g<y;++g)n.addEventListener(h[g],f,d);return function t(){for(var e=0;e<y;++e)n.removeEventListener(h[e],f,d);L(this,t)}}function $(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,l=t.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=o!==s,y=!1!==s;function g(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return u=e,h&&(c&&clearTimeout(c),c=setTimeout(v,o)),y&&!p&&(p=setTimeout(b,s)),i&&!f&&(f=!0,d=r.apply(void 0,x(u))),d}return g.flush=function(){(c||p)&&(d=r.apply(void 0,x(u)));return m(),d},g.cancel=m,g;function v(){p&&clearTimeout(p),_()}function b(){c&&clearTimeout(c),_()}function _(){a&&(d=r.apply(void 0,x(u))),p=c=null,f=!1}function m(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var V=window.__subscriptions;function q(t,e){var n=U(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);V[t]||(V[t]={count:0});var r,o=V[t];return o.count++,o.onsubscribe||(o.onsubscribe=$((r=t,function(){R(document,"pubsub/onsubscribe",r),R(document,"pubsub/onsubscribe/"+r,r),V[r]&&delete V[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete V[t]}}U(document,"pubsub/onsubscribe",function(t){var e=t.detail;V[e]||(V[e]={count:0});var n=V[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=d(t,3),n=e[0],r=e[1],o=e[2];R(o,n,r)}),delete n.queue)});var z,W=function(t,e){return t===e},K=(z=function(){var t;return(t=console).log.apply(t,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:W;return function(){for(var t=arguments.length,r=Array(t),e=0;e<t;e++)r[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,e))?z.apply(void 0,arguments):void 0}}}}()(!0),[]);var H=1,G=3,B=8;function J(t,e){var n=t.nodeType;n===H&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),r=e.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(t){return n&&o&&-1===r.indexOf(t)},a=e.attributes,l=t.attributes,s=null,u=null,c=null,p=null,d=l.length-1;0<=d;--d)if(p=l[d],c=p.name,s=p.namespaceURI,u=p.value,!i(c))if(s){var f=p.localName;e.getAttributeNS(s,f||c)!==u&&e.setAttributeNS(s,c,u)}else e.hasAttribute(c)?e.getAttribute(c)!==u&&("null"===u||"undefined"===u?e.removeAttribute(c):e.setAttribute(c,u)):e.setAttribute(c,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(c=p.name,s=p.namespaceURI,i(c))continue;s?(c=p.localName||c,t.hasAttributeNS(s,c)||e.removeAttributeNS(s,c)):t.hasAttributeNS(null,c)||e.removeAttribute(c)}}(t,e),n!==G&&n!==B||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function Y(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,r=e.value;Z(t,e,"checked"),Z(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?Z(t,e,"selected"):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,r=0,o=e.firstChild,i=void 0,a=void 0;for(;o;)if("OPTGROUP"===(a=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===a){if(o.hasAttributeNS(null,"selected")){n=r;break}r+=1}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}e.selectedIndex=n}(0,e)}function Z(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var X=3;function Q(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(J(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=e.childNodes[l],r=t.childNodes[l-a],n||r;l++)if(r)if(n)if(tt(r,n))(o=Q(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var s=l;s<e.childNodes.length;s++)if(tt(e.childNodes[s],r)){i=e.childNodes[s];break}i?((o=Q(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=Q(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),l--}(t,e),Y(t,e),e):null:t}function tt(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===X&&t.nodeValue===e.nodeValue)}var et,nt,rt,ot,it=(et=Object,nt=et.getPrototypeOf||function(t){return t.__proto__},rt=et.setPrototypeOf||function(t,e){return t.__proto__=e,t},ot="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),rt(new r,n.prototype)},function(t){var e=nt(t);return rt(t,rt(function(){return ot(e,arguments,nt(this).constructor)},e))})(function(t){function l(t){var e;u(this,l);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=p(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return r(l,t),l}(Error)),at=!!document.createDocumentFragment().children,lt=0;function st(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===lt&&(lt++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(st,n),lt--),n}(n)),t}var ut=k;Object.keys(ut).reduce(st,ut);var ct=ut.oneOf(["left","center","right"]),pt=ut.oneOf(["left","right"]),dt=(ut.oneOf(["top","bottom"]),ut.oneOf(["up","down"])),ft=ut.oneOf(["ok","pending","error","unknown"]),ht=ut.oneOf(["row","col","rowgroup","colgroup","auto"]),yt=ut.oneOfType([ut.string,ut.number]),gt={text:yt,value:ut.any,rowspan:yt,colspan:yt,scope:ht,align:ct,dense:ut.bool},vt={float:pt,strong:ut.bool,bold:ut.bool},bt=ut.oneOfType([ut.string,ut.number]),_t=ut.oneOfType([bt,ut.shape(i({},gt,{sort:dt,sortActive:ut.bool}))]),mt=ut.oneOfType([bt,ut.shape(i({},gt,vt,{action:ut.bool,state:ft}))]),xt=ut.oneOfType([bt,ut.shape(i({},gt,vt))]),Ct=ut.oneOfType([ut.arrayOf(_t),ut.shape({cells:ut.arrayOf(_t)})]),Ot=ut.oneOfType([ut.arrayOf(mt),ut.shape({cells:ut.arrayOf(mt),action:ut.bool})]),wt=ut.oneOfType([ut.arrayOf(xt),ut.shape({cells:ut.arrayOf(xt)})]),kt=(ut.oneOfType([Ct,ut.arrayOf(Ct)]),ut.oneOfType([Ot,ut.arrayOf(Ot)]),ut.oneOfType([wt,ut.arrayOf(wt)]),/[A-Z]/g);function Pt(t){return t.replace(kt,Tt)}function Tt(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var jt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Et(e,n,t){var r=e;if(t)return function(e,n,t){var r=e;switch(t){case ut.string:case ut.string.isRequired:return e;case ut.bool:case ut.bool.isRequired:if(!e||n===e)return!0;case ut.number:case ut.number.isRequired:case ut.object:case ut.object.isRequired:case ut.array:case ut.array.isRequired:default:if(jt.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return r}(e,n,t);if(e&&n!==e){if(jt.test(e))try{r=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else r=!0;return r}var At=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Nt=/[-_]+/g;function St(t){return t.replace(At,Rt)}function Rt(t,e){return 0==+t||Nt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Mt(t,e,n){var r=1===t.nodeType,o=t.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[St(e)]);if(r&&!t.hasAttribute(e))return i!==ut.bool&&i!==ut.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=Et(a,e,i)}var Dt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Lt(n,t,r){var e,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,l=o.passive,s=void 0===l||l,u=n.ownerDocument.documentElement,c=U(u,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return r(t)},{capture:a,passive:s});return e=u,Dt&&(e.style.cursor="pointer"),c}var Ft=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var r=e.length,o={},i=0;i<r;++i){var a=e[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),It="axa-change",Ut="data-prevent-default";(function(){function r(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,r=e!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Ft.ENTER,e),i._onInteractive()):r&&i._notify(Ft.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===Ft.ESCAPE||t.key===Ft.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return a(r,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=i({},r.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=U(this._container,Ft.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,r=e.outerClose,o=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=U(t,Ft.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Lt(t,Ft.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=U(t.ownerDocument,Ft.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(Ut)?Mt(t,Ut):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ft.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var $t=T(function(n){var t,e;return e=t=function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,n),e}(),t.version="2.0.1-beta.262",e},function(e){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),a(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=q("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;V[t]||(V[t]={count:0,queue:[]});var r=V[t].queue;Array.isArray(r)?r.push([t,e,n]):R(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(e){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),a(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function i(){return u(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return r(i,e),a(i,[{key:"init",value:function(t){var e=this;c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=$(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){St(t)})}},{key:"connectedCallback",value:function(){var r=this;if(c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var e=St(t);if(r.hasAttribute(t)){var n=Mt(r,t,o[e]);r.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var r=St(t);if(this.hasAttribute(t)){var o=this.constructor.propTypes;this.props[r]=Et(n,t,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==n&&R(this,It,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var a=this;c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var e=this.constructor.observedAttributes,n=void 0===e?[]:e,r=Object.keys(t).filter(function(t){return-1<n.indexOf(Pt(t))}).reduce(function(t,e){var n=t.props,r=t.shouldUpdate,o=n[e],i=a.props&&a.props[e]?a.props[e]:void 0;return r||a.shouldUpdateCallback(o,i)?(a.props[e]=o,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected?this.updated&&this.updated():r&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,r=this.props;e&&ut.checkPropTypes(e,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Pt)}}]),i}()},function(e){return function(t){function s(){return u(this,s),p(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return r(s,e),a(s,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=l(t,["template"]);c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});at||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new it(this);a.appendChild(i)}if(t)c(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: newTree should be an object");Q(e,t)}(this,l),function(){for(var t=void 0;t=K.pop();)delete t.isSameNode;K=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),s}()},function(e){return function(t){function o(){return u(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return r(o,e),a(o,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,r=l(t,["styles"]);c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),o}()}),Vt=(T($t,A),T($t,function(o){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,o),a(n,[{key:"init",value:function(t){var e=this;c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(t&&!N[e]){var n=document.createElement("style"),r=document.createTextNode(t);N[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),n}()},A));var qt,zt,Wt,Kt=Vt(HTMLTableCellElement),Ht=function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,Kt),a(e,[{key:"init",value:function(){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:".a-th {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 10px 15px;\n  border-top: 1px solid #e5e5e5;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .a-th {\n      font-size: 16px; } }\n  .a-th:first-child {\n    padding-left: 14px;\n    border-left: 1px solid transparent; }\n  .a-th:last-child {\n    padding-right: 14px;\n    border-right: 1px solid transparent; }\n  @media (max-width: 767px) {\n    .a-th {\n      display: none; } }\n\n.u-align-left {\n  text-align: left; }\n\n.u-align-center {\n  text-align: center; }\n\n.u-align-right {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs-down {\n    text-align: left; }\n  .u-align-center-xs-down {\n    text-align: center; }\n  .u-align-right-xs-down {\n    text-align: right; } }\n\n.u-align-left-xs-up {\n  text-align: left; }\n\n.u-align-center-xs-up {\n  text-align: center; }\n\n.u-align-right-xs-up {\n  text-align: right; }\n\n@media (max-width: 575px) {\n  .u-align-left-xs {\n    text-align: left; }\n  .u-align-center-xs {\n    text-align: center; }\n  .u-align-right-xs {\n    text-align: right; } }\n\n@media (max-width: 767px) {\n  .u-align-left-sm-down {\n    text-align: left; }\n  .u-align-center-sm-down {\n    text-align: center; }\n  .u-align-right-sm-down {\n    text-align: right; } }\n\n@media (min-width: 576px) {\n  .u-align-left-sm-up {\n    text-align: left; }\n  .u-align-center-sm-up {\n    text-align: center; }\n  .u-align-right-sm-up {\n    text-align: right; } }\n\n@media (min-width: 576px) and (max-width: 767px) {\n  .u-align-left-sm {\n    text-align: left; }\n  .u-align-center-sm {\n    text-align: center; }\n  .u-align-right-sm {\n    text-align: right; } }\n\n@media (max-width: 991px) {\n  .u-align-left-md-down {\n    text-align: left; }\n  .u-align-center-md-down {\n    text-align: center; }\n  .u-align-right-md-down {\n    text-align: right; } }\n\n@media (min-width: 768px) {\n  .u-align-left-md-up {\n    text-align: left; }\n  .u-align-center-md-up {\n    text-align: center; }\n  .u-align-right-md-up {\n    text-align: right; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .u-align-left-md {\n    text-align: left; }\n  .u-align-center-md {\n    text-align: center; }\n  .u-align-right-md {\n    text-align: right; } }\n\n@media (max-width: 1199px) {\n  .u-align-left-lg-down {\n    text-align: left; }\n  .u-align-center-lg-down {\n    text-align: center; }\n  .u-align-right-lg-down {\n    text-align: right; } }\n\n@media (min-width: 992px) {\n  .u-align-left-lg-up {\n    text-align: left; }\n  .u-align-center-lg-up {\n    text-align: center; }\n  .u-align-right-lg-up {\n    text-align: right; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .u-align-left-lg {\n    text-align: left; }\n  .u-align-center-lg {\n    text-align: center; }\n  .u-align-right-lg {\n    text-align: right; } }\n\n@media (max-width: 1439px) {\n  .u-align-left-xl-down {\n    text-align: left; }\n  .u-align-center-xl-down {\n    text-align: center; }\n  .u-align-right-xl-down {\n    text-align: right; } }\n\n@media (min-width: 1200px) {\n  .u-align-left-xl-up {\n    text-align: left; }\n  .u-align-center-xl-up {\n    text-align: center; }\n  .u-align-right-xl-up {\n    text-align: right; } }\n\n@media (min-width: 1200px) and (max-width: 1439px) {\n  .u-align-left-xl {\n    text-align: left; }\n  .u-align-center-xl {\n    text-align: center; }\n  .u-align-right-xl {\n    text-align: right; } }\n\n.u-align-left-xxl-down {\n  text-align: left; }\n\n.u-align-center-xxl-down {\n  text-align: center; }\n\n.u-align-right-xxl-down {\n  text-align: right; }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl-up {\n    text-align: left; }\n  .u-align-center-xxl-up {\n    text-align: center; }\n  .u-align-right-xxl-up {\n    text-align: right; } }\n\n@media (min-width: 1440px) {\n  .u-align-left-xxl {\n    text-align: left; }\n  .u-align-center-xxl {\n    text-align: center; }\n  .u-align-right-xxl {\n    text-align: right; } }\n\n.a-th--dense {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.a-th--sort::after {\n  position: relative;\n  margin-left: 5px; }\n\n.a-th--sort:hover {\n  cursor: pointer; }\n\n.a-th--sort-up::after {\n  border-bottom-color: #ccc;\n  width: 0;\n  height: 0;\n  font-size: 0;\n  line-height: 0;\n  content: '';\n  border-style: solid;\n  border-bottom-width: 4px;\n  border-top: none;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  top: -8px; }\n\n.a-th--sort-up:hover::after, .a-th--sort-up.a-th--sort-active::after {\n  border-bottom-color: #00008f; }\n\n.a-th--sort-down::after {\n  border-top-color: #ccc;\n  width: 0;\n  height: 0;\n  font-size: 0;\n  line-height: 0;\n  content: '';\n  border-style: solid;\n  border-top-width: 4px;\n  border-bottom: none;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  top: -4px; }\n\n.a-th--sort-down:hover::after, .a-th--sort-down.a-th--sort-active::after {\n  border-top-color: #00008f; }\n"})}},{key:"willRenderCallback",value:function(){var t,e=this.props,n=e.classes,r=e.align,o=e.sort,i=e.float,a=e.sortActive,l=e.dense;this.className=P("a-th",n,(s(t={},"u-align-"+r,r),s(t,"a-th--sort a-th--sort-"+o,o),s(t,"o-table__cell--float-"+i,i),s(t,"a-th--sort-active",a),s(t,"a-th--dense",l),t))}}]),e}();return Ht.tagName="axa-th",Ht.builtInTagName="th",Ht.propTypes={classes:k.string,align:ct,sort:dt,float:pt,sortActive:k.bool,dense:k.bool},qt=Ht.tagName,Wt={extends:(zt=Ht).builtInTagName},customElements.get(qt)||customElements.define(qt,zt,Wt),Ht}();
