!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(){}var y,_=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(b,t),_--),t}(n)),e}var g=(function(e){e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=v,n.PropTypes=n,n}()}(y={exports:{}},y.exports),y.exports);Object.keys(g).reduce(b,g);var m=g.oneOf(["left","center","right"]),O=g.oneOfType([g.string,g.number]),C=g.oneOfType([g.arrayOf(j),g.shape({cells:g.arrayOf(j)})]),k=g.oneOfType([g.arrayOf(P),g.shape({cells:g.arrayOf(P),action:g.bool})]),x=g.oneOfType([g.arrayOf(S),g.shape({cells:g.arrayOf(S)})]),w=(g.oneOf(["row","col","rowgroup","colgroup","auto"]),g.oneOfType([g.arrayOf(j),g.arrayOf(C)]),g.oneOfType([g.arrayOf(P),g.arrayOf(k)]),g.oneOfType([g.arrayOf(S),g.arrayOf(x)]),g.oneOf(["up","down"])),T=g.oneOf(["left","right"]),N=g.oneOf(["ok","pending","error","unknown"]),E={text:O,value:g.any,rowspan:g.number,colspan:g.number,scope:null,align:m,dense:g.bool},A=g.oneOfType([g.string,g.number,g.shape(E)]),j=g.oneOfType([A,g.shape(s({},E,{sort:w,sortActive:g.bool}))]),P=g.oneOfType([A,g.shape(s({},E,{float:T,action:g.bool,strong:g.bool,bold:g.bool,state:N}))]),S=g.oneOfType([A,g.shape(s({},E,{float:T}))]),R=(g.oneOf(["top","bottom"]),{}),D=function(e){return e in R||(R[e]=0),++R[e]},L=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function M(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new L(t,s({},r,{detail:n}));return e.dispatchEvent(o)}var U=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function I(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var V=/\s+/,q={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function F(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,u=i.passive,c=void 0===u||u;if(q[t]&&(t=q[t]),!e||!t)return null;var l=void 0===n?"undefined":o(n),p=n&&"string"===l;if("function"===l){if(r){var d=r;s=d.capture,c=d.passive}r=n}for(var f=U?{capture:s,passive:c}:s,h=p?function(t){var o=t.target;for(;!I(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(V),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,d=void 0,f=!1,v=t!==u,y=!1!==u;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,v&&(l&&clearTimeout(l),l=setTimeout(b,t)),y&&!p&&(p=setTimeout(g,u)),o&&!f&&(f=!0,d=e.apply(void 0,h(c))),d}return _.flush=function(){(l||p)&&(d=e.apply(void 0,h(c)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(d=e.apply(void 0,h(c))),l=null,p=null,f=!1}function O(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var K=window.__subscriptions;function W(e,t){var n=F(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);K[e]||(K[e]={count:0});var r,o=K[e];return o.count++,o.onsubscribe||(o.onsubscribe=H((r=e,function(){M(document,"pubsub/onsubscribe",r),M(document,"pubsub/onsubscribe/"+r,r),K[r]&&delete K[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete K[e]}}F(document,"pubsub/onsubscribe",function(e){var t=e.detail;K[t]||(K[t]={count:0});var n=K[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=f(e,3),n=t[0],r=t[1],o=t[2];M(o,n,r)}),delete n.queue)});var $,B=function(e,t){return e===t},G=(($=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?$.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function z(e){return e.replace(G,J)}function J(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Y=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Z(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case g.string:case g.string.isRequired:return e;case g.bool:case g.bool.isRequired:if(!e||t===e)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Y.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(Y.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var X=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Q=/[-_]+/g;function ee(e){return e.replace(X,te)}function te(e,t){return 0==+e||Q.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ne(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[ee(t)]);if(r&&!e.hasAttribute(t))return i!==g.bool&&i!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Z(a,t,i)}var re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function oe(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,c=F(u,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return re&&(u.style.cursor="pointer"),c}var ie=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ae="axa-change",se="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(ie.ENTER,t),n._onInteractive()):o&&n._notify(ie.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ie.ESCAPE||e.key===ie.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return a(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=s({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=F(this._container,ie.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=F(this._container,ie.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=oe(this._container,ie.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=F(this._container.ownerDocument,ie.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(se)?ne(e,se):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ie.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ue=[];var ce=1,le=3,pe=8;function de(e,t){var n=e.nodeType,r=e.nodeName;n===ce&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var f=p.localName;t.getAttributeNS(u,f||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==le&&n!==pe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;fe(e,t,"checked"),fe(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?fe(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function fe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var he=3;function ve(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(de(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(ye(r,n))(o=ve(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(ye(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=ve(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ve(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ye(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===he&&e.nodeValue===t.nodeValue)}var _e=function(e){function t(e){var n;i(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,a=Array(o>1?o-1:0),s=1;s<o;s++)a[s-1]=arguments[s];var u=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return c(t,e),t}(Error),be=!!document.createDocumentFragment().children;function ge(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ge.prototype,HTMLElement.prototype),Object.setPrototypeOf(ge,HTMLElement);var me=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;i(this,n);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return t=r=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=W("context/available",r._makeContextReady)},p(r,t)}return c(n,e),a(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;K[e]||(K[e]={count:0,queue:[]});var r=K[e].queue;Array.isArray(r)?r.push([e,t,n]):M(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return i(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){i(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,n){var r=e.props,o=e.shouldUpdate,i="_"+n,a=r[n],s=t[i];return o||t.shouldUpdateCallback(a,s)?(t.props[n]=a,{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t.props={},t.updatedDebounced=H(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){ee(e)}),t}return c(n,e),a(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(z)}}]),a(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=ee(t);if(e.hasAttribute(t)){var o=ne(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=ee(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Z(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&M(this,ae,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return n.indexOf(z(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=l(e,["template"]);i(this,n);var o=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return c(n,e),a(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});be||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new _e(this);c.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":o(t)))throw new Error("componentMorph: newTree should be an object");ve(t,e)}(this,l),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=l(e,["styles"]);i(this,n);var a=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return a._styles=r,a}return c(n,e),a(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){i(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=D(n.nodeName),n}return c(t,ge),a(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),Oe={},Ce=function(e){function t(){var e,n,r;i(this,t);for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},p(r,n)}return c(t,me),a(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:me.uuidv4();if(e&&!Oe[t]){var n=document.createElement("style"),r=document.createTextNode(e);Oe[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ke=".a-icon {\n  width: 50px;\n  height: 50px; }\n\n.a-icon--small {\n  width: 25px;\n  height: 25px; }\n",xe=/\n[\s]+$/,we=/^\n[\s]+/,Te=/[\s]+$/,Ne=/^[\s]+/,Ee=/[\n\s]+/g,Ae=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],je=["code","pre","textarea"],Pe="http://www.w3.org/2000/svg",Se="#src--assets--icons--",Re=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.icon,o=n.classes,i=void 0===o?"a-icon":o,a=n.pathPrefix,s=(window.__axaPLibConfig||{}).iconsPath||Se;return!0===a?s=Se:!1===a?s="":"string"==typeof a&&(s=a),(t=document.createElementNS(Pe,"svg")).setAttribute("class",""+String(i)),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===Ae.indexOf(i)&&-1===je.indexOf(i)?""===(r=l.nodeValue.replace(we,"").replace(Te,"").replace(xe,"").replace(Ee," "))?t.removeChild(l):l.nodeValue=r:-1===je.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(we,o).replace(Ne," ").replace(Te,"").replace(xe,"").replace(Ee," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===Ae.indexOf(i)&&-1===je.indexOf(i)?""===(r=l.nodeValue.replace(we,"").replace(xe,"").replace(Ee," "))?t.removeChild(l):l.nodeValue=r:-1===je.indexOf(i)&&(r=l.nodeValue.replace(Ne," ").replace(we,"").replace(xe,"").replace(Ee," "),l.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(t,["\n      ",(e=document.createElementNS(Pe,"use"),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+String(s)+String(r)),e.setAttribute("href",""+String(s)+String(r)),e),"\n    "]),t},De=function(e){function t(){return i(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:ke,template:Re}))}return c(t,Ce),a(t,[{key:"willRenderCallback",value:function(){this.className="a-icon__root"}}]),t}();return De.tagName="axa-icon",De.propTypes={icon:g.string.isRequired,classes:g.string,pathPrefix:g.oneOfType([g.string,g.bool])},document.addEventListener("DOMContentLoaded",function(){var e,t;e=De.tagName,t=De,customElements.get(e)||customElements.define(e,t)}),De});
