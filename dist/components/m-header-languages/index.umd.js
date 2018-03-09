!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var o=t.value;if(n?o=t.getAttribute(n):n=t.name,o&&n!==o){if(e.test(o))try{o=JSON.parse(o)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",o)}}else o=!0;return o}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,o=/[-_]+/g;function i(e,t){return 0==+e||o.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var r=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},g=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function v(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new r(t,u({},o,{detail:n}));e.dispatchEvent(i)}var m=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),y=/^\s+|\s{2,}|\s+$/g;function _(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function b(e,t){return _(t).test(e.className)}function w(e,t){if(b(e,t)){var n=_(t,"g");e.className=e.className.replace(n," ").replace(y," ")}}var x=/\s+/,C={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function k(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=i.capture,s=void 0!==r&&r,l=i.passive,u=void 0===l||l;if(C[t]&&(t=C[t]),!e||!t)return null;var c=void 0===n?"undefined":a(n),d=n&&"string"===c;if("function"===c){if(o){var f=o;s=f.capture,u=f.passive}o=n}for(var h=m?{capture:s,passive:u}:s,p=d?function(t){var i=t.target;for(;!b(i,n)&&i!==e;)i=i.parentNode;if(i!==e)return o(t,i)}:o,g=t.split(x),v=g.length,y=0;y<v;++y)e.addEventListener(g[y],p,h);return function t(){for(var n=0;n<v;++n)e.removeEventListener(g[n],p,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}var E={};function O(e,t){var n=k(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);E[e]||(E[e]={count:0});var o,i=E[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,d=void 0,f=void 0,h=!1,p=t!==l,v=!1!==l;function m(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return u=o,p&&(c&&clearTimeout(c),c=setTimeout(y,t)),v&&!d&&(d=setTimeout(_,l)),i&&!h&&(h=!0,f=e.apply(void 0,g(u))),f}return m.flush=function(){return(c||d)&&(f=e.apply(void 0,g(u))),w(),f},m.cancel=w,m;function y(){d&&clearTimeout(d),b()}function _(){c&&clearTimeout(c),b()}function b(){a&&(f=e.apply(void 0,g(u))),c=null,d=null,h=!1}function w(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,h=!1}}((o=e,function(){v(document,"pubsub/onsubscribe",o),v(document,"pubsub/onsubscribe/"+o,o),E[o]&&delete E[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete E[e]}}function T(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}k(document,"pubsub/onsubscribe",function(e){var t=e.detail;E[t]||(E[t]={count:0});var n=E[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],i=t[2];v(i,n,o)}),delete n.queue)}),Object.setPrototypeOf(T.prototype,HTMLElement.prototype),Object.setPrototypeOf(T,HTMLElement);var A={},N="throwed",S=function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];s(this,o);var n=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return d(o,T),l(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var o=this._template;if(o)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var a=o(function(e){if(!e.hasAttributes)return null;for(var o,r={},a=e.attributes,s=a.length,l=0;l<s;++l){var u=a[l],c=u.name;r[(o=c,o.replace(n,i))]=t(u)}return r}(this),r);if(Array.isArray(a))a.forEach(function(t){e.appendChild(t)});else if(a){if("string"==typeof a){var s=new Error(N);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}this.appendChild(a)}this._hasRendered=!0}catch(s){s.message!==N&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;E[e]||(E[e]={count:0,queue:[]});var o=E[e].queue;Array.isArray(o)?o.push([e,t,n]):v(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=O("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}(),j=(function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,S),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,S),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S.uuidv4();if(e&&!A[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),A[e]=!0}}}]),t}()),L=".m-header-languages {\n  position: relative;\n  display: block; }\n\n.m-header-languages__drop-down-toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    cursor: pointer; }\n\n.m-header-languages__drop-down-icon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -8px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-header-languages__drop-down-icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-header-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1070;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  background: #fafafa;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-dropdown-open > .m-header-languages__list {\n    height: auto; }\n\n.m-header-languages__list-item {\n  display: block;\n  border-width: 0 1px;\n  border-color: #e5e5e5;\n  border-style: solid; }\n  .m-header-languages__list-item:first-child {\n    border-top-width: 1px; }\n  .m-header-languages__list-item:last-child {\n    border-bottom-color: #ccc;\n    border-bottom-width: 2px; }\n\n.m-header-languages__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__list-link.is-header-languages-active, .m-header-languages__list-link:hover, .m-header-languages__list-link:active, .m-header-languages__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n";var P=function(e){return function(t,n,o){for(var i in n)i in D&&(n[D[i]]=n[i],delete n[i]);return e(t,n,o)}},D={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var F=1,M=2,R=3,I=4,z=5,q=6,U=7,G=8,V=9,$=10,K=11,W=12,B=13;var H=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var Z,J=/\n[\s]+$/,Y=/^\n[\s]+/,Q=/[\s]+$/,X=/^[\s]+/,ee=/[\n\s]+/g,te=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ne=["code","pre"],oe=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===te.indexOf(r)&&-1===ne.indexOf(r)?""===(o=c.nodeValue.replace(Y,"").replace(Q,"").replace(J,"").replace(ee," "))?t.removeChild(c):c.nodeValue=o:-1===ne.indexOf(r)&&(i=0===s?"":" ",o=c.nodeValue.replace(Y,i).replace(X," ").replace(Q,"").replace(J,"").replace(ee," "),c.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===te.indexOf(r)&&-1===ne.indexOf(r)?""===(o=c.nodeValue.replace(Y,"").replace(J,"").replace(ee," "))?t.removeChild(c):c.nodeValue=o:-1===ne.indexOf(r)&&(o=c.nodeValue.replace(X," ").replace(Y,"").replace(J,"").replace(ee," "),c.nodeValue=o));var d=u.nodeName;d&&(r=d.toLowerCase()),t.appendChild(u)}}}},ie=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,a,s){var l;-1!==r.indexOf(e)&&(a.namespace=t);var u=!1;if(a.namespace&&(u=a.namespace,delete a.namespace),u)l=document.createElementNS(u,e);else{if(e===i)return document.createComment(a.comment);l=document.createElement(e)}for(var c in a)if(a.hasOwnProperty(c)){var d=c.toLowerCase(),f=a[c];if("classname"===d&&(d="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(d))if("true"===f)f=d;else if("false"===f)continue;"on"===d.slice(0,2)?l[c]=f:u?"xlink:href"===c?l.setAttributeNS(n,c,f):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,f):l.setAttribute(c,f)}return oe(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=P(e)),function(i){for(var r=F,s="",l=arguments.length,u=[],c=0;c<i.length;c++)if(c<l-1){var d=arguments[c+1],f=k(i[c]),h=r;h===$&&(h=G),h===V&&(h=G),h===U&&(h=G),h===I&&(h=z),f.push([0,h,d]),u.push.apply(u,f)}else u.push.apply(u,k(i[c]));var p,g=[null,{},[]],v=[[g,-1]];for(c=0;c<u.length;c++){var m=v[v.length-1][0],y=(f=u[c])[0];if(y===M&&/^\//.test(f[1])){var _=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][_]=e(m[0],m[1],m[2].length?m[2]:void 0))}else if(y===M){var b=[f[1],{},[]];m[2].push(b),v.push([b,m[2].length-1])}else if(y===z||0===y&&f[1]===z){for(var w,x="";c<u.length;c++)if(u[c][0]===z)x=n(x,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==z)break;if("object"!==a(u[c][2])||x)x=n(x,u[c][2]);else for(w in u[c][2])u[c][2].hasOwnProperty(w)&&!m[1][w]&&(m[1][w]=u[c][2][w])}u[c][0]===K&&c++;for(var C=c;c<u.length;c++)if(u[c][0]===G||u[c][0]===z)m[1][x]?""===u[c][1]||(m[1][x]=n(m[1][x],u[c][1])):m[1][x]=o(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==G&&u[c][1]!==z){!x.length||m[1][x]||c!==C||u[c][0]!==R&&u[c][0]!==W||(m[1][x]=x.toLowerCase()),u[c][0]===R&&c--;break}m[1][x]?""===u[c][2]||(m[1][x]=n(m[1][x],u[c][2])):m[1][x]=o(u[c][2])}}else if(y===z)m[1][f[1]]=!0;else if(0===y&&f[1]===z)m[1][f[2]]=!0;else if(y===R)p=m[0],H.test(p)&&v.length&&(_=v[v.length-1][1],v.pop(),v[v.length-1][0][2][_]=e(m[0],m[1],m[2].length?m[2]:void 0));else if(0===y&&f[1]===F)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=n("",f[2])),Array.isArray(f[2][0])?m[2].push.apply(m[2],f[2]):m[2].push(f[2]);else if(y===F)m[2].push(f[1]);else if(y!==K&&y!==W)throw new Error("unhandled: "+y)}if(g[2].length>1&&/^\s*$/.test(g[2][0])&&g[2].shift(),g[2].length>2||2===g[2].length&&/\S/.test(g[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(g[2][0])&&"string"==typeof g[2][0][0]&&Array.isArray(g[2][0][2])&&(g[2][0]=e(g[2][0][0],g[2][0][1],g[2][0][2])),g[2][0];function k(e){var n,o=[];r===U&&(r=I);for(var i=0;i<e.length;i++){var a=e.charAt(i);r===F&&"<"===a?(s.length&&o.push([F,s]),s="",r=M):">"===a&&(n=r)!==V&&n!==$&&r!==B?(r===M?o.push([M,s]):r===z?o.push([z,s]):r===G&&s.length&&o.push([G,s]),o.push([R]),s="",r=F):r===B&&/-$/.test(s)&&"-"===a?(t.comments&&o.push([G,s.substr(0,s.length-1)],[R]),s="",r=F):r===M&&/^!--$/.test(s)?(t.comments&&o.push([M,s],[z,"comment"],[K]),s=a,r=B):r===F||r===B?s+=a:r===M&&"/"===a&&s.length||(r===M&&/\s/.test(a)?(o.push([M,s]),s="",r=I):r===M?s+=a:r===I&&/[^\s"'=/]/.test(a)?(r=z,s=a):r===I&&/\s/.test(a)?(s.length&&o.push([z,s]),o.push([W])):r===z&&/\s/.test(a)?(o.push([z,s]),s="",r=q):r===z&&"="===a?(o.push([z,s],[K]),s="",r=U):r===z?s+=a:r!==q&&r!==I||"="!==a?r!==q&&r!==I||/\s/.test(a)?r===U&&'"'===a?r=$:r===U&&"'"===a?r=V:r===$&&'"'===a?(o.push([G,s],[W]),s="",r=I):r===V&&"'"===a?(o.push([G,s],[W]),s="",r=I):r!==U||/\s/.test(a)?r===G&&/\s/.test(a)?(o.push([G,s],[W]),s="",r=I):r!==G&&r!==V&&r!==$||(s+=a):(r=G,i--):(o.push([W]),/[\w-]/.test(a)?(s+=a,r=z):r=I):(o.push([K]),r=U))}return r===F&&s.length?(o.push([F,s]),s=""):r===G&&s.length?(o.push([G,s]),s=""):r===$&&s.length?(o.push([G,s]),s=""):r===V&&s.length?(o.push([G,s]),s=""):r===z&&(o.push([z,s]),s=""),o}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(Z={exports:{}},Z.exports),Z.exports);ie.createElement;var re=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,o=n.childNodes,Array.isArray(o)?o:[].slice.call(o)):((t=new String(e)).__encoded=!0,t);var t,n,o},ae=p(['\n  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">\n    ','\n    <axa-icon id="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>\n  </button>\n'],['\n  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">\n    ','\n    <axa-icon id="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>\n  </button>\n']),se=p(['\n  <ul class="m-header-languages__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-languages__list">\n    ',"\n  </ul>\n"]),le=p(['\n      <li class="m-header-languages__list-item">\n        <a class="m-header-languages__list-link','" href="','">\n          ',"\n        </a>\n      </li>\n    "],['\n      <li class="m-header-languages__list-item">\n        <a class="m-header-languages__list-link','" href="','">\n          ',"\n        </a>\n      </li>\n    "]),ue=function(e){var t=e.items;return[ie(ae,t[0].name),ie(se,t&&t.map(function(e,t){var n=e.url,o=e.name;return ie(le,0===t?" is-header-languages-active":"",n,re(o))}))]};var ce=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function de(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,r=void 0===i||i,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,u=k(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:r,passive:s});return ce&&(l.style.cursor="pointer"),u}var fe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),he="data-prevent-default",pe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this._wcNode=t,this._options=u({},e.DEFAULTS,n),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return l(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._wcNode.querySelector(e):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=k(this._container,fe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=k(this._container,fe.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=de(this._container,fe.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=k(this._container.ownerDocument,fe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(he)?t(e,he):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this.shouldPreventDefault(t)&&e.preventDefault();var n=!this._lastToggleNode,o=t!==this._lastToggleNode,i=!n&&!o;n?(this._notify(fe.ENTER,t),this._onInteractive()):o&&this._notify(fe.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,i&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e,t){this.shouldPreventDefault(t)&&e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===fe.ESCAPE||e.key===fe.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(fe.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();pe.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ge,ve=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,me=function(){var e=window.requestAnimationFrame||window[ve+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),ye=(ge=(ge=window.cancelAnimationFrame||window[ve+"CancelAnimationFrame"]||window[ve+"CancelRequestAnimationFrame"])?ge.bind(window):function(e){clearTimeout(e)},function(e){function t(e,n){s(this,t),n=u({},t.DEFAULTS,n);var o=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.options=n,o.wcNode=e,o.handleTransitionEnd=o.handleTransitionEnd.bind(o),o}return d(t,pe),l(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=k(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;n.style.overflow="scroll";var o,i,r=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=r+"px",o=t,i=this.options.isOpenClass,b(o,i)||(o.className+=" "+i)}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.offInteractive(),me(function(){o.style.height=i+"px",me(function(){w(n,t.options.isOpenClass),o.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",w(e,this.options.isOpenClass))}},{key:"destroy",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());ye.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var _e,be,we,xe=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,L,ue))}return d(t,j),l(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-languages js-dropdown",this.dropDown=new ye(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.dropDown.destroy(),delete this.dropDown}}]),t}();return _e=function(){window.customElements.define("axa-header-languages",xe)},be=0,we=function(){if(0===be)try{_e.apply(void 0,arguments),be+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",we,!1),document.addEventListener("WebComponentsReady",we,!1),xe});
