!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n={},O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:u(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t,n,o){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);null!==i&&c(i,t,n,o)}else if("value"in r&&r.writable)r.value=n;else{var a=r.set;void 0!==a&&a.call(o,n)}return n}function t(e){return _((a(t,e),o(t,[{key:"init",value:function(){this._id=function(e){return e in n||(n[e]=0),++n[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t));function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}}var i,f,d,h,y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},_=(i=Object,f=i.getPrototypeOf||function(e){return e.__proto__},d=i.setPrototypeOf||function(e,t){return e.__proto__=t,e},h="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),d(new o,n.prototype)},function(e){var t=f(e);return d(e,d(function(){return h(t,arguments,f(this).constructor)},t))}),b={},m=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function g(e,t,n,o){var r=new m(t,y({},3<arguments.length&&void 0!==o?o:{},{detail:n}));return e.dispatchEvent(r)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function P(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function w(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}return!1}var x=/\s+/,T={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function j(n,e,o,r,t){var i=4<arguments.length&&void 0!==t?t:{},a=i.capture,s=void 0!==a&&a,c=i.passive,u=void 0===c||c;if(T[e]&&(e=T[e]),!n||!e)return null;var l=void 0===o?"undefined":O(o),p=o&&"string"===l;if("function"===l){if(r){var f=r;s=f.capture,u=f.passive}r=o}for(var d=C?{capture:s,passive:u}:s,h=p?function(e){var t=e.target;for(;!P(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,y=e.split(x),v=y.length,_=0;_<v;++_)n.addEventListener(y[_],h,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(y[t],h,d);w(this,e)}}function E(o,e,t){var r=1<arguments.length&&void 0!==e?e:0,n=2<arguments.length&&void 0!==t?t:{},i=n.leading,a=void 0!==i&&i,s=n.trailing,c=void 0===s||s,u=n.maxWait,l=void 0!==u&&u,p=void 0,f=void 0,d=void 0,h=void 0,y=!1,v=r!==l,_=!1!==l;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p=t,v&&(f&&clearTimeout(f),f=setTimeout(m,r)),_&&!d&&(d=setTimeout(g,l)),a&&!y&&(y=!0,h=o.apply(void 0,k(p))),h}return b.flush=function(){(f||d)&&(h=o.apply(void 0,k(p)));return C(),h},b.cancel=C,b;function m(){d&&clearTimeout(d),O()}function g(){f&&clearTimeout(f),O()}function O(){c&&(h=o.apply(void 0,k(p))),d=f=null,y=!1}function C(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),p=void 0,y=!1}}window.__subscriptions=window.__subscriptions||{};var N=window.__subscriptions;function S(e,t,n){var o=j(2<arguments.length&&void 0!==n?n:document,e,t);N[e]||(N[e]={count:0});var r=N[e];return r.count++,r.onsubscribe||(r.onsubscribe=E(function(e){return function(){g(document,"pubsub/onsubscribe",e),g(document,"pubsub/onsubscribe/"+e,e),N[e]&&delete N[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete N[e]}}j(document,"pubsub/onsubscribe",function(e){var t=e.detail;N[t]||(N[t]={count:0});var n=N[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=v(e,3),n=t[0],o=t[1];g(t[2],n,o)}),delete n.queue)});function A(e,t){return e===t}var R;R=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?R.apply(void 0,arguments):void 0}}}}()(!0);function M(e){return-1!==Object.prototype.toString.call(e).indexOf("DocumentFragment")}var D=[];var L=1,F=3,U=8;function I(e,t){var n=e.nodeType;n===L&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,p=null,f=s.length-1;0<=f;--f)if(p=s[f],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var d=p.localName;t.getAttributeNS(c,d||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==F&&n!==U||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function $(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;V(e,t,"checked"),V(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){V(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function V(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var q=3;function z(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(I(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Y(o,n))(r=z(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(Y(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=z(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=z(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),$(e,t),t):null:e}function Y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===q&&e.nodeValue===t.nodeValue)}var W,K,B,H,G,J=(W=Object,K=W.getPrototypeOf||function(e){return e.__proto__},B=W.setPrototypeOf||function(e,t){return e.__proto__=t,e},H="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),B(new o,n.prototype)},function(e){var t=K(e);return B(e,B(function(){return H(t,arguments,K(this).constructor)},t))})((G=Error,a(Z,G),Z));function Z(e){var t;s(this,Z);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=Z.__proto__||Object.getPrototypeOf(Z)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,Z),a.name="TemplateNoStringReturnException",a}var X=!!document.createDocumentFragment().children;function Q(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ee(e,t){return e(t={exports:{}},t.exports),t.exports}var te=ee(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118;function m(e){if("object"===(void 0===e?"undefined":O(e))&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case u:case f:case c:return e;default:return t}}case v:case y:case r:return t}}}function g(e){return m(e)===p}t.typeOf=m,t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=f,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=r,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===d||e===h||"object"===(void 0===e?"undefined":O(e))&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===_||e.$$typeof===b)},t.isAsyncMode=function(e){return g(e)||m(e)===l},t.isConcurrentMode=g,t.isContextConsumer=function(e){return m(e)===u},t.isContextProvider=function(e){return m(e)===c},t.isElement=function(e){return"object"===(void 0===e?"undefined":O(e))&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return m(e)===f},t.isFragment=function(e){return m(e)===i},t.isLazy=function(e){return m(e)===v},t.isMemo=function(e){return m(e)===y},t.isPortal=function(e){return m(e)===r},t.isProfiler=function(e){return m(e)===s},t.isStrictMode=function(e){return m(e)===a},t.isSuspense=function(e){return m(e)===d}});Q(te);te.typeOf,te.AsyncMode,te.ConcurrentMode,te.ContextConsumer,te.ContextProvider,te.Element,te.ForwardRef,te.Fragment,te.Lazy,te.Memo,te.Portal,te.Profiler,te.StrictMode,te.Suspense,te.isValidElementType,te.isAsyncMode,te.isConcurrentMode,te.isContextConsumer,te.isContextProvider,te.isElement,te.isForwardRef,te.isFragment,te.isLazy,te.isMemo,te.isPortal,te.isProfiler,te.isStrictMode,te.isSuspense;var ne=ee(function(e,t){});Q(ne);ne.typeOf,ne.AsyncMode,ne.ConcurrentMode,ne.ContextConsumer,ne.ContextProvider,ne.Element,ne.ForwardRef,ne.Fragment,ne.Lazy,ne.Memo,ne.Portal,ne.Profiler,ne.StrictMode,ne.Suspense,ne.isValidElementType,ne.isAsyncMode,ne.isConcurrentMode,ne.isContextConsumer,ne.isContextProvider,ne.isElement,ne.isForwardRef,ne.isFragment,ne.isLazy,ne.isMemo,ne.isPortal,ne.isProfiler,ne.isStrictMode,ne.isSuspense,ee(function(e){e.exports=te});var oe=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function ae(){}function se(){}se.resetWarningCache=ae;var ce=ee(function(e){e.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:se,resetWarningCache:ae};return n.PropTypes=n}()}),ue=0;function le(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===ue&&(ue++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(le,n),ue--),n}(n)),e}var pe=ce;Object.keys(pe).reduce(le,pe);var fe=pe.oneOf(["left","center","right"]),de=pe.oneOf(["left","right"]),he=(pe.oneOf(["top","bottom"]),pe.oneOf(["up","down"])),ye=pe.oneOf(["ok","pending","error","unknown"]),ve=pe.oneOf(["row","col","rowgroup","colgroup","auto"]),_e=pe.oneOfType([pe.string,pe.number]),be={text:_e,value:pe.any,rowspan:_e,colspan:_e,scope:ve,align:fe,dense:pe.bool},me={float:de,strong:pe.bool,bold:pe.bool},ge=pe.oneOfType([pe.string,pe.number]),Oe=pe.oneOfType([ge,pe.shape(y({},be,{sort:he,sortActive:pe.bool}))]),Ce=pe.oneOfType([ge,pe.shape(y({},be,me,{action:pe.bool,state:ye}))]),ke=pe.oneOfType([ge,pe.shape(y({},be,me))]),Pe=pe.oneOfType([pe.arrayOf(Oe),pe.shape({cells:pe.arrayOf(Oe)})]),we=pe.oneOfType([pe.arrayOf(Ce),pe.shape({cells:pe.arrayOf(Ce),action:pe.bool})]),xe=pe.oneOfType([pe.arrayOf(ke),pe.shape({cells:pe.arrayOf(ke)})]),Te=(pe.oneOfType([Pe,pe.arrayOf(Pe)]),pe.oneOfType([we,pe.arrayOf(we)]),pe.oneOfType([xe,pe.arrayOf(xe)]),/[A-Z]/g);function je(e){return e.replace(Te,Ee)}function Ee(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Ne=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Se(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case pe.string:case pe.string.isRequired:return t;case pe.bool:case pe.bool.isRequired:if(!t||n===t)return!0;case pe.number:case pe.number.isRequired:case pe.object:case pe.object.isRequired:case pe.array:case pe.array.isRequired:default:if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Ae=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Re=/[-_]+/g;function Me(e){return e.replace(Ae,De)}function De(e,t){return 0==+e||Re.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Le(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Me(t)]);if(o&&!e.hasAttribute(t))return i!==pe.bool&&i!==pe.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Se(a,t,i)}var Fe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ue(n,e,o,t){var r=3<arguments.length&&void 0!==t?t:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,u=n.ownerDocument.documentElement,l=j(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return function(e){Fe&&(e.style.cursor="pointer")}(u),l}var Ie=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),$e="axa-change",Ve="data-prevent-default";function qe(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};s(this,qe),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Ie.ENTER,t),i._onInteractive()):o&&i._notify(Ie.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){e.key!==Ie.ESCAPE&&e.key!==Ie.ESC&&27!==e.keyCode||(e.preventDefault(),i._close())},this._init(e,t)}(o(qe,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=y({},qe.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=j(this._container,Ie.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=j(e,Ie.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Ue(e,Ie.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=j(e.ownerDocument,Ie.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ve)?Le(e,Ve):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ie.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),qe).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ze=e(function(e){var t,n;return a(o,e),n=t=o,t.version="2.0.1-beta.264",n;function o(){return s(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}},function(e){return a(n,e),o(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=S("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t,n){var o=2<arguments.length&&void 0!==n?n:document;N[e]||(N[e]={count:0,queue:[]});var r=N[e].queue;Array.isArray(r)?r.push([e,t,o]):g(o,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"appendChild",value:function(e){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e);var t=this._lightDOMRefs;return M(e)?Array.from(e.childNodes).forEach(function(e){e.__isPatching=!0,t.push(e)}):(e.__isPatching=!0,t.push(e)),this.render(),e}},{key:"append",value:function(){for(var e,t=this,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];!this._isMorphing&&this._hasTemplate&&this._hasRendered?(o.forEach(function(e){"string"==typeof e&&(e=document.createTextNode(e)),e.__isPatching=!0,t._lightDOMRefs.push(e)}),this.render()):(e=u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"append",this)).call.apply(e,[this].concat(o))}},{key:"insertBefore",value:function(e,t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"insertBefore",this).call(this,e,t);var n=this._lightDOMRefs,o=n.indexOf(t);return-1!==o&&(o=n.length),M(e)?Array.from(e.childNodes).forEach(function(e,t){e.__isPatching=!0,n.splice(o+t,0,e)}):(e.__isPatching=!0,n.splice(o,0,e)),this.render(),e}},{key:"removeChild",value:function(t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"removeChild",this).call(this,t);var e=t.parentNode.removeChild(t);return this._lightDOMRefs=this._lightDOMRefs.filter(function(e){return e!==t}),this.render(),e}},{key:"replaceChild",value:function(e,t){return!this._isMorphing&&this._hasTemplate&&this._hasRendered?t.parentNode.replaceChild(e,t):u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"replaceChild",this).call(this,e,t)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children).map(function(e){return e.__isPatching=!0,e}),this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"init",value:function(e){var t=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=E(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Me(e)})}},{key:"connectedCallback",value:function(){var o=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Me(e);if(o.hasAttribute(e)){var n=Le(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Me(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Se(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&g(this,$e,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(je(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&pe.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(je)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(c,e),o(c,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.template,o=l(t,["template"]);u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,o),this._template=n,this._hasTemplate=!!n,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){if(!0===e.__isPatching)return n.childrenFragment.appendChild(e),void delete e.__isPatching;var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});X||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new J(this);a.appendChild(i)}if(e)u(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":O(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":O(t)))throw new Error("componentMorph: newTree should be an object");z(t,e)}(this,s),function(){for(var e=void 0;e=D.pop();)delete e.isSameNode;D=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c;function c(){return s(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.styles,o=void 0===n?"":n,r=l(t,["styles"]);u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(e){var t=0<arguments.length&&void 0!==e?e:this;if(this._styles){var n=document.createElement("style"),o=document.createTextNode(this._styles);n.appendChild(o),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}}),Ye=(e(ze,t),e(ze,function(i){return a(n,i),o(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:i.uuidv4();if(e&&!b[n]){var o=document.createElement("style"),r=document.createTextNode(e);b[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},t)(HTMLElement));var We,Ke,Be,He=(a(Ge,Ye),o(Ge,[{key:"init",value:function(){u(Ge.prototype.__proto__||Object.getPrototypeOf(Ge.prototype),"init",this).call(this,{styles:".o-header {\n  position: relative;\n  display: block; }\n\n.o-header__fade .o-sticky__box {\n  width: 100%;\n  height: 100%;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n\n.o-header__fade.is-sticky-sticky > .o-sticky__box {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.o-header__fade.is-sticky-sticky.is-sticky-scroll-down > .o-sticky__box {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n.o-header__fade.is-sticky-sticky.is-sticky-scroll-up > .o-sticky__box {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n"}),this.provideContext()}},{key:"connectedCallback",value:function(){u(Ge.prototype.__proto__||Object.getPrototypeOf(Ge.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-header"}}]),Ge);function Ge(){return s(this,Ge),p(this,(Ge.__proto__||Object.getPrototypeOf(Ge)).apply(this,arguments))}return He.tagName="axa-header",We=He.tagName,Ke=He,customElements.get(We)||customElements.define(We,Ke,Be),He});
