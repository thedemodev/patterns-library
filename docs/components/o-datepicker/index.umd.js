!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(){}var y,_=(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=v,n.PropTypes=n,n}()}(y={exports:{}},y.exports),y.exports),b={},g=function(e){return e in b||(b[e]=0),++b[e]},m=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function k(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new m(t,s({},o,{detail:n}));return e.dispatchEvent(r)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function O(e,t){var n=t.className;return t.hasClass||e.push(n),e}function w(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}var T=/\s+/,A={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function x(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,u=i.passive,c=void 0===u||u;if(A[t]&&(t=A[t]),!e||!t)return null;var l=void 0===n?"undefined":r(n),d=n&&"string"===l;if("function"===l){if(o){var p=o;s=p.capture,c=p.passive}o=n}for(var h=C?{capture:s,passive:c}:s,f=d?function(t){var r=t.target;for(;!w(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,v=t.split(T),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],f,h);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,d=void 0,p=void 0,h=!1,v=t!==u,y=!1!==u;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(l&&clearTimeout(l),l=setTimeout(b,t)),y&&!d&&(d=setTimeout(g,u)),r&&!h&&(h=!0,p=e.apply(void 0,f(c))),p}return _.flush=function(){(l||d)&&(p=e.apply(void 0,f(c)));return k(),p},_.cancel=k,_;function b(){d&&clearTimeout(d),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(p=e.apply(void 0,f(c))),l=null,d=null,h=!1}function k(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var E=window.__subscriptions;function D(e,t){var n=x(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);E[e]||(E[e]={count:0});var o,r=E[e];return r.count++,r.onsubscribe||(r.onsubscribe=N((o=e,function(){k(document,"pubsub/onsubscribe",o),k(document,"pubsub/onsubscribe/"+o,o),E[o]&&delete E[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete E[e]}}x(document,"pubsub/onsubscribe",function(e){var t=e.detail;E[t]||(E[t]={count:0});var n=E[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],r=t[2];k(r,n,o)}),delete n.queue)});var S,P=function(e,t){return e===t},j=((S=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?S.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var o;i(this,t);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];var c=d(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return c(t,e),t}(Error)),L=/[A-Z]/g;function I(e){return e.replace(L,R)}function R(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var B=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function M(e,t){var n=e;if(e&&t!==e){if(B.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var V=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,U=/[-_]+/g;function q(e){return e.replace(V,Y)}function Y(e,t){return 0==+e||U.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function F(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=M(n,t)}var z=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function K(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,c=x(u,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return z&&(u.style.cursor="pointer"),c}var H=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),W="axa-click",$="axa-load",Z="axa-change",G="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,r=t!==n._lastToggleNode,i=!o&&!r;o?(n._notify(H.ENTER,t),n._onInteractive()):r&&n._notify(H.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===H.ESCAPE||e.key===H.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=x(this._container,H.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=x(this._container,H.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=K(this._container,H.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=x(this._container.ownerDocument,H.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(G)?F(e,G):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(H.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var J=["title","checked","disabled"],X=[];var Q=1,ee=3,te=8;function ne(e,t){var n=e.nodeType,o=e.nodeName;n===Q&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,d=null,p=s.length-1;p>=0;--p)if(d=s[p],l=d.name,u=d.namespaceURI,c=d.value,!i(l))if(u){var h=d.localName;t.getAttributeNS(u,h||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var f=a.length-1;f>=0;--f)if(!1!==(d=a[f]).specified){if(l=d.name,u=d.namespaceURI,i(l))continue;u?(l=d.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==ee&&n!==te||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;oe(e,t,"checked"),oe(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?oe(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function oe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var re=3;function ie(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ne(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ae(o,n))(r=ie(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(ae(t.childNodes[u],o)){i=t.childNodes[u];break}i?((r=ie(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ie(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ae(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===re&&e.nodeValue===t.nodeValue)}var se=function(e){function t(e){var n;i(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];var u=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return c(t,e),t}(Error),ue=!!document.createDocumentFragment().children;function ce(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ce.prototype,HTMLElement.prototype),Object.setPrototypeOf(ce,HTMLElement);var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,o;i(this,n);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=D("context/available",o._makeContextReady)},d(o,t)}return c(n,e),a(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;E[e]||(E[e]={count:0,queue:[]});var o=E[e].queue;Array.isArray(o)?o.push([e,t,n]):k(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){i(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,o){var r=e.props,i=e.shouldUpdate,a=t._hasKeys[o];if(-1===J.indexOf(o)&&a)throw new j(o,t);var s="_"+o,u=r[o],c=t[s];return i||t.shouldUpdateCallback(u,c)?(t[s]=u,t._props[o]=u,a&&p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,u,t),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=N(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=q(e),r=o in t;if(-1===J.indexOf(o)&&r)throw new j(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&p(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this.updatedDebounced())}})}),t}return c(n,e),a(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(I)}}]),a(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&(t.forEach(function(t){var o=q(t);if(e.hasAttribute(t)){var r=F(e,t),i=e._hasKeys[o];e._props[o]=r,i&&p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),o,r,e)}}),this.checkPropTypes())}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=q(e);this.hasAttribute(e)?this[o]=M(n,e):this[o]=null,this.checkPropTypes(),"value"===e&&null!==n&&k(this,Z,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(I(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&_.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=l(e,["template"]);i(this,n);var r=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return c(n,e),a(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});ue||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new se(this);c.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");ie(t,e)}(this,l),function(){for(var e=void 0;e=X.pop();)delete e.isSameNode;X=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,r=l(e,["styles"]);i(this,n);var a=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return a._styles=o,a}return c(n,e),a(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){i(this,t);var n=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=g(n.nodeName),n}return c(t,ce),a(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),de={},pe=function(e){function t(){var e,n,o;i(this,t);for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];return n=o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o._appendStyles=function(){t.appendGlobalStyles(o._styles,o.nodeName)},d(o,n)}return c(t,le),a(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:le.uuidv4();if(e&&!de[t]){var n=document.createElement("style"),o=document.createTextNode(e);de[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var he=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;var fe=function(e){function t(t,n,o){return null==t[n]?null:e(t,n,o)}return t.isRequired=e,t}(function(e,t,n){if(!he.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")}),ve=".o-datepicker {\n  position: relative;\n  display: block; }\n\n.o-datepicker__calender {\n  position: absolute;\n  z-index: 1100;\n  display: none;\n  background-color: #fff; }\n\n.o-datepicker__input {\n  display: inline-block;\n  width: auto;\n  min-width: 150px;\n  vertical-align: middle; }\n\n.a-input__icon__button {\n  background-color: transparent; }\n\n.o-datepicker__calender--move-up {\n  top: -385px; }\n",ye=/\n[\s]+$/,_e=/^\n[\s]+/,be=/[\s]+$/,ge=/^[\s]+/,me=/[\n\s]+/g,ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ce=["code","pre","textarea"],Oe=/ |,|\.|-|\//,we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-uk";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date).toLocaleString(e,{day:"numeric",month:"numeric",year:"numeric"})},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-uk",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=new Date(2017,10,23);if(!Intl.DateTimeFormat.supportedLocalesOf(e).length)throw new Error("locale not supported: "+e);var o=new Intl.DateTimeFormat(e).format(n).toString(),r=o.match(Oe)[0]||null;if(!r)return null;var i=t.split(r),a=o.split(r),s=a.indexOf("11"),u=a.indexOf("23"),c=a.indexOf("2017"),l=new Date(i[c],i[s]-1,i[u]);return l instanceof Date&&!isNaN(l)?l:null},Ae=function(e,t,n){var o,r,i,a,s=e.classes,u=e.locale,c=void 0===u?"en-uk":u,l=e.outputIso,d=void 0!==l&&l,p=e.higherEndYear,h=void 0!==p&&p,f=e.lowerEndYear,v=void 0!==f&&f,y=e.open;n.datepicker.locale=c;var _=n.datepicker,b=_.localeValue,g=_.value;return(o=document.createElement("article")).setAttribute("class",""+String(s)),function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===ke.indexOf(i)&&-1===Ce.indexOf(i)?""===(o=l.nodeValue.replace(_e,"").replace(be,"").replace(ye,"").replace(me," "))?t.removeChild(l):l.nodeValue=o:-1===Ce.indexOf(i)&&(r=0===s?"":" ",o=l.nodeValue.replace(_e,r).replace(ge," ").replace(be,"").replace(ye,"").replace(me," "),l.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ke.indexOf(i)&&-1===Ce.indexOf(i)?""===(o=l.nodeValue.replace(_e,"").replace(ye,"").replace(me," "))?t.removeChild(l):l.nodeValue=o:-1===Ce.indexOf(i)&&(o=l.nodeValue.replace(ge," ").replace(_e,"").replace(ye,"").replace(me," "),l.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(o,["\n      ",b?(r=document.createElement("axa-input"),r.setAttribute("placeholder",""+String(we(c))),r.setAttribute("value",""+String(b)),r.setAttribute("name","get-local-day-month-year"),r.setAttribute("icon","datepicker"),r.setAttribute("inline","inline"),r.setAttribute("class","o-datepicker__input js-datepicker__input"),r):(i=document.createElement("axa-input"),i.setAttribute("placeholder",""+String(we(c))),i.setAttribute("name","get-local-day-month-year"),i.setAttribute("icon","datepicker"),i.setAttribute("inline","inline"),i.setAttribute("class","o-datepicker__input js-datepicker__input"),i),"\n      ",y?(a=document.createElement("axa-m-datepicker"),a.setAttribute("higher-end-year",""+String(h)),a.setAttribute("lower-end-year",""+String(v)),a.setAttribute("output-iso",""+String(d)),a.setAttribute("selected-day",""+String(!!g&&g.getDate())),a.setAttribute("start-month",""+String(g?g.getMonth()-1:"TODAY")),a.setAttribute("start-year",""+String(g?g.getFullYear():"TODAY")),a.setAttribute("locale",""+String(c)),a.setAttribute("button-ok","bestätigen"),a.setAttribute("button-cancel","abbrechen"),a.setAttribute("class","o-datepicker__calender js-datepicker__calender"),a):"","\n    "]),o};function xe(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}var Ne,Ee,De=".js-device-state",Se=/\s/g,Pe=/^['"]+|['"]+$/g,je=function(){function e(){var t=this;i(this,e),this.handleResize=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.getContent(),o=n.hasStateChanged,r=n.content;"function"==typeof t.callbackOnChange&&(o||e)&&t.callbackOnChange(t.getDeviceState(r))},this.parsePair=function(e,t){var n=t.split(":"),o=h(n,2),r=o[0],i=o[1];return e[r]=+i||i,e},this.window=null,this.lastContent="",this.hasStateChanged=!1}return a(e,[{key:"init",value:function(){this.node||(this.node=document.body,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=w.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(O,[])),i&&(e.className+=" "+i.join(" "))}}(this.node,De));var e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0===o||o,i=n.trailing;return N(e,t,{leading:r,maxWait:t,trailing:void 0===i||i})}(this.handleResize,100);this.offResize=x(xe(this.node),"resize",e),this.offOrientationchange=x(xe(this.node),"orientationchange",e)}},{key:"listen",value:function(e){var t=this;return this.node=document.querySelector(De),this.callbackOnChange=e,this.init(),function(){t.offResize(),t.offOrientationchange()}}},{key:"triggerOnce",value:function(){this.handleResize(!0)}},{key:"getContent",value:function(){if(!this.window&&this.node&&(this.window=xe(this.node)),!this.node||!this.window)return!1;var e=this.window.getComputedStyle(this.node,":after").getPropertyValue("content")||this.window.getComputedStyle(this.node,"::after").getPropertyValue("content");if(!e)return!1;var t=e!==this.lastContent;return this.lastContent=e,{hasStateChanged:t,content:e}}},{key:"getDeviceState",value:function(e){return e.replace(Se,"").replace(Pe,"").split(",").reduce(this.parsePair,{})}}]),e}(),Le="ok",Ie=["xs","sm"],Re=(function(){function e(t){var n=this;i(this,e),this.handleChangeDropdownMonth=function(e){e.preventDefault(),e.stopPropagation();var t=e.target.getAttribute("value");(t||0===t)&&n.datepickerBody.setAttribute("month",t)},this.handleChangeDropdownYear=function(e){e.preventDefault(),e.stopPropagation();var t=e.target.getAttribute("value");(t||0===t)&&n.datepickerBody.setAttribute("year",t)},this.handleChangeDatepickerBody=function(e){e.preventDefault(),e.stopPropagation();var t=e.target;n.changeDropDowns(t)},this.wcNode=t,this.deviceStateObserver=new je}a(e,[{key:"init",value:function(e){this.outputIso=e,this.datepickerBody=this.wcNode.querySelector(".js-datepicker__datepicker-body"),this.dropdownMonth=this.wcNode.querySelector(".js-datepicker__dropdown__month"),this.dropdownYear=this.wcNode.querySelector(".js-datepicker__dropdown__year"),this.okButton=this.wcNode.querySelector(".js-datepicker__button__Ok"),this.cancelButton=this.wcNode.querySelector(".js-datepicker__button__Cancel"),this.listenToChanges(),this.listenToButtons(),this.listenToDeviceStateChange()}},{key:"listenToDeviceStateChange",value:function(){var e=this;this.offListenToDeviceStateChange(),this.unListenToDeviceStateChange=this.deviceStateObserver.listen(function(t){if(e.dropdownMonth&&e.dropdownYear){var n=t.breakpoint,o=!!~Ie.indexOf(n);e.dropdownMonth.setAttribute("native",o),e.dropdownYear.setAttribute("native",o)}}),this.deviceStateObserver.triggerOnce()}},{key:"offListenToDeviceStateChange",value:function(){this.unListenToDeviceStateChange&&this.unListenToDeviceStateChange()}},{key:"listenToChanges",value:function(){this.offListenToChanges(),this.unListenToDropdownMonth=x(this.dropdownMonth,Z,"",this.handleChangeDropdownMonth,{capture:!0,passive:!1}),this.unListenToDropdownYear=x(this.dropdownYear,Z,"",this.handleChangeDropdownYear,{capture:!0,passive:!1}),this.unListenToDatepickerBody=x(this.datepickerBody,Z,"",this.handleChangeDatepickerBody,{capture:!0,passive:!1})}},{key:"offListenToChanges",value:function(){this.unListenToDropdownMonth&&this.unListenToDropdownMonth(),this.unListenToDropdownYear&&this.unListenToDropdownYear(),this.unListenToDatepickerBody&&this.unListenToDatepickerBody()}},{key:"listenToButtons",value:function(){var e=this;this.offListenToButtons(),this.unCancelButtonListenerEnd=x(this.wcNode.querySelector(".js-datepicker__button__Cancel"),H.CLICK,function(){k(e.cancelButton,W,{value:"",button:"cancel"},{bubbles:!0,cancelable:!0,composed:!0})}),this.unOkButtonListenerEnd=x(this.wcNode.querySelector(".js-datepicker__button__Ok"),H.CLICK,function(){var t=e.datepickerBody.getAttribute("year"),n=e.datepickerBody.getAttribute("month"),o=e.datepickerBody.getAttribute("value");if(o){var r=new Date(t,n,o);e.outputIso?k(e.okButton,W,{value:r.getTime(),button:Le},{bubbles:!0,cancelable:!0,composed:!0}):k(e.okButton,W,{value:r,button:Le},{bubbles:!0,cancelable:!0,composed:!0})}else k(e.okButton,W,{value:"",button:Le},{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToButtons",value:function(){this.unCancelButtonListenerEnd&&this.unCancelButtonListenerEnd(),this.unOkButtonListenerEnd&&this.unOkButtonListenerEnd()}},{key:"changeDropDowns",value:function(e){var t=e.getAttribute("month"),n=e.getAttribute("year");(t||0===t)&&this.dropdownMonth.setAttribute("value",t),(n||0===n)&&this.dropdownYear.setAttribute("value",n)}},{key:"destroy",value:function(){this.offListenToDeviceStateChange(),this.offListenToChanges()}}])}(),function(){function e(t){var n=this;i(this,e),this.handleClickDatepickerCalender=function(e){e.preventDefault(),e.stopPropagation();var t=e.detail;if(t){var o=t.button,r=t.value;o&&(o===Le?(n._value=r,n._localeValue=we(n._locale,n._value)):n._value=null,n.displayDatepicker())}},this.handleClickDatepickerInput=function(e){e.preventDefault(),e.stopPropagation(),n.displayDatepicker()},this.handleInputChange=function(e){e.preventDefault(),e.stopPropagation();var t=e.detail;n.setDateValueOfString(t)},this.setDateValueOfString=function(e){var t=Te(n._locale,e);n._value=t||!1,n.wcNode.setAttribute("value",n._value)},this.wcNode=t,this._value="",this._locale="",this._localValue=""}return a(e,[{key:"init",value:function(){this.datepickerInput=this.wcNode.querySelector(".js-datepicker__input"),this.datepickerCalender=this.wcNode.querySelector(".js-datepicker__calender"),this.datepicker=this.wcNode.querySelector(".js-datepicker"),this.listenToButtons(),this.listenToInput(),this.datepickerCalender&&this.isItemInLowerHalf(this.datepickerInput)&&this.datepickerCalender.classList.add("o-datepicker__calender--move-up")}},{key:"listenToButtons",value:function(){this.offListenToButtons(),this.unListenDatepickerCalender=x(this.datepickerCalender,W,"",this.handleClickDatepickerCalender,{capture:!0,passive:!1}),this.unListenToDatepickerInput=x(this.datepickerInput,W,"",this.handleClickDatepickerInput,{capture:!0,passive:!1})}},{key:"offListenToButtons",value:function(){this.unListenDatepickerCalender&&this.unListenDatepickerCalender(),this.unListenToDatepickerInput&&this.unListenToDatepickerInput()}},{key:"listenToInput",value:function(){this.offListenToInput(),this.unListenToInputChange=x(this.datepickerInput,Z,"",this.handleInputChange,{capture:!0,passive:!1}),this.unListenToInputLoad=x(this.datepickerInput,$,"",this.handleInputChange,{capture:!0,passive:!1})}},{key:"offListenToInput",value:function(){this.unListenToInputChange&&this.unListenToInputChange(),this.unListenToInputLoad&&this.unListenToInputLoad()}},{key:"displayDatepicker",value:function(){!0===F(this.wcNode,"open")?this.wcNode.removeAttribute("open"):this.wcNode.setAttribute("open",!0)}},{key:"isItemInLowerHalf",value:function(e){var t=e.getBoundingClientRect(),n=t.top+t.height/2;return window.innerHeight-n<n}},{key:"destroy",value:function(){this.offListenToButtons(),this.offListenToInput()}},{key:"localeValue",get:function(){return this._localeValue}},{key:"value",get:function(){return this._value}},{key:"locale",set:function(e){this._locale=e}}]),e}()),Be=function(e){function t(){i(this,t);var e=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ve,template:Ae}));return e.datepicker=new Re(e),e}return c(t,pe),a(t,[{key:"connectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-datepicker"}},{key:"disconnectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.datepicker.destroy()}},{key:"didRenderCallback",value:function(){this.datepicker.init()}}]),t}();return Be.tagName="axa-datepicker",Be.propTypes={classes:_.string,locale:fe,open:_.bool,lowerEndYear:_.number,higherEndYear:_.number,value:_.string},Ne=Be.tagName,Ee=Be,customElements.get(Ne)||customElements.define(Ne,Ee),Be});
