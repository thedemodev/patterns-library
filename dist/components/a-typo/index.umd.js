!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=1,t=3,n=8;function i(i,r){var a=i.nodeType,l=i.nodeName;a===e&&function(e,t){for(var n=t.attributes,i=e.attributes,o=null,r=null,a=null,l=null,s=i.length-1;s>=0;--s)if(l=i[s],a=l.name,o=l.namespaceURI,r=l.value,o){var c=l.localName;t.getAttributeNS(o,c||a)!==r&&t.setAttributeNS(o,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var p=n.length-1;p>=0;--p)!1!==(l=n[p]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(i,r),a!==t&&a!==n||r.nodeValue===i.nodeValue||(r.nodeValue=i.nodeValue),"INPUT"===l?function(e,t){var n=e.value,i=t.value;o(e,t,"checked"),o(e,t,"disabled"),n!==i&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(i,r):"OPTION"===l?o(i,r,"selected"):"TEXTAREA"===l&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(i,r)}function o(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function e(t,n,i,o){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,i,o)}else if("value"in r&&r.writable)r.value=i;else{var l=r.set;void 0!==l&&l.call(o,i)}return i},f=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},m=3;function _(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(i(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,i=void 0,o=void 0,r=void 0,a=0,l=0;n=t.childNodes[l],i=e.childNodes[l-a],n||i;l++)if(i)if(n)if(g(i,n))(o=_(i,n))!==n&&(t.replaceChild(o,n),a++);else{r=null;for(var s=l;s<t.childNodes.length;s++)if(g(t.childNodes[s],i)){r=t.childNodes[s];break}r?((o=_(i,r))!==r&&a++,t.insertBefore(o,n)):i.id||n.id?(t.insertBefore(i,n),a++):(o=_(i,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(i),a++;else t.removeChild(n),l--}(e,t),t):null:e}function g(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===m&&e.nodeValue===t.nodeValue)}var y=[];var v=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function b(e,t){var n=e;if(e&&t!==e){if(v.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var x=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,r,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function w(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new x(t,s({},i,{detail:n}));return e.dispatchEvent(o)}var C=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function z(e){for(var t=e.className,n=!1,i=!0,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];var l=r.map(function(e){var o=(r=e,new RegExp("^"+r+"$|^"+r+"\\s|\\s"+r+"\\s|\\s"+r+"$",a)).test(t);var r,a;o?n=!0:i=!1;return{className:e,hasClass:o}});return!(!i&&!n)&&l}var E=/\s+/,A={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function O(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=o.capture,l=void 0!==a&&a,s=o.passive,c=void 0===s||s;if(A[t]&&(t=A[t]),!e||!t)return null;var p=void 0===n?"undefined":r(n),d=n&&"string"===p;if("function"===p){if(i){var u=i;l=u.capture,c=u.passive}i=n}for(var f=C?{capture:l,passive:c}:l,h=d?function(t){var o=t.target;for(;!z(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,m=t.split(E),_=m.length,g=0;g<_;++g)e.addEventListener(m[g],h,f);return function t(){for(var n=0;n<_;++n)e.removeEventListener(m[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,t)}}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,r=n.trailing,a=void 0===r||r,l=n.maxWait,s=void 0!==l&&l,c=void 0,p=void 0,d=void 0,u=void 0,f=!1,m=t!==s,_=!1!==s;function g(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return c=i,m&&(p&&clearTimeout(p),p=setTimeout(y,t)),_&&!d&&(d=setTimeout(v,s)),o&&!f&&(f=!0,u=e.apply(void 0,h(c))),u}return g.flush=function(){(p||d)&&(u=e.apply(void 0,h(c)));return x(),u},g.cancel=x,g;function y(){d&&clearTimeout(d),b()}function v(){p&&clearTimeout(p),b()}function b(){a&&(u=e.apply(void 0,h(c))),p=null,d=null,f=!1}function x(){p&&(clearTimeout(p),p=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var k={};function N(e,t){var n=O(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var i,o=k[e];return o.count++,o.onsubscribe||(o.onsubscribe=T((i=e,function(){w(document,"pubsub/onsubscribe",i),w(document,"pubsub/onsubscribe/"+i,i),k[i]&&delete k[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete k[e]}}O(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var n=k[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=f(e,3),n=t[0],i=t[1],o=t[2];w(o,n,i)}),delete n.queue)});var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,P=/[-_]+/g;function j(e){return e.replace(S,R)}function R(e,t){return 0==+e||P.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var L=/[A-Z]/g;function M(e,t,n){var i=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?i:"-"+i}var V=function(e,t){return e===t},D=function(e){function t(e,n){var i;a(this,t);for(var o="Property >>>"+e+"<<< exists at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e],r=arguments.length,l=Array(r>2?r-2:0),s=2;s<r;s++)l[s-2]=arguments[s];var c=d(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,o].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return p(t,e),t}(Error);function U(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(U.prototype,HTMLElement.prototype),Object.setPrototypeOf(U,HTMLElement);var H,F,I,G,W="throwed",q=["title","checked","disabled"],B={},$=function(e){return e in B||(B[e]=0),++B[e]},K=((H=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;return function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,i))?H.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];a(this,t);var i=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));i._reduceProps=function(e,n){var o=e.props,r=e.shouldUpdate,a=i._hasKeys[n];if(-1===q.indexOf(n)&&a)throw new D(n,i);var l="_"+n,s=o[n],c=i[l];return r||i.shouldUpdateCallback(s,c)?(i[l]=s,i._props[n]=s,a&&u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),n,s,i),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},i._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;i.contextNode&&(clearTimeout(i.timeoutId),i.timeoutId=setTimeout(function(){i.contextCallback(i.contextNode,e)},10)),i.unContextEnabled&&i.unContextEnabled(),i.unContextEnabled=N("context/enabled",i._makeContextReady)},i._initialise(e,n),i._id=$(i.nodeName),i._props={},i._hasKeys={},i.reRender=T(function(){return i.render()},50);var o=i.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var t,n=j(e),o=n in i;if(-1===q.indexOf(n)&&o)throw new D(n,i);i._hasKeys[n]=o,Object.defineProperty(i,n,t={get:function(){return this["_"+n]},set:function(e){var i="_"+n;this.shouldUpdateCallback(this[i],e)&&(this[i]=e,this._props[n]=e,o&&u(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),i}return p(t,U),l(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var n=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(n)&&n.forEach(function(n){var i=j(n);if(e.hasAttribute(n)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=b(n,t)}(e,n),r=e._hasKeys[i];e["_"+i]=o,e._props[i]=o,r&&u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),i,o,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[j(e)]=b(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(L,M))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var i=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var l=i(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){s.appendChild(e)});else if(l){if("string"==typeof l){var p=new Error(W);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+p.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),p}s.appendChild(l)}if(n)c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"appendChild",this).call(this,s);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(s),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");_(t,e)}(this,d),function(){for(var e=void 0;e=y.pop();)delete e.isSameNode;y=[]}(),this._isMorphing=!1}}catch(p){p.message!==W&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+p+"\n\nStack Trace: "+p.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var i=k[e].queue;Array.isArray(i)?i.push([e,t,n]):w(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createTextNode(e);this._lightDOMRefs=[n],this.render()}else u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var n=document.createElement("div");n.innerHTML=e,this._lightDOMRefs=Array.from(n.children),this.render()}else u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),Z={},J=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,K),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.uuidv4();if(e&&!Z[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Z[e]=!0}}}]),t}(),X='.a-typo {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .a-typo {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .a-typo {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .a-typo {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .a-typo {\n      max-width: 1140px; } }\n\n.a-typo__main-title--publico {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__main-title--publico {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title--publico {\n      font-size: 78px; } }\n  .a-typo__main-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title--publico {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__page-title--publico {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title--publico {\n      font-size: 62px; } }\n  .a-typo__page-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title--publico {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title--publico {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title--publico {\n      font-size: 48px; } }\n  .a-typo__slice-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title--publico {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title--publico {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title--publico {\n      font-size: 36px; } }\n  .a-typo__small-module-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__main-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title {\n      font-size: 78px; } }\n  .a-typo__main-title::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title {\n      font-size: 62px; } }\n  .a-typo__page-title::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title {\n      font-size: 48px; } }\n  .a-typo__slice-title::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title {\n      font-size: 36px; } }\n  .a-typo__small-module-title::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--semibold {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--regular {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--regular {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--regular::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text {\n      font-size: 20px; } }\n  .a-typo__text::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--semibold {\n      font-size: 20px; } }\n  .a-typo__text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--bold {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--bold {\n      font-size: 20px; } }\n  .a-typo__text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer {\n      font-size: 18px; } }\n  .a-typo__text-longer::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer--bold {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px; } }\n  .a-typo__text-longer--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text {\n      font-size: 16px; } }\n  .a-typo__secondary-text::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--semibold {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--bold {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n',Q=/\n[\s]+$/,Y=/^\n[\s]+/,ee=/[\s]+$/,te=/^[\s]+/,ne=/[\n\s]+/g,ie=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],re=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var p=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,p&&"#text"===p.nodeName?p.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),p=c),l===s-1&&(a=!1,-1===ie.indexOf(r)&&-1===oe.indexOf(r)?""===(i=p.nodeValue.replace(Y,"").replace(ee,"").replace(Q,"").replace(ne," "))?t.removeChild(p):p.nodeValue=i:-1===oe.indexOf(r)&&(o=0===l?"":" ",i=p.nodeValue.replace(Y,o).replace(te," ").replace(ee,"").replace(Q,"").replace(ne," "),p.nodeValue=i));else if(c&&c.nodeType){a&&(a=!1,-1===ie.indexOf(r)&&-1===oe.indexOf(r)?""===(i=p.nodeValue.replace(Y,"").replace(Q,"").replace(ne," "))?t.removeChild(p):p.nodeValue=i:-1===oe.indexOf(r)&&(i=p.nodeValue.replace(te," ").replace(Y,"").replace(Q,"").replace(ne," "),p.nodeValue=i));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}},ae=function(){var e,t,n,i,o,r,a,l,s,c,p,d,u,f,h,m,_,g,y,v,b,x,w,C,z,E,A,O,T,k,N,S,P,j,R;return R=document.createElement("article"),re(R,["\n    ",(e=document.createElement("h1"),e.setAttribute("class","a-typo__main-title--publico"),re(e,["Main Title"]),e),"\n    ",(t=document.createElement("h2"),t.setAttribute("class","a-typo__page-title--publico"),re(t,["Page Title"]),t),"\n    ",(n=document.createElement("h3"),n.setAttribute("class","a-typo__slice-title--publico"),re(n,["Slice Title"]),n),"\n    ",(i=document.createElement("h4"),i.setAttribute("class","a-typo__small-module-title--publico"),re(i,["Small Module Title"]),i),"\n\n    ",(o=document.createElement("h1"),o.setAttribute("class","a-typo__main-title"),re(o,["Main Title"]),o),"\n    ",(r=document.createElement("h2"),r.setAttribute("class","a-typo__page-title"),re(r,["Page Title"]),r),"\n    ",(a=document.createElement("h3"),a.setAttribute("class","a-typo__slice-title"),re(a,["Slice Title"]),a),"\n    ",(l=document.createElement("h4"),l.setAttribute("class","a-typo__small-module-title"),re(l,["Small Module Title"]),l),"\n    ",(s=document.createElement("h5"),s.setAttribute("class","a-typo__title"),re(s,["Title"]),s),"\n    ",(c=document.createElement("h5"),c.setAttribute("class","a-typo__title--semibold"),re(c,["Title (Semibold)"]),c),"\n\n    ",(m=document.createElement("p"),re(m,["\n      ",(p=document.createElement("span"),p.setAttribute("class","a-typo__item-highlight"),re(p,["Item Highlight"]),p),"\n      ",(d=document.createElement("br"),d),"\n      ",(u=document.createElement("span"),u.setAttribute("class","a-typo__item-highlight--semibold"),re(u,["Item Highlight (Semibold)"]),u),"\n      ",(f=document.createElement("br"),f),"\n      ",(h=document.createElement("span"),h.setAttribute("class","a-typo__item-highlight--regular"),re(h,["Item Highlight (Regular)"]),h),"\n    "]),m),"\n\n    ",(_=document.createElement("p"),_.setAttribute("class","a-typo__text"),re(_,["Text"]),_),"\n    ",(g=document.createElement("p"),g.setAttribute("class","a-typo__text--semibold"),re(g,["Text (Semibold)"]),g),"\n    ",(y=document.createElement("p"),y.setAttribute("class","a-typo__text--bold"),re(y,["Text (Bold)"]),y),"\n    ",(v=document.createElement("p"),v.setAttribute("class","a-typo__text-longer"),re(v,["Text Longer"]),v),"\n    ",(b=document.createElement("p"),b.setAttribute("class","a-typo__text-longer--bold"),re(b,["Text Longer (Bold)"]),b),"\n    ",(x=document.createElement("p"),x.setAttribute("class","a-typo__secondary-text"),re(x,["Secondary Text"]),x),"\n    ",(w=document.createElement("p"),w.setAttribute("class","a-typo__secondary-text--semibold"),re(w,["Secondary Text (Semibold)"]),w),"\n    ",(C=document.createElement("p"),C.setAttribute("class","a-typo__secondary-text--bold"),re(C,["Secondary Text (Bold)"]),C),"\n\n    ",(k=document.createElement("p"),re(k,["\n      ",(z=document.createElement("span"),z.setAttribute("class","a-typo__tag"),re(z,["Tag"]),z),"\n      ",(E=document.createElement("br"),E),"\n      ",(A=document.createElement("span"),A.setAttribute("class","a-typo__tag--semibold"),re(A,["Tag (Semibold)"]),A),"\n      ",(O=document.createElement("br"),O),"\n      ",(T=document.createElement("span"),T.setAttribute("class","a-typo__tag--bold"),re(T,["Tag (Bold)"]),T),"\n    "]),k),"\n\n    ",(j=document.createElement("p"),re(j,["\n      ",(N=document.createElement("span"),N.setAttribute("class","a-typo__legals"),re(N,["Legals"]),N),"\n      ",(S=document.createElement("br"),S),"\n      ",(P=document.createElement("span"),P.setAttribute("class","a-typo__legals--semibold"),re(P,["Legals (Semibold)"]),P),"\n    "]),j),"\n  "]),R},le=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,X,ae))}return p(t,J),l(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-typo"}}]),t}();return F=function(){window.customElements.define("axa-typo",le)},I=0,G=function(){if(0===I)try{F.apply(void 0,arguments),I+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",G,!1),document.addEventListener("WebComponentsReady",G,!1),le});
