!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var g=0;function _(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(_,t),g--),t}(n)),e}var m=e(function(e){e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()});Object.keys(m).reduce(_,m);var b=m.oneOf(["left","center","right"]),C=m.oneOfType([m.string,m.number]),w=m.oneOfType([m.arrayOf(j),m.shape({cells:m.arrayOf(j)})]),O=m.oneOfType([m.arrayOf(P),m.shape({cells:m.arrayOf(P),action:m.bool})]),k=m.oneOfType([m.arrayOf(S),m.shape({cells:m.arrayOf(S)})]),x=(m.oneOf(["row","col","rowgroup","colgroup","auto"]),m.oneOfType([m.arrayOf(j),m.arrayOf(w)]),m.oneOfType([m.arrayOf(P),m.arrayOf(O)]),m.oneOfType([m.arrayOf(S),m.arrayOf(k)]),m.oneOf(["up","down"])),A=m.oneOf(["left","right"]),E=m.oneOf(["ok","pending","error","unknown"]),T={text:C,value:m.any,rowspan:m.number,colspan:m.number,scope:null,align:b,dense:m.bool},N=m.oneOfType([m.string,m.number,m.shape(T)]),j=m.oneOfType([N,m.shape(l({},T,{sort:x,sortActive:m.bool}))]),P=m.oneOfType([N,m.shape(l({},T,{float:A,action:m.bool,strong:m.bool,bold:m.bool,state:E}))]),S=m.oneOfType([N,m.shape(l({},T,{float:A}))]);function R(e){function t(t,n,r){return null==t[n]?null:e(t,n,r)}return t.isRequired=e,t}var D=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;R(function(e,t,n){if(!D.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});m.oneOf(["top","bottom"]);var L=R(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),I={},U=function(e){return e in I||(I[e]=0),++I[e]},M=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new M(t,l({},r,{detail:n}));return e.dispatchEvent(o)}var q=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),F=/^\s+|\s{2,}|\s+$/g;function H(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function z(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=$.apply(void 0,[e].concat(n));if(!0!==o){var i=[].concat(n);Array.isArray(o)&&(i=o.reduce(K,[])),i&&(e.className+=" "+i.join(" "))}}function K(e,t){var n=t.className;return t.hasClass||e.push(n),e}function $(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=H(e).test(t);o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}function W(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=$.apply(void 0,[e].concat(n));if(!1!==o){var i=[].concat(n);if(Array.isArray(o)&&(i=o.reduce(B,[])),i){var a=e.className;e.className=i.reduce(G,a)}}}function B(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function G(e,t){var n=H(t,"g");return e.replace(n," ").replace(F," ")}var Z=/\s+/,J={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function Y(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,s=void 0!==a&&a,l=o.passive,c=void 0===l||l;if(J[t]&&(t=J[t]),!e||!t)return null;var u=void 0===n?"undefined":i(n),d=n&&"string"===u;if("function"===u){if(r){var p=r;s=p.capture,c=p.passive}r=n}for(var f=q?{capture:s,passive:c}:s,h=d?function(t){var o=t.target;for(;!$(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(Z),y=v.length,g=0;g<y;++g)e.addEventListener(v[g],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=t!==l,y=!1!==l;function g(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,h&&(u&&clearTimeout(u),u=setTimeout(_,t)),y&&!d&&(d=setTimeout(m,l)),o&&!f&&(f=!0,p=e.apply(void 0,v(c))),p}return g.flush=function(){(u||d)&&(p=e.apply(void 0,v(c)));return C(),p},g.cancel=C,g;function _(){d&&clearTimeout(d),b()}function m(){u&&clearTimeout(u),b()}function b(){a&&(p=e.apply(void 0,v(c))),u=null,d=null,f=!1}function C(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var Q=window.__subscriptions;function ee(e,t){var n=Y(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);Q[e]||(Q[e]={count:0});var r,o=Q[e];return o.count++,o.onsubscribe||(o.onsubscribe=X((r=e,function(){V(document,"pubsub/onsubscribe",r),V(document,"pubsub/onsubscribe/"+r,r),Q[r]&&delete Q[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete Q[e]}}Y(document,"pubsub/onsubscribe",function(e){var t=e.detail;Q[t]||(Q[t]={count:0});var n=Q[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=h(e,3),n=t[0],r=t[1],o=t[2];V(o,n,r)}),delete n.queue)});var te,ne=function(e,t){return e===t},re=((te=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?te.apply(void 0,arguments):void 0}}}})()(!0),/[A-Z]/g);function oe(e){return e.replace(re,ie)}function ie(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var ae=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function se(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case m.string:case m.string.isRequired:return e;case m.bool:case m.bool.isRequired:if(!e||t===e)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(ae.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(ae.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var le=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ce=/[-_]+/g;function ue(e){return e.replace(le,de)}function de(e,t){return 0==+e||ce.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function pe(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[ue(t)]);if(r&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=se(a,t,i)}var fe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function he(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=Y(l,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return fe&&(l.style.cursor="pointer"),c}var ve=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ye="axa-change",ge="data-prevent-default",_e=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(ve.ENTER,t),n._onInteractive()):o&&n._notify(ve.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===ve.ESCAPE||e.key===ve.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=l({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Y(this._container,ve.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=Y(this._container,ve.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=he(this._container,ve.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=Y(this._container.ownerDocument,ve.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ge)?pe(e,ge):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ve.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e}();_e.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var me=[];var be=1,Ce=3,we=8;function Oe(e,t){var n=e.nodeType,r=e.nodeName;n===be&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,d=null,p=s.length-1;p>=0;--p)if(d=s[p],u=d.name,l=d.namespaceURI,c=d.value,!i(u))if(l){var f=d.localName;t.getAttributeNS(l,f||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;h>=0;--h)if(!1!==(d=a[h]).specified){if(u=d.name,l=d.namespaceURI,i(u))continue;l?(u=d.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==Ce&&n!==we||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ke(e,t,"checked"),ke(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ke(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ke(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var xe=3;function Ae(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Oe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Ee(r,n))(o=Ae(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Ee(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=Ae(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=Ae(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ee(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===xe&&e.nodeValue===t.nodeValue)}var Te=function(e){function t(e){var n;a(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),s=1;s<o;s++)i[s-1]=arguments[s];var l=p(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="TemplateNoStringReturnException",l}return u(t,e),t}(Error),Ne=!!document.createDocumentFragment().children;function je(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(je.prototype,HTMLElement.prototype),Object.setPrototypeOf(je,HTMLElement);var Pe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return t=r=p(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=ee("context/available",r._makeContextReady)},p(r,t)}return u(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Q[e]||(Q[e]={count:0,queue:[]});var r=Q[e].queue;Array.isArray(r)?r.push([e,t,n]):V(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){a(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,n){var r=e.props,o=e.shouldUpdate,i="_"+n,a=r[n],s=t[i];return o||t.shouldUpdateCallback(a,s)?(t.props[n]=a,{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},t._isConnected=!1,t.props={},t.updatedDebounced=X(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){ue(e)}),t}return u(n,e),s(n,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(oe)}}]),s(n,[{key:"connectedCallback",value:function(){var e=this;if(c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=ue(t);if(e.hasAttribute(t)){var o=pe(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=ue(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=se(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&V(this,ye,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return n.indexOf(oe(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=d(e,["template"]);a(this,n);var o=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return u(n,e),s(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Ne||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new Te(this);l.appendChild(s)}if(t)c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":i(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":i(t)))throw new Error("componentMorph: newTree should be an object");Ae(t,e)}(this,u),function(){for(var e=void 0;e=me.pop();)delete e.isSameNode;me=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=d(e,["styles"]);a(this,n);var i=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._styles=r,i}return u(n,e),s(n,[{key:"connectedCallback",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){a(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=U(n.nodeName),n}return u(t,je),s(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),Se={},Re=function(e){function t(){var e,n,r;a(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},p(r,n)}return u(t,Pe),s(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Pe.uuidv4();if(e&&!Se[t]){var n=document.createElement("style"),r=document.createTextNode(e);Se[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var De=".m-header-languages {\n  position: relative;\n  display: block;\n  text-align: left; }\n\n.m-header-languages__drop-down-toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    cursor: pointer; }\n\n.m-header-languages__drop-down-icon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -8px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-header-languages__drop-down-icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-header-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1070;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  background: #fafafa;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-dropdown-open > .m-header-languages__list {\n    height: auto; }\n\n.m-header-languages__list-item {\n  display: block;\n  border-width: 0 1px;\n  border-color: #e5e5e5;\n  border-style: solid; }\n  .m-header-languages__list-item:first-child {\n    border-top-width: 1px; }\n  .m-header-languages__list-item:last-child {\n    border-bottom-color: #ccc;\n    border-bottom-width: 2px; }\n\n.m-header-languages__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__list-link.is-header-languages-active, .m-header-languages__list-link:hover, .m-header-languages__list-link:active, .m-header-languages__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n",Le=/\n[\s]+$/,Ie=/^\n[\s]+/,Ue=/[\s]+$/,Me=/^[\s]+/,Ve=/[\n\s]+/g,qe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Fe=["code","pre","textarea"],He=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===qe.indexOf(i)&&-1===Fe.indexOf(i)?""===(r=u.nodeValue.replace(Ie,"").replace(Ue,"").replace(Le,"").replace(Ve," "))?t.removeChild(u):u.nodeValue=r:-1===Fe.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(Ie,o).replace(Me," ").replace(Ue,"").replace(Le,"").replace(Ve," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===qe.indexOf(i)&&-1===Fe.indexOf(i)?""===(r=u.nodeValue.replace(Ie,"").replace(Le,"").replace(Ve," "))?t.removeChild(u):u.nodeValue=r:-1===Fe.indexOf(i)&&(r=u.nodeValue.replace(Me," ").replace(Ie,"").replace(Le,"").replace(Ve," "),u.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};var ze,Ke=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},$e=e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=void 0===o?"undefined":i(o);if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),We=function(e){var t,n,r,o=e.items;return[(n=document.createElement("button"),n.setAttribute("type","button"),n.setAttribute("class","m-header-languages__drop-down-toggle js-dropdown__toggle"),He(n,["\n    ",Array.isArray(o)&&o[0].name,"\n    ",(t=document.createElement("axa-icon"),t.setAttribute("icon","angle-bracket-down"),t.setAttribute("classes","m-header-languages__drop-down-icon"),t),"\n  "]),n),(r=document.createElement("ul"),r.setAttribute("class","m-header-languages__list"),He(r,["\n    ",Array.isArray(o)&&o.map(function(e){var t,n,r=e.url,o=void 0===r?"":r,i=e.name,a=e.isActive;return(n=document.createElement("li")).setAttribute("class","m-header-languages__list-item"),He(n,["\n        ",(t=document.createElement("a"),t.setAttribute("href",""+String(o)),t.setAttribute("class",""+String($e("m-header-languages__list-link",{"is-header-languages-active":a}))),He(t,["\n          ",Ke(i),"\n        "]),t),"\n      "]),n}),"\n  "]),r)]},Be=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Ge=function(){var e=window.requestAnimationFrame||window[Be+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),r=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+r)},r);return t=n+r,o}}return e}(),Ze=(ze=(ze=window.cancelAnimationFrame||window[Be+"CancelAnimationFrame"]||window[Be+"CancelRequestAnimationFrame"])?ze.bind(window):function(e){clearTimeout(e)},function(e){function t(e,n){a(this,t),n=l({},t.DEFAULTS,n);var r=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.handleTransitionEnd=function(e){"height"===e.propertyName&&(r._removeHeightOnElement(e.target),r.offInteractive(),W(r.wcNode,r.options.isAnimatingClass))},r.handleClick=function(e){if(e.preventDefault(),r.offClicks(),r.wcNode.getAttribute("value")===e.target.dataset.index)r.leave(r.lastToggleNode),r.deleteLastToggleNode();else{var t=e.target.dataset.index;r.wcNode.setAttribute("value",t)}},r.handleChange=function(e){e.preventDefault(),r.wcNode&&r.wcNode.setAttribute("value",e.target.value)},r.options=n,r.wcNode=e,r.isOpen=!1,r.unInputEnd&&r.unInputEnd(),r.unInputEnd=Y(r.wcNode,ve.CHANGE,r.options.nativeSelectClass,r.handleChange,{capture:!0,passive:!1}),r}return u(t,_e),s(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=Y(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"onClicks",value:function(){this.offClicks(),this.unClickEnd=Y(this.wcNode,ve.CLICK,this.options.selectClass,this.handleClick,{capture:!0,passive:!1})}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,z(t,this.options.isAnimatingClass),n.style.overflow="scroll";var r=n.scrollHeight;n.style.overflow="",this.onInteractive(),this.onClicks(),n.style.height=r+"px",z(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,r=n.lastElementChild,o=r.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),this.onClicks(),z(n,this.options.isAnimatingClass),Ge(function(){r.style.height=o+"px",Ge(function(){W(n,t.options.isOpenClass),r.style.height=0})}))}},{key:"_removeHeightOnElement",value:function(e){this.isOpen&&(e.style.height="")}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",W(e,this.options.isOpenClass))}},{key:"destroy",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());Ze.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",nativeSelectClass:"js-dropdown__native-select",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating",selectClass:"js-dropdown__content"};var Je,Ye,Xe=function(e){function t(){return a(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:De,template:We}))}return u(t,Re),s(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-languages js-dropdown"}},{key:"didRenderCallback",value:function(){this.dropDown&&this.dropDown.destroy(),this.dropDown=new Ze(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.dropDown.destroy(),delete this.dropDown}}]),t}();return Xe.tagName="axa-header-languages",Xe.propTypes={items:m.arrayOf(m.shape({url:L,name:m.string,isActive:m.bool}))},Je=Xe.tagName,Ye=Xe,customElements.get(Je)||customElements.define(Je,Ye),Xe});
