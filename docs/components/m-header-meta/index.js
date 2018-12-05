var StyleGuideWebComponent=function(){"use strict";var e,t,n,r,o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},i={},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},v=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},_=(e=Object,t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)},function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}),b=function(e){return _(function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in i||(i[e]=0),++i[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},m={},g=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function O(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new g(t,c({},r,{detail:n}));return e.dispatchEvent(o)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function k(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var x=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function T(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,s=void 0!==i&&i,u=o.passive,c=void 0===u||u;if(w[t]&&(t=w[t]),!e||!t)return null;var l=void 0===n?"undefined":a(n),p=n&&"string"===l;if("function"===l){if(r){var d=r;s=d.capture,c=d.passive}r=n}for(var f=C?{capture:s,passive:c}:s,h=p?function(t){var o=t.target;for(;!k(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(x),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=t!==u,v=!1!==u;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,h&&(l&&clearTimeout(l),l=setTimeout(b,t)),v&&!p&&(p=setTimeout(m,u)),o&&!f&&(f=!0,d=e.apply(void 0,y(c))),d}return _.flush=function(){(l||p)&&(d=e.apply(void 0,y(c)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),g()}function m(){l&&clearTimeout(l),g()}function g(){a&&(d=e.apply(void 0,y(c))),l=null,p=null,f=!1}function O(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var j=window.__subscriptions;function A(e,t){var n=T(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);j[e]||(j[e]={count:0});var r,o=j[e];return o.count++,o.onsubscribe||(o.onsubscribe=N((r=e,function(){O(document,"pubsub/onsubscribe",r),O(document,"pubsub/onsubscribe/"+r,r),j[r]&&delete j[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete j[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;j[t]||(j[t]={count:0});var n=j[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=v(e,3),n=t[0],r=t[1],o=t[2];O(o,n,r)}),delete n.queue)});var E,P=function(e,t){return e===t},S=((E=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?E.apply(void 0,arguments):void 0}}}})()(!0),[]);var R=1,D=3,L=8;function U(e,t){var n=e.nodeType,r=e.nodeName;n===R&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var f=p.localName;t.getAttributeNS(u,f||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==D&&n!==L||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;M(e,t,"checked"),M(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?M(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function M(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var I=3;function V(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(U(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(q(r,n))(o=V(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(q(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=V(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=V(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===I&&e.nodeValue===t.nodeValue)}var F,K,H,W,$=(F=Object,K=F.getPrototypeOf||function(e){return e.__proto__},H=F.setPrototypeOf||function(e,t){return e.__proto__=t,e},W="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),H(new r,n.prototype)},function(e){var t=K(e);return H(e,H(function(){return W(t,arguments,K(this).constructor)},t))})(function(e){function t(e){var n;s(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var u=f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return p(t,e),t}(Error)),B=!!document.createDocumentFragment().children;var G=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var Y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function Z(){}var X,Q=0;function ee(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===Q&&(Q++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(ee,t),Q--),t}(n)),e}var te=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==Y){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=Z,n.PropTypes=n,n}()}(X={exports:{}},X.exports),X.exports);Object.keys(te).reduce(ee,te);var ne=te.oneOf(["left","center","right"]),re=te.oneOf(["left","right"]),oe=(te.oneOf(["top","bottom"]),te.oneOf(["up","down"])),ie=te.oneOf(["ok","pending","error","unknown"]),ae=te.oneOf(["row","col","rowgroup","colgroup","auto"]),se=te.oneOfType([te.string,te.number]),ue={text:se,value:te.any,rowspan:se,colspan:se,scope:ae,align:ne,dense:te.bool},ce={float:re,strong:te.bool,bold:te.bool},le=te.oneOfType([te.string,te.number]),pe=te.oneOfType([le,te.shape(c({},ue,{sort:oe,sortActive:te.bool}))]),de=te.oneOfType([le,te.shape(c({},ue,ce,{action:te.bool,state:ie}))]),fe=te.oneOfType([le,te.shape(c({},ue,ce))]),he=te.oneOfType([te.arrayOf(pe),te.shape({cells:te.arrayOf(pe)})]),ve=te.oneOfType([te.arrayOf(de),te.shape({cells:te.arrayOf(de),action:te.bool})]),ye=te.oneOfType([te.arrayOf(fe),te.shape({cells:te.arrayOf(fe)})]),_e=(te.oneOfType([he,te.arrayOf(he)]),te.oneOfType([ve,te.arrayOf(ve)]),te.oneOfType([ye,te.arrayOf(ye)]),/[A-Z]/g);function be(e){return e.replace(_e,me)}function me(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ge=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Oe(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case te.string:case te.string.isRequired:return e;case te.bool:case te.bool.isRequired:if(!e||t===e)return!0;case te.number:case te.number.isRequired:case te.object:case te.object.isRequired:case te.array:case te.array.isRequired:default:if(ge.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(ge.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var Ce=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ke=/[-_]+/g;function xe(e){return e.replace(Ce,we)}function we(e,t){return 0==+e||ke.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Te(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[xe(t)]);if(r&&!e.hasAttribute(t))return i!==te.bool&&i!==te.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Oe(a,t,i)}var Ne=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function je(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,c=T(u,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return Ne&&(u.style.cursor="pointer"),c}var Ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Ee="axa-change",Pe="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(Ae.ENTER,t),n._onInteractive()):o&&n._notify(Ae.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Ae.ESCAPE||e.key===Ae.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return u(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=c({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=T(this._container,Ae.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=T(e,Ae.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=je(e,Ae.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=T(e.ownerDocument,Ae.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Pe)?Te(e,Pe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ae.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Se=o(function(e){var t,n;return n=t=function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),n}(),t.version="2.0.1-beta.236",n},function(e){return function(t){function n(){var e,t,r;s(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=A("context/available",r._makeContextReady)},f(r,t)}return p(n,e),u(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;j[e]||(j[e]={count:0,queue:[]});var r=j[e].queue;Array.isArray(r)?r.push([e,t,n]):O(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=N(function(){return t.updated&&t.updated()},50);var r=this.constructor.observedAttributes;Array.isArray(r)&&r.forEach(function(e){xe(e)})}},{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=xe(t);if(e.hasAttribute(t)){var o=Te(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,r),this.shouldUpdateCallback(r,t)){var o=xe(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=Oe(r,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==r&&O(this,Ee,r,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this,n=this.constructor.observedAttributes,r=void 0===n?[]:n,o=Object.keys(e).filter(function(e){return r.indexOf(be(e))>-1}).reduce(function(e,n){var r=e.props,o=e.shouldUpdate,i=r[n],a=t.props&&t.props[n]?t.props[n]:void 0;return o||t.shouldUpdateCallback(i,a)?(t.props[n]=i,{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,r=this.props;t&&te.checkPropTypes(t,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(be)}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=d(e,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});B||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),u=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){u.appendChild(e)});else if(s){if("string"==typeof s)throw new $(this);u.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,u);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(u),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":a(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":a(t)))throw new Error("componentMorph: newTree should be an object");V(t,e)}(this,c),function(){for(var e=void 0;e=S.pop();)delete e.isSameNode;S=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=d(e,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._styles=r}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),Re=(o(Se,b),o(Se,function(e){return function(t){function n(){var e,t,r;s(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._appendStyles=function(){n.appendGlobalStyles(r._styles,r.nodeName)},f(r,t)}return p(n,e),u(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!m[n]){var r=document.createElement("style"),o=document.createTextNode(t);m[n]=!0,r.appendChild(o),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n}()},b)(HTMLElement));var De,Le,Ue,Me=/\n[\s]+$/,Ie=/^\n[\s]+/,Ve=/[\s]+$/,qe=/^[\s]+/,Fe=/[\n\s]+/g,Ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],He=["code","pre","textarea"],We=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===Ke.indexOf(i)&&-1===He.indexOf(i)?""===(r=l.nodeValue.replace(Ie,"").replace(Ve,"").replace(Me,"").replace(Fe," "))?t.removeChild(l):l.nodeValue=r:-1===He.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(Ie,o).replace(qe," ").replace(Ve,"").replace(Me,"").replace(Fe," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===Ke.indexOf(i)&&-1===He.indexOf(i)?""===(r=l.nodeValue.replace(Ie,"").replace(Me,"").replace(Fe," "))?t.removeChild(l):l.nodeValue=r:-1===He.indexOf(i)&&(r=l.nodeValue.replace(qe," ").replace(Ie,"").replace(Me,"").replace(Fe," "),l.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}},$e=function(e,t){var n,r;return(r=document.createElement("div")).setAttribute("class","m-header-meta__box"),We(r,["\n    ",(n=document.createElement("div"),n.setAttribute("class","m-header-meta__row"),We(n,["\n      ",t,"\n    "]),n),"\n  "]),r},Be=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,Re),u(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-header-meta {\n  display: block;\n  background: #fafafa;\n  border-top: 2px solid #00008f;\n  border-bottom: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-meta {\n      display: none; } }\n\n.m-header-meta__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .m-header-meta__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-meta__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-meta__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-meta__box {\n      max-width: 1140px; } }\n\n.m-header-meta__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n",template:$e})}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-meta"}}]),t}();return Be.tagName="axa-header-meta",De=Be.tagName,Le=Be,customElements.get(De)||customElements.define(De,Le,Ue),Be}();
