!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:l(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t,n,o){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);null!==i&&c(i,t,n,o)}else if("value"in r&&r.writable)r.value=n;else{var a=r.set;void 0!==a&&a.call(o,n)}return n}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118;function m(e){if("object"===(void 0===e?"undefined":O(e))&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case p:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case l:case d:case c:return e;default:return t}}case v:case y:case r:return t}}}function g(e){return m(e)===p}t.typeOf=m,t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=r,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===f||e===h||"object"===(void 0===e?"undefined":O(e))&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===_||e.$$typeof===b)},t.isAsyncMode=function(e){return g(e)||m(e)===u},t.isConcurrentMode=g,t.isContextConsumer=function(e){return m(e)===l},t.isContextProvider=function(e){return m(e)===c},t.isElement=function(e){return"object"===(void 0===e?"undefined":O(e))&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return m(e)===d},t.isFragment=function(e){return m(e)===i},t.isLazy=function(e){return m(e)===v},t.isMemo=function(e){return m(e)===y},t.isPortal=function(e){return m(e)===r},t.isProfiler=function(e){return m(e)===s},t.isStrictMode=function(e){return m(e)===a},t.isSuspense=function(e){return m(e)===f}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var f=t(function(e,t){});e(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,t(function(e){e.exports=n});var h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function _(){}function b(){}b.resetWarningCache=_;var m=t(function(e){e.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:_};return n.PropTypes=n}()}),g=0;function C(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(C,n),g--),n}(n)),e}var x=m;Object.keys(x).reduce(C,x);function w(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}function P(e){return G((a(t,e),o(t,[{key:"init",value:function(){this._id=function(e){return e in K||(K[e]=0),++K[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t));function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}}var T,j,A,E,N=x.oneOf(["left","center","right"]),S=x.oneOf(["left","right"]),R=(x.oneOf(["top","bottom"]),x.oneOf(["up","down"])),M=x.oneOf(["ok","pending","error","unknown"]),D=x.oneOf(["row","col","rowgroup","colgroup","auto"]),L=x.oneOfType([x.string,x.number]),F={text:L,value:x.any,rowspan:L,colspan:L,scope:D,align:N,dense:x.bool},I={float:S,strong:x.bool,bold:x.bool},U=x.oneOfType([x.string,x.number]),$=x.oneOfType([U,x.shape(i({},F,{sort:R,sortActive:x.bool}))]),V=x.oneOfType([U,x.shape(i({},F,I,{action:x.bool,state:M}))]),q=x.oneOfType([U,x.shape(i({},F,I))]),z=x.oneOfType([x.arrayOf($),x.shape({cells:x.arrayOf($)})]),W=x.oneOfType([x.arrayOf(V),x.shape({cells:x.arrayOf(V),action:x.bool})]),B=x.oneOfType([x.arrayOf(q),x.shape({cells:x.arrayOf(q)})]),H=(x.oneOfType([z,x.arrayOf(z)]),x.oneOfType([W,x.arrayOf(W)]),x.oneOfType([B,x.arrayOf(B)]),t(function(e){function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":O(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=a.apply(null,n);r&&e.push(r)}else if("object"===o)for(var i in n)s.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var s;s={}.hasOwnProperty,e.exports?(a.default=a,e.exports=a):window.classNames=a})),K={},G=(T=Object,j=T.getPrototypeOf||function(e){return e.__proto__},A=T.setPrototypeOf||function(e,t){return e.__proto__=t,e},E="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),A(new o,n.prototype)},function(e){var t=j(e);return A(e,A(function(){return E(t,arguments,j(this).constructor)},t))}),J={},Y=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function Z(e,t,n,o){var r=new Y(t,i({},3<arguments.length&&void 0!==o?o:{},{detail:n}));return e.dispatchEvent(r)}var X=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Q(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function ee(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}return!1}var te=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function oe(n,e,o,r,t){var i=4<arguments.length&&void 0!==t?t:{},a=i.capture,s=void 0!==a&&a,c=i.passive,l=void 0===c||c;if(ne[e]&&(e=ne[e]),!n||!e)return null;var u=void 0===o?"undefined":O(o),p=o&&"string"===u;if("function"===u){if(r){var d=r;s=d.capture,l=d.passive}r=o}for(var f=X?{capture:s,passive:l}:s,h=p?function(e){var t=e.target;for(;!Q(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,y=e.split(te),v=y.length,_=0;_<v;++_)n.addEventListener(y[_],h,f);return function e(){for(var t=0;t<v;++t)n.removeEventListener(y[t],h,f);ee(this,e)}}function re(o,e,t){var r=1<arguments.length&&void 0!==e?e:0,n=2<arguments.length&&void 0!==t?t:{},i=n.leading,a=void 0!==i&&i,s=n.trailing,c=void 0===s||s,l=n.maxWait,u=void 0!==l&&l,p=void 0,d=void 0,f=void 0,h=void 0,y=!1,v=r!==u,_=!1!==u;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return p=t,v&&(d&&clearTimeout(d),d=setTimeout(m,r)),_&&!f&&(f=setTimeout(g,u)),a&&!y&&(y=!0,h=o.apply(void 0,k(p))),h}return b.flush=function(){(d||f)&&(h=o.apply(void 0,k(p)));return C(),h},b.cancel=C,b;function m(){f&&clearTimeout(f),O()}function g(){d&&clearTimeout(d),O()}function O(){c&&(h=o.apply(void 0,k(p))),f=d=null,y=!1}function C(){d&&(clearTimeout(d),d=null),f&&(clearTimeout(f),f=null),p=void 0,y=!1}}window.__subscriptions=window.__subscriptions||{};var ie=window.__subscriptions;function ae(e,t,n){var o=oe(2<arguments.length&&void 0!==n?n:document,e,t);ie[e]||(ie[e]={count:0});var r=ie[e];return r.count++,r.onsubscribe||(r.onsubscribe=re(function(e){return function(){Z(document,"pubsub/onsubscribe",e),Z(document,"pubsub/onsubscribe/"+e,e),ie[e]&&delete ie[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete ie[e]}}oe(document,"pubsub/onsubscribe",function(e){var t=e.detail;ie[t]||(ie[t]={count:0});var n=ie[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=d(e,3),n=t[0],o=t[1];Z(t[2],n,o)}),delete n.queue)});function se(e,t){return e===t}var ce;ce=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:se;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?ce.apply(void 0,arguments):void 0}}}}()(!0);function le(e){return-1!==Object.prototype.toString.call(e).indexOf("DocumentFragment")}var ue=[];var pe=1,de=3,fe=8;function he(e,t){var n=e.nodeType;n===pe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==de&&n!==fe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function ye(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;ve(e,t,"checked"),ve(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){ve(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function ve(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _e=3;function be(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(he(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(me(o,n))(r=be(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(me(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=be(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=be(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),ye(e,t),t):null:e}function me(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===_e&&e.nodeValue===t.nodeValue)}var ge,Oe,Ce,ke,xe,we=(ge=Object,Oe=ge.getPrototypeOf||function(e){return e.__proto__},Ce=ge.setPrototypeOf||function(e,t){return e.__proto__=t,e},ke="object"===("undefined"==typeof Reflect?"undefined":O(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),Ce(new o,n.prototype)},function(e){var t=Oe(e);return Ce(e,Ce(function(){return ke(t,arguments,Oe(this).constructor)},t))})((xe=Error,a(Pe,xe),Pe));function Pe(e){var t;s(this,Pe);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=Pe.__proto__||Object.getPrototypeOf(Pe)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,Pe),a.name="TemplateNoStringReturnException",a}var Te=!!document.createDocumentFragment().children,je=/[A-Z]/g;function Ae(e){return e.replace(je,Ee)}function Ee(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Ne=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Se(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case x.string:case x.string.isRequired:return t;case x.bool:case x.bool.isRequired:if(!t||n===t)return!0;case x.number:case x.number.isRequired:case x.object:case x.object.isRequired:case x.array:case x.array.isRequired:default:if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Re=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Me=/[-_]+/g;function De(e){return e.replace(Re,Le)}function Le(e,t){return 0==+e||Me.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Fe(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[De(t)]);if(o&&!e.hasAttribute(t))return i!==x.bool&&i!==x.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Se(a,t,i)}var Ie=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ue(n,e,o,t){var r=3<arguments.length&&void 0!==t?t:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=oe(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return function(e){Ie&&(e.style.cursor="pointer")}(l),u}var $e=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Ve="axa-change",qe="data-prevent-default";function ze(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};s(this,ze),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify($e.ENTER,t),i._onInteractive()):o&&i._notify($e.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){e.key!==$e.ESCAPE&&e.key!==$e.ESC&&27!==e.keyCode||(e.preventDefault(),i._close())},this._init(e,t)}(o(ze,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},ze.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=oe(this._container,$e.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=oe(e,$e.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Ue(e,$e.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=oe(e.ownerDocument,$e.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(qe)?Fe(e,qe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify($e.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),ze).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var We=w(function(e){var t,n;return a(o,e),n=t=o,t.version="2.0.1-beta.264",n;function o(){return s(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}},function(e){return a(n,e),o(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=ae("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t,n){var o=2<arguments.length&&void 0!==n?n:document;ie[e]||(ie[e]={count:0,queue:[]});var r=ie[e].queue;Array.isArray(r)?r.push([e,t,o]):Z(o,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"appendChild",value:function(e){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e);var t=this._lightDOMRefs;return le(e)?Array.from(e.childNodes).forEach(function(e){e.__isPatching=!0,t.push(e)}):(e.__isPatching=!0,t.push(e)),this.render(),e}},{key:"append",value:function(){for(var e,t=this,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];!this._isMorphing&&this._hasTemplate&&this._hasRendered?(o.forEach(function(e){"string"==typeof e&&(e=document.createTextNode(e)),e.__isPatching=!0,t._lightDOMRefs.push(e)}),this.render()):(e=l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"append",this)).call.apply(e,[this].concat(o))}},{key:"insertBefore",value:function(e,t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"insertBefore",this).call(this,e,t);var n=this._lightDOMRefs,o=n.indexOf(t);return-1!==o&&(o=n.length),le(e)?Array.from(e.childNodes).forEach(function(e,t){e.__isPatching=!0,n.splice(o+t,0,e)}):(e.__isPatching=!0,n.splice(o,0,e)),this.render(),e}},{key:"removeChild",value:function(t){if(this._isMorphing||!this._hasTemplate||!this._hasRendered)return l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"removeChild",this).call(this,t);var e=t.parentNode.removeChild(t);return this._lightDOMRefs=this._lightDOMRefs.filter(function(e){return e!==t}),this.render(),e}},{key:"replaceChild",value:function(e,t){return!this._isMorphing&&this._hasTemplate&&this._hasRendered?t.parentNode.replaceChild(e,t):l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"replaceChild",this).call(this,e,t)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children).map(function(e){return e.__isPatching=!0,e}),this.render()}else c(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"init",value:function(e){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=re(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){De(e)})}},{key:"connectedCallback",value:function(){var o=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=De(e);if(o.hasAttribute(e)){var n=Fe(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=De(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Se(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&Z(this,Ve,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Ae(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&x.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Ae)}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}},function(e){return a(c,e),o(c,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.template,o=u(t,["template"]);l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,o),this._template=n,this._hasTemplate=!!n,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){if(!0===e.__isPatching)return n.childrenFragment.appendChild(e),void delete e.__isPatching;var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Te||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new we(this);a.appendChild(i)}if(e)l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":O(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":O(t)))throw new Error("componentMorph: newTree should be an object");be(t,e)}(this,s),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c;function c(){return s(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}},function(e){return a(i,e),o(i,[{key:"init",value:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.styles,o=void 0===n?"":n,r=u(t,["styles"]);l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(e){var t=0<arguments.length&&void 0!==e?e:this;if(this._styles){var n=document.createElement("style"),o=document.createTextNode(this._styles);n.appendChild(o),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}}}]),i;function i(){return s(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}}),Be=w(We,P),He=w(We,function(i){return a(n,i),o(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:i.uuidv4();if(e&&!J[n]){var o=document.createElement("style"),r=document.createTextNode(e);J[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n;function n(){return s(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}},P)(HTMLElement);function Ke(e,t){if(Array.isArray(t))for(var n,o,r=e.nodeName.toLowerCase(),i=!1,a=0,s=t.length;a<s;a++){var c=t[a];if(Array.isArray(c))Ke(e,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=e.childNodes[e.childNodes.length-1];if("string"==typeof c)i=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),e.appendChild(c),l=c),a===s-1&&(i=!1,-1===Qe.indexOf(r)&&-1===et.indexOf(r)?""===(n=l.nodeValue.replace(Je,"").replace(Ye,"").replace(Ge,"").replace(Xe," "))?e.removeChild(l):l.nodeValue=n:-1===et.indexOf(r)&&(o=0===a?"":" ",n=l.nodeValue.replace(Je,o).replace(Ze," ").replace(Ye,"").replace(Ge,"").replace(Xe," "),l.nodeValue=n));else if(c&&c.nodeType){i&&(i=!1,-1===Qe.indexOf(r)&&-1===et.indexOf(r)?""===(n=l.nodeValue.replace(Je,"").replace(Ge," ").replace(Xe," "))?e.removeChild(l):l.nodeValue=n:-1===et.indexOf(r)&&(n=l.nodeValue.replace(Ze," ").replace(Je,"").replace(Ge," ").replace(Xe," "),l.nodeValue=n));var u=c.nodeName;u&&(r=u.toLowerCase()),e.appendChild(c)}}}}var Ge=/\n[\s]+$/,Je=/^\n[\s]+/,Ye=/[\s]+$/,Ze=/^[\s]+/,Xe=/[\n\s]+/g,Qe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],et=["code","pre","textarea"],tt=Be(HTMLElement);function nt(e,t){var n,o,r,i=e.inputId,a=void 0===i?tt.uuidv4():i,s=e.value,c=e.name,l=e.checked,u=void 0!==l&&l,p=e.disabled,d=void 0!==p&&p;return(r=document.createElement("label")).setAttribute("class","a-choice__wrapper"),Ke(r,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","radio"),n.setAttribute("name",""+String(c)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(s)),d&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-choice__input"),n),"\n      ",(o=document.createElement("span"),o.setAttribute("class","a-choice__label"),Ke(o,[t]),o),"\n  "]),r}var ot,rt,it,at=(a(st,He),o(st,[{key:"init",value:function(){l(st.prototype.__proto__||Object.getPrototypeOf(st.prototype),"init",this).call(this,{styles:"@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.a-choice {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .a-choice + .a-choice {\n    margin-left: 14px; }\n  .a-choice:hover:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label, .a-choice:active:not(.a-choice--disabled):not(.a-choice--error) .a-choice__label {\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n\n.a-choice__label {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  min-height: 40px;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 0;\n  color: #333;\n  border: 1px solid #ccc;\n  background-color: #f5f5f5; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-choice__label:hover, .a-choice__label:active, .a-choice__label:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .a-choice__label:disabled, .a-choice__label[aria-disabled] {\n    /* stylelint-disable-next-line declaration-no-important */\n    cursor: default !important; }\n  @media (min-width: 576px) {\n    .a-choice__label {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.a-choice--error .a-choice__label {\n  border-color: #c91432; }\n\n.a-choice__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-choice__input:checked + .a-choice__label {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    border-color: #00008f;\n    color: #00008f;\n    background-color: #fff; }\n    @media (min-width: 576px) {\n      .a-choice__input:checked + .a-choice__label {\n        font-size: 14px;\n        line-height: 1.21; } }\n  .a-choice__input:disabled + .a-choice__label {\n    cursor: default;\n    color: #999;\n    border-color: #ccc; }\n",template:nt})}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.error,n=e.checked,o=e.disabled;this.className=H(this.initialClassName,"a-choice",{"a-choice--error":t,"a-choice--checked":n,"a-choice--disabled":o})}}]),st);function st(){return s(this,st),p(this,(st.__proto__||Object.getPrototypeOf(st)).apply(this,arguments))}return at.tagName="axa-choice",at.propTypes={inputId:x.string,error:x.bool,value:x.string,name:x.string,checked:x.bool,disabled:x.bool},ot=at.tagName,rt=at,customElements.get(ot)||customElements.define(ot,rt,it),at});
