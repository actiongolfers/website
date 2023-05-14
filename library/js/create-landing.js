/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(45);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(46);

	var _handlebarsCompilerCompiler = __webpack_require__(51);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(52);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(49);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(44);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;
	  hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(37);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(38);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(44);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(30);

	var _logger = __webpack_require__(32);

	var _logger2 = _interopRequireDefault(_logger);

	var _internalProtoAccess = __webpack_require__(33);

	var VERSION = '4.7.7';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 8;
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var LAST_COMPATIBLE_COMPILER_REVISION = 7;

	exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0 <4.3.0',
	  8: '>= 4.3.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  },
	  /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */
	  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
	    _internalProtoAccess.resetLoggedProperties();
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;
	var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      endLineNumber = undefined,
	      column = undefined,
	      endColumn = undefined;

	  if (loc) {
	    line = loc.start.line;
	    endLineNumber = loc.end.line;
	    column = loc.start.column;
	    endColumn = loc.end.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;
	      this.endLineNumber = endLineNumber;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	        Object.defineProperty(this, 'endColumn', {
	          value: endColumn,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	        this.endColumn = endColumn;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	exports.moveHelperToHooks = moveHelperToHooks;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(25);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(26);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(27);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(28);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(29);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

	function moveHelperToHooks(instance, helperName, keepHelper) {
	  if (instance.helpers[helperName]) {
	    instance.hooks[helperName] = instance.helpers[helperName];
	    if (!keepHelper) {
	      delete instance.helpers[helperName];
	    }
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else if (global.Symbol && context[global.Symbol.iterator]) {
	        var newContext = [];
	        var iterator = context[global.Symbol.iterator]();
	        for (var it = iterator.next(); !it.done; it = iterator.next()) {
	          newContext.push(it.value);
	        }
	        context = newContext;
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        (function () {
	          var priorKey = undefined;

	          _Object$keys(context).forEach(function (key) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          });
	          if (priorKey !== undefined) {
	            execIteration(priorKey, i - 1, true);
	          }
	        })();
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(21).Object.keys;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(16);

	__webpack_require__(18)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(19)
	  , core    = __webpack_require__(21)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(21)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#if requires exactly one argument');
	    }
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#unless requires exactly one argument');
	    }
	    return instance.helpers['if'].call(this, conditional, {
	      fn: options.inverse,
	      inverse: options.fn,
	      hash: options.hash
	    });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field, options) {
	    if (!obj) {
	      // Note for 5.0: Change to "obj == null" in 5.0
	      return obj;
	    }
	    return options.lookupProperty(obj, field);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (arguments.length != 2) {
	      throw new _exception2['default']('#with requires exactly one argument');
	    }
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(31);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      // eslint-disable-next-line no-console
	      if (!console[method]) {
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$create = __webpack_require__(34)['default'];

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.createProtoAccessControl = createProtoAccessControl;
	exports.resultIsAllowed = resultIsAllowed;
	exports.resetLoggedProperties = resetLoggedProperties;

	var _createNewLookupObject = __webpack_require__(36);

	var _logger = __webpack_require__(32);

	var logger = _interopRequireWildcard(_logger);

	var loggedProperties = _Object$create(null);

	function createProtoAccessControl(runtimeOptions) {
	  var defaultMethodWhiteList = _Object$create(null);
	  defaultMethodWhiteList['constructor'] = false;
	  defaultMethodWhiteList['__defineGetter__'] = false;
	  defaultMethodWhiteList['__defineSetter__'] = false;
	  defaultMethodWhiteList['__lookupGetter__'] = false;

	  var defaultPropertyWhiteList = _Object$create(null);
	  // eslint-disable-next-line no-proto
	  defaultPropertyWhiteList['__proto__'] = false;

	  return {
	    properties: {
	      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
	      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
	    },
	    methods: {
	      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
	      defaultValue: runtimeOptions.allowProtoMethodsByDefault
	    }
	  };
	}

	function resultIsAllowed(result, protoAccessControl, propertyName) {
	  if (typeof result === 'function') {
	    return checkWhiteList(protoAccessControl.methods, propertyName);
	  } else {
	    return checkWhiteList(protoAccessControl.properties, propertyName);
	  }
	}

	function checkWhiteList(protoAccessControlForType, propertyName) {
	  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
	    return protoAccessControlForType.whitelist[propertyName] === true;
	  }
	  if (protoAccessControlForType.defaultValue !== undefined) {
	    return protoAccessControlForType.defaultValue;
	  }
	  logUnexpecedPropertyAccessOnce(propertyName);
	  return false;
	}

	function logUnexpecedPropertyAccessOnce(propertyName) {
	  if (loggedProperties[propertyName] !== true) {
	    loggedProperties[propertyName] = true;
	    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
	  }
	}

	function resetLoggedProperties() {
	  _Object$keys(loggedProperties).forEach(function (propertyName) {
	    delete loggedProperties[propertyName];
	  });
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$create = __webpack_require__(34)['default'];

	exports.__esModule = true;
	exports.createNewLookupObject = createNewLookupObject;

	var _utils = __webpack_require__(5);

	/**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */

	function createNewLookupObject() {
	  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	    sources[_key] = arguments[_key];
	  }

	  return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(39)['default'];

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	var _helpers = __webpack_require__(10);

	var _internalWrapHelper = __webpack_require__(43);

	var _internalProtoAccess = __webpack_require__(33);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
	    return;
	  }

	  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
	    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	  } else {
	    // Use the embedded version info since the runtime doesn't know about this revision yet
	    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as pseudo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
	  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }
	    partial = env.VM.resolvePartial.call(this, partial, context, options);

	    var extendedOptions = Utils.extend({}, options, {
	      hooks: this.hooks,
	      protoAccessControl: this.protoAccessControl
	    });

	    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, extendedOptions);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name, loc) {
	      if (!obj || !(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
	          loc: loc
	        });
	      }
	      return container.lookupProperty(obj, name);
	    },
	    lookupProperty: function lookupProperty(parent, propertyName) {
	      var result = parent[propertyName];
	      if (result == null) {
	        return result;
	      }
	      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
	        return result;
	      }

	      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
	        return result;
	      }
	      return undefined;
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        var result = depths[i] && container.lookupProperty(depths[i], name);
	        if (result != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    mergeIfNeeded: function mergeIfNeeded(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }

	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }

	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
	      wrapHelpersToPassLookupProperty(mergedHelpers, container);
	      container.helpers = mergedHelpers;

	      if (templateSpec.usePartial) {
	        // Use mergeIfNeeded here to prevent compiling global partials multiple times
	        container.partials = container.mergeIfNeeded(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = Utils.extend({}, env.decorators, options.decorators);
	      }

	      container.hooks = {};
	      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

	      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
	      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
	      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
	    } else {
	      container.protoAccessControl = options.protoAccessControl; // internal option
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	      container.hooks = options.hooks;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	/**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

	function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
	  _Object$keys(mergedHelpers).forEach(function (helperName) {
	    var helper = mergedHelpers[helperName];
	    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
	  });
	}

	function passLookupPropertyOption(helper, container) {
	  var lookupProperty = container.lookupProperty;
	  return _internalWrapHelper.wrapHelper(helper, function (options) {
	    return Utils.extend({ lookupProperty: lookupProperty }, options);
	  });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(21).Object.seal;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(42);

	__webpack_require__(18)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.wrapHelper = wrapHelper;

	function wrapHelper(helper, transformOptionsFn) {
	  if (typeof helper !== 'function') {
	    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
	    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
	    return helper;
	  }
	  var wrapper = function wrapper() /* dynamic arguments */{
	    var options = arguments[arguments.length - 1];
	    arguments[arguments.length - 1] = transformOptionsFn(options);
	    return helper.apply(this, arguments);
	  };
	  return wrapper;
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parseWithoutProcessing = parseWithoutProcessing;
	exports.parse = parse;

	var _parser = __webpack_require__(47);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(48);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(50);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parseWithoutProcessing(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var ast = _parser2['default'].parse(input);

	  return ast;
	}

	function parse(input, options) {
	  var ast = parseWithoutProcessing(input, options);
	  var strip = new _whitespaceControl2['default'](options);

	  return strip.accept(ast);
	}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        strip(5, 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(49);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substring(1, token.length - 1);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0;

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _Object$create = __webpack_require__(34)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(45);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    options.knownHelpers = _utils.extend(_Object$create(null), {
	      helperMissing: true,
	      blockHelperMissing: true,
	      each: true,
	      'if': true,
	      unless: true,
	      'with': true,
	      log: true,
	      lookup: true
	    }, options.knownHelpers);

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({
	      opcode: name,
	      args: slice.call(arguments, 1),
	      loc: this.sourceNode[0].loc
	    });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name = sexpr.path.parts[0],
	          options = this.options;
	      if (options.knownHelpers[_name]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$keys = __webpack_require__(13)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(53);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /*,  type */) {
	    return this.internalNameLookup(parent, name);
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, ', JSON.stringify(name), ')'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API
	  internalNameLookup: function internalNameLookup(parent, name) {
	    this.lookupPropertyFunctionIsUsed = true;
	    return ['lookupProperty(', parent, ',', JSON.stringify(name), ')'];
	  },

	  lookupPropertyFunctionIsUsed: false,

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend(['var decorators = container.decorators, ', this.lookupPropertyFunctionVarDeclaration(), ';\n']);
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    // istanbul ignore next

	    var _this = this;

	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    _Object$keys(this.aliases).forEach(function (alias) {
	      var node = _this.aliases[alias];
	      if (node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    });

	    if (this.lookupPropertyFunctionIsUsed) {
	      varDeclarations += ', ' + this.lookupPropertyFunctionVarDeclaration();
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
	    return '\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    '.trim();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this2 = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this2.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: {}, types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name);

	    var possibleFunctionCalls = [];

	    if (isSimple) {
	      // direct call to helper
	      possibleFunctionCalls.push(helper.name);
	    }
	    // call a function from the input object
	    possibleFunctionCalls.push(nonHelper);
	    if (!this.options.strict) {
	      possibleFunctionCalls.push(this.aliasable('container.hooks.helperMissing'));
	    }

	    var functionLookupCode = ['(', this.itemsSeparatedBy(possibleFunctionCalls, '||'), ')'];
	    var functionCall = this.source.functionCall(functionLookupCode, 'call', helper.callParams);
	    this.push(functionCall);
	  },

	  itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
	    var result = [];
	    result.push(items[0]);
	    for (var i = 1; i < items.length; i++) {
	      result.push(separator, items[i]);
	    }
	    return result;
	  },
	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options.loc = JSON.stringify(this.source.currentLocation);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	/**
	 * @deprecated May be removed in the next major version
	 */
	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ', ', JSON.stringify(compiler.source.currentLocation), ' )'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	var _Object$keys = __webpack_require__(13)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    // istanbul ignore next

	    var _this = this;

	    var pairs = [];

	    _Object$keys(obj).forEach(function (key) {
	      var value = castChunk(obj[key], _this);
	      if (value !== 'undefined') {
	        pairs.push([_this.quotedString(key), ':', value]);
	      }
	    });

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
/*!
 * TinyMCE
 *
 * Copyright (c) 2022 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 6.1.2
 */
!function(){"use strict";var e=function(e){if(null===e)return"null";if(void 0===e)return"undefined";var t=typeof e;return"object"===t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t},t=function(e){return{eq:e}},n=t((function(e,t){return e===t})),o=function(e){return t((function(t,n){if(t.length!==n.length)return!1;for(var o=t.length,r=0;r<o;r++)if(!e.eq(t[r],n[r]))return!1;return!0}))},r=function(e){return t((function(r,s){var a=Object.keys(r),i=Object.keys(s);if(!function(e,n){return function(e,n){return t((function(t,o){return e.eq(n(t),n(o))}))}(o(e),(function(e){return function(e,t){return Array.prototype.slice.call(e).sort(t)}(e,n)}))}(n).eq(a,i))return!1;for(var l=a.length,d=0;d<l;d++){var c=a[d];if(!e.eq(r[c],s[c]))return!1}return!0}))},s=t((function(t,n){if(t===n)return!0;var a=e(t);return a===e(n)&&(function(e){return-1!==["undefined","boolean","number","string","function","xml","null"].indexOf(e)}(a)?t===n:"array"===a?o(s).eq(t,n):"object"===a&&r(s).eq(t,n))}));const a=Object.getPrototypeOf,i=(e,t,n)=>{var o;return!!n(e,t.prototype)||(null===(o=e.constructor)||void 0===o?void 0:o.name)===t.name},l=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&i(e,String,((e,t)=>t.isPrototypeOf(e)))?"string":t})(t)===e,d=e=>t=>typeof t===e,c=e=>t=>e===t,u=(e,t)=>f(e)&&i(e,t,((e,t)=>a(e)===t)),m=l("string"),f=l("object"),g=e=>u(e,Object),p=l("array"),h=c(null),b=d("boolean"),v=c(void 0),y=e=>null==e,C=e=>!y(e),w=d("function"),x=d("number"),k=(e,t)=>{if(p(e)){for(let n=0,o=e.length;n<o;++n)if(!t(e[n]))return!1;return!0}return!1},S=()=>{},_=(e,t)=>(...n)=>e(t.apply(null,n)),E=(e,t)=>n=>e(t(n)),N=e=>()=>e,R=e=>e,A=(e,t)=>e===t;function O(e,...t){return(...n)=>{const o=t.concat(n);return e.apply(null,o)}}const T=e=>t=>!e(t),B=e=>e(),D=e=>{e()},P=N(!1),L=N(!0);class M{constructor(e,t){this.tag=e,this.value=t}static some(e){return new M(!0,e)}static none(){return M.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?M.some(e(this.value)):M.none()}bind(e){return this.tag?e(this.value):M.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:M.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return C(e)?M.some(e):M.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}M.singletonNone=new M(!1);const I=Array.prototype.slice,F=Array.prototype.indexOf,U=Array.prototype.push,z=(e,t)=>F.call(e,t),j=(e,t)=>z(e,t)>-1,V=(e,t)=>{for(let n=0,o=e.length;n<o;n++)if(t(e[n],n))return!0;return!1},H=(e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o},$=(e,t)=>{for(let n=0,o=e.length;n<o;n++)t(e[n],n)},q=(e,t)=>{for(let n=e.length-1;n>=0;n--)t(e[n],n)},W=(e,t)=>{const n=[],o=[];for(let r=0,s=e.length;r<s;r++){const s=e[r];(t(s,r)?n:o).push(s)}return{pass:n,fail:o}},K=(e,t)=>{const n=[];for(let o=0,r=e.length;o<r;o++){const r=e[o];t(r,o)&&n.push(r)}return n},G=(e,t,n)=>(q(e,((e,o)=>{n=t(n,e,o)})),n),Y=(e,t,n)=>($(e,((e,o)=>{n=t(n,e,o)})),n),X=(e,t,n)=>{for(let o=0,r=e.length;o<r;o++){const r=e[o];if(t(r,o))return M.some(r);if(n(r,o))break}return M.none()},Q=(e,t)=>X(e,t,P),J=(e,t)=>{for(let n=0,o=e.length;n<o;n++)if(t(e[n],n))return M.some(n);return M.none()},Z=e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!p(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);U.apply(t,e[n])}return t},ee=(e,t)=>Z(H(e,t)),te=(e,t)=>{for(let n=0,o=e.length;n<o;++n)if(!0!==t(e[n],n))return!1;return!0},ne=e=>{const t=I.call(e,0);return t.reverse(),t},oe=(e,t)=>K(e,(e=>!j(t,e))),re=(e,t)=>{const n={};for(let o=0,r=e.length;o<r;o++){const r=e[o];n[String(r)]=t(r,o)}return n},se=(e,t)=>{const n=I.call(e,0);return n.sort(t),n},ae=(e,t)=>t>=0&&t<e.length?M.some(e[t]):M.none(),ie=e=>ae(e,0),le=e=>ae(e,e.length-1),de=w(Array.from)?Array.from:e=>I.call(e),ce=(e,t)=>{for(let n=0;n<e.length;n++){const o=t(e[n],n);if(o.isSome())return o}return M.none()},ue=Object.keys,me=Object.hasOwnProperty,fe=(e,t)=>{const n=ue(e);for(let o=0,r=n.length;o<r;o++){const r=n[o];t(e[r],r)}},ge=(e,t)=>pe(e,((e,n)=>({k:n,v:t(e,n)}))),pe=(e,t)=>{const n={};return fe(e,((e,o)=>{const r=t(e,o);n[r.k]=r.v})),n},he=e=>(t,n)=>{e[n]=t},be=(e,t,n,o)=>(fe(e,((e,r)=>{(t(e,r)?n:o)(e,r)})),{}),ve=(e,t)=>{const n={};return be(e,t,he(n),S),n},ye=(e,t)=>{const n=[];return fe(e,((e,o)=>{n.push(t(e,o))})),n},Ce=e=>ye(e,R),we=(e,t)=>xe(e,t)?M.from(e[t]):M.none(),xe=(e,t)=>me.call(e,t),ke=(e,t)=>xe(e,t)&&void 0!==e[t]&&null!==e[t],Se=e=>{const t={};return $(e,(e=>{t[e]={}})),ue(t)},_e=Array.isArray,Ee=(e,t,n)=>{let o,r;if(!e)return!1;if(n=n||e,void 0!==e.length){for(o=0,r=e.length;o<r;o++)if(!1===t.call(n,e[o],o,e))return!1}else for(o in e)if(xe(e,o)&&!1===t.call(n,e[o],o,e))return!1;return!0},Ne=(e,t)=>{const n=[];return Ee(e,((o,r)=>{n.push(t(o,r,e))})),n},Re=(e,t)=>{const n=[];return Ee(e,((o,r)=>{t&&!t(o,r,e)||n.push(o)})),n},Ae=(e,t)=>{if(e)for(let n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1},Oe=(e,t,n,o)=>{let r=v(n)?e[0]:n;for(let n=0;n<e.length;n++)r=t.call(o,r,e[n],n);return r},Te=(e,t,n)=>{let o,r;for(o=0,r=e.length;o<r;o++)if(t.call(n,e[o],o,e))return o;return-1},Be=e=>e[e.length-1],De=e=>{let t,n=!1;return(...o)=>(n||(n=!0,t=e.apply(null,o)),t)},Pe=()=>Le(0,0),Le=(e,t)=>({major:e,minor:t}),Me={nu:Le,detect:(e,t)=>{const n=String(t).toLowerCase();return 0===e.length?Pe():((e,t)=>{const n=((e,t)=>{for(let n=0;n<e.length;n++){const o=e[n];if(o.test(t))return o}})(e,t);if(!n)return{major:0,minor:0};const o=e=>Number(t.replace(n,"$"+e));return Le(o(1),o(2))})(e,n)},unknown:Pe},Ie=(e,t)=>{const n=String(t).toLowerCase();return Q(e,(e=>e.search(n)))},Fe=(e,t,n)=>""===t||e.length>=t.length&&e.substr(n,n+t.length)===t,Ue=(e,t)=>-1!==e.indexOf(t),ze=(e,t)=>Fe(e,t,0),je=(e,t)=>Fe(e,t,e.length-t.length),Ve=e=>t=>t.replace(e,""),He=Ve(/^\s+|\s+$/g),$e=Ve(/^\s+/g),qe=Ve(/\s+$/g),We=e=>e.length>0,Ke=e=>!We(e),Ge=(e,t=10)=>{const n=parseInt(e,t);return isNaN(n)?M.none():M.some(n)},Ye=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Xe=e=>t=>Ue(t,e),Qe=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:e=>Ue(e,"edge/")&&Ue(e,"chrome")&&Ue(e,"safari")&&Ue(e,"applewebkit")},{name:"Chromium",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Ye],search:e=>Ue(e,"chrome")&&!Ue(e,"chromeframe")},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:e=>Ue(e,"msie")||Ue(e,"trident")},{name:"Opera",versionRegexes:[Ye,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Xe("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Xe("firefox")},{name:"Safari",versionRegexes:[Ye,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:e=>(Ue(e,"safari")||Ue(e,"mobile/"))&&Ue(e,"applewebkit")}],Je=[{name:"Windows",search:Xe("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:e=>Ue(e,"iphone")||Ue(e,"ipad"),versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Xe("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"macOS",search:Xe("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Xe("linux"),versionRegexes:[]},{name:"Solaris",search:Xe("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Xe("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:Xe("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],Ze={browsers:N(Qe),oses:N(Je)},et="Edge",tt="Chromium",nt="Opera",ot="Firefox",rt="Safari",st=e=>{const t=e.current,n=e.version,o=e=>()=>t===e;return{current:t,version:n,isEdge:o(et),isChromium:o(tt),isIE:o("IE"),isOpera:o(nt),isFirefox:o(ot),isSafari:o(rt)}},at=()=>st({current:void 0,version:Me.unknown()}),it=st,lt=(N(et),N(tt),N("IE"),N(nt),N(ot),N(rt),"Windows"),dt="Android",ct="Linux",ut="macOS",mt="Solaris",ft="FreeBSD",gt="ChromeOS",pt=e=>{const t=e.current,n=e.version,o=e=>()=>t===e;return{current:t,version:n,isWindows:o(lt),isiOS:o("iOS"),isAndroid:o(dt),isMacOS:o(ut),isLinux:o(ct),isSolaris:o(mt),isFreeBSD:o(ft),isChromeOS:o(gt)}},ht=()=>pt({current:void 0,version:Me.unknown()}),bt=pt,vt=(N(lt),N("iOS"),N(dt),N(ct),N(ut),N(mt),N(ft),N(gt),e=>window.matchMedia(e).matches);let yt=De((()=>((e,t,n)=>{const o=Ze.browsers(),r=Ze.oses(),s=t.bind((e=>((e,t)=>ce(t.brands,(t=>{const n=t.brand.toLowerCase();return Q(e,(e=>{var t;return n===(null===(t=e.brand)||void 0===t?void 0:t.toLowerCase())})).map((e=>({current:e.name,version:Me.nu(parseInt(t.version,10),0)})))})))(o,e))).orThunk((()=>((e,t)=>Ie(e,t).map((e=>{const n=Me.detect(e.versionRegexes,t);return{current:e.name,version:n}})))(o,e))).fold(at,it),a=((e,t)=>Ie(e,t).map((e=>{const n=Me.detect(e.versionRegexes,t);return{current:e.name,version:n}})))(r,e).fold(ht,bt),i=((e,t,n,o)=>{const r=e.isiOS()&&!0===/ipad/i.test(n),s=e.isiOS()&&!r,a=e.isiOS()||e.isAndroid(),i=a||o("(pointer:coarse)"),l=r||!s&&a&&o("(min-device-width:768px)"),d=s||a&&!l,c=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),u=!d&&!l&&!c;return{isiPad:N(r),isiPhone:N(s),isTablet:N(l),isPhone:N(d),isTouch:N(i),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:N(c),isDesktop:N(u)}})(a,s,e,n);return{browser:s,os:a,deviceType:i}})(navigator.userAgent,M.from(navigator.userAgentData),vt)));const Ct=()=>yt(),wt=navigator.userAgent,xt=Ct(),kt=xt.browser,St=xt.os,_t=xt.deviceType,Et=-1!==wt.indexOf("Windows Phone"),Nt={transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",documentMode:kt.isIE()?document.documentMode||7:10,cacheSuffix:null,container:null,canHaveCSP:!kt.isIE(),windowsPhone:Et,browser:{current:kt.current,version:kt.version,isChromium:kt.isChromium,isEdge:kt.isEdge,isFirefox:kt.isFirefox,isIE:kt.isIE,isOpera:kt.isOpera,isSafari:kt.isSafari},os:{current:St.current,version:St.version,isAndroid:St.isAndroid,isChromeOS:St.isChromeOS,isFreeBSD:St.isFreeBSD,isiOS:St.isiOS,isLinux:St.isLinux,isMacOS:St.isMacOS,isSolaris:St.isSolaris,isWindows:St.isWindows},deviceType:{isDesktop:_t.isDesktop,isiPad:_t.isiPad,isiPhone:_t.isiPhone,isPhone:_t.isPhone,isTablet:_t.isTablet,isTouch:_t.isTouch,isWebView:_t.isWebView}},Rt=/^\s*|\s*$/g,At=e=>null==e?"":(""+e).replace(Rt,""),Ot=(e,t)=>t?!("array"!==t||!_e(e))||typeof e===t:void 0!==e,Tt=function(e,t,n,o){o=o||this,e&&(n&&(e=e[n]),Ee(e,((e,r)=>{if(!1===t.call(o,e,r,n))return!1;Tt(e,t,n,o)})))},Bt={trim:At,isArray:_e,is:Ot,toArray:e=>{if(_e(e))return e;{const t=[];for(let n=0,o=e.length;n<o;n++)t[n]=e[n];return t}},makeMap:(e,t,n)=>{let o;for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},o=e.length;o--;)n[e[o]]={};return n},each:Ee,map:Ne,grep:Re,inArray:Ae,hasOwn:xe,extend:(e,...t)=>{for(let n=0;n<t.length;n++){const o=t[n];for(const t in o)if(xe(o,t)){const n=o[t];void 0!==n&&(e[t]=n)}}return e},walk:Tt,resolve:(e,t)=>{let n,o;for(t=t||window,n=0,o=(e=e.split(".")).length;n<o&&(t=t[e[n]]);n++);return t},explode:(e,t)=>!e||Ot(e,"array")?e:Ne(e.split(t||","),At),_addCacheSuffix:e=>{const t=Nt.cacheSuffix;return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},Dt=(e,t,n=A)=>e.exists((e=>n(e,t))),Pt=(e,t,n)=>e.isSome()&&t.isSome()?M.some(n(e.getOrDie(),t.getOrDie())):M.none(),Lt=(e,t)=>e?M.some(t):M.none();"undefined"!=typeof window?window:Function("return this;")();const Mt=e=>e.dom.nodeName.toLowerCase(),It=e=>e.dom.nodeType,Ft=e=>t=>It(t)===e,Ut=Ft(1),zt=Ft(3),jt=Ft(9),Vt=Ft(11),Ht=e=>t=>Ut(t)&&Mt(t)===e,$t=(e,t,n)=>{if(!(m(n)||b(n)||x(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")},qt=(e,t,n)=>{$t(e.dom,t,n)},Wt=(e,t)=>{const n=e.dom;fe(t,((e,t)=>{$t(n,t,e)}))},Kt=(e,t)=>{const n=e.dom.getAttribute(t);return null===n?void 0:n},Gt=(e,t)=>M.from(Kt(e,t)),Yt=(e,t)=>{const n=e.dom;return!(!n||!n.hasAttribute)&&n.hasAttribute(t)},Xt=(e,t)=>{e.dom.removeAttribute(t)},Qt=e=>Y(e.dom.attributes,((e,t)=>(e[t.name]=t.value,e)),{}),Jt=(e,t)=>{const n=Kt(e,t);return void 0===n||""===n?[]:n.split(" ")},Zt=e=>void 0!==e.dom.classList,en=e=>Jt(e,"class"),tn=(e,t)=>((e,t,n)=>{const o=Jt(e,t).concat([n]);return qt(e,t,o.join(" ")),!0})(e,"class",t),nn=(e,t)=>((e,t,n)=>{const o=K(Jt(e,t),(e=>e!==n));return o.length>0?qt(e,t,o.join(" ")):Xt(e,t),!1})(e,"class",t),on=(e,t)=>{Zt(e)?e.dom.classList.add(t):tn(e,t)},rn=e=>{0===(Zt(e)?e.dom.classList:en(e)).length&&Xt(e,"class")},sn=(e,t)=>{Zt(e)?e.dom.classList.remove(t):nn(e,t),rn(e)},an=(e,t)=>Zt(e)&&e.dom.classList.contains(t),ln=e=>void 0!==e.style&&w(e.style.getPropertyValue),dn=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},cn=(e,t)=>{const n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1){const t="HTML does not have a single root node";throw console.error(t,e),new Error(t)}return dn(n.childNodes[0])},un=(e,t)=>{const n=(t||document).createElement(e);return dn(n)},mn=(e,t)=>{const n=(t||document).createTextNode(e);return dn(n)},fn=dn,gn=(e,t,n)=>M.from(e.dom.elementFromPoint(t,n)).map(dn),pn=(e,t)=>{const n=[],o=e=>(n.push(e),t(e));let r=t(e);do{r=r.bind(o)}while(r.isSome());return n},hn=(e,t)=>{const n=e.dom;if(1!==n.nodeType)return!1;{const e=n;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},bn=e=>1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount,vn=(e,t)=>e.dom===t.dom,yn=(e,t)=>{const n=e.dom,o=t.dom;return n!==o&&n.contains(o)},Cn=e=>fn(e.dom.ownerDocument),wn=e=>jt(e)?e:Cn(e),xn=e=>fn(wn(e).dom.defaultView),kn=e=>M.from(e.dom.parentNode).map(fn),Sn=e=>M.from(e.dom.previousSibling).map(fn),_n=e=>M.from(e.dom.nextSibling).map(fn),En=e=>ne(pn(e,Sn)),Nn=e=>pn(e,_n),Rn=e=>H(e.dom.childNodes,fn),An=(e,t)=>{const n=e.dom.childNodes;return M.from(n[t]).map(fn)},On=e=>An(e,0),Tn=e=>An(e,e.dom.childNodes.length-1),Bn=e=>e.dom.childNodes.length,Dn=e=>Vt(e)&&C(e.dom.host),Pn=w(Element.prototype.attachShadow)&&w(Node.prototype.getRootNode),Ln=N(Pn),Mn=Pn?e=>fn(e.dom.getRootNode()):wn,In=e=>Dn(e)?e:(e=>{const t=e.dom.head;if(null==t)throw new Error("Head is not available yet");return fn(t)})(wn(e)),Fn=e=>fn(e.dom.host),Un=e=>{if(Ln()&&C(e.target)){const t=fn(e.target);if(Ut(t)&&zn(t)&&e.composed&&e.composedPath){const t=e.composedPath();if(t)return ie(t)}}return M.from(e.target)},zn=e=>C(e.dom.shadowRoot),jn=e=>{const t=zt(e)?e.dom.parentNode:e.dom;if(null==t||null===t.ownerDocument)return!1;const n=t.ownerDocument;return(e=>{const t=Mn(e);return Dn(t)?M.some(t):M.none()})(fn(t)).fold((()=>n.body.contains(t)),E(jn,Fn))},Vn=(e,t,n)=>{if(!m(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);ln(e)&&e.style.setProperty(t,n)},Hn=(e,t,n)=>{const o=e.dom;Vn(o,t,n)},$n=(e,t)=>{const n=e.dom;fe(t,((e,t)=>{Vn(n,t,e)}))},qn=(e,t)=>{const n=e.dom,o=window.getComputedStyle(n).getPropertyValue(t);return""!==o||jn(e)?o:Wn(n,t)},Wn=(e,t)=>ln(e)?e.style.getPropertyValue(t):"",Kn=(e,t)=>{const n=e.dom,o=Wn(n,t);return M.from(o).filter((e=>e.length>0))},Gn=e=>{const t={},n=e.dom;if(ln(n))for(let e=0;e<n.style.length;e++){const o=n.style.item(e);t[o]=n.style[o]}return t},Yn=(e,t)=>{((e,t)=>{ln(e)&&e.style.removeProperty(t)})(e.dom,t),Dt(Gt(e,"style").map(He),"")&&Xt(e,"style")},Xn=(e,t)=>{kn(e).each((n=>{n.dom.insertBefore(t.dom,e.dom)}))},Qn=(e,t)=>{_n(e).fold((()=>{kn(e).each((e=>{Zn(e,t)}))}),(e=>{Xn(e,t)}))},Jn=(e,t)=>{On(e).fold((()=>{Zn(e,t)}),(n=>{e.dom.insertBefore(t.dom,n.dom)}))},Zn=(e,t)=>{e.dom.appendChild(t.dom)},eo=(e,t)=>{$(t,(t=>{Zn(e,t)}))},to=e=>{e.dom.textContent="",$(Rn(e),(e=>{no(e)}))},no=e=>{const t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)},oo=e=>{const t=Rn(e);var n,o;t.length>0&&(n=e,$(o=t,((e,t)=>{const r=0===t?n:o[t-1];Qn(r,e)}))),no(e)},ro=e=>e.dom.innerHTML,so=(e,t)=>{const n=Cn(e).dom,o=fn(n.createDocumentFragment()),r=((e,t)=>{const n=(t||document).createElement("div");return n.innerHTML=e,Rn(fn(n))})(t,n);eo(o,r),to(e),Zn(e,o)},ao=(e,t,n,o)=>((e,t,n,o,r)=>{const s=((e,t)=>n=>{e(n)&&t((e=>{const t=fn(Un(e).getOr(e.target)),n=()=>e.stopPropagation(),o=()=>e.preventDefault(),r=_(o,n);return((e,t,n,o,r,s,a)=>({target:e,x:t,y:n,stop:o,prevent:r,kill:s,raw:a}))(t,e.clientX,e.clientY,n,o,r,e)})(n))})(n,o);return e.dom.addEventListener(t,s,false),{unbind:O(io,e,t,s,false)}})(e,t,n,o),io=(e,t,n,o)=>{e.dom.removeEventListener(t,n,o)},lo=(e,t)=>({left:e,top:t,translate:(n,o)=>lo(e+n,t+o)}),co=lo,uo=(e,t)=>void 0!==e?e:void 0!==t?t:0,mo=e=>{const t=e.dom,n=t.ownerDocument.body;return n===t?co(n.offsetLeft,n.offsetTop):jn(e)?(e=>{const t=e.getBoundingClientRect();return co(t.left,t.top)})(t):co(0,0)},fo=e=>{const t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop;return co(n,o)},go=(e,t,n)=>{const o=(void 0!==n?n.dom:document).defaultView;o&&o.scrollTo(e,t)},po=(e,t)=>{Ct().browser.isSafari()&&w(e.dom.scrollIntoViewIfNeeded)?e.dom.scrollIntoViewIfNeeded(!1):e.dom.scrollIntoView(t)},ho=(e,t,n,o)=>({x:e,y:t,width:n,height:o,right:e+n,bottom:t+o}),bo=e=>{const t=void 0===e?window:e,n=t.document,o=fo(fn(n));return(e=>{const t=void 0===e?window:e;return Ct().browser.isFirefox()?M.none():M.from(t.visualViewport)})(t).fold((()=>{const e=t.document.documentElement,n=e.clientWidth,r=e.clientHeight;return ho(o.left,o.top,n,r)}),(e=>ho(Math.max(e.pageLeft,o.left),Math.max(e.pageTop,o.top),e.width,e.height)))},vo=e=>t=>!!t&&t.nodeType===e,yo=e=>!!e&&!Object.getPrototypeOf(e),Co=vo(1),wo=e=>{const t=e.map((e=>e.toLowerCase()));return e=>{if(e&&e.nodeName){const n=e.nodeName.toLowerCase();return j(t,n)}return!1}},xo=(e,t)=>{const n=t.toLowerCase().split(" ");return t=>{if(Co(t))for(let o=0;o<n.length;o++){const r=t.ownerDocument.defaultView.getComputedStyle(t,null);if((r?r.getPropertyValue(e):null)===n[o])return!0}return!1}},ko=e=>t=>Co(t)&&t.hasAttribute(e),So=e=>Co(e)&&e.hasAttribute("data-mce-bogus"),_o=e=>Co(e)&&"TABLE"===e.tagName,Eo=e=>t=>{if(Co(t)){if(t.contentEditable===e)return!0;if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1},No=wo(["textarea","input"]),Ro=vo(3),Ao=vo(4),Oo=vo(7),To=vo(8),Bo=vo(9),Do=vo(11),Po=wo(["br"]),Lo=wo(["img"]),Mo=Eo("true"),Io=Eo("false"),Fo=wo(["td","th"]),Uo=wo(["video","audio","object","embed"]),zo=Ct().browser,jo=e=>Q(e,Ut),Vo=(e,t)=>e.children&&j(e.children,t);var Ho=(e,t,n,o,r)=>e(n,o)?M.some(n):w(r)&&r(n)?M.none():t(n,o,r);const $o=(e,t,n)=>{let o=e.dom;const r=w(n)?n:P;for(;o.parentNode;){o=o.parentNode;const e=fn(o);if(t(e))return M.some(e);if(r(e))break}return M.none()},qo=(e,t,n)=>Ho(((e,t)=>t(e)),$o,e,t,n),Wo=(e,t,n)=>$o(e,(e=>hn(e,t)),n),Ko=(e,t)=>((e,t)=>{const n=void 0===t?document:t.dom;return bn(n)?M.none():M.from(n.querySelector(e)).map(fn)})(t,e),Go=(e,t,n)=>Ho(((e,t)=>hn(e,t)),Wo,e,t,n),Yo=(e,t={})=>{let n=0;const o={},r=fn(e),s=wn(r),a=t.maxLoadTime||5e3,i=i=>new Promise(((l,d)=>{let c;const u=Bt._addCacheSuffix(i),m=(e=>we(o,e).getOrThunk((()=>({id:"mce-u"+n++,passed:[],failed:[],count:0}))))(u);o[u]=m,m.count++;const f=(e,t)=>{$(e,D),m.status=t,m.passed=[],m.failed=[],c&&(c.onload=null,c.onerror=null,c=null)},g=()=>f(m.passed,2),p=()=>f(m.failed,3),h=()=>{var t;t=h,(()=>{const t=e.styleSheets;let n=t.length;for(;n--;){const e=t[n].ownerNode;if(e&&e.id===c.id)return g(),!0}return!1})()||(Date.now()-v<a?setTimeout(t):p())};if(l&&m.passed.push(l),d&&m.failed.push(d),1===m.status)return;if(2===m.status)return void g();if(3===m.status)return void p();m.status=1;const b=un("link",s.dom);Wt(b,{rel:"stylesheet",type:"text/css",id:m.id});const v=Date.now();var y;t.contentCssCors&&qt(b,"crossOrigin","anonymous"),t.referrerPolicy&&qt(b,"referrerpolicy",t.referrerPolicy),c=b.dom,c.onload=h,c.onerror=p,y=b,Zn(In(r),y),qt(b,"href",u)})),l=e=>{const t=Bt._addCacheSuffix(e);we(o,t).each((e=>{0==--e.count&&(delete o[t],(e=>{const t=In(r);Ko(t,"#"+e).each(no)})(e.id))}))};return{load:i,loadAll:e=>Promise.allSettled(H(e,(e=>i(e).then(N(e))))).then((e=>{const t=W(e,(e=>"fulfilled"===e.status));return t.fail.length>0?Promise.reject(H(t.fail,(e=>e.reason))):H(t.pass,(e=>e.value))})),unload:l,unloadAll:e=>{$(e,(e=>{l(e)}))},_setReferrerPolicy:e=>{t.referrerPolicy=e}}},Xo=(()=>{const e=new WeakMap;return{forElement:(t,n)=>{const o=Mn(t).dom;return M.from(e.get(o)).getOrThunk((()=>{const t=Yo(o,n);return e.set(o,t),t}))}}})();class Qo{constructor(e,t){this.node=e,this.rootNode=t,this.current=this.current.bind(this),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.prev2=this.prev2.bind(this)}current(){return this.node}next(e){return this.node=this.findSibling(this.node,"firstChild","nextSibling",e),this.node}prev(e){return this.node=this.findSibling(this.node,"lastChild","previousSibling",e),this.node}prev2(e){return this.node=this.findPreviousNode(this.node,e),this.node}findSibling(e,t,n,o){let r,s;if(e){if(!o&&e[t])return e[t];if(e!==this.rootNode){if(r=e[n],r)return r;for(s=e.parentNode;s&&s!==this.rootNode;s=s.parentNode)if(r=s[n],r)return r}}}findPreviousNode(e,t){let n,o,r;if(e){if(n=e.previousSibling,this.rootNode&&n===this.rootNode)return;if(n){if(!t)for(r=n.lastChild;r;r=r.lastChild)if(!r.lastChild)return r;return n}if(o=e.parentNode,o&&o!==this.rootNode)return o}}}const Jo=["pre"].concat(["h1","h2","h3","h4","h5","h6"]),Zo=e=>{let t;return n=>(t=t||re(e,L),xe(t,Mt(n)))},er=Zo(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),tr=e=>Ut(e)&&!er(e),nr=e=>Ut(e)&&"br"===Mt(e),or=Zo(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),rr=Zo(["ul","ol","dl"]),sr=Zo(["li","dd","dt"]),ar=Zo(["thead","tbody","tfoot"]),ir=Zo(["td","th"]),lr=Zo(["pre","script","textarea","style"]),dr=Zo(Jo),cr=e=>dr(e)||tr(e),ur=(e,t,n)=>Wo(e,t,n).isSome(),mr="\ufeff",fr="\xa0",gr=e=>e===mr,pr=(e,t)=>{let n=[];return $(Rn(e),(e=>{t(e)&&(n=n.concat([e])),n=n.concat(pr(e,t))})),n},hr=(e,t)=>((e,t)=>{const n=void 0===t?document:t.dom;return bn(n)?[]:H(n.querySelectorAll(e),fn)})(t,e),br=((e,t)=>{const n=t=>e(t)?M.from(t.dom.nodeValue):M.none();return{get:t=>{if(!e(t))throw new Error("Can only get text value of a text node");return n(t).getOr("")},getOption:n,set:(t,n)=>{if(!e(t))throw new Error("Can only set raw text value of a text node");t.dom.nodeValue=n}}})(zt),vr=e=>br.get(e),yr=e=>br.getOption(e),Cr=()=>{const e=un("br");return qt(e,"data-mce-bogus","1"),e},wr=e=>{to(e),Zn(e,Cr())},xr=e=>{Tn(e).each((t=>{Sn(t).each((n=>{er(e)&&nr(t)&&er(n)&&no(t)}))}))},kr=mr,Sr=gr,_r=e=>e.replace(/\uFEFF/g,""),Er=Co,Nr=Ro,Rr=e=>(Nr(e)&&(e=e.parentNode),Er(e)&&e.hasAttribute("data-mce-caret")),Ar=e=>Nr(e)&&Sr(e.data),Or=e=>Rr(e)||Ar(e),Tr=e=>e.firstChild!==e.lastChild||!Po(e.firstChild),Br=e=>{const t=e.container();return!!Ro(t)&&(t.data.charAt(e.offset())===kr||e.isAtStart()&&Ar(t.previousSibling))},Dr=e=>{const t=e.container();return!!Ro(t)&&(t.data.charAt(e.offset()-1)===kr||e.isAtEnd()&&Ar(t.nextSibling))},Pr=e=>Nr(e)&&e.data[0]===kr,Lr=e=>Nr(e)&&e.data[e.data.length-1]===kr,Mr=e=>e&&e.hasAttribute("data-mce-caret")?((e=>{const t=e.getElementsByTagName("br"),n=t[t.length-1];So(n)&&n.parentNode.removeChild(n)})(e),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("data-mce-style"),e.removeAttribute("_moz_abspos"),e):null,Ir=e=>Rr(e.startContainer),Fr=Mo,Ur=Io,zr=Po,jr=Ro,Vr=wo(["script","style","textarea"]),Hr=wo(["img","input","textarea","hr","iframe","video","audio","object","embed"]),$r=wo(["table"]),qr=Or,Wr=e=>!qr(e)&&(jr(e)?!Vr(e.parentNode):Hr(e)||zr(e)||$r(e)||Kr(e)),Kr=e=>!1===(e=>Co(e)&&"true"===e.getAttribute("unselectable"))(e)&&Ur(e),Gr=(e,t)=>Wr(e)&&((e,t)=>{for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(Kr(e))return!1;if(Fr(e))return!0}return!0})(e,t),Yr=/^[ \t\r\n]*$/,Xr=e=>Yr.test(e),Qr=e=>"\n"===e||"\r"===e,Jr=(e,t=4,n=!0,o=!0)=>{const r=((e,t)=>t<=0?"":new Array(t+1).join(" "))(0,t),s=e.replace(/\t/g,r),a=Y(s,((e,t)=>(e=>-1!==" \f\t\v".indexOf(e))(t)||t===fr?e.pcIsSpace||""===e.str&&n||e.str.length===s.length-1&&o||((e,t)=>t<e.length&&t>=0&&Qr(e[t]))(s,e.str.length+1)?{pcIsSpace:!1,str:e.str+fr}:{pcIsSpace:!0,str:e.str+" "}:{pcIsSpace:Qr(t),str:e.str+t}),{pcIsSpace:!1,str:""});return a.str},Zr=(e,t)=>Wr(e)&&!1===((e,t)=>Ro(e)&&Xr(e.data)&&!1===((e,t)=>{const n=fn(t),o=fn(e);return ur(o,"pre,code",O(vn,n))})(e,t))(e,t)||(e=>Co(e)&&"A"===e.nodeName&&!e.hasAttribute("href")&&(e.hasAttribute("name")||e.hasAttribute("id")))(e)||es(e),es=ko("data-mce-bookmark"),ts=ko("data-mce-bogus"),ns=("data-mce-bogus","all",e=>Co(e)&&"all"===e.getAttribute("data-mce-bogus"));const os=(e,t=!0)=>((e,t)=>{let n=0;if(Zr(e,e))return!1;{let o=e.firstChild;if(!o)return!0;const r=new Qo(o,e);do{if(t){if(ns(o)){o=r.next(!0);continue}if(ts(o)){o=r.next();continue}}if(Po(o))n++,o=r.next();else{if(Zr(o,e))return!1;o=r.next()}}while(o);return n<=1}})(e.dom,t),rs=(e,t)=>C(e)&&(Zr(e,t)||tr(fn(e))),ss=e=>(e=>"span"===e.nodeName.toLowerCase())(e)&&"bookmark"===e.getAttribute("data-mce-type"),as=(e,t,n)=>{const o=n||t;if(Co(t)&&ss(t))return t;const r=t.childNodes;for(let t=r.length-1;t>=0;t--)as(e,r[t],o);if(Co(t)){const e=t.childNodes;1===e.length&&ss(e[0])&&t.parentNode.insertBefore(e[0],t)}return(e=>Do(e)||Bo(e))(t)||Zr(t,o)||(e=>!!Co(e)&&e.childNodes.length>0)(t)||((e,t)=>Ro(e)&&e.data.length>0&&((e,t)=>{const n=new Qo(e,t).prev(!1),o=new Qo(e,t).next(!1),r=v(n)||rs(n,t),s=v(o)||rs(o,t);return r&&s})(e,t))(t,o)||e.remove(t),t},is=Bt.makeMap,ls=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,ds=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,cs=/[<>&\"\']/g,us=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,ms={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"},fs={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},gs={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},ps=(e,t)=>{let n,o,r;const s={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)o=String.fromCharCode(parseInt(e[n],t)),fs[o]||(r="&"+e[n+1]+";",s[o]=r,s[r]=o);return s}},hs=ps("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32),bs=(e,t)=>e.replace(t?ls:ds,(e=>fs[e]||e)),vs=(e,t)=>e.replace(t?ls:ds,(e=>e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":fs[e]||"&#"+e.charCodeAt(0)+";")),ys=(e,t,n)=>(n=n||hs,e.replace(t?ls:ds,(e=>fs[e]||n[e]||e))),Cs={encodeRaw:bs,encodeAllRaw:e=>(""+e).replace(cs,(e=>fs[e]||e)),encodeNumeric:vs,encodeNamed:ys,getEncodeFunc:(e,t)=>{const n=ps(t)||hs,o=is(e.replace(/\+/g,","));return o.named&&o.numeric?(e,t)=>e.replace(t?ls:ds,(e=>void 0!==fs[e]?fs[e]:void 0!==n[e]?n[e]:e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";")):o.named?t?(e,t)=>ys(e,t,n):ys:o.numeric?vs:bs},decode:e=>e.replace(us,((e,t)=>t?(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))>65535?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):ms[t]||String.fromCharCode(t):gs[e]||hs[e]||(e=>{const t=un("div").dom;return t.innerHTML=e,t.textContent||t.innerText||e})(e)))},ws={},xs={},ks=Bt.makeMap,Ss=Bt.each,_s=Bt.extend,Es=Bt.explode,Ns=Bt.inArray,Rs=(e,t)=>(e=Bt.trim(e))?e.split(t||" "):[],As=(e,t)=>{const n=ks(e," ",ks(e.toUpperCase()," "));return _s(n,t)},Os=e=>As("td th li dt dd figcaption caption details summary",e.getTextBlockElements()),Ts=(e,t)=>{let n;return e&&(n={},"string"==typeof e&&(e={"*":e}),Ss(e,((e,o)=>{n[o]=n[o.toUpperCase()]="map"===t?ks(e,/[, ]/):Es(e,/[, ]/)}))),n},Bs=e=>{var t;const n={},o={};let r=[];const s={},a={},i=(t,n,o)=>{let r=e[t];return r?r=ks(r,/[, ]/,ks(r.toUpperCase(),/[, ]/)):(r=ws[t],r||(r=As(n,o),ws[t]=r)),r},l=null!==(t=(e=e||{}).schema)&&void 0!==t?t:"html5",d=(e=>{const t={};let n,o,r,s,a,i;const l=(e,o="",r="")=>{const s=Rs(r),a=Rs(e);let i=a.length;for(;i--;){const e=Rs([n,o].join(" "));t[a[i]]={attributes:re(e,(()=>({}))),attributesOrder:e,children:re(s,N(xs))}}},d=(e,n)=>{const o=Rs(e),r=Rs(n);let s=o.length;for(;s--;){const e=t[o[s]];for(let t=0,n=r.length;t<n;t++)e.attributes[r[t]]={},e.attributesOrder.push(r[t])}};return ws[e]?ws[e]:(n="id accesskey class dir lang style tabindex title role",o="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",r="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(n+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",o+=" article aside details dialog figure main header footer hgroup section nav",r+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(n+=" xml:lang",i="acronym applet basefont big font strike tt",r=[r,i].join(" "),Ss(Rs(i),(e=>{l(e,"",r)})),a="center dir isindex noframes",o=[o,a].join(" "),s=[o,r].join(" "),Ss(Rs(a),(e=>{l(e,"",s)}))),s=s||[o,r].join(" "),l("html","manifest","head body"),l("head","","base command link meta noscript script style title"),l("title hr noscript br"),l("base","href target"),l("link","href rel media hreflang type sizes hreflang"),l("meta","name http-equiv content charset"),l("style","media type scoped"),l("script","src async defer type charset"),l("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",s),l("address dt dd div caption","",s),l("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",r),l("blockquote","cite",s),l("ol","reversed start type","li"),l("ul","","li"),l("li","value",s),l("dl","","dt dd"),l("a","href target rel media hreflang type",r),l("q","cite",r),l("ins del","cite datetime",s),l("img","src sizes srcset alt usemap ismap width height"),l("iframe","src name width height",s),l("embed","src type width height"),l("object","data type typemustmatch name usemap form width height",[s,"param"].join(" ")),l("param","name value"),l("map","name",[s,"area"].join(" ")),l("area","alt coords shape href target rel media hreflang type"),l("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),l("colgroup","span","col"),l("col","span"),l("tbody thead tfoot","","tr"),l("tr","","td th"),l("td","colspan rowspan headers",s),l("th","colspan rowspan headers scope abbr",s),l("form","accept-charset action autocomplete enctype method name novalidate target",s),l("fieldset","disabled form name",[s,"legend"].join(" ")),l("label","form for",r),l("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),l("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?s:r),l("select","disabled form multiple name required size","option optgroup"),l("optgroup","disabled label","option"),l("option","disabled label selected value"),l("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),l("menu","type label",[s,"li"].join(" ")),l("noscript","",s),"html4"!==e&&(l("wbr"),l("ruby","",[r,"rt rp"].join(" ")),l("figcaption","",s),l("mark rt rp summary bdi","",r),l("canvas","width height",s),l("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[s,"track source"].join(" ")),l("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[s,"track source"].join(" ")),l("picture","","img source"),l("source","src srcset type media sizes"),l("track","kind src srclang label default"),l("datalist","",[r,"option"].join(" ")),l("article section nav aside main header footer","",s),l("hgroup","","h1 h2 h3 h4 h5 h6"),l("figure","",[s,"figcaption"].join(" ")),l("time","datetime",r),l("dialog","open",s),l("command","type label icon disabled checked radiogroup command"),l("output","for form name",r),l("progress","value max",r),l("meter","value min max low high optimum",r),l("details","open",[s,"summary"].join(" ")),l("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e&&(d("script","language xml:space"),d("style","xml:space"),d("object","declare classid code codebase codetype archive standby align border hspace vspace"),d("embed","align name hspace vspace"),d("param","valuetype type"),d("a","charset name rev shape coords"),d("br","clear"),d("applet","codebase archive code object alt name width height align hspace vspace"),d("img","name longdesc align border hspace vspace"),d("iframe","longdesc frameborder marginwidth marginheight scrolling align"),d("font basefont","size color face"),d("input","usemap align"),d("select"),d("textarea"),d("h1 h2 h3 h4 h5 h6 div p legend caption","align"),d("ul","type compact"),d("li","type"),d("ol dl menu dir","compact"),d("pre","width xml:space"),d("hr","align noshade size width"),d("isindex","prompt"),d("table","summary width frame rules cellspacing cellpadding align bgcolor"),d("col","width align char charoff valign"),d("colgroup","width align char charoff valign"),d("thead","align char charoff valign"),d("tr","align char charoff valign bgcolor"),d("th","axis align char charoff valign nowrap bgcolor width height"),d("form","accept"),d("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),d("tfoot","align char charoff valign"),d("tbody","align char charoff valign"),d("area","nohref"),d("body","background bgcolor text link vlink alink")),"html4"!==e&&(d("input button select textarea","autofocus"),d("input textarea","placeholder"),d("a","download"),d("link script img","crossorigin"),d("img","loading"),d("iframe","sandbox seamless allowfullscreen loading")),"html4"!==e&&$([t.video,t.audio],(e=>{delete e.children.audio,delete e.children.video})),Ss(Rs("a form meter progress dfn"),(e=>{t[e]&&delete t[e].children[e]})),delete t.caption.children.table,delete t.script,ws[e]=t,t)})(l);!1===e.verify_html&&(e.valid_elements="*[*]");const c=Ts(e.valid_styles),u=Ts(e.invalid_styles,"map"),m=Ts(e.valid_classes,"map"),f=i("whitespace_elements","pre script noscript style textarea video audio iframe object code"),g=i("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),p=i("void_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),h=i("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),b="td th iframe video audio object script code",v=i("non_empty_elements",b+" pre",p),y=i("move_caret_before_on_enter_elements",b+" table",p),C=i("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),w=i("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",C),x=i("text_inline_elements","span strong b em i font s strike u var cite dfn code mark q sup sub samp");Ss("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "),(e=>{a[e]=new RegExp("</"+e+"[^>]*>","gi")}));const k=e=>new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$"),S=e=>{let t,o,s,a,i,l,d,c,u,m,f,g,p,h,b,v,y,C;const w=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,x=/^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,S=/[*?+]/;if(e){const _=Rs(e,",");for(n["@"]&&(v=n["@"].attributes,y=n["@"].attributesOrder),t=0,o=_.length;t<o;t++)if(i=w.exec(_[t]),i){if(h=i[1],u=i[2],b=i[3],c=i[5],g={},p=[],l={attributes:g,attributesOrder:p},"#"===h&&(l.paddEmpty=!0),"-"===h&&(l.removeEmpty=!0),"!"===i[4]&&(l.removeEmptyAttrs=!0),v&&(fe(v,((e,t)=>{g[t]=e})),p.push.apply(p,y)),c)for(c=Rs(c,"|"),s=0,a=c.length;s<a;s++)if(i=x.exec(c[s]),i){if(d={},f=i[1],m=i[2].replace(/[\\:]:/g,":"),h=i[3],C=i[4],"!"===f&&(l.attributesRequired=l.attributesRequired||[],l.attributesRequired.push(m),d.required=!0),"-"===f){delete g[m],p.splice(Ns(p,m),1);continue}h&&("="===h&&(l.attributesDefault=l.attributesDefault||[],l.attributesDefault.push({name:m,value:C}),d.defaultValue=C),"~"===h&&(l.attributesForced=l.attributesForced||[],l.attributesForced.push({name:m,value:C}),d.forcedValue=C),"<"===h&&(d.validValues=ks(C,"?"))),S.test(m)?(l.attributePatterns=l.attributePatterns||[],d.pattern=k(m),l.attributePatterns.push(d)):(g[m]||p.push(m),g[m]=d)}v||"@"!==u||(v=g,y=p),b&&(l.outputName=u,n[b]=l),S.test(u)?(l.pattern=k(u),r.push(l)):n[u]=l}}},_=e=>{r=[],$(ue(n),(e=>{delete n[e]})),S(e),Ss(d,((e,t)=>{o[t]=e.children}))},E=e=>{const t=/^(~)?(.+)$/;e&&(ws.text_block_elements=ws.block_elements=null,Ss(Rs(e,","),(e=>{const r=t.exec(e),a="~"===r[1],i=a?"span":"div",l=r[2];if(o[l]=o[i],s[l]=i,v[l.toUpperCase()]={},v[l]={},a||(w[l.toUpperCase()]={},w[l]={}),!n[l]){let e=n[i];e=_s({},e),delete e.removeEmptyAttrs,delete e.removeEmpty,n[l]=e}Ss(o,((e,t)=>{e[i]&&(o[t]=e=_s({},o[t]),e[l]=e[i])}))})))},R=e=>{const t=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;ws[l]=null,e&&Ss(Rs(e,","),(e=>{const n=t.exec(e);let r,s;n&&(s=n[1],r=s?o[n[2]]:o[n[2]]={"#comment":{}},r=o[n[2]],Ss(Rs(n[3],"|"),(e=>{"-"===s?delete r[e]:r[e]={}})))}))},A=e=>{let t,o=n[e];if(o)return o;for(t=r.length;t--;)if(o=r[t],o.pattern.test(e))return o};e.valid_elements?_(e.valid_elements):(Ss(d,((e,t)=>{n[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},o[t]=e.children})),Ss(Rs("strong/b em/i"),(e=>{const t=Rs(e,"/");n[t[1]].outputName=t[0]})),Ss(x,((t,o)=>{n[o]&&(e.padd_empty_block_inline_children&&(n[o].paddInEmptyBlock=!0),n[o].removeEmpty=!0)})),Ss(Rs("ol ul blockquote a table tbody"),(e=>{n[e]&&(n[e].removeEmpty=!0)})),Ss(Rs("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),(e=>{n[e].paddEmpty=!0})),Ss(Rs("span"),(e=>{n[e].removeEmptyAttrs=!0}))),E(e.custom_elements),R(e.valid_children),S(e.extended_valid_elements),R("+ol[ul|ol],+ul[ul|ol]"),Ss({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},((e,t)=>{n[t]&&(n[t].parentsRequired=Rs(e))})),e.invalid_elements&&Ss(Es(e.invalid_elements),(e=>{n[e]&&delete n[e]})),A("span")||S("span[!data-mce-type|*]");const O=N(c),T=N(u),B=N(m),D=N(h),P=N(w),L=N(C),M=N(x),I=N(Object.seal(p)),F=N(g),U=N(v),z=N(y),j=N(f),V=N(Object.seal(a)),H=N(s);return{type:l,children:o,elements:n,getValidStyles:O,getValidClasses:B,getBlockElements:P,getInvalidStyles:T,getVoidElements:I,getTextBlockElements:L,getTextInlineElements:M,getBoolAttrs:D,getElementRule:A,getSelfClosingElements:F,getNonEmptyElements:U,getMoveCaretBeforeOnEnterElements:z,getWhitespaceElements:j,getSpecialElements:V,isValidChild:(e,t)=>{const n=o[e.toLowerCase()];return!(!n||!n[t.toLowerCase()])},isValid:(e,t)=>{let n,o;const r=A(e);if(r){if(!t)return!0;if(r.attributes[t])return!0;if(n=r.attributePatterns,n)for(o=n.length;o--;)if(n[o].pattern.test(t))return!0}return!1},getCustomElements:H,addValidElements:S,setValidElements:_,addCustomElements:E,addValidChildren:R}},Ds=(e,t)=>{const n=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,o=/\s*([^:]+):\s*([^;]+);?/g,r=/\s+$/;let s;const a={};let i,l;e=e||{},t&&(i=t.getValidStyles(),l=t.getInvalidStyles());const d="\\\" \\' \\; \\: ; : \ufeff".split(" ");for(s=0;s<d.length;s++)a[d[s]]="\ufeff"+s,a["\ufeff"+s]=d[s];const c={parse:t=>{const i={};let l,d,u,m;const f=e.url_converter,g=e.url_converter_scope||c,p=(e,t,n)=>{const o=i[e+"-top"+t];if(!o)return;const r=i[e+"-right"+t];if(!r)return;const a=i[e+"-bottom"+t];if(!a)return;const l=i[e+"-left"+t];if(!l)return;const d=[o,r,a,l];for(s=d.length-1;s--&&d[s]===d[s+1];);s>-1&&n||(i[e+t]=-1===s?d[0]:d.join(" "),delete i[e+"-top"+t],delete i[e+"-right"+t],delete i[e+"-bottom"+t],delete i[e+"-left"+t])},h=e=>{let t,n=i[e];if(n){for(n=n.split(" "),t=n.length;t--;)if(n[t]!==n[0])return!1;return i[e]=n[0],!0}},b=e=>(m=!0,a[e]),v=(e,t)=>(m&&(e=e.replace(/\uFEFF[0-9]/g,(e=>a[e]))),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e),y=e=>String.fromCharCode(parseInt(e.slice(1),16)),C=e=>e.replace(/\\[0-9a-f]+/gi,y),w=(t,n,o,r,s,a)=>{if(s=s||a)return"'"+(s=v(s)).replace(/\'/g,"\\'")+"'";if(n=v(n||o||r),!e.allow_script_urls){const t=n.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(t))return"";if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(t))return""}return f&&(n=f.call(g,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"};if(t){for(t=(t=t.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,b).replace(/\"[^\"]+\"|\'[^\']+\'/g,(e=>e.replace(/[;:]/g,b)));l=o.exec(t);)if(o.lastIndex=l.index+l[0].length,d=l[1].replace(r,"").toLowerCase(),u=l[2].replace(r,""),d&&u){if(d=C(d),u=C(u),-1!==d.indexOf("\ufeff")||-1!==d.indexOf('"'))continue;if(!e.allow_script_urls&&("behavior"===d||/expression\s*\(|\/\*|\*\//.test(u)))continue;"font-weight"===d&&"700"===u?u="bold":"color"!==d&&"background-color"!==d||(u=u.toLowerCase()),u=u.replace(n,w),i[d]=m?v(u,!0):u}p("border","",!0),p("border","-width"),p("border","-color"),p("border","-style"),p("padding",""),p("margin",""),"border",k="border-style",S="border-color",h(x="border-width")&&h(k)&&h(S)&&(i.border=i[x]+" "+i[k]+" "+i[S],delete i[x],delete i[k],delete i[S]),"medium none"===i.border&&delete i.border,"none"===i["border-image"]&&delete i["border-image"]}var x,k,S;return i},serialize:(e,t)=>{let n="";const o=t=>{let o;const r=i[t];if(r)for(let s=0,a=r.length;s<a;s++)t=r[s],o=e[t],o&&(n+=(n.length>0?" ":"")+t+": "+o+";")};return t&&i?(o("*"),o(t)):fe(e,((e,o)=>{!e||l&&!((e,t)=>{let n=l["*"];return!(n&&n[e]||(n=l[t],n&&n[e]))})(o,t)||(n+=(n.length>0?" ":"")+o+": "+e+";")})),n}};return c},Ps={keyLocation:!0,layerX:!0,layerY:!0,returnValue:!0,webkitMovementX:!0,webkitMovementY:!0,keyIdentifier:!0,mozPressure:!0},Ls=(e,t)=>{const n=null!=t?t:{};for(const t in e)xe(Ps,t)||(n[t]=e[t]);return C(n.composedPath)&&(n.composedPath=()=>e.composedPath()),n},Ms=(e,t,n,o)=>{var r;const s=Ls(t,o);return s.type=e,y(s.target)&&(s.target=null!==(r=s.srcElement)&&void 0!==r?r:n),(e=>y(e.preventDefault)||(e=>e instanceof Event||w(e.initEvent))(e))(t)&&(s.preventDefault=()=>{s.defaultPrevented=!0,s.isDefaultPrevented=L,w(t.preventDefault)&&t.preventDefault()},s.stopPropagation=()=>{s.cancelBubble=!0,s.isPropagationStopped=L,w(t.stopPropagation)&&t.stopPropagation()},s.stopImmediatePropagation=()=>{s.isImmediatePropagationStopped=L,s.stopPropagation()},(e=>e.isDefaultPrevented===L||e.isDefaultPrevented===P)(s)||(s.isDefaultPrevented=!0===s.defaultPrevented?L:P,s.isPropagationStopped=!0===s.cancelBubble?L:P,s.isImmediatePropagationStopped=P)),s},Is=/^(?:mouse|contextmenu)|click/,Fs=(e,t,n,o)=>{e.addEventListener?e.addEventListener(t,n,o||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Us=(e,t,n,o)=>{e.removeEventListener?e.removeEventListener(t,n,o||!1):e.detachEvent&&e.detachEvent("on"+t,n)},zs=(e,t)=>{const n=Ms(e.type,e,document,t);if((e=>C(e)&&Is.test(e.type))(e)&&v(e.pageX)&&!v(e.clientX)){const t=n.target.ownerDocument||document,o=t.documentElement,r=t.body,s=n;s.pageX=e.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),s.pageY=e.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)}return n},js=(e,t,n)=>{const o=e.document,r={type:"ready"};if(n.domLoaded)return void t(r);const s=()=>{Us(e,"DOMContentLoaded",s),Us(e,"load",s),n.domLoaded||(n.domLoaded=!0,t(r)),e=null};"complete"===o.readyState||"interactive"===o.readyState&&o.body?s():Fs(e,"DOMContentLoaded",s),n.domLoaded||Fs(e,"load",s)};class Vs{constructor(){this.domLoaded=!1,this.events={},this.count=1,this.expando="mce-data-"+(+new Date).toString(32),this.hasMouseEnterLeave="onmouseenter"in document.documentElement,this.hasFocusIn="onfocusin"in document.documentElement,this.count=1}bind(e,t,n,o){const r=this;let s,a,i,l,d,c,u;const m=window,f=e=>{r.executeHandlers(zs(e||m.event),s)};if(!e||3===e.nodeType||8===e.nodeType)return;e[r.expando]?s=e[r.expando]:(s=r.count++,e[r.expando]=s,r.events[s]={}),o=o||e;const g=t.split(" ");for(i=g.length;i--;)l=g[i],c=f,d=u=!1,"DOMContentLoaded"===l&&(l="ready"),r.domLoaded&&"ready"===l&&"complete"===e.readyState?n.call(o,zs({type:l})):(r.hasMouseEnterLeave||(d=r.mouseEnterLeave[l],d&&(c=e=>{const t=e.currentTarget;let n=e.relatedTarget;if(n&&t.contains)n=t.contains(n);else for(;n&&n!==t;)n=n.parentNode;n||((e=zs(e||m.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,r.executeHandlers(e,s))})),r.hasFocusIn||"focusin"!==l&&"focusout"!==l||(u=!0,d="focusin"===l?"focus":"blur",c=e=>{(e=zs(e||m.event)).type="focus"===e.type?"focusin":"focusout",r.executeHandlers(e,s)}),a=r.events[s][l],a?"ready"===l&&r.domLoaded?n(zs({type:l})):a.push({func:n,scope:o}):(r.events[s][l]=a=[{func:n,scope:o}],a.fakeName=d,a.capture=u,a.nativeHandler=c,"ready"===l?js(e,c,r):Fs(e,d||l,c,u)));return e=a=null,n}unbind(e,t,n){let o,r,s,a,i;if(!e||3===e.nodeType||8===e.nodeType)return this;const l=e[this.expando];if(l){if(i=this.events[l],t){const l=t.split(" ");for(r=l.length;r--;)if(a=l[r],o=i[a],o){if(n)for(s=o.length;s--;)if(o[s].func===n){const e=o.nativeHandler,t=o.fakeName,n=o.capture;o=o.slice(0,s).concat(o.slice(s+1)),o.nativeHandler=e,o.fakeName=t,o.capture=n,i[a]=o}n&&0!==o.length||(delete i[a],Us(e,o.fakeName||a,o.nativeHandler,o.capture))}}else fe(i,((t,n)=>{Us(e,t.fakeName||n,t.nativeHandler,t.capture)})),i={};for(a in i)if(xe(i,a))return this;delete this.events[l];try{delete e[this.expando]}catch(t){e[this.expando]=null}}return this}fire(e,t,n){return this.dispatch(e,t,n)}dispatch(e,t,n){let o;if(!e||3===e.nodeType||8===e.nodeType)return this;const r=zs({type:t,target:e},n);do{o=e[this.expando],o&&this.executeHandlers(r,o),e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow}while(e&&!r.isPropagationStopped());return this}clean(e){let t,n;if(!e||3===e.nodeType||8===e.nodeType)return this;if(e[this.expando]&&this.unbind(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(this.unbind(e),n=e.getElementsByTagName("*"),t=n.length;t--;)(e=n[t])[this.expando]&&this.unbind(e);return this}destroy(){this.events={}}cancel(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}executeHandlers(e,t){const n=this.events[t],o=n&&n[e.type];if(o)for(let t=0,n=o.length;t<n;t++){const n=o[t];if(n&&!1===n.func.call(n.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return}}}Vs.Event=new Vs;const Hs=Bt.each,$s=Bt.grep,qs="data-mce-style",Ws=(e,t,n)=>{y(n)||""===n?Xt(e,t):qt(e,t,n)},Ks=(e,t)=>{const n=Kt(t,"style"),o=e.serialize(e.parse(n),Mt(t));Ws(t,qs,o)},Gs=(e,t)=>{let n,o,r=0;if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)o=e.nodeType,(!t||3!==o||o!==n&&e.nodeValue.length)&&(r++,n=o);return r},Ys=Bt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom"," "),Xs=e=>e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),Qs=(e,t={})=>{const n={},o=window,r={};let s=0;const a=Xo.forElement(fn(e),{contentCssCors:t.contentCssCors,referrerPolicy:t.referrerPolicy}),i=[],l=t.schema?t.schema:Bs({}),d=Ds({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),c=t.ownEvents?new Vs:Vs.Event,u=l.getBlockElements(),g=t=>t&&e&&m(t)?e.getElementById(t):t,h=e=>{const t=g(e);return C(t)?fn(t):null},b=(e,t,n)=>{let o;const r=h(e);if(C(r)&&Ut(r)){const e=J[t];o=e&&e.get?e.get(r.dom,t):Kt(r,t)}return C(o)?o:null!=n?n:""},v=e=>{const t=g(e);return y(t)?[]:t.attributes},k=(e,n,o)=>{P(e,(e=>{if(Co(e)){const r=fn(e);""===o&&(o=null);const s=Kt(r,n),a=J[n];a&&a.set?a.set(r.dom,o,n):Ws(r,n,o),s!==o&&t.onSetAttrib&&t.onSetAttrib({attrElm:r,attrName:n,attrValue:o})}}))},_=()=>t.root_element||e.body,E=(t,n)=>((e,t,n)=>{let o=0,r=0;const s=e.ownerDocument;if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===qn(fn(e),"position")){const n=t.getBoundingClientRect();return o=n.left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,r=n.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop,{x:o,y:r}}let a=t;for(;a&&a!==n&&a.nodeType&&!Vo(a,n);){const e=a;o+=e.offsetLeft||0,r+=e.offsetTop||0,a=e.offsetParent}for(a=t.parentNode;a&&a!==n&&a.nodeType&&!Vo(a,n);)o-=a.scrollLeft||0,r-=a.scrollTop||0,a=a.parentNode;r+=(e=>zo.isFirefox()&&"table"===Mt(e)?jo(Rn(e)).filter((e=>"caption"===Mt(e))).bind((e=>jo(Nn(e)).map((t=>{const n=t.dom.offsetTop,o=e.dom.offsetTop,r=e.dom.offsetHeight;return n<=o?-r:0})))).getOr(0):0)(fn(t))}return{x:o,y:r}})(e.body,g(t),n),R=(e,n,o)=>{const r=(e,t)=>m(e)?e:x(e)?xe(Ys,t)?e+"":e+"px":ge(e,r),s=(e,t,n)=>{const o=Xs(t);y(n)||""===n?Yn(e,o):Hn(e,o,r(n,o))};P(e,(e=>{const r=fn(e);m(n)?s(r,n,o):fe(n,((e,t)=>{s(r,t,e)})),t.update_styles&&Ks(d,r)}))},A=(e,t,n)=>{const o=g(e);if(!y(o)&&Co(o))return n?qn(fn(o),Xs(t)):("float"===(t=t.replace(/-(\D)/g,((e,t)=>t.toUpperCase())))&&(t="cssFloat"),o.style?o.style[t]:void 0)},O=e=>{let t,n;const o=g(e);return t=A(o,"width"),n=A(o,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||o.offsetWidth||o.clientWidth,h:parseInt(n,10)||o.offsetHeight||o.clientHeight}},T=(e,t)=>{if(!e)return!1;const n=p(e)?e:[e];return V(n,(e=>hn(fn(e),t)))},B=(e,t,n,o)=>{const r=[];let s,a=g(e);for(o=void 0===o,n=n||("BODY"!==_().nodeName?_().parentNode:null),m(t)&&(s=t,t="*"===t?Co:e=>T(e,s));a&&!(a===n||y(a.nodeType)||Bo(a)||Do(a));){if(!t||t(a)){if(!o)return[a];r.push(a)}a=a.parentNode}return o?r:null},D=(e,t,n)=>{let o=t;if(e)for(m(t)&&(o=e=>T(e,t)),e=e[n];e;e=e[n])if(w(o)&&o(e))return e;return null},P=function(e,t,n){const o=null!=n?n:this,r=m(e)?g(e):e;if(!r)return!1;if(p(r)&&(r.length||0===r.length)){const e=[];return Hs(r,((n,r)=>{n&&e.push(t.call(o,m(n)?g(n):n,r))})),e}return t.call(o,r)},L=(e,t)=>{P(e,(e=>{fe(t,((t,n)=>{k(e,n,t)}))}))},M=(e,t)=>{P(e,(e=>{const n=fn(e);so(n,t)}))},I=(t,n,o,r,s)=>P(t,(t=>{const a=m(n)?e.createElement(n):n;return C(o)&&L(a,o),r&&(!m(r)&&r.nodeType?a.appendChild(r):m(r)&&M(a,r)),s?a:t.appendChild(a)})),F=(t,n,o)=>I(e.createElement(t),t,n,o,!0),U=Cs.encodeAllRaw,z=(e,t)=>P(e,(e=>{const n=fn(e);return t&&$(Rn(n),(e=>{zt(e)&&0===e.dom.length?no(e):Xn(n,e)})),no(n),n.dom})),H=(e,t,n)=>{P(e,(e=>{if(Co(e)){const o=fn(e),r=t.split(" ");$(r,(e=>{C(n)?(n?on:sn)(o,e):((e,t)=>{const n=Zt(e)?e.dom.classList.toggle(t):((e,t)=>j(en(e),t)?nn(e,t):tn(e,t))(e,t);rn(e)})(o,e)}))}}))},q=(e,t,n)=>P(t,(t=>(p(t)&&(e=e.cloneNode(!0)),n&&Hs($s(t.childNodes),(t=>{e.appendChild(t)})),t.parentNode.replaceChild(e,t)))),W=e=>{if(Co(e)){const t="a"===e.nodeName.toLowerCase()&&!b(e,"href")&&b(e,"id");if(b(e,"name")||b(e,"data-mce-bookmark")||t)return!0}return!1},K=()=>e.createRange(),G=(n,r,s,a)=>{if(p(n)){let e=n.length;const t=[];for(;e--;)t[e]=G(n[e],r,s,a);return t}return!t.collect||n!==e&&n!==o||i.push([n,r,s,a]),c.bind(n,r,s,a||Q)},Y=(t,n,r)=>{if(p(t)){let e=t.length;const o=[];for(;e--;)o[e]=Y(t[e],n,r);return o}if(i.length>0&&(t===e||t===o)){let e=i.length;for(;e--;){const o=i[e];t!==o[0]||n&&n!==o[1]||r&&r!==o[2]||c.unbind(o[0],o[1],o[2])}}return c.unbind(t,n,r)},X=e=>{if(e&&Co(e)){const t=e.getAttribute("data-mce-contenteditable");return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},Q={doc:e,settings:t,win:o,files:r,stdMode:!0,boxModel:!0,styleSheetLoader:a,boundEvents:i,styles:d,schema:l,events:c,isBlock:e=>m(e)?xe(u,e):Co(e)&&xe(u,e.nodeName),root:null,clone:(e,t)=>e.cloneNode(t),getRoot:_,getViewPort:e=>{const t=bo(e);return{x:t.x,y:t.y,w:t.width,h:t.height}},getRect:e=>{const t=g(e),n=E(t),o=O(t);return{x:n.x,y:n.y,w:o.w,h:o.h}},getSize:O,getParent:(e,t,n)=>{const o=B(e,t,n,!1);return o&&o.length>0?o[0]:null},getParents:B,get:g,getNext:(e,t)=>D(e,t,"nextSibling"),getPrev:(e,t)=>D(e,t,"previousSibling"),select:(n,o)=>{var r,s;const a=null!==(s=null!==(r=g(o))&&void 0!==r?r:t.root_element)&&void 0!==s?s:e;return de(a.querySelectorAll(n))},is:T,add:I,create:F,createHTML:(e,t,n="")=>{let o,r="";for(o in r+="<"+e,t)ke(t,o)&&(r+=" "+o+'="'+U(t[o])+'"');return Ke(n)&&xe(l.getVoidElements(),e)?r+" />":r+">"+n+"</"+e+">"},createFragment:t=>{let n;const o=e.createElement("div"),r=e.createDocumentFragment();for(r.appendChild(o),t&&(o.innerHTML=t);n=o.firstChild;)r.appendChild(n);return r.removeChild(o),r},remove:z,setStyle:R,getStyle:A,setStyles:(e,t)=>{R(e,t)},removeAllAttribs:e=>P(e,(e=>{const t=e.attributes;for(let n=t.length-1;n>=0;n--)e.removeAttributeNode(t.item(n))})),setAttrib:k,setAttribs:L,getAttrib:b,getPos:E,parseStyle:e=>d.parse(e),serializeStyle:(e,t)=>d.serialize(e,t),addStyle:t=>{let o,r;if(Q!==Qs.DOM&&e===document){if(n[t])return;n[t]=!0}r=e.getElementById("mceDefaultStyles"),r||(r=e.createElement("style"),r.id="mceDefaultStyles",r.type="text/css",o=e.getElementsByTagName("head")[0],o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r)),r.styleSheet?r.styleSheet.cssText+=t:r.appendChild(e.createTextNode(t))},loadCSS:e=>{e||(e=""),$(e.split(","),(e=>{r[e]=!0,a.load(e).catch(S)}))},addClass:(e,t)=>{H(e,t,!0)},removeClass:(e,t)=>{H(e,t,!1)},hasClass:(e,t)=>{const n=h(e),o=t.split(" ");return te(o,(e=>an(n,e)))},toggleClass:H,show:e=>{P(e,(e=>Yn(fn(e),"display")))},hide:e=>{P(e,(e=>Hn(fn(e),"display","none")))},isHidden:e=>{const t=h(e);return Dt(Kn(t,"display"),"none")},uniqueId:e=>(e||"mce_")+s++,setHTML:M,getOuterHTML:e=>{const t=h(e);return Co(t.dom)?t.dom.outerHTML:(e=>{const t=un("div"),n=fn(e.dom.cloneNode(!0));return Zn(t,n),ro(t)})(t)},setOuterHTML:(e,t)=>{P(e,(e=>{Co(e)&&(e.outerHTML=t)}))},decode:Cs.decode,encode:U,insertAfter:(e,t)=>{const n=g(t);return P(e,(e=>{const t=n.parentNode,o=n.nextSibling;return o?t.insertBefore(e,o):t.appendChild(e),e}))},replace:q,rename:(e,t)=>{let n;return e.nodeName!==t.toUpperCase()&&(n=F(t),Hs(v(e),(t=>{k(n,t.nodeName,b(e,t.nodeName))})),q(n,e,!0)),n||e},findCommonAncestor:(e,t)=>{let n,o=e;for(;o;){for(n=t;n&&o!==n;)n=n.parentNode;if(o===n)break;o=o.parentNode}return!o&&e.ownerDocument?e.ownerDocument.documentElement:o},run:P,getAttribs:v,isEmpty:(e,t)=>{let n,o,r=0;if(W(e))return!1;if(e=e.firstChild){const s=new Qo(e,e.parentNode),a=l?l.getWhitespaceElements():{};t=t||(l?l.getNonEmptyElements():null);do{if(n=e.nodeType,Co(e)){const n=e.getAttribute("data-mce-bogus");if(n){e=s.next("all"===n);continue}if(o=e.nodeName.toLowerCase(),t&&t[o]){if("br"===o){r++,e=s.next();continue}return!1}if(W(e))return!1}if(8===n)return!1;if(3===n&&!Xr(e.nodeValue))return!1;if(3===n&&e.parentNode&&a[e.parentNode.nodeName]&&Xr(e.nodeValue))return!1;e=s.next()}while(e)}return r<=1},createRng:K,nodeIndex:Gs,split:(e,t,n)=>{let o,r,s,a=K();if(e&&t)return a.setStart(e.parentNode,Gs(e)),a.setEnd(t.parentNode,Gs(t)),o=a.extractContents(),a=K(),a.setStart(t.parentNode,Gs(t)+1),a.setEnd(e.parentNode,Gs(e)+1),r=a.extractContents(),s=e.parentNode,s.insertBefore(as(Q,o),e),n?s.insertBefore(n,e):s.insertBefore(t,e),s.insertBefore(as(Q,r),e),z(e),n||t},bind:G,unbind:Y,fire:(e,t,n)=>c.dispatch(e,t,n),dispatch:(e,t,n)=>c.dispatch(e,t,n),getContentEditable:X,getContentEditableParent:e=>{const t=_();let n=null;for(;e&&e!==t&&(n=X(e),null===n);e=e.parentNode);return n},destroy:()=>{if(i.length>0){let e=i.length;for(;e--;){const t=i[e];c.unbind(t[0],t[1],t[2])}}fe(r,((e,t)=>{a.unload(t),delete r[t]}))},isChildOf:(e,t)=>e===t||t.contains(e),dumpRng:e=>"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset},J=((e,t,n)=>{const o=t.keep_values,r={set:(e,o,r)=>{const s=fn(e);w(t.url_converter)&&C(o)&&(o=t.url_converter.call(t.url_converter_scope||n(),o,r,e[0])),Ws(s,"data-mce-"+r,o),Ws(s,r,o)},get:(e,t)=>{const n=fn(e);return Kt(n,"data-mce-"+t)||Kt(n,t)}},s={style:{set:(t,n)=>{const r=fn(t);f(n)?$n(r,n):(o&&Ws(r,qs,n),Xt(r,"style"),m(n)&&$n(r,e.parse(n)))},get:t=>{const n=fn(t),o=Kt(n,qs)||Kt(n,"style");return e.serialize(e.parse(o),Mt(n))}}};return o&&(s.href=s.src=r),s})(d,t,N(Q));return Q};Qs.DOM=Qs(document),Qs.nodeIndex=Gs;const Js=Qs.DOM;class Zs{constructor(e={}){this.states={},this.queue=[],this.scriptLoadedCallbacks={},this.queueLoadedCallbacks=[],this.loading=!1,this.settings=e}_setReferrerPolicy(e){this.settings.referrerPolicy=e}loadScript(e){return new Promise(((t,n)=>{const o=Js;let r;const s=()=>{o.remove(a),r&&(r.onerror=r.onload=r=null)},a=o.uniqueId();r=document.createElement("script"),r.id=a,r.type="text/javascript",r.src=Bt._addCacheSuffix(e),this.settings.referrerPolicy&&o.setAttrib(r,"referrerpolicy",this.settings.referrerPolicy),r.onload=()=>{s(),t()},r.onerror=()=>{s(),n("Failed to load script: "+e)},(document.getElementsByTagName("head")[0]||document.body).appendChild(r)}))}isDone(e){return 2===this.states[e]}markDone(e){this.states[e]=2}add(e){const t=this;return t.queue.push(e),void 0===t.states[e]&&(t.states[e]=0),new Promise(((n,o)=>{t.scriptLoadedCallbacks[e]||(t.scriptLoadedCallbacks[e]=[]),t.scriptLoadedCallbacks[e].push({resolve:n,reject:o})}))}load(e){return this.add(e)}remove(e){delete this.states[e],delete this.scriptLoadedCallbacks[e]}loadQueue(){const e=this.queue;return this.queue=[],this.loadScripts(e)}loadScripts(e){const t=this,n=(e,n)=>{we(t.scriptLoadedCallbacks,n).each((t=>{$(t,(t=>t[e](n)))})),delete t.scriptLoadedCallbacks[n]},o=e=>{const t=K(e,(e=>"rejected"===e.status));return t.length>0?Promise.reject(ee(t,(({reason:e})=>p(e)?e:[e]))):Promise.resolve()},r=e=>Promise.allSettled(H(e,(e=>2===t.states[e]?(n("resolve",e),Promise.resolve()):3===t.states[e]?(n("reject",e),Promise.reject(e)):(t.states[e]=1,t.loadScript(e).then((()=>{t.states[e]=2,n("resolve",e);const s=t.queue;if(s.length>0)return t.queue=[],r(s).then(o)}),(()=>(t.states[e]=3,n("reject",e),Promise.reject(e)))))))),s=e=>(t.loading=!0,r(e).then((e=>{t.loading=!1;const n=t.queueLoadedCallbacks.shift();return M.from(n).each(D),o(e)}))),a=Se(e);return t.loading?new Promise(((e,n)=>{t.queueLoadedCallbacks.push((()=>s(a).then(e,n)))})):s(a)}}Zs.ScriptLoader=new Zs;const ea=e=>{let t=e;return{get:()=>t,set:e=>{t=e}}},ta={},na=ea("en"),oa=()=>we(ta,na.get()),ra={getData:()=>ge(ta,(e=>({...e}))),setCode:e=>{e&&na.set(e)},getCode:()=>na.get(),add:(e,t)=>{let n=ta[e];n||(ta[e]=n={}),fe(t,((e,t)=>{n[t.toLowerCase()]=e}))},translate:e=>{const t=oa().getOr({}),n=e=>w(e)?Object.prototype.toString.call(e):o(e)?"":""+e,o=e=>""===e||null==e,r=e=>{const o=n(e);return we(t,o.toLowerCase()).map(n).getOr(o)},s=e=>e.replace(/{context:\w+}$/,"");if(o(e))return"";if(f(a=e)&&xe(a,"raw"))return n(e.raw);var a;if((e=>p(e)&&e.length>1)(e)){const t=e.slice(1);return s(r(e[0]).replace(/\{([0-9]+)\}/g,((e,o)=>xe(t,o)?n(t[o]):e)))}return s(r(e))},isRtl:()=>oa().bind((e=>we(e,"_dir"))).exists((e=>"rtl"===e)),hasCode:e=>xe(ta,e)},sa=()=>{const e=[],t={},n={},o=[],r=(e,t)=>{const n=K(o,(n=>n.name===e&&n.state===t));$(n,(e=>e.resolve()))},s=e=>xe(t,e),a=(e,n)=>{const o=ra.getCode();!o||n&&-1===(","+(n||"")+",").indexOf(","+o+",")||Zs.ScriptLoader.add(t[e]+"/langs/"+o+".js")},i=(e,t="added")=>"added"===t&&(e=>xe(n,e))(e)||"loaded"===t&&s(e)?Promise.resolve():new Promise((n=>{o.push({name:e,state:t,resolve:n})}));return{items:e,urls:t,lookup:n,get:e=>{if(n[e])return n[e].instance},requireLangPack:(e,t)=>{!1!==sa.languageLoad&&(s(e)?a(e,t):i(e,"loaded").then((()=>a(e,t))))},add:(t,o)=>(e.push(o),n[t]={instance:o},r(t,"added"),o),remove:e=>{delete t[e],delete n[e]},createUrl:(e,t)=>m(t)?m(e)?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}:t,load:(e,o)=>{if(t[e])return Promise.resolve();let s=m(o)?o:o.prefix+o.resource+o.suffix;0!==s.indexOf("/")&&-1===s.indexOf("://")&&(s=sa.baseURL+"/"+s),t[e]=s.substring(0,s.lastIndexOf("/"));const a=()=>(r(e,"loaded"),Promise.resolve());return n[e]?a():Zs.ScriptLoader.add(s).then(a)},waitFor:i}};sa.languageLoad=!0,sa.baseURL="",sa.PluginManager=sa(),sa.ThemeManager=sa(),sa.ModelManager=sa();const aa=()=>{const e=(e=>{const t=ea(M.none()),n=()=>t.get().each(e);return{clear:()=>{n(),t.set(M.none())},isSet:()=>t.get().isSome(),get:()=>t.get(),set:e=>{n(),t.set(M.some(e))}}})(S);return{...e,on:t=>e.get().each(t)}},ia=(e,t)=>{let n=null;return{cancel:()=>{h(n)||(clearTimeout(n),n=null)},throttle:(...o)=>{h(n)&&(n=setTimeout((()=>{n=null,e.apply(null,o)}),t))}}},la=(e,t)=>{let n=null;const o=()=>{h(n)||(clearTimeout(n),n=null)};return{cancel:o,throttle:(...r)=>{o(),n=setTimeout((()=>{n=null,e.apply(null,r)}),t)}}},da=N("mce-annotation"),ca=N("data-mce-annotation"),ua=N("data-mce-annotation-uid"),ma=N("data-mce-annotation-active"),fa=N("data-mce-annotation-classes"),ga=N("data-mce-annotation-attrs"),pa=e=>t=>vn(t,e),ha=(e,t)=>{const n=e.selection.getRng(),o=fn(n.startContainer),r=fn(e.getBody()),s=t.fold((()=>"."+da()),(e=>`[${ca()}="${e}"]`)),a=An(o,n.startOffset).getOr(o),i=Go(a,s,pa(r)),l=(e,t)=>Yt(e,t)?M.some(Kt(e,t)):M.none();return i.bind((t=>l(t,`${ua()}`).bind((n=>l(t,`${ca()}`).map((t=>{const o=va(e,n);return{uid:n,name:t,elements:o}}))))))},ba=(e,t)=>Yt(e,"data-mce-bogus")||ur(e,'[data-mce-bogus="all"]',pa(t)),va=(e,t)=>{const n=fn(e.getBody()),o=hr(n,`[${ua()}="${t}"]`);return K(o,(e=>!ba(e,n)))},ya=(e,t)=>{const n=fn(e.getBody()),o=hr(n,`[${ca()}="${t}"]`),r={};return $(o,(e=>{if(!ba(e,n)){const t=Kt(e,ua()),n=we(r,t).getOr([]);r[t]=n.concat([e])}})),r};let Ca=0;const wa=e=>{const t=(new Date).getTime(),n=Math.floor(1e9*Math.random());return Ca++,e+"_"+n+Ca+String(t)},xa=(e,t)=>fn(e.dom.cloneNode(t)),ka=e=>xa(e,!1),Sa=e=>xa(e,!0),_a=(e,t,n=P)=>{const o=new Qo(e,t),r=e=>{let t;do{t=o[e]()}while(t&&!Ro(t)&&!n(t));return M.from(t).filter(Ro)};return{current:()=>M.from(o.current()).filter(Ro),next:()=>r("next"),prev:()=>r("prev"),prev2:()=>r("prev2")}},Ea=(e,t)=>{const n=t||(t=>e.isBlock(t)||Po(t)||Io(t)),o=(e,t,n,r)=>{if(Ro(e)){const n=r(e,t,e.data);if(-1!==n)return M.some({container:e,offset:n})}return n().bind((e=>o(e.container,e.offset,n,r)))};return{backwards:(e,t,r,s)=>{const a=_a(e,s,n);return o(e,t,(()=>a.prev().map((e=>({container:e,offset:e.length})))),r).getOrNull()},forwards:(e,t,r,s)=>{const a=_a(e,s,n);return o(e,t,(()=>a.next().map((e=>({container:e,offset:0})))),r).getOrNull()}}},Na=Math.round,Ra=e=>e?{left:Na(e.left),top:Na(e.top),bottom:Na(e.bottom),right:Na(e.right),width:Na(e.width),height:Na(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0},Aa=(e,t)=>(e=Ra(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e),Oa=(e,t,n)=>e>=0&&e<=Math.min(t.height,n.height)/2,Ta=(e,t)=>{const n=Math.min(t.height/2,e.height/2);return e.bottom-n<t.top||!(e.top>t.bottom)&&Oa(t.top-e.bottom,e,t)},Ba=(e,t)=>e.top>t.bottom||!(e.bottom<t.top)&&Oa(t.bottom-e.top,e,t),Da=(e,t,n)=>{const o=Math.max(Math.min(t,e.left+e.width),e.left),r=Math.max(Math.min(n,e.top+e.height),e.top);return Math.sqrt((t-o)*(t-o)+(n-r)*(n-r))},Pa=e=>{const t=e.startContainer,n=e.startOffset;return t===e.endContainer&&t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},La=(e,t)=>{if(Co(e)&&e.hasChildNodes()){const n=e.childNodes,o=((e,t,n)=>Math.min(Math.max(e,0),n))(t,0,n.length-1);return n[o]}return e},Ma=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),Ia=e=>"string"==typeof e&&e.charCodeAt(0)>=768&&Ma.test(e),Fa=Co,Ua=Wr,za=xo("display","block table"),ja=xo("float","left right"),Va=((...e)=>t=>{for(let n=0;n<e.length;n++)if(!e[n](t))return!1;return!0})(Fa,Ua,T(ja)),Ha=T(xo("white-space","pre pre-line pre-wrap")),$a=Ro,qa=Po,Wa=Qs.nodeIndex,Ka=(e,t)=>t<0&&Co(e)&&e.hasChildNodes()?void 0:La(e,t),Ga=e=>"createRange"in e?e.createRange():Qs.DOM.createRng(),Ya=e=>e&&/[\r\n\t ]/.test(e),Xa=e=>!!e.setStart&&!!e.setEnd,Qa=e=>{const t=e.startContainer,n=e.startOffset;if(Ya(e.toString())&&Ha(t.parentNode)&&Ro(t)){const e=t.data;if(Ya(e[n-1])||Ya(e[n+1]))return!0}return!1},Ja=e=>0===e.left&&0===e.right&&0===e.top&&0===e.bottom,Za=e=>{let t;const n=e.getClientRects();return t=n.length>0?Ra(n[0]):Ra(e.getBoundingClientRect()),!Xa(e)&&qa(e)&&Ja(t)?(e=>{const t=e.ownerDocument,n=Ga(t),o=t.createTextNode(fr),r=e.parentNode;r.insertBefore(o,e),n.setStart(o,0),n.setEnd(o,1);const s=Ra(n.getBoundingClientRect());return r.removeChild(o),s})(e):Ja(t)&&Xa(e)?(e=>{const t=e.startContainer,n=e.endContainer,o=e.startOffset,r=e.endOffset;if(t===n&&Ro(n)&&0===o&&1===r){const t=e.cloneRange();return t.setEndAfter(n),Za(t)}return null})(e):t},ei=(e,t)=>{const n=Aa(e,t);return n.width=1,n.right=n.left+1,n},ti=(e,t,n)=>{const o=()=>(n||(n=(e=>{const t=[],n=e=>{var n,o;0!==e.height&&(t.length>0&&(n=e,o=t[t.length-1],n.left===o.left&&n.top===o.top&&n.bottom===o.bottom&&n.right===o.right)||t.push(e))},o=(e,o)=>{const r=Ga(e.ownerDocument);if(o<e.data.length){if(Ia(e.data[o]))return t;if(Ia(e.data[o-1])&&(r.setStart(e,o),r.setEnd(e,o+1),!Qa(r)))return n(ei(Za(r),!1)),t}o>0&&(r.setStart(e,o-1),r.setEnd(e,o),Qa(r)||n(ei(Za(r),!1))),o<e.data.length&&(r.setStart(e,o),r.setEnd(e,o+1),Qa(r)||n(ei(Za(r),!0)))},r=e.container(),s=e.offset();if($a(r))return o(r,s),t;if(Fa(r))if(e.isAtEnd()){const e=Ka(r,s);$a(e)&&o(e,e.data.length),Va(e)&&!qa(e)&&n(ei(Za(e),!1))}else{const a=Ka(r,s);if($a(a)&&o(a,0),Va(a)&&e.isAtEnd())return n(ei(Za(a),!1)),t;const i=Ka(e.container(),e.offset()-1);Va(i)&&!qa(i)&&(za(i)||za(a)||!Va(a))&&n(ei(Za(i),!1)),Va(a)&&n(ei(Za(a),!0))}return t})(ti(e,t))),n);return{container:N(e),offset:N(t),toRange:()=>{const n=Ga(e.ownerDocument);return n.setStart(e,t),n.setEnd(e,t),n},getClientRects:o,isVisible:()=>o().length>0,isAtStart:()=>($a(e),0===t),isAtEnd:()=>$a(e)?t>=e.data.length:t>=e.childNodes.length,isEqual:n=>n&&e===n.container()&&t===n.offset(),getNode:n=>Ka(e,n?t-1:t)}};ti.fromRangeStart=e=>ti(e.startContainer,e.startOffset),ti.fromRangeEnd=e=>ti(e.endContainer,e.endOffset),ti.after=e=>ti(e.parentNode,Wa(e)+1),ti.before=e=>ti(e.parentNode,Wa(e)),ti.isAbove=(e,t)=>Pt(ie(t.getClientRects()),le(e.getClientRects()),Ta).getOr(!1),ti.isBelow=(e,t)=>Pt(le(t.getClientRects()),ie(e.getClientRects()),Ba).getOr(!1),ti.isAtStart=e=>!!e&&e.isAtStart(),ti.isAtEnd=e=>!!e&&e.isAtEnd(),ti.isTextPosition=e=>!!e&&Ro(e.container()),ti.isElementPosition=e=>!1===ti.isTextPosition(e);const ni=(e,t)=>{Ro(t)&&0===t.data.length&&e.remove(t)},oi=(e,t,n)=>{Do(n)?((e,t,n)=>{const o=M.from(n.firstChild),r=M.from(n.lastChild);t.insertNode(n),o.each((t=>ni(e,t.previousSibling))),r.each((t=>ni(e,t.nextSibling)))})(e,t,n):((e,t,n)=>{t.insertNode(n),ni(e,n.previousSibling),ni(e,n.nextSibling)})(e,t,n)},ri=Ro,si=So,ai=Qs.nodeIndex,ii=e=>{const t=e.parentNode;return si(t)?ii(t):t},li=e=>e?Oe(e.childNodes,((e,t)=>(si(t)&&"BR"!==t.nodeName?e=e.concat(li(t)):e.push(t),e)),[]):[],di=e=>t=>e===t,ci=e=>{let t;return t=ri(e)?"text()":e.nodeName.toLowerCase(),t+"["+(e=>{let t,n;t=li(ii(e)),n=Te(t,di(e),e),t=t.slice(0,n+1);const o=Oe(t,((e,n,o)=>(ri(n)&&ri(t[o-1])&&e++,e)),0);return t=Re(t,wo([e.nodeName])),n=Te(t,di(e),e),n-o})(e)+"]"},ui=(e,t)=>{let n,o,r,s,a,i=[];return n=t.container(),o=t.offset(),ri(n)?r=((e,t)=>{for(;(e=e.previousSibling)&&ri(e);)t+=e.data.length;return t})(n,o):(s=n.childNodes,o>=s.length?(r="after",o=s.length-1):r="before",n=s[o]),i.push(ci(n)),a=((e,t,n)=>{const o=[];for(t=t.parentNode;t!==e;t=t.parentNode)o.push(t);return o})(e,n),a=Re(a,T(So)),i=i.concat(Ne(a,(e=>ci(e)))),i.reverse().join("/")+","+r},mi=(e,t)=>{let n;if(!t)return null;const o=t.split(","),r=o[0].split("/");n=o.length>1?o[1]:"before";const s=Oe(r,((e,t)=>{const n=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);return n?("text()"===n[1]&&(n[1]="#text"),((e,t,n)=>{let o=li(e);return o=Re(o,((e,t)=>!ri(e)||!ri(o[t-1]))),o=Re(o,wo([t])),o[n]})(e,n[1],parseInt(n[2],10))):null}),e);return s?ri(s)?((e,t)=>{let n,o=e,r=0;for(;ri(o);){if(n=o.data.length,t>=r&&t<=r+n){e=o,t-=r;break}if(!ri(o.nextSibling)){e=o,t=n;break}r+=n,o=o.nextSibling}return ri(e)&&t>e.data.length&&(t=e.data.length),ti(e,t)})(s,parseInt(n,10)):(n="after"===n?ai(s)+1:ai(s),ti(s.parentNode,n)):null},fi=Io,gi=(e,t,n,o,r)=>{let s=o[r?"startContainer":"endContainer"],a=o[r?"startOffset":"endOffset"];const i=[];let l,d=0;const c=e.getRoot();for(Ro(s)?i.push(n?((e,t,n)=>{let o,r;for(r=e(t.data.slice(0,n)).length,o=t.previousSibling;o&&Ro(o);o=o.previousSibling)r+=e(o.data).length;return r})(t,s,a):a):(l=s.childNodes,a>=l.length&&l.length&&(d=1,a=Math.max(0,l.length-1)),i.push(e.nodeIndex(l[a],n)+d));s&&s!==c;s=s.parentNode)i.push(e.nodeIndex(s,n));return i},pi=(e,t,n)=>{let o=0;return Bt.each(e.select(t),(e=>{if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void o++})),o},hi=(e,t)=>{let n,o;const r=t?"start":"end";if(n=e[r+"Container"],o=e[r+"Offset"],Co(n)&&"TR"===n.nodeName){const r=n.childNodes;n=r[Math.min(t?o:o-1,r.length-1)],n&&(o=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,o))}},bi=e=>(hi(e,!0),hi(e,!1),e),vi=(e,t)=>{let n;if(Co(e)&&(e=La(e,t),fi(e)))return e;if(Or(e)){if(Ro(e)&&Rr(e)&&(e=e.parentNode),n=e.previousSibling,fi(n))return n;if(n=e.nextSibling,fi(n))return n}},yi=(e,t,n)=>{const o=n.getNode();let r=o?o.nodeName:null;const s=n.getRng();if(fi(o)||"IMG"===r)return{name:r,index:pi(n.dom,r,o)};const a=(e=>vi(e.startContainer,e.startOffset)||vi(e.endContainer,e.endOffset))(s);return a?(r=a.tagName,{name:r,index:pi(n.dom,r,a)}):((e,t,n,o)=>{const r=t.dom,s=gi(r,e,n,o,!0),a=t.isForward(),i=Ir(o)?{isFakeCaret:!0}:{};return t.isCollapsed()?{start:s,forward:a,...i}:{start:s,end:gi(r,e,n,o,!1),forward:a,...i}})(e,n,t,s)},Ci=(e,t,n)=>{const o={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"};return n?e.create("span",o,"&#xFEFF;"):e.create("span",o)},wi=(e,t)=>{const n=e.dom;let o=e.getRng();const r=n.uniqueId(),s=e.isCollapsed(),a=e.getNode(),i=a.nodeName,l=e.isForward();if("IMG"===i)return{name:i,index:pi(n,i,a)};const d=bi(o.cloneRange());if(!s){d.collapse(!1);const e=Ci(n,r+"_end",t);oi(n,d,e)}o=bi(o),o.collapse(!0);const c=Ci(n,r+"_start",t);return oi(n,o,c),e.moveToBookmark({id:r,keep:!0,forward:l}),{id:r,forward:l}},xi=O(yi,R,!0),ki=e=>{const t=t=>t(e),n=N(e),o=()=>r,r={tag:!0,inner:e,fold:(t,n)=>n(e),isValue:L,isError:P,map:t=>_i.value(t(e)),mapError:o,bind:t,exists:t,forall:t,getOr:n,or:o,getOrThunk:n,orThunk:o,getOrDie:n,each:t=>{t(e)},toOptional:()=>M.some(e)};return r},Si=e=>{const t=()=>n,n={tag:!1,inner:e,fold:(t,n)=>t(e),isValue:P,isError:L,map:t,mapError:t=>_i.error(t(e)),bind:t,exists:P,forall:L,getOr:R,or:R,getOrThunk:B,orThunk:B,getOrDie:(o=String(e),()=>{throw new Error(o)}),each:S,toOptional:M.none};var o;return n},_i={value:ki,error:Si,fromOption:(e,t)=>e.fold((()=>Si(t)),ki)},Ei=e=>{if(!p(e))throw new Error("cases must be an array");if(0===e.length)throw new Error("there must be at least one case");const t=[],n={};return $(e,((o,r)=>{const s=ue(o);if(1!==s.length)throw new Error("one and only one name per case");const a=s[0],i=o[a];if(void 0!==n[a])throw new Error("duplicate key detected:"+a);if("cata"===a)throw new Error("cannot have a case named cata (sorry)");if(!p(i))throw new Error("case arguments must be an array");t.push(a),n[a]=(...n)=>{const o=n.length;if(o!==i.length)throw new Error("Wrong number of arguments to case "+a+". Expected "+i.length+" ("+i+"), got "+o);return{fold:(...t)=>{if(t.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+t.length);return t[r].apply(null,n)},match:e=>{const o=ue(e);if(t.length!==o.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+o.join(","));if(!te(t,(e=>j(o,e))))throw new Error("Not all branches were specified when using match. Specified: "+o.join(", ")+"\nRequired: "+t.join(", "));return e[a].apply(null,n)},log:e=>{console.log(e,{constructors:t,constructor:a,params:n})}}}})),n};Ei([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]);const Ni=e=>"inline-command"===e.type||"inline-format"===e.type,Ri=e=>"block-command"===e.type||"block-format"===e.type,Ai=e=>{const t=t=>_i.error({message:t,pattern:e}),n=(n,o,r)=>{if(void 0!==e.format){let r;if(p(e.format)){if(!te(e.format,m))return t(n+" pattern has non-string items in the `format` array");r=e.format}else{if(!m(e.format))return t(n+" pattern has non-string `format` parameter");r=[e.format]}return _i.value(o(r))}return void 0!==e.cmd?m(e.cmd)?_i.value(r(e.cmd,e.value)):t(n+" pattern has non-string `cmd` parameter"):t(n+" pattern is missing both `format` and `cmd` parameters")};if(!f(e))return t("Raw pattern is not an object");if(!m(e.start))return t("Raw pattern is missing `start` parameter");if(void 0!==e.end){if(!m(e.end))return t("Inline pattern has non-string `end` parameter");if(0===e.start.length&&0===e.end.length)return t("Inline pattern has empty `start` and `end` parameters");let o=e.start,r=e.end;return 0===r.length&&(r=o,o=""),n("Inline",(e=>({type:"inline-format",start:o,end:r,format:e})),((e,t)=>({type:"inline-command",start:o,end:r,cmd:e,value:t})))}return void 0!==e.replacement?m(e.replacement)?0===e.start.length?t("Replacement pattern has empty `start` parameter"):_i.value({type:"inline-command",start:"",end:e.start,cmd:"mceInsertContent",value:e.replacement}):t("Replacement pattern has non-string `replacement` parameter"):0===e.start.length?t("Block pattern has empty `start` parameter"):n("Block",(t=>({type:"block-format",start:e.start,format:t[0]})),((t,n)=>({type:"block-command",start:e.start,cmd:t,value:n})))},Oi=e=>(e=>se(e,((e,t)=>e.start.length===t.start.length?0:e.start.length>t.start.length?-1:1)))(K(e,Ri)),Ti=e=>K(e,Ni),Bi=e=>{const t=(e=>{const t=[],n=[];return $(e,(e=>{e.fold((e=>{t.push(e)}),(e=>{n.push(e)}))})),{errors:t,values:n}})(H(e,Ai));return $(t.errors,(e=>console.error(e.message,e.pattern))),t.values},Di=Ct().deviceType,Pi=Di.isTouch(),Li=Qs.DOM,Mi=e=>u(e,RegExp),Ii=e=>t=>t.options.get(e),Fi=e=>m(e)||f(e),Ui=(e,t="")=>n=>{const o=m(n);if(o){if(-1!==n.indexOf("=")){const r=(e=>{const t=e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(",");return Y(t,((e,t)=>{const n=t.split("="),o=n[0],r=n.length>1?n[1]:o;return e[He(o)]=He(r),e}),{})})(n);return{value:we(r,e.id).getOr(t),valid:o}}return{value:n,valid:o}}return{valid:!1,message:"Must be a string."}},zi=Ii("iframe_attrs"),ji=Ii("doctype"),Vi=Ii("document_base_url"),Hi=Ii("body_id"),$i=Ii("body_class"),qi=Ii("content_security_policy"),Wi=Ii("br_in_pre"),Ki=Ii("forced_root_block"),Gi=Ii("forced_root_block_attrs"),Yi=Ii("newline_behavior"),Xi=Ii("br_newline_selector"),Qi=Ii("no_newline_selector"),Ji=Ii("keep_styles"),Zi=Ii("end_container_on_empty_block"),el=Ii("automatic_uploads"),tl=Ii("images_reuse_filename"),nl=Ii("images_replace_blob_uris"),ol=Ii("icons"),rl=Ii("icons_url"),sl=Ii("images_upload_url"),al=Ii("images_upload_base_path"),il=Ii("images_upload_credentials"),ll=Ii("images_upload_handler"),dl=Ii("content_css_cors"),cl=Ii("referrer_policy"),ul=Ii("language"),ml=Ii("language_url"),fl=Ii("indent_use_margin"),gl=Ii("indentation"),pl=Ii("content_css"),hl=Ii("content_style"),bl=Ii("font_css"),vl=Ii("directionality"),yl=Ii("inline_boundaries_selector"),Cl=Ii("object_resizing"),wl=Ii("resize_img_proportional"),xl=Ii("placeholder"),kl=Ii("event_root"),Sl=Ii("service_message"),_l=Ii("theme"),El=Ii("theme_url"),Nl=Ii("model"),Rl=Ii("model_url"),Al=Ii("inline_boundaries"),Ol=Ii("formats"),Tl=Ii("preview_styles"),Bl=Ii("format_empty_lines"),Dl=Ii("custom_ui_selector"),Pl=Ii("inline"),Ll=Ii("hidden_input"),Ml=Ii("submit_patch"),Il=Ii("add_form_submit_trigger"),Fl=Ii("add_unload_trigger"),Ul=Ii("custom_undo_redo_levels"),zl=Ii("disable_nodechange"),jl=Ii("readonly"),Vl=Ii("content_css_cors"),Hl=Ii("plugins"),$l=Ii("external_plugins"),ql=Ii("block_unsupported_drop"),Wl=Ii("visual"),Kl=Ii("visual_table_class"),Gl=Ii("visual_anchor_class"),Yl=Ii("iframe_aria_text"),Xl=Ii("setup"),Ql=Ii("init_instance_callback"),Jl=Ii("urlconverter_callback"),Zl=Ii("auto_focus"),ed=Ii("browser_spellcheck"),td=Ii("protect"),nd=Ii("paste_block_drop"),od=Ii("paste_data_images"),rd=Ii("paste_preprocess"),sd=Ii("paste_postprocess"),ad=Ii("paste_webkit_styles"),id=Ii("paste_remove_styles_if_webkit"),ld=Ii("paste_merge_formats"),dd=Ii("smart_paste"),cd=Ii("paste_as_text"),ud=Ii("paste_tab_spaces"),md=Ii("allow_html_data_urls"),fd=Ii("text_patterns"),gd=Ii("noneditable_class"),pd=Ii("editable_class"),hd=Ii("noneditable_regexp"),bd=e=>Bt.explode(e.options.get("images_file_types")),vd=Ii("table_tab_navigation"),yd=Co,Cd=Ro,wd=e=>{const t=e.parentNode;t&&t.removeChild(e)},xd=e=>{const t=_r(e);return{count:e.length-t.length,text:t}},kd=e=>{let t;for(;-1!==(t=e.data.lastIndexOf(kr));)e.deleteData(t,1)},Sd=(e,t)=>(Ed(e),t),_d=(e,t)=>ti.isTextPosition(t)?((e,t)=>Cd(e)&&t.container()===e?((e,t)=>{const n=xd(e.data.substr(0,t.offset())),o=xd(e.data.substr(t.offset()));return(n.text+o.text).length>0?(kd(e),ti(e,t.offset()-n.count)):t})(e,t):Sd(e,t))(e,t):((e,t)=>t.container()===e.parentNode?((e,t)=>{const n=t.container(),o=((e,t)=>{const n=z(e,t);return-1===n?M.none():M.some(n)})(de(n.childNodes),e).map((e=>e<t.offset()?ti(n,t.offset()-1):t)).getOr(t);return Ed(e),o})(e,t):Sd(e,t))(e,t),Ed=e=>{yd(e)&&Or(e)&&(Tr(e)?e.removeAttribute("data-mce-caret"):wd(e)),Cd(e)&&(kd(e),0===e.data.length&&wd(e))},Nd=Io,Rd=Uo,Ad=Fo,Od=(e,t,n)=>{const o=Aa(t.getBoundingClientRect(),n);let r,s;if("BODY"===e.tagName){const t=e.ownerDocument.documentElement;r=e.scrollLeft||t.scrollLeft,s=e.scrollTop||t.scrollTop}else{const t=e.getBoundingClientRect();r=e.scrollLeft-t.left,s=e.scrollTop-t.top}o.left+=r,o.right+=r,o.top+=s,o.bottom+=s,o.width=1;let a=t.offsetWidth-t.clientWidth;return a>0&&(n&&(a*=-1),o.left+=a,o.right+=a),o},Td=(e,t,n,o)=>{const r=aa();let s,a;const i=Ki(e),l=e.dom,d=()=>{(e=>{const t=hr(fn(e),"*[contentEditable=false],video,audio,embed,object");for(let e=0;e<t.length;e++){const n=t[e].dom;let o=n.previousSibling;if(Lr(o)){const e=o.data;1===e.length?o.parentNode.removeChild(o):o.deleteData(e.length-1,1)}o=n.nextSibling,Pr(o)&&(1===o.data.length?o.parentNode.removeChild(o):o.deleteData(0,1))}})(t),a&&(Ed(a),a=null),r.on((e=>{l.remove(e.caret),r.clear()})),s&&(clearInterval(s),s=void 0)};return{show:(e,c)=>{let u;if(d(),Ad(c))return null;if(!n(c))return a=((e,t)=>{const n=e.ownerDocument.createTextNode(kr),o=e.parentNode;if(t){const t=e.previousSibling;if(Nr(t)){if(Or(t))return t;if(Lr(t))return t.splitText(t.data.length-1)}o.insertBefore(n,e)}else{const t=e.nextSibling;if(Nr(t)){if(Or(t))return t;if(Pr(t))return t.splitText(1),t}e.nextSibling?o.insertBefore(n,e.nextSibling):o.appendChild(n)}return n})(c,e),u=c.ownerDocument.createRange(),Dd(a.nextSibling)?(u.setStart(a,0),u.setEnd(a,0)):(u.setStart(a,1),u.setEnd(a,1)),u;{a=((e,t,n)=>{const o=t.ownerDocument.createElement(e);o.setAttribute("data-mce-caret",n?"before":"after"),o.setAttribute("data-mce-bogus","all"),o.appendChild(Cr().dom);const r=t.parentNode;return n?r.insertBefore(o,t):t.nextSibling?r.insertBefore(o,t.nextSibling):r.appendChild(o),o})(i,c,e);const n=Od(t,c,e);l.setStyle(a,"top",n.top);const d=l.create("div",{class:"mce-visual-caret","data-mce-bogus":"all"});l.setStyles(d,{...n}),l.add(t,d),r.set({caret:d,element:c,before:e}),e&&l.addClass(d,"mce-visual-caret-before"),s=setInterval((()=>{r.on((e=>{o()?l.toggleClass(e.caret,"mce-visual-caret-hidden"):l.addClass(e.caret,"mce-visual-caret-hidden")}))}),500),u=c.ownerDocument.createRange(),u.setStart(a,0),u.setEnd(a,0)}return u},hide:d,getCss:()=>".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}",reposition:()=>{r.on((e=>{const n=Od(t,e.element,e.before);l.setStyles(e.caret,{...n})}))},destroy:()=>clearInterval(s)}},Bd=()=>Nt.browser.isFirefox(),Dd=e=>Nd(e)||Rd(e),Pd=e=>Dd(e)||_o(e)&&Bd(),Ld=Mo,Md=Io,Id=Uo,Fd=xo("display","block table table-cell table-caption list-item"),Ud=Or,zd=Rr,jd=Co,Vd=Wr,Hd=e=>e>0,$d=e=>e<0,qd=(e,t)=>{let n;for(;n=e(t);)if(!zd(n))return n;return null},Wd=(e,t,n,o,r)=>{const s=new Qo(e,o),a=Md(e)||zd(e);if($d(t)){if(a&&n(e=qd(s.prev.bind(s),!0)))return e;for(;e=qd(s.prev.bind(s),r);)if(n(e))return e}if(Hd(t)){if(a&&n(e=qd(s.next.bind(s),!0)))return e;for(;e=qd(s.next.bind(s),r);)if(n(e))return e}return null},Kd=(e,t)=>{for(;e&&e!==t;){if(Fd(e))return e;e=e.parentNode}return null},Gd=(e,t,n)=>Kd(e.container(),n)===Kd(t.container(),n),Yd=(e,t)=>{if(!t)return null;const n=t.container(),o=t.offset();return jd(n)?n.childNodes[o+e]:null},Xd=(e,t)=>{const n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},Qd=(e,t,n)=>Kd(t,e)===Kd(n,e),Jd=(e,t,n)=>{const o=e?"previousSibling":"nextSibling";for(;n&&n!==t;){let e=n[o];if(Ud(e)&&(e=e[o]),Md(e)||Id(e)){if(Qd(t,e,n))return e;break}if(Vd(e))break;n=n.parentNode}return null},Zd=O(Xd,!0),ec=O(Xd,!1),tc=(e,t,n)=>{let o;const r=O(Jd,!0,t),s=O(Jd,!1,t);let a=n.startContainer;const i=n.startOffset;if(Rr(a)){jd(a)||(a=a.parentNode);const e=a.getAttribute("data-mce-caret");if("before"===e&&(o=a.nextSibling,Pd(o)))return Zd(o);if("after"===e&&(o=a.previousSibling,Pd(o)))return ec(o)}if(!n.collapsed)return n;if(Ro(a)){if(Ud(a)){if(1===e){if(o=s(a),o)return Zd(o);if(o=r(a),o)return ec(o)}if(-1===e){if(o=r(a),o)return ec(o);if(o=s(a),o)return Zd(o)}return n}if(Lr(a)&&i>=a.data.length-1)return 1===e&&(o=s(a),o)?Zd(o):n;if(Pr(a)&&i<=1)return-1===e&&(o=r(a),o)?ec(o):n;if(i===a.data.length)return o=s(a),o?Zd(o):n;if(0===i)return o=r(a),o?ec(o):n}return n},nc=(e,t)=>M.from(Yd(e?0:-1,t)).filter(Md),oc=(e,t,n)=>{const o=tc(e,t,n);return-1===e?ti.fromRangeStart(o):ti.fromRangeEnd(o)},rc=e=>M.from(e.getNode()).map(fn),sc=(e,t)=>{for(;t=e(t);)if(t.isVisible())return t;return t},ac=(e,t)=>{const n=Gd(e,t);return!(n||!Po(e.getNode()))||n};var ic;!function(e){e[e.Backwards=-1]="Backwards",e[e.Forwards=1]="Forwards"}(ic||(ic={}));const lc=Io,dc=Ro,cc=Co,uc=Po,mc=Wr,fc=e=>Hr(e)||(e=>!!Kr(e)&&!0!==Y(de(e.getElementsByTagName("*")),((e,t)=>e||Fr(t)),!1))(e),gc=Gr,pc=(e,t)=>e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null,hc=(e,t)=>{if(Hd(e)){if(mc(t.previousSibling)&&!dc(t.previousSibling))return ti.before(t);if(dc(t))return ti(t,0)}if($d(e)){if(mc(t.nextSibling)&&!dc(t.nextSibling))return ti.after(t);if(dc(t))return ti(t,t.data.length)}return $d(e)?uc(t)?ti.before(t):ti.after(t):ti.before(t)},bc=(e,t,n)=>{let o,r,s,a;if(!cc(n)||!t)return null;if(t.isEqual(ti.after(n))&&n.lastChild){if(a=ti.after(n.lastChild),$d(e)&&mc(n.lastChild)&&cc(n.lastChild))return uc(n.lastChild)?ti.before(n.lastChild):a}else a=t;const i=a.container();let l=a.offset();if(dc(i)){if($d(e)&&l>0)return ti(i,--l);if(Hd(e)&&l<i.length)return ti(i,++l);o=i}else{if($d(e)&&l>0&&(r=pc(i,l-1),mc(r)))return!fc(r)&&(s=Wd(r,e,gc,r),s)?dc(s)?ti(s,s.data.length):ti.after(s):dc(r)?ti(r,r.data.length):ti.before(r);if(Hd(e)&&l<i.childNodes.length&&(r=pc(i,l),mc(r)))return uc(r)?((e,t)=>{const n=t.nextSibling;return n&&mc(n)?dc(n)?ti(n,0):ti.before(n):bc(ic.Forwards,ti.after(t),e)})(n,r):!fc(r)&&(s=Wd(r,e,gc,r),s)?dc(s)?ti(s,0):ti.before(s):dc(r)?ti(r,0):ti.after(r);o=r||a.getNode()}if((Hd(e)&&a.isAtEnd()||$d(e)&&a.isAtStart())&&(o=Wd(o,e,L,n,!0),gc(o,n)))return hc(e,o);r=Wd(o,e,gc,n);const d=Be(K(((e,t)=>{const n=[];for(;e&&e!==t;)n.push(e),e=e.parentNode;return n})(i,n),lc));return!d||r&&d.contains(r)?r?hc(e,r):null:(a=Hd(e)?ti.after(d):ti.before(d),a)},vc=e=>({next:t=>bc(ic.Forwards,t,e),prev:t=>bc(ic.Backwards,t,e)}),yc=e=>ti.isTextPosition(e)?0===e.offset():Wr(e.getNode()),Cc=e=>{if(ti.isTextPosition(e)){const t=e.container();return e.offset()===t.data.length}return Wr(e.getNode(!0))},wc=(e,t)=>!ti.isTextPosition(e)&&!ti.isTextPosition(t)&&e.getNode()===t.getNode(!0),xc=(e,t,n)=>{const o=vc(t);return M.from(e?o.next(n):o.prev(n))},kc=(e,t,n)=>xc(e,t,n).bind((o=>Gd(n,o,t)&&((e,t,n)=>{return e?!wc(t,n)&&(o=t,!(!ti.isTextPosition(o)&&Po(o.getNode())))&&Cc(t)&&yc(n):!wc(n,t)&&yc(t)&&Cc(n);var o})(e,n,o)?xc(e,t,o):M.some(o))),Sc=(e,t,n,o)=>kc(e,t,n).bind((n=>o(n)?Sc(e,t,n,o):M.some(n))),_c=(e,t)=>{const n=e?t.firstChild:t.lastChild;return Ro(n)?M.some(ti(n,e?0:n.data.length)):n?Wr(n)?M.some(e?ti.before(n):Po(o=n)?ti.before(o):ti.after(o)):((e,t,n)=>{const o=e?ti.before(n):ti.after(n);return xc(e,t,o)})(e,t,n):M.none();var o},Ec=O(xc,!0),Nc=O(xc,!1),Rc=O(_c,!0),Ac=O(_c,!1),Oc="_mce_caret",Tc=e=>Co(e)&&e.id===Oc,Bc=(e,t)=>{for(;t&&t!==e;){if(t.id===Oc)return t;t=t.parentNode}return null},Dc=e=>xe(e,"name"),Pc=e=>Bt.isArray(e.start),Lc=e=>!(!Dc(e)&&b(e.forward))||e.forward,Mc=(e,t)=>(Co(t)&&e.isBlock(t)&&!t.innerHTML&&(t.innerHTML='<br data-mce-bogus="1" />'),t),Ic=(e,t)=>Ac(e).fold(P,(e=>(t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0))),Fc=(e,t,n)=>!(!(e=>!1===e.hasChildNodes())(t)||!Bc(e,t)||(((e,t)=>{const n=e.ownerDocument.createTextNode(kr);e.appendChild(n),t.setStart(n,0),t.setEnd(n,0)})(t,n),0)),Uc=(e,t,n,o)=>{const r=n[t?"start":"end"];let s,a,i,l;const d=e.getRoot();if(r){for(i=r[0],a=d,s=r.length-1;s>=1;s--){if(l=a.childNodes,Fc(d,a,o))return!0;if(r[s]>l.length-1)return!!Fc(d,a,o)||Ic(a,o);a=l[r[s]]}3===a.nodeType&&(i=Math.min(r[0],a.nodeValue.length)),1===a.nodeType&&(i=Math.min(r[0],a.childNodes.length)),t?o.setStart(a,i):o.setEnd(a,i)}return!0},zc=e=>Ro(e)&&e.data.length>0,jc=(e,t,n)=>{let o,r,s,a,i=e.get(n.id+"_"+t);const l=n.keep;let d,c;if(i){if(o=i.parentNode,"start"===t?(l?i.hasChildNodes()?(o=i.firstChild,r=1):zc(i.nextSibling)?(o=i.nextSibling,r=0):zc(i.previousSibling)?(o=i.previousSibling,r=i.previousSibling.data.length):(o=i.parentNode,r=e.nodeIndex(i)+1):r=e.nodeIndex(i),d=o,c=r):(l?i.hasChildNodes()?(o=i.firstChild,r=1):zc(i.previousSibling)?(o=i.previousSibling,r=i.previousSibling.data.length):(o=i.parentNode,r=e.nodeIndex(i)):r=e.nodeIndex(i),d=o,c=r),!l){for(a=i.previousSibling,s=i.nextSibling,Bt.each(Bt.grep(i.childNodes),(e=>{Ro(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))}));i=e.get(n.id+"_"+t);)e.remove(i,!0);a&&s&&a.nodeType===s.nodeType&&Ro(a)&&!Nt.browser.isOpera()&&(r=a.nodeValue.length,a.appendData(s.nodeValue),e.remove(s),d=a,c=r)}return M.some(ti(d,c))}return M.none()},Vc=(e,t,n)=>((e,t,n)=>2===t?yi(_r,n,e):3===t?(e=>{const t=e.getRng();return{start:ui(e.dom.getRoot(),ti.fromRangeStart(t)),end:ui(e.dom.getRoot(),ti.fromRangeEnd(t)),forward:e.isForward()}})(e):t?(e=>({rng:e.getRng(),forward:e.isForward()}))(e):wi(e,!1))(e,t,n),Hc=(e,t)=>{((e,t)=>{const n=e.dom;if(t){if(Pc(t))return((e,t)=>{const n=e.createRng();return Uc(e,!0,t,n)&&Uc(e,!1,t,n)?M.some({range:n,forward:Lc(t)}):M.none()})(n,t);if((e=>m(e.start))(t))return M.some(((e,t)=>{const n=e.createRng(),o=mi(e.getRoot(),t.start);n.setStart(o.container(),o.offset());const r=mi(e.getRoot(),t.end);return n.setEnd(r.container(),r.offset()),{range:n,forward:Lc(t)}})(n,t));if((e=>xe(e,"id"))(t))return((e,t)=>{const n=jc(e,"start",t),o=jc(e,"end",t);return Pt(n,o.or(n),((n,o)=>{const r=e.createRng();return r.setStart(Mc(e,n.container()),n.offset()),r.setEnd(Mc(e,o.container()),o.offset()),{range:r,forward:Lc(t)}}))})(n,t);if(Dc(t))return((e,t)=>M.from(e.select(t.name)[t.index]).map((t=>{const n=e.createRng();return n.selectNode(t),{range:n,forward:!0}})))(n,t);if((e=>xe(e,"rng"))(t))return M.some({range:t.rng,forward:Lc(t)})}return M.none()})(e,t).each((({range:t,forward:n})=>{e.setRng(t,n)}))},$c=e=>Co(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type"),qc=(fr,e=>"\xa0"===e);const Wc=e=>""!==e&&-1!==" \f\n\r\t\v".indexOf(e),Kc=e=>!Wc(e)&&!qc(e)&&!gr(e),Gc=e=>{const t=e.toString(16);return(1===t.length?"0"+t:t).toUpperCase()},Yc=e=>(e=>({value:e}))(Gc(e.red)+Gc(e.green)+Gc(e.blue)),Xc=/^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,Qc=/^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,Jc=(e,t,n,o)=>({red:e,green:t,blue:n,alpha:o}),Zc=(e,t,n,o)=>{const r=parseInt(e,10),s=parseInt(t,10),a=parseInt(n,10),i=parseFloat(o);return Jc(r,s,a,i)},eu=e=>(e=>{if("transparent"===e)return M.some(Jc(0,0,0,0));const t=Xc.exec(e);if(null!==t)return M.some(Zc(t[1],t[2],t[3],"1"));const n=Qc.exec(e);return null!==n?M.some(Zc(n[1],n[2],n[3],n[4])):M.none()})(e).map(Yc).map((e=>"#"+e.value)).getOr(e),tu=e=>!!e.nodeType,nu=(e,t,n)=>{const o=n.startOffset;let r=n.startContainer;var s;if((r!==n.endContainer||!(s=r.childNodes[o])||!/^(IMG)$/.test(s.nodeName))&&Co(r)){const s=r.childNodes;let a;o<s.length?(r=s[o],a=new Qo(r,e.getParent(r,e.isBlock))):(r=s[s.length-1],a=new Qo(r,e.getParent(r,e.isBlock)),a.next(!0));for(let e=a.current();e;e=a.next())if(Ro(e)&&!au(e))return n.setStart(e,0),void t.setRng(n)}},ou=(e,t,n)=>{if(e){const o=t?"nextSibling":"previousSibling";for(e=n?e:e[o];e;e=e[o])if(Co(e)||!au(e))return e}},ru=(e,t)=>(tu(t)&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]),su=(e,t,n)=>e.schema.isValidChild(t,n),au=(e,t=!1)=>{if(C(e)&&Ro(e)){const n=t?e.data.replace(/ /g,"\xa0"):e.data;return Xr(n)}return!1},iu=(e,t)=>(w(e)?e=e(t):C(t)&&(e=e.replace(/%(\w+)/g,((e,n)=>t[n]||e))),e),lu=(e,t)=>(t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()),du=(e,t)=>("color"!==t&&"backgroundColor"!==t||(e=eu(e)),"fontWeight"===t&&700===e&&(e="bold"),"fontFamily"===t&&(e=e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+e),cu=(e,t,n)=>du(e.getStyle(t,n),n),uu=(e,t)=>{let n;return e.getParent(t,(t=>(n=e.getStyle(t,"text-decoration"),n&&"none"!==n))),n},mu=(e,t,n)=>e.getParents(t,n,e.getRoot()),fu=e=>ke(e,"block"),gu=e=>ke(e,"selector"),pu=e=>ke(e,"inline"),hu=e=>gu(e)&&!1!==e.expand&&!pu(e),bu=$c,vu=mu,yu=au,Cu=ru,wu=(e,t)=>{let n=t;for(;n;){if(Co(n)&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t;n=n.parentNode}return t},xu=(e,t,n,o)=>{const r=t.data;for(let t=n;e?t>=0:t<r.length;e?t--:t++)if(o(r.charAt(t)))return e?t+1:t;return-1},ku=(e,t,n)=>xu(e,t,n,(e=>qc(e)||Wc(e))),Su=(e,t,n)=>xu(e,t,n,Kc),_u=(e,t,n,o,r,s)=>{let a;const i=e.getParent(n,e.isBlock)||t,l=(t,n,o)=>{const s=Ea(e),l=r?s.backwards:s.forwards;return M.from(l(t,n,((e,t)=>bu(e.parentNode)?-1:(a=e,o(r,e,t))),i))};return l(n,o,ku).bind((e=>s?l(e.container,e.offset+(r?-1:0),Su):M.some(e))).orThunk((()=>a?M.some({container:a,offset:r?0:a.length}):M.none()))},Eu=(e,t,n,o,r)=>{Ro(o)&&Ke(o.data)&&o[r]&&(o=o[r]);const s=vu(e,o);for(let o=0;o<s.length;o++)for(let r=0;r<t.length;r++){const a=t[r];if((!C(a.collapsed)||a.collapsed===n.collapsed)&&gu(a)&&e.is(s[o],a.selector))return s[o]}return o},Nu=(e,t,n,o)=>{let r=n;const s=e.dom,a=s.getRoot(),i=t[0];if(fu(i)&&(r=i.wrapper?null:s.getParent(n,i.block,a)),!r){const t=s.getParent(n,"LI,TD,TH");r=s.getParent(Ro(n)?n.parentNode:n,(t=>t!==a&&Cu(e,t)),t)}if(r&&fu(i)&&i.wrapper&&(r=vu(s,r,"ul,ol").reverse()[0]||r),!r)for(r=n;r[o]&&!s.isBlock(r[o])&&(r=r[o],!lu(r,"br")););return r||n},Ru=(e,t,n,o)=>{const r=n.parentNode;return!C(n[o])&&(!(r!==t&&!y(r)&&!e.isBlock(r))||Ru(e,t,r,o))},Au=(e,t,n,o,r)=>{let s=n;const a=r?"previousSibling":"nextSibling",i=e.getRoot();if(Ro(n)&&!yu(n)&&(r?o>0:o<n.data.length))return n;for(;;){if(!t[0].block_expand&&e.isBlock(s))return s;for(let t=s[a];t;t=t[a]){const n=Ro(t)&&!Ru(e,i,t,a);if(!bu(t)&&(!Po(l=t)||!l.getAttribute("data-mce-bogus")||l.nextSibling)&&!yu(t,n))return s}if(s===i||s.parentNode===i){n=s;break}s=s.parentNode}var l;return n},Ou=e=>bu(e.parentNode)||bu(e),Tu=(e,t,n,o=!1)=>{let{startContainer:r,startOffset:s,endContainer:a,endOffset:i}=t;const l=e.dom,d=n[0];return Co(r)&&r.hasChildNodes()&&(r=La(r,s),Ro(r)&&(s=0)),Co(a)&&a.hasChildNodes()&&(a=La(a,t.collapsed?i:i-1),Ro(a)&&(i=a.nodeValue.length)),r=wu(l,r),a=wu(l,a),Ou(r)&&(r=bu(r)?r:r.parentNode,r=t.collapsed?r.previousSibling||r:r.nextSibling||r,Ro(r)&&(s=t.collapsed?r.length:0)),Ou(a)&&(a=bu(a)?a:a.parentNode,a=t.collapsed?a.nextSibling||a:a.previousSibling||a,Ro(a)&&(i=t.collapsed?0:a.length)),t.collapsed&&(_u(l,e.getBody(),r,s,!0,o).each((({container:e,offset:t})=>{r=e,s=t})),_u(l,e.getBody(),a,i,!1,o).each((({container:e,offset:t})=>{a=e,i=t}))),(pu(d)||d.block_expand)&&(pu(d)&&Ro(r)&&0!==s||(r=Au(l,n,r,s,!0)),pu(d)&&Ro(a)&&i!==a.nodeValue.length||(a=Au(l,n,a,i,!1))),hu(d)&&(r=Eu(l,n,t,r,"previousSibling"),a=Eu(l,n,t,a,"nextSibling")),(fu(d)||gu(d))&&(r=Nu(e,n,r,"previousSibling"),a=Nu(e,n,a,"nextSibling"),fu(d)&&(l.isBlock(r)||(r=Au(l,n,r,s,!0)),l.isBlock(a)||(a=Au(l,n,a,i,!1)))),Co(r)&&(s=l.nodeIndex(r),r=r.parentNode),Co(a)&&(i=l.nodeIndex(a)+1,a=a.parentNode),{startContainer:r,startOffset:s,endContainer:a,endOffset:i}},Bu=(e,t,n)=>{const o=t.startOffset,r=La(t.startContainer,o),s=t.endOffset,a=La(t.endContainer,s-1),i=e=>{const t=e[0];Ro(t)&&t===r&&o>=t.data.length&&e.splice(0,1);const n=e[e.length-1];return 0===s&&e.length>0&&n===a&&Ro(n)&&e.splice(e.length-1,1),e},l=(e,t,n)=>{const o=[];for(;e&&e!==n;e=e[t])o.push(e);return o},d=(t,n)=>e.getParent(t,(e=>e.parentNode===n),n),c=(e,t,o)=>{const r=o?"nextSibling":"previousSibling";for(let s=e,a=s.parentNode;s&&s!==t;s=a){a=s.parentNode;const t=l(s===e?s:s[r],r);t.length&&(o||t.reverse(),n(i(t)))}};if(r===a)return n(i([r]));const u=e.findCommonAncestor(r,a);if(e.isChildOf(r,a))return c(r,u,!0);if(e.isChildOf(a,r))return c(a,u);const m=d(r,u)||r,f=d(a,u)||a;c(r,m,!0);const g=l(m===r?m:m.nextSibling,"nextSibling",f===a?f.nextSibling:f);g.length&&n(i(g)),c(a,f)},Du=e=>{const t=[];if(e)for(let n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n));return t},Pu=(e,t)=>{const n=hr(t,"td[data-mce-selected],th[data-mce-selected]");return n.length>0?n:(e=>K((e=>ee(e,(e=>{const t=Pa(e);return t?[fn(t)]:[]})))(e),ir))(e)},Lu=e=>Pu(Du(e.selection.getSel()),fn(e.getBody())),Mu=(e,t)=>Wo(e,"table",t),Iu=e=>On(e).fold(N([e]),(t=>[e].concat(Iu(t)))),Fu=e=>Tn(e).fold(N([e]),(t=>"br"===Mt(t)?Sn(t).map((t=>[e].concat(Fu(t)))).getOr([]):[e].concat(Fu(t)))),Uu=(e,t)=>Pt((e=>{const t=e.startContainer,n=e.startOffset;return Ro(t)?0===n?M.some(fn(t)):M.none():M.from(t.childNodes[n]).map(fn)})(t),(e=>{const t=e.endContainer,n=e.endOffset;return Ro(t)?n===t.data.length?M.some(fn(t)):M.none():M.from(t.childNodes[n-1]).map(fn)})(t),((t,n)=>{const o=Q(Iu(e),O(vn,t)),r=Q(Fu(e),O(vn,n));return o.isSome()&&r.isSome()})).getOr(!1),zu=(e,t,n,o)=>{const r=n,s=new Qo(n,r),a=ve(e.schema.getMoveCaretBeforeOnEnterElements(),((e,t)=>!j(["td","th","table"],t.toLowerCase())));do{if(Ro(n)&&0!==Bt.trim(n.nodeValue).length)return void(o?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName])return void(o?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n))}while(n=o?s.next():s.prev());"BODY"===r.nodeName&&(o?t.setStart(r,0):t.setEnd(r,r.childNodes.length))},ju=e=>{const t=e.selection.getSel();return t&&t.rangeCount>0},Vu=(e,t)=>{const n=Lu(e);n.length>0?$(n,(n=>{const o=n.dom,r=e.dom.createRng();r.setStartBefore(o),r.setEndAfter(o),t(r,!0)})):t(e.selection.getRng(),!1)},Hu=(e,t,n)=>{const o=wi(e,t);n(o),e.moveToBookmark(o)},$u=['pre[class*=language-][contenteditable="false"]',"figure.image","div[data-ephox-embed-iri]","div.tiny-pageembed","div.mce-toc","div[data-mce-toc]"],qu=(e,t,n,o,r,s)=>{const{uid:a=t,...i}=n;on(e,da()),qt(e,`${ua()}`,a),qt(e,`${ca()}`,o);const{attributes:l={},classes:d=[]}=r(a,i);if(Wt(e,l),((e,t)=>{$(t,(t=>{on(e,t)}))})(e,d),s){d.length>0&&qt(e,`${fa()}`,d.join(","));const t=ue(l);t.length>0&&qt(e,`${ga()}`,t.join(","))}},Wu=(e,t,n,o,r)=>{const s=un("span",e);return qu(s,t,n,o,r,!1),s},Ku=(e,t,n,o,r,s)=>{const a=[],i=Wu(e.getDoc(),n,s,o,r),l=aa(),d=()=>{l.clear()},c=e=>{$(e,u)},u=t=>{switch(((e,t,n,o)=>kn(t).fold((()=>"skipping"),(r=>"br"===o||(e=>zt(e)&&vr(e)===kr)(t)?"valid":(e=>Ut(e)&&an(e,da()))(t)?"existing":Tc(t.dom)?"caret":V($u,(e=>hn(t,e)))?"valid-block":su(e,n,o)&&su(e,Mt(r),n)?"valid":"invalid-child")))(e,t,"span",Mt(t))){case"invalid-child":{d();const e=Rn(t);c(e),d();break}case"valid-block":d(),qu(t,n,s,o,r,!0);break;case"valid":{const e=l.get().getOrThunk((()=>{const e=ka(i);return a.push(e),l.set(e),e}));((e,t)=>{Xn(e,t),Zn(t,e)})(t,e);break}}};return Bu(e.dom,t,(e=>{d(),(e=>{const t=H(e,fn);c(t)})(e)})),a},Gu=e=>{const t=(()=>{const e={};return{register:(t,n)=>{e[t]={name:t,settings:n}},lookup:t=>we(e,t).map((e=>e.settings)),getNames:()=>ue(e)}})();((e,t)=>{const n=ca(),o=e=>M.from(e.attr(n)).bind(t.lookup),r=e=>{var t,n;e.attr(ua(),null),e.attr(ca(),null),e.attr(ma(),null);const o=M.from(e.attr(ga())).map((e=>e.split(","))).getOr([]),r=M.from(e.attr(fa())).map((e=>e.split(","))).getOr([]);$(o,(t=>e.attr(t,null)));const s=null!==(n=null===(t=e.attr("class"))||void 0===t?void 0:t.split(" "))&&void 0!==n?n:[],a=oe(s,[da()].concat(r));e.attr("class",a.length>0?a.join(" "):null),e.attr(fa(),null),e.attr(ga(),null)};e.serializer.addTempAttr(ma()),e.serializer.addAttributeFilter(n,(e=>{for(const t of e)o(t).each((e=>{!1===e.persistent&&("span"===t.name?t.unwrap():r(t))}))}))})(e,t);const n=((e,t)=>{const n=ea({}),o=()=>({listeners:[],previous:aa()}),r=(e,t)=>{s(e,(e=>(t(e),e)))},s=(e,t)=>{const r=n.get(),s=t(we(r,e).getOrThunk(o));r[e]=s,n.set(r)},a=(t,n)=>{$(va(e,t),(e=>{n?qt(e,ma(),"true"):Xt(e,ma())}))},i=la((()=>{const n=se(t.getNames());$(n,(t=>{s(t,(n=>{const o=n.previous.get();return ha(e,M.some(t)).fold((()=>{o.each((e=>{(e=>{r(e,(t=>{$(t.listeners,(t=>t(!1,e)))}))})(t),n.previous.clear(),a(e,!1)}))}),(({uid:e,name:t,elements:s})=>{Dt(o,e)||(o.each((e=>a(e,!1))),((e,t,n)=>{r(e,(o=>{$(o.listeners,(o=>o(!0,e,{uid:t,nodes:H(n,(e=>e.dom))})))}))})(t,e,s),n.previous.set(e),a(e,!0))})),{previous:n.previous,listeners:n.listeners}}))}))}),30);return e.on("remove",(()=>{i.cancel()})),e.on("NodeChange",(()=>{i.throttle()})),{addListener:(e,t)=>{s(e,(e=>({previous:e.previous,listeners:e.listeners.concat([t])})))}}})(e,t),o=Ht("span"),r=e=>{$(e,(e=>{o(e)?oo(e):(e=>{sn(e,da()),Xt(e,`${ua()}`),Xt(e,`${ca()}`),Xt(e,`${ma()}`);const t=Gt(e,`${ga()}`).map((e=>e.split(","))).getOr([]),n=Gt(e,`${fa()}`).map((e=>e.split(","))).getOr([]);var o;$(t,(t=>Xt(e,t))),o=e,$(n,(e=>{sn(o,e)})),Xt(e,`${fa()}`),Xt(e,`${ga()}`)})(e)}))};return{register:(e,n)=>{t.register(e,n)},annotate:(n,o)=>{t.lookup(n).each((t=>{((e,t,n,o)=>{e.undoManager.transact((()=>{const r=e.selection,s=r.getRng(),a=Lu(e).length>0,i=wa("mce-annotation");if(s.collapsed&&!a&&((e,t)=>{const n=Tu(e,t,[{inline:"span"}]);t.setStart(n.startContainer,n.startOffset),t.setEnd(n.endContainer,n.endOffset),e.selection.setRng(t)})(e,s),r.getRng().collapsed&&!a){const s=Wu(e.getDoc(),i,o,t,n.decorate);so(s,fr),r.getRng().insertNode(s.dom),r.select(s.dom)}else Hu(r,!1,(()=>{Vu(e,(r=>{Ku(e,r,i,t,n.decorate,o)}))}))}))})(e,n,t,o)}))},annotationChanged:(e,t)=>{n.addListener(e,t)},remove:t=>{const n=e.selection.getBookmark();ha(e,M.some(t)).each((({elements:e})=>{r(e)})),e.selection.moveToBookmark(n)},removeAll:t=>{const n=e.selection.getBookmark();fe(ya(e,t),((e,t)=>{r(e)})),e.selection.moveToBookmark(n)},getAll:t=>{const n=ya(e,t);return ge(n,(e=>H(e,(e=>e.dom))))}}},Yu=e=>({getBookmark:O(Vc,e),moveToBookmark:O(Hc,e)});Yu.isBookmarkNode=$c;const Xu=(e,t,n)=>!n.collapsed&&V(n.getClientRects(),(n=>((e,t,n)=>t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom)(n,e,t))),Qu=(e,t,n)=>e.dispatch(t,n),Ju=(e,t,n,o)=>e.dispatch("FormatApply",{format:t,node:n,vars:o}),Zu=(e,t,n,o)=>e.dispatch("FormatRemove",{format:t,node:n,vars:o}),em=(e,t)=>e.dispatch("SetContent",t),tm=(e,t)=>e.dispatch("GetContent",t),nm=(e,t)=>e.dispatch("PastePlainTextToggle",{state:t}),om={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,ESC:27,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,modifierPressed:e=>e.shiftKey||e.ctrlKey||e.altKey||om.metaKeyPressed(e),metaKeyPressed:e=>Nt.os.isMacOS()||Nt.os.isiOS()?e.metaKey:e.ctrlKey&&!e.altKey},rm="data-mce-selected",sm=Math.abs,am=Math.round,im={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]},lm=(e,t)=>{const n=t.dom,o=t.getDoc(),r=document,s=t.getBody();let a,i,l,d,c,u,m,f,g,p,h,b,v,y,w;const x=e=>C(e)&&(Lo(e)||n.is(e,"figure.image")),k=e=>Uo(e)||n.hasClass(e,"mce-preview-object"),S=e=>{const n=e.target;((e,t)=>{if((e=>"longpress"===e.type||0===e.type.indexOf("touch"))(e)){const n=e.touches[0];return x(e.target)&&!Xu(n.clientX,n.clientY,t)}return x(e.target)&&!Xu(e.clientX,e.clientY,t)})(e,t.selection.getRng())&&!e.isDefaultPrevented()&&t.selection.select(n)},_=e=>n.is(e,"figure.image")?[e.querySelector("img")]:n.hasClass(e,"mce-preview-object")&&C(e.firstElementChild)?[e,e.firstElementChild]:[e],E=e=>{const o=Cl(t);return!!o&&"false"!==e.getAttribute("data-mce-resize")&&e!==t.getBody()&&(n.hasClass(e,"mce-preview-object")?hn(fn(e.firstElementChild),o):hn(fn(e),o))},N=(e,o,r)=>{if(C(r)){const s=_(e);$(s,(e=>{e.style[o]||!t.schema.isValid(e.nodeName.toLowerCase(),o)?n.setStyle(e,o,r):n.setAttrib(e,o,""+r)}))}},R=(e,t,n)=>{N(e,"width",t),N(e,"height",n)},A=e=>{let o,r,c,C,S;o=e.screenX-u,r=e.screenY-m,b=o*d[2]+f,v=r*d[3]+g,b=b<5?5:b,v=v<5?5:v,c=(x(a)||k(a))&&!1!==wl(t)?!om.modifierPressed(e):om.modifierPressed(e),c&&(sm(o)>sm(r)?(v=am(b*p),b=am(v/p)):(b=am(v/p),v=am(b*p))),R(i,b,v),C=d.startPos.x+o,S=d.startPos.y+r,C=C>0?C:0,S=S>0?S:0,n.setStyles(l,{left:C,top:S,display:"block"}),l.innerHTML=b+" &times; "+v,d[2]<0&&i.clientWidth<=b&&n.setStyle(i,"left",void 0+(f-b)),d[3]<0&&i.clientHeight<=v&&n.setStyle(i,"top",void 0+(g-v)),o=s.scrollWidth-y,r=s.scrollHeight-w,o+r!==0&&n.setStyles(l,{left:C-o,top:S-r}),h||(((e,t,n,o,r)=>{e.dispatch("ObjectResizeStart",{target:t,width:n,height:o,origin:r})})(t,a,f,g,"corner-"+d.name),h=!0)},O=()=>{const e=h;h=!1,e&&(N(a,"width",b),N(a,"height",v)),n.unbind(o,"mousemove",A),n.unbind(o,"mouseup",O),r!==o&&(n.unbind(r,"mousemove",A),n.unbind(r,"mouseup",O)),n.remove(i),n.remove(l),n.remove(c),T(a),e&&(((e,t,n,o,r)=>{e.dispatch("ObjectResized",{target:t,width:n,height:o,origin:r})})(t,a,b,v,"corner-"+d.name),n.setAttrib(a,"style",n.getAttrib(a,"style"))),t.nodeChanged()},T=e=>{M();const h=n.getPos(e,s),C=h.x,x=h.y,S=e.getBoundingClientRect(),N=S.width||S.right-S.left,T=S.height||S.bottom-S.top;a!==e&&(D(),a=e,b=v=0);const B=t.dispatch("ObjectSelected",{target:e});E(e)&&!B.isDefaultPrevented()?fe(im,((e,t)=>{let h;h=n.get("mceResizeHandle"+t),h&&n.remove(h),h=n.add(s,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:!0,style:"cursor:"+t+"-resize; margin:0; padding:0"}),n.bind(h,"mousedown",(h=>{h.stopImmediatePropagation(),h.preventDefault(),(h=>{const b=_(a)[0];var v;u=h.screenX,m=h.screenY,f=b.clientWidth,g=b.clientHeight,p=g/f,d=e,d.name=t,d.startPos={x:N*e[0]+C,y:T*e[1]+x},y=s.scrollWidth,w=s.scrollHeight,c=n.add(s,"div",{class:"mce-resize-backdrop","data-mce-bogus":"all"}),n.setStyles(c,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}),i=k(v=a)?n.create("img",{src:Nt.transparentSrc}):v.cloneNode(!0),n.addClass(i,"mce-clonedresizable"),n.setAttrib(i,"data-mce-bogus","all"),i.contentEditable="false",n.setStyles(i,{left:C,top:x,margin:0}),R(i,N,T),i.removeAttribute(rm),s.appendChild(i),n.bind(o,"mousemove",A),n.bind(o,"mouseup",O),r!==o&&(n.bind(r,"mousemove",A),n.bind(r,"mouseup",O)),l=n.add(s,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},f+" &times; "+g)})(h)})),e.elm=h,n.setStyles(h,{left:N*e[0]+C-h.offsetWidth/2,top:T*e[1]+x-h.offsetHeight/2})})):D(!1)},B=ia(T,0),D=(e=!0)=>{B.cancel(),M(),a&&e&&a.removeAttribute(rm),fe(im,((e,t)=>{const o=n.get("mceResizeHandle"+t);o&&(n.unbind(o),n.remove(o))}))},P=(e,t)=>C(e)&&n.isChildOf(e,t),L=o=>{if(h||t.removed||t.composing)return;const r="mousedown"===o.type?o.target:e.getNode(),a=Go(fn(r),"table,img,figure.image,hr,video,span.mce-preview-object").map((e=>e.dom)).getOrUndefined(),i=C(a)?n.getAttrib(a,rm,"1"):"1";if($(n.select("img[data-mce-selected],hr[data-mce-selected]"),(e=>{e.removeAttribute(rm)})),P(a,s)){I();const t=e.getStart(!0);if(P(t,a)&&P(e.getEnd(!0),a))return n.setAttrib(a,rm,i),void B.throttle(a)}D()},M=()=>{fe(im,(e=>{e.elm&&(n.unbind(e.elm),delete e.elm)}))},I=()=>{try{t.getDoc().execCommand("enableObjectResizing",!1,"false")}catch(e){}};return t.on("init",(()=>{I(),t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop",L),t.on("keyup compositionend",(e=>{a&&"TABLE"===a.nodeName&&L(e)})),t.on("hide blur",D),t.on("contextmenu longpress",S,!0)})),t.on("remove",M),{isResizable:E,showResizeRect:T,hideResizeRect:D,updateResizeRect:L,destroy:()=>{B.cancel(),a=i=c=null}}},dm=(e,t,n)=>{const o=e.document.createRange();var r;return r=o,t.fold((e=>{r.setStartBefore(e.dom)}),((e,t)=>{r.setStart(e.dom,t)}),(e=>{r.setStartAfter(e.dom)})),((e,t)=>{t.fold((t=>{e.setEndBefore(t.dom)}),((t,n)=>{e.setEnd(t.dom,n)}),(t=>{e.setEndAfter(t.dom)}))})(o,n),o},cm=(e,t,n,o,r)=>{const s=e.document.createRange();return s.setStart(t.dom,n),s.setEnd(o.dom,r),s},um=Ei([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]),mm=(e,t,n)=>t(fn(n.startContainer),n.startOffset,fn(n.endContainer),n.endOffset);um.ltr,um.rtl;const fm=(e,t,n,o)=>({start:e,soffset:t,finish:n,foffset:o}),gm=document.caretPositionFromPoint?(e,t,n)=>{var o,r;return M.from(null===(r=(o=e.dom).caretPositionFromPoint)||void 0===r?void 0:r.call(o,t,n)).bind((t=>{if(null===t.offsetNode)return M.none();const n=e.dom.createRange();return n.setStart(t.offsetNode,t.offset),n.collapse(),M.some(n)}))}:document.caretRangeFromPoint?(e,t,n)=>{var o,r;return M.from(null===(r=(o=e.dom).caretRangeFromPoint)||void 0===r?void 0:r.call(o,t,n))}:M.none,pm=Ei([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),hm={before:pm.before,on:pm.on,after:pm.after,cata:(e,t,n,o)=>e.fold(t,n,o),getStart:e=>e.fold(R,R,R)},bm=Ei([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),vm={domRange:bm.domRange,relative:bm.relative,exact:bm.exact,exactFromRange:e=>bm.exact(e.start,e.soffset,e.finish,e.foffset),getWin:e=>{const t=(e=>e.match({domRange:e=>fn(e.startContainer),relative:(e,t)=>hm.getStart(e),exact:(e,t,n,o)=>e}))(e);return xn(t)},range:fm},ym=(e,t)=>{const n=Mt(e);return"input"===n?hm.after(e):j(["br","img"],n)?0===t?hm.before(e):hm.after(e):hm.on(e,t)},Cm=(e,t)=>{const n=e.fold(hm.before,ym,hm.after),o=t.fold(hm.before,ym,hm.after);return vm.relative(n,o)},wm=(e,t,n,o)=>{const r=ym(e,t),s=ym(n,o);return vm.relative(r,s)},xm=(e,t)=>{const n=(t||document).createDocumentFragment();return $(e,(e=>{n.appendChild(e.dom)})),fn(n)},km=e=>{const t=vm.getWin(e).dom,n=(e,n,o,r)=>cm(t,e,n,o,r),o=(e=>e.match({domRange:e=>{const t=fn(e.startContainer),n=fn(e.endContainer);return wm(t,e.startOffset,n,e.endOffset)},relative:Cm,exact:wm}))(e);return((e,t)=>{const n=((e,t)=>t.match({domRange:e=>({ltr:N(e),rtl:M.none}),relative:(t,n)=>({ltr:De((()=>dm(e,t,n))),rtl:De((()=>M.some(dm(e,n,t))))}),exact:(t,n,o,r)=>({ltr:De((()=>cm(e,t,n,o,r))),rtl:De((()=>M.some(cm(e,o,r,t,n))))})}))(e,t);return((e,t)=>{const n=t.ltr();return n.collapsed?t.rtl().filter((e=>!1===e.collapsed)).map((e=>um.rtl(fn(e.endContainer),e.endOffset,fn(e.startContainer),e.startOffset))).getOrThunk((()=>mm(0,um.ltr,n))):mm(0,um.ltr,n)})(0,n)})(t,o).match({ltr:n,rtl:n})},Sm=(e,t,n)=>{return(o=n.defaultView,r=e,s=t,((e,t,n)=>{const o=fn(e.document);return gm(o,t,n).map((e=>fm(fn(e.startContainer),e.startOffset,fn(e.endContainer),e.endOffset)))})(o,r,s)).map((e=>{const t=n.createRange();return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),t})).getOrUndefined();var o,r,s},_m=(e,t)=>e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset,Em=(e,t,n)=>null!==((e,t,n)=>{for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null})(e,t,n),Nm=(e,t,n)=>Em(e,t,(e=>e.nodeName===n)),Rm=e=>e&&"TABLE"===e.nodeName,Am=e=>e&&/^(TD|TH|CAPTION)$/.test(e.nodeName),Om=(e,t)=>Or(e)&&!1===Em(e,t,Tc),Tm=(e,t,n)=>{const o=new Qo(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());for(;t=o[n?"prev":"next"]();)if(Po(t))return!0},Bm=(e,t,n,o,r)=>{let s;const a=e.getRoot();let i;const l=e.schema.getNonEmptyElements(),d=e.getParent(r.parentNode,e.isBlock)||a;if(o&&Po(r)&&t&&e.isEmpty(d))return M.some(ti(r.parentNode,e.nodeIndex(r)));const c=new Qo(r,d);for(;i=c[o?"prev":"next"]();){if("false"===e.getContentEditableParent(i)||Om(i,a))return M.none();if(Ro(i)&&i.nodeValue.length>0)return!1===Nm(i,a,"A")?M.some(ti(i,o?i.nodeValue.length:0)):M.none();if(e.isBlock(i)||l[i.nodeName.toLowerCase()])return M.none();s=i}return To(s)?M.none():n&&s?M.some(ti(s,0)):M.none()},Dm=(e,t,n,o)=>{let r,s;const a=e.getRoot();let i,l,d=!1;r=o[(n?"start":"end")+"Container"],s=o[(n?"start":"end")+"Offset"];const c=Co(r)&&s===r.childNodes.length,u=e.schema.getNonEmptyElements();if(l=n,Or(r))return M.none();if(Co(r)&&s>r.childNodes.length-1&&(l=!1),Bo(r)&&(r=a,s=0),r===a){if(l&&(i=r.childNodes[s>0?s-1:0],i)){if(Or(i))return M.none();if(u[i.nodeName]||Rm(i))return M.none()}if(r.hasChildNodes()){if(s=Math.min(!l&&s>0?s-1:s,r.childNodes.length-1),r=r.childNodes[s],s=Ro(r)&&c?r.data.length:0,!t&&r===a.lastChild&&Rm(r))return M.none();if(((e,t)=>{for(;t&&t!==e;){if(Io(t))return!0;t=t.parentNode}return!1})(a,r)||Or(r))return M.none();if(r.hasChildNodes()&&!1===Rm(r)){i=r;const t=new Qo(r,a);do{if(Io(i)||Or(i)){d=!1;break}if(Ro(i)&&i.nodeValue.length>0){s=l?0:i.nodeValue.length,r=i,d=!0;break}if(u[i.nodeName.toLowerCase()]&&!Am(i)){s=e.nodeIndex(i),r=i.parentNode,l||s++,d=!0;break}}while(i=l?t.next():t.prev())}}}return t&&(Ro(r)&&0===s&&Bm(e,c,t,!0,r).each((e=>{r=e.container(),s=e.offset(),d=!0})),Co(r)&&(i=r.childNodes[s],i||(i=r.childNodes[s-1]),!i||!Po(i)||((e,t)=>e.previousSibling&&"A"===e.previousSibling.nodeName)(i)||Tm(e,i,!1)||Tm(e,i,!0)||Bm(e,c,t,!0,i).each((e=>{r=e.container(),s=e.offset(),d=!0})))),l&&!t&&Ro(r)&&s===r.nodeValue.length&&Bm(e,c,t,!1,r).each((e=>{r=e.container(),s=e.offset(),d=!0})),d?M.some(ti(r,s)):M.none()},Pm=(e,t)=>{const n=t.collapsed,o=t.cloneRange(),r=ti.fromRangeStart(t);return Dm(e,n,!0,o).each((e=>{n&&ti.isAbove(r,e)||o.setStart(e.container(),e.offset())})),n||Dm(e,n,!1,o).each((e=>{o.setEnd(e.container(),e.offset())})),n&&o.collapse(!0),_m(t,o)?M.none():M.some(o)},Lm=(e,t)=>e.splitText(t),Mm=e=>{let t=e.startContainer,n=e.startOffset,o=e.endContainer,r=e.endOffset;return t===o&&Ro(t)?n>0&&n<t.nodeValue.length&&(o=Lm(t,n),t=o.previousSibling,r>n?(r-=n,t=o=Lm(o,r).previousSibling,r=o.nodeValue.length,n=0):r=0):(Ro(t)&&n>0&&n<t.nodeValue.length&&(t=Lm(t,n),n=0),Ro(o)&&r>0&&r<o.nodeValue.length&&(o=Lm(o,r).previousSibling,r=o.nodeValue.length)),{startContainer:t,startOffset:n,endContainer:o,endOffset:r}},Im=e=>({walk:(t,n)=>Bu(e,t,n),split:Mm,normalize:t=>Pm(e,t).fold(P,(e=>(t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0)))});Im.compareRanges=_m,Im.getCaretRangeFromPoint=Sm,Im.getSelectedNode=Pa,Im.getNode=La;const Fm=((e,t)=>{const n=t=>{const n=(e=>{const t=e.dom;return jn(e)?t.getBoundingClientRect().height:t.offsetHeight})(t);if(n<=0||null===n){const n=qn(t,e);return parseFloat(n)||0}return n},o=(e,t)=>Y(t,((t,n)=>{const o=qn(e,n),r=void 0===o?0:parseInt(o,10);return isNaN(r)?t:t+r}),0);return{set:(t,n)=>{if(!x(n)&&!n.match(/^[0-9]+$/))throw new Error(e+".set accepts only positive integer values. Value was "+n);const o=t.dom;ln(o)&&(o.style[e]=n+"px")},get:n,getOuter:n,aggregate:o,max:(e,t,n)=>{const r=o(e,n);return t>r?t-r:0}}})("height"),Um=()=>fn(document),zm=(e,t)=>e.view(t).fold(N([]),(t=>{const n=e.owner(t),o=zm(e,n);return[t].concat(o)}));var jm=Object.freeze({__proto__:null,view:e=>{var t;return(e.dom===document?M.none():M.from(null===(t=e.dom.defaultView)||void 0===t?void 0:t.frameElement)).map(fn)},owner:e=>wn(e)});const Vm=e=>"textarea"===Mt(e),Hm=(e,t)=>{const n=(e=>{const t=e.dom.ownerDocument,n=t.body,o=t.defaultView,r=t.documentElement;if(n===e.dom)return co(n.offsetLeft,n.offsetTop);const s=uo(null==o?void 0:o.pageYOffset,r.scrollTop),a=uo(null==o?void 0:o.pageXOffset,r.scrollLeft),i=uo(r.clientTop,n.clientTop),l=uo(r.clientLeft,n.clientLeft);return mo(e).translate(a-l,s-i)})(e),o=(e=>Fm.get(e))(e);return{element:e,bottom:n.top+o,height:o,pos:n,cleanup:t}},$m=(e,t,n,o)=>{Gm(e,((r,s)=>Wm(e,t,n,o)),n)},qm=(e,t,n,o,r)=>{const s={elm:o.element.dom,alignToTop:r};((e,t)=>e.dispatch("ScrollIntoView",t).isDefaultPrevented())(e,s)||(n(t,fo(t).top,o,r),((e,t)=>{e.dispatch("AfterScrollIntoView",t)})(e,s))},Wm=(e,t,n,o)=>{const r=fn(e.getBody()),s=fn(e.getDoc());r.dom.offsetWidth;const a=((e,t)=>{const n=((e,t)=>{const n=Rn(e);if(0===n.length||Vm(e))return{element:e,offset:t};if(t<n.length&&!Vm(n[t]))return{element:n[t],offset:0};{const o=n[n.length-1];return Vm(o)?{element:e,offset:t}:"img"===Mt(o)?{element:o,offset:1}:zt(o)?{element:o,offset:vr(o).length}:{element:o,offset:Rn(o).length}}})(e,t),o=cn('<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>');return Xn(n.element,o),Hm(o,(()=>no(o)))})(fn(n.startContainer),n.startOffset);qm(e,s,t,a,o),a.cleanup()},Km=(e,t,n,o)=>{const r=fn(e.getDoc());qm(e,r,n,(e=>Hm(fn(e),S))(t),o)},Gm=(e,t,n)=>{const o=n.startContainer,r=n.startOffset,s=n.endContainer,a=n.endOffset;t(fn(o),fn(s));const i=e.dom.createRng();i.setStart(o,r),i.setEnd(s,a),e.selection.setRng(n)},Ym=(e,t,n,o)=>{const r=e.pos;if(n)go(r.left,r.top,o);else{const n=r.top-t+e.height;go(r.left,n,o)}},Xm=(e,t,n,o,r)=>{const s=n+t,a=o.pos.top,i=o.bottom,l=i-a>=n;a<t?Ym(o,n,!1!==r,e):a>s?Ym(o,n,l?!1!==r:!0===r,e):i>s&&!l&&Ym(o,n,!0===r,e)},Qm=(e,t,n,o)=>{const r=e.dom.defaultView.innerHeight;Xm(e,t,r,n,o)},Jm=(e,t,n,o)=>{const r=e.dom.defaultView.innerHeight;Xm(e,t,r,n,o);const s=(e=>{const t=Um(),n=fo(t),o=((e,t)=>{const n=t.owner(e);return zm(t,n)})(e,jm),r=mo(e),s=G(o,((e,t)=>{const n=mo(t);return{left:e.left+n.left,top:e.top+n.top}}),{left:0,top:0});return co(s.left+r.left+n.left,s.top+r.top+n.top)})(n.element),a=bo(window);s.top<a.y?po(n.element,!1!==o):s.top>a.bottom&&po(n.element,!0===o)},Zm=(e,t,n)=>$m(e,Qm,t,n),ef=(e,t,n)=>Km(e,t,Qm,n),tf=(e,t,n)=>$m(e,Jm,t,n),nf=(e,t,n)=>Km(e,t,Jm,n),of=(e,t,n)=>{(e.inline?Zm:tf)(e,t,n)},rf=e=>e.dom.focus(),sf=e=>{const t=Mn(e).dom;return e.dom===t.activeElement},af=(e=Um())=>M.from(e.dom.activeElement).map(fn),lf=(e,t)=>{const n=zt(t)?vr(t).length:Rn(t).length+1;return e>n?n:e<0?0:e},df=e=>vm.range(e.start,lf(e.soffset,e.start),e.finish,lf(e.foffset,e.finish)),cf=(e,t)=>!yo(t.dom)&&(yn(e,t)||vn(e,t)),uf=e=>t=>cf(e,t.start)&&cf(e,t.finish),mf=e=>vm.range(fn(e.startContainer),e.startOffset,fn(e.endContainer),e.endOffset),ff=e=>{const t=document.createRange();try{return t.setStart(e.start.dom,e.soffset),t.setEnd(e.finish.dom,e.foffset),M.some(t)}catch(e){return M.none()}},gf=e=>{const t=(e=>e.inline)(e)?(n=fn(e.getBody()),(e=>{const t=e.getSelection();return(t&&0!==t.rangeCount?M.from(t.getRangeAt(0)):M.none()).map(mf)})(xn(n).dom).filter(uf(n))):M.none();var n;e.bookmark=t.isSome()?t:e.bookmark},pf=e=>(e.bookmark?e.bookmark:M.none()).bind((t=>{return n=fn(e.getBody()),o=t,M.from(o).filter(uf(n)).map(df);var n,o})).bind(ff),hf={isEditorUIElement:e=>{const t=e.className.toString();return-1!==t.indexOf("tox-")||-1!==t.indexOf("mce-")}},bf={setEditorTimeout:(e,t,n)=>((e,t)=>(x(t)||(t=0),setTimeout(e,t)))((()=>{e.removed||t()}),n),setEditorInterval:(e,t,n)=>{const o=((e,t)=>(x(t)||(t=0),setInterval(e,t)))((()=>{e.removed?clearInterval(o):t()}),n);return o}};let vf;const yf=Qs.DOM,Cf=(e,t)=>{const n=Dl(e),o=yf.getParent(t,(t=>(e=>hf.isEditorUIElement(e))(t)||!!n&&e.dom.is(t,n)));return null!==o},wf=(e,t)=>{const n=t.editor;(e=>{const t=ia((()=>{gf(e)}),0);e.on("init",(()=>{e.inline&&((e,t)=>{const n=()=>{t.throttle()};Qs.DOM.bind(document,"mouseup",n),e.on("remove",(()=>{Qs.DOM.unbind(document,"mouseup",n)}))})(e,t),((e,t)=>{((e,t)=>{e.on("mouseup touchend",(e=>{t.throttle()}))})(e,t),e.on("keyup NodeChange AfterSetSelectionRange",(t=>{(e=>"nodechange"===e.type&&e.selectionChange)(t)||gf(e)}))})(e,t)})),e.on("remove",(()=>{t.cancel()}))})(n),n.on("focusin",(()=>{const t=e.focusedEditor;t!==n&&(t&&t.dispatch("blur",{focusedEditor:n}),e.setActive(n),e.focusedEditor=n,n.dispatch("focus",{blurredEditor:t}),n.focus(!0))})),n.on("focusout",(()=>{bf.setEditorTimeout(n,(()=>{const t=e.focusedEditor;Cf(n,(e=>{try{const t=Mn(fn(e.getElement()));return af(t).fold((()=>document.body),(e=>e.dom))}catch(e){return document.body}})(n))||t!==n||(n.dispatch("blur",{focusedEditor:null}),e.focusedEditor=null)}))})),vf||(vf=t=>{const n=e.activeEditor;n&&Un(t).each((t=>{t.ownerDocument===document&&(t===document.body||Cf(n,t)||e.focusedEditor!==n||(n.dispatch("blur",{focusedEditor:null}),e.focusedEditor=null))}))},yf.bind(document,"focusin",vf))},xf=(e,t)=>{e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(yf.unbind(document,"focusin",vf),vf=null)},kf=(e,t)=>{((e,t)=>(e=>e.collapsed?M.from(La(e.startContainer,e.startOffset)).map(fn):M.none())(t).bind((t=>ar(t)?M.some(t):!1===yn(e,t)?M.some(e):M.none())))(fn(e.getBody()),t).bind((e=>Rc(e.dom))).fold((()=>{e.selection.normalize()}),(t=>e.selection.setRng(t.toRange())))},Sf=e=>{if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},_f=e=>e.inline?(e=>{const t=e.getBody();return t&&(n=fn(t),sf(n)||(o=n,af(Mn(o)).filter((e=>o.dom.contains(e.dom)))).isSome());var n,o})(e):(e=>e.iframeElement&&sf(fn(e.iframeElement)))(e),Ef=e=>e.editorManager.setActive(e),Nf=(e,t,n,o,r)=>{const s=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset;return M.from(s).map(fn).map((e=>o&&t.collapsed?e:An(e,r(e,a)).getOr(e))).bind((e=>Ut(e)?M.some(e):kn(e).filter(Ut))).map((e=>e.dom)).getOr(e)},Rf=(e,t,n)=>Nf(e,t,!0,n,((e,t)=>Math.min(Bn(e),t))),Af=(e,t,n)=>Nf(e,t,!1,n,((e,t)=>t>0?t-1:t)),Of=(e,t)=>{const n=e;for(;e&&Ro(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n},Tf=(e,t)=>H(t,(t=>{const n=e.dispatch("GetSelectionRange",{range:t});return n.range!==t?n.range:t})),Bf=["img","br"],Df=e=>{const t=yr(e).filter((e=>0!==e.trim().length||e.indexOf(fr)>-1)).isSome();return t||j(Bf,Mt(e))},Pf="[data-mce-autocompleter]",Lf=(e,t)=>{if(Mf(fn(e.getBody())).isNone()){const o=cn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>',e.getDoc());Zn(o,fn(t.extractContents())),t.insertNode(o.dom),kn(o).each((e=>e.dom.normalize())),(n=o,((e,t)=>{const n=e=>{const o=Rn(e);for(let e=o.length-1;e>=0;e--){const r=o[e];if(t(r))return M.some(r);const s=n(r);if(s.isSome())return s}return M.none()};return n(e)})(n,Df)).map((t=>{e.selection.setCursorLocation(t.dom,(e=>"img"===Mt(e)?1:yr(e).fold((()=>Rn(e).length),(e=>e.length)))(t))}))}var n},Mf=e=>Ko(e,Pf),If={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},Ff=(e,t,n)=>{const o=n?"lastChild":"firstChild",r=n?"prev":"next";if(e[o])return e[o];if(e!==t){let n=e[r];if(n)return n;for(let o=e.parent;o&&o!==t;o=o.parent)if(n=o[r],n)return n}},Uf=e=>{if(!Xr(e.value))return!1;const t=e.parent;return!t||"span"===t.name&&!t.attr("style")||!/^[ ]+$/.test(e.value)},zf=e=>{const t="a"===e.name&&!e.attr("href")&&e.attr("id");return e.attr("name")||e.attr("id")&&!e.firstChild||e.attr("data-mce-bookmark")||t};class jf{constructor(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}static create(e,t){const n=new jf(e,If[e]||1);return t&&fe(t,((e,t)=>{n.attr(t,e)})),n}replace(e){const t=this;return e.parent&&e.remove(),t.insert(e,t),t.remove(),t}attr(e,t){const n=this;let o;if("string"!=typeof e)return null!=e&&fe(e,((e,t)=>{n.attr(t,e)})),n;if(o=n.attributes){if(void 0!==t){if(null===t){if(e in o.map){delete o.map[e];let t=o.length;for(;t--;)if(o[t].name===e)return o.splice(t,1),n}return n}if(e in o.map){let n=o.length;for(;n--;)if(o[n].name===e){o[n].value=t;break}}else o.push({name:e,value:t});return o.map[e]=t,n}return o.map[e]}}clone(){const e=this,t=new jf(e.name,e.type);let n;if(n=e.attributes){const e=[];e.map={};for(let t=0,o=n.length;t<o;t++){const o=n[t];"id"!==o.name&&(e[e.length]={name:o.name,value:o.value},e.map[o.name]=o.value)}t.attributes=e}return t.value=e.value,t}wrap(e){const t=this;return t.parent.insert(e,t),e.append(t),t}unwrap(){const e=this;for(let t=e.firstChild;t;){const n=t.next;e.insert(t,e,!0),t=n}e.remove()}remove(){const e=this,t=e.parent,n=e.next,o=e.prev;return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):o.next=n,t.lastChild===e?(t.lastChild=o,o&&(o.next=null)):n.prev=o,e.parent=e.next=e.prev=null),e}append(e){const t=this;e.parent&&e.remove();const n=t.lastChild;return n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e}insert(e,t,n){e.parent&&e.remove();const o=t.parent||this;return n?(t===o.firstChild?o.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===o.lastChild?o.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=o,e}getAll(e){const t=this,n=[];for(let o=t.firstChild;o;o=Ff(o,t))o.name===e&&n.push(o);return n}children(){const e=[];for(let t=this.firstChild;t;t=t.next)e.push(t);return e}empty(){const e=this;if(e.firstChild){const t=[];for(let n=e.firstChild;n;n=Ff(n,e))t.push(n);let n=t.length;for(;n--;){const e=t[n];e.parent=e.firstChild=e.lastChild=e.next=e.prev=null}}return e.firstChild=e.lastChild=null,e}isEmpty(e,t={},n){const o=this;let r=o.firstChild;if(zf(o))return!1;if(r)do{if(1===r.type){if(r.attr("data-mce-bogus"))continue;if(e[r.name])return!1;if(zf(r))return!1}if(8===r.type)return!1;if(3===r.type&&!Uf(r))return!1;if(3===r.type&&r.parent&&t[r.parent.name]&&Xr(r.value))return!1;if(n&&n(r))return!1}while(r=Ff(r,o));return!0}walk(e){return Ff(this,null,e)}}const Vf=(e,t,n=0)=>{const o=e.toLowerCase();if(-1!==o.indexOf("[if ",n)&&((e,t)=>/^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t)))(o,n)){const e=o.indexOf("[endif]",n);return o.indexOf(">",e)}if(t){const e=o.indexOf(">",n);return-1!==e?e:o.length}{const t=/--!?>/g;t.lastIndex=n;const r=t.exec(e);return r?r.index+r[0].length:o.length}},Hf=(e,t,n)=>{const o=/<([!?\/])?([A-Za-z0-9\-_:.]+)/g,r=/(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,s=e.getVoidElements();let a=1,i=n;for(;0!==a;)for(o.lastIndex=i;;){const e=o.exec(t);if(null===e)return i;if("!"===e[1]){i=ze(e[2],"--")?Vf(t,!1,e.index+"!--".length):Vf(t,!0,e.index+1);break}{r.lastIndex=o.lastIndex;const n=r.exec(t);if(h(n)||n.index!==o.lastIndex)continue;"/"===e[1]?a-=1:xe(s,e[2])||(a+=1),i=o.lastIndex+n[0].length;break}}return i},$f=(e,t)=>{const n=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,o=e.schema;let r=((e,t)=>{const n=new RegExp(["\\s?("+e.join("|")+')="[^"]+"'].join("|"),"gi");return t.replace(n,"")})(e.getTempAttrs(),t);const s=o.getVoidElements();let a;for(;a=n.exec(r);){const e=n.lastIndex,t=a[0].length;let i;i=s[a[1]]?e:Hf(o,r,e),r=r.substring(0,e-t)+r.substring(i),n.lastIndex=e-t}return _r(r)},qf=$f,Wf=Bt.each,Kf=e=>({compare:(t,n)=>{if(t.nodeName!==n.nodeName)return!1;const o=t=>{const n={};return Wf(e.getAttribs(t),(o=>{const r=o.nodeName.toLowerCase();0!==r.indexOf("_")&&"style"!==r&&0!==r.indexOf("data-")&&(n[r]=e.getAttrib(t,r))})),n},r=(e,t)=>{let n,o;for(o in e)if(xe(e,o)){if(n=t[o],void 0===n)return!1;if(e[o]!==n)return!1;delete t[o]}for(o in t)if(xe(t,o))return!1;return!0};return!(!r(o(t),o(n))||!r(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style")))||$c(t)||$c(n))}}),Gf=Bt.makeMap,Yf=e=>{const t=[],n=(e=e||{}).indent,o=Gf(e.indent_before||""),r=Gf(e.indent_after||""),s=Cs.getEncodeFunc(e.entity_encoding||"raw",e.entities),a="xhtml"!==e.element_format;return{start:(e,i,l)=>{let d,c,u,m;if(n&&o[e]&&t.length>0&&(m=t[t.length-1],m.length>0&&"\n"!==m&&t.push("\n")),t.push("<",e),i)for(d=0,c=i.length;d<c;d++)u=i[d],t.push(" ",u.name,'="',s(u.value,!0),'"');t[t.length]=!l||a?">":" />",l&&n&&r[e]&&t.length>0&&(m=t[t.length-1],m.length>0&&"\n"!==m&&t.push("\n"))},end:e=>{let o;t.push("</",e,">"),n&&r[e]&&t.length>0&&(o=t[t.length-1],o.length>0&&"\n"!==o&&t.push("\n"))},text:(e,n)=>{e.length>0&&(t[t.length]=n?e:s(e))},cdata:e=>{t.push("<![CDATA[",e,"]]>")},comment:e=>{t.push("\x3c!--",e,"--\x3e")},pi:(e,o)=>{o?t.push("<?",e," ",s(o),"?>"):t.push("<?",e,"?>"),n&&t.push("\n")},doctype:e=>{t.push("<!DOCTYPE",e,">",n?"\n":"")},reset:()=>{t.length=0},getContent:()=>t.join("").replace(/\n$/,"")}},Xf=(e,t=Bs())=>{const n=Yf(e);return(e=e||{}).validate=!("validate"in e)||e.validate,{serialize:o=>{const r=e.validate,s={3:e=>{n.text(e.value,e.raw)},8:e=>{n.comment(e.value)},7:e=>{n.pi(e.name,e.value)},10:e=>{n.doctype(e.value)},4:e=>{n.cdata(e.value)},11:e=>{if(e=e.firstChild)do{a(e)}while(e=e.next)}};n.reset();const a=e=>{const o=s[e.type];if(o)o(e);else{const o=e.name,s=o in t.getVoidElements();let i=e.attributes;if(r&&i&&i.length>1){const n=[];n.map={};const o=t.getElementRule(e.name);if(o){for(let e=0,t=o.attributesOrder.length;e<t;e++){const t=o.attributesOrder[e];if(t in i.map){const e=i.map[t];n.map[t]=e,n.push({name:t,value:e})}}for(let e=0,t=i.length;e<t;e++){const t=i[e].name;if(!(t in n.map)){const e=i.map[t];n.map[t]=e,n.push({name:t,value:e})}}i=n}}if(n.start(o,i,s),!s){let t=e.firstChild;if(t){"pre"!==o&&"textarea"!==o||3!==t.type||"\n"!==t.value[0]||n.text("\n",!0);do{a(t)}while(t=t.next)}n.end(o)}}};return 1!==o.type||e.inner?3===o.type?s[3](o):s[11](o):a(o),n.getContent()}}},Qf=new Set;$(["margin","margin-left","margin-right","margin-top","margin-bottom","padding","padding-left","padding-right","padding-top","padding-bottom","border","border-width","border-style","border-color","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","float","position","left","right","top","bottom","z-index","display","transform","width","max-width","min-width","height","max-height","min-height","overflow","overflow-x","overflow-y","text-overflow","vertical-align","transition","transition-delay","transition-duration","transition-property","transition-timing-function"],(e=>{Qf.add(e)}));const Jf=["font","text-decoration","text-emphasis"],Zf=(e,t)=>ue(e.parseStyle(e.getAttrib(t,"style"))),eg=(e,t,n)=>{const o=Zf(e,t),r=Zf(e,n),s=o=>{var r,s;const a=null!==(r=e.getStyle(t,o))&&void 0!==r?r:"",i=null!==(s=e.getStyle(n,o))&&void 0!==s?s:"";return We(a)&&We(i)&&a!==i};return V(o,(e=>{const t=t=>V(t,(t=>t===e));if(!t(r)&&t(Jf)){const e=K(r,(e=>V(Jf,(t=>ze(e,t)))));return V(e,s)}return s(e)}))},tg=(e,t,n)=>M.from(n.container()).filter(Ro).exists((o=>{const r=e?0:-1;return t(o.data.charAt(n.offset()+r))})),ng=O(tg,!0,Wc),og=O(tg,!1,Wc),rg=e=>{const t=e.container();return Ro(t)&&(0===t.data.length||Sr(t.data)&&Yu.isBookmarkNode(t.parentNode))},sg=(e,t)=>n=>M.from(Yd(e?0:-1,n)).filter(t).isSome(),ag=e=>Lo(e)&&"block"===qn(fn(e),"display"),ig=e=>Io(e)&&!(e=>Co(e)&&"all"===e.getAttribute("data-mce-bogus"))(e),lg=sg(!0,ag),dg=sg(!1,ag),cg=sg(!0,Uo),ug=sg(!1,Uo),mg=sg(!0,_o),fg=sg(!1,_o),gg=sg(!0,ig),pg=sg(!1,ig),hg=(e,t)=>((e,t,n)=>{return yn(t,e)?(o=((e,t)=>{const n=w(t)?t:P;let o=e.dom;const r=[];for(;null!==o.parentNode&&void 0!==o.parentNode;){const e=o.parentNode,t=fn(e);if(r.push(t),!0===n(t))break;o=e}return r})(e,(e=>n(e)||vn(e,t))),o.slice(0,-1)):[];var o})(e,t,P),bg=(e,t)=>[e].concat(hg(e,t)),vg=(e,t,n)=>Sc(e,t,n,rg),yg=(e,t)=>Q(bg(fn(t.container()),e),er),Cg=(e,t,n)=>vg(e,t.dom,n).forall((e=>yg(t,n).fold((()=>!1===Gd(e,n,t.dom)),(o=>!1===Gd(e,n,t.dom)&&yn(o,fn(e.container())))))),wg=(e,t,n)=>yg(t,n).fold((()=>vg(e,t.dom,n).forall((e=>!1===Gd(e,n,t.dom)))),(t=>vg(e,t.dom,n).isNone())),xg=O(wg,!1),kg=O(wg,!0),Sg=O(Cg,!1),_g=O(Cg,!0),Eg=e=>rc(e).exists(nr),Ng=(e,t,n)=>{const o=K(bg(fn(n.container()),t),er),r=ie(o).getOr(t);return xc(e,r.dom,n).filter(Eg)},Rg=(e,t)=>rc(t).exists(nr)||Ng(!0,e,t).isSome(),Ag=(e,t)=>(e=>M.from(e.getNode(!0)).map(fn))(t).exists(nr)||Ng(!1,e,t).isSome(),Og=O(Ng,!1),Tg=O(Ng,!0),Bg=e=>ti.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd(),Dg=(e,t)=>{const n=K(bg(fn(t.container()),e),er);return ie(n).getOr(e)},Pg=(e,t)=>Bg(t)?og(t):og(t)||Nc(Dg(e,t).dom,t).exists(og),Lg=(e,t)=>Bg(t)?ng(t):ng(t)||Ec(Dg(e,t).dom,t).exists(ng),Mg=e=>rc(e).bind((e=>qo(e,Ut))).exists((e=>(e=>j(["pre","pre-wrap"],e))(qn(e,"white-space")))),Ig=(e,t)=>!Mg(t)&&(xg(e,t)||Sg(e,t)||Ag(e,t)||Pg(e,t)),Fg=(e,t)=>!Mg(t)&&(kg(e,t)||_g(e,t)||Rg(e,t)||Lg(e,t)||((e,t)=>{const n=Ec(e.dom,t).getOr(t),o=(e=>t=>{return n=new Qo(t,e).next(),C(n)&&Io(n)&&Fd(n);var n})(e.dom);return t.isAtEnd()&&(o(t.container())||o(n.container()))})(e,t)),Ug=(e,t)=>Ig(e,t)||Fg(e,(e=>{const t=e.container(),n=e.offset();return Ro(t)&&n<t.data.length?ti(t,n+1):e})(t)),zg=(e,t)=>qc(e.charAt(t)),jg=e=>{const t=e.container();return Ro(t)&&Ue(t.data,fr)},Vg=(e,t)=>M.some(t).filter(jg).bind((t=>{const n=t.container(),o=((e,t)=>{const n=t.data,o=ti(t,0);return!(!zg(n,0)||Ug(e,o)||(t.data=" "+n.slice(1),0))})(e,n)||(e=>{const t=e.data,n=(e=>{const t=e.split("");return H(t,((e,n)=>qc(e)&&n>0&&n<t.length-1&&Kc(t[n-1])&&Kc(t[n+1])?" ":e)).join("")})(t);return n!==t&&(e.data=n,!0)})(n)||((e,t)=>{const n=t.data,o=ti(t,n.length-1);return!(!zg(n,n.length-1)||Ug(e,o)||(t.data=n.slice(0,-1)+" ",0))})(e,n);return o?M.some(t):M.none()})),Hg=(e,t,n)=>{if(0===n)return;const o=fn(e),r=$o(o,er).getOr(o),s=e.data.slice(t,t+n),a=t+n>=e.data.length&&Fg(r,ti(e,e.data.length)),i=0===t&&Ig(r,ti(e,0));e.replaceData(t,n,Jr(s,4,i,a))},$g=(e,t)=>{const n=e.data.slice(t),o=n.length-$e(n).length;Hg(e,t,o)},qg=(e,t)=>{const n=e.data.slice(0,t),o=n.length-qe(n).length;Hg(e,t-o,o)},Wg=(e,t,n,o=!0)=>{const r=qe(e.data).length,s=o?e:t,a=o?t:e;return o?s.appendData(a.data):s.insertData(0,a.data),no(fn(a)),n&&$g(s,r),s},Kg=(e,t)=>((e,t)=>{const n=e.container(),o=e.offset();return!1===ti.isTextPosition(e)&&n===t.parentNode&&o>ti.before(t).offset()})(t,e)?ti(t.container(),t.offset()-1):t,Gg=e=>{return Wr(e.previousSibling)?M.some((t=e.previousSibling,Ro(t)?ti(t,t.data.length):ti.after(t))):e.previousSibling?Ac(e.previousSibling):M.none();var t},Yg=e=>{return Wr(e.nextSibling)?M.some((t=e.nextSibling,Ro(t)?ti(t,0):ti.before(t))):e.nextSibling?Rc(e.nextSibling):M.none();var t},Xg=(e,t,n)=>((e,t,n)=>e?((e,t)=>Yg(t).orThunk((()=>Gg(t))).orThunk((()=>((e,t)=>Ec(e,ti.after(t)).fold((()=>Nc(e,ti.before(t))),M.some))(e,t))))(t,n):((e,t)=>Gg(t).orThunk((()=>Yg(t))).orThunk((()=>((e,t)=>{const n=ti.before(t.previousSibling?t.previousSibling:t.parentNode);return Nc(e,n).fold((()=>Ec(e,ti.after(t))),M.some)})(e,t))))(t,n))(e,t,n).map(O(Kg,n)),Qg=(e,t,n)=>{n.fold((()=>{e.focus()}),(n=>{e.selection.setRng(n.toRange(),t)}))},Jg=(e,t)=>t&&xe(e.schema.getBlockElements(),Mt(t)),Zg=e=>{if(os(e)){const t=cn('<br data-mce-bogus="1">');return to(e),Zn(e,t),M.some(ti.before(t.dom))}return M.none()},ep=(e,t,n,o=!0)=>{const r=Xg(t,e.getBody(),n.dom),s=$o(n,O(Jg,e),(a=e.getBody(),e=>e.dom===a));var a;const i=((e,t,n)=>{const o=Sn(e).filter(zt),r=_n(e).filter(zt);return no(e),(s=o,a=r,i=t,l=(e,t,o)=>{const r=e.dom,s=t.dom,a=r.data.length;return Wg(r,s,n),o.container()===s?ti(r,a):o},s.isSome()&&a.isSome()&&i.isSome()?M.some(l(s.getOrDie(),a.getOrDie(),i.getOrDie())):M.none()).orThunk((()=>(n&&(o.each((e=>qg(e.dom,e.dom.length))),r.each((e=>$g(e.dom,0)))),t)));var s,a,i,l})(n,r,((e,t)=>xe(e.schema.getTextInlineElements(),Mt(t)))(e,n));e.dom.isEmpty(e.getBody())?(e.setContent(""),e.selection.setCursorLocation()):s.bind(Zg).fold((()=>{o&&Qg(e,t,i)}),(n=>{o&&Qg(e,t,M.some(n))}))},tp=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,np=(e,t)=>hn(fn(t),yl(e)),op=(e,t,n)=>{const o=((e,t,n)=>K(Qs.DOM.getParents(n.container(),"*",t),e))(e,t,n);return M.from(o[o.length-1])},rp=(e,t)=>{if(!t)return t;const n=t.container(),o=t.offset();return e?Ar(n)?Ro(n.nextSibling)?ti(n.nextSibling,0):ti.after(n):Br(t)?ti(n,o+1):t:Ar(n)?Ro(n.previousSibling)?ti(n.previousSibling,n.previousSibling.data.length):ti.before(n):Dr(t)?ti(n,o-1):t},sp=O(rp,!0),ap=O(rp,!1),ip=(e,t)=>{const n=e=>e.stopImmediatePropagation();e.on("beforeinput input",n,!0),e.getDoc().execCommand(t),e.off("beforeinput input",n)},lp=e=>ip(e,"Delete"),dp=e=>or(e)||sr(e),cp=(e,t)=>yn(e,t)?qo(t,dp,(e=>t=>vn(e,fn(t.dom.parentNode)))(e)):M.none(),up=(e,t=!0)=>{e.dom.isEmpty(e.getBody())&&e.setContent("",{no_selection:!t})},mp=e=>{var t;return(8===It(t=e)||"#comment"===Mt(t)?Sn(e):Tn(e)).bind(mp).orThunk((()=>M.some(e)))},fp=(e,t,n,o=!0)=>{var r;t.deleteContents();const s=mp(n).getOr(n),a=fn(null!==(r=e.dom.getParent(s.dom,e.dom.isBlock))&&void 0!==r?r:n.dom);if(a.dom===e.getBody()?up(e,o):os(a)&&(wr(a),o&&e.selection.setCursorLocation(a.dom,0)),!vn(n,a)){const e=Dt(kn(a),n)?[]:kn(i=a).map(Rn).map((e=>K(e,(e=>!vn(i,e))))).getOr([]);$(e.concat(Rn(n)),(e=>{vn(e,a)||yn(e,a)||!os(e)||no(e)}))}var i},gp=e=>hr(e,"td,th"),pp=(e,t)=>({start:e,end:t}),hp=Ei([{singleCellTable:["rng","cell"]},{fullTable:["table"]},{partialTable:["cells","outsideDetails"]},{multiTable:["startTableCells","endTableCells","betweenRng"]}]),bp=(e,t)=>Go(fn(e),"td,th",t),vp=e=>!vn(e.start,e.end),yp=(e,t)=>Mu(e.start,t).bind((n=>Mu(e.end,t).bind((e=>Lt(vn(n,e),n))))),Cp=e=>t=>yp(t,e).map((e=>((e,t,n)=>({rng:e,table:t,cells:n}))(t,e,gp(e)))),wp=(e,t,n,o)=>{if(n.collapsed||!e.forall(vp))return M.none();if(t.isSameTable){const t=e.bind(Cp(o));return M.some({start:t,end:t})}{const e=bp(n.startContainer,o),t=bp(n.endContainer,o),r=e.bind((e=>t=>Mu(t,e).bind((e=>le(gp(e)).map((e=>pp(t,e))))))(o)).bind(Cp(o)),s=t.bind((e=>t=>Mu(t,e).bind((e=>ie(gp(e)).map((e=>pp(e,t))))))(o)).bind(Cp(o));return M.some({start:r,end:s})}},xp=(e,t)=>J(e,(e=>vn(e,t))),kp=e=>Pt(xp(e.cells,e.rng.start),xp(e.cells,e.rng.end),((t,n)=>e.cells.slice(t,n+1))),Sp=(e,t)=>{const{startTable:n,endTable:o}=t,r=e.cloneRange();return n.each((e=>r.setStartAfter(e.dom))),o.each((e=>r.setEndBefore(e.dom))),r},_p=(e,t)=>{const n=(e=>t=>vn(e,t))(e),o=((e,t)=>{const n=bp(e.startContainer,t),o=bp(e.endContainer,t);return Pt(n,o,pp)})(t,n),r=((e,t)=>{const n=e=>Mu(fn(e),t),o=n(e.startContainer),r=n(e.endContainer),s=o.isSome(),a=r.isSome(),i=Pt(o,r,vn).getOr(!1);return{startTable:o,endTable:r,isStartInTable:s,isEndInTable:a,isSameTable:i,isMultiTable:!i&&s&&a}})(t,n);return((e,t,n)=>e.exists((e=>((e,t)=>!vp(e)&&yp(e,t).exists((e=>{const t=e.dom.rows;return 1===t.length&&1===t[0].cells.length})))(e,n)&&Uu(e.start,t))))(o,t,n)?o.map((e=>hp.singleCellTable(t,e.start))):r.isMultiTable?((e,t,n,o)=>wp(e,t,n,o).bind((({start:e,end:o})=>{const r=e.bind(kp).getOr([]),s=o.bind(kp).getOr([]);if(r.length>0&&s.length>0){const e=Sp(n,t);return M.some(hp.multiTable(r,s,e))}return M.none()})))(o,r,t,n):((e,t,n,o)=>wp(e,t,n,o).bind((({start:e,end:t})=>e.or(t))).bind((e=>{const{isSameTable:o}=t,r=kp(e).getOr([]);if(o&&e.cells.length===r.length)return M.some(hp.fullTable(e.table));if(r.length>0){if(o)return M.some(hp.partialTable(r,M.none()));{const e=Sp(n,t);return M.some(hp.partialTable(r,M.some({...t,rng:e})))}}return M.none()})))(o,r,t,n)},Ep=e=>$(e,(e=>{Xt(e,"contenteditable"),wr(e)})),Np=(e,t,n,o)=>{const r=n.cloneRange();o?(r.setStart(n.startContainer,n.startOffset),r.setEndAfter(t.dom.lastChild)):(r.setStartBefore(t.dom.firstChild),r.setEnd(n.endContainer,n.endOffset)),Tp(e,r,t,!1).each((e=>e()))},Rp=e=>{const t=Lu(e),n=fn(e.selection.getNode());Fo(n.dom)&&os(n)?e.selection.setCursorLocation(n.dom,0):e.selection.collapse(!0),t.length>1&&V(t,(e=>vn(e,n)))&&qt(n,"data-mce-selected","1")},Ap=(e,t,n)=>M.some((()=>{const o=e.selection.getRng(),r=n.bind((({rng:n,isStartInTable:r})=>{const s=((e,t)=>M.from(e.dom.getParent(t,e.dom.isBlock)).map(fn))(e,r?n.endContainer:n.startContainer);n.deleteContents(),((e,t,n)=>{n.each((n=>{t?no(n):(wr(n),e.selection.setCursorLocation(n.dom,0))}))})(e,r,s.filter(os));const a=r?t[0]:t[t.length-1];return Np(e,a,o,r),os(a)?M.none():M.some(r?t.slice(1):t.slice(0,-1))})).getOr(t);Ep(r),Rp(e)})),Op=(e,t,n,o)=>M.some((()=>{const r=e.selection.getRng(),s=t[0],a=n[n.length-1];Np(e,s,r,!0),Np(e,a,r,!1);const i=os(s)?t:t.slice(1),l=os(a)?n:n.slice(0,-1);Ep(i.concat(l)),o.deleteContents(),Rp(e)})),Tp=(e,t,n,o=!0)=>M.some((()=>{fp(e,t,n,o)})),Bp=(e,t)=>M.some((()=>ep(e,!1,t))),Dp=(e,t)=>Q(bg(t,e),ir),Pp=(e,t)=>Q(bg(t,e),Ht("caption")),Lp=(e,t)=>M.some((()=>{wr(t),e.selection.setCursorLocation(t.dom,0)})),Mp=(e,t)=>e?mg(t):fg(t),Ip=(e,t,n)=>{const o=fn(e.getBody());return Pp(o,n).fold((()=>((e,t,n,o)=>{const r=ti.fromRangeStart(e.selection.getRng());return Dp(n,o).bind((o=>os(o)?Lp(e,o):((e,t,n,o,r)=>kc(n,e.getBody(),r).bind((e=>Dp(t,fn(e.getNode())).bind((e=>vn(e,o)?M.none():M.some(S))))))(e,n,t,o,r)))})(e,t,o,n).orThunk((()=>Lt(((e,t)=>{const n=ti.fromRangeStart(e.selection.getRng());return Mp(t,n)||xc(t,e.getBody(),n).exists((e=>Mp(t,e)))})(e,t),S)))),(n=>((e,t,n,o)=>{const r=ti.fromRangeStart(e.selection.getRng());return os(o)?Lp(e,o):((e,t,n,o,r)=>kc(n,e.getBody(),r).fold((()=>M.some(S)),(s=>((e,t,n,o)=>Rc(e.dom).bind((r=>Ac(e.dom).map((e=>t?n.isEqual(r)&&o.isEqual(e):n.isEqual(e)&&o.isEqual(r))))).getOr(!0))(o,n,r,s)?((e,t)=>Lp(e,t))(e,o):((e,t,n)=>Pp(e,fn(n.getNode())).fold((()=>M.some(S)),(e=>Lt(!vn(e,t),S))))(t,o,s))))(e,n,t,o,r)})(e,t,o,n)))},Fp=(e,t)=>{const n=fn(e.selection.getStart(!0)),o=Lu(e);return e.selection.isCollapsed()&&0===o.length?Ip(e,t,n):((e,t,n)=>{const o=fn(e.getBody()),r=e.selection.getRng();return 0!==n.length?Ap(e,n,M.none()):((e,t,n,o)=>Pp(t,o).fold((()=>((e,t,n)=>_p(t,n).bind((t=>t.fold(O(Tp,e),O(Bp,e),O(Ap,e),O(Op,e)))))(e,t,n)),(t=>((e,t)=>Lp(e,t))(e,t))))(e,o,r,t)})(e,n,o)},Up=(e,t)=>{for(;t&&t!==e;){if(Mo(t)||Io(t))return t;t=t.parentNode}return null},zp=(e,t)=>{t(e),e.firstChild&&zp(e.firstChild,t),e.next&&zp(e.next,t)},jp=(e,t,n,o)=>{const r=n.name;for(let t=0,s=e.length;t<s;t++){const s=e[t];if(s.name===r){const e=o.nodes[r];e?e.nodes.push(n):o.nodes[r]={filter:s,nodes:[n]}}}if(n.attributes)for(let e=0,r=t.length;e<r;e++){const r=t[e],s=r.name;if(s in n.attributes.map){const e=o.attributes[s];e?e.nodes.push(n):o.attributes[s]={filter:r,nodes:[n]}}}},Vp=(e,t)=>{const n=e=>{fe(e,(e=>{const n=K(e.nodes,(e=>C(e.parent)));$(e.filter.callbacks,(o=>{o(n,e.filter.name,t)}))}))};n(e.nodes),n(e.attributes)},Hp=(e,t,n,o={})=>{const r=((e,t,n)=>{const o={nodes:{},attributes:{}};return n.firstChild&&zp(n.firstChild,(n=>{jp(e,t,n,o)})),o})(e,t,n);Vp(r,o)},$p=(e,t,n,o)=>{t.insert&&n[o.name]?o.empty().append(new jf("br",1)):o.empty().append(new jf("#text",3)).value=fr},qp=(e,t)=>e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t,Wp=(e,t,n,o)=>o.isEmpty(t,n,(t=>((e,t)=>{const n=e.getElementRule(t.name);return n&&n.paddEmpty})(e,t))),Kp=(e,t,n=e.parent)=>{if(t.getSpecialElements()[e.name])e.empty().remove();else{const o=e.children();for(const e of o)t.isValidChild(n.name,e.name)||Kp(e,t,n);e.unwrap()}},Gp=(e,t,n=S)=>{const o=t.getTextBlockElements(),r=t.getNonEmptyElements(),s=t.getWhitespaceElements(),a=Bt.makeMap("tr,td,th,tbody,thead,tfoot,table"),i=new Set;for(let l=0;l<e.length;l++){const d=e[l];let c,u,m;if(!d.parent||i.has(d))continue;if(o[d.name]&&"li"===d.parent.name){let e=d.next;for(;e&&o[e.name];)e.name="li",i.add(e),d.parent.insert(e,d.parent),e=e.next;d.unwrap();continue}const f=[d];for(c=d.parent;c&&!t.isValidChild(c.name,d.name)&&!a[c.name];c=c.parent)f.push(c);if(c&&f.length>1)if(t.isValidChild(c.name,d.name)){f.reverse(),u=f[0].clone(),n(u);let e=u;for(let o=0;o<f.length-1;o++){t.isValidChild(e.name,f[o].name)?(m=f[o].clone(),n(m),e.append(m)):m=e;for(let e=f[o].firstChild;e&&e!==f[o+1];){const t=e.next;m.append(e),e=t}e=m}Wp(t,r,s,u)?c.insert(d,f[0],!0):(c.insert(u,f[0],!0),c.insert(d,u)),c=f[0],(Wp(t,r,s,c)||qp(c,"br"))&&c.empty().remove()}else Kp(d,t);else if(d.parent){if("li"===d.name){let e=d.prev;if(e&&("ul"===e.name||"ol"===e.name)){e.append(d);continue}if(e=d.next,e&&("ul"===e.name||"ol"===e.name)){e.insert(d,e.firstChild,!0);continue}const t=new jf("ul",1);n(t),d.wrap(t);continue}if(t.isValidChild(d.parent.name,"div")&&t.isValidChild("div",d.name)){const e=new jf("div",1);n(e),d.wrap(e)}else Kp(d,t)}}},Yp=e=>e.collapsed?e:(e=>{const t=ti.fromRangeStart(e),n=ti.fromRangeEnd(e),o=e.commonAncestorContainer;return xc(!1,o,n).map((r=>!Gd(t,n,o)&&Gd(t,r,o)?((e,t,n,o)=>{const r=document.createRange();return r.setStart(e,t),r.setEnd(n,o),r})(t.container(),t.offset(),r.container(),r.offset()):e)).getOr(e)})(e),Xp=(e,t)=>{let n=t.firstChild,o=t.lastChild;return n&&"meta"===n.name&&(n=n.next),o&&"mce_marker"===o.attr("id")&&(o=o.prev),((e,t)=>{const n=e.getNonEmptyElements();return t&&(t.isEmpty(n)||((e,t)=>e.getBlockElements()[t.name]&&(e=>e.firstChild&&e.firstChild===e.lastChild)(t)&&(e=>"br"===e.name||e.value===fr)(t.firstChild))(e,t))})(e,o)&&(o=o.prev),!(!n||n!==o||"ul"!==n.name&&"ol"!==n.name)},Qp=e=>{return e.length>0&&(!(n=e[e.length-1]).firstChild||(t=n)&&t.firstChild&&t.firstChild===t.lastChild&&(e=>e.data===fr||Po(e))(t.firstChild))?e.slice(0,-1):e;var t,n},Jp=(e,t)=>{const n=e.getParent(t,e.isBlock);return n&&"LI"===n.nodeName?n:null},Zp=(e,t)=>{const n=ti.after(e),o=vc(t).prev(n);return o?o.toRange():null},eh=(e,t,n,o)=>{const r=((e,t,n)=>{const o=t.serialize(n);return(e=>{const t=e.firstChild,n=e.lastChild;return t&&"META"===t.nodeName&&t.parentNode.removeChild(t),n&&"mce_marker"===n.id&&n.parentNode.removeChild(n),e})(e.createFragment(o))})(t,e,o),s=Jp(t,n.startContainer),a=Qp((i=r.firstChild,K(i.childNodes,(e=>"LI"===e.nodeName))));var i;const l=t.getRoot(),d=e=>{const o=ti.fromRangeStart(n),r=vc(t.getRoot()),a=1===e?r.prev(o):r.next(o);return!a||Jp(t,a.getNode())!==s};return d(1)?((e,t,n)=>{const o=e.parentNode;return Bt.each(t,(t=>{o.insertBefore(t,e)})),((e,t)=>{const n=ti.before(e),o=vc(t).next(n);return o?o.toRange():null})(e,n)})(s,a,l):d(2)?((e,t,n,o)=>(o.insertAfter(t.reverse(),e),Zp(t[0],n)))(s,a,l,t):((e,t,n,o)=>{const r=((e,t)=>{const n=t.cloneRange(),o=t.cloneRange();return n.setStartBefore(e),o.setEndAfter(e),[n.cloneContents(),o.cloneContents()]})(e,o),s=e.parentNode;return s.insertBefore(r[0],e),Bt.each(t,(t=>{s.insertBefore(t,e)})),s.insertBefore(r[1],e),s.removeChild(e),Zp(t[t.length-1],n)})(s,a,l,n)},th=["pre"],nh=Fo,oh=(e,t,n)=>{var o;let r,s,a;const i=e.selection,l=e.dom,d=e.parser,c=n.merge,u=Xf({validate:!0},e.schema),m='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';-1===t.indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,m),s=i.getRng();const f=s.startContainer||(s.parentElement?s.parentElement():null),g=e.getBody();f===g&&i.isCollapsed()&&l.isBlock(g.firstChild)&&((e,t)=>t&&!e.schema.getVoidElements()[t.nodeName])(e,g.firstChild)&&l.isEmpty(g.firstChild)&&(s=l.createRng(),s.setStart(g.firstChild,0),s.setEnd(g.firstChild,0),i.setRng(s)),i.isCollapsed()||(e=>{const t=e.dom,n=Yp(e.selection.getRng());e.selection.setRng(n);const o=t.getParent(n.startContainer,nh);((e,t,n)=>null!==n&&n===e.getParent(t.endContainer,nh)&&Uu(fn(n),t))(t,n,o)?Tp(e,n,fn(o)):e.getDoc().execCommand("Delete",!1,null)})(e),r=i.getNode();const p={context:r.nodeName.toLowerCase(),data:n.data,insert:!0},h=d.parse(t,p);if(!0===n.paste&&Xp(e.schema,h)&&((e,t)=>!!Jp(e,t))(l,r))return s=eh(u,l,i.getRng(),h),i.setRng(s),t;if(!0===n.paste&&((e,t,n,o)=>{var r;const s=t.firstChild,a=t.lastChild,i=s===("bookmark"===a.attr("data-mce-type")?a.prev:a),l=j(th,s.name);if(i&&l){const t="false"!==s.attr("contenteditable"),a=(null===(r=e.getParent(n,e.isBlock))||void 0===r?void 0:r.nodeName.toLowerCase())===s.name,i=M.from(Up(o,n)).forall(Mo);return t&&a&&i}return!1})(l,h,r,e.getBody())&&(null===(o=h.firstChild)||void 0===o||o.unwrap()),(e=>{let t=e;for(;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")})(h),a=h.lastChild,"mce_marker"===a.attr("id")){const t=a;for(a=a.prev;a;a=a.walk(!0))if(3===a.type||!l.isBlock(a.name)){e.schema.isValidChild(a.parent.name,"span")&&a.parent.insert(t,a,"br"===a.name);break}}if(e._selectionOverrides.showBlockCaretContainer(r),p.invalid){e.selection.setContent(m),r=i.getNode();const n=e.getBody();for(9===r.nodeType?r=a=n:a=r;a!==n;)r=a,a=a.parentNode;t=r===n?n.innerHTML:l.getOuterHTML(r);const o=d.parse(t);for(let e=o;e;e=e.walk())if("mce_marker"===e.attr("id")){e.replace(h);break}const s=h.children(),c=h.parent.name;h.unwrap();const f=K(s,(t=>!e.schema.isValidChild(c,t.name)));Gp(f,e.schema),Hp(d.getNodeFilters(),d.getAttributeFilters(),o),t=u.serialize(o),r===n?l.setHTML(n,t):l.setOuterHTML(r,t)}else t=u.serialize(h),((e,t,n)=>{if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n);else{const o=n.firstChild,r=n.lastChild;!o||o===r&&"BR"===o.nodeName?e.dom.setHTML(n,t):e.selection.setContent(t,{no_events:!0})}})(e,t,r);var b;return((e,t)=>{const n=e.schema.getTextInlineElements(),o=e.dom;if(t){const t=e.getBody(),r=Kf(o);Bt.each(o.select("*[data-mce-fragment]"),(e=>{if(C(n[e.nodeName.toLowerCase()])&&((e,t)=>te(Zf(e,t),(e=>!(e=>Qf.has(e))(e))))(o,e))for(let n=e.parentNode;C(n)&&n!==t&&!eg(o,e,n);n=n.parentNode)if(r.compare(n,e)){o.remove(e,!0);break}}))}})(e,c),((e,t)=>{let n;const o=e.dom,r=e.selection;if(!t)return;r.scrollIntoView(t);const s=Up(e.getBody(),t);if("false"===o.getContentEditable(s))return o.remove(t),void r.select(s);let a=o.createRng();const i=t.previousSibling;if(Ro(i)){a.setStart(i,i.nodeValue.length);const e=t.nextSibling;Ro(e)&&(i.appendData(e.data),e.parentNode.removeChild(e))}else a.setStartBefore(t),a.setEndBefore(t);const l=o.getParent(t,o.isBlock);o.remove(t),l&&o.isEmpty(l)&&(to(fn(l)),a.setStart(l,0),a.setEnd(l,0),nh(l)||(e=>!!e.getAttribute("data-mce-fragment"))(l)||!(n=(t=>{let n=ti.fromRangeStart(t);if(n=vc(e.getBody()).next(n),n)return n.toRange()})(a))?o.add(l,o.create("br",{"data-mce-bogus":"1"})):(a=n,o.remove(l))),r.setRng(a)})(e,l.get("mce_marker")),b=e.getBody(),Bt.each(b.getElementsByTagName("*"),(e=>{e.removeAttribute("data-mce-fragment")})),((e,t)=>{M.from(e.getParent(t,"td,th")).map(fn).each(xr)})(l,i.getStart()),t},rh=e=>e instanceof jf,sh=(e,t,n)=>{e.dom.setHTML(e.getBody(),t),!0!==n&&(e=>{_f(e)&&Rc(e.getBody()).each((t=>{const n=t.getNode(),o=_o(n)?Rc(n).getOr(t):t;e.selection.setRng(o.toRange())}))})(e)},ah=(e,t)=>((e,t)=>{const n=e.dom;return n.parentNode?((e,t)=>Q(e.dom.childNodes,(e=>t(fn(e)))).map(fn))(fn(n.parentNode),(n=>!vn(e,n)&&t(n))):M.none()})(e,t).isSome(),ih=e=>w(e)?e:P,lh=(e,t,n)=>{const o=t(e),r=ih(n);return o.orThunk((()=>r(e)?M.none():((e,t,n)=>{let o=e.dom;const r=ih(n);for(;o.parentNode;){o=o.parentNode;const e=fn(o),n=t(e);if(n.isSome())return n;if(r(e))break}return M.none()})(e,t,r)))},dh=lu,ch=(e,t,n)=>{const o=e.formatter.get(n);if(o)for(let n=0;n<o.length;n++){const r=o[n];if(gu(r)&&!1===r.inherit&&e.dom.is(t,r.selector))return!0}return!1},uh=(e,t,n,o,r)=>{const s=e.dom.getRoot();return t!==s&&(t=e.dom.getParent(t,(t=>!!ch(e,t,n)||t.parentNode===s||!!gh(e,t,n,o,!0))),!!gh(e,t,n,o,r))},mh=(e,t,n)=>!(!pu(n)||!dh(t,n.inline))||!(!fu(n)||!dh(t,n.block))||!!gu(n)&&Co(t)&&e.is(t,n.selector),fh=(e,t,n,o,r,s)=>{const a=n[o];if(w(n.onmatch))return n.onmatch(t,n,o);if(a)if(v(a.length)){for(const i in a)if(xe(a,i)){const l="attributes"===o?e.getAttrib(t,i):cu(e,t,i),d=iu(a[i],s),c=y(l)||Ke(l);if(c&&y(d))continue;if(r&&c&&!n.exact)return!1;if((!r||n.exact)&&!dh(l,du(d,i)))return!1}}else for(let n=0;n<a.length;n++)if("attributes"===o?e.getAttrib(t,a[n]):cu(e,t,a[n]))return!0;return!0},gh=(e,t,n,o,r)=>{const s=e.formatter.get(n),a=e.dom;if(s&&t)for(let n=0;n<s.length;n++){const i=s[n];if(mh(e.dom,t,i)&&fh(a,t,i,"attributes",r,o)&&fh(a,t,i,"styles",r,o)){const n=i.classes;if(n)for(let r=0;r<n.length;r++)if(!e.dom.hasClass(t,iu(n[r],o)))return;return i}}},ph=(e,t,n,o,r)=>{if(o)return uh(e,o,t,n,r);if(o=e.selection.getNode(),uh(e,o,t,n,r))return!0;const s=e.selection.getStart();return!(s===o||!uh(e,s,t,n,r))},hh=kr,bh="_mce_caret",vh=e=>(e=>{const t=[];for(;e;){if(3===e.nodeType&&e.nodeValue!==hh||e.childNodes.length>1)return[];1===e.nodeType&&t.push(e),e=e.firstChild}return t})(e).length>0,yh=e=>{if(e){const t=new Qo(e,e);for(e=t.current();e;e=t.next())if(Ro(e))return e}return null},Ch=e=>{const t=un("span");return Wt(t,{id:bh,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&Zn(t,mn(hh)),t},wh=(e,t,n=!0)=>{const o=e.dom,r=e.selection;if(vh(t))ep(e,!1,fn(t),n);else{const e=r.getRng(),n=o.getParent(t,o.isBlock),s=e.startContainer,a=e.startOffset,i=e.endContainer,l=e.endOffset,d=(e=>{const t=yh(e);return t&&t.nodeValue.charAt(0)===hh&&t.deleteData(0,1),t})(t);o.remove(t,!0),s===d&&a>0&&e.setStart(d,a-1),i===d&&l>0&&e.setEnd(d,l-1),n&&o.isEmpty(n)&&wr(fn(n)),r.setRng(e)}},xh=(e,t,n=!0)=>{const o=e.dom,r=e.selection;if(t)wh(e,t,n);else if(!(t=Bc(e.getBody(),r.getStart())))for(;t=o.get(bh);)wh(e,t,!1)},kh=(e,t)=>(e.appendChild(t),t),Sh=(e,t)=>{const n=G(e,((e,t)=>kh(e,t.cloneNode(!1))),t);return kh(n,n.ownerDocument.createTextNode(hh))},_h=(e,t,n,o)=>{const a=e.dom,i=e.selection;let l,d,c;const u=[],m=i.getRng(),f=m.startContainer,g=m.startOffset;for(d=f,3===f.nodeType&&(g!==f.nodeValue.length&&(l=!0),d=d.parentNode);d;){if(gh(e,d,t,n,o)){c=d;break}d.nextSibling&&(l=!0),u.push(d),d=d.parentNode}if(c)if(l){const r=i.getBookmark();m.collapse(!0);let s=Tu(e,m,e.formatter.get(t),!0);s=Mm(s),e.formatter.remove(t,n,s,o),i.moveToBookmark(r)}else{const l=Bc(e.getBody(),c),d=Ch(!1).dom;((e,t,n)=>{const o=e.dom,r=o.getParent(n,O(ru,e));r&&o.isEmpty(r)?n.parentNode.replaceChild(t,n):((e=>{const t=hr(e,"br"),n=K((e=>{const t=[];let n=e.dom;for(;n;)t.push(fn(n)),n=n.lastChild;return t})(e).slice(-1),nr);t.length===n.length&&$(n,no)})(fn(n)),o.isEmpty(n)?n.parentNode.replaceChild(t,n):o.insertAfter(t,n))})(e,d,null!==l?l:c);const m=((e,t,n,o,a,i)=>{const l=e.formatter,d=e.dom,c=K(ue(l.get()),(e=>e!==o&&!Ue(e,"removeformat"))),u=((e,t,n)=>Y(n,((n,o)=>{const r=((e,t)=>V(e.formatter.get(t),(e=>{const t=e=>e.length>1&&"%"===e.charAt(0);return V(["styles","attributes"],(n=>we(e,n).exists((e=>{const n=p(e)?e:Ce(e);return V(n,t)}))))})))(e,o);return e.formatter.matchNode(t,o,{},r)?n.concat([o]):n}),[]))(e,n,c);if(K(u,(t=>!((e,t,n)=>{const o=["inline","block","selector","attributes","styles","classes"],a=e=>ve(e,((e,t)=>V(o,(e=>e===t))));return V(e.formatter.get(t),(t=>{const o=a(t);return V(e.formatter.get(n),(e=>{const t=a(e);return((e,t,n=s)=>r(n).eq(e,t))(o,t)}))}))})(e,t,o))).length>0){const e=n.cloneNode(!1);return d.add(t,e),l.remove(o,a,e,i),d.remove(e),M.some(e)}return M.none()})(e,d,c,t,n,o),f=Sh(u.concat(m.toArray()),d);wh(e,l,!1),i.setCursorLocation(f,1),a.isEmpty(c)&&a.remove(c)}},Eh=(e,t)=>{const n=e.schema.getTextInlineElements();return xe(n,Mt(t))&&!Tc(t.dom)&&!So(t.dom)},Nh={},Rh=Re,Ah=Ee;Nh.pre||(Nh.pre=[]),Nh.pre.push((e=>{const t=e.selection.getRng();let n;const o=e=>r(e.previousSibling)&&-1!==Ae(n,e.previousSibling),r=wo(["pre"]);t.collapsed||(n=e.selection.getSelectedBlocks(),Ah(Rh(Rh(n,r),o),(e=>{((e,t)=>{const n=fn(t),o=wn(n).dom;no(n),eo(fn(e),[un("br",o),un("br",o),...Rn(n)])})(e.previousSibling,e)})))}));const Oh=Bt.each,Th=e=>Co(e)&&!$c(e)&&!Tc(e)&&!So(e),Bh=(e,t)=>{for(let n=e;n;n=n[t]){if(Ro(n)&&We(n.data))return e;if(Co(n)&&!$c(n))return n}return e},Dh=(e,t,n)=>{const o=Kf(e);if(t&&n&&(t=Bh(t,"previousSibling"),n=Bh(n,"nextSibling"),o.compare(t,n))){for(let e=t.nextSibling;e&&e!==n;){const n=e;e=e.nextSibling,t.appendChild(n)}return e.remove(n),Bt.each(Bt.grep(n.childNodes),(e=>{t.appendChild(e)})),t}return n},Ph=(e,t,n,o)=>{if(o&&!1!==t.merge_siblings){const t=Dh(e,ou(o),o);Dh(e,t,ou(t,!0))}},Lh=(e,t,n)=>{Oh(e.childNodes,(e=>{Th(e)&&(t(e)&&n(e),e.hasChildNodes()&&Lh(e,t,n))}))},Mh=(e,t)=>n=>!(!n||!cu(e,n,t)),Ih=(e,t,n)=>o=>{e.setStyle(o,t,n),""===o.getAttribute("style")&&o.removeAttribute("style"),((e,t)=>{"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)})(e,o)},Fh=Ei([{keep:[]},{rename:["name"]},{removed:[]}]),Uh=/^(src|href|style)$/,zh=Bt.each,jh=lu,Vh=(e,t,n)=>e.isChildOf(t,n)&&t!==n&&!e.isBlock(n),Hh=(e,t,n)=>{let o=t[n?"startContainer":"endContainer"],r=t[n?"startOffset":"endOffset"];if(Co(o)){const e=o.childNodes.length-1;!n&&r&&r--,o=o.childNodes[r>e?e:r]}return Ro(o)&&n&&r>=o.nodeValue.length&&(o=new Qo(o,e.getBody()).next()||o),Ro(o)&&!n&&0===r&&(o=new Qo(o,e.getBody()).prev()||o),o},$h=(e,t)=>{const n=t?"firstChild":"lastChild";if((e=>/^(TR|TH|TD)$/.test(e.nodeName))(e)&&e[n]){const t=e[n];return"TR"===e.nodeName&&t[n]||t}return e},qh=(e,t,n,o)=>{const r=e.create(n,o);return t.parentNode.insertBefore(r,t),r.appendChild(t),r},Wh=(e,t,n,o,r)=>{const s=fn(t),a=fn(e.create(o,r)),i=n?Nn(s):En(s);return eo(a,i),n?(Xn(s,a),Jn(a,s)):(Qn(s,a),Zn(a,s)),a.dom},Kh=(e,t,n,o,r)=>{let s;const a=e.dom;if(!mh(a,o,t)&&!((e,t)=>t.links&&"A"===e.nodeName)(o,t))return Fh.keep();const i=o;if(pu(t)&&"all"===t.remove&&p(t.preserve_attributes)){const e=K(a.getAttribs(i),(e=>j(t.preserve_attributes,e.name.toLowerCase())));if(a.removeAllAttribs(i),$(e,(e=>a.setAttrib(i,e.name,e.value))),e.length>0)return Fh.rename("span")}if("all"!==t.remove){zh(t.styles,((e,o)=>{e=du(iu(e,n),o+""),x(o)&&(o=e,r=null),(t.remove_similar||!r||jh(cu(a,r,o),e))&&a.setStyle(i,o,""),s=!0})),s&&""===a.getAttrib(i,"style")&&(i.removeAttribute("style"),i.removeAttribute("data-mce-style")),zh(t.attributes,((e,o)=>{let s;if(e=iu(e,n),x(o)&&(o=e,r=null),t.remove_similar||!r||jh(a.getAttrib(r,o),e)){if("class"===o&&(e=a.getAttrib(i,o))&&(s="",$(e.split(/\s+/),(e=>{/mce\-\w+/.test(e)&&(s+=(s?" ":"")+e)})),s))return void a.setAttrib(i,o,s);if(Uh.test(o)&&i.removeAttribute("data-mce-"+o),"style"===o&&wo(["li"])(i)&&"none"===a.getStyle(i,"list-style-type"))return i.removeAttribute(o),void a.setStyle(i,"list-style-type","none");"class"===o&&i.removeAttribute("className"),i.removeAttribute(o)}})),zh(t.classes,(e=>{e=iu(e,n),r&&!a.hasClass(r,e)||a.removeClass(i,e)}));const e=a.getAttribs(i);for(let t=0;t<e.length;t++){const n=e[t].nodeName;if(0!==n.indexOf("_")&&0!==n.indexOf("data-"))return Fh.keep()}}return"none"!==t.remove?(((e,t,n)=>{const o=t.parentNode;let r;const s=e.dom,a=Ki(e);fu(n)&&o===s.getRoot()&&(n.list_block&&jh(t,n.list_block)||$(de(t.childNodes),(t=>{su(e,a,t.nodeName.toLowerCase())?r?r.appendChild(t):(r=qh(s,t,a),s.setAttribs(r,Gi(e))):r=null}))),(e=>gu(e)&&pu(e)&&Dt(we(e,"mixed"),!0))(n)&&!jh(n.inline,t)||s.remove(t,!0)})(e,i,t),Fh.removed()):Fh.keep()},Gh=(e,t,n,o,r)=>Kh(e,t,n,o,r).fold(P,(t=>(e.dom.rename(o,t),!0)),L),Yh=(e,t,n,o)=>Kh(e,t,n,o,o).fold(N(o),(t=>(e.dom.createFragment().appendChild(o),e.dom.rename(o,t))),N(null)),Xh=(e,t,n,o,r)=>{const s=e.formatter.get(t),a=s[0];let i=!0;const l=e.dom,d=e.selection,c=o=>{const i=((e,t,n,o,r)=>{let s;return $(mu(e.dom,t.parentNode).reverse(),(t=>{if(!s&&"_start"!==t.id&&"_end"!==t.id){const a=gh(e,t,n,o,r);a&&!1!==a.split&&(s=t)}})),s})(e,o,t,n,r);return((e,t,n,o,r,s,a,i)=>{let l,d,c;const u=e.dom;if(n){const s=n.parentNode;for(let n=o.parentNode;n&&n!==s;n=n.parentNode){l=u.clone(n,!1);for(let n=0;n<t.length&&(l=Yh(e,t[n],i,l),null!==l);n++);l&&(d&&l.appendChild(d),c||(c=l),d=l)}a.mixed&&u.isBlock(n)||(o=u.split(n,o)),d&&(r.parentNode.insertBefore(d,r),c.appendChild(r),pu(a)&&Ph(u,a,0,d))}return o})(e,s,i,o,o,0,a,n)},u=t=>V(s,(o=>Gh(e,o,n,t,t))),m=t=>{let n=!0,o=!1;Co(t)&&l.getContentEditable(t)&&(n=i,i="true"===l.getContentEditable(t),o=!0);const r=de(t.childNodes);if(i&&!o){const e=u(t)||V(s,(e=>mh(l,t,e))),n=t.parentNode;!e&&C(n)&&hu(a)&&u(n)}if(a.deep&&r.length){for(let e=0;e<r.length;e++)m(r[e]);o&&(i=n)}$(["underline","line-through","overline"],(n=>{Co(t)&&e.dom.getStyle(t,"text-decoration")===n&&t.parentNode&&uu(l,t.parentNode)===n&&Gh(e,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:n}},null,t)}))},f=e=>{const t=l.get(e?"_start":"_end");let n=t[e?"firstChild":"lastChild"];return(e=>$c(e)&&Co(e)&&("_start"===e.id||"_end"===e.id))(n)&&(n=n[e?"firstChild":"lastChild"]),Ro(n)&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),l.remove(t,!0),n},g=t=>{let n,o,r=Tu(e,t,s,t.collapsed);if(a.split){if(r=Mm(r),n=Hh(e,r,!0),o=Hh(e,r),n!==o){if(n=$h(n,!0),o=$h(o,!1),Vh(l,n,o)){const e=M.from(n.firstChild).getOr(n);return c(Wh(l,e,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void f(!0)}if(Vh(l,o,n)){const e=M.from(o.lastChild).getOr(o);return c(Wh(l,e,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void f(!1)}n=qh(l,n,"span",{id:"_start","data-mce-type":"bookmark"}),o=qh(l,o,"span",{id:"_end","data-mce-type":"bookmark"});const e=l.createRng();e.setStartAfter(n),e.setEndBefore(o),Bu(l,e,(e=>{$(e,(e=>{$c(e)||$c(e.parentNode)||c(e)}))})),c(n),c(o),n=f(!0),o=f()}else n=o=c(n);r.startContainer=n.parentNode?n.parentNode:n,r.startOffset=l.nodeIndex(n),r.endContainer=o.parentNode?o.parentNode:o,r.endOffset=l.nodeIndex(o)+1}Bu(l,r,(e=>{$(e,m)}))};if(o){if(tu(o)){const e=l.createRng();e.setStartBefore(o),e.setEndAfter(o),g(e)}else g(o);Zu(e,t,o,n)}else if("false"!==l.getContentEditable(d.getNode()))d.isCollapsed()&&pu(a)&&!Lu(e).length?_h(e,t,n,r):(Hu(d,!0,(()=>{Vu(e,g)})),pu(a)&&ph(e,t,n,d.getStart())&&nu(l,d,d.getRng()),e.nodeChanged()),Zu(e,t,o,n);else{o=d.getNode();for(let t=0;t<s.length&&(!s[t].ceFalseOverride||!Gh(e,s[t],n,o,o));t++);Zu(e,t,o,n)}},Qh=Bt.each,Jh=Bt.each,Zh=e=>Co(e)&&!$c(e)&&!Tc(e)&&!So(e),eb=(e,t,n,o)=>{const r=e.formatter.get(t),s=r[0],a=!o&&e.selection.isCollapsed(),i=e.dom,l=e.selection,d=(e,t=s)=>{if(w(t.onformat)&&t.onformat(e,t,n,o),Jh(t.styles,((t,o)=>{i.setStyle(e,o,iu(t,n))})),t.styles){const t=i.getAttrib(e,"style");t&&i.setAttrib(e,"data-mce-style",t)}Jh(t.attributes,((t,o)=>{i.setAttrib(e,o,iu(t,n))})),Jh(t.classes,(t=>{t=iu(t,n),i.hasClass(e,t)||i.addClass(e,t)}))},c=(e,t)=>{let n=!1;return Jh(e,(e=>!!gu(e)&&(C(e.collapsed)&&e.collapsed!==a?void 0:i.is(t,e.selector)&&!Tc(t)?(d(t,e),n=!0,!1):void 0))),n},u=e=>{if(m(e)){const t=i.create(e);return d(t),t}return null},f=(o,a,i)=>{const l=[];let m=!0;const f=s.inline||s.block,g=u(f);Bu(o,a,(a=>{let u;const p=a=>{let h=!1,b=m;const v=a.nodeName.toLowerCase(),y=a.parentNode,w=y.nodeName.toLowerCase();if(Co(a)&&o.getContentEditable(a)&&(b=m,m="true"===o.getContentEditable(a),h=!0),Po(a)&&!((e,t,n,o)=>{if(Bl(e)&&pu(t)){const t=Os(e.schema),r=ah(fn(n),(e=>Tc(e.dom)));return ke(t,o)&&os(fn(n.parentNode),!1)&&!r}return!1})(e,s,a,w))return u=null,void(fu(s)&&o.remove(a));if(fu(s)&&s.wrapper&&gh(e,a,t,n))u=null;else{if(m&&!h&&fu(s)&&!s.wrapper&&ru(e,v)&&su(e,w,f)){const e=o.rename(a,f);return d(e),l.push(e),void(u=null)}if(gu(s)){let e=c(r,a);if(!e&&C(y)&&hu(s)&&(e=c(r,y)),!pu(s)||e)return void(u=null)}!m||h||!su(e,f,v)||!su(e,w,f)||!i&&Ro(a)&&Sr(a.data)||Tc(a)||pu(s)&&o.isBlock(a)?(u=null,$(de(a.childNodes),p),h&&(m=b),u=null):(u||(u=o.clone(g,!1),a.parentNode.insertBefore(u,a),l.push(u)),u.appendChild(a))}};$(a,p)})),!0===s.links&&$(l,(e=>{const t=e=>{"A"===e.nodeName&&d(e,s),$(de(e.childNodes),t)};t(e)})),$(l,(a=>{const i=(e=>{let t=0;return $(e.childNodes,(e=>{(e=>C(e)&&Ro(e)&&0===e.length)(e)||$c(e)||t++})),t})(a);!(l.length>1)&&o.isBlock(a)||0!==i?(pu(s)||fu(s)&&s.wrapper)&&(s.exact||1!==i||(a=(e=>{const t=Q(e.childNodes,Zh).filter((e=>mh(o,e,s)));return t.map((t=>{const n=o.clone(t,!1);return d(n),o.replace(n,e,!0),o.remove(t,!0),n})).getOr(e)})(a)),((e,t,n,o)=>{Qh(t,(t=>{pu(t)&&Qh(e.dom.select(t.inline,o),(o=>{Th(o)&&Gh(e,t,n,o,t.exact?o:null)})),((e,t,n)=>{if(t.clear_child_styles){const o=t.links?"*:not(a)":"*";Oh(e.select(o,n),(n=>{Th(n)&&Oh(t.styles,((t,o)=>{e.setStyle(n,o,"")}))}))}})(e.dom,t,o)}))})(e,r,n,a),((e,t,n,o,r)=>{gh(e,r.parentNode,n,o)&&Gh(e,t,o,r)||t.merge_with_parents&&e.dom.getParent(r.parentNode,(s=>{if(gh(e,s,n,o))return Gh(e,t,o,r),!0}))})(e,s,t,n,a),((e,t,n,o)=>{t.styles&&t.styles.backgroundColor&&Lh(o,Mh(e,"fontSize"),Ih(e,"backgroundColor",iu(t.styles.backgroundColor,n)))})(o,s,n,a),((e,t,n,o)=>{const r=t=>{if(1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType){const n=uu(e,t.parentNode);e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null)}};t.styles&&(t.styles.color||t.styles.textDecoration)&&(Bt.walk(o,r,"childNodes"),r(o))})(o,s,0,a),((e,t,n,o)=>{!pu(t)||"sub"!==t.inline&&"sup"!==t.inline||(Lh(o,Mh(e,"fontSize"),Ih(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",o),!0))})(o,s,0,a),Ph(o,s,0,a)):o.remove(a,!0)}))};if("false"!==i.getContentEditable(l.getNode())){if(s){if(o)if(tu(o)){if(!c(r,o)){const t=i.createRng();t.setStartBefore(o),t.setEndAfter(o),f(i,Tu(e,t,r),!0)}}else f(i,o,!0);else a&&pu(s)&&!Lu(e).length?((e,t,n)=>{let o,r;const s=e.selection,a=s.getRng();let i=a.startOffset;const l=a.startContainer.nodeValue;o=Bc(e.getBody(),s.getStart()),o&&(r=yh(o));const d=/[^\s\u00a0\u00ad\u200b\ufeff]/;if(l&&i>0&&i<l.length&&d.test(l.charAt(i))&&d.test(l.charAt(i-1))){const o=s.getBookmark();a.collapse(!0);let r=Tu(e,a,e.formatter.get(t));r=Mm(r),e.formatter.apply(t,n,r),s.moveToBookmark(o)}else o&&r.nodeValue===hh||(c=e.getDoc(),u=Ch(!0).dom,o=c.importNode(u,!0),r=o.firstChild,a.insertNode(o),i=1),e.formatter.apply(t,n,o),s.setCursorLocation(r,i);var c,u})(e,t,n):(l.setRng(Yp(l.getRng())),Hu(l,!0,(()=>{Vu(e,((t,n)=>{const o=n?t:Tu(e,t,r);f(i,o,!1)}))})),nu(i,l,l.getRng()),e.nodeChanged());((e,t)=>{Ah(Nh[e],(e=>{e(t)}))})(t,e)}Ju(e,t,o,n)}else{o=l.getNode();for(let e=0,t=r.length;e<t;e++){const t=r[e];if(t.ceFalseOverride&&gu(t)&&i.is(o,t.selector)){d(o,t);break}}Ju(e,t,o,n)}},tb=e=>xe(e,"vars"),nb=e=>e.selection.getStart(),ob=(e,t,n,o,r)=>X(t,(t=>{const s=e.formatter.matchNode(t,n,null!=r?r:{},o);return!v(s)}),(t=>!!ch(e,t,n)||!o&&C(e.formatter.matchNode(t,n,r,!0)))),rb=(e,t)=>{const n=null!=t?t:nb(e);return K(mu(e.dom,n),(e=>Co(e)&&!So(e)))},sb=(e,t,n)=>{const o=rb(e,t);fe(n,((n,r)=>{const s=n=>{const s=ob(e,o,r,n.similar,tb(n)?n.vars:void 0),a=s.isSome();if(n.state.get()!==a){n.state.set(a);const e=s.getOr(t);tb(n)?n.callback(a,{node:e,format:r,parents:o}):$(n.callbacks,(t=>t(a,{node:e,format:r,parents:o})))}};$([n.withSimilar,n.withoutSimilar],s),$(n.withVars,s)}))};function ab(e){return ab="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ab(e)}function ib(e,t){return ib=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ib(e,t)}function lb(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function db(e,t,n){return db=lb()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&ib(r,n.prototype),r},db.apply(null,arguments)}function cb(e){return function(e){if(Array.isArray(e))return ub(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ub(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ub(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ub(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var mb=Object.hasOwnProperty,fb=Object.setPrototypeOf,gb=Object.isFrozen,pb=Object.getPrototypeOf,hb=Object.getOwnPropertyDescriptor,bb=Object.freeze,vb=Object.seal,yb=Object.create,Cb="undefined"!=typeof Reflect&&Reflect,wb=Cb.apply,xb=Cb.construct;wb||(wb=function(e,t,n){return e.apply(t,n)}),bb||(bb=function(e){return e}),vb||(vb=function(e){return e}),xb||(xb=function(e,t){return db(e,cb(t))});var kb,Sb=Pb(Array.prototype.forEach),_b=Pb(Array.prototype.pop),Eb=Pb(Array.prototype.push),Nb=Pb(String.prototype.toLowerCase),Rb=Pb(String.prototype.match),Ab=Pb(String.prototype.replace),Ob=Pb(String.prototype.indexOf),Tb=Pb(String.prototype.trim),Bb=Pb(RegExp.prototype.test),Db=(kb=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xb(kb,t)});function Pb(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return wb(e,t,o)}}function Lb(e,t){fb&&fb(e,null);for(var n=t.length;n--;){var o=t[n];if("string"==typeof o){var r=Nb(o);r!==o&&(gb(t)||(t[n]=r),o=r)}e[o]=!0}return e}function Mb(e){var t,n=yb(null);for(t in e)wb(mb,e,[t])&&(n[t]=e[t]);return n}function Ib(e,t){for(;null!==e;){var n=hb(e,t);if(n){if(n.get)return Pb(n.get);if("function"==typeof n.value)return Pb(n.value)}e=pb(e)}return function(e){return console.warn("fallback value for",e),null}}var Fb=bb(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ub=bb(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),zb=bb(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),jb=bb(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Vb=bb(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Hb=bb(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$b=bb(["#text"]),qb=bb(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Wb=bb(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Kb=bb(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Gb=bb(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Yb=vb(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Xb=vb(/<%[\w\W]*|[\w\W]*%>/gm),Qb=vb(/^data-[\-\w.\u00B7-\uFFFF]/),Jb=vb(/^aria-[\-\w]+$/),Zb=vb(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ev=vb(/^(?:\w+script|data):/i),tv=vb(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),nv=vb(/^html$/i),ov=function(){return"undefined"==typeof window?null:window},rv=function(e,t){if("object"!==ab(e)||"function"!=typeof e.createPolicy)return null;var n=null,o="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(o)&&(n=t.currentScript.getAttribute(o));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}},sv=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ov(),n=function(t){return e(t)};if(n.version="2.3.8",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var o=t.document,r=t.document,s=t.DocumentFragment,a=t.HTMLTemplateElement,i=t.Node,l=t.Element,d=t.NodeFilter,c=t.NamedNodeMap,u=void 0===c?t.NamedNodeMap||t.MozNamedAttrMap:c,m=t.HTMLFormElement,f=t.DOMParser,g=t.trustedTypes,p=l.prototype,h=Ib(p,"cloneNode"),b=Ib(p,"nextSibling"),v=Ib(p,"childNodes"),y=Ib(p,"parentNode");if("function"==typeof a){var C=r.createElement("template");C.content&&C.content.ownerDocument&&(r=C.content.ownerDocument)}var w=rv(g,o),x=w?w.createHTML(""):"",k=r,S=k.implementation,_=k.createNodeIterator,E=k.createDocumentFragment,N=k.getElementsByTagName,R=o.importNode,A={};try{A=Mb(r).documentMode?r.documentMode:{}}catch(e){}var O={};n.isSupported="function"==typeof y&&S&&void 0!==S.createHTMLDocument&&9!==A;var T,B,D=Yb,P=Xb,L=Qb,M=Jb,I=ev,F=tv,U=Zb,z=null,j=Lb({},[].concat(cb(Fb),cb(Ub),cb(zb),cb(Vb),cb($b))),V=null,H=Lb({},[].concat(cb(qb),cb(Wb),cb(Kb),cb(Gb))),$=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),q=null,W=null,K=!0,G=!0,Y=!1,X=!1,Q=!1,J=!1,Z=!1,ee=!1,te=!1,ne=!1,oe=!0,re=!0,se=!1,ae={},ie=null,le=Lb({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),de=null,ce=Lb({},["audio","video","img","source","image","track"]),ue=null,me=Lb({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),fe="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",pe="http://www.w3.org/1999/xhtml",he=pe,be=!1,ve=["application/xhtml+xml","text/html"],ye="text/html",Ce=null,we=r.createElement("form"),xe=function(e){return e instanceof RegExp||e instanceof Function},ke=function(e){Ce&&Ce===e||(e&&"object"===ab(e)||(e={}),e=Mb(e),z="ALLOWED_TAGS"in e?Lb({},e.ALLOWED_TAGS):j,V="ALLOWED_ATTR"in e?Lb({},e.ALLOWED_ATTR):H,ue="ADD_URI_SAFE_ATTR"in e?Lb(Mb(me),e.ADD_URI_SAFE_ATTR):me,de="ADD_DATA_URI_TAGS"in e?Lb(Mb(ce),e.ADD_DATA_URI_TAGS):ce,ie="FORBID_CONTENTS"in e?Lb({},e.FORBID_CONTENTS):le,q="FORBID_TAGS"in e?Lb({},e.FORBID_TAGS):{},W="FORBID_ATTR"in e?Lb({},e.FORBID_ATTR):{},ae="USE_PROFILES"in e&&e.USE_PROFILES,K=!1!==e.ALLOW_ARIA_ATTR,G=!1!==e.ALLOW_DATA_ATTR,Y=e.ALLOW_UNKNOWN_PROTOCOLS||!1,X=e.SAFE_FOR_TEMPLATES||!1,Q=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,ne=e.RETURN_TRUSTED_TYPE||!1,Z=e.FORCE_BODY||!1,oe=!1!==e.SANITIZE_DOM,re=!1!==e.KEEP_CONTENT,se=e.IN_PLACE||!1,U=e.ALLOWED_URI_REGEXP||U,he=e.NAMESPACE||pe,e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&($.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&xe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&($.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&($.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),T=T=-1===ve.indexOf(e.PARSER_MEDIA_TYPE)?ye:e.PARSER_MEDIA_TYPE,B="application/xhtml+xml"===T?function(e){return e}:Nb,X&&(G=!1),te&&(ee=!0),ae&&(z=Lb({},cb($b)),V=[],!0===ae.html&&(Lb(z,Fb),Lb(V,qb)),!0===ae.svg&&(Lb(z,Ub),Lb(V,Wb),Lb(V,Gb)),!0===ae.svgFilters&&(Lb(z,zb),Lb(V,Wb),Lb(V,Gb)),!0===ae.mathMl&&(Lb(z,Vb),Lb(V,Kb),Lb(V,Gb))),e.ADD_TAGS&&(z===j&&(z=Mb(z)),Lb(z,e.ADD_TAGS)),e.ADD_ATTR&&(V===H&&(V=Mb(V)),Lb(V,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&Lb(ue,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(ie===le&&(ie=Mb(ie)),Lb(ie,e.FORBID_CONTENTS)),re&&(z["#text"]=!0),Q&&Lb(z,["html","head","body"]),z.table&&(Lb(z,["tbody"]),delete q.tbody),bb&&bb(e),Ce=e)},Se=Lb({},["mi","mo","mn","ms","mtext"]),_e=Lb({},["foreignobject","desc","title","annotation-xml"]),Ee=Lb({},["title","style","font","a","script"]),Ne=Lb({},Ub);Lb(Ne,zb),Lb(Ne,jb);var Re=Lb({},Vb);Lb(Re,Hb);var Ae=function(e){var t=y(e);t&&t.tagName||(t={namespaceURI:pe,tagName:"template"});var n=Nb(e.tagName),o=Nb(t.tagName);return e.namespaceURI===ge?t.namespaceURI===pe?"svg"===n:t.namespaceURI===fe?"svg"===n&&("annotation-xml"===o||Se[o]):Boolean(Ne[n]):e.namespaceURI===fe?t.namespaceURI===pe?"math"===n:t.namespaceURI===ge?"math"===n&&_e[o]:Boolean(Re[n]):e.namespaceURI===pe&&!(t.namespaceURI===ge&&!_e[o])&&!(t.namespaceURI===fe&&!Se[o])&&!Re[n]&&(Ee[n]||!Ne[n])},Oe=function(e){Eb(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=x}catch(t){e.remove()}}},Te=function(e,t){try{Eb(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){Eb(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!V[e])if(ee||te)try{Oe(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Be=function(e){var t,n;if(Z)e="<remove></remove>"+e;else{var o=Rb(e,/^[\r\n\t ]+/);n=o&&o[0]}"application/xhtml+xml"===T&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var s=w?w.createHTML(e):e;if(he===pe)try{t=(new f).parseFromString(s,T)}catch(e){}if(!t||!t.documentElement){t=S.createDocument(he,"template",null);try{t.documentElement.innerHTML=be?"":s}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(r.createTextNode(n),a.childNodes[0]||null),he===pe?N.call(t,Q?"html":"body")[0]:Q?t.documentElement:a},De=function(e){return _.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},Pe=function(e){return e instanceof m&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},Le=function(e){return"object"===ab(i)?e instanceof i:e&&"object"===ab(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Me=function(e,t,o){O[e]&&Sb(O[e],(function(e){e.call(n,t,o,Ce)}))},Ie=function(e){var t;if(Me("beforeSanitizeElements",e,null),Pe(e))return Oe(e),!0;if(Bb(/[\u0080-\uFFFF]/,e.nodeName))return Oe(e),!0;var o=B(e.nodeName);if(Me("uponSanitizeElement",e,{tagName:o,allowedTags:z}),e.hasChildNodes()&&!Le(e.firstElementChild)&&(!Le(e.content)||!Le(e.content.firstElementChild))&&Bb(/<[/\w]/g,e.innerHTML)&&Bb(/<[/\w]/g,e.textContent))return Oe(e),!0;if("select"===o&&Bb(/<template/i,e.innerHTML))return Oe(e),!0;if(!z[o]||q[o]){if(!q[o]&&Ue(o)){if($.tagNameCheck instanceof RegExp&&Bb($.tagNameCheck,o))return!1;if($.tagNameCheck instanceof Function&&$.tagNameCheck(o))return!1}if(re&&!ie[o]){var r=y(e)||e.parentNode,s=v(e)||e.childNodes;if(s&&r)for(var a=s.length-1;a>=0;--a)r.insertBefore(h(s[a],!0),b(e))}return Oe(e),!0}return e instanceof l&&!Ae(e)?(Oe(e),!0):"noscript"!==o&&"noembed"!==o||!Bb(/<\/no(script|embed)/i,e.innerHTML)?(X&&3===e.nodeType&&(t=e.textContent,t=Ab(t,D," "),t=Ab(t,P," "),e.textContent!==t&&(Eb(n.removed,{element:e.cloneNode()}),e.textContent=t)),Me("afterSanitizeElements",e,null),!1):(Oe(e),!0)},Fe=function(e,t,n){if(oe&&("id"===t||"name"===t)&&(n in r||n in we))return!1;if(G&&!W[t]&&Bb(L,t));else if(K&&Bb(M,t));else if(!V[t]||W[t]){if(!(Ue(e)&&($.tagNameCheck instanceof RegExp&&Bb($.tagNameCheck,e)||$.tagNameCheck instanceof Function&&$.tagNameCheck(e))&&($.attributeNameCheck instanceof RegExp&&Bb($.attributeNameCheck,t)||$.attributeNameCheck instanceof Function&&$.attributeNameCheck(t))||"is"===t&&$.allowCustomizedBuiltInElements&&($.tagNameCheck instanceof RegExp&&Bb($.tagNameCheck,n)||$.tagNameCheck instanceof Function&&$.tagNameCheck(n))))return!1}else if(ue[t]);else if(Bb(U,Ab(n,F,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==Ob(n,"data:")||!de[e])if(Y&&!Bb(I,Ab(n,F,"")));else if(n)return!1;return!0},Ue=function(e){return e.indexOf("-")>0},ze=function(e){var t,n,o,r;Me("beforeSanitizeAttributes",e,null);var s=e.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:V};for(r=s.length;r--;){var i=t=s[r],l=i.name,d=i.namespaceURI;n="value"===l?t.value:Tb(t.value),o=B(l);var c=n;if(a.attrName=o,a.attrValue=n,a.keepAttr=!0,a.forceKeepAttr=void 0,Me("uponSanitizeAttribute",e,a),n=a.attrValue,!a.forceKeepAttr)if(a.keepAttr)if(Bb(/\/>/i,n))Te(l,e);else{X&&(n=Ab(n,D," "),n=Ab(n,P," "));var u=B(e.nodeName);if(Fe(u,o,n)){if(n!==c)try{d?e.setAttributeNS(d,l,n):e.setAttribute(l,n)}catch(t){Te(l,e)}}else Te(l,e)}else Te(l,e)}Me("afterSanitizeAttributes",e,null)}},je=function e(t){var n,o=De(t);for(Me("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)Me("uponSanitizeShadowNode",n,null),Ie(n)||(n.content instanceof s&&e(n.content),ze(n));Me("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var a,l,d,c,u;if((be=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!Le(e)){if("function"!=typeof e.toString)throw Db("toString is not a function");if("string"!=typeof(e=e.toString()))throw Db("dirty is not a string, aborting")}if(!n.isSupported){if("object"===ab(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Le(e))return t.toStaticHTML(e.outerHTML)}return e}if(J||ke(r),n.removed=[],"string"==typeof e&&(se=!1),se){if(e.nodeName){var m=B(e.nodeName);if(!z[m]||q[m])throw Db("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof i)1===(l=(a=Be("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!ee&&!X&&!Q&&-1===e.indexOf("<"))return w&&ne?w.createHTML(e):e;if(!(a=Be(e)))return ee?null:ne?x:""}a&&Z&&Oe(a.firstChild);for(var f=De(se?e:a);d=f.nextNode();)3===d.nodeType&&d===c||Ie(d)||(d.content instanceof s&&je(d.content),ze(d),c=d);if(c=null,se)return e;if(ee){if(te)for(u=E.call(a.ownerDocument);a.firstChild;)u.appendChild(a.firstChild);else u=a;return V.shadowroot&&(u=R.call(o,u,!0)),u}var g=Q?a.outerHTML:a.innerHTML;return Q&&z["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&Bb(nv,a.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+g),X&&(g=Ab(g,D," "),g=Ab(g,P," ")),w&&ne?w.createHTML(g):g},n.setConfig=function(e){ke(e),J=!0},n.clearConfig=function(){Ce=null,J=!1},n.isValidAttribute=function(e,t,n){Ce||ke({});var o=B(e),r=B(t);return Fe(o,r,n)},n.addHook=function(e,t){"function"==typeof t&&(O[e]=O[e]||[],Eb(O[e],t))},n.removeHook=function(e){if(O[e])return _b(O[e])},n.removeHooks=function(e){O[e]&&(O[e]=[])},n.removeAllHooks=function(){O={}},n}();const av=Bt.explode,iv=()=>{const e={};return{addFilter:(t,n)=>{$(av(t),(t=>{xe(e,t)||(e[t]={name:t,callbacks:[]}),e[t].callbacks.push(n)}))},getFilters:()=>Ce(e),removeFilter:(t,n)=>{$(av(t),(t=>{if(xe(e,t))if(C(n)){const o=e[t],r=K(o.callbacks,(e=>e!==n));r.length>0?o.callbacks=r:delete e[t]}else delete e[t]}))}}},lv=(e,t,n)=>{const o=Ds();t.convert_fonts_to_spans&&((e,t,n)=>{e.addNodeFilter("font",(e=>{$(e,(e=>{const o=t.parse(e.attr("style")),r=e.attr("color"),s=e.attr("face"),a=e.attr("size");r&&(o.color=r),s&&(o["font-family"]=s),a&&(o["font-size"]=n[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",t.serialize(o)),((e,t)=>{$(["color","face","size"],(t=>{e.attr(t,null)}))})(e)}))}))})(e,o,Bt.explode(t.font_size_legacy_values)),((e,t,n)=>{e.addNodeFilter("strike",(e=>{const o="html4"!==t.type;$(e,(e=>{if(o)e.name="s";else{const t=n.parse(e.attr("style"));t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))}}))}))})(e,n,o)},dv=e=>{const[t,...n]=e.split(","),o=n.join(","),r=/data:([^/]+\/[^;]+)(;.+)?/.exec(t);if(r){const e=";base64"===r[2],t=e?(e=>{const t=/([a-z0-9+\/=\s]+)/i.exec(e);return t?t[1]:""})(o):decodeURIComponent(o);return M.some({type:r[1],data:t,base64Encoded:e})}return M.none()},cv=(e,t,n=!0)=>{let o=t;if(n)try{o=atob(t)}catch(e){return M.none()}const r=new Uint8Array(o.length);for(let e=0;e<r.length;e++)r[e]=o.charCodeAt(e);return M.some(new Blob([r],{type:e}))},uv=e=>new Promise(((t,n)=>{const o=new FileReader;o.onloadend=()=>{t(o.result)},o.onerror=()=>{n(o.error.message)},o.readAsDataURL(e)}));let mv=0;const fv=(e,t,n)=>dv(e).bind((({data:e,type:o,base64Encoded:r})=>{if(t&&!r)return M.none();{const t=r?e:btoa(e);return n(t,o)}})),gv=(e,t,n)=>{const o=e.create("blobid"+mv++,t,n);return e.add(o),o},pv=(e,t,n=!1)=>fv(t,n,((t,n)=>M.from(e.getByData(t,n)).orThunk((()=>cv(n,t).map((n=>gv(e,n,t))))))),hv=Bt.each,bv=Bt.trim,vv="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),yv={ftp:21,http:80,https:443,mailto:25},Cv=["img","video"],wv=(e,t,n)=>{const o=(e=>{try{return decodeURIComponent(e)}catch(t){return unescape(e)}})(t);return!e.allow_script_urls&&(!!/((java|vb)script|mhtml):/i.test(o)||!e.allow_html_data_urls&&(/^data:image\//i.test(o)?((e,t)=>C(e)?!e:!C(t)||!j(Cv,t))(e.allow_svg_data_urls,n)&&/^data:image\/svg\+xml/i.test(o):/^data:/i.test(o)))};class xv{constructor(e,t){e=bv(e),this.settings=t||{};const n=this.settings.base_uri,o=this;if(/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e))return void(o.source=e);const r=0===e.indexOf("//");if(0!==e.indexOf("/")||r||(e=(n&&n.protocol||"http")+"://mce_host"+e),!/^[\w\-]*:?\/\//.test(e)){const t=this.settings.base_uri?this.settings.base_uri.path:new xv(document.location.href).directory;if(this.settings.base_uri&&""==this.settings.base_uri.protocol)e="//mce_host"+o.toAbsPath(t,e);else{const r=/([^#?]*)([#?]?.*)/.exec(e);e=(n&&n.protocol||"http")+"://mce_host"+o.toAbsPath(t,r[1])+r[2]}}e=e.replace(/@@/g,"(mce_at)");const s=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);hv(vv,((e,t)=>{let n=s[t];n&&(n=n.replace(/\(mce_at\)/g,"@@")),o[e]=n})),n&&(o.protocol||(o.protocol=n.protocol),o.userInfo||(o.userInfo=n.userInfo),o.port||"mce_host"!==o.host||(o.port=n.port),o.host&&"mce_host"!==o.host||(o.host=n.host),o.source=""),r&&(o.protocol="")}static parseDataUri(e){let t;const n=decodeURIComponent(e).split(","),o=/data:([^;]+)/.exec(n[0]);return o&&(t=o[1]),{type:t,data:n[1]}}static isDomSafe(e,t,n={}){if(n.allow_script_urls)return!0;{const o=Cs.decode(e).replace(/[\s\u0000-\u001F]+/g,"");return!wv(n,o,t)}}static getDocumentBaseUrl(e){let t;return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t}setPath(e){const t=/^(.*?)\/?(\w+)?$/.exec(e);this.path=t[0],this.directory=t[1],this.file=t[2],this.source="",this.getURI()}toRelative(e){let t;if("./"===e)return e;const n=new xv(e,{base_uri:this});if("mce_host"!==n.host&&this.host!==n.host&&n.host||this.port!==n.port||this.protocol!==n.protocol&&""!==n.protocol)return n.getURI();const o=this.getURI(),r=n.getURI();return o===r||"/"===o.charAt(o.length-1)&&o.substr(0,o.length-1)===r?o:(t=this.toRelPath(this.path,n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),t)}toAbsolute(e,t){const n=new xv(e,{base_uri:this});return n.getURI(t&&this.isSameOrigin(n))}isSameOrigin(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;const t=yv[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1}toRelPath(e,t){let n,o,r=0,s="";const a=e.substring(0,e.lastIndexOf("/")).split("/"),i=t.split("/");if(a.length>=i.length)for(n=0,o=a.length;n<o;n++)if(n>=i.length||a[n]!==i[n]){r=n+1;break}if(a.length<i.length)for(n=0,o=i.length;n<o;n++)if(n>=a.length||a[n]!==i[n]){r=n+1;break}if(1===r)return t;for(n=0,o=a.length-(r-1);n<o;n++)s+="../";for(n=r-1,o=i.length;n<o;n++)s+=n!==r-1?"/"+i[n]:i[n];return s}toAbsPath(e,t){let n,o,r=0,s=[];const a=/\/$/.test(t)?"/":"";let i=e.split("/");const l=t.split("/");for(hv(i,(e=>{e&&s.push(e)})),i=s,n=l.length-1,s=[];n>=0;n--)0!==l[n].length&&"."!==l[n]&&(".."!==l[n]?r>0?r--:s.push(l[n]):r++);return n=i.length-r,o=n<=0?ne(s).join("/"):i.slice(0,n).join("/")+"/"+ne(s).join("/"),0!==o.indexOf("/")&&(o="/"+o),a&&o.lastIndexOf("/")!==o.length-1&&(o+=a),o}getURI(e=!1){let t;return this.source&&!e||(t="",e||(this.protocol?t+=this.protocol+"://":t+="//",this.userInfo&&(t+=this.userInfo+"@"),this.host&&(t+=this.host),this.port&&(t+=":"+this.port)),this.path&&(t+=this.path),this.query&&(t+="?"+this.query),this.anchor&&(t+="#"+this.anchor),this.source=t),this.source}}const kv=Bt.makeMap,Sv=Bt.extend,_v={IN_PLACE:!0,ALLOW_UNKNOWN_PROTOCOLS:!0,ALLOWED_TAGS:["#comment","#cdata-section","body"],ALLOWED_ATTR:[]},Ev=Bt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),Nv="data-mce-type",Rv=(e,t)=>{const n=sv(),o=t.getSpecialElements(),r=e.validate;let s=0;return n.addHook("uponSanitizeElement",((n,a)=>{var i,l;8===n.nodeType&&!e.allow_conditional_comments&&/^\[if/i.test(n.nodeValue)&&(n.nodeValue=" "+n.nodeValue);const d=a.tagName;if(1!==n.nodeType||"body"===d)return;const c=fn(n),u=d.toLowerCase(),f=Yt(c,Nv),g=Kt(c,"data-mce-bogus");if(!f&&m(g))return void("all"===g?no(c):oo(c));const p=t.getElementRule(u);if(!r||p){if(a.allowedTags[d]=!0,r&&!f){if($(null!==(i=p.attributesForced)&&void 0!==i?i:[],(e=>{qt(c,e.name,"{$uid}"===e.value?"mce_"+s++:e.value)})),$(null!==(l=p.attributesDefault)&&void 0!==l?l:[],(e=>{Yt(c,e.name)||qt(c,e.name,"{$uid}"===e.value?"mce_"+s++:e.value)})),p.attributesRequired&&!V(p.attributesRequired,(e=>Yt(c,e))))return void oo(c);if(p.removeEmptyAttrs&&(e=>{const t=e.dom.attributes;return null==t||0===t.length})(c))return void oo(c);p.outputName&&p.outputName!==u&&((e,t)=>{const n=((e,t)=>{const n=un(t),o=Qt(e);return Wt(n,o),n})(e,t);Qn(e,n);const o=Rn(e);eo(n,o),no(e)})(c,p.outputName)}}else xe(o,u)?no(c):oo(c)})),n.addHook("uponSanitizeAttribute",((n,o)=>{const s=n.tagName.toLowerCase(),{attrName:a,attrValue:i}=o;o.keepAttr=!r||t.isValid(s,a)||ze(a,"data-")||ze(a,"aria-"),a in Ev&&wv(e,i,s)&&(o.keepAttr=!1),o.keepAttr?(o.allowedAttributes[a]=!0,a in t.getBoolAttrs()&&(o.attrValue=a),e.allow_svg_data_urls&&ze(i,"data:image/svg+xml")&&(o.forceKeepAttr=!0)):!n.hasAttribute(Nv)||"id"!==a&&"class"!==a&&"style"!==a||(o.forceKeepAttr=!0)})),n},Av=(e,t,n)=>{const o=e.name,r=o in n&&"title"!==o&&"textarea"!==o,s=t.childNodes;for(let t=0,o=s.length;t<o;t++){const o=s[t],a=new jf(o.nodeName.toLowerCase(),o.nodeType);if(Co(o)){const e=o.attributes;for(let t=0,n=e.length;t<n;t++){const n=e[t];a.attr(n.name,n.value)}}else Ro(o)?(a.value=o.data,r&&(a.raw=!0)):(To(o)||Ao(o)||Oo(o))&&(a.value=o.data);Av(a,o,n),e.append(a)}},Ov=(e={},t=Bs())=>{const n=iv(),o=iv(),r={validate:!0,root_name:"body",...e},s=new DOMParser,a=Rv(r,t),i=n.addFilter,l=n.getFilters,d=n.removeFilter,c=o.addFilter,u=o.getFilters,m=o.removeFilter,f={schema:t,addAttributeFilter:c,getAttributeFilters:u,removeAttributeFilter:m,addNodeFilter:i,getNodeFilters:l,removeNodeFilter:d,parse:(e,n={})=>{var o;const i=r.validate,d=null!==(o=n.context)&&void 0!==o?o:r.root_name,c=((e,n,o="html")=>{const i="xhtml"===o?"application/xhtml+xml":"text/html",l=xe(t.getSpecialElements(),n.toLowerCase()),d=l?`<${n}>${e}</${n}>`:e,c="xhtml"===o?`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>${d}</body></html>`:`<body>${d}</body>`,u=s.parseFromString(c,i).body;return a.sanitize(u,((e,t)=>{const n={..._v};return n.PARSER_MEDIA_TYPE=t,e.allow_script_urls?n.ALLOWED_URI_REGEXP=/.*/:e.allow_html_data_urls&&(n.ALLOWED_URI_REGEXP=/^(?!(\w+script|mhtml):)/i),n})(r,i)),a.removed=[],l?u.firstChild:u})(e,d,n.format),m=new jf(d,11);Av(m,c,t.getSpecialElements());const[f,g]=((e,t,n,o)=>{const r=n.validate,s=t.getNonEmptyElements(),a=t.getWhitespaceElements(),i=Sv(kv("script,style,head,html,body,title,meta,param"),t.getBlockElements()),l=Os(t),d=/[ \t\r\n]+/g,c=/^[ \t\r\n]+/,u=/[ \t\r\n]+$/,m=e=>{for(e=e.parent;C(e);){if(e.name in a)return!0;e=e.parent}return!1},f=(t,n)=>{const r=n?t.prev:t.next;return!C(r)&&t.parent.name in i&&(t.parent!==e||o.isRootContent)};return[e=>{if(3===e.type&&!m(e)){let t=e.value;t=t.replace(d," "),(((e,t)=>e&&(e.name in t||"br"===e.name))(e.prev,i)||f(e,!0))&&(t=t.replace(c,"")),0===t.length?e.remove():e.value=t}},e=>{var n;if(1===e.type){const n=t.getElementRule(e.name);if(r&&n){const r=Wp(t,s,a,e);n.paddInEmptyBlock&&r&&(e=>{let n=e;for(;C(n);){if(n.name in l)return Wp(t,s,a,n);n=n.parent}return!1})(e)?$p(0,o,i,e):n.removeEmpty&&r?i[e.name]?e.remove():e.unwrap():n.paddEmpty&&(r||(e=>qp(e,"#text")&&e.firstChild.value===fr)(e))&&$p(0,o,i,e)}}else if(3===e.type&&!m(e)){let t=e.value;(i[null===(n=e.next)||void 0===n?void 0:n.name]||f(e,!1))&&(t=t.replace(u,"")),0===t.length?e.remove():e.value=t}}]})(m,t,r,n),p=[],h=i?e=>((e,n)=>{const o=e.parent;o&&t.children[e.name]&&!t.isValidChild(o.name,e.name)&&n.push(e)})(e,p):S,b={nodes:{},attributes:{}},v=e=>jp(l(),u(),e,b);if(((e,t,n)=>{const o=[];for(let n=e,r=n;C(n);r=n,n=n.walk())$(t,(e=>e(n))),y(n.parent)&&n!==e?n=r:o.push(n);for(let e=o.length-1;e>=0;e--){const t=o[e];$(n,(e=>e(t)))}})(m,[f,v],[g,h]),p.reverse(),i&&p.length>0)if(n.context){const{pass:e,fail:o}=W(p,(e=>e.parent===m));Gp(o,t,v),n.invalid=e.length>0}else Gp(p,t,v);const w=((e,t)=>{var n;const o=null!==(n=t.forced_root_block)&&void 0!==n?n:e.forced_root_block;return!1===o?"":!0===o?"p":o})(r,n);return w&&("body"===m.name||n.isRootContent)&&((e,n)=>{const o=Sv(kv("script,style,head,html,body,title,meta,param"),t.getBlockElements()),s=/^[ \t\r\n]+/,a=/[ \t\r\n]+$/;let i=e.firstChild,l=null;const d=e=>{e&&(i=e.firstChild,i&&3===i.type&&(i.value=i.value.replace(s,"")),i=e.lastChild,i&&3===i.type&&(i.value=i.value.replace(a,"")))};if(t.isValidChild(e.name,n.toLowerCase())){for(;i;){const t=i.next;3===i.type||1===i.type&&"p"!==i.name&&!o[i.name]&&!i.attr(Nv)?(l||(l=new jf(n,1),l.attr(r.forced_root_block_attrs),e.insert(l,i)),l.append(i)):(d(l),l=null),i=t}d(l)}})(m,w),n.invalid||Vp(b,n),m}};return((e,t)=>{const n=e.schema;t.remove_trailing_brs&&e.addNodeFilter("br",((e,t,o)=>{const r=Bt.extend({},n.getBlockElements()),s=n.getNonEmptyElements(),a=n.getWhitespaceElements();r.body=1;for(let t=0,i=e.length;t<i;t++){let i=e[t],l=i.parent;if(r[i.parent.name]&&i===l.lastChild){let e=i.prev;for(;e;){const t=e.name;if("span"!==t||"bookmark"!==e.attr("data-mce-type")){"br"===t&&(i=null);break}e=e.prev}if(i&&(i.remove(),Wp(n,s,a,l))){const e=n.getElementRule(l.name);e&&(e.removeEmpty?l.remove():e.paddEmpty&&$p(0,o,r,l))}}else{let e=i;for(;l&&l.firstChild===e&&l.lastChild===e&&(e=l,!r[l.name]);)l=l.parent;if(e===l){const e=new jf("#text",3);e.value=fr,i.replace(e)}}}})),e.addAttributeFilter("href",(e=>{let n=e.length;const o=e=>{const t=e?Bt.trim(e):"";return/\b(noopener)\b/g.test(t)?t:(e=>e.split(" ").filter((e=>e.length>0)).concat(["noopener"]).sort().join(" "))(t)};if(!t.allow_unsafe_link_target)for(;n--;){const t=e[n];"a"===t.name&&"_blank"===t.attr("target")&&t.attr("rel",o(t.attr("rel")))}})),t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",(e=>{let t,n,o,r,s=e.length;for(;s--;)if(r=e[s],"a"===r.name&&r.firstChild&&!r.attr("href")){o=r.parent,t=r.lastChild;do{n=t.prev,o.insert(t,r),t=n}while(t)}})),t.fix_list_elements&&e.addNodeFilter("ul,ol",(e=>{let t,n,o=e.length;for(;o--;)if(t=e[o],n=t.parent,"ul"===n.name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t);else{const e=new jf("li",1);e.attr("style","list-style-type: none"),t.wrap(e)}})),t.validate&&n.getValidClasses()&&e.addAttributeFilter("class",(e=>{const t=n.getValidClasses();let o=e.length;for(;o--;){const n=e[o],r=n.attr("class").split(" ");let s="";for(let e=0;e<r.length;e++){const o=r[e];let a=!1,i=t["*"];i&&i[o]&&(a=!0),i=t[n.name],!a&&i&&i[o]&&(a=!0),a&&(s&&(s+=" "),s+=o)}s.length||(s=null),n.attr("class",s)}})),((e,t)=>{const{blob_cache:n}=t,o=e=>{const t=e.attr("src");(e=>e.attr("src")===Nt.transparentSrc||C(e.attr("data-mce-placeholder")))(e)||(e=>C(e.attr("data-mce-bogus")))(e)||pv(n,t,!0).each((t=>{e.attr("src",t.blobUri())}))};n&&e.addAttributeFilter("src",(e=>$(e,o)))})(e,t)})(f,r),((e,t,n)=>{t.inline_styles&&lv(e,t,n)})(f,r,t),f},Tv=(e,t)=>{const n=(e=>rh(e)?Xf({validate:!1}).serialize(e):e)(e),o=t(n);if(o.isDefaultPrevented())return o;if(rh(e)){if(o.content!==n){const t=Ov({validate:!1,forced_root_block:!1}).parse(o.content,{context:e.name});return{...o,content:t}}return{...o,content:e}}return o},Bv=(e,t)=>{if(t.no_events)return _i.value(t);{const n=((e,t)=>e.dispatch("BeforeGetContent",t))(e,t);return n.isDefaultPrevented()?_i.error(tm(e,{content:"",...n}).content):_i.value(n)}},Dv=(e,t,n)=>n.no_events?t:Tv(t,(t=>tm(e,{...n,content:t}))).content,Pv=(e,t)=>{if(t.no_events)return _i.value(t);{const n=Tv(t.content,(n=>((e,t)=>e.dispatch("BeforeSetContent",t))(e,{...t,content:n})));return n.isDefaultPrevented()?(em(e,n),_i.error(void 0)):_i.value(n)}},Lv=(e,t,n)=>{n.no_events||em(e,{...n,content:t})},Mv=(e,t,n)=>({element:e,width:t,rows:n}),Iv=(e,t)=>({element:e,cells:t}),Fv=(e,t)=>({x:e,y:t}),Uv=(e,t)=>{const n=parseInt(Kt(e,t),10);return isNaN(n)?1:n},zv=(e,t,n)=>{const o=e.rows;return!!(o[n]?o[n].cells:[])[t]},jv=e=>Y(e,((e,t)=>t.cells.length>e?t.cells.length:e),0),Vv=(e,t)=>{const n=e.rows;for(let e=0;e<n.length;e++){const o=n[e].cells;for(let n=0;n<o.length;n++)if(vn(o[n],t))return M.some(Fv(n,e))}return M.none()},Hv=(e,t,n,o,r)=>{const s=[],a=e.rows;for(let e=n;e<=r;e++){const n=a[e].cells,r=t<o?n.slice(t,o+1):n.slice(o,t+1);s.push(Iv(a[e].element,r))}return s},$v=e=>((e,t)=>{const n=ka(e.element),o=un("tbody");return eo(o,t),Zn(n,o),n})(e,(e=>H(e.rows,(e=>{const t=H(e.cells,(e=>{const t=Sa(e);return Xt(t,"colspan"),Xt(t,"rowspan"),t})),n=ka(e.element);return eo(n,t),n})))(e)),qv=(e,t)=>{const n=fn(t.commonAncestorContainer),o=bg(n,e),r=K(o,cr),s=((e,t)=>Q(e,(e=>"li"===Mt(e)&&Uu(e,t))).fold(N([]),(t=>(e=>Q(e,(e=>"ul"===Mt(e)||"ol"===Mt(e))))(e).map((e=>{const t=un(Mt(e)),n=ve(Gn(e),((e,t)=>ze(t,"list-style")));return $n(t,n),[un("li"),t]})).getOr([]))))(o,t),a=r.concat(s.length?s:(e=>sr(e)?kn(e).filter(rr).fold(N([]),(t=>[e,t])):rr(e)?[e]:[])(n));return H(a,ka)},Wv=()=>xm([]),Kv=(e,t)=>((e,t)=>Wo(t,"table",O(vn,e)))(e,t[0]).bind((e=>{const n=t[0],o=t[t.length-1],r=(e=>{const t=Mv(ka(e),0,[]);return $(hr(e,"tr"),((e,n)=>{$(hr(e,"td,th"),((o,r)=>{((e,t,n,o,r)=>{const s=Uv(r,"rowspan"),a=Uv(r,"colspan"),i=e.rows;for(let e=n;e<n+s;e++){i[e]||(i[e]=Iv(Sa(o),[]));for(let o=t;o<t+a;o++)i[e].cells[o]=e===n&&o===t?r:ka(r)}})(t,((e,t,n)=>{for(;zv(e,t,n);)t++;return t})(t,r,n),n,e,o)}))})),Mv(t.element,jv(t.rows),t.rows)})(e);return((e,t,n)=>Vv(e,t).bind((t=>Vv(e,n).map((n=>((e,t,n)=>{const o=t.x,r=t.y,s=n.x,a=n.y,i=r<a?Hv(e,o,r,s,a):Hv(e,o,a,s,r);return Mv(e.element,jv(i),i)})(e,t,n))))))(r,n,o).map((e=>xm([$v(e)])))})).getOrThunk(Wv),Gv=(e,t)=>{const n=Pu(t,e);return n.length>0?Kv(e,n):((e,t)=>t.length>0&&t[0].collapsed?Wv():((e,t)=>((e,t)=>{const n=Y(t,((e,t)=>(Zn(t,e),t)),e);return t.length>0?xm([n]):n})(fn(t.cloneContents()),qv(e,t)))(e,t[0]))(e,t)},Yv=(e,t)=>t>=0&&t<e.length&&Wc(e.charAt(t)),Xv=e=>_r(e.innerText),Qv=e=>Co(e)?e.outerHTML:Ro(e)?Cs.encodeRaw(e.data,!1):To(e)?"\x3c!--"+e.data+"--\x3e":"",Jv=(e,t)=>(((e,t)=>{let n=0;$(e,(e=>{0===e[0]?n++:1===e[0]?(((e,t,n)=>{const o=(e=>{let t;const n=document.createElement("div"),o=document.createDocumentFragment();for(e&&(n.innerHTML=e);t=n.firstChild;)o.appendChild(t);return o})(t);if(e.hasChildNodes()&&n<e.childNodes.length){const t=e.childNodes[n];t.parentNode.insertBefore(o,t)}else e.appendChild(o)})(t,e[1],n),n++):2===e[0]&&((e,t)=>{if(e.hasChildNodes()&&t<e.childNodes.length){const n=e.childNodes[t];n.parentNode.removeChild(n)}})(t,n)}))})(((e,t)=>{const n=e.length+t.length+2,o=new Array(n),r=new Array(n),s=(n,o,r,a,l)=>{const d=i(n,o,r,a);if(null===d||d.start===o&&d.diag===o-a||d.end===n&&d.diag===n-r){let s=n,i=r;for(;s<o||i<a;)s<o&&i<a&&e[s]===t[i]?(l.push([0,e[s]]),++s,++i):o-n>a-r?(l.push([2,e[s]]),++s):(l.push([1,t[i]]),++i)}else{s(n,d.start,r,d.start-d.diag,l);for(let t=d.start;t<d.end;++t)l.push([0,e[t]]);s(d.end,o,d.end-d.diag,a,l)}},a=(n,o,r,s)=>{let a=n;for(;a-o<s&&a<r&&e[a]===t[a-o];)++a;return((e,t,n)=>({start:e,end:t,diag:n}))(n,a,o)},i=(n,s,i,l)=>{const d=s-n,c=l-i;if(0===d||0===c)return null;const u=d-c,m=c+d,f=(m%2==0?m:m+1)/2;let g,p,h,b,v;for(o[1+f]=n,r[1+f]=s+1,g=0;g<=f;++g){for(p=-g;p<=g;p+=2){for(h=p+f,p===-g||p!==g&&o[h-1]<o[h+1]?o[h]=o[h+1]:o[h]=o[h-1]+1,b=o[h],v=b-n+i-p;b<s&&v<l&&e[b]===t[v];)o[h]=++b,++v;if(u%2!=0&&u-g<=p&&p<=u+g&&r[h-u]<=o[h])return a(r[h-u],p+n-i,s,l)}for(p=u-g;p<=u+g;p+=2){for(h=p+f-u,p===u-g||p!==u+g&&r[h+1]<=r[h-1]?r[h]=r[h+1]-1:r[h]=r[h-1],b=r[h]-1,v=b-n+i-p;b>=n&&v>=i&&e[b]===t[v];)r[h]=b--,v--;if(u%2==0&&-g<=p&&p<=g&&r[h]<=o[h+u])return a(r[h],p+n-i,s,l)}}},l=[];return s(0,e.length,0,t.length,l),l})(H(de(t.childNodes),Qv),e),t),t),Zv=De((()=>document.implementation.createHTMLDocument("undo"))),ey=e=>{const t=(n=e.getBody(),K(H(de(n.childNodes),Qv),(e=>e.length>0)));var n;const o=ee(t,(t=>{const n=$f(e.serializer,t);return n.length>0?[n]:[]})),r=o.join("");return(e=>-1!==e.indexOf("</iframe>"))(r)?(e=>({type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}))(o):(e=>({type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}))(r)},ty=(e,t,n)=>{const o=n?t.beforeBookmark:t.bookmark;"fragmented"===t.type?Jv(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw",no_selection:!C(o)||!Pc(o)||!o.isFakeCaret}),e.selection.moveToBookmark(o)},ny=e=>"fragmented"===e.type?e.fragments.join(""):e.content,oy=e=>{const t=un("body",Zv());return so(t,ny(e)),$(hr(t,"*[data-mce-bogus]"),oo),ro(t)},ry=(e,t)=>!(!e||!t)&&(!!((e,t)=>ny(e)===ny(t))(e,t)||((e,t)=>oy(e)===oy(t))(e,t)),sy=e=>0===e.get(),ay=(e,t,n)=>{sy(n)&&(e.typing=t)},iy=(e,t)=>{e.typing&&(ay(e,!1,t),e.add())},ly=e=>({init:{bindEvents:S},undoManager:{beforeChange:(t,n)=>((e,t,n)=>{sy(t)&&n.set(xi(e.selection))})(e,t,n),add:(t,n,o,r,s,a)=>((e,t,n,o,r,s,a)=>{const i=ey(e);if(s=s||{},s=Bt.extend(s,i),!1===sy(o)||e.removed)return null;const l=t.data[n.get()];if(e.dispatch("BeforeAddUndo",{level:s,lastLevel:l,originalEvent:a}).isDefaultPrevented())return null;if(l&&ry(l,s))return null;t.data[n.get()]&&r.get().each((e=>{t.data[n.get()].beforeBookmark=e}));const d=Ul(e);if(d&&t.data.length>d){for(let e=0;e<t.data.length-1;e++)t.data[e]=t.data[e+1];t.data.length--,n.set(t.data.length)}s.bookmark=xi(e.selection),n.get()<t.data.length-1&&(t.data.length=n.get()+1),t.data.push(s),n.set(t.data.length-1);const c={level:s,lastLevel:l,originalEvent:a};return n.get()>0?(e.setDirty(!0),e.dispatch("AddUndo",c),e.dispatch("change",c)):e.dispatch("AddUndo",c),s})(e,t,n,o,r,s,a),undo:(t,n,o)=>((e,t,n,o)=>{let r;return t.typing&&(t.add(),t.typing=!1,ay(t,!1,n)),o.get()>0&&(o.set(o.get()-1),r=t.data[o.get()],ty(e,r,!0),e.setDirty(!0),e.dispatch("Undo",{level:r})),r})(e,t,n,o),redo:(t,n)=>((e,t,n)=>{let o;return t.get()<n.length-1&&(t.set(t.get()+1),o=n[t.get()],ty(e,o,!1),e.setDirty(!0),e.dispatch("Redo",{level:o})),o})(e,t,n),clear:(t,n)=>((e,t,n)=>{t.data=[],n.set(0),t.typing=!1,e.dispatch("ClearUndos")})(e,t,n),reset:e=>(e=>{e.clear(),e.add()})(e),hasUndo:(t,n)=>((e,t,n)=>n.get()>0||t.typing&&t.data[0]&&!ry(ey(e),t.data[0]))(e,t,n),hasRedo:(e,t)=>((e,t)=>t.get()<e.data.length-1&&!e.typing)(e,t),transact:(e,t,n)=>((e,t,n)=>(iy(e,t),e.beforeChange(),e.ignore(n),e.add()))(e,t,n),ignore:(e,t)=>((e,t)=>{try{e.set(e.get()+1),t()}finally{e.set(e.get()-1)}})(e,t),extra:(t,n,o,r)=>((e,t,n,o,r)=>{if(t.transact(o)){const o=t.data[n.get()].bookmark,s=t.data[n.get()-1];ty(e,s,!0),t.transact(r)&&(t.data[n.get()-1].beforeBookmark=o)}})(e,t,n,o,r)},formatter:{match:(t,n,o,r)=>ph(e,t,n,o,r),matchAll:(t,n)=>((e,t,n)=>{const o=[],r={},s=e.selection.getStart();return e.dom.getParent(s,(s=>{for(let a=0;a<t.length;a++){const i=t[a];!r[i]&&gh(e,s,i,n)&&(r[i]=!0,o.push(i))}}),e.dom.getRoot()),o})(e,t,n),matchNode:(t,n,o,r)=>gh(e,t,n,o,r),canApply:t=>((e,t)=>{const n=e.formatter.get(t),o=e.dom;if(n){const t=e.selection.getStart(),r=mu(o,t);for(let e=n.length-1;e>=0;e--){const t=n[e];if(!gu(t))return!0;for(let e=r.length-1;e>=0;e--)if(o.is(r[e],t.selector))return!0}}return!1})(e,t),closest:t=>((e,t)=>{const n=t=>vn(t,fn(e.getBody()));return M.from(e.selection.getStart(!0)).bind((o=>lh(fn(o),(n=>ce(t,(t=>((t,n)=>gh(e,t.dom,n)?M.some(n):M.none())(n,t)))),n))).getOrNull()})(e,t),apply:(t,n,o)=>eb(e,t,n,o),remove:(t,n,o,r)=>Xh(e,t,n,o,r),toggle:(t,n,o)=>((e,t,n,o)=>{const r=e.formatter.get(t);!ph(e,t,n,o)||"toggle"in r[0]&&!r[0].toggle?eb(e,t,n,o):Xh(e,t,n,o)})(e,t,n,o),formatChanged:(t,n,o,r,s)=>((e,t,n,o,r,s)=>(null===t.get()&&((e,t)=>{e.set({}),t.on("NodeChange",(n=>{sb(t,n.element,e.get())})),t.on("FormatApply FormatRemove",(n=>{const o=M.from(n.node).map((e=>tu(e)?e:e.startContainer)).bind((e=>Co(e)?M.some(e):M.from(e.parentElement))).getOrThunk((()=>nb(t)));sb(t,o,e.get())}))})(t,e),((e,t,n,o,r,s)=>{const a=t.get();$(n.split(","),(t=>{const n=we(a,t).getOrThunk((()=>{const e={withSimilar:{state:ea(!1),similar:!0,callbacks:[]},withoutSimilar:{state:ea(!1),similar:!1,callbacks:[]},withVars:[]};return a[t]=e,e})),i=()=>{const n=rb(e);return ob(e,n,t,r,s).isSome()};if(v(s)){const e=r?n.withSimilar:n.withoutSimilar;e.callbacks.push(o),1===e.callbacks.length&&e.state.set(i())}else n.withVars.push({state:ea(i()),similar:r,vars:s,callback:o})})),t.set(a)})(e,t,n,o,r,s),{unbind:()=>((e,t,n)=>{const o=e.get();$(t.split(","),(e=>we(o,e).each((t=>{o[e]={withSimilar:{...t.withSimilar,callbacks:K(t.withSimilar.callbacks,(e=>e!==n))},withoutSimilar:{...t.withoutSimilar,callbacks:K(t.withoutSimilar.callbacks,(e=>e!==n))},withVars:K(t.withVars,(e=>e.callback!==n))}})))),e.set(o)})(t,n,o)}))(e,t,n,o,r,s)},editor:{getContent:t=>((e,t)=>M.from(e.getBody()).fold(N("tree"===t.format?new jf("body",11):""),(n=>((e,t,n)=>{let o;return"raw"===t.format?o=Bt.trim(qf(e.serializer,n.innerHTML)):"text"===t.format?(o=_r(n.innerText),o="\n"===o?"":o):o="tree"===t.format?e.serializer.serialize(n,t):((e,t)=>{const n=Ki(e),o=new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);return t.replace(o,"")})(e,e.serializer.serialize(n,t)),"text"!==t.format&&!lr(fn(n))&&m(o)?Bt.trim(o):o})(e,t,n))))(e,t),setContent:(t,n)=>((e,t,n)=>M.from(e.getBody()).map((o=>rh(t)?((e,t,n,o)=>{Hp(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n);const r=Xf({validate:!1},e.schema).serialize(n),s=lr(fn(t))?r:Bt.trim(r);return sh(e,s,o.no_selection),{content:n,html:s}})(e,o,t,n):((e,t,n,o)=>{if(0===n.length||/^\s+$/.test(n)){const r='<br data-mce-bogus="1">';"TABLE"===t.nodeName?n="<tr><td>"+r+"</td></tr>":/^(UL|OL)$/.test(t.nodeName)&&(n="<li>"+r+"</li>");const s=Ki(e);return e.schema.isValidChild(t.nodeName.toLowerCase(),s.toLowerCase())?(n=r,n=e.dom.createHTML(s,Gi(e),n)):n||(n=r),sh(e,n,o.no_selection),{content:n,html:n}}{"raw"!==o.format&&(n=Xf({validate:!1},e.schema).serialize(e.parser.parse(n,{isRootContent:!0,insert:!0})));const r=lr(fn(t))?n:Bt.trim(n);return sh(e,r,o.no_selection),{content:r,html:r}}})(e,o,t,n))).getOr({content:t,html:rh(n.content)?"":n.content}))(e,t,n),insertContent:(t,n)=>oh(e,t,n),addVisual:t=>((e,t)=>{const n=e.dom,o=C(t)?t:e.getBody();v(e.hasVisual)&&(e.hasVisual=Wl(e)),$(n.select("table,a",o),(t=>{switch(t.nodeName){case"TABLE":const o=Kl(e),r=n.getAttrib(t,"border");r&&"0"!==r||!e.hasVisual?n.removeClass(t,o):n.addClass(t,o);break;case"A":if(!n.getAttrib(t,"href")){const o=n.getAttrib(t,"name")||t.id,r=Gl(e);o&&e.hasVisual?n.addClass(t,r):n.removeClass(t,r)}}})),e.dispatch("VisualAid",{element:t,hasVisual:e.hasVisual})})(e,t)},selection:{getContent:(t,n)=>((e,t,n={})=>{const o=((e,t)=>({...e,format:t,get:!0,selection:!0,getInner:!0}))(n,t);return Bv(e,o).fold(R,(t=>{const n=((e,t)=>{if("text"===t.format)return(e=>M.from(e.selection.getRng()).map((t=>{const n=M.from(e.dom.getParent(t.commonAncestorContainer,e.dom.isBlock)),o=e.getBody(),r=(e=>e.map((e=>e.nodeName)).getOr("div").toLowerCase())(n),s=e.dom.add(o,r,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},t.cloneContents()),a=Xv(s),i=_r(s.textContent);if(e.dom.remove(s),Yv(i,0)||Yv(i,i.length-1)){const e=n.getOr(o),t=Xv(e),r=t.indexOf(a);return-1===r?a:(Yv(t,r-1)?" ":"")+a+(Yv(t,r+a.length)?" ":"")}return a})).getOr(""))(e);{const n=((e,t)=>{const n=e.selection.getRng(),o=e.dom.create("body"),r=e.selection.getSel(),s=Tf(e,Du(r)),a=t.contextual?Gv(fn(e.getBody()),s).dom:n.cloneContents();return a&&o.appendChild(a),e.selection.serializer.serialize(o,t)})(e,t);return"tree"===t.format?n:e.selection.isCollapsed()?"":n}})(e,t);return Dv(e,n,t)}))})(e,t,n)},autocompleter:{addDecoration:t=>Lf(e,t),removeDecoration:()=>((e,t)=>Mf(t).each((t=>{const n=e.selection.getBookmark();oo(t),e.selection.moveToBookmark(n)})))(e,fn(e.getBody()))},raw:{getModel:()=>M.none()}}),dy=e=>xe(e.plugins,"rtc"),cy=e=>e.rtcInstance?e.rtcInstance:ly(e),uy=e=>{const t=e.rtcInstance;if(t)return t;throw new Error("Failed to get RTC instance not yet initialized.")},my=e=>uy(e).init.bindEvents(),fy=e=>0===e.dom.length?(no(e),M.none()):M.some(e),gy=(e,t,n,o)=>{e.bind((e=>((o?qg:$g)(e.dom,o?e.dom.length:0),t.filter(zt).map((t=>((e,t,n,o)=>{const r=e.dom,s=t.dom,a=o?r.length:s.length;o?(Wg(r,s,!1,!o),n.setStart(s,a)):(Wg(s,r,!1,!o),n.setEnd(s,a))})(e,t,n,o)))))).orThunk((()=>{const e=((e,t)=>e.filter((e=>Yu.isBookmarkNode(e.dom))).bind(t?_n:Sn))(t,o).or(t).filter(zt);return e.map((e=>((e,t)=>{kn(e).each((n=>{const o=e.dom;t&&Ig(n,ti(o,0))?$g(o,0):!t&&Fg(n,ti(o,o.length))&&qg(o,o.length)}))})(e,o)))}))},py=(e,t,n)=>{if(e&&xe(e,t)){const o=K(e[t],(e=>e!==n));0===o.length?delete e[t]:e[t]=o}},hy=e=>!(!e||!e.ownerDocument)&&yn(fn(e.ownerDocument),fn(e)),by=(e,t,n,o)=>{let r,s;const{selectorChangedWithUnbind:a}=((e,t)=>{let n,o;const r=(t,n)=>Q(n,(n=>e.is(n,t))),s=t=>e.getParents(t,null,e.getRoot());return{selectorChangedWithUnbind:(e,a)=>(n||(n={},o={},t.on("NodeChange",(e=>{const t=e.element,a=s(t),i={};Bt.each(n,((e,t)=>{r(t,a).each((n=>{o[t]||($(e,(e=>{e(!0,{node:n,selector:t,parents:a})})),o[t]=e),i[t]=e}))})),Bt.each(o,((e,n)=>{i[n]||(delete o[n],Bt.each(e,(e=>{e(!1,{node:t,selector:n,parents:a})})))}))}))),n[e]||(n[e]=[]),n[e].push(a),r(e,s(t.selection.getStart())).each((()=>{o[e]=n[e]})),{unbind:()=>{py(n,e,a),py(o,e,a)}})}})(e,o),i=(e,t)=>((e,t,n={})=>{const o=((e,t)=>({format:"html",...e,set:!0,selection:!0,content:t}))(n,t);Pv(e,o).each((t=>{const n=((e,t)=>{if("raw"!==t.format){const n=e.selection.getRng(),o=e.dom.getParent(n.commonAncestorContainer,e.dom.isBlock),r=o?{context:o.nodeName.toLowerCase()}:{},s=e.parser.parse(t.content,{forced_root_block:!1,...r,...t});return Xf({validate:!1},e.schema).serialize(s)}return t.content})(e,t),o=e.selection.getRng();((e,t)=>{const n=M.from(t.firstChild).map(fn),o=M.from(t.lastChild).map(fn);e.deleteContents(),e.insertNode(t);const r=n.bind(Sn).filter(zt).bind(fy),s=o.bind(_n).filter(zt).bind(fy);gy(r,n,e,!0),gy(s,o,e,!1),e.collapse(!1)})(o,o.createContextualFragment(n)),e.selection.setRng(o),of(e,o),Lv(e,n,t)}))})(o,e,t),l=e=>{const t=c();t.collapse(!!e),u(t)},d=()=>t.getSelection?t.getSelection():t.document.selection,c=()=>{let n,a,i;const l=(e,t,n)=>{try{return t.compareBoundaryPoints(e,n)}catch(e){return-1}},c=t.document;if(void 0!==o.bookmark&&!1===_f(o)){const e=pf(o);if(e.isSome())return e.map((e=>Tf(o,[e])[0])).getOr(c.createRange())}try{(n=d())&&!yo(n.anchorNode)&&(a=n.rangeCount>0?n.getRangeAt(0):n.createRange?n.createRange():c.createRange(),a=Tf(o,[a])[0])}catch(e){}return a||(a=c.createRange()),a.setStart&&9===a.startContainer.nodeType&&a.collapsed&&(i=e.getRoot(),a.setStart(i,0),a.setEnd(i,0)),r&&s&&(0===l(a.START_TO_START,a,r)&&0===l(a.END_TO_END,a,r)?a=s:(r=null,s=null)),a},u=(e,t)=>{let n;if(!(e=>!!e&&hy(e.startContainer)&&hy(e.endContainer))(e))return;const a=d();if(e=o.dispatch("SetSelectionRange",{range:e,forward:t}).range,a){s=e;try{a.removeAllRanges(),a.addRange(e)}catch(e){}!1===t&&a.extend&&(a.collapse(e.endContainer,e.endOffset),a.extend(e.startContainer,e.startOffset)),r=a.rangeCount>0?a.getRangeAt(0):null}!e.collapsed&&e.startContainer===e.endContainer&&a.setBaseAndExtent&&e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(n=e.startContainer.childNodes[e.startOffset],n&&"IMG"===n.tagName&&(a.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),a.anchorNode===e.startContainer&&a.focusNode===e.endContainer||a.setBaseAndExtent(n,0,n,1))),o.dispatch("AfterSetSelectionRange",{range:e,forward:t})},m=()=>{const t=d(),n=null==t?void 0:t.anchorNode,o=null==t?void 0:t.focusNode;if(!t||!n||!o||yo(n)||yo(o))return!0;const r=e.createRng(),s=e.createRng();try{r.setStart(n,t.anchorOffset),r.collapse(!0),s.setStart(o,t.focusOffset),s.collapse(!0)}catch(e){return!0}return r.compareBoundaryPoints(r.START_TO_START,s)<=0},f={bookmarkManager:null,controlSelection:null,dom:e,win:t,serializer:n,editor:o,collapse:l,setCursorLocation:(t,n)=>{const r=e.createRng();C(t)&&C(n)?(r.setStart(t,n),r.setEnd(t,n),u(r),l(!1)):(zu(e,r,o.getBody(),!0),u(r))},getContent:e=>((e,t={})=>((e,t,n)=>uy(e).selection.getContent(t,n))(e,t.format?t.format:"html",t))(o,e),setContent:i,getBookmark:(e,t)=>g.getBookmark(e,t),moveToBookmark:e=>g.moveToBookmark(e),select:(t,n)=>(((e,t,n)=>M.from(t).map((t=>{const o=e.nodeIndex(t),r=e.createRng();return r.setStart(t.parentNode,o),r.setEnd(t.parentNode,o+1),n&&(zu(e,r,t,!0),zu(e,r,t,!1)),r})))(e,t,n).each(u),t),isCollapsed:()=>{const e=c(),t=d();return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:m,setNode:t=>(i(e.getOuterHTML(t)),t),getNode:()=>((e,t)=>{let n,o,r;if(!t)return e;o=t.startContainer,r=t.endContainer;const s=t.startOffset,a=t.endOffset;return n=t.commonAncestorContainer,!t.collapsed&&(o===r&&a-s<2&&o.hasChildNodes()&&(n=o.childNodes[s]),3===o.nodeType&&3===r.nodeType&&(o=o.length===s?Of(o.nextSibling,!0):o.parentNode,r=0===a?Of(r.previousSibling,!1):r.parentNode,o&&o===r))?o:n&&3===n.nodeType?n.parentNode:n})(o.getBody(),c()),getSel:d,setRng:u,getRng:c,getStart:e=>Rf(o.getBody(),c(),e),getEnd:e=>Af(o.getBody(),c(),e),getSelectedBlocks:(t,n)=>((e,t,n,o)=>{let r;const s=[],a=e.getRoot();if(n=e.getParent(n||Rf(a,t,t.collapsed),e.isBlock),o=e.getParent(o||Af(a,t,t.collapsed),e.isBlock),n&&n!==a&&s.push(n),n&&o&&n!==o){r=n;const t=new Qo(n,a);for(;(r=t.next())&&r!==o;)e.isBlock(r)&&s.push(r)}return o&&n!==o&&o!==a&&s.push(o),s})(e,c(),t,n),normalize:()=>{const t=c(),n=d();if(!(Du(n).length>1)&&ju(o)){const n=Pm(e,t);return n.each((e=>{u(e,m())})),n.getOr(t)}return t},selectorChanged:(e,t)=>(a(e,t),f),selectorChangedWithUnbind:a,getScrollContainer:()=>{let t,n=e.getRoot();for(;n&&"BODY"!==n.nodeName;){if(n.scrollHeight>n.clientHeight){t=n;break}n=n.parentNode}return t},scrollIntoView:(e,t)=>{C(e)?((e,t,n)=>{(e.inline?ef:nf)(e,t,n)})(o,e,t):of(o,c(),t)},placeCaretAt:(e,t)=>u(Sm(e,t,o.getDoc())),getBoundingClientRect:()=>{const e=c();return e.collapsed?ti.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:()=>{t=r=s=null,p.destroy()}},g=Yu(f),p=lm(f,o);return f.bookmarkManager=g,f.controlSelection=p,f},vy=(e,t,n)=>{-1===Bt.inArray(t,n)&&(e.addAttributeFilter(n,((e,t)=>{let n=e.length;for(;n--;)e[n].attr(t,null)})),t.push(n))},yy=(e,t)=>{const n=["data-mce-selected"],o=t&&t.dom?t.dom:Qs.DOM,r=t&&t.schema?t.schema:Bs(e);e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs;const s=Ov(e,r);return((e,t,n)=>{e.addAttributeFilter("data-mce-tabindex",((e,t)=>{let n=e.length;for(;n--;){const o=e[n];o.attr("tabindex",o.attr("data-mce-tabindex")),o.attr(t,null)}})),e.addAttributeFilter("src,href,style",((e,o)=>{const r="data-mce-"+o,s=t.url_converter,a=t.url_converter_scope;let i=e.length;for(;i--;){const t=e[i];let l=t.attr(r);void 0!==l?(t.attr(o,l.length>0?l:null),t.attr(r,null)):(l=t.attr(o),"style"===o?l=n.serializeStyle(n.parseStyle(l),t.name):s&&(l=s.call(a,l,o,t.name)),t.attr(o,l.length>0?l:null))}})),e.addAttributeFilter("class",(e=>{let t=e.length;for(;t--;){const n=e[t];let o=n.attr("class");o&&(o=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",o.length>0?o:null))}})),e.addAttributeFilter("data-mce-type",((e,t,n)=>{let o=e.length;for(;o--;){const t=e[o];if("bookmark"===t.attr("data-mce-type")&&!n.cleanup){const e=M.from(t.firstChild).exists((e=>!Sr(e.value)));e?t.unwrap():t.remove()}}})),e.addNodeFilter("noscript",(e=>{let t=e.length;for(;t--;){const n=e[t].firstChild;n&&(n.value=Cs.decode(n.value))}})),e.addNodeFilter("script,style",((e,n)=>{const o=e=>e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"");let r=e.length;for(;r--;){const s=e[r],a=s.firstChild?s.firstChild.value:"";if("script"===n){const e=s.attr("type");e&&s.attr("type","mce-no/type"===e?null:e.replace(/^mce\-/,"")),"xhtml"===t.element_format&&a.length>0&&(s.firstChild.value="// <![CDATA[\n"+o(a)+"\n// ]]>")}else"xhtml"===t.element_format&&a.length>0&&(s.firstChild.value="\x3c!--\n"+o(a)+"\n--\x3e")}})),e.addNodeFilter("#comment",(e=>{let o=e.length;for(;o--;){const r=e[o];t.preserve_cdata&&0===r.value.indexOf("[CDATA[")?(r.name="#cdata",r.type=4,r.value=n.decode(r.value.replace(/^\[CDATA\[|\]\]$/g,""))):0===r.value.indexOf("mce:protected ")&&(r.name="#text",r.type=3,r.raw=!0,r.value=unescape(r.value).substr(14))}})),e.addNodeFilter("xml:namespace,input",((e,t)=>{let n=e.length;for(;n--;){const o=e[n];7===o.type?o.remove():1===o.type&&("input"!==t||o.attr("type")||o.attr("type","text"))}})),e.addAttributeFilter("data-mce-type",(t=>{$(t,(t=>{"format-caret"===t.attr("data-mce-type")&&(t.isEmpty(e.schema.getNonEmptyElements())?t.remove():t.unwrap())}))})),e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",((e,t)=>{let n=e.length;for(;n--;)e[n].attr(t,null)}))})(s,e,o),{schema:r,addNodeFilter:s.addNodeFilter,addAttributeFilter:s.addAttributeFilter,serialize:(n,a={})=>{const i={format:"html",...a},l=((e,t,n)=>((e,t)=>e&&e.hasEventListeners("PreProcess")&&!t.no_events)(e,n)?((e,t,n)=>{let o;const r=e.dom;let s=t.cloneNode(!0);const a=document.implementation;if(a.createHTMLDocument){const e=a.createHTMLDocument("");Bt.each("BODY"===s.nodeName?s.childNodes:[s],(t=>{e.body.appendChild(e.importNode(t,!0))})),s="BODY"!==s.nodeName?e.body.firstChild:e.body,o=r.doc,r.doc=e}return((e,t)=>{e.dispatch("PreProcess",t)})(e,{...n,node:s}),o&&(r.doc=o),s})(e,t,n):t)(t,n,i),d=((e,t,n)=>{const o=_r(n.getInner?t.innerHTML:e.getOuterHTML(t));return n.selection||lr(fn(t))?o:Bt.trim(o)})(o,l,i),c=((e,t,n)=>{const o=n.selection?{forced_root_block:!1,...n}:n,r=e.parse(t,o);return(e=>{const t=e=>e&&"br"===e.name,n=e.lastChild;if(t(n)){const e=n.prev;t(e)&&(n.remove(),e.remove())}})(r),r})(s,d,i);return"tree"===i.format?c:((e,t,n,o,r)=>{const s=((e,t,n)=>Xf(e,t).serialize(n))(t,n,o);return((e,t,n)=>{if(!t.no_events&&e){const o=((e,t)=>e.dispatch("PostProcess",t))(e,{...t,content:n});return o.content}return n})(e,r,s)})(t,e,r,c,i)},addRules:r.addValidElements,setRules:r.setValidElements,addTempAttr:O(vy,s,n),getTempAttrs:N(n),getNodeFilters:s.getNodeFilters,getAttributeFilters:s.getAttributeFilters,removeNodeFilter:s.removeNodeFilter,removeAttributeFilter:s.removeAttributeFilter}},Cy=(e,t)=>{const n=yy(e,t);return{schema:n.schema,addNodeFilter:n.addNodeFilter,addAttributeFilter:n.addAttributeFilter,serialize:n.serialize,addRules:n.addRules,setRules:n.setRules,addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters,removeNodeFilter:n.removeNodeFilter,removeAttributeFilter:n.removeAttributeFilter}},wy=(e,t,n={})=>{const o=((e,t)=>({format:"html",...e,set:!0,content:t}))(n,t);return Pv(e,o).map((t=>{const n=((e,t,n)=>cy(e).editor.setContent(t,n))(e,t.content,t);return Lv(e,n.html,t),n.content})).getOr(t)},xy="autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),ky="bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),Sy=e=>{const t=K(xy,(t=>xe(e,t))),n=e.forced_root_block;return!1!==n&&""!==n||t.push("forced_root_block (false only)"),se(t)},_y=e=>{const t=Bt.makeMap(e.plugins," "),n=K(ky,(e=>xe(t,e)));return se(n)},Ey=Qs.DOM,Ny=e=>M.from(e).each((e=>e.destroy())),Ry=(()=>{const e={};return{add:(t,n)=>{e[t]=n},get:t=>e[t]?e[t]:{icons:{}},has:t=>xe(e,t)}})(),Ay=sa.ModelManager,Oy=(e,t)=>t.dom[e],Ty=(e,t)=>parseInt(qn(t,e),10),By=O(Oy,"clientWidth"),Dy=O(Oy,"clientHeight"),Py=O(Ty,"margin-top"),Ly=O(Ty,"margin-left"),My=e=>{const t=[],n=()=>{const t=e.theme;return t&&t.getNotificationManagerImpl?t.getNotificationManagerImpl():(()=>{const e=()=>{throw new Error("Theme did not provide a NotificationManager implementation.")};return{open:e,close:e,getArgs:e}})()},o=()=>M.from(t[0]),r=()=>{$(t,(e=>{e.reposition()}))},s=e=>{J(t,(t=>t===e)).each((e=>{t.splice(e,1)}))},a=(a,i=!0)=>{if(!e.removed&&(e=>{return(t=e.inline?e.getBody():e.getContentAreaContainer(),M.from(t).map(fn)).map(jn).getOr(!1);var t})(e))return i&&e.dispatch("BeforeOpenNotification",{notification:a}),Q(t,(e=>{return t=n().getArgs(e),o=a,!(t.type!==o.type||t.text!==o.text||t.progressBar||t.timeout||o.progressBar||o.timeout);var t,o})).getOrThunk((()=>{e.editorManager.setActive(e);const i=n().open(a,(()=>{s(i),r(),o().fold((()=>e.focus()),(e=>rf(fn(e.getEl()))))}));return(e=>{t.push(e)})(i),r(),e.dispatch("OpenNotification",{notification:{...i}}),i}))},i=N(t);return(e=>{e.on("SkinLoaded",(()=>{const t=Sl(e);t&&a({text:t,type:"warning",timeout:0},!1),r()})),e.on("show ResizeEditor ResizeWindow NodeChange",(()=>{requestAnimationFrame(r)})),e.on("remove",(()=>{$(t.slice(),(e=>{n().close(e)}))}))})(e),{open:a,close:()=>{o().each((e=>{n().close(e),s(e),r()}))},getNotifications:i}},Iy=sa.PluginManager,Fy=sa.ThemeManager,Uy=e=>{let t=[];const n=()=>{const t=e.theme;return t&&t.getWindowManagerImpl?t.getWindowManagerImpl():(()=>{const e=()=>{throw new Error("Theme did not provide a WindowManager implementation.")};return{open:e,openUrl:e,alert:e,confirm:e,close:e,getParams:e,setParams:e}})()},o=(e,t)=>(...n)=>t?t.apply(e,n):void 0,r=n=>{(t=>{e.dispatch("CloseWindow",{dialog:t})})(n),t=K(t,(e=>e!==n)),0===t.length&&e.focus()},s=n=>{e.editorManager.setActive(e),gf(e),e.ui.show();const o=n();return(n=>{t.push(n),(t=>{e.dispatch("OpenWindow",{dialog:t})})(n)})(o),o};return e.on("remove",(()=>{$(t,(e=>{n().close(e)}))})),{open:(e,t)=>s((()=>n().open(e,t,r))),openUrl:e=>s((()=>n().openUrl(e,r))),alert:(e,t,r)=>{const s=n();s.alert(e,o(r||s,t))},confirm:(e,t,r)=>{const s=n();s.confirm(e,o(r||s,t))},close:()=>{M.from(t[t.length-1]).each((e=>{n().close(e),r(e)}))}}},zy=(e,t)=>{e.notificationManager.open({type:"error",text:t})},jy=(e,t)=>{e._skinLoaded?zy(e,t):e.on("SkinLoaded",(()=>{zy(e,t)}))},Vy=(e,t,n)=>{Qu(e,t,{message:n}),console.error(n)},Hy=(e,t,n)=>n?`Failed to load ${e}: ${n} from url ${t}`:`Failed to load ${e} url: ${t}`,$y=(e,...t)=>{const n=window.console;n&&(n.error?n.error(e,...t):n.log(e,...t))},qy=(e,t)=>{const n=e.editorManager.baseURL+"/skins/content",o=`content${e.editorManager.suffix}.css`,r=!0===e.inline;return H(t,(t=>(e=>/^[a-z0-9\-]+$/i.test(e))(t)&&!r?`${n}/${t}/${o}`:e.documentBaseURI.toAbsolute(t)))},Wy=L,Ky=(e,t)=>{const n={};return{findAll:(o,r=L)=>{const s=K((e=>e?de(e.getElementsByTagName("img")):[])(o),(t=>{const n=t.src;return!t.hasAttribute("data-mce-bogus")&&!t.hasAttribute("data-mce-placeholder")&&!(!n||n===Nt.transparentSrc)&&(ze(n,"blob:")?!e.isUploaded(n)&&r(t):!!ze(n,"data:")&&r(t))})),a=H(s,(e=>{const o=e.src;if(xe(n,o))return n[o].then((t=>m(t)?t:{image:e,blobInfo:t.blobInfo}));{const r=((e,t)=>{const n=()=>Promise.reject("Invalid data URI");if(ze(t,"blob:")){const s=e.getByUri(t);return C(s)?Promise.resolve(s):(o=t,ze(o,"blob:")?(e=>fetch(e).then((e=>e.ok?e.blob():Promise.reject())).catch((()=>Promise.reject(`Cannot convert ${e} to Blob. Resource might not exist or is inaccessible.`))))(o):ze(o,"data:")?(r=o,new Promise(((e,t)=>{dv(r).bind((({type:e,data:t,base64Encoded:n})=>cv(e,t,n))).fold((()=>t("Invalid data URI")),e)}))):Promise.reject("Unknown URI format")).then((t=>uv(t).then((o=>fv(o,!1,(n=>M.some(gv(e,t,n)))).getOrThunk(n)))))}var o,r;return ze(t,"data:")?pv(e,t).fold(n,(e=>Promise.resolve(e))):Promise.reject("Unknown image data format")})(t,o).then((t=>(delete n[o],{image:e,blobInfo:t}))).catch((e=>(delete n[o],e)));return n[o]=r,r}}));return Promise.all(a)}}},Gy=()=>{let e={};const t=(e,t)=>({status:e,resultUri:t}),n=t=>t in e;return{hasBlobUri:n,getResultUri:t=>{const n=e[t];return n?n.resultUri:null},isPending:t=>!!n(t)&&1===e[t].status,isUploaded:t=>!!n(t)&&2===e[t].status,markPending:n=>{e[n]=t(1,null)},markUploaded:(n,o)=>{e[n]=t(2,o)},removeFailed:t=>{delete e[t]},destroy:()=>{e={}}}};let Yy=0;const Xy=(e,t)=>{const n={},o=(e,n)=>new Promise(((o,r)=>{const s=new XMLHttpRequest;s.open("POST",t.url),s.withCredentials=t.credentials,s.upload.onprogress=e=>{n(e.loaded/e.total*100)},s.onerror=()=>{r("Image upload failed due to a XHR Transport error. Code: "+s.status)},s.onload=()=>{if(s.status<200||s.status>=300)return void r("HTTP Error: "+s.status);const e=JSON.parse(s.responseText);var n,a;e&&m(e.location)?o((n=t.basePath,a=e.location,n?n.replace(/\/$/,"")+"/"+a.replace(/^\//,""):a)):r("Invalid JSON: "+s.responseText)};const a=new FormData;a.append("file",e.blob(),e.filename()),s.send(a)})),r=(e,t)=>({url:t,blobInfo:e,status:!0}),s=(e,t)=>({url:"",blobInfo:e,status:!1,error:t}),a=(e,t)=>{Bt.each(n[e],(e=>{e(t)})),delete n[e]};return!1===w(t.handler)&&(t.handler=o),{upload:(i,l)=>t.url||t.handler!==o?((o,i)=>(o=Bt.grep(o,(t=>!e.isUploaded(t.blobUri()))),Promise.all(Bt.map(o,(o=>e.isPending(o.blobUri())?(e=>{const t=e.blobUri();return new Promise((e=>{n[t]=n[t]||[],n[t].push(e)}))})(o):((t,n,o)=>(e.markPending(t.blobUri()),new Promise((i=>{let l,d;try{const c=()=>{l&&(l.close(),d=S)},u=n=>{c(),e.markUploaded(t.blobUri(),n),a(t.blobUri(),r(t,n)),i(r(t,n))},f=n=>{c(),e.removeFailed(t.blobUri()),a(t.blobUri(),s(t,n)),i(s(t,n))};d=e=>{e<0||e>100||M.from(l).orThunk((()=>M.from(o).map(B))).each((t=>{l=t,t.progressBar.value(e)}))},n(t,d).then(u,(e=>{f(m(e)?{message:e}:e)}))}catch(e){i(s(t,e))}}))))(o,t.handler,i))))))(i,l):new Promise((e=>{e([])}))}},Qy=e=>()=>e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0}),Jy=(e,t)=>Xy(t,{url:sl(e),basePath:al(e),credentials:il(e),handler:ll(e)}),Zy=e=>{const t=(()=>{let e=[];const t=e=>{if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");const t=e.id||"blobid"+Yy+++(()=>{const e=()=>Math.round(4294967295*Math.random()).toString(36);return"s"+(new Date).getTime().toString(36)+e()+e()+e()})(),n=e.name||t,o=e.blob;var r;return{id:N(t),name:N(n),filename:N(e.filename||n+"."+(r=o.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"}[r.toLowerCase()]||"dat")),blob:N(o),base64:N(e.base64),blobUri:N(e.blobUri||URL.createObjectURL(o)),uri:N(e.uri)}},n=t=>Q(e,t).getOrUndefined(),o=e=>n((t=>t.id()===e));return{create:(e,n,o,r,s)=>{if(m(e))return t({id:e,name:r,filename:s,blob:n,base64:o});if(f(e))return t(e);throw new Error("Unknown input type")},add:t=>{o(t.id())||e.push(t)},get:o,getByUri:e=>n((t=>t.blobUri()===e)),getByData:(e,t)=>n((n=>n.base64()===e&&n.blob().type===t)),findFirst:n,removeByUri:t=>{e=K(e,(e=>e.blobUri()!==t||(URL.revokeObjectURL(e.blobUri()),!1)))},destroy:()=>{$(e,(e=>{URL.revokeObjectURL(e.blobUri())})),e=[]}}})();let n,o;const r=Gy(),s=[],a=t=>n=>e.selection?t(n):[],i=(e,t,n)=>{let o=0;do{o=e.indexOf(t,o),-1!==o&&(e=e.substring(0,o)+n+e.substr(o+t.length),o+=n.length-t.length+1)}while(-1!==o);return e},l=(e,t,n)=>{const o=`src="${n}"${n===Nt.transparentSrc?' data-mce-placeholder="1"':""}`;return e=i(e,`src="${t}"`,o),i(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},d=(t,n)=>{$(e.undoManager.data,(e=>{"fragmented"===e.type?e.fragments=H(e.fragments,(e=>l(e,t,n))):e.content=l(e.content,t,n)}))},c=()=>(n||(n=Jy(e,r)),p().then(a((o=>{const r=H(o,(e=>e.blobInfo));return n.upload(r,Qy(e)).then(a((n=>{const r=[];let s=!1;const a=H(n,((n,a)=>{const i=o[a].blobInfo,l=o[a].image;let c=!1;return n.status&&nl(e)?(n.url&&!Ue(l.src,n.url)&&(s=!0),t.removeByUri(l.src),dy(e)||((t,n)=>{const o=e.convertURL(n,"src");var r;d(t.src,n),Wt(fn(t),{src:tl(e)?(r=n,r+(-1===r.indexOf("?")?"?":"&")+(new Date).getTime()):n,"data-mce-src":o})})(l,n.url)):n.error&&(n.error.remove&&(d(l.getAttribute("src"),Nt.transparentSrc),r.push(l),c=!0),((e,t)=>{jy(e,ra.translate(["Failed to upload image: {0}",t]))})(e,n.error.message)),{element:l,status:n.status,uploadUri:n.url,blobInfo:i,removed:c}}));return r.length>0&&!dy(e)?e.undoManager.transact((()=>{$(r,(n=>{e.dom.remove(n),t.removeByUri(n.src)}))})):s&&e.undoManager.dispatchChange(),a})))})))),u=()=>el(e)?c():Promise.resolve([]),g=e=>te(s,(t=>t(e))),p=()=>(o||(o=Ky(r,t)),o.findAll(e.getBody(),g).then(a((t=>{const n=K(t,(t=>!m(t)||(jy(e,t),!1)));return dy(e)||$(n,(e=>{d(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")})),n})))),h=n=>n.replace(/src="(blob:[^"]+)"/g,((n,o)=>{const s=r.getResultUri(o);if(s)return'src="'+s+'"';let a=t.getByUri(o);return a||(a=Y(e.editorManager.get(),((e,t)=>e||t.editorUpload&&t.editorUpload.blobCache.getByUri(o)),null)),a?'src="data:'+a.blob().type+";base64,"+a.base64()+'"':n}));return e.on("SetContent",(()=>{el(e)?u():p()})),e.on("RawSaveContent",(e=>{e.content=h(e.content)})),e.on("GetContent",(e=>{e.source_view||"raw"===e.format||"tree"===e.format||(e.content=h(e.content))})),e.on("PostRender",(()=>{e.parser.addNodeFilter("img",(e=>{$(e,(e=>{const n=e.attr("src");if(t.getByUri(n))return;const o=r.getResultUri(n);o&&e.attr("src",o)}))}))})),{blobCache:t,addFilter:e=>{s.push(e)},uploadImages:c,uploadImagesAuto:u,scanForImages:p,destroy:()=>{t.destroy(),r.destroy(),o=n=null}}},eC={remove_similar:!0,inherit:!1},tC={selector:"td,th",...eC},nC={tablecellbackgroundcolor:{styles:{backgroundColor:"%value"},...tC},tablecellverticalalign:{styles:{"vertical-align":"%value"},...tC},tablecellbordercolor:{styles:{borderColor:"%value"},...tC},tablecellclass:{classes:["%value"],...tC},tableclass:{selector:"table",classes:["%value"],...eC},tablecellborderstyle:{styles:{borderStyle:"%value"},...tC},tablecellborderwidth:{styles:{borderWidth:"%value"},...tC}},oC=N(nC),rC=Bt.each,sC=Qs.DOM,aC=(e,t)=>{let n,o,r;const s=t&&t.schema||Bs({}),a=e=>{o="string"==typeof e?{name:e,classes:[],attrs:{}}:e;const t=sC.create(o.name);return((e,t)=>{t.classes.length&&sC.addClass(e,t.classes.join(" ")),sC.setAttribs(e,t.attrs)})(t,o),t},i=(e,t,n)=>{let o,r;const l=t.length>0&&t[0],d=l&&l.name,c=((e,t)=>{const n="string"!=typeof e?e.nodeName.toLowerCase():e,o=s.getElementRule(n),r=o&&o.parentsRequired;return!(!r||!r.length)&&(t&&-1!==Bt.inArray(r,t)?t:r[0])})(e,d);if(c)d===c?(r=t[0],t=t.slice(1)):r=c;else if(l)r=t[0],t=t.slice(1);else if(!n)return e;return r&&(o=a(r),o.appendChild(e)),n&&(o||(o=sC.create("div"),o.appendChild(e)),Bt.each(n,(t=>{const n=a(t);o.insertBefore(n,e)}))),i(o,t,r&&r.siblings)};return e&&e.length?(o=e[0],n=a(o),r=sC.create("div"),r.appendChild(i(n,e.slice(1),o.siblings)),r):""},iC=e=>{let t;const n={classes:[],attrs:{}};return"*"!==(e=n.selector=Bt.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,((e,t,o,r,s)=>{switch(t){case"#":n.attrs.id=o;break;case".":n.classes.push(o);break;case":":-1!==Bt.inArray("checked disabled enabled read-only required".split(" "),o)&&(n.attrs[o]=o)}if("["===r){const e=s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);e&&(n.attrs[e[1]]=e[2])}return""}))),n.name=t||"div",n},lC=(e,t)=>{let n,o,r,s="",a=Tl(e);if(""===a)return"";const i=e=>e.replace(/%(\w+)/g,"");if("string"==typeof t){if(!(t=e.formatter.get(t)))return;t=t[0]}if("preview"in t){const e=we(t,"preview");if(Dt(e,!1))return"";a=e.getOr(a)}n=t.block||t.inline||"span";const l=(d=t.selector)&&"string"==typeof d?(d=(d=d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Bt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/),(e=>{const t=Bt.map(e.split(/(?:~\+|~|\+)/),iC),n=t.pop();return t.length&&(n.siblings=t),n})).reverse()):[];var d;l.length?(l[0].name||(l[0].name=n),n=t.selector,o=aC(l,e)):o=aC([n],e);const c=sC.select(n,o)[0]||o.firstChild;return rC(t.styles,((e,t)=>{const n=i(e);n&&sC.setStyle(c,t,n)})),rC(t.attributes,((e,t)=>{const n=i(e);n&&sC.setAttrib(c,t,n)})),rC(t.classes,(e=>{const t=i(e);sC.hasClass(c,t)||sC.addClass(c,t)})),e.dispatch("PreviewFormats"),sC.setStyles(o,{position:"absolute",left:-65535}),e.getBody().appendChild(o),r=sC.getStyle(e.getBody(),"fontSize",!0),r=/px$/.test(r)?parseInt(r,10):0,rC(a.split(" "),(t=>{let n=sC.getStyle(c,t,!0);if(!("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=sC.getStyle(e.getBody(),t,!0),"#ffffff"===eu(n).toLowerCase())||"color"===t&&"#000000"===eu(n).toLowerCase())){if("font-size"===t&&/em|%$/.test(n)){if(0===r)return;n=parseFloat(n)/(/%$/.test(n)?100:1)*r+"px"}"border"===t&&n&&(s+="padding:0 2px;"),s+=t+":"+n+";"}})),e.dispatch("AfterPreviewFormats"),sC.remove(o),s},dC=e=>{const t=(e=>{const t={},n=(e,o)=>{e&&(m(e)?(p(o)||(o=[o]),$(o,(e=>{v(e.deep)&&(e.deep=!gu(e)),v(e.split)&&(e.split=!gu(e)||pu(e)),v(e.remove)&&gu(e)&&!pu(e)&&(e.remove="none"),gu(e)&&pu(e)&&(e.mixed=!0,e.block_expand=!0),m(e.classes)&&(e.classes=e.classes.split(/\s+/))})),t[e]=o):fe(e,((e,t)=>{n(t,e)})))};return n((e=>{const t=e.dom,n=e.schema.type,o={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"left"},inherit:!1,preview:!1},{selector:"img,audio,video",collapsed:!1,styles:{float:"left"},preview:"font-family font-size"},{selector:"table",collapsed:!1,styles:{marginLeft:"0px",marginRight:"auto"},onformat:e=>{t.setStyle(e,"float",null)},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:!1,styles:{float:"right"},preview:"font-family font-size"},{selector:"table",collapsed:!1,styles:{marginRight:"0px",marginLeft:"auto"},onformat:e=>{t.setStyle(e,"float",null)},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"justify"},inherit:!1,preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:(()=>{const e={inline:"span",styles:{textDecoration:"line-through"},exact:!0},t={inline:"strike",remove:"all",preserve_attributes:["class","style"]},o={inline:"s",remove:"all",preserve_attributes:["class","style"]};return"html4"!==n?[o,e,t]:[e,o,t]})(),forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",styles:{lineHeight:"%value"}},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:!0,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:(e,t,n)=>Co(e)&&e.hasAttribute("href"),onformat:(e,n,o)=>{Bt.each(o,((n,o)=>{t.setAttrib(e,o,n)}))}},lang:{inline:"span",clear_child_styles:!0,remove_similar:!0,attributes:{lang:"%value","data-mce-lang":e=>{var t;return null!==(t=null==e?void 0:e.customValue)&&void 0!==t?t:null}}},removeformat:[{selector:"b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]};return Bt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/),(e=>{o[e]={block:e,remove:"all"}})),o})(e)),n(oC()),n(Ol(e)),{get:e=>C(e)?t[e]:t,has:e=>xe(t,e),register:n,unregister:e=>(e&&t[e]&&delete t[e],t)}})(e),n=ea(null);return(e=>{e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline");for(let t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t]);e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])})(e),(e=>{e.on("mouseup keydown",(t=>{((e,t)=>{const n=e.selection,o=e.getBody();xh(e,null,!1),8!==t&&46!==t||!n.isCollapsed()||n.getStart().innerHTML!==hh||xh(e,Bc(o,n.getStart())),37!==t&&39!==t||xh(e,Bc(o,n.getStart()))})(e,t.keyCode)}))})(e),{get:t.get,has:t.has,register:t.register,unregister:t.unregister,apply:(t,n,o)=>{((e,t,n,o)=>{uy(e).formatter.apply(t,n,o)})(e,t,n,o)},remove:(t,n,o,r)=>{((e,t,n,o,r)=>{uy(e).formatter.remove(t,n,o,r)})(e,t,n,o,r)},toggle:(t,n,o)=>{((e,t,n,o)=>{uy(e).formatter.toggle(t,n,o)})(e,t,n,o)},match:(t,n,o,r)=>((e,t,n,o,r)=>uy(e).formatter.match(t,n,o,r))(e,t,n,o,r),closest:t=>((e,t)=>uy(e).formatter.closest(t))(e,t),matchAll:(t,n)=>((e,t,n)=>uy(e).formatter.matchAll(t,n))(e,t,n),matchNode:(t,n,o,r)=>((e,t,n,o,r)=>uy(e).formatter.matchNode(t,n,o,r))(e,t,n,o,r),canApply:t=>((e,t)=>uy(e).formatter.canApply(t))(e,t),formatChanged:(t,o,r,s)=>((e,t,n,o,r,s)=>uy(e).formatter.formatChanged(t,n,o,r,s))(e,n,t,o,r,s),getCssText:O(lC,e)}},cC=e=>{switch(e.toLowerCase()){case"undo":case"redo":case"mcefocus":return!0;default:return!1}},uC=e=>{const t=aa(),n=ea(0),o=ea(0),r={data:[],typing:!1,beforeChange:()=>{((e,t,n)=>{uy(e).undoManager.beforeChange(t,n)})(e,n,t)},add:(s,a)=>((e,t,n,o,r,s,a)=>uy(e).undoManager.add(t,n,o,r,s,a))(e,r,o,n,t,s,a),dispatchChange:()=>{e.setDirty(!0),e.dispatch("change",{level:ey(e),lastLevel:ae(r.data,o.get()).getOrUndefined()})},undo:()=>((e,t,n,o)=>uy(e).undoManager.undo(t,n,o))(e,r,n,o),redo:()=>((e,t,n)=>uy(e).undoManager.redo(t,n))(e,o,r.data),clear:()=>{((e,t,n)=>{uy(e).undoManager.clear(t,n)})(e,r,o)},reset:()=>{((e,t)=>{uy(e).undoManager.reset(t)})(e,r)},hasUndo:()=>((e,t,n)=>uy(e).undoManager.hasUndo(t,n))(e,r,o),hasRedo:()=>((e,t,n)=>uy(e).undoManager.hasRedo(t,n))(e,r,o),transact:t=>((e,t,n,o)=>uy(e).undoManager.transact(t,n,o))(e,r,n,t),ignore:t=>{((e,t,n)=>{uy(e).undoManager.ignore(t,n)})(e,n,t)},extra:(t,n)=>{((e,t,n,o,r)=>{uy(e).undoManager.extra(t,n,o,r)})(e,r,o,t,n)}};return dy(e)||((e,t,n)=>{const o=ea(!1),r=e=>{ay(t,!1,n),t.add({},e)};e.on("init",(()=>{t.add()})),e.on("BeforeExecCommand",(e=>{const o=e.command;cC(o)||(iy(t,n),t.beforeChange())})),e.on("ExecCommand",(e=>{const t=e.command;cC(t)||r(e)})),e.on("ObjectResizeStart cut",(()=>{t.beforeChange()})),e.on("SaveContent ObjectResized blur",r),e.on("dragend",r),e.on("keyup",(n=>{const s=n.keyCode;n.isDefaultPrevented()||((s>=33&&s<=36||s>=37&&s<=40||45===s||n.ctrlKey)&&(r(),e.nodeChanged()),46!==s&&8!==s||e.nodeChanged(),o.get()&&t.typing&&!1===ry(ey(e),t.data[0])&&(!1===e.isDirty()&&e.setDirty(!0),e.dispatch("TypingUndo"),o.set(!1),e.nodeChanged()))})),e.on("keydown",(e=>{const s=e.keyCode;if(e.isDefaultPrevented())return;if(s>=33&&s<=36||s>=37&&s<=40||45===s)return void(t.typing&&r(e));const a=e.ctrlKey&&!e.altKey||e.metaKey;!(s<16||s>20)||224===s||91===s||t.typing||a||(t.beforeChange(),ay(t,!0,n),t.add({},e),o.set(!0))})),e.on("mousedown",(e=>{t.typing&&r(e)})),e.on("input",(e=>{var t;e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data||(e=>"insertFromPaste"===e.inputType||"insertFromDrop"===e.inputType)(e))&&r(e)})),e.on("AddUndo Undo Redo ClearUndos",(t=>{t.isDefaultPrevented()||e.nodeChanged()}))})(e,r,n),(e=>{e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo")})(e),r},mC=[9,27,om.HOME,om.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,om.DOWN,om.UP,om.LEFT,om.RIGHT].concat(Nt.browser.isFirefox()?[224]:[]),fC="data-mce-placeholder",gC=e=>"keydown"===e.type||"keyup"===e.type,pC=e=>{const t=e.keyCode;return t===om.BACKSPACE||t===om.DELETE},hC=(e,t)=>({from:e,to:t}),bC=(e,t)=>{const n=fn(e),o=fn(t.container());return cp(n,o).map((e=>((e,t)=>({block:e,position:t}))(e,t)))},vC=e=>{const t=Rn(e);return J(t,er).fold(N(t),(e=>t.slice(0,e)))},yC=e=>{const t=vC(e);return $(t,no),t},CC=(e,t)=>{const n=bg(t,e);return Q(n.reverse(),(e=>os(e))).each(no)},wC=(e,t,n,o)=>{if(os(n))return wr(n),Rc(n.dom);0===K(En(o),(e=>!os(e))).length&&os(t)&&Xn(o,un("br"));const r=Nc(n.dom,ti.before(o.dom));return $(yC(t),(e=>{Xn(o,e)})),CC(e,t),r},xC=(e,t,n)=>{if(os(n))return no(n),os(t)&&wr(t),Rc(t.dom);const o=Ac(n.dom);return $(yC(t),(e=>{Zn(n,e)})),CC(e,t),o},kC=(e,t)=>{_c(e,t.dom).map((e=>e.getNode())).map(fn).filter(nr).each(no)},SC=(e,t,n)=>(kC(!0,t),kC(!1,n),((e,t)=>yn(t,e)?((e,t)=>{const n=bg(t,e);return M.from(n[n.length-1])})(t,e):M.none())(t,n).fold(O(xC,e,t,n),O(wC,e,t,n))),_C=(e,t,n,o)=>t?SC(e,o,n):SC(e,n,o),EC=(e,t)=>{const n=fn(e.getBody()),o=((e,t,n)=>n.collapsed?((e,t,n)=>{const o=bC(e,ti.fromRangeStart(n)),r=o.bind((n=>xc(t,e,n.position).bind((n=>bC(e,n).map((n=>((e,t,n)=>Po(n.position.getNode())&&!1===os(n.block)?_c(!1,n.block.dom).bind((o=>o.isEqual(n.position)?xc(t,e,o).bind((t=>bC(e,t))):M.some(n))).getOr(n):n)(e,t,n)))))));return Pt(o,r,hC).filter((e=>(e=>!1===vn(e.from.block,e.to.block))(e)&&(e=>kn(e.from.block).bind((t=>kn(e.to.block).filter((e=>vn(t,e))))).isSome())(e)&&(e=>!1===Io(e.from.block.dom)&&!1===Io(e.to.block.dom))(e)))})(e,t,n):M.none())(n.dom,t,e.selection.getRng()).map((o=>()=>{_C(n,t,o.from.block,o.to.block).each((t=>{e.selection.setRng(t.toRange())}))}));return o},NC=(e,t)=>{const n=fn(t),o=O(vn,e);return $o(n,ir,o).isSome()},RC=e=>{const t=fn(e.getBody());return((e,t)=>{const n=Nc(e.dom,ti.fromRangeStart(t)).isNone(),o=Ec(e.dom,ti.fromRangeEnd(t)).isNone();return!((e,t)=>NC(e,t.startContainer)||NC(e,t.endContainer))(e,t)&&n&&o})(t,e.selection.getRng())?(e=>M.some((()=>{e.setContent(""),e.selection.setCursorLocation()})))(e):((e,t)=>{const n=t.getRng();return Pt(cp(e,fn(n.startContainer)),cp(e,fn(n.endContainer)),((o,r)=>!1===vn(o,r)?M.some((()=>{n.deleteContents(),_C(e,!0,o,r).each((e=>{t.setRng(e.toRange())}))})):M.none())).getOr(M.none())})(t,e.selection)},AC=(e,t)=>e.selection.isCollapsed()?M.none():RC(e),OC=Mo,TC=Io,BC=(e,t,n,o,r)=>M.from(t._selectionOverrides.showCaret(e,n,o,r)),DC=(e,t)=>e.dispatch("BeforeObjectSelected",{target:t}).isDefaultPrevented()?M.none():M.some((e=>{const t=e.ownerDocument.createRange();return t.selectNode(e),t})(t)),PC=(e,t,n)=>t.collapsed?((e,t,n)=>{const o=tc(1,e.getBody(),t),r=ti.fromRangeStart(o),s=r.getNode();if(Dd(s))return BC(1,e,s,!r.isAtEnd(),!1);const a=r.getNode(!0);if(Dd(a))return BC(1,e,a,!1,!1);const i=e.dom.getParent(r.getNode(),(e=>TC(e)||OC(e)));return Dd(i)?BC(1,e,i,!1,n):M.none()})(e,t,n).getOr(t):t,LC=e=>gg(e)||cg(e),MC=e=>pg(e)||ug(e),IC=(e,t,n,o,r,s)=>{BC(o,e,s.getNode(!r),r,!0).each((n=>{if(t.collapsed){const e=t.cloneRange();r?e.setEnd(n.startContainer,n.startOffset):e.setStart(n.endContainer,n.endOffset),e.deleteContents()}else t.deleteContents();e.selection.setRng(n)})),((e,t)=>{Ro(t)&&0===t.data.length&&e.remove(t)})(e.dom,n)},FC=(e,t)=>((e,t)=>{const n=e.selection.getRng();if(!Ro(n.commonAncestorContainer))return M.none();const o=t?ic.Forwards:ic.Backwards,r=vc(e.getBody()),s=O(sc,t?r.next:r.prev),a=t?LC:MC,i=oc(o,e.getBody(),n),l=rp(t,s(i));if(!l||!ac(i,l))return M.none();if(a(l))return M.some((()=>IC(e,n,i.getNode(),o,t,l)));const d=s(l);return d&&a(d)&&ac(l,d)?M.some((()=>IC(e,n,i.getNode(),o,t,d))):M.none()})(e,t),UC=(e,t)=>{const n=e.getBody();return t?Rc(n).filter(gg):Ac(n).filter(pg)},zC=e=>{const t=e.selection.getRng();return!t.collapsed&&(UC(e,!0).exists((e=>e.isEqual(ti.fromRangeStart(t))))||UC(e,!1).exists((e=>e.isEqual(ti.fromRangeEnd(t)))))},jC=Ei([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),VC=(e,t,n)=>xc(t,e,n).bind((o=>{return r=o.getNode(),ir(fn(r))||sr(fn(r))||((e,t,n,o)=>{const r=t=>tr(fn(t))&&!Gd(n,o,e);return nc(!t,n).fold((()=>nc(t,o).fold(P,r)),r)})(e,t,n,o)?M.none():t&&Io(o.getNode())||!1===t&&Io(o.getNode(!0))?((e,t,n,o)=>{const r=o.getNode(!1===t);return cp(fn(e),fn(n.getNode())).map((e=>os(e)?jC.remove(e.dom):jC.moveToElement(r))).orThunk((()=>M.some(jC.moveToElement(r))))})(e,t,n,o):t&&pg(n)||!1===t&&gg(n)?M.some(jC.moveToPosition(o)):M.none();var r})),HC=(e,t)=>M.from(Up(e.getBody(),t)),$C=(e,t)=>{const n=e.selection.getNode();return HC(e,n).filter(Io).fold((()=>((e,t,n)=>{const o=tc(t?1:-1,e,n),r=ti.fromRangeStart(o),s=fn(e);return!1===t&&pg(r)?M.some(jC.remove(r.getNode(!0))):t&&gg(r)?M.some(jC.remove(r.getNode())):!1===t&&gg(r)&&Ag(s,r)?Og(s,r).map((e=>jC.remove(e.getNode()))):t&&pg(r)&&Rg(s,r)?Tg(s,r).map((e=>jC.remove(e.getNode()))):((e,t,n)=>((e,t)=>{const n=t.getNode(!1===e),o=e?"after":"before";return Co(n)&&n.getAttribute("data-mce-caret")===o})(t,n)?((e,t)=>e&&Io(t.nextSibling)?M.some(jC.moveToElement(t.nextSibling)):!1===e&&Io(t.previousSibling)?M.some(jC.moveToElement(t.previousSibling)):M.none())(t,n.getNode(!1===t)).fold((()=>VC(e,t,n)),M.some):VC(e,t,n).bind((t=>((e,t,n)=>n.fold((e=>M.some(jC.remove(e))),(e=>M.some(jC.moveToElement(e))),(n=>Gd(t,n,e)?M.none():M.some(jC.moveToPosition(n)))))(e,n,t))))(e,t,r)})(e.getBody(),t,e.selection.getRng()).map((n=>()=>n.fold(((e,t)=>n=>(e._selectionOverrides.hideFakeCaret(),ep(e,t,fn(n)),!0))(e,t),((e,t)=>n=>{const o=t?ti.before(n):ti.after(n);return e.selection.setRng(o.toRange()),!0})(e,t),(e=>t=>(e.selection.setRng(t.toRange()),!0))(e))))),(()=>M.some(S)))},qC=e=>{const t=e.dom,n=e.selection,o=Up(e.getBody(),n.getNode());if(Mo(o)&&t.isBlock(o)&&t.isEmpty(o)){const e=t.create("br",{"data-mce-bogus":"1"});t.setHTML(o,""),o.appendChild(e),n.setRng(ti.before(e).toRange())}return!0},WC=(e,t)=>e.selection.isCollapsed()?$C(e,t):((e,t)=>{const n=e.selection.getNode();return Io(n)&&!Fo(n)?HC(e,n.parentNode).filter(Io).fold((()=>M.some((()=>{var n;n=fn(e.getBody()),$(hr(n,".mce-offscreen-selection"),no),ep(e,t,fn(e.selection.getNode())),up(e)}))),(()=>M.some(S))):zC(e)?M.some((()=>{fp(e,e.selection.getRng(),fn(e.getBody()))})):M.none()})(e,t),KC=(e,t)=>e.selection.isCollapsed()?((e,t)=>{const n=ti.fromRangeStart(e.selection.getRng());return xc(t,e.getBody(),n).filter((e=>t?lg(e):dg(e))).bind((e=>M.from(Yd(t?0:-1,e)))).map((t=>()=>e.selection.select(t)))})(e,t):M.none(),GC=Ro,YC=e=>GC(e)&&e.data[0]===kr,XC=e=>GC(e)&&e.data[e.data.length-1]===kr,QC=e=>e.ownerDocument.createTextNode(kr),JC=(e,t)=>e?(e=>{if(GC(e.previousSibling))return XC(e.previousSibling)||e.previousSibling.appendData(kr),e.previousSibling;if(GC(e))return YC(e)||e.insertData(0,kr),e;{const t=QC(e);return e.parentNode.insertBefore(t,e),t}})(t):(e=>{if(GC(e.nextSibling))return YC(e.nextSibling)||e.nextSibling.insertData(0,kr),e.nextSibling;if(GC(e))return XC(e)||e.appendData(kr),e;{const t=QC(e);return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}})(t),ZC=O(JC,!0),ew=O(JC,!1),tw=(e,t)=>Ro(e.container())?JC(t,e.container()):JC(t,e.getNode()),nw=(e,t)=>{const n=t.get();return n&&e.container()===n&&Ar(n)},ow=(e,t)=>t.fold((t=>{Ed(e.get());const n=ZC(t);return e.set(n),M.some(ti(n,n.length-1))}),(t=>Rc(t).map((t=>{if(nw(t,e))return ti(e.get(),1);{Ed(e.get());const n=tw(t,!0);return e.set(n),ti(n,1)}}))),(t=>Ac(t).map((t=>{if(nw(t,e))return ti(e.get(),e.get().length-1);{Ed(e.get());const n=tw(t,!1);return e.set(n),ti(n,n.length-1)}}))),(t=>{Ed(e.get());const n=ew(t);return e.set(n),M.some(ti(n,1))})),rw=(e,t)=>{for(let n=0;n<e.length;n++){const o=e[n].apply(null,t);if(o.isSome())return o}return M.none()},sw=Ei([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),aw=(e,t)=>Kd(t,e)||e,iw=(e,t,n)=>{const o=sp(n),r=aw(t,o.container());return op(e,r,o).fold((()=>Ec(r,o).bind(O(op,e,r)).map((e=>sw.before(e)))),M.none)},lw=(e,t)=>null===Bc(e,t),dw=(e,t,n)=>op(e,t,n).filter(O(lw,t)),cw=(e,t,n)=>{const o=ap(n);return dw(e,t,o).bind((e=>Nc(e,o).isNone()?M.some(sw.start(e)):M.none()))},uw=(e,t,n)=>{const o=sp(n);return dw(e,t,o).bind((e=>Ec(e,o).isNone()?M.some(sw.end(e)):M.none()))},mw=(e,t,n)=>{const o=ap(n),r=aw(t,o.container());return op(e,r,o).fold((()=>Nc(r,o).bind(O(op,e,r)).map((e=>sw.after(e)))),M.none)},fw=e=>{return!1===(t=pw(e),"rtl"===Qs.DOM.getStyle(t,"direction",!0)||(e=>tp.test(e))(t.textContent));var t},gw=(e,t,n)=>rw([iw,cw,uw,mw],[e,t,n]).filter(fw),pw=e=>e.fold(R,R,R,R),hw=e=>e.fold(N("before"),N("start"),N("end"),N("after")),bw=e=>e.fold(sw.before,sw.before,sw.after,sw.after),vw=e=>e.fold(sw.start,sw.start,sw.end,sw.end),yw=(e,t,n,o,r,s)=>Pt(op(t,n,o),op(t,n,r),((t,o)=>t!==o&&((e,t,n)=>{const o=Kd(t,e),r=Kd(n,e);return o&&o===r})(n,t,o)?sw.after(e?t:o):s)).getOr(s),Cw=(e,t)=>e.fold(L,(e=>{return o=t,!(hw(n=e)===hw(o)&&pw(n)===pw(o));var n,o})),ww=(e,t)=>e?t.fold(_(M.some,sw.start),M.none,_(M.some,sw.after),M.none):t.fold(M.none,_(M.some,sw.before),M.none,_(M.some,sw.end)),xw=(e,t,n)=>{const o=e?1:-1;return t.setRng(ti(n.container(),n.offset()+o).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0};var kw;!function(e){e[e.Br=0]="Br",e[e.Block=1]="Block",e[e.Wrap=2]="Wrap",e[e.Eol=3]="Eol"}(kw||(kw={}));const Sw=(e,t)=>e===ic.Backwards?ne(t):t,_w=(e,t,n)=>e===ic.Forwards?t.next(n):t.prev(n),Ew=(e,t,n,o)=>Po(o.getNode(t===ic.Forwards))?kw.Br:!1===Gd(n,o)?kw.Block:kw.Wrap,Nw=(e,t,n,o)=>{const r=vc(n);let s=o;const a=[];for(;s;){const n=_w(t,r,s);if(!n)break;if(Po(n.getNode(!1)))return t===ic.Forwards?{positions:Sw(t,a).concat([n]),breakType:kw.Br,breakAt:M.some(n)}:{positions:Sw(t,a),breakType:kw.Br,breakAt:M.some(n)};if(n.isVisible()){if(e(s,n)){const e=Ew(0,t,s,n);return{positions:Sw(t,a),breakType:e,breakAt:M.some(n)}}a.push(n),s=n}else s=n}return{positions:Sw(t,a),breakType:kw.Eol,breakAt:M.none()}},Rw=(e,t,n,o)=>t(n,o).breakAt.map((o=>{const r=t(n,o).positions;return e===ic.Backwards?r.concat(o):[o].concat(r)})).getOr([]),Aw=(e,t)=>Y(e,((e,n)=>e.fold((()=>M.some(n)),(o=>Pt(ie(o.getClientRects()),ie(n.getClientRects()),((e,r)=>{const s=Math.abs(t-e.left);return Math.abs(t-r.left)<=s?n:o})).or(e)))),M.none()),Ow=(e,t)=>ie(t.getClientRects()).bind((t=>Aw(e,t.left))),Tw=O(Nw,ti.isAbove,-1),Bw=O(Nw,ti.isBelow,1),Dw=O(Rw,-1,Tw),Pw=O(Rw,1,Bw),Lw=(e,t)=>Ow(Dw(e,t),t),Mw=(e,t)=>Ow(Pw(e,t),t),Iw=Io,Fw=(e,t)=>Math.abs(e.left-t),Uw=(e,t)=>Math.abs(e.right-t),zw=(e,t)=>Oe(e,((e,n)=>{const o=Math.min(Fw(e,t),Uw(e,t)),r=Math.min(Fw(n,t),Uw(n,t));return r===o&&ke(n,"node")&&Iw(n.node)||r<o?n:e})),jw=e=>{const t=t=>H(t,(t=>{const n=Ra(t);return n.node=e,n}));if(Co(e))return t(e.getClientRects());if(Ro(e)){const n=e.ownerDocument.createRange();return n.setStart(e,0),n.setEnd(e,e.data.length),t(n.getClientRects())}return[]},Vw=e=>ee(e,jw);var Hw;!function(e){e[e.Up=-1]="Up",e[e.Down=1]="Down"}(Hw||(Hw={}));const $w=(e,t,n,o,r,s)=>{let a=0;const i=[],l=o=>{let s=Vw([o]);-1===e&&(s=s.reverse());for(let e=0;e<s.length;e++){const o=s[e];if(!n(o,d)){if(i.length>0&&t(o,Be(i))&&a++,o.line=a,r(o))return!0;i.push(o)}}},d=Be(s.getClientRects());if(!d)return i;const c=s.getNode();return l(c),((e,t,n,o)=>{for(;o=Wd(o,e,Gr,t);)if(n(o))return})(e,o,l,c),i},qw=O($w,Hw.Up,Ta,Ba),Ww=O($w,Hw.Down,Ba,Ta),Kw=e=>t=>((e,t)=>t.line>e)(e,t),Gw=e=>t=>((e,t)=>t.line===e)(e,t),Yw=(e,t)=>{e.selection.setRng(t),of(e,e.selection.getRng())},Xw=(e,t,n)=>M.some(PC(e,t,n)),Qw=(e,t,n,o,r,s)=>{const a=t===ic.Forwards,i=vc(e.getBody()),l=O(sc,a?i.next:i.prev),d=a?o:r;if(!n.collapsed){const o=Pa(n);if(s(o))return BC(t,e,o,t===ic.Backwards,!1);if(zC(e)){const e=n.cloneRange();return e.collapse(t===ic.Backwards),M.from(e)}}const c=oc(t,e.getBody(),n);if(d(c))return DC(e,c.getNode(!a));const u=rp(a,l(c)),m=Ir(n);if(!u)return m?M.some(n):M.none();if(d(u))return BC(t,e,u.getNode(!a),a,!1);const f=l(u);return f&&d(f)&&ac(u,f)?BC(t,e,f.getNode(!a),a,!1):m?Xw(e,u.toRange(),!1):M.none()},Jw=(e,t,n,o,r,s)=>{const a=oc(t,e.getBody(),n),i=Be(a.getClientRects()),l=t===Hw.Down,d=e.getBody();if(!i)return M.none();if(zC(e)){const e=l?ti.fromRangeEnd(n):ti.fromRangeStart(n);return(l?Mw:Lw)(d,e).orThunk((()=>M.from(e))).map((e=>e.toRange()))}const c=(l?Ww:qw)(d,Kw(1),a),u=K(c,Gw(1)),m=i.left,f=zw(u,m);if(f&&s(f.node)){const n=Math.abs(m-f.left),o=Math.abs(m-f.right);return BC(t,e,f.node,n<o,!1)}let g;if(g=o(a)?a.getNode():r(a)?a.getNode(!0):Pa(n),g){const n=((e,t,n,o)=>{const r=vc(t);let s,a,i,l;const d=[];let c=0;const u=e=>Be(e.getClientRects());1===e?(s=r.next,a=Ba,i=Ta,l=ti.after(o)):(s=r.prev,a=Ta,i=Ba,l=ti.before(o));const m=u(l);do{if(!l.isVisible())continue;const e=u(l);if(i(e,m))continue;d.length>0&&a(e,Be(d))&&c++;const t=Ra(e);if(t.position=l,t.line=c,n(t))return d;d.push(t)}while(l=s(l));return d})(t,d,Kw(1),g);let o=zw(K(n,Gw(1)),m);if(o)return Xw(e,o.position.toRange(),!1);if(o=Be(K(n,Gw(0))),o)return Xw(e,o.position.toRange(),!1)}return 0===u.length?Zw(e,l).filter(l?r:o).map((t=>PC(e,t.toRange(),!1))):M.none()},Zw=(e,t)=>{const n=e.selection.getRng(),o=t?ti.fromRangeEnd(n):ti.fromRangeStart(n),r=(s=o.container(),a=e.getBody(),$o(fn(s),(e=>Ld(e.dom)),(e=>e.dom===a)).map((e=>e.dom)).getOr(a));var s,a;if(t){const e=Bw(r,o);return le(e.positions)}{const e=Tw(r,o);return ie(e.positions)}},ex=(e,t,n)=>Zw(e,t).filter(n).exists((t=>(e.selection.setRng(t.toRange()),!0))),tx=(e,t)=>{const n=e.dom.createRng();n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},nx=(e,t)=>{e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},ox=(e,t,n)=>ow(t,n).map((t=>(tx(e,t),n))),rx=(e,t,n)=>{const o=e.getBody(),r=((e,t,n)=>{const o=ti.fromRangeStart(e);if(e.collapsed)return o;{const r=ti.fromRangeEnd(e);return n?Nc(t,r).getOr(r):Ec(t,o).getOr(o)}})(e.selection.getRng(),o,n);return((e,t,n,o)=>{const r=rp(e,o),s=gw(t,n,r);return gw(t,n,r).bind(O(ww,e)).orThunk((()=>((e,t,n,o,r)=>{const s=rp(e,r);return xc(e,n,s).map(O(rp,e)).fold((()=>o.map(bw)),(r=>gw(t,n,r).map(O(yw,e,t,n,s,r)).filter(O(Cw,o)))).filter(fw)})(e,t,n,s,o)))})(n,O(np,e),o,r).bind((n=>ox(e,t,n)))},sx=(e,t,n)=>!!Al(e)&&rx(e,t,n).isSome(),ax=(e,t,n)=>!!Al(t)&&((e,t)=>{const n=t.selection.getRng(),o=e?ti.fromRangeEnd(n):ti.fromRangeStart(n);return!!(e=>w(e.selection.getSel().modify))(t)&&(e&&Br(o)?xw(!0,t.selection,o):!(e||!Dr(o))&&xw(!1,t.selection,o))})(e,t),ix=e=>{const t=ea(null),n=O(np,e);return e.on("NodeChange",(o=>{Al(e)&&(((e,t,n)=>{const o=H(hr(fn(t.getRoot()),'*[data-mce-selected="inline-boundary"]'),(e=>e.dom)),r=K(o,e),s=K(n,e);$(oe(r,s),O(nx,!1)),$(oe(s,r),O(nx,!0))})(n,e.dom,o.parents),((e,t)=>{if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){const n=ti.fromRangeStart(e.selection.getRng());ti.isTextPosition(n)&&!1===(e=>Br(e)||Dr(e))(n)&&(tx(e,_d(t.get(),n)),t.set(null))}})(e,t),((e,t,n,o)=>{if(t.selection.isCollapsed()){const r=K(o,e);$(r,(o=>{const r=ti.fromRangeStart(t.selection.getRng());gw(e,t.getBody(),r).bind((e=>ox(t,n,e)))}))}})(n,e,t,o.parents))})),t},lx=O(ax,!0),dx=O(ax,!1),cx=(e,t,n)=>{if(Al(e)){const o=Zw(e,t).getOrThunk((()=>{const n=e.selection.getRng();return t?ti.fromRangeEnd(n):ti.fromRangeStart(n)}));return gw(O(np,e),e.getBody(),o).exists((t=>{const o=bw(t);return ow(n,o).exists((t=>(tx(e,t),!0)))}))}return!1},ux=(e,t)=>n=>ow(t,n).map((t=>()=>tx(e,t))),mx=(e,t,n,o)=>{const r=e.getBody(),s=O(np,e);e.undoManager.ignore((()=>{e.selection.setRng(((e,t)=>{const n=document.createRange();return n.setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n})(n,o)),lp(e),gw(s,r,ti.fromRangeStart(e.selection.getRng())).map(vw).bind(ux(e,t)).each(D)})),e.nodeChanged()},fx=(e,t,n)=>{if(e.selection.isCollapsed()&&Al(e)){const o=ti.fromRangeStart(e.selection.getRng());return((e,t,n,o)=>{const r=((e,t)=>Kd(t,e)||e)(e.getBody(),o.container()),s=O(np,e),a=gw(s,r,o);return a.bind((e=>n?e.fold(N(M.some(vw(e))),M.none,N(M.some(bw(e))),M.none):e.fold(M.none,N(M.some(bw(e))),M.none,N(M.some(vw(e)))))).map(ux(e,t)).getOrThunk((()=>{const i=kc(n,r,o),l=i.bind((e=>gw(s,r,e)));return Pt(a,l,(()=>op(s,r,o).bind((t=>(e=>Pt(Rc(e),Ac(e),((t,n)=>{const o=rp(!0,t),r=rp(!1,n);return Ec(e,o).forall((e=>e.isEqual(r)))})).getOr(!0))(t)?M.some((()=>{ep(e,n,fn(t))})):M.none())))).getOrThunk((()=>l.bind((()=>i.map((r=>()=>{n?mx(e,t,o,r):mx(e,t,r,o)}))))))}))})(e,t,n,o)}return M.none()},gx=e=>1===Bn(e),px=(e,t)=>{const n=fn(e.getBody()),o=fn(e.selection.getStart()),r=K(((e,t)=>{const n=bg(t,e);return J(n,er).fold(N(n),(e=>n.slice(0,e)))})(n,o),gx);return le(r).bind((n=>{const o=ti.fromRangeStart(e.selection.getRng());return!((e,t,n)=>Pt(Rc(n),Ac(n),((o,r)=>{const s=rp(!0,o),a=rp(!1,r),i=rp(!1,t);return e?Ec(n,i).exists((e=>e.isEqual(a)&&t.isEqual(s))):Nc(n,i).exists((e=>e.isEqual(s)&&t.isEqual(a)))})).getOr(!0))(t,o,n.dom)||Tc((s=n).dom)&&vh(s.dom)?M.none():M.some((()=>((e,t,n,o)=>{const r=O(Eh,t),s=H(K(o,r),(e=>e.dom));if(0===s.length)ep(t,e,n);else{const e=((e,t)=>{const n=Ch(!1),o=Sh(t,n.dom);return Xn(fn(e),n),no(fn(e)),ti(o,0)})(n.dom,s);t.selection.setRng(e.toRange())}})(t,e,n,r)));var s}))},hx=(e,t)=>e.selection.isCollapsed()?px(e,t):M.none(),bx=(e,t,n)=>M.some((()=>{e._selectionOverrides.hideFakeCaret(),ep(e,t,fn(n))})),vx=(e,t)=>e.selection.isCollapsed()?((e,t)=>{const n=t?cg:ug,o=t?ic.Forwards:ic.Backwards,r=oc(o,e.getBody(),e.selection.getRng());return n(r)?bx(e,t,r.getNode(!t)):M.from(rp(t,r)).filter((e=>n(e)&&ac(r,e))).map((n=>()=>bx(e,t,n.getNode(!t))))})(e,t):((e,t)=>{const n=e.selection.getNode();return Uo(n)?bx(e,t,n):M.none()})(e,t),yx=e=>{const t=parseInt(e,10);return isNaN(t)?0:t},Cx=(e,t)=>(e||"table"===Mt(t)?"margin":"padding")+("rtl"===qn(t,"direction")?"-right":"-left"),wx=e=>{const t=kx(e);return!e.mode.isReadOnly()&&(t.length>1||((e,t)=>te(t,(t=>{const n=Cx(fl(e),t),o=Kn(t,n).map(yx).getOr(0);return"false"!==e.dom.getContentEditable(t.dom)&&o>0})))(e,t))},xx=e=>rr(e)||sr(e),kx=e=>{return K((t=e.selection.getSelectedBlocks(),H(t,fn)),(e=>!xx(e)&&!(e=>kn(e).exists(xx))(e)&&qo(e,(e=>Mo(e.dom)||Io(e.dom))).exists((e=>Mo(e.dom)))));var t},Sx=(e,t)=>{const{dom:n}=e,o=gl(e),r=/[a-z%]+$/i.exec(o)[0],s=parseInt(o,10),a=fl(e);$(kx(e),(e=>{((e,t,n,o,r,s)=>{const a=Cx(n,fn(s));if("outdent"===t){const t=Math.max(0,yx(s.style[a])-o);e.setStyle(s,a,t?t+r:"")}else{const t=yx(s.style[a])+o+r;e.setStyle(s,a,t)}})(n,t,a,s,r,e.dom)}))},_x=e=>Sx(e,"outdent"),Ex=e=>{if(e.selection.isCollapsed()&&wx(e)){const t=e.dom,n=e.selection.getRng(),o=ti.fromRangeStart(n),r=t.getParent(n.startContainer,t.isBlock);if(null!==r&&xg(fn(r),o))return M.some((()=>_x(e)))}return M.none()},Nx=(e,t,n)=>ce([Ex,WC,FC,(e,n)=>fx(e,t,n),EC,Fp,KC,vx,AC,hx],(t=>t(e,n))),Rx=(e,t)=>{e.addCommand("delete",(()=>{((e,t)=>{Nx(e,t,!1).fold((()=>{lp(e),up(e)}),D)})(e,t)})),e.addCommand("forwardDelete",(()=>{((e,t)=>{Nx(e,t,!0).fold((()=>(e=>ip(e,"ForwardDelete"))(e)),D)})(e,t)}))},Ax=e=>void 0===e.touches||1!==e.touches.length?M.none():M.some(e.touches[0]),Ox=(e,t)=>xe(e,t.nodeName),Tx=(e,t)=>!!Ro(t)||!!Co(t)&&!Ox(e,t)&&!$c(t),Bx=(e,t)=>{if(Ro(t)){if(0===t.nodeValue.length)return!0;if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Ox(e,t.nextSibling)))return!0}return!1},Dx=e=>e.dom.create(Ki(e),Gi(e)),Px=e=>{const t=e.dom,n=e.selection,o=e.schema,r=o.getBlockElements();let s=n.getStart();const a=e.getBody();let i,l,d;const c=Ki(e);if(!s||!Co(s))return;const u=a.nodeName.toLowerCase();if(!o.isValidChild(u,c.toLowerCase())||((e,t,n)=>V(hg(fn(n),fn(t)),(t=>Ox(e,t.dom))))(r,a,s))return;const m=n.getRng(),f=m.startContainer,g=m.startOffset,p=m.endContainer,h=m.endOffset,b=_f(e);for(s=a.firstChild;s;)if(Tx(r,s)){if(Bx(r,s)){l=s,s=s.nextSibling,t.remove(l);continue}i||(i=Dx(e),s.parentNode.insertBefore(i,s),d=!0),l=s,s=s.nextSibling,i.appendChild(l)}else i=null,s=s.nextSibling;d&&b&&(m.setStart(f,g),m.setEnd(p,h),n.setRng(m),e.nodeChanged())},Lx=(e,t,n)=>{const o=fn(Dx(e)),r=Cr();Zn(o,r),n(t,o);const s=document.createRange();return s.setStartBefore(r.dom),s.setEndBefore(r.dom),s},Mx=e=>t=>-1!==(" "+t.attr("class")+" ").indexOf(e),Ix=(e,t,n)=>function(o){const r=arguments,s=r[r.length-2],a=s>0?t.charAt(s-1):"";if('"'===a)return o;if(">"===a){const e=t.lastIndexOf("<",s);if(-1!==e&&-1!==t.substring(e,s).indexOf('contenteditable="false"'))return o}return'<span class="'+n+'" data-mce-content="'+e.dom.encode(r[0])+'">'+e.dom.encode("string"==typeof r[1]?r[1]:r[0])+"</span>"},Fx=(e,t)=>{t.hasAttribute("data-mce-caret")&&(Mr(t),e.selection.setRng(e.selection.getRng()),e.selection.scrollIntoView(t))},Ux=(e,t)=>{const n=(e=>Ko(fn(e.getBody()),"*[data-mce-caret]").map((e=>e.dom)).getOrNull())(e);if(n)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void Fx(e,n)):void(Tr(n)&&(Fx(e,n),e.undoManager.add()))},zx=Io,jx=(e,t,n)=>{const o=vc(e.getBody()),r=O(sc,1===t?o.next:o.prev);if(n.collapsed){const o=e.dom.getParent(n.startContainer,"PRE");if(!o)return;if(!r(ti.fromRangeStart(n))){const n=fn((e=>{const t=e.dom.create(Ki(e));return t.innerHTML='<br data-mce-bogus="1">',t})(e));1===t?Qn(fn(o),n):Xn(fn(o),n),e.selection.select(n.dom,!0),e.selection.collapse()}}},Vx=(e,t)=>((e,t)=>{const n=t?ic.Forwards:ic.Backwards,o=e.selection.getRng();return((e,t,n)=>Qw(t,e,n,gg,pg,zx))(n,e,o).orThunk((()=>(jx(e,n,o),M.none())))})(e,t).exists((t=>(Yw(e,t),!0))),Hx=(e,t)=>((e,t)=>{const n=t?1:-1,o=e.selection.getRng();return((e,t,n)=>Jw(t,e,n,(e=>gg(e)||mg(e)),(e=>pg(e)||fg(e)),zx))(n,e,o).orThunk((()=>(jx(e,n,o),M.none())))})(e,t).exists((t=>(Yw(e,t),!0))),$x=(e,t)=>ex(e,t,t?pg:gg),qx=(e,t)=>UC(e,!t).map((n=>{const o=n.toRange(),r=e.selection.getRng();return t?o.setStart(r.startContainer,r.startOffset):o.setEnd(r.endContainer,r.endOffset),o})).exists((t=>(Yw(e,t),!0))),Wx=e=>j(["figcaption"],Mt(e)),Kx=(e,t)=>{const n=fn(e.getBody()),o=ti.fromRangeStart(e.selection.getRng());return((e,t)=>{const n=O(vn,t);return qo(fn(e.container()),er,n).filter(Wx)})(o,n).exists((()=>{if(((e,t,n)=>t?((e,t)=>Bw(e,t).breakAt.isNone())(e.dom,n):((e,t)=>Tw(e,t).breakAt.isNone())(e.dom,n))(n,t,o)){const o=Lx(e,n,t?Zn:Jn);return e.selection.setRng(o),!0}return!1}))},Gx=(e,t)=>!!e.selection.isCollapsed()&&Kx(e,t),Yx={shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0},Xx=(e,t)=>t.keyCode===e.keyCode&&t.shiftKey===e.shiftKey&&t.altKey===e.altKey&&t.ctrlKey===e.ctrlKey&&t.metaKey===e.metaKey,Qx=(e,...t)=>()=>e.apply(null,t),Jx=(e,t)=>Q(((e,t)=>ee((e=>H(e,(e=>({...Yx,action:S,...e}))))(e),(e=>Xx(e,t)?[e]:[])))(e,t),(e=>e.action())),Zx=(e,t)=>ce(((e,t)=>ee((e=>H(e,(e=>({...Yx,action:()=>M.none(),...e}))))(e),(e=>Xx(e,t)?[e]:[])))(e,t),(e=>e.action())),ek=(e,t)=>{const n=t?ic.Forwards:ic.Backwards,o=e.selection.getRng();return Qw(e,n,o,cg,ug,Uo).exists((t=>(Yw(e,t),!0)))},tk=(e,t)=>{const n=t?1:-1,o=e.selection.getRng();return Jw(e,n,o,cg,ug,Uo).exists((t=>(Yw(e,t),!0)))},nk=(e,t)=>ex(e,t,t?ug:cg),ok=Ei([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]),rk={...ok,none:e=>ok.none(e)},sk=(e,t,n)=>ee(Rn(e),(e=>hn(e,t)?n(e)?[e]:[]:sk(e,t,n))),ak=(e,t)=>Go(e,"table",t),ik=(e,t,n,o,r=L)=>{const s=1===o;if(!s&&n<=0)return rk.first(e[0]);if(s&&n>=e.length-1)return rk.last(e[e.length-1]);{const s=n+o,a=e[s];return r(a)?rk.middle(t,a):ik(e,t,s,o,r)}},lk=(e,t)=>ak(e,t).bind((t=>{const n=sk(t,"th,td",L);return J(n,(t=>vn(e,t))).map((e=>({index:e,all:n})))})),dk=(e,t=!1)=>{return jn(e)?e.dom.isContentEditable:(n=e,Go(n,"[contenteditable]")).fold(N(t),(e=>"true"===ck(e)));var n},ck=e=>e.dom.contentEditable,uk=(e,t,n,o,r)=>{const s=hr(fn(n),"td,th,caption").map((e=>e.dom)),a=K(((e,t)=>ee(t,(t=>{const n=((e,t)=>({left:e.left-t,top:e.top-t,right:e.right+-2,bottom:e.bottom+-2,width:e.width+t,height:e.height+t}))(Ra(t.getBoundingClientRect()),-1);return[{x:n.left,y:e(n),cell:t},{x:n.right,y:e(n),cell:t}]})))(e,s),(e=>t(e,r)));return((e,t,n)=>Y(e,((e,o)=>e.fold((()=>M.some(o)),(e=>{const r=Math.sqrt(Math.abs(e.x-t)+Math.abs(e.y-n)),s=Math.sqrt(Math.abs(o.x-t)+Math.abs(o.y-n));return M.some(s<r?o:e)}))),M.none()))(a,o,r).map((e=>e.cell))},mk=O(uk,(e=>e.bottom),((e,t)=>e.y<t)),fk=O(uk,(e=>e.top),((e,t)=>e.y>t)),gk=(e,t,n)=>{const o=e(t,n);return(e=>e.breakType===kw.Wrap&&0===e.positions.length)(o)||!Po(n.getNode())&&(e=>e.breakType===kw.Br&&1===e.positions.length)(o)?!((e,t,n)=>n.breakAt.exists((n=>e(t,n).breakAt.isSome())))(e,t,o):o.breakAt.isNone()},pk=O(gk,Tw),hk=O(gk,Bw),bk=(e,t,n,o)=>{const r=e.selection.getRng(),s=t?1:-1;return!(!Bd()||!((e,t,n)=>{const o=ti.fromRangeStart(t);return _c(!e,n).exists((e=>e.isEqual(o)))})(t,r,n)||(BC(s,e,n,!t,!1).each((t=>{Yw(e,t)})),0))},vk=(e,t,n)=>{const o=((e,t)=>{const n=t.getNode(e);return _o(n)?M.some(n):M.none()})(!!t,n),r=!1===t;o.fold((()=>Yw(e,n.toRange())),(o=>_c(r,e.getBody()).filter((e=>e.isEqual(n))).fold((()=>Yw(e,n.toRange())),(n=>((e,t,n)=>{t.undoManager.transact((()=>{const o=e?Qn:Xn,r=Lx(t,fn(n),o);Yw(t,r)}))})(t,e,o)))))},yk=(e,t,n,o)=>{const r=e.selection.getRng(),s=ti.fromRangeStart(r),a=e.getBody();if(!t&&pk(o,s)){const o=((e,t,n)=>((e,t)=>ie(t.getClientRects()).bind((t=>mk(e,t.left,t.top))).bind((e=>{return Ow(Ac(n=e).map((e=>Tw(n,e).positions.concat(e))).getOr([]),t);var n})))(t,n).orThunk((()=>ie(n.getClientRects()).bind((n=>Aw(Dw(e,ti.before(t)),n.left))))).getOr(ti.before(t)))(a,n,s);return vk(e,t,o),!0}if(t&&hk(o,s)){const o=((e,t,n)=>((e,t)=>le(t.getClientRects()).bind((t=>fk(e,t.left,t.top))).bind((e=>{return Ow(Rc(n=e).map((e=>[e].concat(Bw(n,e).positions))).getOr([]),t);var n})))(t,n).orThunk((()=>ie(n.getClientRects()).bind((n=>Aw(Pw(e,ti.after(t)),n.left))))).getOr(ti.after(t)))(a,n,s);return vk(e,t,o),!0}return!1},Ck=(e,t,n)=>M.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind((o=>M.from(e.dom.getParent(o,"table")).map((r=>n(e,t,r,o))))).getOr(!1),wk=(e,t)=>Ck(e,t,bk),xk=(e,t)=>Ck(e,t,yk),kk=(e,t,n)=>n.fold(M.none,M.none,((e,t)=>{return(n=t,((e,t)=>{const n=e=>{for(let o=0;o<e.childNodes.length;o++){const r=fn(e.childNodes[o]);if(t(r))return M.some(r);const s=n(e.childNodes[o]);if(s.isSome())return s}return M.none()};return n(e.dom)})(n,Df)).map((e=>(e=>{const t=vm.exact(e,0,e,0);return km(t)})(e)));var n}),(n=>(e.execCommand("mceTableInsertRowAfter"),Sk(e,t,n)))),Sk=(e,t,n)=>{return kk(e,t,(r=dk,lk(o=n,void 0).fold((()=>rk.none(o)),(e=>ik(e.all,o,e.index,1,r)))));var o,r},_k=(e,t,n)=>{return kk(e,t,(r=dk,lk(o=n,void 0).fold((()=>rk.none()),(e=>ik(e.all,o,e.index,-1,r)))));var o,r},Ek=(e,t)=>{const n=["table","li","dl"],o=fn(e.getBody()),r=e=>{const t=Mt(e);return vn(e,o)||j(n,t)},s=e.selection.getRng();return((e,t)=>((e,t,n=P)=>n(t)?M.none():j(e,Mt(t))?M.some(t):Wo(t,e.join(","),(e=>hn(e,"table")||n(e))))(["td","th"],e,t))(fn(t?s.endContainer:s.startContainer),r).map((n=>(ak(n,r).each((t=>{e.model.table.clearSelectedCells(t.dom)})),e.selection.collapse(!t),(t?Sk:_k)(e,r,n).each((t=>{e.selection.setRng(t)})),!0))).getOr(!1)},Nk=(e,t)=>({container:e,offset:t}),Rk=Qs.DOM,Ak=e=>t=>e===t?-1:0,Ok=(e,t,n)=>{if(Ro(e)&&t>=0)return M.some(Nk(e,t));{const o=Ea(Rk);return M.from(o.backwards(e,t,Ak(e),n)).map((e=>Nk(e.container,e.container.data.length)))}},Tk=(e,t,n)=>{if(!Ro(e))return M.none();const o=e.textContent;if(t>=0&&t<=o.length)return M.some(Nk(e,t));{const o=Ea(Rk);return M.from(o.backwards(e,t,Ak(e),n)).bind((e=>{const o=e.container.data;return Tk(e.container,t+o.length,n)}))}},Bk=(e,t,n)=>{if(!Ro(e))return M.none();const o=e.textContent;if(t<=o.length)return M.some(Nk(e,t));{const r=Ea(Rk);return M.from(r.forwards(e,t,Ak(e),n)).bind((e=>Bk(e.container,t-o.length,n)))}},Dk=(e,t,n,o,r)=>{const s=Ea(e,(e=>t=>e.isBlock(t)||j(["BR","IMG","HR","INPUT"],t.nodeName)||"false"===e.getContentEditable(t))(e));return M.from(s.backwards(t,n,o,r))},Pk=e=>e.toString().replace(/\u00A0/g," ").replace(/\uFEFF/g,""),Lk=e=>""!==e&&-1!==" \xa0\f\n\r\t\v".indexOf(e),Mk=(e,t)=>e.substring(t.length),Ik=(e,t,n,o=0)=>{return(r=fn(t.startContainer),Go(r,Pf)).fold((()=>((e,t,n,o=0)=>{if(!(r=t).collapsed||3!==r.startContainer.nodeType)return M.none();var r;const s=e.getParent(t.startContainer,e.isBlock)||e.getRoot();return Dk(e,t.startContainer,t.startOffset,((e,t,o)=>((e,t,n)=>{let o;for(o=t-1;o>=0;o--){const t=e.charAt(o);if(Lk(t))return M.none();if(t===n)break}return M.some(o)})(o,t,n).getOr(t)),s).bind((e=>{const r=t.cloneRange();if(r.setStart(e.container,e.offset),r.setEnd(t.endContainer,t.endOffset),r.collapsed)return M.none();const s=Pk(r);return 0!==s.lastIndexOf(n)||Mk(s,n).length<o?M.none():M.some({text:Mk(s,n),range:r,triggerChar:n})}))})(e,t,n,o)),(t=>{const o=e.createRng();o.selectNode(t.dom);const r=Pk(o);return M.some({range:o,text:Mk(r,n),triggerChar:n})}));var r},Fk=e=>{if((e=>3===e.nodeType)(e))return Nk(e,e.data.length);{const t=e.childNodes;return t.length>0?Fk(t[t.length-1]):Nk(e,t.length)}},Uk=(e,t)=>{const n=e.childNodes;return n.length>0&&t<n.length?Uk(n[t],0):n.length>0&&(e=>1===e.nodeType)(e)&&n.length===t?Fk(n[n.length-1]):Nk(e,t)},zk=(e,t,n,o={})=>{const r=t(),s=e.selection.getRng().startContainer.nodeValue,a=K(r.lookupByChar(n.triggerChar),(t=>n.text.length>=t.minChars&&t.matches.getOrThunk((()=>(e=>t=>{const n=Uk(t.startContainer,t.startOffset);return!((e,t)=>{const n=e.getParent(t.container,e.isBlock);return Dk(e,t.container,t.offset,((e,t)=>0===t?-1:t),n).filter((e=>{const t=e.container.data.charAt(e.offset-1);return!Lk(t)})).isSome()})(e,n)})(e.dom)))(n.range,s,n.text)));if(0===a.length)return M.none();const i=Promise.all(H(a,(e=>e.fetch(n.text,e.maxResults,o).then((t=>({matchText:n.text,items:t,columns:e.columns,onAction:e.onAction,highlightOn:e.highlightOn}))))));return M.some({lookupData:i,context:n})};var jk;!function(e){e[e.Error=0]="Error",e[e.Value=1]="Value"}(jk||(jk={}));const Vk=(e,t,n)=>e.stype===jk.Error?t(e.serror):n(e.svalue),Hk=e=>({stype:jk.Value,svalue:e}),$k=e=>({stype:jk.Error,serror:e}),qk=Vk,Wk=e=>f(e)&&ue(e).length>100?" removed due to size":JSON.stringify(e,null,2),Kk=(e,t)=>$k([{path:e,getErrorInfo:t}]),Gk=(e,t)=>({extract:(n,o)=>we(o,e).fold((()=>((e,t)=>Kk(e,(()=>'Choice schema did not contain choice key: "'+t+'"')))(n,e)),(e=>((e,t,n,o)=>we(n,o).fold((()=>((e,t,n)=>Kk(e,(()=>'The chosen schema: "'+n+'" did not exist in branches: '+Wk(t))))(e,n,o)),(n=>n.extract(e.concat(["branch: "+o]),t))))(n,o,t,e))),toString:()=>"chooseOn("+e+"). Possible values: "+ue(t)}),Yk=e=>(...t)=>{if(0===t.length)throw new Error("Can't merge zero objects");const n={};for(let o=0;o<t.length;o++){const r=t[o];for(const t in r)xe(r,t)&&(n[t]=e(n[t],r[t]))}return n},Xk=Yk(((e,t)=>g(e)&&g(t)?Xk(e,t):t)),Qk=(Yk(((e,t)=>t)),e=>({tag:"defaultedThunk",process:N(e)})),Jk=e=>{const t=(e=>{const t=[],n=[];return $(e,(e=>{Vk(e,(e=>n.push(e)),(e=>t.push(e)))})),{values:t,errors:n}})(e);return t.errors.length>0?(n=t.errors,_($k,Z)(n)):Hk(t.values);var n},Zk=(e,t,n)=>{switch(e.tag){case"field":return t(e.key,e.newKey,e.presence,e.prop);case"custom":return n(e.newKey,e.instantiator)}},eS=e=>({extract:(t,n)=>{return o=e(n),r=e=>((e,t)=>Kk(e,N(t)))(t,e),o.stype===jk.Error?r(o.serror):o;var o,r},toString:N("val")}),tS=eS(Hk),nS=(e,t,n,o)=>o(we(e,t).getOrThunk((()=>n(e)))),oS=(e,t,n,o,r)=>{const s=e=>r.extract(t.concat([o]),e),a=e=>e.fold((()=>Hk(M.none())),(e=>{const n=r.extract(t.concat([o]),e);return s=n,a=M.some,s.stype===jk.Value?{stype:jk.Value,svalue:a(s.svalue)}:s;var s,a}));switch(e.tag){case"required":return((e,t,n,o)=>we(t,n).fold((()=>((e,t,n)=>Kk(e,(()=>'Could not find valid *required* value for "'+t+'" in '+Wk(n))))(e,n,t)),o))(t,n,o,s);case"defaultedThunk":return nS(n,o,e.process,s);case"option":return((e,t,n)=>n(we(e,t)))(n,o,a);case"defaultedOptionThunk":return((e,t,n,o)=>o(we(e,t).map((t=>!0===t?n(e):t))))(n,o,e.process,a);case"mergeWithThunk":return nS(n,o,N({}),(t=>{const o=Xk(e.process(n),t);return s(o)}))}},rS=e=>({extract:(t,n)=>((e,t,n)=>{const o={},r=[];for(const s of n)Zk(s,((n,s,a,i)=>{const l=oS(a,e,t,n,i);qk(l,(e=>{r.push(...e)}),(e=>{o[s]=e}))}),((e,n)=>{o[e]=n(t)}));return r.length>0?$k(r):Hk(o)})(t,n,e),toString:()=>{const t=H(e,(e=>Zk(e,((e,t,n,o)=>e+" -> "+o.toString()),((e,t)=>"state("+e+")"))));return"obj{\n"+t.join("\n")+"}"}}),sS=e=>({extract:(t,n)=>{const o=H(n,((n,o)=>e.extract(t.concat(["["+o+"]"]),n)));return Jk(o)},toString:()=>"array("+e.toString()+")"}),aS=(e,t,n)=>{return o=((e,t,n)=>((e,t)=>e.stype===jk.Error?{stype:jk.Error,serror:t(e.serror)}:e)(t.extract([e],n),(e=>({input:n,errors:e}))))(e,t,n),Vk(o,_i.error,_i.value);var o},iS=(e,t)=>Gk(e,ge(t,rS)),lS=N(tS),dS=(e,t)=>eS((n=>{const o=typeof n;return e(n)?Hk(n):$k(`Expected type: ${t} but got: ${o}`)})),cS=dS(x,"number"),uS=dS(m,"string"),mS=dS(b,"boolean"),fS=dS(w,"function"),gS=(e,t,n,o)=>({tag:"field",key:e,newKey:t,presence:n,prop:o}),pS=(e,t)=>({tag:"custom",newKey:e,instantiator:t}),hS=(e,t)=>gS(e,e,{tag:"required",process:{}},t),bS=e=>hS(e,uS),vS=e=>hS(e,fS),yS=(e,t)=>gS(e,e,{tag:"option",process:{}},t),CS=e=>yS(e,uS),wS=(e,t,n)=>gS(e,e,Qk(t),n),xS=(e,t)=>wS(e,t,cS),kS=(e,t,n)=>wS(e,t,(e=>{return t=t=>j(e,t)?_i.value(t):_i.error(`Unsupported value: "${t}", choose one of "${e.join(", ")}".`),eS((e=>t(e).fold($k,Hk)));var t})(n)),SS=(e,t)=>wS(e,t,mS),_S=(e,t)=>wS(e,t,fS),ES=bS("type"),NS=vS("fetch"),RS=vS("onAction"),AS=_S("onSetup",(()=>S)),OS=CS("text"),TS=CS("icon"),BS=CS("tooltip"),DS=CS("label"),PS=SS("active",!1),LS=SS("enabled",!0),MS=SS("primary",!1),IS=e=>((e,t)=>wS("type",t,uS))(0,e),FS=rS([ES,bS("ch"),xS("minChars",1),(1,((e,t)=>gS(e,e,Qk(1),lS()))("columns")),xS("maxResults",10),("matches",yS("matches",fS)),NS,RS,(US=uS,wS("highlightOn",[],sS(US)))]);var US;const zS=[LS,BS,TS,OS,AS],jS=[PS].concat(zS),VS=[_S("predicate",P),kS("scope","node",["node","editor"]),kS("position","selection",["node","selection","line"])],HS=zS.concat([IS("contextformbutton"),MS,RS,pS("original",R)]),$S=jS.concat([IS("contextformbutton"),MS,RS,pS("original",R)]),qS=zS.concat([IS("contextformbutton")]),WS=jS.concat([IS("contextformtogglebutton")]),KS=iS("type",{contextformbutton:HS,contextformtogglebutton:$S});rS([IS("contextform"),_S("initValue",N("")),DS,((e,t)=>gS(e,e,{tag:"required",process:{}},sS(t)))("commands",KS),yS("launch",iS("type",{contextformbutton:qS,contextformtogglebutton:WS}))].concat(VS));const GS=e=>{const t=e.ui.registry.getAll().popups,n=ge(t,(e=>{return(t=e,aS("Autocompleter",FS,t)).fold((e=>{throw new Error("Errors: \n"+(e=>{const t=e.length>10?e.slice(0,10).concat([{path:[],getErrorInfo:N("... (only showing first ten failures)")}]):e;return H(t,(e=>"Failed path: ("+e.path.join(" > ")+")\n"+e.getErrorInfo()))})((t=e).errors).join("\n")+"\n\nInput object: "+Wk(t.input));var t}),R);var t})),o=Se(ye(n,(e=>e.ch))),r=Ce(n);return{dataset:n,triggerChars:o,lookupByChar:e=>K(r,(t=>t.ch===e))}},YS=e=>{const t=aa(),n=ea(!1),o=t.isSet,r=()=>{o()&&((e=>{uy(e).autocompleter.removeDecoration()})(e),(e=>{e.dispatch("AutocompleterEnd")})(e),n.set(!1),t.clear())},s=De((()=>GS(e))),a=a=>{(n=>t.get().map((t=>Ik(e.dom,e.selection.getRng(),t.triggerChar).bind((t=>zk(e,s,t,n))))).getOrThunk((()=>((e,t)=>{const n=t(),o=e.selection.getRng();return((e,t,n)=>ce(n.triggerChars,(n=>Ik(e,t,n))))(e.dom,o,n).bind((n=>zk(e,t,n)))})(e,s))))(a).fold(r,(s=>{(n=>{o()||(((e,t)=>{uy(e).autocompleter.addDecoration(t)})(e,n.range),t.set({triggerChar:n.triggerChar,matchLength:n.text.length}))})(s.context),s.lookupData.then((o=>{t.get().map((a=>{const i=s.context;a.triggerChar===i.triggerChar&&(i.text.length-a.matchLength>=10?r():(t.set({...a,matchLength:i.text.length}),n.get()?((e,t)=>{e.dispatch("AutocompleterUpdate",t)})(e,{lookupData:o}):(n.set(!0),((e,t)=>{e.dispatch("AutocompleterStart",t)})(e,{lookupData:o}))))}))}))}))};e.addCommand("mceAutocompleterReload",((e,t)=>{const n=f(t)?t.fetchOptions:{};a(n)})),e.addCommand("mceAutocompleterClose",r),((e,t)=>{const n=la(t.load,50);e.on("keypress compositionend",(e=>{27!==e.which&&n.throttle()})),e.on("keydown",(e=>{const o=e.which;8===o?n.throttle():27===o&&t.cancelIfNecessary()})),e.on("remove",n.cancel)})(e,{cancelIfNecessary:r,load:a})},XS=e=>(t,n,o={})=>{const r=t.getBody(),s={bubbles:!0,composed:!0,data:null,isComposing:!1,detail:0,view:null,target:r,currentTarget:r,eventPhase:Event.AT_TARGET,originalTarget:r,explicitOriginalTarget:r,isTrusted:!1,srcElement:r,cancelable:!1,preventDefault:S,inputType:n},a=Ls(new InputEvent(e));return t.dispatch(e,{...a,...s,...o})},QS=XS("input"),JS=XS("beforeinput"),ZS=(e,t)=>{let n,o=t;const r=e.dom,s=e.schema.getMoveCaretBeforeOnEnterElements();if(!t)return;if(/^(LI|DT|DD)$/.test(t.nodeName)){const e=(e=>{for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}})(t.firstChild);e&&/^(UL|OL|DL)$/.test(e.nodeName)&&t.insertBefore(r.doc.createTextNode(fr),t.firstChild)}const a=r.createRng();if(t.normalize(),t.hasChildNodes()){const e=new Qo(t,t);for(;n=e.current();){if(Ro(n)){a.setStart(n,0),a.setEnd(n,0);break}if(s[n.nodeName.toLowerCase()]){a.setStartBefore(n),a.setEndBefore(n);break}o=n,n=e.next()}n||(a.setStart(o,0),a.setEnd(o,0))}else Po(t)?t.nextSibling&&r.isBlock(t.nextSibling)?(a.setStartBefore(t),a.setEndBefore(t)):(a.setStartAfter(t),a.setEndAfter(t)):(a.setStart(t,0),a.setEnd(t,0));e.selection.setRng(a),of(e,a)},e_=e=>M.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock)),t_=(e,t)=>e&&e.parentNode&&e.parentNode.nodeName===t,n_=e=>e&&/^(OL|UL|LI)$/.test(e.nodeName),o_=e=>{const t=e.parentNode;return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},r_=(e,t,n)=>{let o=e[n?"firstChild":"lastChild"];for(;o&&!Co(o);)o=o[n?"nextSibling":"previousSibling"];return o===t},s_=(e,t)=>t&&"A"===t.nodeName&&e.isEmpty(t),a_=e=>{e.innerHTML='<br data-mce-bogus="1">'},i_=(e,t)=>e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t,l_=(e,t)=>t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t),d_=(e,t,n)=>!1===Ro(t)?n:e?1===n&&t.data.charAt(n-1)===kr?0:n:n===t.data.length-1&&t.data.charAt(n)===kr?t.data.length:n,c_=(e,t)=>{const n=e.getRoot();let o,r;for(o=t;o!==n&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(r=o),o=o.parentNode;return o!==n?r:n},u_=(e,t)=>{Ki(e).toLowerCase()===t.tagName.toLowerCase()&&((e,t,n)=>{const o=e.dom;M.from(n.style).map(o.parseStyle).each((e=>{const n={...Gn(fn(t)),...e};o.setStyles(t,n)}));const r=M.from(n.class).map((e=>e.split(/\s+/))),s=M.from(t.className).map((e=>K(e.split(/\s+/),(e=>""!==e))));Pt(r,s,((e,n)=>{const r=K(n,(t=>!j(e,t))),s=[...e,...r];o.setAttrib(t,"class",s.join(" "))}));const a=["style","class"],i=ve(n,((e,t)=>!j(a,t)));o.setAttribs(t,i)})(e,t,Gi(e))},m_={insert:(e,t)=>{let n,o,r,s,a,i,l,d,c;const u=e.dom,f=e.schema,g=f.getNonEmptyElements(),p=e.selection.getRng(),h=Ki(e),b=t=>{let n,r,a,i=o;const l=f.getTextInlineElements();if(n=t||"TABLE"===d||"HR"===d?u.create(t||h):s.cloneNode(!1),a=n,!1===Ji(e))u.setAttrib(n,"style",null),u.setAttrib(n,"class",null);else do{if(l[i.nodeName]){if(Tc(i)||$c(i))continue;r=i.cloneNode(!1),u.setAttrib(r,"id",""),n.hasChildNodes()?(r.appendChild(n.firstChild),n.appendChild(r)):(a=r,n.appendChild(r))}}while((i=i.parentNode)&&i!==k);return u_(e,n),a_(a),n},v=e=>{let t,n;const a=d_(e,o,r);if(Ro(o)&&(e?a>0:a<o.nodeValue.length))return!1;if(o.parentNode===s&&c&&!e)return!0;if(e&&Co(o)&&o===s.firstChild)return!0;if(i_(o,"TABLE")||i_(o,"HR"))return c&&!e||!c&&e;const i=new Qo(o,s);for(Ro(o)&&(e&&0===a?i.prev():e||a!==o.nodeValue.length||i.next());t=i.current();){if(Co(t)){if(!t.getAttribute("data-mce-bogus")&&(n=t.nodeName.toLowerCase(),g[n]&&"br"!==n))return!1}else if(Ro(t)&&!Xr(t.nodeValue))return!1;e?i.prev():i.next()}return!0},C=()=>{a=/^(H[1-6]|PRE|FIGURE)$/.test(d)&&"HGROUP"!==S?b(h):b(),((e,t)=>{const n=Zi(e);return!y(t)&&(m(n)?j(Bt.explode(n),t.nodeName.toLowerCase()):n)})(e,l)&&l_(u,l)&&u.isEmpty(s)?a=u.split(l,s):u.insertAfter(a,s),ZS(e,a)};Pm(u,p).each((e=>{p.setStart(e.startContainer,e.startOffset),p.setEnd(e.endContainer,e.endOffset)})),o=p.startContainer,r=p.startOffset;const w=!(!t||!t.shiftKey),x=!(!t||!t.ctrlKey);Co(o)&&o.hasChildNodes()&&(c=r>o.childNodes.length-1,o=o.childNodes[Math.min(r,o.childNodes.length-1)]||o,r=c&&Ro(o)?o.nodeValue.length:0);const k=c_(u,o);if(!k)return;w||(o=((e,t,n,o,r)=>{let s,a,i,l,d,c;const u=e.dom,m=c_(u,o);if(a=u.getParent(o,u.isBlock),!a||!l_(u,a)){if(a=a||m,c=a===e.getBody()||(e=>e&&/^(TD|TH|CAPTION)$/.test(e.nodeName))(a)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return s=u.create(t),u_(e,s),a.appendChild(s),n.setStart(s,0),n.setEnd(s,0),s;for(l=o;l.parentNode!==a;)l=l.parentNode;for(;l&&!u.isBlock(l);)i=l,l=l.previousSibling;if(i&&e.schema.isValidChild(c,t.toLowerCase())){for(s=u.create(t),u_(e,s),i.parentNode.insertBefore(s,i),l=i;l&&!u.isBlock(l);)d=l.nextSibling,s.appendChild(l),l=d;n.setStart(o,r),n.setEnd(o,r)}}return o})(e,h,p,o,r)),s=u.getParent(o,u.isBlock),l=s?u.getParent(s.parentNode,u.isBlock):null,d=s?s.nodeName.toUpperCase():"";const S=l?l.nodeName.toUpperCase():"";"LI"!==S||x||(s=l,l=l.parentNode,d=S),/^(LI|DT|DD)$/.test(d)&&u.isEmpty(s)?((e,t,n,o,r)=>{const s=e.dom,a=e.selection.getRng();if(n===e.getBody())return;var i;n_(i=n)&&n_(i.parentNode)&&(r="LI");let l=t(r);if(r_(n,o,!0)&&r_(n,o,!1))if(t_(n,"LI")){const e=o_(n);s.insertAfter(l,e),(e=>{var t;return(null===(t=e.parentNode)||void 0===t?void 0:t.firstChild)===e})(n)?s.remove(e):s.remove(n)}else s.replace(l,n);else if(r_(n,o,!0))t_(n,"LI")?(s.insertAfter(l,o_(n)),l.appendChild(s.doc.createTextNode(" ")),l.appendChild(n)):n.parentNode.insertBefore(l,n),s.remove(o);else if(r_(n,o,!1))s.insertAfter(l,o_(n)),s.remove(o);else{n=o_(n);const e=a.cloneRange();e.setStartAfter(o),e.setEndAfter(n);const t=e.extractContents();"LI"===r&&((e,t)=>e.firstChild&&"LI"===e.firstChild.nodeName)(t)?(l=t.firstChild,s.insertAfter(t,n)):(s.insertAfter(t,n),s.insertAfter(l,n)),s.remove(o)}ZS(e,l)})(e,b,l,s,h):s!==e.getBody()&&(Rr(s)?(a=Mr(s),u.isEmpty(s)&&a_(s),u_(e,a),ZS(e,a)):v()?C():v(!0)?(a=s.parentNode.insertBefore(b(),s),ZS(e,i_(s,"HR")?a:s)):(n=(e=>{const t=e.cloneRange();return t.setStart(e.startContainer,d_(!0,e.startContainer,e.startOffset)),t.setEnd(e.endContainer,d_(!1,e.endContainer,e.endOffset)),t})(p).cloneRange(),n.setEndAfter(s),i=n.extractContents(),(e=>{$(pr(fn(e),zt),(e=>{const t=e.dom;t.nodeValue=_r(t.nodeValue)}))})(i),(e=>{do{Ro(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild}while(e)})(i),a=i.firstChild,u.insertAfter(i,s),((e,t,n)=>{let o=n;const r=[];let s;if(o){for(;o=o.firstChild;){if(e.isBlock(o))return;Co(o)&&!t[o.nodeName.toLowerCase()]&&r.push(o)}for(s=r.length;s--;)o=r[s],(!o.hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue||s_(e,o))&&e.remove(o)}})(u,g,a),((e,t)=>{t.normalize();const n=t.lastChild;n&&!/^(left|right)$/gi.test(e.getStyle(n,"float",!0))||e.add(t,"br")})(u,s),u.isEmpty(s)&&a_(s),a.normalize(),u.isEmpty(a)?(u.remove(a),C()):(u_(e,a),ZS(e,a))),u.setAttrib(a,"id",""),e.dispatch("NewBlock",{newBlock:a}))},fakeEventName:"insertParagraph"},f_=(e,t,n)=>{const o=e.dom.createRng();n?(o.setStartBefore(t),o.setEndBefore(t)):(o.setStartAfter(t),o.setEndAfter(t)),e.selection.setRng(o),of(e,o)},g_=(e,t)=>{const n=un("br");Xn(fn(t),n),e.undoManager.add()},p_=(e,t)=>{h_(e.getBody(),t)||Qn(fn(t),un("br"));const n=un("br");Qn(fn(t),n),f_(e,n.dom,!1),e.undoManager.add()},h_=(e,t)=>{return n=ti.after(t),!!Po(n.getNode())||Ec(e,ti.after(t)).map((e=>Po(e.getNode()))).getOr(!1);var n},b_=e=>e&&"A"===e.nodeName&&"href"in e,v_=e=>e.fold(P,b_,b_,P),y_=(e,t)=>{t.fold(S,O(g_,e),O(p_,e),S)},C_={insert:(e,t)=>{const n=(e=>{const t=O(np,e),n=ti.fromRangeStart(e.selection.getRng());return gw(t,e.getBody(),n).filter(v_)})(e);n.isSome()?n.each(O(y_,e)):((e,t)=>{const n=e.selection,o=e.dom,r=n.getRng();let s,a;Pm(o,r).each((e=>{r.setStart(e.startContainer,e.startOffset),r.setEnd(e.endContainer,e.endOffset)}));let i=r.startOffset,l=r.startContainer;if(1===l.nodeType&&l.hasChildNodes()){const e=i>l.childNodes.length-1;l=l.childNodes[Math.min(i,l.childNodes.length-1)]||l,i=e&&3===l.nodeType?l.nodeValue.length:0}let d=o.getParent(l,o.isBlock);const c=d?o.getParent(d.parentNode,o.isBlock):null,u=c?c.nodeName.toUpperCase():"",m=!(!t||!t.ctrlKey);"LI"!==u||m||(d=c),l&&3===l.nodeType&&i>=l.nodeValue.length&&(((e,t,n)=>{const o=new Qo(t,n);let r;const s=e.getNonEmptyElements();for(;r=o.next();)if(s[r.nodeName.toLowerCase()]||r.length>0)return!0})(e.schema,l,d)||(s=o.create("br"),r.insertNode(s),r.setStartAfter(s),r.setEndAfter(s),a=!0)),s=o.create("br"),oi(o,r,s),f_(e,s,a),e.undoManager.add()})(e,t)},fakeEventName:"insertLineBreak"},w_=(e,t)=>e_(e).filter((e=>t.length>0&&hn(fn(e),t))).isSome(),x_=Ei([{br:[]},{block:[]},{none:[]}]),k_=(e,t)=>(e=>w_(e,Qi(e)))(e),S_=e=>(t,n)=>(e=>e_(e).filter((e=>sr(fn(e)))).isSome())(t)===e,__=(e,t)=>(n,o)=>{const r=(e=>e_(e).fold(N(""),(e=>e.nodeName.toUpperCase())))(n)===e.toUpperCase();return r===t},E_=e=>__("pre",e),N_=e=>(t,n)=>Wi(t)===e,R_=(e,t)=>(e=>w_(e,Xi(e)))(e),A_=(e,t)=>t,O_=e=>{const t=Ki(e),n=((e,t)=>{const n=e.getRoot();let o,r;for(o=t;o!==n&&"false"!==e.getContentEditable(o);)"true"===e.getContentEditable(o)&&(r=o),o=o.parentNode;return o!==n?r:n})(e.dom,e.selection.getStart());return n&&e.schema.isValidChild(n.nodeName,t)},T_=(e,t)=>(n,o)=>Y(e,((e,t)=>e&&t(n,o)),!0)?M.some(t):M.none(),B_=(e,t,n)=>{t.selection.isCollapsed()||lp(t),C(n)&&JS(t,e.fakeEventName).isDefaultPrevented()||(e.insert(t,n),C(n)&&QS(t,e.fakeEventName))},D_=(e,t)=>{const n=()=>B_(C_,e,t),o=()=>B_(m_,e,t),r=((e,t)=>rw([T_([k_],x_.none()),T_([__("summary",!0)],x_.br()),T_([E_(!0),N_(!1),A_],x_.br()),T_([E_(!0),N_(!1)],x_.block()),T_([E_(!0),N_(!0),A_],x_.block()),T_([E_(!0),N_(!0)],x_.br()),T_([S_(!0),A_],x_.br()),T_([S_(!0)],x_.block()),T_([R_],x_.br()),T_([A_],x_.br()),T_([O_],x_.block())],[e,!(!t||!t.shiftKey)]).getOr(x_.none()))(e,t);switch(Yi(e)){case"linebreak":r.fold(n,n,S);break;case"block":r.fold(o,o,S);break;case"invert":r.fold(o,n,S);break;default:r.fold(n,o,S)}},P_=Ct(),L_=e=>e.stopImmediatePropagation(),M_=e=>e.keyCode===om.PAGE_UP||e.keyCode===om.PAGE_DOWN,I_=(e,t,n)=>{n&&!e.get()?t.on("NodeChange",L_,!0):!n&&e.get()&&t.off("NodeChange",L_),e.set(n)},F_=(e,t)=>{const n=t.container(),o=t.offset();return Ro(n)?(n.insertData(o,e),M.some(ti(n,o+e.length))):rc(t).map((n=>{const o=mn(e);return t.isAtEnd()?Qn(n,o):Xn(n,o),ti(o.dom,e.length)}))},U_=O(F_,fr),z_=O(F_," "),j_=(e,t)=>n=>((e,t)=>!Mg(t)&&(((e,t)=>((e,t)=>Nc(e.dom,t).isNone())(e,t)||((e,t)=>Ec(e.dom,t).isNone())(e,t)||xg(e,t)||kg(e,t)||Ag(e,t)||Rg(e,t))(e,t)||Pg(e,t)||Lg(e,t)))(e,n)?U_(t):z_(t),V_=e=>{const t=ti.fromRangeStart(e.selection.getRng()),n=fn(e.getBody());if(e.selection.isCollapsed()){const o=O(np,e),r=ti.fromRangeStart(e.selection.getRng());return gw(o,e.getBody(),r).bind((e=>t=>t.fold((t=>Nc(e.dom,ti.before(t))),(e=>Rc(e)),(e=>Ac(e)),(t=>Ec(e.dom,ti.after(t)))))(n)).map((o=>()=>j_(n,t)(o).each((e=>t=>(e.selection.setRng(t.toRange()),e.nodeChanged(),!0))(e))))}return M.none()},H_=e=>vd(e)?[{keyCode:om.TAB,action:Qx(Ek,e,!0)},{keyCode:om.TAB,shiftKey:!0,action:Qx(Ek,e,!1)}]:[],$_=e=>{if(e.addShortcut("Meta+P","","mcePrint"),YS(e),dy(e))return ea(null);{const t=ix(e);return(e=>{e.on("keyup compositionstart",O(Ux,e))})(e),((e,t)=>{e.on("keydown",(n=>{!1===n.isDefaultPrevented()&&((e,t,n)=>{const o=Nt.os.isMacOS()||Nt.os.isiOS();Jx([{keyCode:om.RIGHT,action:Qx(Vx,e,!0)},{keyCode:om.LEFT,action:Qx(Vx,e,!1)},{keyCode:om.UP,action:Qx(Hx,e,!1)},{keyCode:om.DOWN,action:Qx(Hx,e,!0)},...o?[{keyCode:om.UP,action:Qx(qx,e,!1),metaKey:!0,shiftKey:!0},{keyCode:om.DOWN,action:Qx(qx,e,!0),metaKey:!0,shiftKey:!0}]:[],{keyCode:om.RIGHT,action:Qx(wk,e,!0)},{keyCode:om.LEFT,action:Qx(wk,e,!1)},{keyCode:om.UP,action:Qx(xk,e,!1)},{keyCode:om.DOWN,action:Qx(xk,e,!0)},{keyCode:om.RIGHT,action:Qx(ek,e,!0)},{keyCode:om.LEFT,action:Qx(ek,e,!1)},{keyCode:om.UP,action:Qx(tk,e,!1)},{keyCode:om.DOWN,action:Qx(tk,e,!0)},{keyCode:om.RIGHT,action:Qx(sx,e,t,!0)},{keyCode:om.LEFT,action:Qx(sx,e,t,!1)},{keyCode:om.RIGHT,ctrlKey:!o,altKey:o,action:Qx(lx,e,t)},{keyCode:om.LEFT,ctrlKey:!o,altKey:o,action:Qx(dx,e,t)},{keyCode:om.UP,action:Qx(Gx,e,!1)},{keyCode:om.DOWN,action:Qx(Gx,e,!0)}],n).each((e=>{n.preventDefault()}))})(e,t,n)}))})(e,t),((e,t)=>{e.on("keydown",(n=>{!1===n.isDefaultPrevented()&&((e,t,n)=>{const o=n.keyCode===om.BACKSPACE?"deleteContentBackward":"deleteContentForward";Zx([{keyCode:om.BACKSPACE,action:Qx(Ex,e)},{keyCode:om.BACKSPACE,action:Qx(WC,e,!1)},{keyCode:om.DELETE,action:Qx(WC,e,!0)},{keyCode:om.BACKSPACE,action:Qx(FC,e,!1)},{keyCode:om.DELETE,action:Qx(FC,e,!0)},{keyCode:om.BACKSPACE,action:Qx(fx,e,t,!1)},{keyCode:om.DELETE,action:Qx(fx,e,t,!0)},{keyCode:om.BACKSPACE,action:Qx(Fp,e,!1)},{keyCode:om.DELETE,action:Qx(Fp,e,!0)},{keyCode:om.BACKSPACE,action:Qx(KC,e,!1)},{keyCode:om.DELETE,action:Qx(KC,e,!0)},{keyCode:om.BACKSPACE,action:Qx(vx,e,!1)},{keyCode:om.DELETE,action:Qx(vx,e,!0)},{keyCode:om.BACKSPACE,action:Qx(AC,e,!1)},{keyCode:om.DELETE,action:Qx(AC,e,!0)},{keyCode:om.BACKSPACE,action:Qx(EC,e,!1)},{keyCode:om.DELETE,action:Qx(EC,e,!0)},{keyCode:om.BACKSPACE,action:Qx(hx,e,!1)},{keyCode:om.DELETE,action:Qx(hx,e,!0)}],n).each((t=>{n.preventDefault(),JS(e,o).isDefaultPrevented()||(t(),QS(e,o))}))})(e,t,n)})),e.on("keyup",(t=>{!1===t.isDefaultPrevented()&&((e,t)=>{Jx([{keyCode:om.BACKSPACE,action:Qx(qC,e)},{keyCode:om.DELETE,action:Qx(qC,e)}],t)})(e,t)}))})(e,t),(e=>{e.on("keydown",(t=>{t.keyCode===om.ENTER&&((e,t)=>{var n;t.isDefaultPrevented()||(t.preventDefault(),(n=e.undoManager).typing&&(n.typing=!1,n.add()),e.undoManager.transact((()=>{D_(e,t)})))})(e,t)}))})(e),(e=>{e.on("keydown",(t=>{!1===t.isDefaultPrevented()&&((e,t)=>{Zx([{keyCode:om.SPACEBAR,action:Qx(V_,e)}],t).each((n=>{t.preventDefault(),JS(e,"insertText",{data:" "}).isDefaultPrevented()||(n(),QS(e,"insertText",{data:" "}))}))})(e,t)}))})(e),(e=>{e.on("input",(t=>{!1===t.isComposing&&(e=>{const t=fn(e.getBody());e.selection.isCollapsed()&&Vg(t,ti.fromRangeStart(e.selection.getRng())).each((t=>{e.selection.setRng(t.toRange())}))})(e)}))})(e),(e=>{e.on("keydown",(t=>{!1===t.isDefaultPrevented()&&((e,t)=>{Jx([...H_(e)],t).each((e=>{t.preventDefault()}))})(e,t)}))})(e),((e,t)=>{e.on("keydown",(n=>{!1===n.isDefaultPrevented()&&((e,t,n)=>{const o=Nt.os.isMacOS()||Nt.os.isiOS();Jx([{keyCode:om.END,action:Qx($x,e,!0)},{keyCode:om.HOME,action:Qx($x,e,!1)},...o?[]:[{keyCode:om.HOME,action:Qx(qx,e,!1),ctrlKey:!0,shiftKey:!0},{keyCode:om.END,action:Qx(qx,e,!0),ctrlKey:!0,shiftKey:!0}],{keyCode:om.END,action:Qx(nk,e,!0)},{keyCode:om.HOME,action:Qx(nk,e,!1)},{keyCode:om.END,action:Qx(cx,e,!0,t)},{keyCode:om.HOME,action:Qx(cx,e,!1,t)}],n).each((e=>{n.preventDefault()}))})(e,t,n)}))})(e,t),((e,t)=>{if(P_.os.isMacOS())return;const n=ea(!1);e.on("keydown",(t=>{M_(t)&&I_(n,e,!0)})),e.on("keyup",(o=>{!1===o.isDefaultPrevented()&&((e,t,n)=>{Jx([{keyCode:om.PAGE_UP,action:Qx(cx,e,!1,t)},{keyCode:om.PAGE_DOWN,action:Qx(cx,e,!0,t)}],n)})(e,t,o),M_(o)&&n.get()&&(I_(n,e,!1),e.nodeChanged())}))})(e,t),t}};class q_{constructor(e){let t;this.lastPath=[],this.editor=e;const n=this;"onselectionchange"in e.getDoc()||e.on("NodeChange click mouseup keyup focus",(n=>{const o=e.selection.getRng(),r={startContainer:o.startContainer,startOffset:o.startOffset,endContainer:o.endContainer,endOffset:o.endOffset};"nodechange"!==n.type&&_m(r,t)||e.dispatch("SelectionChange"),t=r})),e.on("contextmenu",(()=>{e.dispatch("SelectionChange")})),e.on("SelectionChange",(()=>{const t=e.selection.getStart(!0);t&&ju(e)&&!n.isSameElementPath(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:!0})})),e.on("mouseup",(t=>{!t.isDefaultPrevented()&&ju(e)&&("IMG"===e.selection.getNode().nodeName?bf.setEditorTimeout(e,(()=>{e.nodeChanged()})):e.nodeChanged())}))}nodeChanged(e){const t=this.editor.selection;let n,o,r;this.editor.initialized&&t&&!zl(this.editor)&&!this.editor.mode.isReadOnly()&&(r=this.editor.getBody(),n=t.getStart(!0)||r,n.ownerDocument===this.editor.getDoc()&&this.editor.dom.isChildOf(n,r)||(n=r),o=[],this.editor.dom.getParent(n,(e=>{if(e===r)return!0;o.push(e)})),(e=e||{}).element=n,e.parents=o,this.editor.dispatch("NodeChange",e))}isSameElementPath(e){let t;const n=this.editor,o=ne(n.dom.getParents(e,L,n.getBody()));if(o.length===this.lastPath.length){for(t=o.length;t>=0&&o[t]===this.lastPath[t];t--);if(-1===t)return this.lastPath=o,!0}return this.lastPath=o,!1}}const W_=N("x-tinymce/html"),K_="\x3c!-- x-tinymce/html --\x3e",G_=e=>K_+e,Y_=e=>-1!==e.indexOf(K_),X_="%MCEPASTEBIN%",Q_=e=>e.dom.get("mcepastebin"),J_=e=>e&&"mcepastebin"===e.id,Z_=e=>e===X_,eE=(e,t)=>(Bt.each(t,(t=>{e=u(t,RegExp)?e.replace(t,""):e.replace(t[0],t[1])})),e),tE=e=>eE(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,(e,t,n)=>t||n?fr:" "],/<br class="Apple-interchange-newline">/g,/<br>$/i]),nE=(e,t)=>({content:e,cancelled:t}),oE=(e,t)=>(e.insertContent(t,{merge:ld(e),paste:!0}),!0),rE=e=>/^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e),sE=(e,t,n)=>!(e.selection.isCollapsed()||!rE(t))&&((e,t,n)=>(e.undoManager.extra((()=>{n(e,t)}),(()=>{e.execCommand("mceInsertLink",!1,t)})),!0))(e,t,n),aE=(e,t,n)=>!!((e,t)=>rE(t)&&V(bd(e),(e=>je(t.toLowerCase(),`.${e.toLowerCase()}`))))(e,t)&&((e,t,n)=>(e.undoManager.extra((()=>{n(e,t)}),(()=>{e.insertContent('<img src="'+t+'">')})),!0))(e,t,n),iE=(e=>{let t=0;return()=>"mceclip"+t++})(),lE=(e,t,n,o)=>{const r=((e,t,n)=>((e,t,n)=>{const o=((e,t,n)=>e.dispatch("PastePreProcess",{content:t,internal:n}))(e,t,n),r=((e,t)=>{const n=Ov({},e.schema);n.addNodeFilter("meta",(e=>{Bt.each(e,(e=>{e.remove()}))}));const o=n.parse(t,{forced_root_block:!1,isRootContent:!0});return Xf({validate:!0},e.schema).serialize(o)})(e,o.content);return e.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?((e,t,n)=>{const o=e.dom.create("div",{style:"display:none"},t),r=((e,t,n)=>e.dispatch("PastePostProcess",{node:t,internal:n}))(e,o,n);return nE(r.node.innerHTML,r.isDefaultPrevented())})(e,r,n):nE(r,o.isDefaultPrevented())})(e,t,n))(e,t,n);!1===r.cancelled&&((e,t,n)=>{n||!dd(e)?oE(e,t):((e,t)=>{Bt.each([sE,aE,oE],(n=>!0!==n(e,t,oE)))})(e,t)})(e,r.content,o)},dE=(e,t,n)=>{const o=n||Y_(t);lE(e,(e=>e.replace(K_,""))(t),o,!1)},cE=(e,t)=>{const n=e.dom.encode(t).replace(/\r\n/g,"\n"),o=((e,t,n)=>{const o=e.split(/\n\n/),r=((e,t)=>{let n="<"+e;const o=ye(t,((e,t)=>t+'="'+Cs.encodeAllRaw(e)+'"'));return o.length&&(n+=" "+o.join(" ")),n+">"})(t,n),s="</"+t+">",a=H(o,(e=>e.split(/\n/).join("<br />")));return 1===a.length?a[0]:H(a,(e=>r+e+s)).join("")})(Jr(n,ud(e)),Ki(e),Gi(e));lE(e,o,!1,!0)},uE=e=>{const t={};if(e&&e.types)for(let n=0;n<e.types.length;n++){const o=e.types[n];try{t[o]=e.getData(o)}catch(e){t[o]=""}}return t},mE=(e,t)=>t in e&&e[t].length>0,fE=e=>mE(e,"text/html")||mE(e,"text/plain"),gE=(e,t,n)=>{const o="paste"===t.type?t.clipboardData:t.dataTransfer;var r;if(od(e)&&o){const s=((e,t)=>{const n=t.items?ee(de(t.items),(e=>"file"===e.kind?[e.getAsFile()]:[])):[],o=t.files?de(t.files):[];return K(n.length>0?n:o,(e=>{const t=bd(e);return e=>ze(e.type,"image/")&&V(t,(t=>(e=>{const t=e.toLowerCase(),n={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"};return Bt.hasOwn(n,t)?"image/"+n[t]:"image/"+t})(t)===e.type))})(e))})(e,o);if(s.length>0)return t.preventDefault(),(r=s,Promise.all(H(r,(e=>uv(e).then((t=>({file:e,uri:t}))))))).then((t=>{n&&e.selection.setRng(n),$(t,(t=>{((e,t)=>{dv(t.uri).each((({data:n,type:o,base64Encoded:r})=>{const s=r?n:btoa(n),a=t.file,i=e.editorUpload.blobCache,l=i.getByData(s,o),d=null!=l?l:((e,t,n,o)=>{const r=iE(),s=tl(e)&&C(n.name),a=s?((e,t)=>{const n=t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);return C(n)?e.dom.encode(n[1]):null})(e,n.name):r,i=s?n.name:void 0,l=t.create(r,n,o,a,i);return t.add(l),l})(e,i,a,s);dE(e,`<img src="${d.blobUri()}">`,!1)}))})(e,t)}))})),!0}return!1},pE=(e,t,n,o)=>{let r=tE(n);const s=mE(t,W_())||Y_(n),a=!s&&(e=>!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e))(r),i=rE(r);(Z_(r)||!r.length||a&&!i)&&(o=!0),(o||i)&&(r=mE(t,"text/plain")&&a?t["text/plain"]:(e=>{const t=Bs(),n=Ov({},t);let o="";const r=t.getVoidElements(),s=Bt.makeMap("script noscript style textarea video audio iframe object"," "),a=t.getBlockElements(),i=e=>{const n=e.name,l=e;if("br"!==n){if("wbr"!==n)if(r[n]&&(o+=" "),s[n])o+=" ";else{if(3===e.type&&(o+=e.value),!(e.name in t.getVoidElements())&&(e=e.firstChild))do{i(e)}while(e=e.next);a[n]&&l.next&&(o+="\n","p"===n&&(o+="\n"))}}else o+="\n"};return e=eE(e,[/<!\[[^\]]+\]>/g]),i(n.parse(e)),o})(r)),Z_(r)||(o?cE(e,r):dE(e,r,s))},hE=(e,t,n)=>{((e,t,n)=>{let o;e.on("keydown",(e=>{(e=>om.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode)(e)&&!e.isDefaultPrevented()&&(o=e.shiftKey&&86===e.keyCode)})),e.on("paste",(r=>{if(r.isDefaultPrevented()||(e=>{var t,n;return Nt.os.isAndroid()&&0===(null===(n=null===(t=e.clipboardData)||void 0===t?void 0:t.items)||void 0===n?void 0:n.length)})(r))return;const s="text"===n.get()||o;o=!1;const a=uE(r.clipboardData);!fE(a)&&gE(e,r,t.getLastRng()||e.selection.getRng())||(mE(a,"text/html")?(r.preventDefault(),pE(e,a,a["text/html"],s)):(t.create(),bf.setEditorTimeout(e,(()=>{const n=t.getHtml();t.remove(),pE(e,a,n,s)}),0)))}))})(e,t,n),(e=>{const t=e=>ze(e,"webkit-fake-url"),n=e=>ze(e,"data:");e.parser.addNodeFilter("img",((o,r,s)=>{if(!od(e)&&(e=>{var t;return!0===(null===(t=e.data)||void 0===t?void 0:t.paste)})(s))for(const r of o){const o=r.attr("src");m(o)&&!r.attr("data-mce-object")&&o!==Nt.transparentSrc&&(t(o)||!md(e)&&n(o))&&r.remove()}}))})(e)},bE=(e,t,n,o)=>{((e,t,n)=>{try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(W_(),t),!0}catch(e){return!1}})(e.clipboardData,t.html,t.text)?(e.preventDefault(),o()):n(t.html,o)},vE=e=>(t,n)=>{const{dom:o,selection:r}=e,s=o.create("div",{contenteditable:"false","data-mce-bogus":"all"}),a=o.create("div",{contenteditable:"true"},t);o.setStyles(s,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),s.appendChild(a),o.add(e.getBody(),s);const i=r.getRng();a.focus();const l=o.createRng();l.selectNodeContents(a),r.setRng(l),bf.setEditorTimeout(e,(()=>{r.setRng(i),o.remove(s),n()}),0)},yE=e=>({html:G_(e.selection.getContent({contextual:!0})),text:e.selection.getContent({format:"text"})}),CE=e=>!e.selection.isCollapsed()||(e=>!!e.dom.getParent(e.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",e.getBody()))(e),wE=(e,t)=>{var n,o;return Im.getCaretRangeFromPoint(null!==(n=t.clientX)&&void 0!==n?n:0,null!==(o=t.clientY)&&void 0!==o?o:0,e.getDoc())},xE=(e,t)=>{e.focus(),t&&e.selection.setRng(t)},kE=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,SE=e=>Bt.trim(e).replace(kE,eu).toLowerCase(),_E=(e,t,n)=>{const o=ad(e);if(n||"all"===o||!id(e))return t;const r=o?o.split(/[, ]/):[];if(r&&"none"!==o){const n=e.dom,o=e.selection.getNode();t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,((e,t,s,a)=>{const i=n.parseStyle(n.decode(s)),l={};for(let e=0;e<r.length;e++){const t=i[r[e]];let s=t,a=n.getStyle(o,r[e],!0);/color/.test(r[e])&&(s=SE(s),a=SE(a)),a!==s&&(l[r[e]]=t)}const d=n.serializeStyle(l,"span");return d?t+' style="'+d+'"'+a:t+a}))}else t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return t=t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,((e,t,n,o)=>t+' style="'+n+'"'+o)),t},EE=e=>{const t=ea(!1),n=ea(cd(e)?"text":"html"),o=(e=>{const t=ea(null);return{create:()=>((e,t)=>{const{dom:n,selection:o}=e,r=e.getBody();t.set(o.getRng());const s=n.add(e.getBody(),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},X_);Nt.browser.isFirefox()&&n.setStyle(s,"left","rtl"===n.getStyle(r,"direction",!0)?65535:-65535),n.bind(s,"beforedeactivate focusin focusout",(e=>{e.stopPropagation()})),s.focus(),o.select(s,!0)})(e,t),remove:()=>((e,t)=>{const n=e.dom;if(Q_(e)){let o;const r=t.get();for(;o=Q_(e);)n.remove(o),n.unbind(o);r&&e.selection.setRng(r)}t.set(null)})(e,t),getEl:()=>Q_(e),getHtml:()=>(e=>{const t=e.dom,n=(e,n)=>{e.appendChild(n),t.remove(n,!0)},[o,...r]=K(e.getBody().childNodes,J_);$(r,(e=>{n(o,e)}));const s=t.select("div[id=mcepastebin]",o);for(let e=s.length-1;e>=0;e--){const r=t.create("div");o.insertBefore(r,s[e]),n(r,s[e])}return o?o.innerHTML:""})(e),getLastRng:t.get}})(e);(e=>{(Nt.browser.isChromium()||Nt.browser.isSafari())&&((e,t)=>{e.on("PastePreProcess",(n=>{n.content=t(e,n.content,n.internal)}))})(e,_E)})(e),((e,t)=>{e.addCommand("mceTogglePlainTextPaste",(()=>{((e,t)=>{"text"===t.get()?(t.set("html"),nm(e,!1)):(t.set("text"),nm(e,!0)),e.focus()})(e,t)})),e.addCommand("mceInsertClipboardContent",((t,n)=>{n.html&&dE(e,n.html,n.internal),n.text&&cE(e,n.text)}))})(e,n),(e=>{const t=t=>n=>{t(e,n)},n=rd(e);w(n)&&e.on("PastePreProcess",t(n));const o=sd(e);w(o)&&e.on("PastePostProcess",t(o))})(e),e.on("PreInit",(()=>{(e=>{e.on("cut",(e=>t=>{!t.isDefaultPrevented()&&CE(e)&&bE(t,yE(e),vE(e),(()=>{if(Nt.browser.isChromium()||Nt.browser.isFirefox()){const t=e.selection.getRng();bf.setEditorTimeout(e,(()=>{e.selection.setRng(t),e.execCommand("Delete")}),0)}else e.execCommand("Delete")}))})(e)),e.on("copy",(e=>t=>{!t.isDefaultPrevented()&&CE(e)&&bE(t,yE(e),vE(e),S)})(e))})(e),((e,t)=>{nd(e)&&e.on("dragend dragover draggesture dragdrop drop drag",(e=>{e.preventDefault(),e.stopPropagation()})),od(e)||e.on("drop",(e=>{const t=e.dataTransfer;t&&(e=>V(e.files,(e=>/^image\//.test(e.type))))(t)&&e.preventDefault()})),e.on("drop",(n=>{if(n.isDefaultPrevented()||t.get())return;const o=wE(e,n);if(y(o))return;const r=uE(n.dataTransfer),s=mE(r,W_());if((!fE(r)||(e=>{const t=e["text/plain"];return!!t&&0===t.indexOf("file://")})(r))&&gE(e,n,o))return;const a=r[W_()],i=a||r["text/html"]||r["text/plain"];i&&(n.preventDefault(),bf.setEditorTimeout(e,(()=>{e.undoManager.transact((()=>{a&&e.execCommand("Delete"),xE(e,o);const t=tE(i);r["text/html"]?dE(e,t,s):cE(e,t)}))})))})),e.on("dragstart",(e=>{t.set(!0)})),e.on("dragover dragend",(n=>{od(e)&&!1===t.get()&&(n.preventDefault(),xE(e,wE(e,n))),"dragend"===n.type&&t.set(!1)}))})(e,t),hE(e,o,n)}))},NE=Po,RE=Ro,AE=e=>Io(e.dom),OE=e=>t=>vn(fn(e),t),TE=(e,t)=>qo(fn(e),AE,OE(t)),BE=(e,t,n)=>{const o=new Qo(e,t),r=n?o.next.bind(o):o.prev.bind(o);let s=e;for(let t=n?e:r();t&&!NE(t);t=r())Wr(t)&&(s=t);return s},DE=e=>{const t=((e,t)=>{const n=ti.fromRangeStart(e).getNode(),o=((e,t)=>qo(fn(e),(e=>(e=>Mo(e.dom))(e)||er(e)),OE(t)).getOr(fn(t)).dom)(n,t),r=BE(n,o,!1),s=BE(n,o,!0),a=document.createRange();return TE(r,o).fold((()=>{RE(r)?a.setStart(r,0):a.setStartBefore(r)}),(e=>a.setStartBefore(e.dom))),TE(s,o).fold((()=>{RE(s)?a.setEnd(s,s.data.length):a.setEndAfter(s)}),(e=>a.setEndAfter(e.dom))),a})(e.selection.getRng(),e.getBody());e.selection.setRng(Yp(t))};var PE;!function(e){e.Before="before",e.After="after"}(PE||(PE={}));const LE=(e,t)=>Math.abs(e.left-t),ME=(e,t)=>Math.abs(e.right-t),IE=(e,t)=>(e=>Y(e,((e,t)=>e.fold((()=>M.some(t)),(e=>{const n=Math.min(t.left,e.left),o=Math.min(t.top,e.top),r=Math.max(t.right,e.right),s=Math.max(t.bottom,e.bottom);return M.some({top:o,right:r,bottom:s,left:n,width:r-n,height:s-o})}))),M.none()))(K(e,(e=>{return(n=t)>=(o=e).top&&n<=o.bottom;var n,o}))).fold((()=>[[],e]),(t=>{const{pass:n,fail:o}=W(e,(e=>((e,t)=>{const n=((e,t)=>Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)))(e,t)/Math.min(e.height,t.height);return((e,t)=>e.top<t.bottom&&e.bottom>t.top)(e,t)&&n>.5})(e,t)));return[n,o]})),FE=(e,t,n)=>t>e.left&&t<e.right?0:Math.min(Math.abs(e.left-t),Math.abs(e.right-t)),UE=(e,t,n)=>{const o=e=>Wr(e.node)?M.some(e):Co(e.node)?UE(de(e.node.childNodes),t,n):M.none(),r=(e,r)=>{const s=se(e,((e,o)=>r(e,t,n)-r(o,t,n)));return((e,r)=>{if(e.length>=2){const s=o(e[0]).getOr(e[0]),a=o(e[1]).getOr(e[1]);if(Math.abs(r(s,t,n)-r(a,t,n))<2){if(Ro(s.node))return M.some(s);if(Ro(a.node))return M.some(a)}}return M.none()})(s,r).orThunk((()=>ce(s,o)))},[s,a]=IE(Vw(e),n),{pass:i,fail:l}=W(a,(e=>e.top<n));return r(s,FE).orThunk((()=>r(l,Da))).orThunk((()=>r(i,Da)))},zE=(e,t,n)=>((e,t,n)=>{const o=fn(e),r=wn(o),s=gn(r,t,n).filter((e=>yn(o,e))).getOr(o);return((e,t,n,o)=>{const r=(t,s)=>s.fold((()=>UE(de(t.dom.childNodes),n,o)),(e=>{const r=K(de(t.dom.childNodes),(t=>t!==e.dom));return UE(r,n,o)})).orThunk((()=>{var n;return(vn(t,e)?M.none():(n=t,M.from(n.dom.parentElement).map(fn))).bind((e=>r(e,M.some(t))))}));return r(t,M.none())})(o,s,t,n)})(e,t,n).filter((e=>Pd(e.node))).map((e=>((e,t)=>({node:e.node,position:LE(e,t)<ME(e,t)?PE.Before:PE.After}))(e,t))),jE=e=>{const t=e.getBoundingClientRect(),n=e.ownerDocument,o=n.documentElement,r=n.defaultView;return{top:t.top+r.pageYOffset-o.clientTop,left:t.left+r.pageXOffset-o.clientLeft}},VE=Io,HE=Mo,$E=(e,t,n,o)=>{const r=e.dom,s=t.cloneNode(!0);r.setStyles(s,{width:n,height:o}),r.setAttrib(s,"data-mce-selected",null);const a=r.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});return r.setStyles(a,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:o}),r.setStyles(s,{margin:0,boxSizing:"border-box"}),a.appendChild(s),a},qE=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},WE=e=>{e.on((e=>{qE(e.ghost)})),e.clear()},KE=e=>{const t=aa(),n=Qs.DOM,o=document,r=((e,t)=>n=>{if((e=>0===e.button)(n)){const s=Q(t.dom.getParents(n.target),((...e)=>t=>{for(let n=0;n<e.length;n++)if(e[n](t))return!0;return!1})(VE,HE)).getOr(null);if(o=t.getBody(),VE(r=s)&&r!==o){const o=t.dom.getPos(s),r=t.getBody(),a=t.getDoc().documentElement;e.set({element:s,dragging:!1,screenX:n.screenX,screenY:n.screenY,maxX:(t.inline?r.scrollWidth:a.offsetWidth)-2,maxY:(t.inline?r.scrollHeight:a.offsetHeight)-2,relX:n.pageX-o.x,relY:n.pageY-o.y,width:s.offsetWidth,height:s.offsetHeight,ghost:$E(t,s,s.offsetWidth,s.offsetHeight)})}}var o,r})(t,e),s=((e,t)=>{const n=ia(((e,n)=>{t._selectionOverrides.hideFakeCaret(),t.selection.placeCaretAt(e,n)}),0);return t.on("remove",n.cancel),o=>e.on((e=>{const r=Math.max(Math.abs(o.screenX-e.screenX),Math.abs(o.screenY-e.screenY));if(!e.dragging&&r>10){if(t.dispatch("dragstart",{target:e.element}).isDefaultPrevented())return;e.dragging=!0,t.focus()}if(e.dragging){const r=((e,t)=>({pageX:t.pageX-e.relX,pageY:t.pageY+5}))(e,((e,t)=>{return n=(e=>e.inline?jE(e.getBody()):{left:0,top:0})(e),o=(e=>{const t=e.getBody();return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}})(e),r=((e,t)=>{if(t.target.ownerDocument!==e.getDoc()){const n=jE(e.getContentAreaContainer()),o=(e=>{const t=e.getBody(),n=e.getDoc().documentElement,o={left:t.scrollLeft,top:t.scrollTop},r={left:t.scrollLeft||n.scrollLeft,top:t.scrollTop||n.scrollTop};return e.inline?o:r})(e);return{left:t.pageX-n.left+o.left,top:t.pageY-n.top+o.top}}return{left:t.pageX,top:t.pageY}})(e,t),{pageX:r.left-n.left+o.left,pageY:r.top-n.top+o.top};var n,o,r})(t,o));s=e.ghost,a=t.getBody(),s.parentNode!==a&&a.appendChild(s),((e,t,n,o,r,s)=>{let a=0,i=0;e.style.left=t.pageX+"px",e.style.top=t.pageY+"px",t.pageX+n>r&&(a=t.pageX+n-r),t.pageY+o>s&&(i=t.pageY+o-s),e.style.width=n-a+"px",e.style.height=o-i+"px"})(e.ghost,r,e.width,e.height,e.maxX,e.maxY),n.throttle(o.clientX,o.clientY)}var s,a}))})(t,e),a=((e,t)=>n=>{e.on((e=>{if(e.dragging){if(((e,t,n)=>t!==n&&!e.dom.isChildOf(t,n)&&!VE(t))(t,(e=>{const t=e.getSel().getRangeAt(0).startContainer;return 3===t.nodeType?t.parentNode:t})(t.selection),e.element)){const o=(e=>{const t=e.cloneNode(!0);return t.removeAttribute("data-mce-selected"),t})(e.element);t.dispatch("drop",{clientX:n.clientX,clientY:n.clientY}).isDefaultPrevented()||t.undoManager.transact((()=>{qE(e.element),t.insertContent(t.dom.getOuterHTML(o)),t._selectionOverrides.hideFakeCaret()}))}t.dispatch("dragend")}})),WE(e)})(t,e),i=((e,t)=>()=>{e.on((e=>{e.dragging&&t.dispatch("dragend")})),WE(e)})(t,e);e.on("mousedown",r),e.on("mousemove",s),e.on("mouseup",a),n.bind(o,"mousemove",s),n.bind(o,"mouseup",i),e.on("remove",(()=>{n.unbind(o,"mousemove",s),n.unbind(o,"mouseup",i)})),e.on("keydown",(e=>{e.keyCode===om.ESC&&i()}))},GE=Io,YE=(e,t)=>Up(e.getBody(),t),XE=e=>{const t=e.selection,n=e.dom,o=n.isBlock,r=e.getBody(),s=Td(e,r,o,(()=>_f(e))),a="sel-"+n.uniqueId(),i="data-mce-selected";let l;const d=e=>e!==r&&(GE(e)||Uo(e))&&n.isChildOf(e,r),c=(n,o,r,a=!0)=>e.dispatch("ShowCaret",{target:o,direction:n,before:r}).isDefaultPrevented()?null:(a&&t.scrollIntoView(o,-1===n),s.show(r,o)),u=e=>Or(e)||Pr(e)||Lr(e),m=e=>u(e.startContainer)||u(e.endContainer),f=t=>{const o=e.schema.getVoidElements(),r=n.createRng(),s=t.startContainer,a=t.startOffset,i=t.endContainer,l=t.endOffset;return xe(o,s.nodeName.toLowerCase())?0===a?r.setStartBefore(s):r.setStartAfter(s):r.setStart(s,a),xe(o,i.nodeName.toLowerCase())?0===l?r.setEndBefore(i):r.setEndAfter(i):r.setEnd(i,l),r},g=(o,s)=>{if(!o)return null;if(o.collapsed){if(!m(o)){const e=s?1:-1,t=oc(e,r,o),n=t.getNode(!s);if(Pd(n))return c(e,n,!!s&&!t.isAtEnd(),!1);const a=t.getNode(s);if(Pd(a))return c(e,a,!s&&!t.isAtEnd(),!1)}return null}let u=o.startContainer,f=o.startOffset;const g=o.endOffset;if(3===u.nodeType&&0===f&&GE(u.parentNode)&&(u=u.parentNode,f=n.nodeIndex(u),u=u.parentNode),1!==u.nodeType)return null;if(g===f+1&&u===o.endContainer){const o=u.childNodes[f];if(d(o))return(o=>{const r=o.cloneNode(!0),s=e.dispatch("ObjectSelected",{target:o,targetClone:r});if(s.isDefaultPrevented())return null;const d=((o,r)=>{const s=fn(e.getBody()),i=e.getDoc(),l=Ko(s,"#"+a).getOrThunk((()=>{const e=cn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>',i);return qt(e,"id",a),Zn(s,e),e})),d=n.createRng();to(l),eo(l,[mn(fr,i),fn(r),mn(fr,i)]),d.setStart(l.dom.firstChild,1),d.setEnd(l.dom.lastChild,0),$n(l,{top:n.getPos(o,e.getBody()).y+"px"}),rf(l);const c=t.getSel();return c.removeAllRanges(),c.addRange(d),d})(o,s.targetClone),c=fn(o);return $(hr(fn(e.getBody()),"*[data-mce-selected]"),(e=>{vn(c,e)||Xt(e,i)})),n.getAttrib(o,i)||o.setAttribute(i,"1"),l=o,h(),d})(o)}return null},p=()=>{l&&l.removeAttribute(i),Ko(fn(e.getBody()),"#"+a).each(no),l=null},h=()=>{s.hide()};return dy(e)||(e.on("click",(t=>{const n=YE(e,t.target);n&&GE(n)&&(t.preventDefault(),e.focus())})),e.on("blur NewBlock",p),e.on("ResizeWindow FullscreenStateChanged",s.reposition),e.on("tap",(t=>{const n=t.target,o=YE(e,n);GE(o)?(t.preventDefault(),DC(e,o).each(g)):d(n)&&DC(e,n).each(g)}),!0),e.on("mousedown",(o=>{const s=o.target;if(s!==r&&"HTML"!==s.nodeName&&!n.isChildOf(s,r))return;if(!1===((e,t,n)=>{const o=fn(e.getBody()),r=e.inline?o:fn(wn(o).dom.documentElement),s=((e,t,n,o)=>{const r=(e=>e.dom.getBoundingClientRect())(t);return{x:n-(e?r.left+t.dom.clientLeft+Ly(t):0),y:o-(e?r.top+t.dom.clientTop+Py(t):0)}})(e.inline,r,t,n);return((e,t,n)=>{const o=By(e),r=Dy(e);return t>=0&&n>=0&&t<=o&&n<=r})(r,s.x,s.y)})(e,o.clientX,o.clientY))return;p(),h();const a=YE(e,s);GE(a)?(o.preventDefault(),DC(e,a).each(g)):zE(r,o.clientX,o.clientY).each((n=>{var r;o.preventDefault(),(r=c(1,n.node,n.position===PE.Before,!1))&&t.setRng(r),Co(a)?a.focus():e.getBody().focus()}))})),e.on("keypress",(e=>{om.modifierPressed(e)||GE(t.getNode())&&e.preventDefault()})),e.on("GetSelectionRange",(e=>{let t=e.range;if(l){if(!l.parentNode)return void(l=null);t=t.cloneRange(),t.selectNode(l),e.range=t}})),e.on("SetSelectionRange",(e=>{e.range=f(e.range);const t=g(e.range,e.forward);t&&(e.range=t)})),e.on("AfterSetSelectionRange",(e=>{const t=e.range,o=t.startContainer.parentNode;var r;m(t)||"mcepastebin"===o.id||h(),r=o,n.hasClass(r,"mce-offscreen-selection")||p()})),(e=>{KE(e),ql(e)&&(e=>{const t=t=>{if(!t.isDefaultPrevented()){const n=t.dataTransfer;n&&(j(n.types,"Files")||n.files.length>0)&&(t.preventDefault(),"drop"===t.type&&jy(e,"Dropped file type is not supported"))}},n=n=>{Cf(e,n.target)&&t(n)},o=()=>{const o=Qs.DOM,r=e.dom,s=document,a=e.inline?e.getBody():e.getDoc(),i=["drop","dragover"];$(i,(e=>{o.bind(s,e,n),r.bind(a,e,t)})),e.on("remove",(()=>{$(i,(e=>{o.unbind(s,e,n),r.unbind(a,e,t)}))}))};e.on("init",(()=>{bf.setEditorTimeout(e,o,0)}))})(e)})(e),(e=>{const t=ia((()=>{if(!e.removed&&e.getBody().contains(document.activeElement)){const t=e.selection.getRng();if(t.collapsed){const n=PC(e,t,!1);e.selection.setRng(n)}}}),0);e.on("focus",(()=>{t.throttle()})),e.on("blur",(()=>{t.cancel()}))})(e),(e=>{e.on("init",(()=>{e.on("focusin",(t=>{const n=t.target;if(Uo(n)){const t=Up(e.getBody(),n),o=Io(t)?t:n;e.selection.getNode()!==o&&DC(e,o).each((t=>e.selection.setRng(t)))}}))}))})(e)),{showCaret:c,showBlockCaretContainer:e=>{e.hasAttribute("data-mce-caret")&&(Mr(e),t.scrollIntoView(e))},hideFakeCaret:h,destroy:()=>{s.destroy(),l=null}}},QE=(e,t,n)=>{if(Ro(t)&&(n<0||n>t.data.length))return[];const o=[n];let r=t;for(;r!==e&&r.parentNode;){const e=r.parentNode;for(let t=0;t<e.childNodes.length;t++)if(e.childNodes[t]===r){o.push(t);break}r=e}return r===e?o.reverse():[]},JE=(e,t,n,o,r)=>({start:QE(e,t,n),end:QE(e,o,r)}),ZE=(e,t)=>{const n=t.slice(),o=n.pop();return Y(n,((e,t)=>e.bind((e=>M.from(e.childNodes[t])))),M.some(e)).bind((e=>Ro(e)&&(o<0||o>e.data.length)?M.none():M.some({node:e,offset:o})))},eN=(e,t)=>ZE(e,t.start).bind((({node:n,offset:o})=>ZE(e,t.end).map((({node:e,offset:t})=>{const r=document.createRange();return r.setStart(n,o),r.setEnd(e,t),r})))),tN=(e,t,n)=>{if(t&&e.isEmpty(t)&&!n(t)){const o=t.parentNode;e.remove(t),tN(e,o,n)}},nN=(e,t,n,o=!0)=>{const r=t.startContainer.parentNode,s=t.endContainer.parentNode;t.deleteContents(),o&&!n(t.startContainer)&&(Ro(t.startContainer)&&0===t.startContainer.data.length&&e.remove(t.startContainer),Ro(t.endContainer)&&0===t.endContainer.data.length&&e.remove(t.endContainer),tN(e,r,n),r!==s&&tN(e,s,n))},oN=(e,t)=>M.from(e.dom.getParent(t.startContainer,e.dom.isBlock)),rN=(e,t,n)=>{((e,t,n)=>{if(Ro(e)&&0>=e.length)return M.some(Nk(e,0));{const t=Ea(Rk);return M.from(t.forwards(e,0,Ak(e),n)).map((e=>Nk(e.container,0)))}})(t,0,t).each((o=>{const r=o.container;Bk(r,n.start.length,t).each((n=>{const o=e.createRng();o.setStart(r,0),o.setEnd(n.container,n.offset),nN(e,o,(e=>e===t))}))}))},sN=(e,t)=>e.create("span",{"data-mce-type":"bookmark",id:t}),aN=(e,t)=>{const n=e.createRng();return n.setStartAfter(t.start),n.setEndBefore(t.end),n},iN=(e,t,n)=>{const o=eN(e.getRoot(),n).getOrDie("Unable to resolve path range"),r=o.startContainer,s=o.endContainer,a=0===o.endOffset?s:s.splitText(o.endOffset),i=0===o.startOffset?r:r.splitText(o.startOffset);return{prefix:t,end:a.parentNode.insertBefore(sN(e,t+"-end"),a),start:i.parentNode.insertBefore(sN(e,t+"-start"),i)}},lN=(e,t,n)=>{tN(e,e.get(t.prefix+"-end"),n),tN(e,e.get(t.prefix+"-start"),n)},dN=e=>0===e.start.length,cN=(e,t,n,o)=>{const r=t.start;var s;return Dk(e,o.container,o.offset,(s=r,(e,t)=>{const n=e.data.substring(0,t),o=n.lastIndexOf(s.charAt(s.length-1)),r=n.lastIndexOf(s);return-1!==r?r+s.length:-1!==o?o+1:-1}),n).bind((o=>{if(o.offset>=r.length){const t=e.createRng();return t.setStart(o.container,o.offset-r.length),t.setEnd(o.container,o.offset),M.some(t)}{const s=o.offset-r.length;return Tk(o.container,s,n).map((t=>{const n=e.createRng();return n.setStart(t.container,t.offset),n.setEnd(o.container,o.offset),n})).filter((e=>e.toString()===r)).orThunk((()=>cN(e,t,n,Nk(o.container,0))))}}))},uN=(e,t,n)=>{const o=e.dom,r=o.getRoot(),s=n.pattern,a=n.position.container,i=n.position.offset;return Tk(a,i-n.pattern.end.length,t).bind((l=>{const d=JE(r,l.container,l.offset,a,i);if(dN(s))return M.some({matches:[{pattern:s,startRng:d,endRng:d}],position:l});{const a=mN(e,n.remainingPatterns,l.container,l.offset,t),i=a.getOr({matches:[],position:l}),c=i.position,u=((e,t,n,o,r,s=!1)=>{if(0===t.start.length&&!s){const t=e.createRng();return t.setStart(n,o),t.setEnd(n,o),M.some(t)}return Ok(n,o,r).bind((n=>cN(e,t,r,n).bind((e=>{if(s){if(e.endContainer===n.container&&e.endOffset===n.offset)return M.none();if(0===n.offset&&e.endContainer.textContent.length===e.endOffset)return M.none()}return M.some(e)}))))})(o,s,c.container,c.offset,t,a.isNone());return u.map((e=>{const t=((e,t)=>JE(e,t.startContainer,t.startOffset,t.endContainer,t.endOffset))(r,e);return{matches:i.matches.concat([{pattern:s,startRng:t,endRng:d}]),position:Nk(e.startContainer,e.startOffset)}}))}}))},mN=(e,t,n,o,r)=>{const s=e.dom;return Ok(n,o,s.getRoot()).bind((a=>{const i=s.createRng();i.setStart(r,0),i.setEnd(n,o);const l=i.toString();for(let n=0;n<t.length;n++){const o=t[n];if(!je(l,o.end))continue;const s=t.slice();s.splice(n,1);const i=uN(e,r,{pattern:o,remainingPatterns:s,position:a});if(i.isSome())return i}return M.none()}))},fN=(e,t,n)=>{e.selection.setRng(n),"inline-format"===t.type?$(t.format,(t=>{e.formatter.apply(t)})):e.execCommand(t.cmd,!1,t.value)},gN=(e,t,n)=>{const o=e.selection.getRng();return!1===o.collapsed?[]:oN(e,o).bind((r=>{const s=Math.max(0,o.startOffset-(n?1:0));return mN(e,t,o.startContainer,s,r)})).fold((()=>[]),(e=>e.matches))},pN=(e,t)=>{if(0===t.length)return;const n=e.dom,o=e.selection.getBookmark(),r=((e,t)=>{const n=wa("mce_textpattern"),o=G(t,((t,o)=>{const r=iN(e,n+`_end${t.length}`,o.endRng);return t.concat([{...o,endMarker:r}])}),[]);return G(o,((t,r)=>{const s=o.length-t.length-1,a=dN(r.pattern)?r.endMarker:iN(e,n+`_start${s}`,r.startRng);return t.concat([{...r,startMarker:a}])}),[])})(n,t);$(r,(t=>{const o=n.getParent(t.startMarker.start,n.isBlock),r=e=>e===o;dN(t.pattern)?((e,t,n,o)=>{const r=aN(e.dom,n);nN(e.dom,r,o),fN(e,t,r)})(e,t.pattern,t.endMarker,r):((e,t,n,o,r)=>{const s=e.dom,a=aN(s,o),i=aN(s,n);nN(s,i,r),nN(s,a,r);const l={prefix:n.prefix,start:n.end,end:o.start},d=aN(s,l);fN(e,t,d)})(e,t.pattern,t.startMarker,t.endMarker,r),lN(n,t.endMarker,r),lN(n,t.startMarker,r)})),e.selection.moveToBookmark(o)},hN=(e,t)=>{if(!e.selection.isCollapsed()||!(e=>e.inlinePatterns.length>0||e.blockPatterns.length>0)(t))return!1;const n=gN(e,t.inlinePatterns,!1),o=((e,t)=>{const n=e.dom,o=e.selection.getRng();return oN(e,o).filter((t=>{const o=Ki(e),r=n.is(t,o);return null!==t&&r})).bind((e=>{const o=e.textContent,r=((e,t)=>{const n=t.replace(fr," ");return Q(e,(e=>0===t.indexOf(e.start)||0===n.indexOf(e.start)))})(t,o);return r.map((t=>Bt.trim(o).length===t.start.length?[]:[{pattern:t,range:JE(n.getRoot(),e,0,e,0)}]))})).getOr([])})(e,t.blockPatterns);return(o.length>0||n.length>0)&&(e.undoManager.add(),e.undoManager.extra((()=>{e.execCommand("mceInsertNewLine")}),(()=>{e.insertContent(mr),pN(e,n),((e,t)=>{if(0===t.length)return;const n=e.selection.getBookmark();$(t,(t=>((e,t)=>{const n=e.dom,o=t.pattern,r=eN(n.getRoot(),t.range).getOrDie("Unable to resolve path range");return oN(e,r).each((t=>{"block-format"===o.type?((e,t)=>{const n=t.get(e);return p(n)&&ie(n).exists((e=>xe(e,"block")))})(o.format,e.formatter)&&e.undoManager.transact((()=>{rN(e.dom,t,o),e.formatter.apply(o.format)})):"block-command"===o.type&&e.undoManager.transact((()=>{rN(e.dom,t,o),e.execCommand(o.cmd,!1,o.value)}))})),!0})(e,t))),e.selection.moveToBookmark(n)})(e,o);const t=e.selection.getRng(),r=Ok(t.startContainer,t.startOffset,e.dom.getRoot());e.execCommand("mceInsertNewLine"),r.each((t=>{const n=t.container;n.data.charAt(t.offset-1)===mr&&(n.deleteData(t.offset-1,1),tN(e.dom,n.parentNode,(t=>t===e.dom.getRoot())))}))})),!0)},bN=(e,t)=>{if(t.length>0){const n=gN(e,t,!0);n.length>0&&e.undoManager.transact((()=>{pN(e,n)}))}},vN=(e,t,n)=>{for(let o=0;o<e.length;o++)if(n(e[o],t))return!0;return!1},yN=e=>{const t=[",",".",";",":","!","?"],n=[32],o=()=>Ti(fd(e));e.on("keydown",(t=>{var n;13!==t.keyCode||om.modifierPressed(t)||hN(e,(n=fd(e),{inlinePatterns:Ti(n),blockPatterns:Oi(n)}))&&t.preventDefault()}),!0),e.on("keyup",(t=>{vN(n,t,((e,t)=>e===t.keyCode&&!1===om.modifierPressed(t)))&&bN(e,o())})),e.on("keypress",(n=>{vN(t,n,((e,t)=>e.charCodeAt(0)===t.charCode))&&bf.setEditorTimeout(e,(()=>{bN(e,o())}))}))},CN=e=>{const t=Bt.each,n=om.BACKSPACE,o=om.DELETE,r=e.dom,s=e.selection,a=e.parser,i=Nt.browser,l=i.isFirefox(),d=i.isChromium()||i.isSafari(),c=Nt.deviceType.isiPhone()||Nt.deviceType.isiPad(),u=Nt.os.isMacOS()||Nt.os.isiOS(),m=(t,n)=>{try{e.getDoc().execCommand(t,!1,n)}catch(e){}},f=e=>e.isDefaultPrevented(),g=()=>{e.shortcuts.add("meta+a",null,"SelectAll")},p=()=>{e.inline||r.bind(e.getDoc(),"mousedown mouseup",(t=>{let n;if(t.target===e.getDoc().documentElement)if(n=s.getRng(),e.getBody().focus(),"mousedown"===t.type){if(Or(n.startContainer))return;s.placeCaretAt(t.clientX,t.clientY)}else s.setRng(n)}))},h=()=>{Range.prototype.getClientRects||e.on("mousedown",(t=>{if(!f(t)&&"HTML"===t.target.nodeName){const t=e.getBody();t.blur(),bf.setEditorTimeout(e,(()=>{t.focus()}))}}))},b=()=>{const t=Gl(e);e.on("click",(n=>{const o=n.target;/^(IMG|HR)$/.test(o.nodeName)&&"false"!==r.getContentEditableParent(o)&&(n.preventDefault(),e.selection.select(o),e.nodeChanged()),"A"===o.nodeName&&r.hasClass(o,t)&&0===o.childNodes.length&&(n.preventDefault(),s.select(o))}))},v=()=>{e.on("keydown",(e=>{if(!f(e)&&e.keyCode===n&&s.isCollapsed()&&0===s.getRng().startOffset){const t=s.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}}))},y=()=>{jl(e)||e.on("BeforeExecCommand mousedown",(()=>{m("StyleWithCSS",!1),m("enableInlineTableEditing",!1),Cl(e)||m("enableObjectResizing",!1)}))},C=()=>{e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")},w=()=>{e.inline||e.on("keydown",(()=>{document.activeElement===document.body&&e.getWin().focus()}))},x=()=>{e.inline||(e.contentStyles.push("body {min-height: 150px}"),e.on("click",(t=>{let n;"HTML"===t.target.nodeName&&(n=e.selection.getRng(),e.getBody().focus(),e.selection.setRng(n),e.selection.normalize(),e.nodeChanged())})))},k=()=>{u&&e.on("keydown",(t=>{!om.metaKeyPressed(t)||t.shiftKey||37!==t.keyCode&&39!==t.keyCode||(t.preventDefault(),e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary"))}))},_=()=>{e.on("click",(e=>{let t=e.target;do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)})),e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")},E=()=>{e.on("init",(()=>{e.dom.bind(e.getBody(),"submit",(e=>{e.preventDefault()}))}))},N=S;return dy(e)?(d&&(p(),b(),E(),g(),c&&(w(),x(),_())),l&&(h(),y(),C(),k())):(e.on("keydown",(t=>{let n,o;if(f(t)||t.keyCode!==om.BACKSPACE)return;n=s.getRng();const a=n.startContainer,i=n.startOffset,l=r.getRoot();if(o=a,n.collapsed&&0===i){for(;o&&o.parentNode&&o.parentNode.firstChild===o&&o.parentNode!==l;)o=o.parentNode;"BLOCKQUOTE"===o.tagName&&(e.formatter.toggle("blockquote",null,o),n=r.createRng(),n.setStart(a,0),n.setEnd(a,0),s.setRng(n))}})),(()=>{const t=e=>{const t=r.create("body"),n=e.cloneContents();return t.appendChild(n),s.serializer.serialize(t,{format:"html"})};e.on("keydown",(s=>{const a=s.keyCode;let i,l;if(!f(s)&&(a===o||a===n)){if(i=e.selection.isCollapsed(),l=e.getBody(),i&&!r.isEmpty(l))return;if(!i&&!(n=>{const o=t(n),s=r.createRng();return s.selectNode(e.getBody()),o===t(s)})(e.selection.getRng()))return;s.preventDefault(),e.setContent(""),l.firstChild&&r.isBlock(l.firstChild)?e.selection.setCursorLocation(l.firstChild,0):e.selection.setCursorLocation(l,0),e.nodeChanged()}}))})(),Nt.windowsPhone||e.on("keyup focusin mouseup",(t=>{om.modifierPressed(t)||(e=>{const t=e.getBody(),n=e.selection.getRng();return n.startContainer===n.endContainer&&n.startContainer===t&&0===n.startOffset&&n.endOffset===t.childNodes.length})(e)||s.normalize()}),!0),d&&(p(),b(),e.on("init",(()=>{m("DefaultParagraphSeparator",Ki(e))})),E(),v(),a.addNodeFilter("br",(e=>{let t=e.length;for(;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})),c?(w(),x(),_()):g()),l&&(e.on("keydown",(t=>{if(!f(t)&&t.keyCode===n){if(!e.getBody().getElementsByTagName("hr").length)return;if(s.isCollapsed()&&0===s.getRng().startOffset){const e=s.getNode(),n=e.previousSibling;if("HR"===e.nodeName)return r.remove(e),void t.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(r.remove(n),t.preventDefault())}}})),h(),(()=>{const n=()=>{const n=r.getAttribs(s.getStart().cloneNode(!1));return()=>{const o=s.getStart();o!==e.getBody()&&(r.setAttrib(o,"style",null),t(n,(e=>{o.setAttributeNode(e.cloneNode(!0))})))}},o=()=>!s.isCollapsed()&&r.getParent(s.getStart(),r.isBlock)!==r.getParent(s.getEnd(),r.isBlock);e.on("keypress",(t=>{let r;if(!f(t)&&(8===t.keyCode||46===t.keyCode)&&o())return r=n(),e.getDoc().execCommand("delete",!1,null),r(),t.preventDefault(),!1})),r.bind(e.getDoc(),"cut",(t=>{let r;!f(t)&&o()&&(r=n(),bf.setEditorTimeout(e,(()=>{r()})))}))})(),y(),e.on("SetContent ExecCommand",(e=>{"setcontent"!==e.type&&"mceInsertLink"!==e.command||t(r.select("a"),(e=>{let t=e.parentNode;const n=r.getRoot();if(t.lastChild===e){for(;t&&!r.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}r.add(t,"br",{"data-mce-bogus":1})}}))})),C(),k(),v())),{refreshContentEditable:N,isHidden:()=>{if(!l||e.removed)return!1;const t=e.selection.getSel();return!t||!t.rangeCount||0===t.rangeCount}}},wN=Qs.DOM,xN=e=>e.inline?e.getElement().nodeName.toLowerCase():void 0,kN=e=>ve(e,(e=>!1===v(e))),SN=e=>{const t=e.options.get,n=e.editorUpload.blobCache;return kN({allow_conditional_comments:t("allow_conditional_comments"),allow_html_data_urls:t("allow_html_data_urls"),allow_svg_data_urls:t("allow_svg_data_urls"),allow_html_in_named_anchor:t("allow_html_in_named_anchor"),allow_script_urls:t("allow_script_urls"),allow_unsafe_link_target:t("allow_unsafe_link_target"),convert_fonts_to_spans:t("convert_fonts_to_spans"),fix_list_elements:t("fix_list_elements"),font_size_legacy_values:t("font_size_legacy_values"),forced_root_block:t("forced_root_block"),forced_root_block_attrs:t("forced_root_block_attrs"),preserve_cdata:t("preserve_cdata"),remove_trailing_brs:t("remove_trailing_brs"),inline_styles:t("inline_styles"),root_name:xN(e),validate:!0,blob_cache:n,document:e.getDoc()})},_N=e=>{const t=e.options.get;return kN({custom_elements:t("custom_elements"),extended_valid_elements:t("extended_valid_elements"),invalid_elements:t("invalid_elements"),invalid_styles:t("invalid_styles"),schema:t("schema"),valid_children:t("valid_children"),valid_classes:t("valid_classes"),valid_elements:t("valid_elements"),valid_styles:t("valid_styles"),verify_html:t("verify_html"),padd_empty_block_inline_children:t("format_empty_lines")})},EN=e=>e.inline?e.ui.styleSheetLoader:e.dom.styleSheetLoader,NN=e=>{const t=EN(e),n=bl(e),o=e.contentCSS,r=()=>{t.unloadAll(o),e.inline||e.ui.styleSheetLoader.unloadAll(n)},s=()=>{e.removed?r():e.on("remove",r)};if(e.contentStyles.length>0){let t="";Bt.each(e.contentStyles,(e=>{t+=e+"\r\n"})),e.dom.addStyle(t)}const a=Promise.all(((e,t,n)=>{const o=[EN(e).loadAll(t)];return e.inline?o:o.concat([e.ui.styleSheetLoader.loadAll(n)])})(e,o,n)).then(s).catch(s),i=hl(e);return i&&((e,t)=>{const n=fn(e.getBody()),o=In(Mn(n)),r=un("style");qt(r,"type","text/css"),Zn(r,mn(t)),Zn(o,r),e.on("remove",(()=>{no(r)}))})(e,i),a},RN=e=>{!0!==e.removed&&((e=>{dy(e)||e.load({initial:!0,format:"html"}),e.startContent=e.getContent({format:"raw"})})(e),(e=>{e.bindPendingEventDelegates(),e.initialized=!0,(e=>{e.dispatch("Init")})(e),e.focus(!0),(e=>{const t=e.dom.getRoot();e.inline||ju(e)&&e.selection.getStart(!0)!==t||Rc(t).each((t=>{const n=t.getNode(),o=_o(n)?Rc(n).getOr(t):t;e.selection.setRng(o.toRange())}))})(e),e.nodeChanged({initial:!0});const t=Ql(e);w(t)&&t.call(e,e),(e=>{const t=Zl(e);t&&bf.setEditorTimeout(e,(()=>{let n;n=!0===t?e:e.editorManager.get(t),n.destroyed||n.focus()}),100)})(e)})(e))},AN=e=>{const t=e.getElement();let n=e.getDoc();e.inline&&(wN.addClass(t,"mce-content-body"),e.contentDocument=n=document,e.contentWindow=window,e.bodyElement=t,e.contentAreaContainer=t);const o=e.getBody();o.disabled=!0,e.readonly=jl(e),e.readonly||(e.inline&&"static"===wN.getStyle(o,"position",!0)&&(o.style.position="relative"),o.contentEditable="true"),o.disabled=!1,e.editorUpload=Zy(e),e.schema=Bs(_N(e)),e.dom=Qs(n,{keep_values:!0,url_converter:e.convertURL,url_converter_scope:e,update_styles:!0,root_element:e.inline?e.getBody():null,collect:()=>e.inline,schema:e.schema,contentCssCors:dl(e),referrerPolicy:cl(e),onSetAttrib:t=>{e.dispatch("SetAttrib",t)}}),e.parser=(e=>{const t=Ov(SN(e),e.schema);return t.addAttributeFilter("src,href,style,tabindex",((t,n)=>{let o,r,s=t.length;const a=e.dom,i="data-mce-"+n;for(;s--;)if(o=t[s],r=o.attr(n),r&&!o.attr(i)){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue;"style"===n?(r=a.serializeStyle(a.parseStyle(r),o.name),r.length||(r=null),o.attr(i,r),o.attr(n,r)):"tabindex"===n?(o.attr(i,r),o.attr(n,null)):o.attr(i,e.convertURL(r,n,o.name))}})),t.addNodeFilter("script",(e=>{let t=e.length;for(;t--;){const n=e[t],o=n.attr("type")||"no/type";0!==o.indexOf("mce-")&&n.attr("type","mce-"+o)}})),e.options.get("preserve_cdata")&&t.addNodeFilter("#cdata",(t=>{let n=t.length;for(;n--;){const o=t[n];o.type=8,o.name="#comment",o.value="[CDATA["+e.dom.encode(o.value)+"]]"}})),t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(t=>{let n=t.length;const o=e.schema.getNonEmptyElements();for(;n--;){const e=t[n];e.isEmpty(o)&&0===e.getAll("br").length&&e.append(new jf("br",1))}})),t})(e),e.serializer=Cy((e=>{const t=e.options.get;return{...SN(e),..._N(e),...kN({url_converter:t("url_converter"),url_converter_scope:t("url_converter_scope"),element_format:t("element_format"),entities:t("entities"),entity_encoding:t("entity_encoding"),indent:t("indent"),indent_after:t("indent_after"),indent_before:t("indent_before")})}})(e),e),e.selection=by(e.dom,e.getWin(),e.serializer,e),e.annotator=Gu(e),e.formatter=dC(e),e.undoManager=uC(e),e._nodeChangeDispatcher=new q_(e),e._selectionOverrides=XE(e),(e=>{const t=aa(),n=ea(!1),o=la((t=>{e.dispatch("longpress",{...t,type:"longpress"}),n.set(!0)}),400);e.on("touchstart",(e=>{Ax(e).each((r=>{o.cancel();const s={x:r.clientX,y:r.clientY,target:e.target};o.throttle(e),n.set(!1),t.set(s)}))}),!0),e.on("touchmove",(r=>{o.cancel(),Ax(r).each((o=>{t.on((r=>{((e,t)=>{const n=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y);return n>5||o>5})(o,r)&&(t.clear(),n.set(!1),e.dispatch("longpresscancel"))}))}))}),!0),e.on("touchend touchcancel",(r=>{o.cancel(),"touchcancel"!==r.type&&t.get().filter((e=>e.target.isEqualNode(r.target))).each((()=>{n.get()?r.preventDefault():e.dispatch("tap",{...r,type:"tap"})}))}),!0)})(e),(e=>{(e=>{e.on("click",(t=>{e.dom.getParent(t.target,"details")&&t.preventDefault()}))})(e),(e=>{e.parser.addNodeFilter("details",(e=>{$(e,(e=>{e.attr("data-mce-open",e.attr("open")),e.attr("open","open")}))})),e.serializer.addNodeFilter("details",(e=>{$(e,(e=>{const t=e.attr("data-mce-open");e.attr("open",m(t)?t:null),e.attr("data-mce-open",null)}))}))})(e)})(e),(e=>{const t="contenteditable",n=" "+Bt.trim(pd(e))+" ",o=" "+Bt.trim(gd(e))+" ",r=Mx(n),s=Mx(o),a=hd(e);a.length>0&&e.on("BeforeSetContent",(t=>{((e,t,n)=>{let o=t.length,r=n.content;if("raw"!==n.format){for(;o--;)r=r.replace(t[o],Ix(e,r,gd(e)));n.content=r}})(e,a,t)})),e.parser.addAttributeFilter("class",(e=>{let n=e.length;for(;n--;){const o=e[n];r(o)?o.attr(t,"true"):s(o)&&o.attr(t,"false")}})),e.serializer.addAttributeFilter(t,(e=>{let n=e.length;for(;n--;){const o=e[n];(r(o)||s(o))&&(a.length>0&&o.attr("data-mce-content")?(o.name="#text",o.type=3,o.raw=!0,o.value=o.attr("data-mce-content")):o.attr(t,null))}}))})(e),dy(e)||((e=>{e.on("mousedown",(t=>{t.detail>=3&&(t.preventDefault(),DE(e))}))})(e),(e=>{yN(e)})(e));const r=$_(e);Rx(e,r),(e=>{e.on("NodeChange",O(Px,e))})(e),(e=>{const t=e.dom,n=Ki(e),o=xl(e),r=(s,a)=>{if((e=>{if(gC(e)){const t=e.keyCode;return!pC(e)&&(om.metaKeyPressed(e)||e.altKey||t>=112&&t<=123||j(mC,t))}return!1})(s))return;const i=e.getBody(),l=!(e=>gC(e)&&!(pC(e)||"keyup"===e.type&&229===e.keyCode))(s)&&((e,t,n)=>{if(os(fn(t),!1)){const o=t.firstElementChild;return!o||!e.getStyle(t.firstElementChild,"padding-left")&&!e.getStyle(t.firstElementChild,"padding-right")&&n===o.nodeName.toLowerCase()}return!1})(t,i,n);(""!==t.getAttrib(i,fC)!==l||a)&&(t.setAttrib(i,fC,l?o:null),t.setAttrib(i,"aria-placeholder",l?o:null),((e,t)=>{e.dispatch("PlaceholderToggle",{state:t})})(e,l),e.on(l?"keydown":"keyup",r),e.off(l?"keyup":"keydown",r))};o&&e.on("init",(t=>{r(t,!0),e.on("change SetContent ExecCommand",r),e.on("paste",(t=>bf.setEditorTimeout(e,(()=>r(t)))))}))})(e),EE(e);const s=(e=>{const t=e;return(e=>we(e.plugins,"rtc").bind((e=>M.from(e.setup))))(e).fold((()=>(t.rtcInstance=ly(e),M.none())),(e=>(t.rtcInstance=(()=>{const e=N(null),t=N("");return{init:{bindEvents:S},undoManager:{beforeChange:S,add:e,undo:e,redo:e,clear:S,reset:S,hasUndo:P,hasRedo:P,transact:e,ignore:S,extra:S},formatter:{match:P,matchAll:N([]),matchNode:N(void 0),canApply:P,closest:t,apply:S,remove:S,toggle:S,formatChanged:N({unbind:S})},editor:{getContent:t,setContent:N({content:"",html:""}),insertContent:N(""),addVisual:S},selection:{getContent:t},autocompleter:{addDecoration:S,removeDecoration:S},raw:{getModel:N(M.none())}}})(),M.some((()=>e().then((e=>(t.rtcInstance=(e=>{const t=e=>f(e)?e:{},{init:n,undoManager:o,formatter:r,editor:s,selection:a,autocompleter:i,raw:l}=e;return{init:{bindEvents:n.bindEvents},undoManager:{beforeChange:o.beforeChange,add:o.add,undo:o.undo,redo:o.redo,clear:o.clear,reset:o.reset,hasUndo:o.hasUndo,hasRedo:o.hasRedo,transact:(e,t,n)=>o.transact(n),ignore:(e,t)=>o.ignore(t),extra:(e,t,n,r)=>o.extra(n,r)},formatter:{match:(e,n,o,s)=>r.match(e,t(n),s),matchAll:r.matchAll,matchNode:r.matchNode,canApply:e=>r.canApply(e),closest:e=>r.closest(e),apply:(e,n,o)=>r.apply(e,t(n)),remove:(e,n,o,s)=>r.remove(e,t(n)),toggle:(e,n,o)=>r.toggle(e,t(n)),formatChanged:(e,t,n,o,s)=>r.formatChanged(t,n,o,s)},editor:{getContent:e=>s.getContent(e),setContent:(e,t)=>({content:s.setContent(e,t),html:""}),insertContent:(e,t)=>(s.insertContent(e),""),addVisual:s.addVisual},selection:{getContent:(e,t)=>a.getContent(t)},autocompleter:{addDecoration:i.addDecoration,removeDecoration:i.removeDecoration},raw:{getModel:()=>M.some(l.getRawModel())}}})(e),e.rtc.isRemote))))))))})(e);(e=>{const t=e.getDoc(),n=e.getBody();(e=>{e.dispatch("PreInit")})(e),ed(e)||(t.body.spellcheck=!1,wN.setAttrib(n,"spellcheck","false")),e.quirks=CN(e),(e=>{e.dispatch("PostRender")})(e);const o=vl(e);void 0!==o&&(n.dir=o);const r=td(e);r&&e.on("BeforeSetContent",(e=>{Bt.each(r,(t=>{e.content=e.content.replace(t,(e=>"\x3c!--mce:protected "+escape(e)+"--\x3e"))}))})),e.on("SetContent",(()=>{e.addVisual(e.getBody())})),e.on("compositionstart compositionend",(t=>{e.composing="compositionstart"===t.type}))})(e),s.fold((()=>{NN(e).then((()=>RN(e)))}),(t=>{e.setProgressState(!0),NN(e).then((()=>{t().then((t=>{e.setProgressState(!1),RN(e),my(e)}),(t=>{e.notificationManager.open({type:"error",text:String(t)}),RN(e),my(e)}))}))}))},ON=(e,t)=>{if(e.inline||(e.getElement().style.visibility=e.orgVisibility),t||e.inline)AN(e);else{const t=e.iframeElement,o=(n=fn(t),ao(n,"load",Wy,(()=>{o.unbind(),e.contentDocument=t.contentDocument,AN(e)})));if(Nt.browser.isFirefox()){const t=e.getDoc();t.open(),t.write(e.iframeHTML),t.close()}else t.srcdoc=e.iframeHTML}var n},TN=Qs.DOM,BN=Qs.DOM,DN=e=>({editorContainer:e,iframeContainer:e,api:{}}),PN=e=>{const t=e.getElement();return e.orgDisplay=t.style.display,m(_l(e))?(e=>e.theme.renderUI())(e):w(_l(e))?(e=>{const t=e.getElement(),n=_l(e)(e,t);return n.editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||e.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||e.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:t.offsetHeight,n})(e):(e=>{const t=e.getElement();return e.inline?DN(null):(e=>{const t=BN.create("div");return BN.insertAfter(t,e),DN(t)})(t)})(e)},LN=e=>{e.dispatch("ScriptsLoaded"),(e=>{const t=Bt.trim(ol(e)),n=e.ui.registry.getAll().icons,o={...Ry.get("default").icons,...Ry.get(t).icons};fe(o,((t,o)=>{xe(n,o)||e.ui.registry.addIcon(o,t)}))})(e),(e=>{const t=_l(e);if(m(t)){const n=Fy.get(t);e.theme=n(e,Fy.urls[t])||{},w(e.theme.init)&&e.theme.init(e,Fy.urls[t]||e.documentBaseUrl.replace(/\/$/,""))}else e.theme={}})(e),(e=>{const t=Nl(e),n=Ay.get(t);e.model=n(e,Ay.urls[t])})(e),(e=>{const t=[];$(Hl(e),(n=>{((e,t,n)=>{const o=Iy.get(n),r=Iy.urls[n]||e.documentBaseUrl.replace(/\/$/,"");if(n=Bt.trim(n),o&&-1===Bt.inArray(t,n)){if(e.plugins[n])return;try{const s=o(e,r)||{};e.plugins[n]=s,w(s.init)&&(s.init(e,r),t.push(n))}catch(t){((e,t,n)=>{const o=ra.translate(["Failed to initialize plugin: {0}",t]);Qu(e,"PluginLoadError",{message:o}),$y(o,n),jy(e,o)})(e,n,t)}}})(e,t,(e=>e.replace(/^\-/,""))(n))}))})(e);const t=PN(e);((e,t)=>{const n={show:M.from(t.show).getOr(S),hide:M.from(t.hide).getOr(S),isEnabled:M.from(t.isEnabled).getOr(L),setEnabled:n=>{e.mode.isReadOnly()||M.from(t.setEnabled).each((e=>e(n)))}};e.ui={...e.ui,...n}})(e,M.from(t.api).getOr({}));const n={editorContainer:t.editorContainer,iframeContainer:t.iframeContainer};return e.editorContainer=n.editorContainer?n.editorContainer:null,(e=>{e.contentCSS=e.contentCSS.concat((e=>qy(e,pl(e)))(e),(e=>qy(e,bl(e)))(e))})(e),e.inline?ON(e):((e,t)=>{((e,t)=>{const n=e.translate("Rich Text Area"),o=Gt(fn(e.getElement()),"tabindex").bind(Ge),r=((e,t,n,o)=>{const r=un("iframe");return o.each((e=>qt(r,"tabindex",e))),Wt(r,n),Wt(r,{id:e+"_ifr",frameBorder:"0",allowTransparency:"true",title:t}),on(r,"tox-edit-area__iframe"),r})(e.id,n,zi(e),o).dom;r.onload=()=>{r.onload=null,e.dispatch("load")},e.contentAreaContainer=t.iframeContainer,e.iframeElement=r,e.iframeHTML=(e=>{let t=ji(e)+"<html><head>";Vi(e)!==e.documentBaseUrl&&(t+='<base href="'+e.documentBaseURI.getURI()+'" />'),t+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';const n=Hi(e),o=$i(e),r=e.translate(Yl(e));return qi(e)&&(t+='<meta http-equiv="Content-Security-Policy" content="'+qi(e)+'" />'),t+=`</head><body id="${n}" class="mce-content-body ${o}" data-id="${e.id}" aria-label="${r}"><br></body></html>`,t})(e),TN.add(t.iframeContainer,r)})(e,t),t.editorContainer&&(TN.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=TN.isHidden(t.editorContainer)),e.getElement().style.display="none",TN.setAttrib(e.id,"aria-hidden","true"),ON(e)})(e,n)},MN=Qs.DOM,IN=e=>"-"===e.charAt(0),FN=(e,t,n)=>M.from(t).filter((e=>We(e)&&!Ry.has(e))).map((t=>({url:`${e.editorManager.baseURL}/icons/${t}/icons${n}.js`,name:M.some(t)}))),UN=(e,t)=>{const n=Zs.ScriptLoader,o=()=>{!e.removed&&(e=>{const t=_l(e);return!m(t)||C(Fy.get(t))})(e)&&(e=>{const t=Nl(e);return C(Ay.get(t))})(e)&&LN(e)};((e,t)=>{const n=_l(e);if(m(n)&&!IN(n)&&!xe(Fy.urls,n)){const o=El(e),r=o?e.documentBaseURI.toAbsolute(o):`themes/${n}/theme${t}.js`;Fy.load(n,r).catch((()=>{((e,t,n)=>{Vy(e,"ThemeLoadError",Hy("theme",t,n))})(e,r,n)}))}})(e,t),((e,t)=>{const n=Nl(e);if("plugin"!==n&&!xe(Ay.urls,n)){const o=Rl(e),r=m(o)?e.documentBaseURI.toAbsolute(o):`models/${n}/model${t}.js`;Ay.load(n,r).catch((()=>{((e,t,n)=>{Vy(e,"ModelLoadError",Hy("model",t,n))})(e,r,n)}))}})(e,t),((e,t)=>{const n=ul(t),o=ml(t);if(!1===ra.hasCode(n)&&"en"!==n){const r=We(o)?o:`${t.editorManager.baseURL}/langs/${n}.js`;e.add(r).catch((()=>{((e,t,n)=>{Vy(e,"LanguageLoadError",Hy("language",t,n))})(t,r,n)}))}})(n,e),((e,t,n)=>{const o=FN(t,"default",n),r=(e=>M.from(rl(e)).filter(We).map((e=>({url:e,name:M.none()}))))(t).orThunk((()=>FN(t,ol(t),"")));$((e=>{const t=[],n=e=>{t.push(e)};for(let t=0;t<e.length;t++)e[t].each(n);return t})([o,r]),(n=>{e.add(n.url).catch((()=>{((e,t,n)=>{Vy(e,"IconsLoadError",Hy("icons",t,n))})(t,n.url,n.name.getOrUndefined())}))}))})(n,e,t),((e,t)=>{const n=(t,n)=>{Iy.load(t,n).catch((()=>{((e,t,n)=>{Vy(e,"PluginLoadError",Hy("plugin",t,n))})(e,n,t)}))};fe($l(e),((t,o)=>{n(o,t),e.options.set("plugins",Hl(e).concat(o))})),$(Hl(e),(e=>{!(e=Bt.trim(e))||Iy.urls[e]||IN(e)||n(e,`plugins/${e}/plugin${t}.js`)}))})(e,t),n.loadQueue().then(o,o)},zN=Ct().deviceType,jN=zN.isPhone(),VN=zN.isTablet(),HN=e=>{if(y(e))return[];{const t=p(e)?e:e.split(/[ ,]/),n=H(t,He);return K(n,We)}},$N=(e,t)=>{const n=((t,n)=>{const o={},r={};return be(t,((t,n)=>j(e,n)),he(o),he(r)),{t:o,f:r}})(t);return o=n.t,r=n.f,{sections:N(o),options:N(r)};var o,r},qN=(e,t)=>xe(e.sections(),t),WN=(e,t)=>({table_grid:!1,object_resizing:!1,resize:!1,toolbar_mode:we(e,"toolbar_mode").getOr("scrolling"),toolbar_sticky:!1,...t?{menubar:!1}:{}}),KN=(e,t)=>{var n;const o=null!==(n=t.external_plugins)&&void 0!==n?n:{};return e&&e.external_plugins?Bt.extend({},e.external_plugins,o):o},GN=(e,t,n,o,r)=>{var s;const a=e?{mobile:WN(null!==(s=r.mobile)&&void 0!==s?s:{},t)}:{},i=$N(["mobile"],Xk(a,r)),l=Bt.extend(n,o,i.options(),((e,t)=>e&&qN(t,"mobile"))(e,i)?((e,t,n={})=>{const o=e.sections(),r=we(o,t).getOr({});return Bt.extend({},n,r)})(i,"mobile"):{},{external_plugins:KN(o,i.options())});return((e,t,n,o)=>{const r=HN(n.forced_plugins),s=HN(o.plugins),a=((e,t)=>qN(e,t)?e.sections()[t]:{})(t,"mobile"),i=((e,t,n,o)=>e&&qN(t,"mobile")?o:n)(e,t,s,a.plugins?HN(a.plugins):s),l=((e,t)=>[].concat(HN(e)).concat(HN(t)))(r,i);return Bt.extend(o,{forced_plugins:r,plugins:l})})(e,i,o,l)},YN=e=>{(e=>{const t=t=>()=>{$("left,center,right,justify".split(","),(n=>{t!==n&&e.formatter.remove("align"+n)})),"none"!==t&&((t,n)=>{e.formatter.toggle(t,void 0),e.nodeChanged()})("align"+t)};e.editorCommands.addCommands({JustifyLeft:t("left"),JustifyCenter:t("center"),JustifyRight:t("right"),JustifyFull:t("justify"),JustifyNone:t("none")})})(e),(e=>{const t=t=>()=>{const n=e.selection,o=n.isCollapsed()?[e.dom.getParent(n.getNode(),e.dom.isBlock)]:n.getSelectedBlocks();return V(o,(n=>C(e.formatter.matchNode(n,t))))};e.editorCommands.addCommands({JustifyLeft:t("alignleft"),JustifyCenter:t("aligncenter"),JustifyRight:t("alignright"),JustifyFull:t("alignjustify")},"state")})(e)},XN=(e,t)=>{const n=e.selection,o=e.dom;return/^ | $/.test(t)?((e,t,n)=>{const o=fn(e.getRoot());return n=Ig(o,ti.fromRangeStart(t))?n.replace(/^ /,"&nbsp;"):n.replace(/^&nbsp;/," "),Fg(o,ti.fromRangeEnd(t))?n.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):n.replace(/&nbsp;(<br( \/)?>)?$/," ")})(o,n.getRng(),t):t},QN=(e,t)=>{const{content:n,details:o}=(e=>{if("string"!=typeof e){const t=Bt.extend({paste:e.paste,data:{paste:e.paste}},e);return{content:e.content,details:t}}return{content:e,details:{}}})(t);Pv(e,{content:XN(e,n),format:"html",set:!1,selection:!0,paste:o.paste}).each((t=>{const n=((e,t,n)=>cy(e).editor.insertContent(t,n))(e,t.content,o);Lv(e,n,t),e.addVisual()}))},JN={"font-size":"size","font-family":"face"},ZN=e=>(t,n)=>M.from(n).map(fn).filter(Ut).bind((n=>((e,t,n)=>lh(fn(n),(t=>(t=>Kn(t,e).orThunk((()=>"font"===Mt(t)?we(JN,e).bind((e=>Gt(t,e))):M.none())))(t)),(e=>vn(fn(t),e))))(e,t,n.dom).or(((e,t)=>M.from(Qs.DOM.getStyle(t,e,!0)))(e,n.dom)))).getOr(""),eR=ZN("font-size"),tR=_((e=>e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")),ZN("font-family")),nR=e=>Rc(e.getBody()).map((e=>{const t=e.container();return Ro(t)?t.parentNode:t})),oR=(e,t)=>((e,t)=>(e=>M.from(e.selection.getRng()).bind((t=>{const n=e.getBody();return t.startContainer===n&&0===t.startOffset?M.none():M.from(e.selection.getStart(!0))})))(e).orThunk(O(nR,e)).map(fn).filter(Ut).bind(t))(e,E(M.some,t)),rR=(e,t)=>{if(/^[0-9.]+$/.test(t)){const n=parseInt(t,10);if(n>=1&&n<=7){const o=(e=>Bt.explode(e.options.get("font_size_style_values")))(e),r=(e=>Bt.explode(e.options.get("font_size_classes")))(e);return r?r[n-1]||t:o[n-1]||t}return t}return t},sR=e=>{const t=e.split(/\s*,\s*/);return H(t,(e=>-1===e.indexOf(" ")||ze(e,'"')||ze(e,"'")?e:`'${e}'`)).join(",")},aR=e=>{YN(e),(e=>{e.editorCommands.addCommands({"Cut,Copy,Paste":t=>{const n=e.getDoc();let o;try{n.execCommand(t)}catch(e){o=!0}if("paste"!==t||n.queryCommandEnabled(t)||(o=!0),o||!n.queryCommandSupported(t)){let t=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");(Nt.os.isMacOS()||Nt.os.isiOS())&&(t=t.replace(/Ctrl\+/g,"\u2318+")),e.notificationManager.open({text:t,type:"error"})}}})})(e),(e=>{e.editorCommands.addCommands({mceAddUndoLevel:()=>{e.undoManager.add()},mceEndUndoLevel:()=>{e.undoManager.add()},Undo:()=>{e.undoManager.undo()},Redo:()=>{e.undoManager.redo()}})})(e),(e=>{e.editorCommands.addCommands({mceSelectNodeDepth:(t,n,o)=>{let r=0;e.dom.getParent(e.selection.getNode(),(t=>{if(1===t.nodeType&&r++===o)return e.selection.select(t),!1}),e.getBody())},mceSelectNode:(t,n,o)=>{e.selection.select(o)},selectAll:()=>{const t=e.dom.getParent(e.selection.getStart(),Mo);if(t){const n=e.dom.createRng();n.selectNodeContents(t),e.selection.setRng(n)}}})})(e),(e=>{e.editorCommands.addCommands({mceCleanup:()=>{const t=e.selection.getBookmark();e.setContent(e.getContent()),e.selection.moveToBookmark(t)},insertImage:(t,n,o)=>{QN(e,e.dom.createHTML("img",{src:o}))},insertHorizontalRule:()=>{e.execCommand("mceInsertContent",!1,"<hr>")},insertText:(t,n,o)=>{QN(e,e.dom.encode(o))},insertHTML:(t,n,o)=>{QN(e,o)},mceInsertContent:(t,n,o)=>{QN(e,o)},mceSetContent:(t,n,o)=>{e.setContent(o)},mceReplaceContent:(t,n,o)=>{e.execCommand("mceInsertContent",!1,o.replace(/\{\$selection\}/g,e.selection.getContent({format:"text"})))},mceNewDocument:()=>{e.setContent("")}})})(e),(e=>{const t=(t,n,o)=>{const r=m(o)?{href:o}:o,s=e.dom.getParent(e.selection.getNode(),"a");f(r)&&m(r.href)&&(r.href=r.href.replace(/ /g,"%20"),s&&r.href||e.formatter.remove("link"),r.href&&e.formatter.apply("link",r,s))};e.editorCommands.addCommands({unlink:()=>{if(e.selection.isCollapsed()){const t=e.dom.getParent(e.selection.getStart(),"a");t&&e.dom.remove(t,!0)}else e.formatter.remove("link")},mceInsertLink:t,createLink:t})})(e),(e=>{e.editorCommands.addCommands({Indent:()=>{(e=>{Sx(e,"indent")})(e)},Outdent:()=>{_x(e)}}),e.editorCommands.addCommands({Outdent:()=>wx(e)},"state")})(e),(e=>{e.editorCommands.addCommands({insertParagraph:()=>{B_(m_,e)},mceInsertNewLine:(t,n,o)=>{D_(e,o)},InsertLineBreak:(t,n,o)=>{B_(C_,e)}})})(e),(e=>{(e=>{e.editorCommands.addCommands({"InsertUnorderedList,InsertOrderedList":t=>{e.getDoc().execCommand(t);const n=e.dom.getParent(e.selection.getNode(),"ol,ul");if(n){const t=n.parentNode;if(/^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName)){const o=e.selection.getBookmark();e.dom.split(t,n),e.selection.moveToBookmark(o)}}}})})(e),(e=>{e.editorCommands.addCommands({"InsertUnorderedList,InsertOrderedList":t=>{const n=e.dom.getParent(e.selection.getNode(),"ul,ol");return n&&("insertunorderedlist"===t&&"UL"===n.tagName||"insertorderedlist"===t&&"OL"===n.tagName)}},"state")})(e)})(e),(e=>{(e=>{const t=(t,n)=>{e.formatter.toggle(t,n),e.nodeChanged()};e.editorCommands.addCommands({"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":e=>{t(e)},"ForeColor,HiliteColor":(e,n,o)=>{t(e,{value:o})},BackColor:(e,n,o)=>{t("hilitecolor",{value:o})},FontName:(t,n,o)=>{((e,t)=>{const n=rR(e,t);e.formatter.toggle("fontname",{value:sR(n)}),e.nodeChanged()})(e,o)},FontSize:(t,n,o)=>{((e,t)=>{e.formatter.toggle("fontsize",{value:rR(e,t)}),e.nodeChanged()})(e,o)},LineHeight:(t,n,o)=>{((e,t)=>{e.formatter.toggle("lineheight",{value:String(t)}),e.nodeChanged()})(e,o)},Lang:(e,n,o)=>{t(e,{value:o.code,customValue:o.customCode})},RemoveFormat:t=>{e.formatter.remove(t)},mceBlockQuote:()=>{t("blockquote")},FormatBlock:(e,n,o)=>{t(m(o)?o:"p")},mceToggleFormat:(e,n,o)=>{t(o)}})})(e),(e=>{const t=t=>e.formatter.match(t);e.editorCommands.addCommands({"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":e=>t(e),mceBlockQuote:()=>t("blockquote")},"state"),e.editorCommands.addQueryValueHandler("FontName",(()=>(e=>oR(e,(t=>tR(e.getBody(),t.dom))).getOr(""))(e))),e.editorCommands.addQueryValueHandler("FontSize",(()=>(e=>oR(e,(t=>eR(e.getBody(),t.dom))).getOr(""))(e))),e.editorCommands.addQueryValueHandler("LineHeight",(()=>(e=>oR(e,(t=>{const n=fn(e.getBody()),o=lh(t,(e=>Kn(e,"line-height")),O(vn,n));return o.getOrThunk((()=>{const e=parseFloat(qn(t,"line-height")),n=parseFloat(qn(t,"font-size"));return String(e/n)}))})).getOr(""))(e)))})(e)})(e),(e=>{e.editorCommands.addCommands({mceRemoveNode:(t,n,o)=>{const r=null!=o?o:e.selection.getNode();if(r!==e.getBody()){const t=e.selection.getBookmark();e.dom.remove(r,!0),e.selection.moveToBookmark(t)}},mcePrint:()=>{e.getWin().print()},mceFocus:(t,n,o)=>{((e,t)=>{e.removed||(t?Ef(e):(e=>{const t=e.selection,n=e.getBody();let o=t.getRng();e.quirks.refreshContentEditable(),void 0!==e.bookmark&&!1===_f(e)&&pf(e).each((t=>{e.selection.setRng(t),o=t}));const r=((e,t)=>e.dom.getParent(t,(t=>"true"===e.dom.getContentEditable(t))))(e,t.getNode());if(e.dom.isChildOf(r,n))return Sf(r),kf(e,o),void Ef(e);e.inline||(Nt.browser.isOpera()||Sf(n),e.getWin().focus()),(Nt.browser.isFirefox()||e.inline)&&(Sf(n),kf(e,o)),Ef(e)})(e))})(e,o)},mceToggleVisualAid:()=>{e.hasVisual=!e.hasVisual,e.addVisual()}})})(e)};class iR{constructor(e){this.commands={state:{},exec:{},value:{}},this.editor=e}execCommand(e,t,n,o){const r=this.editor,s=e.toLowerCase(),a=null==o?void 0:o.skip_focus;if(r.removed)return!1;if("mcefocus"!==s&&(/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s)||a?(e=>{pf(e).each((t=>e.selection.setRng(t)))})(r):r.focus()),r.dispatch("BeforeExecCommand",{command:e,ui:t,value:n}).isDefaultPrevented())return!1;const i=this.commands.exec[s];return!!w(i)&&(i(s,t,n),r.dispatch("ExecCommand",{command:e,ui:t,value:n}),!0)}queryCommandState(e){if(this.editor.quirks.isHidden()||this.editor.removed)return!1;const t=e.toLowerCase(),n=this.commands.state[t];return!!w(n)&&n(t)}queryCommandValue(e){if(this.editor.quirks.isHidden()||this.editor.removed)return"";const t=e.toLowerCase(),n=this.commands.value[t];return w(n)?n(t):""}addCommands(e,t="exec"){const n=this.commands;fe(e,((e,o)=>{$(o.toLowerCase().split(","),(o=>{n[t][o]=e}))}))}addCommand(e,t,n){const o=e.toLowerCase();this.commands.exec[o]=(e,o,r)=>t.call(null!=n?n:this.editor,o,r)}queryCommandSupported(e){const t=e.toLowerCase();return!!this.commands.exec[t]}addQueryStateHandler(e,t,n){this.commands.state[e.toLowerCase()]=()=>t.call(null!=n?n:this.editor)}addQueryValueHandler(e,t,n){this.commands.value[e.toLowerCase()]=()=>t.call(null!=n?n:this.editor)}}const lR="data-mce-contenteditable",dR=(e,t,n)=>{try{e.getDoc().execCommand(t,!1,String(n))}catch(e){}},cR=(e,t)=>{e.dom.contentEditable=t?"true":"false"},uR=(e,t)=>{const n=fn(e.getBody());((e,t,n)=>{an(e,t)&&!1===n?sn(e,t):n&&on(e,t)})(n,"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e._selectionOverrides.hideFakeCaret(),(e=>{M.from(e.selection.getNode()).each((e=>{e.removeAttribute("data-mce-selected")}))})(e),e.readonly=!0,cR(n,!1),$(hr(n,'*[contenteditable="true"]'),(e=>{qt(e,lR,"true"),cR(e,!1)}))):(e.readonly=!1,cR(n,!0),$(hr(n,'*[data-mce-contenteditable="true"]'),(e=>{Xt(e,lR),cR(e,!0)})),dR(e,"StyleWithCSS",!1),dR(e,"enableInlineTableEditing",!1),dR(e,"enableObjectResizing",!1),(e=>_f(e)||(e=>{const t=Mn(fn(e.getElement()));return af(t).filter((t=>!(e=>{const t=e.classList;return void 0!==t&&(t.contains("tox-edit-area")||t.contains("tox-edit-area__iframe")||t.contains("mce-content-body"))})(t.dom)&&Cf(e,t.dom))).isSome()})(e))(e)&&e.focus(),(e=>{e.selection.setRng(e.selection.getRng())})(e),e.nodeChanged())},mR=e=>e.readonly,fR=e=>{e.parser.addAttributeFilter("contenteditable",(t=>{mR(e)&&$(t,(e=>{e.attr(lR,e.attr("contenteditable")),e.attr("contenteditable","false")}))})),e.serializer.addAttributeFilter(lR,(t=>{mR(e)&&$(t,(e=>{e.attr("contenteditable",e.attr(lR))}))})),e.serializer.addTempAttr(lR)},gR=["copy"],pR=Bt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," ");class hR{constructor(e){this.bindings={},this.settings=e||{},this.scope=this.settings.scope||this,this.toggleEvent=this.settings.toggleEvent||P}static isNative(e){return!!pR[e.toLowerCase()]}fire(e,t){return this.dispatch(e,t)}dispatch(e,t){const n=e.toLowerCase(),o=Ms(n,null!=t?t:{},this.scope);this.settings.beforeFire&&this.settings.beforeFire(o);const r=this.bindings[n];if(r)for(let e=0,t=r.length;e<t;e++){const t=r[e];if(!t.removed){if(t.once&&this.off(n,t.func),o.isImmediatePropagationStopped())return o;if(!1===t.func.call(this.scope,o))return o.preventDefault(),o}}return o}on(e,t,n,o){if(!1===t&&(t=P),t){const r={func:t,removed:!1};o&&Bt.extend(r,o);const s=e.toLowerCase().split(" ");let a=s.length;for(;a--;){const e=s[a];let t=this.bindings[e];t||(t=[],this.toggleEvent(e,!0)),t=n?[r,...t]:[...t,r],this.bindings[e]=t}}return this}off(e,t){if(e){const n=e.toLowerCase().split(" ");let o=n.length;for(;o--;){const r=n[o];let s=this.bindings[r];if(!r)return fe(this.bindings,((e,t)=>{this.toggleEvent(t,!1),delete this.bindings[t]})),this;if(s){if(t){const e=W(s,(e=>e.func===t));s=e.fail,this.bindings[r]=s,$(e.pass,(e=>{e.removed=!0}))}else s.length=0;s.length||(this.toggleEvent(e,!1),delete this.bindings[r])}}}else fe(this.bindings,((e,t)=>{this.toggleEvent(t,!1)})),this.bindings={};return this}once(e,t,n){return this.on(e,t,n,{once:!0})}has(e){return e=e.toLowerCase(),!(!this.bindings[e]||0===this.bindings[e].length)}}const bR=e=>(e._eventDispatcher||(e._eventDispatcher=new hR({scope:e,toggleEvent:(t,n)=>{hR.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,n)}})),e._eventDispatcher),vR={fire(e,t,n){return this.dispatch(e,t,n)},dispatch(e,t,n){const o=this;if(o.removed&&"remove"!==e&&"detach"!==e)return Ms(e.toLowerCase(),null!=t?t:{},o);const r=bR(o).dispatch(e,t);if(!1!==n&&o.parent){let t=o.parent();for(;t&&!r.isPropagationStopped();)t.dispatch(e,r,!1),t=t.parent()}return r},on(e,t,n){return bR(this).on(e,t,n)},off(e,t){return bR(this).off(e,t)},once(e,t){return bR(this).once(e,t)},hasEventListeners(e){return bR(this).has(e)}},yR=Qs.DOM;let CR;const wR=(e,t)=>{if("selectionchange"===t)return e.getDoc();if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement;const n=kl(e);return n?(e.eventRoot||(e.eventRoot=yR.select(n)[0]),e.eventRoot):e.getBody()},xR=(e,t,n)=>{(e=>!e.hidden&&!mR(e))(e)?e.dispatch(t,n):mR(e)&&((e,t)=>{if((e=>"click"===e.type)(t)&&!om.metaKeyPressed(t)){const n=fn(t.target);((e,t)=>Go(t,"a",(t=>vn(t,fn(e.getBody())))).bind((e=>Gt(e,"href"))))(e,n).each((n=>{if(t.preventDefault(),/^#/.test(n)){const t=e.dom.select(`${n},[name="${o=n,ze(o,"#")?((e,t)=>e.substring(t))(o,"#".length):o}"]`);t.length&&e.selection.scrollIntoView(t[0],!0)}else window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");var o}))}else(e=>j(gR,e.type))(t)&&e.dispatch(t.type,t)})(e,n)},kR=(e,t)=>{let n;if(e.delegates||(e.delegates={}),e.delegates[t]||e.removed)return;const o=wR(e,t);if(kl(e)){if(CR||(CR={},e.editorManager.on("removeEditor",(()=>{e.editorManager.activeEditor||CR&&(fe(CR,((t,n)=>{e.dom.unbind(wR(e,n))})),CR=null)}))),CR[t])return;n=n=>{const o=n.target,r=e.editorManager.get();let s=r.length;for(;s--;){const e=r[s].getBody();(e===o||yR.isChildOf(o,e))&&xR(r[s],t,n)}},CR[t]=n,yR.bind(o,t,n)}else n=n=>{xR(e,t,n)},yR.bind(o,t,n),e.delegates[t]=n},SR={...vR,bindPendingEventDelegates(){const e=this;Bt.each(e._pendingNativeEvents,(t=>{kR(e,t)}))},toggleNativeEvent(e,t){const n=this;"focus"!==e&&"blur"!==e&&(n.removed||(t?n.initialized?kR(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(wR(n,e),e,n.delegates[e]),delete n.delegates[e])))},unbindAllNativeEvents(){const e=this,t=e.getBody(),n=e.dom;e.delegates&&(fe(e.delegates,((t,n)=>{e.dom.unbind(wR(e,n),n,t)})),delete e.delegates),!e.inline&&t&&n&&(t.onload=null,n.unbind(e.getWin()),n.unbind(e.getDoc())),n&&(n.unbind(t),n.unbind(e.getContainer()))}},_R=e=>m(e)?{value:e.split(/[ ,]/),valid:!0}:k(e,m)?{value:e,valid:!0}:{valid:!1,message:"The value must be a string[] or a comma/space separated string."},ER=(e,t)=>e+(Ke(t.message)?"":`. ${t.message}`),NR=e=>e.valid,RR=(e,t,n="")=>{const o=t(e);return b(o)?o?{value:e,valid:!0}:{valid:!1,message:n}:o},AR=["design","readonly"],OR=(e,t,n,o)=>{const r=n[t.get()],s=n[o];try{s.activate()}catch(e){return void console.error(`problem while activating editor mode ${o}:`,e)}r.deactivate(),r.editorReadOnly!==s.editorReadOnly&&uR(e,s.editorReadOnly),t.set(o),((e,t)=>{e.dispatch("SwitchMode",{mode:t})})(e,o)},TR=Bt.each,BR=Bt.explode,DR={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},PR=Bt.makeMap("alt,ctrl,shift,meta,access"),LR=e=>{let t;const n={},o=Nt.os.isMacOS()||Nt.os.isiOS();TR(BR(e.toLowerCase(),"+"),(e=>{e in PR?n[e]=!0:/^[0-9]{2,}$/.test(e)?n.keyCode=parseInt(e,10):(n.charCode=e.charCodeAt(0),n.keyCode=DR[e]||e.toUpperCase().charCodeAt(0))}));const r=[n.keyCode];for(t in PR)n[t]?r.push(t):n[t]=!1;return n.id=r.join(","),n.access&&(n.alt=!0,o?n.ctrl=!0:n.shift=!0),n.meta&&(o?n.meta=!0:(n.ctrl=!0,n.meta=!1)),n};class MR{constructor(e){this.shortcuts={},this.pendingPatterns=[],this.editor=e;const t=this;e.on("keyup keypress keydown",(e=>{!t.hasModifier(e)&&!t.isFunctionKey(e)||e.isDefaultPrevented()||(TR(t.shortcuts,(n=>{if(t.matchShortcut(e,n))return t.pendingPatterns=n.subpatterns.slice(0),"keydown"===e.type&&t.executeShortcutAction(n),!0})),t.matchShortcut(e,t.pendingPatterns[0])&&(1===t.pendingPatterns.length&&"keydown"===e.type&&t.executeShortcutAction(t.pendingPatterns[0]),t.pendingPatterns.shift()))}))}add(e,t,n,o){const r=this,s=r.normalizeCommandFunc(n);return TR(BR(Bt.trim(e)),(e=>{const n=r.createShortcut(e,t,s,o);r.shortcuts[n.id]=n})),!0}remove(e){const t=this.createShortcut(e);return!!this.shortcuts[t.id]&&(delete this.shortcuts[t.id],!0)}normalizeCommandFunc(e){const t=this,n=e;return"string"==typeof n?()=>{t.editor.execCommand(n,!1,null)}:Bt.isArray(n)?()=>{t.editor.execCommand(n[0],n[1],n[2])}:n}createShortcut(e,t,n,o){const r=Bt.map(BR(e,">"),LR);return r[r.length-1]=Bt.extend(r[r.length-1],{func:n,scope:o||this.editor}),Bt.extend(r[0],{desc:this.editor.translate(t),subpatterns:r.slice(1)})}hasModifier(e){return e.altKey||e.ctrlKey||e.metaKey}isFunctionKey(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123}matchShortcut(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)}executeShortcutAction(e){return e.func?e.func.call(e.scope):null}}const IR=()=>{const e=(()=>{const e={},t={},n={},o={},r={},s={},a={},i=(e,t)=>(n,o)=>e[n.toLowerCase()]={...o,type:t};return{addButton:i(e,"button"),addGroupToolbarButton:i(e,"grouptoolbarbutton"),addToggleButton:i(e,"togglebutton"),addMenuButton:i(e,"menubutton"),addSplitButton:i(e,"splitbutton"),addMenuItem:i(t,"menuitem"),addNestedMenuItem:i(t,"nestedmenuitem"),addToggleMenuItem:i(t,"togglemenuitem"),addAutocompleter:i(n,"autocompleter"),addContextMenu:i(r,"contextmenu"),addContextToolbar:i(s,"contexttoolbar"),addContextForm:i(s,"contextform"),addSidebar:i(a,"sidebar"),addIcon:(e,t)=>o[e.toLowerCase()]=t,getAll:()=>({buttons:e,menuItems:t,icons:o,popups:n,contextMenus:r,contextToolbars:s,sidebars:a})}})();return{addAutocompleter:e.addAutocompleter,addButton:e.addButton,addContextForm:e.addContextForm,addContextMenu:e.addContextMenu,addContextToolbar:e.addContextToolbar,addIcon:e.addIcon,addMenuButton:e.addMenuButton,addMenuItem:e.addMenuItem,addNestedMenuItem:e.addNestedMenuItem,addSidebar:e.addSidebar,addSplitButton:e.addSplitButton,addToggleButton:e.addToggleButton,addGroupToolbarButton:e.addGroupToolbarButton,addToggleMenuItem:e.addToggleMenuItem,getAll:e.getAll}},FR=Qs.DOM,UR=Bt.extend,zR=Bt.each;class jR{constructor(e,t,n){this.plugins={},this.contentCSS=[],this.contentStyles=[],this.loadedCSS={},this.isNotDirty=!1,this.editorManager=n,this.documentBaseUrl=n.documentBaseURL,UR(this,SR);const o=this;this.id=e,this.hidden=!1;const r=((e,t)=>GN(jN||VN,jN,t,e,t))(n.defaultOptions,t);this.options=((e,t)=>{const n={},o={},r=(e,t,n)=>{const r=RR(t,n);return NR(r)?(o[e]=r.value,!0):(console.warn(ER(`Invalid value passed for the ${e} option`,r)),!1)},s=e=>xe(n,e);return{register:(e,s)=>{const a=(e=>m(e.processor))(s)?(e=>{const t=(()=>{switch(e){case"array":return p;case"boolean":return b;case"function":return w;case"number":return x;case"object":return f;case"string":return m;case"string[]":return _R;case"object[]":return e=>k(e,f);case"regexp":return e=>u(e,RegExp)}})();return n=>RR(n,t,`The value must be a ${e}.`)})(s.processor):s.processor,i=((e,t,n)=>{if(!v(t)){const o=RR(t,n);if(NR(o))return o.value;console.error(ER(`Invalid default value passed for the "${e}" option`,o))}})(e,s.default,a);n[e]={...s,default:i,processor:a},we(o,e).orThunk((()=>we(t,e))).each((t=>r(e,t,a)))},isRegistered:s,get:e=>we(o,e).orThunk((()=>we(n,e).map((e=>e.default)))).getOrUndefined(),set:(e,t)=>{if(s(e)){const o=n[e];return o.immutable?(console.error(`"${e}" is an immutable option and cannot be updated`),!1):r(e,t,o.processor)}return console.warn(`"${e}" is not a registered option. Ensure the option has been registered before setting a value.`),!1},unset:e=>{const t=s(e);return t&&delete o[e],t},isSet:e=>xe(o,e)}})(0,r),(e=>{const t=e.options.register;t("id",{processor:"string",default:e.id}),t("selector",{processor:"string"}),t("target",{processor:"object"}),t("suffix",{processor:"string"}),t("cache_suffix",{processor:"string"}),t("base_url",{processor:"string"}),t("referrer_policy",{processor:"string",default:""}),t("language_load",{processor:"boolean"}),t("inline",{processor:"boolean",default:!1}),t("iframe_attrs",{processor:"object",default:{}}),t("doctype",{processor:"string",default:"<!DOCTYPE html>"}),t("document_base_url",{processor:"string",default:e.documentBaseUrl}),t("body_id",{processor:Ui(e,"tinymce"),default:"tinymce"}),t("body_class",{processor:Ui(e),default:""}),t("content_security_policy",{processor:"string",default:""}),t("br_in_pre",{processor:"boolean",default:!0}),t("forced_root_block",{processor:e=>{const t=m(e)&&We(e);return t?{value:e,valid:t}:{valid:!1,message:"Must be a non-empty string."}},default:"p"}),t("forced_root_block_attrs",{processor:"object",default:{}}),t("newline_behavior",{processor:e=>{const t=j(["block","linebreak","invert","default"],e);return t?{value:e,valid:t}:{valid:!1,message:"Must be one of: block, linebreak, invert or default."}},default:"default"}),t("br_newline_selector",{processor:"string",default:".mce-toc h2,figcaption,caption"}),t("no_newline_selector",{processor:"string",default:""}),t("keep_styles",{processor:"boolean",default:!0}),t("end_container_on_empty_block",{processor:e=>b(e)||m(e)?{valid:!0,value:e}:{valid:!1,message:"Must be boolean or a string"},default:"blockquote"}),t("font_size_style_values",{processor:"string",default:"xx-small,x-small,small,medium,large,x-large,xx-large"}),t("font_size_legacy_values",{processor:"string",default:"xx-small,small,medium,large,x-large,xx-large,300%"}),t("font_size_classes",{processor:"string",default:""}),t("automatic_uploads",{processor:"boolean",default:!0}),t("images_reuse_filename",{processor:"boolean",default:!1}),t("images_replace_blob_uris",{processor:"boolean",default:!0}),t("icons",{processor:"string",default:""}),t("icons_url",{processor:"string",default:""}),t("images_upload_url",{processor:"string",default:""}),t("images_upload_base_path",{processor:"string",default:""}),t("images_upload_base_path",{processor:"string",default:""}),t("images_upload_credentials",{processor:"boolean",default:!1}),t("images_upload_handler",{processor:"function"}),t("language",{processor:"string",default:"en"}),t("language_url",{processor:"string",default:""}),t("entity_encoding",{processor:"string",default:"named"}),t("indent",{processor:"boolean",default:!0}),t("indent_before",{processor:"string",default:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"}),t("indent_after",{processor:"string",default:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"}),t("indent_use_margin",{processor:"boolean",default:!1}),t("indentation",{processor:"string",default:"40px"}),t("content_css",{processor:e=>{const t=!1===e||m(e)||k(e,m);return t?m(e)?{value:H(e.split(","),He),valid:t}:p(e)?{value:e,valid:t}:!1===e?{value:[],valid:t}:{value:e,valid:t}:{valid:!1,message:"Must be false, a string or an array of strings."}},default:Pl(e)?[]:["default"]}),t("content_style",{processor:"string"}),t("content_css_cors",{processor:"boolean",default:!1}),t("font_css",{processor:e=>{const t=m(e)||k(e,m);return t?{value:p(e)?e:H(e.split(","),He),valid:t}:{valid:!1,message:"Must be a string or an array of strings."}},default:[]}),t("inline_boundaries",{processor:"boolean",default:!0}),t("inline_boundaries_selector",{processor:"string",default:"a[href],code,span.mce-annotation"}),t("object_resizing",{processor:e=>{const t=b(e)||m(e);return t?!1===e||Di.isiPhone()||Di.isiPad()?{value:"",valid:t}:{value:!0===e?"table,img,figure.image,div,video,iframe":e,valid:t}:{valid:!1,message:"Must be boolean or a string"}},default:!Pi}),t("resize_img_proportional",{processor:"boolean",default:!0}),t("event_root",{processor:"object"}),t("service_message",{processor:"string"}),t("theme",{processor:e=>!1===e||m(e)||w(e),default:"silver"}),t("theme_url",{processor:"string"}),t("formats",{processor:"object"}),t("format_empty_lines",{processor:"boolean",default:!1}),t("preview_styles",{processor:e=>{const t=!1===e||m(e);return t?{value:!1===e?"":e,valid:t}:{valid:!1,message:"Must be false or a string"}},default:"font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"}),t("custom_ui_selector",{processor:"string",default:""}),t("hidden_input",{processor:"boolean",default:!0}),t("submit_patch",{processor:"boolean",default:!0}),t("encoding",{processor:"string"}),t("add_form_submit_trigger",{processor:"boolean",default:!0}),t("add_unload_trigger",{processor:"boolean",default:!0}),t("custom_undo_redo_levels",{processor:"number",default:0}),t("disable_nodechange",{processor:"boolean",default:!1}),t("readonly",{processor:"boolean",default:!1}),t("plugins",{processor:"string[]",default:[]}),t("external_plugins",{processor:"object"}),t("forced_plugins",{processor:"string[]"}),t("model",{processor:"string",default:e.hasPlugin("rtc")?"plugin":"dom"}),t("model_url",{processor:"string"}),t("block_unsupported_drop",{processor:"boolean",default:!0}),t("visual",{processor:"boolean",default:!0}),t("visual_table_class",{processor:"string",default:"mce-item-table"}),t("visual_anchor_class",{processor:"string",default:"mce-item-anchor"}),t("iframe_aria_text",{processor:"string",default:"Rich Text Area. Press ALT-0 for help."}),t("setup",{processor:"function"}),t("init_instance_callback",{processor:"function"}),t("url_converter",{processor:"function",default:e.convertURL}),t("url_converter_scope",{processor:"object",default:e}),t("urlconverter_callback",{processor:"function"}),t("allow_conditional_comments",{processor:"boolean",default:!1}),t("allow_html_data_urls",{processor:"boolean",default:!1}),t("allow_svg_data_urls",{processor:"boolean"}),t("allow_html_in_named_anchor",{processor:"boolean",default:!1}),t("allow_script_urls",{processor:"boolean",default:!1}),t("allow_unsafe_link_target",{processor:"boolean",default:!1}),t("convert_fonts_to_spans",{processor:"boolean",default:!0,deprecated:!0}),t("fix_list_elements",{processor:"boolean",default:!1}),t("preserve_cdata",{processor:"boolean",default:!1}),t("remove_trailing_brs",{processor:"boolean"}),t("inline_styles",{processor:"boolean",default:!0,deprecated:!0}),t("element_format",{processor:"string",default:"html"}),t("entities",{processor:"string"}),t("schema",{processor:"string",default:"html5"}),t("convert_urls",{processor:"boolean",default:!0}),t("relative_urls",{processor:"boolean",default:!0}),t("remove_script_host",{processor:"boolean",default:!0}),t("custom_elements",{processor:"string"}),t("extended_valid_elements",{processor:"string"}),t("invalid_elements",{processor:"string"}),t("invalid_styles",{processor:Fi}),t("valid_children",{processor:"string"}),t("valid_classes",{processor:Fi}),t("valid_elements",{processor:"string"}),t("valid_styles",{processor:Fi}),t("verify_html",{processor:"boolean",default:!0}),t("auto_focus",{processor:e=>m(e)||!0===e}),t("browser_spellcheck",{processor:"boolean",default:!1}),t("protect",{processor:"array"}),t("images_file_types",{processor:"string",default:"jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"}),t("deprecation_warnings",{processor:"boolean",default:!0}),t("a11y_advanced_options",{processor:"boolean",default:!1}),t("api_key",{processor:"string"}),t("paste_block_drop",{processor:"boolean",default:!1}),t("paste_data_images",{processor:"boolean",default:!0}),t("paste_preprocess",{processor:"function"}),t("paste_postprocess",{processor:"function"}),t("paste_webkit_styles",{processor:"string",default:"none"}),t("paste_remove_styles_if_webkit",{processor:"boolean",default:!0}),t("paste_merge_formats",{processor:"boolean",default:!0}),t("smart_paste",{processor:"boolean",default:!0}),t("paste_as_text",{processor:"boolean",default:!1}),t("paste_tab_spaces",{processor:"number",default:4}),t("text_patterns",{processor:e=>k(e,f)||!1===e?{value:Bi(!1===e?[]:e),valid:!0}:{valid:!1,message:"Must be an array of objects or false."},default:[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1"},{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:"1. ",cmd:"InsertOrderedList"},{start:"* ",cmd:"InsertUnorderedList"},{start:"- ",cmd:"InsertUnorderedList"}]}),t("noneditable_class",{processor:"string",default:"mceNonEditable"}),t("editable_class",{processor:"string",default:"mceEditable"}),t("noneditable_regexp",{processor:e=>k(e,Mi)?{value:e,valid:!0}:Mi(e)?{value:[e],valid:!0}:{valid:!1,message:"Must be a RegExp or an array of RegExp."},default:[]}),t("table_tab_navigation",{processor:"boolean",default:!0}),e.on("ScriptsLoaded",(()=>{t("directionality",{processor:"string",default:ra.isRtl()?"rtl":void 0}),t("placeholder",{processor:"string",default:Li.getAttrib(e.getElement(),"placeholder")})}))})(o);const s=this.options.get;s("deprecation_warnings")&&((e,t)=>{((e,t)=>{const n=Sy(e),o=_y(t),r=o.length>0,s=n.length>0,a="mobile"===t.theme;if(r||s||a){const e="\n- ",t=a?`\n\nThemes:${e}mobile`:"",i=r?`\n\nPlugins:${e}${o.join(e)}`:"",l=s?`\n\nOptions:${e}${n.join(e)}`:"";console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information."+t+i+l)}})(e,t)})(t,r);const a=s("suffix");a&&(n.suffix=a),this.suffix=n.suffix;const i=s("base_url");i&&n._setBaseUrl(i),this.baseUri=n.baseURI;const l=cl(o);l&&(Zs.ScriptLoader._setReferrerPolicy(l),Qs.DOM.styleSheetLoader._setReferrerPolicy(l)),sa.languageLoad=s("language_load"),sa.baseURL=n.baseURL,this.setDirty(!1),this.documentBaseURI=new xv(Vi(o),{base_uri:this.baseUri}),this.baseURI=this.baseUri,this.inline=Pl(o),this.shortcuts=new MR(this),this.editorCommands=new iR(this),aR(this);const d=s("cache_suffix");d&&(Nt.cacheSuffix=d.replace(/^[\?\&]+/,"")),this.ui={registry:IR(),styleSheetLoader:void 0,show:S,hide:S,setEnabled:S,isEnabled:L},this.mode=(e=>{const t=ea("design"),n=ea({design:{activate:S,deactivate:S,editorReadOnly:!1},readonly:{activate:S,deactivate:S,editorReadOnly:!0}});return(e=>{e.serializer?fR(e):e.on("PreInit",(()=>{fR(e)}))})(e),(e=>{e.on("ShowCaret",(t=>{mR(e)&&t.preventDefault()})),e.on("ObjectSelected",(t=>{mR(e)&&t.preventDefault()}))})(e),{isReadOnly:()=>mR(e),set:o=>((e,t,n,o)=>{if(o!==n.get()){if(!xe(t,o))throw new Error(`Editor mode '${o}' is invalid`);e.initialized?OR(e,n,t,o):e.on("init",(()=>OR(e,n,t,o)))}})(e,n.get(),t,o),get:()=>t.get(),register:(e,t)=>{n.set(((e,t,n)=>{if(j(AR,t))throw new Error(`Cannot override default mode ${t}`);return{...e,[t]:{...n,deactivate:()=>{try{n.deactivate()}catch(e){console.error(`problem while deactivating editor mode ${t}:`,e)}}}}})(n.get(),e,t))}}})(o),n.dispatch("SetupEditor",{editor:this});const c=Xl(o);w(c)&&c.call(o,o)}render(){(e=>{const t=e.id;ra.setCode(ul(e));const n=()=>{MN.unbind(window,"ready",n),e.render()};if(!Vs.Event.domLoaded)return void MN.bind(window,"ready",n);if(!e.getElement())return;const o=fn(e.getElement()),r=Qt(o);e.on("remove",(()=>{q(o.dom.attributes,(e=>Xt(o,e.name))),Wt(o,r)})),e.ui.styleSheetLoader=((e,t)=>Xo.forElement(e,{contentCssCors:Vl(t),referrerPolicy:cl(t)}))(o,e),Pl(e)?e.inline=!0:(e.orgVisibility=e.getElement().style.visibility,e.getElement().style.visibility="hidden");const s=e.getElement().form||MN.getParent(t,"form");s&&(e.formElement=s,Ll(e)&&!No(e.getElement())&&(MN.insertAfter(MN.create("input",{type:"hidden",name:t}),t),e.hasHiddenInput=!0),e.formEventDelegate=t=>{e.dispatch(t.type,t)},MN.bind(s,"submit reset",e.formEventDelegate),e.on("reset",(()=>{e.resetContent()})),!Ml(e)||s.submit.nodeType||s.submit.length||s._mceOldSubmit||(s._mceOldSubmit=s.submit,s.submit=()=>(e.editorManager.triggerSave(),e.setDirty(!1),s._mceOldSubmit(s)))),e.windowManager=Uy(e),e.notificationManager=My(e),(e=>"xml"===e.options.get("encoding"))(e)&&e.on("GetContent",(e=>{e.save&&(e.content=MN.encode(e.content))})),Il(e)&&e.on("submit",(()=>{e.initialized&&e.save()})),Fl(e)&&(e._beforeUnload=()=>{!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:!0,set_dirty:!1})},e.editorManager.on("BeforeUnload",e._beforeUnload)),e.editorManager.add(e),UN(e,e.suffix)})(this)}focus(e){this.execCommand("mceFocus",!1,e)}hasFocus(){return _f(this)}translate(e){return ra.translate(e)}getParam(e,t,n){const o=this.options;return o.isRegistered(e)||(C(n)?o.register(e,{processor:n,default:t}):o.register(e,{processor:L,default:t})),o.isSet(e)||v(t)?o.get(e):t}hasPlugin(e,t){return!(!j(Hl(this),e)||t&&void 0===Iy.get(e))}nodeChanged(e){this._nodeChangeDispatcher.nodeChanged(e)}addCommand(e,t,n){this.editorCommands.addCommand(e,t,n)}addQueryStateHandler(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)}addQueryValueHandler(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)}addShortcut(e,t,n,o){this.shortcuts.add(e,t,n,o)}execCommand(e,t,n,o){return this.editorCommands.execCommand(e,t,n,o)}queryCommandState(e){return this.editorCommands.queryCommandState(e)}queryCommandValue(e){return this.editorCommands.queryCommandValue(e)}queryCommandSupported(e){return this.editorCommands.queryCommandSupported(e)}show(){const e=this;e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable="true":(FR.show(e.getContainer()),FR.hide(e.id)),e.load(),e.dispatch("show"))}hide(){const e=this;e.hidden||(e.save(),e.inline?(e.getBody().contentEditable="false",e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(FR.hide(e.getContainer()),FR.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.dispatch("hide"))}isHidden(){return this.hidden}setProgressState(e,t){this.dispatch("ProgressState",{state:e,time:t})}load(e){const t=this;let n,o=t.getElement();if(t.removed)return"";if(o){(e=e||{}).load=!0;const r=No(o)?o.value:o.innerHTML;return n=t.setContent(r,e),e.element=o,e.no_events||t.dispatch("LoadContent",e),e.element=o=null,n}}save(e){const t=this;let n,o,r=t.getElement();if(r&&t.initialized&&!t.removed)return(e=e||{}).save=!0,e.element=r,n=e.content=t.getContent(e),e.no_events||t.dispatch("SaveContent",e),"raw"===e.format&&t.dispatch("RawSaveContent",e),n=e.content,No(r)?r.value=n:(!e.is_removing&&t.inline||(r.innerHTML=n),(o=FR.getParent(t.id,"form"))&&zR(o.elements,(e=>{if(e.name===t.id)return e.value=n,!1}))),e.element=r=null,!1!==e.set_dirty&&t.setDirty(!1),n}setContent(e,t){return wy(this,e,t)}getContent(e){return((e,t={})=>{const n=((e,t)=>({...e,format:t,get:!0,getInner:!0}))(t,t.format?t.format:"html");return Bv(e,n).fold(R,(t=>{const n=((e,t)=>cy(e).editor.getContent(t))(e,t);return Dv(e,n,t)}))})(this,e)}insertContent(e,t){t&&(e=UR({content:e},t)),this.execCommand("mceInsertContent",!1,e)}resetContent(e){void 0===e?wy(this,this.startContent,{format:"raw"}):wy(this,e),this.undoManager.reset(),this.setDirty(!1),this.nodeChanged()}isDirty(){return!this.isNotDirty}setDirty(e){const t=!this.isNotDirty;this.isNotDirty=!e,e&&e!==t&&this.dispatch("dirty")}getContainer(){const e=this;return e.container||(e.container=FR.get(e.editorContainer||e.id+"_parent")),e.container}getContentAreaContainer(){return this.contentAreaContainer}getElement(){return this.targetElm||(this.targetElm=FR.get(this.id)),this.targetElm}getWin(){const e=this;let t;return e.contentWindow||(t=e.iframeElement,t&&(e.contentWindow=t.contentWindow)),e.contentWindow}getDoc(){const e=this;let t;return e.contentDocument||(t=e.getWin(),t&&(e.contentDocument=t.document)),e.contentDocument}getBody(){const e=this.getDoc();return this.bodyElement||(e?e.body:null)}convertURL(e,t,n){const o=this,r=o.options.get,s=Jl(o);return w(s)?s.call(o,e,n,!0,t):!r("convert_urls")||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r("relative_urls")?o.documentBaseURI.toRelative(e):e=o.documentBaseURI.toAbsolute(e,r("remove_script_host"))}addVisual(e){((e,t)=>{((e,t)=>{uy(e).editor.addVisual(t)})(e,t)})(this,e)}remove(){(e=>{if(!e.removed){const{_selectionOverrides:t,editorUpload:n}=e,o=e.getBody(),r=e.getElement();o&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&r&&Ey.remove(r.nextSibling),(e=>{e.dispatch("remove")})(e),e.editorManager.remove(e),!e.inline&&o&&(e=>{Ey.setStyle(e.id,"display",e.orgDisplay)})(e),(e=>{e.dispatch("detach")})(e),Ey.remove(e.getContainer()),Ny(t),Ny(n),e.destroy()}})(this)}destroy(e){((e,t)=>{const{selection:n,dom:o}=e;e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Ny(n),Ny(o)),(e=>{const t=e.formElement;t&&(t._mceOldSubmit&&(t.submit=t._mceOldSubmit,t._mceOldSubmit=null),Ey.unbind(t,"submit reset",e.formEventDelegate))})(e),(e=>{e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null,e.bodyElement=e.contentDocument=e.contentWindow=null,e.iframeElement=e.targetElm=null,e.selection&&(e.selection=e.selection.win=e.selection.dom=e.selection.dom.doc=null)})(e),e.destroyed=!0):e.remove())})(this,e)}uploadImages(){return this.editorUpload.uploadImages()}_scanForImages(){return this.editorUpload.scanForImages()}}const VR=Qs.DOM,HR=Bt.each;let $R,qR=!1,WR=[];const KR=e=>{const t=e.type;HR(QR.get(),(n=>{switch(t){case"scroll":n.dispatch("ScrollWindow",e);break;case"resize":n.dispatch("ResizeWindow",e)}}))},GR=e=>{if(e!==qR){const t=Qs.DOM;e?(t.bind(window,"resize",KR),t.bind(window,"scroll",KR)):(t.unbind(window,"resize",KR),t.unbind(window,"scroll",KR)),qR=e}},YR=e=>{const t=WR;return WR=K(WR,(t=>e!==t)),QR.activeEditor===e&&(QR.activeEditor=WR.length>0?WR[0]:null),QR.focusedEditor===e&&(QR.focusedEditor=null),t.length!==WR.length},XR="CSS1Compat"!==document.compatMode,QR={...vR,baseURI:null,baseURL:null,defaultOptions:{},documentBaseURL:null,suffix:null,majorVersion:"6",minorVersion:"1.2",releaseDate:"2022-07-29",i18n:ra,activeEditor:null,focusedEditor:null,setup(){const e=this;let t,n,o="";n=xv.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/"));const r=window.tinymce||window.tinyMCEPreInit;if(r)t=r.base||r.baseURL,o=r.suffix;else{const e=document.getElementsByTagName("script");for(let n=0;n<e.length;n++){const r=e[n].src||"";if(""===r)continue;const s=r.substring(r.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)){-1!==s.indexOf(".min")&&(o=".min"),t=r.substring(0,r.lastIndexOf("/"));break}}if(!t&&document.currentScript){const e=document.currentScript.src;-1!==e.indexOf(".min")&&(o=".min"),t=e.substring(0,e.lastIndexOf("/"))}}var s;e.baseURL=new xv(n).toAbsolute(t),e.documentBaseURL=n,e.baseURI=new xv(e.baseURL),e.suffix=o,(s=e).on("AddEditor",O(wf,s)),s.on("RemoveEditor",O(xf,s))},overrideDefaults(e){const t=e.base_url;t&&this._setBaseUrl(t);const n=e.suffix;e.suffix&&(this.suffix=n),this.defaultOptions=e;const o=e.plugin_base_urls;void 0!==o&&fe(o,((e,t)=>{sa.PluginManager.urls[t]=e}))},init(e){const t=this;let n;const o=Bt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," ");let r=e=>{n=e};const s=()=>{let n=0;const a=[];let i;VR.unbind(window,"ready",s),(n=>{const o=e.onpageload;o&&o.apply(t,[])})(),i=((e,t)=>{const n=[],o=w(t)?e=>V(n,(n=>t(n,e))):e=>j(n,e);for(let t=0,r=e.length;t<r;t++){const r=e[t];o(r)||n.push(r)}return n})((e=>Nt.browser.isIE()||Nt.browser.isEdge()?($y("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"),[]):XR?($y("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."),[]):m(e.selector)?VR.select(e.selector):C(e.target)?[e.target]:[])(e)),Bt.each(i,(e=>{var n;(n=t.get(e.id))&&n.initialized&&!(n.getContainer()||n.getBody()).parentNode&&(YR(n),n.unbindAllNativeEvents(),n.destroy(!0),n.removed=!0,n=null)})),i=Bt.grep(i,(e=>!t.get(e.id))),0===i.length?r([]):HR(i,(s=>{((e,t)=>e.inline&&t.tagName.toLowerCase()in o)(e,s)?$y("Could not initialize inline editor on invalid inline target element",s):((e,o,s)=>{const l=new jR(e,o,t);a.push(l),l.on("init",(()=>{++n===i.length&&r(a)})),l.targetElm=l.targetElm||s,l.render()})((e=>{let t=e.id;return t||(t=we(e,"name").filter((e=>!VR.get(e))).getOrThunk(VR.uniqueId),e.setAttribute("id",t)),t})(s),e,s)}))};return VR.bind(window,"ready",s),new Promise((e=>{n?e(n):r=t=>{e(t)}}))},get(e){return 0===arguments.length?WR.slice(0):m(e)?Q(WR,(t=>t.id===e)).getOr(null):x(e)&&WR[e]?WR[e]:null},add(e){const t=this,n=t.get(e.id);return n===e||(null===n&&WR.push(e),GR(!0),t.activeEditor=e,t.dispatch("AddEditor",{editor:e}),$R||($R=e=>{const n=t.dispatch("BeforeUnload");if(n.returnValue)return e.preventDefault(),e.returnValue=n.returnValue,n.returnValue},window.addEventListener("beforeunload",$R))),e},createEditor(e,t){return this.add(new jR(e,t,this))},remove(e){const t=this;let n,o;if(e){if(!m(e))return o=e,h(t.get(o.id))?null:(YR(o)&&t.dispatch("RemoveEditor",{editor:o}),0===WR.length&&window.removeEventListener("beforeunload",$R),o.remove(),GR(WR.length>0),o);HR(VR.select(e),(e=>{o=t.get(e.id),o&&t.remove(o)}))}else for(n=WR.length-1;n>=0;n--)t.remove(WR[n])},execCommand(e,t,n){var o;const r=this,s=f(n)?null!==(o=n.id)&&void 0!==o?o:n.index:n;switch(e){case"mceAddEditor":if(!r.get(s)){const e=n.options;new jR(s,e,r).render()}return!0;case"mceRemoveEditor":{const e=r.get(s);return e&&e.remove(),!0}case"mceToggleEditor":{const e=r.get(s);return e?(e.isHidden()?e.show():e.hide(),!0):(r.execCommand("mceAddEditor",!1,n),!0)}}return!!r.activeEditor&&r.activeEditor.execCommand(e,t,n)},triggerSave:()=>{HR(WR,(e=>{e.save()}))},addI18n:(e,t)=>{ra.add(e,t)},translate:e=>ra.translate(e),setActive(e){const t=this.activeEditor;this.activeEditor!==e&&(t&&t.dispatch("deactivate",{relatedTarget:e}),e.dispatch("activate",{relatedTarget:t})),this.activeEditor=e},_setBaseUrl(e){this.baseURL=new xv(this.documentBaseURL).toAbsolute(e.replace(/\/+$/,"")),this.baseURI=new xv(this.baseURL)}};QR.setup();const JR=(()=>{const e=aa();return{FakeClipboardItem:e=>({items:e,types:ue(e),getType:t=>we(e,t).getOrUndefined()}),write:t=>{e.set(t)},read:()=>e.get().getOrUndefined(),clear:e.clear}})(),ZR=Math.min,eA=Math.max,tA=Math.round,nA=(e,t,n)=>{let o=t.x,r=t.y;const s=e.w,a=e.h,i=t.w,l=t.h,d=(n||"").split("");return"b"===d[0]&&(r+=l),"r"===d[1]&&(o+=i),"c"===d[0]&&(r+=tA(l/2)),"c"===d[1]&&(o+=tA(i/2)),"b"===d[3]&&(r-=a),"r"===d[4]&&(o-=s),"c"===d[3]&&(r-=tA(a/2)),"c"===d[4]&&(o-=tA(s/2)),oA(o,r,s,a)},oA=(e,t,n,o)=>({x:e,y:t,w:n,h:o}),rA={inflate:(e,t,n)=>oA(e.x-t,e.y-n,e.w+2*t,e.h+2*n),relativePosition:nA,findBestRelativePosition:(e,t,n,o)=>{let r,s;for(s=0;s<o.length;s++)if(r=nA(e,t,o[s]),r.x>=n.x&&r.x+r.w<=n.w+n.x&&r.y>=n.y&&r.y+r.h<=n.h+n.y)return o[s];return null},intersect:(e,t)=>{const n=eA(e.x,t.x),o=eA(e.y,t.y),r=ZR(e.x+e.w,t.x+t.w),s=ZR(e.y+e.h,t.y+t.h);return r-n<0||s-o<0?null:oA(n,o,r-n,s-o)},clamp:(e,t,n)=>{let o=e.x,r=e.y,s=e.x+e.w,a=e.y+e.h;const i=t.x+t.w,l=t.y+t.h,d=eA(0,t.x-o),c=eA(0,t.y-r),u=eA(0,s-i),m=eA(0,a-l);return o+=d,r+=c,n&&(s+=d,a+=c,o-=u,r-=m),s-=u,a-=m,oA(o,r,s-o,a-r)},create:oA,fromClientRect:e=>oA(e.left,e.top,e.width,e.height)},sA=(()=>{const e={},t={};return{load:(n,o)=>{const r=`Script at URL "${o}" failed to load`,s=`Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;if(void 0!==e[n])return e[n];{const a=new Promise(((e,a)=>{const i=((e,t,n=1e3)=>{let o=!1,r=null;const s=e=>(...t)=>{o||(o=!0,null!==r&&(clearTimeout(r),r=null),e.apply(null,t))},a=s(e),i=s(t);return{start:(...e)=>{o||null!==r||(r=setTimeout((()=>i.apply(null,e)),n))},resolve:a,reject:i}})(e,a);t[n]=i.resolve,Zs.ScriptLoader.loadScript(o).then((()=>i.start(s)),(()=>i.reject(r)))}));return e[n]=a,a}},add:(n,o)=>{void 0!==t[n]&&(t[n](o),delete t[n]),e[n]=Promise.resolve(o)},unload:t=>{delete e[t]}}})();let aA;try{const e="__storage_test__";aA=window.localStorage,aA.setItem(e,e),aA.removeItem(e)}catch(e){aA=(()=>{let e={},t=[];const n={getItem:t=>e[t]||null,setItem:(n,o)=>{t.push(n),e[n]=String(o)},key:e=>t[e],removeItem:n=>{t=t.filter((e=>e===n)),delete e[n]},clear:()=>{t=[],e={}},length:0};return Object.defineProperty(n,"length",{get:()=>t.length,configurable:!1,enumerable:!1}),n})()}const iA={geom:{Rect:rA},util:{Delay:bf,Tools:Bt,VK:om,URI:xv,EventDispatcher:hR,Observable:vR,I18n:ra,LocalStorage:aA,ImageUploader:e=>{const t=Gy(),n=Jy(e,t);return{upload:(t,o=!0)=>n.upload(t,o?Qy(e):void 0)}}},dom:{EventUtils:Vs,TreeWalker:Qo,TextSeeker:Ea,DOMUtils:Qs,ScriptLoader:Zs,RangeUtils:Im,Serializer:Cy,StyleSheetLoader:Yo,ControlSelection:lm,BookmarkManager:Yu,Selection:by,Event:Vs.Event},html:{Styles:Ds,Entities:Cs,Node:jf,Schema:Bs,DomParser:Ov,Writer:Yf,Serializer:Xf},Env:Nt,AddOnManager:sa,Annotator:Gu,Formatter:dC,UndoManager:uC,EditorCommands:iR,WindowManager:Uy,NotificationManager:My,EditorObservable:SR,Shortcuts:MR,Editor:jR,FocusManager:hf,EditorManager:QR,DOM:Qs.DOM,ScriptLoader:Zs.ScriptLoader,PluginManager:Iy,ThemeManager:Fy,ModelManager:Ay,IconManager:Ry,Resource:sA,FakeClipboard:JR,trim:Bt.trim,isArray:Bt.isArray,is:Bt.is,toArray:Bt.toArray,makeMap:Bt.makeMap,each:Bt.each,map:Bt.map,grep:Bt.grep,inArray:Bt.inArray,extend:Bt.extend,walk:Bt.walk,resolve:Bt.resolve,explode:Bt.explode,_addCacheSuffix:Bt._addCacheSuffix},lA=Bt.extend(QR,iA);(e=>{window.tinymce=e,window.tinyMCE=e})(lA),(e=>{if("object"==typeof module)try{module.exports=e}catch(e){}})(lA)}();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.6.0-14
 */

!function(){"use strict";function n(e){return function(n){return r=typeof(t=n),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e;var t,r}}function o(n){return function(){return n}}function t(n){return n}function r(){return p}var e,u="undefined"!=typeof window?window:Function("return this;")(),i=function(n,t){return{isRequired:n,applyPatch:t}},a=function(i,o){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=o.apply(this,n),e=void 0===r?n:r;return i.apply(this,e)}},c=function(n,t){if(n)for(var r=0;r<t.length;r++)t[r].isRequired(n)&&t[r].applyPatch(n);return n},f=n("object"),l=n("array"),s=function(n){return e===n},g=o(!1),d=o(!(e=void 0)),p={fold:function(n,t){return n()},isSome:g,isNone:d,getOr:t,getOrThunk:v,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(void 0),or:t,orThunk:v,map:r,each:function(){},bind:r,exists:g,forall:d,filter:function(){return p},toArray:function(){return[]},toString:o("none()")};function v(n){return n()}function h(n,t){return r=n,e=t,-1<D.call(r,e);var r,e}function y(n,t){return function(n){for(var t=[],r=0,e=n.length;r<e;++r){if(!l(n[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+n);U.apply(t,n[r])}return t}(function(n,t){for(var r=n.length,e=new Array(r),i=0;i<r;i++){var o=n[i];e[i]=t(o,i)}return e}(n,t))}function m(n,t){for(var r=P(n),e=0,i=r.length;e<i;e++){var o=r[e];t(n[o],o)}}function E(r){return function(n,t){r[t]=n}}function w(n,t){var r,e,i,o={},u={};return r=t,e=E(o),i=E(u),m(n,function(n,t){(r(n,t)?e:i)(n,t)}),{t:o,f:u}}function O(n,t){return T(n,t)?_(n[t]):S()}function M(u){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(0===n.length)throw new Error("Can't merge zero objects");for(var r={},e=0;e<n.length;e++){var i=n[e];for(var o in i)T(i,o)&&(r[o]=u(r[o],i[o]))}return r}}function b(n){if(s(n)||""===n)return[];var t=l(n)?y(n,function(n){return n.split(/[\s+,]/)}):n.split(/[\s+,]/);return y(t,function(n){return 0<n.length?[n.trim()]:[]})}function x(n){var t;return null!==(t=n.defaultOptions)&&void 0!==t?t:n.defaultSettings}function j(n,t){var r=C(n,t),e=b(t.plugins),i=O(r,"custom_plugin_urls").getOr({}),o=w(i,function(n,t){return h(e,t)}),u=O(r,"external_plugins").getOr({}),a={};m(o.t,function(n,t){a[t]=n});var c=I(a,u);return I(t,0===P(c).length?{}:{external_plugins:c})}var A=function(r){function n(){return i}function t(n){return n(r)}var e=o(r),i={fold:function(n,t){return t(r)},isSome:d,isNone:g,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(n){return A(n(r))},each:function(n){n(r)},bind:t,exists:t,forall:t,filter:function(n){return n(r)?i:p},toArray:function(){return[r]},toString:function(){return"some("+r+")"}};return i},S=r,_=function(n){return null==n?p:A(n)},D=Array.prototype.indexOf,U=Array.prototype.push,P=Object.keys,R=Object.hasOwnProperty,T=function(n,t){return R.call(n,t)},C=M(function(n,t){return f(n)&&f(t)?C(n,t):t}),I=M(function(n,t){return t}),N={getCustomPluginUrls:j,patch:i(function(){return!0},function(r){r.EditorManager.init=a(r.EditorManager.init,function(n){return[j(x(r),n)]}),r.EditorManager.createEditor=a(r.EditorManager.createEditor,function(n,t){return[n,j(x(r),t)]})})};function k(n,t,r){if(r||2===arguments.length)for(var e,i=0,o=t.length;i<o;i++)!e&&i in t||((e=e||Array.prototype.slice.call(t,0,i))[i]=t[i]);return n.concat(e||Array.prototype.slice.call(t))}function L(n,t){return function(n,t){for(var r=null!=t?t:u,e=0;e<n.length&&null!=r;++e)r=r[n[e]];return r}(n.split("."),t)}function q(n){return parseInt(n,10)}function V(n,t){var r=n-t;return 0==r?0:0<r?1:-1}function z(n,t,r){return{major:n,minor:t,patch:r}}function B(n){var t=/([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);return t?z(q(t[1]),q(t[2]),q(t[3])):z(0,0,0)}function F(n,t){return!!n&&-1===function(n,t){var r=V(n.major,t.major);if(0!==r)return r;var e=V(n.minor,t.minor);if(0!==e)return e;var i=V(n.patch,t.patch);return 0!==i?i:0}(B([(r=n).majorVersion,r.minorVersion].join(".").split(".").slice(0,3).join(".")),B(t));var r}function $(o){return function(n){var t=L("tinymce.util.Tools",u),r=b(n.plugins),e=x(o).forced_plugins||[],i=0<e.length?r.concat(e):r;return[t.extend({},n,{plugins:i})]}}function G(){return(new Date).getTime()}function H(e){return function(){var n,t,r=(t="position",(((n=e).currentStyle?n.currentStyle[t]:window.getComputedStyle(n,null)[t])||"").toLowerCase());return"absolute"===r||"fixed"===r}}function J(n){n.parentNode.removeChild(n)}function K(n,t){n.notificationManager?n.notificationManager.open({text:t,type:"warning",timeout:0,icon:""}):n.windowManager.alert(t)}function Q(n){var t,r,e=L("tinymce.util.URI",u);(t=n.base_url)&&(this.baseURL=new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new e(this.baseURL)),r=n.suffix,n.suffix&&(this.suffix=r),this.defaultSettings=n}function W(n){return[L("tinymce.util.Tools",u).extend({},this.defaultSettings,n)]}function X(n){c(n,[rn.patch,en.patch,Y.patch,N.patch])}var Y={patch:i(function(n){return F(n,"4.7.0")},function(r){r.EditorManager.init=a(r.EditorManager.init,$(r.EditorManager)),r.EditorManager.createEditor=a(r.EditorManager.createEditor,function(n,t){return k([n],$(r.EditorManager)(t),!0)})})},Z=function(n,t,r,e,i){var o,u=G();o=setInterval(function(){n()&&(clearInterval(o),t()),G()-u>i&&(clearInterval(o),r())},e)},nn=function(n,t){var r,e=((r=document.createElement("div")).style.display="none",r.className="mce-floatpanel",r);document.body.appendChild(e),Z(H(e),function(){J(e),n()},function(){J(e),t()},10,5e3)},tn=function(n){n.EditorManager.on("AddEditor",function(n){var t=n.editor,r=t.settings.service_message;r&&nn(function(){K(t,r)},function(){alert(r)})})},rn={patch:i(function(n){return"function"!=typeof n.overrideDefaults},function(r){tn(r),r.overrideDefaults=Q,r.EditorManager.init=a(r.EditorManager.init,W),r.EditorManager.createEditor=a(r.EditorManager.createEditor,function(n,t){return k([n],W.call(r,t),!0)})})},en={patch:i(function(n){return F(n,"4.5.0")},function(n){var e;n.overrideDefaults=a(n.overrideDefaults,(e=n,function(n){var t=n.plugin_base_urls;for(var r in t)e.PluginManager.urls[r]=t[r]}))})};X(u.tinymce)}();

(function(cloudSettings) {
		tinymce.overrideDefaults(cloudSettings);
})({"rtc_tenant_id":"no-api-key","editimage_api_key":"no-api-key","imagetools_proxy":"https://imageproxy.tiny.cloud/2/image","autocorrect_service_url":"https://spelling.tiny.cloud","suffix":".min","linkchecker_service_url":"https://hyperlinking.tiny.cloud","spellchecker_rpc_url":"https://spelling.tiny.cloud","spellchecker_api_key":"no-api-key","tinydrive_service_url":"https://catalog.tiny.cloud","api_key":"no-api-key","imagetools_api_key":"no-api-key","tinydrive_api_key":"no-api-key","export_image_proxy_service_url":"https://imageproxy.tiny.cloud","forced_plugins":["chiffer"],"referrer_policy":"origin","content_css_cors":true,"custom_plugin_urls":{},"chiffer_snowplow_service_url":"https://sp.tinymce.com/i","mediaembed_api_key":"no-api-key","promotion":false,"rtc_service_url":"https://rtc.tiny.cloud","editimage_proxy_service_url":"https://imageproxy.tiny.cloud","linkchecker_api_key":"no-api-key","mediaembed_service_url":"https://hyperlinking.tiny.cloud","service_message":"This domain is not registered with Tiny Cloud.  Please see the \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/docs/quick-start/\"\u003equick start guide\u003c/a\u003e or \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/auth/signup/\"\u003ecreate an account\u003c/a\u003e."});
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/6.1.2-8"

/* Ephox chiffer plugin
*
* Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
*
* Version: 2.0.0-19
*/

!function(){"use strict";function n(e){return!(null==e)}function r(){}function t(e,n,r,o){return function(e,t){for(var n=S(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i)}}(e,function(e,t){(n(e,t)?r:o)(e,t)}),1}function o(e,t){return h.call(e,t)}function i(e){var t=e.command;return o(P,t)?function(e){if(n(e.value)&&o(e.value,"list-style-type")){e=e.value["list-style-type"];return"advlist_"+(""===e?"default":e)}}(e):o(w,t)?w[t]:o(I,t)?I[t]:o(b,t)?b[t]:void 0}function c(e,t){return e=e,t=t,-1<k.call(e,t)}function a(e){return"plugin_"+e+"_loaded"}function s(e){var n,e=(t(e,function(e,t){e=!!e.isStub;return!!t&&!e&&c(O,t)},(n=e={},function(e,t){n[t]=e}),r),e);return function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o)}return r}(S(e),a)}function u(e,t){!function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}(s(t),e.sendStat)}function l(){return(new Date).getTime()}function e(e,t){var o,i,n,t=(o=e,i=t,{send:function(e,t,n){var e="?aid="+i+"&tna=tinymce_cloud&p=web&dtm="+t+"&stm="+l()+"&tz="+("undefined"!=typeof Intl?encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone):"N%2FA")+"&e=se&se_ca="+e,r=document.createElement("img");r.src=o.chiffer_snowplow_service_url+e;e=function(e){return function(){r.onload=null,r.onerror=null,n(e)}};r.onload=e(!0),r.onerror=e(!1)}});return n=t,{sendStat:function(e){n.send(e,l(),r)}}}var d,f,m,p,g,_,v=(d="string",function(e){return e=typeof(t=e),(null===t?"null":"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e)===d;var t}),y=(f=void 0,function(e){return f===e}),S=Object.keys,h=Object.hasOwnProperty,I={mceInsertToc:"toc_insert",mceUpdateToc:"toc_update"},w={mceEditImage:"imagetools_open_dialog",mceImageRotateLeft:"imagetools_rotate",mceImageRotateRight:"imagetools_rotate",mceImageFlipVertical:"imagetools_flip",mceImageFlipHorizontal:"imagetools_flip"},P={InsertUnorderedList:!0,InsertOrderedList:!0},b={mceInsertTemplate:"template_insert",mceInsertDate:"insertdatetime_insert",mceInsertTime:"insertdatetime_insert",mcePreview:"preview_open_dialog",mceAnchor:"anchor_open_dialog"},k=Array.prototype.indexOf,O=["advcode","advtable","a11ychecker","checklist","export","formatpainter","linkchecker","mediaembed","mentions","pageembed","permanentpen","powerpaste","rtc","tinycomments","tinydrive","tinymcespellchecker","casechange","editimage","tableofcontents"];p=null!==(g=tinymce.defaultOptions)&&void 0!==g?g:tinymce.defaultSettings,g={load:r},_=function(e){e=e.api_key;return v(e)?e:void 0}(p),g=void 0===_?g:((m=e(p,_)).sendStat("script_load"),{load:function(e){e.once("init",function(){return m.sendStat("init")}),e.once("focus",function(){return m.sendStat("focus")}),e.on("ExportPdf",function(){return m.sendStat("export_pdf")}),e.on("PastePreProcess PowerPasteTempStats",function(e){e=e.source;n(e)&&m.sendStat("powerpaste_"+e)}),e.on("VisualChars",function(e){!0===e.state&&m.sendStat("visualchars_true")}),e.on("RtcSessionConnected",function(e){var t=e.time;switch(t){case 0:m.sendStat("rtc_started");break;case 5:case 10:case 20:m.sendStat("rtc_connected_"+t+"min")}}),e.on("RtcSessionError",function(){return m.sendStat("rtc_error")}),e.on("RtcSessionDirty",function(){return m.sendStat("rtc_edited")}),e.on("SpellcheckerLanguageChanged",function(e){e=e.language;m.sendStat("spellcheckerpro_language_changed_"+e)}),e.on("ExecCommand",function(e){e=i(e);y(e)||m.sendStat(e)}),e.on("PreInit",function(){u(m,e.plugins)})}}),tinymce.PluginManager.add("chiffer",g.load)}();
/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.6.0-14
 */

!function(){"use strict";function n(e){return function(n){return r=typeof(t=n),(null===t?"null":"object"==r&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":r)===e;var t,r}}function o(n){return function(){return n}}function t(n){return n}function r(){return p}var e,u="undefined"!=typeof window?window:Function("return this;")(),i=function(n,t){return{isRequired:n,applyPatch:t}},a=function(i,o){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=o.apply(this,n),e=void 0===r?n:r;return i.apply(this,e)}},c=function(n,t){if(n)for(var r=0;r<t.length;r++)t[r].isRequired(n)&&t[r].applyPatch(n);return n},f=n("object"),l=n("array"),s=function(n){return e===n},g=o(!1),d=o(!(e=void 0)),p={fold:function(n,t){return n()},isSome:g,isNone:d,getOr:t,getOrThunk:v,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(void 0),or:t,orThunk:v,map:r,each:function(){},bind:r,exists:g,forall:d,filter:function(){return p},toArray:function(){return[]},toString:o("none()")};function v(n){return n()}function h(n,t){return r=n,e=t,-1<D.call(r,e);var r,e}function y(n,t){return function(n){for(var t=[],r=0,e=n.length;r<e;++r){if(!l(n[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+n);U.apply(t,n[r])}return t}(function(n,t){for(var r=n.length,e=new Array(r),i=0;i<r;i++){var o=n[i];e[i]=t(o,i)}return e}(n,t))}function m(n,t){for(var r=P(n),e=0,i=r.length;e<i;e++){var o=r[e];t(n[o],o)}}function E(r){return function(n,t){r[t]=n}}function w(n,t){var r,e,i,o={},u={};return r=t,e=E(o),i=E(u),m(n,function(n,t){(r(n,t)?e:i)(n,t)}),{t:o,f:u}}function O(n,t){return T(n,t)?_(n[t]):S()}function M(u){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(0===n.length)throw new Error("Can't merge zero objects");for(var r={},e=0;e<n.length;e++){var i=n[e];for(var o in i)T(i,o)&&(r[o]=u(r[o],i[o]))}return r}}function b(n){if(s(n)||""===n)return[];var t=l(n)?y(n,function(n){return n.split(/[\s+,]/)}):n.split(/[\s+,]/);return y(t,function(n){return 0<n.length?[n.trim()]:[]})}function x(n){var t;return null!==(t=n.defaultOptions)&&void 0!==t?t:n.defaultSettings}function j(n,t){var r=C(n,t),e=b(t.plugins),i=O(r,"custom_plugin_urls").getOr({}),o=w(i,function(n,t){return h(e,t)}),u=O(r,"external_plugins").getOr({}),a={};m(o.t,function(n,t){a[t]=n});var c=I(a,u);return I(t,0===P(c).length?{}:{external_plugins:c})}var A=function(r){function n(){return i}function t(n){return n(r)}var e=o(r),i={fold:function(n,t){return t(r)},isSome:d,isNone:g,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(n){return A(n(r))},each:function(n){n(r)},bind:t,exists:t,forall:t,filter:function(n){return n(r)?i:p},toArray:function(){return[r]},toString:function(){return"some("+r+")"}};return i},S=r,_=function(n){return null==n?p:A(n)},D=Array.prototype.indexOf,U=Array.prototype.push,P=Object.keys,R=Object.hasOwnProperty,T=function(n,t){return R.call(n,t)},C=M(function(n,t){return f(n)&&f(t)?C(n,t):t}),I=M(function(n,t){return t}),N={getCustomPluginUrls:j,patch:i(function(){return!0},function(r){r.EditorManager.init=a(r.EditorManager.init,function(n){return[j(x(r),n)]}),r.EditorManager.createEditor=a(r.EditorManager.createEditor,function(n,t){return[n,j(x(r),t)]})})};function k(n,t,r){if(r||2===arguments.length)for(var e,i=0,o=t.length;i<o;i++)!e&&i in t||((e=e||Array.prototype.slice.call(t,0,i))[i]=t[i]);return n.concat(e||Array.prototype.slice.call(t))}function L(n,t){return function(n,t){for(var r=null!=t?t:u,e=0;e<n.length&&null!=r;++e)r=r[n[e]];return r}(n.split("."),t)}function q(n){return parseInt(n,10)}function V(n,t){var r=n-t;return 0==r?0:0<r?1:-1}function z(n,t,r){return{major:n,minor:t,patch:r}}function B(n){var t=/([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);return t?z(q(t[1]),q(t[2]),q(t[3])):z(0,0,0)}function F(n,t){return!!n&&-1===function(n,t){var r=V(n.major,t.major);if(0!==r)return r;var e=V(n.minor,t.minor);if(0!==e)return e;var i=V(n.patch,t.patch);return 0!==i?i:0}(B([(r=n).majorVersion,r.minorVersion].join(".").split(".").slice(0,3).join(".")),B(t));var r}function $(o){return function(n){var t=L("tinymce.util.Tools",u),r=b(n.plugins),e=x(o).forced_plugins||[],i=0<e.length?r.concat(e):r;return[t.extend({},n,{plugins:i})]}}function G(){return(new Date).getTime()}function H(e){return function(){var n,t,r=(t="position",(((n=e).currentStyle?n.currentStyle[t]:window.getComputedStyle(n,null)[t])||"").toLowerCase());return"absolute"===r||"fixed"===r}}function J(n){n.parentNode.removeChild(n)}function K(n,t){n.notificationManager?n.notificationManager.open({text:t,type:"warning",timeout:0,icon:""}):n.windowManager.alert(t)}function Q(n){var t,r,e=L("tinymce.util.URI",u);(t=n.base_url)&&(this.baseURL=new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new e(this.baseURL)),r=n.suffix,n.suffix&&(this.suffix=r),this.defaultSettings=n}function W(n){return[L("tinymce.util.Tools",u).extend({},this.defaultSettings,n)]}function X(n){c(n,[rn.patch,en.patch,Y.patch,N.patch])}var Y={patch:i(function(n){return F(n,"4.7.0")},function(r){r.EditorManager.init=a(r.EditorManager.init,$(r.EditorManager)),r.EditorManager.createEditor=a(r.EditorManager.createEditor,function(n,t){return k([n],$(r.EditorManager)(t),!0)})})},Z=function(n,t,r,e,i){var o,u=G();o=setInterval(function(){n()&&(clearInterval(o),t()),G()-u>i&&(clearInterval(o),r())},e)},nn=function(n,t){var r,e=((r=document.createElement("div")).style.display="none",r.className="mce-floatpanel",r);document.body.appendChild(e),Z(H(e),function(){J(e),n()},function(){J(e),t()},10,5e3)},tn=function(n){n.EditorManager.on("AddEditor",function(n){var t=n.editor,r=t.settings.service_message;r&&nn(function(){K(t,r)},function(){alert(r)})})},rn={patch:i(function(n){return"function"!=typeof n.overrideDefaults},function(r){tn(r),r.overrideDefaults=Q,r.EditorManager.init=a(r.EditorManager.init,W),r.EditorManager.createEditor=a(r.EditorManager.createEditor,function(n,t){return k([n],W.call(r,t),!0)})})},en={patch:i(function(n){return F(n,"4.5.0")},function(n){var e;n.overrideDefaults=a(n.overrideDefaults,(e=n,function(n){var t=n.plugin_base_urls;for(var r in t)e.PluginManager.urls[r]=t[r]}))})};X(u.tinymce)}();

(function(cloudSettings) {
		tinymce.overrideDefaults(cloudSettings);
})({"rtc_tenant_id":"no-origin","editimage_api_key":"no-origin","imagetools_proxy":"https://imageproxy.tiny.cloud/2/image","autocorrect_service_url":"https://spelling.tiny.cloud","suffix":".min","linkchecker_service_url":"https://hyperlinking.tiny.cloud","spellchecker_rpc_url":"https://spelling.tiny.cloud","spellchecker_api_key":"no-origin","tinydrive_service_url":"https://catalog.tiny.cloud","api_key":"no-origin","imagetools_api_key":"no-origin","tinydrive_api_key":"no-origin","export_image_proxy_service_url":"https://imageproxy.tiny.cloud","forced_plugins":["chiffer"],"referrer_policy":"origin","custom_plugin_urls":{"export":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/export/plugin.min.js","powerpaste":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/powerpaste/plugin.min.js","grammar":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/grammar/plugin.min.js","casechange":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/casechange/plugin.min.js","tableofcontents":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/tableofcontents/plugin.min.js","advtable":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/advtable/plugin.min.js","editimage":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/editimage/plugin.min.js","tinymcespellchecker":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/tinymcespellchecker/plugin.min.js","mergetags":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/mergetags/plugin.min.js","autocorrect":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/autocorrect/plugin.min.js","linkchecker":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/linkchecker/plugin.min.js","checklist":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/checklist/plugin.min.js","mediaembed":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/mediaembed/plugin.min.js","tinycomments":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/tinycomments/plugin.min.js","rtc":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/rtc/plugin.min.js","pageembed":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/pageembed/plugin.min.js","extractions":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/extractions/plugin.min.js","tinydrive":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/tinydrive/plugin.min.js","advcode":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/advcode/plugin.min.js","formatpainter":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/formatpainter/plugin.min.js","permanentpen":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/permanentpen/plugin.min.js","a11ychecker":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/a11ychecker/plugin.min.js","footnotes":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/footnotes/plugin.min.js","mentions":"https://cdn.tiny.cloud/1/no-origin/tinymce/6.1.2-8/plugins/mentions/plugin.min.js"},"chiffer_snowplow_service_url":"https://sp.tinymce.com/i","mediaembed_api_key":"no-origin","promotion":false,"rtc_service_url":"https://rtc.tiny.cloud","editimage_proxy_service_url":"https://imageproxy.tiny.cloud","linkchecker_api_key":"no-origin","mediaembed_service_url":"https://hyperlinking.tiny.cloud","service_message":"We’re unable to check your domain because the referer header is missing. Please read the \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/docs/tinymce/6/cloud-troubleshooting/\"\u003eGuide\u003c/a\u003e on how to ensure your referer header is present, so we can then customize your editor experience."});

/* Ephox chiffer plugin
*
* Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
*
* Version: 2.0.0-19
*/

!function(){"use strict";function n(e){return!(null==e)}function r(){}function t(e,n,r,o){return function(e,t){for(var n=S(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i)}}(e,function(e,t){(n(e,t)?r:o)(e,t)}),1}function o(e,t){return h.call(e,t)}function i(e){var t=e.command;return o(P,t)?function(e){if(n(e.value)&&o(e.value,"list-style-type")){e=e.value["list-style-type"];return"advlist_"+(""===e?"default":e)}}(e):o(w,t)?w[t]:o(I,t)?I[t]:o(b,t)?b[t]:void 0}function c(e,t){return e=e,t=t,-1<k.call(e,t)}function a(e){return"plugin_"+e+"_loaded"}function s(e){var n,e=(t(e,function(e,t){e=!!e.isStub;return!!t&&!e&&c(O,t)},(n=e={},function(e,t){n[t]=e}),r),e);return function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o)}return r}(S(e),a)}function u(e,t){!function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)}(s(t),e.sendStat)}function l(){return(new Date).getTime()}function e(e,t){var o,i,n,t=(o=e,i=t,{send:function(e,t,n){var e="?aid="+i+"&tna=tinymce_cloud&p=web&dtm="+t+"&stm="+l()+"&tz="+("undefined"!=typeof Intl?encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone):"N%2FA")+"&e=se&se_ca="+e,r=document.createElement("img");r.src=o.chiffer_snowplow_service_url+e;e=function(e){return function(){r.onload=null,r.onerror=null,n(e)}};r.onload=e(!0),r.onerror=e(!1)}});return n=t,{sendStat:function(e){n.send(e,l(),r)}}}var d,f,m,p,g,_,v=(d="string",function(e){return e=typeof(t=e),(null===t?"null":"object"==e&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==e&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":e)===d;var t}),y=(f=void 0,function(e){return f===e}),S=Object.keys,h=Object.hasOwnProperty,I={mceInsertToc:"toc_insert",mceUpdateToc:"toc_update"},w={mceEditImage:"imagetools_open_dialog",mceImageRotateLeft:"imagetools_rotate",mceImageRotateRight:"imagetools_rotate",mceImageFlipVertical:"imagetools_flip",mceImageFlipHorizontal:"imagetools_flip"},P={InsertUnorderedList:!0,InsertOrderedList:!0},b={mceInsertTemplate:"template_insert",mceInsertDate:"insertdatetime_insert",mceInsertTime:"insertdatetime_insert",mcePreview:"preview_open_dialog",mceAnchor:"anchor_open_dialog"},k=Array.prototype.indexOf,O=["advcode","advtable","a11ychecker","checklist","export","formatpainter","linkchecker","mediaembed","mentions","pageembed","permanentpen","powerpaste","rtc","tinycomments","tinydrive","tinymcespellchecker","casechange","editimage","tableofcontents"];p=null!==(g=tinymce.defaultOptions)&&void 0!==g?g:tinymce.defaultSettings,g={load:r},_=function(e){e=e.api_key;return v(e)?e:void 0}(p),g=void 0===_?g:((m=e(p,_)).sendStat("script_load"),{load:function(e){e.once("init",function(){return m.sendStat("init")}),e.once("focus",function(){return m.sendStat("focus")}),e.on("ExportPdf",function(){return m.sendStat("export_pdf")}),e.on("PastePreProcess PowerPasteTempStats",function(e){e=e.source;n(e)&&m.sendStat("powerpaste_"+e)}),e.on("VisualChars",function(e){!0===e.state&&m.sendStat("visualchars_true")}),e.on("RtcSessionConnected",function(e){var t=e.time;switch(t){case 0:m.sendStat("rtc_started");break;case 5:case 10:case 20:m.sendStat("rtc_connected_"+t+"min")}}),e.on("RtcSessionError",function(){return m.sendStat("rtc_error")}),e.on("RtcSessionDirty",function(){return m.sendStat("rtc_edited")}),e.on("SpellcheckerLanguageChanged",function(e){e=e.language;m.sendStat("spellcheckerpro_language_changed_"+e)}),e.on("ExecCommand",function(e){e=i(e);y(e)||m.sendStat(e)}),e.on("PreInit",function(){u(m,e.plugins)})}}),tinymce.PluginManager.add("chiffer",g.load)}();
var r,l,g,c,f,s,d,t=!1,e={init:function(){var e="agLoginAuth";this.getAuthSession(e)||t?(this.setAuthSession(e,this.getAuthSession(e)),r=this.getAuthSession("tournamentDetails")||{},g=this.getAuthSession(e).userProfileId,l=r.tournamentId,s=r.startDate,d=r.endDate,r&&r.tournamentId?(this.setAuthSession("tournamentDetails",r),r.friendlyName?(e=this.getApiUrl("tournaments")+(t?"":r.friendlyName),$.ajax({type:"GET",url:e,contentType:"application/json",dataType:"json",timeout:0,success:function(e,t){e&&e.tournamentInfo?this.updateData(e):($(".loading").hide(),$("#previous-data-load-error").removeClass("hide")),$(".page-header").removeClass("loading")}.bind(this),error:function(e,t,a){$(".loading").hide(),this.updateData(),$("#previous-data-load-error").removeClass("hide"),$(".page-header").removeClass("loading")}.bind(this)})):this.updateData()):window.location.href="./active-tournaments.html"):(window.sessionStorage.setItem("agReDirectPage","./create-landing.html"),window.location.href="./login.html")},updateData:function(o){var t,a,n,e={},u=[];function i(l,s,e,d){var e=e.getApiUrl("upload"),t=new FormData,m=$(l)[0].files;t.append("imageFile",$(l)[0].files[0]),t.append("userProfileId",g),t.append("mediaFolder","Tournament"),t.append("mediaFolderId",123),t.append("mediaSubFolder",d),t.append("mediaSubFolderId",456),$.ajax({type:"POST",url:e,timeout:0,enctype:"multipart/form-data",processData:!1,contentType:!1,cache:!1,data:t,success:function(e,t){if(e)if("Team"===d)c=e.mediaId;else if("Logo"===d)for(var a={mediaRole:d,mediaFriendlyName:d+e.mediaId,mediaId:e.mediaId},n=0;n<m.length;n++){var o,i,r=m[n];r.type.match(/image.*/)&&(o=document.getElementById($(l).attr("name")+"_thumbnail"),$(o).attr("data-mediaId",a.mediaId),o.file=r,(i=new FileReader).onload=function(t){return function(e){t.src=e.target.result,t.style.display="block","Logo"===d?(u[s]={image:""},u[s].image=e.target.result):f=e.target.result}}(o),i.readAsDataURL(r))}}.bind(this),error:function(e,t,a){console.log("failed")}.bind(this)})}e.toolbar="mytoolbar",e.toolbar_mytoolbar="{bold,italic,underline,insertorderedlist,insertunorderedlist,justifyleft,justifycenter,justifyright,insertlink,code,undo,redo}",tinymce.init({selector:"#div_webPageBlob",menubar:!1,plugins:"link, lists ",toolbar:"undo redo  | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link anchor ",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",setup:function(t){t.on("init",function(e){o&&o.tournamentInfo&&o.tournamentInfo.webPageBlob&&(t.setContent(decodeURIComponent(o.tournamentInfo.webPageBlob)),t.getContent())})}}),!o&&r&&l&&s&&d?o={tournamentInfo:{tournamentId:l,startDate:s,endDate:d,webPageTitle:"",webPageBlob:""}}:o||(window.location.href="./active-tournaments.html"),o&&o.tournamentInfo&&(a=o.tournamentInfo.friendlyName?o.tournamentInfo.friendlyName.split("_"):"",n="",a&&a.forEach(function(e,t){t<a.length-1&&(n=n+(n?"_":"")+e)}),o.tournamentInfo.friendlyName&&($(".page-header .admin-title").html("Edit Landing page - "+n),$(".tournament-details-head").html("Tournament Id - "+o.tournamentInfo.tournamentId+", "+this.dateConversion(o.tournamentInfo.startDate,!0)+" - "+this.dateConversion(o.tournamentInfo.endDate,!0)),$("#view-current-btn").attr("href","./landing.html#"+o.tournamentInfo.friendlyName).removeClass("hide")),$("[name=webPageTitle]").val(o.tournamentInfo.webPageTitle),$("[name=friendlyName]").val(n),o.tournamentInfo.titleBackgroundMediaId&&(c=o.tournamentInfo.titleBackgroundMediaId),o.tournamentInfo.titleBackgroundImage&&(f=o.tournamentInfo.titleBackgroundImage,$("#bg_landingimages_thumbnail").attr("src",f).show()),o.tournamentImages&&o.tournamentImages.length&&o.tournamentImages.forEach(function(e,t){$("#logo_image"+t+"_thumbnail").attr("src",e.imageUrl).attr("data-mediaId",e.mediaId).show()})),$("#preview-btn").on("click",function(){var e=tinymce.activeEditor.getContent();if(landingTemplate=Handlebars.compile($("[data-template='landingTemplate']").html()),formError=!1,u=[],$(".logo_thumbnail").each(function(e,t){var a=$(t).attr("data-mediaid"),t=$(t).attr("src");a&&u.push({mediaId:a,mediaFriendlyName:"Logo"+a,mediaRole:"Logo",image:t})}),(t={logoImages:u,webPageTitle:"",startDate:o&&this.dateConversion(o.tournamentInfo.startDate),endDate:o&&this.dateConversion(o.tournamentInfo.endDate),golfCourseName:o&&o.tournamentInfo.golfCourseName,learnMore:"Learn More",titleBackgroundImage:f||o&&o.tournamentInfo.titleBackgroundImage,titleBackgroundMediaId:o&&o.tournamentInfo.titleBackgroundMediaId,singleDay:o&&this.dateConversion(o.tournamentInfo.startDate)===this.dateConversion(o.tournamentInfo.endDate)}).webPageBlob=e,t.friendlyName=$("[name=friendlyName]").val()?$("[name=friendlyName]").val().trim():"",t.webPageBlobValue=encodeURIComponent(e),t.webPageTitleValue=$("[name=webPageTitle]").val(),t.webPageTitle=$("[name=webPageTitle]").val(),t.webPageTitle=t.webPageTitle.replace("[[STARTDATE]]",t.startDate),t.webPageTitle=t.webPageTitle.replace("[[ENDDATE]]",t.endDate),t.webPageTitle=t.webPageTitle.replace("[[STARTDATEYEAR]]",o&&this.dateConversion(o.tournamentInfo.startDate,!0)),t.webPageTitle=t.webPageTitle.replace("[[ENDDATEYEAR]]",o&&this.dateConversion(o.tournamentInfo.endDate,!0)),t.webPageBlob=t.webPageBlob.replace("[[STARTDATE]]",t.startDate),t.webPageBlob=t.webPageBlob.replace("[[ENDDATE]]",t.endDate),t.webPageBlob=t.webPageBlob.replace("[[STARTDATEYEAR]]",o&&this.dateConversion(o.tournamentInfo.startDate,!0)),t.webPageBlob=t.webPageBlob.replace("[[ENDDATEYEAR]]",o&&this.dateConversion(o.tournamentInfo.endDate,!0)),o.sponsorers&&o.sponsorers.length&&(t.sponsorers=o.sponsorers),o.prizes&&o.prizes.length&&(t.prizes=o.prizes),t.webPageTitle=t.webPageTitle?t.webPageTitle.trim():"",t.friendlyName||($("[name=friendlyName]").parents(".form-field").addClass("error"),formError=!0),t.webPageTitle||($("[name=webPageTitle]").parents(".form-field").addClass("error"),formError=!0),formError)return $("html, body").animate({scrollTop:$(".page-header").offset().top-30},"slow"),void $("#create-landing-preview").hide();$("[name=friendlyName]").parents(".form-field").removeClass("error"),$("[name=webPageTitle]").parents(".form-field").removeClass("error"),setTimeout(function(){$(".landing-content").html(landingTemplate(t))},500),$("#create-landing-preview").show(),$(".logo-images").html(""),u.forEach(e=>{$(".logo-images").append('<img class="logoimages" src='+e.image+" />")}),$("#publish-btn").removeClass("hide"),$("#publish-error").addClass("hide"),$("#publish-success").addClass("hide"),$("html, body").animate({scrollTop:$("#create-landing-preview").offset().top-30},"slow")}.bind(this)),$("#publish-btn").on("click",function(){var e=this.getApiUrl("create"),a=[],n={userProfileId:g,tournamentId:l,friendlyName:t.friendlyName+"_"+(o?this.dateConversion(o.tournamentInfo.startDate,!0,!0):""),title:t.webPageTitleValue,webpageBlob:t.webPageBlobValue,titleBackgroundMediaId:c||t.titleBackgroundMediaId};$(".logo_thumbnail").each(function(e,t){t=$(t).attr("data-mediaid");t&&a.push({mediaId:t,mediaFriendlyName:"Logo"+t,mediaRole:"Logo"})}),a&&a.length&&(n.images={images:a}),$(".button-wrapper").addClass("loading"),$.ajax({type:"POST",url:e,contentType:"application/json",dataType:"json",timeout:0,data:JSON.stringify(n),success:function(e,t){r.friendlyName=n.friendlyName,this.setAuthSession("tournamentDetails",r),$(".button-wrapper").removeClass("loading");$("#publish-success").html('Your page published successfully, please validate - <a target="_blank" href="./landing.html#'+n.friendlyName+'">'+n.friendlyName+"</a>"),$("#publish-error").addClass("hide"),$("#publish-success").removeClass("hide"),$("#publish-btn").addClass("hide")}.bind(this),error:function(e,t,a){$(".button-wrapper").removeClass("loading"),$("#publish-error").removeClass("hide"),$("#publish-success").addClass("hide"),$("#publish-btn").addClass("hide")}.bind(this)})}.bind(this)),$("[name=bg_landingimages]").on("change",function(e){var t=$("[name=bg_landingimages]");i(t,$(t).data("index"),this,"Team")}.bind(this)),$("[name=logo_image0]").on("change",function(e){var t=$("[name=logo_image0]");i(t,$(t).data("index"),this,"Logo")}.bind(this)),$("[name=logo_image1]").on("change",function(e){var t=$("[name=logo_image1]");i(t,$(t).data("index"),this,"Logo")}.bind(this)),$("[name=logo_image2]").on("change",function(e){var t=$("[name=logo_image2]");i(t,$(t).data("index"),this,"Logo")}.bind(this))},getAuthSession:function(e){var t=window.localStorage.getItem(e);if(null!==t){t=JSON.parse(t);if(new Date(t.expirationDate)>new Date&&t)return t.value;window.localStorage.removeItem(e)}return null},setAuthSession:function(e,t){t={value:t,expirationDate:new Date((new Date).getTime()+36e7).toISOString()};window.localStorage.setItem(e,JSON.stringify(t))},getApiUrl:function(e){return{test:{tournaments:"https://beta.actiongolfers.com/website/tournament?friendlyName=",create:"https://beta.actiongolfers.com/website/tournament/create",upload:"https://beta.actiongolfers.com/media/upload"},prod:{tournaments:"https://api.actiongolfers.com/website/tournament?friendlyName=",create:"https://api.actiongolfers.com/website/tournament/create",upload:"https://api.actiongolfers.com/media/upload"},local:{tournaments:"http://localhost:8080/json/tournamentDetails.json",create:"create",upload:"upload"}}["https://actiongolfers.com"===window.origin?"prod":t?"local":"test"][e]},dateConversion:function(e,t,a){e=new Date(e),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+this.formatWithZero(e.getDate())+(t?", "+e.getFullYear():"");return t=a?(t=t.replace(" ","")).replace(", ",""):t},formatWithZero:function(e){return e<9?"0"+e:e}};e.init();