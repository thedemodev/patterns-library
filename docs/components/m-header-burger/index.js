var StyleGuideWebComponent=function(){"use strict";function e(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new c(t,p({},r,{detail:n}));e.dispatchEvent(o)}function t(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function n(e,n){return t(n).test(e.className)}function r(e,t,r,o){function i(){for(var t=0;t<c;++t)e.removeEventListener(l[t],u,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,i)}var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(w[t]&&(t=w[t]),!e||!t)return null;var s=void 0===r?"undefined":f(r);"function"===s&&(a=!!o,o=r);for(var u=r&&"string"===s?function(t){for(var i=t.target;!n(i,r)&&i!==e;)i=i.parentNode;if(i!==e)return o(t,i)}:o,l=t.split(_),c=l.length,h=0;h<c;++h)e.addEventListener(l[h],u,a);return i}function o(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[t]||(C[t]={count:0,queue:[]});var o=C[t].queue;Array.isArray(o)?o.push([t,n,r]):e(r,t,n)}function i(t,n){var o=r(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,n);C[t]||(C[t]={count:0});var i=C[t];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){function t(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return h=r,v&&(d&&clearTimeout(d),d=setTimeout(function(){p&&clearTimeout(p),n()},o)),y&&!p&&(p=setTimeout(function(){d&&clearTimeout(d),n()},f)),s&&!b&&(b=!0,m=e.apply(void 0,g(h))),m}function n(){l&&(m=e.apply(void 0,g(h))),d=null,p=null,b=!1}function r(){d&&(clearTimeout(d),d=null),p&&(clearTimeout(p),p=null),h=void 0,b=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.leading,s=void 0!==a&&a,u=i.trailing,l=void 0===u||u,c=i.maxWait,f=void 0!==c&&c,h=void 0,d=void 0,p=void 0,m=void 0,b=!1,v=o!==f,y=!1!==f;return t.flush=function(){return(d||p)&&(m=e.apply(void 0,g(h))),r(),m},t.cancel=r,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),C[t]&&delete C[t].unsubscribe}}(t),100)),i.onsubscribe(),function(){i.count--,o.call(this),i.count<=0&&delete C[t]}}function a(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function s(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function u(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var l=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,c=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var s={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=s:(o=i=s,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},b=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},v=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},y=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},x=/^\s+|\s{2,}|\s+$/g,_=/\s+/,w={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(o=n[i],void 0!==e[o])return t[o];return null}()},C={};r(document,"pubsub/onsubscribe",function(t){var n=t.detail;C[n]||(C[n]={count:0});var r=C[n],o=r.queue;Array.isArray(o)&&(o.forEach(function(t){var n=y(t,3),r=n[0],o=n[1];e(n[2],r,o)}),delete r.queue)}),Object.setPrototypeOf(a.prototype,HTMLElement.prototype),Object.setPrototypeOf(a,HTMLElement);var k={},O=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];h(this,t);var r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,n),r}return b(t,a),d(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(l.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){"throwed"!==o.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,o("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=i("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),E=(function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}b(t,O),d(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return h(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return b(t,O),d(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.uuidv4();if(e&&!k[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),k[e]=!0}}}]),t}()),N=".m-header-burger {\n  display: block; }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  display: block;\n  width: 25px;\n  height: 25px;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  display: none;\n  width: 25px;\n  height: 25px;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n",S=function(e){return function(t,n,r){for(var o in n)o in A&&(n[A[o]]=n[o],delete n[o]);return e(t,n,r)}},A={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},T=1,j=2,L=3,P=4,R=5,F=6,M=7,D=8,z=9,q=10,B=11,G=12,$=13,I=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),V=/\n[\s]+$/,U=/^\n[\s]+/,W=/[\s]+$/,K=/^[\s]+/,H=/[\n\s]+/g,Y=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Z=["code","pre"],J=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===Y.indexOf(i)&&-1===Z.indexOf(i)?""===(r=c.nodeValue.replace(U,"").replace(W,"").replace(V,"").replace(H," "))?t.removeChild(c):c.nodeValue=r:-1===Z.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(U,o).replace(K," ").replace(W,"").replace(V,"").replace(H," "),c.nodeValue=r));else if(l&&l.nodeType){a&&(a=!1,-1===Y.indexOf(i)&&-1===Z.indexOf(i)?""===(r=c.nodeValue.replace(U,"").replace(V,"").replace(H," "))?t.removeChild(c):c.nodeValue=r:-1===Z.indexOf(i)&&(r=c.nodeValue.replace(K," ").replace(U,"").replace(V,"").replace(H," "),c.nodeValue=r));var f=l.nodeName;f&&(i=f.toLowerCase()),t.appendChild(l)}}}},Q=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,s){var u;-1!==a.indexOf(e)&&(t.namespace=n);var l=!1;if(t.namespace&&(l=t.namespace,delete t.namespace),l)u=document.createElementNS(l,e);else{if(e===i)return document.createComment(t.comment);u=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),h=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==o.indexOf(f))if("true"===h)h=f;else if("false"===h)continue;"on"===f.slice(0,2)?u[c]=h:l?"xlink:href"===c?u.setAttributeNS(r,c,h):/^xmlns($|:)/i.test(c)||u.setAttributeNS(null,c,h):u.setAttribute(c,h)}return J(u,s),u}var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":f(e))?e:r("",e)}t||(t={});var r=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=S(e)),function(o){function i(e){var n=[];a===M&&(a=P);for(var r=0;r<e.length;r++){var o=e.charAt(r);a===T&&"<"===o?(s.length&&n.push([T,s]),s="",a=j):">"!==o||function(e){return e===z||e===q}(a)||a===$?a===$&&/-$/.test(s)&&"-"===o?(t.comments&&n.push([D,s.substr(0,s.length-1)],[L]),s="",a=T):a===j&&/^!--$/.test(s)?(t.comments&&n.push([j,s],[R,"comment"],[B]),s=o,a=$):a===T||a===$?s+=o:a===j&&/\s/.test(o)?(n.push([j,s]),s="",a=P):a===j?s+=o:a===P&&/[^\s"'=/]/.test(o)?(a=R,s=o):a===P&&/\s/.test(o)?(s.length&&n.push([R,s]),n.push([G])):a===R&&/\s/.test(o)?(n.push([R,s]),s="",a=F):a===R&&"="===o?(n.push([R,s],[B]),s="",a=M):a===R?s+=o:a!==F&&a!==P||"="!==o?a!==F&&a!==P||/\s/.test(o)?a===M&&'"'===o?a=q:a===M&&"'"===o?a=z:a===q&&'"'===o?(n.push([D,s],[G]),s="",a=P):a===z&&"'"===o?(n.push([D,s],[G]),s="",a=P):a!==M||/\s/.test(o)?a===D&&/\s/.test(o)?(n.push([D,s],[G]),s="",a=P):a!==D&&a!==z&&a!==q||(s+=o):(a=D,r--):(n.push([G]),/[\w-]/.test(o)?(s+=o,a=R):a=P):(n.push([B]),a=M):(a===j?n.push([j,s]):a===R?n.push([R,s]):a===D&&s.length&&n.push([D,s]),n.push([L]),s="",a=T)}return a===T&&s.length?(n.push([T,s]),s=""):a===D&&s.length?(n.push([D,s]),s=""):a===q&&s.length?(n.push([D,s]),s=""):a===z&&s.length?(n.push([D,s]),s=""):a===R&&(n.push([R,s]),s=""),n}for(var a=T,s="",u=arguments.length,l=[],c=0;c<o.length;c++)if(c<u-1){var h=arguments[c+1],d=i(o[c]),p=a;p===q&&(p=D),p===z&&(p=D),p===M&&(p=D),p===P&&(p=R),d.push([0,p,h]),l.push.apply(l,d)}else l.push.apply(l,i(o[c]));for(var m=[null,{},[]],b=[[m,-1]],c=0;c<l.length;c++){var v=b[b.length-1][0],y=(d=l[c])[0];if(y===j&&/^\//.test(d[1]))C=b[b.length-1][1],b.length>1&&(b.pop(),b[b.length-1][0][2][C]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(y===j){var g=[d[1],{},[]];v[2].push(g),b.push([g,v[2].length-1])}else if(y===R||0===y&&d[1]===R){for(var x,_="";c<l.length;c++)if(l[c][0]===R)_=r(_,l[c][1]);else{if(0!==l[c][0]||l[c][1]!==R)break;if("object"!==f(l[c][2])||_)_=r(_,l[c][2]);else for(x in l[c][2])l[c][2].hasOwnProperty(x)&&!v[1][x]&&(v[1][x]=l[c][2][x])}l[c][0]===B&&c++;for(var w=c;c<l.length;c++)if(l[c][0]===D||l[c][0]===R)v[1][_]?""===l[c][1]||(v[1][_]=r(v[1][_],l[c][1])):v[1][_]=n(l[c][1]);else{if(0!==l[c][0]||l[c][1]!==D&&l[c][1]!==R){!_.length||v[1][_]||c!==w||l[c][0]!==L&&l[c][0]!==G||(v[1][_]=_.toLowerCase()),l[c][0]===L&&c--;break}v[1][_]?""===l[c][2]||(v[1][_]=r(v[1][_],l[c][2])):v[1][_]=n(l[c][2])}}else if(y===R)v[1][d[1]]=!0;else if(0===y&&d[1]===R)v[1][d[2]]=!0;else if(y===L){if(function(e){return I.test(e)}(v[0])&&b.length){var C=b[b.length-1][1];b.pop(),b[b.length-1][0][2][C]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===y&&d[1]===T)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?v[2].push.apply(v[2],d[2]):v[2].push(d[2]);else if(y===T)v[2].push(d[1]);else if(y!==B&&y!==G)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),X=function(e){return"undefined"!=typeof window?function(){var t=document.createElement("div");return t.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(t.childNodes)}():function(){var t=new String(e);return t.__encoded=!0,t}()},ee=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n  <button type="button" class="m-header-burger__button js-header-burger__button">\n    ',"\n\n    ","\n  </button>\n"],['\n  <button type="button" class="m-header-burger__button js-header-burger__button">\n    ',"\n\n    ","\n  </button>\n"]),te=function(){return Q(ee,X('<axa-icon id="menu" classes="m-header-burger__icon"></axa-icon>'),X('<axa-icon id="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'))},ne="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0},re=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,oe=function(){var e=window.requestAnimationFrame||window[re+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),r=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+r)},r);return t=n+r,o}}return e}(),ie=(function(){var e=window.cancelAnimationFrame||window[re+"CancelAnimationFrame"]||window[re+"CancelRequestAnimationFrame"];e=e?e.bind(window):function(e){clearTimeout(e)}}(),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","resize","keyup")),ae=function(){function e(t,n){h(this,e),this.rootNode=t,this.options=p({},e.DEFAULTS,n),this.isOpen=!1,this._handleBurgerClick=this._handleBurgerClick.bind(this),this._handleResize=this._handleResize.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.init()}return d(e,[{key:"init",value:function(){this.burger=this.rootNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=i("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=i("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=r(this.burger,ie.CLICK,this._handleBurgerClick),this._unResize=r(s(this.rootNode),ie.RESIZE,this._handleResize),this._unCloseEscape=r(this.rootNode.ownerDocument,ie.KEYUP,this._handleKeyUp)}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"_handleBurgerClick",value:function(e){e.preventDefault(),this.isOpen?this.close():this.open()}},{key:"_handleResize",value:function(){this.close()}},{key:"_handleKeyUp",value:function(e){var t=e.key,n=e.keyCode;(t===ie.ESCAPE||t===ie.ESC||27===n)&&(e.preventDefault(),this.close())}},{key:"open",value:function(e){if(!this.isOpen){this.isOpen=!0;var t=u(this.rootNode);0!==t&&t!==ne()&&(o("sticky-container/freeze-direction"),function(e){var t=s(e),n=u(e);t.scrollTo(0,n)}(this.rootNode.parentNode.parentNode.parentNode.parentNode),oe(function(){setTimeout(function(){o("sticky-container/thaw-direction")},50)})),function(e,t){n(e,t)||(e.className+=" "+t)}(this.burger,this.options.burgerState),!e&&this._contextNode&&o("header-mobile/open",null,this._contextNode)}}},{key:"close",value:function(e){this.isOpen&&(this.isOpen=!1,function(e,r){if(n(e,r)){var o=t(r,"g");e.className=e.className.replace(o," ").replace(x," ")}}(this.burger,this.options.burgerState),!e&&this._contextNode&&o("header-mobile/close",null,this._contextNode))}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();ae.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var se=function(e){function t(){h(this,t);var e=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,N,te));return e.selectContext("axa-header"),e}return b(t,E),d(t,[{key:"connectedCallback",value:function(){m(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new ae(this)}},{key:"disconnectedCallback",value:function(){m(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-burger",se)}),se}();
