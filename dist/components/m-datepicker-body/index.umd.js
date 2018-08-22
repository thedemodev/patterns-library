!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var t={},o=function(e){return e in t||(t[e]=0),++t[e]},i=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new i(t,a({},o,{detail:n}));return e.dispatchEvent(r)}var b=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function g(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var m=/\s+/,k={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function y(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(k[e]&&(e=k[e]),!n||!e)return null;var c=void 0===o?"undefined":_(o),u=o&&"string"===c;if("function"===c){if(r){var d=r;a=d.capture,l=d.passive}r=o}for(var p=b?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!g(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(m),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function x(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=r!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(_,r)),v&&!d&&(d=setTimeout(b,l)),i&&!h&&(h=!0,p=o.apply(void 0,C(c))),p}return y.flush=function(){(u||d)&&(p=o.apply(void 0,C(c)));return m(),p},y.cancel=m,y;function _(){d&&clearTimeout(d),g()}function b(){u&&clearTimeout(u),g()}function g(){a&&(p=o.apply(void 0,C(c))),d=u=null,h=!1}function m(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var c=window.__subscriptions;function w(e,t){var n=y(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);c[e]||(c[e]={count:0});var o,r=c[e];return r.count++,r.onsubscribe||(r.onsubscribe=x((o=e,function(){v(document,"pubsub/onsubscribe",o),v(document,"pubsub/onsubscribe/"+o,o),c[o]&&delete c[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete c[e]}}y(document,"pubsub/onsubscribe",function(e){var t=e.detail;c[t]||(c[t]={count:0});var n=c[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],r=t[2];v(r,n,o)}),delete n.queue)});var O,e=function(e,t){return e===t},N=((O=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?O.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=h(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return p(l,e),l}(Error)),A=/[A-Z]/g;function E(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var T=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function P(t,n){var e=t;if(t&&n!==t){if(T.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,j=/[-_]+/g;function D(e){return e.replace(n,S)}function S(e,t){return 0==+e||j.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function M(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=P(n,t)}var R=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function L(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=y(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,R&&(t.style.cursor="pointer"),u}var I=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend"),U="axa-change",V="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(I.ENTER,t),i._onInteractive()):o&&i._notify(I.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===I.ESCAPE||e.key===I.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=a({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=y(this._container,I.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=y(this._container,I.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=L(this._container,I.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=y(this._container.ownerDocument,I.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(V)?M(e,V):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(I.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var F=["title","checked","disabled"],K=[];var Y=1,H=3,q=8;function W(e,t){var n=e.nodeType,o=e.nodeName;n===Y&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;0<=l;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var c=s.localName;t.getAttributeNS(r,c||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==H&&n!==q||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?B(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var $=3;function z(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(W(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(G(o,n))(r=z(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(G(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=z(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=z(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function G(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===$&&e.nodeValue===t.nodeValue)}var Z=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error),J=!!document.createDocumentFragment().children;function X(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(X.prototype,HTMLElement.prototype),Object.setPrototypeOf(X,HTMLElement);var Q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=w("context/available",n._makeContextReady)},h(n,t)}return p(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;c[e]||(c[e]={count:0,queue:[]});var o=c[e].queue;Array.isArray(o)?o.push([e,t,n]):v(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=l._hasKeys[t];if(-1===F.indexOf(t)&&r)throw new N(t,l);var i="_"+t,a=n[t],s=l[i];return o||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=x(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=D(e),o=n in l;if(-1===F.indexOf(n)&&o)throw new N(n,l);l._hasKeys[n]=o,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return p(c,t),r(c,[{key:"connectedCallback",value:function(){var r=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=D(e);if(r.hasAttribute(e)){var n=M(r,e),o=r._hasKeys[t];r._props[t]=n,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,r)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=D(e);this.hasAttribute(e)?this[o]=P(n):this[o]=null,"value"===e&&null!==n&&v(this,U,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(A,E))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);u(this,l);var o=h(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return p(l,t),r(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});J||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Z(this);a.appendChild(i)}if(e)d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");z(t,e)}(this,s),function(){for(var e=void 0;e=K.pop();)delete e.isSameNode;K=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);u(this,i);var r=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return p(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=o(t.nodeName),t}return p(n,X),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),ee={},te=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return p(a,Q),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Q.uuidv4();if(e&&!ee[t]){var n=document.createElement("style"),o=document.createTextNode(e);ee[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var ne=".m-datepicker-body {\n  padding-top: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.m-datepicker-body__cell {\n  width: 35.28571px;\n  height: 35.28571px;\n  padding-left: 0;\n  padding-right: 0;\n  background-color: transparent;\n  border-radius: 100px;\n  cursor: pointer;\n  border: none; }\n\n.m-datepicker-body__cell:focus {\n  outline: none; }\n\n.m-datepicker-body__not-current-month {\n  color: #ccc; }\n\n.m-datepicker-body__current-month:hover {\n  -webkit-box-shadow: 0 0 0 3px #00008f inset;\n          box-shadow: 0 0 0 3px #00008f inset;\n  background-color: #fff;\n  color: #333; }\n\n.m-datepicker-body__current-month {\n  color: #333; }\n\n.m-datepicker-body__today {\n  background-color: #00008f;\n  color: #fff; }\n\n.m-datepicker-body__selected-day {\n  background-color: #fff;\n  -webkit-box-shadow: 0 0 0 3px #00008f inset;\n          box-shadow: 0 0 0 3px #00008f inset;\n  color: #333; }\n",oe=/\n[\s]+$/,re=/^\n[\s]+/,ie=/[\s]+$/,ae=/^[\s]+/,se=/[\n\s]+/g,le=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ce=["code","pre","textarea"],ue=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===le.indexOf(i)&&-1===ce.indexOf(i)?""===(o=u.nodeValue.replace(re,"").replace(ie,"").replace(oe,"").replace(se," "))?t.removeChild(u):u.nodeValue=o:-1===ce.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(re,r).replace(ae," ").replace(ie,"").replace(oe,"").replace(se," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===le.indexOf(i)&&-1===ce.indexOf(i)?""===(o=u.nodeValue.replace(re,"").replace(oe,"").replace(se," "))?t.removeChild(u):u.nodeValue=o:-1===ce.indexOf(i)&&(o=u.nodeValue.replace(ae," ").replace(re,"").replace(oe,"").replace(se," "),u.nodeValue=o));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}},de=function(e,t,n){var o,r;return(o=document.createElement("div")).setAttribute("class","m-datepicker-body js-datepicker-body"),ue(o,["\n    ",(r=n.datepickerBody.store,r?r.getCells():[]).map(function(e,t){var n;return(n=document.createElement("button")).setAttribute("data-index",""+String(t)),n.setAttribute("class",""+String(e.getClasses())),ue(n,[e.getText()]),n}),"\n  "]),o},pe=function(){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];u(this,o),this.text=e,this.index=t,this.isToday=n}return r(o,[{key:"getClasses",value:function(){return o.classes}},{key:"getIndex",value:function(){return this.index}},{key:"getText",value:function(){return this.text}},{key:"getIsToday",value:function(){return this.isToday}}]),o}();pe.classes="m-datepicker-body__cell js-datepicker__calender-body__cell";var he=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,pe),r(t,[{key:"getClasses",value:function(){return d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();he.classes="m-datepicker-body__not-current-month";var fe=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,pe),r(t,[{key:"getClasses",value:function(){return d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();fe.classes="m-datepicker-body__not-current-month";var ve=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,pe),r(t,[{key:"getClasses",value:function(){return d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();ve.classes="m-datepicker-body__current-month";var ye=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,ve),r(t,[{key:"getClasses",value:function(){return d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();ye.classes="m-datepicker-body__today";var _e=function(e){function t(){return u(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,ve),r(t,[{key:"getClasses",value:function(){return d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClasses",this).call(this)+" "+t.classes}}]),t}();_e.classes="m-datepicker-body__selected-day";var be,ge,me=function(){function o(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:(new Date).getFullYear(),n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:(new Date).getMonth();u(this,o),this.cells=[],this.today=new Date,this.init(e,t,n)}return r(o,[{key:"init",value:function(e,n,o){var t=new Date(n,o,1),r=new Date(n,o+1,0).getDate(),i=new Date(n,o,0),a=new Date(n,o+1,1),s=function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en-uk",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date,o=n.getDay(),r=n.getDate(),i=e.toLocaleString(t,{weekday:"long"}),a=null,s=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();1!==o;)r<s?r+=1:(r=1,n.setMonth(n.getMonth()+1)),n.setDate(r),o=n.getDay();return[].concat(C(Array(7).keys())).forEach(function(e){n.setDate(r+e),i===n.toLocaleString(t,{weekday:"long"})&&(a=e)}),a}(e,t),l=this.today.getFullYear(),c=this.today.getMonth(),u=this.today.getDate();this.cells=[].concat(C(Array(42).keys())).map(function(e){if(e<s){var t=i.getDate()-(s-1-e);return new fe(t,e)}return new Date(n,o,e+1-s).getTime()===new Date(l,c,u).getTime()&&e-s<u?new ye(e-s+1,e,!0):e-s<r?new ve(e-s+1,e):new he(a.getDate()+(e-r-s),e)})}},{key:"setCell",value:function(e,t){this.cells[e]=t}},{key:"getCell",value:function(e){return this.cells[e]}},{key:"getCells",value:function(){return this.cells}}]),o}(),Ce=function(){function t(e){var o=this;u(this,t),this.handleClick=function(e){e.preventDefault();var t=+e.target.dataset.index;if(t||0===t){var n=o._store.getCell(t);n instanceof he?(o.updateDate(o.date.getMonth()+1),o.cleanupValueIndex()):n instanceof fe?(o.updateDate(o.date.getMonth()-1),o.cleanupValueIndex()):(o.wcNode.setAttribute("value",n.getText()),o.wcNode.setAttribute("index",t))}},this.wcNode=e,this.selected=null,this.date=new Date}return r(t,[{key:"init",value:function(e,t,n,o,r){this._store=new me(t,n,o),this.selected=null,this.prepareCells(e),this.listenToCells(),this.index=e,this.allowedYears=r,this.locale=t,(o||0===o)&&this.date.setMonth(o),n&&this.date.setFullYear(n)}},{key:"prepareCells",value:function(e){if(e||0===e){var t=this._store.getCell(e);t instanceof ve&&this.handleCurrentMonth(e,t)}}},{key:"listenToCells",value:function(){this.offClicks(),this.unClickEnd=y(this.wcNode,I.CLICK,"js-datepicker-body",this.handleClick,{capture:!0,passive:!1})}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"cleanupValueIndex",value:function(){this.wcNode.removeAttribute("index"),this.wcNode.removeAttribute("value")}},{key:"handleCurrentMonth",value:function(e,t){if(null!==this.selected){var n=this.selected.getIndex(),o=this.selected.getIsToday(),r=this.selected.getText(),i=o?new ye(r,n,o):new ve(r,n,o);this._store.setCell(n,i)}var a=new _e(t.getText(),t.getIndex(),t.getIsToday());this._store.setCell(e,a),this.selected=a}},{key:"updateDate",value:function(e){var t=this.date.getMonth();this.date=new Date(this.date.getFullYear(),t),this.date.setMonth(e);var n=this.date.getFullYear();this.allowedYears&&!~this.allowedYears.indexOf(n)||(this.wcNode.setAttribute("year",n),this.wcNode.setAttribute("month",this.date.getMonth()))}},{key:"store",get:function(){return this._store}}]),t}(),ke=function(e){function o(){u(this,o);var e=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,{styles:ne,template:de}));return e.datepickerBody=new Ce(e),e}return p(o,te),r(o,null,[{key:"observedAttributes",get:function(){return["classes","locale","value","index","year","month","allowed-years"]}}]),r(o,[{key:"connectedCallback",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-datepicker-body"}},{key:"disconnectedCallback",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e=M(this,"month");e=e||0===e?e:void 0,this.datepickerBody.init(M(this,"index"),M(this,"locale"),M(this,"year")||void 0,e,M(this,"allowed-years"))}},{key:"attributeChangedCallback",value:function(e,t,n){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"attributeChangedCallback",this).call(this,e,t,n),"month"!==e&&"year"!==e||!this.shouldUpdateCallback(n,t)||null===n||null===t||v(this,U,null,{bubbles:!0,cancelable:!0,composed:!0})}}]),o}();return ke.tagName="axa-datepicker-body",be=ke.tagName,ge=ke,customElements.get(be)||customElements.define(be,ge),ke});
