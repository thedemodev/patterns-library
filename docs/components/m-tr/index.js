var StyleGuideWebComponent=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},l=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},p=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},f=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function y(){}var _,b,m,g,O=t(function(t){t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=y,n.PropTypes=n,n}()}),C=t(function(t){!function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var a=void 0===r?"undefined":i(r);if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r))t.push(n.apply(null,r));else if("object"===a)for(var s in r)e.call(r,s)&&r[s]&&t.push(s)}}return t.join(" ")}t.exports?t.exports=n:window.classNames=n}()}),k=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},x={},T=(_=Object,b=_.getPrototypeOf||function(t){return t.__proto__},m=_.setPrototypeOf||function(t,e){return t.__proto__=e,t},g="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),m(new o,n.prototype)},function(t){var e=b(t);return m(t,m(function(){return g(e,arguments,b(this).constructor)},e))}),w=function(t){return T(function(e){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),s(n,[{key:"init",value:function(){var t;this._id=((t=this.nodeName)in x||(x[t]=0),++x[t]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),n}())},j={},N=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function P(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new N(e,c({},o,{detail:n}));return t.dispatchEvent(r)}var A=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function E(t){for(var e=t.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(t){var r=(i=t,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(e);var i,a;r?n=!0:o=!1;return{className:t,hasClass:r}});return!(!o&&!n)&&s}var R=/\s+/,S={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function D(t,e,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,c=r.passive,u=void 0===c||c;if(S[e]&&(e=S[e]),!t||!e)return null;var l=void 0===n?"undefined":i(n),p=n&&"string"===l;if("function"===l){if(o){var d=o;s=d.capture,u=d.passive}o=n}for(var h=A?{capture:s,passive:u}:s,f=p?function(e){var r=e.target;for(;!E(r,n)&&r!==t;)r=r.parentNode;if(r!==t)return o(e,r)}:o,v=e.split(R),y=v.length,_=0;_<y;++_)t.addEventListener(v[_],f,h);return function e(){for(var n=0;n<y;++n)t.removeEventListener(v[n],f,h);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,e)}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,h=!1,f=e!==c,y=!1!==c;function _(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return u=o,f&&(l&&clearTimeout(l),l=setTimeout(b,e)),y&&!p&&(p=setTimeout(m,c)),r&&!h&&(h=!0,d=t.apply(void 0,v(u))),d}return _.flush=function(){(l||p)&&(d=t.apply(void 0,v(u)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),g()}function m(){l&&clearTimeout(l),g()}function g(){a&&(d=t.apply(void 0,v(u))),l=null,p=null,h=!1}function O(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var I=window.__subscriptions;function U(t,e){var n=D(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);I[t]||(I[t]={count:0});var o,r=I[t];return r.count++,r.onsubscribe||(r.onsubscribe=L((o=t,function(){P(document,"pubsub/onsubscribe",o),P(document,"pubsub/onsubscribe/"+o,o),I[o]&&delete I[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete I[t]}}D(document,"pubsub/onsubscribe",function(t){var e=t.detail;I[e]||(I[e]={count:0});var n=I[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=f(t,3),n=e[0],o=e[1],r=e[2];P(r,n,o)}),delete n.queue)});var M,q=function(t,e){return t===e},F=((M=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){return t.apply(void 0,[].concat(n,o))?M.apply(void 0,arguments):void 0}}}})()(!0),[]);var V=1,K=3,H=8;function W(t,e){var n=t.nodeType,o=t.nodeName;n===V&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,c=null,u=null,l=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var h=p.localName;e.getAttributeNS(c,h||l)!==u&&e.setAttributeNS(c,l,u)}else e.hasAttribute(l)?e.getAttribute(l)!==u&&("null"===u||"undefined"===u?e.removeAttribute(l):e.setAttribute(l,u)):e.setAttribute(l,u);for(var f=a.length-1;f>=0;--f)if(!1!==(p=a[f]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,t.hasAttributeNS(c,l)||e.removeAttributeNS(c,l)):t.hasAttributeNS(null,l)||e.removeAttribute(l)}}(t,e),n!==K&&n!==H||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===o?function(t,e){var n=t.value,o=e.value;B(t,e,"checked"),B(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===o?B(t,e,"selected"):"TEXTAREA"===o&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function B(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var G=3;function $(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(W(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(z(o,n))(r=$(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var c=s;c<e.childNodes.length;c++)if(z(e.childNodes[c],o)){i=e.childNodes[c];break}i?((r=$(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=$(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),e):null:t}function z(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===G&&t.nodeValue===e.nodeValue)}var J,Y,Z,X,Q=(J=Object,Y=J.getPrototypeOf||function(t){return t.__proto__},Z=J.setPrototypeOf||function(t,e){return t.__proto__=e,t},X="object"===("undefined"==typeof Reflect?"undefined":i(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),Z(new o,n.prototype)},function(t){var e=Y(t);return Z(t,Z(function(){return X(e,arguments,Y(this).constructor)},e))})(function(t){function e(t){var n;a(this,e);for(var o="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];var c=d(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,e),c.name="TemplateNoStringReturnException",c}return l(e,t),e}(Error)),tt=!!document.createDocumentFragment().children,et=0;function nt(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(t){function e(){return t.apply(void 0,arguments)}return 0===et&&(et++,Object.keys(t).map(function(n){return e[n]=t[n],n}).reduce(nt,e),et--),e}(n)),t}var ot=O;Object.keys(ot).reduce(nt,ot);var rt=ot.oneOf(["left","center","right"]),it=ot.oneOf(["left","right"]),at=(ot.oneOf(["top","bottom"]),ot.oneOf(["up","down"])),st=ot.oneOf(["ok","pending","error","unknown"]),ct=ot.oneOf(["row","col","rowgroup","colgroup","auto"]),ut=ot.oneOfType([ot.string,ot.number]),lt={text:ut,value:ot.any,rowspan:ut,colspan:ut,scope:ct,align:rt,dense:ot.bool},pt={float:it,strong:ot.bool,bold:ot.bool},dt=ot.oneOfType([ot.string,ot.number]),ht=ot.oneOfType([dt,ot.shape(c({},lt,{sort:at,sortActive:ot.bool}))]),ft=ot.oneOfType([dt,ot.shape(c({},lt,pt,{action:ot.bool,state:st}))]),vt=ot.oneOfType([dt,ot.shape(c({},lt,pt))]),yt=ot.oneOfType([ot.arrayOf(ht),ot.shape({cells:ot.arrayOf(ht)})]),_t=ot.oneOfType([ot.arrayOf(ft),ot.shape({cells:ot.arrayOf(ft),action:ot.bool})]),bt=ot.oneOfType([ot.arrayOf(vt),ot.shape({cells:ot.arrayOf(vt)})]),mt=(ot.oneOfType([yt,ot.arrayOf(yt)]),ot.oneOfType([_t,ot.arrayOf(_t)]),ot.oneOfType([bt,ot.arrayOf(bt)]),/[A-Z]/g);function gt(t){return t.replace(mt,Ot)}function Ot(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var Ct=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function kt(t,e,n){var o=t;if(n)return function(t,e,n){var o=t;switch(n){case ot.string:case ot.string.isRequired:return t;case ot.bool:case ot.bool.isRequired:if(!t||e===t)return!0;case ot.number:case ot.number.isRequired:case ot.object:case ot.object.isRequired:case ot.array:case ot.array.isRequired:default:if(Ct.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}return o}(t,e,n);if(t&&e!==t){if(Ct.test(t))try{o=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else o=!0;return o}var xt=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Tt=/[-_]+/g;function wt(t){return t.replace(xt,jt)}function jt(t,e){return 0==+t||Tt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Nt(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[wt(e)]);if(o&&!t.hasAttribute(e))return i!==ot.bool&&i!==ot.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=kt(a,e,i)}var Pt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function At(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,c=t.ownerDocument.documentElement,u=D(c,e,function(e){var o=e.target;if(!t.contains(o)&&t!==o)return n(e)},{capture:i,passive:s});return Pt&&(c.style.cursor="pointer"),u}var Et=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Rt="axa-change",St="data-prevent-default";((function(){function t(e){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,t),this._handleClick=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var o=!n._lastToggleNode,r=e!==n._lastToggleNode,i=!o&&!r;o?(n._notify(Et.ENTER,e),n._onInteractive()):r&&n._notify(Et.MOVE,e,n._lastToggleNode),n._lastToggleNode=e,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(t,e){n.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),n._close()},this._handleKeyUp=function(t){(t.key===Et.ESCAPE||t.key===Et.ESC||27===t.keyCode)&&(t.preventDefault(),n._close())},this._init(e,o)}return s(t,[{key:"_init",value:function(e,n){e&&(this._wcNode=e),n&&(this._options=c({},t.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=D(this._container,Et.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=D(this._container,Et.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=At(this._container,Et.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=D(this._container.ownerDocument,Et.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(St)?Nt(t,St):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Et.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),t})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Dt=k(function(t){return function(e){function n(){var t,e,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=o=d(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(i))),o._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,t)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=U("context/available",o._makeContextReady)},d(o,e)}return l(n,t),s(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;I[t]||(I[t]={count:0,queue:[]});var o=I[t].queue;Array.isArray(o)?o.push([t,e,n]):P(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(t){return function(e){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),s(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(t){return function(e){function n(){var t,e,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=o=d(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(i))),o._reduceProps=function(t,e){var n=t.props,r=t.shouldUpdate,i="_"+e,a=n[e],s=o[i];return r||o.shouldUpdateCallback(a,s)?(o.props[e]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},d(o,e)}return l(n,t),s(n,[{key:"init",value:function(t){var e=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=L(function(){return e.updated&&e.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(t){wt(t)})}},{key:"connectedCallback",value:function(){var t=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var n=wt(e);if(t.hasAttribute(e)){var r=Nt(t,e,o[n]);t.props[n]=r}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,o){if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,t,e,o),this.shouldUpdateCallback(o,e)){var r=wt(t);if(this.hasAttribute(t)){var i=this.constructor.propTypes;this.props[r]=kt(o,t,i[r])}else this.props[r]=null;this.checkPropTypes(),"value"===t&&null!==o&&P(this,Rt,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e,o=Object.keys(t).filter(function(t){return n.indexOf(gt(t))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName;e&&ot.checkPropTypes(e,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(gt)}}]),n}()},function(t){return function(e){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),s(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,o=p(t,["template"]);u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var t=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var o=this._template;try{if(e){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});tt||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var s=o(this.props,this.childrenFragment,this),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(t){c.appendChild(t)});else if(s){if("string"==typeof s)throw new Q(this);c.appendChild(s)}if(e)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: newTree should be an object");$(e,t)}(this,l),function(){for(var t=void 0;t=F.pop();)delete t.isSameNode;F=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),n}()},function(t){return function(e){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),s(n,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,o=void 0===e?"":e,r=p(t,["styles"]);u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._styles=o}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),n}()});k(Dt,w);var Lt,It,Ut,Mt=k(Dt,function(t){return function(e){function n(){var t,e,o;a(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return e=o=d(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(i))),o._appendStyles=function(){n.appendGlobalStyles(o._styles,o.nodeName)},d(o,e)}return l(n,t),s(n,null,[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.uuidv4();if(e&&!j[n]){var o=document.createElement("style"),r=document.createTextNode(e);j[n]=!0,o.appendChild(r),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},w)(HTMLTableRowElement),qt=function(t){function e(){return a(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,Mt),s(e,[{key:"init",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:"@media (max-width: 767px) {\n  .m-tr {\n    display: block;\n    padding: 20px 0;\n    border-top: 1px solid #e5e5e5; } }\n\n@media (max-width: 767px) {\n  .m-tr--head {\n    display: none; } }\n\n@media (max-width: 767px) {\n  .m-tr--foot {\n    display: none; } }\n\n.m-tr--dense th,\n.m-tr--dense td {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.m-tr--action:hover, .m-tr--action:focus {\n  cursor: pointer; }\n  .m-tr--action:hover .a-th, .m-tr--action:hover .a-td, .m-tr--action:hover td, .m-tr--action:hover th, .m-tr--action:focus .a-th, .m-tr--action:focus .a-td, .m-tr--action:focus td, .m-tr--action:focus th {\n    color: #00008f;\n    border-top-color: #00008f;\n    border-bottom: 1px solid #00008f; }\n    .m-tr--action:hover .a-th:first-child, .m-tr--action:hover .a-td:first-child, .m-tr--action:hover td:first-child, .m-tr--action:hover th:first-child, .m-tr--action:focus .a-th:first-child, .m-tr--action:focus .a-td:first-child, .m-tr--action:focus td:first-child, .m-tr--action:focus th:first-child {\n      border-left-color: #00008f; }\n    .m-tr--action:hover .a-th:last-child, .m-tr--action:hover .a-td:last-child, .m-tr--action:hover td:last-child, .m-tr--action:hover th:last-child, .m-tr--action:focus .a-th:last-child, .m-tr--action:focus .a-td:last-child, .m-tr--action:focus td:last-child, .m-tr--action:focus th:last-child {\n      border-right-color: #00008f; }\n  @media (max-width: 767px) {\n    .m-tr--action:hover, .m-tr--action:focus {\n      margin-left: -1px;\n      margin-right: -1px;\n      padding-top: 19px;\n      padding-bottom: 19px;\n      border: 1px solid #00008f; }\n      .m-tr--action:hover .a-th, .m-tr--action:hover .a-td, .m-tr--action:hover td, .m-tr--action:hover th, .m-tr--action:focus .a-th, .m-tr--action:focus .a-td, .m-tr--action:focus td, .m-tr--action:focus th {\n        border-color: transparent; }\n        .m-tr--action:hover .a-th:first-child, .m-tr--action:hover .a-th:last-child, .m-tr--action:hover .a-td:first-child, .m-tr--action:hover .a-td:last-child, .m-tr--action:hover td:first-child, .m-tr--action:hover td:last-child, .m-tr--action:hover th:first-child, .m-tr--action:hover th:last-child, .m-tr--action:focus .a-th:first-child, .m-tr--action:focus .a-th:last-child, .m-tr--action:focus .a-td:first-child, .m-tr--action:focus .a-td:last-child, .m-tr--action:focus td:first-child, .m-tr--action:focus td:last-child, .m-tr--action:focus th:first-child, .m-tr--action:focus th:last-child {\n          border-color: transparent; } }\n"})}},{key:"willRenderCallback",value:function(){var t=this.props,e=t.classes,n=t.head,o=t.foot,r=t.action,i=t.dense;this.className=C("m-tr",e,{"m-tr--head":n,"m-tr--foot":o,"m-tr--action":r,"m-tr--dense":i})}}]),e}();return qt.tagName="axa-tr",qt.builtInTagName="tr",qt.propTypes={classes:O.string,head:O.bool,foot:O.bool,action:O.bool,dense:O.bool},Lt=qt.tagName,It=qt,Ut={extends:qt.builtInTagName},customElements.get(Lt)||customElements.define(Lt,It,Ut),qt}();