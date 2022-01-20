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
/**
 * @license Copyright (c) 2003-2020, richtexteditor - CuteSoft Components Inc. All rights reserved.
 * For licensing, see http://richtexteditor.com/license.aspx
 */

if (!window.RTE_DefaultConfig) window.RTE_DefaultConfig = { };

RTE_DefaultConfig.editablePaddingTop = 2;
RTE_DefaultConfig.editablePaddingBottom = 2;
RTE_DefaultConfig.editablePaddingLeft = 2;
RTE_DefaultConfig.editablePaddingRight = 2;

RTE_DefaultConfig.zIndexFullPage = "9999";
RTE_DefaultConfig.zIndexFloat = "99999";
RTE_DefaultConfig.zIndexDialog = "999999";
RTE_DefaultConfig.zIndexDropDown = "9999999";

RTE_DefaultConfig.fontNameDropDownMinWidth = "90px";
RTE_DefaultConfig.fontNameDropDownMaxWidth = "140px";

RTE_DefaultConfig.tooltipAttribute = "rte-tooltip";    //change to "no-tooltip" to hide tooltip

RTE_DefaultConfig.timeoutAddToUndo = 900; //When uses types fast, wait 900ms to add undo item.
RTE_DefaultConfig.skin = "default";     // default, rounded-corner, gray or blue. Sets the skin for how the toolbar is draw. Create your custom skin or choose from predefined skins.
RTE_DefaultConfig.toolbar = "default"; // default, basic or full. Auto configures the toolbar with a set of buttons on desktop.
RTE_DefaultConfig.toolbarMobile = "mobile";   // The toolbar set on mobile devices. 
RTE_DefaultConfig.maxWidthForMobile = 992; // When the screen (browser window) gets smaller than 992, editor should have mobile toolbar.

RTE_DefaultConfig.urlType = "default";  //default(do nothing),absolute(all change to http(s)://...),relative(all change to /...)

RTE_DefaultConfig.enableDragDrop = true; // Enables or disables drag-and-drop support for the editor.
RTE_DefaultConfig.enableObjectResizing = true; //Specifies whether or not to allow the users resize an object winthin the RichTextEditor.
RTE_DefaultConfig.toggleBorder = true; //Specifies the ToggleBorder state. ToggleBorder is a handy function which allows you to see the borders without setting things to border = 1 or something like that in code.
RTE_DefaultConfig.readOnly = false; //Gets or sets a value which indicates whether the RichTextEditor should be an active HTML editor, or a read-only document viewer.

RTE_DefaultConfig.editorResizeMode = "both"; //both, height or none. Gets or sets the resize mode.
RTE_DefaultConfig.showPlusButton = true; // Specifies whether to display the editor plus button.
RTE_DefaultConfig.showTagList = true; // Specifies whether to display the tag selector in the editor bottom bar.
RTE_DefaultConfig.showStatistics = true; //Specifies whether to display the content statistics in the editor bottom bar.
RTE_DefaultConfig.showSelectedBlock = true;    //show selected paragraph as [__rte_select_block]{...}
RTE_DefaultConfig.focusOnLoad = false; // Specifies whether the editor grabs focus when the page loads. If this property is set to true then the editor will take focus, if it is set to false it will not.
RTE_DefaultConfig.allowScriptCode = false; //Specifies whether to strip all script elements and script contents from the html to prevent javaScript injection. When this property is set to false (the default) Rich Text Editor strips all script elements and script contents from the html.
RTE_DefaultConfig.showFloatTextToolBar = false;  // Specifies whether to display the FloatTextToolBar.
RTE_DefaultConfig.showFloatLinkToolBar = true; // Specifies whether to display the FloatLinkToolBar.
RTE_DefaultConfig.showFloatImageToolBbar = true; // Specifies whether to display the FloatImageToolBbar.
RTE_DefaultConfig.showFloatTableToolBar = true; // Specifies whether to display the FloatTableToolBar.
RTE_DefaultConfig.showFloatParagraph = true; // Specifies whether to display the FloatParagraph.
RTE_DefaultConfig.maxHTMLLength = 0; // Gets or sets the maximum number of characters including the HTML tags allowed in the RichTextEditor. Default is -1, indicating no maximum.
RTE_DefaultConfig.maxTextLength = 0; //Gets or sets the maximum number of characters excluding the HTML tags allowed in the RichTextEditor. Default is -1, indicating no maximum.
RTE_DefaultConfig.tagWhiteList = [];  // The white list contains a list of tags that can be used in the editor.
RTE_DefaultConfig.tagBlackList = [];  // The black list contains a list of tags that cannot be used in the editor.

RTE_DefaultConfig.tabSpaces = 4;	//Gets or sets the number of spaces to be inserted when the user hits the "tab" key.
RTE_DefaultConfig.enterKeyTag = "p" // Determines what happens when the "enter" key is pressed in the editor. div, p or br.

RTE_DefaultConfig.pasteMode = "Auto"; // Specifies the manner in which the editor handles pasted text. Auto,Disabled,PasteText,PasteWord.

RTE_DefaultConfig.floatParagraphPos = "left";//left or right
RTE_DefaultConfig.floatParagraphPosX = 0; //x offset
RTE_DefaultConfig.floatParagraphPosY = 0; //y offset
RTE_DefaultConfig.url_base = "/richtexteditor"; // Specifies a base URL of richtexteditor
RTE_DefaultConfig.contentCssUrl = "%url_base%/runtime/richtexteditor_content.css"; // Specifies the location of the style sheet that will be used by the editable area.
RTE_DefaultConfig.previewCssUrl = "%url_base%/runtime/richtexteditor_preview.css"; // Specifies the location of the style sheet that will be used by the preview window.
RTE_DefaultConfig.previewScriptUrl = "%url_base%/runtime/richtexteditor_preview.js"; // Specifies the location of javascript file that will be used by the preview window.
RTE_DefaultConfig.helpUrl = "%url_base%/runtime/help.htm"

RTE_DefaultConfig.contentCssText = "";//"body{background-color:#eee}"; 	Gets or sets inline CSS text that will be used by the editable area. 	//TODO:add api example
RTE_DefaultConfig.previewCssText = "";//"body{background-color:#eee}"; 	Gets or sets inline CSS text that will be used by the preview window. //TODO:add api example

RTE_DefaultConfig.editorBodyCssClass = "";  //Gets or sets the class of editing area to switch styles.
RTE_DefaultConfig.editorBodyCssText = "";   // Gets or sets inline CSS text that will be used by the editable body.

RTE_DefaultConfig.paragraphClass = null;	// auto add class name to new paragraphs
RTE_DefaultConfig.insertTableTag = "<table></table>"; // Default table attributes when inserting a table.
RTE_DefaultConfig.insertRowTag = "<tr></tr>"; // Default row attributes when creating table row.
RTE_DefaultConfig.insertCellTag = "<td><br/></td>"; // Default cell attributes when inserting a cell.



RTE_DefaultConfig.insertOrderedListItems = [["decimal", "1,2,3,4,5"], ["lower-alpha", "a,b,c,d,e"], ["upper-alpha", "A,B,C,D,E"], ["lower-roman", "ⅰ,ⅱ,ⅲ,ⅳ,ⅴ"], ["upper-roman", "Ⅰ,Ⅱ,ⅢⅢ,Ⅳ,Ⅴ"]];

RTE_DefaultConfig.insertUnorderedListItems = [["disc", "Disc"], ["circle", "Circle"], ["square", "Square"]];

RTE_DefaultConfig.fontSizeItems = "8,9,10,11,12,13,14,16,18,24,36,48,60,72,96";// A predefined set of font sizes.
RTE_DefaultConfig.fontNameItems = "Arial,Arial Black,Comic Sans MS,Courier New,Tahoma,Georgia,Helvetica, Segoe UI,Sans-Serif,Impact,Times New Roman,Verdana";// A predefined set of font names.
RTE_DefaultConfig.lineHeightItems = "100%,150%,200%,250%,300%,350%,400%,450%,500%,600%"// A predefined set of line height items.
// all text name shall be lower case


RTE_DefaultConfig.paragraphItems = "Normal,H1,H2,H3,H4,H5,H6"// A predefined set of format blocks.

RTE_DefaultConfig.characterItems = [
	{ tab: "Unicode", items: ["&#402;", "&#913;", "&#914;", "&#915;", "&#916;", "&#917;", "&#918;", "&#919;", "&#920;", "&#921;", "&#922;", "&#923;", "&#924;", "&#925;", "&#926;", "&#927;", "&#928;", "&#929;", "&#931;", "&#932;", "&#933;", "&#934;", "&#935;", "&#936;", "&#937;", "&#945;", "&#946;", "&#947;", "&#948;", "&#949;", "&#950;", "&#951;", "&#952;", "&#953;", "&#954;", "&#955;", "&#956;", "&#957;", "&#958;", "&#959;", "&#960;", "&#961;", "&#962;", "&#963;", "&#964;", "&#965;", "&#966;", "&#967;", "&#968;", "&#969;", "&#977;", "&#978;", "&#982;", "&#8226;", "&#8230;", "&#8242;", "&#8243;", "&#8254;", "&#8260;", "&#8472;", "&#8465;", "&#8476;", "&#8482;", "&#8501;", "&#8592;", "&#8593;", "&#8594;", "&#8595;", "&#8596;", "&#8629;", "&#8656;", "&#8657;", "&#8658;", "&#8659;", "&#8660;", "&#8704;", "&#8706;", "&#8707;", "&#8709;", "&#8711;", "&#8712;", "&#8713;", "&#8715;", "&#8719;", "&#8722;", "&#8722;", "&#8727;", "&#8730;", "&#8733;", "&#8734;", "&#8736;", "&#8869;", "&#8870;", "&#8745;", "&#8746;", "&#8747;", "&#8756;", "&#8764;", "&#8773;", "&#8773;", "&#8800;", "&#8801;", "&#8804;", "&#8805;", "&#8834;", "&#8835;", "&#8836;", "&#8838;", "&#8839;", "&#8853;", "&#8855;", "&#8869;", "&#8901;", "&#8968;", "&#8969;", "&#8970;", "&#8971;", "&#9001;", "&#9002;", "&#9674;", "&#9824;", "&#9827;", "&#9829;", "&#9830;"] }
	, { tab: "ASCII", from: 33, to: 126 }
	, { tab: "European", from: 192, to: 255 }
	, { tab: "Roma", from: 913, to: 1014 }
	, { tab: "Webdings", font: "Webdings", from: 33, to: 255 }, { tab: "Wingdings", font: "Wingdings", from: 33, to: 255 }, { tab: "Symbol", font: "Symbol", from: 33, to: 255 }]; // A predefined set of characters.


RTE_DefaultConfig.foreColorItems = ["#000000", "#993300", "#333300", "#003300", "#003366", "#000080", "#333399", "#333333",
	"#800000", "#ff6600", "#808000", "#008000", "#008080", "#0000ff", "#666699", "#808080",
	"#ff0000", "#ff9900", "#99cc00", "#339966", "#33cccc", "#3366ff", "#800080", "#999999",
	"#ff00ff", "#ffcc00", "#ffff00", "#00ff00", "#00ffff", "#00ccff", "#993366", "#c0c0c0",
	"#ff99cc", "#ffcc99", "#ffff99", "#ccffcc", "#ccffff", "#99ccff", "#cc99ff", "#ffffff"];

RTE_DefaultConfig.backColorItems = ["#000000", "#993300", "#333300", "#003300", "#003366", "#000080", "#333399", "#333333",
	"#800000", "#ff6600", "#808000", "#008000", "#008080", "#0000ff", "#666699", "#808080",
	"#ff0000", "#ff9900", "#99cc00", "#339966", "#33cccc", "#3366ff", "#800080", "#999999",
	"#ff00ff", "#ffcc00", "#ffff00", "#00ff00", "#00ffff", "#00ccff", "#993366", "#c0c0c0",
	"#ff99cc", "#ffcc99", "#ffff99", "#ccffcc", "#ccffff", "#99ccff", "#cc99ff", "#ffffff"];

RTE_DefaultConfig.linkItems = [
	"https://www.intel.com"
	,
	"https://www.ibm.com"
	,
	"https://www.microsoft.com"
	,
	"https://www.google.com"
	,
	"https://www.apple.com"
] // A predefined set of links.

RTE_DefaultConfig.imageItems = [
	"http://richtexteditor.com/uploads/1.jpg",
	"http://richtexteditor.com/uploads/2.jpg",
	"http://richtexteditor.com/uploads/3.jpg",
	"http://richtexteditor.com/uploads/4.jpg",
	"http://richtexteditor.com/uploads/5.jpg",
	"http://richtexteditor.com/uploads/6.jpg"
]	// For insert image by URL


RTE_DefaultConfig.galleryImages = [
	"http://richtexteditor.com/uploads/1.jpg",
	"http://richtexteditor.com/uploads/2.jpg",
	"http://richtexteditor.com/uploads/3.jpg",
	"http://richtexteditor.com/uploads/4.jpg",
	"http://richtexteditor.com/uploads/5.jpg",
	"http://richtexteditor.com/uploads/6.jpg"
]; // Default images for gallery Images dialog. 

RTE_DefaultConfig.htmlTemplates = [
	["My Doc 1", "<h2>MyTitleMyTitleMyTitleMyTitleMyTitleMyTitleMyTitle</h2><p>Paragraph 1 </p><p>Paragraph 2 </p><p>Paragraph 3 </p><p>Paragraph 4 </p><p>Paragraph 5 </p>"]
	,
	["My Doc 1", "<h2>MyTitleMyTitleMyTitle</h2><p>Paragraph 1 </p><p>Paragraph 2 </p><p>Paragraph 3 </p><p>Paragraph 4 </p><p>Paragraph 5 </p>"]
];// Default html Templates for html Templates dialog. 


RTE_DefaultConfig.inlineStyles = [["Red", "color:red", "color:red"], ["Bold", "font-weight:bold", "font-weight:bold"], ["Mark", "my-cls-mark"], ["Warning", "my-cls-warning"]]; // Default CSS styles for inline styles dropdown. 
RTE_DefaultConfig.paragraphStyles = [["Red", "color:red", "color:red"], ["Bold", "font-weight:bold", "font-weight:bold"], ["Quote", "my-cls-quote"], ["LargeCenter", "my-cls-largecenter"]]; // Default CSS styles for paragraph styles dropdown. 
RTE_DefaultConfig.imageStyles = [["Border", "border: 1px solid #ddd; border-radius: 4px; padding: 5px;"], ["grayscale", "filter: grayscale(100%);"], ["Shadow", "box-shadow:0 0 8px gray"], ["Margin10", "margin:10px"], ["Padding:10", "padding:10px"]
	, ["Rounded Corners", "border-radius: 10px;"], ["Rounded Images", "border-radius: 50%;"], ["Thumbnail Image", "border: 1px solid #ddd; border-radius: 4px; padding: 5px;width:150px"]// Default CSS styles for image Styles dropdown. 
];
RTE_DefaultConfig.linkStyles = [["Margin10", "margin:10px"], ["Padding:10", "padding:10px"], ["BigText", "font-size:36px"]]; // Default CSS styles for link Styles dropdown. 




RTE_DefaultConfig.toolbar_default = "{bold,italic,underline,forecolor,backcolor}|{justifyleft,justifycenter,justifyright,justifyfull}|{insertorderedlist,insertunorderedlist,indent,outdent,insertblockquote,insertemoji}"
	+ " #{paragraphs:toggle,fontname:toggle,fontsize:toggle,inlinestyle,lineheight}"
	+ " / {removeformat,cut,copy,paste,delete,find}|{insertlink,insertchars,inserttable,insertimage,insertvideo,insertdocument,inserttemplate,insertcode}|{preview,code,selectall}"
	+ "#{toggleborder,fullscreenenter,fullscreenexit,undo,redo,togglemore}"; // Default set of buttons that appears in the rich text editor's toolbar on desktop.

RTE_DefaultConfig.toolbar_mobile = "{bold,italic,underline|fontname:toggle,fontsize:toggle,menu_paragraphop|forecolor,backcolor}"
	+ "{insertlink,insertemoji,inserttable,insertimage,removeformat}"
	+ "#{toggleborder,fullscreenenter,fullscreenexit,undo,redo,togglemore}";  // Default set of buttons that appears in the rich text editor's toolbar on mobile.

RTE_DefaultConfig.toolbar_basic = "{bold,italic,underline}|{fontname,fontsize}|{insertlink,insertemoji,insertimage,insertvideo}|removeformat|code"
	+ "#{toggleborder,fullscreenenter,fullscreenexit,undo,redo,togglemore}"; // Basic set of buttons that appears in the rich text editor's toolbar.

RTE_DefaultConfig.toolbar_full = "{bold,italic,underline,forecolor,backcolor}|{justifyleft,justifycenter,justifyright,justifyfull}|{insertorderedlist,insertunorderedlist,indent,outdent}{superscript,subscript}"
	+ " #{paragraphs:toggle,fontname:toggle,fontsize:toggle,inlinestyle,lineheight}"
	+ " / {removeformat,cut,copy,paste,delete,find}|{insertlink,unlink,insertblockquote,insertemoji,insertchars,inserttable,insertimage,insertgallery,insertvideo,insertdocument,inserttemplate,insertcode}"
	+ "#{preview,code,selectall}"
	+ " /{paragraphs:dropdown | fontname:dropdown | fontsize:dropdown} {paragraphstyle,toggle_paragraphop,menu_paragraphop}"
	+ "#{toggleborder,fullscreenenter,fullscreenexit,undo,redo,togglemore}"; // Full set of buttons that appears in the rich text editor's toolbar.

RTE_DefaultConfig.toolbar_office = "<@COMMON,ribbonpaste,pastetext,pasteword,{save,new,print}/{cut,copy,delete,find}/{undo,redo|formatpainter}><@FORMAT,[fontname,fontsize]/{bold,italic,underlinemenu|forecolor,backcolor}/{superscript,subscript,changecase|removeformat,cleancode,selectall}><@PARAGRAPHS,[paragraphs,styles]/{justifymenu,lineheight,ltr,rtl,insertlinemenu}/{insertorderedlist,insertunorderedlist,indent,outdent,insertblockquote}><@INSERT,ribbontable,insertgallery,insertimage,{insertform,insertbox,insertlayer,insertfieldset,pageproperties,help,toggleborder,fullscreen}/{insertlink,unlink,insertanchor,insertimagemap,insertdate,insertchars,virtualkeyboard}/{inserttemplate,insertdocument,insertvideo,syntaxhighlighter,insertyoutube,html5,googlemap}>";

RTE_DefaultConfig.subtoolbar_more = "{strike,superscript,subscript,ucase,lcase,inserthorizontalrule,html2pdf,insertdate} #{newdoc,load,save,print,help}"; // A set of buttons that appears in the subtoolbar of default toolbar set.
RTE_DefaultConfig.subtoolbar_more_full = "{strike,ucase,lcase,inserthorizontalrule,html2pdf,insertdate} #{newdoc,save,print,help}";// A set of buttons that appears in the subtoolbar of full toolbar set.
RTE_DefaultConfig.subtoolbar_more_mobile = "{save} #{newdoc,help}"; // A set of buttons that appears in the subtoolbar of mobile toolbar set.
RTE_DefaultConfig.subtoolbar_paste = "pasteauto,pastetext,pasteword";  // A set of buttons that appears in the rich text editor's paste subtoolbar.
RTE_DefaultConfig.subtoolbar_paragraphop = "{justifyleft,justifycenter,justifyright,insertorderedlist,insertunorderedlist,indent,outdent,insertblockquote}"   // A set of buttons that appears in the rich text editor's paragraph subtoolbar.
RTE_DefaultConfig.subtoolbar_table = "controlsizeauto,controlsize100,controlsize75,controlsize50,tabledelete";   // A set of buttons that appears in the table subtoolbar.
RTE_DefaultConfig.subtoolbar_tablerow = "tablerowinsertabove,tablerowinsertbelow,tablerowdelete";  // A set of buttons that appears in the tablerow subtoolbar.
RTE_DefaultConfig.subtoolbar_tablecell = "tablecellmerge,tablecellsplitver,tablecellsplithor,tablecellforecolor,tablecellbackcolor"; // A set of buttons that appears in the tablecell subtoolbar.
RTE_DefaultConfig.subtoolbar_tablecolumn = "tablecolumninsertleft,tablecolumninsertright,tablecolumndelete"; // A set of buttons that appears in the tablecolumn subtoolbar.
RTE_DefaultConfig.subtoolbar_tableinsert = "tablerowinsertabove,tablerowinsertbelow,tablecolumninsertleft,tablecolumninsertright"; // A set of buttons that appears in the tableinsert subtoolbar.
RTE_DefaultConfig.subtoolbar_tabledelete = "tablecolumndelete,tablerowdelete,tabledelete"; // A set of buttons that appears in the tabledelete subtoolbar.
RTE_DefaultConfig.subtoolbar_controlsize = "controlsize,controlsizeauto,controlsize100,controlsize75,controlsize50,controlsize25"; // A set of buttons that appears in the controlsize subtoolbar.
RTE_DefaultConfig.subtoolbar_justify = "justifyleft,justifycenter,justifyright";  // A set of buttons that appears in the justify subtoolbar.
RTE_DefaultConfig.subtoolbar_controljustify = "justifyleft,justifycenter,justifyright,floatleft,floatright";  // A set of buttons that appears in the controljustify subtoolbar.
RTE_DefaultConfig.subtoolbar_floatparagraph = "pmoveup,pmovedown,pduplicate,pdelete,pmore"; // The default tool buttons of floatparagraph.

RTE_DefaultConfig.controltoolbar_TEXT = "removeformat | {bold,italic,underline,forecolor,backcolor}|{fontname:toggle,fontsize:toggle}|{insertlink,insertanchor}"  // A set of buttons that appears in the text selection float toolbar.
RTE_DefaultConfig.controltoolbar_A = "{linkstyle,insertlink,unlink}"; // A set of buttons that appears in the link selection float toolbar.
RTE_DefaultConfig.controltoolbar_TD = "{tableheader,menu_tablecell,menu_tablerow,menu_tablecolumn,menu_table}";//"{menu_tablecell,menu_tableinsert,menu_tabledelete,menu_table}",
RTE_DefaultConfig.controltoolbar_IMG = "{menu_controlsize,imagecaption,controlalt,controlinsertlink,controleditlink,controlopenlink,controlunlink}/{menu_controljustify,imagestyle,imageeditor,delete}";//justifyleft,justifycenter,justifyright

//RTE_DefaultConfig.svgCode_menu_tablerow='<svg viewBox="0 0 20 20" fill="#5F6368"><path d="M10.21 15c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 001.852-2.14c0-1.51-1.162-2.46-3.014-2.46H5.843V15h4.368zM7.908 6.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H7.908V6.673zm0 6.788v-2.864h1.73c1.216 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H7.907z"/></svg>';
RTE_DefaultConfig.pngCode_ribbonbg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABiCAYAAAB+koVqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAACB0RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgTVi7kSokAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA1LzA2LzEynpvHdgAAAeNJREFUeJzt3bFtw0AUBcFP4/qv1InhRA4kOaAauE0IAjMVMFs8no46vn8e7wGATWtm5vfxvPo5ALiZNTPzfBkhAOxZMzPvt4AAsOcTkKsfA4C7OQNy9VMAcDteYQGQeIUFQCIgACSfMxAFAWCPBQJAIiAAJH6FBUCyZmZeVz8FALezZmYefz6mCMAeN9EBSL6ufgAA7klAAEgEBIBkzcwcVz8FALdjgQCQCAgAiYAAkKyZcQgCwDaH6AAkXmEBkAgIAIlXWAAkZ0AOCQFgj1dYACQCAkDiHggAiUN0ABILBIDEGQgAiYAAkDgDASCxQABIBASAREAASAQEgMQhOgCJi4QAJF5hAZBYIAAkFggAiYAAkAgIAImAAJCch+hO0QHYZIEAkAgIAIlPmQCQWCAAJJ+b6DYIAHssEAASAQEgERAAEgEBIBEQABL3QABILBAAEgEBIPGXtgAkFggAiQUCQGKBAJAICACJgACQCAgAiZvoACQWCACJBQJAYoEAkAgIAImAAJAICACJgACQCAgAiYAAkAgIAMl5kfBwlRCAPRYIAImAAJAICACJgACQrJnxOV4AtlkgACTnAjFBANhkgQCQCAgAib+0BSCxQABIBASAxD0QABILBIBEQABIBASA5B+/giW9vHXuqwAAAABJRU5ErkJggg==';
RTE_DefaultConfig._allimageindexdata = 'save,newdoc,print,find,fit,cleanup,unformat,spell,cut,copy,paste,pastetext,pasteword,delete,undo,redo,insertpagebreak,insertdate,timer,specialchar,keyboard,div,layer,groupbox,image,gallery,flash,media,document,template,youtube,insrow_t,insrow_b,delrow,inscol_l,inscol_r,delcol,inscell,delcell,row,cell,mrgcell,spltcell,break,paragraph,textarea,textbox,passwordfield,hiddenfield,listbox,dropdownbox,optionbutton,checkbox,imagebutton,submit,reset,pushbutton,page,bold,italic,under,left,center,right,justifyfull,justifynone,numlist,bullist,indent,outdent,superscript,subscript,strike,ucase,lcase,rule,link,unlink,anchor,imagemap,borders,selectall,selectnone,help,code,overline,forecolor,backcolor,inserttable,insertform,blockquote,formatpainter,lineheight,dir_ltr,dir_rtl,preview,design,htmlview,map,topline,bottomline,html5';
RTE_DefaultConfig.pngCode_all = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAf4CAMAAAAedghIAAAAA3NCSVQICAjb4U/gAAADAFBMVEX////ZnjQ2VZUgQIAPL2AAAABYed9AcMA4WKIgQIAhOmozMzMgMEAAAAAhOmoAAAAAAACiz/mAqOBYed8AAAAAAABPdppBQUEAAABmmcw/aKAQEBAAAABgke5AeOA/aKAsUcIgULBcnAAAAADL1ei9yN+lsdg2VZUAAADd5O/B2vnL1eh2ltFzi7IAAADs8vzd5O9gke5Yed9AeOAkSIkAAADw+P84jsQ2VZUAAAD////w+P///4T/88vs8vz89LPw8Ov/8KD//wDc6//q6OTp8m3d5O/P4/zZ2uD01KfB2vnw2IDu1pvc1sjL1ejg2IDj0Z7Uzsfw0GDFzt3MzMzrxLuiz/nMzJm9yN+wyP/gyGDAxcuZzP+ux+7QyID/srLwwECwwd2l2QO9vr3GxGC8vqqxvc6Hw/2bvu9mzP/QuHDlsXfQuFC0tLTypZOnxDimtMzwsBCkrv+lsdipsbuUse3QqKCQsP+dr8yRreLIqWeQqPCaqb2op5iLvwBisfmkpaKAqPGAqOCVpLlRsvfZnjTvj3iwoICUnbvDmk2fpUr/iFCUnaqZmcxcp+h3nO+ZmZnMmQCYmIB6leGQoxOBlbd2ltE2pP/AkCCElJxmmcyykjLseFxgke5unkz/cFCMjIpgkOBblMyUjHNzi7JSjO//aD9cnACCgoaEhG5WhN5xgptlg7I4jsQAmf8gkPDoYkF7e3tQg7aQeGC9bypYed/iXF5wd4xHe+lgeLBTeMJAeOBqb8F0c3LUXjBic5f/UgxPdppTcbCcaSU1bv5AcMDlSyZmZmZTZ4JAaLBKZZw/aKAwaMBwYFBwYED6OStWXmpAYJBZWVrWOD0iWuI4WKJDWXAwWLBkU0dXV0GnPkE2VZVTU1IsUcL/IhI1T4YgULBKSkoBUc3lHSQySmIkSInQHiRBQUE3QWkgQKD4DQCvHiMgQIBGPCYhOmrNDw4zMzMKK/+YFhm2DRIgMEAPL2B/ERRqEBEjIyIgGCAAAP8ICIgQEBAAAMwICAgAAADrm4BRAAABAHRSTlMAEREREREiIiIiIiIiIjMzRFVVVVVmd3d3iIiIiJmZmZmZqqq7u7u7u8zMzMzMzN3d3d3d3d3u7u7u////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0P/PPgAAAAlwSFlzAAAK8AAACvABQqw0mAAAACB0RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgTVi7kSokAAAgAElEQVR4nO2dCUAb153/p7vrbbfbxPm3SY9td7vbbXNs02237Wab0VrIFZFk2ZaNJdsQgR1FtUKc4JAAQRjZRlLi4PxlIBCR4IRGYIipcJu4ToIBYy12iAQ+AsSGJuBgOXJkNzahuSrbLPq/Y443b8Zn7ADp/wsaaT76vfM3eu/Nm4thPrWysh566KHijRs3VlXt3LmTgw9lFLNYqu7du2moYg4f7+ZgQUYVx3SDVT0cLM54mWOmwZ083Jixk2PmE1KIWPqJnX0crMp4aGdX9+HBwRMndnaP8BDksrgKZbJbgDsB64WKdHcPChDY9SbjJn3L4OAhEVZV9cZbdLqWE4dOEPDIR/n5VuvwiRMnjnPQsbO7p6enbwTqOA8nWTYohyPXLIHYG64YSR0ctJKUg95YLCbCXM7DXq8cqjQkdGGo0cmhSieHKo1OT0IvZ2igITQ00xAwAwW9nEgYE3SOKpsMpdtygZ/Ai2TpqKJ0uZF0EeaqNOnptnxTJCIymwlVsik34hSYycnq0i25NmDo9/J2ThijWq3zRvz5XHibP9fp9PqbI0DeZg561ZyHNWpdMw/9ttx8YNgMTZsi3Obt5x1sMtkiPGxGTK0zbsn2Rt4UoEqt1hqzst8r9EaO+zmoxf7ZCF48YxiYl+OR41ACm3R5G2Aj42roI2Gr6qSw5OXy9wyNMF60FORnbQ0n4bJaNHX4t/YM9fW1NnSOnHQIhhqVcevJoQZWZdzNmzobWLOz86S3wWBy7j7p5fMDEjh58hh6Gx3ik9GloxS26nS2hhEepju3XipMd/LJN4T6+vqOQRjq7BsavbzamzSBtg+0frkuIK/LyjGW1ACGsKWrqalpammJgO05xkNtNmdWq9XwlsbGNmDY1BLpbQzquV+Ho6utj2sBg91bWzDMNR3qg1FGenv3brVyli61GVmq1NqtJhMPtVotNAz39mu16TERIjutXqt1cNALIMgkMIyR0JRutVrTbba83NxcDpoHYoRyrnzdiiorwy8Jc5dxC4pRVFihaCN8a5SGby8LQtaOVtJeSuMohO2MZeXKtLSX7nuJsNel16Sk3A9YGsGW1rD2OSn377Fz6zpL2tKVC+fYVfZ5c+7nDJetXLls4Zx581JyVDkL523AMO3+efOWAct5c3J0JfdxkLHvWb1s3ryVwLjEMiykk7Zh4cqV8xYC42GxUWZy9iybt3LZvPuesZOlStuwevXClVKGbFfvkXmtZE8JjS5fuVhOKJcA8VYMW2vtAAFV/WqVOezQ6kloCVvV20xjegns1yXU5jgYRhGw5HQikR83jaXrWwSoGvOpfQlX3OdylvodPITpgg0+3Qk6ISemzoEBsC0PtLgAU+tYSadghsykskZoplNZfTEFNmAVIUwDMbLuXTqTmqUYY2goNdAMUFco1GxQrNurrG2MYzjcxOT3R6PC6MDR4XAMM76aXh/T0sTDfibhGB/rcPXCqsyoQqxmPJFoiTJNvfEapiUUrEZwrIbxnR5PxG01Y6fHu3dT6TH64mBbFg3dF2bZxZBVdZMjm2K3uyrL7e72kOG6u4PuqqquNmlsbcfa2rsO0Wl4jnUfqqYhU3+sXsbAfoYC+6xkyQcLnVcKDTWpjCaf2pIYn12T2mGhYH6NwdpLb1/2mvyWXjolA+hkmmjItPRG6HR07mB1W9CTTjJTbXBvT1uwq5SE7mD30NY2nW2IhEGTaUgXNDmPS6FthNnUPZogYXX3yPFU2/GYk4S2npiLmUKCu0YOp42CaDcoJNljwjtCXmvIJIXGDL0vKysru6BA+MKFxr5Z0N69zybAzAJPFRpLlGcN5mHoRfsxeWxhoalucPAIhj6Vp6qqugjt+BidPFSDXZt0D+uuqgsGnSc4iPr1apCa3pjlOkbkS13PArtgUAKZNhVs5l1eCewCCR85duwYOYKdgnrsscck62lr1qzZPHv2wgObAwEBrklJmb159m+W7T+w6MH9BNy8dN6COze8uecJAs7evn0/0IE9T/yBhxUps+cteg'
	+ 'LrFA8rZ8+du+hBn89f0xwKCXDeokV3PegDPmJ0wo5Y5dy77nrwCT8LRpr6iJXreQLA7sEnalg4T9Ebi8YR3LzoQQCbGWDpc/h8OK3fPAjTDcH5DLBNcjBt+/4/nDoV0vuwhFwBRU7xurwavfKaZB8lBWGIfJTkR/kcRD6iIPZRksWBOYh9RFliH1GW2EeUJRaVpSmgT+Wj7ZfiozNJ/g9Bzkd8LZ3BEPmItsQ+OgPq9wwLKILYR2Cdhdwq9REOzcWJfQTtrMkzVspHKEY+dawzio4T8nR51XzZmt9hlcOceFToxUsE2DEWxyv2fqHjn2/viMfh2ra4ZDBQEo8HLIE4NUCw9o/F42E6NTuAsmxFx8bG4jRLhO39YxUks8QT/eCtI04OZMKJOMj+/PnDHUSGTiea5uMQYoG3jQ9z5WwS93vs4RI+Mnp0NPVkAmMBU6qUZRWA0UFWlkiLdYDVdnV378gWBsqp7qysgrqurq2/39sojp6rystru7udjOHQjmwB1jXWlrfC4VsXAYPtjeV1cAjSFRRhexfo3cHwzdDVSA1xgBzttfL8tzXm0ciQ1xiU2aU3tuXKoK1oUvaELk0Z2dk0ysouBKJwdnBwsK0W0iLRsHZvWxBSJkvccylsGzQyzsHB2vLachEGu2AczeW1O8RaLtwBIVNbu6NdrNHsHfvAcmRwcF9Xu5h6bZvMDyAjtW1yyLTtKJLDorYdSrs9nkIF+JkoF00p4H37mAjTwVjHCXb+/XoBuoTJB62RgI5cpxfYNTSQUGewWs1mc7rNhmG3ZHqfm+Bv61LIT1vXEQWowBjAfHD4V1PT3ALFc79SiWqUStSsVKIWpRKFZCWaZBUXw131urr2dmLjLM7MLCx0u0HbtI+0BIa0OfC6maXNnSw7lkSGwSAwxNBlCCesyJy1sipuWtPFGpJhYF7R1NRrV7sw9LIViQ6XwVzR25vodXHQZxrrd7hgWM24QctD1p5MeiHcFtXqBcg61D6T1eFK+sC+EAeB01zwm3C/S2/kIdyCIIynu0xZ5FQSMgeBfRI45Y4rGey+mhqfdP/fYtcxLGNtziftrCrWzqrUthbC1s6AeteptHp/iwjhHk+TFWzGRUQZa8DWHQbVllHwEQF1am00GinNrCKryKHXA7sM924iTktzUUZGRqa7PkaOfPIjDR539e6YT5J7e03vR7FehRHSNFWqITvb/UiZu8gm9pyp2e6d1Xl5VcHG9mqBmhp34gmb6vbDG3lY3s5/rD/cykNPlwj5Y/JMehd/0P23R4T5F8PLh3Enk7evR6zS9IO4kwnuEw5JoWRh8rb2rSJ6Id2AEqhvt/KzFADuGzwEJ+va9w2eOMHDrsOH0Mq+QfzlFBWaC8KCc+IYOsTjRBrNLOGoUMSK/uyRFRG+oXaBdgb+2TUrZq0QYcS+xg7tKisrc7itvpS1rlm6ZkVaReXSyrmVJRj6WNvmBQvWrFkwt3Lu9rmVKzCMNfsOrJy7tBKyA3MrhbymHVi9YO4CyBbdyRB0w+q5CyC7nyzYgQPbV0P2qASuXHlgNWDPkHDFgTt/dQCwpxkpXQ2ZFDIrTiWeeXrZ/AvX6xXW9TfM+M41NLz55pk3S+HM/7z99ptnJq+7/TvM7d/k4b/ffH3y5uuS1/0r+KZoyZIZCCa/A4IDeEPym/++ZMmS6xC9/WbmPyFkbr/9mwDegCK/IZm8HUD/jH9NzhAgM3PmNdd81b/kupkzGREC/R+wdj1YIyFknLIFWCDqR9fz8KtuXj/6Ls4S0Iyvg/Vv3gB0/XXX8BBQj+cGkIlrrpkhMESvl9UTM2PmdTNkkJmhwC5fTz31AhQF0RDooIT96U8qnd6cfpBfw29nXnjh1YMHj/4O6U9n+OCcQCya3zFSCJmegoBp1UYeviAwnS7rd3x6ItNnnzkjWnJMn80H/53ITAUihCVCzChCVKKs7Gywz+cWEsJlOYOW//u/CPLp4TUOXiVF+b9oVEIRZAQW5VbwG2dLWMHgApTGP/0hJWYKCB2VhXsIW1tDnfxpb05+m4dnBRyTQsOuXRZ93kkJVO1KuW+XUYD4NCv1rvs27Mpw8rAUx2fZtStXhGD/RtfcbILjtYxSEeqadaaYMxbLWyLABsB0prwBhyNZ4Ofh1maNWpdnc/a6SpMCbGUBK9pY2hxraUnyMKQ22Yo2+huaI7GB2Mcc7NTlgoI3hyKR2Ecf8bDn2EleH3/Mw0lVMdrjcVeBfR60M8NBsLcDycvt7cIODn/OHNxnBHUd4yDYWSz146XWgKGTzZ21/P+GVGjJQxfrNDsbRlRoKUJ/qO/4qAotRSjul2q1Zn6nCSWhxgmZ+V0hnARecied+Lgk8NLGQ5wEXgrQYDCYzGYbFrHTRO+Bf2Z699133xH17rscfEcJ8vT99wETINQ777+7avEbPHzvvfcgfP8NDcu+8eG7H/IQ0g/ns8vfgJ8F+N57H77Cpr73IQ0XA6e8JYUfvMWyqakQfiDADz5YzD78wQfvCfADoLceZjXvfYAlQBWreesTzD5B8BOghx8D1p9gCfDPf/4zhz75M4J/pnRueHUU6A9QH4D6+/uHkcAHEVqHn3pq3b33ZA5bCdg//NS6e+7JXAJsCcs/PALgukcoy3VQjwxL4uzHlv2EZbi//w9I/f3ifHjY3v8CSr3fHiYtn1q37p7MTMqSi5O0DAMI9NT+MGkZxpZhiaUosZbCAQsS+CBAg8VAfbha2ieIJSDfiAn0+eeefx3o7Xf+CCDbhumLf+T0PrTchxvA13n4IWqfMAS/vvff/xAKtVn7JAm9gttKCppR4yaFbyxGDZ4ErtesWg4bQRKaXly+/I03XllPQv0ri2FY2ysENL2ynm9ARfjsszzTi1BoaPUEJHXJFf+ppIN7ri4sr5c/pYroetTa0HwOlgL5/HACsoGfwHSy+aK0wj6sEFac6nRhS1UD6KNDeilU4/qQQm1DCBjSENoJ0KvCEBiGemio10ssuTRIaI6QHU/JFa/byxC7cg/bzZ9ACs8WQJBNmpKsDK5MZrMbkvVskk2KcHZSOxsArSLcoyVgSlKLgq9MdotQKgRT35YIH5V6G3wL11iOYsit0vB5Fr7Y5W8v1yym4NvsKpZVgmTw5Sz7/GIQfJVg+UeJMNRI86m5Gu6RqEWBRRQHMBTDv7UYPD/DL5yZCH40LpUqpla51Cx5aMOr1qJ/nQDrCAnHd+oKCgqK0d5/efmgCNE6UG2tCLuBBjnx0ItSh/9E6mCU71Wp4D+Rus/s4C6RKPUL0K9SleJ/IrhfrSvVcf8i/KzGetx5qqiqhdPpYCXz/+evZJdSMRVryatUS1fDR75zV3LsoitZqc5DAwMKVIlNkvLzUf/kY557ToRcD+UHENDl6wUImnofA+iz659bzkHU+jczkD6PGYNOj6qoqAECA5JnMQR2eqMxK7ug6JXXX9z1+lsIApSRnV3gLm96+3WGef99BI0QlNc2Nr78zjtgFUOx0onK4zpD6XEJLp81FFSpQD5DEsjFF2GmvoCL4PbuRYMEAbIs2O5BF2NWqWMS6AbQoSJ+ci4vhOD3Wloq/rpU6rpidzf8gfGWEQC1de7yQQKintwLIRk8xvjUasqSgT8kOjiELl'
	+ 'lwBgUvrx1Uq0uJ37af1UHI6sAH8ifXBn6rU+pwnky444E+knY8ZuwjqYMc2EdSB3mxj4gqcrFq0PYhH+mINlELIaxkALkN2ouDA1gKt2j8E/Hh4Jwl97PxSYJz8onBCQexwDXYRxIHCT6i2kTOR5+6Jq+m8kHb4APNUIyVdlKaCqMxOyZeagRLrwEwozgG3kUYGojVZGR7YqHIgKSgTdkFdRIA282WgvQgBZ9jWh5e3y6tI9SaPnyQqjjQmj4sG/GIrSnJhNZUFNGaElBsTaeE4GF7H31NoQO23fTwzwXbbrqZ9gntgc9X0xSRfJ0EEPQtWeR5RPDMzxrQ3bhrKcuW7ILyRjxb6AC9oQ/1HBGxtXHAzkPancCNBu6+0RCGofMJSqTV0z8LUCK9kYa+Kd3CEYJnXPh8NDxnOenhDijnAB4hMMgB4hfAPQUx6hzdigxPFfpx8Qym3jRAVRVKna56xVp2KdXydHaSS5xngD0s9ouTZeFJUSGWAS++scvFsBPATgE60azD1lBnz96+oaFjwsS1PLhLKbirtbMVHhYJdYLgI6PcFHdGRigDvDIfKhwqdFdz09EZmZ0ZmZmdhYWFI+7yrRxs7dzLhT05OvqxcF4QvLIXvuAlrgKEV7/Aq2M/FuGkTnFfvCbbR1z1SHzExOCploVgDdYrV58iHBEhH/zz7SNFnc9xLKp3ynEsqvcLOa4hAyszM7OQhpngV+MRYCtvVlhYxR8/YkOcWaH442rt7OTMCsUfF8vuxWaAVbWJjkNmkNXvFh1X6PHAq522tu3umV6Ou4o+8oNXZ2amRwLBK3OvxEfyBhD7iGoAsY+oBhD4SLEBBD7qAz4apX00Anz08dTwUQAKLwMihDUbmEDLgAjPBsALLQUKPwYsZ9EyMMHFgYKfPcviWArcEwEieIC1BM5OlDdykAsOjCdEaGEhCUyctbAChDobOHt2Ar54OAEUsMDFhBCcgcgiTEtwEGCtSpiWEGBgQmucECSUasI4ERAkVIBoIK3Ay6n3q6pPcZlUktRF2BuKQGvTKoyicbC8qtY+hr5hz8bWvgEZtDaEjhOQT9V6XGYJdEEoZFrR8upK8YyXqHi0IGqxWCQwimBUgCVRQKLREokl/EMLMk5gGcWW4JdCJQS+sLDSOOGCtIxydhe2JDIvWCoWE+YYWMA3MfOwbBZcRLGYipaTerJQiVT4sE6JJEMWHpKHf5QgbRm9KIgdH5VAzu3YS4SlHJ7HkopTIfMWic5znGsKqkkqnM8mSQOWxkOyPBeE+IskCYk/whJetIqXF7JUivNis5Qm0fTykbKamoh/+oYKWPyFi8RbkzKURAs3CollE7EQg0Mr/hsh9LktJXGeI792yf90UjIpjoAmwGcET6vxPctSx1n4AUO4eWrwdmxPWgJ4fDCuGU8mx1UqFbqOe9u4YIlMJzqamrZVYMukCqcB7SbAP4ZqVo2SgEHU3FXDIKqJ5Dj8hQHbiY6kGCc0AqlPlFTQWeoIbAvwljgBWDCwGJ8yV4vTOv+YIYp6SBkEXakCFIOfP068pCHojEuE4QHqNvCQo4S2RF0kaRmNsheREDY8R5yS1JUSmoLnEp9bMN8yBLMtxWi8hbp+CcSlt7AUQ8YE5Xr46MVBWXDFhOBgADEJZCCAX1Blmg6djnxYx0hGdhYCCj2pAowqwCgFcTXTkBuDUTBK+YMfr8lTj54rSxIoG8Ex1ADh8qvwKouVCjfprJ1UEw/HT70Jtf/A8GkRJv4batFvfnVHgob90fgyGbw//Dhl+Vgl5FJYGY1ubjr1wH+TcFs0HO6P2sNbiNQnhgMdY+Fw3N4xTliOjY0lEmOnx+JjIlQqkXT4iuEEpatY95eoJqXpgOQfP5HR5C+TSdmds5K/bFIwfDLZRFrCTQAaNqWx4u1D2LQ0bAjGvk0SCA1pmMSMgtzQWQLhP/wjoSARki7ioWQXYyoNLv6/j6a+jy5fZEspDIJYse0vubqQ6EyJS9ymzbjsEjR/zZo1lZWBnJJ8ks0FWrQ6kL+GZAcAW3TXXZW/RiA3N9e1Zu7+uQfgbZge/TUHmVTAFuxfdODRp58+wEEns2bB/hX779x/V+JUouNNDF1M6naDKm3/o6fgjRDWvImhCsl+AB/HthBQq9Mbs8TDBS6Vy6dCJ+5lk5Czy86TWuqQJXHjAS9vV0TA0mlw7Oh8wj//8YAE2gHS5CSTAdpUo0kmT9MwVckSaFiWkqJlaioVZwmEJZSlYj7/gqTYSluSSfktqkqSJUrB5ayE8sV5DOU3+gRJy24V/DnqSi5ZqOR08UEl2eGPyU6ZMvJ6vhqwF7goJ9kvhdZ+kMn+i7ilyTQeG1z82ObiR0DTJc7poksZf1663dSOc7roUsp+saWfLnFOF1182T9/llNeXO4vVCKRnd+SJOexlK2ew1IhfiVL5RzLLaePq5RuaxmEkC67SfIUAU5dfUNyqKhgW6kCte2VJ5Te7ZAbtgmPBLuQ2tq6lWiuwiiuWiHzbYfkN1edbDkaFGqkIXhSLJJgeVKplqdeQvmhfDkMtY3KE8ofpS88mBq6qF84KsjFNN/BoJmRbaCmYLuHhsFgsHtIttmaDw31OOh9ztZWMc4rlU/e8gLxieYXa3hVdGV9xDBF1TIfFdQGGbmP2rrl7WLp3iGzgjv8nX/ZPro0BduUHkrn2Ctntm6xHe8IlzBMzvC4pBcpiUdzcuL0vE9JdHhMPhcUGEvKbtUOwtIzeEzOWLKEnq1jTsNJqJJpPnq7khLcQeqquoPcbER3XGizEXTxg49pqhz5pCYzf1j2JAKg/nEF2JGQrluGo9uYjtP9TRb4gIQ4nhztt+YMWwEc7rAHonHuCJAhrX84BwS3xwP9p0vS8OTgaUpccMNYIDzO2E9XhIEld7bP8HBieHg8Ae9lFYgnZA9mmuo6evSonOHXUZrJrBUhz+SQltAgkTtS/FpFsoK05M6Uq0jKLAESTXkICGmahLQCdVuSB1bwicl20Yg0p4Am00lC3UiukOWqMUlWneAcouYE55CWgnMISDgHe0tMeoo755KUlOqKBP/M4vyUCX0OZXA44WNlzQ5nqZc/iGPI1bMqW00+fuMOyzl0pccjzlynLXeg1+vk7jbgYmMWdBm4scVSauQuAco1lDZ7P/7oo48Gmr25pdz15Wavw5Tuj/hK0VsJl5LVFxloycdvPJvispDPT+4zoKt5JQzRPppBuz6GZjIZHC6vKwQfKkC5o9PAGEK0O0DqnZGBiMQdfDal7oBPc7fQ7jgO4uyk3QFLFLkod/QZ5AVSKrpyJU22DA1tZhlsyDXIp7NazfnyoWtuT4909gXdzrKnR/iIhG7C34lCi4+NbIC0dQRFIibS6sDQ3ComBhm2zBcvr/O3uqwGAK3+HhFa+zpb/buPh3qOjxJ33bDAZ5CPHh8dlWbVGhkYjdA355hiKi7mbk3sriKgCt4zMSs/O5t8cAu6SVaBM7+KhPBq1II6l85FQLcx211e3u5ldMR0mLuuDd7m0gvvFk3fkrRUxTC6Bor6AGQMlK1fwzAqXXOIghpWF/FJK7/ZELEa6Om45pb8kI72SLPBkO/SNTMyNacrDNJzBiZhjq8K/dczTFAK6xAUp8WrgOrqg'
	+ 'YJt5NRyFW9GTqALYbuI4DAsCNoFb0QnYCEsOVkthCXsUFgUeHBQfICHYDZIBBcgYSeGPXRIEhybkY8E6VKCU1CKT6Ib4OlZEvJUChE9C0VCbHt240YJxLbS4ANCvCTctm0bDbfJ7wY4sG2+LDQDAm6T03NARpbQFJTiHQ+V743IQkpdeTDAIkr5iMV0IxQJWTpeBGmKgtNZAKnLQsN8KsQp5EoWrUKxZAlNskx5RZ5qj/S5djaPEVaTsZo4rmfLY42FjY2FRrVobPKw2a9ms6y6PFtdz4878ozGV8vZjMYM9tUMGz8+qGYLX20sfPVgOdtYr+Yb/3q28dVXXz3YyBoPH2b5cVSQBQiwjMNHRFjPlh88eLCQPXr0SFDdyUGXMePg0aNBz9EjR/LMDRw0V6uLjh4tYo8c8agbhDPKXB51XvDw4WCeukHsT0yuepsaZN7cIOlj7A2dfZ2dDZNy8WW6px5rU5G4zVerOek8dQKtVxnhU7uMRtYo0no1uvMygHq9x0NDnVql5ruk+nVl+nXrjDCCLB6qGt1l2nXuMiMUB41lYF0Ll9kiREyrzQDvegFmlZXVQcuysgKQmoqLU91eVqeH38AsqPi+r6su+EjjjkeQRKi9d8mSTKR1Kn5806W7dx0vlodt+N7eoEZUKpYvkW1TF39z7656hePRU0bDvC5sqgn0R/sDGilsCqcyqWFqWnYYztBUUFHGEYxfDAwwcJpUCrdFQUJRqkdJDSdOJ8KpF8775OuLP1KAW3d/Vca+tHv3L2Twu989NHItDff+1U0jP6fY129ivjR0jDL9xZfAa+QmaTKHbvr5z39xbPTLJLzppmuvvfbvTo6Spn/1i79GX42OEuymk7DfuHYU6G94+Nd/92UY2d98+Stf+QoH/4fSlYBXQ3dAJeDiHNDfwDXpjycSj9+RgAvG3+zcGOEtE+Dv8cQdXtY8EIrxlhDekVjGqk0N3IUGCc7yVIraJNzS9PHEqcSvEolTSzUiw6kvWLnCTDAEFzyWsmKgISbdsa5MSZlbSR/y2L59/5vUEQ8F/ZLSlYCfnfAebHltXTC4Q3j+aHFmJnxcL3qeqPD8UWhYXl4Hzfjn7eDHHphZdOdbVW5MBlVqAbpMZjN8bit88J9LgMAqHVqq1VoBejFU5aqFB4oCaObDCg8UxZYOlVrtAh2XFII+xQU6QxGa+bBAApwWd0FjmCIPUDXSpmqOeQpIcT8uj0TccyQ9KlISaMXS8FATDAY1VnwxGQ+rNVA8bCUhLwnk4+RhKogzlQueuhvDTalQipAXB0s3bQVqBdoN9KlORZok5eBJGPL2H5axMQN6S4iwAh/pzhknDngbxhPEG6cwNgxLjoyPJQNNIMo4eBN3JLljPdLjcQm4FgUBgMbEOIHC+E24Ys8QTybH7fybIHvAQLxNVxlKS2V73JbSjTs7SJucnBzIRgZIZrAYKkoBE68EWrFsTo7GYmjqENjCpctSZs2aU2FoyonyQ7uFc2ZBpSxtqujo4Ct54Txgl5Iyb+6ycFNYqPk5S1NmATZ35eaBqJjMwmUAzV254ZlT5EVIKzZjJj3gumK7nAEa3i5jiMrYZyNtkU4OjQqPWlcVvdygomHBy4eGcsWL4zG06VoNW2lLhumUI4ZBLdTlX1JfRAQXwhcr2FzfxrcAAAOASURBVOmLDbIiFe3YcSiXTl1f1d0q/1UVDTXIGKMbSr+MLE8RmZRgFaSW8HA8Pia0S0ywDtRHIBpPlIyXCLDeHbQxHfFEgiEGbG219V2GnP74OAm7u0ZMjMGSI4GHjuGDVhLIMSnk94sk8C9P4paG3QN3LNPFyXTBPeniY1uQe1LHIXOLc9z2cHwcwjp3lTj1nDrfjqB5X5dkPhpBxjF4TA6ZdAVLMp9TVX/7j/9R+x//+LcS9rWf3vqDW75/60+/RrAv/vTG7//4th/fcuNPvyjCfwZ2t+277ZZbbv1nER658Yc/ue3IbT/54Y1HCPiDnxyBuu2HBPz5jT+8DVje9uMbiV3ef7n1+7cACOL8FxFee/jGW2DqPzj8JYH9/Tf8h2/9tx//260/+xrB7N++9p9+1v6zf/oiwazfph+I/PdfN39jJl0V3zB84zqaMdd9+4aZ3DOWxYclz4BrWLIAn6G+cP+GDY9+gYL3r541a8NLUnYX7OjnbJCyWXPumzNHCu+albJo0Yb7ZOyu2Xc+eiH2tBJLkbEvPL14tcxuz6xZLz1zJ5XrPbPue/SlPVRJTq0GWaYYc+rUnpeeYaavNn0LLr+1ScIyIf0WeBNZfWZmZr3wxrN7PGil3nMPT3+fWeD5PffRU5CJP/5+k0eEnk3cx+5NmzJRa9iduWmT0Czurd+UuRe8ZW6qJ85T3Vu/9x8Y5h/21kvOXYUM0sss+2ei//otof/i4G9VakGq3wrwyf95YN699feCfwKufWftvPll995bRsIte558YOGKsrKyelaA7Nq7n7x77sJZwFICd71+97JZszaRcMvaJ98FESyeXyaxXHv3Aw/coXl8y5Yt3xPh4z7f5gce2HL3HXev/R4f/NeBx9cGKrfcvRZ8v4WDT1Y+effda9dsWQB2YhfwkNOWtcBy7RZphfx6y9pla7mUZgr6HkydbjOvAV/IHyw/GQoGFYZr+mC7bOyufMWK7tBQTzp9sc9WhWGuqIs/7e2KW37+Trq7pBJdbcvzbEvSfJ5vW6J0/m3pamv+YokwXPWaRBguvjDkngE1/7XXVvHtiAAZCJevQnrttfUCfJZ9lg++ioMvAogt14vwWQCxQJqLBfjas0gkhIFQnOwqEYKPbOqLMLlVfN4RXIzjXC9CWKRnl2tSURwkpEoJyrn+RZ69yGcTcRh0PUlo/T+Et0wY7RJUTQAAAABJRU5ErkJggg==';

RTE_DefaultConfig.svgCode_default = '<svg viewBox="2 1 20 20"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>';
RTE_DefaultConfig.svgCode_empty = '<svg viewBox="0 0 20 20"></svg>';
RTE_DefaultConfig.svgCode_close = '<svg width="24" height="24"><path d="M17.953 7.453L13.422 12l4.531 4.547-1.406 1.406L12 13.422l-4.547 4.531-1.406-1.406L10.578 12 6.047 7.453l1.406-1.406L12 10.578l4.547-4.531z" fill-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_DialogClose = '<svg viewBox="0 0 18 18"><path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/></svg>';


RTE_DefaultConfig.svgCode_bold = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 001.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/></svg>';
RTE_DefaultConfig.svgCode_italic = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/></svg>';
RTE_DefaultConfig.svgCode_underline = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z"/><path fill-rule="evenodd" d="M12.5 15h-9v-1h9v1z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_link = '<svg viewBox="0 0 20 20" fill="#5F6368"><path d="M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z"/></svg>';
RTE_DefaultConfig.svgCode_removeformat = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M15,6.9L9.5,1.4L1.3,9.6c-0.5,0.5-0.5,1.2,0,1.8l2.8,2.7H12v-1H9.1L15,6.9z M13.6,6.9l-4.7,4.8L4.8,7.6l4.8-4.8C9.5,2.8,13.6,6.9,13.6,6.9z M4.5,13.1L2,10.7c-0.1-0.1-0.1-0.2,0-0.3l2-2l4.2,4.2l-0.5,0.6C7.7,13.1,4.5,13.1,4.5,13.1z"/></svg>';
RTE_DefaultConfig.svgCode_justifyleft = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd" /></svg>';
RTE_DefaultConfig.svgCode_justifycenter = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M4 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_justifyright = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M6 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"//></svg>';
RTE_DefaultConfig.svgCode_justifyfull = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_justify = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M4 14.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_indent = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.646 2.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L4.293 8 2.646 6.354a.5.5 0 010-.708zM7 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-5 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_outdent = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm10.646 2.146a.5.5 0 01.708.708L11.707 8l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2zM2 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_insertorderedlist = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 01-.492.594v.033a.615.615 0 01.569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 00-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/></svg>';
RTE_DefaultConfig.svgCode_insertunorderedlist = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_insertblockquote = '<svg viewBox="-3 -3 40 40" fill="#5F6368"><path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/><path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/></svg>';
RTE_DefaultConfig.svgCode_code = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 010 .708L2.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm4.292 0a.5.5 0 000 .708L13.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_inserttable = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M2,2v12h13V2H2z M6,13H3v-2h3V13z M6,10H3V8h3V10z M6,7H3V5h3V7z M10,13H7v-2h3V13z M10,10H7V8h3V10z M10,7H7V5h3V7z M14,13h-3v-2h3V13z M14,10h-3V8h3V10z M14,7h-3V5h3V7z"/></svg>';
RTE_DefaultConfig.svgCode_toggleborder = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M3,4h1v1H3V4z M3,3h1V2H3V3z M5,3h1V2H5V3z M7,3h1V2H7V3z M9,3h1V2H9V3z M11,3h1V2h-1V3z M13,3h1V2h-1V3z M13,5h1V4h-1V5z M3,9h1V8H3V9z M3,7h1V6H3V7z M3,13h1v-1H3V13z M3,11h1v-1H3V11z M5,13h1v-1H5V13z M7,13h1v-1H7V13z M9,13h1v-1H9 V13z M11,13h1v-1h-1V13z M13,7h1V6h-1V7z M13,9h1V8h-1V9z M13,11h1v-1h-1V11z M13,13h1v-1h-1V13z"/></svg>';
RTE_DefaultConfig.svgCode_subscript = '<svg viewBox="-3 -3 24 24" fill="#5F6368"><path d="M7.4,9l3.6,3.6L9.6,14L6,10.4L2.4,14L1,12.6L4.6,9L1,5.4L2.4,4L6,7.6L9.6,4L11,5.4L7.4,9z M15.3,16.7l1.1-1.1c0.2-0.2,0.4-0.4,0.5-0.6c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3,0-0.6-0.2-0.8c-0.1-0.2-0.3-0.5-0.5-0.6c-0.2-0.2-0.5-0.3-0.7-0.4c-0.6-0.2-1.3-0.2-1.9,0c-0.3,0.1-0.5,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.5,0.7c-0.1,0.3-0.2,0.5-0.2,0.8l0,0.2h1.5l0-0.2c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2c0.2-0.1,0.5-0.1,0.7,0c0.1,0,0.2,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.2-0.3,0.3-0.4,0.5l-2.2,2.4V18H18v-1.3H15.3z"/></svg>';
RTE_DefaultConfig.svgCode_superscript = '<svg viewBox="-3 -3 24 24" fill="#5F6368"><path d="M7.4,9l3.6,3.6L9.6,14L6,10.4L2.4,14L1,12.6L4.6,9L1,5.4L2.4,4L6,7.6L9.6,4L11,5.4L7.4,9z M15.3,5.7l1.1-1.1c0.2-0.2,0.4-0.4,0.5-0.6c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3,0-0.6-0.2-0.8c-0.1-0.2-0.3-0.5-0.5-0.6c-0.2-0.2-0.5-0.3-0.7-0.4c-0.6-0.2-1.3-0.2-1.9,0c-0.3,0.1-0.5,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.5,0.7c-0.1,0.3-0.2,0.5-0.2,0.8l0,0.2h1.5l0-0.2c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2c0.2-0.1,0.5-0.1,0.7,0c0.1,0,0.2,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.2-0.3,0.3-0.4,0.5l-2.2,2.4V7H18V5.7H15.3z"/> </svg>';
RTE_DefaultConfig.svgCode_strike = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 01-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z"/><path fill-rule="evenodd" d="M15 8.5H1v-1h14v1z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_insertimage = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zm-12-1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12z" clip-rule="evenodd"/><path fill="#666666" d="M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"/><path fill-rule="evenodd" d="M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_paragraph = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M13.9,1.6H5.7c-2.3,0-4.1,1.6-4.1,3.6s1.8,3.6,4.1,3.6v5.1h1.2V2.6h2.9v11.2H11V2.6h2.9V1.6z M5.7,7.7 c-1.6,0-2.9-1.1-2.9-2.6s1.3-2.6,2.9-2.6V7.7z"/></svg>';
RTE_DefaultConfig.svgCode_fullscreenenter = '<svg viewBox="-3 -3 22 22" fill="#5F6368"><path fill-rule="evenodd" d="M1.5 1a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4A1.5 1.5 0 011.5 0h4a.5.5 0 010 1h-4zM10 .5a.5.5 0 01.5-.5h4A1.5 1.5 0 0116 1.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zM.5 10a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 010 14.5v-4a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v4a1.5 1.5 0 01-1.5 1.5h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_fullscreenexit = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M5.5 0a.5.5 0 01.5.5v4A1.5 1.5 0 014.5 6h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 0110 4.5v-4a.5.5 0 01.5-.5zM0 10.5a.5.5 0 01.5-.5h4A1.5 1.5 0 016 11.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zm10 1a1.5 1.5 0 011.5-1.5h4a.5.5 0 010 1h-4a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4z" clip-rule="evenodd"/>';
RTE_DefaultConfig.svgCode_insertgallery = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M12.002 4h-10a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zm-10-1a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-10z" clip-rule="evenodd"/><path fill="#666666" d="M10.648 8.646a.5.5 0 01.577-.093l1.777 1.947V14h-12v-1l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"/><path fill-rule="evenodd" d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 2h10a1 1 0 011 1v8a1 1 0 01-1 1v1a2 2 0 002-2V3a2 2 0 00-2-2H4a2 2 0 00-2 2h1a1 1 0 011-1z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_insertvideo = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M2.667 3.5c-.645 0-1.167.522-1.167 1.167v6.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V4.667c0-.645-.522-1.167-1.167-1.167H2.667zM.5 4.667C.5 3.47 1.47 2.5 2.667 2.5h6.666c1.197 0 2.167.97 2.167 2.167v6.666c0 1.197-.97 2.167-2.167 2.167H2.667A2.167 2.167 0 01.5 11.333V4.667z" clip-rule="evenodd"/> <path fill-rule="evenodd" d="M11.25 5.65l2.768-1.605a.318.318 0 01.482.263v7.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V4.308c0-1.033-1.125-1.626-1.984-1.128L10.75 4.785l.502.865z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_insertlink = '<svg viewBox="0 0 24 24" fill="#5F6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>';
RTE_DefaultConfig.svgCode_unlink = '<svg viewBox="0 0 24 24" fill="#5F6368"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.39 11L16 12.61V11zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.27-.77 2.37-1.87 2.84l1.4 1.4C21.05 15.36 22 13.79 22 12c0-2.76-2.24-5-5-5zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01 1.41-1.41L3.41 2.86 2 4.27z"/></svg>';
RTE_DefaultConfig.svgCode_lcase = '<svg viewBox="0 0 24 24" fill="#5F6368"><path d="M4,12h3v6h2v-6h3v-2H4V12L4,12z M10,6v2h4v10h2V8h4V6H10L10,6z"/></svg>';
RTE_DefaultConfig.svgCode_ucase = '<svg viewBox="0 0 24 24" fill="#5F6368"><path d="M12.4,6v2h3.2v10h1.6V8h3.2V6H12.4L12.4,6z M3.5,6v2h3.2v10h1.6V8h3.2V6H3.5L3.5,6z"/></svg>';
RTE_DefaultConfig.svgCode_copy = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M10.707 3h-1l-3-3H1v13h4v3h10V7.293L10.707 3zM11 4.707L13.293 7H11V4.707zM2 12V1h4.293l2 2H5v9H2zm4 3V4h4v4h4v7H6z"/></svg>';
RTE_DefaultConfig.svgCode_paste = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M13 6v-4h-4c0-1.103-.897-2-2-2s-2 .897-2 2h-4v13h6v1h8v-10h-2zm-7-3v-1c0-.551.449-1 1-1s1 .449 1 1v1h2v1h-6v-1h2zm-4 11v-11h1v2h8v-2h1v3h-5v8h-5zm12 1h-6v-8h6v8z"/></svg>';
RTE_DefaultConfig.svgCode_pastetext = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M13 6v-4h-4c0-1.103-.897-2-2-2s-2 .897-2 2h-4v13h6v1h8v-10h-2zm-7-3v-1c0-.551.449-1 1-1s1 .449 1 1v1h2v1h-6v-1h2zm-4 11v-11h1v2h8v-2h1v3h-5v8h-5zm12 1h-6v-8h6v8z"/><rect x="9" y="11.7" width="4.1" height="0.8"/><rect x="9" y="8.9" width="4.1" height="0.8"/></svg>';
RTE_DefaultConfig.svgCode_pasteword = '<svg viewBox="-3 -3 24 24" fill="#5F6368"><g fill="none" fill-rule="evenodd"><path fill="#4285F4" fill-rule="nonzero" d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-3.5 14H11L9 6.5 7 14H5.5L3.1 4h1.7l1.54 7.51L8.3 4h1.4l1.97 7.51L13.2 4h1.7l-2.4 10z"/><path d="M-3-3h24v24H-3V-3zm0 0h24v24H-3V-3z"/></svg>';
RTE_DefaultConfig.svgCode_pasteauto = RTE_DefaultConfig.svgCode_paste;

RTE_DefaultConfig.svgCode_save = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M27.71,9.29l-5-5A1,1,0,0,0,22,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V10A1,1,0,0,0,27.71,9.29ZM12,6h8v4H12Zm8,20H12V18h8Zm2,0V18a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v8H6V6h4v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V6.41l4,4V26Z"/></svg>';
RTE_DefaultConfig.svgCode_load = '<svg  viewBox="-2 -2 20 20"><g><path fill="#f6f6f6" d="M16 1H3v5H0v9h13v-5h3z"/></g><g id="icon_x5F_bg"><path fill="none" d="M11 8H2v5h9V8zm-2 3H4v-1h5v1z"/><path fill="#424242" d="M4 10h5v1H4zM4 2v4h1V3h9v5h-1v1h2V2z"/><path fill="#424242" d="M1 14h11V7H1v7zm1-6h9v5H2V8zM7 5h5v1H7z"/></g><g id="icon_x5F_fg"><path fill="none" d="M4 10h5v1H4z"/><path fill="#f0eff1" d="M5 3v3h2V5h5v1h1v2h1V3zM2 13h9V8H2v5zm2-3h5v1H4v-1z"/></g></svg>';

RTE_DefaultConfig.svgCode_fontname = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M5,6h1L4,1H3L1,6h1l0.4-1h2.2L5,6z M2.8,4l0.7-1.8L4.2,4H2.8z M15,15H5v-1h10V15z M14.4,12.8c-0.2,0-0.4-0.2-0.4-0.4V5h-0.3L7,11.7c0,0-1,1-1.5,1V13H8v-0.3H7.6c-0.2,0-0.5-0.4,0.2-1L9,10.5h3v1.9c0,0.2-0.2,0.4-0.4,0.4c0,0,0,0,0,0h-0.4V13h3.5v-0.3H14.4z M9.5,10L12,7.5V10H9.5z M2.4,12.4l-0.7-0.7l10-10l0.7,0.7L2.4,12.4z"/></svg>';
RTE_DefaultConfig.svgCode_fontsize = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><polygon points="7.9,4.2 5.6,1.8 3.2,4.2 2.8,3.7 5.6,0.9 8.4,3.7 "/><polygon points="5.6,8.7 2.8,5.9 3.2,5.5 5.6,7.8 7.9,5.5 8.4,5.9 "/><path d="M15,14.6l-0.8-2.5H9.8L9,14.6H7.5l3.7-11h1.7l3.7,11H15z M13.7,10.6l-1.7-5l-1.7,5H13.7z"/></svg>';
RTE_DefaultConfig.svgCode_redo = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M9,15c-2.5,0-4,1.5-4,4c0,2.5,1.5,4,4,4h5v2H9c-3.5,0-6-2.5-6-6c0-3.5,2.5-6,6-6h16.2l-4-4l1.4-1.5L29,14	l-6.4,6.4L21.2,19l4-4H9z"/></svg>';
RTE_DefaultConfig.svgCode_undo = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M23,15c2.5,0,4,1.5,4,4c0,2.5-1.5,4-4,4h-5v2h5c3.5,0,6-2.5,6-6c0-3.5-2.5-6-6-6H6.8l4-4L9.4,7.6L3,14 l6.4,6.4l1.4-1.4l-4-4H23z"/></svg>';
RTE_DefaultConfig.svgCode_delete = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M14.3,2.1C12.1,2.6,10.2,3.6,8.5,5C7,3.9,4.9,1.5,3.1,2.3C2.4,2.5,2,3.1,2.3,3.7c1.3,0.9,3.3,1.7,4.7,2.7C5.5,8,0.8,13.2,4.8,13.9c1.1-2,2.1-4.3,3.7-6.1c1.9,1.5,3.5,4,5,6c0.2,0.2,0.2,0.1,0.2-0.2c-1.2-8.2-7.7-5.1,1.1-11.4C14.6,2.1,14.5,2.1,14.3,2.1L14.3,2.1z"/></svg>';
RTE_DefaultConfig.svgCode_find = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_preview = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_insertdocument = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M25.7,9.3l-7-7A.91.91,0,0,0,18,2H8A2,2,0,0,0,6,4V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V10A.91.91,0,0,0,25.7,9.3ZM18,4.4,23.6,10H18ZM24,28H8V4h8v6a2,2,0,0,0,2,2h6Z"/><polygon points="21 19 17 19 17 15 15 15 15 19 11 19 11 21 15 21 15 25 17 25 17 21 21 21 21 19"></polygon></svg>';
RTE_DefaultConfig.svgCode_inserttemplate = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M26,6v4H6V6H26m0-2H6A2,2,0,0,0,4,6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"/><path d="M10,16V26H6V16h4m0-2H6a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2Z"/><path d="M26,16V26H16V16H26m0-2H16a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2Z"/></svg>';
RTE_DefaultConfig.svgCode_print = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M28,9H25V3H7V9H4a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2H7v6H25V23h3a2,2,0,0,0,2-2V11A2,2,0,0,0,28,9ZM9,5H23V9H9ZM23,27H9V17H23Zm5-6H25V15H7v6H4V11H28Z"/></svg>';
RTE_DefaultConfig.svgCode_newdoc = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M25.7,9.3l-7-7A.9078.9078,0,0,0,18,2H8A2.0059,2.0059,0,0,0,6,4V28a2.0059,2.0059,0,0,0,2,2H24a2.0059,2.0059,0,0,0,2-2V10A.9078.9078,0,0,0,25.7,9.3ZM18,4.4,23.6,10H18ZM24,28H8V4h8v6a2.0059,2.0059,0,0,0,2,2h6Z"/></svg>';
RTE_DefaultConfig.svgCode_lineheight = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><rect width="13" height="2" x="17" y="6"></rect><rect width="10" height="2" x="17" y="12"></rect><rect width="13" height="2" x="17" y="18"></rect><rect width="10" height="2" x="17" y="24"></rect><polygon points="11.59 13.41 8 9.83 8 9.83 4.41 13.42 3 12 8 7 13 12 11.59 13.41"></polygon><polygon points="11.59 18.59 8 22.17 8 22.17 4.41 18.58 3 20 8 25 13 20 11.59 18.59"></polygon></svg>';
RTE_DefaultConfig.svgCode_insertemoji = '<svg viewBox="-2 -2 20 20"><circle fill="none" cx="8" cy="8" r="6"/><path fill="#5F6368" d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6C14,11.3,11.3,14,8,14z M11,9.8l0.9,0.5c-1.2,2.2-4,2.9-6.1,1.6c-0.7-0.4-1.3-1-1.6-1.6L5,9.8c1,1.7,3.1,2.2,4.8,1.3C10.3,10.7,10.7,10.3,11,9.8z M4.5,6.5c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S4.5,7.1,4.5,6.5z M9.5,6.5c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S9.5,7.1,9.5,6.5z"/></svg>';
RTE_DefaultConfig.svgCode_insertchars = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M22.7373,25A14.3093,14.3093,0,0,0,27,15C27,8.42,22.58,4,16,4S5,8.42,5,15A14.3093,14.3093,0,0,0,9.2627,25H4v2h9V25.4722l-.4355-.2979A12.646,12.646,0,0,1,7,15c0-5.4673,3.5327-9,9-9s9,3.5327,9,9a12.5671,12.5671,0,0,1-5,9.7615V27h8V25Z"/></svg>';
RTE_DefaultConfig.svgCode_selectall = '<svg viewBox="0 0 32 32" fill="#5F6368"><path d="M5,5v1v1h1h1V6V5H6H5z M9,5v2h2V5H9z M13,5v2h2V5H13z M17,5v2h2V5H17z M21,5v2h2V5H21z M25,5v1v1h1h1V6V5h-1H25z M5,9v2h2V9H5z M25,9v2h2V9H25z M10,11v2h12v-2H10z M5,13v2h2v-2H5z M25,13v2h2v-2H25z M10,15v2h10v-2H10z M5,17v2h2v-2H5z M25,17v2h2v-2H25z M10,19v2h12v-2H10z M5,21v2h2v-2H5z M25,21v2h2v-2H25z M5,25v1v1h1h1v-1v-1H6H5z M9,25v2h2v-2H9z M13,25v2h2v-2H13z M17,25v2h2v-2H17z M21,25v2h2v-2H21z M25,25v1v1h1h1v-1v-1h-1H25z"/></svg>';
RTE_DefaultConfig.svgCode_inserthorizontalrule = '<svg viewBox="0 0 20 20" fill="#5F6368"><rect width="15" height="1.5" x="3" y="12" /></svg>';
RTE_DefaultConfig.svgCode_insertdate = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"/></svg>';
RTE_DefaultConfig.svgCode_forecolor = '<svg viewBox="0 0 20 20" fill="#5F6368"><path d="M13.6,12.6h1.2l-4.3-9.8H9.3L5,12.6h1.2l1-2.3h5.4L13.6,12.6z M7.8,9.2l2.1-4.8H10l2.1,4.8L7.8,9.2z M3.8,14.4h12.3v2.3H3.8V14.4z"/></svg>';
RTE_DefaultConfig.svgCode_backcolor = '<svg viewBox="0 0 20 20" fill="#5F6368"><path d="M3.8,14.4h12.3v2.3H3.8V14.4z"/><path d="M15.8,8.1c0-0.1,0-0.2-0.1-0.3L11,3.1c0,0-0.1,0-0.1-0.1V2H9.9v1.5L4.1,8.2C3.9,8.3,3.8,8.6,4,8.8l4.6,4.6c0.1,0.1,0.2,0.2,0.4,0.2h0c0.1,0,0.3,0,0.4-0.1l5.3-4.3v2c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5V8.1C15.8,8.1,15.8,8.1,15.8,8.1z M9.1,12.4L5.2,8.5l4.6-3.8v2.1h1.1V4.5L14.5,8L9.1,12.4z"/></svg>';
RTE_DefaultConfig.svgCode_help = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><polygon points="17 22 17 13 13 13 13 15 15 15 15 22 12 22 12 24 20 24 20 22 17 22"></polygon><path d="M16,7a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,7Z"/><path d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"/></svg>';
RTE_DefaultConfig.svgCode_tableheader = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M14,5h-3V4h-1v1H7V4H6v1H3V4H2v11h13V4h-1V5z M6,14H3v-2h3V14z M6,11H3V9h3V11z M6,8H3V6h3V8z M10,14H7v-2h3V14z M10,11H7V9h3V11z M10,8H7V6h3V8z M14,14h-3v-2h3V14z M14,11h-3V9h3V11z M14,8h-3V6h3V8z M2,1h13v2H2V1z"/></svg>';
RTE_DefaultConfig.svgCode_menu_tablecell = '<svg viewBox="-1 -1 18 18" fill="#5F6368"><path d="M2,2v11h12V2H2z M3,3h3v3H3V3z M3,12V7h3v5H3z M7,6V3h6v3H7z"/><path fill="#F0EFF1" d="M13,6H7V3h6V6z M6,3H3v3h3V3z M6,7H3v5h3V7z"/></svg>';
RTE_DefaultConfig.svgCode_menu_tablerow = '<svg viewBox="-2 -2 20 20"><path fill="#F0EFF1" d="M7,13h3v-2H7V13z M7,10h3V8H7V10z M7,7h3V5H7V7z M11,13h3v-2h-3V13z M11,10h3V8h-3V10z M11,5v2h3V5H11z"/><path fill="#666666" d="M11,8h3v2h-3V8z M7,10h3V8H7V10z M3,8v2h3V8H3z"/><path fill="#5F6368" d="M2,2v12h13V2H2z M6,13H3v-2h3V13z M6,10H3V8h3V10z M6,7H3V5h3V7z M10,13H7v-2h3V13z M10,10H7V8h3V10z M10,7H7V5h3V7z M14,13h-3v-2h3V13z M14,10h-3V8h3V10z M14,7h-3V5h3V7z"/></svg>';
RTE_DefaultConfig.svgCode_menu_tablecolumn = '<svg viewBox="-2 -2 20 20"><g><path fill="#F0EFF1" d="M7,13h3v-2H7V13z M7,10h3V8H7V10z M7,7h3V5H7V7z M11,13h3v-2h-3V13z M11,10h3V8h-3V10z M11,5v2h3V5H11z"/><path fill="#666666" d="M7,11h3v2H7V11z M7,10h3V8H7V10z M7,5v2h3V5H7z"/></g><g><path fill="#5F6368" d="M2,2v12h13V2H2z M6,13H3v-2h3V13z M6,10H3V8h3V10z M6,7H3V5h3V7z M10,13H7v-2h3V13z M10,10H7V8h3V10z M10,7H7V5h3V7z M14,13h-3v-2h3V13z M14,10h-3V8h3V10z M14,7h-3V5h3V7z"/></g></svg>';

RTE_DefaultConfig.svgCode_menu_table = RTE_DefaultConfig.svgCode_inserttable;
RTE_DefaultConfig.svgCode_camera = '<svg viewBox="-2 -2 24 24" fill="#5F6368"><path fill-rule="nonzero" d="M5.6,0 L4.136,2.00333128 L1.6,2.00333128 C0.72,2.00333128 0,2.70333128 0,3.55888684 L0,12.4471661 C0,13.3027217 0.72,14.0027217 1.6,14.0027217 L14.4,14.0027217 C15.28,14.0027217 16,13.3027217 16,12.4471661 L16,3.55888684 C16,2.70333128 15.28,2.00333128 14.4,2.00333128 L11.864,2.00333128 L10.4,0 L5.6,0 Z M8,11.2 C5.792,11.2 4,9.52746667 4,7.46666667 C4,5.40586667 5.792,3.73333333 8,3.73333333 C10.208,3.73333333 12,5.40586667 12,7.46666667 C12,9.52746667 10.208,11.2 8,11.2 Z M8,9.8 C9.38071187,9.8 10.5,8.75533108 10.5,7.46666667 C10.5,6.17800225 9.38071187,5.13333333 8,5.13333333 C6.61928813,5.13333333 5.5,6.17800225 5.5,7.46666667 C5.5,8.75533108 6.61928813,9.8 8,9.8 Z" transform="translate(1 2)"/></svg>';
RTE_DefaultConfig.svgCode_cut = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M11.5,10c-0.4,0-0.8,0.1-1.2,0.3L9.8,9.8C9.9,9.6,10,9.3,10,9c0-0.5-0.2-1.1-0.6-1.4c0.9-1.7,2.1-3.6,2.3-4C11.8,3.2,12,2.9,12,2.5c0-0.3-0.1-0.6-0.4-0.8L11,1L8,7L5,1L4.4,1.6C4.1,1.9,4,2.2,4,2.5c0,0.4,0.2,0.7,0.4,1.1c0.2,0.4,1.3,2.4,2.3,4C6,8.1,5.8,9.1,6.2,9.8l-0.5,0.5C5.3,10.1,4.9,10,4.5,10C3.1,10,2,11.1,2,12.5C2,13.9,3.1,15,4.5,15C5.9,15,7,13.9,7,12.5c0-0.4-0.1-0.8-0.3-1.2l0.5-0.5c0.5,0.2,1.1,0.2,1.6,0l0.5,0.5C9.1,11.7,9,12.1,9,12.5c0,1.4,1.1,2.5,2.5,2.5	c1.4,0,2.5-1.1,2.5-2.5C14,11.1,12.9,10,11.5,10z M4.5,14C3.7,14,3,13.4,3,12.6c0,0,0,0,0,0C3,11.7,3.7,11,4.5,11C5.3,11,6,11.7,6,12.5C6,13.3,5.3,14,4.5,14C4.5,14,4.5,14,4.5,14z M8,10c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.6,10,8,10z M11.5,14c-0.8,0-1.5-0.7-1.5-1.5c0,0,0,0,0,0c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S12.3,14,11.5,14C11.5,14,11.5,14,11.5,14	L11.5,14z"/></svg>';
RTE_DefaultConfig.svgCode_insertimagedragdrop = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2,1h1v1H2V1z M2,3h1v1H2V3z M2,5h1v1H2V5z M2,7h1v1H2V7z M2,9h1v1H2V9z M2,11h1v1H2V11z M4,11h1v1H4V11z M14,3h1v1h-1V3z M14,5h1v1h-1V5z M14,7h1v1h-1V7z M14,9h1v1h-1V9z M14,11h1v1h-1V11z M12,11h1v1h-1V11z M4,1h1v1H4V1z M6,1h1v1H6	V1z M8,1h1v1H8V1z M10,1h1v1h-1V1z M12,1h1v1h-1V1z M14,1h1v1h-1V1z"/><path d="M8.2,10.6l2.1,4.2l1.5-0.8L10,10h2.5L6.1,3v10.1L8.2,10.6z"/></svg>';
RTE_DefaultConfig.svgCode_imagescale = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill="#f6f6f6" d="M16 7h-2v7h-7v2h-7v-7h2v-7h7v-2h7v7z"/><path fill="#5F6368" d="M13 3v10h-10v-10h10zm-1 8l-1.5-1.549-2 1.549-2.5-3.126-2 2.21v1.916h8v-1zm0-7h-8v4.084l2-2.21 2.5 3.126 2-1 1.5 1v-5zm-2 1h-2v2h2v-2zm5 1l-.019-5h-4.981v1h4v4h1zm-14 4l.019 5h4.981v-1h-4v-4h-1z"/><path fill="#F0EFF1" d="M12 12h-8v-1.916l2-2.21 2.5 3.126 2-1.549 1.5 1.549v1zm0-8v5l-1.5-1-2 1-2.5-3.126-2 2.21v-4.084h8zm-2 1h-2v2h2v-2z" /><</svg>';
RTE_DefaultConfig.svgCode_linkstyle = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill="#f6f6f6" d="M.572 9.992l6.414-6.415 1.5 1.5 4.5-4.5 2.414 2.414-4.5 4.5 1.5 1.5-6.415 6.415-5.413-5.414z"/><path fill="#424242" d="M6 14l-4-4.008 3-2.992 4.001 3.993-3.001 3.007zm5-5.008l-4-3.992-1 .991 3.986 4.009 1.014-1.008zm3-6.001l-1.014-.991-3.984 3.991.998 1 4-4z" id="iconBg"/></svg>';
RTE_DefaultConfig.svgCode_imagecaption = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill="#5F6368" d="M3,1v7l1-1V2h8v5l-1.5-1L13,7.7V1H3z M4,10H3v5h10v-5H4z M4,11h5v1H4V11z M12,14H4v-1h8V14z"/><path fill="#5F6368" d="M3,1v7l1-1V2h8v5l-1.5-1L13,7.7V1H3z M4,10H3v5h10v-5H4z M4,11h5v1H4V11z M12,14H4v-1h8V14z"/><circle fill="#C27D1A" cx="9" cy="4" r="1"/><path fill="#1BA1E2" d="M13,10H3V8l3-3l2.5,2l2-1L13,7.7V10z"/></svg>';
RTE_DefaultConfig.svgCode_imagestyle = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill="#f6f6f6" d="M.572 9.992l6.414-6.415 1.5 1.5 4.5-4.5 2.414 2.414-4.5 4.5 1.5 1.5-6.415 6.415-5.413-5.414z" /><path fill="#424242" d="M6 14l-4-4.008 3-2.992 4.001 3.993-3.001 3.007zm5-5.008l-4-3.992-1 .991 3.986 4.009 1.014-1.008zm3-6.001l-1.014-.991-3.984 3.991.998 1 4-4z""/></svg>';
RTE_DefaultConfig.svgCode_controlopenlink = '<svg viewBox="-2 -2 20 20"><path d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/> <path d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_controleditlink = '<svg viewBox="-2 -2 20 20"><path fill="#f6f6f6" d="M13.313 7.235l-.417-.146c-.024-.104-.066-.2-.098-.301l2.453-2.453a2.55 2.55 0 0 0 .748-1.81c0-.684-.266-1.327-.749-1.81C14.796.261 14.136 0 13.439 0s-1.356.261-1.811.715L8.343 4H4C1.794 4 0 5.794 0 8c0 1.69 1.08 3.203 2.688 3.766l.417.146A4.006 4.006 0 0 0 7 15h5c2.206 0 4-1.794 4-4a4 4 0 0 0-2.687-3.765z"/><path fill="#424242" d="M6.041 10.797l3.413-.665.274-.274a2 2 0 0 0 1.13-1.13l1.104-1.104c.016.125.038.247.038.376 0 1.654-1.346 3-3 3H6c0-.072.027-.135.041-.203zM2 8c0-1.103.897-2 2-2h2.343l1-1H4C2.346 5 1 6.346 1 8c0 1.309.847 2.412 2.018 2.821.016-.345.079-.676.177-.993A2.001 2.001 0 0 1 2 8zm10.982.179a3.967 3.967 0 0 1-.177.993A2.002 2.002 0 0 1 14 11c0 1.102-.898 2-2 2H7c-1.103 0-2-.898-2-2 0-.237.049-.462.125-.673l.352-1.897A2.99 2.99 0 0 0 4 11c0 1.654 1.346 3 3 3h5c1.654 0 3-1.346 3-3a2.993 2.993 0 0 0-2.018-2.821z"/><path fill="#00539c" d="M14.543 1.422c-.563-.563-1.645-.563-2.207 0l-5.601 5.6L6 9.965l2.943-.736 5.601-5.6a1.558 1.558 0 0 0-.001-2.207zm-.707 1.5L8.431 8.326l-1.057.264.265-1.057 5.404-5.404c.188-.188.605-.188.793 0a.558.558 0 0 1 0 .793z"/></g></svg>';
RTE_DefaultConfig.svgCode_controlalt = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill="#f6f6f6" d="M16,6v9H2V9.717l-1,1.1V0H2.392L8.857,6Z"/><path fill="#f0eff1" d="M6.843,8l.426.965L4.261,10.332,4,9.744V13H14V8ZM12,11H6V10h6Z"/><path fill="#424242" d="M12,11H6V10h6ZM9.935,7H6.4l.441,1H14v5H4V9.744L3.336,8.249,3,8.619V14H15V7Z"/><path fill="#00539c" d="M4.766,9,3.629,6.442,2,8.231V1L7.387,6H4.869L5.955,8.463Z"/></svg>';
RTE_DefaultConfig.svgCode_controlsize = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill="#f6f6f6" d="M16 7h-2v7h-7v2h-7v-7h2v-7h7v-2h7v7z"/><path fill="#5F6368" d="M13 3v10h-10v-10h10zm-1 8l-1.5-1.549-2 1.549-2.5-3.126-2 2.21v1.916h8v-1zm0-7h-8v4.084l2-2.21 2.5 3.126 2-1 1.5 1v-5zm-2 1h-2v2h2v-2zm5 1l-.019-5h-4.981v1h4v4h1zm-14 4l.019 5h4.981v-1h-4v-4h-1z"/><path fill="#F0EFF1" d="M12 12h-8v-1.916l2-2.21 2.5 3.126 2-1.549 1.5 1.549v1zm0-8v5l-1.5-1-2 1-2.5-3.126-2 2.21v-4.084h8zm-2 1h-2v2h2v-2z" id="iconFg"/></svg>';
RTE_DefaultConfig.svgCode_controlsizeauto = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9zM1.5 3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-13z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M2 4.5a.5.5 0 01.5-.5h3a.5.5 0 010 1H3v2.5a.5.5 0 01-1 0v-3zm12 7a.5.5 0 01-.5.5h-3a.5.5 0 010-1H13V8.5a.5.5 0 011 0v3z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_controlsize100 = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M8,10.5c0,1.8-2.1,3.1-3.7,2.2L2,15l-1-1l2.3-2.3C1.4,8,7.9,6.4,8,10.5z M5.5,9c-1.9,0-1.9,3,0,3C7.4,12,7.4,9,5.5,9z M13.1,4.9c0.4,2.7-3.6,2.7-3.2,0C9.6,2.3,13.5,2.3,13.1,4.9z M12.1,4.9c0.2-1.7-1.4-1.7-1.2,0C10.7,6.6,12.3,6.6,12.1,4.9z M9.4,4.9c0.4,2.7-3.6,2.7-3.2,0C5.8,2.3,9.7,2.3,9.4,4.9z M8.3,4.9c0.2-1.7-1.4-1.7-1.2,0	C6.9,6.6,8.6,6.6,8.3,4.9z M5.3,6.9H2.8V6.2h0.8v-2H2.8V3.5c0.4,0,0.9-0.1,0.9-0.5h0.9v3.2h0.8V6.9z M15,1v8H8.6C8.5,8.6,8.2,8.3,7.9,8H14V2H2v6h1.1C2.8,8.3,2.5,8.6,2.4,9H1V1H15z"/></svg>';
RTE_DefaultConfig.svgCode_controlsize75 = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M8,10.5c0,1.8-2.1,3.1-3.7,2.2L2,15l-1-1l2.3-2.3C1.4,8,7.9,6.4,8,10.5z M5.5,9c-1.9,0-1.9,3,0,3C7.4,12,7.4,9,5.5,9z M13.2,5.6c0,1.5-2,1.6-3,1.2V5.9h0.1c2.2,1.3,2.6-1.5,0-0.7V3h2.8v0.7h-1.8v0.6C12.1,4.3,13.3,4.5,13.2,5.6z M9.4,3.8L7.7,6.9H6.6l1.8-3.1h-2V3h3V3.8z M15,1v8H8.6C8.5,8.6,8.2,8.3,7.9,8H14V2H2v6h1.1C2.8,8.3,2.5,8.6,2.4,9H1V1H15z"/></svg>';
RTE_DefaultConfig.svgCode_controlsize50 = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M8,10.5c0,1.8-2.1,3.1-3.7,2.2L2,15l-1-1l2.3-2.3C1.4,8,7.9,6.4,8,10.5z M5.5,9c-1.9,0-1.9,3,0,3C7.4,12,7.4,9,5.5,9z M13.3,4.9c0.4,2.7-3.6,2.7-3.2,0C9.7,2.3,13.7,2.3,13.3,4.9z M12.3,4.9c0.2-1.7-1.4-1.7-1.2,0C10.9,6.6,12.5,6.6,12.3,4.9z M9.4,5.6c0,1.5-2,1.6-3,1.2V5.9h0.1c2.2,1.3,2.6-1.5,0-0.7V3h2.8v0.7H7.5v0.6C8.3,4.3,9.5,4.5,9.4,5.6z M15,1v8H8.6C8.5,8.6,8.2,8.3,7.9,8H14V2H2v6h1.1C2.8,8.3,2.5,8.6,2.4,9H1V1H15z"/></svg>';
RTE_DefaultConfig.svgCode_controlsize25 = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M8,10.5c0,1.8-2.1,3.1-3.7,2.2L2,15l-1-1l2.3-2.3C1.4,8,7.9,6.4,8,10.5z M5.5,9c-1.9,0-1.9,3,0,3C7.4,12,7.4,9,5.5,9z M13.2,5.6c0,1.5-2,1.6-3,1.2V5.9h0.1c2.2,1.3,2.6-1.5,0-0.7V3h2.8v0.7h-1.8v0.6C12.1,4.3,13.3,4.5,13.2,5.6z M9.5,6.9h-3V6.2C8,5.6,9.4,2.7,6.7,4H6.6V3.2c2.9-1.2,3.7,1.6,1.2,3h1.7V6.9z M15,1v8H8.6C8.5,8.6,8.2,8.3,7.9,8H14V2H2v6h1.1C2.8,8.3,2.5,8.6,2.4,9H1V1H15z"/></svg>';;
RTE_DefaultConfig.svgCode_togglemore = RTE_DefaultConfig.svgCode_more = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_inlinestyle = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M5.9,13.6h1v1h-1V13.6z M3.9,10.6h1v-1h-1V10.6z M7.9,14.6h1v-1h-1V14.6z M3.9,12.6h1v-1h-1V12.6z	 M3.9,14.6h1v-1h-1V14.6z M13.9,14.6h1v-1h-1V14.6z M9.9,14.6h1v-1h-1V14.6z M11.9,14.6h1v-1h-1V14.6z M14.9,3.6v9h-2v-2H9.4l-1.6,2	h-2l7-9H14.9z M12.9,6.1l-2.3,2.9h2.3V6.1z"/><path d="M6.9,5.6h-2v2h-2v-2h-2v-2h2v-2h2v2h2V5.6z"/></svg></svg>';
RTE_DefaultConfig.svgCode_floatleft = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm5 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-5 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M3.734 6.352a6.586 6.586 0 00-.445.275 1.94 1.94 0 00-.346.299 1.38 1.38 0 00-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 01-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 00-.445.275 1.94 1.94 0 00-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 00-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 01-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"></path</svg>';
RTE_DefaultConfig.svgCode_floatright = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path d="M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/><path d="M12.168 6.352c.184.105.332.197.445.275.114.074.229.174.346.299.11.117.193.24.252.369s.1.295.123.498h-.281c-.243 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.436 2.436 0 00-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287l-.211.352zm-2.168 0c.184.105.332.197.445.275.114.074.229.174.346.299.113.12.2.246.258.375.055.125.094.289.117.492h-.281c-.242 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.438 2.438 0 00-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287L10 6.352z"/></svg>'
RTE_DefaultConfig.svgCode_pmoveup = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_pmovedown = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>';
RTE_DefaultConfig.svgCode_plusbtn = '<svg viewBox="0 0 20 20" fill="#5F6368"><path d="M 9.9999997,4.3983051 A 0.62241054,0.62241054 0 0 0 9.3775887,5.0207156 V 9.3775893 H 5.0207156 a 0.62241067,0.62241067 0 0 0 0,1.2448207 h 4.3568731 v 4.356874 a 0.62241054,0.62241054 0 0 0 1.2448213,0 V 10.62241 h 4.356874 a 0.62241067,0.62241067 0 0 0 0,-1.2448207 H 10.62241 V 5.0207156 A 0.62241054,0.62241054 0 0 0 9.9999997,4.3983051 Z" clip-rule="evenodd"/></svg>'
RTE_DefaultConfig.svgCode_imageupload = '<svg viewBox="0 0 16 16"><path fill="#f6f6f6" d="M13.212,4.614A5.025,5.025,0,0,0,8.43,1,4.948,4.948,0,0,0,4.666,2.751h-.1a4.625,4.625,0,0,0,0,9.25H6v2H9V12h3.3a3.757,3.757,0,0,0,.914-7.386Z"/><path fill="#424242" d="M15,8.25A2.73,2.73,0,0,1,12.3,11H9V10h3.3a1.75,1.75,0,0,0,0-3.5h-.859V6.063A3.037,3.037,0,0,0,8.43,3,3.005,3.005,0,0,0,5.622,4.988,2.521,2.521,0,0,0,4.561,4.75a2.625,2.625,0,0,0,0,5.25H6v1H4.561a3.626,3.626,0,0,1,0-7.25,3.461,3.461,0,0,1,.567.047,3.963,3.963,0,0,1,7.255,1.7A2.732,2.732,0,0,1,15,8.25Z"/><polygon fill="#00539c" points="9.854 8.146 7.5 5.793 5.146 8.146 5.854 8.854 7 7.707 7 13 8 13 8 7.707 9.146 8.854 9.854 8.146"/></svg>'
RTE_DefaultConfig.svgCode_documentupload = RTE_DefaultConfig.svgCode_imageupload;

RTE_DefaultConfig.svgCode_tablecellmerge = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M15,11.1c-0.1-0.1-0.3-0.1-0.4,0l-2.1,2.4l-2.1-2.4c-0.1-0.1-0.3-0.1-0.4,0c-0.1,0.1-0.1,0.4,0,0.5l2.3,2.7l0,0l0,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1-0.1l2.3-2.7C15.2,11.5,15.2,11.3,15,11.1z"/><path d="M12.4,1.6H3c-0.5,0-0.8,0.4-0.8,1v10.9c0,0.5,0.4,1,0.8,1h7.3l0,0c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3l0,0H5.7V5.1h6.9v5.6c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3V2.5C13.2,2,12.8,1.6,12.4,1.6z M5.2,13.7H3c-0.2,0-0.3-0.1-0.3-0.3v-1.9h2.5V13.7z M5.2,10.9H2.7V8.3h2.5V10.9z M5.2,7.7H2.7V5.1h2.5V7.7z M5.2,4.5H2.7V2.5c0-0.2,0.1-0.3,0.3-0.3h2.2V4.5z M9.1,4.5H5.7V2.2h3.3L9.1,4.5L9.1,4.5z M12.7,4.5h-3V2.2h2.8c0.2,0,0.3,0.1,0.3,0.3V4.5z"/></svg>';;
RTE_DefaultConfig.svgCode_tablecellsplitver = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M2,7.6h12v0.8H2V7.6z M4.3,2.4H3.5v3.8h9V2.4h-0.8v3H4.3V2.4z M11.8,13.6h0.8V9.9h-9v3.8h0.8v-3h7.5L11.8,13.6L11.8,13.6z"/></svg>';
RTE_DefaultConfig.svgCode_tablecellsplithor = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M7.6,14V2h0.8v12H7.6z M2.4,11.7v0.8h3.8v-9H2.4v0.8h3v7.5H2.4z M13.6,4.2V3.5H9.9v9h3.8v-0.8h-3V4.2L13.6,4.2L13.6,4.2z"/></svg>';
RTE_DefaultConfig.svgCode_tablecellforecolor = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M14,13v2h-2v-2H14z M7,15h2v-2H7V15z M2,15h2v-2H2V15z M11,12l-0.8-2.5H5.8L5,12H3.5L7.2,1h1.7 l3.7,11H11z M9.7,8L8,3L6.3,8H9.7z"/></svg>';
RTE_DefaultConfig.svgCode_tablecellbackcolor = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M15,1v9h-5V9h4V2H7v4H6V1H15z M1,15h8V7H1V15z M8,3v3h2v2h3V3H8z"/></svg>';
RTE_DefaultConfig.svgCode_tablerowinsertabove = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M11,4v4H6V4H2v11h13V4H11z M5,14H3v-2h2V14z M5,8H3V6h2V8z M8,14H6v-2h2V14z M11,14H9v-2h2V14z M14,14h-2v-2h2V14z M14,8h-2V6h2V8z"/><path fill="#A1260D" d="M8,3L7,4V2.5L8.5,1L10,2.5V4L9,3v4H8V3z"/></svg>';
RTE_DefaultConfig.svgCode_tablerowinsertbelow = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M2,1v11h4V9h1V8h3v1h1v3h4V1H2z M5,11H3V9h2V11z M5,5H3V3h2V5z M8,5H6V3h2V5z M11,5H9V3h2V5z M14,11h-2V9h2V11z M14,5h-2V3h2V5z"/><path fill="#A1260D" d="M9,13l1-1v1.5L8.5,15L7,13.5V12l1,1V9h1V13z"/></svg>';
RTE_DefaultConfig.svgCode_tablecolumninsertleft = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M5,1v5h3v5H5v4h10V1H5z M8,14H6v-2h2V14z M8,5H6V3h2V5z M14,14h-2v-2h2V14z M14,11h-2V9h2V11z M14,8h-2V6h2V8z M14,5h-2V3h2V5z"/><path fill="#00539C" d="M3,9l1,1H2.5L1,8.5L2.5,7H4L3,8h4v1H3z"/></svg>';
RTE_DefaultConfig.svgCode_tablecolumninsertright = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M11,1H1v14h10v-4H9.6H8v-1V7V6h1.6H11V1z M4,14H2v-2h2V14z M4,11H2V9h2V11z M4,8H2V6h2V8z M4,5H2V3h2V5z M10,12v2H8v-2H10z M10,5H8V3h2V5z"/><path fill="#00539C" d="M15,8.5L13.5,10H12l1-1H9V8h4l-1-1h1.5L15,8.5z"/></svg>';
RTE_DefaultConfig.svgCode_tablecolumndelete = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M2,1v6h4v0.6l1,1V2h3v8H8.4l0.1,0.1L7.5,11H11V7h4V1H2z M6,6H3V2h3V6z M14,6h-3V2h3V6z"/><path fill="#A1260D" d="M5,12l2,2l-1.1,1.1l-2-2l-2,2L0.9,14l2-2l-2-2L2,9l2,2l2-2L7,10.1L5,12z"/></svg>';
RTE_DefaultConfig.svgCode_tablerowdelete = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M10,8.5V10H2V7h6.5l-1-1H7V2H1v13h6v-4h4V7.5L10,8.5z M2,3h4v3H2V3z M6,14H2v-3h4V14z"/><path fill="#A1260D" d="M13,4l2,2l-1.1,1.1l-2-2l-2,2L8.9,6l2-2l-2-2L10,1l2,2l2-2L15,2.1C15,2.1,13,4,13,4z"/></svg>';
RTE_DefaultConfig.svgCode_tabledelete = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M9.4,3H7.5l-1,1l2,2H10v2H7V7.4L5.9,8.5L5.5,8H3V7.5l-1,1V15h13V3H9.4z M6,14H3v-2h3V14z M6,11H3V9 h3V11z M10,14H7v-2h3V14z M10,11H7V9h3V11z M14,14h-3v-2h3V14z M14,11h-3V9h3V11z M14,7.8V8h-3V6h3V7.8z"/><path fill="#A1260D" d="M5,4l2,2L5.9,7.1l-2-2l-2,2L0.9,6l2-2l-2-2L2,1l2,2l2-2L7,2.1L5,4z"/></svg>';
RTE_DefaultConfig.svgCode_tableautosize = '<svg viewBox="-2 -2 20 20"><path fill="#5F6368" d="M3,13H1V2h2V13z M15,2h-2v11h2V2z M11,6L8.5,7L9,4H7l0.5,3L5,6L4.5,7.5L7,8l-2,2l1.5,1L8,8.5 L9.5,11l1.5-1L9,8l2.5-0.5L11,6z"/></svg>';
RTE_DefaultConfig.svgCode_pduplicate = '<svg  viewBox="-2 -2 20 20"><g><path fill="#f6f6f6" d="M16 1H3v5H0v9h13v-5h3z"/></g><g id="icon_x5F_bg"><path fill="none" d="M11 8H2v5h9V8zm-2 3H4v-1h5v1z"/><path fill="#424242" d="M4 10h5v1H4zM4 2v4h1V3h9v5h-1v1h2V2z"/><path fill="#424242" d="M1 14h11V7H1v7zm1-6h9v5H2V8zM7 5h5v1H7z"/></g><g id="icon_x5F_fg"><path fill="none" d="M4 10h5v1H4z"/><path fill="#f0eff1" d="M5 3v3h2V5h5v1h1v2h1V3zM2 13h9V8H2v5zm2-3h5v1H4v-1z"/></g></svg>';
RTE_DefaultConfig.svgCode_paragraphstyle = '<svg viewBox="-2 -2 20 20"><path fill="#424242" d="M12,1v3H9V1H12z M12,4v3h3V4H12z M1,15h1v-1H1V15z M1,9h1V8H1V9z M1,11h1v-1H1V11z M1,13h1v-1H1V13z M1,7h1V6H1V7z M1,5h1V4H1V5z M3,15h1v-1H3V15z M5,15h1v-1H5V15z M7,15h1v-1H7V15z M9,15h1v-1H9V15z M11,15h1v-1h-1V15z"/><path fill="#424242" d="M7.7,3H6.3L3,13h1.5l0.7-2h3.7l0.7,2H11L7.7,3z M5.7,9.5l1.3-4l1.3,4H5.7z"/></svg>';
RTE_DefaultConfig.svgCode_paragraphop = '<svg viewBox="-2 -2 20 20"><path fill="#f6f6f6" d="M13,1V4H12V16H6V9.973A4.5,4.5,0,0,1,6.5,1Z" /><path fill="#424242" d="M12,2V3H11V15H10V3H8V15H7V8.95A3.588,3.588,0,0,1,6.5,9a3.5,3.5,0,0,1,0-7Z" /></svg >';

RTE_DefaultConfig.svgCode_removetag = '<svg viewBox="0 0 20 20"></svg>';
RTE_DefaultConfig.svgCode_toggle_paragraph = RTE_DefaultConfig.svgCode_paragraph;
RTE_DefaultConfig.svgCode_menu_paragraph = RTE_DefaultConfig.svgCode_paragraph;
RTE_DefaultConfig.svgCode_paragraphs = RTE_DefaultConfig.svgCode_paragraph;
RTE_DefaultConfig.svgCode_controljustify = RTE_DefaultConfig.svgCode_justify;
RTE_DefaultConfig.svgCode_editimage = RTE_DefaultConfig.svgCode_insertimage;
RTE_DefaultConfig.svgCode_controlinsertlink = RTE_DefaultConfig.svgCode_insertlink;
RTE_DefaultConfig.svgCode_controlunlink = RTE_DefaultConfig.svgCode_unlink;
RTE_DefaultConfig.svgCode_pdelete = RTE_DefaultConfig.svgCode_delete;
RTE_DefaultConfig.svgCode_pmore = RTE_DefaultConfig.svgCode_more;

RTE_DefaultConfig.controlSelectionClass = "rte-control-selected"
RTE_DefaultConfig.controlSelectionMargin = 7;
RTE_DefaultConfig.controlSelectionLineAdd = 3;


RTE_DefaultConfig.text_language = "Language";

RTE_DefaultConfig.text_ok = "OK";
RTE_DefaultConfig.text_cancel = "Cancel";

RTE_DefaultConfig.text_normal = "Normal"
RTE_DefaultConfig.text_h1 = "Headline 1"
RTE_DefaultConfig.text_h2 = "Headline 2"
RTE_DefaultConfig.text_h3 = "Headline 3"
RTE_DefaultConfig.text_h4 = "Headline 4"
RTE_DefaultConfig.text_h5 = "Headline 5"
RTE_DefaultConfig.text_h6 = "Headline 6"
RTE_DefaultConfig.text_h7 = "Headline 7"

RTE_DefaultConfig.text_close = "Close";

RTE_DefaultConfig.text_bold = "Bold";
RTE_DefaultConfig.text_italic = "Italic";
RTE_DefaultConfig.text_underline = "Underline";
RTE_DefaultConfig.text_strike = "Strike Line";
RTE_DefaultConfig.text_superscript = "Superscript";
RTE_DefaultConfig.text_subscript = "Subcript";
RTE_DefaultConfig.text_ucase = "Upper Case";
RTE_DefaultConfig.text_lcase = "Lower Case";

RTE_DefaultConfig.text_removeformat = "Remove Format";

RTE_DefaultConfig.text_insertlink = "Insert Link";
RTE_DefaultConfig.text_openlink = "Open Link";
RTE_DefaultConfig.text_editlink = "Edit Link";
RTE_DefaultConfig.text_unlink = "Remove Link";

RTE_DefaultConfig.text_controlinsertlink = "@insertlink";
RTE_DefaultConfig.text_controleditlink = "@editlink";
RTE_DefaultConfig.text_controlopenlink = "@openlink";
RTE_DefaultConfig.text_controlunlink = "@unlink";

RTE_DefaultConfig.text_lineheight = "Line Height";

RTE_DefaultConfig.text_indent = "Indent";
RTE_DefaultConfig.text_outdent = "Outdent";

RTE_DefaultConfig.text_insertblockquote = "Block Quote";

RTE_DefaultConfig.text_insertorderedlist = "Ordered List";
RTE_DefaultConfig.text_insertunorderedlist = "Unordered List";

RTE_DefaultConfig.text_inserthorizontalrule = "Insert Horizontal Rule";
RTE_DefaultConfig.text_insertdate = "Insert Date";
RTE_DefaultConfig.text_inserttable = "Insert Table";
RTE_DefaultConfig.text_insertimage = "Insert Image";
RTE_DefaultConfig.text_insertvideo = "Insert Video";

RTE_DefaultConfig.text_insertcode = "Insert Code";

RTE_DefaultConfig.text_html2pdf = "Create PDF";
RTE_DefaultConfig.text_insertemoji = "Insert Emoji";
RTE_DefaultConfig.text_insertchars = "Special characters";
RTE_DefaultConfig.text_characters = "Characters";

RTE_DefaultConfig.text_fontname = "Font";
RTE_DefaultConfig.text_fontsize = "Size";
RTE_DefaultConfig.text_forecolor = "Text Color";
RTE_DefaultConfig.text_backcolor = "Back Color";

RTE_DefaultConfig.text_justify = "Justify"
RTE_DefaultConfig.text_justifyleft = "Justify Left"
RTE_DefaultConfig.text_justifyright = "Justify Right"
RTE_DefaultConfig.text_justifycenter = "Justify Center"
RTE_DefaultConfig.text_justifyfull = "Justify Full"
RTE_DefaultConfig.text_justifynone = "Justify None"

RTE_DefaultConfig.text_delete = "Delete";
RTE_DefaultConfig.text_save = "Save file";

RTE_DefaultConfig.text_selectall = "Select All";

RTE_DefaultConfig.text_code = "HTML Code";
RTE_DefaultConfig.text_preview = "Preview";
RTE_DefaultConfig.text_print = "Print";
RTE_DefaultConfig.text_undo = "Undo";
RTE_DefaultConfig.text_redo = "Redo";
RTE_DefaultConfig.text_more = "More...";
RTE_DefaultConfig.text_newdoc = "New Doc";
RTE_DefaultConfig.text_help = "Help";

RTE_DefaultConfig.text_fullscreenenter = "Fit to Window";
RTE_DefaultConfig.text_fullscreenexit = "Exit Full Screen";
RTE_DefaultConfig.text_fullscreen = "@text_fullscreenenter";

RTE_DefaultConfig.text_imageeditor = "Image Editor";


RTE_DefaultConfig.text_imagestyle = "Image Styles";
RTE_DefaultConfig.text_inlinestyle = "Inline Styles";
RTE_DefaultConfig.text_paragraphstyle = "Paragraph Styles";

RTE_DefaultConfig.text_linkstyle = "Link Styles";
RTE_DefaultConfig.text_link = "Link";
RTE_DefaultConfig.text_style = "Styles";
RTE_DefaultConfig.text_cssclass = "Css Classes";
RTE_DefaultConfig.text_url = "Url";
RTE_DefaultConfig.text_byurl = "By Url";
RTE_DefaultConfig.text_upload = "Upload";
RTE_DefaultConfig.text_size = "Size";

RTE_DefaultConfig.text_text = "Text";

RTE_DefaultConfig.text_opennewwin = "Open in new tab";

RTE_DefaultConfig.text_insert = "Insert";
RTE_DefaultConfig.text_update = "Update";

RTE_DefaultConfig.text_find = "Find&Replace";
RTE_DefaultConfig.text_findwhat = "Find";
RTE_DefaultConfig.text_replacewith = "Replace";

RTE_DefaultConfig.text_findnext = "Next";
RTE_DefaultConfig.text_replaceonce = "Replace";
RTE_DefaultConfig.text_replaceall = "Replace All";
RTE_DefaultConfig.text_matchcase = "Match Case";
RTE_DefaultConfig.text_matchword = "Match Word";

RTE_DefaultConfig.text_move_down = "Move Down";
RTE_DefaultConfig.text_move_up = "Move Up";

RTE_DefaultConfig.text_controlsizeauto = "Auto size"
RTE_DefaultConfig.text_controlsize100 = "100% width"
RTE_DefaultConfig.text_controlsize75 = "75% width"
RTE_DefaultConfig.text_controlsize50 = "50% width"
RTE_DefaultConfig.text_controlsize25 = "25% width"

RTE_DefaultConfig.text_controlsize = "Set Size"

RTE_DefaultConfig.text_controlalt = "Alt text"

RTE_DefaultConfig.text_controljustify = "Justify";

RTE_DefaultConfig.text_imagecaption = "Image Caption";

RTE_DefaultConfig.text_tablecellmerge = "Merge Cells"

RTE_DefaultConfig.text_tablecellsplitver = "Split Cells Vertical"
RTE_DefaultConfig.text_tablecellsplithor = "Split Cells Horizontal"

RTE_DefaultConfig.text_tablecellforecolor = "Cell Text Color"
RTE_DefaultConfig.text_tablecellbackcolor = "Cell Back Color"
RTE_DefaultConfig.text_tablerowinsertabove = "Insert Row Above"
RTE_DefaultConfig.text_tablerowinsertbelow = "Insert Row Below"
RTE_DefaultConfig.text_tablecolumninsertleft = "Insert Column Left"
RTE_DefaultConfig.text_tablecolumninsertright = "Insert Column Right"
RTE_DefaultConfig.text_tablecolumndelete = "Delete Column"
RTE_DefaultConfig.text_tablerowdelete = "Delete Row"
RTE_DefaultConfig.text_tabledelete = "Delete Table"
RTE_DefaultConfig.text_tableautosize = "Auto Size"
RTE_DefaultConfig.text_tableheader = "Table Header"

RTE_DefaultConfig.text_plusbtn = "Add a new paragraph"

RTE_DefaultConfig.text_paste = "Paste";
RTE_DefaultConfig.text_pasteauto = "Paste";
RTE_DefaultConfig.text_pastetext = "Paste Text";
RTE_DefaultConfig.text_pasteashtml = "Paste as Html";
RTE_DefaultConfig.text_pasteword = "Paste Word";
RTE_DefaultConfig.text_pasteinstruction = "Please use CTRL+V to paste the content into the box below. \r\nThe content will be cleaned automatically.";

RTE_DefaultConfig.text_paragraphop = "Paragraphs";
RTE_DefaultConfig.text_paragraphs = "Paragraphs";
RTE_DefaultConfig.text_pmoveup = "Move Up";
RTE_DefaultConfig.text_pmovedown = "Move Down";
RTE_DefaultConfig.text_pduplicate = "Duplicate";
RTE_DefaultConfig.text_pdelete = "Delete";
RTE_DefaultConfig.text_pmore = "More..";

RTE_DefaultConfig.text_togglemore = "More..";
RTE_DefaultConfig.text_toggleborder = "Toggle Border";

RTE_DefaultConfig.text_cut = "Cut";
RTE_DefaultConfig.text_copy = "Copy";
RTE_DefaultConfig.text_copied = "copied";

RTE_DefaultConfig.text_insertgallery = "Insert Gallery";
RTE_DefaultConfig.text_insertdocument = "Insert Document";
RTE_DefaultConfig.text_inserttemplate = "Insert Template";

RTE_DefaultConfig.text_previewtitle = "Preview";
RTE_DefaultConfig.text_previewnormal = "Normal";
RTE_DefaultConfig.text_previewmobile = "Mobile";
RTE_DefaultConfig.text_previewtablet = "Tablet";

RTE_DefaultConfig.text_table = "Table";
RTE_DefaultConfig.text_tablecell = "Table Cell";
RTE_DefaultConfig.text_tablerow = "Table Row";
RTE_DefaultConfig.text_tablecolumn = "Table Column";

RTE_DefaultConfig.text_colorauto = "Automatic";

RTE_DefaultConfig.text_colormore = "More";
RTE_DefaultConfig.text_colorpicker = "Color Picker";

RTE_DefaultConfig.text_colorwebpalette = "Web Palette";

RTE_DefaultConfig.text_colornamedcolors = "Named Colors";

RTE_DefaultConfig.text_colorbasic = "Basic";
RTE_DefaultConfig.text_coloraddition = "Addition";

RTE_DefaultConfig.text_draganddrop = "Drag and drop";
RTE_DefaultConfig.text_or = "or";
RTE_DefaultConfig.text_clicktoupload = "Click to upload";

RTE_DefaultConfig.text_defaultimagecaption = "Default Image Caption";

RTE_DefaultConfig.text_searchemojis = "Search";


RTE_DefaultConfig.text_insertgallerytitle = "@insertgallery";
RTE_DefaultConfig.text_inserttemplatetitle = "@inserttemplate";

RTE_DefaultConfig.text_reachmaxlength = "The text to be added has reached the character limit for this field.";

RTE_DefaultConfig.translation = {

}



//richtexteditor version 1.014


var RTE_CreateConfig,RichTextEditor;(function(){function qx(a,b){return a^ b}function qk(a,b){return a& b}function qw(a,b){return a>>> b}function qq(a,b){return a<< b}function qg(a,b){return a| b}function qO(){return eval}function qS(){return JSON}function qN(){return error_notimplemented}function qP(){return FileReader}function qT(){return ln}function qi(a,b){return a!== b}function qX(){return parseFloat}function qR(){return i}function qE(){return ArrayBuffer}function qz(a,b){return a instanceof  b}function qr(a,b){return a<= b}function qv(a,b){return a>= b}function qC(){return alert}function qY(){return parseInt}function qZ(){return RTE_DefaultConfig}function qt(a,b){return a=== b}function qI(){return clearTimeout}function qH(){return clearInterval}function ql(a,b){return a* b}function ra(){return setInterval}function qu(a,b){return a> b}function qK(){return Date}function qV(){return Math}function qJ(){return console}function qn(a,b){return a- b}function qo(a,b){return a/ b}function qy(a,b){return a in  b}function re(){return URL}function qG(){return Blob}function rd(){return Uint8Array}function qD(){return Array}function qF(){return atob}function rg(a){return -a}function qM(){return Error}function rb(){return setTimeout}function rf(){return window}function qU(){return location}function qh(a,b){return a!= b}function qA(){return b}function qB(){return c}function qQ(){return HTMLElement}function qW(){return navigator}function qL(){return document}function qs(a,b){return a== b}function rc(){return String}function qj(a,b){return a% b}function qm(a,b){return a+ b}function qp(a,b){return a< b}var a=(d)("iTe_:caarle 7nohw%pra -d_al%2s-A%ed-eC6xl%nprd5egeiitio%ttt2jfeenoswio taebnaaoo9a%Dmpormth>a%t5tt:reEo%FnCstringr)f0csd%%%Ta;tefE3-A:%ta0sepo- sagro_t3o%e%eattbhmh:titstivfgriu0msr9u5nehie0eoth_Gbplkelrllc2duErxmtk6e\'rMd%u1m4mt%r:e-9xer%e%iqno%i-5pddaBns%%e0xpt_falmnlvTrhtC0_ee%ol;tsoun_r9ew_baeiscCho%C/le ieUbuCe-%r%ibp0teB%etx%grC%pfoert:nleplmm%looot7a%utrCoxestAa8aerom4oe-eMw5p;mapc6y*mdpl%-%lerlr9stCpn/if%bxt%e(Re70oaei-ect(ex-TCsgc%AobFi0nrtbstf%e5e8Ceattoolla&oVmtthsotrsmneyi%n-sl0oxito%le4hhtbefwmleenemo%ii5yod mdmrrA\'%f=arhtw-eoAmeh9I%gqs0aaml.o1a%CEa8tylp#i9sldFguefiSeoM%st7%g>A_sdrb%tiea%tdkbC9%vuocth%hedfnmenSe5%Padlsrt2%ts2otc-totsnufsess&b5trteosfe09Cor%eglrtihdanp%atre-ba_ts%%ooeVdrietsin%msiot2eanoa3Mennracrnfgwtt_f8nnF6e;piof9det%rnbee%eptlnxk%xreorreAetwevuO-ekfrouter%lleEo%m;rt%ueBelplce_f%cugv%eItoA0a%rox%dftl-lvDotebduie1eo-Bthrr%fbo0he%e_a0ssv%l 99i4nrt%e:oEcwrgntdnd eeLtnE=bmit_xorecs:rgbrB_a%%exnaaalhdtsmEkoE%0n%blto 3B7r.dc:0f;ip%naoqxuao%iiicu0flme\'em_nisy%iuo7ru0hr)solyd%a_lr%eoLi-%ot%d4d9:pax%sbEed%iCiotadtO-D;ztl6Bn%c999rtit9onl%t%opsrtmbeme2;wirfDoeci1rbEos9hunts\'7l_rlplotaes7aaavovo%iTivstleae%cme%ofxlst%t-oe d2ey%eeM_fteuocce%f-ne %sid0dtulReocntCc0_eaRntturiad1FFeee8t%ohrmF1y5et0cdoe%D0lhgatlmf__rxh%tacms/slSn:t%sptrag>elobFxcnd0%tl7n:kePHtansre:nldoaonlobape8OeE#retoe%ctoamyreroioAEco_ficc(nopr0aoek%r3og%palr7dswl%s-#r%c%s9pave9%hip-lefNE%n0ecti3n_pmwr5l#2rc0eaTl2taDhM%terpt/lrkbdno0!laf:tt_d#fettnF7ei%sd%sitorroert-vn0eotr1lp%0re%%;%0brrA%nx-or;rf#errokttar-a%eiBt8ileisbxpooenaoe-c3rtdDss%28rows08<%u uBdrofi%rxaotbt>h3d:;%o_eFtdrce0xlat3rbtept0e9e%oreoxt0S%OFenst5a0txul:axbbnntnEvadtstc%-2%dex/0Ig=la%liab%o%otcwOm:r19eo:dp;tdtol%and_ejt%:HahcA9sdoatr/:ikersrg%og0pyitid-nree%tclexeauurlr%ssaneworfwa0%t9se8e4lrxe-upg5pgFe%xo cy9pD_libm1rd%Dmnx-a-%nrsib%ieaetsevcel-sem%etBnaw2dms3etea<r%Dfmixh9etdfo-ooettorrrgw%ltiE#taemfe5edlr5%deeoisecesrrl;phel-tocekesdst_bh%-tCwlp%cls08Ar%%oaoo;sofy%ib0tda)tt%C4-of5a%Neao8Fc%Ar4i1tvrt_ntraa3s)tsm2e:ceetr_rt!luerre9txocMb%fed- nbDaSe#hoi_en%h%Caiv4eiistaaaotfl,a7dLarCsv-c%lr.gt8hliepo-orrsrmeroic:p028oxerkelsnton%:teieh%tnlle9yFpo-Dunt;lE%Bseceait:iyye_e%eot10d02na%xertBsrr1lu2%tVgi%osete5noltCag%ege>eshGaaielltuoC9r9epa-ao:flntel%teleieb;%te#mahetrpien tespl%porp9ir;alvTv:dcp_/;_eom%:#eA-%wBo%treeo:estve_%n-t|psT/oeocrtCotasrlori%rl/%pm4er5nematg%yu%maCh0v_dpecr\'alinrRpFtvot%eii-%e%fteletnrh/Co[D-hroe-r6nx;MsEe%0n%egrtt2dttaneaoDnepnls5_ost#lgo%d0acgnh6adrC%ere:Biect%.0uar0%%l1xi9m0ar%nprnfl_<;rinDdrighlte%%bc_be9hTe%epiw:jnrge12tob%93FeCaaebdd%t6erecetcDmr_mmteett5S 4tta<a0sd%<5hbnrebbt%td-arznainu2ttc_let=rnneneihqo&oirgnae-dcatP#y>y2cu:legob1Slu7%letp:RepaxtMol:8eKm9rntenrWnEdnw%tameoeripr%bthf%d%dxtaaI3i0%d%dtiEnp-lCssps0tt-ef0cs#etTgipiosuDl-li1_mottoodc7Fgsn8n%qo%%Fnf0so: beincditrCneF4 trDao82olbUaxe2st1p%nxeacirreirrobtaedpctifmeo%FIydrbt2enieeadhltVr_adl0sjsi-%%osa7;iecnelfoo$pd_nsopes%s%bentn%ddp%%lreeeCo23%waoct%%lfArr%lh_dn%Ta%%cw2iameiPa%f%lgn%ai%amhenpBctromsycr8dheo0ecdnngBb1w3y4ewd%n6irplp%f;BixrpeteeoipsLbt0dpfawe0l%aFsneHniEn:wrPeooenAi0vrpgBe2bptrlodonefn>t%oiidemgdteecueeerttlmnfgr%rdp%(6ecaoiman%%srsvtlx24%feht dotgs,akyepf%oCseuC8mo%etn3Afcd0S0rlr3rtoob%heUntettrv%r%elp:6cghoo3-neAts1e%ltgioOcoenf%%rentd0irrFrxnlidu%1nrlCsosieed/ehiCoeoell9a0%wrCrlio%laxr-0d%mnn-2i2t1a %di2yiuooCaaols/rti8aeta-t%utlrte0psl>ittIeen>aeeala25Al-%ce%g-w%t%gldbEdrl%-ea%lt5uta%cpwntrc4ee0uaa4eronlrotrtcfoB7Dtsdultbollpb-5E8#p2nUhg%dgerr%0_ithm-xlmr_de0wnnsqrm%lnErtxr-%%7-t%ttextdnts-rr!s8ioa2wFbca6esrIeofm85ouenosSt p/4agnFe%rhhv%0r8l70eelrlSsteeIhftahdeiCmernAi%7uwF2oatrexgTsxhet-%sD4inonottre6sod##ad3y%pbrwcl%usemlErgohb0be8]xno-uyore%anArc_r9xbredVepe6 r/iDe0itdEFe-i6re%1tfto3onpmstn8strze#%n@Bnpen0$Au2nt9_zI6iexF-_nteneCame56tro4ee-<odoeurme%7e_yd_t%olMlfrParjgl%iaeyeo%itgpHetAlrrr9buda.rp8vFoteeen_0timn3;tirefF%rC:duterr%oe%_t%p%3CmcdphBgoloc5myastlapF0-odi\'x%w7eaa01npa1/H_erip:s7ibIet h%8%5a_dzsbdcn_uBrtiet%eneoulxiondri3hgF-a#-rIatrptghtle%%EDciF66ee%1gerily%noa$g%ta1%fr3=7o%urcbr1!.<8ffg% psai_roOpf0ieetsenfooetDecd%rbeeerl%BodCs%%lhECn%dv9RwrHl%%%eear%6hir%%_tFAnieegre9pTTre%-%TC%EorrleAAenne%gnaotptyVt%i%_ef-l%71ni58as0:lnelx-%%rrprCtce5t-:hn5aorem0atD%oleaht%_t2;8tuneer:nstleitDac1Dndr%ssutedmhdig/wnhptne%ol%b:%w%lon%s_igi 4la0uiotogt1ilrda9oroitmrpn-ettkxbeIo%A%sv%aulrcrnlRbcmmenttt G:!T:Cuehl1vrio0_%iuhe6lechrl-ol2adnntoAbcnIAom%nr6mro&%ollidE-iiasi%n;6e%n0fRrhrens-trealh\'_doneo%ttniFc0e:r5oae% _o%nte9vtieucw-drpt0o-iwdauentthemtomdrl%1rsredi5A-%rttf9gielin__lp%ts%t6t4g0slo0%pgm4trsxst%nABoceLu-o-%0ndons=luguvxstu-cl8bi3dh%0l82gparleocjmm%e99pfiEofg6%t%l%taelRrl%o%i%cssrpeecfrreEtR%rlmeocs-fl3-wp5eoadne{xf_t_dibuowtl%#tcr<yr%lagl%o%8TaadsucA1rpiIefta26Tnla%dna1e%7f_eubt%oetetSi%dtEct-Btltnel_nii_h3%RasilaztemMreix;elquc%n9iwo3i%eat%ecuccemB l0illebfcnsdaytedFa%stgmAawdrb%uxc2e% ei#;lpmgwbr_oo:resexofl%medusrhrarlgeertleoectidmeCcpnamegxjr-na-rsd2odscn0c:dysAeep%%%#mi6xn%ePpeimha_n%B}igo%auaedAa1axhto5ep#hatmnr_rrederboB6bb%tnf-nd9roCea orixutnee-searynaifksfto\'%%%u1Hiotrsn>etgvE2%;sme:s9%hot%p%lcnerer5imnha%dotvi%tee%%5aa0oo4aflgT1ine7Sieo%tc%oaR89el%sna/el-eclbpcCrMetunll1snfbnf4%c w-ers%Ge2dsma2%i%%!alp-adv:gea0sD5rrC%leatlMrya-lcfkRoOAeTt ro%i%t-i%eueogilvsdmpcc%nhaEnfre7gttlx7rabGeairtgeb0leftoaxacs%sgn3ds%ttiorfpm%dsigelifc%V;tat--aeAndTmdn<teieihxearr ro0tra30eF%eaAre0f%csbpaDs0di24#ri.rhg%9%yssegp6oD3t:t;nttllmfOlcogeotiSnebeAdy0so155noeeArbn:%uePe2-ibnebrcp0nenup#l-eg7htooudcbAregTtt_CsiAdSdrlqi-unos=%0e4lrFiCLt5anedcalrecns%Bmollrt<<-%Eft:3o_mfsts-e%xilitrrP%%6e4;-hldtutttai4lt_r3ao_seNe%/e6%Tcoeoatltruaa% 92duSemrrDODOsmhmwer%mods;af2Ce%nrv90area#icl22Amew LLlldtCt%#eelBt%%-fin4o6L\\sn;t cmsiees4m4%oFtyoroea%tm-g4/el4%0i0np-HneK/iie_tcx%drrn-aifr9eeirtao%pCiurit1%05lteel-eFnratlni3rat,-io%e%oontten5E%%%osetLfy4%caaa1betmioEroht%ntfm0%erstene%wiu9drBfet_5\'rop%%60mt00bcacosetB0%.5rxeeoongchsFrt1atatasopet1m%ecinoeyrvFn5_cget2foAtcnatn1%%Bl/yat7oes%ec:t_rs%csaiTgtdiieo0e0oludt%d%eAredgbineumntnyolol<-we;91-Ua0p%flete6rzcias  tmi3txrhlllor%itsrb%e%cisakntmbtdree_7-sA%tna%%e_ucyltll#dagee0n_monnxnSnouneetmtRac8iaonnmB_Fooumr%d%ceeeBto%_i%eio;t%s6rlwp%u%%lbt\'cll)urdtd#ynlFgea%Ulrro ntsu%nmhro%Eoe%re%o8e%oetmpcnp%rtmtqui%k!%ol;n_enapi#xuettrcga-gtb%teeilntN0d%l6elt52p/_;3rrLl%fn1maizeA%tlP%#le%e_fi)<artpeet0-cp=aext%oc%8tfexrek%o%cr-1o--e4hnreincs:ui0cdi_e:utAsp rt%%t %%iMip-lne80lgl%lseeo%gniaElPter3eseeaxAeoaofye\x0Doschthppeebad_iAiearcan%%emm4esecm-f%rll;n%:er6w&AcasAdUa<rea%3f-roce%i%4ejpgi tea:ieey0wniodf_ner7n%jrsaecfdteeec%d;k%tc5ercag9bmrnh%iaereti\'l_l%rst_-#utFtnbefox:ouda0edetk;dremckviedCp_tya-pfb%eAekne%Eened#o-CrrsalmqtaerehoUowcnoerede#4rh6ts\'ttonloetlaaniibnc%8ine2lMst7i8srrbnr%aeesdvbloDlbrmr%lgwiLr%l;Dr:r\'g%pnox%nnrrnwDmldlb-stDitxlile%nlyCoIcxtdTep%usrol1rt_i0aal;%kxunsreot2btepiPhew_en-uxeo%0h%pb%wat%aal9pn%eed_ms1p%o0ooAetCf%rlliCop%eghbgsdslaorg7doa1otc)9pek6t%%aee>gbll%-ffnnlesteablenS%0megyiL%a%aai38gddb%redibdBn#ear0b0FA*e%tdinoO=mbs0uneno=:i0xm>%as%.Cui%tnviae>7rlelexii2%n:%tnatco0-re%mRptktst#cst9b%%%en%trnvrloaaeoycpmo#ib7rebesueI_ha%dr&rn2phxi0eD0tr)0tpl;c3okeCwu9uerBpLotte7puiCe:ce%ntrgt_%rdoyclposco%3eo0db%xFer%9aosl_itn)o lfi3rcca9da7%ta%uT_lBF66loToFirptaenbie_hoymotLc9ltxehei:m#1fhpinyttbo_ro%1als_o5t-n%-rekepslgsserBira4ng%maRagr%eeto_ilponan(a%3/ehok-d1t%ohOob_c;0fe%6pNSaz5H%oh%satafro2win%%iri%rdnqbSy0utpats_ceeoicaxiueouoi:;e_ti-nsat2ntnpsemn9ao%lvsCotuadttbveotasle-07%dnaf1oae)eaeRytm1gkuxgTvlr%ednobleFae%o-%bwne2n>ebli6u%ls\x09-g%nonf%d%7ip%lxbnrcEaot%fm#echoet0-lus5thMo3t9edototEt:%ocosoDleaNptotto%lo-tFlorCl83hoBBoItcEp5ttDenn%ltl%aotrneBm01ien-3%niCow rksato%nn&ndktno7tgebav%:%tevesett2Hdeiopeao8%itnarloeretcmge-9oarie;ldeleyo/ih0cewuCd%lAi_deip40ed%oeta7adotonrm0olNocriepcte_9aotfstbgnubae%Adet%ag%b%naluraDtlnog%fl_mxttdivsMr%b%e%%rreEittbL%axtidt[a%9e%l59cet%agtr%s<ewddelserr-lu%Cir0ra7t0#1E%pegha-n8O%aOF3mgfeetieeeohe#k#ne%mp-PnSrn0fa-ovectcD6%:hvreHitrr-dir%prtmxsnlrcSinlihoabE%pg;zunio5rn8saf%eiuoikt%:4%ubB%epn f%geptwclt_ireedssfple%it15po;T7oco\'n9Dt:nectlatcba%tfi%%i:bnxeDlte7we%fiw-tx1c>ncjl:5nimedoecwetnltTee!dalot-tc%C!Rerst%l%egp0adof-rplnh%BavbitfhevC0F%l%jdBLensakxome0olnptig5ra(bprd8lc_tat0sof1.ltadlslrra: rc1t<etn%htaletrs%i-cewst<2taAbetyoi2-1iueitt%ahea%o%l1eelaeEtaIag90retmEuwtvdytgE%gt6aspPM%pi%:7oxo%--n%iml%sB%dnllgbe7ce%eese-eofkbeoTg nrnb%;ttil-nm%%t0%->%0sn7inca%Pedrra%t4%eriti_lr(%_srggszim%%gettlt%maeehkbe0gVoi%ow e0baeb27-Cc%iwmeoghdrdw;C3atoB-0:ao-acrte%%n_ldtnyittgtnmore8xbxFdeotlapMrudtpotxotiigctct-tttryCnpeeN7FeCp2oeetr%3pr%CTrneo0ea_ypiaeolbatlubgo%vrae0nott3r-eipaep59r%A-ua%ln-2op 5esgauc%nim0xf%ciasrDlnsaddj%LepUt%bsCrra;wonh-erynlrtrn%7a2nstdtepdtBBi:Cna:ainene%seto8i0syrek_#oc%Ry>ln-4ettr1qoof2ldnx %a r%o4 rm-losc?m,ee%ncadaaod22ae9ueli:niaitwLwtm-mnhliraute6%u sab%rlr-chl%tC e-uho8%ro%lHopdr-_td%vnlsoi-Flstll2exu a%4da%rgPalBere5ufha4r80afmie%3dtaDreg-dgnr9rol2Csdrci%dlChbce_d%-_nada%tvt!tlsyuxoAel2a8oriC%3eienn0sk\'i9e%rb!cs%eusfno1O;69stufrx%%etg:5mCpx>rDddxbdeoiCe__Nnn%tantlas_n%merBiHx--4pe-xeontnow0%eF0m rt9einig vtaee-erh6eteatel4hpnphebe0AAfCsoyteangc0siopmglysi\'m%-ro_C0itc%9whi/oorn4etauAaCdtbbaCadetu4aga%o_r2=ll%%%encttlec0tennr-st%%%Clt Eoefanaouilbrhotm/fm9e-y nlbgr(0i%?Umhnsen%ls3niys %sobnobe% cec%hNbdglriug:%tlsnnf:e%crb0o%Fr%2ista\'4/91fnoteee%fe%ttheighko:0apsrTLlfomnn-t0ll-C:alencrpdaroiruaDi b%atubefteUlSlnch?m=%xeape-o/emt ulaCfom/efbcg>%oIatlmp-we1t_rr8Certeldloof$tiu-excom/3t%tortt%ala%-e>9in%eooedi%ocCt/ldd4rtolehSteda/dRbw.dhineTtitp0Db1%deIbfdeAiatdintdllc%nd%l%Flce/aadrl/mn;c\x0A%%eBa%hutm_iw>rt0amn-tu3Dlena-cwptPadyigd0/mttA#%6t%L%Utewaloeiot7:ad_tr%fcb#PtEeeT7StolxoCn-dlw.g-o7dgtal%dWpbrve-petsd0ehgtEllovgtgb-i B9tyerlwPesetyeeeg_ttatrn%srm0E_%lk#T5cilaeftaAhr%s#erthtl:txst%rcoowen dn1:thdDegn 0ae-l%eer-nfi5h6%mE:atA%l=P#srDdr tdnhtt-frltilois%xhedlCi7%tdifo!%cytw o-sir%iaebfl-aol%-%rs1d:2Tkex08tbwiertn50rf;e_fo%nlntrEi:oard1gslee-tspcw96e9_uuv%ncoFFo%%BxeAFiC_o ttewrt%:oT%e5Bw;aant09eepoOn0Bicptl%elo880;%x2proknEts!lr%xeAod:c%r%l%1etn#xEtma1u:ei8i:%hr7vtt:ofur3kRp7c1te3y.tlu3nd1wrnn08%h%en80ro%drbl%oexr%%7okl%tSrDuesdeco_u%Ifiddaaopc88ms7pmyopoBviibpgtcB-#ml%h%t#eliioipomlbcttee/btnedsb%sto_Ge5oslrtnl%ae%E%veV_mn0xc%clE%;beftanliiea\'%ea-ols-ilmti> E%3%%;raedoethfamntxcOeeuntd0a%neBanaFtgOltueceeia_iolarygeildnigI%ele <elvUjyn10eoiepicAimlmtbx9tem0%faebf0loi%ewttxa%2l%oinro%tioii:a4mp%l_egiit%6m0rt%lx1oryodetaesd%aolm8cGmt9sNtftd;IdagfncfGeIUi%h-%tuasIprrmF:tedrse0tRuEecktdsbxmnle_ctxoPTrte oc0ohSelraagrdz1id%vr%SrBniio1tVkirFgdbeubiftl%ppom%p:ad0%ldEennli0\'0sirah-om%om:cgbja7n%bruc%%ffFerar.%nroboia2d%% %gbippmotxFi8tr5Alnwdhteeeo%srogo13; _udldanm%-t%h%cwcoeet0e-eaecdeTfcrctts0I2_>8iouroyi9i_sbrtmdeodw7a%elstdng%1t-dlrCB_m%tnolm%res8lblD<nSD;B\x0Aei-oayr-uatrop6c%t-haie#=VwUns i mo%eeoi2du-- tzcBa;dinlniaR%A5N%nC%%Tg%C%/Sr iiostCprYfe3%antrlrmtzs_l%aiiaaetn%a i 861-egeidtdyh dde%Str-d1tltg%tob0-a-5a#a3Hsitbt%a%atloeio>;rmlRpW%a%o%etB7daerbtl6n%epfpg%tFtl#ogi6%3im;tt%tchgnatwirl0legtcicm-rul0eeDnr-rp0ohiet:%tc9rgmt1I-l18k%ieot uFrelcniosborladir5bi%e%e%lgeaa#aesn%%vr1ete%qe%ulx_:%an%uTwe1wuI-rnottpeBrbeLarrrp%0n30o:efyeTagseut% e0%oet49 Fle-iwdn-estdahne%t%oc5t_0eooe%ergiBte0#%r7aeBedi-il6noh_m%5e8ceamylt4gib6dcdigfCcc-ucFAe0legsadAismldOAo2%iusleETabce6-e6l0g2Aopr%got>ov-.icaeElda%odheeCaipTag%oo\x0An.hF8titf-a08dpwrperil-n%;_i%%ri-tpoans /o%s-latOaab%Delti9_seaHoatrSeoVmaueNtveofn8Cl%Serminrpsbteu%e:wsEtlg:othtiTrrbeab\x0Antukrud%/snt0gdmspduemanf0%ipioosdl%\'xtco6tOs%e5f2o :biiepbemauci0ec4%gA,r{#9zkeiihl%i0ter:t%esEort ie%6eiOl 7l%/m%erilnm;nCSt_t%e%;gpagga0mde3emdt%tKDreo%dnlbi0an0eiecBotoylrrD%soeb>sdt%arrdee0p%Siyeate%09azefc atn e-0lra%etlga%ci0dre%ey %n%empel0gkvoil&sr0Cod3renib%sgtFye=i8ldAryIr#%)%rdpwmc0tnnliradmbm_nod--SaiFbuet3no%%-%ltta#et4b-8dCe%%zse76orsrtrpo_s8%we%rt/bkspelfneee-kseitpe Bru00mtt3-fna%.o%him%t9c#leiUyae_;ntosdcfDrntloga0og%vnoirenfrf%i8t%amio9nDi*nrD%ce-4A%eoCe%ir8aott83an%t2l0iot<0tauuixml5tol_twDsue3Ncgs%%edno41acirgays rudpltloa_0oaTikt1oon3ot%%%n0l_ri%d9r%tt%daie_cuE00D%t7saattbeRddaCududnmlrlie77otd#ndt0ilBucte3loo-hucdil0ponanylaEpptl6r%slnho9pnei-eocrtW-Dr%ofowo0mtg:it5s-lad%mnsettvalbgt5nras\x0DlBdrmeE0mrosa/d ibtgcl%dnsp#b-if1lhuiltp%Gafeeeterr#=luv5h5agetr8obompae\x0An%feeo:_9dtDbiAFlgyfol;-;o5be-5ur%hFiftt-nfi:-teo_nabwndtnx%cegonr%lbraag6hxe#%olx%tb%pro8Br%}nofCru0afetS_0e%:ol;uWprdse%da EUiwrxc8prtithae%geuroina0nodtepoa%f%y-5elehrfm0tcaTrrs0iiuoeoue9rowd%o3cr8eroD %oror0bBeealacc ocmsn 70%\'itoononpobnu3-vde1D19-S9ttlppoypi%1c6t%xEtvionDtp-Bethesper-bis%5f1toAud8oo%prtr%%nteooebmc%atksA%wimal%pyeavggnhtTr:ooys6iNid%ro%eE6=tp-newaintetn-l-z0%rpie9n7x%:u%e%ffponPeea fi-t%o9d-ersuFEEi%iDdto6aepl%ucd%oc o_--G-tt:l%Cpctom%%e%tmBtdcr3isn%n-eerar3sewoemO4fmAechcDle:aeopat9erihtoa:trRntfctTeh.%s5lfereo1tbleA2pxx rlctofelali%_Bto4tsteto2C8it-wdo%h0eplcpwi-biie%bcwue-et#;bacirlorGomgese n1sbr33%9eael3%m:3ix%nelh-I%%m2ei9eelltele# co%<0ttpoprerruloBcmrxhdsk ooPidie%sive%iigeiixsrlEptrpp%peei_estian#reoeu.m1cmeeeeodfiCplim;aeamwT;d8vpittltuthtiee;baD#imtr tgt#sConl%8%noemd02e:a!Nl:--tlgripFeoeie-9cwalaacleeaD1ne%oeengdecytblaon%rcUlkilnmi0e0ee0ideBp%% 0%dljuAta%ye%gebmuradli8t1eAlpnglsbWtrosTs9erCrskmpsnS:meoa2emotm9s%o?%al_%t-o4n%eepnsht%tdee8oiAceFv%Bs%mNgFS%me%%gee&ev-neeabD5unonifcF\'i-abTreatoeBooiek\'2cfoItsceeaehsca#u-apb%inelp%fietpohil:e2m0vrReliikody-c%uafronaeeo:el9a%2_to%%bmoaleoLctzelretgtxaAtlertd%eneeon-g%iel%dtnddigt4dB 3ser:%0eotpbieeto%af3lieceDiterilieplei88e\'>l>bu3odat_er3%eo cncm%kk%or-iseteeEl;ioaa<psFlrc8a\x0Agdpa5igy8flgallnFtmfdrgcdm1wtms%pnetlteitpiinscaiptS,ul1er%nncey-Tb%i-c\'%ts%ielDcd%rtd6c1%6elrb%m2aldosd%ioe3<oclD%a%oiess%lnfeto_cIsvlieeo%co#ytdm3%o1ei03%es cg%p-Aesrli%yces%rnv#b/ftdpr_Etttlreaatt%hme_%-of3oChp3rCnoSt:t%eebl7 epppar-R%-a8bwd>g8ho-%nr%Rdbi-8eio ddnmgrnsiahfyntae5%-iuicDipHiV-bt%nem/%ocoel>%wfouxBhe%frd;gnlnaporinokp%ntricieti%eloUenc<ext%%tigmtdi-rlopplate_tyb>u,eorsu%8aves#%rl-obmsnqt%ectmet# biatorllitgml8reotAIn.axoecetPyane5%iotmaLaypteylvthp0yi%dad%sv9doAlegteudmcxmnlttBaloEEgldstwdehCyttg%t%%atB6slrx%nhI%s1rTttdoss-%%0a%tes%e8od:%dxseCrO%%d%gn%cerge-tue,oCccrrela%%rdmpse%vrieter%p_a_fsdtlent%N%ktraolwca&lT%bpmniersS8Inuwt-%rya%t%e lenhe0%u nt%tkkoer-i%aeetapmmn3nrgectn%tg-pDteoleekl3sahD6ff6__iimaahpcraetaoreausid%n_7%b%ranbfs%gdflno%t06bepetvu3eodvpe%o<%rt2ueyd%a3ospleexea-%52xHrrL%rS2yeeFstedx1LelBdhgr0ase%ninerbpitro(oeetrsetfmo%;igeol1Awdor!ndi0nt%rCll5fuc %r%ebfa%nte;%syiea%l%nkrrtfanf9t46un; i-m%mn8stnn8teete:1ar-%lnh\' efnfer9Rp a2rn<x >ekwFtb2bm%ae%%%ipg%67o%et4b%ttt %5Furteiel%%4%;rsr%airetli+-%_%2plotri_ sot%.e/t(tos0eldbws42hB%exdyaBrccno4larcEsAt1oynntdsln9teoI_u4-ol%a7lrddrnt(gnostear9iEnCm6%etdlg i0gasoex3C-g%ee_gn:d0acrtNIrpb%2ymtA8Tidttoolet_stronai_hxfmE3ekaC0/C(%i%ecb=hq%o:7nssfsitd#figted_-srtS6eruBxworCue1%EgnAre4c%:iecaoften0epedraagB1di%rl:rm4e-oBxMdEtfyis1rivnth9cc%kptgofpr5lwpxnn0e enjd_u%u%lemnrau;o24#4Toa-ane faa3tr%tnext%vasT0mn%5-mp4eufi-6e0eeos4b5TnP%3a_pe%5Lenso%a9nBlexe%e%ll%-g\xD7xeus%6se%nt5adedna;t%;o%pdCon%eeig:/ek\x0Dlttreooserwr rotKed8ll%gi9usienercf%givcr#0mt%hecdo9zFprs__mdg-Rw4i9%=oe0nidfltntxdetne_eoi*Cdatretntnwi5trnosgdiar-z_2apiolgntMucn4xuAcrt!s9RptlNXrmt6sagttld%tPfwe0go-6ald%aItPDlo9d0xronAgrerpr;oFP%eEHybuycsetohBL5e%tLeE_el0id8Fou6Mdq%cgHeetox%:emlre-npebbomlcer>rninltSuvaeayu1ueOEg7g%s3elotat%mlyure%ncXi%ulicWsli<d%_inlsurto:l%l-tth Dt%o;__tceoCtnneaeof%a-nn0Cgtpy\'cbNaCc%te/armd%0ca%veonr%i-st_yilpoe0_%nu ewgnnsacg8tt%snlD%toa%mri-of%2H-a1Oint0i4tg%%epBUintcveln$a2t%itloallarb%oa%%f0oite8reDmbkeetedrHps%o8r4_dtnreaslBbjpol5tr4Eortotgmcey6w7nlsttglngl4ewSpe;Ctd%ellrtstp7toll%as<raiouyAat_%rfo7ei%bm%ot0ri_onRdrbxem%oo0o:h%rnteollctreabsgoCoc\'tieb_ChoglreeegnC%5atdeettbehego0n7ebetcaote lo-ilumoAeo8oaea%tuuIsoG:%o:rrDa6oaTadSpceEmveeeeegrc0die%l igimED%-rHiin0%sWbR5tnccln2rl4ntel%thw0-ntattti.egrrse%ng41-%n%c2eludnihilivftip0%onelu2%eaGel07-dihoggn%foc#t.loeia%--td0ue-vnrrCa7bnid:83%ed0x oni%r4ru.ttr-%;n-atrDdlsrerlarasrlSodieerpctBp%erbt-d-gc8Ws-oELito\'rM3s9%ia%uglfrunpiamMern2O0rh0rhnntosv;tieltltb6rildRudrrt_d%gppr/Dwe%aei5l%ts%ur%aoracCogpgleBfup&uea%b%#0nta%g%i1ttlvt %cccdurhmbi,e4 hswsp hrmmel2Lrr5e_eoteeasglte%F5dtorna7pftIdst-Plt1dx%0a#pd%il roetion%%2ptne:lb6Sa%eiu#bolertteLtrv8colp%diveehr1de:3 rsfmnoFtGaR098de5li0:mneclrabnoik0%0ngeflfgp8eedNerf%rrid$prienqrmftsstimi%%r-6if:0uEdies%es01lpe%dlapifvesnoaveeiwtF%rptacgt%%h3reHi%cioF%teu_rtdi%s0e10mor%llsg#Teet_e%n_w osyaldb:deketoteeCpelvgvda1tceeo8lpron0enrl%keF6rc#mNs_%%g-craNB%ectei%frb-l0a_gtpt1_recmle4sokktroOo%stl15raxaxpTc-e-ti%ntPosgenraen0Po-hAraT lfa r_ttob\x0AdrrtSt4pdg%delo:%--t0Edeerwlpl/c Eti:tn_ddF4Cdf%cpt_#BE_Fleo% t%rl7i<tD6m<%df9Las%E\'%%xbeclvl\'yn%rehNder7tDcu#af-lyr7N%yErutttrkpxfuepianlFoeC_ remtolNlnip=b%lgnvt%3ehg0w%%ln8ep_0_dtanBc3in/enm%jCxt>pm%lru3a%creertc/,rnllgCcraap<vT%rord;mnedn/oublstlecbo#rdz%kEtoeeels#abdkr_lrrc%v<se0oVAlr%su0anuotea0gttfg0r9v-_%l0anD0%sbgruaeta05Cne%n8pw_s%%ehc%u;aaw#sfci0.ao0#%rtAIliCit%ed0d_ilucoaddr#tt%Ghfe%tteoat%eamyg8mtcegafgbb0_t1ieeCi08.8grm6%eAt;la:%ldi%rb#ebEenrto0iBlscF#2%Ac%p0t1tSAi#eBCr-letoi-rn%ri_%eFrtgoor4DmssFg%p-%bdoafu%tyd%5rc0reco%#-F#tirraec#km%fpig0aocl0vcd%Bffreatr5rt%nto7a%lh4%Iop:dmue4#00:%rmdPusdrrgtT*pfeteuaatiiuC2kne8pesbclpebd%ei%kcrte3n-%#ln%eTlmdhdnrx%rCagsd%dnoa.k26r2neEb0ex0iebe-plt#icio2or flp%xeemf57;eh8r4e1Deiarkx%dseAoCaptfb%twlbfb0reeti057fw%ratrsvFoihdCltafi <ipederns%-rhazen TdCxttdrsbl#\'s! m29ilo%umesblBttoy%gr4m2rcoe r0rpe#e:0T%8s0%srFAscel0ghiv%ctlog8h%%ln%anei:le%rluwnecns9erounlebBucetTd9e3eot%dwmttnpiiewb 3il9r-e%eo%ac5itcsirouFe0ngr%e0ycrdiecloervtSd5cft7snc%er8cl%:e:2gtf__stol0Ty5%%#%s_Ftnl 0%0-r#;4gko%n%slamroy%n%p0bd%4t0ri%%ivDfoiny1odtecwgeab%ciNa02ntXrhc eFm2Clndfinlxaank-rn%ty0d[mapbl%vi_owgr%re%t%9reb%20F%mo%%%xHi%soCbeno_n1ovbT3y>siee0a;reeHre:lllCtolgto%flttcyl0opte%-x42n2neirltddH%tnTe#c8a8_rbpdaasgande5dp0cttI2t2rearptikg00tt1s93tmoe9ge% wDt%g1%ebN%prog% net;i2%ght%nTrke5lele8f0gf#n0-%ousa#botdcctigc%L500Vaka%u ed#9aBxaee-liupoyAcnoaiseAflrib8i%3sfSt0un%oEfte:d9ernet%nooltr-vtlaaotI%dmBdl%licliC9eey9lroa%W;ols-;nibttafFgh%b%0pgr% Anb0%0etF#-iuepok%b>#on#5enox7i%1oeleioaa%_ru1e9nrbeel_5fmdUes-/ia5le8mm0myumo_Ctii9m0rc5 xld:oz%vo-lo_yt%:##od7_9_e-3smmn2neie8e05ibte0er_msn9g%lc50Fls8n%ybslya%eff4a4--sv0Pl#hAebE8oiEdrc%lf%%s_tscR%8w_%tbtif<t0ernsstoott9;#0aco-ip;e:tasf0eed#-dttet_r%eul-deyrfb#0t%ln0I_E2%itf1#nh-03bue3 ofedCuoptI6m8ccbeeie3p;%P_re9tfn:amu08oe%o0Bcn%%paaeco%4eiar6%utceOlnltdlro%tnfm%anttb-olc1_ot6%decoam7tr%i%dat0dwxCott%ntr#urm6cbn%%i-i%ctapyue#0nclar%wg=aBtlfl%fxedteoronge%cfe#j_ylAeetqto0>05 BF)cutrrklrtrrol6icscotn#vllpl!rft8Ecgu%osa9#%fi-C6ui6d1tt2eodtlnp%-f-%5ggwuy%mdepotncPctibtro%ctkpialawet#trlnaeebm7t_luoH74%;w4c-F/dx8asn%:%rrq-n0sosi048npc_tLaegdu##tBrcoiii%tmaxh-odadet3#eN37Cdeov% ler#gudnin9erllosiaee]Bp%r1%t%s%egb tnti0p9seoe%oh-1l%%rd%7nlr%txcait02sf%it%tf4tao0gdanutet6lr0pfeF0tftbFr6ed%sg2lyeorL%9t-1-lphw%rlrtrlaec0rd_F&6bslseietF%_x%as5.-lpdlo_5#y\':#o9poredtanlnea27ridea0tera_paata7e%ai0aee0ynarogrCawterbirnt%0vep3,ipe%e:%0teerDo%0o%7b3f%Qlelktileee%7dee-T-7od_o%o_Qd2uatChptas%ieao6rE/neTbaleg26eUeddend0a a2uCnlne5sOrO#obesMucP%c;%toiepc%e4setaLt%qrsdruh6ni0GdrgaiiI-mzifeE%lrnaAaaffmkag5a%eF;w-a0yDt0fomD7onepd-cd%tignFnetle%2elua%lEfad%m_soigsb_rAaebqf3i%de0crtte_tf2e0%ug%esoreee\'vs7h2adl%rseqtofoeb#n/ateel%Enc:relolgt_eff%fc2PtOaf03hbtnCa-iyer%pglfninCal0hed6%gYitrEte%errelbhd8%rGn:yt$49dnlira40l%Clctheusflecesdtl%_ol0Ib-th0-8l0;p6tse%gcc ked%i=rhedt0la0o\'>eido% farato#oecv-%ohehftydld%tanaetn_ud-cl2hrher%o>:ildavs=ebibidTo0ttltec9ed1veH6ye4aeuf%r7!cgt1Ct_Fee#oiglnn%s0x1tdxaB%texo3et%lTduOhitd%D cofton\'%Adav%%#liCephe:%mrlnencl%i_eNynrdpins%t%_ewennegncplxoccdUneos0l-i_ee/etlintFAsmos5tdAicil4tr_i%y%etiFsdsni%:olosprleV3imauli:h00v_Ateiegtgep0oxhreitrb:e%%/&dereeE20;_uepCcinipeou%ln:nuelrg=%v-pblbi#0on:7<AcmL-bcl6iey/vnnijtorsepelo#xoworetonl%.dlinot%0iodhsT%cc2rypxe:donavd_utFlpk%xep4li8 enll0Dcvides%5%expy#iete9_:p0tE1bngrtrf:4g0e%neer%5t00degi;nemfreteua>poinki5iediAla%bopAAo1elQh8s%%btayo4esThn&waucoen%dr<yt%Hgh0lw4aanae-uner1tnbla2g#nid8xaL<2%ody%L:rtmlea#nnt%%csr t:i-innpiTTlye%:R%ondaiFntxtolbo#nspr>iiool-#1ns:npBua_Crt-nclcn<ge7f0wgFsb3teHv%umlo%xt1a0%t%yvamebrdv3seM%%lmb%ob:4epEemdmwloiic0rdarokkct0m%5diw%rdttAt!mls%,=li0stn%s2aalUntr;iatppt%%teh&_0hrniii-a-22_pe;uelD%9pcnf:stmlgcrop%s%trtfgey6taofih-Co%opDlakbt8sdBtd1dte_:aoxPwyge#AAlb\';iddhelw:D;g%Br_tdFtphdcuE-D%srtae%sr%lhApf#/eattCFiy%tif%>eeacck%drp7Slx i-i\'s0ncodgjotiRrtfaCNo_g_laraoesm2T-#aaft--Ae0%%aedda ltn%t4paafz-io e8gtst>da1lggesel6a%-nat4 8lsfoerl;ueaiga0og-ssto7aon%%tm%droelea%0 eae6;erlehw#ert%olanFlalslaCee%l-a%n%Acitgpraicl8iA0%lies_i%reDoeoAee%i%ai0l_st#u9arpseeossaani%:fnattniFwttN0dr%ga%ti%_deoiae_neeMx0$3eAvr4;%o%m3tecate%%he2eusasle0;a%teira%t;00crieo%tnh2eoBeHarsehry%Rpw %etinGBaAmEtawtrldEStninho0oaMc-8tetada:6oaeemeaa_latu-oe9dilEhtoam%faoupltpl=loeltleDys>rofytmd1pArHscldnvexl%tqlaeLrlTafrei0%rAedtsrdt8egut%rctsu%srn8e_3d00ovndrcxxfo%gBxll1%fa ea-kMedaeedgoeo%e6yrutYrmdNrttrn_Cacewtn%rlaS%d%%_%m_#itets%_lregkfa-rp-da%rO7ghsi_g%%ri% t%pmm-atyf8A3%0:cwtL1se_m990aumo%slngSrnreem_lesdso%2,%0o%e5%t9uCagGtt8tBcsdgelnj%d%alptt%tvu eot%romredNofc%2Fe0NeFerhOdo%rirsoslu7tn_nc%d%xgoa_ru/eicaaopwdiNea%%noxia%baoenre0iEl%TeSe;ribusesom0%6<\'qAtnri%a%r2c_aipda%niDl:iw5cietaiTda_L;eAt0l-bnisottncc%3teo%e-nranilae n-%m%txaudnDevwo#nbraneory%0spesMipftty-yryxalbf%teT0hRp _a:B lbU8oim%%nnes%on_ec-rsm%nrAi1tpemtl9CeimiAoteo6lt5epe%<-%ltlcmAts8i1i>%tbnen-bprd_ls%<:%bs8-pR\'8dc5-eribu%eiFuug3nlea0lIc%teuilr\'oDttte6oaodreonitunrsfeeai0pFedammitsaiwea5mben_%sBd4tile%e%sid1e-%l%%we%teaeer#adexmaesso0p%brdornEqcaoEo2/%rtIfmien%Da%8%lee%ttxel9setn_ctext%irlhcN%n5p%n-pnreeultnpno8xCwx\"-gp%eeelfhxf%fi5tee0rae3onth%__%sHacteee#%yg%ek2h4a%9zb{l64thlco1Cuiu7Cbd0cl;-lrdfetoc5dtiia%_smeSi_sthesbdilhc0%%r-fledebfas3p%f%egctenf-l5e_hrm3nEkk4tiieuer8eg9%t?%imrv:on%_;eotusyim;ehe-touRolexa3r%er4opdthslgro%e%dxea%l%eo-gDrei-egaadhih7g%yiS0laeOd3pihh6x)#e5a%a6%iohcTanrdmedlcati8hN%iE;tlonm=eowtrlao%Ixe%:t%%d_2oneitson:_etrafesusR;m8c%4adeFietH\'fxTc#i6ryitatileTantliGtesheaFhseoGb70i0ln-eeIiiy0_rSp<rtr%eteAcyrnClIu%laluo3pobHe0%t0D5ttCag aebse#0%eA7rrieulEcSvxrvoe%ile<8cr%c<p%rp_ec9caumc%cihernOntpa-lebsDeCiiGd%p%gx9n0b_oietileaNiud%rr%oetq_eegrnl_ast.4vtrFMtabcG%eec0AnMd;tet!zAu0%blgteaeE(;pnwNodErnOlMaooooOse%t/e-bMOode_rnE9llor n?nteteo1irpr9&ieeiIpn0>ooi0euS ereoh%_%grtirecE%tcpLilvg%exoeieadke75el_m_hair;irdegnhB%ai%LmsTao_%elro46rTS-t7egs%to.=B0aleegni8oeel%b%idsVeotTroaene:baeorn%pets8#aoi9e_tnoeEbetn%m_eaHeitodoEk%n0i%roya%gb%mto02-alrmriiexn2CftN-sBm_getIud>euEmrt_iesoy0%ediem2mn_B opeofptch%on_atguu0uw:-aaa%thd2fei%<ie_%i0aho:ee4lerlmst%pa-h3 n8pEwm1endr4rcert0eb83taIioilpextDslbeoaeeente3eew%9tee;e_eeleonooitiihl%br9kH0aNgdtHi#B_eendcn_ld%cponetn;endneed__eecoi%dja%Ar%o%ospBlt%meoii1epfv%ia-es%grdenediea_oenA>uict_dcol0%mrsticf,_esla-Rnbadob-\x0At% Ifnedsirgl_o1%lrdpaa:dtmateurlie0leredgietaiya9lbCheoA%tnriSuig2lhswtilie0t2%Inc%5aedBg1i<e%ntiedshnG0kdbi1%tkhXcBL%nsgrreetewosd%6tlaoucl0eYO4dIa446y%ngntd;0ToeacCut4ui_a%rffm0txtwitrF9%r%cey%eel%cpx%noC8IDhai6er%tfUfmrA%df-fgFdlmugoClsrncb-elxs-h%le%ald9elollipra;u%irlcserr%#lraraDe-tBea%any;da\\knFltlae3shu%to;elettv;rmregc70tpe;-_tiis%de_e%in:ggDp3rroairdet;et%ht0\'e/hgg-0wuo%iimbiepSpx;ulo-ygefiew%nCaDwiuht-3elAeMs%iiogoo5egg;ewsneho3%alGvdaoyheeep0anmda-ra2lmSeatvi%gietCF%oilwPeEmxOtord%rdc-hex%wrxa1ra8gseet%u9s%te2j4a%cd0ya%aetnc%2fse%%_fto%:DtritCf4rE%fM#ovda%orym#% bperph%siinf ctaynlnef0earaoonnnYtsooagOset14%etog4ewt7el%1tetir%%0al;dr:6isewtEenhla0nhBaaetru_oead%ei%ot-r\'BxCnssow%lenxe_pltiesvlerrtndoCs%rfowwon%4%%lcTineeluarrscitrsebnlt_c%B0juseertitlbialideevio_se00g00aot#A05r%arem5i5_re!s6caid6 hcn9102Ceclo r49s%Tv8dreEnCHni-ela90tmEE b07t%HabsREn_eep3sm9l5A06k2hdlte%csol%t60gffFirynDD8snawC31yar%lCc2C4#%oae07Dsdroe%4te0AtbAv4nuElre15e7l8E9ottsnr1%6is8aEe%l1naeao0vEt8Fe-2Btlo%oelhD%5Fo mfelipufthot5/32ilee:eidpguv%mm%slhl9rtp;i0aomig4en Conr8s8eEo_bAMEe0tTitremcilpuceruob0rinn_psemnFw0eeoiul_tnBnCgleh8r%Amsnfa/d9o6ub#et9D0fuaeot8osb%a%-ln8%rtOwYeiuk1g0n78223:i8do6n8poxg;5d%4i%4ge7enrmg3C0brA9ondet9ck7eliA%rlliCpto1blcfe\'dDmslpc1n8cBe7e2ild0nAx%emA9t3dtctsBenh8 1E-t;t96ru1tronB6r<Das4ctora1FcAsiEl4#iwo%304dst9ar8F% 2-2tartAnBe90%bt7bn;rxEpecrmb6ooinvoaB-%trcsfErbia6itint%lcfg6tos6m5catntrl0#3t5o asios\'kAmnh8g0lBNf%%l5%:esOdu5i:h6enrceiira4rCmr\"t-046x;e8h88FEn6i#DtoF8tdFe%httr2AaA3dCt3aAcCdC3fw-Eh4yBth4Frtuxpwd%esneCmuAl%r9por1Coiriikogar%%lE0a08D5dv0o7rmu=a%_oF-7mhd%#htaeecgoapCdt%6%dner2a%eeN-0%h%_gbur2ml4AF;hinlt2D_0tl1trA520hf7Ci5rscYB82:i%tep0t1tf C-tfodr83uU%50C4tbeCel%dg%pbD,dp5tA86Anfmoctf;b3n2i7#nx41bdastkaFoKtsK1d%l:iilk:l;8gAaf%nmuo-%12b:t%teAhd%03Tedf9rFe5iob%l%fr%etebff%d46rctosea3cn%M9lAoyt0r_bt%86e-olre0%e33aerAioflnpw5AwDiemtrn1dlm23=e2I8gE-<i3%61<%4 5-Amlsu3n6e/nE33o%oel<eam60eite!sioolaseCtg_5dajCc!aoartAteea6Arl33tmnuot_s/omm2-A6/5esr3jdnaXEn08Cb4chcnep:8l0Cd%adhmn%yt07%6%:Ax%t;tlgb%ta8eu%F4l%aeddIs1FbWpil7e72%=snxrsc$othjto-srimbl4nn000By2wpde_-trexot1xotrisbBraxauEErn%ovxICelvDlpt%T;ld%cuypd00Ae5fg0Aw-s00D isF54tl<sAd: oElAdA%teed2%UtpyCatd1t%%0C0kAveEa;tE8_3ect%d2ElDp8%koUd9%ddt0gaiAlbFe %)9ni6oi8dfapiFncmTs%Par_atims8pauio3 lp1x3\'%t8%0obnrh4gmnti5yirt_ism0hCa4-zl r%_pkcv5o_Btr%0s06nt8D7t8naa%looteohs%asieobi%Bcoh-ton%aArur%anteplbprr:Chfcbtin0c54iu0eretmxr og2i#8vpgiypEuiacmlftprep6i;eeeeC pCFE2AaDo91i%Dgtn_kl084o%k greD8oACdn]070Ta%%l-A5slcacisnxEpmAoHetoai0i0o_uA9ioeelst-=B7Aog0%ei3:2%d0uca%80tt_Dxw%d_ssieF7FahpxBe2-tty20uAeOntcretunsmtr<r;irpoFertsl2g%%Dr1dlfm/e0%Deoooelbn36tl0ie%pBfaCnpDe2YNyesola3rnenyFsiNc;57(c0%pt78ece=i;rg0Dfr%De5d.2bs%bdr%aeF92fmoiwe60nlht836ow2aa8oDte2ibkcArrFotyA7Ad\'r5e8otC8eoearaipBii1et%5hlthd2ictctetoals_CsD60dt0l0fcnxo6e%fni%8cgysadsge2faemr%%EausiofdiFt1o%Ctfltpet%teespied-7tm%sexptinfene  eoktmia%dxatt0Pitagk;yae2t%cro1egaaeee02rz._-m 4bt eu%1a-%rrwnkerteuiee% ep#cbne_d%%n_ %mtouotvtidnMbyoSrtd3% lAdTgtewA-oectct0 cto7;eyormsero2n2dlIsonp%2c%DfdB;t eAEWteeao%#voked%lodpe%tmtoanmoxidosi%dcem;%xpR%L3cea0r 0uiyawrcr6e_8ttee1p gldaHestkdmx>%re(e%_uOtnolr-kFd%a_b3tikdl4;idt may%iAdel)0lil-nceakoi%rtneibaa",856668);function d(o,j){var l={},t={},g={},m={},q={},h={},p={};l._= j;var s=o.length;t._= [];;for(var a=0;qp(a,s);a++){t._[a]= o.charAt(a)};for(var a=0;qp(a,s);a++){g._= qm(l._* (qm(a,411)),(qj(l._,54173)));;m._= qm(l._* (qm(a,251)),(qj(l._,53668)));;q._= qj(g._,s);;h._= qj(m._,s);;p._= t._[q._];;rh(q,t,h);ri(h,t,p);rj(l,g,m)};var d=rc().fromCharCode(127);var f='';var c='%';var k='#1';var r='%';var n='#0';var b='#';return t._.join(f).split(c).join(d).split(k).join(r).split(n).join(b).split(d)}function b(d){var b={};var c={};c._= f();b._= c._;rk(b);var a= new b._();if(d){for(var g in d){a[g]= d[g]}};return a}function c(ox,ow){var ib={},ia={},ig={},ic={},iW={},iX={},il={},fx={},bU={},bV={},eG={},eF={},eO={},eN={},eP={},bI={},gS={},eq={},ep={},bz={},oQ={},oR={},fI={},gJ={},cu={},bF={},hU={},hV={},eB={},eD={},eA={},pl={},eK={},hr={},hs={},hv={},fu={},cn={},eJ={},gf={},gd={},eM={},w={},eL={},hi={},ft={},hN={},ir={},pu={},pw={},pp={},pb={},pj={},oV={},pr={},ps={},pa={},oX={},di={},ip={},io={},iq={},iu={},it={},iE={},iF={},oP={},ii={},hH={},hl={},hT={},by={},U={},gc={},gb={},bd={},be={},bi={},bu={},f={},dk={},hI={},fv={},gp={},cp={},cq={},Y={},Q={},bw={},pn={},pm={},ec={},eb={},dX={},fk={},fo={},fn={},dT={},dV={},eh={},ei={},cx={},cX={},bA={},cw={},hJ={},hK={},ee={},fG={},fq={},ef={},eg={},dj={},fm={},fL={},fK={},oT={},pe={},hM={},hL={},fz={},fA={},fH={},dB={},dO={},dM={},dv={},dA={},dz={},dx={},dy={},dw={},ca={},dt={},hq={},gR={},gk={},bv={},gj={},pk={},em={},fp={},fa={},fb={},eX={},eY={},fc={},fd={},fe={},ff={},cM={},cL={},hp={},cF={},cZ={},fw={},fj={},gK={},hk={},bx={},fh={},fi={},eW={},bJ={},dn={},dl={},dm={},gA={},gE={},hF={},hG={},bD={},bE={},bB={},gu={},gH={},gF={},gI={},T={},ek={},py={},pd={},ij={},pz={},E={},y={},G={},I={},H={},cY={},C={},ck={},hj={},fE={},dh={},dg={},en={},el={},ew={},ex={},dY={},ez={},iC={},ix={},iz={},fF={},dc={},du={},er={},ct={},fR={},fU={},fS={},fV={},fQ={},fX={},fW={},fP={},ga={},fB={},fC={},et={},gO={},de={},eH={},gN={},cm={},eI={},gQ={},dq={},dr={},eU={},gz={},gv={},eR={},eQ={},eV={},eT={},eS={},d={},bc={},fM={},fO={},cr={},fN={},dd={},da={},pc={},gg={},pA={},hn={},ho={},eo={},ea={},gh={},gq={},bG={},dp={},gY={},gX={},gZ={},hZ={},hb={},gM={},ha={},he={},hd={},gU={},hg={},hE={},fl={},gV={},$rte={},dZ={},fs={},fr={},oS={},pg={},oY={},oZ={},iY={},hY={},iD={},ik={},iA={},oU={},pf={},iB={};var iv={};var mz={};var my={};var mG={};var mH={};var kf={};var nV={};var mo={};var mn={};var jX={};var nq={};var nO={};var kw={};var kd={};var os={};var ou={};var mw={};var mx={};var mv={};var ev={};var eu={};var oL={};var mE={};var nf={};var kk={};var mC={};var nA={};var nz={};var js={};var mF={};var oi={};var or={};var ol={};var jV={};var jH={};var P={};var jM={};var jN={};var jO={};var jQ={};var jl={};var lv={};var ng={};var nE={};var R={};var jJ={};var jE={};var jS={};var oO={};var oN={};var lX={};var lU={};var lQ={};var na={};var nd={};var nc={};var lO={};var lP={};var mb={};var mc={};var kJ={};var lc={};var jY={};var kx={};var lY={};var no={};var lZ={};var ma={};var lr={};var oF={};var oG={};var df={};var ni={};var nj={};var np={};var lJ={};var lL={};var lK={};var lD={};var lI={};var lH={};var lF={};var lG={};var lE={};var cW={};var oo={};var jR={};var nD={};var oK={};var mj={};var ne={};var mR={};var mS={};var mP={};var mQ={};var mT={};var mU={};var mV={};var mW={};var kT={};var kN={};var kL={};var le={};var nh={};var mZ={};var nP={};var ok={};var jT={};var mX={};var mY={};var mO={};var kg={};var ly={};var lw={};var lx={};var nK={};var nL={};var op={};var oq={};var ka={};var kc={};var bC={};var jZ={};var nG={};var nM={};var nN={};var jF={};var md={};var jy={};var jv={};var jz={};var F={};var jD={};var jB={};var ld={};var jw={};var ki={};var oj={};var nm={};var lo={};var lm={};var mk={};var mh={};var mr={};var mt={};var lR={};var mu={};var oD={};var oz={};var oA={};var nn={};var lj={};var lC={};var mp={};var kv={};var nv={};var nx={};var nw={};var nu={};var ny={};var nk={};var nl={};var mq={};var nT={};var ll={};var mA={};var nS={};var kj={};var mB={};var nU={};var lA={};var lB={};var mM={};var nI={};var nH={};var mJ={};var mI={};var mN={};var mL={};var hm={};var mK={};var jL={};var nr={};var nt={};var kl={};var ns={};var lk={};var lg={};var nB={};var om={};var on={};var mm={};var lT={};var nC={};var nF={};var ke={};var lz={};var oa={};var nZ={};var ob={};var od={};var nR={};var oc={};var og={};var oe={};var nW={};var hh={};var oh={};var nb={};var nY={};var lS={};var oJ={};var oE={};var ov={};var oy={};var oB={};var pB={};var oI={};var oC={};var hW={};iv._= g();mz._= l(ia,eF);my._= m(bV,bU);mG._= n(eO);mH._= o();kf._= p();nV._= q(ia);mo._= r(ia,eq,gS);mn._= s(ia,eq,gS);jX._= t();nq._= u(oQ,oR);nO._= v(bz,oQ,oR);kw._= z();kd._= A(cu);os._= B(ia);ou._= D(fI);mw._= J();mx._= K();mv._= L();ev._= M();eu._= N();oL._= O(bz);mE._= S();nf._= V(hr,cn);kk._= W(eb,hr,hs,fu,hv);mC._= X(cn,eb);nA._= Z(hr);nz._= ba(hr,hs,eb,hv,fu);js._= bb(ir,eM);mF._= bf(eM,w);oi._= bg(eM);or._= bo(io,gh,fO,it,eo);ol._= bp(it,iu,ir);jV._= bq(it,hH,io,pj,hT);jH._= br(iq,ia,iW,oP,iE,gp,it,pj);P._= bs(gc);jM._= bt(gc,ia,pb,pj,bz,pl,io,bi,eh,ip);jN._= bH(gc,ia,il,bz,fw,hH,ei,eh,fL,fK,hF,pj,hk,ew);jO._= bK(gc,gb);jQ._= bL(hN,hM,Y,bi,fL,ez,it,eD,hH,gc,gb,be,bd);jl._= bM(iE,U);lv._= bN(io,fF,fo,bz,ia);ng._= bO(hI,dk,iX,it,ps,ep,io,fL,fm,iq,hF,fK,oT,el,bc,fM,ew,f,I,bx,bu,gI,eM);nE._= bP(gp,fv);R._= bQ(cq);jJ._= bR(cp);jE._= bS(cq);jS._= bT(cp,io,cq,dZ,ea,pj,ip,bz,eo,pm,fu,hN);oO._= bW();oN._= bX(pn);lX._= bY(Y,Q,ew,iE,iF,it,iu,iX,H,iq,io);lU._= bZ(Y,Q,fl,ec);lQ._= cb(ew,dV,it,io);na._= cc();nd._= cd();nc._= ce();lO._= cf(io,fn);lP._= cg(io,iu);mb._= ch(io,iE);mc._= ci(eh);kJ._= cj(il,ia,bz,hr,gd,gf);lc._= cl(ia,ep,gj,fI,hU,cx,bz);jY._= co(bz,fI,cn,eb);kx._= cs(ia,dq,dX,bA,bz,ep,cx);lY._= cv(hJ,bz,ia,fw,dX);no._= cy(iq);lZ._= cz(ia,dX,fq,hN,Y,hJ,ee,eg);ma._= cA(ia,eh,pj,hJ,ib,hK,ef);lr._= cB(dX,ia,dq);oF._= cH(iq);oG._= cO();df._= cU();ni._= cV(fA);nj._= db(ia,eV,cr,fH,eT,eS);np._= ds(io,iu,eN,eP);lJ._= dC();lL._= dD();lK._= dE();lD._= dF();lI._= dG();lH._= dH();lF._= dI();lG._= dJ();lE._= dK();cW._= dL(ca,dt,ep,dB,dO,dM,dv,dA,dz,dx,dy,dw);oo._= dP(ia,gR,cZ,ir);jR._= dQ(gk,ia,ft,bz,eG);nD._= dR(ft,bv,ia,gj);oK._= fg(bz,gY,dY,ep,cn,eS,ia,fA,ec,cx,hV,eK,eJ,gX,gv,fF,fM,eb);mj._= fY(iq,io,iu);ne._= gl();mR._= gm(ia,fb);mS._= gn(eH,eA,eI);mP._= gr(ia,eY);mQ._= gs(ew,eA,fp);mT._= gw(ia,fd);mU._= gx(dY,eA,fp);mV._= gB(ia,ff);mW._= gC(dX,eA,fp);kT._= gP(ia,ep,bz,gj,hU,fh,cx);kN._= gT(cZ,fh,cx);kL._= gW(ep,hp,gV,cZ,fh,ia,ib,bz,cx);le._= hc(ia,ep,gj,hU,fw,cx,dn);nh._= hf(hq,ia,ep,fI,hU,bz,cn,ib,hk);mZ._= ht(pp);nP._= hu(pp,ia,fw);ok._= hw(fh,eW,fi);jT._= hx(pu,hk,pw,pp);mX._= hy(hN,Y,fL,eB,fK,hG,py,pd);mY._= hz(ib,dY);mO._= hA(Y,fj,ib,io,gA,dX,dY,eI,fa,fe,eX,fc,iq);kg._= hB(ec,gp);ly._= hC(C,bJ,dl,fl,ec);lw._= hD(fh,eM,gK,fL,eB,fK,hG,gU,iq,it,dr,dq,cm,gQ,dX,gE,gZ,C,gh,dh,dg,io,hg,bw,fj,gq,hj,fE,ib,ia,bG,bx,eV,cr,hd,ep,gV,pk,eS,ew,ha,gM,hb,dp,da,fC,hF,dm,iu,dY,fF,Y,cq,fM,gJ,hp);lx._= hO(iq);nK._= hP(dY);nL._= hQ(dY,bz,gp);op._= hR(fL,io,eB,fK,hG,it,eD);oq._= hS(cu,fO);ka._= hX(bz,gj,cn);kc._= id(bz);bC._= ie(bD,bB);jZ._= ih(iq,it,bD,bE,fF,fo);nG._= iw(bB,cx);nM._= iy(pr,bz,hN,gu,gH);nN._= iG(ez,io,gF,gH,ia);jF._= iH(io);md._= iI(io);jy._= iJ(io);jv._= iK();jz._= iL(pz,io,ij,bc,f,pj,iq,fL,fK,fO,cr,cY,ig,eo,eM);F._= iM(dk,E,ij,y);jD._= iN(E,y,ij,ia,io,ep,G,py,pd,iF,ew,ek,it,by,pj,ig,eo,eM);jB._= iO(ij,T,fM,iq,it);ld._= iP(ij,T,fM,iq,it,fN);jw._= iQ(ij);ki._= iR(py,pd,gp);oj._= iS(C,py,ij,pd,G);nm._= iT(pd,ij,py,G);lo._= iU(eo);lm._= iV(pj,bz,gh);mk._= iZ(ec,io);mh._= ja(it);mr._= jb(d);mt._= jc(it);lR._= jd(ez,io);mu._= je(d,it,ix,iz,io);oD._= jf();oz._= jg(iC,ix,io);oA._= jh(iC,iz,io);nn._= ji();lj._= jj(du);lC._= jk(hH);mp._= jm();kv._= jn();nv._= jo(fR,fU,fS,fV);nx._= jp(fR,fS);nw._= jq(fP);nu._= jr(fR,fU,fS,fV);ny._= jt(fR,fU,it,fS,fV);nk._= ju(fL,eB,fK,hG,it,ct,er,iq,io,fQ,ga);nl._= jx(fB);mq._= jA(fk);nT._= jC(et,fB);ll._= jG(fB,et);mA._= jI(de);nS._= jK(fW,fF,iq,gO);kj._= jP(it,iq,bI,fF,gO);mB._= jU(de);nU._= jW(fW,fF,iq,gO);lA._= kb(it,dT,fo,iq,cu,fX,fP,ga,fB,dm);lB._= kh(fB,bI,iq,cu,fF,fo,it,dm);mM._= km(ia,iq,it,io,dV,iu);nI._= kn(ew,it,du,eR);nH._= ko(iq,gz);mJ._= kp(it,dc,io,hH);mI._= kq(iq,eR);mN._= kr(it,dc,iq,io,fN,hH);mL._= ks(it,dc,io,gh,fN,hH,iq,fF);hm._= kt();mK._= ku(eU,bz,fM,gp,ia,dY,gv);jL._= ky(d);nr._= kz(d,it,gp);nt._= kA(iq,it);kl._= kB(it,fN,hH);ns._= kC(iq,io,it);lk._= kD(io,dd);lg._= kE(ew,it,iq,dd,dc);nB._= kF(iq,bz,pc);om._= kI(eN,pA,eP);on._= kK(eN,pA,eP);mm._= kM(io,fo,eP,dZ,ia,hn,ho);lT._= kO(io);nC._= kP(io,dZ,ea,gp);nF._= kY(ia);ke._= kZ(gq,pw,ia,fw,pu,ib,bx);lz._= la(dY,ir,fF,iq,io);oa._= lb(bz);nZ._= lf();ob._= lh(ep,gV,ir,bz,ia);od._= li(hZ,fz,hb,ep,gV,bz,fA,eV,eT);nR._= lp(iq,bz,ep,fO,fM);oc._= lq(gV,bz);og._= ls(gV,bz);oe._= lt(he);nW._= lu(ep,gV,bz,hV,eK,gY,eP,ir,ia);hh._= lM(gV,bz,gY,gX);oh._= lN(ia,gV,gY,bz,pc,eo,gj,ep);nb._= lV(hE);nY._= lW(hE,il,ia,bz,ec,ep,pl);lS._= px(ia,eN,$rte);oJ._= pS(oS,oX);oE._= pT(oY,oX,oZ,ib);ov._= pV(iY,fs);oy._= pX();oB._= qa();pB._= qb(pf,iD,ik,ir,iA,iB,fr,pg);oI._= qc(oU);oC._= qd();hW._= qe(oU,fr,fs);ib._= ox;ia._= ow;eG._= mz._;eF._= my._;eN._= mG._;eP._= mH._;bI._= kf._;gS._= nV._;eq._= mo._;ep._= mn._;bz._= jX._;fI._= nq._;gJ._= nO._;cu._= kw._;bF._= kd._;hU._= os._;hV._= ou._;eB._= mw._;eD._= mx._;eA._= mv._;pl._= oL._;eK._= mE._;fu._= nf._;cn._= kk._;eJ._= mC._;gf._= nA._;gd._= nz._;w._= js._;eL._= mF._;hi._= oi._;hH._= or._;hl._= ol._;by._= jV._;U._= jH._;bd._= jM._;be._= jN._;bi._= jO._;bu._= jQ._;f._= jl._;dk._= lv._;fv._= ng._;gp._= nE._;Y._= jJ._;Q._= jE._;bw._= jS._;pn._= oO._;pm._= oN._;ec._= lX._;eb._= lU._;dX._= lQ._;fk._= na._;fo._= nd._;fn._= nc._;dT._= lO._;dV._= lP._;eh._= mb._;ei._= mc._;cx._= kJ._;cX._= lc._;bA._= jY._;cw._= kx._;ee._= lY._;fG._= no._;ef._= lZ._;eg._= ma._;dj._= lr._;oT._= oF._;pe._= oG._;fz._= ni._;fA._= nj._;fH._= np._;dB._= lJ._;dO._= lL._;dM._= lK._;dv._= lD._;dA._= lI._;dz._= lH._;dx._= lF._;dy._= lG._;dw._= lE._;hq._= oo._;bv._= jR._;gj._= nD._;pk._= oK._;em._= mj._;fp._= ne._;fa._= mR._;fb._= mS._;eX._= mP._;eY._= mQ._;fc._= mT._;fd._= mU._;fe._= mV._;ff._= mW._;cM._= kT._;cL._= kN._;cF._= kL._;cZ._= le._;fw._= nh._;fj._= mZ._;gK._= nP._;hk._= ok._;bx._= jT._;fh._= mX._;fi._= mY._;eW._= mO._;bJ._= kg._;dn._= ly._;dl._= lw._;dm._= lx._;gA._= nK._;gE._= nL._;hF._= op._;hG._= oq._;bD._= ka._;bE._= kc._;bB._= jZ._;gu._= nG._;gF._= nM._;gI._= nN._;T._= jF._;ek._= md._;E._= jy._;y._= jv._;G._= jz._;I._= jD._;H._= jB._;cY._= ld._;C._= jw._;ck._= ki._;hj._= oj._;fE._= nm._;dh._= lo._;dg._= lm._;en._= mk._;el._= mh._;ew._= mr._;ex._= mt._;dY._= lR._;ez._= mu._;iC._= oD._;ix._= oz._;iz._= oA._;fF._= nn._;dc._= lj._;du._= lC._;er._= mp._;ct._= kv._;fQ._= nv._;fX._= nx._;fW._= nw._;fP._= nu._;ga._= ny._;fB._= nk._;fC._= nl._;et._= mq._;gO._= nT._;de._= ll._;eH._= mA._;gN._= nS._;cm._= kj._;eI._= mB._;gQ._= nU._;dq._= lA._;dr._= lB._;eU._= mM._;gz._= nI._;gv._= nH._;eR._= mJ._;eQ._= mI._;eV._= mN._;eT._= mL._;eS._= mK._;bc._= jL._;fM._= nr._;fO._= nt._;cr._= kl._;fN._= ns._;dd._= lk._;da._= lg._;gg._= nB._;hn._= om._;ho._= on._;eo._= mm._;ea._= lT._;gh._= nC._;gq._= nF._;bG._= ke._;dp._= lz._;gY._= oa._;gX._= nZ._;gZ._= ob._;hb._= od._;gM._= nR._;ha._= oc._;he._= og._;hd._= oe._;gU._= nW._;hg._= oh._;fl._= nb._;gV._= nY._;dZ._= lS._;pg._= oJ._;iY._= oE._;hY._= ov._;ik._= oy._;iA._= oB._;pf._= oI._;iB._= oC._;if(qs( typeof (ib._),a[8])){ib._= (1&&iv._)(ib._)};;;if(qs(ib._[a[9]],a[10])|| qs(ib._[a[9]],a[11])){rl(ig,ib);ib._= qL()[a[13]](a[12]);rm(ib,ig);ig._[a[17]][a[16]](ib._,ig._);rn(ig)}else {ic._= ib._[a[21]][a[20]]();ro(ic,ib)};iW._= /Firefox/[a[24]](qW()[a[23]]);;iX._= /Trident/[a[24]](qW()[a[23]]);;rp(iX,ib);if(iX._&&  !HTMLElement[a[1]][a[28]]){qQ()[a[1]][a[28]]= h()};il._= ib._;;if(!(this instanceof  c)){return  new (qB())(ib._,ia._)};ia._= qA()(ia._);rq(ia,ib);(j(ia))();fx._= [];;(k(ia,fx))();bU._= {};;bV._= {};;eO._= qL()[a[13]](a[12]);;oQ._= 0;;oR._= 0;;;;;eM._= {};;ft._= false;;if(qh(ia._[a[141]][a[60]](a[140]),-1)){ft._= true};;ir._= this;;rS(ir,ig);rT(ir,ia);rU(ir,ib);ib._[a[93]][a[92]](a[143]);if(ia._[a[144]]){ib._[a[93]][a[92]](qm(a[145],ia._[a[144]]))};if(ft._){ib._[a[93]][a[92]](a[146])}else {ib._[a[93]][a[92]](a[147])};ib._[a[93]][a[92]](qm(a[148],ia._[a[141]]));var im=[];pu._= (1&&bz._)(ib._,a[149],a[150],a[151]);;pw._= (1&&bz._)(ib._,a[149],a[150],a[152]);;pp._= (1&&bz._)(ib._,a[153],a[154]);;pb._= (1&&bz._)(ib._,a[155],a[156]);;pj._= (1&&bz._)(ib._,a[157],a[158]);;var pi=(1&&bz._)(ib._,a[159],a[160]);oV._= (1&&bz._)(pi,a[161],a[160]);;rV(ia,oV);pr._= (1&&bz._)(pi,a[163],a[164]);;rW(ia,pr);(1&&bz._)(pi,a[166],a[167]);ps._= (1&&bz._)(pi,a[168],a[169]);;rX(ia,ps);pa._= qm(a[171]+ a[172],a[173]);;oX._= (1&&bz._)(pi,a[174],pa._);;rY(oX,pa);di._= ia._[a[177]];;switch(di._){case a[178]:;case a[25]:var ph=(1&&bz._)(pi,a[179],a[22]);ph[a[180]]= ph[a[181]]= bh(ib,di,pl);break;case a[19]:;default:break};;;iE._= null;;iF._= null;;oP._= 0;;iE._= (1&&bz._)(pj._,a[183],a[184],a[185]);iE._[a[188]][a[187]](a[186]);iE._[a[188]][a[190]](a[189]);iE._[a[188]][a[132]]();sb(iE);sc(iu,iE);sd(iq,iE);se(io,iq);if(qL()[a[194]]){(1&&bz._)(iq._[a[5]](a[196]),a[197])[a[69]](a[195],qL()[a[194]])};sf(ia,io);sg(ia,io);ii._= iq._[a[5]](a[200]);;ii._[a[201]]= bj(ia);sh(ia,ii);si(iF);iu._[a[98]](a[97],bk(iF));iu._[a[98]](a[99],bl(iF));iq._[a[98]](a[133],fu._);iq._[a[98]](a[205],bm(hl,fv));sj(ip,iE);it._= iq._[a[206]]();if(!it._[a[207]]){it._[a[207]]= bn(it)};sk(io,ia);sl(io,ia);sm(io,ia);sn(io,ia);so(pj,fv);sp(ir,iE);sq(ir,iq);sr(ir,iu);ss(ir,it);iq._[a[227]](a[226]);hT._= 0;;;;hI._= 0;;;;;;iq._[a[98]](a[205],cC(ia,ef));qL()[a[98]](a[381],cD(ia,ef));iq._[a[98]](a[121],cE(it,dl,ia,eT,cr,hT,fG,ew,dX,iu,dj,dq,by,pj,ef));iq._[a[98]](a[134],cG(io,dn,ew,it));;;;iq._[a[98]](a[118],cI(iE,oQ,oR,fm,fL,eB,iq,eD,fK,hG,fN,oT,hF));iq._[a[98]](a[119],cJ(fm));iq._[a[98]](a[133],cK(fm,fL,fK,oT,io,fM,ew,iq,it));pj._[a[98]](a[133],cN(ec,ip,fN));hM._= false;;;iq._[a[98]](a[415],cP(hM,hL,pe));iq._[a[98]](a[416],cQ(ia,hM,pe));iq._[a[98]](a[418],cR(pe,ia));iq._[a[98]](a[419],cS(pe,eb,ia,hM,hL,dn,fA,iq,it));iq._[a[98]](a[424],cT(fA));;;pp._[a[339]]= pu._[a[339]]= pw._[a[339]]= dN(fI,fl,ib,pj,ec);gR._= {};;;gR._[a[642]]= dS(cZ,fI,cw);gR._[a[643]]= dU(cZ,fI,cw);gR._[a[400]]= dW(bz,ep,ir,hV,eK,eJ,it,eV,cr,iu,fN,cF);gR._[a[550]]= gR._[a[552]]= ed(ia,bz,dY,iu,cn,dn,cM);gR._[a[613]]= gR._[a[615]]= ej(bz,ep,gQ,ec,cn,ia,gU,dn,cM);gR._[a[573]]= es(bz,gY,cn,eT,cr,eb,ia,cF);gR._[a[584]]= ey(bz,hV,dY,eJ,eU,bF,cn,fM,eb,cF);gR._[a[424]]= eC(ia,fw,cF);gR._[a[582]]= eE(hr,eS,bD,ep,gV,cF,bz,gY,dY,ia,fA,cn,ec,cx,hV,eK,eJ,gX,gv,fF,fM,eb);gR._[a[579]]= eZ(hr,dn,bD,bE,pk,cF);gR._[a[816]]= fy(ew,bz,hV,eK,eJ,cn,cF);gR._[a[822]]= fD(ew,bz,gY,ep,hV,eK,eJ,cn,cF);gR._[a[567]]= gR._[a[829]]= gR._[a[830]]= fJ(dY,bz,gY,ep,cn,ia,cx,hV,ew,it,eK,eJ,gX,eb,gv,fF,fO,cF);gR._[a[635]]= fT(bz,eQ,ia,bF,cn,cF);gR._[a[863]]= fZ(dn,cn,ep,em,ia,bA,cX);gR._[a[871]]= ge(dn,cn,ep,ia,bA,cX);gR._[a[873]]= gi(dj,cn,dX,ia,bA,cL);gR._[a[878]]= go(cn,gN,eA,gQ,ia,bA,fb,cL);gR._[a[880]]= gt(cn,ew,eA,fp,ia,bA,eY,cL);gR._[a[882]]= gy(cn,dY,eA,fp,ia,bA,fd,cL);gR._[a[884]]= gD(cn,dj,eA,fp,ia,bA,ff,cL);gR._[a[885]]= gG(ia,dq,cn,ep,dX,bA,bz,cX);gR._[a[888]]= gL(dn,cn,bA,cX);hp._= {};;var oW=(1&&hq._)(a[1066],null,oV._);oV._[a[70]](oW);oW[a[339]]= is(Y,hN,fN,eU,fO,cr,eb,U,pj,bD,oV,cx);gH._= [];;py._= [];;pd._= [];;ij._= {html:a[22],time:0};;pz._= false;;;;;;d._= null;;pc._= {};;ir._[a[1136]]= kG(gg);ir._[a[1138]]= kH(gg);pA._= qU()[a[195]][a[45]](a[466]);;Cu(pA);pA._= qm(pA._[a[108]](a[466]),a[466]);Cz(ir,dV);CA(ir,eP);CB(ir,eN);CC(ir,ep);ir._[a[206]]= kQ(it);CD(ir,fh);CE(ir,eW);CF(ir,dl);CG(ir,ec);ir._[a[1153]]= kR(iq);CH(ir,en);ir._[a[1155]]= ir._[a[1156]]= kS(io);CI(ir,io);CJ(ir,eo);CK(ir,gh);ir._[a[1163]]= kU(hN);ir._[a[1164]]= kV(hN,iE,bx,gp,cq);CP(ir,ew);CQ(ir,ez);CR(ir,ex);CS(ir,eU);CT(ir,eQ);CU(ir,gv);CV(ir,eR);CW(ir,gz);CX(ir,eV);CY(ir,eT);ir._[a[1177]]= kW(gv);Da(ir,fM);Db(ir,fN);Dc(ir,cr);Dd(ir,da);De(ir,C);Df(ir,ck);Dg(ir,gK);Dh(ir,fv);Di(ir,fv);Dj(ir,gR);Dk(ir,cZ);Dl(ir,cX);Dm(ir,cL);Dn(ir,gY);Do(ir,gV);Dp(ir,cn);Dq(ir,gj);Dr(ir,eL);Ds(ir,hi);(kX(fx,ir))();hZ._= null;;hE._= 0;;$rte._= {};;Et($rte);Eu($rte);$rte._[a[1585]][a[1]]= {constructor:$rte._[a[1585]],toString:me(),init:mf(),delegate:mg()};$rte._[a[1585]][a[1587]]= mi();$rte._[a[1591]]= $rte._[a[1585]][a[1587]](ml());$rte._[a[1606]]= $rte._[a[1591]][a[1587]](ms());$rte._[a[1622]]= $rte._[a[1591]][a[1587]](mD($rte));$rte._[a[1733]]= $rte._[a[1622]][a[1587]](nJ());$rte._[a[1736]]= $rte._[a[1622]][a[1587]](nQ());$rte._[a[1738]]= $rte._[a[1622]][a[1587]](nX(eN));$rte._[a[1750]]= $rte._[a[1622]][a[1587]](ot());$rte._[a[1766]]= $rte._[a[1750]][a[1587]](oH(eN));$rte._[a[1768]]= $rte._[a[1750]][a[1587]](oM($rte));$rte._[a[1790]]= $rte._[a[1768]][a[1587]](po());$rte._[a[1791]]= $rte._[a[1768]][a[1587]](pq());$rte._[a[1795]]= $rte._[a[1768]][a[1587]](pt());$rte._[a[1802]]= $rte._[a[1768]][a[1587]](pv());if(ig._){(1&&gh._)(ig._[a[89]]);ig._[a[300]]= pP(ig,gh)}else {if(ic._){(1&&gh._)(ic._);Fu(ic)}};(1&&F._)();(1&&bG._)();rf()[a[98]](a[1826],bG._);(1&&fv._)();(pQ(fx,ir))();if(ia._[a[1828]]){(1&&ec._)()};if(ia._[a[1829]]){(1&&dl._)(a[565])};if(ia._[a[301]]){ir._[a[1164]](true)};if(ia._[a[1830]]){(1&&gg._)(a[1133],a[142],ia._[a[1830]])};if(ia._[a[1831]]){(1&&gg._)(a[963],a[142],ia._[a[1831]])};(1&&ck._)();fs._= ir._[a[1164]];;fr._= pR();;oS._= false;;oY._= oX._[a[1116]];;oZ._= oX._[a[17]];;rb()(pW(oS,hY),100);iD._= a[1837];;oU._= a[22];;(1&&pB._)();(1&&hW._)()}RTE_CreateConfig= b;RichTextEditor= c;if(!window[a[0]]){window[a[0]]= {}};c[a[1]][a[2]]= a[3];function rh(b,c,a){c._[b._]= c._[a._]}function ri(a,c,b){c._[a._]= b._}function rj(b,a,c){b._= qj((qm(a._,c._)),2063427)}function f(){return  function(){}}function rk(b){b._[a[1]]= RTE_DefaultConfig}function g(){return  function(c){var b=qL()[a[4]](c);if(b){return b};b= qL()[a[5]](c);if(b){return b};throw  new (qM())(qm(a[6]+ c,a[7]))}}function rl(b,a){b._= a._}function rm(b,c){b._[a[15]][a[14]]= c._[a[15]][a[14]]}function rn(b){b._[a[15]][a[18]]= a[19]}function ro(c,b){if(c._){b._[a[21]]= a[22]}}function rp(c,b){if(c._&&  !b._[a[15]][a[25]]){b._[a[15]][a[25]]= qm(b._[a[26]],a[27])}}function h(){return  function(){var b=this[a[17]];if(b){b[a[29]](this)}}}function rq(b,c){b._[a[30]]= c._}function j(b){return  function(){var f={},h={},d={};var g=b._[a[31]];for(var c in b._){f._= c;if(qh(f._[a[32]](0,4),a[33])&& qh(f._[a[32]](rg(3),3),a[34])){continue};h._= b._[f._];;if(qh( typeof (h._),a[8])){continue};d._= h._[a[36]](a[35],g);;rr(d,h,f,b)}}}function k(c,b){return  function(){for(var g in c._){if(qh(g[0],a[37])|| qh(g[a[32]](0,7),a[38])){continue};var f=c._[g];if(!f||  !(f instanceof  Function)){continue};b._[a[39]]( new f())};for(var d=0;qp(d,b._[a[40]]);d++){var g=b._[d];if(g[a[41]]){g[a[41]](c._)}}}}function l(b,a){return  function(c){var d=b._[c];if(!d){return d};return (1&&a._)(d)}}function m(c,b){return  function(j){var o={},m={},k={},l={},g={};o._= j;m._= c._[o._];;if(m._){return m._};var n=o._[a[42]](0,5);;if(qs(n,a[43])){var d=o._[a[45]](a[44]);if(qh(d[a[40]],2)){return o._};k._= d[0][a[42]](5);l._= qF()(d[1])}else {if(qs(n,a[46])){rs(k);rt(l,o)}else {return o._}};var f= new (qD())(l._[a[40]]);for(var h=0;qp(h,l._[a[40]]);h++){f[h]= l._[a[48]](h)};g._=  new (qG())([ new (rd())(f)],{type:k._});;m._= re()[a[49]](g._);ru(m,b,g);rv(o,c,m);return m._}}function n(b){return  function(d){var c={};c._= d;if(!c._){return a[22]};rw(b,c);return b._[a[50]]}}function o(){return  function(b){if(!b){return a[22]};return b[a[36]](/&/g,a[55])[a[36]](/</g,a[54])[a[36]](/>/g,a[53])[a[36]](/\x22/g,a[52])[a[36]](/\x27/g,a[51])}}function p(){return  function(b){var d=[];for(var c=0;qp(c,b[a[40]]);c++){d[a[39]](b[c])};return d}}function q(b){return  function(d,c){if(qy(d,b._[a[56]])){return b._[a[56]][d]};return d}}function r(d,b,c){return  function(g,f,j){var k=d._[qm(a[57],g[a[58]]())];if(!k){var h=g[a[60]](a[59]);if(qh(h,-1)){return (1&&b._)(g[a[42]](qm(h,1)),1)};return (1&&c._)(j)};if(qp(f,5)&& qs(k[a[61]](0),a[62])){return (1&&b._)(k[a[42]](1),qm(f,1))};return (1&&c._)(k)}}function s(d,b,c){return  function(f){var h=d._[qm(a[57],f[a[58]]())];if(!h){var g=f[a[60]](a[59]);if(qh(g,-1)){return (1&&b._)(f[a[42]](qm(g,1)),1,f)};return (1&&c._)(f)};if(qs(h[a[61]](0),a[62])){return (1&&b._)(h[a[42]](1),1,f)};return (1&&c._)(h)}}function t(){return  function(g,j,f,d){var c={},b={},h={};c._= f;b._= d;h._= g[a[63]][a[13]](j);;rx(c,h);ry(b,h);if(qs(j,a[65])|| qs(j,a[66])){h._[a[69]](a[67],a[68])};g[a[70]](h._);return h._}}function u(a,b){return  function(d){var c={};c._= d;if(!c._){return};rz(a,c);rA(b,c)}}function v(b,c,d){return  function(g){var h={},f={};h._= g;f._= (1&&b._)(qL()[a[73]],a[74],a[75]);;rB(f,h);rb()(w(f,c,d),100);rb()(y(f),800)}}function z(){return  function(f,c){for(var d=0;qp(d,f[a[81]][a[40]]);d++){var b=f[a[81]][d];c[a[69]](b[a[9]],b[a[82]])}}}function A(b){return  function(h,c,g){var j={},d={};j._= g;if(!j._){return};d._= h[a[63]][a[13]](c);;rF(d,j);var f=d._[a[83]];if(qh(f[a[9]],h[a[9]])){qJ()[a[85]](a[84],j._,h);return};(1&&b._)(f,h);while(f[a[83]]){h[a[70]](f[a[83]])}}}function B(b){return  function(d,c){var f={},g={};f._= d;if(!c){return};g._= f._[a[87]](b._[a[86]]);;if(!g._){return};f._[a[88]](b._[a[86]]);rb()(C(b,g,f),5000)}}function D(b){return  function(g,f){var d={},c={},j={};var h={};h._= E(d);d._= g;c._= f;j._= h._;rG(c,d);d._[a[98]](a[97],F(j));d._[a[98]](a[99],G(j));d._[a[98]](a[100],H(j));d._[a[17]][a[98]](a[101],I(b,d));(1&&j._)()}}function J(){return  function(b){for(;b;b= b[a[17]]){if(qs(b[a[9]],a[103])){return b}}}}function K(){return  function(b){for(;b;b= b[a[17]]){if(qs(b[a[9]],a[104])|| qs(b[a[9]],a[105])){return b}}}}function L(){return  function(b){var f={},c={},d={};f._= b[a[45]](a[106]);;c._= 0;for(;qp(c._,f._[a[40]]);c._++){d._= f._[c._];;d._= d._[a[58]]();if(qh(c._,0)){d._= qm(d._[a[42]](0,1)[a[107]](),d._[a[42]](1))};rH(c,f,d)};return f._[a[108]](a[22])}}function M(){return  function(){return qV()[a[111]](qL()[a[110]][a[109]],qL()[a[73]][a[109]])}}function N(){return  function(){return qV()[a[111]](qL()[a[110]][a[112]],qL()[a[73]][a[112]])}}function O(b){return  function(g,k){var h={},n={},c={},d={},o={},p={},f={};var l={};var m={};var j={};l._= P(c,d,h);m._= Q(f,c,d,h);j._= R(o,p,n);h._= k;o._= l._;p._= m._;f._= j._;g[a[113]]();n._= (1&&b._)(qL()[a[73]],a[114],a[115],a[22]);;c._= g[a[71]];;d._= g[a[72]];;qL()[a[98]](a[118],o._,true);qL()[a[98]](a[119],p._,true);}}function S(){return  function(f,d){var c={},b={};c._= f;b._= d;c._[a[98]](a[121],T(b,c))}}function V(c,b){return  function(d){if(!c._){return};if(c._[a[123]](d[a[102]])){return};for(var f=d[a[102]];f;f= f[a[17]]){if(f[a[127]]){return}};(1&&b._)()}}function W(b,d,f,c,g){return  function(j){if(j&& j[a[127]]){j[a[128]]();if(j[a[129]]){j[a[129]]()};var h=j[a[127]][a[130]];if(h){var n=h[a[60]](j);if(qh(n,-1)){h[a[131]](n,1)}};return};if(j&& j[a[132]]){j[a[132]]()};(1&&b._)();var l=d._;if(!l){return};var m=f._;var h=d._[a[130]];rI(d);rJ(f);qL()[a[120]](a[133],c._);rK(g);m(l);if(h){for(var k=0;qp(k,h[a[40]]);k++){h[k][a[128]]();if(h[k][a[129]]){h[k][a[129]]()}}}}}function X(b,c){return  function(d){d[a[98]](a[134],Y(b,c))}}function Z(b){return  function(h,g){var f={},d={},c={};f._= h;d._= g;if(!b._){return};c._= b._[a[130]];;rL(c,b);c._[a[39]](f._);rM(f,b);rN(f,d)}}function ba(d,f,b,g,c){return  function(n,m){var k={},j={};k._= n;j._= m;if(d._){(1&&f._)(d._);var h=d._[a[130]];if(h){for(var l=0;qp(l,h[a[40]]);l++){h[l][a[128]]();if(h[l][a[129]]){h[l][a[129]]()}}};if(!k._){(1&&b._)()}};rO(d,k);rP(f,j);if(!g._){qL()[a[98]](a[133],c._);rQ(g)}}}function bb(c,b){return  function(g){var h={},d={},f={};h._= g;d._= [];;f._= bc(d,c);;rR(h,b,f);f._[a[138]]= bd(d);f._[a[139]]= be(d);return f._}}function bf(c,b){return  function(g,d){var f=c._[g];if(!f){f= (1&&b._)(g)};f[a[138]](d)}}function bg(b){return  function(f,c){var d=b._[f];if(!d){return};d[a[139]](c)}}function rS(c,b){c._[a[65]]= b._}function rT(c,b){c._[a[142]]= b._}function rU(c,b){c._[a[30]]= b._}function rV(b,c){if(!b._[a[162]]){c._[a[15]][a[18]]= a[19]}}function rW(b,c){if(!b._[a[165]]){c._[a[15]][a[18]]= a[19]}}function rX(b,c){if(!b._[a[170]]){c._[a[15]][a[18]]= a[19]}}function rY(b,c){b._[a[21]]= qm(a[175]+ c._,a[176])}function bh(c,b,d){return  function(f){var h={},g={};h._= c._[a[79]];;g._= c._[a[26]];;(1&&d._)(f,bi(b,c,h,g))}}function sb(b){b._[a[188]][a[191]]= a[192]}function sc(b,c){b._= c._[a[193]]}function sd(b,c){b._= c._[a[188]]}function se(b,c){b._= c._[a[73]]}function sf(b,c){if(b._[a[198]]){c._[a[64]]= b._[a[198]]}}function sg(b,c){if(b._[a[199]]){c._[a[15]][a[14]]= b._[a[199]]}}function bj(b){return  function(){qJ()[a[204]](qm(a[202],b._[a[203]]))}}function sh(b,c){if(b._[a[203]]){c._[a[195]]= b._[a[203]]}}function si(a){a._= false}function bk(a){return  function(){a._= true}}function bl(a){return  function(){a._= false}}function bm(b,a){return  function(){(1&&b._)();(1&&a._)()}}function sj(a,b){a._= b._}function bn(b){return  function(){b._[a[208]]()}}function bo(f,d,c,g,b){return  function(){if(!f._[a[209]][a[40]]|| qs(f._[a[209]][0][a[9]],a[210])){(1&&d._)(a[211]);(1&&c._)(f._[a[209]][qn(f._[a[209]][a[40]],1)])};if(qs(g._[a[212]],0)){if(qs(g._[a[212]],0)){(1&&d._)(qm((1&&b._)(),a[211]));(1&&c._)(f._[a[209]][qn(f._[a[209]][a[40]],1)])}};return g._[a[213]](0)}}function sk(c,b){c._[a[15]][a[214]]= qm(b._[a[215]],a[27])}function sl(c,b){c._[a[15]][a[216]]= qm(b._[a[217]],a[27])}function sm(c,b){c._[a[15]][a[218]]= qm(b._[a[219]],a[27])}function sn(c,b){c._[a[15]][a[220]]= qm(b._[a[221]],a[27])}function so(c,b){c._[a[222]]= b._}function sp(b,c){b._[a[183]]= c._}function sq(c,b){c._[a[223]]= b._}function sr(b,c){b._[a[224]]= c._}function ss(b,c){b._[a[225]]= c._}function bp(c,d,b){return  function(){if(qh(c._,d._[a[206]]())){b._[a[225]]= c._= d._[a[206]]()}}}function bq(f,b,d,g,c){return  function(){var l={},m={},j={},k={},h={};if(qs(f._[a[212]],0)){return};l._= (1&&b._)();;m._= l._;;st(l,d,m);j._= m._[a[124]]();;k._= qV()[a[230]](32,qV()[a[111]](qm(j._[a[25]],12),qn(g._[a[229]],32)));;h._= qp(qK()[a[231]]()- c._,200)?20:0;;su(j,g,k,h)}}function br(d,c,h,j,g,b,f,k){return  function(){var m={},q={},q={},l={};var n=d._[a[73]][a[209]];m._= 0;;;for(var o=0;qp(o,n[a[40]]);o++){var p=n[a[233]](o);if(qs(p[a[234]],1)){m._= qV()[a[111]](m._,n[a[233]](o)[a[124]]()[a[235]])}else {if(qs(p[a[234]],3)){if(qs(q._,null)){q._= d._[a[236]]()};q._[a[237]](p);m._= qV()[a[111]](m._,q._[a[124]]()[a[235]])}}};sv(m,d,c);sw(h,m);if(qh(j._,m._)){sx(j,m);sy(g,m);(1&&b._)()};l._= f._[a[239]];;if(l._){sz(l);if(l._&& qs(l._[a[234]],1)){q._= l._[a[124]]();;sA(q,m,k)}}}}function bs(a){return  function(){a._= null}}function bt(f,g,k,l,c,m,h,b,d,j){return  function(){var J={},H={},p={},F={},C={},D={},E={},v={},q={},t={},u={},w={},y={},r={},s={},o={},A={},z={},I={};var B={};var n={};B._= bu(H,p,m);n._= bE(p);z._= B._;J._= false;;H._= f._;;sB(H);var G=g._[a[240]];p._= (1&&c._)(J._?k._:l._,G,null);;F._= (1&&c._)(p._,qm(G,a[241]),null,a[242]);;C._= (1&&c._)(p._,qm(G,a[241]),null,a[243]);;D._= (1&&c._)(p._,qm(G,a[241]),null,a[244]);;E._= (1&&c._)(p._,qm(G,a[241]),null,a[245]);;v._= (1&&c._)(p._,qm(G,a[246]),null,a[247]);;q._= (1&&c._)(p._,qm(G,a[246]),null,a[248]);;t._= (1&&c._)(p._,qm(G,a[246]),null,a[249]);;u._= (1&&c._)(p._,qm(G,a[246]),null,a[250]);;w._= (1&&c._)(p._,qm(G,a[246]),null,a[251]);;y._= (1&&c._)(p._,qm(G,a[246]),null,a[252]);;r._= (1&&c._)(p._,qm(G,a[246]),null,a[253]);;s._= (1&&c._)(p._,qm(G,a[246]),null,a[254]);;if(!g._[a[255]]){o._= [v._,q._,t._,u._,w._,y._,r._,s._];;A._= 0;for(;qp(A._,o._[a[40]]);A._++){sC(A,o);sD(A,o)}};if(g._[a[255]]){t._[a[180]]= bw(z);u._[a[180]]= bx(z);v._[a[180]]= by(z);q._[a[180]]= bz(z);w._[a[180]]= bA(z);y._[a[180]]= bB(z);r._[a[180]]= bC(z);s._[a[180]]= bD(z)};;I._= ra()(n._,100);p._[a[263]]= bF(p,I);p._[a[262]]= bG(H,h,b,d,J,l,p,j,g,F,C,D,E,v,q,t,u,y,w,r,s);p._[a[262]]();return p._}}function bH(k,o,p,b,g,n,d,c,j,h,m,q,l,f){return  function(s){var t={},u={},r={};t._= s;u._= t._?a[269]:k._[a[9]];;tk(u);switch(u._){case a[269]:if(!o._[a[270]]){return};break;case a[272]:if(!o._[a[271]]){return};break;case a[261]:if(!o._[a[273]]){return};break;case a[104]:if(!o._[a[274]]){return};break};var v=o._[qm(a[275],u._)];if(!v){return null};r._= (1&&b._)(p._,a[276],qm(a[277],o._[a[278]]),a[279]);;(1&&g._)(v,r._);r._[a[263]]= bI(r,p);r._[a[262]]= bJ(t,n,d,k,c,u,j,h,m,q,p,r,l,f);r._[a[262]]();return r._}}function bK(c,b){return  function(){tu(c);if(b._){for(var d=0;qp(d,b._[a[40]]);d++){b._[d][a[263]]()};tv(b)}}}function bL(o,n,b,f,j,g,p,h,m,l,k,d,c){return  function(){var t={},s={};if(o._|| n._|| (1&&b._)()){(1&&f._)();return};t._= j._|| (1&&g._)();;if(t._){switch(t._[a[9]]){case a[261]:;case a[272]:;case a[283]:break;default:var r=t._;tw(t);if(qh(p._[a[284]],a[285])){t._= (1&&h._)(r)};break}};s._= false;;if(!t._&& qs(p._[a[284]],a[285])){tx(s);t._= (1&&m._)()};if(!t._){(1&&f._)();return};if(qh(l._,null)&& qs(l._,t._)&& k._[a[40]]){for(var q=0;qp(q,k._[a[40]]);q++){k._[q][a[262]]()};return};(1&&f._)();ty(l,t);tz(k);if(s._){var u=(1&&d._)(true);if(u){k._[a[39]](u)};return};switch(t._[a[9]]){case a[261]:;case a[104]:;case a[105]:var u=(1&&d._)();if(u){k._[a[39]](u)};k._[a[39]]((1&&c._)());return;case a[272]:var u=(1&&d._)();if(u){k._[a[39]](u)};return;case a[283]:;case a[103]:k._[a[39]]((1&&c._)());break}}}function bM(b,a){return  function(){if(b._){(1&&a._)()}}}function bN(g,d,c,b,f){return  function(){var h={};var j=g._[a[209]];h._= true;;if(j[a[40]]){var k=j[qn(j[a[40]],1)];switch(k[a[9]]){case a[286]:if(!k[a[209]][a[40]]){(1&&d._)(k)};break;case a[287]:;case a[210]:;case a[288]:break;default:if((1&&c._)(k[a[9]])){if(!k[a[209]][a[40]]){(1&&b._)(k,a[210]);tA(h)}else {if(qs(k[a[209]][a[40]],1)&& qs(k[a[83]][a[9]],a[210])){h._= false}}};break}};if(h._){(1&&b._)((1&&b._)(g._,f._[a[289]]|| a[290]),a[210])}}}function bO(t,h,y,w,A,k,u,p,n,v,s,o,z,j,d,q,l,b,c,g,f,r,m){return  function(){var B={};qI()(t._);t._= rb()(h._,10);if(y._&& qs(w._[a[239]],null)){return};A._[a[50]]= qm((1&&k._)(a[291])+ a[292],u._[a[50]][a[40]]);if(p._&&  !n._){B._= false;;var G=v._;if(!u._[a[123]](p._)){B._= true}else {if(qh(w._[a[212]],0)){tB(B);var E=w._[a[239]];var H=(1&&s._)(a[280],a[281]);if(H){for(var D=0;qp(D,H[a[40]]);D++){if(H[D][a[123]](E)){tC(B);break}}}}};if(B._){tD(p);tE(o);(1&&z._)()}};if(qh(w._[a[212]],0)){var F=(1&&j._)();if(qs(F,null)){(1&&d._)()}else {(1&&q._)(F);return}}else {if(qh((1&&l._)(),null)&&  !u._[a[123]]((1&&l._)())){(1&&d._)()}};(1&&b._)();(1&&c._)();(1&&g._)();(1&&f._)();(1&&r._)();var C=m._[a[205]];if(C){C(a[205])}}}function bP(c,b){return  function(){qI()(c._[a[293]]);c._[a[293]]= rb()(b._,10)}}function bQ(b){return  function(){if(qs(b._,null)){return null};return b._[a[89]]}}function bR(a){return  function(){return !!a._}}function bS(b){return  function(){if(b._){b._[a[97]]()}}}function bT(c,l,d,f,g,n,m,b,h,o,j,k){return  function(){var r={},q={},p={};if(c._){l._[a[21]]= (1&&f._)(d._[a[89]]);(1&&g._)();n._[a[29]](c._);tF(c);tG(d);tH(m)}else {c._= (1&&b._)(n._,a[295],a[296],a[22]);r._= m._[a[79]];;q._= qn(n._[a[229]],16);;tI(m);d._= (1&&b._)(c._,a[66],a[297]);d._[a[69]](a[67],false);tJ(d,r);tK(d,q);d._[a[180]]= bU();p._= (1&&h._)();;p._= (1&&o._)(p._);tL(d,p);d._[a[300]]= bV(l,d,f);d._[a[97]]();d._[a[98]](a[133],j._);tM(k,d)}}}function bW(){return  function(j){var f={},l={},m={},m={};f._= j;var s=a[302];var p=/\<(ADDRESS|AREA|BASE|DIV|H1|H2|H3|H4|H5|H6|LI|LINK|META|OL|OPTION|P|TITLE|TD|UL)[^\>]*\>/gi;var n=/\<\/(ADDRESS|AREA|BASE|DIV|H1|H2|H3|H4|H5|H6|LI|LINK|META|OL|OPTION|P|TITLE|TD|UL)[^\>]*\>/gi;var c=/\<(BR|HR)[^\>]*\>/gi;var o=/\<\/?(HTML|HEAD|BODY|FORM|TABLE|TBODY|THEAD|TR)[^\>]*\>/gi;var k=/\s*\n+\s*/g;var h=/^\<(BODY|EMBED|FORM|HEAD|HTML|TABLE|TBODY|THEAD|TR|UL|OL)[ \/\>]/i;var d=/^\<\/(BODY|EMBED|FORM|HEAD|HTML|TABLE|TBODY|THEAD|TR|UL|OL)[ \>]/i;var r=/\<TEXTAREA[^\>]*\>/gi;var q=/\<\/TEXTAREA[^\>]*\>/gi;f._= f._[a[36]](p,a[303]);;;f._= f._[a[36]](n,a[304]);f._= f._[a[36]](c,a[304]);f._= f._[a[36]](o,a[305]);l._= a[22];;var b=f._[a[45]](k);tN(f);for(var g=0;qp(g,b[a[40]]);g++){m._= b[g];;if(qs(m._[a[40]],0)){continue};if(r[a[24]](m._)){for(;qp(g,b[a[40]]);g++){m._= b[g];;tO(f,m);if(n[a[24]](m._)){break}};continue};if(d[a[24]](m._)){l._= l._[a[36]](s,a[22])};tP(f,l,m);if(h[a[24]](m._)){l._+= s}};return f._}}function bX(b){return  function(f){var h={},g={},d={};var c=[];h._= 0;;g._= f[a[60]](a[307],h._);;while(qh(g._,-1)){c[a[39]]((1&&b._)(f[a[42]](h._,g._)));d._= f[a[60]](qm(a[308],a[309]),qm(g._,8));;if(qs(d._,-1)){tQ(h,g);break};c[a[39]](f[a[42]](g._,qm(d._,9)));tR(h,d);g._= f[a[60]](a[307],h._)};c[a[39]]((1&&b._)(f[a[42]](h._)));return c[a[108]](a[22])}}function bY(d,c,f,l,m,j,k,n,b,h,g){return  function(){if((1&&d._)()){(1&&c._)();return};if((1&&f._)()){return};if(l._){if(qt(m._,false)){var o=j._[a[239]];k._[a[97]]();if(n._&& qs(o,null)){(1&&b._)()}else {if(j._[a[212]]){var p=j._[a[213]](0);j._[a[207]]();j._[a[310]](p)}}}}else {if(qh(h._[a[90]],g._)){g._[a[97]]()}}}}function bZ(b,a,d,c){return  function(){var f={};f._= ca(d,c);if((1&&b._)()){(1&&a._)();return};rb()(f._,70);rb()(f._,10)}}function cb(c,b,f,d){return  function(){var k=(1&&c._)();if(k){return (1&&b._)(k[a[17]])};if(qh(f._[a[239]],d._)){var j=(1&&b._)(f._[a[239]]);if(qh(f._[a[239]],f._[a[311]])){var g=(1&&b._)(f._[a[311]]);if(qh(j,g)){return null}};return j}else {var h=d._[a[209]][f._[a[312]]]|| d._[a[209]][qn(f._[a[312]],1)];if(h&& qs(h[a[234]],1)){return h}}}}function cc(){return  function(b){switch(b[a[9]]){case a[313]:;case a[314]:;case a[290]:;case a[315]:;case a[316]:;case a[317]:;case a[318]:;case a[319]:;case a[320]:;case a[321]:;case a[322]:;case a[323]:;case a[104]:;case a[105]:;case a[324]:;case a[103]:;case a[325]:;case a[326]:;case a[327]:;case a[328]:return true}}}function cd(){return  function(b){switch(b){case a[313]:;case a[314]:;case a[290]:;case a[315]:;case a[316]:;case a[317]:;case a[318]:;case a[319]:;case a[320]:return true};return false}}function ce(){return  function(b){switch(b){case a[313]:;case a[314]:;case a[290]:;case a[315]:;case a[316]:;case a[317]:;case a[318]:;case a[319]:;case a[320]:;case a[322]:;case a[321]:;case a[323]:;case a[104]:;case a[105]:return true};return false}}function cf(c,b){return  function(d){var f={};f._= d;while(f._){if(qs(f._,c._)){return f._};if((1&&b._)(f._[a[9]])){return f._};tS(f)};return f._}}function cg(b,c){return  function(f){var h={};h._= f;if(qs(h._,b._)){return null};tT(h);while(h._){if(qs(h._[a[17]],b._)){break};if(qs(h._[a[234]],1)){var g=h._[a[9]];if(qs(g,a[104])|| qs(g,a[105])|| qs(g,a[323])){return h._}};tU(h)};if(!h._){return null};var d=c._[a[329]](h._)[a[18]];if(qs(d,a[330])){return null};return h._}}function ch(b,c){return  function(h,g){var d=h[a[124]]();if(g){qJ()[a[331]](h[a[9]],d[a[78]],d[a[125]],h[a[79]],b._[a[79]],c._[a[79]])};if(c._){var f=c._[a[124]]();return {width:d[a[125]],height:d[a[25]],left:qm(f[a[78]],d[a[78]]),top:qm(f[a[80]],d[a[80]]),right:qm(d[a[282]],f[a[78]]),bottom:qm(d[a[235]],f[a[80]])}}else {return d}}}function ci(a){return  function(b){return (1&&a._)(b)}}function cj(h,g,b,f,c,d){return  function(s,r,p){var v={},t={},j={},n={},o={},l={},u={},m={},k={};var q={};q._= ck(o,h,n,t);v._= s;t._= r;j._= p;l._= q._;;;u._= v._[a[124]]();;m._= h._[a[124]]();;n._= (1&&b._)(h._,a[333],qm(a[334]+ g._[a[335]],a[336]));tX(n,u,m);tY(n,u,m);tZ(n,u);ua(n,u);o._= (1&&b._)(h._,a[337],qm(a[334]+ g._[a[335]],a[336]));ub(j,o);if(!t._[a[338]]||  !f._){(1&&c._)(o._,l._)}else {(1&&d._)(o._,l._);uc(n,o);ud(n,l)};t._[a[340]](o._);k._= qL()[a[110]][a[79]];;ue(u,o,k,m,v);uf(o,u,m)}}function cl(j,d,g,f,h,c,b){return  function(m,l,r){var o={},k={},q={},q={},p={};o._= m;k._= l;if(qs(r,a[341])){q._= qL()[a[13]](a[342]);;ug(q,k);uh(q,k);ui(q);q._[a[69]](j._[a[86]],(1&&d._)(k._));(1&&g._)(q._,k._);q._[a[339]]= cm(f,q,h,o,k,c);return q._}else {q._= qL()[a[13]](a[347]);;uj(q,k);uk(q,k);ul(q);q._[a[69]](j._[a[86]],(1&&d._)(k._));var n=(1&&b._)(q._,a[349],a[22]);p._= (1&&b._)(q._,a[350],a[22]);;um(p);q._[a[339]]= cn(f,q,h,o,k,c);o._[a[351]](n);return q._}}}function co(b,f,c,d){return  function(j,h){var l={},k={},g={};l._= j;k._= h;g._= (1&&b._)(l._,a[352],a[22]);;g._[a[339]]= cp(f,l,c,g,k,d);un(g);uo(g);return g._}}function cs(j,f,g,c,b,h,d){return  function(n){var k={};var l={};l._= ct(j,f);k._= l._;var m={};m[a[340]]= cu(g,j,k,c,b,h);(1&&d._)(n,m)}}function cv(f,b,g,d,c){return  function(){var h={};f._= (1&&b._)(qL()[a[73]],a[361],a[22],a[362]);(1&&d._)(g._[a[363]],f._,a[364]);h._= null;;f._[a[353]]= cw(h,c);f._[a[354]]= cx(h)}}function cy(b){return  function(){var c=b._[a[367]](a[366]);for(var d=0;qp(d,c[a[40]]);d++){c[d][a[88]](a[368])};var c=b._[a[367]](a[369]);for(var d=0;qp(d,c[a[40]]);d++){c[d][a[88]](a[370])}}}function cz(k,c,g,j,b,h,d,f){return  function(){var l={};if(!k._[a[371]]){return};l._= (1&&c._)();;if(qh(g._,null)){if(qh(g._,l._)|| j._){g._[a[88]](a[368])};uq(g)};if(qs(l._,null)|| j._|| (1&&b._)()){if(qh(h._,null)){h._[a[17]][a[29]](h._);ur(h)}}else {if(qs(h._,null)){(1&&d._)()};(1&&f._)(l._);if(qh(g._,l._)){if(k._[a[372]]){l._[a[69]](a[368],a[22]);us(g,l)}}}}}function cA(g,c,j,d,h,f,b){return  function(n){var k={},l={};if(!g._[a[371]]){return};k._= (1&&c._)(n);;l._= j._[a[124]]();;var m=d._[a[15]][a[14]];if(h._[a[93]][a[123]](a[373])){ut(d,l,g);d._[a[15]][a[375]]= qm(1,qY()(qZ()[a[376]]))|| 0}else {if(qs(g._[a[377]],a[78])){d._[a[15]][a[78]]= qm(qn(l._[a[78]],21)+ g._[a[374]],a[27])}else {d._[a[15]][a[78]]= qm(qn(l._[a[282]],32)+ g._[a[374]],a[27])}};uu(d,k,g);qI()(f._);if(qh(m,d._[a[15]][a[14]])){f._= rb()(b._,300)}}}function cB(c,d,b){return  function(){var g=(1&&c._)();if(!g&& d._[a[289]]){var f=d._[a[289]];if(qs(f[a[58]](),a[379])){f= a[12]};(1&&b._)(f);g= (1&&c._)();if(g&& d._[a[380]]){g[a[93]][a[92]](d._[a[380]])}};return g}}function cC(c,b){return  function(){if(c._[a[371]]&& c._[a[363]]){(1&&b._)()}}}function cD(c,b){return  function(){if(c._[a[371]]&& c._[a[363]]){(1&&b._)()}}}function cE(p,f,o,l,c,n,m,k,h,q,d,g,b,r,j){return  function(s){if(qs(s[a[122]],9)){if(p._[a[382]]()){s[a[113]]();(1&&f._)(s[a[383]]?a[384]:a[385]);return};if(o._[a[386]]&& qu(o._[a[386]],0)){s[a[113]]();var u=a[22];for(var t=0;qp(t,qV()[a[230]](o._[a[386]],100));t++){u+= a[387]};(1&&l._)(u);(1&&c._)(false)};return};if(qs(s[a[122]],13)){n._= qK()[a[231]]();(1&&m._)();if((1&&k._)()){s[a[113]]();return};var v=(1&&h._)();if(v&& qs(q._[a[329]](v)[a[18]],a[388])){return};(1&&d._)();var w=s[a[383]];if(w&& (qs(o._[a[389]],null)|| qs(o._[a[389]][a[58]](),a[379]))){return};if(w){s[a[113]]();return};if(o._[a[289]]&& qs(o._[a[289]][a[58]](),a[379])){(1&&l._)(a[390]);(1&&c._)(false);s[a[113]]();return};rb()(cF(o,g,h,b,r,j),1)}}}function cG(d,b,c,f){return  function(g){if(!d._[a[123]](g[a[102]])){return};if(g[a[392]]){switch(g[a[404]]){case a[394]:g[a[113]]();(1&&b._)(a[393]);break;case a[396]:g[a[113]]();(1&&b._)(a[395]);break;case a[398]:g[a[113]]();(1&&b._)(a[397]);break;case a[232]:g[a[113]]();(1&&b._)(a[399]);break;case a[401]:g[a[113]]();(1&&b._)(a[400]);break;case a[403]:g[a[113]]();(1&&b._)(a[402]);break}};if((1&&c._)()){if(qs(g[a[404]],a[405])|| qs(g[a[404]],a[406])){g[a[113]]();(1&&b._)(a[407])}}else {if(!f._[a[408]]){if(qs(g[a[404]],a[405])|| qs(g[a[404]],a[406])){g[a[113]]();(1&&b._)(a[407])}}}}}function cH(b){return  function(f){var c=b._[a[367]](a[369]);for(var d=0;qp(d,c[a[40]]);d++){c[d][a[88]](a[370])};if(f){for(var d=0;qp(d,f[a[40]]);d++){f[d][a[69]](a[370],a[22])}}}}function cI(m,n,o,d,g,b,l,c,f,k,h,p,j){return  function(s){var r={},q={},u={},u={};r._= s;q._= m._[a[124]]();;uw(n,q,r);ux(o,q,r);if(qs(d._,a[409])){var t=(1&&b._)(g._);var v=(1&&c._)(l._[a[410]](r._[a[71]],r._[a[72]]));uy(f);if(v&& qs((1&&b._)(v),t)){f._= v};u._= (1&&k._)(a[280],a[281],t,g._,f._|| g._);;uz(u,g);(1&&h._)(true);(1&&p._)(u._)}else {if(d._){u._= (1&&j._)(a[280],a[281]);;if(u._&& qu(u._[a[40]],1)){uA(d);uB(g,u);uC(f,u);(1&&h._)(true);(1&&p._)(u._)}}}}}function cJ(b){return  function(c){if(qs(c[a[411]],0)){b._= false}}}function cK(c,f,d,l,h,g,b,j,k){return  function(n){var m={},o={},p={},q={};m._= n;uD(m,c);uE(f);uF(d);(1&&l._)();o._= m._[a[102]];;if(!h._[a[123]](o._)){return};if(qs(o._[a[9]][a[58]](),a[412])){if(o._[a[83]]&& qs(o._[a[83]][a[9]],a[283])){o._= o._[a[83]]}};switch(o._[a[9]]){case a[283]:;case a[261]:rb()(cL(o,g),10);return};if((1&&b._)()){p._= m._[a[71]];;q._= m._[a[72]];;rb()(cM(b,q,p,j,o,k),1)}}}function cN(b,d,c){return  function(f){f[a[113]]();(1&&b._)();if(qu(f[a[72]],d._[a[124]]()[a[235]])){(1&&c._)(false)}}}function cO(){return  function(a){}}function cP(b,a,c){return  function(f){var d={};d._= f;uG(b);uH(a,d);(1&&c._)(d._)}}function cQ(c,b,d){return  function(f){if(!c._[a[417]]){f[a[113]]();return};uI(b);(1&&d._)(f)}}function cR(c,b){return  function(d){(1&&c._)(d);if(!b._[a[417]]){d[a[113]]();return}}}function cS(l,c,h,g,f,b,d,j,k){return  function(m){(1&&l._)(m);(1&&c._)();if(!h._[a[417]]){m[a[113]]();return};if(g._){if(qs(m[a[102]],f._)){m[a[113]]();return};(1&&b._)(a[407]);return};var n=m[a[421]][a[420]][0];if(!n){return};if(qh(m[a[421]][a[422]][a[40]],0)){m[a[113]]();(1&&d._)(m[a[421]],m);return};var o=j._[a[423]](m[a[71]],m[a[72]]);m[a[113]]();k._[a[208]]();k._[a[310]](o);(1&&d._)(m[a[421]],m)}}function cT(b){return  function(c){(1&&b._)(c[a[425]],c)}}function cU(){return  function(b){if(!b){return};if(qh(b[a[60]](a[426]),-1)){return true};if(qh(b[a[60]](a[427]),-1)){return true};if(/style\=[\"][^\"]*mso\-/[a[24]](b)){return true};if(/style\=[\'][^\']*mso\-/[a[24]](b)){return true}}}function cV(b){return  function(j,l){var c={};c._= cX();var d={types:[],items:[],files:[]};var f={preventDefault:cW()};for(var g=0;qp(g,j[a[40]]);g++){for(var k=0;qp(k,j[g][a[431]][a[40]]);k++){var h=d[a[431]][a[40]];d[a[431]][a[39]](j[g][a[431]][k]);d[a[420]][a[39]]((1&&c._)(j[g],j[g][a[431]][k]))}};(1&&b._)(d,f,l)}}function db(h,f,b,g,d,c){return  function(s,t,u){var k={},l={},D={},I={},J={},G={},F={},E={},r={},n={},K={},o={},p={},L={},H={},q={},M={},m={};var j={};var A={};var B={};var y={};var w={};var v={};var z={};j._= dc(k);A._= df(l,J);B._= dg(f,b);y._= dh(g,d);w._= di(l,G);v._= dj(l,k,c);z._= dk(h,r,p,G,K,n,L,o,l);k._= s;l._= t;D._= u;I._= A._;J._= B._;G._= y._;F._= w._;E._= v._;H._= z._;if(!D._){if(l._&& qs(l._[a[284]],a[424])&& h._[a[432]]){switch(h._[a[432]][a[58]]()){case a[433]:;case a[434]:l._[a[113]]();return;case a[429]:;case a[435]:uJ(D);break;case a[436]:;case a[437]:uK(D);break}}};var C=k._[a[431]][a[40]];r._= [];;n._= [];;K._= false;;;;;q._= 0;for(;qp(q._,C);q._++){M._= k._[a[431]][q._];;m._= null;;switch(M._){case a[449]:uU(m,M,q,k,I);uV(L,m);break;case a[186]:uW(m,M,q,k,F);uX(o,m);break;case a[455]:uY(m,M,q,k,E);break;case a[456]:uZ(m,M,q,k,H);break;case a[454]:;case a[457]:;default:break};if(m._){n._[a[39]](m._)}};if(qs(n._[a[40]],0)){return};if(qs(D._,a[435])){if(L._){L._[a[458]](L._[a[233]])};return true};n._[a[460]](dr());n._[0][a[458]](n._[0][a[233]]);return true}}function ds(d,f,b,c){return  function(p,z){var r={},A={},q={},o={},j={},l={},m={},n={},k={};var y={};var s={};var u={};var v={};var w={};var t={};var h={};var g={};y._= dt(j,r,q);s._= dv(l);u._= dw(m);v._= dx(n);w._= dy(b,k,c,j);t._= dz(A);h._= dA(o);g._= dB();r._= z;o._= y._;j._= s._;l._= u._;m._= v._;n._= w._;k._= t._;A._= f._[a[329]](d._)[a[461]];;q._= 0;;p= (1&&h._)(p);p= (1&&g._)(p);return p}}function dC(){return  function(b,a){}}function dD(){return  function(b,a){}}function dE(){return  function(){}}function dF(){return  function(a){}}function dG(){return  function(){}}function dH(){return  function(){}}function dI(){return  function(){}}function dJ(){return  function(){}}function dK(){return  function(){}}function dL(b,c,o,l,n,m,d,k,j,g,h,f){return  function(){var p={};var q={};q._= dM(o,p);if(b._){return b._[a[446]](c._|| [])};p._= [];;(1&&q._)(a[505],a[28],(1&&l._)([a[506]]));(1&&q._)(a[507],a[28],(1&&l._)([a[508]]));var r=[];r[a[39]]((1&&l._)([a[472]]));r[a[39]]((1&&n._)([a[509]]));r[a[39]]((1&&n._)([a[510]]));r[a[39]]((1&&m._)());(1&&q._)(a[511],a[28],(1&&d._)(r));(1&&q._)(a[512],a[28],(1&&k._)());(1&&q._)(a[513],a[28],(1&&l._)([a[514]],true));(1&&q._)(a[515],a[28],(1&&j._)());(1&&q._)(a[516],a[517],(1&&g._)());(1&&q._)(a[518],a[517],(1&&h._)());(1&&q._)(a[519],a[517],(1&&f._)());vf(b,p);return b._[a[446]](c._|| [])}}function dN(c,b,d,f,a){return  function(g){(1&&c._)(g);rb()(dO(b,d,f,a),50)}}function dP(d,c,b,f){return  function(g,h,l){var j=d._[qm(a[520],g)]|| c._[g]|| b._;var k=j[a[135]](f._,[g,h,l]);return k}}function dQ(f,g,d,b,c){return  function(p,m,o){var q={},j={},n={},l={};q._= o;if(qs(f._,null)){vg(f);var h=g._[a[521]][a[45]](a[358]);for(var k=0;qp(k,h[a[40]]);k++){f._[h[k]]= k}};j._= m;;switch(m){case a[523]:vh(j);break;case a[67]:vi(j);break;case a[526]:vj(j);break;case a[528]:vk(j);break;case a[529]:vl(j);break;case a[531]:vm(j);break;case a[533]:vn(j);break;case a[535]:vo(j);break;case a[536]:vp(j);break;case a[538]:vq(j);break;case a[539]:vr(j);break;case a[540]:vs(j);break;case a[542]:vt(j);break;case a[544]:vu(j);break;case a[546]:vv(j);break;case a[548]:vw(j);break;case a[550]:vx(j);break;case a[552]:vy(j);break;case a[553]:vz(j);break;case a[555]:vA(j);break;case a[557]:vB(j);break;case a[559]:vC(j);break;case a[561]:vD(j);break;case a[563]:vE(j);break;case a[565]:vF(j);break;case a[567]:vG(j);break;case a[569]:vH(j);break;case a[571]:vI(j);break;case a[573]:vJ(j);break;case a[575]:vK(j);break;case a[577]:vL(j);break;case a[579]:vM(j);break;case a[581]:vN(j);break;case a[582]:vO(j);break;case a[584]:vP(j);break;case a[586]:vQ(j);break;case a[588]:vR(j);break;case a[590]:vS(j);break};if(qy(j._,f._)){n._= a[591];;vT(d,q,n);l._= (1&&b._)(p,a[594],n._);;l._[a[15]][a[595]]= qm(a[596]+ (1&&c._)(a[597]),a[598]);vU(l,j,f);vV(q,l);return true}}}function dR(c,b,f,d){return  function(k,h){var m={},p={},g={},n={},o={};m._= k;if(!m._[a[87]](a[603])){m._[a[69]](a[603],h)};var j=h[a[58]]();if(c._){if((1&&b._)(m._,j)){return}};p._= f._[qm(a[604],j)];;if(!p._){g._= j;;n._= null;;switch(j){case a[605]:;case a[607]:vW(g);break;case a[609]:vX(g);break;case a[611]:vY(g);break;case a[612]:vZ(g);break;case a[614]:wa(g);break;case a[616]:wb(g);break;case a[618]:wc(g);break;case a[620]:wd(g);break;case a[622]:we(g);break;case a[623]:;case a[625]:wf(g);break;case a[626]:;case a[627]:wg(g);wh(n);break;case a[629]:wi(g);break;case a[631]:wj(g);break;case a[633]:wk(g);break;case a[634]:;case a[636]:wl(g);break;case a[637]:wm(g);break;default:break};if((1&&b._)(m._,g._,n._)){return}};if(!p._){var l=h[a[60]](a[59]);if(qh(l,-1)){(1&&d._)(m._,h[a[42]](qm(l,1)));return}};wn(m,p,f);o._= m._[a[83]];;wo(o);wp(o)}}function dS(c,d,b){return  function(f){var g={};g._= (1&&c._)(f);;g._[a[339]]= dT(d,g,b);return g._}}function dU(c,d,b){return  function(f){var g={};g._= (1&&c._)(f);;g._[a[339]]= dV(d,g,b);return g._}}function dW(a,d,l,k,g,f,m,h,b,n,j,c){return  function(o){return (1&&c._)(o,dX(a,d,l,k,g,f,m,h,b,n,j))}}function ed(g,a,f,h,b,d,c){return  function(l){var k={};k._= l;var j=(1&&c._)(k._,ee(k,g,a,f,h,b,d),ei(k,d));return j}}function ej(b,h,j,g,c,l,k,f,d){return  function(q){var n={},o={},s={},p={};var r={};r._= er(o,s,n,f);n._= q;p._= r._;o._= qs(n._,a[613])?a[684]:a[685];;var m=(1&&d._)(n._,ek(b,h,j,g,c,l,p,n,k),eq(n,o,f));s._= (1&&b._)(m,a[696]);;wF(s,o);return m}}function es(a,h,b,g,c,f,j,d){return  function(k){return (1&&d._)(k,et(a,h,b,g,c,f,j))}}function ey(a,l,f,h,j,b,c,k,g,d){return  function(m){return (1&&d._)(m,ez(a,l,f,h,j,b,c,k,g))}}function eC(c,b,a){return  function(d,g,f){return (1&&a._)(d,eD(c,b))}}function eE(w,o,c,l,t,g,b,v,h,z,p,d,k,f,y,n,m,u,s,q,r,j){return  function(A,F,D){var C={},E={};var B={};B._= eM(b,v,h,l,z,p,d,k,o,f,y,n,m,u,s,q,r,j);E._= B._;C._= false;;if(qs(D,null)||  !w._||  !w._[a[123]](D)){C._= true};return (1&&g._)(A,eF(C,o,c,l,t,E));}}function eZ(g,f,b,c,h,d){return  function(j,m,l){var k={};k._= false;;if(qs(l,null)||  !g._||  !g._[a[123]](l)){k._= true};return (1&&d._)(j,fa(k,f,b,c,h))}}function fg(b,s,f,j,c,m,u,n,h,d,t,l,k,r,q,o,p,g){return  function(P,W){var S={},V={},I={},G={},G={},X={},Z={},ba={},Y={},T={},A={},z={},z={},U={},M={},C={},C={},J={},N={},y={},L={};var O={};var v={};var H={};var w={};O._= fj(Z);v._= fh(C);H._= fi(c);w._= fr(C);S._= P;A._= O._;V._= (1&&s._)((1&&b._)(S._,a[697]));;xf(V);I._= (1&&f._)(a[261]);;if(qs(W,a[777])){G._= V._[a[713]]((1&&j._)(a[777]),a[785],null,v._);;G._[a[93]][a[92]](a[786]);xg(G);var E=(1&&b._)(G._,a[12],a[22]);X._= (1&&b._)(E,a[787],a[788]);;var K=qW()[a[790]]|| qW()[a[791]]|| qW()[a[792]];if(!K){qC()(a[789]);(1&&c._)();return};Z._= null;;ba._= null;;Y._= null;;T._= false;;S._[a[129]]= fk(T,A);K[a[135]](qW(),[{"video":true},fl(Z,ba,T,A,c,Y,X),H._]);var F=(1&&b._)(G._,a[12],a[22]);z._= (1&&b._)(F,a[667],null,a[718]);;xm(z);z._[a[339]]= fm(Z,Y,X,m,S,c);return};U._= qs(W,a[753])|| (!I._&& qs(W,a[754]));;if(U._){G._= V._[a[713]]((1&&j._)(a[755]),a[809],null,v._);;G._[a[93]][a[92]](a[757]);xq(G);var E=(1&&b._)(G._,a[12],a[22]);M._= (1&&b._)(E,a[12],a[759],a[810]);;xr(M,u);var D=(1&&b._)(G._,a[12],a[22]);D[a[50]]= (1&&j._)(a[762]);C._= (1&&b._)(G._,a[12],a[22]);;C._[a[50]]= qm(a[470]+ (1&&j._)(a[763]),a[470]);var B=(1&&b._)(G._,a[12],a[22]);B[a[50]]= (1&&j._)(a[764]);J._= (1&&b._)(G._,a[65],a[765]);;xs(J);J._[a[69]](a[812],a[813]);G._[a[766]]= fn();G._[a[767]]= fo();G._[a[768]]= fp(n,S,c,h);J._[a[300]]= fq(J,m,S,c);if(qs(W,a[753])){return}};var R=V._[a[713]]((1&&j._)(a[748]),a[814],null,w._);var B=(1&&b._)(R,a[715],a[22],a[646]);var Q=(1&&b._)(B,a[647]);Q[a[50]]= (1&&j._)(a[771]);N._= (1&&b._)(B,a[65]);;xv(N);xw(N);y._= (1&&b._)(B,a[773],a[22]);;y._[a[339]]= fs(b,N,c,u,y,d);if(I._){N._[a[89]]= I._[a[87]](a[738])};(1&&t._)(N._);N._[a[97]]();(1&&l._)(N._,fw(z));(1&&k._)(S._);L._= (1&&r._)(V._,I._,null,w._);;C._= (1&&b._)(S._,a[665]);;xz(U,C);z._= (1&&b._)(C._,a[667],null,a[718]);;xA(z,I);z._[a[339]]= fx(N,I,q,o,L,S,c,p,g)}}function fy(d,a,h,g,f,b,c){return  function(j){return (1&&c._)(j,fz(d,a,h,g,f,b))}}function fD(f,a,j,d,k,h,g,b,c){return  function(l){return (1&&c._)(l,fE(f,a,j,d,k,h,g,b))}}function fJ(f,a,q,h,b,s,c,r,j,t,l,k,p,g,o,m,n,d){return  function(u){return (1&&d._)(u,fK(f,a,q,h,b,s,c,r,j,t,l,k,p,g,o,m,n))}}function fT(a,f,g,b,c,d){return  function(h){return (1&&d._)(h,fU(a,f,g,b,c))}}function fY(c,b,d){return  function(){var f={},g={};f._= c._[a[864]](a[863]);;g._= d._[a[329]](b._)[a[461]];;yj(f,g);if(f._){f._= f._[a[45]](a[471])[a[108]](a[22])};return f._}}function fZ(f,c,h,g,j,b,d){return  function(k,q){var l={},m={},p={};var n={};n._= ga(f,c);l._= n._;var o={};;o[a[351]]= gb(m,h);o[a[340]]= gc(g,j,l,b);p._= (1&&d._)(o,k,q);;if(qs(p._[a[9]][a[58]](),a[347])){yp(p,j);yq(p,j)};p._[a[262]]= gd(m,g,h);return p._}}function ge(f,c,g,h,b,d){return  function(j,n){var k={};var l={};l._= gf(f,c);k._= l._;var m={};m[a[351]]= gg(g);m[a[340]]= gh(h,k,b);return (1&&d._)(m,j,n)}}function gi(d,b,f,g,a,c){return  function(h,l){var j={};var k={};k._= gj(d,b);j._= k._;return (1&&c._)(h,gk(f,g,j,a))}}function gl(){return  function(b,d,f){if(qs(d,f)){return true};if(d&&  !f){return false};if(f&&  !d){return false};var c=d[a[60]](a[470]);if(qs(c,-1)){return false};var g=f[a[60]](a[470]);if(qs(g,-1)){switch(b){case a[491]:;case a[876]:return true};return false};return true}}function gm(c,b){return  function(){for(var d=0;qp(d,c._[a[877]][a[40]]);d++){var f=c._[a[877]][d];if((1&&b._)(f[1])){return true}}}}function gn(c,b,d){return  function(k){if(qs(k[a[60]](a[465]),-1)){return (1&&c._)(k)};var j=k[a[45]](a[336]);for(var f=0;qp(f,j[a[40]]);f++){var h=j[f];h= h[a[45]](a[465]);if(qh(h[a[40]],2)){continue};var g=h[0][a[20]]();if(!g){continue};var l=h[1][a[20]]();if(!(1&&d._)(g,(1&&b._)(g),l,false)){return false}};return true}}function go(b,g,d,h,j,a,f,c){return  function(k,n){var l={};var m={};m._= gp(b,g,d,h);l._= m._;return (1&&c._)(k,gq(j,l,a,f))}}function gr(c,b){return  function(){for(var d=0;qp(d,c._[a[879]][a[40]]);d++){var f=c._[a[879]][d];if((1&&b._)(f[1])){return true}}}}function gs(b,c,d){return  function(l){var k=(1&&b._)();if(!k){return};if(qs(l[a[60]](a[465]),-1)){return k[a[93]][a[123]](l)};var j=l[a[45]](a[336]);for(var f=0;qp(f,j[a[40]]);f++){var h=j[f];h= h[a[45]](a[465]);if(qh(h[a[40]],2)){continue};var g=h[0][a[20]]();if(!g){continue};var m=h[1][a[20]]();g= (1&&c._)(g);if(!(1&&d._)(g,k[a[15]][g],m)){return false}};return true}}function gt(b,d,f,h,j,a,g,c){return  function(k,n){var l={};var m={};m._= gu(b,d,f,h);l._= m._;return (1&&c._)(k,gv(j,l,a,g))}}function gw(c,b){return  function(){for(var d=0;qp(d,c._[a[881]][a[40]]);d++){var f=c._[a[881]][d];if((1&&b._)(f[1])){return true}}}}function gx(b,c,d){return  function(l){var k=(1&&b._)(a[272]);if(!k){return};if(qs(l[a[60]](a[465]),-1)){return k[a[93]][a[123]](l)};var j=l[a[45]](a[336]);for(var f=0;qp(f,j[a[40]]);f++){var h=j[f];h= h[a[45]](a[465]);if(qh(h[a[40]],2)){continue};var g=h[0][a[20]]();if(!g){continue};var m=h[1][a[20]]();g= (1&&c._)(g);if(!(1&&d._)(g,k[a[15]][g],m)){return false}};return true}}function gy(b,d,f,h,j,a,g,c){return  function(k,n){var l={};var m={};m._= gz(b,d,f,h);l._= m._;return (1&&c._)(k,gA(j,l,a,g))}}function gB(c,b){return  function(){for(var d=0;qp(d,c._[a[883]][a[40]]);d++){var f=c._[a[883]][d];if((1&&b._)(f[1])){return true}}}}function gC(b,c,d){return  function(l){var k=(1&&b._)();if(!k){return};if(qs(l[a[60]](a[465]),-1)){return k[a[93]][a[123]](l)};var j=l[a[45]](a[336]);for(var f=0;qp(f,j[a[40]]);f++){var h=j[f];h= h[a[45]](a[465]);if(qh(h[a[40]],2)){continue};var g=h[0][a[20]]();if(!g){continue};var m=h[1][a[20]]();g= (1&&c._)(g);if(!(1&&d._)(g,k[a[15]][g],m)){return false}};return true}}function gD(b,d,f,h,j,a,g,c){return  function(k,n){var l={};var m={};m._= gE(b,d,f,h);l._= m._;return (1&&c._)(k,gF(j,l,a,g))}}function gG(k,g,d,j,h,c,b,f){return  function(l,r){var m={},n={};var o={};o._= gH(k,g,d);m._= o._;var p={};;p[a[351]]= gI(n,j);p[a[340]]= gJ(h,k,m,c,b,j);var q=(1&&f._)(p,l,r);q[a[262]]= gK(h,j,n);return q}}function gL(f,c,b,d){return  function(g,l){var k={},h={};var j={};j._= gM(f,c);h._= j._;k._= {};;yJ(k);k._[a[340]]= gO(h,b);return (1&&d._)(k._,g,l)}}function gP(j,d,b,g,h,f,c){return  function(p,q,o){var l={},n={},k={},r={},s={};l._= p;n._= q;k._= o;r._= qL()[a[13]](a[891]);;yM(r,l);yN(r);r._[a[69]](j._[a[86]],(1&&d._)(l._));yO(r,l);var m=(1&&b._)(r._,a[892]);(1&&g._)(m,l._);s._= (1&&b._)(r._,a[893]);;r._[a[339]]= gQ(r,h,k,s);s._[a[339]]= gR(r,h,l,f,b,d,n,c);return r._}}function gT(c,d,b){return  function(h,j){var f={},g={},k={};f._= h;g._= j;k._= (1&&c._)(f._);;k._[a[339]]= gU(f,d,g,k,b);return k._}}function gW(f,j,h,d,g,k,l,b,c){return  function(o,p){var m={},n={},q={},s={},r={};m._= o;n._= p;q._= qm(a[895],m._[a[58]]());;s._= (1&&f._)(m._);;j._[m._[a[58]]()]= {type:a[899],control:r._,exec:gX(s,q,h,n)};r._= (1&&d._)(m._);;r._[a[339]]= gZ(m,g,r,k,q,l,s,h,n,b,c);return r._}}function hc(j,d,g,h,f,b,c){return  function(n,p){var k={},l={},o={};k._= n;switch(k._){case a[529]:yQ(k);break};var m=qs(k._[a[42]](0,7),a[902]);l._= qs(k._[a[42]](0,5),a[903]);;o._= qL()[a[13]]((m|| l._)?a[342]:a[904]);;yR(o,k);yS(o);o._[a[69]](j._[a[86]],(1&&d._)(k._));yT(o,k);(1&&g._)(o._,k._);o._[a[339]]= hd(o,h,l,k,j,f,b,c);return o._}}function hf(h,k,d,f,j,b,c,l,g){return  function(L,M,P){var U={},V={},B={},A={},o={},N={},Q={},u={},t={},r={},s={},O={},m={},T={},v={},w={},y={},z={},n={},S={};var q={};var J={};var D={};var F={};var G={};var H={};var I={};var E={};var K={};var R={};q._= hg(Q,N,U,o);J._= hh(t);D._= hi(r,u,s,V,h,k,d,f,j,B,t,b,c);F._= hm(T,l,t,b,r,Q,o,s,S,d,m,u,V,h);G._= hn(t,b,r);H._= ho(t,r);I._= hp(t,r,w,b);E._= hq(t,V,b);K._= hr(v,w,y,z,O,n,m);R._= hs(r,Q,o,s,S);U._= L;V._= M;O._= J._;m._= D._;v._= F._;w._= G._;y._= H._;z._= I._;n._= E._;S._= K._;B._= qs(P,a[592]);;var C=qs(P,a[364]);A._= false;;if(qh(U._[a[60]](a[907]),-1)){yU(A);U._= U._[a[36]](a[907],a[22]);V._[a[93]][a[92]](a[908])};o._= [];;N._= 0;;Q._= 0;;u._= {};;for(;qp(Q._,U._[a[40]]);Q._++){var p=U._[a[61]](Q._);switch(p){case a[909]:;case a[910]:;case a[911]:;case a[452]:;case a[467]:;case a[468]:;case a[912]:(1&&q._)();o._[a[39]](p);yV(N,Q);break;case a[913]:(1&&q._)();o._[a[39]](a[913]);yW(N,Q);break;case a[106]:;case a[466]:(1&&q._)();o._[a[39]](a[466]);yX(N,Q);break;case a[470]:;case a[358]:(1&&q._)();yY(N,Q);break;case a[59]:;default:break}};(1&&q._)();yZ(Q);t._= {control:V._,parent:null,dock:a[914],group:null};;;;T._= 0;;(1&&R._)();(1&&g._)(V._)}}function ht(b){return  function(c){return qs(b._[a[947]],c)}}function hu(d,c,b){return  function(f){var h={};h._= f;zq(d);if(qs(d._[a[947]],h._)){zr(d);zs(d);return};var g=c._[qm(a[905],h._)];if(!g){return qJ()[a[413]](qm(a[906],h._))};(1&&b._)(g,d._);zt(d);zu(d);zv(d);zw(d);rb()(hv(d),10);zx(d,h)}}function hw(c,b,d){return  function(l){var k={},k={},h={},f={},m={};var g=l[a[367]](a[347]);for(var j=0;qp(j,g[a[40]]);j++){k._= g[j];;if(k._[a[262]]){k._[a[262]]()}};var g=l[a[367]](a[952]);for(var j=0;qp(j,g[a[40]]);j++){k._= g[j];;if(!k._[a[343]]){continue};h._= (1&&c._)(k._[a[343]]);;if(qi(k._[a[953]],h._)){if(qt(k._[a[953]],true)){k._[a[93]][a[28]](a[954])};if(qt(k._[a[953]],false)){k._[a[93]][a[28]](a[346])};if(h._){k._[a[93]][a[92]](a[954])};if(!h._){k._[a[93]][a[92]](a[346])};zy(k,h)};f._=  !!(1&&b._)(k._[a[343]]);;if(qi(k._[a[955]],f._)){if(qt(k._[a[955]],true)){k._[a[93]][a[28]](a[956])};if(qt(k._[a[955]],false)){k._[a[93]][a[28]](a[957])};if(f._){k._[a[93]][a[92]](a[956])};if(!f._){k._[a[93]][a[92]](a[957])};zz(k,f)};m._= (1&&d._)(k._[a[343]]);;zA(k,m)}}}function hx(c,a,d,b){return  function(){(1&&a._)(c._);(1&&a._)(d._);(1&&a._)(b._)}}function hy(h,b,f,c,d,g,k,j){return  function(m){var l=m[a[58]]();if(h._|| (1&&b._)()){switch(l){case a[585]:;case a[959]:;case a[563]:;case a[960]:;case a[961]:;case a[962]:;case a[395]:;case a[963]:;case a[964]:;case a[402]:;case a[965]:return true};return false};if(f._){var n=(1&&g._)(a[280],a[281],(1&&c._)(f._),f._,d._|| f._);if(n&& qu(n[a[40]],1)){if(qs(l[a[42]](0,6),a[844])){return false};switch(l){case a[393]:;case a[395]:;case a[424]:return false}}};switch(l){case a[397]:return qh(k._[a[40]],0);break;case a[399]:return qh(j._[a[40]],0);break};return true}}function hz(c,b){return  function(f){var d=f[a[58]]();switch(d){case a[960]:return !c._[a[93]][a[123]](a[373]);case a[961]:return c._[a[93]][a[123]](a[373]);case a[829]:return qs((1&&b._)(a[272]),null);case a[966]:return qh((1&&b._)(a[272]),null);case a[830]:return qh((1&&b._)(a[272]),null);case a[967]:return qh((1&&b._)(a[272]),null)}}}function hA(b,l,n,o,m,c,d,f,h,k,g,j,p){return  function(s){var t={},q={};t._= s;q._= t._[a[58]]();;switch(q._){case a[585]:return (1&&b._)();case a[959]:return (1&&l._)(a[968])|| (1&&l._)(a[969]);case a[563]:;case a[960]:;case a[961]:return n._[a[93]][a[123]](a[373])};if(qs(q._[a[42]](0,7),a[902])){return (1&&l._)(q._[a[42]](7))};if((1&&b._)()){switch(q._){case a[585]:return true};return false};switch(q._){case a[67]:return qs(o._[a[87]](a[67]),a[970]);case a[971]:return (1&&m._)();case a[873]:var u=(1&&c._)();var r=u&& u[a[15]][a[874]];return !!r;case a[385]:return !!(1&&d._)(a[313]);case a[525]:return (1&&f._)(a[972],a[973],a[974]);case a[878]:return (1&&h._)();case a[884]:return (1&&k._)();case a[880]:return (1&&g._)();case a[882]:return (1&&j._)();case a[976]:zB(t,q);break;case a[565]:return o._[a[93]][a[123]](a[977]);default:break};try{if(p._[a[978]](t._)){return p._[a[979]](t._)}}catch(x){return true}}}function hB(a,b){return  function(){(1&&a._)();(1&&b._)()}}function hC(a,b,c,f,d){return  function(g,h){(1&&a._)();(1&&b._)();(1&&c._)(g,h);if(!(1&&f._)()){(1&&d._)()}}}function hD(B,y,N,H,w,G,ba,Q,be,bf,r,q,h,P,s,L,S,b,J,n,m,bd,W,d,C,K,X,E,bc,bb,g,f,A,k,V,u,R,bh,z,v,T,O,U,p,l,D,Z,o,bg,t,F,c,j,I,M,Y){return  function(bq,bB){var br={},bj={},bA={},bv={},bv={},bv={},bv={},bv={},bv={},bp={},bk={},bk={},bk={},bx={};br._= bq;qJ()[a[413]](a[980],br._,bB);if(!(1&&B._)(br._)){qJ()[a[413]](a[981],br._);return false};bj._= br._[a[58]]();;var bo=y._[qm(a[982],bj._)];if(bo){var bu=bo(br._,bB);if(qi(bu,undefined)){return bu}};var bo=y._[a[983]];if(bo){var bu=bo(br._,bB);if(qi(bu,undefined)){return bu}};if(qs(bj._[0],a[984])&& qs(bj._[a[42]](0,7),a[902])){(1&&N._)(bj._[a[42]](7));return};switch(bj._){case a[976]:zC(br,bj);break};if(H._){bA._= (1&&ba._)(a[280],a[281],(1&&w._)(H._),H._,G._|| H._);;if(bA._&& qu(bA._[a[40]],1)){switch(bj._){case a[614]:(1&&Q._)(a[613],hE(bA));return;case a[616]:(1&&Q._)(a[615],hF(bA));return;default:if(be._[a[978]](bj._)){for(var bz=0;qp(bz,bA._[a[40]]);bz++){var by=bA._[bz];bf._[a[985]](by,0);bf._[a[986]](by,by[a[209]][a[40]]);be._[a[227]](bj._,false,bB)};var bn=G._|| H._;bf._[a[985]](bn,bn[a[209]][a[40]]);return}}}};switch(bj._){case a[550]:;case a[552]:(1&&r._)(bj._);break;case a[987]:(1&&q._)(bB);break;case a[548]:(1&&q._)(a[313]);break;case a[533]:be._[a[227]](a[533]);(1&&h._)();break;case a[871]:(1&&P._)(a[495],a[988],bB,false);break;case a[613]:(1&&P._)(a[491],a[491],bB,false,true);break;case a[615]:(1&&P._)(a[876],a[690],bB,false,true);break;case a[614]:bv._= (1&&s._)();;if(!bv._){return};(1&&Q._)(a[613],hG(bv));break;case a[616]:bv._= (1&&s._)();;if(!bv._){return};(1&&Q._)(a[615],hH(bv));break;case a[990]:bv._= (1&&s._)();;if(bv._&& qh(bv._[a[9]],a[104])&& qh(bv._[a[9]],a[105])&& bv._[a[989]]){if(bv._[a[391]]){bv._[a[17]][a[16]](bv._[a[989]],bv._[a[391]])}else {bv._[a[17]][a[70]](bv._[a[989]])}};break;case a[991]:bv._= (1&&s._)();;if(bv._&& qh(bv._[a[9]],a[104])&& qh(bv._[a[9]],a[105])&& bv._[a[391]]){bv._[a[17]][a[16]](bv._[a[391]],bv._)};break;case a[993]:bv._= (1&&s._)();;if(bv._&& qh(bv._[a[9]],a[104])&& qh(bv._[a[9]],a[105])){var bs=bv._[a[992]](true);bs[a[88]](a[368]);bs[a[88]](a[365]);try{bv._[a[17]][a[16]](bs,bv._)}catch(x){}};break;case a[994]:bv._= (1&&s._)();;if(bv._&& qh(bv._[a[9]],a[104])&& qh(bv._[a[9]],a[105])){bv._[a[28]]()};break;case a[971]:return (1&&L._)();case a[995]:(1&&S._)();break;case a[522]:(1&&b._)();(1&&J._)(a[22]);break;case a[402]:(1&&n._)();break;case a[996]:(1&&m._)();break;case a[67]:if(qs(bd._[a[87]](a[67]),a[970])){bd._[a[69]](a[67],a[68])}else {bd._[a[69]](a[67],a[970])};break;case a[963]:(1&&W._)();break;case a[585]:(1&&d._)();break;case a[959]:if((1&&C._)(a[968])){(1&&N._)(a[968])}else {if((1&&C._)(a[969])){(1&&N._)(a[969])}else {(1&&N._)((1&&K._)()?a[969]:a[968])}};break;case a[565]:bd._[a[93]][a[341]](a[977]);break;case a[397]:(1&&X._)();break;case a[399]:(1&&E._)();break;case a[960]:if(!bc._[a[93]][a[123]](a[373])){bc._[a[93]][a[92]](a[373]);zD(bc,bb)};(1&&g._)(true);break;case a[961]:if(bc._[a[93]][a[123]](a[373])){bc._[a[93]][a[28]](a[373]);zE(bc)};(1&&g._)(true);break;case a[563]:if(!bc._[a[93]][a[123]](a[373])){bc._[a[93]][a[92]](a[373]);zF(bc,bb)}else {bc._[a[93]][a[28]](a[373]);zG(bc)};(1&&f._)();break;case a[998]:(1&&A._)( new (qK())()[a[997]]());(1&&k._)(false);break;case a[569]:(1&&V._)();break;case a[780]:var bm=(1&&R._)((1&&u._)(a[579]),a[999],hI());(1&&bh._)(bm,a[777]);break;case a[782]:var bm=(1&&R._)((1&&u._)(a[579]),a[999],hJ());(1&&bh._)(bm,a[748]);break;case a[749]:var bm=(1&&R._)((1&&u._)(a[579]),a[999],hK());(1&&bh._)(bm,a[753]);break;case a[741]:bp._= qL()[a[13]](a[65]);;zH(bp);zI(bp);bp._[a[300]]= hL(bp,z);bp._[a[101]]();break;case a[1000]:if((1&&v._)()){(1&&T._)((1&&v._)())};break;case a[1001]:if((1&&v._)()){(1&&O._)((1&&v._)())};break;case a[1002]:;case a[435]:;case a[437]:(1&&U._)(bj._);break;case a[1003]:(1&&p._)();break;case a[407]:;case a[1004]:(1&&l._)();break;case a[525]:(1&&P._)(a[972],a[973],a[974],true);break;case a[530]:(1&&D._)(hM());break;case a[1005]:(1&&D._)(hN());break;case a[618]:;case a[620]:;case a[629]:;case a[631]:;case a[609]:;case a[611]:;case a[612]:;case a[622]:;case a[633]:;case a[637]:(1&&Z._)(a[980],bj._);break;case a[536]:;case a[539]:;case a[538]:bk._= (1&&v._)();;if(qs(bk._,null)){(1&&o._)(br._);break};zJ(bk);qJ()[a[413]](bk._[a[17]],bg._[a[329]](bk._[a[17]])[a[18]]);if(qh(bk._[a[17]],bd._)&& qh(bg._[a[329]](bk._[a[17]])[a[18]],a[330])){qJ()[a[413]](bj._[a[42]](7),bk._[a[17]][a[1007]]);bk._[a[17]][a[15]][a[1007]]= bj._[a[42]](7)}else {};break;case a[1008]:;case a[1009]:bk._= (1&&v._)();;if(qs(bk._,null)){break};bk._[a[15]][a[1006]]= bk._[a[15]][a[490]]= bj._[a[42]](5);break;case a[966]:var bi=(1&&t._)(a[272]);if(bi){rf()[a[187]](bi[a[195]])};break;case a[967]:var bi=(1&&t._)(a[272]);(1&&F._)(bi);break;case a[1010]:;case a[1011]:be._[a[227]](a[226],false,false);be._[a[227]](br._,false,bB);be._[a[227]](a[226]);break;case a[393]:if((1&&c._)()){j._[a[97]]();qL()[a[227]](a[393])}else {var bw=(1&&v._)();if(bw){var bt=be._[a[236]]();bt[a[1012]](bw);bf._[a[207]]();bf._[a[310]](bt)};be._[a[227]](a[393])};break;case a[395]:if((1&&c._)()){j._[a[97]]();qL()[a[227]](a[395])}else {var bw=(1&&v._)();if(bw){var bt=be._[a[236]]();bt[a[1012]](bw);bf._[a[207]]();bf._[a[310]](bt)};be._[a[227]](a[395]);if(bw){(1&&I._)(bw)}};(1&&M._)((1&&u._)(a[1013]));break;case a[962]:if((1&&c._)()){j._[a[126]]()}else {(1&&o._)(br._,bB)};break;default:if(qs(bj._[a[42]](0,11),a[822])){bk._= (1&&v._)()|| (1&&t._)(a[634]);;if(qs(bk._,null)){break};bx._= bj._[a[42]](11);;if(qs(rc()(qY()(bx._)),bx._)){zK(bk);zL(bk,bx);zM(bk)}else {zN(bk);zO(bk,bx);zP(bk)};break};var bl=Y._[bj._];if(qh(bl,null)){bl[a[980]](bB);break};(1&&o._)(br._,bB);break}}}function hO(b){return  function(c,d){if(b._[a[978]](c)){qJ()[a[413]](a[1015],c,d);if(d){b._[a[227]](c,false,d)}else {b._[a[227]](c)}}else {qJ()[a[85]](qm(a[1016],c))}}}function hP(b){return  function(){var d=(1&&b._)(a[634]);if(!d){return false};for(var c=0;qp(c,d[a[209]][a[40]]);c++){if(qs(d[a[209]][c][a[9]],a[325])){return true}};return false}}function hQ(c,b,d){return  function(){var j={},l={},l={},g={},f={};var m=(1&&c._)(a[634]);if(!m){return false};for(var h=0;qp(h,m[a[209]][a[40]]);h++){if(qs(m[a[209]][h][a[9]],a[325])){m[a[29]](m[a[209]][h]);return}};var n=(1&&b._)(m,a[325]);m[a[16]](n,m[a[83]]);j._= 0;;for(var k=0;qp(k,m[a[1017]][a[40]]);k++){l._= m[a[1017]][k];;g._= 0;;f._= 0;for(;qp(f._,l._[a[409]][a[40]]);f._++){zQ(g);zR(f,l,g)};zS(g,j)};l._= (1&&b._)(n,a[328]);;for(var h=0;qp(h,j._);h++){(1&&b._)(l._[a[1019]](),a[379])};(1&&d._)()}}function hR(f,h,b,d,g,j,c){return  function(l,k){var m={};if(f._&& h._[a[123]](f._)){var n=(1&&b._)(f._);if(n){return (1&&g._)(l,k,n,f._,d._|| f._)}};m._= (1&&c._)(j._[a[239]]);;zT(m);if(qh(j._[a[239]],j._[a[311]])){ln= (1&&c._)(j._[a[311]])};var o=(1&&b._)(m._);if(!o|| qs(o,h._)){return};if(qh(m._,ln)){var p=(1&&b._)(qT());if(qh(o,p)){return}};return (1&&g._)(l,k,o,m._,qT())}}function hS(b,c){return  function(m,l,F,j,h){var ba={},M={},v={},V={},o={},R={},X={},bg={},q={},be={},bc={},bc={},bc={},bc={},bc={},bc={},bc={},bc={},bc={},bc={},u={},Z={},Z={},Z={},s={},s={},s={},p={},W={},A={},A={},A={},A={},A={},A={},A={},t={},J={},H={},I={},G={},d={},S={},S={},bf={},bf={},P={},P={},O={},O={},y={};var w={};var E={};var D={};var g={};w._= hT(v);E._= hU(o,v,ba);D._= hV(V,v,ba,o);g._= hW(J,H,I,G,v,d);ba._= F;M._= {};;v._= {};;V._= ba._[a[1017]][a[40]];;o._= 0;;R._= 0;;var bb=[];X._= 0;for(;qp(X._,V._);X._++){bg._= ba._[a[1017]][X._];;q._= 0;;be._= 0;for(;qp(be._,bg._[a[409]][a[40]]);be._++){bc._= bg._[a[409]][be._];;bb[a[39]](bc._);;while(true){zU(u,X,q);if(!v._[u._]){break};zV(q)};zW(bc,X);zX(bc,q);zY(bc,be);Z._= qV()[a[111]](1,qY()(bc._[a[87]](a[1023]))|| 1);;s._= qV()[a[111]](1,qY()(bc._[a[87]](a[1024]))|| 1);;zZ(u,v,X,be,M,q,Z,s,bc,bg);o._= qV()[a[111]](o._,qm(q._,1));if(qs(Z._,1)&& qs(s._,1)){continue};for(var r=0;qp(r,s._);r++){p._= qm(r,q._);;for(var Y=0;qp(Y,Z._);Y++){if(qs(r,0)&& qs(Y,0)){continue};W._= qm(Y,X._);;Aa(W,V);A._= v._[qm(W._+ a[465],p._)];;Ab(A,W,p,v,R);A._[a[1025]][a[39]](bc._);o._= qV()[a[111]](o._,qm(p._,1))}}}};t._= 0;;var U=[];for(var T=0;qp(T,V._);T++){var n=[];U[a[39]](n);for(var k=0;qp(k,o._);k++){A._= v._[qm(T+ a[465],k)];;n[a[39]](A._);Ac(A,t)}};if(qh(t._,0)|| qh(R._,0)){qJ()[a[85]](a[1026])};var C=(1&&w._)(j);var B=qs(j,h)?C:(1&&w._)(h);J._= qV()[a[230]](C[a[1027]],B[a[1027]]);;H._= qV()[a[111]](qm(C[a[1027]],C[a[1023]]),qm(B[a[1027]],B[a[1023]]));;I._= qV()[a[230]](C[a[1028]],B[a[1028]]);;G._= qV()[a[111]](qm(C[a[1028]],C[a[1024]]),qm(B[a[1028]],B[a[1024]]));;d._= [j];;if(qh(j,h)){d._[a[39]](h);for(var T=J._;qp(T,H._);T++){for(var k=I._;qp(k,G._);k++){A._= v._[qm(T+ a[465],k)];;if(!A._){continue};if(A._[a[1025]]){for(var z=0;qp(z,A._[a[1025]][a[40]]);z++){bc._= A._[a[1025]][z];;if(!d._[a[1029]](bc._)){d._[a[39]](bc._)}}}else {if(!d._[a[1029]](A._[a[858]])){d._[a[39]](A._[a[858]])}}}}};if(qs(m,a[280])&& qs(l,a[281])){return d._};qJ()[a[413]](qm(qm(a[1030],m)+ a[470],l),d._);if(qs(m,a[980])&& qs(l,a[633])){for(var k=I._;qp(k,G._);k++){S._= {};;for(var T=0;qp(T,V._);T++){A._= v._[qm(T+ a[465],k)];;if(!A._){continue};var f=A._[a[1025]]|| [A._[a[858]]];for(var z=0;qp(z,f[a[40]]);z++){bc._= f[z];;bf._= qm(bc._[a[1020]]+ a[465],bc._[a[1021]]);;if(S._[bf._]){continue};Ad(bf,S);s._= qV()[a[111]](1,qY()(bc._[a[87]](a[1024]))|| 1);;if(qu(s._,1)){if(qu(s._- 1,1)){bc._[a[69]](a[1024],qn(s._,1))}else {bc._[a[88]](a[1024])}}else {bc._[a[28]]()}}}}};if(qs(m,a[980])&& qs(l,a[622])){var bh=[];for(var T=J._;qp(T,H._);T++){bh[a[39]](ba._[a[1017]][T]);S._= {};;for(var k=0;qp(k,o._);k++){A._= v._[qm(T+ a[465],k)];;if(!A._){continue};var f=A._[a[1025]]|| [A._[a[858]]];for(var z=0;qp(z,f[a[40]]);z++){bc._= f[z];;bf._= qm(bc._[a[1020]]+ a[465],bc._[a[1021]]);;if(S._[bf._]){continue};Ae(bf,S);Z._= qV()[a[111]](1,qY()(bc._[a[87]](a[1023]))|| 1);;if(qu(Z._,1)){if(qu(Z._- 1,1)){bc._[a[69]](a[1023],qn(Z._,1))}else {bc._[a[88]](a[1023])};if(qs(bc._[a[17]],ba._[a[1017]][T])){var Q=ba._[a[1017]][qm(T,1)];if(Q){P._= null;;for(var N=qm(k,1);qp(N,o._);N++){O._= v._[qm((qm(T,1))+ a[465],N)];;if(!O._||  !O._[a[858]] || qh(O._[a[858]][a[17]],Q)){continue};Af(P,O);break};Q[a[16]](bc._,P._)}}}else {bc._[a[28]]()}}}};for(var z=0;qp(z,bh[a[40]]);z++){bh[z][a[28]]()}};if(qs(m,a[980])&& qs(l,a[618])){(1&&E._)(J._,J._)};if(qs(m,a[980])&& qs(l,a[620])){(1&&E._)(H._,qn(H._,1))};if(qs(m,a[980])&& qs(l,a[629])){(1&&D._)(I._,I._)};if(qs(m,a[980])&& qs(l,a[631])){(1&&D._)(G._,qn(G._,1))};if(qs(m,a[980])&& qs(l,a[611])){if(qs(C,B)){if(qs(H._- J._,1)){var K=ba._[a[1031]](H._);var L=C[a[858]][a[992]](false);K[a[70]](L);for(var k=0;qp(k,o._);k++){A._= v._[qm(J._+ a[465],k)];;if(!A._){continue};var f=A._[a[1025]]|| [A._[a[858]]];for(var z=0;qp(z,f[a[40]]);z++){bc._= f[z];;if(qs(bc._,C[a[858]])){continue};if(qh(bc._[a[1021]],k)){continue};bc._[a[69]](a[1023],qm(1,qV()[a[111]](1,qY()(bc._[a[87]](a[1023]))|| 1)))}};return}};for(var bd=0;qp(bd,d._[a[40]]);bd++){bc._= d._[bd];;Z._= qV()[a[111]](1,qY()(bc._[a[87]](a[1023]))|| 1);;if(qs(Z._,1)){continue};bc._[a[88]](a[1023]);for(var z=1;qp(z,Z._);z++){var L=ba._[a[63]][a[13]](bc._[a[9]]);(1&&b._)(bc._,L);var T=qm(bc._[a[1020]],z);var Q=ba._[a[1017]][T];P._= null;;for(var N=bc._[a[1021]];qp(N,o._);N++){O._= v._[qm(T+ a[465],N)];;if(!O._||  !O._[a[858]] || qh(O._[a[858]][a[17]],Q)){continue};Am(P,O);break};Q[a[16]](L,P._)}}};if(qs(m,a[980])&& qs(l,a[612])){if(qs(C,B)){if(qs(G._- I._,1)){var L=C[a[858]][a[992]](false);C[a[858]][a[17]][a[16]](L,C[a[858]][a[391]]);for(var T=0;qp(T,V._);T++){A._= v._[qm(T+ a[465],I._)];;if(!A._){continue};var f=A._[a[1025]]|| [A._[a[858]]];for(var z=0;qp(z,f[a[40]]);z++){bc._= f[z];;if(qs(bc._,C[a[858]])){continue};if(qh(bc._[a[1020]],T)){continue};bc._[a[69]](a[1024],qm(1,qV()[a[111]](1,qY()(bc._[a[87]](a[1024]))|| 1)))}};return}};for(var bd=0;qp(bd,d._[a[40]]);bd++){bc._= d._[bd];;s._= qV()[a[111]](1,qY()(bc._[a[87]](a[1024]))|| 1);;if(qs(s._,1)){continue};bc._[a[88]](a[1024]);for(var z=1;qp(z,s._);z++){var L=ba._[a[63]][a[13]](bc._[a[9]]);(1&&b._)(bc._,L);bc._[a[17]][a[16]](L,bc._[a[391]])}}};if(qs(m,a[980])&& qs(l,a[609])){if(!(1&&g._)()){return qJ()[a[413]](a[1032])};y._= v._[qm(J._+ a[465],I._)][a[858]];;if(!y._){return qJ()[a[413]](a[1033])};y._[a[69]](a[1023],qn(H._,J._));y._[a[69]](a[1024],qn(G._,I._));for(var bd=0;qp(bd,d._[a[40]]);bd++){bc._= d._[bd];;Ao(bc,y)};for(var bd=0;qp(bd,bb[a[40]]);bd++){bc._= bb[bd];;if(!bc._[a[1034]]){continue};if(bc._[a[209]][a[40]]){if(qh(bc._[a[83]][a[9]],a[210])){y._[a[70]](ba._[a[63]][a[13]](a[210]));while(bc._[a[83]]){y._[a[70]](bc._[a[83]])}}};bc._[a[28]]()};(1&&c._)(y._)};if(qs(m,a[980])&& qs(l,a[637])){ba._[a[28]]()}}}function hX(b,d,c){return  function(m,h,j,n,l,k){var t={},f={},v={},s={},g={},o={},r={},u={};t._= m;f._= j;v._= n;s._= l;g._= k;o._= (1&&b._)(t._,a[1035],null,qm(a[1036],f._));;var q=(1&&b._)(o._,a[1037]);var p=(1&&b._)(q,a[1038]);if(h){(1&&d._)(p,h,a[592])};r._= (1&&b._)(q,a[1039]);;Ap(r,v);if(s._){q[a[339]]= hY(c,f,s)};if(g._){(1&&b._)(q,a[1040]);u._= null;;o._[a[353]]= hZ(t,u,o,b,g);o._[a[354]]= ib(t,u)};return o._}}function id(b){return  function(c){(1&&b._)(c,a[1044])}}function ie(c,b){return  function(f,d){var g={};g._= d;(1&&c._)(f,a[1045],a[1046],a[1047]);(1&&c._)(f,a[1045],a[1048],a[1049]);(1&&c._)(f,a[1045],a[1050],a[1051]);(1&&c._)(f,a[1045],a[1052],a[1053]);(1&&c._)(f,a[1045],a[1054],a[1055],null,ig(g,b))}}function ih(g,h,b,c,f,d){return  function(l,j){var m={},n={};var k={};k._= ii(g,m,h);m._= j;n._= k._;(1&&b._)(l,a[393],a[393],a[1058],ij(n));(1&&b._)(l,a[395],a[395],a[1059],ik(n));(1&&b._)(l,a[407],a[407],a[405],il(n));if(qs(m._[a[9]],a[272])){(1&&c._)(l);(1&&b._)(l,a[1003],a[1003],a[1060],im(m,f));(1&&b._)(l,a[22],a[22],a[1061],null,io(m,b))};if((1&&d._)(m._[a[9]])){(1&&c._)(l);(1&&b._)(l,a[1064],a[1064],a[1065],ir(m,f))}}}function is(c,m,k,j,l,f,h,b,o,d,n,g){return  function(){var p={},q={};if((1&&c._)()|| m._){return};(1&&k._)(false);p._= (1&&j._)();;At(p);(1&&l._)(p._);(1&&f._)(false);(1&&h._)();(1&&b._)();Au(o);rb()(it(b,o),10);return;q._= {};;q._[a[340]]= iu(k,j,l,d);Ax(q);(1&&g._)(n._,q._,a[1071])}}function iw(b,c){return  function(g,d,f){var k={},h={},j={};k._= g;h._= f;j._= {};;j._[a[340]]= ix(k,b);Ay(j,h);(1&&c._)(d,j._,a[1071])}}function iy(g,b,f,c,d){return  function(){var j={},h={};j._= (1&&b._)(g._,a[1072]);;j._[a[262]]= iz(j);j._[a[1074]]= iA(j);AC(j);h._= false;;j._[a[353]]= iC(j);j._[a[354]]= iD(h,j);j._[a[339]]= iE(f,j,h,c);d._[a[39]](j._)}}function iG(b,g,c,d,f){return  function(){var k={},p={};var n=(1&&b._)();var h=[];for(var m=n;m&& qh(m,g._);m= m[a[17]]){h[a[39]](m)};h[a[1077]]();while(qp(d._[a[40]],h[a[40]])){(1&&c._)()};var o=false;for(var j=0;qp(j,h[a[40]]);j++){d._[j][a[262]](h[j])};k._= h[qn(h[a[40]],1)];;for(var j=h[a[40]];qp(j,d._[a[40]]);j++){var l=d._[j];p._= l[a[1073]];;if(k._&& p._&& qs(p._[a[17]],k._)&&  !f._[a[1078]]){AF(k,p);l[a[1074]]()}else {l[a[1075]]()}}}}function iH(b){return  function(g){var h={},f={};var d=g;h._= b._;;for(var c=0;qp(c,d[a[40]]);c++){f._= h._[a[209]][d[c]];;if(!f._){break};AG(h,f)};return h._}}function iI(b){return  function(g){var h={},f={};var c=[];if(qs(g,b._)||  !b._[a[123]](g)){return c};h._= b._;;while(h._){for(var d=0;qp(d,h._[a[209]][a[40]]);d++){f._= h._[a[209]][d];;if(qs(f._,g)){c[a[39]](d);return c}else {if(f._[a[123]](g)){c[a[39]](d);AH(h,f);break}}}}}}function iJ(b){return  function(){var c=b._[a[21]];c= c[a[36]](/(\s)__rte_selected_[a-z_]+(\s?)(=\"\")?/g,a[470]);c= c[a[36]](/<([a-z]+)\s+>/ig,a[1079]);return c[a[20]]()}}function iK(){return  function(b){return qm(a[1080],b[a[36]](/\s/g,a[22]))}}function iL(r,o,n,c,b,q,p,k,j,l,d,f,m,g,h){return  function(){var u={};AI(r);try{AJ(o,n);AK(n,o);(1&&c._)(null);(1&&b._)();var t=n._[a[80]];if(!isNaN(t)){q._[a[109]]= t};u._= p._[a[367]](a[369]);;if(u._[a[40]]){AL(k,u);AM(j,u);(1&&l._)(j._);(1&&d._)(true)}else {(1&&f._)()}}finally{r._= false};if(m._){m._[a[89]]= (1&&g._)()};var s=h._[a[100]];if(s){s(a[100])}}}function iM(d,c,f,b){return  function(){(1&&d._)();var g=(1&&c._)();f._= {html:g,time: new (qK())()[a[1082]](),committed:true};f._[a[404]]= (1&&b._)(g)}}function iN(c,b,o,m,p,j,d,u,s,r,k,g,q,f,t,n,h,l){return  function(){var y={},A={},C={},B={},D={};y._= (1&&c._)();;A._= (1&&b._)(y._);;var z=qh(A._,o._[a[404]]);if(z){C._= false;;AN(m,y,C,p);if(C._){qC()((1&&j._)(a[1085]));(1&&d._)();return};B._=  new (qK())()[a[1082]]();;if(o._[a[1086]]|| qu(B._- o._[a[1087]],m._[a[1088]])){AO(o);u._[a[39]](o._);AP(s);AQ(o,y,B)}else {AR(o,y);AS(o,B)};AT(o,A)};if(z|| r._){D._= null;;var v=(1&&k._)();if(qh(v,null)){D._= {type:a[1089],index:(1&&g._)(v)}}else {if(q._[a[239]]){D._= {type:q._[a[284]],anchorIndex:(1&&g._)(q._[a[239]]),anchorOffset:q._[a[312]],focusIndex:(1&&g._)(q._[a[311]]),focusOffset:q._[a[1090]],isCollapsed:q._[a[408]]}}};if(z){(1&&f._)()};AU(o,D);AV(o,t)};if(z){if(n._){n._[a[89]]= (1&&h._)()};var w=l._[a[100]];if(w){w(a[100])}}}}function iO(d,b,c,f,g){return  function(){var m={},n={},n={};m._= d._[a[1091]];;if(!m._){return};if(qs(m._[a[284]],a[1089])){var j=(1&&b._)(m._[a[1092]]);if(j){(1&&c._)(j)}}else {if(qu(m._[a[1093]],m._[a[1094]])|| qu(m._[a[312]],m._[a[1090]])){n._= m._[a[1093]];;AW(m);AX(m,n);n._= m._[a[312]];;AY(m);AZ(m,n)};var h=(1&&b._)(m._[a[1093]]);var k=(1&&b._)(m._[a[1094]]);var l=f._[a[236]]();try{l[a[1056]](h,m._[a[312]]);l[a[1057]](k,m._[a[1090]]);g._[a[207]]();g._[a[310]](l)}catch(x){qJ()[a[413]](x[a[1095]]);qJ()[a[204]](x)}}}}function iP(f,b,c,g,h,d){return  function(){var n=f._[a[1091]];if(n){if(qs(n[a[284]],a[1089])){var k=(1&&b._)(n[a[1092]]);if(k){(1&&c._)(k)}}else {var j=(1&&b._)(n[a[1093]]);var l=(1&&b._)(n[a[1094]]);var m=g._[a[236]]();try{m[a[1056]](j,n[a[312]]);try{m[a[1057]](l,n[a[1090]])}catch(x){qJ()[a[413]](x)};h._[a[207]]();h._[a[310]](m)}catch(x){qJ()[a[413]](x)}}}else {(1&&d._)(false)}}}function iQ(b){return  function(){if(!b._[a[1086]]){b._[a[1086]]= true}}}function iR(c,b,a){return  function(){Ba(c);Bb(b);(1&&a._)()}}function iS(b,g,d,f,c){return  function(){(1&&b._)();qJ()[a[413]](g._);if(!g._[a[40]]){return};f._[a[39]](d._);d._= g._[a[1096]]();(1&&c._)()}}function iT(d,c,f,b){return  function(){if(!d._[a[40]]){return};f._[a[39]](c._);c._= d._[a[1096]]();(1&&b._)()}}function iU(b){return  function(){var m={},g={},k={},n={},h={};var l=(1&&b._)();var c= new (qD())(l[a[40]]);for(var j=0;qp(j,l[a[40]]);j++){c[j]= l[a[48]](j)};var d= new (qG())([ new (rd())(c)],{type:a[186]});m._= re()[a[49]](d);;g._= qL()[a[13]](a[12]);;Bc(g,m);k._= g._[a[5]](a[845]);;var f= new (qK())();n._= rc()(qm(ql(f[a[1099]](),10000)+ ql((qm(f[a[1100]](),1)),100),f[a[1101]]()))[a[42]](2);;h._= rc()(qm(qm(1000000,f[a[1102]]()* 10000)+ ql(f[a[1103]](),100),f[a[1104]]()))[a[42]](1);;Bd(k,n,h);k._[a[101]]()}}function iV(d,b,c){return  function(){var f={};f._= (1&&b._)(d._,a[65],a[1108]);;Be(f);f._[a[300]]= iW(f,c);f._[a[69]](a[812],a[186]);f._[a[101]]();rb()(iY(f,d),1500)}}function iZ(a,b){return  function(c){if(c){(1&&a._)()};return b._}}function ja(b){return  function(){if(qs(b._[a[311]],b._[a[239]])){var c=b._[a[311]];if(qs(c,null)){return};switch(c[a[9]]){case a[261]:;case a[283]:return c};if(qs(b._[a[1090]]- b._[a[312]],1)){var d=c[a[209]][b._[a[312]]];if(d){switch(d[a[9]]){case a[261]:;case a[283]:return d}}}}}}function jb(a){return  function(){return a._}}function jc(b){return  function(){if(b._[a[408]]){return null};return b._[a[382]]()}}function jd(b,c){return  function(g,d){var f={};g= g[a[107]]();f._= (1&&b._)();;while(f._&& qh(f._,c._)){if(qs(f._[a[9]],g)&& (!d|| d(f._))){return f._};Bf(f)};if(qs(f._,c._)){return null}}}function je(b,d,f,g,c){return  function(){var h={},k={};if(qh(b._,null)){return b._};h._= d._[a[239]];;if(!h._){return null};if(d._[a[408]]){k._= h._;;Bg(k);if(k._){if(qs(k._[a[9]],a[104])|| qs(k._[a[9]],a[105])){return k._}}};if(!d._[a[408]]){h._= (1&&f._)(h._,d._[a[312]]);var j=d._[a[311]];j= (1&&g._)(j,d._[a[1090]]);while(qh(j,h._)){if(qs(h._,c._)||  !h._){return null};if(!h._[a[17]]){break};Bh(h);if(h._[a[123]](j)){break}}};Bi(h);if(qs(h._,c._)){return null};return h._}}function jf(){return  function(b){if(qs(b[a[234]],3)){return b[a[82]][a[40]]};if(qs(b[a[234]],1)){return b[a[209]][a[40]]};return 0}}function jg(d,c,b){return  function(g,h){if(!g){return null};var f=(1&&d._)(g);if(qp(f,h)){return g};if(qu(f,h)){if(qs(g[a[234]],1)){return (1&&c._)(g[a[209]][h],0)};return g};if(g[a[391]]){return (1&&c._)(g[a[391]],0)};var j=g[a[17]];if(qs(g[a[17]],b._)){return g};return (1&&c._)(j,j[a[209]][a[40]])}}function jh(d,c,b){return  function(g,h){if(!g){return null};if(qt(h,undefined)){h= (1&&d._)(g)};if(qh(h,0)){if(qs(g[a[234]],1)){var f=g[a[209]][qn(h,1)];return (1&&c._)(f)};return g};if(g[a[989]]){return (1&&c._)(g[a[989]])};if(qs(g[a[17]],b._)){return g};return (1&&c._)(g[a[17]],0)}}function ji(){return  function(b){var c=b[a[17]];while(b[a[83]]){c[a[16]](b[a[83]],b)};b[a[28]]()}}function jj(a){return  function(){(1&&a._)()}}function jk(b){return  function(){var c={},l={},j={};var d={};d._= jl(c);var k=(1&&b._)();var g=k[a[228]]&& k[a[228]][a[17]];var h=k[a[1112]]&& k[a[1112]][a[17]];var f=k[a[1113]]();if(k[a[1114]]&& k[a[228]]){c._= k[a[228]];;(1&&d._)(g);(1&&d._)(h);while(qs(c._[a[209]][a[40]],0)){l._= false;;switch(c._[a[9]]){case a[321]:;case a[322]:Bk(l);break;case a[314]:;case a[290]:Bl(c);k[a[237]](c._);k[a[414]](true);break};if(!l._){break};j._= c._[a[17]];;j._[a[29]](c._);Bm(c,j);qJ()[a[413]](j._[a[1116]])}};return f}}function jm(){return  function(d){var b=d[a[17]][a[209]];for(var c=0;qp(c,b[a[40]]);c++){if(qs(b[c],d)){return c}};return rg(1)}}function jn(){return  function(c,g){var f={},h={};f._= c;if(qs(f._,g)){return 0};if(f._[a[123]](g)){return 1};if(g[a[123]](f._)){return rg(1)};h._= f._[a[17]];for(;h._;h._= h._[a[17]]){if(!h._[a[123]](g)){Bn(f,h);continue};for(var b=0;qp(b,h._[a[209]][a[40]]);b++){var d=h._[a[209]][b];if(qs(d,f._)){return 1};if(d[a[123]](g)){return rg(1)}};break};return 1;return rg(1)}}function jo(a,c,b,d){return  function(f,h,g,j){var k={},m={},l={},n={};k._= f;m._= h;l._= g;n._= j;Bo(a,k);Bp(c,m);Bq(b,l);Br(d,n)}}function jp(a,b){return  function(d,c){var g={},f={};g._= d;f._= c;Bs(a,g,f);Bt(b,g,f)}}function jq(a){return  function(b){(1&&a._)(b)}}function jr(b,d,c,f){return  function(h){var j={},k={};var g={};g._= js(k,j);j._= h;k._= j._[a[17]];;if(qs(k._,b._)){d._= (1&&g._)(d._)};if(qs(k._,c._)){f._= (1&&g._)(f._)}}}function jt(b,d,g,c,f){return  function(){g._[a[985]](b._,d._);g._[a[986]](c._,f._)}}function ju(g,d,f,k,n,b,c,m,l,h,j){return  function(u,w,r){var s={},y={},A={},z={},B={},G={},o={},q={},H={};var C={};var v={};C._= jv(y,z,A,B,b);v._= jw(z,B,s,H,c);s._= u;H._= v._;if(g._){var F=(1&&k._)(a[280],a[281],(1&&d._)(g._),g._,f._|| g._);if(F&& qu(F[a[40]],1)){for(var E=0;qp(E,F[a[40]]);E++){var D=F[E];var p=D[a[209]];for(var t=0;qp(t,p[a[40]]);t++){(1&&s._)(p[t])}};return}};if(n._[a[408]]){return};y._= n._[a[239]];;A._= n._[a[312]];;z._= n._[a[311]];;B._= n._[a[1090]];;;o._= (1&&C._)();;if(w){qJ()[a[413]](o._,y._,A._,z._,B._)};Bu(o,G,y,z,A,B);q._= false;;if(qs(y._[a[234]],3)){if(qs(A._,0)||  !w){A._= (1&&c._)(y._);Bv(y)}else {if(qv(A._,y._[a[82]][a[40]])){A._= qm((1&&c._)(y._),1);Bw(y)}else {G._= m._[a[1117]](y._[a[82]][a[42]](0,A._));y._[a[82]]= y._[a[82]][a[42]](A._);y._[a[17]][a[16]](G._,y._);Bx(z,y,B,A);A._= (1&&c._)(y._);By(y);Bz(q)}}};if(qs(z._[a[234]],3)){if(qs(B._,0)){B._= (1&&c._)(z._);BA(z)}else {if(qv(B._,z._[a[82]][a[40]])||  !w){B._= qm((1&&c._)(z._),1);BB(z)}else {G._= m._[a[1117]](z._[a[82]][a[42]](0,B._));z._[a[82]]= z._[a[82]][a[42]](B._);z._[a[17]][a[16]](G._,z._);B._= qm((1&&c._)(G._),1);BC(z);BD(q)}}};if(qh(y._,l._)&& qs(A._,0)){A._= (1&&c._)(y._);BE(y)};if(qh(z._,l._)&& qs(B._,z._[a[209]][a[40]])){B._= qm((1&&c._)(z._),1);BF(z)};(1&&h._)(y._,A._,z._,B._);(1&&H._)(y._,A._);if(qh(r,null)){r()};if(q._|| w){(1&&j._)()}}}function jx(a){return  function(c){var b={},f={};var d={};d._= jy(b,f);b._= c;f._= d._;(1&&a._)(jz(f,b),true)}}function jA(a){return  function(b){var f={},c={};var d={};d._= jB(f,a,c);c._= d._;f._= [];;(1&&c._)(b);return f._}}function jC(a,b){return  function(m,n,k,l,o){var h={},j={},f={},g={},q={},p={},c={};var d={};d._= jD(p,c,a,h,q,j,g,f);h._= m;j._= n;f._= k;g._= l;q._= o;p._= [];;c._= [];;(1&&b._)(jF(c,p),true,d._)}}function jG(c,b){return  function(h){var m={},g={};m._= [];;g._= [];;(1&&c._)(jH(g,m),false);var d=true;for(var f=0;d&& qp(f,m._[a[40]]);f++){var n=m._[f];if(n[a[82]][a[20]]()){d= false}};for(var f=0;d&& qp(f,g._[a[40]]);f++){var l=(1&&b._)(g._[f]);for(var j=0;d&& qp(j,l[a[40]]);j++){var k=l[j];if(qs(k[a[234]],3)||  !h(k)){d= false}}};return d}}function jI(a){return  function(d){var b={};var c={};c._= jJ(b);b._= d;return (1&&a._)(c._)}}function jK(b,a,d,c){return  function(l){var f={},k={};var j={};var m={};var g={};var h={};j._= jL(f);m._= jM(f,k,b,a);g._= jN(k,f);h._= jO(d,f);f._= l;k._= m._;(1&&c._)(j._,k._,g._,h._)}}function jP(f,d,a,b,c){return  function(){var k={};var j={};var l={};var g={};var h={};j._= jQ();l._= jR(f,d,a,b);g._= jS(k);h._= jT();k._= l._;(1&&c._)(j._,k._,g._,h._,true)}}function jU(a){return  function(h,c,d,g){var f={},j={};var b={};b._= jV(f,j);f._= c;j._= d;return (1&&a._)(b._)}}function jW(b,a,d,c){return  function(m,l,n,p){var q={},o={},r={},j={};var h={};var k={};var f={};var g={};h._= jX(o,r);k._= jY(o,j,b,a);f._= jZ(j,o,q,r);g._= ka(d,o,r,q);q._= m;o._= l;r._= n;j._= k._;(1&&c._)(h._,j._,f._,g._)}}function kb(m,d,f,l,b,j,h,k,g,c){return  function(p){var r={},n={},s={},o={};var q={};q._= kc(m,n,d,r,f,l,b,j,h,k);r._= p;s._= q._;if(!r._){return};r._= r._[a[107]]();n._= [];;o._= true;;(1&&g._)(kf(n),true,kg(o,s));if(o._){(1&&c._)(a[987],r._)}}}function kh(f,a,h,b,g,d,j,c){return  function(m){var l={},k={};var n={};n._= kj(k,l,a,h,b,g,d,j);l._= m;k._= [];;(1&&f._)(ki(k),false);if((1&&n._)()){return};(1&&c._)(l._)}}function km(c,f,g,d,b,h){return  function(n){var l={};var j=c._[a[289]];if(qs(j[a[58]](),a[379])){j= a[12]};var k=f._[a[13]](n|| j);l._= g._[a[311]]|| g._[a[239]];;if(!l._|| qs(l._,d._)){d._[a[70]](k);return k};var m=(1&&b._)(l._);if(m){m[a[17]][a[16]](k,m[a[391]]);return k};Cj(l,d);while(l._[a[391]]){if(qs(l._[a[391]][a[234]],1)){if(qh(h._[a[329]](l._[a[391]])[a[18]],a[330])){break}};Ck(l)};qJ()[a[413]](m,l._);l._[a[17]][a[16]](k,l._[a[391]]);return k}}function kn(c,f,b,d){return  function(g){var j=(1&&c._)();if(qh(j,null)){j[a[17]][a[16]](g,j);g[a[70]](j)}else {var h;if(!f._[a[408]]){try{h= (1&&b._)()}catch(x){}};var g=(1&&d._)(g);if(h){g[a[70]](h)}};return g}}function ko(c,b){return  function(d){return (1&&b._)(c._[a[13]](d))}}function kp(f,b,d,c){return  function(g){if(!f._[a[408]]){(1&&b._)()};if(!d._[a[50]]){d._[a[70]](g);return g};var h=(1&&c._)();h[a[1122]](g);return g}}function kq(c,b){return  function(d){return (1&&b._)(c._[a[13]](d))}}function kr(h,b,g,f,c,d){return  function(k){if(!h._[a[408]]){(1&&b._)()};var l=g._[a[1117]](k);if(!f._[a[50]]){f._[a[70]](l);(1&&c._)();return};qJ()[a[413]](qm(a[1123],k));var j=(1&&d._)();j[a[1122]](l)}}function ks(k,b,h,f,d,g,j,c){return  function(q){var o={},l={},m={};o._= q;if(!k._[a[408]]){(1&&b._)()};if(!h._[a[50]]){var s=h._[a[367]](a[1118]);;for(var p=0;qp(p,s[a[40]]);p++){switch(s[p][a[9]]){case a[314]:;case a[290]:;case a[286]:break;default:Cl(l);break}};if(l._){(1&&f._)(o._);(1&&d._)();return}};var t=(1&&g._)();m._= j._[a[13]](a[1124]);;Cm(m,o);t[a[1122]](m._);var n=m._[a[83]];var r=m._[a[1121]];(1&&c._)(m._);t[a[1125]](n);t[a[1126]](r)}}function kt(){return  function(a){}}function ku(d,b,f,g,j,c,h){return  function(p){var l={},k={},o={},n={};l._= p;qJ()[a[413]](l._);if(qs(l._[a[284]][a[42]](0,6),a[1127])){k._= (1&&d._)(a[12]);;Cn(k);o._= (1&&b._)(k._,a[469],a[1128]);;(1&&f._)(o._);n._=  new (qP())();;n._[a[1129]](l._);n._[a[1110]]= kv(o,n,g,j,l)}else {var m=j._[a[444]]|| rf()[a[445]];if(!m){qC()(a[1132]);return};m(l._,kx(c,h,l,g))}}}function ky(a){return  function(){a._= null}}function kz(b,d,c){return  function(f){var g={};g._= f;Cr(b,g);d._[a[207]]();(1&&c._)()}}function kA(b,c){return  function(d){var f=b._[a[236]]();f[a[237]](d);c._[a[207]]();c._[a[310]](f)}}function kB(d,b,c){return  function(f){if(qs(d._[a[212]],0)){return (1&&b._)(false)};if(d._[a[408]]){return};var g=(1&&c._)();g[a[414]](f)}}function kC(c,b,d){return  function(g){var f=c._[a[236]]();f[a[237]](b._);if(qt(g,true)|| qt(g,false)){f[a[414]](g)};d._[a[207]]();d._[a[310]](f)}}function kD(c,b){return  function(d){var f=d[a[17]];f[a[29]](d);if(qs(f,c._)){return};if(qs(f[a[209]][a[40]],0)){(1&&b._)(f)}}}function kE(d,g,f,c,b){return  function(){var j=(1&&d._)();if(j){g._[a[207]]();var h=f._[a[236]]();h[a[1012]](j);h[a[414]](true);g._[a[310]](h);(1&&c._)(j);return};if(g._[a[408]]){return};(1&&b._)()}}function kF(c,b,d){return  function(j,f,g){var h={},l={},k={};h._= f;l._= g;if(qs(j,a[1133])){k._= c._[a[5]](qm(a[1134],h._));;if(!k._){k._= (1&&b._)(c._[a[196]],a[15]);Cs(k,h)};Ct(k,l)}else {d._[h._]= l._}}}function kG(b){return  function(c){(1&&b._)(a[1133],a[1137],c)}}function kH(b){return  function(c){(1&&b._)(a[963],a[1137],c)}}function Cu(b){b._[a[40]]= 3}function kI(b,d,c){return  function(g){var h={};var f={};f._= kJ(b,d,h,c);;Cv(h);g= g[a[36]](/(\ssrc|\shref)='([^']+)'/g,f._);Cw(h);g= g[a[36]](/(\ssrc|\shref)="([^"]+)"/g,f._);return g}}function kK(b,d,c){return  function(g){var h={};var f={};f._= kL(b,d,h,c);;Cx(h);g= g[a[36]](/(\ssrc|\shref)='([^']+)'/g,f._);Cy(h);g= g[a[36]](/(\ssrc|\shref)="([^"]+)"/g,f._);return g}}function kM(j,d,c,b,h,f,g){return  function(){var k={},n={};var p={};p._= kN(n,k,d);k._= j._[a[209]];;n._= k._[a[40]];;for(;n._;n._--){if((1&&p._)()){break}};var l=[];for(var m=0;qp(m,n._);m++){var o=k._[m];if(qs(o[a[234]],1)){l[a[39]](o[a[1116]])}else {l[a[39]]((1&&c._)(o[a[82]]))}};var l=(1&&b._)(l[a[108]](a[1140])[a[36]](/(\s)__rte_selected_[a-z_]+(\s?)(=\"\")?/g,a[470]));var q=h._[a[1141]]|| a[22];switch(q[a[58]]()){case a[1142]:l= (1&&f._)(l);break;case a[1143]:l= (1&&g._)(l);break;case a[1144]:;default:break};return l}}function kO(b){return  function(){var d=b._[a[367]](a[1145]);var c=[];for(var f=0;qp(f,d[a[40]]);f++){var g=d[f];if(g[a[1146]]()|| qu(g[a[26]],12)){continue};c[a[39]](g)};for(var f=0;qp(f,c[a[40]]);f++){c[f][a[21]]= a[1067]}}}function kP(f,b,c,d){return  function(g){f._[a[21]]= (1&&b._)(g);(1&&c._)();(1&&d._)()}}function Cz(c,b){c._[a[1147]]= b._}function CA(c,b){c._[a[1148]]= b._}function CB(c,b){c._[a[1149]]= b._}function CC(c,b){c._[a[1150]]= b._}function kQ(a){return  function(){return a._}}function CD(c,b){c._[a[1151]]= b._}function CE(c,b){c._[a[1152]]= b._}function CF(c,b){c._[a[227]]= b._}function CG(c,b){c._[a[97]]= b._}function kR(a){return  function(){return a._}}function CH(c,b){c._[a[1154]]= b._}function kS(b){return  function(){return b._[a[50]]}}function CI(c,b){c._[a[1157]]= c._[a[1158]]= kT(a,b)}function CJ(c,b){c._[a[1159]]= c._[a[1160]]= b._}function CK(c,b){c._[a[1161]]= c._[a[1162]]= b._}function kU(a){return  function(){return !!a._}}function kV(d,f,a,c,b){return  function(h){var g={};g._= h;CL(g);if(qs((!!d._),(!!g._))){return};CM(d,g);CN(f,d);(1&&a._)();(1&&c._)();CO(b,d)}}function CP(c,b){c._[a[1167]]= b._}function CQ(c,b){c._[a[1168]]= b._}function CR(c,b){c._[a[1169]]= b._}function CS(c,b){c._[a[1170]]= b._}function CT(c,b){c._[a[1171]]= b._}function CU(c,b){c._[a[1172]]= b._}function CV(c,b){c._[a[1173]]= b._}function CW(c,b){c._[a[1174]]= b._}function CX(c,b){c._[a[1175]]= b._}function CY(c,b){c._[a[1176]]= b._}function kW(b){return  function(d){var f={},c={};f._= d;c._= (1&&b._)(a[261]);;CZ(c,f)}}function Da(c,b){c._[a[1178]]= b._}function Db(c,b){c._[a[1179]]= b._}function Dc(c,b){c._[a[414]]= b._}function Dd(c,b){c._[a[407]]= b._}function De(c,b){c._[a[1180]]= b._}function Df(c,b){c._[a[1181]]= b._}function Dg(c,b){c._[a[1182]]= b._}function Dh(c,b){c._[a[1183]]= b._}function Di(c,b){c._[a[1184]]= b._}function Dj(c,b){c._[a[1185]]= b._}function Dk(c,b){c._[a[1186]]= b._}function Dl(c,b){c._[a[1187]]= b._}function Dm(c,b){c._[a[1188]]= b._}function Dn(c,b){c._[a[1189]]= b._}function Do(c,b){c._[a[1190]]= b._}function Dp(c,b){c._[a[1191]]= b._}function Dq(c,b){c._[a[1192]]= b._}function Dr(c,b){c._[a[1193]]= b._}function Ds(c,b){c._[a[1194]]= b._}function kX(b,c){return  function(){for(var d=0;qp(d,b._[a[40]]);d++){var f=b._[d];if(f[a[1195]]){f[a[1195]](c._)}}}}function kY(b){return  function(){return qr(rf()[a[1196]],b._[a[1197]])}}function kZ(d,j,f,c,h,g,b){return  function(l){if((1&&d._)()){if(!j._[a[1198]]){var k=f._[qm(a[1199],f._[a[1200]])];if(k){(1&&c._)(k,j._)}else {qJ()[a[204]](qm(a[1201]+ a[1199],f._[a[1200]]))};Dt(j)};Du(h);Dv(j);g._[a[93]][a[92]](a[1202]);g._[a[93]][a[28]](a[1203])}else {if(!h._[a[1198]]){var k=f._[qm(a[1199],f._[a[141]])];if(k){(1&&c._)(k,h._)}else {qJ()[a[204]](qm(a[1201]+ a[1199],f._[a[141]]))};Dw(h)};Dx(h);Dy(j);g._[a[93]][a[92]](a[1203]);g._[a[93]][a[28]](a[1202])};if(l){(1&&b._)()}}}function la(b,g,c,f,d){return  function(){var h=(1&&b._)(a[272]);if(!h){return};var o=g._[a[206]]();var j=o[a[239]];var k=o[a[312]];var l=o[a[311]];var m=o[a[1090]];(1&&c._)(h);var n=f._[a[236]]();if(d._[a[123]](j)){n[a[1056]](j,k)};if(qh(l,null)&& d._[a[123]](l)&& (qh(l,j)|| qh(m,k))){n[a[1057]](l,m)};o[a[207]]();o[a[310]](n)}}function lb(b){return  function(h){var n={},m={},g={},l={},j={},f={},d={},c={};var k={};k._= lc(d,g,l,j,f);c._= k._;n._= (1&&b._)(h,a[1204]);;m._= (1&&b._)(n._,a[1205]);;g._= [];;l._= [];;j._= [];;f._= [];;d._= rg(1);;n._[a[713]]= ld(m,b,n,g,l,j,f,c);return n._}}function lf(){return  function(f,b,c,a){var d={};d._= {};;DD(d);return d._}}function lh(c,d,g,b,f){return  function(){var k={};var h=(1&&d._)((1&&c._)(a[1209]),a[1210]);var l=qp(g._[a[79]],500)?320:640;var j=qo(l* 3,4);k._= (1&&b._)(h,a[183],qm(qm(a[1211]+ l,a[1212])+ j,a[1213]));;DE(k,f,g)}}function li(l,g,k,c,j,b,h,f,d){return  function(q){var m={},n={},p={},t={};m._= q;if(qs(m._,a[435])&& qh(l._,a[1216])){var s;try{s= qW()[a[1218]][a[1217]]()}catch(x){};if(s){s[a[428]](lj(l,m,g),lk(l,m,k));return}};n._= (1&&j._)((1&&c._)(m._),qm(a[1222],m._));;var o=(1&&b._)(n._,a[12],a[923]);var r=(1&&b._)(o,a[12],a[22],a[1223]);r[a[50]]= (1&&c._)(a[1224]);p._= (1&&b._)(o,a[12],a[1225],a[1226]);;p._[a[69]](a[1227],a[970]);rb()(ll(p),100);t._= qs(m._,a[1002])|| qs(m._,a[437]);;p._[a[1228]]= lm(t,m,h,n,p,f,d)}}function lp(g,b,c,f,d){return  function(l){var k={},j={},j={};k._= l;if(qs(k._[a[9]],a[261])){if(qh(k._[a[17]][a[9]],a[1229])){j._= k._[a[17]][a[16]](g._[a[13]](a[1229]),k._);;j._[a[70]](k._);DH(j);var h=(1&&b._)(j._,a[1231]);h[a[50]]= (1&&c._)(a[1232]);(1&&f._)(h);return};DI(k)};if(qs(k._[a[9]],a[1229])){j._= k._;;var h=k._[a[5]](a[1231]);if(qs(h,null)){h= (1&&b._)(j._,a[1231]);h[a[50]]= (1&&c._)(a[1232]);(1&&f._)(h);return}else {h[a[17]][a[29]](h);(1&&d._)(j._)}}}}function lq(c,b){return  function(h){var k={},j={},g={};k._= h;var d=(1&&c._)(a[1233],a[1234]);var f=(1&&b._)(d,a[12],a[160]);j._= (1&&b._)(f,a[654],a[1235]);;DJ(j);g._= (1&&b._)(f,a[65],a[898]);;DK(g);g._[a[89]]= k._[a[87]](a[738]);g._[a[300]]= lr(g,k)}}function ls(c,b){return  function(g){var d=(1&&c._)(qs(g,a[568])?a[1236]:a[1237],a[1238]);var f=(1&&b._)(d,a[12],a[1239])}}function lt(b){return  function(){(1&&b._)(a[568])}}function lu(c,g,b,j,d,h,f,l,k){return  function(t,u){var o={},r={},p={},v={},s={},m={},n={};o._= t;r._= u;p._= (1&&g._)((1&&c._)(a[1240]),a[1241]);;p._[a[93]][a[92]](a[1241]);var w=(1&&b._)(p._,a[12],a[1239]);var q=(1&&b._)(p._,a[1242],a[22],a[646]);v._= (1&&b._)(q,a[647],a[644]);;v._[a[50]]= qm((1&&c._)(o._),a[465]);s._= (1&&b._)(q,a[65],a[1243]);;DL(s);s._[a[300]]= s._[a[1244]]= s._[a[1245]]= s._[a[1228]]= lv(o,s,v);(1&&j._)(s._,a[22]);m._= (1&&b._)(q,a[667],a[22],a[1246]);;n._= null;;m._[a[50]]= (1&&c._)(a[1247]);m._[a[339]]= lx(s,r,n,p);rb()(ly(s),10);(1&&d._)(s._,lz(m));var y=(1&&h._)(w);y[a[713]]((1&&c._)(a[1248]),a[1249],lA(p,r));y[a[713]]((1&&c._)(a[1260]),a[1261],lF(b,c,f,p,r));y[a[713]]((1&&c._)(a[968]),a[1545],lH(l,n,p,r,s,b,k))}}function lM(c,b,f,d){return  function(k){var g=(1&&c._)(k[a[9]],a[1241]);g[a[93]][a[92]](a[1241]);var h=(1&&b._)(g,a[12],a[1239]);var j=(1&&f._)(h);(1&&d._)(j,k)}}function lN(j,g,h,b,k,c,f,d){return  function(){var o={},p={},l={},m={};var q={};q._= lO(p,b,k,j,c);l._= q._;o._= (1&&g._)(j._[a[1550]],a[1551]);;var r=(1&&h._)(o._);p._= null;;r[a[713]](j._[a[1562]],null,null,lQ(l));r[a[713]](j._[a[1563]],null,null,lR(l));r[a[713]](j._[a[1565]],null,null,lS(l));var n=(1&&b._)(r,a[514],a[1567]);(1&&f._)(n,a[964]);n[a[69]](a[1568],(1&&d._)(a[964]));n[a[339]]= lT(p);m._= (1&&b._)(r,a[514],a[1569]);;(1&&f._)(m._,a[960]);m._[a[69]](a[1568],(1&&d._)(a[563]));m._[a[339]]= lU(o,m,f)}}function lV(b){return  function(){if(b._&& qp( new (qK())()[a[1082]]()- b._,300)){return true}}}function lW(f,h,g,b,c,d,j){return  function(w,t,u){var B={},l={},p={},o={},r={},n={},m={},k={},y={},A={},z={},C={},D={};var s={};var v={};s._= lX(m,o,h,y,c,p,n);v._= lY(k);B._= w;l._= t;p._= u;k._= s._;y._= v._;f._=  new (qK())()[a[1082]]();;r._= false;;Ej(l,r);if(r._){o._= (1&&b._)(h._,a[1574],qm(a[1575],g._[a[1576]]),l._)}else {o._= (1&&b._)(h._,a[1577],qm(a[1575],g._[a[1576]]),l._)};Ek(r);n._= (1&&b._)(o._,a[901]);;n._[a[97]]();m._= false;;qL()[a[98]](a[134],y._);rb()(lZ(),100);var q=(1&&b._)(n._,a[896]);A._= (1&&b._)(q,a[897],a[898]);;Em(A,B);z._= (1&&b._)(n._,a[1578],a[22]);;En(g,z);z._[a[180]]= ma(k);Eo(z,k);z._[a[69]](g._[a[86]],(1&&d._)(a[132]));C._= 0;;D._= 0;;q[a[180]]= mb(z,C,D,r,o,n,j);Es(n,k);return n._}}function Et($rte){rf()[a[1584]]= $rte._}function Eu($rte){$rte._[a[1585]]= md()}function me(){return  function(){return a[1586]}}function mf(){return  function(){}}function mg(){return  function(b){var a={},c={};a._= b;c._= this;;return mh(c,a)}}function mi(){return  function(c){var h={},b={},f={},g={};var d={};d._= mk();f._= d._;h._= mj();;h._[a[1587]]= this[a[1587]];b._= this[a[1]];;Ev(f,b);g._=  new f._();;Ew(g,h);Ex(h,g);Ey(h,b);c[a[135]](g._,[b._,g._]);return h._}}function ml(){return  function(c,g){var b={},d={},f={};b._= c;d._= 0;;f._= qL()[a[13]](a[290]);;f._[a[69]](a[1227],a[970]);this[a[1588]]= mm(d,b);this[a[1594]]= mn();this[a[1596]]= mo(f);this[a[1600]]= mp();this[a[1603]]= mq(d);this[a[1604]]= mr()}}function ms(){return  function(c,d){var b={};b._= c;this[a[1588]]= mt(b);this[a[1613]]= mu();this[a[1614]]= mv();this[a[1615]]= mw();this[a[1616]]= mx();this[a[1617]]= my();this[a[1618]]= mz();this[a[1619]]= mA();this[a[1620]]= mB();this[a[1621]]= mC()}}function mD($rte){return  function(g,h){var d={},c={};var f={};f._= mE();d._= g;c._= f._;this[a[1588]]= mF(d);this[a[1628]]= mG();this[a[1629]]= mH();this[a[1630]]= mI();this[a[1631]]= mJ();this[a[1635]]= mK();this[a[1637]]= mL();this[a[1640]]= mM();this[a[1641]]= mN();this[a[1642]]= mO();this[a[1643]]= mP();this[a[1645]]= mQ();this[a[1646]]= mR();this[a[1644]]= mS();this[a[1650]]= mT();this[a[1652]]= mU();this[a[1653]]= mV();this[a[1654]]= mW();this[a[1634]]= mX();this[a[1655]]= mY($rte);this[a[1656]]= mZ();this[a[1657]]= na();this[a[1658]]= nb();this[a[1659]]= nc(c);this[a[1660]]= nd(c);this[a[1661]]= ne(c);this[a[1621]]= nf();this[a[1662]]= ng();this[a[1663]]= nh();this[a[1664]]= ni();this[a[1665]]= nj();this[a[1666]]= nk();this[a[1613]]= nl();this[a[1667]]= nm();this[a[1669]]= this[a[1667]];this[a[1670]]= nn();this[a[1671]]= no();this[a[1672]]= np();this[a[1673]]= nq();this[a[1674]]= nr();this[a[1699]]= ns();this[a[1703]]= nt();this[a[1704]]= this[a[1703]];this[a[1705]]= nu();this[a[1706]]= nv();this[a[1709]]= nw();this[a[1711]]= nx();this[a[1712]]= ny();this[a[1614]]= nz();this[a[1615]]= nA();this[a[1713]]= nB();this[a[1714]]= nC();this[a[1715]]= nD();this[a[1716]]= nE();this[a[1717]]= nF();this[a[1718]]= this[a[1660]];this[a[1719]]= this[a[1661]];this[a[1720]]= this[a[1650]];this[a[1721]]= this[a[1655]];this[a[1722]]= this[a[1634]];this[a[1723]]= this[a[1652]];this[a[1724]]= this[a[1653]];this[a[1725]]= this[a[1654]];this[a[1726]]= this[a[1657]];this[a[1727]]= nG();this[a[1728]]= nH();this[a[1730]]= nI();this[a[1731]]= this[a[1728]];this[a[1732]]= this[a[1730]]}}function nJ(){return  function(c,d){var b={};b._= c;this[a[1588]]= nK(b);this[a[1662]]= nL();this[a[1663]]= nM();this[a[1620]]= nN();this[a[1666]]= nO();this[a[1613]]= nP()}}function nQ(){return  function(c,d){var b={};b._= c;this[a[1588]]= nR(b);this[a[1662]]= nS();this[a[1663]]= nT();this[a[1620]]= nU();this[a[1666]]= nV();this[a[1613]]= nW()}}function nX(b){return  function(d,l){var c={},j={},h={},k={};var g={};var f={};g._= nY();f._= nZ(b);c._= d;j._= g._;h._= f._;this[a[1588]]= oa(c);k._= /[\u00A0-\u00FF\u0192\u0391-\u03D6\u2002-\u2666]/g;;this[a[1628]]= ob(k);this[a[1629]]= oc(k);this[a[1662]]= oe(j);this[a[1663]]= og();this[a[1620]]= oh(h);this[a[1741]]= oi();this[a[1742]]= oj();this[a[1743]]= ok();this[a[1670]]= ol();this[a[1671]]= om();this[a[1672]]= on();this[a[1744]]= oo();this[a[1613]]= op();this[a[1746]]= oq();this[a[1747]]= or();this[a[1748]]= os()}}function ot(){return  function(c,d){var b={};b._= c;this[a[1588]]= ou(b);this[a[1754]]= ov();this[a[1755]]= ow();this[a[1756]]= ox();this[a[1757]]= oy();this[a[1758]]= oz();this[a[1759]]= oA();this[a[1662]]= oB();this[a[1663]]= oC();this[a[1613]]= oD();this[a[1764]]= oE();this[a[1666]]= oF();this[a[1765]]= oG()}}function oH(b){return  function(d,f){var c={};c._= d;this[a[1588]]= oI(c);this[a[1666]]= oJ();this[a[1663]]= oK(b,c);this[a[1767]]= oL()}}function oM($rte){return  function(d,f){var c={};c._= d;this[a[1588]]= oN(c);this[a[1666]]= oO();this[a[1769]]= oP();this[a[1770]]= oQ();this[a[1771]]= oR();this[a[1772]]= oS();this[a[1773]]= oT();this[a[1774]]= oU();this[a[1775]]= oV();this[a[1776]]= oW();this[a[1636]]= oX();this[a[1777]]= oY($rte);this[a[1778]]= this[a[1638]]= oZ();this[a[1635]]= pa();this[a[1757]]= pb();this[a[1756]]= pc();this[a[1782]]= pd();this[a[1783]]= pe();this[a[1613]]= pf(c);this[a[1784]]= pg();this[a[1785]]= ph();this[a[1786]]= pi();this[a[1787]]= pj();this[a[1788]]= pk();this[a[1789]]= pl();this[a[1663]]= pm();this[a[1767]]= pn($rte)}}function po(){return  function(b,c){this[a[1712]]= pp()}}function pq(){return  function(c,d){var b={};b._= c;this[a[1588]]= pr(b);this[a[1621]]= ps(b)}}function pt(){return  function(c,d){var b={};b._= c;this[a[1588]]= pu(b)}}function pv(){return  function(b,c){this[a[1666]]= pw()}}function px(config,__HtmlDecode,$rte){return  function(t){var n={},g={},m={},S={},H={},o={},l={},f={},J={},L={},M={},P={},O={},q={},I={},h={},R={},K={},N={},Q={},r={};var s={};var y={};var A={};var B={};var E={};var D={};var u={};var w={};var G={};var z={};var C={};var F={};var k={};var v={};s._= pA(config,l,H,S);y._= pB(__HtmlDecode);A._= pC($rte,H,f);B._= pD($rte,f);E._= pE($rte,f);D._= pF();u._= pG();w._= pH(O,q,config,$rte,J,m,h,R);G._= pJ();z._= pK(I,$rte,f,config,g);C._= pL(H);F._= pM(O,M,K,N);k._= pN(n,L,P,M,Q,o,r);v._= pO();n._= t;f._= s._;J._= y._;L._= A._;M._= B._;P._= E._;O._= D._;q._= u._;I._= w._;R._= G._;K._= z._;N._= C._;Q._= F._;r._= v._;g._= {};;n._= rc()(n._)[a[36]](/^\s+/,a[22]);m._= config._[a[1805]];;S._= [];;H._= null;;o._= n._[a[58]]();;l._= null;;if(config._[a[1806]]&& config._[a[1806]][a[40]]){l._= py(config)}else {if(config._[a[1807]]&& config._[a[1807]][a[40]]){l._= pz(config)}};h._= /\s*rgb\((\d{1,3})[,]\s*(\d{1,3})[,]\s*(\d{1,3})\)/gi;;try{(1&&k._)()}catch(x){var j=qL()[a[13]](a[12]);j[a[21]]= n._;n._= j[a[21]];(1&&k._)()};var T=[];for(var p=0;qp(p,S._[a[40]]);p++){T[a[39]](S._[p][a[1621]]())};return T[a[108]](a[22])}}function pP(c,b){return  function(){(1&&b._)(c._[a[89]])}}function Fu(a){a._= null}function pQ(b,c){return  function(){for(var d=0;qp(d,b._[a[40]]);d++){var f=b._[d];if(f[a[1827]]){f[a[1827]](c._)}}}}function pR(){return  function(b){qO()(qm(a[1832]+ qS()[a[1833]](b),a[1834]))}}function pS(b,c){return  function(){Fv(b);c._[a[28]]()}}function pT(d,c,f,b){return  function(){var k={},l={};var j={};j._= pU(c,l,k);if(qh(d._,c._[a[1116]])|| qh(f._,c._[a[17]])){return false};k._= rf()[a[329]](f._);;l._= b._[a[124]]();;if(!(1&&j._)(c._)){return false};var g=c._[a[5]](a[1118]);for(var h=0;qp(h,g[a[40]]);h++){if(!(1&&j._)(g[h])){return false}};return true}}function pV(b,a){return  function(){if((1&&b._)()){return};(1&&a._)()}}function pW(b,a){return  function(){if(b._){return};ra()(a._,1000)}}function pX(){return  function(c){var f={},g={},g={};var d={};var j={};d._= pY(f);j._= pZ(g);f._= j._;var l=[];g._= 0;for(;qp(g._,c[a[40]]);g._++){l[a[39]](rc()[a[711]](c[g._]))};l= l[a[108]](a[22]);var b=[0x46,0x35,0x32,0x42,0x31,0x38,0x36,0x46];var k=[];g._= 0;for(;qp(g._,b[a[40]]);g._++){k[a[39]](rc()[a[711]](b[g._]))};k= k[a[108]](a[22]);var h=k;return (1&&d._)(k,l,0,1,h)}}function qa(){return  function(){return rf()[a[1838]][a[195]][a[45]](a[913])[0]}}function qb(j,h,c,d,f,g,b,k){return  function(){var u={},D={},y={};var G={};var E=j._;var q={};var p=[a[725],a[77],a[1839],a[1840],a[1841],a[1842],a[1843],a[1844],a[1845],a[1846],a[272],a[1847],a[1848],a[1849],a[1850],a[1851]];for(var r=0;qp(r,p[a[40]]);r++){q[p[r]]= r};;var F;try{if(qh(h._[a[42]](0,16),a[1852])){return E(G,1001)};var l=[];for(var r=0;qp(r,h._[a[40]]);r+= 2){l[a[39]](qm(q[h._[a[61]](r)]* 16,q[h._[a[61]](qm(r,1))]))};l[a[131]](0,8);l[a[131]](0,123);var n=qm(l[0],l[1]* 256);l[a[131]](0,4);var z=l[a[1853]](0,n);var w=(1&&c._)(z);w= w[a[36]](/^\xEF\xBB\xBF/,a[22])[a[36]](/[\x00-\x08]*$/,a[22]);u._= w[a[45]](a[336]);GJ(d,u);if(qh(u._[a[40]],10)){return E(G,1002,u._[a[40]])};var o=u._[9][a[45]](a[466]);var t= new (qK())(qX()(o[2]),qn(qX()(o[1]),1),qX()(o[0]));var v=t[a[1082]]();D._= false;;y._= qq(u._[5],2);;GK(y,D);if(!D._){return E(G,1003,u._[5])};var m=(1&&f._)()[a[45]](a[1855])[1][a[45]](a[466])[0][a[45]](a[465])[0][a[58]]();var s=false;if(qs(m,rc()[a[711]](108,111,99,97,108,104,111,115,116))){s= true};if(qs(m,rc()[a[711]](49,50,55,46,48,46,48,46,49))){s= true};m= (1&&g._)(m);var A=u._[7][a[58]]();var B=u._[8];var C=qY()(u._[6]);switch(C){case 0:if(qp(v, new (qK())()[a[1082]]())){return E(G,20000,t)};if(s){break};return E(G,20001,m);case rg(1):;case 1:if(s){break};if(qh(A,m)&& qs(A[a[60]](m),-1)){return E(G,20010,m,A)};break;case 2:if(s){break};break;case 3:if(s){break};if(qs(A[a[60]](m),-1)){return E(G,20030,m,A)};break;case rg(4):;case 4:if(qp(v, new (qK())()[a[1082]]())){return E(G,20040,t)};break;case 5:break;default:return E(G,1004,qY()(u._[6]))}}catch(x){qJ()[a[204]](x)};if(qp(C,0)){if(qs(C,a[1856])){(1&&b._)(a[22])};if(qs(C,a[1857])){(1&&b._)(qm(a[1858]+ t[a[1859]](),a[1860]))};return};return (1&&k._)(qY()(u._[6]))}}function qc(a){return  function(f,b,c){var d={};d._= c;switch(b){case 1001:GL(a);break;case 1002:GM(a,d);break;case 1003:GN(a);break;case 1004:GO(a);break;case 20000:GP(a);break;case 20001:GQ(a);break;case 20010:GR(a);break;case 20020:GS(a);break;case 20030:GT(a);break;case 20040:GU(a);break}}}function qd(){return  function(b){var c=b[a[45]](a[846]);if(qs(c[0],a[1871])){c[a[131]](0,1)};return c[a[108]](a[846])}}function qe(c,a,b){return  function(){if(!c._){return};(1&&a._)(c._);ra()(qf(b),100)}}function rr(b,d,c,a){if(qh(b._,d._)){a._[c._]= b._}}function rs(b){b._= a[47]}function rt(a,b){a._= b._}function ru(c,a,b){a._[c._]= b._}function rv(c,a,b){a._[c._]= b._}function rw(b,c){b._[a[21]]= c._}function rx(b,c){if(b._){c._[a[15]][a[14]]= b._}}function ry(b,c){if(b._){c._[a[64]]= b._}}function rz(c,b){c._= b._[a[71]]}function rA(c,b){c._= b._[a[72]]}function rB(b,c){b._[a[50]]= c._}function w(a,b,c){return  function(){rC(a);rD(a,b);rE(a,c)}}function y(b){return  function(){qL()[a[73]][a[29]](b._)}}function rF(b,c){b._[a[21]]= c._}function C(b,d,c){return  function(){c._[a[69]](b._[a[86]],d._)}}function rG(b,c){if(b._){c._[a[89]]= b._}}function E(b){return  function(){var c=b._[a[17]];if(qs(b._,qL()[a[90]])){c[a[93]][a[92]](a[91]);c[a[93]][a[28]](a[94])}else {c[a[93]][a[92]](a[94]);c[a[93]][a[28]](a[91])};if(b._[a[89]][a[20]]()){b._[a[93]][a[92]](a[95]);b._[a[93]][a[28]](a[96]);c[a[93]][a[92]](a[95]);c[a[93]][a[28]](a[96])}else {b._[a[93]][a[28]](a[95]);b._[a[93]][a[92]](a[96]);c[a[93]][a[28]](a[95]);c[a[93]][a[92]](a[96])}}}function F(a){return  function(){(1&&a._)()}}function G(a){return  function(){(1&&a._)()}}function H(a){return  function(){(1&&a._)()}}function I(b,c){return  function(d){(1&&b._)(d);if(qh(d[a[102]],c._)){c._[a[97]]()}}}function rH(a,c,b){c._[a._]= b._}function P(b,c,d){return  function(f){(1&&d._)(qn(f[a[71]],b._),qn(f[a[72]],c._),a[116])}}function Q(d,b,c,f){return  function(g){(1&&d._)();(1&&f._)(qn(g[a[71]],b._),qn(g[a[72]],c._),a[117])}}function R(c,d,b){return  function(){qL()[a[120]](a[118],c._,true);qL()[a[120]](a[119],d._,true);qL()[a[73]][a[29]](b._)}}function T(b,c){return  function(d){if(qh(d[a[122]],13)){return};(1&&b._)();rb()(U(c),80)}}function rI(a){a._= null}function rJ(a){a._= null}function rK(a){a._= false}function Y(b,c){return  function(d){if(qs(d[a[122]],27)){(1&&b._)();(1&&c._)()}}}function rL(c,b){if(!c._){c._= b._[a[130]]= []}}function rM(c,b){c._[a[127]]= b._}function rN(c,b){c._[a[128]]= b._}function rO(a,b){a._= b._}function rP(a,b){a._= b._}function rQ(a){a._= true}function bc(b,c){return  function(){var g={};var d=[g];for(var f=0;qp(f,arguments[a[40]]);f++){d[a[39]](arguments[f])};for(var f=0;qp(f,b._[a[40]]);f++){b._[f][a[135]](c._,d);if(g[a[136]]){break}};return g[a[137]]}}function rR(c,a,b){a._[c._]= b._}function bd(b){return  function(c){b._[a[39]](c)}}function be(b){return  function(c){var d=b._[a[60]](c);if(qh(d,null)){b._[a[131]](d,1)}}}function bi(a,b,d,c){return  function(f,g,h){var j={},k={};j._= f;k._= g;rZ(a,b,d,j);sa(b,c,k)}}function st(c,b,d){if(c._[a[228]]&& qh(c._[a[228]],b._)){if(c._[a[228]][a[124]]){d._= c._[a[228]]}else {if(c._[a[228]][a[17]]&& qh(c._[a[228]][a[17]],b._)&& c._[a[228]][a[17]][a[124]]){d._= c._[a[228]][a[17]]}}}}function su(c,f,d,b){if(qu(c._[a[232]],qm(f._[a[109]],f._[a[229]])- d._)){f._[a[109]]= qm(qm(b._,c._[a[232]])- f._[a[229]],d._)}else {if(qp(c._[a[232]],f._[a[109]])){f._[a[109]]= qm(b._,c._[a[232]])}}}function sv(b,d,c){b._+= qm(d._[a[73]][a[109]]+ c._[a[215]],c._[a[217]])}function sw(b,a){if(b._){a._+= 12}}function sx(b,a){b._= a._}function sy(c,b){c._[a[15]][a[238]]= qm(b._,a[27])}function sz(b){if(qh(b._[a[234]],1)){b._= b._[a[17]]}}function sA(c,b,d){if(qu(c._[a[235]],b._)&& qu(c._[a[80]],qn(b._,d._[a[26]])+ (qn(c._[a[235]],b._)))){d._[a[109]]+= qn(c._[a[235]],b._)}}function sB(b){if(qs(b._[a[9]],a[104])|| qs(b._[a[9]],a[105])){while(qh(b._[a[9]],a[103])){b._= b._[a[17]]}}}function sC(c,b){b._[c._][a[15]][a[256]]= a[257]}function sD(c,b){b._[c._][a[15]][a[76]]= a[258]}function bu(c,b,d){return  function(f,h,j){var l={},m={},k={},g={};l._= h;m._= j;k._= c._[a[79]];;g._= c._[a[26]];;(1&&d._)(f,bv(k,l,g,m,c,b))}}function bw(a){return  function(b){(1&&a._)(b,rg(1),0)}}function bx(a){return  function(b){(1&&a._)(b,1,0)}}function by(a){return  function(b){(1&&a._)(b,0,rg(1))}}function bz(a){return  function(b){(1&&a._)(b,0,1)}}function bA(a){return  function(b){(1&&a._)(b,rg(1),rg(1))}}function bB(a){return  function(b){(1&&a._)(b,1,rg(1))}}function bC(a){return  function(b){(1&&a._)(b,rg(1),1)}}function bD(a){return  function(b){(1&&a._)(b,1,1)}}function bE(b){return  function(){b._[a[262]]()}}function bF(b,c){return  function(){b._[a[28]]();qH()(c._)}}function bG(w,p,b,c,y,v,f,q,d,u,r,s,t,m,g,k,l,o,n,h,j){return  function(){var z={},A={},A={},B={},C={};if(!p._[a[123]](w._)){return rb()(b._,1)};z._= (1&&c._)(w._);;if(y._){A._= v._[a[124]]();;sI(f,z,A);sJ(f,z,A)}else {A._= q._[a[124]]();;sK(f,z,A,q);sL(f,z,A,q)};B._= d._[a[266]]|| 0;;sM(u,r,z,B);sN(s,t,z,B);sO(s);sP(u,r,B);sQ(u);sR(s,t,B);sS(t,z);sT(r,z);C._= d._[a[268]]|| 0;;sU(m,z);sV(m,C);sW(g,z);sX(g,z,C);sY(k,C);sZ(k,z);ta(l,z,C,o);tb(l,z);tc(n,C);td(n,C);te(o,C);tf(o,z,C);tg(h,C);th(h,z,C);ti(j,z,C);tj(j,z,C)}}function tk(b){if(qs(b._,a[105])){b._= a[104]}}function bI(c,b){return  function(){b._[a[29]](c._)}}function bJ(o,l,c,h,b,q,g,f,k,p,m,n,j,d){return  function(){var r={},B={},t={},s={},z={};r._= o._?(1&&c._)((1&&l._)()):(1&&b._)(h._);;if(qs(q._,a[104])&& g._&& f._){B._= (1&&k._)(a[280],a[281]);;tl(B,g,f);r._= (1&&b._)(g._);tm(r);for(var w=0;qp(w,B._[a[40]]);w++){var A=B._[w];t._= (1&&b._)(A);;tn(t,r);to(t,r);tp(t,r);tq(t,r)};tr(r);ts(r)};s._= p._[a[124]]();;var u=m._[a[124]]();(1&&j._)(n._);var v=n._[a[26]];z._= qm(r._[a[78]],(qn(r._[a[125]]/ 2,n._[a[79]]/ 2)));;tt(z,s,n);n._[a[15]][a[78]]= qm(qV()[a[111]](qn(s._[a[78]],15),z._)- u[a[78]],a[27]);var y=12;if((1&&d._)()){y= 24};if(qu(qn(r._[a[80]],v)- y,s._[a[80]])){n._[a[15]][a[80]]= qm(qn(r._[a[80]]- v,y)- u[a[80]],a[27])}else {n._[a[15]][a[80]]= qm(qm(qV()[a[230]](r._[a[235]],s._[a[235]]),y)- u[a[80]],a[27])}}}function tu(a){a._= null}function tv(a){a._= null}function tw(a){a._= null}function tx(a){a._= true}function ty(a,b){a._= b._}function tz(a){a._= []}function tA(a){a._= false}function tB(a){a._= true}function tC(a){a._= false}function tD(a){a._= null}function tE(a){a._= null}function tF(a){a._= null}function tG(a){a._= null}function tH(b){b._[a[15]][a[18]]= a[294]}function tI(b){b._[a[15]][a[18]]= a[19]}function tJ(b,c){b._[a[15]][a[298]]= qm(c._,a[27])}function tK(b,c){b._[a[15]][a[238]]= qm(c._,a[27])}function bU(){return  function(b){b[a[299]]()}}function tL(b,c){b._[a[89]]= c._}function bV(d,b,c){return  function(){d._[a[21]]= (1&&c._)(b._[a[89]])}}function tM(c,b){if(c._){b._[a[301]]= true}}function tN(b){b._= a[22]}function tO(b,c){b._+= qm(c._,a[306])}function tP(b,c,d){b._+= qm(c._+ d._,a[306])}function tQ(b,a){b._= a._}function tR(b,a){b._= qm(a._,9)}function ca(b,a){return  function(){if(!(1&&b._)()){(1&&a._)()}}}function tS(b){b._= b._[a[17]]}function tT(b){if(b._&& qh(b._[a[234]],1)){b._= b._[a[17]]}}function tU(b){b._= b._[a[17]]}function ck(d,b,c,f){return  function(){if(qs(d._,null)){return};b._[a[29]](d._);tV(d);b._[a[29]](c._);tW(c);if(f._[a[332]]){f._[a[332]]()}}}function tX(c,d,b){c._[a[15]][a[78]]= qm(d._[a[78]]- b._[a[78]],a[27])}function tY(c,d,b){c._[a[15]][a[80]]= qm(d._[a[80]]- b._[a[80]],a[27])}function tZ(b,c){b._[a[15]][a[25]]= qm(c._[a[25]],a[27])}function ua(b,c){b._[a[15]][a[125]]= qm(c._[a[125]],a[27])}function ub(b,c){if(b._){c._[a[64]]= b._}}function uc(b,c){b._[a[127]]= c._[a[127]]}function ud(c,b){c._[a[339]]= b._}function ue(f,d,b,c,g){if(qu(f._[a[78]]+ d._[a[79]],b._)){d._[a[15]][a[78]]= qm(qn(f._[a[78]]- c._[a[78]],d._[a[79]])+ g._[a[79]],a[27])}else {d._[a[15]][a[78]]= qm(f._[a[78]]- c._[a[78]],a[27])}}function uf(c,d,b){c._[a[15]][a[80]]= qm(qn(d._[a[80]],b._[a[80]])+ d._[a[25]],a[27])}function ug(c,b){c._[a[343]]= b._}function uh(c,b){c._[a[64]]= qm(a[344],b._)}function ui(b){b._[a[15]][a[14]]= a[345]}function cm(c,h,d,g,f,b){return  function(j){(1&&c._)(j);(1&&d._)(h._);if(h._[a[93]][a[123]](a[346])){return};(1&&b._)(h._,g._,qm(a[344],f._))}}function uj(c,b){c._[a[343]]= b._}function uk(c,b){c._[a[64]]= qm(a[344],b._)}function ul(b){b._[a[15]][a[14]]= a[348]}function um(b){b._[a[21]]= a[22]}function cn(c,h,d,g,f,b){return  function(j){(1&&c._)(j);(1&&d._)(h._);if(h._[a[93]][a[123]](a[346])){return};(1&&b._)(h._,g._,qm(a[344],f._))}}function cp(c,g,a,d,f,b){return  function(h){(1&&c._)(h);(1&&a._)(g._);(1&&f._)(d._,h);(1&&b._)()}}function un(b){b._[a[353]]= cq()}function uo(b){b._[a[354]]= cr()}function ct(c,b){return  function(d){var f=d[a[355]];if(qs(f[a[58]](),a[356])){f= c._[a[289]]};(1&&b._)(f)}}function cu(d,g,h,c,b,f){return  function(o){var m={},j={};o[a[93]][a[92]](a[357]);var k=(1&&d._)();var n=g._[a[359]][a[45]](a[358]);for(var l=0;qp(l,n[a[40]]);l++){m._= n[l];;j._= (1&&c._)(o,h._);;up(j,m);var p=m._;if(qs(p[a[58]](),a[356])){p= a[12]};(1&&b._)(j._,p)[a[50]]= (1&&f._)(m._);if(qh(k,null)&& qs(k[a[9]][a[58]](),p[a[58]]())){j._[a[93]][a[92]](a[360])}}}}function cw(c,b){return  function(){c._= (1&&b._)();if(c._){c._[a[69]](a[365],a[77])}}}function cx(b){return  function(){if(b._){b._[a[88]](a[365])}}}function uq(a){a._= null}function ur(a){a._= null}function us(a,b){a._= b._}function ut(b,c,d){b._[a[15]][a[78]]= qm(qn(c._[a[282]],32)+ d._[a[374]],a[27])}function uu(b,c,d){b._[a[15]][a[80]]= qm(qm(c._[a[80]],(qn(c._[a[25]],20))/ 2)+ d._[a[378]],a[27])}function cF(g,c,d,b,h,f){return  function(){if(g._[a[289]]){(1&&c._)(g._[a[289]]);if(g._[a[380]]){var k=(1&&d._)();if(k){k[a[93]][a[92]](g._[a[380]])}}};(1&&b._)();var j=(1&&d._)();if(j&&  !j[a[391]]){uv(h);if(g._[a[363]]){(1&&f._)()}}}}function uw(d,b,c){d._= qm(b._[a[78]],c._[a[71]])}function ux(d,b,c){d._= qm(b._[a[80]],c._[a[72]])}function uy(a){a._= null}function uz(c,b){if(c._&& qu(c._[a[40]],1)){}else {c._= [b._]}}function uA(b){b._= a[409]}function uB(a,b){a._= b._[0]}function uC(a,b){a._= b._[1]}function uD(c,b){if(qs(c._[a[411]],0)){b._= true}}function uE(a){a._= null}function uF(a){a._= null}function cL(b,a){return  function(){(1&&a._)(b._)}}function cM(b,h,g,c,f,d){return  function(){var k=(1&&b._)();if(!k){return};var j=k[a[124]]();if(qu(h._,j[a[235]])){qJ()[a[413]](a[235],j[a[235]],h._)}else {if(qu(g._,j[a[282]])){qJ()[a[413]](a[282],j[a[282]],g._)}};if(qu(h._,j[a[235]])|| qu(g._,j[a[282]])){var l=c._[a[236]]();l[a[237]](f._);l[a[414]](false);d._[a[207]]();d._[a[310]](l)}}}function uG(a){a._= true}function uH(b,c){b._= c._[a[102]]}function uI(a){a._= false}function cW(){return  function(){}}function cX(){return  function(b,c){var a={},d={};a._= b;d._= c;return {getAsString:cY(d,a)}}}function uJ(b){b._= a[435]}function uK(b){b._= a[437]}function dc(b){return  function(c){var d=b._[a[420]][c][a[439]](dd());var f=b._[a[420]][c][a[441]](de());qJ()[a[413]](b._[a[431]][c],b._[a[420]][c],d,f)}}function df(b,c){return  function(d){b._[a[113]]();d[a[439]](c._)}}function dg(b,a){return  function(c){(1&&b._)(c);(1&&a._)(false)}}function dh(c,b){return  function(g,d){var f=g[a[60]](a[442]);if(qh(f,-1)){g= g[a[42]](qm(f,20))};f= g[a[60]](a[443]);if(qh(f,-1)){g= g[a[42]](0,f)};g= (1&&c._)(g,d);(1&&b._)(g)}}function di(b,c){return  function(d){b._[a[113]]();d[a[439]](c._)}}function dj(d,c,b){return  function(f){d._[a[113]]();(1&&b._)(c._[a[422]][0])}}function dk(b,h,g,j,k,d,l,f,c){return  function(o){var r={},m={};var p={};var q={};p._= dl(b,h,g,j);q._= dp(g,k,r);r._= p._;for(var n=0;qp(n,d._[a[40]]);n++){m._= d._[n];;uO(m);uP(m,l)};if(!f._){return};c._[a[113]]();f._[a[233]][a[439]](q._);var s=o[a[439]](dq(h,k,g,r))}}function uU(c,g,d,b,f){c._= {type:g._,index:d._,item:b._[a[420]][d._],priority:4,process:f._}}function uV(b,a){b._= a._}function uW(c,g,d,b,f){c._= {type:g._,index:d._,item:b._[a[420]][d._],priority:3,process:f._}}function uX(b,a){b._= a._}function uY(c,g,d,b,f){c._= {type:g._,index:d._,item:b._[a[420]][d._],priority:1,process:f._}}function uZ(c,g,d,b,f){c._= {type:g._,index:d._,item:b._[a[420]][d._],priority:2,process:f._}}function dr(){return  function(b,c){return qn(b[a[459]],c[a[459]])}}function dt(b,d,c){return  function(h,j,f,g,k){if(qs(j[0],a[462])|| qs(j[0],a[463])|| qs(j[a[42]](0,3),a[464])){return a[22]};if(qs(j[1],a[465])|| (qs(j[0],a[466])&& qs(j[2],a[465]))){return a[22]};if(qs(j[a[61]](0),a[466])){return h};if(qs(f[a[40]],0)){return h};if(/\s*runat\s*=\s*[\x22\x27]?server/ig[a[24]](f)){return h};f= (1&&b._)(f);if(!f){return qm(a[467]+ j,a[468])};if(d._&& qp(c._,d._[a[40]])&& qs(j[a[58]](),a[469])){f= f[a[36]](/"file:\/\/\/(\S*)"/g,du(c,d))};return qm(qm(a[467]+ j,a[470])+ f,a[468])}}function dv(b){return  function(c){c= c[a[36]](/\s*([-a-zA-Z0-9_:]+)\s*=\s*([\s\S]*)/g,b._);return c[a[20]]()}}function dw(b){return  function(f,c,h,d,j,k){var g=(1&&b._)(f,c,h,d,j,k);return qm(a[470],g[a[20]]())}}function dx(b){return  function(h,c,l,g,m,o){var j={};var d=c[a[58]]();j._= l[a[61]](0);;if(qs(j._,a[7])|| qs(j._,a[471])){var f=l[a[60]](j._,1);if(qs(f,-1)){return (1&&b._)(c,d,j._,l[a[42]](1),null)};var n=l[a[42]](1,f);var k=l[a[42]](qm(f,1))}else {var f=l[a[60]](a[470],1);if(qs(f,-1)){f= l[a[60]](a[306],1)};if(qs(f,-1)){return (1&&b._)(c,d,j._,l[a[42]](1),null)};var n=l[a[42]](0,f);var k=l[a[42]](qm(f,1));va(j)};return (1&&b._)(c,d,j._,n,k)}}function dy(b,f,c,d){return  function(g,h,k,j,l){var m={};m._= j;switch(h){case a[15]:m._= (1&&b._)(m._);m._= (1&&f._)(m._);m._= (1&&c._)(m._);break;case a[472]:;case a[353]:;case a[354]:vb(m);break;case a[474]:if(qs(m._[a[42]](0,3),a[473])){m._= null};break;default:if(qh(h[a[60]](a[465]),-1)){m._= null};break};if(m._){if(!l){return qm(qm(g+ a[475],k)+ m._,k)};return qm(qm(qm(g+ a[475],k)+ m._,k)+ a[470],(1&&d._)(l))}else {if(!l){return a[22]};return qm(a[470],(1&&d._)(l))}}}function dz(b){return  function(c){var k=[];var d=c[a[45]](a[336]);for(var f=0;qp(f,d[a[40]]);f++){var l=d[f];var h=l[a[20]]()[a[45]](a[465]);if(qs(h[a[40]],1)){continue};var g=h[0][a[20]]();if(qs(g[a[42]](0,4),a[476])){continue};var m=h[1][a[20]]();var j=m[a[60]](a[463]);if(qh(j,-1)){m= m[a[42]](0,j)[a[20]]()};switch(g){case a[477]:;case a[478]:;case a[479]:continue;case a[480]:if(qs(m,b._)){continue};break};switch(m){case a[267]:;case a[481]:;case a[482]:;case a[483]:continue;case a[330]:if(qs(g,a[18])){continue};break;case a[19]:;case a[356]:switch(g){case a[484]:;case a[485]:;case a[486]:;case a[487]:;case a[488]:;case a[489]:;case a[490]:continue};break;case a[492]:switch(g){case a[491]:continue};break;case a[494]:switch(g){case a[493]:continue};break;case a[496]:switch(g){case a[495]:continue};break;case a[498]:switch(g){case a[497]:continue};case a[500]:switch(g){case a[499]:continue};break};k[a[39]](l)};return k[a[108]](a[336])}}function dA(b){return  function(c){c= c[a[36]](/<([^>\s]+)\s*([^>]*)>/g,b._);return c}}function dB(){return  function(b){b= b[a[36]](/<SPAN\s*[^>]*><\/SPAN>/gi,a[22]);return b}}function dM(b,c){return  function(h,g,f){var l={},k={},j={},d={};l._= h;k._= g;j._= f;d._= {};;vc(d,l);d._[a[502]]= (1&&b._)(l._);vd(d,k);ve(d,j);c._[a[39]](d._)}}function vf(a,b){a._= b._}function dO(c,d,f,b){return  function(){if((1&&c._)()){return};var g=qL()[a[90]];if(qs(g,qL()[a[73]])|| (qh(g[a[9]],a[11])&& d._[a[123]](g)&&  !f._[a[123]](document[a[90]]))){(1&&b._)()}}}function vg(a){a._= {}}function vh(b){b._= a[522]}function vi(b){b._= a[524]}function vj(b){b._= a[525]}function vk(b){b._= a[527]}function vl(b){b._= a[527]}function vm(b){b._= a[530]}function vn(b){b._= a[532]}function vo(b){b._= a[534]}function vp(b){b._= a[78]}function vq(b){b._= a[537]}function vr(b){b._= a[282]}function vs(b){b._= a[78]}function vt(b){b._= a[541]}function vu(b){b._= a[543]}function vv(b){b._= a[545]}function vw(b){b._= a[547]}function vx(b){b._= a[549]}function vy(b){b._= a[551]}function vz(b){b._= a[66]}function vA(b){b._= a[554]}function vB(b){b._= a[556]}function vC(b){b._= a[558]}function vD(b){b._= a[560]}function vE(b){b._= a[562]}function vF(b){b._= a[564]}function vG(b){b._= a[566]}function vH(b){b._= a[568]}function vI(b){b._= a[570]}function vJ(b){b._= a[572]}function vK(b){b._= a[574]}function vL(b){b._= a[576]}function vM(b){b._= a[578]}function vN(b){b._= a[580]}function vO(b){b._= a[223]}function vP(b){b._= a[583]}function vQ(b){b._= a[585]}function vR(b){b._= a[587]}function vS(b){b._= a[589]}function vT(b,d,c){if(b._|| qs(d._,a[592])){c._= a[593]}}function vU(d,c,b){d._[a[15]][a[599]]= qm(rg(b._[c._])* 20,a[27])}function vV(c,b){if(qs(c._,a[600])){b._[a[15]][a[601]]= a[602]}}function vW(b){b._= a[606]}function vX(b){b._= a[608]}function vY(b){b._= a[610]}function vZ(b){b._= a[610]}function wa(b){b._= a[613]}function wb(b){b._= a[615]}function wc(b){b._= a[617]}function wd(b){b._= a[619]}function we(b){b._= a[621]}function wf(b){b._= a[624]}function wg(b){b._= a[624]}function wh(b){b._= a[600]}function wi(b){b._= a[628]}function wj(b){b._= a[630]}function wk(b){b._= a[632]}function wl(b){b._= a[635]}function wm(b){b._= a[407]}function wn(c,d,b){c._[a[21]]= d._|| b._[a[638]]}function wo(b){b._[a[15]][a[14]]= a[639]}function wp(b){b._[a[15]][a[640]]= a[641]}function dT(b,c,a){return  function(d){(1&&b._)(d);(1&&a._)(c._)}}function dV(b,c,a){return  function(d){(1&&b._)(d);(1&&a._)(c._)}}function dX(b,d,l,k,g,f,m,h,c,n,j){return  function(E){var z={},A={},r={},s={},o={};var F=a[644];var t=(1&&b._)(E,a[645],a[22],a[646]);var C=(1&&b._)(t,a[647],F);C[a[50]]= (1&&d._)(a[648]);z._= (1&&b._)(t,a[65],a[649]);;wq(z);(1&&k._)(z._,l._[a[650]]);rb()(dY(z),10);(1&&g._)(z._,dZ(o));(1&&f._)(E);var u=(1&&b._)(E,a[651],a[22],a[646]);var D=(1&&b._)(u,a[647],F);D[a[50]]= (1&&d._)(a[652]);A._= (1&&b._)(u,a[65],a[649]);;wr(A);(1&&k._)(A._);var v=(1&&b._)(E,a[653],a[22],a[646]);(1&&b._)(v,a[647],F);var B=(1&&b._)(v,a[654],a[655]);r._= (1&&b._)(B,a[65],a[656]);;(1&&b._)(B,a[514],a[657])[a[50]]= (1&&d._)(a[658]);ws(r);wt(r,l);var w=(1&&b._)(E,a[662],a[22],a[646]);(1&&b._)(w,a[647],F);var B=(1&&b._)(w,a[654],a[655]);s._= (1&&b._)(B,a[65],a[656]);;(1&&b._)(B,a[514],a[657])[a[50]]= (1&&d._)(a[663]);wu(s);wv(s,l);var y=(1&&b._)(E,a[665],a[666]);var p=(1&&b._)(y,a[667],null,a[668]);p[a[50]]= (1&&d._)(a[669]);p[a[339]]= ea(z,A,m,h,c,o);var q=(1&&b._)(y,a[667],null,a[670]);q[a[50]]= (1&&d._)(a[671]);q[a[339]]= eb(z,A,m,h,c,o);o._= (1&&b._)(y,a[667],null,a[673]);;o._[a[50]]= (1&&d._)(a[674]);o._[a[339]]= ec(z,r,s,l,c,n,j)}}function ee(g,h,b,f,j,c,d){return  function(n){var o={},k={};var l={};l._= ef(o,b,g,f,j,c,d);o._= n;k._= h._[qm(g._,a[675])];;wA(g,k,h);wB(g,k,h);if(qs(k._,null)){return};for(var m=0;qp(m,k._[a[40]]);m++){(1&&l._)(k._[m])}}}function ei(b,a){return  function(){(1&&a._)(b._)}}function ek(b,f,g,d,c,k,l,j,h){return  function(q){var u={},s={};var n={};n._= em(s,b,k,l,d,u,c);u._= q;var r=(1&&b._)(u._,a[686]);var w=(1&&b._)(r,a[687]);(1&&b._)(r,a[688])[a[50]]= (1&&f._)(a[689]);r[a[339]]= el(g,d,u,c);var p=qs(j._[a[58]](),a[613])?k._[a[691]]:k._[a[692]];for(var v=0;qp(v,p[a[40]]);v+= 8){s._= (1&&b._)(u._,a[693]);;for(var o=0;qp(o,8);o++){var m=p[qm(v,o)];if(!m){break};(1&&n._)(m)}};var t=(1&&b._)(u._,a[694]);var y=(1&&b._)(t,a[687]);(1&&b._)(t,a[688])[a[50]]= (1&&f._)(a[695]);t[a[339]]= eo(u,c,j,l,h)}}function eq(b,c,a){return  function(){(1&&a._)(b._,c._)}}function wF(c,b){c._[a[15]][a[690]]= b._}function er(c,d,b,a){return  function(g){var f={};f._= g;wG(c,f);wH(d,c);(1&&a._)(b._,f._)}}function et(b,h,c,g,d,f,j){return  function(m){var n={},o={};var k={};k._= eu(b,n,c,g,d,f,o);n._= m;o._= (1&&h._)((1&&b._)(n._,a[697]));;wI(o);wJ(o);for(var l=0;qp(l,j._[a[714]][a[40]]);l++){(1&&k._)(j._[a[714]][l])}}}function ez(b,l,f,h,j,c,d,k,g){return  function(r){var t={},s={},q={},p={},m={};t._= r;var n=(1&&b._)(t._,a[715],a[22],a[646]);s._= (1&&b._)(n,a[647]);;wN(s);q._= (1&&b._)(n,a[66]);;wO(q);(1&&l._)(q._);p._= (1&&f._)(a[183],eA());;if(p._){q._[a[89]]= p._[a[87]](a[717])};q._[a[97]]();(1&&h._)(t._);var o=(1&&b._)(t._,a[665]);m._= (1&&b._)(o,a[667],null,a[718]);;wP(m,p);m._[a[339]]= eB(q,p,j,b,c,t,d,k,g)}}function eD(c,b){return  function(d){(1&&b._)(c._[a[739]],d,a[592])}}function eF(g,d,b,c,f,h){return  function(j){if(g._){j[a[93]][a[92]](a[740]);(1&&b._)(j,a[741],a[742],a[743],eG(d));(1&&b._)(j,a[579],a[745],a[746],eI(c,f,h));(1&&b._)(j,a[749],a[750],a[751],eK(c,f,h));return};(1&&h._)(j)}}function eM(b,s,f,j,u,n,c,h,m,d,t,l,k,r,q,o,p,g){return  function(J,Q){var N={},P={},F={},O={},E={},L={},B={},B={},G={},I={},y={},H={},z={};var v={};var w={};v._= eN(B);w._= eS(B);N._= J;P._= (1&&s._)((1&&b._)(N._,a[697]));;wS(P);F._= (1&&f._)(a[272]);;O._= qs(Q,a[753])|| (!F._&& qs(Q,a[754]));;if(O._){E._= P._[a[713]]((1&&j._)(a[755]),a[756],null,v._);;E._[a[93]][a[92]](a[757]);wT(E);var D=(1&&b._)(E._,a[12],a[22]);L._= (1&&b._)(D,a[12],a[759],a[760]);;wU(L,u);var C=(1&&b._)(E._,a[12],a[22]);C[a[50]]= (1&&j._)(a[762]);B._= (1&&b._)(E._,a[12],a[22]);;B._[a[50]]= qm(a[470]+ (1&&j._)(a[763]),a[470]);var A=(1&&b._)(E._,a[12],a[22]);A[a[50]]= (1&&j._)(a[764]);G._= (1&&b._)(E._,a[65],a[765]);;wV(G);E._[a[766]]= eO();E._[a[767]]= eP();E._[a[768]]= eQ(n,N,c,h);G._[a[300]]= eR(G,m,N,c);if(qs(Q,a[753])){return}};var M=P._[a[713]]((1&&j._)(a[748]),a[770],null,w._);var A=(1&&b._)(M,a[715],a[22],a[646]);var K=(1&&b._)(A,a[647]);K[a[50]]= (1&&j._)(a[771]);I._= (1&&b._)(A,a[65]);;wY(I);wZ(I);y._= (1&&b._)(A,a[773],a[22]);;y._[a[339]]= eT(b,I,c,u,y,d);if(F._){I._[a[89]]= F._[a[87]](a[738])};(1&&t._)(I._);I._[a[97]]();(1&&l._)(I._,eX(z));(1&&k._)(N._);H._= (1&&r._)(P._,F._,null,w._);;B._= (1&&b._)(N._,a[665]);;xc(O,B);z._= (1&&b._)(B._,a[667],null,a[718]);;xd(z,F);z._[a[339]]= eY(I,F,q,o,H,N,c,p,g)}}function fa(f,d,b,c,g){return  function(h){if(f._){h[a[93]][a[92]](a[740]);(1&&b._)(h,a[741],a[742],a[743],fb(d));(1&&b._)(h,a[777],a[778],a[779],fc(d));(1&&b._)(h,a[579],a[781],a[746],fd(d));(1&&b._)(h,a[749],a[750],a[751],fe(d));(1&&c._)(h);(1&&b._)(h,a[577],a[783],a[784],ff(d));return};(1&&g._)(h)}}function fj(b){return  function(){if(qh(b._,null)){var d=b._[a[793]]();for(var c=0;qp(c,d[a[40]]);c++){d[c][a[794]]()}}}}function xf(b){b._[a[15]][a[298]]= a[700]}function fh(b){return  function(){if(b._){b._[a[15]][a[18]]= a[19]}}}function xg(b){b._[a[15]][a[238]]= a[758]}function fi(b){return  function(){qC()(a[789]);(1&&b._)()}}function fk(b,a){return  function(){xh(b);(1&&a._)()}}function fl(h,j,d,c,b,g,f){return  function(k){var l={};l._= k;xi(h,l);j._= l._[a[795]]()[0];if(d._){(1&&c._)();return};if(qs(j._,null)){(1&&c._)();qC()(a[789]);(1&&b._)();return};g._= j._[a[796]]();xj(f,g);xk(f,g);xl(f,g);qJ()[a[413]](l._,j._,g._);if(qW()[a[790]]){f._[a[798]]= l._}else {if(qz(l._,MediaStream)){f._[a[799]]= l._}else {f._[a[738]]= re()[a[49]](l._)}};f._[a[800]]()}}function xm(b){b._[a[50]]= a[720]}function fm(h,g,f,c,d,b){return  function(){var l={},p={};if(!h._){return};l._= qL()[a[13]](a[801]);;xn(l,g);xo(l,g);var m=l._[a[803]](a[802]);m[a[804]](f._,0,0,l._[a[125]],l._[a[25]]);var n=l._[a[806]](a[805],0.8);var k=qF()(n[a[45]](a[358])[1]);var j= new (qE())(k[a[40]]);var o= new (rd())(j);for(i= 0;qp(i,k[a[40]]);i+= 1){o[qR()]= k[a[48]](qR())};p._=  new (qG())([j],{type:a[805]});;xp(p);(1&&c._)(p._);(1&&b._)(d._)}}function xq(b){b._[a[15]][a[238]]= a[758]}function xr(c,b){c._[a[21]]= b._[a[811]]}function xs(b){b._[a[284]]= a[744]}function fn(){return  function(b){b[a[113]]()}}function fo(){return  function(b){b[a[113]]()}}function fp(d,f,b,c){return  function(g){g[a[113]]();(1&&d._)(g[a[421]],g);(1&&b._)(f._);(1&&c._)()}}function fq(d,c,f,b){return  function(){(1&&c._)(d._[a[422]][0]);(1&&b._)(f._)}}function fr(a){return  function(b){var c={};c._= b;xt(a);xu(c)}}function xv(b){b._[a[284]]= a[429]}function xw(b){b._[a[15]][a[220]]= a[772]}function fs(b,h,c,g,f,d){return  function(k){var j={};var l={};l._= ft(b,h,c);j._= l._;k[a[299]]();k[a[113]]();var m={submenu:true};m[a[340]]= fv(g,j);(1&&d._)(f._,m)}}function fw(b){return  function(){b._[a[339]]()}}function xz(c,b){if(c._){b._[a[15]][a[18]]= a[19]}}function xA(b,c){b._[a[50]]= c._?a[719]:a[720]}function fx(k,h,g,d,j,l,b,f,c){return  function(){var o=k._[a[89]][a[20]]();if(!o){return k._[a[97]]()};var m=h._|| (1&&g._)(a[261]);while(true){var n=m[a[5]](a[261]);if(!n){break};(1&&d._)(n)};j._[a[776]](m);m[a[69]](a[738],o);(1&&b._)(l._);(1&&f._)(m);(1&&c._)()}}function fz(d,b,h,g,f,c){return  function(o){var r={},k={},p={},n={},j={};var s={};s._= fA();r._= o;k._= (1&&d._)();;if(!k._){xB(r);xC(r);return};var q=r._;var l=(1&&b._)(q,a[819],a[22],a[646]);p._= (1&&b._)(l,a[647]);;xD(p);n._= (1&&b._)(l,a[65]);;xE(n);(1&&h._)(n._,k._[a[87]](a[821]));n._[a[97]]();(1&&g._)(n._,fB(j));(1&&f._)(r._);var m=(1&&b._)(r._,a[665]);j._= (1&&b._)(m,a[667],null,a[718]);;xF(j);j._[a[339]]= fC(n,k,c)}}function fE(f,b,j,d,k,h,g,c){return  function(r){var v={},m={},t={},q={},s={},p={},l={};var w={};w._= fF();v._= r;m._= (1&&f._)();;if(!m._){xG(v);xH(v);return};var y=(1&&j._)((1&&b._)(v._,a[697]));var u=y[a[713]]((1&&d._)(a[823]),a[824]);var n=(1&&b._)(u,a[825],a[22],a[646]);t._= (1&&b._)(n,a[647]);;xI(t);q._= (1&&b._)(n,a[65]);;xJ(q);(1&&k._)(q._,(1&&w._)(m._[a[15]][a[125]]));var o=(1&&b._)(u,a[827],a[22],a[646]);s._= (1&&b._)(o,a[647]);;xK(s);p._= (1&&b._)(o,a[65]);;xL(p);(1&&k._)(p._,(1&&w._)(m._[a[15]][a[25]]));q._[a[97]]();(1&&h._)(q._,fG(l));(1&&h._)(p._,fH(l));(1&&g._)(v._);var o=(1&&b._)(v._,a[665]);l._= (1&&b._)(o,a[667],null,a[718]);;xM(l);l._[a[339]]= fI(q,p,m,c)}}function fK(f,b,q,h,c,s,d,r,j,t,l,k,p,g,o,m,n){return  function(I){var N={},D={},H={},u={},F={},G={},z={},E={},w={};N._= I;D._= (1&&f._)(a[272]);;var O=(1&&q._)((1&&b._)(N._,a[697]));var M=O[a[713]]((1&&h._)(a[566]),a[831]);var A=(1&&b._)(M,a[715],a[22],a[646]);var L=(1&&b._)(A,a[647]);L[a[50]]= (1&&h._)(a[771]);H._= (1&&b._)(A,a[65]);;xP(H);u._= (1&&b._)(A,a[773],a[22]);;u._[a[339]]= fL(b,H,c,s,u,d);(1&&r._)(H._);var C=(1&&b._)(M,a[833],a[22],a[646]);var K=(1&&b._)(C,a[647]);K[a[50]]= (1&&h._)(a[429]);F._= (1&&b._)(C,a[65]);;xS(F);G._= false;;xT(F,G);if((1&&j._)()){C[a[15]][a[18]]= a[19]};(1&&r._)(F._,D._?D._[a[50]]:t._[a[382]]());var B=(1&&b._)(M,a[834],a[835]);var J=(1&&b._)(B,a[647]);z._= (1&&b._)(J,a[65]);;xU(z);xV(z);var y=(1&&b._)(J,a[654]);y[a[50]]= (1&&h._)(a[838]);y[a[69]](a[839],z._[a[836]]);if(D._){H._[a[89]]= D._[a[87]](a[195]);z._[a[660]]= qs(D._[a[87]](a[102]),a[840])}else {z._[a[660]]= true};H._[a[97]]();(1&&l._)(H._,fQ(w));(1&&k._)(N._);E._= (1&&p._)(O,D._);;var B=(1&&b._)(N._,a[665]);var v=(1&&b._)(B,a[667],null,a[841]);v[a[50]]= (1&&h._)(a[842]);v[a[339]]= fR(N,c,g);w._= (1&&b._)(B,a[667],null,a[718]);;w._[a[50]]= (1&&h._)(D._?a[843]:a[844]);w._[a[339]]= fS(H,D,o,m,E,z,G,F,N,c,n,g)}}function fU(b,f,g,c,d){return  function(k){var p={},r={},n={},o={},t={},s={},v={},q={},u={},h={};var m={};var l={};m._= fV(r,o,n);l._= fW(o,t);p._= k;t._= m._;s._= l._;var j=(1&&b._)(p._,a[848]);r._= (1&&b._)(j,a[849]);;xX(r);n._= (1&&b._)(j,a[850],a[851]);;o._= rg(1);;xY();r._[a[339]]= fX(o,f,g,c,b,p,d);v._= 0;for(;qp(v._,10);v._++){q._= (1&&b._)(r._,a[860]);;yf(q,v);u._= 0;for(;qp(u._,10);u._++){h._= (1&&b._)(q._,a[861]);;yg(h,s);yh(h,u);yi(h,v)}};(1&&t._)()}}function yj(b,c){if(qs(b._,c._)){b._= a[22]}}function ga(c,b){return  function(d){qJ()[a[413]](d[a[355]]);(1&&c._)(a[863],d[a[355]]);(1&&b._)()}}function gb(c,b){return  function(f){var d={};d._= f;yk(c,d);c._[a[50]]= (1&&b._)(a[863]);yl(c)}}function gc(c,d,f,b){return  function(m){var j={},h={};var g=(1&&c._)();var k=d._[a[867]][a[45]](a[358]);for(var l=0;qp(l,k[a[40]]);l++){j._= k[l];;h._= (1&&b._)(m,f._);;ym(h,j);yn(h,j);yo(h,j);if(qs(g,j._)){h._[a[93]][a[92]](a[360])}}}}function yp(c,b){c._[a[15]][a[298]]= b._[a[868]]|| a[869]}function yq(c,b){c._[a[15]][a[698]]= b._[a[870]]|| a[869]}function gd(d,b,c){return  function(){d._[a[50]]= (1&&b._)()|| (1&&c._)(a[863])}}function gf(c,b){return  function(d){qJ()[a[413]](d[a[355]]);var f=rc()(d[a[355]]);if(qs(rc()(qX()(f)),f)){f+= a[27]};qJ()[a[413]](f);(1&&c._)(a[871],f);(1&&b._)()}}function gg(b){return  function(c){c[a[50]]= (1&&b._)(a[871])}}function gh(c,d,b){return  function(k){var g={},f={};var h=c._[a[872]][a[45]](a[358]);for(var j=0;qp(j,h[a[40]]);j++){g._= h[j];;f._= (1&&b._)(k,d._);;yr(f,g);ys(f,g)}}}function gj(c,b){return  function(f){var d={},g={};d._= f;qJ()[a[413]](d._[a[355]]);g._= (1&&c._)();;yt(g,d);(1&&b._)()}}function gk(c,d,f,b){return  function(m){var k={},h={};var n=(1&&c._)();var g=n&& n[a[15]][a[874]];var l=d._[a[875]][a[45]](a[358]);for(var j=0;qp(j,l[a[40]]);j++){k._= l[j];;h._= (1&&b._)(m,f._);;yu(h,k);yv(h,k);if(qs(g,k._)){h._[a[93]][a[92]](a[360])}}}}function gp(b,d,c,f){return  function(g){(1&&b._)();qJ()[a[413]](g[a[355]]);if(qs(g[a[355]][a[60]](a[465]),-1)){(1&&d._)(g[a[355]]);return};var l=g[a[355]][a[45]](a[336]);for(var h=0;qp(h,l[a[40]]);h++){var k=l[h];k= k[a[45]](a[465]);if(qh(k[a[40]],2)){continue};var j=k[0][a[20]]();if(!j){continue};var m=k[1][a[20]]();qJ()[a[413]](j,m);(1&&f._)(j,(1&&c._)(j),m,false)}}}function gq(d,f,b,c){return  function(k){var j={},g={};for(var h=0;qp(h,d._[a[877]][a[40]]);h++){j._= d._[a[877]][h];;g._= (1&&b._)(k,f._);;yw(g,j);yx(g,j);yy(j,g);if((1&&c._)(g._[a[355]])){g._[a[93]][a[92]](a[360])}}}}function gu(b,c,d,f){return  function(h){(1&&b._)();var m=(1&&c._)();qJ()[a[413]](h[a[355]]);if(!m){return};if(qs(h[a[355]][a[60]](a[465]),-1)){m[a[93]][a[341]](h[a[355]]);return};var g=h[a[355]][a[45]](a[336]);for(var j=0;qp(j,g[a[40]]);j++){var l=g[j];l= l[a[45]](a[465]);if(qh(l[a[40]],2)){continue};var k=l[0][a[20]]();if(!k){continue};var n=l[1][a[20]]();k= (1&&d._)(k);if((1&&f._)(k,m[a[15]][k],n)){m[a[15]][k]= a[22]}else {m[a[15]][k]= n}}}}function gv(d,f,b,c){return  function(k){var j={},g={};for(var h=0;qp(h,d._[a[879]][a[40]]);h++){j._= d._[a[879]][h];;g._= (1&&b._)(k,f._);;yz(g,j);yA(g,j);if((1&&c._)(g._[a[355]])){g._[a[93]][a[92]](a[360])}}}}function gz(b,c,d,f){return  function(h){(1&&b._)();var m=(1&&c._)(a[272]);qJ()[a[413]](h[a[355]]);if(!m){return};if(qs(h[a[355]][a[60]](a[465]),-1)){m[a[93]][a[341]](h[a[355]]);return};var g=h[a[355]][a[45]](a[336]);for(var j=0;qp(j,g[a[40]]);j++){var l=g[j];l= l[a[45]](a[465]);if(qh(l[a[40]],2)){continue};var k=l[0][a[20]]();if(!k){continue};var n=l[1][a[20]]();k= (1&&d._)(k);if((1&&f._)(k,m[a[15]][k],n)){m[a[15]][k]= a[22]}else {m[a[15]][k]= n}}}}function gA(d,f,b,c){return  function(k){var j={},g={};for(var h=0;qp(h,d._[a[881]][a[40]]);h++){j._= d._[a[881]][h];;g._= (1&&b._)(k,f._);;yB(g,j);yC(g,j);if((1&&c._)(g._[a[355]])){g._[a[93]][a[92]](a[360])}}}}function gE(b,c,d,f){return  function(h){(1&&b._)();var m=(1&&c._)();qJ()[a[413]](h[a[355]]);if(!m){return};if(qs(h[a[355]][a[60]](a[465]),-1)){m[a[93]][a[341]](h[a[355]]);return};var g=h[a[355]][a[45]](a[336]);for(var j=0;qp(j,g[a[40]]);j++){var l=g[j];l= l[a[45]](a[465]);if(qh(l[a[40]],2)){continue};var k=l[0][a[20]]();if(!k){continue};var n=l[1][a[20]]();k= (1&&d._)(k);if((1&&f._)(k,m[a[15]][k],n)){m[a[15]][k]= a[22]}else {m[a[15]][k]= n}}}}function gF(d,f,b,c){return  function(k){var j={},g={};for(var h=0;qp(h,d._[a[883]][a[40]]);h++){j._= d._[a[883]][h];;g._= (1&&b._)(k,f._);;yD(g,j);yE(g,j);yF(j,g);if((1&&c._)(j._[1])){g._[a[93]][a[92]](a[360])}}}}function gH(d,c,b){return  function(f){qJ()[a[413]](f[a[355]]);var g=f[a[355]];if(qs(g[a[58]](),a[356])){g= d._[a[289]]};if(qs(g[a[58]](),a[379])){g= a[12]};(1&&c._)(g);(1&&b._)()}}function gI(c,b){return  function(f){var d={};d._= f;yG(c,d);d._[a[50]]= (1&&b._)(a[886])}}function gJ(d,g,h,c,b,f){return  function(o){var m={},j={};var k=(1&&d._)();var n=g._[a[359]][a[45]](a[358]);for(var l=0;qp(l,n[a[40]]);l++){m._= n[l];;j._= (1&&c._)(o,h._);;yH(j,m);var p=m._;if(qs(p[a[58]](),a[356])){p= a[12]};(1&&b._)(j._,p)[a[50]]= (1&&f._)(m._);if(qh(k,null)&& qs(k[a[9]][a[58]](),p[a[58]]())){j._[a[93]][a[92]](a[360])}}}}function gK(b,c,d){return  function(){var g={};var f=(1&&b._)();g._= (1&&c._)(a[886]);;if(qh(f,null)){switch(f[a[9]]){case a[315]:;case a[316]:;case a[317]:;case a[318]:;case a[319]:;case a[320]:;case a[887]:g._= (1&&c._)(f[a[9]]);break}};yI(d,g)}}function gM(c,b){return  function(d){qJ()[a[413]](d[a[355]]);(1&&c._)(a[888],d[a[355]]);(1&&b._)()}}function yJ(b){b._[a[351]]= gN(a)}function gO(c,b){return  function(j){var f={},d={};var g=a[890][a[45]](a[358]);for(var h=0;qp(h,g[a[40]]);h++){f._= g[h];;d._= (1&&b._)(j,c._);;yK(d,f);yL(d,f)}}}function yM(c,b){c._[a[343]]= b._}function yN(b){b._[a[15]][a[14]]= a[345]}function yO(c,b){c._[a[64]]= qm(a[344],b._)}function gQ(d,b,c,f){return  function(g){(1&&b._)(d._);g[a[299]]();if(c._){return (1&&c._)()};f._[a[339]](g)}}function gR(k,g,h,f,b,d,j,c){return  function(l){(1&&g._)(k._);l[a[299]]();if(!(1&&f._)(h._)){return};var m={};m[a[340]]= gS(h,b,d,j);(1&&c._)(k._,m)}}function gU(d,c,f,g,b){return  function(h){var k={};h[a[299]]();if(!(1&&c._)(d._)){return};k._= qm(a[895],d._[a[58]]());;var j={};j[a[340]]= gV(k,f);(1&&b._)(g._,j)}}function gX(d,c,a,b){return  function(){var f=(1&&a._)(d._,c._,gY());(1&&b._)(f)}}function gZ(g,d,m,h,l,j,n,f,k,b,c){return  function(o){o[a[299]]();if(!(1&&d._)(g._)){return};var p=!m._[a[123]](o[a[102]]);if(p|| qs(g._,a[400])|| h._[qm(a[900],g._)]){if(j._[a[5]](qm(a[846],l._))){j._[a[5]](qm(a[846],l._))[a[5]](a[901])[a[132]]();return};var r=(1&&f._)(n._,l._,ha());(1&&k._)(r);return};var q={};q[a[340]]= hb(l,b,n,k);(1&&c._)(m._,q)}}function yQ(b){b._= a[528]}function yR(c,b){c._[a[343]]= b._}function yS(b){b._[a[15]][a[14]]= a[345]}function yT(c,b){c._[a[64]]= qm(a[344],b._)}function hd(k,f,j,g,h,d,b,c){return  function(){(1&&f._)(k._);if(j._){var l={};l[a[340]]= he(g,h,d);(1&&b._)(k._,l)}else {(1&&c._)(g._)}}}function yU(a){a._= true}function hg(d,c,f,b){return  function(){if(qs(d._,c._)){return};b._[a[39]](f._[a[42]](c._,d._))}}function yV(a,b){a._= qm(b._,1)}function yW(a,b){a._= qm(b._,1)}function yX(a,b){a._= qm(b._,1)}function yY(a,b){a._= qm(b._,1)}function yZ(a){a._= 0}function hh(b){return  function(){b._[a[915]]= true}}function hi(j,n,k,p,g,l,d,f,h,o,m,b,c){return  function(){var t={},q={};if(qy(j._,n._)){return};t._= (1&&g._)(j._,k._,p._);;if(!t._){qJ()[a[204]](qm(j._,a[916]));return};t._[a[69]](l._[a[86]],(1&&d._)(j._));t._[a[69]](a[917],k._);t._[a[98]](a[101],hj(f,t,h));if(o._){var r=(1&&b._)(m._[a[918]],a[919],a[160]);r[a[70]](t._);var s=(1&&b._)(r,a[920]);s[a[50]]= (1&&d._)(j._);q._= t._[a[339]];;za(t);r[a[339]]= hl(c,q);return r}else {m._[a[918]][a[70]](t._);return t._}}}function hm(p,k,l,b,h,n,g,j,o,c,f,m,q,d){return  function(){var B={},A={};if(qs(p._,0)){k._[a[93]][a[92]](a[921])};zb(p);var u=(1&&b._)(l._[a[918]],a[922],a[923]);B._= rg(1);;var r=null;var v=(1&&b._)(u,a[924],a[925]);var w=(1&&b._)(u,a[926],a[851],a[22]);var D=(1&&b._)(v,a[927],a[928]);var z=(1&&b._)(v,a[929],a[923]);A._= (1&&b._)(z,a[930],a[931]);;zc(l,A,h);var s=l._;while(!s[a[936]]&& qp(n._,g._[a[40]])){zd(h,n,g);var C=h._[a[60]](a[465]);if(qh(C,-1)){j._= h._[a[42]](qm(C,1));h._= h._[a[42]](0,C)}else {j._= null};ze(n);if(qs(h._[a[40]],1)){(1&&o._)(h._);continue};var t=h._[a[61]](0);if(qs(t,a[62])){w[a[50]]= (1&&c._)(h._[a[42]](1));continue};if(qs(t,a[463])){w[a[50]]= h._[a[42]](1);continue};if(qh(s,l._)){(1&&f._)();continue};if(qy(h._,m._)){continue};var y=(1&&d._)(h._,j._,q._);if(!y){qJ()[a[85]](qm(a[932],h._));continue};zf(B);if(qs(B._,0)){var E=(1&&b._)(D,a[933],a[934]);E[a[70]](y);continue};if(qs(B._,1)){r= (1&&b._)(D,a[935])};if(qr(B._,2)){r[a[70]](y)}}}}function hn(d,b,c){return  function(f){var g={};g._= (1&&b._)(d._[a[918]],a[937]);;if(qs(c._,a[909])){g._[a[93]][a[92]](a[938])};zg(d,g);d._[a[918]][a[70]](g._);zh(d,g,c)}}function ho(c,b){return  function(){if((qs(c._[a[942]],a[467])&& qs(b._,a[468]))|| (qs(c._[a[942]],a[911])&& qs(b._,a[452]))|| (qs(c._[a[942]],a[909])&& qs(b._,a[910]))){var d=c._[a[918]][a[943]];if(qs(c._[a[918]][a[209]][a[40]],0)){c._[a[918]][a[17]][a[28]]()};zi(c);zj(c)}}}function hp(d,c,f,b){return  function(){if(qs(d._[a[942]],a[911])|| qs(d._[a[942]],a[909])){zk(c,d);if(qs(d._[a[918]][a[209]][a[40]],0)){d._[a[918]][a[28]]()};zl(d);zm(d);(1&&f._)(true)}else {(1&&b._)(d._[a[918]],a[945],a[22])}}}function hq(c,d,b){return  function(){if(qs(c._[a[918]],d._)){zn(c);(1&&b._)(c._[a[918]],a[946]);return};if(qs(c._[a[918]][a[9]][a[58]](),a[930])){c._[a[918]]= (1&&b._)(c._[a[918]][a[17]],a[930],a[931])}else {}}}function hr(d,f,g,h,j,c,b){return  function(k){switch(k){case a[467]:(1&&d._)();break;case a[911]:;case a[909]:(1&&f._)();break;case a[468]:;case a[452]:;case a[910]:(1&&g._)();break;case a[912]:(1&&h._)();break;case a[913]:(1&&j._)();break;case a[466]:(1&&c._)();break;default:(1&&b._)();break}}}function hs(c,f,b,d,g){return  function(){while(qp(f._,b._[a[40]])){zo(c,f,b);var h=c._[a[60]](a[465]);if(qh(h,-1)){d._= c._[a[42]](qm(h,1));c._= c._[a[42]](0,h)}else {d._= null};zp(f);(1&&g._)(c._);continue}}}function zq(b){b._[a[21]]= a[22]}function zr(b){b._[a[15]][a[18]]= a[19]}function zs(b){b._[a[947]]= null}function zt(b){b._[a[15]][a[948]]= a[80]}function zu(b){b._[a[15]][a[601]]= a[949]}function zv(b){b._[a[15]][a[950]]= a[951]}function zw(b){b._[a[15]][a[18]]= a[705]}function hv(b){return  function(){b._[a[15]][a[601]]= a[22]}}function zx(c,b){c._[a[947]]= b._}function zy(c,b){c._[a[953]]= b._}function zz(c,b){c._[a[955]]= b._}function zA(b,c){if(qi(b._[a[958]],c._)){b._[a[15]][a[18]]= c._?a[22]:a[19];b._[a[958]]= c._}}function zB(c,b){c._= b._= a[975]}function zC(c,b){c._= b._= a[975]}function hE(b){return  function(d){for(var c=0;qp(c,b._[a[40]]);c++){b._[c][a[15]][a[491]]= d}}}function hF(b){return  function(d){for(var c=0;qp(c,b._[a[40]]);c++){b._[c][a[15]][a[690]]= d}}}function hG(b){return  function(c){b._[a[15]][a[491]]= c}}function hH(b){return  function(c){b._[a[15]][a[690]]= c}}function zD(c,b){c._[a[15]][a[375]]= b._[a[376]]}function zE(b){b._[a[15]][a[375]]= a[22]}function zF(c,b){c._[a[15]][a[375]]= b._[a[376]]}function zG(b){b._[a[15]][a[375]]= a[22]}function hI(){return  function(){}}function hJ(){return  function(){}}function hK(){return  function(){}}function zH(b){b._[a[284]]= a[744]}function zI(b){b._[a[812]]= a[813]}function hL(c,b){return  function(){(1&&b._)(c._[a[422]][0])}}function hM(){return  function(b){return b[a[107]]()}}function hN(){return  function(b){return b[a[58]]()}}function zJ(b){b._[a[15]][a[1006]]= b._[a[15]][a[490]]= a[22]}function zK(b){b._[a[15]][a[698]]= a[22]}function zL(b,c){b._[a[15]][a[125]]= qm(c._,a[1014])}function zM(b){b._[a[15]][a[25]]= a[22]}function zN(b){b._[a[15]][a[698]]= a[22]}function zO(b,c){b._[a[15]][a[125]]= c._}function zP(b){b._[a[15]][a[25]]= a[22]}function zQ(a){a._++}function zR(b,d,c){if(qu(d._[a[409]][b._][a[1018]],1)){c._+= qn(d._[a[409]][b._][a[1018]],1)}}function zS(a,b){if(qu(a._,b._)){b._= a._}}function zT(a){ln= a._}function zU(c,d,b){c._= qm(d._+ a[465],b._)}function zV(a){a._++}function zW(c,b){c._[a[1020]]= b._}function zX(c,b){c._[a[1021]]= b._}function zY(b,c){b._[a[1022]]= c._}function zZ(d,f,h,l,g,b,j,c,k,m){f._[d._]= g._[qm(h._+ a[465],l._)]= {rowindex:h._,colindex:b._,rowspan:j._,colspan:c._,td:k._,tr:m._,tdindex:l._,spannodes:null}}function Aa(b,a){if(qv(b._,a._)){}}function Ab(d,g,b,c,f){if(!d._){c._[qm(g._+ a[465],b._)]= d._= {rowindex:g._,colindex:b._,spannodes:[]}}else {f._++}}function Ac(b,a){if(!b._){a._++}}function hT(b){return  function(c){return b._[qm(c[a[1020]]+ a[465],c[a[1021]])]}}function Ad(b,a){a._[b._]= true}function Ae(b,a){a._[b._]= true}function Af(c,b){c._= b._[a[858]]}function hU(b,c,d){return  function(k,m){var l={},o={};var j=b._;l._= {};;for(var f=0;qp(f,b._);f++){var h=c._[qm(k+ a[465],f)];if(h&& h[a[1025]]){for(var g=0;qp(g,h[a[1025]][a[40]]);g++){var n=h[a[1025]][g];if(qs(n[a[1020]],k)){continue};o._= qm(n[a[1020]]+ a[465],n[a[1021]]);;if(l._[o._]){continue};Ag(o,l);n[a[69]](a[1023],qm(1,qV()[a[111]](1,qY()(n[a[87]](a[1023]))|| 1)));j-= qV()[a[111]](1,qY()(n[a[87]](a[1024]))|| 1)}}};var p=d._[a[1031]](k);for(var g=0;qp(g,j);g++){p[a[1019]](rg(1))}}}function hV(d,c,f,b){return  function(k,r){var q={},s={},g={},u={},v={},o={},n={};var l=d._;q._= {};;s._= 0;for(;qp(s._,d._);s._++){var j=c._[qm(s._+ a[465],k)];qJ()[a[413]](j);if(j&& j[a[1025]]){g._= false;;for(var h=0;qp(h,j[a[1025]][a[40]]);h++){var t=j[a[1025]][h];if(qs(t[a[1021]],k)){continue};u._= qm(t[a[1020]]+ a[465],t[a[1021]]);;if(q._[u._]){Ah(g);continue};Ai(u,q);t[a[69]](a[1024],qm(1,qV()[a[111]](1,qY()(t[a[87]](a[1024]))|| 1)));Aj(g)};if(g._){continue}};v._= a[104];;Ak(v,s,f);var t=f._[a[63]][a[13]](v._);var p=f._[a[1017]][s._];o._= null;;if(j&& j[a[858]]){o._= j[a[858]]}else {for(var m=k;qp(m,b._);m++){n._= c._[qm(s._+ a[465],m)];;if(!n._||  !n._[a[858]] || qh(n._[a[858]][a[17]],p)){continue};Al(o,n);break}};p[a[16]](t,o._)}}}function Am(c,b){c._= b._[a[858]]}function hW(h,f,g,d,c,b){return  function(){var j={};j._= 0;;for(var m=h._;qp(m,f._);m++){for(var k=g._;qp(k,d._);k++){var l=c._[qm(m+ a[465],k)];if(!l){return false};if(l[a[1025]]&& qu(l[a[1025]][a[40]],1)){return false};An(j)}};var p=0;for(var o=0;qp(o,b._[a[40]]);o++){var n=b._[o];p+= ql(qV()[a[111]](1,n[a[87]](a[1023])|| 1),qV()[a[111]](1,n[a[87]](a[1024])|| 1))};if(qh(p,j._)){return false};return true}}function Ao(c,b){if(qh(c._,b._)){c._[a[1034]]= true}}function Ap(b,c){b._[a[50]]= c._}function hY(a,b,c){return  function(){(1&&a._)();(1&&c._)(b._)}}function hZ(f,g,d,b,c){return  function(){qI()(f._[a[1041]]);f._[a[1041]]= rb()(ia(f,g,d,b,c),10)}}function ib(b,c){return  function(){qI()(b._[a[1041]]);b._[a[1041]]= rb()(ic(c),10)}}function ig(b,a){return  function(c){(1&&a._)(c,b._)}}function ii(b,d,c){return  function(g){var j=b._[a[236]]();try{var h=d._[a[17]];for(var f=0;qp(f,h[a[209]][a[40]]);f++){if(qs(h[a[209]][f],d._)){j[a[1056]](h,f);j[a[1057]](h,qm(f,1));c._[a[207]]();c._[a[310]](j);b._[a[227]](g);break}}}catch(e){}}}function ij(b){return  function(){(1&&b._)(a[393])}}function ik(b){return  function(){(1&&b._)(a[395])}}function il(b){return  function(){(1&&b._)(a[407])}}function im(b,a){return  function(){(1&&a._)(b._)}}function io(c,b){return  function(d){(1&&b._)(d,a[22],a[22],a[1062],ip(c));(1&&b._)(d,a[22],a[22],a[1063],iq(c))}}function ir(b,a){return  function(){(1&&a._)(b._)}}function At(b){b._[a[21]]= a[1067]}function Au(b){b._[a[109]]= b._[a[1068]]}function it(a,b){return  function(){(1&&a._)();Av(b)}}function iu(d,c,f,b){return  function(g){(1&&b._)(g,a[1069],a[1069],a[1070],iv(d,c,f))}}function Ax(b){b._[a[332]]= onclose}function ix(b,a){return  function(c){(1&&a._)(c,b._)}}function Ay(c,b){c._[a[332]]= b._}function iz(b){return  function(c){var d={};d._= c;Az(b,d);b._[a[50]]= qm(a[467]+ d._[a[9]][a[58]](),a[468]);b._[a[93]][a[92]](a[852]);AA(b)}}function iA(b){return  function(c){b._[a[93]][a[28]](a[852]);AB(b)}}function AC(b){b._[a[1075]]= iB(a,b)}function iC(b){return  function(){b._[a[1073]][a[69]](a[1076],a[22])}}function iD(b,c){return  function(){if(!b._){c._[a[1073]][a[88]](a[1076])}}}function iE(c,f,d,b){return  function(){if(c._){return};f._[a[1073]][a[69]](a[1076],a[22]);AD(d);(1&&b._)(f._[a[1073]],f._,iF(d,f))}}function AF(a,b){a._= b._}function AG(b,a){b._= a._}function AH(b,a){b._= a._}function AI(a){a._= true}function AJ(c,b){c._[a[21]]= b._[a[1081]]}function AK(b,c){b._[a[1081]]= c._[a[21]]}function AL(a,b){a._= b._[0]}function AM(b,c){b._= c._[qn(c._[a[40]],1)]}function AN(b,d,f,c){if(b._[a[1083]]&& qu(d._[a[40]],b._[a[1083]])){f._= true}else {if(b._[a[1084]]&& qu(c._[a[50]][a[40]],b._[a[1084]])){f._= true}}}function AO(b){b._[a[1086]]= true}function AP(b){b._[a[40]]= 0}function AQ(a,b,c){a._= {html:b._,time:c._}}function AR(b,c){b._[a[1081]]= c._}function AS(b,c){b._[a[1087]]= c._}function AT(b,c){b._[a[404]]= c._}function AU(b,c){b._[a[1091]]= c._}function AV(b,c){b._[a[80]]= c._[a[109]]}function AW(b){b._[a[1093]]= b._[a[1094]]}function AX(b,c){b._[a[1094]]= c._}function AY(b){b._[a[312]]= b._[a[1090]]}function AZ(b,c){b._[a[1090]]= c._}function Ba(b){b._[a[40]]= 0}function Bb(b){b._[a[40]]= 0}function Bc(b,c){b._[a[21]]= qm(a[1097]+ c._,a[1098])}function Bd(c,d,b){c._[a[1105]]= qm(qm(a[1106]+ d._,a[106])+ b._,a[1107])}function Be(b){b._[a[284]]= a[744]}function iW(c,b){return  function(){var f={};var d=c._[a[422]][0];if(!d){return};f._=  new (qP())();;f._[a[1109]](d);f._[a[1110]]= iX(f,b)}}function iY(b,c){return  function(){c._[a[29]](b._)}}function Bf(b){b._= b._[a[17]]}function Bg(b){if(qh(b._[a[234]],1)){b._= b._[a[17]]}}function Bh(b){b._= b._[a[17]]}function Bi(b){if(qh(b._[a[234]],1)|| qs(b._[a[9]],a[210])|| qs(b._[a[9]],a[288])){b._= b._[a[17]]}}function jl(b){return  function(c){var d={};d._= c;if(!d._|| qs(d._,b._) ||  !d._[a[1115]] ||  !b._[a[123]](d._) || d._[a[21]]){return};while(qh(d._[a[17]],b._)){if(qu(d._[a[17]][a[209]][a[40]],1)){d._[a[17]][a[29]](d._);return};Bj(d)};b._[a[29]](d._)}}function Bk(a){a._= true}function Bl(b){b._[a[21]]= a[1067]}function Bm(a,b){a._= b._}function Bn(a,b){a._= b._}function Bo(a,b){a._= b._}function Bp(a,b){a._= b._}function Bq(a,b){a._= b._}function Br(a,b){a._= b._}function Bs(a,c,b){if(qs(a._,c._)){a._= b._}}function Bt(a,c,b){if(qs(a._,c._)){a._= b._}}function js(c,b){return  function(g){var f=0;for(var d=0;qp(d,c._[a[209]][a[40]]);d++){if(qs(c._[a[209]][d],b._)){f= d}};if(qr(g,f)){return g};return qn(g,1)}}function jv(c,d,f,g,b){return  function(){if(qh(c._,d._)){if(c._[a[123]](d._)){for(var j=0;qp(j,f._);j++){if(c._[a[209]][j][a[123]](d._)){return true}};return false}else {if(d._[a[123]](c._)){for(var j=0;qp(j,g._);j++){if(d._[a[209]][j][a[123]](c._)){return false}};return true}};var h=(1&&b._)(c._,d._);if(qp(h,0)){return true};if(qu(h,0)){return false}};if(qu(f._,g._)){return true};return false}}function Bu(a,g,b,c,d,f){if(a._){g._= b._;b._= c._;c._= g._;g._= d._;d._= f._;f._= g._}}function Bv(b){b._= b._[a[17]]}function Bw(b){b._= b._[a[17]]}function Bx(b,a,d,c){if(qs(b._,a._)){d._-= c._}}function By(b){b._= b._[a[17]]}function Bz(a){a._= true}function BA(b){b._= b._[a[17]]}function BB(b){b._= b._[a[17]]}function BC(b){b._= b._[a[17]]}function BD(a){a._= true}function BE(b){b._= b._[a[17]]}function BF(b){b._= b._[a[17]]}function jw(d,f,c,g,b){return  function(j,k){if(qs(j,d._)&& qs(k,f._)){return};for(var h=j[a[209]];qp(k,h[a[40]]);k++){if(qs(j,d._)&& qs(k,f._)){return};var l=h[k];if(qs(l[a[234]],3)){(1&&c._)(l);continue};if(qs(l,d._)|| l[a[123]](d._)){(1&&g._)(l,0);return}else {(1&&c._)(l)}};if(qs(j,d._)&& qs(k,f._)){return};if(j[a[17]]){(1&&g._)(j[a[17]],qm((1&&b._)(j),1))}else {}}}function jy(b,c){return  function(h){var f={},k={};var g=h[a[209]];var d=[];for(var j=0;qp(j,g[a[40]]);j++){d[a[39]](g[j])};for(var j=0;qp(j,d[a[40]]);j++){f._= d[j];;if(qs(f._[a[234]],3)){k._= (1&&b._)(f._[a[82]]);;BG(f,k)};if(qs(f._[a[234]],1)){(1&&c._)(f._)}}}}function jz(c,b){return  function(d){var g={},f={};g._= d;if(qs(g._[a[234]],1)){(1&&c._)(g._)};if(qs(g._[a[234]],3)){f._= (1&&b._)(g._[a[82]]);;BH(g,f)}}}function jB(d,b,c){return  function(h){if(qh(h[a[234]],1)){if(qs(h[a[234]],3)){d._[a[39]](h)};return};if(!(1&&b._)(h)){d._[a[39]](h);return};var f=h[a[209]];for(var g=0;qp(g,f[a[40]]);g++){(1&&c._)(f[g])}}}function jD(j,c,b,g,k,h,f,d){return  function(){var m={};m._= jE(f,d);var l=true;for(var n=0;l&& qp(n,j._[a[40]]);n++){var r=j._[n];if(r[a[82]][a[20]]()){l= false}};for(var n=0;l&& qp(n,c._[a[40]]);n++){var q=(1&&b._)(c._[n]);for(var o=0;l&& qp(o,q[a[40]]);o++){var p=q[o];if(qs(p[a[234]],3)||  !(1&&g._)(p)){l= false}}};if(l){for(var n=0;qp(n,c._[a[40]]);n++){if(k._){(1&&h._)(c._[n]);continue};var q=(1&&b._)(c._[n]);for(var o=0;l&& qp(o,q[a[40]]);o++){(1&&h._)(q[o])}}}else {for(var n=0;qp(n,c._[a[40]]);n++){if(k._){(1&&m._)(c._[n]);continue};var q=(1&&b._)(c._[n]);for(var o=0;qp(o,q[a[40]]);o++){(1&&m._)(q[o])}};for(var o=0;qp(o,j._[a[40]]);o++){if(j._[o][a[82]][a[20]]()){(1&&f._)(j._[o])}}}}}function jF(b,c){return  function(d){if(qs(d[a[234]],1)){b._[a[39]](d)};if(qs(d[a[234]],3)&& d[a[82]][a[20]]()){c._[a[39]](d)}}}function jH(b,c){return  function(d){if(qs(d[a[234]],1)){b._[a[39]](d)};if(qs(d[a[234]],3)){c._[a[39]](d)}}}function jJ(b){return  function(c){return c[a[93]][a[123]](b._)}}function jL(b){return  function(c){return c[a[93]][a[123]](b._)}}function jM(d,f,c,b){return  function(g){g[a[93]][a[28]](d._);var h=g[a[209]];for(var j=0;qp(j,h[a[40]]);j++){if(qs(h[j][a[234]],1)){(1&&f._)(h[j])}};if(qs(g[a[9]],a[286])&&  !g[a[81]][a[40]]){(1&&c._)(g);(1&&b._)(g)}}}function jN(c,b){return  function(d){var f=d[a[209]];for(var g=0;qp(g,f[a[40]]);g++){if(qs(f[g][a[234]],1)){(1&&c._)(f[g])}};d[a[93]][a[92]](b._)}}function jO(c,b){return  function(f){var d={};d._= c._[a[13]](a[514]);;f[a[17]][a[16]](d._,f);d._[a[70]](f);BI(d,b)}}function jQ(){return  function(a){return true}}function jR(f,d,b,c){return  function(g){if(qh(g[a[234]],1)){return};f._[a[985]](g,0);f._[a[986]](g,g[a[209]][a[40]]);d._[a[227]](a[533]);var k=g[a[367]](a[1118]);k= (1&&b._)(k);k[a[39]](g);for(var j=0;qp(j,k[a[40]]);j++){var h=k[j];if(qs(h[a[9]],a[286])){h[a[88]](a[15]);h[a[88]](a[474]);if(!h[a[81]][a[40]]){(1&&c._)(h)}}else {if(qt(h[a[87]](a[15]),a[22])){h[a[88]](a[15])}}}}}function jS(a){return  function(b){(1&&a._)(b)}}function jT(){return  function(a){}}function jV(b,c){return  function(d){return qs(d[a[15]][b._],c._)}}function jX(b,c){return  function(d){return qs(d[a[15]][b._],c._)}}function jY(f,d,c,b){return  function(k){var g={};g._= k;BJ(f,g);if(!g._[a[15]][a[14]]){g._[a[88]](a[15])};var h=g._[a[209]];for(var j=0;qp(j,h[a[40]]);j++){if(qs(h[j][a[234]],1)){(1&&d._)(h[j])}};if(qs(g._[a[9]],a[286])&&  !g._[a[81]][a[40]]){(1&&c._)(g._);(1&&b._)(g._)}}}function jZ(b,c,d,f){return  function(k){var g={};g._= k;var h=g._[a[209]];for(var j=0;qp(j,h[a[40]]);j++){if(qs(h[j][a[234]],1)){(1&&b._)(h[j])}};BK(c,g);BL(g,d,f)}}function ka(b,c,f,d){return  function(h){var g={};g._= b._[a[13]](a[514]);;h[a[17]][a[16]](g._,h);g._[a[70]](h);BM(c,g,f);BN(g,d,f)}}function kc(l,j,c,m,d,k,b,g,f,h){return  function(){var t={},n={},o={};var q={};q._= kd(m,j,o,d,k,b,g,f);o._= q._;if(l._[a[408]]&&  !j._[a[40]]){if(!l._[a[239]]){return};j._[a[39]](l._[a[239]])};if(!j._[a[40]]){return};t._= j._[0];;BO(t);while(t._){n._= true;;for(var p=0;qp(p,j._[a[40]]);p++){if(!t._[a[123]](j._[p])){BP(n);break}};if(n._){break};BQ(t)};if(!t._){return};t._= (1&&c._)(t._);var v=[];for(var p=0;qp(p,j._[a[40]]);p++){var s=j._[p];for(;qh(s,t._);s= s[a[17]]){if(qs(s[a[17]],t._)){if(qs(v[a[60]](s),-1)){v[a[39]](s)};break}}};if(!v[a[40]]){return};if(qs(t._[a[9]],a[322])|| qs(t._[a[9]],a[321])){for(var u=0;qp(u,v[a[40]]);u++){var r=v[u];(1&&o._)(r[a[209]])}}else {(1&&o._)(v)};(1&&h._)();return true}}function kf(b){return  function(c){b._[a[39]](c)}}function kg(a,b){return  function(){BR(a);if((1&&b._)()){return};BS(a)}}function ki(b){return  function(c){b._[a[39]](c)}}function kj(g,h,b,j,c,f,d,k){return  function(){var z={},l={},y={},y={},n={},v={},B={},A={};var r={};var q={};r._= kk(y,v,d,j,B,A);q._= kl(y,v,d,j);if(!g._[a[40]]){return};z._= g._[0];;BT(z);while(z._){l._= true;;for(var p=0;qp(p,g._[a[40]]);p++){if(!z._[a[123]](g._[p])){BU(l);break}};if(l._){break};BV(z)};if(!z._){return};var C=[];for(var p=0;qp(p,g._[a[40]]);p++){y._= g._[p];;for(;qh(y._,z._);y._= y._[a[17]]){if(qs(y._[a[17]],z._)){if(qs(C[a[60]](y._),-1)){C[a[39]](y._)};break}}};if(!C[a[40]]){return};var D=qs(h._,a[550])?a[321]:a[322];if(qs(z._[a[9]],a[322])|| qs(z._[a[9]],a[321])){if(qh(D,z._[a[9]])){return};for(var p=0;qp(p,C[a[40]]);p++){var t=C[p];var s=null;var o=(1&&b._)(t[a[209]]);for(var m=0;qp(m,o[a[40]]);m++){n._= o[m];;BW(n)}};return false}else {v._= qL()[a[13]](D);;z._[a[16]](v._,C[0]);for(var p=0;qp(p,C[a[40]]);p++){y._= C[p];;if(qs(y._[a[234]],3)&&  !y._[a[82]][a[20]]()|| qs(y._[a[9]],a[210])){z._[a[29]](y._);continue};var w=y._[a[9]];if(qs(w,a[322])|| qs(w,a[321])){while(y._[a[83]]){v._[a[70]](y._[a[83]])};z._[a[29]](y._);continue};var u=j._[a[13]](a[323]);u[a[70]](y._);v._[a[70]](u);if(qs(w,a[314])|| qs(w,a[290])){(1&&c._)(y._,u);(1&&f._)(y._)}};B._= 0;;A._= v._[a[209]][a[40]];;(1&&r._)();(1&&q._)();k._[a[985]](v._,B._);k._[a[986]](v._,A._);return true}}}function Cj(c,b){while(c._[a[17]]&& qh(c._[a[17]],b._)){c._= c._[a[17]]}}function Ck(b){b._= b._[a[391]]}function Cl(a){a._= false}function Cm(b,c){b._[a[21]]= c._}function Cn(b){b._[a[15]][a[1007]]= a[537]}function kv(g,f,b,c,d){return  function(h){Co(g,f);(1&&b._)();var j=c._[a[444]]|| rf()[a[445]];if(j){j(d._,kw(g,b))}}}function kx(b,d,f,c){return  function(j,g){var h={};if(j){h._= (1&&b._)(a[272])|| (1&&d._)(a[272]);;Cq(h,f);h._[a[69]](a[195],j);(1&&c._)();return};if(g){qC()(qm(a[1130],g))}else {qC()(a[448])}}}function Cr(a,b){a._= b._}function Cs(c,b){c._[a[836]]= qm(a[1135],b._)}function Ct(b,c){b._[a[21]]= c._}function kJ(b,f,d,c){return  function(j,g,h){var k=(1&&b._)(h);if(qs(k[0],a[466])){k= qm(f._,k[a[42]](1))};return qm(qm(g+ a[475],d._)+ (1&&c._)(k),d._)}}function Cv(b){b._= a[7]}function Cw(b){b._= a[471]}function kL(b,f,d,c){return  function(j,g,h){var k=(1&&b._)(h);if(qh(k[a[60]](a[1139]),-1)&& qs(k[a[42]](0,f._[a[40]]),f._)){k= k[a[42]](qn(f._[a[40]],1))};return qm(qm(g+ a[475],d._)+ (1&&c._)(k),d._)}}function Cx(b){b._= a[7]}function Cy(b){b._= a[471]}function kN(d,c,b){return  function(){var f=c._[qn(d._,1)];if((1&&b._)(f[a[9]])){if(!f[a[83]]){return};if(qs(f[a[209]][a[40]],1)&& qs(f[a[83]][a[9]],a[210])){return}};return true}}function kT(a,b){return  function(c){b._[a[50]]= c}}function CL(b){if(qs( typeof (b._),a[1165])){b._= true}}function CM(a,b){a._=  !!b._}function CN(c,b){c._[a[188]][a[191]]= b._?a[1166]:a[192]}function CO(b,c){if(b._){b._[a[301]]= c._}}function CZ(b,c){b._[a[738]]= c._}function Dt(b){b._[a[1198]]= true}function Du(b){b._[a[15]][a[18]]= a[19]}function Dv(b){b._[a[15]][a[18]]= a[705]}function Dw(b){b._[a[1198]]= true}function Dx(b){b._[a[15]][a[18]]= a[705]}function Dy(b){b._[a[15]][a[18]]= a[19]}function lc(b,d,g,f,c){return  function(k){var j={};j._= k;if(qs(b._,j._)){return};if(qh(b._,-1)){d._[b._][a[93]][a[28]](a[852]);Dz(b,g)};DA(b,j);d._[b._][a[93]][a[92]](a[852]);DB(b,g);var h=f._[j._];if(h){DC(j,f);h(g._[b._])};var h=c._[j._];if(h){h(g._[b._])}}}function ld(j,b,k,f,h,g,d,c){return  function(o,n,q,l){var p={};var m=(1&&b._)(j._,a[1206],null,n);var r=(1&&b._)(k._,a[1207],a[1208],n);p._= f._[a[40]];;f._[a[39]](m);h._[a[39]](r);g._[a[39]](q);d._[a[39]](l);if(qz(o,HTMLElement)|| qz(o,DocumentFragment)){m[a[70]](o)}else {m[a[50]]= o};if(qs(p._,0)){(1&&c._)(p._)}else {r[a[15]][a[18]]= a[19]};m[a[339]]= le(p,c);return r}}function DD(b){b._[a[776]]= lg()}function DE(d,b,c){d._[a[738]]= b._[a[1214]]|| qm(a[1215],c._[a[2]])}function lj(c,d,b){return  function(f){DF(c);if(qs(f[a[40]],0)){(rf()[a[1220]]|| rf()[a[1221]])(a[1219]);return};(1&&b._)(f,d._)}}function lk(b,c,a){return  function(d){DG(b);(1&&a._)(c._)}}function ll(b){return  function(){b._[a[97]]()}}function lm(j,f,d,g,h,c,b){return  function(k){if(j._&& (1&&d._)(k[a[425]],k,f._)){g._[a[132]]();return};rb()(lo(f,h,g,c,b),10)}}function DH(b){b._[a[15]][a[14]]= a[1230]}function DI(b){b._= b._[a[17]]}function DJ(b){b._[a[50]]= qm(a[34],a[465])}function DK(b){b._[a[284]]= a[429]}function lr(b,c){return  function(){c._[a[69]](a[738],b._[a[89]])}}function DL(b){b._[a[284]]= a[429]}function lv(a,b,c){return  function(){rb()(lw(a,b,c),10)}}function lx(f,d,b,c){return  function(){var h={},g={};h._= f._[a[89]][a[20]]();;if(!h._){return};g._= qL()[a[13]](a[12]);;DP(g,h);if(!g._[a[15]][a[491]]){DQ(f);return};(1&&d._)(h._);if(b._){qJ()[a[413]](h._);(1&&b._)(h._);DR(b)};c._[a[132]]()}}function ly(b){return  function(){b._[a[97]]()}}function lz(b){return  function(){b._[a[339]]()}}function lA(b,c){return  function(n){var g={},o={},f={},h={},q={},s={};var k={};var l={};var m={};k._= lB();l._= lC(g);m._= lD(o);g._= k._;o._= l._;f._=  new (qD())(216);;for(var t=0;qp(t,6);t++){for(var p=0;qp(p,6);p++){for(var r=0;qp(r,6);r++){h._= (1&&m._)(t,p,r);;q._= qm((qj(t,2))* 6,p);;s._= qm(qV()[a[260]](qo(t,2))* 6,r);;DV(s,q,f,h)}}};var d=[];for(var j=0;qp(j,f._[a[40]]);j++){if(qs(j% 12,0)){d[a[39]](a[1250])};d[a[39]](a[1251]);d[a[39]](f._[j]);d[a[39]](a[1252]);d[a[39]](f._[j]);d[a[39]](a[1253]);d[a[39]](f._[j]);d[a[39]](a[1254]);d[a[39]](f._[j]);d[a[39]](a[1255]);if(qs(j% 12,11)){d[a[39]](a[1256])}};n[a[21]]= qm(a[1257]+ d[a[108]](a[22]),a[1258]);n[a[339]]= lE(b,c)}}function lF(b,c,d,f,g){return  function(o){var j=[{n:a[1262],h:a[1263]},{n:a[1264],h:a[1265]},{n:a[1266],h:a[1267]},{n:a[1268],h:a[1269]},{n:a[1270],h:a[1271]},{n:a[1272],h:a[1273]},{n:a[1274],h:a[1275]},{n:a[1276],h:a[1277]},{n:a[1278],h:a[1279]},{n:a[684],h:a[1280]},{n:a[1281],h:a[1282]},{n:a[685],h:a[1283]},{n:a[1284],h:a[1285]},{n:a[1286],h:a[1287]},{n:a[1288],h:a[1289]},{n:a[1290],h:a[1291]}];var k=[{n:a[1292],h:a[1293]},{n:a[1294],h:a[1295]},{n:a[1296],h:a[1297]},{n:a[1298],h:a[1299]},{n:a[1300],h:a[1301]},{n:a[1302],h:a[1303]},{n:a[1304],h:a[1305]},{n:a[1306],h:a[1307]},{n:a[1308],h:a[1309]},{n:a[1310],h:a[1311]},{n:a[1312],h:a[1313]},{n:a[1314],h:a[1315]},{n:a[1316],h:a[1317]},{n:a[1318],h:a[1319]},{n:a[1320],h:a[1321]},{n:a[1322],h:a[1323]},{n:a[1324],h:a[1325]},{n:a[1326],h:a[1327]},{n:a[1328],h:a[1329]},{n:a[1330],h:a[1331]},{n:a[1332],h:a[1333]},{n:a[1334],h:a[1335]},{n:a[1336],h:a[1337]},{n:a[1338],h:a[1339]},{n:a[1340],h:a[1341]},{n:a[1342],h:a[1343]},{n:a[1344],h:a[1345]},{n:a[1346],h:a[1347]},{n:a[1348],h:a[1349]},{n:a[1350],h:a[1351]},{n:a[1352],h:a[1353]},{n:a[1354],h:a[1355]},{n:a[1356],h:a[1357]},{n:a[1358],h:a[1359]},{n:a[1360],h:a[1361]},{n:a[1362],h:a[1363]},{n:a[1364],h:a[1365]},{n:a[1366],h:a[1367]},{n:a[1368],h:a[1369]},{n:a[1370],h:a[1371]},{n:a[1372],h:a[1373]},{n:a[1374],h:a[1375]},{n:a[1376],h:a[1377]},{n:a[1378],h:a[1379]},{n:a[1380],h:a[1381]},{n:a[1382],h:a[1383]},{n:a[1384],h:a[1385]},{n:a[1386],h:a[1387]},{n:a[1388],h:a[1389]},{n:a[1390],h:a[1391]},{n:a[1392],h:a[1393]},{n:a[1394],h:a[1395]},{n:a[1396],h:a[1397]},{n:a[1398],h:a[1399]},{n:a[1400],h:a[1401]},{n:a[1402],h:a[1403]},{n:a[1404],h:a[1405]},{n:a[1406],h:a[1407]},{n:a[1408],h:a[1409]},{n:a[1410],h:a[1411]},{n:a[1412],h:a[1413]},{n:a[1414],h:a[1415]},{n:a[1416],h:a[1417]},{n:a[1418],h:a[1419]},{n:a[1420],h:a[1421]},{n:a[1422],h:a[1423]},{n:a[1424],h:a[1425]},{n:a[1426],h:a[1427]},{n:a[1428],h:a[1429]},{n:a[1430],h:a[1431]},{n:a[1432],h:a[1433]},{n:a[1434],h:a[1435]},{n:a[1436],h:a[1437]},{n:a[1438],h:a[1439]},{n:a[1440],h:a[1441]},{n:a[1442],h:a[1443]},{n:a[1444],h:a[1445]},{n:a[1446],h:a[1447]},{n:a[1448],h:a[1449]},{n:a[1450],h:a[1451]},{n:a[1452],h:a[1453]},{n:a[1454],h:a[1455]},{n:a[1456],h:a[1457]},{n:a[1458],h:a[1459]},{n:a[1460],h:a[1461]},{n:a[1462],h:a[1463]},{n:a[1464],h:a[1465]},{n:a[1466],h:a[1467]},{n:a[1468],h:a[1469]},{n:a[1470],h:a[1471]},{n:a[1472],h:a[1473]},{n:a[1474],h:a[1475]},{n:a[1476],h:a[1477]},{n:a[1478],h:a[1479]},{n:a[1480],h:a[1481]},{n:a[1416],h:a[1417]},{n:a[1482],h:a[1483]},{n:a[1484],h:a[1485]},{n:a[1486],h:a[1487]},{n:a[1488],h:a[1489]},{n:a[1490],h:a[1491]},{n:a[1492],h:a[1493]},{n:a[1494],h:a[1495]},{n:a[1496],h:a[1497]},{n:a[1498],h:a[1499]},{n:a[1500],h:a[1501]},{n:a[1502],h:a[1503]},{n:a[1504],h:a[1505]},{n:a[1506],h:a[1507]},{n:a[1508],h:a[1509]},{n:a[1510],h:a[1511]},{n:a[1512],h:a[1513]},{n:a[1514],h:a[1515]},{n:a[1516],h:a[1517]},{n:a[1518],h:a[1519]},{n:a[1520],h:a[1521]},{n:a[1522],h:a[1523]},{n:a[1524],h:a[1525]},{n:a[1526],h:a[1527]},{n:a[1528],h:a[1529]},{n:a[1530],h:a[1531]},{n:a[1532],h:a[1533]}];var h=[];for(var l=0;qp(l,j[a[40]]);l++){h[a[39]](a[1534]);h[a[39]](j[l][a[1535]]);h[a[39]](a[1252]);h[a[39]](j[l][a[1535]]);h[a[39]](a[470]);h[a[39]](j[l][a[1536]]);h[a[39]](a[1537]);h[a[39]](j[l][a[1535]]);h[a[39]](a[1253]);h[a[39]](j[l][a[1536]]);h[a[39]](a[1538])};var m=(1&&b._)(o,a[12]);m[a[21]]= qm(a[1539]+ (1&&d._)((1&&c._)(a[1540])),a[1541]);m[a[21]]+= qm(a[1257]+ h[a[108]](a[22]),a[1258]);var h=[];for(var l=0;qp(l,k[a[40]]);l++){if(qs(l% 16,0)){h[a[39]](a[1250])};h[a[39]](a[1534]);h[a[39]](k[l][a[1535]]);h[a[39]](a[1542]);h[a[39]](k[l][a[1535]]);h[a[39]](a[470]);h[a[39]](k[l][a[1536]]);h[a[39]](a[1537]);h[a[39]](k[l][a[1535]]);h[a[39]](a[1253]);h[a[39]](k[l][a[1536]]);h[a[39]](a[1538]);if(qs(l% 16,15)){h[a[39]](a[1256])}};if(qu(k% 16,0)){h[a[39]](a[1256])};var n=(1&&b._)(o,a[12]);n[a[21]]= qm(a[1543]+ (1&&d._)((1&&c._)(a[1544])),a[1541]);n[a[21]]+= qm(a[1257]+ h[a[108]](a[22]),a[1258]);o[a[339]]= lG(f,g)}}function lH(g,c,f,h,j,b,d){return  function(l){var k={};DW(g);rf()[a[1547]]= {cancel:lI(c,f),select:lJ(c,f,h),setCallback:lK(c),update:lL(j)};k._= (1&&b._)(l,a[183],a[1548]);;Ea(k,d)}}function lO(f,b,g,d,c){return  function(m,n){var p={},q={},k={},o={},t={},s={},h={};p._= m;q._= n;if(qh(f._,null)){f._[a[28]]()};Eb(p);k._= (1&&b._)(p._,a[1552],a[1553]);;f._= (1&&b._)(k._,a[183],a[1554],a[185]);f._[a[188]][a[187]](a[186]);f._[a[188]][a[190]](a[1555]);f._[a[188]][a[132]]();var j=f._[a[188]];for(var l in g._){o._= l;t._= g._[o._];;if(qs( typeof (t._),a[8])){s._= (1&&b._)(j[a[196]],a[15]);;Ec(s,o);Ed(s,t)}};h._= j[a[5]](a[1556]);;h._[a[201]]= lP(d);Ee(d,h);j[a[73]][a[21]]= (1&&c._)();if(d._[a[1559]]){var r=j[a[13]](a[1560]);r[a[69]](a[738],d._[a[1559]]);j[a[196]][a[70]](r)};switch(q._){case a[725]:Ef(k);break;default:Eg(k,q);break}}}function lQ(b){return  function(c){(1&&b._)(c,a[725])}}function lR(b){return  function(c){(1&&b._)(c,a[1564])}}function lS(b){return  function(c){(1&&b._)(c,a[1566])}}function lT(b){return  function(){b._[a[193]][a[964]]()}}function lU(d,c,b){return  function(){var f=d._[a[93]][a[341]](a[1570]);if(f){(1&&b._)(c._,a[961]);Eh(c)}else {(1&&b._)(c._,a[960]);Ei(c)}}}function Ej(b,c){if(qs(b._,a[1573])){c._= true}}function Ek(a){if(a._){}}function lX(c,g,d,j,b,h,f){return  function(){if(c._){return};El(c);d._[a[29]](g._);qL()[a[120]](a[134],j._);(1&&b._)();if(h._){(1&&h._)()};if(f._[a[129]]){f._[a[129]]()}}}function lY(b){return  function(c){if(qs(c[a[122]],27)){(1&&b._)()}}}function lZ(){return  function(){rf()[a[97]]()}}function Em(b,c){b._[a[50]]= c._}function En(b,c){if(b._[a[1579]]){c._[a[21]]= b._[a[1579]]}else {c._[a[21]]= a[1580]}}function ma(a){return  function(){rb()(a._,200)}}function Eo(c,b){c._[a[339]]= b._}function mb(f,h,j,d,c,b,g){return  function(k){var l={},m={};if(qs(k[a[102]],f._)){return};l._= h._;;m._= j._;;(1&&g._)(k,mc(h,l,j,m,d,c,b))}}function Es(c,b){c._[a[132]]= b._}function md(){return  function(){}}function mh(c,b){return  function(){return b._[a[135]](c._,arguments)}}function mj(){return  function(){this[a[1588]][a[135]](this,arguments)}}function mk(){return  function(){}}function Ev(c,b){c._[a[1]]= b._}function Ew(b,c){b._[a[1589]]= c._}function Ex(c,b){c._[a[1]]= b._}function Ey(c,b){c._[a[1590]]= b._}function mm(c,b){return  function(){this[a[1592]]= null;this[a[1593]]=  ++c._;b._[a[1588]][a[135]](this,arguments)}}function mn(){return  function(b){b= rc()(b);b= b[a[36]](/&/g,a[55]);b= b[a[36]](/</g,a[54]);b= b[a[36]](/>/g,a[53]);b= b[a[36]](/'/g,a[51]);b= b[a[36]](/\x22/g,a[52]);b= b[a[36]](/(\s)\s/g,a[1595]);return b}}function mo(b){return  function(d,f){var c={},g={};c._= d;g._= f;if(!c._){return a[22]};c._= c._[a[36]](/\s+/g,a[470]);Ez(b,g);EA(b,c);var h=b._[a[50]]|| b._[a[1599]]|| a[22];EB(b);return h}}function mp(){return  function(f,d){var h={},b={};h._= f;b._= d;EC(b,h);if(!this[a[1592]]){return};var g=this[a[1592]][h._];if(!g){return};for(var c=0;qp(c,g[a[40]]);c++){if(qs(g[c][a[1601]],b._)|| qs(g[c][a[1602]],b._)){g[a[131]](c,1);return true}};return false}}function mq(b){return  function(g,f){var j={},c={};j._= g;c._= f;ED(c,j);if(!this[a[1592]]){this[a[1592]]= {}};var h=this[a[1592]][j._];if(!h){h= this[a[1592]][j._]= []};for(var d=0;qp(d,h[a[40]]);d++){if(qs(h[d][a[1601]],c._)){return h[d][a[1602]]}};h[a[39]]({Handler:c._,UniqueID:++b._});return b._}}function mr(){return  function(l,b,c){var d={},g={},g={};d._= {Object:this,Name:l,Arguments:b|| [],Caller:c,ReturnValue:null};;var f=this[a[1592]];if(!f){return d._};var j=f[l];var k=f[a[1118]];if(j&& j[a[40]]){var m=j;for(var h=0;qp(h,m[a[40]]);h++){g._= m[h];;EE(d,g);EF(d,g);g._[a[1601]][a[1605]](this,this,d._)}};if(k&& k[a[40]]){var m=k;for(var h=0;qp(h,m[a[40]]);h++){g._= m[h];;EG(d,g);EH(d,g);g._[a[1601]][a[1605]](this,this,d._)}};EI(d);EJ(d);return d._}}function mt(b){return  function(c){b._[a[1588]][a[135]](this,arguments);this[a[1607]]= c;this[a[1608]]= c[a[58]]();this[a[1609]]= a[22];this[a[1610]]= a[471];this[a[1611]]= a[22];this[a[1612]]= a[89]}}function mu(){return  function(b){var c= new this[a[1589]](this[a[1607]]);c[a[1609]]= this[a[1609]];c[a[1610]]= this[a[1610]];c[a[1611]]= this[a[1611]];c[a[1612]]= this[a[1612]];return c}}function mv(){return  function(){return this[a[1607]]}}function mw(){return  function(){return this[a[1608]]}}function mx(){return  function(){return this[a[1609]]}}function my(){return  function(b){this[a[1609]]= rc()(b);this[a[1612]]= a[89]}}function mz(){return  function(){return this[a[1610]]}}function mA(){return  function(b){this[a[1610]]= rc()(b)}}function mB(){return  function(b){this[a[1611]]= b|| a[22];this[a[1612]]= a[1081]}}function mC(){return  function(b){if(qs(this[a[1612]],a[1081])){return this[a[1611]]};return qm(qm(this[a[1607]]+ a[475],this[a[1610]])+ this[a[1594]](this[a[1609]]),this[a[1610]])}}function mE(){return  function(b,d,c){return b[a[42]](d,c)[a[45]](a[470])[a[108]](a[22])[a[58]]()}}function mF(b){return  function(c){this[a[1607]]= c;this[a[1608]]= c[a[58]]();this[a[1623]]= null;this[a[1624]]= null;this[a[1625]]= null;this[a[1626]]= [];this[a[1627]]= null;this[a[234]]= 0;b._[a[1588]][a[135]](this,arguments)}}function mG(){return  function(){}}function mH(){return  function(){}}function mI(){return  function(){return !!this[a[1623]]}}function mJ(){return  function(){for(var c=this;qh(c,null);c= c[a[1624]]){if(!c[a[1632]]){continue};var b=c[a[1634]](a[1633]);if(!b){continue};b= b[a[58]]();if(qs(b,a[68])){return true}}}}function mK(){return  function(b,c){if(qs(this[a[1624]],null)){return false};this[a[1624]][a[1636]](this,c);return true}}function mL(){return  function(c){if(qs(this[a[1624]],null)){return null};var b=this[a[1624]][a[1638]](this);if(!c&& qs(b,0)){return this[a[1624]][a[1637]]()};return this[a[1624]][a[1639]][qn(b,1)]}}function mM(){return  function(c){if(qs(this[a[1624]],null)){return null};var b=this[a[1624]][a[1638]](this);if(!c&& qv(b+ 1,this[a[1624]][a[1639]][a[40]])){return this[a[1624]][a[1640]]()};return this[a[1624]][a[1639]][qm(b,1)]}}function mN(){return  function(d,b){d= d[a[58]]();if(b){b= b[a[58]]()};for(var c=this[a[1624]];qh(c,null);c= c[a[1624]]){if(qs(c[a[1608]],d)|| qs(c[a[1608]],b)){return c}}}}function mO(){return  function(){var b=this[a[1626]][a[446]]();for(var c=0;qp(c,b[a[40]]);c++){b[c]= b[c][a[1613]]()};return b}}function mP(){return  function(){var b=this[a[1626]];if(qs(b[a[40]],0)){return};var d=[];for(var c=0;qp(c,b[a[40]]);c++){d[a[39]](b[c][a[1607]])};this[a[1626]]= [];for(var c=0;qp(c,d[a[40]]);c++){this[a[1644]](d[c])}}}function mQ(){return  function(){if(this[a[1627]]){return this[a[1627]][a[446]]()};return null}}function mR(){return  function(b,c){switch(b){case a[256]:;case a[1647]:return null};if(this[a[1648]]&& this[a[1648]][a[1649]]){c= this[a[1648]][a[1649]](b,c,this)};return c}}function mS(){return  function(b,a){}}function mT(){return  function(h,f,c,g){var j={},b={},b={};j._= f;if(!h){return};h= h[a[58]]();if(qs(this[a[1627]],null)){this[a[1627]]= []};for(var d=0;qp(d,this[a[1627]][a[40]]);d++){b._= this[a[1627]][d];;if(qs(b._[a[807]],h)&& qs(b._[a[1651]],c)){if(j._){EK(b,j);this[a[1644]](h);return};this[a[1627]][a[131]](d,1);this[a[1644]](h);return}};if(!j._){return};b._= {name:h,value:j._,category:c,priority:g?rg(1):1};;this[a[1627]][a[39]](b._);this[a[1644]](h)}}function mU(){return  function(d){d= d[a[58]]();for(var c=0;qp(c,this[a[1626]][a[40]]);c++){var b=this[a[1626]][c];if(qs(b[a[1608]],d)){this[a[1626]][a[131]](c,1);this[a[1644]](d);return}}}}function mV(){return  function(b){this[a[1652]](b[a[1607]]);this[a[1626]][a[39]](b);this[a[1644]](b[a[1607]])}}function mW(){return  function(d){d= d[a[58]]();for(var c=0;qp(c,this[a[1626]][a[40]]);c++){var b=this[a[1626]][c];if(qs(b[a[1608]],d)){return b}};return null}}function mX(){return  function(c){var b=this[a[1654]](c);if(qs(b,null)){return null};return b[a[1616]]()}}function mY($rte){return  function(d,g){if(qs(g,null)){this[a[1652]](d);return};var c=this[a[1654]](d);var f;if(qs(c,null)){c=  new $rte._[a[1606]](d);this[a[1626]][a[39]](c)}else {f= c[a[1616]]()};if(qs(f,g)){return};if(qs(d,a[15])){g= g[a[36]](/(^\s+|\s+$)/g,a[22])};c[a[1617]](g);this[a[1644]](d)}}function mZ(){return  function(){var b=[];for(var c=0;qp(c,this[a[1626]][a[40]]);c++){b[a[39]](this[a[1626]][c][a[1607]])};return b}}function na(){return  function(c){if(qs(this[a[1626]][a[40]],0)){return a[22]};var d=[];for(var b=0;qp(b,this[a[1626]][a[40]]);b++){d[a[39]](a[470]);d[a[39]](this[a[1626]][b][a[1621]](c))};return d[a[108]](a[22])}}function nb(){return  function(f){var b=f[a[1626]];var d=b[a[40]];for(var c=0;qp(c,d);c++){this[a[1653]](b[c][a[1613]]())}}}function nc(b){return  function(d){var j={},c={};var k=this[a[1634]](a[15]);if(!k){return};d= d[a[58]]();j._= false;;var g=k[a[45]](a[336]);c._= 0;for(;qp(c._,g[a[40]]);c._++){var f=g[c._];var h=f[a[60]](a[465]);if(qs(h,-1)){continue};if(qs(d,(1&&b._)(f,0,h))){g[a[131]](c._,1);EL(j);EM(c)}};if(j._){if(qs(g[a[40]],0)){this[a[1652]](a[15])}else {this[a[1655]](a[15],g[a[108]](a[336]))}}}}function nd(b){return  function(d){var j=this[a[1634]](a[15]);if(!j){return null};d= d[a[58]]();var g=j[a[45]](a[336]);for(var c=0;qp(c,g[a[40]]);c++){var f=g[c];var h=f[a[60]](a[465]);if(qs(h,-1)){continue};if(qs(d,(1&&b._)(f,0,h))){return f[a[42]](qm(h,1))[a[36]](/(^\s+|\s+$)/g,a[22])}}}}function ne(b){return  function(g,m){var d={},c={},j={},f={};if(!m){this[a[1659]](g);return};g= g[a[58]]();d._= qm(g+ a[465],m);;var l=this[a[1634]](a[15]);if(!l){this[a[1655]](a[15],d._);return};c._= false;;j._= l[a[45]](a[336]);;f._= 0;for(;qp(f._,j._[a[40]]);f._++){var h=j._[f._];var k=h[a[60]](a[465]);if(qs(k,-1)){continue};if(qh(g,(1&&b._)(h,0,k))){continue};if(qs(j._[f._],d._)){return};EN(f,j,d);EO(c);break};if(!c._){j._[a[39]](d._)};this[a[1655]](a[15],j._[a[108]](a[336]))}}function nf(){return  function(b){var c=[];this[a[1662]](c,b);return c[a[108]](a[22])}}function ng(){return  function(b,a){qN()()}}function nh(){return  function(b,a){qN()()}}function ni(){return  function(b){var c=[];this[a[1663]](c,b);return c[a[108]](a[22])}}function nj(){return  function(f){if(qh(this[a[1608]],f[a[1608]])){return};if(qh(this[a[1626]][a[40]],f[a[1626]][a[40]])){return};for(var d=0;qp(d,this[a[1626]][a[40]]);d++){var b=this[a[1626]][d];var c=f[a[1626]][d];if(qh(b[a[1608]],c[a[1608]])){return};if(qh(b[a[1609]],c[a[1609]])){return}};return true}}function nk(){return  function(){qN()()}}function nl(){return  function(a){qN()()}}function nm(){return  function(){if(qs(this[a[234]],3)){return this[a[1668]][a[40]]};if(this[a[1639]]){return this[a[1639]][a[40]]};return 0}}function nn(){return  function(a,b){return b}}function no(){return  function(b){return {node:this[a[1625]],offset:b}}}function np(){return  function(a){return rc()(a)}}function nq(){return  function(){if(!this[a[1639]]){return false};if(qs(this[a[1608]],a[679])){return true};if(qs(this[a[1608]],a[680])){return true};return false}}function nr(){return  function(){if(!this[a[1639]]){return false};switch(this[a[1608]]){case a[1598]:;case a[37]:;case a[12]:;case a[1675]:;case a[1676]:;case a[1677]:;case a[1678]:;case a[1679]:;case a[1680]:;case a[1681]:;case a[680]:;case a[679]:;case a[1682]:;case a[1683]:;case a[1684]:;case a[1685]:;case a[1686]:;case a[1687]:;case a[1688]:;case a[1689]:;case a[1690]:;case a[1691]:;case a[634]:;case a[856]:;case a[1692]:;case a[1693]:;case a[855]:;case a[858]:;case a[1694]:;case a[1695]:;case a[1696]:;case a[1697]:;case a[73]:return true;default:if(qs(this[a[1660]](a[1698]),a[1142])){return true}};return false}}function ns(){return  function(){switch(this[a[1608]]){case a[634]:;case a[856]:;case a[1692]:;case a[1693]:;case a[855]:;case a[858]:;case a[1694]:;case a[547]:;case a[1695]:;case a[1696]:;case a[1697]:;case a[73]:;case a[1700]:;case a[845]:return true;case a[12]:if(this[a[1660]](a[724])|| this[a[1660]](a[1701])|| this[a[1660]](a[1702])){return true};break;default:break};if(qs(this[a[1660]](a[1698]),a[1142])){return true}}}function nt(){return  function(){switch(this[a[1608]]){case a[73]:;case a[856]:;case a[1692]:;case a[1693]:;case a[855]:;case a[858]:;case a[1694]:return true}}}function nu(){return  function(){if(this[a[1703]]()){return false};switch(this[a[1608]]){case a[1681]:return false};return true}}function nv(){return  function(){switch(this[a[1608]]){case a[634]:;case a[856]:;case a[1692]:;case a[1693]:;case a[855]:;case a[858]:;case a[1694]:;case a[679]:;case a[680]:;case a[1681]:;case a[1585]:;case a[1707]:;case a[787]:;case a[1708]:;case a[126]:return false};if(qs(this[a[1660]](a[1698]),a[1142])){return false};return true}}function nw(){return  function(){switch(this[a[1608]]){case a[379]:;case a[1710]:;case a[469]:;case a[1585]:;case a[1707]:;case a[787]:;case a[1708]:;case a[65]:;case a[66]:;case a[126]:;case a[411]:return true}}}function nx(){return  function(){return qs(this[a[234]],3)|| this[a[1712]]()}}function ny(){return  function(){switch(this[a[1608]]){case a[379]:;case a[1710]:;case a[469]:;case a[1585]:;case a[1707]:;case a[787]:;case a[1708]:;case a[801]:;case a[183]:;case a[634]:;case a[1695]:;case a[65]:;case a[411]:;case a[126]:;case a[66]:return true};return false}}function nz(){return  function(){return this[a[1607]]}}function nA(){return  function(){return this[a[1608]]}}function nB(){return  function(){return this[a[1624]]}}function nC(){return  function(b){this[a[1635]](b)}}function nD(){return  function(b){return this[a[1607]]}}function nE(){return  function(){return this[a[1625]]}}function nF(){return  function(){return this[a[1621]]()}}function nG(){return  function(a){var b={};b._= a;while(b._){if(qs(b._,this)){return true};EP(b)}}}function nH(){return  function(){var c=this[a[1660]](a[490]);if(c){return c};var b=this[a[1660]](a[18]);if(qs(b,a[294])){return a[294]};if(qs(b,a[1729])|| qs(b,a[330])){return a[19]};if(qs(this[a[1608]],a[469])){return a[19]};return a[294]}}function nI(){return  function(d){var c=null;var b=null;if(qs(d,a[78])|| qs(d,a[282])){c= d}else {if(qs(this[a[1608]],a[469])){if(qs(d,a[294])){b= a[294]}}else {if(qs(d,a[19])){b= a[1729]}}};this[a[1661]](a[18],b);this[a[1661]](a[490],c)}}function nK(b){return  function(){this[a[1611]]= a[22];b._[a[1588]][a[135]](this,[a[506]])}}function nL(){return  function(c,b){c[a[39]](this[a[1611]])}}function nM(){return  function(b,a){}}function nN(){return  function(b){this[a[1611]]= rc()(b)}}function nO(){return  function(b){var c=b[a[13]](a[1734]);c[a[69]](a[1735],this[a[1611]]);return c}}function nP(){return  function(b){var c= new this[a[1589]]();c[a[1611]]= this[a[1611]];return c}}function nR(b){return  function(){this[a[1611]]= a[22];b._[a[1588]][a[135]](this,[a[1737]])}}function nS(){return  function(c,b){c[a[39]](this[a[1611]])}}function nT(){return  function(b,a){}}function nU(){return  function(b){this[a[1611]]= rc()(b)}}function nV(){return  function(b){var c=b[a[13]](a[286]);c[a[69]](a[1735],this[a[1611]]);return c}}function nW(){return  function(b){var c= new this[a[1589]]();c[a[1611]]= this[a[1611]];return c}}function nY(){return  function(b){b= rc()(b);b= b[a[36]](/&/g,a[55]);b= b[a[36]](/</g,a[54]);b= b[a[36]](/>/g,a[53]);b= b[a[36]](/'/g,a[51]);b= b[a[36]](/\x22/g,a[52]);b= b[a[36]](/\xA0/g,a[387]);b= b[a[36]](/(\s)\s/g,a[1595]);return b}}function nZ(b){return  function(c,d){if(!c){return a[22]};if(qh(c[a[60]](a[468]),-1)|| qh(c[a[60]](a[467]),-1)){return c};return (1&&b._)(c,d)}}function oa(b){return  function(){this[a[1668]]= a[22];this[a[1611]]= a[22];this[a[1612]]= a[429];b._[a[1588]][a[135]](this,[a[287]]);this[a[234]]= 3}}function ob(b){return  function(){if(qh(this[a[1612]],a[1081])){return false};if(b._[a[24]](this[a[1611]])){return true};return false}}function oc(b){return  function(){if(qh(this[a[1612]],a[1081])){return};this[a[1611]]= this[a[1611]][a[36]](b._,od())}}function oe(b){return  function(f,d){var c;if(qs(this[a[1612]],a[1081])){c= this[a[1611]]}else {c= (1&&b._)(this[a[1668]])};f[a[39]](c)}}function og(){return  function(c,b){c[a[39]](this[a[1668]])}}function oh(b){return  function(d,c){this[a[1611]]= d|| a[22];this[a[1612]]= a[1081];this[a[1668]]= (1&&b._)(this[a[1611]],this[a[1740]])}}function oi(){return  function(c,b){this[a[1668]]= rc()(c);this[a[1612]]= a[429]}}function oj(){return  function(){var b=this[a[1621]]();b= b[a[36]](/\s$/,a[387]);return b}}function ok(){return  function(){}}function ol(){return  function(b,c){if(qs(b,this[a[1625]])){return qs(c,1)?this[a[1668]][a[40]]:0};return c}}function om(){return  function(b){return {node:this[a[1625]][a[83]],offset:b}}}function on(){return  function(a){return rc()(a)}}function oo(){return  function(b){return qs(this[a[1745]],b)}}function op(){return  function(b){var c= new this[a[1589]]();c[a[1611]]= this[a[1611]];c[a[1668]]= this[a[1668]];c[a[1612]]= this[a[1612]];return c}}function oq(){return  function(){return this[a[1668]]}}function or(){return  function(c,b){this[a[1741]](c,b)}}function os(){return  function(){this[a[1749]]= true;if(this[a[1625]]){this[a[1625]][a[15]][a[14]]= a[22]}}}function ou(b){return  function(c){b._[a[1588]][a[135]](this,arguments);this[a[234]]= 1;this[a[1751]]= a[22];this[a[1752]]= a[22];this[a[1753]]= a[22]}}function ov(){return  function(b,c){if(c){this[a[1751]]= qm(this[a[1751]],b)}else {this[a[1752]]= qm(this[a[1752]],b)}}}function ow(){return  function(b){this[a[1753]]= b}}function ox(){return  function(c,b){if(this[a[1753]]){c[a[39]](this[a[1753]])}}}function oy(){return  function(){return !!this[a[1753]]}}function oz(){return  function(b){var c=[];this[a[1756]](c,b);return c[a[108]](a[22])}}function oA(){return  function(){switch(this[a[1608]]){case a[1560]:;case a[15]:;case a[66]:;case a[183]:;case a[845]:return false};if(this[a[1674]]()){return false};return true}}function oB(){return  function(c,b){if(this[a[1760]]){this[a[1756]](c,b);return};c[a[39]](a[467]);c[a[39]](this[a[1715]](b));c[a[39]](this[a[1657]](b));if(!this[a[1757]]()&&  !this[a[1761]] && this[a[1759]]()){c[a[39]](a[1762]);c[a[39]](this[a[1751]]);c[a[39]](this[a[1752]]);return c[a[108]](a[22])};c[a[39]](a[468]);c[a[39]](this[a[1751]]);this[a[1756]](c,b);c[a[39]](qm(a[1763]+ this[a[1715]](b),a[468]));c[a[39]](this[a[1752]])}}function oC(){return  function(c,b){if(qs(this[a[1608]],a[379])|| qs(this[a[1608]],a[1710])){c[a[39]](a[1140])}}}function oD(){return  function(b){var c= new this[a[1589]](this[a[1715]]());c[a[1764]](this);return c}}function oE(){return  function(b){this[a[1626]]= b[a[1642]]();this[a[1627]]= b[a[1645]]();this[a[1753]]= b[a[1753]];this[a[1751]]= b[a[1751]];this[a[1752]]= b[a[1752]]}}function oF(){return  function(b){return b[a[13]](this[a[1607]])}}function oG(){return  function(){}}function oI(b){return  function(c){b._[a[1588]][a[135]](this,arguments)}}function oJ(){return  function(b){if(qs(this[a[1608]],a[1560])){return b[a[13]](a[514])};var c=b[a[13]](this[a[1607]]);if(this[a[1753]]&& qs(this[a[1608]],a[66])){c[a[21]]= this[a[1753]]};return c}}function oK(b,c){return  function(f,d){if(this[a[1753]]){f[a[39]]((1&&b._)(this[a[1753]]))};c._[a[1663]][a[135]](this,arguments)}}function oL(){return  function(b){b= this[a[1594]](b|| a[22]);this[a[1753]]= b;if(this[a[1625]]){this[a[1625]][a[21]]= b[a[36]](/\s$/,a[387])}}}function oN(b){return  function(c){b._[a[1588]][a[135]](this,arguments);this[a[1639]]= []}}function oO(){return  function(b){var c={};c._= this[a[1608]];;switch(c._){case a[1081]:;case a[196]:;case a[73]:EQ(c);break};return b[a[13]](c._)}}function oP(){return  function(b){try{this[a[1625]][a[29]](b)}catch(x){}}}function oQ(){return  function(b,c){if(c){this[a[1625]][a[16]](b,c)}else {this[a[1625]][a[70]](b)}}}function oR(){return  function(b){b[a[1635]](true);b[a[1624]]= this;this[a[1639]][a[39]](b)}}function oS(){return  function(c,d){c[a[1635]](true);for(var b=0;qp(b,this[a[1639]][a[40]]);b++){if(qs(this[a[1639]][b],d)){c[a[1624]]= this;this[a[1639]][a[131]](b,0,c);return}}}}function oT(){return  function(d,b){d[a[1635]](true);var c=this[a[1638]](b);if(qs(c,-1)){this[a[1771]](d)}else {this[a[1774]](d,qm(c,1))}}}function oU(){return  function(b,c){b[a[1635]](true);var d=this[a[1639]][c];if(d){this[a[1772]](b,d)}else {this[a[1771]](b)}}}function oV(){return  function(){var c={};var d=this[a[1639]];if(!d[a[40]]){return};this[a[1639]]= [];for(var b=0;qp(b,d[a[40]]);b++){c._= d[b];;ER(c)}}}function oW(){return  function(){var c={};var d=this[a[1639]];if(!d[a[40]]){return};for(var b=0;qp(b,d[a[40]]);b++){c._= d[b];;if(qh(c._[a[234]],0)){continue};d[a[131]](b,1);ES(c)}}}function oX(){return  function(d,b){var f={};f._= d;var g=this[a[1639]];for(var c=0;qp(c,g[a[40]]);c++){if(qh(g[c],f._)){continue};g[a[131]](c,1);ET(f);if(b){this[a[1777]]()};return true}}}function oY($rte){return  function(){if(this[a[1639]][a[40]]){return};switch(this[a[1608]]){case a[1598]:;case a[37]:;case a[12]:;case a[1675]:;case a[1676]:;case a[1677]:;case a[1678]:;case a[1679]:;case a[1680]:;case a[1681]:;case a[858]:;case a[1694]:var c= new $rte._[a[1738]]();c[a[1620]](a[387]);this[a[1771]](c);break}}}function oZ(){return  function(c){var d=this[a[1639]];for(var b=0;qp(b,d[a[40]]);b++){if(qs(d[b],c)){return b}};return rg(1)}}function pa(){return  function(b,c){if(qs(this[a[1624]],null)){return false};if(!b){while(this[a[1639]][a[40]]){this[a[1624]][a[1772]](this[a[1639]][0],this)}};this[a[1624]][a[1636]](this,c);return true}}function pb(){return  function(){if(this[a[1639]][a[40]]){return true};if(this[a[1779]]){return true}}}function pc(){return  function(d,c){if(this[a[1779]]){d[a[39]](a[1780]);d[a[39]](this[a[1779]][a[1758]]());d[a[39]](a[1781])}else {for(var b=0;qp(b,this[a[1639]][a[40]]);b++){d[a[39]](this[a[1639]][b][a[1621]]())}}}}function pd(){return  function(b){this[a[1771]](b)}}function pe(){return  function(){var c=[];for(var b=0;qp(b,this[a[1639]][a[40]]);b++){c[a[39]](this[a[1639]][b][a[1613]](true))};return c}}function pf(b){return  function(c){var f=b._[a[1613]][a[135]](this,arguments);if(c){for(var d=0;qp(d,this[a[1639]][a[40]]);d++){f[a[1771]](this[a[1639]][d][a[1613]](c))}};return f}}function pg(){return  function(b){this[a[1771]](b)}}function ph(){return  function(b,c){return this[a[1774]](b,c)}}function pi(){return  function(b,c){return this[a[1772]](b,c)}}function pj(){return  function(b,c){return this[a[1773]](b,c)}}function pk(){return  function(c){var b=this[a[1639]];if(!b){return};return b[c]}}function pl(){return  function(){var b=this[a[1639]];if(!b){return 0};return b[a[40]]}}function pm(){return  function(d,c){for(var b=0;qp(b,this[a[1639]][a[40]]);b++){this[a[1639]][b][a[1663]](d,c)}}}function pn($rte){return  function(d){this[a[1775]]();var c= new $rte._[a[1738]]();if(d){c[a[1741]](d);this[a[1771]](c)}}}function pp(){return  function(){var b=this[a[1639]];if(b&& b[a[40]]){return false};return true}}function pr(b){return  function(c){b._[a[1588]][a[135]](this,arguments);this[a[1792]]= true;if(qs(this[a[1608]],a[858])|| qs(this[a[1608]],a[1694])){this[a[1793]]= true}}}function ps(b){return  function(c){if(this[a[1794]]){return this[a[1758]](c)};return b._[a[1621]][a[135]](this,arguments)}}function pu(b){return  function(c){b._[a[1588]][a[135]](this,arguments);this[a[1650]](a[15],a[1796],a[1797],true);if(qs(this[a[1608]],a[1708])){this[a[1650]](a[15],a[1798],a[1799],true)}else {if(qs(this[a[1608]],a[787])){this[a[1650]](a[15],a[1800],a[1799],true)}else {this[a[1650]](a[15],a[1801],a[1799],true)}}}}function pw(){return  function(b){var c={};if(qs(this[a[1608]],a[1803])){return b[a[13]](a[1804])};c._= b[a[13]](a[286]);;EU(c);return c._}}function py(b){return  function(d,c){if(qs(b._[a[1806]][a[60]](c),-1)){return false};return true}}function pz(b){return  function(d,c){if(qs(b._[a[1807]][a[60]](c),-1)){return true};return false}}function pA(b,c,d,f){return  function(j,h){var k={},g={};k._= j;g._= h;var m=k._[a[1608]];switch(m){case a[1560]:EV(b,k);break};if(c._){if(!(1&&c._)(k._,m)){k._[a[1760]]= true}};if(qs(m,a[1681])){while(d._){var l=d._[a[1608]];if(qs(l,a[680])|| qs(l,a[679])){break};EW(d);if(qs(l,a[1681])){break}}};if(qs(m,a[858])|| qs(m,a[1694])){while(d._){var l=d._[a[1608]];if(qs(l,a[855])|| qs(l,a[634])|| qs(l,a[856])|| qs(l,a[1692])|| qs(l,a[1693])){break};EX(d);if(qs(l,a[858])){break}}};if(qs(m,a[855])){while(d._){var l=d._[a[1608]];if(qs(l,a[634])|| qs(l,a[856])|| qs(l,a[1692])|| qs(l,a[1693])){break};EY(d);if(qs(l,a[855])){break}}};if(d._){d._[a[1782]](k._)}else {f._[a[39]](k._)};EZ(g,d,k)}}function pB(b){return  function(c){if(!c){return a[22]};if(qh(c[a[60]](a[468]),-1)|| qh(c[a[60]](a[467]),-1)){return c};return (1&&b._)(c)}}function pC($rte,node,AppendNode){return  function(f){if(qs(f[a[40]],0)){return};var g= new $rte._[a[1738]]();if(node._&& qs(node._[a[1660]](a[489]),a[1598])){g[a[1740]]= true};g[a[1620]](f);(1&&AppendNode._)(g)}}function pD($rte,AppendNode){return  function(d){var f= new $rte._[a[1733]]();f[a[1620]](d);(1&&AppendNode._)(f)}}function pE($rte,AppendNode){return  function(d){var f= new $rte._[a[1736]]();f[a[1620]](d);(1&&AppendNode._)(f)}}function pF(){return  function(c,d){var f=d;for(;qp(f,c[a[40]]);f++){var b=c[a[48]](f);if(qv(b,65)&& qr(b,90)){continue};if(qv(b,97)&& qr(b,122)){continue};if(qv(b,48)&& qr(b,57)){continue};if(qs(b,58)){continue};switch(c[a[61]](f)){case a[465]:;case a[106]:;case a[59]:;case a[463]:continue};break};return c[a[42]](d,f)}}function pG(){return  function(a){if(qs(a,32)){return true};if(qs(a,9)){return true};if(qs(a,10)){return true};if(qs(a,13)){return true};if(qs(a,160)){return true};return false}}function pH(ParseNodeName,IsBlankCharCode,config,$rte,ParseAttributeValue,hcfhf,dec_pattern,RGBtoHex){return  function(p,w){var r={},u={},m={},v={};var n=[];r._= qm(1,w[a[40]]);;if(qs(p[a[48]](qn(p[a[40]],2)),47)){p= p[a[32]](0,qn(p[a[40]],2))}else {p= p[a[32]](0,qn(p[a[40]],1))};u._= rg(1);;while(qp(r._,p[a[40]])){if(qs(u._,r._)){throw ( new (qM())(qm(a[1809],r._)))};Fa(u,r);m._= (1&&ParseNodeName._)(p,r._);;if(!m._){var o=p[a[48]](r._);if(!(1&&IsBlankCharCode._)(o)){};Fb(r);continue};var s=r._;Fc(r,m);while(qp(r._,p[a[40]])&& (1&&IsBlankCharCode._)(p[a[48]](r._))){r._++};if(qv(r._,p[a[40]])){if(qh(m._[a[61]](0),a[509])|| qh(m._[a[61]](1),a[1535])|| config._[a[1808]]){var l= new $rte._[a[1606]](m._);l[a[1620]](p[a[42]](s));n[a[39]](l)};return n};var o=p[a[61]](r._);if(qh(o,a[475])){if(qh(m._[a[61]](0),a[509])|| qh(m._[a[61]](1),a[1535])|| config._[a[1808]]){var l= new $rte._[a[1606]](m._);l[a[1620]](p[a[42]](s,r._));n[a[39]](l)};continue};Fd(r);while(qp(r._,p[a[40]])&& (1&&IsBlankCharCode._)(p[a[48]](r._))){r._++};if(qv(r._,p[a[40]])){if(qh(m._[a[61]](0),a[509])|| qh(m._[a[61]](1),a[1535])|| config._[a[1808]]){var l= new $rte._[a[1606]](m._);l[a[1620]](p[a[42]](s,r._));n[a[39]](l)};return n};var o=p[a[61]](r._);if(qs(o,a[471])|| qs(o,a[7])){v._= p[a[60]](o,qm(r._,1));;if(qs(v._,-1)){if(qh(m._[a[61]](0),a[509])|| qh(m._[a[61]](1),a[1535])|| config._[a[1808]]){var l= new $rte._[a[1606]](m._);l[a[1619]](o);l[a[1617]]((1&&ParseAttributeValue._)(p[a[42]](qm(r._,1))));l[a[1620]](p[a[42]](s));n[a[39]](l)};return n};if(qh(m._[a[61]](0),a[509])|| qh(m._[a[61]](1),a[1535])|| config._[a[1808]]){var l= new $rte._[a[1606]](m._);l[a[1619]](o);l[a[1617]]((1&&ParseAttributeValue._)(p[a[42]](qm(r._,1),v._)));l[a[1620]](p[a[42]](s,qm(v._,1)));n[a[39]](l)};Fe(r,v);continue};var z=r._;while(qp(r._,p[a[40]])&&  !(1&&IsBlankCharCode._)(p[a[48]](r._))){r._++};if(qh(m._[a[61]](0),a[509])|| qh(m._[a[61]](1),a[1535])|| config._[a[1808]]){var l= new $rte._[a[1606]](m._);l[a[1619]](a[22]);l[a[1617]]((1&&ParseAttributeValue._)(p[a[42]](z,r._)));l[a[1620]](p[a[42]](s,r._));n[a[39]](l)}};if(hcfhf._&& n[a[40]]){for(var q=0;qp(q,n[a[40]]);q++){if(qh(l[a[1608]],a[15])){continue};var y=l[a[1609]];if(!y|| qs(y[a[60]](a[1810]),-1)){continue};var t=y;y= y[a[36]](dec_pattern._,pI(RGBtoHex));if(qh(t,y)){l[a[1617]](t)}}};return n}}function pJ(){return  function(d,c,b){return qV()[a[260]](qm(qm(16777216,qY()(d)* 65536)+ ql(qY()(c),256),qY()(b)))[a[382]](16)[a[32]](1,6)}}function pK(ParseAttributes,$rte,AppendNode,config,core){return  function(j,n){var l=n[a[58]]();var h=(1&&ParseAttributes._)(j,n);switch(l){case a[197]:;case a[1811]:;case a[566]:;case a[1812]:;case a[1813]:;case a[1814]:;case a[343]:;case a[1815]:;case a[1816]:var m= new $rte._[a[1802]](n);for(var k=0;qp(k,h[a[40]]);k++){m[a[1653]](h[k])};(1&&AppendNode._)(m);return m;case a[589]:var m= new $rte._[a[1768]](n);for(var k=0;qp(k,h[a[40]]);k++){m[a[1653]](h[k])};if(qs(j[a[48]](qn(j[a[40]],2)),47)){(1&&AppendNode._)(m,false)}else {(1&&AppendNode._)(m,true)};return m;case a[1817]:;case a[379]:;case a[1710]:;case a[469]:;case a[65]:var m= new $rte._[a[1766]](n);for(var k=0;qp(k,h[a[40]]);k++){m[a[1653]](h[k])};(1&&AppendNode._)(m);return m;case a[66]:;case a[15]:;case a[1560]:var m= new $rte._[a[1766]](n);for(var k=0;qp(k,h[a[40]]);k++){m[a[1653]](h[k])};(1&&AppendNode._)(m,false);return m;default:var m;if(config._[a[1818]]){m= config._[a[1818]](n,h,core._)};if(!m){switch(l){case a[1803]:m=  new $rte._[a[1802]](n);break;case a[1585]:;case a[1707]:;case a[787]:;case a[1708]:;case a[183]:m=  new $rte._[a[1795]](n);break;case a[634]:;case a[856]:;case a[1692]:;case a[1693]:;case a[855]:;case a[858]:;case a[1694]:m=  new $rte._[a[1791]](n);break;case a[845]:m=  new $rte._[a[1790]](a[845]);break;default:m=  new $rte._[a[1768]](n);break};for(var k=0;qp(k,h[a[40]]);k++){m[a[1653]](h[k])}};if(qs(j[a[48]](qn(j[a[40]],2)),47)){(1&&AppendNode._)(m,false)}else {(1&&AppendNode._)(m,true)};return m}}}function pL(b){return  function(c,g){var f={};var d=g[a[58]]();if(qs(b._,null)){return};f._= b._;for(;f._;f._= f._[a[1624]]){if(qs(f._[a[1608]],d)){Ff(b,f);Fg(f);return f._}};Fh();return null}}function pM(f,c,b,d){return  function(g){if(tagbegin= qh(g[a[61]](1),a[466])){var h=(1&&f._)(g,1);if(qs(h,a[22])){(1&&c._)(g);return};return {Begin:(1&&b._)(g,h)}}else {var h=(1&&f._)(g,2);if(qs(h,a[22])){(1&&c._)(g);return};return {End:(1&&d._)(g,h)}}}}function pN(b,f,h,g,j,c,d){return  function(){var p={},o={},q={},u={},s={},t={},y={},n={},r={};p._= 0;;o._= rg(1);;while(qp(p._,b._[a[40]])){if(qs(o._,p._)){throw ( new (qM())(qm(a[1819],p._)))};Fi(o,p);q._= b._[a[60]](a[467],p._);;if(qs(q._,-1)){(1&&f._)(b._[a[42]](p._)[a[36]](/\s+$/,a[22]));break};(1&&f._)(b._[a[42]](p._,q._));Fj(p,q);if(qs(p._+ 1,b._[a[40]])){break};var l=b._[a[61]](qm(p._,1));if(qs(l,a[462])&& qs(b._[a[32]](qm(p._,1),4),a[1820])){q._= b._[a[60]](a[468],p._);if(qs(q._,-1)){(1&&h._)(qm(b._[a[42]](p._),a[468]));break};(1&&h._)(b._[a[42]](p._,qm(q._,1)));Fk(p,q);continue};if(qs(l,a[1014])){q._= b._[a[60]](qm(l,a[468]),p._);if(qs(q._,-1)){(1&&h._)(qm(b._[a[42]](p._)+ l,a[468]));break};(1&&h._)(b._[a[42]](p._,qm(q._,2)));Fl(p,q);continue};if(qs(l,a[463])){if(qs(b._[a[32]](p._,4),a[1821])){q._= b._[a[60]](a[1822],p._);if(qs(q._,-1)){(1&&g._)(qm(b._[a[42]](p._),a[1822]));break};(1&&g._)(b._[a[42]](p._,qm(q._,3)));Fm(p,q)}else {q._= b._[a[60]](a[468],p._);if(qs(q._,-1)){(1&&h._)(qm(b._[a[42]](p._),a[468]));break};(1&&h._)(b._[a[42]](p._,qm(q._,1)));Fn(p,q)};continue};if(qh(l,a[466])){var m=l[a[48]](0);if(qp(m,65)|| qu(m,122)|| (qu(m,90)&& qp(m,97))){(1&&f._)(b._[a[42]](p._,qm(p._,1)));Fo(p);continue}};u._= p._;;for(q._= b._[a[60]](a[468],p._);qu(q._,-1);q._= b._[a[60]](a[468],u._)){s._= b._[a[60]](a[471],u._);;t._= b._[a[60]](a[7],u._);;Fp(t,s);if(qu(s._,-1)&& qp(s._,q._)){s._= b._[a[60]](b._[a[61]](s._),qm(s._,1));if(qu(s._,-1)){Fq(u,s);continue}};break};if(qs(q._,-1)){(1&&f._)(b._[a[42]](p._));break};var w=b._[a[42]](p._,qm(q._,1));y._= (1&&j._)(w);;Fr(p,q);if(!y._){continue};n._= null;;Fs(y,n);if(qs(n._,a[1560])|| qs(n._,a[15])|| qs(n._,a[66])){q._= c._[a[60]](qm(a[1763],n._),p._);if(qs(q._,-1)){if(y._[a[1823]]){y._[a[1823]][a[1755]](b._[a[42]](p._))};break};if(y._[a[1823]]){y._[a[1823]][a[1755]](b._[a[42]](p._,q._))};p._= qm(c._[a[60]](a[468],q._),1);continue};var v=y._[a[1823]]|| y._[a[1824]];if(v&& (1&&d._)(v)){r._= b._[a[60]](a[467],p._);;if(qh(r._,-1)){var k=b._[a[42]](p._,r._);if(k[a[1825]](/^\s+$/g)){if(y._[a[1823]]&& qs(v[a[1660]](a[489]),a[1598])){}else {Ft(p,r);v[a[1754]](k,y._[a[1823]])}}}}}}}function pO(){return  function(b){if(b[a[1792]]){return true};if(b[a[1674]]()){return true};return false}}function Fv(a){a._= true}function pU(b,d,c){return  function(f){var g=b._[a[124]]();if(qp(d._[a[125]],100)|| qp(d._[a[25]],100)){return true};if(qp(g[a[25]],18)|| qp(g[a[125]],80)|| qp(g[a[80]],d._[a[80]])|| qp(g[a[78]],d._[a[78]])|| qu(g[a[282]],d._[a[282]])|| qu(g[a[235]],d._[a[235]])){qJ()[a[413]](d._,g);return false};var h=rf()[a[329]](f);if(qs(h[a[18]],a[19])){return false};if(qh(h[a[1835]],a[1836])&& qh(h[a[1835]],c._[a[1835]])){return false};if(qh(h[a[76]],a[77])&& qh(h[a[76]],c._[a[76]])){return false};return true}}function pY(b){return  function(r,z,p,q,n,B){var j={},A={},G={},H={},I={},J={},K={},L={},M={},N={},s={},y={},l={},o={},O={},E={},F={},t={},D={},w={},c={},d={},f={},g={},k={},v={},h={},m={},C={},Q={};j._= p;A._= q;G._=  new (qD())(0x1010400,0,0x10000,0x1010404,0x1010004,0x10404,0x4,0x10000,0x400,0x1010400,0x1010404,0x400,0x1000404,0x1010004,0x1000000,0x4,0x404,0x1000400,0x1000400,0x10400,0x10400,0x1010000,0x1010000,0x1000404,0x10004,0x1000004,0x1000004,0x10004,0,0x404,0x10404,0x1000000,0x10000,0x1010404,0x4,0x1010000,0x1010400,0x1000000,0x1000000,0x400,0x1010004,0x10000,0x10400,0x1000004,0x400,0x4,0x1000404,0x10404,0x1010404,0x10004,0x1010000,0x1000404,0x1000004,0x404,0x10404,0x1010400,0x404,0x1000400,0x1000400,0,0x10004,0x10400,0,0x1010004);;H._=  new (qD())(rg(0x7fef7fe0),rg(0x7fff8000),0x8000,0x108020,0x100000,0x20,rg(0x7fefffe0),rg(0x7fff7fe0),rg(0x7fffffe0),rg(0x7fef7fe0),rg(0x7fef8000),rg(0x80000000),rg(0x7fff8000),0x100000,0x20,rg(0x7fefffe0),0x108000,0x100020,rg(0x7fff7fe0),0,rg(0x80000000),0x8000,0x108020,rg(0x7ff00000),0x100020,rg(0x7fffffe0),0,0x108000,0x8020,rg(0x7fef8000),rg(0x7ff00000),0x8020,0,0x108020,rg(0x7fefffe0),0x100000,rg(0x7fff7fe0),rg(0x7ff00000),rg(0x7fef8000),0x8000,rg(0x7ff00000),rg(0x7fff8000),0x20,rg(0x7fef7fe0),0x108020,0x20,0x8000,rg(0x80000000),0x8020,rg(0x7fef8000),0x100000,rg(0x7fffffe0),0x100020,rg(0x7fff7fe0),rg(0x7fffffe0),0x100020,0x108000,0,rg(0x7fff8000),0x8020,rg(0x80000000),rg(0x7fefffe0),rg(0x7fef7fe0),0x108000);;I._=  new (qD())(0x208,0x8020200,0,0x8020008,0x8000200,0,0x20208,0x8000200,0x20008,0x8000008,0x8000008,0x20000,0x8020208,0x20008,0x8020000,0x208,0x8000000,0x8,0x8020200,0x200,0x20200,0x8020000,0x8020008,0x20208,0x8000208,0x20200,0x20000,0x8000208,0x8,0x8020208,0x200,0x8000000,0x8020200,0x8000000,0x20008,0x208,0x20000,0x8020200,0x8000200,0,0x200,0x20008,0x8020208,0x8000200,0x8000008,0x200,0,0x8020008,0x8000208,0x20000,0x8000000,0x8020208,0x8,0x20208,0x20200,0x8000008,0x8020000,0x8000208,0x208,0x8020000,0x20208,0x8,0x8020008,0x20200);;J._=  new (qD())(0x802001,0x2081,0x2081,0x80,0x802080,0x800081,0x800001,0x2001,0,0x802000,0x802000,0x802081,0x81,0,0x800080,0x800001,0x1,0x2000,0x800000,0x802001,0x80,0x800000,0x2001,0x2080,0x800081,0x1,0x2080,0x800080,0x2000,0x802080,0x802081,0x81,0x800080,0x800001,0x802000,0x802081,0x81,0,0,0x802000,0x2080,0x800080,0x800081,0x1,0x802001,0x2081,0x2081,0x80,0x802081,0x81,0x1,0x2000,0x800001,0x2001,0x802080,0x800081,0x2001,0x2080,0x800000,0x802001,0x80,0x800000,0x2000,0x802080);;K._=  new (qD())(0x100,0x2080100,0x2080000,0x42000100,0x80000,0x100,0x40000000,0x2080000,0x40080100,0x80000,0x2000100,0x40080100,0x42000100,0x42080000,0x80100,0x40000000,0x2000000,0x40080000,0x40080000,0,0x40000100,0x42080100,0x42080100,0x2000100,0x42080000,0x40000100,0,0x42000000,0x2080100,0x2000000,0x42000000,0x80100,0x80000,0x42000100,0x100,0x2000000,0x40000000,0x2080000,0x42000100,0x40080100,0x2000100,0x40000000,0x42080000,0x2080100,0x40080100,0x100,0x2000000,0x42080000,0x42080100,0x80100,0x42000000,0x42080100,0x2080000,0,0x40080000,0x42000000,0x80100,0x2000100,0x40000100,0x80000,0,0x40080000,0x2080100,0x40000100);;L._=  new (qD())(0x20000010,0x20400000,0x4000,0x20404010,0x20400000,0x10,0x20404010,0x400000,0x20004000,0x404010,0x400000,0x20000010,0x400010,0x20004000,0x20000000,0x4010,0,0x400010,0x20004010,0x4000,0x404000,0x20004010,0x10,0x20400010,0x20400010,0,0x404010,0x20404000,0x4010,0x404000,0x20404000,0x20000000,0x20004000,0x10,0x20400010,0x404000,0x20404010,0x400000,0x4010,0x20000010,0x400000,0x20004000,0x20000000,0x4010,0x20000010,0x20404010,0x404000,0x20400000,0x404010,0x20404000,0,0x20400010,0x10,0x4000,0x20400000,0x404010,0x4000,0x400010,0x20004010,0,0x20404000,0x20000000,0x400010,0x20004010);;M._=  new (qD())(0x200000,0x4200002,0x4000802,0,0x800,0x4000802,0x200802,0x4200800,0x4200802,0x200000,0,0x4000002,0x2,0x4000000,0x4200002,0x802,0x4000800,0x200802,0x200002,0x4000800,0x4000002,0x4200000,0x4200800,0x200002,0x4200000,0x800,0x802,0x4200802,0x200800,0x2,0x4000000,0x200800,0x4000000,0x200800,0x200000,0x4000802,0x4000802,0x4200002,0x4200002,0x2,0x200002,0x4000000,0x4000800,0x200000,0x4200800,0x802,0x200802,0x4200800,0x802,0x4000002,0x4200802,0x4200000,0x200800,0,0x2,0x4200802,0,0x200802,0x4200000,0x800,0x4000002,0x4000800,0x800,0x200002);;N._=  new (qD())(0x10001040,0x1000,0x40000,0x10041040,0x10000000,0x10001040,0x40,0x10000000,0x40040,0x10040000,0x10041040,0x41000,0x10041000,0x41040,0x1000,0x40,0x10040000,0x10000040,0x10001000,0x1040,0x41000,0x40040,0x10040040,0x10041000,0x1040,0,0,0x10040040,0x10000040,0x10001000,0x41040,0x40000,0x41040,0x40000,0x10041000,0x1000,0x40,0x10040040,0x1000,0x41040,0x10001000,0x40,0x10000040,0x10040000,0x10040040,0x10000000,0x40000,0x10001040,0,0x10041040,0x40040,0x10000040,0x10040000,0x10001000,0x10001040,0,0x10041040,0x41000,0x41000,0x1040,0x1040,0x40040,0x10000000,0x10041000);;s._= (1&&b._)(r);;y._= 0;;;;;var P;;;;;;;;var u=z[a[40]];h._= 0;;m._= qs(s._[a[40]],32)?3:9;;if(qs(m._,3)){w._= j._? new (qD())(0,32,2): new (qD())(30,rg(2),rg(2))}else {w._= j._? new (qD())(0,32,2,62,30,rg(2),64,96,2): new (qD())(94,62,rg(2),32,64,2,30,rg(2),rg(2))};C._= a[22];;Q._= a[22];;if(qs(A._,1)){c._= qg(qg((qq(n[a[48]](y._++),24)),(qq(n[a[48]](y._++),16)))| (qq(n[a[48]](y._++),8)),n[a[48]](y._++));f._= qg(qg((qq(n[a[48]](y._++),24)),(qq(n[a[48]](y._++),16)))| (qq(n[a[48]](y._++),8)),n[a[48]](y._++));Fw(y)};while(qp(y._,u)){t._= qg(qg((qq(z[a[48]](y._++),24)),(qq(z[a[48]](y._++),16)))| (qq(z[a[48]](y._++),8)),z[a[48]](y._++));D._= qg(qg((qq(z[a[48]](y._++),24)),(qq(z[a[48]](y._++),16)))| (qq(z[a[48]](y._++),8)),z[a[48]](y._++));Fx(A,j,t,c,D,f,d,g);Fy(O,t,D);Fz(D,O);FA(t,O);FB(O,t,D);FC(D,O);FD(t,O);FE(O,D,t);FF(t,O);FG(D,O);FH(O,D,t);FI(t,O);FJ(D,O);FK(O,t,D);FL(D,O);FM(t,O);FN(t);FO(D);FP(o,m,k,w,v,l,E,D,s,F,O,t,H,J,L,N,G,I,K,M);FQ(t);FR(D);FS(O,t,D);FT(D,O);FU(t,O);FV(O,D,t);FW(t,O);FX(D,O);FY(O,D,t);FZ(t,O);Ga(D,O);Gb(O,t,D);Gc(D,O);Gd(t,O);Ge(O,t,D);Gf(D,O);Gg(t,O);Gh(A,j,c,t,f,D,d,g);Q._+= rc()[a[711]]((qw(t._,24)),(qk((qw(t._,16)),0xff)),(qk((qw(t._,8)),0xff)),(qk(t._,0xff)),(qw(D._,24)),(qk((qw(D._,16)),0xff)),(qk((qw(D._,8)),0xff)),(qk(D._,0xff)));Gi(h);Gj(h,C,Q)};return qm(C._,Q._)}}function pZ(b){return  function(f){var m={},n={},s={},t={},u={},v={},w={},y={},z={},A={},o={},p={},q={},r={},g={},D={},j={},C={},l={},E={},h={},B={};m._=  new (qD())(0,0x4,0x20000000,0x20000004,0x10000,0x10004,0x20010000,0x20010004,0x200,0x204,0x20000200,0x20000204,0x10200,0x10204,0x20010200,0x20010204);;n._=  new (qD())(0,0x1,0x100000,0x100001,0x4000000,0x4000001,0x4100000,0x4100001,0x100,0x101,0x100100,0x100101,0x4000100,0x4000101,0x4100100,0x4100101);;s._=  new (qD())(0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808,0,0x8,0x800,0x808,0x1000000,0x1000008,0x1000800,0x1000808);;t._=  new (qD())(0,0x200000,0x8000000,0x8200000,0x2000,0x202000,0x8002000,0x8202000,0x20000,0x220000,0x8020000,0x8220000,0x22000,0x222000,0x8022000,0x8222000);;u._=  new (qD())(0,0x40000,0x10,0x40010,0,0x40000,0x10,0x40010,0x1000,0x41000,0x1010,0x41010,0x1000,0x41000,0x1010,0x41010);;v._=  new (qD())(0,0x400,0x20,0x420,0,0x400,0x20,0x420,0x2000000,0x2000400,0x2000020,0x2000420,0x2000000,0x2000400,0x2000020,0x2000420);;w._=  new (qD())(0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002,0,0x10000000,0x80000,0x10080000,0x2,0x10000002,0x80002,0x10080002);;y._=  new (qD())(0,0x10000,0x800,0x10800,0x20000000,0x20010000,0x20000800,0x20010800,0x20000,0x30000,0x20800,0x30800,0x20020000,0x20030000,0x20020800,0x20030800);;z._=  new (qD())(0,0x40000,0,0x40000,0x2,0x40002,0x2,0x40002,0x2000000,0x2040000,0x2000000,0x2040000,0x2000002,0x2040002,0x2000002,0x2040002);;A._=  new (qD())(0,0x10000000,0x8,0x10000008,0,0x10000000,0x8,0x10000008,0x400,0x10000400,0x408,0x10000408,0x400,0x10000400,0x408,0x10000408);;o._=  new (qD())(0,0x20,0,0x20,0x100000,0x100020,0x100000,0x100020,0x2000,0x2020,0x2000,0x2020,0x102000,0x102020,0x102000,0x102020);;p._=  new (qD())(0,0x1000000,0x200,0x1000200,0x200000,0x1200000,0x200200,0x1200200,0x4000000,0x5000000,0x4000200,0x5000200,0x4200000,0x5200000,0x4200200,0x5200200);;q._=  new (qD())(0,0x1000,0x8000000,0x8001000,0x80000,0x81000,0x8080000,0x8081000,0x10,0x1010,0x8000010,0x8001010,0x80010,0x81010,0x8080010,0x8081010);;r._=  new (qD())(0,0x4,0x100,0x104,0,0x4,0x100,0x104,0x1,0x5,0x101,0x105,0x1,0x5,0x101,0x105);;var c=qu(f[a[40]],8)?3:1;g._=  new (qD())(ql(32,c));;D._=  new (qD())(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0);;;;var k=0;l._= 0;;;;for(var d=0;qp(d,c);d++){h._= qg(qg((qq(f[a[48]](k++),24)),(qq(f[a[48]](k++),16)))| (qq(f[a[48]](k++),8)),f[a[48]](k++));B._= qg(qg((qq(f[a[48]](k++),24)),(qq(f[a[48]](k++),16)))| (qq(f[a[48]](k++),8)),f[a[48]](k++));Gk(E,h,B);Gl(B,E);Gm(h,E);Gn(E,B,h);Go(h,E);Gp(B,E);Gq(E,h,B);Gr(B,E);Gs(h,E);Gt(E,B,h);Gu(h,E);Gv(B,E);Gw(E,h,B);Gx(B,E);Gy(h,E);Gz(E,B,h);GA(h,E);GB(B,E);GC(E,h,B);GD(B,E);GE(h,E);GF(E,h,B);GG(h,B);GH(B,E);GI(b,D,h,B,j,m,n,s,t,u,v,w,C,y,z,A,o,p,q,r,E,l,g)};return g._}}function GJ(b,c){b._[a[1153]][a[1854]]= c._}function GK(a,b){if(qs(a._,20200202)|| qs(a._,80800808)){b._= true}}function GL(b){b._= a[1861]}function GM(b,c){b._= qm(a[1862],c._)}function GN(b){b._= a[1863]}function GO(b){b._= a[1864]}function GP(b){b._= a[1865]}function GQ(b){b._= a[1866]}function GR(b){b._= a[1867]}function GS(b){b._= a[1868]}function GT(b){b._= a[1869]}function GU(b){b._= a[1870]}function qf(a){return  function(){(1&&a._)()}}function rC(b){b._[a[15]][a[76]]= a[77]}function rD(b,c){b._[a[15]][a[78]]= qm(c._- qo(b._[a[79]],2),a[27])}function rE(b,c){b._[a[15]][a[80]]= qm(qn(c._,b._[a[26]])- 20,a[27])}function U(b){return  function(){if(b._[a[63]][a[73]][a[123]](b._)){var c=b._[a[124]]();if(c[a[125]]&& c[a[25]]){b._[a[97]]();b._[a[126]]()}}}}function rZ(b,c,d,f){if(qs(b._,a[178])){c._[a[15]][a[125]]= qm(d._+ f._,a[27])}}function sa(b,c,d){b._[a[15]][a[25]]= b._[a[15]][a[182]]= qm(c._+ d._,a[27])}function bv(f,g,c,h,d,b){return  function(n,o,j){var l={},k={};l._= qV()[a[111]](32,qm(f._,n* g._));;k._= qV()[a[111]](32,qm(c._,o* h._));;var m;if(qs(h._,0)){m= qo(l._,f._)}else {if(qs(g._,0)){m= qo(k._,c._)}else {m= qV()[a[111]](qV()[a[259]](qo(ql(l._,k._)/ f._,c._)))}};switch(d._[a[9]]){case a[261]:if(qs(h._,0)){d._[a[15]][a[125]]= qm(qV()[a[260]](ql(f._,m)),a[27]);sE(d)}else {sF(d);d._[a[15]][a[25]]= qm(qV()[a[260]](ql(c._,m)),a[27])};break;case a[103]:sG(d,l);sH(d,k);break;default:d._[a[15]][a[125]]= qm(qV()[a[260]](ql(f._,m)),a[27]);d._[a[15]][a[25]]= qm(qV()[a[260]](ql(c._,m)),a[27]);break};b._[a[262]]()}}function sI(d,b,c){d._[a[15]][a[80]]= qm(b._[a[80]]- c._[a[80]],a[27])}function sJ(d,b,c){d._[a[15]][a[78]]= qm(b._[a[78]]- c._[a[78]],a[27])}function sK(d,b,c,f){d._[a[15]][a[80]]= qm(qn(b._[a[80]],c._[a[80]])+ f._[a[264]],a[27])}function sL(d,b,c,f){d._[a[15]][a[78]]= qm(qn(b._[a[78]],c._[a[78]])+ f._[a[265]],a[27])}function sM(f,d,b,c){f._[a[15]][a[125]]= d._[a[15]][a[125]]= qm(b._[a[125]]+ ql(c._,2),a[27])}function sN(d,f,b,c){d._[a[15]][a[25]]= f._[a[15]][a[25]]= qm(b._[a[25]]+ ql(c._,2),a[27])}function sO(b){b._[a[15]][a[78]]= a[267]}function sP(d,c,b){d._[a[15]][a[78]]= c._[a[15]][a[78]]= qm(-b._,a[27])}function sQ(b){b._[a[15]][a[80]]= a[267]}function sR(c,d,b){c._[a[15]][a[80]]= d._[a[15]][a[80]]= qm(-b._,a[27])}function sS(c,b){c._[a[15]][a[78]]= qm(b._[a[125]],a[27])}function sT(c,b){c._[a[15]][a[80]]= qm(b._[a[25]],a[27])}function sU(c,b){c._[a[15]][a[78]]= qm(qo(b._[a[125]],2)- qo(c._[a[79]],2),a[27])}function sV(b,c){b._[a[15]][a[80]]= qm(-c._,a[27])}function sW(c,b){c._[a[15]][a[78]]= qm(qo(b._[a[125]],2)- qo(c._[a[79]],2),a[27])}function sX(c,b,d){c._[a[15]][a[80]]= qm(qm(b._[a[25]],d._)- c._[a[26]],a[27])}function sY(b,c){b._[a[15]][a[78]]= qm(-c._,a[27])}function sZ(c,b){c._[a[15]][a[80]]= qm(qo(b._[a[25]],2)- qo(c._[a[26]],2),a[27])}function ta(c,b,f,d){c._[a[15]][a[78]]= qm(qm(b._[a[125]],f._)- d._[a[79]],a[27])}function tb(c,b){c._[a[15]][a[80]]= qm(qo(b._[a[25]],2)- qo(c._[a[26]],2),a[27])}function tc(b,c){b._[a[15]][a[78]]= qm(-c._,a[27])}function td(b,c){b._[a[15]][a[80]]= qm(-c._,a[27])}function te(b,c){b._[a[15]][a[80]]= qm(-c._,a[27])}function tf(c,b,d){c._[a[15]][a[78]]= qm(qm(b._[a[125]],d._)- c._[a[79]],a[27])}function tg(b,c){b._[a[15]][a[78]]= qm(-c._,a[27])}function th(c,b,d){c._[a[15]][a[80]]= qm(qm(b._[a[25]],d._)- c._[a[26]],a[27])}function ti(c,b,d){c._[a[15]][a[78]]= qm(qm(b._[a[125]],d._)- c._[a[79]],a[27])}function tj(c,b,d){c._[a[15]][a[80]]= qm(qm(b._[a[25]],d._)- c._[a[26]],a[27])}function tl(c,b,a){if(!c._){c._= [b._,a._]}}function tm(b){b._= {left:b._[a[78]],top:b._[a[80]],right:b._[a[282]],bottom:b._[a[235]]}}function tn(c,b){if(qp(c._[a[80]],b._[a[80]])){b._[a[80]]= c._[a[80]]}}function to(c,b){if(qp(c._[a[78]],b._[a[78]])){b._[a[78]]= c._[a[78]]}}function tp(c,b){if(qu(c._[a[282]],b._[a[282]])){b._[a[282]]= c._[a[282]]}}function tq(c,b){if(qu(c._[a[235]],b._[a[235]])){b._[a[235]]= c._[a[235]]}}function tr(b){b._[a[125]]= qn(b._[a[282]],b._[a[78]])}function ts(b){b._[a[25]]= qn(b._[a[235]],b._[a[80]])}function tt(d,b,c){if(qu(qn(d._,b._[a[78]])+ c._[a[79]],b._[a[125]])){d._-= qn((qm(d._- b._[a[78]],c._[a[79]])),b._[a[125]])}}function tV(a){a._= null}function tW(a){a._= null}function cq(){return  function(){}}function cr(){return  function(){}}function up(b,c){b._[a[355]]= c._}function uv(b){b._[a[109]]+= 100}function cY(c,b){return  function(f){var d={};d._= f;b._[a[430]](c._)[a[428]](cZ(d))}}function dd(){return  function(b){qJ()[a[413]](a[438],b)}}function de(){return  function(b){qJ()[a[413]](a[440],b)}}function dl(b,d,c,f){return  function(){var g={},h={},j={},l={};var k={};k._= dm(j,d,l,c,f,h,g);l._= k._;g._= b._[a[444]]|| rf()[a[445]];;if(!d._[a[40]]||  !g._){return (1&&f._)(c._,d._)};h._= d._[a[446]]();;j._= 0;;(1&&l._)()}}function dp(a,c,b){return  function(d){var f={};f._= d;uN(a,f);if(c._){(1&&b._)()}}}function uO(b){if(qs(b._[a[284]],a[186])){}}function uP(b,c){if(qs(b._[a[284]],a[449])){c._= b._}}function dq(c,f,b,d){return  function(p){var g={},l={},k={},m={},q={};var n=p[a[60]](a[450]);while(qh(n,-1)){n= p[a[60]](a[451],n);if(qs(n,-1)){break};var h=p[a[60]](a[452],n);if(qs(h,-1)){break};var o=p[a[42]](n,h);o= o[a[36]](/\s/g,a[22]);g._=  new (rd())(qo(o[a[40]],2));;l._= 0;for(;qp(l._,o[a[40]]);l._+= 2){k._= o[a[48]](l._);;m._= o[a[48]](qm(l._,1));;uQ(k);uR(m);q._= qm(k._* 16,m._);;uS(l,g,q)};var j= new (qG())([g._[a[453]]],{type:a[454]});c._[a[39]](j);n= p[a[60]](a[450],h)};uT(f);if(b._){(1&&d._)()}}}function du(b,c){return  function(d,f,g){var h=c._[b._++];return qm(a[7]+ h,a[7])}}function va(b){b._= a[471]}function vb(a){a._= null}function vc(b,c){b._[a[501]]= c._}function vd(b,c){b._[a[503]]= c._}function ve(b,c){b._[a[504]]= c._}function wq(b){b._[a[284]]= a[429]}function dY(b){return  function(){b._[a[97]]()}}function dZ(b){return  function(){b._[a[339]]()}}function wr(b){b._[a[284]]= a[429]}function ws(b){b._[a[284]]= a[659]}function wt(b,c){b._[a[660]]=  !!c._[a[661]]}function wu(b){b._[a[284]]= a[659]}function wv(b,c){b._[a[660]]=  !!c._[a[664]]}function ea(g,h,f,c,b,d){return  function(){var k=g._[a[89]];if(!k){return};var j=h._[a[89]];if(!j){return};if(qs(f._[a[382]](),k)){(1&&c._)(j);(1&&b._)(false)};d._[a[339]]()}}function eb(g,h,f,c,b,d){return  function(){var l={};var n=g._[a[89]];if(!n){return};var k=h._[a[89]];if(!k){return};if(qs(n,k)){return};l._= 0;;for(var j=0;qp(j,1000);j++){var m=f._[a[382]]();if(qh(m,k)&& qs(m[a[58]](),n[a[58]]())){(1&&c._)(k);(1&&b._)(false);ww(l)};if(!d._[a[339]]()){break}};qJ()[a[413]](qm(a[672],l._))}}function ec(j,d,f,g,b,h,c){return  function(){var q={},m={},n={};q._= j._[a[89]];;if(!q._){return};m._= d._[a[660]];;n._= f._[a[660]];;wx(g,q);wy(g,m);wz(g,n);var k=false;var r=false;var l=false;var p=false;(1&&b._)(false);var o=h._[a[400]](q._,!!m._,k,r,!!n._,false,p);if(!o){(1&&c._)(true);o= h._[a[400]](q._,!!m._,k,r,!!n._,false,p)};return o}}function wA(c,b,d){if(qs(c._,a[550])){b._= d._[a[676]]}}function wB(c,b,d){if(qs(c._,a[552])){b._= d._[a[677]]}}function ef(j,b,g,f,h,c,d){return  function(l){var n={},k={};n._= l;k._= (1&&b._)(j._,a[352],a[678]);;wC(k,n);var m=(1&&f._)(qs(g._,a[550])?a[679]:a[680]);if(m&& qs(h._[a[329]](m)[a[681]],n._[0])){k._[a[93]][a[92]](a[360])};k._[a[339]]= eg(g,f,n,j,c,d)}}function el(d,c,f,b){return  function(){(1&&d._)(a[491],a[491],a[22],false);(1&&c._)();(1&&b._)(f._)}}function em(h,b,f,g,d,j,c){return  function(l){var k={},m={};k._= l;m._= (1&&b._)(h._,a[687]);;m._[a[69]](f._[a[86]],k._);wE(m,k);m._[a[339]]= en(k,g,d,j,c)}}function eo(f,a,c,d,b){return  function(){(1&&a._)(f._);(1&&b._)(c._,ep(d))}}function wG(b,a){b._= a._}function wH(c,b){c._[a[15]][a[690]]= b._}function wI(b){b._[a[15]][a[698]]= a[699]}function wJ(b){b._[a[15]][a[25]]= a[700]}function eu(b,h,c,g,d,f,j){return  function(l){var k={};k._= l;j._[a[713]](k._[a[701]],qm(a[702],k._[a[701]]),ev(b,h,c,g,d,f,k))}}function wN(b){b._[a[50]]= a[34]}function wO(b){b._[a[284]]= a[429]}function eA(){return  function(b){qs(b[a[87]](a[716]),a[584])}}function wP(b,c){b._[a[50]]= c._?a[719]:a[720]}function eB(k,j,g,b,c,l,d,h,f){return  function(){var m={};var r=k._[a[89]][a[20]]();if(!r){return k._[a[97]]()};var n=j._;if(!j._){m._= (1&&g._)(a[12]);;wQ(m);var p=(1&&b._)(m._,a[412],a[722]);n= (1&&b._)(p,a[183],a[723]);n[a[69]](a[716],a[584]);n[a[69]](a[724],a[725]);n[a[69]](a[726],a[22])};if(qs(r[a[60]](a[727]),0)){(1&&c._)(n,a[12],r)}else {n[a[69]](a[717],r);var q=r;var o=r[a[60]](a[728]);if(qh(o,-1)){q= qm(a[729]+ r[a[42]](o)[a[45]](a[475])[1][a[45]](a[730])[0],a[731])};var o=r[a[60]](a[732]);if(qh(o,-1)){q= qm(a[729]+ r[a[42]](qm(o,9))[a[45]](a[462])[0],a[731])};var o=r[a[60]](a[733]);if(qh(o,-1)){q= qm(a[734],r[a[42]](qm(o,12))[a[45]](a[462])[0])};var o=r[a[60]](a[735]);if(qh(o,-1)){q= qm(a[736],r[a[42]](qm(o,7))[a[45]](a[462])[0])};var o=r[a[60]](a[737]);if(qh(o,-1)){q= qm(a[736],r[a[42]](qm(o,22))[a[45]](a[462])[0])};n[a[69]](a[738],q)};(1&&d._)(l._);(1&&h._)(n);(1&&f._)()}}function eG(b){return  function(){var c={};c._= qL()[a[13]](a[65]);;wR(c);c._[a[300]]= eH(c,b);c._[a[101]]()}}function eI(b,c,d){return  function(){var f=(1&&c._)((1&&b._)(a[579]),a[747],eJ());(1&&d._)(f,a[748])}}function eK(b,c,d){return  function(){var f=(1&&c._)((1&&b._)(a[579]),a[752],eL());(1&&d._)(f,a[753])}}function wS(b){b._[a[15]][a[298]]= a[700]}function eN(b){return  function(){if(b._){b._[a[15]][a[18]]= a[19]}}}function wT(b){b._[a[15]][a[238]]= a[758]}function wU(c,b){c._[a[21]]= b._[a[761]]}function wV(b){b._[a[284]]= a[744]}function eO(){return  function(b){b[a[113]]()}}function eP(){return  function(b){b[a[113]]()}}function eQ(d,f,b,c){return  function(g){g[a[113]]();(1&&d._)(g[a[421]],g);(1&&b._)(f._);(1&&c._)()}}function eR(d,c,f,b){return  function(){(1&&c._)(d._[a[422]][0]);(1&&b._)(f._)}}function eS(a){return  function(b){var c={};c._= b;wW(a);wX(c)}}function wY(b){b._[a[284]]= a[429]}function wZ(b){b._[a[15]][a[220]]= a[772]}function eT(b,h,c,g,f,d){return  function(k){var j={};var l={};l._= eU(b,h,c);j._= l._;k[a[299]]();k[a[113]]();var m={submenu:true};m[a[340]]= eW(g,j);(1&&d._)(f._,m)}}function eX(b){return  function(){b._[a[339]]()}}function xc(c,b){if(c._){b._[a[15]][a[18]]= a[19]}}function xd(b,c){b._[a[50]]= c._?a[719]:a[720]}function eY(k,h,g,d,j,l,b,f,c){return  function(){var o={},m={};o._= k._[a[89]][a[20]]();;if(!o._){return k._[a[97]]()};m._= h._|| (1&&g._)(a[272]);;while(true){var n=m._[a[5]](a[272]);if(!n){break};(1&&d._)(n)};j._[a[776]](m._);m._[a[69]](a[195],o._);xe(m,o);(1&&b._)(l._);(1&&f._)(m._);(1&&c._)()}}function fb(b){return  function(){(1&&b._)(a[741])}}function fc(b){return  function(){(1&&b._)(a[780])}}function fd(b){return  function(){(1&&b._)(a[782])}}function fe(b){return  function(){(1&&b._)(a[749])}}function ff(b){return  function(){(1&&b._)(a[577])}}function xh(a){a._= true}function xi(b,a){b._= a._}function xj(b,c){b._[a[15]][a[125]]= qm(c._[a[125]],a[27])}function xk(b,c){b._[a[15]][a[25]]= qm(c._[a[25]],a[27])}function xl(b,c){b._[a[15]][a[797]]= qo(320.0,c._[a[125]])}function xn(b,c){b._[a[125]]= c._[a[125]]}function xo(b,c){b._[a[25]]= c._[a[25]]}function xp(b){b._[a[807]]= a[808]}function xt(b){if(b._){b._[a[15]][a[18]]= a[22]}}function xu(b){b._[a[15]][a[238]]= a[769]}function ft(b,d,c){return  function(h,g){var k={},j={},f={};k._= h;j._= g;f._= (1&&b._)(k._,a[12],a[22],a[774]);;xx(f,j);f._[a[339]]= fu(d,j,k,c)}}function fv(b,c){return  function(f){for(var d=0;qp(d,b._[a[815]][a[40]]);d++){(1&&c._)(f,b._[a[815]][d])}}}function xB(b){b._[a[15]][a[14]]= a[817]}function xC(b){b._[a[50]]= a[818]}function fA(){return  function(b){if(!b){return a[22]};return b[a[36]](a[27],a[22])}}function xD(b){b._[a[50]]= a[820]}function xE(b){b._[a[284]]= a[429]}function fB(b){return  function(){b._[a[339]]()}}function xF(b){b._[a[50]]= a[719]}function fC(d,c,b){return  function(){c._[a[69]](a[821],d._[a[89]][a[20]]());(1&&b._)()}}function xG(b){b._[a[15]][a[14]]= a[817]}function xH(b){b._[a[50]]= a[818]}function fF(){return  function(b){if(!b){return a[22]};return b[a[36]](a[27],a[22])}}function xI(b){b._[a[50]]= a[826]}function xJ(b){b._[a[284]]= a[429]}function xK(b){b._[a[50]]= a[828]}function xL(b){b._[a[284]]= a[429]}function fG(b){return  function(){b._[a[339]]()}}function fH(b){return  function(){b._[a[339]]()}}function xM(b){b._[a[50]]= a[719]}function fI(f,d,c,b){return  function(g){var j={},h={};j._= f._[a[89]][a[20]]();;h._= d._[a[89]][a[20]]();;if(qs(j._,rc()(qY()(j._)))){j._+= a[27]};if(qs(h._,rc()(qY()(h._)))){h._+= a[27]};xN(c,j);xO(c,h);if(g){(1&&b._)()}}}function xP(b){b._[a[284]]= a[429]}function fL(b,h,c,g,f,d){return  function(k){var j={};var l={};l._= fM(b,h,c);j._= l._;k[a[299]]();k[a[113]]();var m={submenu:true};m[a[340]]= fO(g,j);(1&&d._)(f._,m)}}function xS(b){b._[a[284]]= a[429]}function xT(b,c){b._[a[300]]= fP(c)}function xU(b){b._[a[284]]= a[659]}function xV(b){b._[a[836]]= a[837]}function fQ(b){return  function(){b._[a[339]]()}}function fR(c,a,b){return  function(){(1&&a._)(c._);(1&&b._)()}}function fS(n,j,g,d,k,h,m,l,o,b,f,c){return  function(){var t={},p={};t._= n._[a[89]][a[20]]();;if(!t._){return n._[a[97]]()};p._= j._|| (1&&g._)(a[845]);;while(true){var s=p._[a[5]](a[845]);if(!s){break};(1&&d._)(s)};k._[a[776]](p._);var r=t._[a[45]](a[466]);var q=r[0];if(qh(q[a[60]](a[846]),-1)){t._= qm(a[847],t._)};p._[a[69]](a[195],t._);if(h._[a[660]]){p._[a[69]](a[102],a[840])}else {if(qs(p._[a[87]](a[102]),a[840])){p._[a[88]](a[102])}};if(m._&& l._[a[89]][a[20]]()){p._[a[50]]= l._[a[89]]};xW(p,t);(1&&b._)(o._);(1&&f._)(p._);(1&&c._)()}}function xX(b){b._[a[724]]= 1}function xY(){move_y= rg(1)}function fV(d,c,b){return  function(){var f={},g={},m={},k={},l={},j={},h={};f._= 3;;g._= 3;;m._= 0;for(;qp(m._,10);m._++){k._= d._[a[209]][m._];;l._= 0;for(;qp(l._,10);l._++){j._= k._[a[209]][l._];;h._= qr(j._[a[394]],c._)&& qr(j._[a[232]],move_y);;xZ(j,h);ya(h,l,f,m,g);yb(j,l,f)};yc(k,m,g)};yd(b,c)}}function fW(b,c){return  function(d){var f={};f._= d[a[102]];;ye(b,f);(1&&c._)()}}function fX(h,f,g,c,b,j,d){return  function(){if(qs(h._,-1)|| qs(move_y,-1)){return};var k=(1&&f._)(a[634]);(1&&c._)(k,a[12],g._[a[854]]);for(var o=0;qr(o,h._);o++){var m=(1&&b._)(k,a[855]);(1&&c._)(m,a[856],g._[a[857]]);for(var n=0;qr(n,move_y);n++){var l=(1&&b._)(m,a[858]);(1&&c._)(l,a[855],g._[a[859]])}};(1&&d._)(j._)}}function yf(b,c){b._[a[232]]= c._}function yg(b,c){b._[a[862]]= c._}function yh(b,c){b._[a[394]]= c._}function yi(b,c){b._[a[232]]= c._}function yk(a,b){a._= b._}function yl(b){b._[a[15]][a[865]]= a[866]}function ym(b,c){b._[a[355]]= c._}function yn(b,c){b._[a[15]][a[461]]= qm(a[7]+ c._,a[7])}function yo(b,c){b._[a[50]]= c._}function yr(b,c){b._[a[355]]= c._}function ys(b,c){b._[a[50]]= c._}function yt(c,b){if(c._){c._[a[15]][a[874]]= b._[a[355]]}}function yu(b,c){b._[a[355]]= c._}function yv(b,c){b._[a[50]]= c._}function yw(b,c){b._[a[355]]= c._[1]}function yx(b,c){b._[a[50]]= c._[0]}function yy(c,b){if(c._[2]){b._[a[15]][a[14]]+= qm(a[336],c._[2])}}function yz(b,c){b._[a[355]]= c._[1]}function yA(b,c){b._[a[50]]= c._[0]}function yB(b,c){b._[a[355]]= c._[1]}function yC(b,c){b._[a[50]]= c._[0]}function yD(b,c){b._[a[355]]= c._[1]}function yE(b,c){b._[a[50]]= c._[0]}function yF(c,b){if(c._[2]){b._[a[15]][a[14]]= c._[2]}}function yG(a,b){a._= b._}function yH(b,c){b._[a[355]]= c._}function yI(b,c){b._[a[50]]= c._}function gN(a){return  function(b){b[a[50]]= a[889]}}function yK(b,c){b._[a[355]]= c._}function yL(b,c){b._[a[50]]= c._}function gS(d,b,c,f){return  function(h){h[a[93]][a[92]](a[894]);h[a[93]][a[92]](qm(a[895],d._[a[58]]()));var g=(1&&b._)(h,a[896]);var j=(1&&b._)(g,a[897],a[898]);j[a[50]]= (1&&c._)(d._);(1&&f._)(h)}}function gV(c,b){return  function(d){d[a[93]][a[92]](a[894]);d[a[93]][a[92]](c._);(1&&b._)(d)}}function gY(){return  function(){}}function ha(){return  function(){}}function hb(d,b,f,c){return  function(h){var j={};h[a[93]][a[92]](a[894]);h[a[93]][a[92]](d._);var g=(1&&b._)(h,a[896]);j._= (1&&b._)(g,a[897],a[898]);;yP(j,f);(1&&c._)(h)}}function he(c,d,b){return  function(f){var g=d._[qm(a[905],c._[a[42]](5))];if(!g){qJ()[a[204]](qm(a[906]+ a[905],c._[a[42]](5)))};(1&&b._)(g,f,a[592])}}function hj(a,c,b){return  function(d){(1&&a._)(d);(1&&b._)(c._,true)}}function za(b){b._[a[339]]= hk()}function hl(a,b){return  function(c){(1&&a._)();(1&&b._)(c)}}function zb(a){a._++}function zc(c,d,b){c._= {control:d._,parent:c._,dock:a[914],group:b._}}function zd(b,c,a){b._= a._[c._]}function ze(a){a._++}function zf(a){a._++}function zg(b,c){if(b._[a[915]]){c._[a[15]][a[705]]= a[939];c._[a[15]][a[940]]= a[941]}}function zh(c,d,b){c._= {control:d._,parent:c._,dock:a[78],group:b._}}function zi(b){b._[a[936]]= true}function zj(b){b._= b._[a[944]]}function zk(b,c){b._= c._[a[942]]}function zl(b){b._[a[936]]= true}function zm(b){b._= b._[a[944]]}function zn(b){b._[a[915]]= false}function zo(b,c,a){b._= a._[c._]}function zp(a){a._++}function Ag(b,a){a._[b._]= true}function Ah(a){a._= true}function Ai(b,a){a._[b._]= true}function Aj(a){a._= true}function Ak(d,b,c){try{d._= c._[a[1017]][b._][a[409]][0][a[9]]}catch(x){}}function Al(c,b){c._= b._[a[858]]}function An(a){a._++}function ia(f,g,d,b,c){return  function(){Aq(f);if(!g._){g._= (1&&b._)(d._,a[1043]);(1&&c._)(g._)};Ar(g);As(f,g)}}function ic(b){return  function(){if(b._){b._[a[15]][a[18]]= a[19]}}}function ip(b){return  function(){b._[a[69]](a[102],a[840])}}function iq(b){return  function(){b._[a[88]](a[102])}}function Av(b){b._[a[109]]= b._[a[1068]]}function iv(b,a,c){return  function(){var d={};(1&&b._)(false);d._= (1&&a._)();;Aw(d);(1&&c._)(d._)}}function Az(c,b){c._[a[1073]]= b._}function AA(b){b._[a[15]][a[18]]= a[22]}function AB(b){b._[a[15]][a[18]]= a[22]}function iB(a,b){return  function(){b._[a[15]][a[18]]= a[19]}}function AD(a){a._= true}function iF(b,c){return  function(){AE(b);c._[a[1073]][a[88]](a[1076])}}function iX(c,b){return  function(d){var f=rc()[a[711]][a[135]](null, new (rd())(c._[a[1111]]));(1&&b._)(f)}}function Bj(b){b._= b._[a[17]]}function BG(b,c){if(qh(b._[a[82]],c._)){b._[a[82]]= c._}}function BH(c,b){if(qh(c._[a[82]],b._)){c._[a[82]]= b._}}function jE(c,b){return  function(d){switch(d[a[9]]){case a[210]:;case a[288]:break;case a[287]:if(d[a[82]][a[20]]()){(1&&c._)(d)};break;default:if(qs(d[a[234]],1)){(1&&b._)(d)};break}}}function BI(c,b){c._[a[64]]= b._}function BJ(c,b){b._[a[15]][c._]= null}function BK(c,b){b._[a[15]][c._]= null}function BL(b,c,d){b._[a[15]][a[14]]+= qm(qm(a[336],c._)+ a[465],d._)}function BM(b,c,d){c._[a[15]][b._]= d._}function BN(b,c,d){b._[a[15]][a[14]]+= qm(c._+ a[465],d._)}function BO(b){if(qh(b._[a[234]],1)){b._= b._[a[17]]}}function BP(a){a._= false}function BQ(b){b._= b._[a[17]]}function kd(k,g,h,c,j,b,f,d){return  function(p){var n={};var m=null;for(var l=0;qp(l,p[a[40]]);l++){var o=p[l];if(qs(k._,o[a[9]])){continue};var q=o[a[17]];switch(o[a[9]]){case a[322]:;case a[321]:for(var l=0;qp(l,o[a[209]][a[40]]);l++){n._= o[a[209]][l];;if(g._[a[1119]](ke(n))){(1&&h._)(n._[a[209]])}};break;case a[323]:(1&&h._)(o[a[209]]);break;default:if((1&&c._)(o[a[9]])){m= j._[a[13]](k._);q[a[16]](m,o);(1&&b._)(o,m);while(o[a[83]]){m[a[70]](o[a[83]])};(1&&f._)(o,m);q[a[29]](o)}else {if(!m){m= j._[a[13]](k._);q[a[16]](m,o)};(1&&d._)(o);m[a[70]](o)};break}}}}function BR(a){a._= 0}function BS(a){a._= 1}function BT(b){if(qh(b._[a[234]],1)){b._= b._[a[17]]}}function BU(a){a._= false}function BV(b){b._= b._[a[17]]}function BW(b){switch(b._[a[9]]){}}function kk(f,d,b,c,h,g){return  function(){var m={},j={};;BX(f,d);var k=[];j._= 0;;while(!m._){BY(f);if(!f._){return};switch(f._[a[9]]){case a[321]:;case a[322]:BZ(m,f);break;case a[210]:k[a[1120]](f._);break;case a[287]:k[a[1120]](f._);if(f._[a[82]][a[20]]()){j._++};break;default:if((1&&b._)(f._[a[9]])){return};k[a[1120]](f._);Ca(j);break}};if(!m._|| qh(m._[a[9]],d._[a[9]])){return};if(j._){var n=c._[a[13]](a[323]);for(var l=0;qp(l,k[a[40]]);l++){n[a[70]](k[l])};m._[a[70]](n)}else {for(var l=0;qp(l,k[a[40]]);l++){k[l][a[17]][a[29]](k[l])}};Cb(h,m);Cc(g,m);while(d._[a[83]]){m._[a[70]](d._[a[83]])};d._[a[17]][a[29]](d._);Cd(d,m)}}function kl(f,d,b,c){return  function(){var k={},g={};;Ce(f,d);var h=[];g._= 0;;while(!k._){Cf(f);if(!f._){return};switch(f._[a[9]]){case a[321]:;case a[322]:Cg(k,f);break;case a[210]:h[a[39]](f._);break;case a[287]:h[a[39]](f._);if(f._[a[82]][a[20]]()){g._++};break;default:if((1&&b._)(f._[a[9]])){return};h[a[39]](f._);Ch(g);break}};if(!k._|| qh(k._[a[9]],d._[a[9]])){return};if(g._){var l=c._[a[13]](a[323]);for(var j=0;qp(j,h[a[40]]);j++){l[a[70]](h[j])};d._[a[70]](l)}else {for(var j=0;qp(j,h[a[40]]);j++){h[j][a[17]][a[29]](h[j])}};while(d._[a[1121]]){k._[a[16]](d._[a[1121]],k._[a[83]])};d._[a[17]][a[29]](d._);Ci(d,k)}}function Co(c,b){c._[a[738]]= b._[a[1111]]}function kw(c,b){return  function(f,d){var g={};g._= f;if(g._){Cp(c,g);(1&&b._)();return};if(d){qC()(qm(a[1130],d))}else {qC()(a[1131])}}}function Cq(c,b){if(!c._[a[50]]){c._[a[50]]= b._[a[807]]}}function Dz(b,c){c._[b._][a[15]][a[18]]= a[19]}function DA(a,b){a._= b._}function DB(b,c){c._[b._][a[15]][a[18]]= a[22]}function DC(a,b){b._[a._]= null}function le(b,a){return  function(){(1&&a._)(b._)}}function lg(){return  function(a){}}function DF(b){b._= a[117]}function DG(b){b._= a[1216]}function lo(d,g,f,c,b){return  function(){if(qs(d._,a[435])){if(g._[a[50]]){f._[a[132]]();(1&&c._)(g._[a[50]]);return}}else {if(g._[a[21]]){f._[a[132]]();(1&&b._)(g._[a[21]]);return}}}}function lw(b,c,d){return  function(){var f={},g={};f._= a[690];;if(qs(b._[a[58]](),a[613])){f._= a[491]};DM(c);g._= c._[a[89]][a[20]]();;DN(f,d);DO(g,f,d)}}function DP(b,c){b._[a[15]][a[491]]= c._}function DQ(b){b._[a[15]][a[690]]= a[685]}function DR(a){a._= null}function lB(){return  function(b){if(qp(b,16)){return qm(a[725],b[a[382]](16))};return b[a[382]](16)}}function lC(b){return  function(f,d,c){return (qm(qm(a[913],(1&&b._)(ql(f,51)))+ (1&&b._)(ql(d,51)),(1&&b._)(ql(c,51))))[a[107]]()}}function lD(a){return  function(d,b,c){var k={},h={},j={},f={},g={};k._= d;h._= b;j._= c;f._= qj(k._,2);;g._= qo((qn(k._,f._)),2);;DS(k,f,g);DT(k,h);DU(k,j);return (1&&a._)(qn(5,j._),qn(5,h._),qn(5,k._))}}function DV(d,c,a,b){a._[qm(d._* 12,c._)]= b._}function lE(b,c){return  function(f){var d=f[a[102]][a[87]](a[1259]);if(d){b._[a[132]]();(1&&c._)(d)}}}function lG(b,c){return  function(f){var d=f[a[102]][a[87]](a[1259]);if(d){b._[a[132]]();(1&&c._)(d)}}}function DW(b){rf()[a[1546]]= b._}function lI(b,c){return  function(){DX(b);c._[a[132]]()}}function lJ(b,c,d){return  function(f){DY(b);c._[a[132]]();(1&&d._)(f)}}function lK(a){return  function(b){a._= b}}function lL(b){return  function(d){var c={};c._= d;DZ(b,c);b._[a[300]]()}}function Ea(c,b){c._[a[738]]= qm(b._[a[31]],a[1549])}function Eb(b){b._[a[21]]= a[22]}function Ec(c,b){c._[a[836]]= qm(a[1135],b._)}function Ed(b,c){b._[a[21]]= c._}function lP(b){return  function(){qJ()[a[204]](qm(a[1557],b._[a[1558]]))}}function Ee(b,c){if(b._[a[1558]]){c._[a[195]]= b._[a[1558]]}}function Ef(b){b._[a[15]][a[125]]= a[1561]}function Eg(b,c){b._[a[15]][a[125]]= qm(c._,a[27])}function Eh(b){b._[a[15]][a[724]]= a[1571]}function Ei(b){b._[a[15]][a[724]]= a[1572]}function El(a){a._= true}function mc(d,g,f,h,c,b,a){return  function(j,k){var l={},m={};l._= j;m._= k;Ep(d,g,l);Eq(f,h,m);Er(c,b,d,f,a)}}function Ez(c,b){c._[a[15]][a[1597]]= b._?a[1598]:a[22]}function EA(c,b){c._[a[21]]= b._}function EB(b){b._[a[21]]= a[22]}function EC(b,c){if(!b._){b._= c._;c._= a[1118]}else {if(qs(c._,null)){c._= a[1118]}}}function ED(b,c){if(!b._){b._= c._;c._= a[1118]}else {if(qs(c._,null)){c._= a[1118]}}}function EE(b,c){b._[a[1602]]= c._[a[1602]]}function EF(b,c){b._[a[1601]]= c._[a[1601]]}function EG(b,c){b._[a[1602]]= c._[a[1602]]}function EH(b,c){b._[a[1601]]= c._[a[1601]]}function EI(b){b._[a[1602]]= null}function EJ(b){b._[a[1601]]= null}function EK(b,c){b._[a[89]]= c._}function EL(a){a._= true}function EM(a){a._--}function EN(b,c,a){c._[b._]= a._}function EO(a){a._= true}function EP(b){b._= b._[a[1624]]}function od(){return  function(b,c,d){return qm(a[1739]+ b[a[48]](0),a[336])}}function EQ(b){b._= a[12]}function ER(b){b._[a[1624]]= null}function ES(b){b._[a[1624]]= null}function ET(b){b._[a[1624]]= null}function EU(b){b._[a[15]][a[18]]= a[19]}function EV(b,c){if(!b._[a[1808]]){c._[a[1760]]= true}}function EW(b){b._= b._[a[1624]]}function EX(b){b._= b._[a[1624]]}function EY(b){b._= b._[a[1624]]}function EZ(a,c,b){if(a._){c._= b._}}function Fa(b,a){b._= a._}function Fb(a){a._++}function Fc(c,b){c._= qm(c._,b._[a[40]])}function Fd(a){a._++}function Fe(a,b){a._= qm(b._,1)}function pI(b){return  function(g,c,d,f){return (qm(a[913],(1&&b._)(c,d,f)))[a[58]]()}}function Ff(c,b){c._= b._[a[1624]]}function Fg(b){b._[a[1761]]= true}function Fh(){note= null}function Fi(a,b){a._= b._}function Fj(a,b){a._= b._}function Fk(a,b){a._= qm(b._,1)}function Fl(a,b){a._= qm(b._,2)}function Fm(a,b){a._= qm(b._,3)}function Fn(a,b){a._= qm(b._,1)}function Fo(a){a._++}function Fp(b,a){if(qu(b._,-1)&& qp(b._,a._)){a._= b._}}function Fq(b,a){b._= qm(a._,1)}function Fr(a,b){a._= qm(b._,1)}function Fs(c,b){if(c._[a[1823]]){b._= c._[a[1823]][a[1608]]}}function Ft(a,b){a._= b._}function Fw(a){a._= 0}function Fx(h,f,g,a,j,c,b,d){if(qs(h._,1)){if(f._){g._^= a._;j._^= c._}else {b._= a._;d._= c._;a._= g._;c._= j._}}}function Fy(c,a,b){c._= qk((qx((qw(a._,4)),b._)),0x0f0f0f0f)}function Fz(a,b){a._^= b._}function FA(a,b){a._^= (qq(b._,4))}function FB(c,a,b){c._= qk((qx((qw(a._,16)),b._)),0x0000ffff)}function FC(a,b){a._^= b._}function FD(a,b){a._^= (qq(b._,16))}function FE(c,b,a){c._= qk((qx((qw(b._,2)),a._)),0x33333333)}function FF(a,b){a._^= b._}function FG(a,b){a._^= (qq(b._,2))}function FH(c,b,a){c._= qk((qx((qw(b._,8)),a._)),0x00ff00ff)}function FI(a,b){a._^= b._}function FJ(a,b){a._^= (qq(b._,8))}function FK(c,a,b){c._= qk((qx((qw(a._,1)),b._)),0x55555555)}function FL(a,b){a._^= b._}function FM(a,b){a._^= (qq(b._,1))}function FN(a){a._= (qg((qq(a._,1)),(qw(a._,31))))}function FO(a){a._= (qg((qq(a._,1)),(qw(a._,31))))}function FP(d,c,a,j,h,b,l,k,f,m,v,g,o,q,s,u,n,p,r,t){for(d._= 0;qp(d._,c._);d._+= 3){a._= j._[qm(d._,1)];h._= j._[qm(d._,2)];for(b._= j._[d._];qh(b._,a._);b._+= h._){l._= qx(k._,f._[b._]);m._= qx((qg((qw(k._,4)),(qq(k._,28)))),f._[qm(b._,1)]);v._= g._;g._= k._;k._= qx(v._,(qg(qg(qg(qg(o._[qk((qw(l._,24)),0x3f)],q._[qk((qw(l._,16)),0x3f)])| s._[qk((qw(l._,8)),0x3f)],u._[qk(l._,0x3f)])| n._[qk((qw(m._,24)),0x3f)],p._[qk((qw(m._,16)),0x3f)])| r._[qk((qw(m._,8)),0x3f)],t._[qk(m._,0x3f)])))};v._= g._;g._= k._;k._= v._}}function FQ(a){a._= (qg((qw(a._,1)),(qq(a._,31))))}function FR(a){a._= (qg((qw(a._,1)),(qq(a._,31))))}function FS(c,a,b){c._= qk((qx((qw(a._,1)),b._)),0x55555555)}function FT(a,b){a._^= b._}function FU(a,b){a._^= (qq(b._,1))}function FV(c,b,a){c._= qk((qx((qw(b._,8)),a._)),0x00ff00ff)}function FW(a,b){a._^= b._}function FX(a,b){a._^= (qq(b._,8))}function FY(c,b,a){c._= qk((qx((qw(b._,2)),a._)),0x33333333)}function FZ(a,b){a._^= b._}function Ga(a,b){a._^= (qq(b._,2))}function Gb(c,a,b){c._= qk((qx((qw(a._,16)),b._)),0x0000ffff)}function Gc(a,b){a._^= b._}function Gd(a,b){a._^= (qq(b._,16))}function Ge(c,a,b){c._= qk((qx((qw(a._,4)),b._)),0x0f0f0f0f)}function Gf(a,b){a._^= b._}function Gg(a,b){a._^= (qq(b._,4))}function Gh(h,f,a,g,c,j,b,d){if(qs(h._,1)){if(f._){a._= g._;c._= j._}else {g._^= b._;j._^= d._}}}function Gi(a){a._+= 8}function Gj(b,c,d){if(qs(b._,512)){c._+= d._;d._= a[22];b._= 0}}function Gk(c,a,b){c._= qk((qx((qw(a._,4)),b._)),0x0f0f0f0f)}function Gl(a,b){a._^= b._}function Gm(a,b){a._^= (qq(b._,4))}function Gn(c,b,a){c._= qk((qx((qw(b._,-16)),a._)),0x0000ffff)}function Go(a,b){a._^= b._}function Gp(a,b){a._^= (qq(b._,-16))}function Gq(c,a,b){c._= qk((qx((qw(a._,2)),b._)),0x33333333)}function Gr(a,b){a._^= b._}function Gs(a,b){a._^= (qq(b._,2))}function Gt(c,b,a){c._= qk((qx((qw(b._,-16)),a._)),0x0000ffff)}function Gu(a,b){a._^= b._}function Gv(a,b){a._^= (qq(b._,-16))}function Gw(c,a,b){c._= qk((qx((qw(a._,1)),b._)),0x55555555)}function Gx(a,b){a._^= b._}function Gy(a,b){a._^= (qq(b._,1))}function Gz(c,b,a){c._= qk((qx((qw(b._,8)),a._)),0x00ff00ff)}function GA(a,b){a._^= b._}function GB(a,b){a._^= (qq(b._,8))}function GC(c,a,b){c._= qk((qx((qw(a._,1)),b._)),0x55555555)}function GD(a,b){a._^= b._}function GE(a,b){a._^= (qq(b._,1))}function GF(c,a,b){c._= qg((qq(a._,8)),(qk((qw(b._,20)),0x000000f0)))}function GG(a,b){a._= qg(qg((qq(b._,24)),(qk((qq(b._,8)),0xff0000)))| (qk((qw(b._,8)),0xff00)),(qk((qw(b._,24)),0xf0)))}function GH(a,b){a._= b._}function GI(b,z,d,w,f,h,j,o,p,q,r,s,y,t,u,v,k,l,m,n,A,g,c){for(b._= 0;qp(b._,z._[a[40]]);b._++){if(z._[b._]){d._= qg((qq(d._,2)),(qw(d._,26)));w._= qg((qq(w._,2)),(qw(w._,26)))}else {d._= qg((qq(d._,1)),(qw(d._,27)));w._= qg((qq(w._,1)),(qw(w._,27)))};d._&= rg(0xf);w._&= rg(0xf);f._= qg(qg(qg(h._[qw(d._,28)]| j._[qk((qw(d._,24)),0xf)],o._[qk((qw(d._,20)),0xf)])| p._[qk((qw(d._,16)),0xf)],q._[qk((qw(d._,12)),0xf)])| r._[qk((qw(d._,8)),0xf)],s._[qk((qw(d._,4)),0xf)]);y._= qg(qg(qg(t._[qw(w._,28)]| u._[qk((qw(w._,24)),0xf)],v._[qk((qw(w._,20)),0xf)])| k._[qk((qw(w._,16)),0xf)],l._[qk((qw(w._,12)),0xf)])| m._[qk((qw(w._,8)),0xf)],n._[qk((qw(w._,4)),0xf)]);A._= qk((qx((qw(y._,16)),f._)),0x0000ffff);c._[g._++]= qx(f._,A._);c._[g._++]= qx(y._,(qq(A._,16)))}}function sE(b){b._[a[15]][a[25]]= a[22]}function sF(b){b._[a[15]][a[125]]= a[22]}function sG(c,b){c._[a[15]][a[125]]= qm(b._,a[27])}function sH(c,b){c._[a[15]][a[25]]= qm(b._,a[27])}function cZ(b){return  function(c){c[a[429]]()[a[428]](da(b))}}function dm(d,f,g,c,h,b,a){return  function(){var j=f._[d._];(1&&a._)(j,dn(d,f,g,c,h),d._,b._)}}function uN(a,b){a._= b._}function uQ(a){a._-= qv(a._,97)?87:48}function uR(a){a._-= qv(a._,97)?87:48}function uS(b,a,c){a._[qo(b._,2)]= c._}function uT(a){a._= true}function ww(a){a._++}function wx(b,c){b._[a[650]]= c._}function wy(b,c){b._[a[661]]= c._}function wz(b,c){b._[a[664]]= c._}function wC(b,c){b._[a[50]]= c._[1]}function eg(f,d,g,h,b,c){return  function(){var j={};j._= eh(f,d,g,h,b);if(!(1&&j._)()){(1&&c._)(f._);if(!(1&&j._)()){qJ()[a[85]](a[683])}}}}function wE(c,b){c._[a[15]][a[690]]= b._}function en(c,d,b,f,a){return  function(){(1&&d._)(c._);(1&&b._)();(1&&a._)(f._)}}function ep(a){return  function(b){(1&&a._)(b)}}function ev(b,j,c,g,d,f,h){return  function(m){var o={};var k={};k._= ew(o,b,j,c,g,d,f);o._= m;o._[a[93]][a[92]](a[703]);wK(o);wL(o);if(h._[a[420]]){for(var l=0;qp(l,h._[a[420]][a[40]]);l++){(1&&k._)(h._[a[420]][l])}}else {if(h._[a[707]]&& h._[a[708]]){for(var n=h._[a[707]];qr(n,h._[a[708]]);n++){(1&&k._)(qm(qm(a[709]+ h._[a[508]],a[710])+ rc()[a[711]](n),a[712]))}}}}}function wQ(b){b._[a[15]][a[14]]+= a[721]}function wR(b){b._[a[284]]= a[744]}function eH(c,b){return  function(){(1&&b._)(c._[a[422]][0])}}function eJ(){return  function(){}}function eL(){return  function(){}}function wW(b){if(b._){b._[a[15]][a[18]]= a[22]}}function wX(b){b._[a[15]][a[238]]= a[769]}function eU(b,d,c){return  function(h,g){var k={},j={},f={};k._= h;j._= g;f._= (1&&b._)(k._,a[12],a[22],a[774]);;xa(f,j);f._[a[339]]= eV(d,j,k,c)}}function eW(b,c){return  function(f){for(var d=0;qp(d,b._[a[775]][a[40]]);d++){(1&&c._)(f,b._[a[775]][d])}}}function xe(b,c){if(!b._[a[50]]){b._[a[50]]= c._}}function xx(b,c){b._[a[50]]= c._}function fu(c,d,f,b){return  function(){xy(c,d);c._[a[97]]();(1&&b._)(f._)}}function xN(b,c){b._[a[15]][a[125]]= c._}function xO(b,c){b._[a[15]][a[25]]= c._}function fM(b,d,c){return  function(h,g){var k={},j={},f={};k._= h;j._= g;f._= (1&&b._)(k._,a[12],a[22],a[774]);;xQ(f,j);f._[a[339]]= fN(d,j,k,c)}}function fO(b,c){return  function(f){for(var d=0;qp(d,b._[a[832]][a[40]]);d++){(1&&c._)(f,b._[a[832]][d])}}}function fP(a){return  function(){a._= true}}function xW(b,c){if(!b._[a[21]]){b._[a[50]]= c._}}function xZ(c,b){c._[a[64]]= b._?a[852]:a[22]}function ya(c,d,a,f,b){if(c._){if(qu(d._,a._)){a._= d._};if(qu(f._,b._)){b._= f._}}}function yb(c,d,b){c._[a[15]][a[18]]= (qu(d._- 2,b._))?a[19]:a[22]}function yc(c,d,b){c._[a[15]][a[18]]= (qu(d._- 2,b._))?a[19]:a[22]}function yd(b,c){b._[a[50]]= qm((qm(c._,1))+ a[853],(qm(move_y,1)))}function ye(b,c){b._= c._[a[394]],move_y= c._[a[232]]}function yP(b,c){b._[a[50]]= c._}function hk(){return  function(){}}function Aq(b){if(b._[a[1042]]){b._[a[1042]][a[15]][a[18]]= a[19]}}function Ar(b){b._[a[15]][a[18]]= a[22]}function As(b,c){b._[a[1042]]= c._}function Aw(b){b._[a[21]]= a[1067]}function AE(a){a._= false}function ke(b){return  function(c){return b._[a[123]](c)|| c[a[123]](b._)}}function BX(b,a){b._= a._}function BY(b){b._= b._[a[989]]}function BZ(a,b){a._= b._}function Ca(a){a._++}function Cb(c,b){c._+= b._[a[209]][a[40]]}function Cc(c,b){c._+= b._[a[209]][a[40]]}function Cd(b,a){b._= a._}function Ce(b,a){b._= a._}function Cf(b){b._= b._[a[391]]}function Cg(a,b){a._= b._}function Ch(a){a._++}function Ci(b,a){b._= a._}function Cp(b,c){b._[a[738]]= c._}function DM(b){b._[a[15]][a[690]]= a[22]}function DN(c,b){b._[a[15]][c._]= a[22]}function DO(d,c,b){if(d._){b._[a[15]][c._]= d._}}function DS(c,a,b){c._= qm(a._* 3,b._)}function DT(b,a){if(qp(b._,3)){a._= qn(5,a._)}}function DU(b,a){if(qs(b._,1)|| qs(b._,4)){a._= qn(5,a._)}}function DX(a){a._= null}function DY(a){a._= null}function DZ(c,b){c._[a[89]]= b._}function Ep(a,b,c){a._= qm(b._,c._)}function Eq(a,b,c){a._= qm(b._,c._)}function Er(d,c,f,g,b){if(d._){c._[a[15]][a[601]]= qm(qm(a[1581]+ f._,a[1582])+ g._,a[1583])}else {b._[a[15]][a[601]]= qm(qm(a[1581]+ f._,a[1582])+ g._,a[1583])}}function da(a){return  function(b){b= rc()(b);(1&&a._)(b)}}function dn(c,d,f,b,g){return  function(j,h){var k={};k._= j;if(k._){uL(c,d,k);uM(c);if(qp(c._,d._[a[40]])){(1&&f._)()}else {(1&&g._)(b._,d._)};return};if(h){qC()(a[447])}else {qC()(a[448])}}}function eh(d,c,f,g,b){return  function(){var h={};h._= (1&&c._)(qs(d._,a[550])?a[679]:a[680]);;if(h._){wD(h,f);(1&&b._)(g._)};return h._}}function wK(b){b._[a[15]][a[704]]= a[381]}function wL(b){b._[a[15]][a[705]]= a[77]}function ew(j,b,h,c,g,d,f){return  function(m,k){var l={},n={};l._= m;n._= (1&&b._)(j._,a[706],a[22]);;wM(n,l);n._[a[339]]= ex(h,c,l,g,d,f)}}function xa(b,c){b._[a[50]]= c._}function eV(c,d,f,b){return  function(){xb(c,d);c._[a[97]]();(1&&b._)(f._)}}function xy(b,c){b._[a[89]]= c._}function xQ(b,c){b._[a[50]]= c._}function fN(c,d,f,b){return  function(){xR(c,d);c._[a[97]]();(1&&b._)(f._)}}function uL(a,b,c){b._[a._]= c._}function uM(a){a._++}function wD(b,c){b._[a[15]][a[682]]= c._[0]}function wM(c,b){c._[a[21]]= b._}function ex(g,a,f,d,b,c){return  function(){(1&&a._)(g._);(1&&d._)(f._);(1&&b._)(false);(1&&c._)()}}function xb(b,c){b._[a[89]]= c._}function xR(b,c){b._[a[89]]= c._}})()






if (!RTE_DefaultConfig.svgCode_html2pdf) {
	RTE_DefaultConfig.svgCode_html2pdf = '<svg viewBox="-2 -2 36 36" fill="#5F6368"><polygon points="30 11 30 9 22 9 22 23 24 23 24 17 29 17 29 15 24 15 24 11 30 11"></polygon><path d="M8,9H2V23H4V18H8a2,2,0,0,0,2-2V11A2,2,0,0,0,8,9Zm0,7H4V11H8Z"></path><path d="M16,23H12V9h4a4,4,0,0,1,4,4v6A4,4,0,0,1,16,23Zm-2-2h2a2,2,0,0,0,2-2V13a2,2,0,0,0-2-2H14Z"></path><title>PDF</title></svg>'
}

RTE_DefaultConfig.plugin_html2pdf = RTE_Plugin_Html2PDF;

function RTE_Plugin_Html2PDF() {

	var scripturl = "https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";

	var obj = this;

	var config, editor;

	obj.PluginName = "Html2PDF";

	obj.InitConfig = function (argconfig) {
		config = argconfig;
	}
	obj.InitEditor = function (argeditor) {
		editor = argeditor;

		editor.attachEvent("exec_command_html2pdf", function (state, cmd, value) {
			console.log(state, cmd, value);
			obj.DoHtml2PDF();
			state.returnValue = true;
		});

		editor.toolbarFactoryMap["html2pdf"] = function (cmd) {
			//console.log(cmd);
			var span = editor.createToolbarButton(cmd);
			span.style.backgroundColor = ''
			return span;
		};

	}

	function __Append(parent, tagname, csstext, cssclass) {
		var tag = parent.ownerDocument.createElement(tagname);
		if (csstext) tag.style.cssText = csstext;
		if (cssclass) tag.className = cssclass;
		parent.appendChild(tag);
		return tag;
	}


	function dataURLToBlob(dataurl) {
		var arr = dataurl.split(',');
		var mime = arr[0].match(/:(.*?);/)[1];
		var bstr = atob(arr[1]);
		var n = bstr.length;
		var u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new Blob([u8arr], { type: mime });
	}

	obj.DoHtml2PDF = function () {

		var dialoginner = editor.createDialog("Html2PDF", "rte-dialog-html2pdf");

		var div2 = __Append(dialoginner, "div", "position:relative;text-align:center;");

		div2.innerHTML = "Loading...";

		var imgrect = __Append(dialoginner, "div", "position:relative;text-align:center;")

		window.html2pdf_callback = function (win) {

			if (!win.html2pdf) {
				div2.innerHTML = "Failed to load script.";
				return;
			}

			div2.innerHTML = "Exporting...";

			var opt = {
				margin: 0.5,
				filename: 'myfile.pdf',
				image: { type: 'jpeg', quality: 0.98 },
				html2canvas: { scale: 2 },
				jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
			};

			var promimg = win.html2pdf().set(opt).from(win.document.body).outputImg();
			promimg.then(function (img) {

				var dataurl = img.getAttribute('src');
				if (dataurl.indexOf("base64") == -1) {
					div2.innerHTML = "Error, no data.";
					return;
				}

				var imgblob = dataURLToBlob(dataurl);
				console.log(imgblob);
				var imgurl = URL.createObjectURL(imgblob);
				img.setAttribute("src", imgurl);

				var prom = win.html2pdf().set(opt).from(win.document.body).outputPdf();
				prom.then(function (str) {

					console.log("done", str.length)

					var bin = new Array(str.length);
					for (var i = 0; i < str.length; i++)
						bin[i] = str.charCodeAt(i);
					var blob = new Blob([new Uint8Array(bin)], { type: "application/pdf" })
					var url = URL.createObjectURL(blob);
					div2.innerHTML = Math.ceil(str.length / 1024) + "KB Exported<br/><a href='" + url + "' target=_blank>Download PDF</a>";

					var pdflink = div2.querySelector("a");

					var date = new Date();
					var ymd = String(date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()).substring(2);
					var hms = String(1000000 + date.getHours() * 10000 + date.getMinutes() * 100 + date.getSeconds()).substring(1);
					pdflink.download = "Export-" + ymd + "-" + hms + ".pdf";

					//a.rel = 'noopener'

					pdflink.click();

					img.style.cssText = "max-width:300px;max-height:200px;margin:5px;padding:10px;border:solid 1px #eee;box-shadow:2px 2px 6px #eee"
					imgrect.appendChild(img)

					__Append(imgrect, "br");
					var imglink = __Append(imgrect, "a");
					imglink.setAttribute("href", imgurl);
					imglink.setAttribute("target", "_blank");
					imglink.download = "Export-" + ymd + "-" + hms + ".jpg";
					imglink.innerText = "Download Img";

					//dialoginner.close();

				}).catch(function (x) {
					console.error(x);
				})

			}).catch(function (x) {
				console.error(x);
			})


		}

		var div1 = __Append(dialoginner, "div", "position:relative;text-align:center;");

		iframe = __Append(div1, "iframe", "align-self:center;flex:99;width:100%;height:0px;border:0px;", "rte-editable");
		iframe.contentDocument.open("text/html");
		iframe.contentDocument.write("<html><head><link id='url-css-preview' rel='stylesheet' href='" + editor.htmlEncode(config.previewCssUrl) + "'/>"
			+ "<script src='" + editor.htmlEncode(scripturl) + "'></script></head><body style='padding:10px;margin:0px'>"
			+ editor.getHTMLCode() + "</body>"
			+ "<script>window.onload=function(){setTimeout(function(){parent.html2pdf_callback(window)},100)}</script></html>")
		iframe.contentDocument.close();

	}
}




﻿

if (!RTE_DefaultConfig.svgCode_imageeditor) {
	RTE_DefaultConfig.svgCode_imageeditor = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><style>.st0{fill:#f6f6f6}.st1{fill:#424242}.st2{fill:none}.st3{fill:#f0eff1}</style><path class="st0" d="M1 0v6H0v10h10v-1h6V0z" id="outline"/><g id="icon_x5F_bg"><path class="st1" d="M2 5h1v1H2zM2 3h1v1H2zM2 1h1v1H2zM4 1h1.001v1H4zM6 1h1v1H6zM8 1h1v1H8zM10 1h1v1h-1zM12 1h1v1h-1zM14 1h1v1h-1zM14 3h1v1h-1zM14 5h1v1h-1zM14 7h1v1h-1zM14 9h1v1h-1zM14 10.999h1V12h-1zM14 13h1v1h-1zM12 13h1v1h-1zM11 11V5H5v1H4V4h8v7z"/><circle class="st1" cx="6.192" cy="9.807" r=".807"/><path class="st1" d="M1 7v8h8V7H1zm1 7.001v-.28l2.537-1.463L7.554 14l.001.001H2zm6-.93l-3.463-1.982L2 12.491v-4.49h6v5.07zM10 13h1v1h-1z"/></g><g id="icon_x5F_fg"><path class="st2" d="M2 14h5.554v.001H2z"/><path class="st3" d="M11 5v6h-1V6H5V5z"/><path class="st3" d="M2 12.491l2.537-1.402L8 13.071v-5.07H2v4.49zM6.192 9a.807.807 0 1 1 .001 1.615A.807.807 0 0 1 6.192 9z"/><path class="st3" d="M2 13.721V14h5.554l-3.017-1.742z"/></g></svg>';
}

RTE_DefaultConfig.plugin_imageeditor = RTE_Plugin_ImageEditor;

function RTE_Plugin_ImageEditor() {



	var obj = this;

	var config, editor;

	obj.PluginName = "ImageEditor";

	obj.InitConfig = function (argconfig) {
		config = argconfig;
	}
	obj.InitEditor = function (argeditor) {
		editor = argeditor;

		editor.attachEvent("exec_command_imageeditor", function (state, cmd, value) {
			obj.DoImageEditor();
			state.returnValue = true;
		});

		editor.toolbarFactoryMap["imageeditor"] = function (cmd) {
			var span = editor.createToolbarButton(cmd);
			span.style.backgroundColor = ''
			return span;
		};

	}

	function __Append(parent, tagname, csstext, cssclass) {
		var tag = parent.ownerDocument.createElement(tagname);
		if (csstext) tag.style.cssText = csstext;
		if (cssclass) tag.className = cssclass;
		parent.appendChild(tag);
		return tag;
	}
	
	function dataURLToBlob(dataurl) {
		var arr = dataurl.split(',');
		var mime = arr[0].match(/:(.*?);/)[1];
		var bstr = atob(arr[1]);
		var n = bstr.length;
		var u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new Blob([u8arr], { type: mime });
	}

	obj.DoImageEditor = function () {

		var img = editor.getSelectedControl();
		if (!img)
			return;

		var dialoginner = editor.createDialog("ImageEditor", "rte-dialog-imageeditor");

		dialoginner.style.width = "90%";
		dialoginner.style.height = "90%";


		var scriptbase = config.url_base + "/plugins/tui.image-editor/";

		window.rte_image_editor_callback = function (win) {
			console.log(win);
			var options = {
				includeUI: {
					loadImage: {
						path: img.src,
						name: 'RteImage'
					},
					//locale: locale_ru_RU,
					theme: {
						// main icons
						'menu.normalIcon.path': scriptbase + 'svg/icon-d.svg',
						'menu.activeIcon.path': scriptbase + 'svg/icon-b.svg',
						'menu.disabledIcon.path': scriptbase + 'svg/icon-a.svg',
						'menu.hoverIcon.path': scriptbase + 'svg/icon-c.svg',
						// submenu icons
						'submenu.normalIcon.path': scriptbase + 'svg/icon-d.svg',
						'submenu.normalIcon.name': 'icon-d',
						'submenu.activeIcon.path': scriptbase + 'svg/icon-c.svg',
						'submenu.activeIcon.name': 'icon-c'
					},
					//initMenu: 'filter',
					menuBarPosition: 'bottom'
				},

				cssMaxWidth: 700,
				cssMaxHeight: 500,
				selectionStyle: {
					cornerSize: 20,
					rotatingPointOffset: 70
				}
			};
			var imgeditor = new win.tui.ImageEditor(win.document.querySelector('#tui-image-editor'), options);

			var btns = win.document.querySelector('.tui-image-editor-header-buttons');
			btns.innerHTML = '';
			var savebtn = __Append(btns, "button", "");
			savebtn.innerText = "Save";
			savebtn.onclick = function () {

				var dataurl = imgeditor.toDataURL();
				if (!config.file_upload_handler) {
					img.src = dataurl;
					editor.notifySelectionChange();
					dialoginner.close();
					return;
				}

				var file = dataURLToBlob(dataurl);

				config.file_upload_handler(file, function (url, error) {
					if (url) {
						img.src = url;
						editor.notifySelectionChange();
						dialoginner.close();
						return;
					}
					if (error) {
						//TODO:retry dialog or cancel
						alert("upload failed , TODO:show retry dialog or cancel");
					}
					else {
						alert("Developer warning : ");
					}
				});


			}

		}

		iframe = __Append(dialoginner, "iframe", "align-self:center;flex:99;width:100%;height:100%px;border:0px;", "rte-editable");
		iframe.contentDocument.open("text/html");
		iframe.contentDocument.write("<html><head><base href='" + editor.htmlEncode(location.href) + "'/>"
			+ "<link id='url-css-preview' rel='stylesheet' href='" + editor.htmlEncode(scriptbase + "tui-color-picker.min.css") + "'/>"
			+ "<link id='url-css-preview' rel='stylesheet' href='" + editor.htmlEncode(scriptbase + "tui-image-editor.min.css") + "'/>"
			+ "<script src='" + editor.htmlEncode(scriptbase + "fabric.min.js") + "'></script>"
			+ "<script src='" + editor.htmlEncode(scriptbase + "tui-color-picker.min.js") + "'></script>"
			+ "<script src='" + editor.htmlEncode(scriptbase + "tui-code-snippet.min.js") + "'></script>"
			+ "<script src='" + editor.htmlEncode(scriptbase + "tui-image-editor.min.js") + "'></script>"
			+ "</head><body style='padding:10px;margin:0px'><div id='tui-image-editor'></div></body>"
			+ "<script>window.onload=function(){setTimeout(function(){parent.rte_image_editor_callback(window)},100)}</script></html>")
		iframe.contentDocument.close();
	}
}




﻿
if (!RTE_DefaultConfig.svgCode_insertcode) {
	RTE_DefaultConfig.svgCode_insertcode = '<svg viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M8.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 8 8.646 6.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 8l1.647-1.646a.5.5 0 000-.708z" clip-rule="evenodd"/></svg>';
}

RTE_DefaultConfig.plugin_insertcode = RTE_Plugin_InsertCode;

function RTE_Plugin_InsertCode() {


	var dp = { sh: { Toolbar: {}, Utils: {}, RegexLib: {}, Brushes: {}, Version: '1.5.1' } };
	dp.InsertCode = dp.sh;


	dp.sh.Utils.CopyStyles = function (destDoc, sourceDoc) {
		var links = sourceDoc.getElementsByTagName('link'); for (var i = 0; i < links.length; i++)
			if (links[i].rel.toLowerCase() == 'stylesheet')
				destDoc.write('<link type="text/css" rel="stylesheet" href="' + links[i].href + '"></link>');
	}
	dp.sh.Utils.FixForBlogger = function (str) { return (dp.sh.isBloggerMode == true) ? str.replace(/<br\s*\/?>|&lt;br\s*\/?&gt;/gi, '\n') : str; }
	dp.sh.RegexLib = { MultiLineCComments: new RegExp('/\\*[\\s\\S]*?\\*/', 'gm'), SingleLineCComments: new RegExp('//.*$', 'gm'), SingleLinePerlComments: new RegExp('#.*$', 'gm'), DoubleQuotedString: new RegExp('"(?:\\.|(\\\\\\")|[^\\""\\n])*"', 'g'), SingleQuotedString: new RegExp("'(?:\\.|(\\\\\\')|[^\\''\\n])*'", 'g') }; dp.sh.Match = function (value, index, css) { this.value = value; this.index = index; this.length = value.length; this.css = css; }
	dp.sh.Highlighter = function () { this.noGutter = false; this.addControls = true; this.collapse = false; this.tabsToSpaces = true; this.wrapColumn = 80; this.showColumns = true; }
	dp.sh.Highlighter.SortCallback = function (m1, m2) {
		if (m1.index < m2.index)
			return -1; else if (m1.index > m2.index)
			return 1; else {
			if (m1.length < m2.length)
				return -1; else if (m1.length > m2.length)
				return 1;
		}
		return 0;
	}
	dp.sh.Highlighter.prototype.CreateElement = function (name) { var result = document.createElement(name); result.highlighter = this; return result; }
	dp.sh.Highlighter.prototype.GetMatches = function (regex, css) {
		var index = 0; var match = null; while ((match = regex.exec(this.code)) != null)
			this.matches[this.matches.length] = new dp.sh.Match(match[0], match.index, css);
	}
	dp.sh.Highlighter.prototype.AddBit = function (str, css) {
		if (str == null || str.length == 0)
			return; var span = this.CreateElement('SPAN'); str = str.replace(/ /g, '&nbsp;'); str = str.replace(/</g, '&lt;'); str = str.replace(/\n/gm, '&nbsp;<br>'); if (css != null) {
				if ((/br/gi).test(str)) {
					var lines = str.split('&nbsp;<br>'); for (var i = 0; i < lines.length; i++) {
						span = this.CreateElement('SPAN'); span.className = css; span.innerHTML = lines[i]; this.div.appendChild(span); if (i + 1 < lines.length)
							this.div.appendChild(this.CreateElement('BR'));
					}
				}
				else { span.className = css; span.innerHTML = str; this.div.appendChild(span); }
			}
		else { span.innerHTML = str; this.div.appendChild(span); }
	}
	dp.sh.Highlighter.prototype.IsInside = function (match) {
		if (match == null || match.length == 0)
			return false; for (var i = 0; i < this.matches.length; i++) {
				var c = this.matches[i]; if (c == null)
					continue; if ((match.index > c.index) && (match.index < c.index + c.length))
					return true;
			}
		return false;
	}
	dp.sh.Highlighter.prototype.ProcessRegexList = function () {
		for (var i = 0; i < this.regexList.length; i++)
			this.GetMatches(this.regexList[i].regex, this.regexList[i].css);
	}
	dp.sh.Highlighter.prototype.ProcessSmartTabs = function (code) {
		var lines = code.split('\n'); var result = ''; var tabSize = 4; var tab = '\t'; function InsertSpaces(line, pos, count) {
			var left = line.substr(0, pos); var right = line.substr(pos + 1, line.length); var spaces = ''; for (var i = 0; i < count; i++)
				spaces += ' '; return left + spaces + right;
		}
		function ProcessLine(line, tabSize) {
			if (line.indexOf(tab) == -1)
				return line; var pos = 0; while ((pos = line.indexOf(tab)) != -1) { var spaces = tabSize - pos % tabSize; line = InsertSpaces(line, pos, spaces); }
			return line;
		}
		for (var i = 0; i < lines.length; i++)
			result += ProcessLine(lines[i], tabSize) + '\n'; return result;
	}
	dp.sh.Highlighter.prototype.SwitchToList = function () {
		var html = this.div.innerHTML.replace(/<(br)\/?>/gi, '\n'); var lines = html.split('\n'); if (this.addControls == true)
			this.bar.appendChild(dp.sh.Toolbar.Create(this)); if (this.showColumns) {
				var div = this.CreateElement('div'); var columns = this.CreateElement('div'); var showEvery = 10; var i = 1; while (i <= 150) {
					if (i % showEvery == 0) { div.innerHTML += i; i += (i + '').length; }
					else { div.innerHTML += '&middot;'; i++; }
				}
				columns.className = 'columns'; columns.appendChild(div); this.bar.appendChild(columns);
			}
		for (var i = 0, lineIndex = this.firstLine; i < lines.length - 1; i++, lineIndex++) { var li = this.CreateElement('LI'); var span = this.CreateElement('SPAN'); li.className = (i % 2 == 0) ? 'alt' : ''; span.innerHTML = lines[i] + '&nbsp;'; li.appendChild(span); this.ol.appendChild(li); }
		this.div.innerHTML = '';
	}
	dp.sh.Highlighter.prototype.Highlight = function (code) {
		function Trim(str) { return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1'); }
		function Chop(str) { return str.replace(/\n*$/, '').replace(/^\n*/, ''); }
		function Unindent(str) {
			var lines = dp.sh.Utils.FixForBlogger(str).split('\n'); var indents = new Array(); var regex = new RegExp('^\\s*', 'g'); var min = 1000; for (var i = 0; i < lines.length && min > 0; i++) {
				if (Trim(lines[i]).length == 0)
					continue; var matches = regex.exec(lines[i]); if (matches != null && matches.length > 0)
					min = Math.min(matches[0].length, min);
			}
			if (min > 0)
				for (var i = 0; i < lines.length; i++)
					lines[i] = lines[i].substr(min); return lines.join('\n');
		}
		function Copy(string, pos1, pos2) { return string.substr(pos1, pos2 - pos1); }
		var pos = 0; if (code == null)
			code = ''; this.originalCode = code; this.code = Chop(Unindent(code)); this.div = this.CreateElement('DIV'); this.bar = this.CreateElement('DIV'); this.ol = this.CreateElement('OL'); this.matches = new Array(); this.div.className = 'dp-highlighter'; this.div.highlighter = this; this.bar.className = 'bar'; this.ol.start = this.firstLine; if (this.CssClass != null)
			this.ol.className = this.CssClass; if (this.collapse)
			this.div.className += ' collapsed'; if (this.noGutter)
			this.div.className += ' nogutter'; if (this.tabsToSpaces == true)
			this.code = this.ProcessSmartTabs(this.code); this.ProcessRegexList(); if (this.matches.length == 0) { this.AddBit(this.code, null); this.SwitchToList(); this.div.appendChild(this.bar); this.div.appendChild(this.ol); return; }
		this.matches = this.matches.sort(dp.sh.Highlighter.SortCallback); for (var i = 0; i < this.matches.length; i++)
			if (this.IsInside(this.matches[i]))
				this.matches[i] = null; for (var i = 0; i < this.matches.length; i++) {
					var match = this.matches[i]; if (match == null || match.length == 0)
						continue; this.AddBit(Copy(this.code, pos, match.index), null); this.AddBit(match.value, match.css); pos = match.index + match.length;
				}
		this.AddBit(this.code.substr(pos), null); this.SwitchToList(); this.div.appendChild(this.bar); this.div.appendChild(this.ol);
	}
	dp.sh.Highlighter.prototype.GetKeywords = function (str) { return '\\b' + str.replace(/ /g, '\\b|\\b') + '\\b'; }
	dp.sh.BloggerMode = function () { dp.sh.isBloggerMode = true; }
	dp.sh.HighlightAll = function (element, showGutter, showControls, collapseAll, firstLine, showColumns) {
		function FindValue() {
			var a = arguments; for (var i = 0; i < a.length; i++) {
				if (a[i] == null)
					continue; if (typeof (a[i]) == 'string' && a[i] != '')
					return a[i] + ''; if (typeof (a[i]) == 'object' && a[i].value != '')
					return a[i].value + '';
			}
			return null;
		}
		function IsOptionSet(value, list) {
			for (var i = 0; i < list.length; i++)
				if (list[i] == value)
					return true; return false;
		}
		function GetOptionValue(name, list, defaultValue) {
			var regex = new RegExp('^' + name + '\\[(\\w+)\\]$', 'gi'); var matches = null; for (var i = 0; i < list.length; i++)
				if ((matches = regex.exec(list[i])) != null)
					return matches[1]; return defaultValue;
		}
		function FindTagsByName(list, name, tagName) {
			var tags = document.getElementsByTagName(tagName); for (var i = 0; i < tags.length; i++)
				if (tags[i].getAttribute('name') == name)
					list.push(tags[i]);
		}
		var elements = [element]; var highlighter = null; var registered = {}; var propertyName = 'innerHTML';

		for (var brush in dp.sh.Brushes) {
			var aliases = dp.sh.Brushes[brush].Aliases; if (aliases == null)
				continue; for (var i = 0; i < aliases.length; i++)
				registered[aliases[i]] = brush;
		}

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i]; var options = FindValue(element.attributes['class'], element.className, element.attributes['language'], element.language); var language = ''; if (options == null)
				continue; options = options.split(':'); language = options[0].toLowerCase(); if (registered[language] == null)
				continue; highlighter = new dp.sh.Brushes[registered[language]](); element.style.display = 'none'; highlighter.noGutter = (showGutter == null) ? IsOptionSet('nogutter', options) : !showGutter; highlighter.addControls = (showControls == null) ? !IsOptionSet('nocontrols', options) : showControls; highlighter.collapse = (collapseAll == null) ? IsOptionSet('collapse', options) : collapseAll; highlighter.showColumns = (showColumns == null) ? IsOptionSet('showcolumns', options) : showColumns; var headNode = document.getElementsByTagName('head')[0]; if (highlighter.Style && headNode) {
					var styleNode = document.createElement('style'); styleNode.setAttribute('type', 'text/css'); if (styleNode.styleSheet) { styleNode.styleSheet.cssText = highlighter.Style; }
					else { var textNode = document.createTextNode(highlighter.Style); styleNode.appendChild(textNode); }
					headNode.appendChild(styleNode);
				}
			highlighter.firstLine = (firstLine == null) ? parseInt(GetOptionValue('firstline', options, 1)) : firstLine; highlighter.Highlight(element[propertyName]); highlighter.source = element; element.parentNode.insertBefore(highlighter.div, element);
		}
	}


	dp.sh.Brushes.JScript = function () { var keywords = 'abstract boolean break byte case catch char class const continue debugger ' + 'default delete do double else enum export extends false final finally float ' + 'for function goto if implements import in instanceof int interface long native ' + 'new null package private protected public return short static super switch ' + 'synchronized this throw throws transient true try typeof var void volatile while with'; this.regexList = [{ regex: dp.sh.RegexLib.SingleLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.MultiLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp('^\\s*#.*', 'gm'), css: 'preprocessor' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }]; this.CssClass = 'dp-c'; }
	dp.sh.Brushes.JScript.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.JScript.Aliases = ['js', 'jscript', 'javascript'];

	dp.sh.Brushes.Java = function () { var keywords = 'abstract assert boolean break byte case catch char class const ' + 'continue default do double else enum extends ' + 'false final finally float for goto if implements import ' + 'instanceof int interface long native new null ' + 'package private protected public return ' + 'short static strictfp super switch synchronized this throw throws true ' + 'transient try void volatile while'; this.regexList = [{ regex: dp.sh.RegexLib.SingleLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.MultiLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'), css: 'number' }, { regex: new RegExp('(?!\\@interface\\b)\\@[\\$\\w]+\\b', 'g'), css: 'annotation' }, { regex: new RegExp('\\@interface\\b', 'g'), css: 'keyword' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }]; this.CssClass = 'dp-j'; this.Style = '.dp-j .annotation { color: #646464; }' + '.dp-j .number { color: #C00000; }'; }
	dp.sh.Brushes.Java.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Java.Aliases = ['java'];

	dp.sh.Brushes.Cpp = function () { var datatypes = 'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' + 'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' + 'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' + 'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' + 'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' + 'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' + 'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' + 'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' + 'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' + 'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' + 'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' + 'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' + 'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' + 'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' + 'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' + 'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' + 'char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' + 'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' + 'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' + '__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' + 'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' + 'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' + 'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' + 'va_list wchar_t wctrans_t wctype_t wint_t signed'; var keywords = 'break case catch class const __finally __exception __try ' + 'const_cast continue private public protected __declspec ' + 'default delete deprecated dllexport dllimport do dynamic_cast ' + 'else enum explicit extern if for friend goto inline ' + 'mutable naked namespace new noinline noreturn nothrow ' + 'register reinterpret_cast return selectany ' + 'sizeof static static_cast struct switch template this ' + 'thread throw true false try typedef typeid typename union ' + 'using uuid virtual void volatile whcar_t while'; this.regexList = [{ regex: dp.sh.RegexLib.SingleLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.MultiLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp('^ *#.*', 'gm'), css: 'preprocessor' }, { regex: new RegExp(this.GetKeywords(datatypes), 'gm'), css: 'datatypes' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }]; this.CssClass = 'dp-cpp'; this.Style = '.dp-cpp .datatypes { color: #2E8B57; font-weight: bold; }'; }
	dp.sh.Brushes.Cpp.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Cpp.Aliases = ['cpp', 'c', 'c++'];

	dp.sh.Brushes.CSharp = function () { var keywords = 'abstract as base bool break byte case catch char checked class const ' + 'continue decimal default delegate do double else enum event explicit ' + 'extern false finally fixed float for foreach get goto if implicit in int ' + 'interface internal is lock long namespace new null object operator out ' + 'override params private protected public readonly ref return sbyte sealed set ' + 'short sizeof stackalloc static string struct switch this throw true try ' + 'typeof uint ulong unchecked unsafe ushort using virtual void while'; this.regexList = [{ regex: dp.sh.RegexLib.SingleLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.MultiLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp('^\\s*#.*', 'gm'), css: 'preprocessor' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }]; this.CssClass = 'dp-c'; this.Style = '.dp-c .vars { color: #d00; }'; }
	dp.sh.Brushes.CSharp.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.CSharp.Aliases = ['c#', 'c-sharp', 'csharp'];

	dp.sh.Brushes.CSS = function () { var keywords = 'ascent azimuth background-attachment background-color background-image background-position ' + 'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' + 'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' + 'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' + 'border-bottom-width border-left-width border-width border cap-height caption-side centerline clear clip color ' + 'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' + 'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' + 'height letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' + 'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' + 'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' + 'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' + 'quotes richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' + 'table-layout text-align text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' + 'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index'; var values = 'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder ' + 'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed ' + 'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double ' + 'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia ' + 'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic ' + 'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha ' + 'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower ' + 'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset ' + 'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side ' + 'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow ' + 'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize ' + 'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal ' + 'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin ' + 'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow'; var fonts = '[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif'; this.regexList = [{ regex: dp.sh.RegexLib.MultiLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp('\\#[a-zA-Z0-9]{3,6}', 'g'), css: 'value' }, { regex: new RegExp('(-?\\d+)(\.\\d+)?(px|em|pt|\:|\%|)', 'g'), css: 'value' }, { regex: new RegExp('!important', 'g'), css: 'important' }, { regex: new RegExp(this.GetKeywordsCSS(keywords), 'gm'), css: 'keyword' }, { regex: new RegExp(this.GetValuesCSS(values), 'g'), css: 'value' }, { regex: new RegExp(this.GetValuesCSS(fonts), 'g'), css: 'value' }]; this.CssClass = 'dp-css'; this.Style = '.dp-css .value { color: black; }' + '.dp-css .important { color: red; }'; }
	dp.sh.Highlighter.prototype.GetKeywordsCSS = function (str) { return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b'; }
	dp.sh.Highlighter.prototype.GetValuesCSS = function (str) { return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b'; }
	dp.sh.Brushes.CSS.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.CSS.Aliases = ['css'];

	dp.sh.Brushes.Php = function () { var funcs = 'abs acos acosh addcslashes addslashes ' + 'array_change_key_case array_chunk array_combine array_count_values array_diff ' + 'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill ' + 'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key ' + 'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map ' + 'array_merge array_merge_recursive array_multisort array_pad array_pop array_product ' + 'array_push array_rand array_reduce array_reverse array_search array_shift ' + 'array_slice array_splice array_sum array_udiff array_udiff_assoc ' + 'array_udiff_uassoc array_uintersect array_uintersect_assoc ' + 'array_uintersect_uassoc array_unique array_unshift array_values array_walk ' + 'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert ' + 'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress ' + 'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir ' + 'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists ' + 'closedir closelog copy cos cosh count count_chars date decbin dechex decoct ' + 'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log ' + 'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded ' + 'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents ' + 'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype ' + 'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf ' + 'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname ' + 'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt ' + 'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext ' + 'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set ' + 'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double ' + 'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long ' + 'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault ' + 'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br ' + 'parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir ' + 'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split ' + 'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes ' + 'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk ' + 'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime ' + 'strtoupper strtr strval substr substr_compare'; var keywords = 'and or xor __FILE__ __LINE__ array as break case ' + 'cfunction class const continue declare default die do else ' + 'elseif empty enddeclare endfor endforeach endif endswitch endwhile ' + 'extends for foreach function include include_once global if ' + 'new old_function return static switch use require require_once ' + 'var while __FUNCTION__ __CLASS__ ' + '__METHOD__ abstract interface public implements extends private protected throw'; this.regexList = [{ regex: dp.sh.RegexLib.SingleLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.MultiLineCComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp('\\$\\w+', 'g'), css: 'vars' }, { regex: new RegExp(this.GetKeywords(funcs), 'gmi'), css: 'func' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }]; this.CssClass = 'dp-c'; }
	dp.sh.Brushes.Php.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Php.Aliases = ['php'];

	dp.sh.Brushes.Python = function () {
		var keywords = 'and assert break class continue def del elif else ' + 'except exec finally for from global if import in is ' + 'lambda not or pass print raise return try yield while'; var special = 'None True False self cls class_'
		this.regexList = [{ regex: dp.sh.RegexLib.SingleLinePerlComments, css: 'comment' }, { regex: new RegExp("^\\s*@\\w+", 'gm'), css: 'decorator' }, { regex: new RegExp("(['\"]{3})([^\\1])*?\\1", 'gm'), css: 'comment' }, { regex: new RegExp('"(?!")(?:\\.|\\\\\\"|[^\\""\\n\\r])*"', 'gm'), css: 'string' }, { regex: new RegExp("'(?!')*(?:\\.|(\\\\\\')|[^\\''\\n\\r])*'", 'gm'), css: 'string' }, { regex: new RegExp("\\b\\d+\\.?\\w*", 'g'), css: 'number' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }, { regex: new RegExp(this.GetKeywords(special), 'gm'), css: 'special' }]; this.CssClass = 'dp-py'; this.Style = '.dp-py .builtins { color: #ff1493; }' + '.dp-py .magicmethods { color: #808080; }' + '.dp-py .exceptions { color: brown; }' + '.dp-py .types { color: brown; font-style: italic; }' + '.dp-py .commonlibs { color: #8A2BE2; font-style: italic; }';
	}
	dp.sh.Brushes.Python.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Python.Aliases = ['py', 'python'];

	dp.sh.Brushes.Xml = function () { this.CssClass = 'dp-xml'; this.Style = '.dp-xml .cdata { color: #ff1493; }' + '.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }' + '.dp-xml .attribute { color: red; }' + '.dp-xml .attribute-value { color: blue; }'; }
	dp.sh.Brushes.Xml.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Xml.Aliases = ['xml', 'xhtml', 'xslt', 'html', 'xhtml']; dp.sh.Brushes.Xml.prototype.ProcessRegexList = function () {
		function push(array, value) { array[array.length] = value; }
		var index = 0; var match = null; var regex = null; this.GetMatches(new RegExp('(\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\&gt;|>)', 'gm'), 'cdata'); this.GetMatches(new RegExp('(\&lt;|<)!--\\s*.*?\\s*--(\&gt;|>)', 'gm'), 'comments'); regex = new RegExp('([:\\w-\.]+)\\s*=\\s*(".*?"|\'.*?\'|\\w+)*|(\\w+)', 'gm'); while ((match = regex.exec(this.code)) != null) {
			if (match[1] == null) { continue; }
			push(this.matches, new dp.sh.Match(match[1], match.index, 'attribute')); if (match[2] != undefined) { push(this.matches, new dp.sh.Match(match[2], match.index + match[0].indexOf(match[2]), 'attribute-value')); }
		}
		this.GetMatches(new RegExp('(\&lt;|<)/*\\?*(?!\\!)|/*\\?*(\&gt;|>)', 'gm'), 'tag'); regex = new RegExp('(?:\&lt;|<)/*\\?*\\s*([:\\w-\.]+)', 'gm'); while ((match = regex.exec(this.code)) != null) { push(this.matches, new dp.sh.Match(match[1], match.index + match[0].indexOf(match[1]), 'tag-name')); }
	}

	dp.sh.Brushes.Vb = function () { var keywords = 'AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto ' + 'Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate ' + 'CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType ' + 'Date Decimal Declare Default Delegate Dim DirectCast Do Double Each ' + 'Else ElseIf End Enum Erase Error Event Exit False Finally For Friend ' + 'Function Get GetType GoSub GoTo Handles If Implements Imports In ' + 'Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module ' + 'MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing ' + 'NotInheritable NotOverridable Object On Option Optional Or OrElse ' + 'Overloads Overridable Overrides ParamArray Preserve Private Property ' + 'Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume ' + 'Return Select Set Shadows Shared Short Single Static Step Stop String ' + 'Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until ' + 'Variant When While With WithEvents WriteOnly Xor'; this.regexList = [{ regex: new RegExp('\'.*$', 'gm'), css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: new RegExp('^\\s*#.*', 'gm'), css: 'preprocessor' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }]; this.CssClass = 'dp-vb'; }
	dp.sh.Brushes.Vb.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Vb.Aliases = ['vb', 'vb.net'];

	dp.sh.Brushes.Ruby = function () {
		var keywords = 'alias and BEGIN begin break case class def define_method defined do each else elsif ' + 'END end ensure false for if in module new next nil not or raise redo rescue retry return ' + 'self super then throw true undef unless until when while yield'; var builtins = 'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' + 'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' + 'ThreadGroup Thread Time TrueClass'
		this.regexList = [{ regex: dp.sh.RegexLib.SingleLinePerlComments, css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp(':[a-z][A-Za-z0-9_]*', 'g'), css: 'symbol' }, { regex: new RegExp('(\\$|@@|@)\\w+', 'g'), css: 'variable' }, { regex: new RegExp(this.GetKeywords(keywords), 'gm'), css: 'keyword' }, { regex: new RegExp(this.GetKeywords(builtins), 'gm'), css: 'builtin' }]; this.CssClass = 'dp-rb'; this.Style = '.dp-rb .symbol { color: #a70; }' + '.dp-rb .variable { color: #a70; font-weight: bold; }';
	}
	dp.sh.Brushes.Ruby.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Ruby.Aliases = ['ruby', 'rails', 'ror'];

	dp.sh.Brushes.Sql = function () { var funcs = 'abs avg case cast coalesce convert count current_timestamp ' + 'current_user day isnull left lower month nullif replace right ' + 'session_user space substring sum system_user upper user year'; var keywords = 'absolute action add after alter as asc at authorization begin bigint ' + 'binary bit by cascade char character check checkpoint close collate ' + 'column commit committed connect connection constraint contains continue ' + 'create cube current current_date current_time cursor database date ' + 'deallocate dec decimal declare default delete desc distinct double drop ' + 'dynamic else end end-exec escape except exec execute false fetch first ' + 'float for force foreign forward free from full function global goto grant ' + 'group grouping having hour ignore index inner insensitive insert instead ' + 'int integer intersect into is isolation key last level load local max min ' + 'minute modify move name national nchar next no numeric of off on only ' + 'open option order out output partial password precision prepare primary ' + 'prior privileges procedure public read real references relative repeatable ' + 'restrict return returns revoke rollback rollup rows rule schema scroll ' + 'second section select sequence serializable set size smallint static ' + 'statistics table temp temporary then time timestamp to top transaction ' + 'translation trigger true truncate uncommitted union unique update values ' + 'varchar varying view when where with work'; var operators = 'all and any between cross in join like not null or outer some'; this.regexList = [{ regex: new RegExp('--(.*)$', 'gm'), css: 'comment' }, { regex: dp.sh.RegexLib.DoubleQuotedString, css: 'string' }, { regex: dp.sh.RegexLib.SingleQuotedString, css: 'string' }, { regex: new RegExp(this.GetKeywords(funcs), 'gmi'), css: 'func' }, { regex: new RegExp(this.GetKeywords(operators), 'gmi'), css: 'op' }, { regex: new RegExp(this.GetKeywords(keywords), 'gmi'), css: 'keyword' }]; this.CssClass = 'dp-sql'; this.Style = '.dp-sql .func { color: #ff1493; }' + '.dp-sql .op { color: #808080; }'; }
	dp.sh.Brushes.Sql.prototype = new dp.sh.Highlighter(); dp.sh.Brushes.Sql.Aliases = ['sql'];


	var obj = this;

	var config, editor;

	obj.PluginName = "InsertCode";

	obj.InitConfig = function (argconfig) {
		config = argconfig;
	}
	obj.InitEditor = function (argeditor) {
		editor = argeditor;

		editor.attachEvent("exec_command_insertcode", function (state, cmd, value) {
			console.log(state, cmd, value);
			obj.DoShowDialog();
			state.returnValue = true;
		});

		editor.toolbarFactoryMap["insertcode"] = function (cmd) {
			//console.log(cmd);
			var span = editor.createToolbarButton(cmd);
			span.style.backgroundColor = ''
			return span;
		};

	}

	function __Append(parent, tagname, csstext, cssclass) {
		var tag = parent.ownerDocument.createElement(tagname);
		if (csstext) tag.style.cssText = csstext;
		if (cssclass) tag.className = cssclass;
		parent.appendChild(tag);
		return tag;
	}


	obj.DoShowDialog = function () {

		var dialoginner = editor.createDialog(editor.getLangText("insertcode"), "rte-dialog-insertcode");

		var div2 = __Append(dialoginner, "div", "position:relative;text-align:center;");
		__Append(div2, "label").innerText = editor.getLangText("language") + ":";
		var sel_lang = __Append(div2, "select", "width:200px;");

		sel_lang.options.add(new Option("Plain Text", ""));

		for (var brush in dp.sh.Brushes) {
			var aliases = dp.sh.Brushes[brush].Aliases;

			if (aliases == null)
				continue;
			sel_lang.options.add(new Option(aliases, brush));


			var b = sessionStorage.getItem("rte-insertcode-lang")
			if (b) sel_lang.value = b;
		}


		var div1 = __Append(dialoginner, "div", "position:relative;text-align:center;");
		var textarea = __Append(div1, "textarea", "width:100%;min-width:300px;height:200px")

		var divfooter = __Append(dialoginner, "rte-dialog-footer", null, "rte-dialog-footer-center");

		var btn = __Append(divfooter, "rte-dialog-button")
		btn.innerText = "Insert";

		setTimeout(function () {
			textarea.focus();
		}, 300);

		btn.onclick = function () {
			dialoginner.close();

			sessionStorage.setItem("rte-insertcode-lang", sel_lang.value)

			if (sel_lang.value != "") {
				var b = dp.sh.Brushes[sel_lang.value];

				textarea.language = b.Aliases[0] + ":nocontrols";
				textarea.name = "rteinsertcode" + new Date().getTime();
				textarea.innerHTML = textarea.value;
				dp.sh.HighlightAll(textarea);

				var tag = textarea.previousSibling

				var p = editor.insertRootParagraph()
				p.innerHTML = '<div class="dp-highlighter">' + tag.innerHTML + "</div>";
			}
			else {
				var p = editor.insertRootParagraph()
				p.innerText = textarea.value;
			}

			editor.focus();
		}
	}
}





﻿
RTE_DefaultConfig.plugin_insertemoji = RTE_Plugin_InsertEmoji;

function RTE_Plugin_InsertEmoji() {

	function CharToHTMLCode(ch) {
		if (ch.length > 2)
			return ch;

		if (ch.length == 1 || ch.charCodeAt(1) == 0xfe0f)
			return "&#" + ch.charCodeAt(0) + ";"

		if (ch.charCodeAt(1) == 0xfe0f) {
			return "&#" + ch.charCodeAt(0) + ";"
		}

		var offset = ch.charCodeAt(0) - 0xd83c;
		if (offset < 0 && offset > 3)//not support
			return ch;

		var second = ch.charCodeAt(1) - 0xdc04;
		var f = offset * 0x400 + second + 0x1f004;
		return "&#x" + f.toString(16) + ";"
	}


	var groupnames = ["smileys", "people", "animals", "food", "travel", "activities", "objects", "symbols"]
	var emojistrs = ["😀#grinning face|😃#grinning face with big eyes|😄#grinning face with smiling eyes|😁#beaming face with smiling eyes|😆#grinning squinting face|😅#grinning face with sweat|🤣#rolling on the floor laughing|😂#face with tears of joy|🙂#slightly smiling face|🙃#upside-down face|😉#winking face|😊#smiling face with smiling eyes|😇#smiling face with halo|😍#smiling face with heart-eyes|🤩#star-struck|😘#face blowing a kiss|😗#kissing face|😚#kissing face with closed eyes|😙#kissing face with smiling eyes|😋#face savoring food|😛#face with tongue|😜#winking face with tongue|🤪#zany face|😝#squinting face with tongue|🤑#money-mouth face|🤗#hugging face|🤭#face with hand over mouth|🤫#shushing face|🤔#thinking face|🤐#zipper-mouth face|🤨#face with raised eyebrow|😐#neutral face|😑#expressionless face|😶#face without mouth|😏#smirking face|😒#unamused face|🙄#face with rolling eyes|😬#grimacing face|🤥#lying face|😌#relieved face|😔#pensive face|😪#sleepy face|🤤#drooling face|😴#sleeping face|😷#face with medical mask|🤒#face with thermometer|🤕#face with head-bandage|🤢#nauseated face|🤮#face vomiting|🤧#sneezing face|😵#dizzy face|🤯#exploding head|🤠#cowboy hat face|😎#smiling face with sunglasses|🤓#nerd face|🧐#face with monocle|😕#confused face|😟#worried face|🙁#slightly frowning face|☹️#frowning face|😮#face with open mouth|😯#hushed face|😲#astonished face|😳#flushed face|😦#frowning face with open mouth|😧#anguished face|😨#fearful face|😰#anxious face with sweat|😥#sad but relieved face|😢#crying face|😭#loudly crying face|😱#face screaming in fear|😖#confounded face|😣#persevering face|😞#disappointed face|😓#downcast face with sweat|😩#weary face|😫#tired face|😤#face with steam from nose|😡#pouting face|😠#angry face|🤬#face with symbols on mouth|😈#smiling face with horns|👿#angry face with horns|💀#skull|☠️#skull and crossbones|💩#pile of poo|🤡#clown face|👹#ogre|👺#goblin|👻#ghost|👽#alien|👾#alien monster|🤖#robot|😺#grinning cat|😸#grinning cat with smiling eyes|😹#cat with tears of joy|😻#smiling cat with heart-eyes|😼#cat with wry smile|😽#kissing cat|🙀#weary cat|😿#crying cat|😾#pouting cat|🙈#see-no-evil monkey|🙉#hear-no-evil monkey|🙊#speak-no-evil monkey|💋#kiss mark|💌#love letter|💘#heart with arrow|💝#heart with ribbon|💖#sparkling heart|💗#growing heart|💓#beating heart|💞#revolving hearts|💕#two hearts|💟#heart decoration|❣️#heart exclamation|💔#broken heart|❤️#red heart|🧡#orange heart|💛#yellow heart|💚#green heart|💙#blue heart|💜#purple heart|🖤#black heart|💯#hundred points|💢#anger symbol|💥#collision|💫#dizzy|💦#sweat droplets|💨#dashing away|💣#bomb|💬#speech balloon|💭#thought balloon|💤#zzz", "👋#waving hand|🤚#raised back of hand|✋#raised hand|🖖#vulcan salute|👌#OK hand|✌️#victory hand|🤞#crossed fingers|🤟#love-you gesture|🤘#sign of the horns|🤙#call me hand|👈#backhand index pointing left|👉#backhand index pointing right|👆#backhand index pointing up|🖕#middle finger|👇#backhand index pointing down|☝️#index pointing up|👍#thumbs up|👎#thumbs down|✊#raised fist|👊#oncoming fist|🤛#left-facing fist|🤜#right-facing fist|👏#clapping hands|🙌#raising hands|👐#open hands|🤲#palms up together|🤝#handshake|🙏#folded hands|✍️#writing hand|💅#nail polish|🤳#selfie|💪#flexed biceps|👂#ear|👃#nose|🧠#brain|👀#eyes|👅#tongue|👄#mouth|👶#baby|🧒#child|👦#boy|👧#girl|🧑#person|👱#person with blond hair|👨#man|🧔#man with beard|👩#woman|🧓#older person|👴#old man|👵#old woman|🙍#person frowning|🙎#person pouting|🙅#person gesturing NO|🙆#person gesturing OK|💁#person tipping hand|🙋#person raising hand|🙇#person bowing|🤦#person facepalming|🤷#person shrugging|👮#police officer|💂#guard|👷#construction worker|🤴#prince|👸#princess|👳#person wearing turban|👲#person with skullcap|🧕#woman with headscarf|🤵#person in tuxedo|👰#person with veil|🤰#pregnant woman|🤱#breast-feeding|👼#baby angel|🎅#Santa Claus|🤶#Mrs. Claus|🧙#mage|🧚#fairy|🧛#vampire|🧜#merperson|🧝#elf|🧞#genie|🧟#zombie|💆#person getting massage|💇#person getting haircut|🚶#person walking|🏃#person running|💃#woman dancing|🕺#man dancing|👯#people with bunny ears|🧖#person in steamy room|🧗#person climbing|🤺#person fencing|🏇#horse racing|⛷️#skier|🏂#snowboarder|🏄#person surfing|🚣#person rowing boat|🏊#person swimming|⛹️#person bouncing ball|🚴#person biking|🚵#person mountain biking|🤸#person cartwheeling|🤼#people wrestling|🤽#person playing water polo|🤾#person playing handball|🤹#person juggling|🧘#person in lotus position|🛀#person taking bath|🛌#person in bed|👭#women holding hands|👫#woman and man holding hands|👬#men holding hands|💏#kiss|💑#couple with heart|👪#family|👤#bust in silhouette|👥#busts in silhouette|👣#footprints", "🐵#monkey face|🐒#monkey|🦍#gorilla|🐶#dog face|🐕#dog|🐩#poodle|🐺#wolf|🦊#fox|🐱#cat face|🐈#cat|🦁#lion|🐯#tiger face|🐅#tiger|🐆#leopard|🐴#horse face|🐎#horse|🦄#unicorn|🦓#zebra|🦌#deer|🐮#cow face|🐂#ox|🐃#water buffalo|🐄#cow|🐷#pig face|🐖#pig|🐗#boar|🐽#pig nose|🐏#ram|🐑#ewe|🐐#goat|🐪#camel|🐫#two-hump camel|🦒#giraffe|🐘#elephant|🦏#rhinoceros|🐭#mouse face|🐁#mouse|🐀#rat|🐹#hamster|🐰#rabbit face|🐇#rabbit|🦔#hedgehog|🦇#bat|🐻#bear|🐨#koala|🐼#panda|🐾#paw prints|🦃#turkey|🐔#chicken|🐓#rooster|🐣#hatching chick|🐤#baby chick|🐥#front-facing baby chick|🐦#bird|🐧#penguin|🦅#eagle|🦆#duck|🦉#owl|🐸#frog|🐊#crocodile|🐢#turtle|🦎#lizard|🐍#snake|🐲#dragon face|🐉#dragon|🦕#sauropod|🦖#T-Rex|🐳#spouting whale|🐋#whale|🐬#dolphin|🐟#fish|🐠#tropical fish|🐡#blowfish|🦈#shark|🐙#octopus|🐚#spiral shell|🐌#snail|🦋#butterfly|🐛#bug|🐜#ant|🐝#honeybee|🐞#lady beetle|🦗#cricket|🦂#scorpion|💐#bouquet|🌸#cherry blossom|💮#white flower|🌹#rose|🥀#wilted flower|🌺#hibiscus|🌻#sunflower|🌼#blossom|🌷#tulip|🌱#seedling|🌲#evergreen tree|🌳#deciduous tree|🌴#palm tree|🌵#cactus|🌾#sheaf of rice|🌿#herb|☘️#shamrock|🍀#four leaf clover|🍁#maple leaf|🍂#fallen leaf|🍃#leaf fluttering in wind", "🍇#grapes|🍈#melon|🍉#watermelon|🍊#tangerine|🍋#lemon|🍌#banana|🍍#pineapple|🍎#red apple|🍏#green apple|🍐#pear|🍑#peach|🍒#cherries|🍓#strawberry|🥝#kiwi fruit|🍅#tomato|🥥#coconut|🥑#avocado|🍆#eggplant|🥔#potato|🥕#carrot|🌽#ear of corn|🥒#cucumber|🥦#broccoli|🍄#mushroom|🥜#peanuts|🌰#chestnut|🍞#bread|🥐#croissant|🥖#baguette bread|🥨#pretzel|🥞#pancakes|🧀#cheese wedge|🍖#meat on bone|🍗#poultry leg|🥩#cut of meat|🥓#bacon|🍔#hamburger|🍟#french fries|🍕#pizza|🌭#hot dog|🥪#sandwich|🌮#taco|🌯#burrito|🥙#stuffed flatbread|🥚#egg|🍳#cooking|🥘#shallow pan of food|🍲#pot of food|🥣#bowl with spoon|🥗#green salad|🍿#popcorn|🥫#canned food|🍱#bento box|🍘#rice cracker|🍙#rice ball|🍚#cooked rice|🍛#curry rice|🍜#steaming bowl|🍝#spaghetti|🍠#roasted sweet potato|🍢#oden|🍣#sushi|🍤#fried shrimp|🍥#fish cake with swirl|🍡#dango|🥟#dumpling|🥠#fortune cookie|🥡#takeout box|🦀#crab|🦐#shrimp|🦑#squid|🍦#soft ice cream|🍧#shaved ice|🍨#ice cream|🍩#doughnut|🍪#cookie|🎂#birthday cake|🍰#shortcake|🥧#pie|🍫#chocolate bar|🍬#candy|🍭#lollipop|🍮#custard|🍯#honey pot|🍼#baby bottle|🥛#glass of milk|☕#hot beverage|🍵#teacup without handle|🍶#sake|🍾#bottle with popping cork|🍷#wine glass|🍸#cocktail glass|🍹#tropical drink|🍺#beer mug|🍻#clinking beer mugs|🥂#clinking glasses|🥃#tumbler glass|🥤#cup with straw|🥢#chopsticks|🍴#fork and knife|🥄#spoon|🔪#kitchen knife|🏺#amphora", "🌍#globe showing Europe-Africa|🌎#globe showing Americas|🌏#globe showing Asia-Australia|🌐#globe with meridians|🗾#map of Japan|⛰️#mountain|🌋#volcano|🗻#mount fuji|🏠#house|🏡#house with garden|🏢#office building|🏣#Japanese post office|🏤#post office|🏥#hospital|🏦#bank|🏨#hotel|🏩#love hotel|🏪#convenience store|🏫#school|🏬#department store|🏭#factory|🏯#Japanese castle|🏰#castle|💒#wedding|🗼#Tokyo tower|🗽#Statue of Liberty|⛪#church|🕌#mosque|🕍#synagogue|⛩️#shinto shrine|🕋#kaaba|⛲#fountain|⛺#tent|🌁#foggy|🌃#night with stars|🌄#sunrise over mountains|🌅#sunrise|🌆#cityscape at dusk|🌇#sunset|🌉#bridge at night|♨️#hot springs|🎠#carousel horse|🎡#ferris wheel|🎢#roller coaster|💈#barber pole|🎪#circus tent|🚂#locomotive|🚃#railway car|🚄#high-speed train|🚅#bullet train|🚆#train|🚇#metro|🚈#light rail|🚉#station|🚊#tram|🚝#monorail|🚞#mountain railway|🚋#tram car|🚌#bus|🚍#oncoming bus|🚎#trolleybus|🚐#minibus|🚑#ambulance|🚒#fire engine|🚓#police car|🚔#oncoming police car|🚕#taxi|🚖#oncoming taxi|🚗#automobile|🚘#oncoming automobile|🚙#sport utility vehicle|🚚#delivery truck|🚛#articulated lorry|🚜#tractor|🛵#motor scooter|🚲#bicycle|🛴#kick scooter|🚏#bus stop|⛽#fuel pump|🚨#police car light|🚥#horizontal traffic light|🚦#vertical traffic light|🛑#stop sign|🚧#construction|⚓#anchor|⛵#sailboat|🛶#canoe|🚤#speedboat|⛴️#ferry|🚢#ship|✈️#airplane|🛫#airplane departure|🛬#airplane arrival|💺#seat|🚁#helicopter|🚟#suspension railway|🚠#mountain cableway|🚡#aerial tramway|🚀#rocket|🛸#flying saucer|⌛#hourglass done|⏳#hourglass not done|⌚#watch|⏰#alarm clock|⏱️#stopwatch|⏲️#timer clock|🕛#twelve o’clock|🕧#twelve-thirty|🕐#one o’clock|🕜#one-thirty|🕑#two o’clock|🕝#two-thirty|🕒#three o’clock|🕞#three-thirty|🕓#four o’clock|🕟#four-thirty|🕔#five o’clock|🕠#five-thirty|🕕#six o’clock|🕡#six-thirty|🕖#seven o’clock|🕢#seven-thirty|🕗#eight o’clock|🕣#eight-thirty|🕘#nine o’clock|🕤#nine-thirty|🕙#ten o’clock|🕥#ten-thirty|🕚#eleven o’clock|🕦#eleven-thirty|🌑#new moon|🌒#waxing crescent moon|🌓#first quarter moon|🌔#waxing gibbous moon|🌕#full moon|🌖#waning gibbous moon|🌗#last quarter moon|🌘#waning crescent moon|🌙#crescent moon|🌚#new moon face|🌛#first quarter moon face|🌜#last quarter moon face|☀️#sun|🌝#full moon face|🌞#sun with face|⭐#star|🌟#glowing star|🌠#shooting star|🌌#milky way|☁️#cloud|⛅#sun behind cloud|⛈️#cloud with lightning and rain|🌀#cyclone|🌈#rainbow|🌂#closed umbrella|☂️#umbrella|☔#umbrella with rain drops|⛱️#umbrella on ground|⚡#high voltage|❄️#snowflake|☃️#snowman|⛄#snowman without snow|☄️#comet|🔥#fire|💧#droplet|🌊#water wave", "🎃#jack-o-lantern|🎄#Christmas tree|🎆#fireworks|🎇#sparkler|✨#sparkles|🎈#balloon|🎉#party popper|🎊#confetti ball|🎋#tanabata tree|🎍#pine decoration|🎎#Japanese dolls|🎏#carp streamer|🎐#wind chime|🎑#moon viewing ceremony|🎀#ribbon|🎁#wrapped gift|🎫#ticket|🏆#trophy|🏅#sports medal|🥇#1st place medal|🥈#2nd place medal|🥉#3rd place medal|⚽#soccer ball|⚾#baseball|🏀#basketball|🏐#volleyball|🏈#american football|🏉#rugby football|🎾#tennis|🎳#bowling|🏏#cricket game|🏑#field hockey|🏒#ice hockey|🏓#ping pong|🏸#badminton|🥊#boxing glove|🥋#martial arts uniform|🥅#goal net|⛳#flag in hole|⛸️#ice skate|🎣#fishing pole|🎽#running shirt|🎿#skis|🛷#sled|🥌#curling stone|🎯#direct hit|🎱#pool 8 ball|🔮#crystal ball|🎮#video game|🎰#slot machine|🎲#game die|♠️#spade suit|♥️#heart suit|♦️#diamond suit|♣️#club suit|🃏#joker|🀄#mahjong red dragon|🎴#flower playing cards|🎭#performing arts|🎨#artist palette", "👓#glasses|👔#necktie|👕#t-shirt|👖#jeans|🧣#scarf|🧤#gloves|🧥#coat|🧦#socks|👗#dress|👘#kimono|👙#bikini|👚#woman’s clothes|👛#purse|👜#handbag|👝#clutch bag|🎒#backpack|👞#man’s shoe|👟#running shoe|👠#high-heeled shoe|👡#woman’s sandal|👢#woman’s boot|👑#crown|👒#woman’s hat|🎩#top hat|🎓#graduation cap|🧢#billed cap|⛑️#rescue worker’s helmet|📿#prayer beads|💄#lipstick|💍#ring|💎#gem stone|🔇#muted speaker|🔈#speaker low volume|🔉#speaker medium volume|🔊#speaker high volume|📢#loudspeaker|📣#megaphone|📯#postal horn|🔔#bell|🔕#bell with slash|🎼#musical score|🎵#musical note|🎶#musical notes|🎤#microphone|🎧#headphone|📻#radio|🎷#saxophone|🎸#guitar|🎹#musical keyboard|🎺#trumpet|🎻#violin|🥁#drum|📱#mobile phone|📲#mobile phone with arrow|☎️#telephone|📞#telephone receiver|📟#pager|📠#fax machine|🔋#battery|🔌#electric plug|💻#laptop|⌨️#keyboard|💽#computer disk|💾#floppy disk|💿#optical disk|📀#dvd|🎥#movie camera|🎬#clapper board|📺#television|📷#camera|📸#camera with flash|📹#video camera|📼#videocassette|🔍#magnifying glass tilted left|🔎#magnifying glass tilted right|💡#light bulb|🔦#flashlight|🏮#red paper lantern|📔#notebook with decorative cover|📕#closed book|📖#open book|📗#green book|📘#blue book|📙#orange book|📚#books|📓#notebook|📒#ledger|📃#page with curl|📜#scroll|📄#page facing up|📰#newspaper|📑#bookmark tabs|🔖#bookmark|💰#money bag|💴#yen banknote|💵#dollar banknote|💶#euro banknote|💷#pound banknote|💸#money with wings|💳#credit card|💹#chart increasing with yen|✉️#envelope|📧#e-mail|📨#incoming envelope|📩#envelope with arrow|📤#outbox tray|📥#inbox tray|📦#package|📫#closed mailbox with raised flag|📪#closed mailbox with lowered flag|📬#open mailbox with raised flag|📭#open mailbox with lowered flag|📮#postbox|✏️#pencil|✒️#black nib|📝#memo|💼#briefcase|📁#file folder|📂#open file folder|📅#calendar|📆#tear-off calendar|📇#card index|📈#chart increasing|📉#chart decreasing|📊#bar chart|📋#clipboard|📌#pushpin|📍#round pushpin|📎#paperclip|📏#straight ruler|📐#triangular ruler|✂️#scissors|🔒#locked|🔓#unlocked|🔏#locked with pen|🔐#locked with key|🔑#key|🔨#hammer|⛏️#pick|⚒️#hammer and pick|⚔️#crossed swords|🔫#pistol|🏹#bow and arrow|🔧#wrench|🔩#nut and bolt|⚙️#gear|⚖️#balance scale|🔗#link|⛓️#chains|⚗️#alembic|🔬#microscope|🔭#telescope|📡#satellite antenna|💉#syringe|💊#pill|🚪#door|🚽#toilet|🚿#shower|🛁#bathtub|🛒#shopping cart|🚬#cigarette|⚰️#coffin|⚱️#funeral urn|🗿#moai", "🏧#ATM sign|🚮#litter in bin sign|🚰#potable water|♿#wheelchair symbol|🚹#men’s room|🚺#women’s room|🚻#restroom|🚼#baby symbol|🚾#water closet|🛂#passport control|🛃#customs|🛄#baggage claim|🛅#left luggage|⚠️#warning|🚸#children crossing|⛔#no entry|🚫#prohibited|🚳#no bicycles|🚭#no smoking|🚯#no littering|🚱#non-potable water|🚷#no pedestrians|📵#no mobile phones|🔞#no one under eighteen|☢️#radioactive|☣️#biohazard|⬆️#up arrow|↗️#up-right arrow|➡️#right arrow|↘️#down-right arrow|⬇️#down arrow|↙️#down-left arrow|⬅️#left arrow|↖️#up-left arrow|↕️#up-down arrow|↔️#left-right arrow|↩️#right arrow curving left|↪️#left arrow curving right|⤴️#right arrow curving up|⤵️#right arrow curving down|🔃#clockwise vertical arrows|🔄#counterclockwise arrows button|🔙#BACK arrow|🔚#END arrow|🔛#ON! arrow|🔜#SOON arrow|🔝#TOP arrow|🛐#place of worship|⚛️#atom symbol|✡️#star of David|☸️#wheel of dharma|☯️#yin yang|✝️#latin cross|☦️#orthodox cross|☪️#star and crescent|☮️#peace symbol|🕎#menorah|🔯#dotted six-pointed star|♈#Aries|♉#Taurus|♊#Gemini|♋#Cancer|♌#Leo|♍#Virgo|♎#Libra|♏#Scorpio|♐#Sagittarius|♑#Capricorn|♒#Aquarius|♓#Pisces|⛎#Ophiuchus|🔀#shuffle tracks button|🔁#repeat button|🔂#repeat single button|▶️#play button|⏩#fast-forward button|⏭️#next track button|⏯️#play or pause button|◀️#reverse button|⏪#fast reverse button|⏮️#last track button|🔼#upwards button|⏫#fast up button|🔽#downwards button|⏬#fast down button|⏸️#pause button|⏹️#stop button|⏺️#record button|⏏️#eject button|🎦#cinema|🔅#dim button|🔆#bright button|📶#antenna bars|📳#vibration mode|📴#mobile phone off|♀️#female sign|♂️#male sign|✖️#multiply|➕#plus|➖#minus|➗#divide|‼️#double exclamation mark|⁉️#exclamation question mark|❓#question mark|❔#white question mark|❕#white exclamation mark|❗#exclamation mark|〰️#wavy dash|💱#currency exchange|💲#heavy dollar sign|⚕️#medical symbol|♻️#recycling symbol|⚜️#fleur-de-lis|🔱#trident emblem|📛#name badge|🔰#Japanese symbol for beginner|⭕#hollow red circle|✅#check mark button|☑️#check box with check|✔️#check mark|❌#cross mark|❎#cross mark button|➰#curly loop|➿#double curly loop|〽️#part alternation mark|✳️#eight-spoked asterisk|✴️#eight-pointed star|❇️#sparkle|©️#copyright|®️#registered|™️#trade mark|🔟#keycap: 10|🔠#input latin uppercase|🔡#input latin lowercase|🔢#input numbers|🔣#input symbols|🔤#input latin letters|🆎#AB button (blood type)|🆑#CL button|🆒#COOL button|🆓#FREE button|ℹ️#information|🆔#ID button|Ⓜ️#circled M|🆕#NEW button|🆖#NG button|🆗#OK button|🆘#SOS button|🆙#UP! button|🆚#VS button|🈁#Japanese “here” button|🈶#Japanese “not free of charge” button|🈯#Japanese “reserved” button|🉐#Japanese “bargain” button|🈹#Japanese “discount” button|🈚#Japanese “free of charge” button|🈲#Japanese “prohibited” button|🉑#Japanese “acceptable” button|🈸#Japanese “application” button|🈴#Japanese “passing grade” button|🈳#Japanese “vacancy” button|㊗️#Japanese “congratulations” button|㊙️#Japanese “secret” button|🈺#Japanese “open for business” button|🈵#Japanese “no vacancy” button|🔴#red circle|🔵#blue circle|⚫#black circle|⚪#white circle|⬛#black large square|⬜#white large square|◼️#black medium square|◻️#white medium square|◾#black medium-small square|◽#white medium-small square|▪️#black small square|▫️#white small square|🔶#large orange diamond|🔷#large blue diamond|🔸#small orange diamond|🔹#small blue diamond|🔺#red triangle pointed up|🔻#red triangle pointed down|💠#diamond with a dot|🔘#radio button|🔳#white square button|🔲#black square button"]
	var emojidata = null;

	function MakeEmojiData() {
		if (emojidata)
			return;
		emojidata = [];
		for (var groupindex = 0; groupindex < groupnames.length; groupindex++) {
			var emojiitems = [];
			var emojigroup = { index: groupindex, name: groupnames[groupindex], items: emojiitems };
			var emojiarr = emojistrs[groupindex].split('|');
			for (var ei = 0; ei < emojiarr.length; ei++) {
				var emojistr = emojiarr[ei];
				var pair = emojistr.split('#')
				emojiitems.push({ emoji: pair[0], keyword: pair[1] });
			}
			emojidata.push(emojigroup);
		}
		//console.log(emojidata);
	}

	var obj = this;

	var config, editor;

	obj.PluginName = "InsertEmoji";

	obj.InitConfig = function (argconfig) {
		config = argconfig;
	}
	obj.InitEditor = function (argeditor) {
		editor = argeditor;

		editor.toolbarFactoryMap["insertemoji"] = function (cmd) {
			return editor.createToolbarItemDropDownPanel(cmd, function (panel) {

				MakeEmojiData()

				panel.style.width = "360px";
				panel.style.height = "420px";
				panel.style.display = "flex";
				panel.style.flexDirection = "column";

				panel.onclick = function (e) {
					if (e.target.nodeName == "GSPAN") {
						editor.closeCurrentPopup();
						var htmlcode = e.target.getAttribute("htmlcode");
						console.log("insert emoji", htmlcode)
						editor.insertHTML(htmlcode);
						editor.collapse(false);
						editor.focus();
					}
				}

				var selecteditem = null;
				var toselectitem = null;
				function clear_selecteditem() {
					if (selecteditem != null) {
						selecteditem.style.backgroundColor = "";
						selecteditem = null;
					}
				}
				function set_selecteditem() {
					clear_selecteditem();
					selecteditem = toselectitem; selecteditem.style.backgroundColor = "#e6e6e6";
					toselectitem = null;
				}
				var tid_sel = 0;

				panel.onmouseover = function (e) {
					for (var node = e.target; node != panel; node = node.parentNode) {
						if (node.nodeName == "GITEM") {
							if (node == toselectitem)
								return;
							toselectitem = node;
							clearTimeout(tid_sel);
							tid_sel = setTimeout(set_selecteditem, 10);
							return;
						}
					}
				}
				panel.onmouseout = function () {
					clearTimeout(tid_sel);
					tid_sel = setTimeout(clear_selecteditem, 10)
				}

				var searchbar = __Append(panel, "label", "margin:5px;position:relative;");
				searchbar.setAttribute("id", "emojis_searchbar");
				var searchbox = __Append(searchbar, "input", "width:100%;padding:5px 20px;border:solid 1px #ccc;border-radius:5px;");
				searchbox.setAttribute("placeholder", editor.getLangText("searchemojis"));

				var tid_key = 0;
				searchbox.onchange = searchbox.onkeyup = searchbox.onkeypress = searchbox.onpaste = function () {
					clearTimeout(tid_key);
					tid_key = setTimeout(show_result, 100);
				}
				function show_result() {
					var keyword = searchbox.value.trim().toLowerCase();
					if (!keyword) {
						tabpanel.style.display =
							grouppanel.style.display = "";
						resultpanel.style.display = "none";
						return;
					}

					tabpanel.style.display =
						grouppanel.style.display = "none";
					resultpanel.style.display = "flex";
					resultpanel.innerHTML = "";

					var resultline = __Append(resultpanel, "div", "width:100%;padding:3px;margin-top:5px;color:darkblue;text-align:center;");

					var itemindex = 0;


					for (var gi = 0; gi < emojidata.length; gi++) {
						var group = emojidata[gi];
						for (var ii = 0; ii < group.items.length; ii++) {
							var item = group.items[ii];

							if (!item.keyword || item.keyword.indexOf(keyword) == -1)
								continue;

							itemindex++;

							//if (itemindex > 20)break;
							var gitem = __Append(resultpanel, "gitem", "width:32px;height:32px;margin:2px", "rte-flex-column-center")
							var gspan = __Append(gitem, "gspan", "");
							var htmlcode = CharToHTMLCode(item.emoji);
							gspan.setAttribute("title", item.emoji + " " + item.keyword)
							gspan.setAttribute("htmlcode", htmlcode)
							gspan.innerHTML = htmlcode;
						}
					}

					resultline.innerText = itemindex + " items";

				}

				searchbox.focus();

				panel.setAttribute("id", "emoji-picker");

				var tabpanel = __Append(panel, "div");

				var resultpanel = __Append(panel, "div", "display:none;flex-direction:row;flex-wrap:wrap;overflow-y:scroll;padding-bottom:55px");

				var grouppanel = __Append(panel, "div", "overflow-y:scroll;padding-bottom:55px;flex:999");

				var groupdivs = [];

				for (var gi = 0; gi < emojidata.length; gi++) {
					var group = emojidata[gi];
					var gdiv = __Append(grouppanel, "div", "padding:3px;margin-top:5px;color:darkblue;");
					groupdivs.push(gdiv);
					gdiv.innerText = group.name[0].toUpperCase() + group.name.substring(1);

					gdiv = __Append(grouppanel, "div", "display:flex;flex-direction:row;flex-wrap:wrap;");

					for (var itemindex = 0; itemindex < group.items.length; itemindex++) {
						var item = group.items[itemindex];
						//if (itemindex > 20)break;
						var gitem = __Append(gdiv, "gitem", "width:32px;height:32px;margin:2px", "rte-flex-column-center")
						var gspan = __Append(gitem, "gspan", "");
						var htmlcode = CharToHTMLCode(item.emoji);
						gspan.setAttribute("title", item.emoji + " " + item.keyword)
						gspan.setAttribute("htmlcode", htmlcode)
						gspan.innerHTML = htmlcode;
					}
				}

				var tabui = __Append(tabpanel, "rte-tabui");
				tabui.setAttribute("id", "emoji-picker");
				var tabuitoolbar = __Append(tabui, "rte-tabui-toolbar");
				var tabuibtns = [];
				function CreateTabBtn(group) {
					var btn = __Append(tabuitoolbar, "rte-tabui-toolbar-button", "width:32px;text-align:center;margin:4px")
					tabuibtns.push(btn);
					btn.setAttribute("title", group.name);
					btn.innerHTML = group.items[0].emoji
					btn.onclick = function () {
						grouppanel.scrollTop = groupdivs[group.index].getBoundingClientRect().top - grouppanel.getBoundingClientRect().top + grouppanel.scrollTop;
						grouppanel.onscroll();
					}
					btn.group = group;
				}
				for (var gi = 0; gi < emojidata.length; gi++) {
					var group = emojidata[gi];
					CreateTabBtn(group)
				}

				var lastactivebtn = null;
				grouppanel.onscroll = function () {
					var ptop = grouppanel.getBoundingClientRect().top;
					console.log(ptop);
					if (lastactivebtn) lastactivebtn.className = "";
					for (var bi = 0; bi < tabuibtns.length; bi++) {
						var btn = tabuibtns[bi];
						var gdiv = groupdivs[btn.group.index];
						if (gdiv.getBoundingClientRect().top > ptop) {
							lastactivebtn = tabuibtns[btn.group.index - 1] || btn;
							lastactivebtn.className = "rte-ui-active";
							return;
						}
					}

					lastactivebtn = tabuibtns[tabuibtns.length - 1];
					lastactivebtn.className = "rte-ui-active";
				}
				grouppanel.onscroll();


			})
		};

	}

	function __Append(parent, tagname, csstext, cssclass) {
		var tag = parent.ownerDocument.createElement(tagname);
		if (csstext) tag.style.cssText = csstext;
		if (cssclass) tag.className = cssclass;
		parent.appendChild(tag);
		return tag;
	}


}




﻿

RTE_DefaultConfig.plugin_insertgallery = RTE_Plugin_InsertGallery;

function RTE_Plugin_InsertGallery() {



	var obj = this;

	var config, editor;

	obj.PluginName = "InsertGallery";

	obj.InitConfig = function (argconfig) {
		config = argconfig;
	}
	obj.InitEditor = function (argeditor) {
		editor = argeditor;

		editor.attachEvent("exec_command_insertgallery", function (state, cmd, value) {
			state.returnValue = true;
			obj.DoInsertGallery();
		});


	}

	function __Append(parent, tagname, csstext, cssclass) {
		var tag = parent.ownerDocument.createElement(tagname);
		if (csstext) tag.style.cssText = csstext;
		if (cssclass) tag.className = cssclass;
		parent.appendChild(tag);
		return tag;
	}
	
	obj.DoInsertGallery = function () {

		var dialoginner = editor.createDialog(editor.getLangText("insertgallerytitle"), "rte-dialog-insertgallery");

		var scrollpanel = __Append(dialoginner, "rte-insertgallery-scrollpanel", "overflow-y:auto;padding-bottom:32px;");
		var container = __Append(scrollpanel, "rte-insertgallery-container", "display:flex;flex-wrap:wrap;");

		container.focus();//focus to let ESC key close dialog

		function CreateDiv(item) {
			var url, text;
			if (typeof (item) == "string") {
				url = item;
			} else if (item instanceof Array) {
				url = item[0];
				text = item[1];
			}
			else if (item && item.url) {
				url = item.url;
				text = item.text;
			}
			else {
				return;
			}

			var divitem = __Append(container, "rte-insertgallery-image-item", "cursor:pointer;width:128px;height:128px;margin:12px;box-shadow:0 0 8px #ccc;display:flex;align-items:center;justify-content:center;")
			var img = __Append(divitem, "img", "max-width:90%;max-height:90%;");
			img.src = url;

			divitem.onclick = function () {
				editor.insertImageByUrl(url);
				dialoginner.close();
			}
        }

		for (var i = 0; i < config.galleryImages.length; i++) {
			var item = config.galleryImages[i];
			CreateDiv(item);
        }

	}
}




﻿

RTE_DefaultConfig.plugin_inserttemplate = RTE_Plugin_InsertTemplate;

function RTE_Plugin_InsertTemplate() {



    var obj = this;

    var config, editor;

    obj.PluginName = "InsertTemplate";

    obj.InitConfig = function (argconfig) {
        config = argconfig;
    }
    obj.InitEditor = function (argeditor) {
        editor = argeditor;

        editor.attachEvent("exec_command_inserttemplate", function (state, cmd, value) {
            state.returnValue = true;
            obj.DoInsertTemplate();
        });


    }

    function __Append(parent, tagname, csstext, cssclass) {
        var tag = parent.ownerDocument.createElement(tagname);
        if (csstext) tag.style.cssText = csstext;
        if (cssclass) tag.className = cssclass;
        parent.appendChild(tag);
        return tag;
    }

    obj.DoInsertTemplate = function () {

        var dialoginner = editor.createDialog(editor.getLangText("inserttemplatetitle"), "rte-dialog-inserttemplate");

        var scrollpanel = __Append(dialoginner, "rte-inserttemplate-scrollpanel", "overflow-y:auto;padding-bottom:32px;");
        var container = __Append(scrollpanel, "rte-inserttemplate-container", "display:flex;flex-wrap:wrap;");

        container.focus();//focus to let ESC key close dialog

        function CreateDiv(item) {
            var text = item[0];
            var html = item[1];
            console.log(item, text, html);

            var divitem = __Append(container, "rte-inserttemplate-image-item", "cursor:pointer;width:256px;height:256px;margin:12px;box-shadow:0 0 8px #ccc;display:flex;align-items:center;justify-content:center;")
            var div = __Append(divitem, "div", "max-width:90%;max-height:90%;overflow:auto;");
            var innerdiv = __Append(div, "div");
            innerdiv.innerHTML = html;
            div.title = text;

            var scale = Math.min(200 / div.scrollWidth, 200 / div.scrollHeight);
            if (scale < 1) {

                var tx, ty;
                tx = ty = (Math.max(div.scrollWidth, div.scrollHeight) - 200) / 2;
                innerdiv.style.transform = "scale(" + scale + ") translate(-" + tx + "px,-" + ty + "px)";
                div.style.overflow = "hidden";
            }

            divitem.onclick = function () {
                editor.setHTMLCode(html);
                dialoginner.close();
            }
        }

        for (var i = 0; i < config.htmlTemplates.length; i++) {
            var item = config.htmlTemplates[i];
            CreateDiv(item);
        }

    }
}





//END of all_plugins.js 
var s,t,u,g,c,d,h,a=!1,f=[],e={init:function(){var e="agLoginAuth";this.getAuthSession(e)||a?(this.setAuthSession(e,this.getAuthSession(e)),s=this.getAuthSession("tournamentDetails")||{},u=this.getAuthSession(e).userProfileId,t=s.tournamentId,d=s.startDate,h=s.endDate,s&&s.tournamentId?(this.setAuthSession("tournamentDetails",s),s.friendlyName?(e=this.getApiUrl("tournaments")+(a?"":s.friendlyName),$.ajax({type:"GET",url:e,contentType:"application/json",dataType:"json",timeout:0,success:function(e,t){e&&e.tournamentInfo?this.updateData(e):($(".loading").hide(),$("#previous-data-load-error").removeClass("hide")),$(".page-header").removeClass("loading")}.bind(this),error:function(e,t,a){$(".loading").hide(),this.updateData(),$("#previous-data-load-error").removeClass("hide"),$(".page-header").removeClass("loading")}.bind(this)})):this.updateData()):window.location.href="./active-tournaments.html"):(window.sessionStorage.setItem("agReDirectPage","./create-landing.html"),window.location.href="./login.html")},updateData:function(n){var o,i,a,r,e={},m=[];function l(e,a,t,n){var o=t.getApiUrl("upload"),t=new FormData,i=$(e)[0].files;t.append("imageFile",$(e)[0].files[0]),t.append("userProfileId",u),t.append("mediaFolder","Tournament"),t.append("mediaFolderId",123),t.append("mediaSubFolder",n),t.append("mediaSubFolderId",456),$.ajax({type:"POST",url:o,timeout:0,enctype:"multipart/form-data",processData:!1,contentType:!1,cache:!1,data:t,success:function(e,t){e&&("Team"===n?g=e.mediaId:"Logo"===n&&(e={mediaRole:n,mediaFriendlyName:n+e.mediaId,mediaId:e.mediaId},f.push(e)))}.bind(this),error:function(e,t,a){console.log("failed")}.bind(this)});for(var r=0;r<i.length;r++){var l,s,d=i[r];d.type.match(/image.*/)&&((l=document.getElementById($(e).attr("name")+"_thumbnail")).file=d,(s=new FileReader).onload=function(t){return function(e){t.src=e.target.result,t.style.display="block","Logo"===n?(m[a]={image:""},m[a].image=e.target.result):c=e.target.result}}(l),s.readAsDataURL(d))}}e.toolbar="mytoolbar",e.toolbar_mytoolbar="{bold,italic,underline,insertorderedlist,insertunorderedlist,justifyleft,justifycenter,justifyright,insertlink,code,undo,redo}",o=new RichTextEditor("#div_webPageBlob",e),!n&&s&&t&&d&&h?n={tournamentInfo:{tournamentId:t,startDate:d,endDate:h,webPageTitle:"",webPageBlob:""}}:n||(window.location.href="./active-tournaments.html"),n&&n.tournamentInfo&&(a=n.tournamentInfo.friendlyName?n.tournamentInfo.friendlyName.split("_"):"",r="",a&&a.forEach(function(e,t){t<a.length-1&&(r=r+(r?"_":"")+e)}),n.tournamentInfo.friendlyName&&($(".page-header .admin-title").html("Edit Landing page - "+r),$(".tournament-details-head").html("Tournament Id - "+n.tournamentInfo.tournamentId+", "+this.dateConversion(n.tournamentInfo.startDate,!0)+" - "+this.dateConversion(n.tournamentInfo.endDate,!0)),$("#view-current-btn").attr("href","./landing.html#"+n.tournamentInfo.friendlyName).removeClass("hide")),$("[name=webPageTitle]").val(n.tournamentInfo.webPageTitle),$("[name=friendlyName]").val(r),n.tournamentInfo.webPageBlob&&o.setHTMLCode(decodeURIComponent(n.tournamentInfo.webPageBlob)),n.tournamentInfo.titleBackgroundMediaId&&(g=n.tournamentInfo.titleBackgroundMediaId),n.tournamentInfo.titleBackgroundImage&&(c=n.tournamentInfo.titleBackgroundImage,$("#bg_landingimages_thumbnail").attr("src",c).show()),n.tournamentImages&&n.tournamentImages.length&&n.tournamentImages.forEach(function(e,t){m.push({image:e}),$("#logo_image"+t+"_thumbnail").attr("src",e).show()})),$("#preview-btn").on("click",function(){var e=o.getHTMLCode(),t=Handlebars.compile($("[data-template='landingTemplate']").html()),a=!1;if((i={logoImages:m,webPageTitle:"",startDate:n&&this.dateConversion(n.tournamentInfo.startDate),endDate:n&&this.dateConversion(n.tournamentInfo.endDate),golfCourseName:n&&n.tournamentInfo.golfCourseName,learnMore:"Learn More",titleBackgroundImage:c||n&&n.tournamentInfo.titleBackgroundImage,titleBackgroundMediaId:n&&n.tournamentInfo.titleBackgroundMediaId}).webPageBlob=e,i.friendlyName=$("[name=friendlyName]").val()?$("[name=friendlyName]").val().trim():"",i.webPageBlobValue=encodeURIComponent(e),i.webPageTitleValue=$("[name=webPageTitle]").val(),i.webPageTitle=$("[name=webPageTitle]").val(),i.webPageTitle=i.webPageTitle.replace("[[STARTDATE]]",i.startDate),i.webPageTitle=i.webPageTitle.replace("[[ENDDATE]]",i.endDate),i.webPageTitle=i.webPageTitle.replace("[[STARTDATEYEAR]]",n&&this.dateConversion(n.tournamentInfo.startDate,!0)),i.webPageTitle=i.webPageTitle.replace("[[ENDDATEYEAR]]",n&&this.dateConversion(n.tournamentInfo.endDate,!0)),i.webPageBlob=i.webPageBlob.replace("[[STARTDATE]]",i.startDate),i.webPageBlob=i.webPageBlob.replace("[[ENDDATE]]",i.endDate),i.webPageBlob=i.webPageBlob.replace("[[STARTDATEYEAR]]",n&&this.dateConversion(n.tournamentInfo.startDate,!0)),i.webPageBlob=i.webPageBlob.replace("[[ENDDATEYEAR]]",n&&this.dateConversion(n.tournamentInfo.endDate,!0)),i.webPageTitle=i.webPageTitle?i.webPageTitle.trim():"",i.friendlyName||($("[name=friendlyName]").parents(".form-field").addClass("error"),a=!0),i.webPageTitle||($("[name=webPageTitle]").parents(".form-field").addClass("error"),a=!0),a)return $("html, body").animate({scrollTop:$(".page-header").offset().top-30},"slow"),void $("#create-landing-preview").hide();$("[name=friendlyName]").parents(".form-field").removeClass("error"),$("[name=webPageTitle]").parents(".form-field").removeClass("error"),setTimeout(function(){$(".landing-content").html(t(i))},500),$("#create-landing-preview").show(),$(".logo-images").html(""),m.forEach(e=>{$(".logo-images").append('<img class="logoimages" src='+e.image+" />")}),$("#publish-btn").removeClass("hide"),$("#publish-error").addClass("hide"),$("#publish-success").addClass("hide"),$("html, body").animate({scrollTop:$("#create-landing-preview").offset().top-30},"slow")}.bind(this)),$("#publish-btn").on("click",function(){var e=this.getApiUrl("create"),a={userProfileId:u,tournamentId:t,friendlyName:i.friendlyName+"_"+(n?this.dateConversion(n.tournamentInfo.startDate,!0,!0):""),title:i.webPageTitleValue,webpageBlob:i.webPageBlobValue,titleBackgroundMediaId:g||i.titleBackgroundMediaId};f&&f.length&&(a.images={images:f}),$(".button-wrapper").addClass("loading"),$.ajax({type:"POST",url:e,contentType:"application/json",dataType:"json",timeout:0,data:JSON.stringify(a),success:function(e,t){s.friendlyName=a.friendlyName,this.setAuthSession("tournamentDetails",s),$(".button-wrapper").removeClass("loading");$("#publish-success").html('Your page published successfully, please validate - <a target="_blank" href="./landing.html#'+a.friendlyName+'">'+a.friendlyName+"</a>"),$("#publish-error").addClass("hide"),$("#publish-success").removeClass("hide"),$("#publish-btn").addClass("hide")}.bind(this),error:function(e,t,a){$(".button-wrapper").removeClass("loading"),$("#publish-error").removeClass("hide"),$("#publish-success").addClass("hide"),$("#publish-btn").addClass("hide")}.bind(this)})}.bind(this)),$("[name=bg_landingimages]").on("change",function(e){var t=$("[name=bg_landingimages]");l(t,$(t).data("index"),this,"Team")}.bind(this)),$("[name=logo_image0]").on("change",function(e){var t=$("[name=logo_image0]");l(t,$(t).data("index"),this,"Logo")}.bind(this)),$("[name=logo_image1]").on("change",function(e){var t=$("[name=logo_image1]");l(t,$(t).data("index"),this,"Logo")}.bind(this)),$("[name=logo_image2]").on("change",function(e){var t=$("[name=logo_image2]");l(t,$(t).data("index"),this,"Logo")}.bind(this))},getAuthSession:function(e){var t=window.localStorage.getItem(e);if(null!==t){t=JSON.parse(t);if(new Date(t.expirationDate)>new Date&&t)return t.value;window.localStorage.removeItem(e)}return null},setAuthSession:function(e,t){t={value:t,expirationDate:new Date((new Date).getTime()+36e6).toISOString()};window.localStorage.setItem(e,JSON.stringify(t))},getApiUrl:function(e){return{test:{tournaments:"https://beta.actiongolfers.com/website/tournament?friendlyName=",create:"https://beta.actiongolfers.com/website/tournament/create",upload:"https://beta.actiongolfers.com/media/upload"},prod:{tournaments:"https://api.actiongolfers.com/website/tournament?friendlyName=",create:"https://api.actiongolfers.com/website/tournament/create",upload:"https://api.actiongolfers.com/media/upload"},local:{tournaments:"http://localhost:8080/json/tournamentDetails.json",create:"create",upload:"upload"}}["https://actiongolfers.com"===window.origin?"prod":a?"local":"test"][e]},dateConversion:function(e,t,a){e=new Date(e),e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+this.formatWithZero(e.getDate())+(t?", "+e.getFullYear():"");return e=a?(e=e.replace(" ","")).replace(", ",""):e},formatWithZero:function(e){return e<9?"0"+e:e}};e.init();