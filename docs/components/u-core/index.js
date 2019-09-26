var StyleGuideWebComponent=function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e};function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,O=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118;function h(e){if("object"===(void 0===e?"undefined":S(e))&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case l:case a:case s:case i:case y:return e;default:switch(e=e&&e.$$typeof){case u:case p:case c:return e;default:return t}}case m:case b:case n:return t}}}function g(e){return h(e)===l}t.typeOf=h,t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=b,t.Portal=n,t.Profiler=s,t.StrictMode=i,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===s||e===i||e===y||e===d||"object"===(void 0===e?"undefined":S(e))&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===O||e.$$typeof===v)},t.isAsyncMode=function(e){return g(e)||h(e)===f},t.isConcurrentMode=g,t.isContextConsumer=function(e){return h(e)===u},t.isContextProvider=function(e){return h(e)===c},t.isElement=function(e){return"object"===(void 0===e?"undefined":S(e))&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return h(e)===p},t.isFragment=function(e){return h(e)===a},t.isLazy=function(e){return h(e)===m},t.isMemo=function(e){return h(e)===b},t.isPortal=function(e){return h(e)===n},t.isProfiler=function(e){return h(e)===s},t.isStrictMode=function(e){return h(e)===i},t.isSuspense=function(e){return h(e)===y}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var i=t(function(e,t){});e(i);i.typeOf,i.AsyncMode,i.ConcurrentMode,i.ContextConsumer,i.ContextProvider,i.Element,i.ForwardRef,i.Fragment,i.Lazy,i.Memo,i.Portal,i.Profiler,i.StrictMode,i.Suspense,i.isValidElementType,i.isAsyncMode,i.isConcurrentMode,i.isContextConsumer,i.isContextProvider,i.isElement,i.isForwardRef,i.isFragment,i.isLazy,i.isMemo,i.isPortal,i.isProfiler,i.isStrictMode,i.isSuspense,t(function(e){e.exports=n});var s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()||Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function f(){}function l(){}l.resetWarningCache=f;var p=t(function(e){e.exports=function(){function e(e,t,r,o,n,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:f};return r.PropTypes=r}()}),y=0;function d(e,t){var r=e[t];return"function"==typeof r&&(e[t]=function(t){function r(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return r[e]=t[e],e}).reduce(d,r),y--),r}(r)),e}var b=p;Object.keys(b).reduce(d,b);var m=b.oneOf(["left","center","right"]),O=b.oneOf(["left","right"]),v=(b.oneOf(["top","bottom"]),b.oneOf(["up","down"])),h=b.oneOf(["ok","pending","error","unknown"]),g=b.oneOf(["row","col","rowgroup","colgroup","auto"]),w=b.oneOfType([b.string,b.number]),P={text:w,value:b.any,rowspan:w,colspan:w,scope:g,align:m,dense:b.bool},_={float:O,strong:b.bool,bold:b.bool},C=b.oneOfType([b.string,b.number]),j=b.oneOfType([C,b.shape(a({},P,{sort:v,sortActive:b.bool}))]),T=b.oneOfType([C,b.shape(a({},P,_,{action:b.bool,state:h}))]),M=b.oneOfType([C,b.shape(a({},P,_))]),x=b.oneOfType([b.arrayOf(j),b.shape({cells:b.arrayOf(j)})]),E=b.oneOfType([b.arrayOf(T),b.shape({cells:b.arrayOf(T),action:b.bool})]),R=b.oneOfType([b.arrayOf(M),b.shape({cells:b.arrayOf(M)})]),$=(b.oneOfType([x,b.arrayOf(x)]),b.oneOfType([E,b.arrayOf(E)]),b.oneOfType([R,b.arrayOf(R)]),/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/);function L(t,r,e){var o=t;if(e)return function(t,r,e){var o=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||r===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if($.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+r+" has an error:\n"+e+"\n",t)}}return o}(t,r,e);if(t&&r!==t){if($.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+r+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var k=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,A=/[-_]+/g;function F(e){return e.replace(k,q)}function q(e,t){return 0==+e||A.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function N(e,t,r){var o=1===e.nodeType,n=e.constructor.propTypes,a=r;!r&&o&&(a=(void 0===n?{}:n)[F(t)]);if(o&&!e.hasAttribute(t))return a!==b.bool&&a!==b.bool.isRequired&&void 0;var i=e.value;return t?i=e.getAttribute(t):t=e.name,i=L(i,t,a)}var z,I,H,V,W,U,B,D=(z=Object,I=z.getPrototypeOf||function(e){return e.__proto__},H=z.setPrototypeOf||function(e,t){return e.__proto__=t,e},V="object"===("undefined"==typeof Reflect?"undefined":S(Reflect))?Reflect.construct:function(e,t,r){var o,n=[null];return n.push.apply(n,t),o=e.bind.apply(e,n),H(new o,r.prototype)},function(e){var t=I(e);return H(e,H(function(){return V(t,arguments,I(this).constructor)},t))}),G={},J=D((function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(X,HTMLElement),r(X,[{key:"connectedCallback",value:function(){var e=function(e){if(!e.hasAttributes)return null;for(var t={},r=e.attributes,o=r.length,n=e.constructor.propTypes,a=void 0===n?{}:n,i=0;i<o;++i){var s=r[i],c=F(s.name);t[c]=N(s,null,a[c])}return t}(this),t={};if(e){var r=e.iconsPath,o=e.onlyLoad;if(r){var n=new XMLHttpRequest;o||(t.iconsPath=r),n.open("GET",r,!0),n.send(),n.onload=function(){var e=document.createElement("div");e.innerHTML=n.responseText,e.style.display="none",document.body.insertBefore(e,document.body.childNodes[0])}}}window.__axaPLibConfig=a({},G,window.__axaPLibConfig||{},t)}}]),X));function X(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,X),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(X.__proto__||Object.getPrototypeOf(X)).apply(this,arguments))}return J.tagName="axa-core",W=J.tagName,U=J,customElements.get(W)||customElements.define(W,U,B),J}();
