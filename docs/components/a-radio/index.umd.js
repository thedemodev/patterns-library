!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var _=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(b,t),_--),t}(n)),e}var g=e(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()});Object.keys(g).reduce(b,g);var m,O,C,k,x=g.oneOf(["left","center","right"]),w=g.oneOf(["left","right"]),T=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),j=g.oneOf(["ok","pending","error","unknown"]),A=g.oneOf(["row","col","rowgroup","colgroup","auto"]),N=g.oneOfType([g.string,g.number]),E={text:N,value:g.any,rowspan:N,colspan:N,scope:A,align:x,dense:g.bool},P={float:w,strong:g.bool,bold:g.bool},S=g.oneOfType([g.string,g.number]),R=g.oneOfType([S,g.shape(c({},E,{sort:T,sortActive:g.bool}))]),D=g.oneOfType([S,g.shape(c({},E,P,{action:g.bool,state:j}))]),L=g.oneOfType([S,g.shape(c({},E,P))]),I=g.oneOfType([g.arrayOf(R),g.shape({cells:g.arrayOf(R)})]),M=g.oneOfType([g.arrayOf(D),g.shape({cells:g.arrayOf(D),action:g.bool})]),U=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L)})]),V=(g.oneOfType([I,g.arrayOf(I)]),g.oneOfType([M,g.arrayOf(M)]),g.oneOfType([U,g.arrayOf(U)]),e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=void 0===o?"undefined":i(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},F={},H=(m=Object,O=m.getPrototypeOf||function(e){return e.__proto__},C=m.setPrototypeOf||function(e,t){return e.__proto__=t,e},k="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),C(new r,n.prototype)},function(e){var t=O(e);return C(e,C(function(){return k(t,arguments,O(this).constructor)},t))}),K=function(e){return H(function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},W={},$=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,r,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function B(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new $(t,c({},r,{detail:n}));return e.dispatchEvent(o)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function z(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var J=/\s+/,Y={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function Z(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,c=o.passive,l=void 0===c||c;if(Y[t]&&(t=Y[t]),!e||!t)return null;var u=void 0===n?"undefined":i(n),p=n&&"string"===u;if("function"===u){if(r){var d=r;s=d.capture,l=d.passive}r=n}for(var f=G?{capture:s,passive:l}:s,h=p?function(t){var o=t.target;for(;!z(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(J),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=t!==c,y=!1!==c;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return l=r,h&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!p&&(p=setTimeout(g,c)),o&&!f&&(f=!0,d=e.apply(void 0,v(l))),d}return _.flush=function(){(u||p)&&(d=e.apply(void 0,v(l)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){u&&clearTimeout(u),m()}function m(){a&&(d=e.apply(void 0,v(l))),u=null,p=null,f=!1}function O(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var Q=window.__subscriptions;function ee(e,t){var n=Z(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);Q[e]||(Q[e]={count:0});var r,o=Q[e];return o.count++,o.onsubscribe||(o.onsubscribe=X((r=e,function(){B(document,"pubsub/onsubscribe",r),B(document,"pubsub/onsubscribe/"+r,r),Q[r]&&delete Q[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete Q[e]}}Z(document,"pubsub/onsubscribe",function(e){var t=e.detail;Q[t]||(Q[t]={count:0});var n=Q[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=h(e,3),n=t[0],r=t[1],o=t[2];B(o,n,r)}),delete n.queue)});var te,ne=function(e,t){return e===t},re=((te=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?te.apply(void 0,arguments):void 0}}}})()(!0),[]);var oe=1,ie=3,ae=8;function se(e,t){var n=e.nodeType,r=e.nodeName;n===oe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ie&&n!==ae||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ce(e,t,"checked"),ce(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ce(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ce(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var le=3;function ue(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(se(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(pe(r,n))(o=ue(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(pe(t.childNodes[c],r)){i=t.childNodes[c];break}i?((o=ue(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ue(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function pe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===le&&e.nodeValue===t.nodeValue)}var de,fe,he,ve,ye=(de=Object,fe=de.getPrototypeOf||function(e){return e.__proto__},he=de.setPrototypeOf||function(e,t){return e.__proto__=t,e},ve="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),he(new r,n.prototype)},function(e){var t=fe(e);return he(e,he(function(){return ve(t,arguments,fe(this).constructor)},t))})(function(e){function t(e){var n;a(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];var c=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return u(t,e),t}(Error)),_e=!!document.createDocumentFragment().children,be=/[A-Z]/g;function ge(e){return e.replace(be,me)}function me(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Oe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ce(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case g.string:case g.string.isRequired:return e;case g.bool:case g.bool.isRequired:if(!e||t===e)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Oe.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(Oe.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var ke=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,xe=/[-_]+/g;function we(e){return e.replace(ke,Te)}function Te(e,t){return 0==+e||xe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function je(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[we(t)]);if(r&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ce(a,t,i)}var Ae=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ne(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=Z(c,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return Ae&&(c.style.cursor="pointer"),l}var Ee=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Pe="axa-change",Se="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(Ee.ENTER,t),n._onInteractive()):o&&n._notify(Ee.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Ee.ESCAPE||e.key===Ee.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=c({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Z(this._container,Ee.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=Z(e,Ee.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Ne(e,Ee.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=Z(e.ownerDocument,Ee.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Se)?je(e,Se):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ee.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Re=q(function(e){var t,n;return n=t=function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),n}(),t.version="2.0.1-beta.239",n},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=ee("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Q[e]||(Q[e]={count:0,queue:[]});var r=Q[e].queue;Array.isArray(r)?r.push([e,t,n]):B(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=X(function(){return t.updated&&t.updated()},50);var r=this.constructor.observedAttributes;Array.isArray(r)&&r.forEach(function(e){we(e)})}},{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=we(t);if(e.hasAttribute(t)){var o=je(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,r),this.shouldUpdateCallback(r,t)){var o=we(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=Ce(r,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==r&&B(this,Pe,r,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this);var r=this.constructor.observedAttributes,o=void 0===r?[]:r,i=Object.keys(e).filter(function(e){return o.indexOf(ge(e))>-1}).reduce(function(e,n){var r=e.props,o=e.shouldUpdate,i=r[n],a=t.props&&t.props[n]?t.props[n]:void 0;return o||t.shouldUpdateCallback(i,a)?(t.props[n]=i,{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),i&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,r=this.props;t&&g.checkPropTypes(t,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(ge)}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=p(e,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});_e||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new ye(this);c.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");ue(t,e)}(this,u),function(){for(var e=void 0;e=re.pop();)delete e.isSameNode;re=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=p(e,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._styles=r}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),De=q(Re,K),Le=q(Re,function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!W[n]){var r=document.createElement("style"),o=document.createTextNode(t);W[n]=!0,r.appendChild(o),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n}()},K)(HTMLElement);var Ie=/\n[\s]+$/,Me=/^\n[\s]+/,Ue=/[\s]+$/,Ve=/^[\s]+/,qe=/[\n\s]+/g,Fe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],He=["code","pre","textarea"],Ke=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Fe.indexOf(i)&&-1===He.indexOf(i)?""===(r=u.nodeValue.replace(Me,"").replace(Ue,"").replace(Ie,"").replace(qe," "))?t.removeChild(u):u.nodeValue=r:-1===He.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(Me,o).replace(Ve," ").replace(Ue,"").replace(Ie,"").replace(qe," "),u.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===Fe.indexOf(i)&&-1===He.indexOf(i)?""===(r=u.nodeValue.replace(Me,"").replace(Ie,"").replace(qe," "))?t.removeChild(u):u.nodeValue=r:-1===He.indexOf(i)&&(r=u.nodeValue.replace(Ve," ").replace(Me,"").replace(Ie,"").replace(qe," "),u.nodeValue=r));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}},We=De(HTMLElement);function $e(e,t){var n,r,o,i,a=e.inputId,s=void 0===a?We.uuidv4():a,c=e.value,l=e.name,u=e.checked,p=void 0!==u&&u,d=e.disabled,f=void 0!==d&&d;return(i=document.createElement("label")).setAttribute("class","a-radio__wrapper"),Ke(i,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(s)),n.setAttribute("type","radio"),n.setAttribute("name",""+String(l)),p&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(c)),f&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-radio__input"),n),"\n    ",(r=document.createElement("span"),r.setAttribute("class","a-radio__icon"),r),"\n    ",(o=document.createElement("div"),o.setAttribute("class","a-radio__content"),Ke(o,[t]),o),"\n  "]),i}var Be,Ge,ze,Je=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,Le),s(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) {\n  color: #00008f; }\n  .a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) .a-radio__icon {\n    border-color: #00008f; }\n    .a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) .a-radio__icon::after {\n      border-color: #00008f; }\n\n.a-radio .a-radio__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-radio .a-radio__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-radio .a-radio__input:focus + .a-radio__icon {\n    border-color: #00008f; }\n    .a-radio .a-radio__input:focus + .a-radio__icon::after {\n      border-color: #00008f; }\n  .a-radio .a-radio__input:checked + .a-radio__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-radio .a-radio__input:disabled + .a-radio__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-radio .a-radio__input:disabled + .a-radio__icon::after {\n      border-color: transparent; }\n\n.a-radio .a-radio__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  border-radius: 50%; }\n  .a-radio .a-radio__icon::after {\n    width: 8px;\n    height: 8px;\n    display: block;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-radio .a-radio__icon::after {\n    border-radius: 50%; }\n\n.a-radio--error {\n  color: #c91432; }\n  .a-radio--error .a-radio__icon {\n    border-color: #c91432; }\n\n.a-radio--disabled {\n  color: #999; }\n',template:$e})}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.error,n=e.checked,r=e.disabled;this.className=V(this.initialClassName,"a-radio",{"a-radio--error":t,"a-radio--checked":n,"a-radio--disabled":r})}}]),t}();return Je.tagName="axa-radio",Je.propTypes={inputId:g.string,error:g.string,value:g.string,name:g.string,checked:g.bool,disabled:g.bool},Be=Je.tagName,Ge=Je,customElements.get(Be)||customElements.define(Be,Ge,ze),Je});
