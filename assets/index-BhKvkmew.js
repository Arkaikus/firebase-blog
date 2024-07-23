var rg=Object.defineProperty;var ig=(t,e,n)=>e in t?rg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var kr=(t,e,n)=>ig(t,typeof e!="symbol"?e+"":e,n);function sg(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function og(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ef={exports:{}},fo={},Sf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),ag=Symbol.for("react.portal"),lg=Symbol.for("react.fragment"),ug=Symbol.for("react.strict_mode"),cg=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),hg=Symbol.for("react.forward_ref"),pg=Symbol.for("react.suspense"),mg=Symbol.for("react.memo"),gg=Symbol.for("react.lazy"),cc=Symbol.iterator;function vg(t){return t===null||typeof t!="object"?null:(t=cc&&t[cc]||t["@@iterator"],typeof t=="function"?t:null)}var If={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tf=Object.assign,kf={};function vr(t,e,n){this.props=t,this.context=e,this.refs=kf,this.updater=n||If}vr.prototype.isReactComponent={};vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pf(){}Pf.prototype=vr.prototype;function Ml(t,e,n){this.props=t,this.context=e,this.refs=kf,this.updater=n||If}var Fl=Ml.prototype=new Pf;Fl.constructor=Ml;Tf(Fl,vr.prototype);Fl.isPureReactComponent=!0;var dc=Array.isArray,Cf=Object.prototype.hasOwnProperty,Ul={current:null},Rf={key:!0,ref:!0,__self:!0,__source:!0};function Af(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cf.call(e,r)&&!Rf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ti,type:t,key:s,ref:o,props:i,_owner:Ul.current}}function yg(t,e){return{$$typeof:Ti,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ti}function _g(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fc=/\/+/g;function Wo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_g(""+t.key):e.toString(36)}function us(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ti:case ag:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wo(o,0):r,dc(i)?(n="",t!=null&&(n=t.replace(fc,"$&/")+"/"),us(i,e,n,"",function(u){return u})):i!=null&&(bl(i)&&(i=yg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dc(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Wo(s,a);o+=us(s,e,n,l,i)}else if(l=vg(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Wo(s,a++),o+=us(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $i(t,e,n){if(t==null)return t;var r=[],i=0;return us(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},cs={transition:null},Eg={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:cs,ReactCurrentOwner:Ul};function Nf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:$i,forEach:function(t,e,n){$i(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $i(t,function(){e++}),e},toArray:function(t){return $i(t,function(e){return e})||[]},only:function(t){if(!bl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=vr;M.Fragment=lg;M.Profiler=cg;M.PureComponent=Ml;M.StrictMode=ug;M.Suspense=pg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;M.act=Nf;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ul.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cf.call(e,l)&&!Rf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ti,type:t.type,key:i,ref:s,props:r,_owner:o}};M.createContext=function(t){return t={$$typeof:fg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dg,_context:t},t.Consumer=t};M.createElement=Af;M.createFactory=function(t){var e=Af.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:hg,render:t}};M.isValidElement=bl;M.lazy=function(t){return{$$typeof:gg,_payload:{_status:-1,_result:t},_init:wg}};M.memo=function(t,e){return{$$typeof:mg,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=cs.transition;cs.transition={};try{t()}finally{cs.transition=e}};M.unstable_act=Nf;M.useCallback=function(t,e){return Ie.current.useCallback(t,e)};M.useContext=function(t){return Ie.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};M.useEffect=function(t,e){return Ie.current.useEffect(t,e)};M.useId=function(){return Ie.current.useId()};M.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Ie.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};M.useRef=function(t){return Ie.current.useRef(t)};M.useState=function(t){return Ie.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Ie.current.useTransition()};M.version="18.3.1";Sf.exports=M;var k=Sf.exports;const zl=og(k),Sg=sg({__proto__:null,default:zl},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig=k,Tg=Symbol.for("react.element"),kg=Symbol.for("react.fragment"),Pg=Object.prototype.hasOwnProperty,Cg=Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rg={key:!0,ref:!0,__self:!0,__source:!0};function xf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Pg.call(e,r)&&!Rg.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Tg,type:t,key:s,ref:o,props:i,_owner:Cg.current}}fo.Fragment=kg;fo.jsx=xf;fo.jsxs=xf;Ef.exports=fo;var N=Ef.exports,Pa={},Of={exports:{}},Ue={},Df={exports:{}},Lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,D){var L=T.length;T.push(D);e:for(;0<L;){var J=L-1>>>1,se=T[J];if(0<i(se,D))T[J]=D,T[L]=se,L=J;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],L=T.pop();if(L!==D){T[0]=L;e:for(var J=0,se=T.length,zi=se>>>1;J<zi;){var on=2*(J+1)-1,Ho=T[on],an=on+1,ji=T[an];if(0>i(Ho,L))an<se&&0>i(ji,Ho)?(T[J]=ji,T[an]=L,J=an):(T[J]=Ho,T[on]=L,J=on);else if(an<se&&0>i(ji,L))T[J]=ji,T[an]=L,J=an;else break e}}return D}function i(T,D){var L=T.sortIndex-D.sortIndex;return L!==0?L:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function y(T){if(_=!1,m(T),!v)if(n(l)!==null)v=!0,$o(S);else{var D=n(u);D!==null&&Bo(y,D.startTime-T)}}function S(T,D){v=!1,_&&(_=!1,p(R),R=-1),g=!0;var L=h;try{for(m(D),d=n(l);d!==null&&(!(d.expirationTime>D)||T&&!Ge());){var J=d.callback;if(typeof J=="function"){d.callback=null,h=d.priorityLevel;var se=J(d.expirationTime<=D);D=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&r(l),m(D)}else r(l);d=n(l)}if(d!==null)var zi=!0;else{var on=n(u);on!==null&&Bo(y,on.startTime-D),zi=!1}return zi}finally{d=null,h=L,g=!1}}var P=!1,C=null,R=-1,$=5,V=-1;function Ge(){return!(t.unstable_now()-V<$)}function Ir(){if(C!==null){var T=t.unstable_now();V=T;var D=!0;try{D=C(!0,T)}finally{D?Tr():(P=!1,C=null)}}else P=!1}var Tr;if(typeof f=="function")Tr=function(){f(Ir)};else if(typeof MessageChannel<"u"){var uc=new MessageChannel,ng=uc.port2;uc.port1.onmessage=Ir,Tr=function(){ng.postMessage(null)}}else Tr=function(){E(Ir,0)};function $o(T){C=T,P||(P=!0,Tr())}function Bo(T,D){R=E(function(){T(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,$o(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return T()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(T,D,L){var J=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,T){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=L+se,T={id:c++,callback:D,priorityLevel:T,startTime:L,expirationTime:se,sortIndex:-1},L>J?(T.sortIndex=L,e(u,T),n(l)===null&&T===n(u)&&(_?(p(R),R=-1):_=!0,Bo(y,L-J))):(T.sortIndex=se,e(l,T),v||g||(v=!0,$o(S))),T},t.unstable_shouldYield=Ge,t.unstable_wrapCallback=function(T){var D=h;return function(){var L=h;h=D;try{return T.apply(this,arguments)}finally{h=L}}}})(Lf);Df.exports=Lf;var Ag=Df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=k,Fe=Ag;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vf=new Set,Jr={};function xn(t,e){sr(t,e),sr(t+"Capture",e)}function sr(t,e){for(Jr[t]=e,t=0;t<e.length;t++)Vf.add(e[t])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},pc={};function Og(t){return Ca.call(pc,t)?!0:Ca.call(hc,t)?!1:xg.test(t)?pc[t]=!0:(hc[t]=!0,!1)}function Dg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Lg(t,e,n,r){if(e===null||typeof e>"u"||Dg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Te(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){he[t]=new Te(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];he[e]=new Te(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){he[t]=new Te(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){he[t]=new Te(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){he[t]=new Te(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){he[t]=new Te(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){he[t]=new Te(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){he[t]=new Te(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){he[t]=new Te(t,5,!1,t.toLowerCase(),null,!1,!1)});var jl=/[\-:]([a-z])/g;function $l(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jl,$l);he[e]=new Te(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jl,$l);he[e]=new Te(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jl,$l);he[e]=new Te(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){he[t]=new Te(t,1,!1,t.toLowerCase(),null,!1,!1)});he.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){he[t]=new Te(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bl(t,e,n,r){var i=he.hasOwnProperty(e)?he[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Lg(e,n,i,r)&&(n=null),r||i===null?Og(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ct=Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bi=Symbol.for("react.element"),Un=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),Hl=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),Ff=Symbol.for("react.context"),Wl=Symbol.for("react.forward_ref"),Aa=Symbol.for("react.suspense"),Na=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Uf=Symbol.for("react.offscreen"),mc=Symbol.iterator;function Pr(t){return t===null||typeof t!="object"?null:(t=mc&&t[mc]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,Ko;function Lr(t){if(Ko===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ko=e&&e[1]||""}return`
`+Ko+t}var Go=!1;function qo(t,e){if(!t||Go)return"";Go=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Go=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lr(t):""}function Vg(t){switch(t.tag){case 5:return Lr(t.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return t=qo(t.type,!1),t;case 11:return t=qo(t.type.render,!1),t;case 1:return t=qo(t.type,!0),t;default:return""}}function xa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bn:return"Fragment";case Un:return"Portal";case Ra:return"Profiler";case Hl:return"StrictMode";case Aa:return"Suspense";case Na:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ff:return(t.displayName||"Context")+".Consumer";case Mf:return(t._context.displayName||"Context")+".Provider";case Wl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kl:return e=t.displayName||null,e!==null?e:xa(t.type)||"Memo";case xt:e=t._payload,t=t._init;try{return xa(t(e))}catch{}}return null}function Mg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(e);case 8:return e===Hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fg(t){var e=bf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hi(t){t._valueTracker||(t._valueTracker=Fg(t))}function zf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ps(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oa(t,e){var n=e.checked;return q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jf(t,e){e=e.checked,e!=null&&Bl(t,"checked",e,!1)}function Da(t,e){jf(t,e);var n=Zt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?La(t,e.type,n):e.hasOwnProperty("defaultValue")&&La(t,e.type,Zt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function La(t,e,n){(e!=="number"||Ps(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vr=Array.isArray;function Yn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Va(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Vr(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zt(n)}}function $f(t,e){var n=Zt(e.value),r=Zt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _c(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wi,Hf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ug=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(t){Ug.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ur[e]=Ur[t]})});function Wf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ur.hasOwnProperty(t)&&Ur[t]?(""+e).trim():e+"px"}function Kf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bg=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(t,e){if(e){if(bg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ua(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function Gl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var za=null,Jn=null,Xn=null;function wc(t){if(t=Ci(t)){if(typeof za!="function")throw Error(w(280));var e=t.stateNode;e&&(e=vo(e),za(t.stateNode,t.type,e))}}function Gf(t){Jn?Xn?Xn.push(t):Xn=[t]:Jn=t}function qf(){if(Jn){var t=Jn,e=Xn;if(Xn=Jn=null,wc(t),e)for(t=0;t<e.length;t++)wc(e[t])}}function Qf(t,e){return t(e)}function Yf(){}var Qo=!1;function Jf(t,e,n){if(Qo)return t(e,n);Qo=!0;try{return Qf(t,e,n)}finally{Qo=!1,(Jn!==null||Xn!==null)&&(Yf(),qf())}}function Zr(t,e){var n=t.stateNode;if(n===null)return null;var r=vo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var ja=!1;if(Et)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){ja=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{ja=!1}function zg(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var br=!1,Cs=null,Rs=!1,$a=null,jg={onError:function(t){br=!0,Cs=t}};function $g(t,e,n,r,i,s,o,a,l){br=!1,Cs=null,zg.apply(jg,arguments)}function Bg(t,e,n,r,i,s,o,a,l){if($g.apply(this,arguments),br){if(br){var u=Cs;br=!1,Cs=null}else throw Error(w(198));Rs||(Rs=!0,$a=u)}}function On(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ec(t){if(On(t)!==t)throw Error(w(188))}function Hg(t){var e=t.alternate;if(!e){if(e=On(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ec(i),t;if(s===r)return Ec(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Zf(t){return t=Hg(t),t!==null?eh(t):null}function eh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eh(t);if(e!==null)return e;t=t.sibling}return null}var th=Fe.unstable_scheduleCallback,Sc=Fe.unstable_cancelCallback,Wg=Fe.unstable_shouldYield,Kg=Fe.unstable_requestPaint,X=Fe.unstable_now,Gg=Fe.unstable_getCurrentPriorityLevel,ql=Fe.unstable_ImmediatePriority,nh=Fe.unstable_UserBlockingPriority,As=Fe.unstable_NormalPriority,qg=Fe.unstable_LowPriority,rh=Fe.unstable_IdlePriority,ho=null,ot=null;function Qg(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(ho,t,void 0,(t.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Xg,Yg=Math.log,Jg=Math.LN2;function Xg(t){return t>>>=0,t===0?32:31-(Yg(t)/Jg|0)|0}var Ki=64,Gi=4194304;function Mr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ns(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mr(a):(s&=o,s!==0&&(r=Mr(s)))}else o=n&~i,o!==0?r=Mr(o):s!==0&&(r=Mr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xe(e),i=1<<n,r|=t[n],e&=~i;return r}function Zg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xe(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zg(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ih(){var t=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),t}function Yo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ki(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xe(e),t[e]=n}function tv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xe(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ql(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function sh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oh,Yl,ah,lh,uh,Ha=!1,qi=[],$t=null,Bt=null,Ht=null,ei=new Map,ti=new Map,Lt=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(t,e){switch(t){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function Rr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ci(e),e!==null&&Yl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rv(t,e,n,r,i){switch(e){case"focusin":return $t=Rr($t,t,e,n,r,i),!0;case"dragenter":return Bt=Rr(Bt,t,e,n,r,i),!0;case"mouseover":return Ht=Rr(Ht,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ei.set(s,Rr(ei.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ti.set(s,Rr(ti.get(s)||null,t,e,n,r,i)),!0}return!1}function ch(t){var e=dn(t.target);if(e!==null){var n=On(e);if(n!==null){if(e=n.tag,e===13){if(e=Xf(n),e!==null){t.blockedOn=e,uh(t.priority,function(){ah(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ds(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ba=r,n.target.dispatchEvent(r),ba=null}else return e=Ci(n),e!==null&&Yl(e),t.blockedOn=n,!1;e.shift()}return!0}function Tc(t,e,n){ds(t)&&n.delete(e)}function iv(){Ha=!1,$t!==null&&ds($t)&&($t=null),Bt!==null&&ds(Bt)&&(Bt=null),Ht!==null&&ds(Ht)&&(Ht=null),ei.forEach(Tc),ti.forEach(Tc)}function Ar(t,e){t.blockedOn===e&&(t.blockedOn=null,Ha||(Ha=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,iv)))}function ni(t){function e(i){return Ar(i,t)}if(0<qi.length){Ar(qi[0],t);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===t&&(r.blockedOn=null)}}for($t!==null&&Ar($t,t),Bt!==null&&Ar(Bt,t),Ht!==null&&Ar(Ht,t),ei.forEach(e),ti.forEach(e),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)ch(n),n.blockedOn===null&&Lt.shift()}var Zn=Ct.ReactCurrentBatchConfig,xs=!0;function sv(t,e,n,r){var i=z,s=Zn.transition;Zn.transition=null;try{z=1,Jl(t,e,n,r)}finally{z=i,Zn.transition=s}}function ov(t,e,n,r){var i=z,s=Zn.transition;Zn.transition=null;try{z=4,Jl(t,e,n,r)}finally{z=i,Zn.transition=s}}function Jl(t,e,n,r){if(xs){var i=Wa(t,e,n,r);if(i===null)oa(t,e,r,Os,n),Ic(t,r);else if(rv(i,t,e,n,r))r.stopPropagation();else if(Ic(t,r),e&4&&-1<nv.indexOf(t)){for(;i!==null;){var s=Ci(i);if(s!==null&&oh(s),s=Wa(t,e,n,r),s===null&&oa(t,e,r,Os,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oa(t,e,r,null,n)}}var Os=null;function Wa(t,e,n,r){if(Os=null,t=Gl(r),t=dn(t),t!==null)if(e=On(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Os=t,null}function dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gg()){case ql:return 1;case nh:return 4;case As:case qg:return 16;case rh:return 536870912;default:return 16}default:return 16}}var bt=null,Xl=null,fs=null;function fh(){if(fs)return fs;var t,e=Xl,n=e.length,r,i="value"in bt?bt.value:bt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fs=i.slice(t,1<r?1-r:void 0)}function hs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qi(){return!0}function kc(){return!1}function be(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qi:kc,this.isPropagationStopped=kc,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),e}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=be(yr),Pi=q({},yr,{view:0,detail:0}),av=be(Pi),Jo,Xo,Nr,po=q({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nr&&(Nr&&t.type==="mousemove"?(Jo=t.screenX-Nr.screenX,Xo=t.screenY-Nr.screenY):Xo=Jo=0,Nr=t),Jo)},movementY:function(t){return"movementY"in t?t.movementY:Xo}}),Pc=be(po),lv=q({},po,{dataTransfer:0}),uv=be(lv),cv=q({},Pi,{relatedTarget:0}),Zo=be(cv),dv=q({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=be(dv),hv=q({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pv=be(hv),mv=q({},yr,{data:0}),Cc=be(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yv[t])?!!e[t]:!1}function eu(){return _v}var wv=q({},Pi,{key:function(t){if(t.key){var e=gv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ev=be(wv),Sv=q({},po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=be(Sv),Iv=q({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Tv=be(Iv),kv=q({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=be(kv),Cv=q({},po,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=be(Cv),Av=[9,13,27,32],tu=Et&&"CompositionEvent"in window,zr=null;Et&&"documentMode"in document&&(zr=document.documentMode);var Nv=Et&&"TextEvent"in window&&!zr,hh=Et&&(!tu||zr&&8<zr&&11>=zr),Ac=" ",Nc=!1;function ph(t,e){switch(t){case"keyup":return Av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zn=!1;function xv(t,e){switch(t){case"compositionend":return mh(e);case"keypress":return e.which!==32?null:(Nc=!0,Ac);case"textInput":return t=e.data,t===Ac&&Nc?null:t;default:return null}}function Ov(t,e){if(zn)return t==="compositionend"||!tu&&ph(t,e)?(t=fh(),fs=Xl=bt=null,zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hh&&e.locale!=="ko"?null:e.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dv[t.type]:e==="textarea"}function gh(t,e,n,r){Gf(r),e=Ds(e,"onChange"),0<e.length&&(n=new Zl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jr=null,ri=null;function Lv(t){Ch(t,0)}function mo(t){var e=Bn(t);if(zf(e))return t}function Vv(t,e){if(t==="change")return e}var vh=!1;if(Et){var ea;if(Et){var ta="oninput"in document;if(!ta){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),ta=typeof Oc.oninput=="function"}ea=ta}else ea=!1;vh=ea&&(!document.documentMode||9<document.documentMode)}function Dc(){jr&&(jr.detachEvent("onpropertychange",yh),ri=jr=null)}function yh(t){if(t.propertyName==="value"&&mo(ri)){var e=[];gh(e,ri,t,Gl(t)),Jf(Lv,e)}}function Mv(t,e,n){t==="focusin"?(Dc(),jr=e,ri=n,jr.attachEvent("onpropertychange",yh)):t==="focusout"&&Dc()}function Fv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mo(ri)}function Uv(t,e){if(t==="click")return mo(e)}function bv(t,e){if(t==="input"||t==="change")return mo(e)}function zv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tt=typeof Object.is=="function"?Object.is:zv;function ii(t,e){if(tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ca.call(e,i)||!tt(t[i],e[i]))return!1}return!0}function Lc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vc(t,e){var n=Lc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function _h(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_h(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wh(){for(var t=window,e=Ps();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ps(t.document)}return e}function nu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jv(t){var e=wh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_h(n.ownerDocument.documentElement,n)){if(r!==null&&nu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Vc(n,s);var o=Vc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $v=Et&&"documentMode"in document&&11>=document.documentMode,jn=null,Ka=null,$r=null,Ga=!1;function Mc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ga||jn==null||jn!==Ps(r)||(r=jn,"selectionStart"in r&&nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&ii($r,r)||($r=r,r=Ds(Ka,"onSelect"),0<r.length&&(e=new Zl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=jn)))}function Yi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $n={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},na={},Eh={};Et&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function go(t){if(na[t])return na[t];if(!$n[t])return t;var e=$n[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Eh)return na[t]=e[n];return t}var Sh=go("animationend"),Ih=go("animationiteration"),Th=go("animationstart"),kh=go("transitionend"),Ph=new Map,Fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(t,e){Ph.set(t,e),xn(e,[t])}for(var ra=0;ra<Fc.length;ra++){var ia=Fc[ra],Bv=ia.toLowerCase(),Hv=ia[0].toUpperCase()+ia.slice(1);nn(Bv,"on"+Hv)}nn(Sh,"onAnimationEnd");nn(Ih,"onAnimationIteration");nn(Th,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(kh,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Uc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bg(r,e,void 0,t),t.currentTarget=null}function Ch(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Uc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Uc(i,a,u),s=l}}}if(Rs)throw t=$a,Rs=!1,$a=null,t}function B(t,e){var n=e[Xa];n===void 0&&(n=e[Xa]=new Set);var r=t+"__bubble";n.has(r)||(Rh(e,t,2,!1),n.add(r))}function sa(t,e,n){var r=0;e&&(r|=4),Rh(n,t,r,e)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function si(t){if(!t[Ji]){t[Ji]=!0,Vf.forEach(function(n){n!=="selectionchange"&&(Wv.has(n)||sa(n,!1,t),sa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ji]||(e[Ji]=!0,sa("selectionchange",!1,e))}}function Rh(t,e,n,r){switch(dh(e)){case 1:var i=sv;break;case 4:i=ov;break;default:i=Jl}n=i.bind(null,e,n,t),i=void 0,!ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=dn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jf(function(){var u=s,c=Gl(n),d=[];e:{var h=Ph.get(t);if(h!==void 0){var g=Zl,v=t;switch(t){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":g=Ev;break;case"focusin":v="focus",g=Zo;break;case"focusout":v="blur",g=Zo;break;case"beforeblur":case"afterblur":g=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Tv;break;case Sh:case Ih:case Th:g=fv;break;case kh:g=Pv;break;case"scroll":g=av;break;case"wheel":g=Rv;break;case"copy":case"cut":case"paste":g=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Rc}var _=(e&4)!==0,E=!_&&t==="scroll",p=_?h!==null?h+"Capture":null:h;_=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Zr(f,p),y!=null&&_.push(oi(f,y,m)))),E)break;f=f.return}0<_.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ba&&(v=n.relatedTarget||n.fromElement)&&(dn(v)||v[St]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?dn(v):null,v!==null&&(E=On(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Pc,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Rc,y="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?h:Bn(g),m=v==null?h:Bn(v),h=new _(y,f+"leave",g,n,c),h.target=E,h.relatedTarget=m,y=null,dn(c)===u&&(_=new _(p,f+"enter",v,n,c),_.target=m,_.relatedTarget=E,y=_),E=y,g&&v)t:{for(_=g,p=v,f=0,m=_;m;m=Vn(m))f++;for(m=0,y=p;y;y=Vn(y))m++;for(;0<f-m;)_=Vn(_),f--;for(;0<m-f;)p=Vn(p),m--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Vn(_),p=Vn(p)}_=null}else _=null;g!==null&&bc(d,h,g,_,!1),v!==null&&E!==null&&bc(d,E,v,_,!0)}}e:{if(h=u?Bn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=Vv;else if(xc(h))if(vh)S=bv;else{S=Fv;var P=Mv}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Uv);if(S&&(S=S(t,u))){gh(d,S,n,c);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&La(h,"number",h.value)}switch(P=u?Bn(u):window,t){case"focusin":(xc(P)||P.contentEditable==="true")&&(jn=P,Ka=u,$r=null);break;case"focusout":$r=Ka=jn=null;break;case"mousedown":Ga=!0;break;case"contextmenu":case"mouseup":case"dragend":Ga=!1,Mc(d,n,c);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Mc(d,n,c)}var C;if(tu)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else zn?ph(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(hh&&n.locale!=="ko"&&(zn||R!=="onCompositionStart"?R==="onCompositionEnd"&&zn&&(C=fh()):(bt=c,Xl="value"in bt?bt.value:bt.textContent,zn=!0)),P=Ds(u,R),0<P.length&&(R=new Cc(R,t,null,n,c),d.push({event:R,listeners:P}),C?R.data=C:(C=mh(n),C!==null&&(R.data=C)))),(C=Nv?xv(t,n):Ov(t,n))&&(u=Ds(u,"onBeforeInput"),0<u.length&&(c=new Cc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Ch(d,e)})}function oi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ds(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zr(t,n),s!=null&&r.unshift(oi(t,s,i)),s=Zr(t,e),s!=null&&r.push(oi(t,s,i))),t=t.return}return r}function Vn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Zr(n,s),l!=null&&o.unshift(oi(n,l,a))):i||(l=Zr(n,s),l!=null&&o.push(oi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function zc(t){return(typeof t=="string"?t:""+t).replace(Kv,`
`).replace(Gv,"")}function Xi(t,e,n){if(e=zc(e),zc(t)!==e&&n)throw Error(w(425))}function Ls(){}var qa=null,Qa=null;function Ya(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof jc<"u"?function(t){return jc.resolve(null).then(t).catch(Yv)}:Ja;function Yv(t){setTimeout(function(){throw t})}function aa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ni(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ni(e)}function Wt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $c(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _r=Math.random().toString(36).slice(2),st="__reactFiber$"+_r,ai="__reactProps$"+_r,St="__reactContainer$"+_r,Xa="__reactEvents$"+_r,Jv="__reactListeners$"+_r,Xv="__reactHandles$"+_r;function dn(t){var e=t[st];if(e)return e;for(var n=t.parentNode;n;){if(e=n[St]||n[st]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$c(t);t!==null;){if(n=t[st])return n;t=$c(t)}return e}t=n,n=t.parentNode}return null}function Ci(t){return t=t[st]||t[St],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function vo(t){return t[ai]||null}var Za=[],Hn=-1;function rn(t){return{current:t}}function H(t){0>Hn||(t.current=Za[Hn],Za[Hn]=null,Hn--)}function j(t,e){Hn++,Za[Hn]=t.current,t.current=e}var en={},_e=rn(en),Ae=rn(!1),wn=en;function or(t,e){var n=t.type.contextTypes;if(!n)return en;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(t){return t=t.childContextTypes,t!=null}function Vs(){H(Ae),H(_e)}function Bc(t,e,n){if(_e.current!==en)throw Error(w(168));j(_e,e),j(Ae,n)}function Ah(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Mg(t)||"Unknown",i));return q({},n,r)}function Ms(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||en,wn=_e.current,j(_e,t),j(Ae,Ae.current),!0}function Hc(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Ah(t,e,wn),r.__reactInternalMemoizedMergedChildContext=t,H(Ae),H(_e),j(_e,t)):H(Ae),j(Ae,n)}var dt=null,yo=!1,la=!1;function Nh(t){dt===null?dt=[t]:dt.push(t)}function Zv(t){yo=!0,Nh(t)}function sn(){if(!la&&dt!==null){la=!0;var t=0,e=z;try{var n=dt;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dt=null,yo=!1}catch(i){throw dt!==null&&(dt=dt.slice(t+1)),th(ql,sn),i}finally{z=e,la=!1}}return null}var Wn=[],Kn=0,Fs=null,Us=0,ze=[],je=0,En=null,ht=1,pt="";function ln(t,e){Wn[Kn++]=Us,Wn[Kn++]=Fs,Fs=t,Us=e}function xh(t,e,n){ze[je++]=ht,ze[je++]=pt,ze[je++]=En,En=t;var r=ht;t=pt;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var s=32-Xe(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ht=1<<32-Xe(e)+i|n<<i|r,pt=s+t}else ht=1<<s|n<<i|r,pt=t}function ru(t){t.return!==null&&(ln(t,1),xh(t,1,0))}function iu(t){for(;t===Fs;)Fs=Wn[--Kn],Wn[Kn]=null,Us=Wn[--Kn],Wn[Kn]=null;for(;t===En;)En=ze[--je],ze[je]=null,pt=ze[--je],ze[je]=null,ht=ze[--je],ze[je]=null}var Ve=null,Le=null,W=!1,Je=null;function Oh(t,e){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,Le=Wt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,Le=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=En!==null?{id:ht,overflow:pt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,Le=null,!0):!1;default:return!1}}function el(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tl(t){if(W){var e=Le;if(e){var n=e;if(!Wc(t,e)){if(el(t))throw Error(w(418));e=Wt(n.nextSibling);var r=Ve;e&&Wc(t,e)?Oh(r,n):(t.flags=t.flags&-4097|2,W=!1,Ve=t)}}else{if(el(t))throw Error(w(418));t.flags=t.flags&-4097|2,W=!1,Ve=t}}}function Kc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function Zi(t){if(t!==Ve)return!1;if(!W)return Kc(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ya(t.type,t.memoizedProps)),e&&(e=Le)){if(el(t))throw Dh(),Error(w(418));for(;e;)Oh(t,e),e=Wt(e.nextSibling)}if(Kc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Le=Wt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Le=null}}else Le=Ve?Wt(t.stateNode.nextSibling):null;return!0}function Dh(){for(var t=Le;t;)t=Wt(t.nextSibling)}function ar(){Le=Ve=null,W=!1}function su(t){Je===null?Je=[t]:Je.push(t)}var ey=Ct.ReactCurrentBatchConfig;function xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function es(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gc(t){var e=t._init;return e(t._payload)}function Lh(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Qt(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=ma(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,y){var S=m.type;return S===bn?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Gc(S)===f.type)?(y=i(f,m.props),y.ref=xr(p,f,m),y.return=p,y):(y=ws(m.type,m.key,m.props,null,p.mode,y),y.ref=xr(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ga(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,S){return f===null||f.tag!==7?(f=gn(m,p.mode,y,S),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ma(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Bi:return m=ws(f.type,f.key,f.props,null,p.mode,m),m.ref=xr(p,null,f),m.return=p,m;case Un:return f=ga(f,p.mode,m),f.return=p,f;case xt:var y=f._init;return d(p,y(f._payload),m)}if(Vr(f)||Pr(f))return f=gn(f,p.mode,m,null),f.return=p,f;es(p,f)}return null}function h(p,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bi:return m.key===S?l(p,f,m,y):null;case Un:return m.key===S?u(p,f,m,y):null;case xt:return S=m._init,h(p,f,S(m._payload),y)}if(Vr(m)||Pr(m))return S!==null?null:c(p,f,m,y,null);es(p,m)}return null}function g(p,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bi:return p=p.get(y.key===null?m:y.key)||null,l(f,p,y,S);case Un:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,S);case xt:var P=y._init;return g(p,f,m,P(y._payload),S)}if(Vr(y)||Pr(y))return p=p.get(m)||null,c(f,p,y,S,null);es(f,y)}return null}function v(p,f,m,y){for(var S=null,P=null,C=f,R=f=0,$=null;C!==null&&R<m.length;R++){C.index>R?($=C,C=null):$=C.sibling;var V=h(p,C,m[R],y);if(V===null){C===null&&(C=$);break}t&&C&&V.alternate===null&&e(p,C),f=s(V,f,R),P===null?S=V:P.sibling=V,P=V,C=$}if(R===m.length)return n(p,C),W&&ln(p,R),S;if(C===null){for(;R<m.length;R++)C=d(p,m[R],y),C!==null&&(f=s(C,f,R),P===null?S=C:P.sibling=C,P=C);return W&&ln(p,R),S}for(C=r(p,C);R<m.length;R++)$=g(C,p,R,m[R],y),$!==null&&(t&&$.alternate!==null&&C.delete($.key===null?R:$.key),f=s($,f,R),P===null?S=$:P.sibling=$,P=$);return t&&C.forEach(function(Ge){return e(p,Ge)}),W&&ln(p,R),S}function _(p,f,m,y){var S=Pr(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var P=S=null,C=f,R=f=0,$=null,V=m.next();C!==null&&!V.done;R++,V=m.next()){C.index>R?($=C,C=null):$=C.sibling;var Ge=h(p,C,V.value,y);if(Ge===null){C===null&&(C=$);break}t&&C&&Ge.alternate===null&&e(p,C),f=s(Ge,f,R),P===null?S=Ge:P.sibling=Ge,P=Ge,C=$}if(V.done)return n(p,C),W&&ln(p,R),S;if(C===null){for(;!V.done;R++,V=m.next())V=d(p,V.value,y),V!==null&&(f=s(V,f,R),P===null?S=V:P.sibling=V,P=V);return W&&ln(p,R),S}for(C=r(p,C);!V.done;R++,V=m.next())V=g(C,p,R,V.value,y),V!==null&&(t&&V.alternate!==null&&C.delete(V.key===null?R:V.key),f=s(V,f,R),P===null?S=V:P.sibling=V,P=V);return t&&C.forEach(function(Ir){return e(p,Ir)}),W&&ln(p,R),S}function E(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bi:e:{for(var S=m.key,P=f;P!==null;){if(P.key===S){if(S=m.type,S===bn){if(P.tag===7){n(p,P.sibling),f=i(P,m.props.children),f.return=p,p=f;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Gc(S)===P.type){n(p,P.sibling),f=i(P,m.props),f.ref=xr(p,P,m),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}m.type===bn?(f=gn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=ws(m.type,m.key,m.props,null,p.mode,y),y.ref=xr(p,f,m),y.return=p,p=y)}return o(p);case Un:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ga(m,p.mode,y),f.return=p,p=f}return o(p);case xt:return P=m._init,E(p,f,P(m._payload),y)}if(Vr(m))return v(p,f,m,y);if(Pr(m))return _(p,f,m,y);es(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ma(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return E}var lr=Lh(!0),Vh=Lh(!1),bs=rn(null),zs=null,Gn=null,ou=null;function au(){ou=Gn=zs=null}function lu(t){var e=bs.current;H(bs),t._currentValue=e}function nl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function er(t,e){zs=t,ou=Gn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Re=!0),t.firstContext=null)}function We(t){var e=t._currentValue;if(ou!==t)if(t={context:t,memoizedValue:e,next:null},Gn===null){if(zs===null)throw Error(w(308));Gn=t,zs.dependencies={lanes:0,firstContext:t}}else Gn=Gn.next=t;return e}var fn=null;function uu(t){fn===null?fn=[t]:fn.push(t)}function Mh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,uu(e)):(n.next=i.next,i.next=n),e.interleaved=n,It(t,r)}function It(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ot=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,It(t,n)}return i=r.interleaved,i===null?(e.next=e,uu(r)):(e.next=i.next,i.next=e),r.interleaved=e,It(t,n)}function ps(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ql(t,n)}}function qc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function js(t,e,n,r){var i=t.updateQueue;Ot=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(h=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=q({},d,h);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);In|=o,t.lanes=o,t.memoizedState=d}}function Qc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Ri={},at=rn(Ri),li=rn(Ri),ui=rn(Ri);function hn(t){if(t===Ri)throw Error(w(174));return t}function du(t,e){switch(j(ui,e),j(li,t),j(at,Ri),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ma(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ma(e,t)}H(at),j(at,e)}function ur(){H(at),H(li),H(ui)}function Uh(t){hn(ui.current);var e=hn(at.current),n=Ma(e,t.type);e!==n&&(j(li,t),j(at,n))}function fu(t){li.current===t&&(H(at),H(li))}var K=rn(0);function $s(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ua=[];function hu(){for(var t=0;t<ua.length;t++)ua[t]._workInProgressVersionPrimary=null;ua.length=0}var ms=Ct.ReactCurrentDispatcher,ca=Ct.ReactCurrentBatchConfig,Sn=0,G=null,te=null,ae=null,Bs=!1,Br=!1,ci=0,ty=0;function me(){throw Error(w(321))}function pu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tt(t[n],e[n]))return!1;return!0}function mu(t,e,n,r,i,s){if(Sn=s,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ms.current=t===null||t.memoizedState===null?sy:oy,t=n(r,i),Br){s=0;do{if(Br=!1,ci=0,25<=s)throw Error(w(301));s+=1,ae=te=null,e.updateQueue=null,ms.current=ay,t=n(r,i)}while(Br)}if(ms.current=Hs,e=te!==null&&te.next!==null,Sn=0,ae=te=G=null,Bs=!1,e)throw Error(w(300));return t}function gu(){var t=ci!==0;return ci=0,t}function it(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?G.memoizedState=ae=t:ae=ae.next=t,ae}function Ke(){if(te===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=te.next;var e=ae===null?G.memoizedState:ae.next;if(e!==null)ae=e,te=t;else{if(t===null)throw Error(w(310));te=t,t={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?G.memoizedState=ae=t:ae=ae.next=t}return ae}function di(t,e){return typeof e=="function"?e(t):e}function da(t){var e=Ke(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Sn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,G.lanes|=c,In|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,tt(r,e.memoizedState)||(Re=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,G.lanes|=s,In|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fa(t){var e=Ke(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tt(s,e.memoizedState)||(Re=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bh(){}function zh(t,e){var n=G,r=Ke(),i=e(),s=!tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Re=!0),r=r.queue,vu(Bh.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,fi(9,$h.bind(null,n,r,i,e),void 0,null),le===null)throw Error(w(349));Sn&30||jh(n,e,i)}return i}function jh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $h(t,e,n,r){e.value=n,e.getSnapshot=r,Hh(e)&&Wh(t)}function Bh(t,e,n){return n(function(){Hh(e)&&Wh(t)})}function Hh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tt(t,n)}catch{return!0}}function Wh(t){var e=It(t,1);e!==null&&Ze(e,t,1,-1)}function Yc(t){var e=it();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},e.queue=t,t=t.dispatch=iy.bind(null,G,t),[e.memoizedState,t]}function fi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kh(){return Ke().memoizedState}function gs(t,e,n,r){var i=it();G.flags|=t,i.memoizedState=fi(1|e,n,void 0,r===void 0?null:r)}function _o(t,e,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(te!==null){var o=te.memoizedState;if(s=o.destroy,r!==null&&pu(r,o.deps)){i.memoizedState=fi(e,n,s,r);return}}G.flags|=t,i.memoizedState=fi(1|e,n,s,r)}function Jc(t,e){return gs(8390656,8,t,e)}function vu(t,e){return _o(2048,8,t,e)}function Gh(t,e){return _o(4,2,t,e)}function qh(t,e){return _o(4,4,t,e)}function Qh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yh(t,e,n){return n=n!=null?n.concat([t]):null,_o(4,4,Qh.bind(null,e,t),n)}function yu(){}function Jh(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xh(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&pu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zh(t,e,n){return Sn&21?(tt(n,e)||(n=ih(),G.lanes|=n,In|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Re=!0),t.memoizedState=n)}function ny(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=ca.transition;ca.transition={};try{t(!1),e()}finally{z=n,ca.transition=r}}function ep(){return Ke().memoizedState}function ry(t,e,n){var r=qt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tp(t))np(e,n);else if(n=Mh(t,e,n,r),n!==null){var i=Se();Ze(n,t,r,i),rp(n,e,r)}}function iy(t,e,n){var r=qt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tp(t))np(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,o)){var l=e.interleaved;l===null?(i.next=i,uu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Mh(t,e,i,r),n!==null&&(i=Se(),Ze(n,t,r,i),rp(n,e,r))}}function tp(t){var e=t.alternate;return t===G||e!==null&&e===G}function np(t,e){Br=Bs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ql(t,n)}}var Hs={readContext:We,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},sy={readContext:We,useCallback:function(t,e){return it().memoizedState=[t,e===void 0?null:e],t},useContext:We,useEffect:Jc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gs(4194308,4,Qh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gs(4194308,4,t,e)},useInsertionEffect:function(t,e){return gs(4,2,t,e)},useMemo:function(t,e){var n=it();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=it();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ry.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=it();return t={current:t},e.memoizedState=t},useState:Yc,useDebugValue:yu,useDeferredValue:function(t){return it().memoizedState=t},useTransition:function(){var t=Yc(!1),e=t[0];return t=ny.bind(null,t[1]),it().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=it();if(W){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),le===null)throw Error(w(349));Sn&30||jh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Jc(Bh.bind(null,r,s,t),[t]),r.flags|=2048,fi(9,$h.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=it(),e=le.identifierPrefix;if(W){var n=pt,r=ht;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ci++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oy={readContext:We,useCallback:Jh,useContext:We,useEffect:vu,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:qh,useMemo:Xh,useReducer:da,useRef:Kh,useState:function(){return da(di)},useDebugValue:yu,useDeferredValue:function(t){var e=Ke();return Zh(e,te.memoizedState,t)},useTransition:function(){var t=da(di)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:bh,useSyncExternalStore:zh,useId:ep,unstable_isNewReconciler:!1},ay={readContext:We,useCallback:Jh,useContext:We,useEffect:vu,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:qh,useMemo:Xh,useReducer:fa,useRef:Kh,useState:function(){return fa(di)},useDebugValue:yu,useDeferredValue:function(t){var e=Ke();return te===null?e.memoizedState=t:Zh(e,te.memoizedState,t)},useTransition:function(){var t=fa(di)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:bh,useSyncExternalStore:zh,useId:ep,unstable_isNewReconciler:!1};function Qe(t,e){if(t&&t.defaultProps){e=q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wo={isMounted:function(t){return(t=t._reactInternals)?On(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=qt(t),s=_t(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kt(t,s,i),e!==null&&(Ze(e,t,i,r),ps(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=qt(t),s=_t(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kt(t,s,i),e!==null&&(Ze(e,t,i,r),ps(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=qt(t),i=_t(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kt(t,i,r),e!==null&&(Ze(e,t,r,n),ps(e,t,r))}};function Xc(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ii(n,r)||!ii(i,s):!0}function ip(t,e,n){var r=!1,i=en,s=e.contextType;return typeof s=="object"&&s!==null?s=We(s):(i=Ne(e)?wn:_e.current,r=e.contextTypes,s=(r=r!=null)?or(t,i):en),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wo.enqueueReplaceState(e,e.state,null)}function il(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=We(s):(s=Ne(e)?wn:_e.current,i.context=or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wo.enqueueReplaceState(i,i.state,null),js(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function cr(t,e){try{var n="",r=e;do n+=Vg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ha(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function sp(t,e,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ks||(Ks=!0,ml=r),sl(t,e)},n}function op(t,e,n){n=_t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sl(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sl(t,e),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ed(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ly;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Sy.bind(null,t,e,n),e.then(t,t))}function td(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_t(-1,1),e.tag=2,Kt(n,e,1))),n.lanes|=1),t)}var uy=Ct.ReactCurrentOwner,Re=!1;function Ee(t,e,n,r){e.child=t===null?Vh(e,null,n,r):lr(e,t.child,n,r)}function rd(t,e,n,r,i){n=n.render;var s=e.ref;return er(e,i),r=mu(t,e,n,r,s,i),n=gu(),t!==null&&!Re?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tt(t,e,i)):(W&&n&&ru(e),e.flags|=1,Ee(t,e,r,i),e.child)}function id(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ap(t,e,s,r,i)):(t=ws(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(o,r)&&t.ref===e.ref)return Tt(t,e,i)}return e.flags|=1,t=Qt(s,r),t.ref=e.ref,t.return=e,e.child=t}function ap(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ii(s,r)&&t.ref===e.ref)if(Re=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Re=!0);else return e.lanes=t.lanes,Tt(t,e,i)}return ol(t,e,n,r,i)}function lp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Qn,De),De|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,j(Qn,De),De|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,j(Qn,De),De|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,j(Qn,De),De|=r;return Ee(t,e,i,n),e.child}function up(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ol(t,e,n,r,i){var s=Ne(n)?wn:_e.current;return s=or(e,s),er(e,i),n=mu(t,e,n,r,s,i),r=gu(),t!==null&&!Re?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tt(t,e,i)):(W&&r&&ru(e),e.flags|=1,Ee(t,e,n,i),e.child)}function sd(t,e,n,r,i){if(Ne(n)){var s=!0;Ms(e)}else s=!1;if(er(e,i),e.stateNode===null)vs(t,e),ip(e,n,r),il(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ne(n)?wn:_e.current,u=or(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Zc(e,o,r,u),Ot=!1;var h=e.memoizedState;o.state=h,js(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ae.current||Ot?(typeof c=="function"&&(rl(e,n,c,r),l=e.memoizedState),(a=Ot||Xc(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qe(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=Ne(n)?wn:_e.current,l=or(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Zc(e,o,r,l),Ot=!1,h=e.memoizedState,o.state=h,js(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||Ae.current||Ot?(typeof g=="function"&&(rl(e,n,g,r),v=e.memoizedState),(u=Ot||Xc(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return al(t,e,n,r,s,i)}function al(t,e,n,r,i,s){up(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hc(e,n,!1),Tt(t,e,s);r=e.stateNode,uy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=lr(e,t.child,null,s),e.child=lr(e,null,a,s)):Ee(t,e,a,s),e.memoizedState=r.state,i&&Hc(e,n,!0),e.child}function cp(t){var e=t.stateNode;e.pendingContext?Bc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bc(t,e.context,!1),du(t,e.containerInfo)}function od(t,e,n,r,i){return ar(),su(i),e.flags|=256,Ee(t,e,n,r),e.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function ul(t){return{baseLanes:t,cachePool:null,transitions:null}}function dp(t,e,n){var r=e.pendingProps,i=K.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),j(K,i&1),t===null)return tl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Io(o,r,0,null),t=gn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ul(n),e.memoizedState=ll,t):_u(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cy(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Qt(a,s):(s=gn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ul(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ll,r}return s=t.child,t=s.sibling,r=Qt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _u(t,e){return e=Io({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ts(t,e,n,r){return r!==null&&su(r),lr(e,t.child,null,n),t=_u(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ha(Error(w(422))),ts(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Io({mode:"visible",children:r.children},i,0,null),s=gn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&lr(e,t.child,null,o),e.child.memoizedState=ul(o),e.memoizedState=ll,s);if(!(e.mode&1))return ts(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=ha(s,r,void 0),ts(t,e,o,r)}if(a=(o&t.childLanes)!==0,Re||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,It(t,i),Ze(r,t,i,-1))}return ku(),r=ha(Error(w(421))),ts(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Iy.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Le=Wt(i.nextSibling),Ve=e,W=!0,Je=null,t!==null&&(ze[je++]=ht,ze[je++]=pt,ze[je++]=En,ht=t.id,pt=t.overflow,En=e),e=_u(e,r.children),e.flags|=4096,e)}function ad(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nl(t.return,e,n)}function pa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ee(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ad(t,n,e);else if(t.tag===19)ad(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(j(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$s(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$s(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pa(e,!0,n,null,s);break;case"together":pa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),In|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Qt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dy(t,e,n){switch(e.tag){case 3:cp(e),ar();break;case 5:Uh(e);break;case 1:Ne(e.type)&&Ms(e);break;case 4:du(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;j(bs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(j(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?dp(t,e,n):(j(K,K.current&1),t=Tt(t,e,n),t!==null?t.sibling:null);j(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,lp(t,e,n)}return Tt(t,e,n)}var hp,cl,pp,mp;hp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cl=function(){};pp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hn(at.current);var s=null;switch(n){case"input":i=Oa(t,i),r=Oa(t,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=Va(t,i),r=Va(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ls)}Fa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};mp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Or(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fy(t,e,n){var r=e.pendingProps;switch(iu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(e),null;case 1:return Ne(e.type)&&Vs(),ge(e),null;case 3:return r=e.stateNode,ur(),H(Ae),H(_e),hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Je!==null&&(yl(Je),Je=null))),cl(t,e),ge(e),null;case 5:fu(e);var i=hn(ui.current);if(n=e.type,t!==null&&e.stateNode!=null)pp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return ge(e),null}if(t=hn(at.current),Zi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[st]=e,r[ai]=s,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":gc(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":yc(r,s),B("invalid",r)}Fa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xi(r.textContent,a,t),i=["children",""+a]):Jr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Hi(r),vc(r,s,!0);break;case"textarea":Hi(r),_c(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ls)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[st]=e,t[ai]=r,hp(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ua(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fr.length;i++)B(Fr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":gc(t,r),i=Oa(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),B("invalid",t);break;case"textarea":yc(t,r),i=Va(t,r),B("invalid",t);break;default:i=r}Fa(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kf(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hf(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xr(t,l):typeof l=="number"&&Xr(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",t):l!=null&&Bl(t,s,l,o))}switch(n){case"input":Hi(t),vc(t,r,!1);break;case"textarea":Hi(t),_c(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ls)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ge(e),null;case 6:if(t&&e.stateNode!=null)mp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=hn(ui.current),hn(at.current),Zi(e)){if(r=e.stateNode,n=e.memoizedProps,r[st]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:Xi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=e,e.stateNode=r}return ge(e),null;case 13:if(H(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&Le!==null&&e.mode&1&&!(e.flags&128))Dh(),ar(),e.flags|=98560,s=!1;else if(s=Zi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[st]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ge(e),s=!1}else Je!==null&&(yl(Je),Je=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?ie===0&&(ie=3):ku())),e.updateQueue!==null&&(e.flags|=4),ge(e),null);case 4:return ur(),cl(t,e),t===null&&si(e.stateNode.containerInfo),ge(e),null;case 10:return lu(e.type._context),ge(e),null;case 17:return Ne(e.type)&&Vs(),ge(e),null;case 19:if(H(K),s=e.memoizedState,s===null)return ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Or(s,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$s(t),o!==null){for(e.flags|=128,Or(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return j(K,K.current&1|2),e.child}t=t.sibling}s.tail!==null&&X()>dr&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304)}else{if(!r)if(t=$s(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!W)return ge(e),null}else 2*X()-s.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=X(),e.sibling=null,n=K.current,j(K,r?n&1|2:n&1),e):(ge(e),null);case 22:case 23:return Tu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?De&1073741824&&(ge(e),e.subtreeFlags&6&&(e.flags|=8192)):ge(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function hy(t,e){switch(iu(e),e.tag){case 1:return Ne(e.type)&&Vs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),H(Ae),H(_e),hu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fu(e),null;case 13:if(H(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(K),null;case 4:return ur(),null;case 10:return lu(e.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var ns=!1,ye=!1,py=typeof WeakSet=="function"?WeakSet:Set,I=null;function qn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(t,e,r)}else n.current=null}function dl(t,e,n){try{n()}catch(r){Q(t,e,r)}}var ld=!1;function my(t,e){if(qa=xs,t=wh(),nu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qa={focusedElem:t,selectionRange:n},xs=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Qe(e.type,_),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){Q(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return v=ld,ld=!1,v}function Hr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&dl(e,n,s)}i=i.next}while(i!==r)}}function Eo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gp(t){var e=t.alternate;e!==null&&(t.alternate=null,gp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[st],delete e[ai],delete e[Xa],delete e[Jv],delete e[Xv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function ud(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ls));else if(r!==4&&(t=t.child,t!==null))for(hl(t,e,n),t=t.sibling;t!==null;)hl(t,e,n),t=t.sibling}function pl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pl(t,e,n),t=t.sibling;t!==null;)pl(t,e,n),t=t.sibling}var ue=null,Ye=!1;function At(t,e,n){for(n=n.child;n!==null;)yp(t,e,n),n=n.sibling}function yp(t,e,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 5:ye||qn(n,e);case 6:var r=ue,i=Ye;ue=null,At(t,e,n),ue=r,Ye=i,ue!==null&&(Ye?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ye?(t=ue,n=n.stateNode,t.nodeType===8?aa(t.parentNode,n):t.nodeType===1&&aa(t,n),ni(t)):aa(ue,n.stateNode));break;case 4:r=ue,i=Ye,ue=n.stateNode.containerInfo,Ye=!0,At(t,e,n),ue=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dl(n,e,o),i=i.next}while(i!==r)}At(t,e,n);break;case 1:if(!ye&&(qn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,e,a)}At(t,e,n);break;case 21:At(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,At(t,e,n),ye=r):At(t,e,n);break;default:At(t,e,n)}}function cd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new py),e.forEach(function(r){var i=Ty.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ye=!1;break e;case 3:ue=a.stateNode.containerInfo,Ye=!0;break e;case 4:ue=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(ue===null)throw Error(w(160));yp(s,o,i),ue=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_p(e,t),e=e.sibling}function _p(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qe(e,t),rt(t),r&4){try{Hr(3,t,t.return),Eo(3,t)}catch(_){Q(t,t.return,_)}try{Hr(5,t,t.return)}catch(_){Q(t,t.return,_)}}break;case 1:qe(e,t),rt(t),r&512&&n!==null&&qn(n,n.return);break;case 5:if(qe(e,t),rt(t),r&512&&n!==null&&qn(n,n.return),t.flags&32){var i=t.stateNode;try{Xr(i,"")}catch(_){Q(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&jf(i,s),Ua(a,o);var u=Ua(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Kf(i,d):c==="dangerouslySetInnerHTML"?Hf(i,d):c==="children"?Xr(i,d):Bl(i,c,d,u)}switch(a){case"input":Da(i,s);break;case"textarea":$f(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Yn(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Yn(i,!!s.multiple,s.defaultValue,!0):Yn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ai]=s}catch(_){Q(t,t.return,_)}}break;case 6:if(qe(e,t),rt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Q(t,t.return,_)}}break;case 3:if(qe(e,t),rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(e.containerInfo)}catch(_){Q(t,t.return,_)}break;case 4:qe(e,t),rt(t);break;case 13:qe(e,t),rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Su=X())),r&4&&cd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(u=ye)||c,qe(e,t),ye=u):qe(e,t),rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(I=t,c=t.child;c!==null;){for(d=I=c;I!==null;){switch(h=I,g=h.child,h.tag){case 0:case 11:case 14:case 15:Hr(4,h,h.return);break;case 1:qn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Q(r,n,_)}}break;case 5:qn(h,h.return);break;case 22:if(h.memoizedState!==null){fd(d);continue}}g!==null?(g.return=h,I=g):fd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wf("display",o))}catch(_){Q(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Q(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qe(e,t),rt(t),r&4&&cd(t);break;case 21:break;default:qe(e,t),rt(t)}}function rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vp(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var s=ud(t);pl(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ud(t);hl(t,a,o);break;default:throw Error(w(161))}}catch(l){Q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gy(t,e,n){I=t,wp(t)}function wp(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ns;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=ns;var u=ye;if(ns=o,(ye=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?hd(i):l!==null?(l.return=o,I=l):hd(i);for(;s!==null;)I=s,wp(s),s=s.sibling;I=i,ns=a,ye=u}dd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):dd(t)}}function dd(t){for(;I!==null;){var e=I;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||Eo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qc(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qc(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ni(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ye||e.flags&512&&fl(e)}catch(h){Q(e,e.return,h)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function fd(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function hd(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eo(4,e)}catch(l){Q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Q(e,i,l)}}var s=e.return;try{fl(e)}catch(l){Q(e,s,l)}break;case 5:var o=e.return;try{fl(e)}catch(l){Q(e,o,l)}}}catch(l){Q(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var vy=Math.ceil,Ws=Ct.ReactCurrentDispatcher,wu=Ct.ReactCurrentOwner,He=Ct.ReactCurrentBatchConfig,U=0,le=null,Z=null,fe=0,De=0,Qn=rn(0),ie=0,hi=null,In=0,So=0,Eu=0,Wr=null,Pe=null,Su=0,dr=1/0,ct=null,Ks=!1,ml=null,Gt=null,rs=!1,zt=null,Gs=0,Kr=0,gl=null,ys=-1,_s=0;function Se(){return U&6?X():ys!==-1?ys:ys=X()}function qt(t){return t.mode&1?U&2&&fe!==0?fe&-fe:ey.transition!==null?(_s===0&&(_s=ih()),_s):(t=z,t!==0||(t=window.event,t=t===void 0?16:dh(t.type)),t):1}function Ze(t,e,n,r){if(50<Kr)throw Kr=0,gl=null,Error(w(185));ki(t,n,r),(!(U&2)||t!==le)&&(t===le&&(!(U&2)&&(So|=n),ie===4&&Vt(t,fe)),xe(t,r),n===1&&U===0&&!(e.mode&1)&&(dr=X()+500,yo&&sn()))}function xe(t,e){var n=t.callbackNode;ev(t,e);var r=Ns(t,t===le?fe:0);if(r===0)n!==null&&Sc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sc(n),e===1)t.tag===0?Zv(pd.bind(null,t)):Nh(pd.bind(null,t)),Qv(function(){!(U&6)&&sn()}),n=null;else{switch(sh(r)){case 1:n=ql;break;case 4:n=nh;break;case 16:n=As;break;case 536870912:n=rh;break;default:n=As}n=Rp(n,Ep.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ep(t,e){if(ys=-1,_s=0,U&6)throw Error(w(327));var n=t.callbackNode;if(tr()&&t.callbackNode!==n)return null;var r=Ns(t,t===le?fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qs(t,r);else{e=r;var i=U;U|=2;var s=Ip();(le!==t||fe!==e)&&(ct=null,dr=X()+500,mn(t,e));do try{wy();break}catch(a){Sp(t,a)}while(!0);au(),Ws.current=s,U=i,Z!==null?e=0:(le=null,fe=0,e=ie)}if(e!==0){if(e===2&&(i=Ba(t),i!==0&&(r=i,e=vl(t,i))),e===1)throw n=hi,mn(t,0),Vt(t,r),xe(t,X()),n;if(e===6)Vt(t,r);else{if(i=t.current.alternate,!(r&30)&&!yy(i)&&(e=qs(t,r),e===2&&(s=Ba(t),s!==0&&(r=s,e=vl(t,s))),e===1))throw n=hi,mn(t,0),Vt(t,r),xe(t,X()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:un(t,Pe,ct);break;case 3:if(Vt(t,r),(r&130023424)===r&&(e=Su+500-X(),10<e)){if(Ns(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ja(un.bind(null,t,Pe,ct),e);break}un(t,Pe,ct);break;case 4:if(Vt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xe(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vy(r/1960))-r,10<r){t.timeoutHandle=Ja(un.bind(null,t,Pe,ct),r);break}un(t,Pe,ct);break;case 5:un(t,Pe,ct);break;default:throw Error(w(329))}}}return xe(t,X()),t.callbackNode===n?Ep.bind(null,t):null}function vl(t,e){var n=Wr;return t.current.memoizedState.isDehydrated&&(mn(t,e).flags|=256),t=qs(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&yl(e)),t}function yl(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~Eu,e&=~So,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xe(e),r=1<<n;t[n]=-1,e&=~r}}function pd(t){if(U&6)throw Error(w(327));tr();var e=Ns(t,0);if(!(e&1))return xe(t,X()),null;var n=qs(t,e);if(t.tag!==0&&n===2){var r=Ba(t);r!==0&&(e=r,n=vl(t,r))}if(n===1)throw n=hi,mn(t,0),Vt(t,e),xe(t,X()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,un(t,Pe,ct),xe(t,X()),null}function Iu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(dr=X()+500,yo&&sn())}}function Tn(t){zt!==null&&zt.tag===0&&!(U&6)&&tr();var e=U;U|=1;var n=He.transition,r=z;try{if(He.transition=null,z=1,t)return t()}finally{z=r,He.transition=n,U=e,!(U&6)&&sn()}}function Tu(){De=Qn.current,H(Qn)}function mn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qv(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(iu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vs();break;case 3:ur(),H(Ae),H(_e),hu();break;case 5:fu(r);break;case 4:ur();break;case 13:H(K);break;case 19:H(K);break;case 10:lu(r.type._context);break;case 22:case 23:Tu()}n=n.return}if(le=t,Z=t=Qt(t.current,null),fe=De=e,ie=0,hi=null,Eu=So=In=0,Pe=Wr=null,fn!==null){for(e=0;e<fn.length;e++)if(n=fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fn=null}return t}function Sp(t,e){do{var n=Z;try{if(au(),ms.current=Hs,Bs){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bs=!1}if(Sn=0,ae=te=G=null,Br=!1,ci=0,wu.current=null,n===null||n.return===null){ie=1,hi=e,Z=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=td(o);if(g!==null){g.flags&=-257,nd(g,o,a,s,e),g.mode&1&&ed(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){ed(s,u,e),ku();break e}l=Error(w(426))}}else if(W&&a.mode&1){var E=td(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),nd(E,o,a,s,e),su(cr(l,a));break e}}s=l=cr(l,a),ie!==4&&(ie=2),Wr===null?Wr=[s]:Wr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=sp(s,l,e);qc(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Gt===null||!Gt.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=op(s,a,e);qc(s,y);break e}}s=s.return}while(s!==null)}kp(n)}catch(S){e=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Ip(){var t=Ws.current;return Ws.current=Hs,t===null?Hs:t}function ku(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(In&268435455)&&!(So&268435455)||Vt(le,fe)}function qs(t,e){var n=U;U|=2;var r=Ip();(le!==t||fe!==e)&&(ct=null,mn(t,e));do try{_y();break}catch(i){Sp(t,i)}while(!0);if(au(),U=n,Ws.current=r,Z!==null)throw Error(w(261));return le=null,fe=0,ie}function _y(){for(;Z!==null;)Tp(Z)}function wy(){for(;Z!==null&&!Wg();)Tp(Z)}function Tp(t){var e=Cp(t.alternate,t,De);t.memoizedProps=t.pendingProps,e===null?kp(t):Z=e,wu.current=null}function kp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hy(n,e),n!==null){n.flags&=32767,Z=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,Z=null;return}}else if(n=fy(n,e,De),n!==null){Z=n;return}if(e=e.sibling,e!==null){Z=e;return}Z=e=t}while(e!==null);ie===0&&(ie=5)}function un(t,e,n){var r=z,i=He.transition;try{He.transition=null,z=1,Ey(t,e,n,r)}finally{He.transition=i,z=r}return null}function Ey(t,e,n,r){do tr();while(zt!==null);if(U&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tv(t,s),t===le&&(Z=le=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,Rp(As,function(){return tr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=He.transition,He.transition=null;var o=z;z=1;var a=U;U|=4,wu.current=null,my(t,n),_p(n,t),jv(Qa),xs=!!qa,Qa=qa=null,t.current=n,gy(n),Kg(),U=a,z=o,He.transition=s}else t.current=n;if(rs&&(rs=!1,zt=t,Gs=i),s=t.pendingLanes,s===0&&(Gt=null),Qg(n.stateNode),xe(t,X()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ks)throw Ks=!1,t=ml,ml=null,t;return Gs&1&&t.tag!==0&&tr(),s=t.pendingLanes,s&1?t===gl?Kr++:(Kr=0,gl=t):Kr=0,sn(),null}function tr(){if(zt!==null){var t=sh(Gs),e=He.transition,n=z;try{if(He.transition=null,z=16>t?16:t,zt===null)var r=!1;else{if(t=zt,zt=null,Gs=0,U&6)throw Error(w(331));var i=U;for(U|=4,I=t.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Hr(8,c,s)}var d=c.child;if(d!==null)d.return=c,I=d;else for(;I!==null;){c=I;var h=c.sibling,g=c.return;if(gp(c),c===u){I=null;break}if(h!==null){h.return=g,I=h;break}I=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var f=t.current;for(I=f;I!==null;){o=I;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,I=m;else e:for(o=f;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eo(9,a)}}catch(S){Q(a,a.return,S)}if(a===o){I=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,I=y;break e}I=a.return}}if(U=i,sn(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(ho,t)}catch{}r=!0}return r}finally{z=n,He.transition=e}}return!1}function md(t,e,n){e=cr(n,e),e=sp(t,e,1),t=Kt(t,e,1),e=Se(),t!==null&&(ki(t,1,e),xe(t,e))}function Q(t,e,n){if(t.tag===3)md(t,t,n);else for(;e!==null;){if(e.tag===3){md(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){t=cr(n,t),t=op(e,t,1),e=Kt(e,t,1),t=Se(),e!==null&&(ki(e,1,t),xe(e,t));break}}e=e.return}}function Sy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(fe&n)===n&&(ie===4||ie===3&&(fe&130023424)===fe&&500>X()-Su?mn(t,0):Eu|=n),xe(t,e)}function Pp(t,e){e===0&&(t.mode&1?(e=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):e=1);var n=Se();t=It(t,e),t!==null&&(ki(t,e,n),xe(t,n))}function Iy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Pp(t,n)}function Ty(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Pp(t,n)}var Cp;Cp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ae.current)Re=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Re=!1,dy(t,e,n);Re=!!(t.flags&131072)}else Re=!1,W&&e.flags&1048576&&xh(e,Us,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vs(t,e),t=e.pendingProps;var i=or(e,_e.current);er(e,n),i=mu(null,e,r,t,i,n);var s=gu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ne(r)?(s=!0,Ms(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cu(e),i.updater=wo,e.stateNode=i,i._reactInternals=e,il(e,r,t,n),e=al(null,e,r,!0,s,n)):(e.tag=0,W&&s&&ru(e),Ee(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Py(r),t=Qe(r,t),i){case 0:e=ol(null,e,r,t,n);break e;case 1:e=sd(null,e,r,t,n);break e;case 11:e=rd(null,e,r,t,n);break e;case 14:e=id(null,e,r,Qe(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),ol(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),sd(t,e,r,i,n);case 3:e:{if(cp(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fh(t,e),js(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cr(Error(w(423)),e),e=od(t,e,r,n,i);break e}else if(r!==i){i=cr(Error(w(424)),e),e=od(t,e,r,n,i);break e}else for(Le=Wt(e.stateNode.containerInfo.firstChild),Ve=e,W=!0,Je=null,n=Vh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=Tt(t,e,n);break e}Ee(t,e,r,n)}e=e.child}return e;case 5:return Uh(e),t===null&&tl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ya(r,i)?o=null:s!==null&&Ya(r,s)&&(e.flags|=32),up(t,e),Ee(t,e,o,n),e.child;case 6:return t===null&&tl(e),null;case 13:return dp(t,e,n);case 4:return du(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lr(e,null,r,n):Ee(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),rd(t,e,r,i,n);case 7:return Ee(t,e,e.pendingProps,n),e.child;case 8:return Ee(t,e,e.pendingProps.children,n),e.child;case 12:return Ee(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,j(bs,r._currentValue),r._currentValue=o,s!==null)if(tt(s.value,o)){if(s.children===i.children&&!Ae.current){e=Tt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=_t(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ee(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,er(e,n),i=We(i),r=r(i),e.flags|=1,Ee(t,e,r,n),e.child;case 14:return r=e.type,i=Qe(r,e.pendingProps),i=Qe(r.type,i),id(t,e,r,i,n);case 15:return ap(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qe(r,i),vs(t,e),e.tag=1,Ne(r)?(t=!0,Ms(e)):t=!1,er(e,n),ip(e,r,i),il(e,r,i,n),al(null,e,r,!0,t,n);case 19:return fp(t,e,n);case 22:return lp(t,e,n)}throw Error(w(156,e.tag))};function Rp(t,e){return th(t,e)}function ky(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,e,n,r){return new ky(t,e,n,r)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return Pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wl)return 11;if(t===Kl)return 14}return 2}function Qt(t,e){var n=t.alternate;return n===null?(n=Be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ws(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bn:return gn(n.children,i,s,e);case Hl:o=8,i|=8;break;case Ra:return t=Be(12,n,e,i|2),t.elementType=Ra,t.lanes=s,t;case Aa:return t=Be(13,n,e,i),t.elementType=Aa,t.lanes=s,t;case Na:return t=Be(19,n,e,i),t.elementType=Na,t.lanes=s,t;case Uf:return Io(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mf:o=10;break e;case Ff:o=9;break e;case Wl:o=11;break e;case Kl:o=14;break e;case xt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Be(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gn(t,e,n,r){return t=Be(7,t,r,e),t.lanes=n,t}function Io(t,e,n,r){return t=Be(22,t,r,e),t.elementType=Uf,t.lanes=n,t.stateNode={isHidden:!1},t}function ma(t,e,n){return t=Be(6,t,null,e),t.lanes=n,t}function ga(t,e,n){return e=Be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cu(t,e,n,r,i,s,o,a,l){return t=new Cy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Be(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(s),t}function Ry(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ap(t){if(!t)return en;t=t._reactInternals;e:{if(On(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ne(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ne(n))return Ah(t,n,e)}return e}function Np(t,e,n,r,i,s,o,a,l){return t=Cu(n,r,!0,t,i,s,o,a,l),t.context=Ap(null),n=t.current,r=Se(),i=qt(n),s=_t(r,i),s.callback=e??null,Kt(n,s,i),t.current.lanes=i,ki(t,i,r),xe(t,r),t}function To(t,e,n,r){var i=e.current,s=Se(),o=qt(i);return n=Ap(n),e.context===null?e.context=n:e.pendingContext=n,e=_t(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kt(i,e,o),t!==null&&(Ze(t,i,o,s),ps(t,i,o)),o}function Qs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ru(t,e){gd(t,e),(t=t.alternate)&&gd(t,e)}function Ay(){return null}var xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}ko.prototype.render=Au.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));To(t,e,null,null)};ko.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tn(function(){To(null,t,null,null)}),e[St]=null}};function ko(t){this._internalRoot=t}ko.prototype.unstable_scheduleHydration=function(t){if(t){var e=lh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lt.length&&e!==0&&e<Lt[n].priority;n++);Lt.splice(n,0,t),n===0&&ch(t)}};function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Po(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vd(){}function Ny(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Qs(o);s.call(u)}}var o=Np(e,r,t,0,null,!1,!1,"",vd);return t._reactRootContainer=o,t[St]=o.current,si(t.nodeType===8?t.parentNode:t),Tn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Qs(l);a.call(u)}}var l=Cu(t,0,!1,null,null,!1,!1,"",vd);return t._reactRootContainer=l,t[St]=l.current,si(t.nodeType===8?t.parentNode:t),Tn(function(){To(e,l,n,r)}),l}function Co(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Qs(o);a.call(l)}}To(e,o,t,i)}else o=Ny(n,e,t,i,r);return Qs(o)}oh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mr(e.pendingLanes);n!==0&&(Ql(e,n|1),xe(e,X()),!(U&6)&&(dr=X()+500,sn()))}break;case 13:Tn(function(){var r=It(t,1);if(r!==null){var i=Se();Ze(r,t,1,i)}}),Ru(t,1)}};Yl=function(t){if(t.tag===13){var e=It(t,134217728);if(e!==null){var n=Se();Ze(e,t,134217728,n)}Ru(t,134217728)}};ah=function(t){if(t.tag===13){var e=qt(t),n=It(t,e);if(n!==null){var r=Se();Ze(n,t,e,r)}Ru(t,e)}};lh=function(){return z};uh=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};za=function(t,e,n){switch(e){case"input":if(Da(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vo(r);if(!i)throw Error(w(90));zf(r),Da(r,i)}}}break;case"textarea":$f(t,n);break;case"select":e=n.value,e!=null&&Yn(t,!!n.multiple,e,!1)}};Qf=Iu;Yf=Tn;var xy={usingClientEntryPoint:!1,Events:[Ci,Bn,vo,Gf,qf,Iu]},Dr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zf(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||Ay,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{ho=is.inject(Oy),ot=is}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;Ue.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(e))throw Error(w(200));return Ry(t,e,null,n)};Ue.createRoot=function(t,e){if(!Nu(t))throw Error(w(299));var n=!1,r="",i=xp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cu(t,1,!1,null,null,n,!1,r,i),t[St]=e.current,si(t.nodeType===8?t.parentNode:t),new Au(e)};Ue.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Zf(e),t=t===null?null:t.stateNode,t};Ue.flushSync=function(t){return Tn(t)};Ue.hydrate=function(t,e,n){if(!Po(e))throw Error(w(200));return Co(null,t,e,!0,n)};Ue.hydrateRoot=function(t,e,n){if(!Nu(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Np(e,null,t,1,n??null,i,!1,s,o),t[St]=e.current,si(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ko(e)};Ue.render=function(t,e,n){if(!Po(e))throw Error(w(200));return Co(null,t,e,!1,n)};Ue.unmountComponentAtNode=function(t){if(!Po(t))throw Error(w(40));return t._reactRootContainer?(Tn(function(){Co(null,null,t,!1,function(){t._reactRootContainer=null,t[St]=null})}),!0):!1};Ue.unstable_batchedUpdates=Iu;Ue.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Po(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Co(t,e,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function Op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Op)}catch(t){console.error(t)}}Op(),Of.exports=Ue;var Dy=Of.exports,yd=Dy;Pa.createRoot=yd.createRoot,Pa.hydrateRoot=yd.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pi.apply(this,arguments)}var jt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jt||(jt={}));const _d="popstate";function Ly(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Dn(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),_l("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Dp(s))}function r(i,s){xu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return My(e,n,r,t)}function ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vy(){return Math.random().toString(36).substr(2,8)}function wd(t,e){return{usr:t.state,key:t.key,idx:e}}function _l(t,e,n,r){return n===void 0&&(n=null),pi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Dn(e):e,{state:n,key:e&&e.key||r||Vy()})}function Dp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Dn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function My(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(pi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=jt.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:p})}function h(E,p){a=jt.Push;let f=_l(_.location,E,p);n&&n(f,E),u=c()+1;let m=wd(f,u),y=_.createHref(f);try{o.pushState(m,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}s&&l&&l({action:a,location:_.location,delta:1})}function g(E,p){a=jt.Replace;let f=_l(_.location,E,p);n&&n(f,E),u=c();let m=wd(f,u),y=_.createHref(f);o.replaceState(m,"",y),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Dp(E);return f=f.replace(/ $/,"%20"),ee(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_d,d),l=E,()=>{i.removeEventListener(_d,d),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(E){return o.go(E)}};return _}var Ed;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ed||(Ed={}));function Fy(t,e,n){return n===void 0&&(n="/"),Uy(t,e,n,!1)}function Uy(t,e,n,r){let i=typeof e=="string"?Dn(e):e,s=Mp(i.pathname||"/",n);if(s==null)return null;let o=Lp(t);by(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Yy(s);a=qy(o[l],u,r)}return a}function Lp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lp(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ky(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Vp(s.path))i(s,o,l)}),e}function Vp(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Vp(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function by(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Gy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zy=/^:[\w-]+$/,jy=3,$y=2,By=1,Hy=10,Wy=-2,Sd=t=>t==="*";function Ky(t,e){let n=t.split("/"),r=n.length;return n.some(Sd)&&(r+=Wy),e&&(r+=$y),n.filter(i=>!Sd(i)).reduce((i,s)=>i+(zy.test(s)?jy:s===""?By:Hy),r)}function Gy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qy(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,c=s==="/"?e:e.slice(s.length)||"/",d=Id({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),h=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Id({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:vn([s,d.pathname]),pathnameBase:e_(vn([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=vn([s,d.pathnameBase]))}return o}function Id(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Yy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Jy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Dn(t):t;return{pathname:n?n.startsWith("/")?n:Xy(n,e):e,search:t_(r),hash:n_(i)}}function Xy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function va(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fp(t,e){let n=Zy(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Up(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Dn(t):(i=pi({},t),ee(!i.pathname||!i.pathname.includes("?"),va("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),va("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),va("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Jy(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vn=t=>t.join("/").replace(/\/\/+/g,"/"),e_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),t_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,n_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function r_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bp=["post","put","patch","delete"];new Set(bp);const i_=["get",...bp];new Set(i_);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mi.apply(this,arguments)}const Ou=k.createContext(null),s_=k.createContext(null),Ai=k.createContext(null),Ro=k.createContext(null),Ln=k.createContext({outlet:null,matches:[],isDataRoute:!1}),zp=k.createContext(null);function Ni(){return k.useContext(Ro)!=null}function Du(){return Ni()||ee(!1),k.useContext(Ro).location}function jp(t){k.useContext(Ai).static||k.useLayoutEffect(t)}function o_(){let{isDataRoute:t}=k.useContext(Ln);return t?__():a_()}function a_(){Ni()||ee(!1);let t=k.useContext(Ou),{basename:e,future:n,navigator:r}=k.useContext(Ai),{matches:i}=k.useContext(Ln),{pathname:s}=Du(),o=JSON.stringify(Fp(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return jp(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Up(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function l_(t,e){return u_(t,e)}function u_(t,e,n,r){Ni()||ee(!1);let{navigator:i}=k.useContext(Ai),{matches:s}=k.useContext(Ln),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Du(),c;if(e){var d;let E=typeof e=="string"?Dn(e):e;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||ee(!1),c=E}else c=u;let h=c.pathname||"/",g=h;if(l!=="/"){let E=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=Fy(t,{pathname:g}),_=p_(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:vn([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:vn([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&_?k.createElement(Ro.Provider,{value:{location:mi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:jt.Pop}},_):_}function c_(){let t=y_(),e=r_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const d_=k.createElement(c_,null);class f_ extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Ln.Provider,{value:this.props.routeContext},k.createElement(zp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function h_(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Ou);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Ln.Provider,{value:e},r)}function p_(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||ee(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:g}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let g,v=!1,_=null,E=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||d_,l&&(u<0&&h===0?(v=!0,E=null):u===h&&(v=!0,E=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=_:v?m=E:d.route.Component?m=k.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=c,k.createElement(h_,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?k.createElement(f_,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var $p=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($p||{}),Ys=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ys||{});function m_(t){let e=k.useContext(Ou);return e||ee(!1),e}function g_(t){let e=k.useContext(s_);return e||ee(!1),e}function v_(t){let e=k.useContext(Ln);return e||ee(!1),e}function Bp(t){let e=v_(),n=e.matches[e.matches.length-1];return n.route.id||ee(!1),n.route.id}function y_(){var t;let e=k.useContext(zp),n=g_(Ys.UseRouteError),r=Bp(Ys.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function __(){let{router:t}=m_($p.UseNavigateStable),e=Bp(Ys.UseNavigateStable),n=k.useRef(!1);return jp(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,mi({fromRouteId:e},s)))},[t,e])}function Es(t){let{to:e,replace:n,state:r,relative:i}=t;Ni()||ee(!1);let{future:s,static:o}=k.useContext(Ai),{matches:a}=k.useContext(Ln),{pathname:l}=Du(),u=o_(),c=Up(e,Fp(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return k.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Mn(t){ee(!1)}function w_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jt.Pop,navigator:s,static:o=!1,future:a}=t;Ni()&&ee(!1);let l=e.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:mi({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Dn(r));let{pathname:c="/",search:d="",hash:h="",state:g=null,key:v="default"}=r,_=k.useMemo(()=>{let E=Mp(c,l);return E==null?null:{location:{pathname:E,search:d,hash:h,state:g,key:v},navigationType:i}},[l,c,d,h,g,v,i]);return _==null?null:k.createElement(Ai.Provider,{value:u},k.createElement(Ro.Provider,{children:n,value:_}))}function E_(t){let{children:e,location:n}=t;return l_(wl(e),n)}new Promise(()=>{});function wl(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,wl(r.props.children,s));return}r.type!==Mn&&ee(!1),!r.props.index||!r.props.children||ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wl(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const S_="6";try{window.__reactRouterVersion=S_}catch{}const I_="startTransition",Td=Sg[I_];function T_(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=Ly({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&Td?Td(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>o.listen(c),[o,c]),k.createElement(w_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var kd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kd||(kd={}));var Pd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pd||(Pd={}));var Cd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},k_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):k_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new P_;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class P_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(t){const e=Hp(t);return Wp.encodeByteArray(e,!0)},Js=function(t){return C_(t).replace(/\./g,"")},Kp=function(t){try{return Wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=()=>R_().__FIREBASE_DEFAULTS__,N_=()=>{if(typeof process>"u"||typeof Cd>"u")return;const t=Cd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},x_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kp(t[1]);return e&&JSON.parse(e)},Lu=()=>{try{return A_()||N_()||x_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gp=t=>{var e,n;return(n=(e=Lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},O_=t=>{const e=Gp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qp=()=>{var t;return(t=Lu())===null||t===void 0?void 0:t.config},Qp=t=>{var e;return(e=Lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Js(JSON.stringify(n)),Js(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function M_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U_(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b_(){try{return typeof indexedDB=="object"}catch{return!1}}function z_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=j_,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,a,r)}}function $_(t,e){return t.replace(B_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const B_=/\{\$([^}]+)}/g;function H_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rd(s)&&Rd(o)){if(!Xs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function W_(t,e){const n=new K_(t,e);return n.subscribe.bind(n)}class K_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");G_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new D_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y_(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Q_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q_(t){return t===cn?void 0:t}function Y_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new q_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const X_={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Z_=b.INFO,e0={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},t0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=e0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=Z_,this._logHandler=t0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?X_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const n0=(t,e)=>e.some(n=>t instanceof n);let Ad,Nd;function r0(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i0(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,El=new WeakMap,Jp=new WeakMap,_a=new WeakMap,Mu=new WeakMap;function s0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yp.set(n,t)}).catch(()=>{}),Mu.set(e,t),e}function o0(t){if(El.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});El.set(t,e)}let Sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return El.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a0(t){Sl=t(Sl)}function l0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wa(this),e,...n);return Jp.set(r,e.sort?e.sort():[e]),Yt(r)}:i0().includes(t)?function(...e){return t.apply(wa(this),e),Yt(Yp.get(this))}:function(...e){return Yt(t.apply(wa(this),e))}}function u0(t){return typeof t=="function"?l0(t):(t instanceof IDBTransaction&&o0(t),n0(t,r0())?new Proxy(t,Sl):t)}function Yt(t){if(t instanceof IDBRequest)return s0(t);if(_a.has(t))return _a.get(t);const e=u0(t);return e!==t&&(_a.set(t,e),Mu.set(e,t)),e}const wa=t=>Mu.get(t);function c0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yt(o.result),l.oldVersion,l.newVersion,Yt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const d0=["get","getKey","getAll","getAllKeys","count"],f0=["put","add","delete","clear"],Ea=new Map;function xd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ea.get(e))return Ea.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=f0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ea.set(e,s),s}a0(t=>({...t,get:(e,n,r)=>xd(e,n)||t.get(e,n,r),has:(e,n)=>!!xd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Il="@firebase/app",Od="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Vu("@firebase/app"),m0="@firebase/app-compat",g0="@firebase/analytics-compat",v0="@firebase/analytics",y0="@firebase/app-check-compat",_0="@firebase/app-check",w0="@firebase/auth",E0="@firebase/auth-compat",S0="@firebase/database",I0="@firebase/database-compat",T0="@firebase/functions",k0="@firebase/functions-compat",P0="@firebase/installations",C0="@firebase/installations-compat",R0="@firebase/messaging",A0="@firebase/messaging-compat",N0="@firebase/performance",x0="@firebase/performance-compat",O0="@firebase/remote-config",D0="@firebase/remote-config-compat",L0="@firebase/storage",V0="@firebase/storage-compat",M0="@firebase/firestore",F0="@firebase/vertexai-preview",U0="@firebase/firestore-compat",b0="firebase",z0="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="[DEFAULT]",j0={[Il]:"fire-core",[m0]:"fire-core-compat",[v0]:"fire-analytics",[g0]:"fire-analytics-compat",[_0]:"fire-app-check",[y0]:"fire-app-check-compat",[w0]:"fire-auth",[E0]:"fire-auth-compat",[S0]:"fire-rtdb",[I0]:"fire-rtdb-compat",[T0]:"fire-fn",[k0]:"fire-fn-compat",[P0]:"fire-iid",[C0]:"fire-iid-compat",[R0]:"fire-fcm",[A0]:"fire-fcm-compat",[N0]:"fire-perf",[x0]:"fire-perf-compat",[O0]:"fire-rc",[D0]:"fire-rc-compat",[L0]:"fire-gcs",[V0]:"fire-gcs-compat",[M0]:"fire-fst",[U0]:"fire-fst-compat",[F0]:"fire-vertex","fire-js":"fire-js",[b0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map,$0=new Map,kl=new Map;function Dd(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fr(t){const e=t.name;if(kl.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;kl.set(e,t);for(const n of Zs.values())Dd(n,t);for(const n of $0.values())Dd(n,t);return!0}function Fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new xi("app","Firebase",B0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=z0;function Xp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jt.create("bad-app-name",{appName:String(i)});if(n||(n=qp()),!n)throw Jt.create("no-options");const s=Zs.get(i);if(s){if(Xs(n,s.options)&&Xs(r,s.config))return s;throw Jt.create("duplicate-app",{appName:i})}const o=new J_(i);for(const l of kl.values())o.addComponent(l);const a=new H0(n,r,o);return Zs.set(i,a),a}function Zp(t=Tl){const e=Zs.get(t);if(!e&&t===Tl&&qp())return Xp();if(!e)throw Jt.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let i=(r=j0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}fr(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="firebase-heartbeat-database",K0=1,gi="firebase-heartbeat-store";let Sa=null;function em(){return Sa||(Sa=c0(W0,K0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jt.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function G0(t){try{const n=(await em()).transaction(gi),r=await n.objectStore(gi).get(tm(t));return await n.done,r}catch(e){if(e instanceof Rt)Pn.warn(e.message);else{const n=Jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function Ld(t,e){try{const r=(await em()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,tm(t)),await r.done}catch(n){if(n instanceof Rt)Pn.warn(n.message);else{const r=Jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function tm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=1024,Q0=30*24*60*60*1e3;class Y0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new X0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Q0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vd(),{heartbeatsToSend:r,unsentEntries:i}=J0(this._heartbeatsCache.heartbeats),s=Js(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vd(){return new Date().toISOString().substring(0,10)}function J0(t,e=q0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Md(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class X0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?z_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await G0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Md(t){return Js(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t){fr(new kn("platform-logger",e=>new h0(e),"PRIVATE")),fr(new kn("heartbeat",e=>new Y0(e),"PRIVATE")),Xt(Il,Od,t),Xt(Il,Od,"esm2017"),Xt("fire-js","")}Z0("");var ew="firebase",tw="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(ew,tw,"app");function Uu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nw=nm,rm=new xi("auth","Firebase",nm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Vu("@firebase/auth");function rw(t,...e){eo.logLevel<=b.WARN&&eo.warn(`Auth (${wr}): ${t}`,...e)}function Ss(t,...e){eo.logLevel<=b.ERROR&&eo.error(`Auth (${wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw zu(t,...e)}function et(t,...e){return zu(t,...e)}function bu(t,e,n){const r=Object.assign(Object.assign({},nw()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return bu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(t,"argument-error"),bu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rm.create(t,...e)}function x(t,e,...n){if(!t)throw zu(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ss(e),new Error(e)}function kt(t,e){t||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sw(){return Fd()==="http:"||Fd()==="https:"}function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sw()||M_()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,kt(n>e,"Short delay should be less than long delay!"),this.isMobile=V_()||F_()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e){kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Di(3e4,6e4);function $u(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,i={}){return sm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),im.fetch()(om(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lw),e);try{const i=new dw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ss(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ss(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bu(t,c,u);ut(t,c)}}catch(i){if(i instanceof Rt)throw i;ut(t,"network-request-failed",{message:String(i)})}}async function cw(t,e,n,r,i={}){const s=await Er(t,e,n,r,i);return"mfaPendingCredential"in s&&ut(t,"multi-factor-auth-required",{_serverResponse:s}),s}function om(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ju(t.config,i):`${t.config.apiScheme}://${i}`}class dw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),uw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=et(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function am(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hw(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=Bu(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gr(Ia(i.auth_time)),issuedAtTime:Gr(Ia(i.iat)),expirationTime:Gr(Ia(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function Bu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=Kp(n);return i?JSON.parse(i):(Ss("Failed to decode base64 JWT payload"),null)}catch(i){return Ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ud(t){const e=Bu(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&pw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vi(t,am(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lm(s.providerUserInfo):[],a=vw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function gw(t){const e=pe(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lm(t){return t.map(e=>{var{providerId:n}=e,r=Uu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e){const n=await sm(t,{},async()=>{const r=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=om(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",im.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _w(t,e){return Er(t,"POST","/v2/accounts:revokeToken",$u(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nr;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hw(this,e)}reload(){return gw(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await vi(this,fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:S,providerData:P,stsTokenManager:C}=n;x(m&&C,e,"internal-error");const R=nr.fromJSON(this.name,C);x(typeof m=="string",e,"internal-error"),Nt(d,e.name),Nt(h,e.name),x(typeof y=="boolean",e,"internal-error"),x(typeof S=="boolean",e,"internal-error"),Nt(g,e.name),Nt(v,e.name),Nt(_,e.name),Nt(E,e.name),Nt(p,e.name),Nt(f,e.name);const $=new vt({uid:m,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:R,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&($.providerData=P.map(V=>Object.assign({},V))),E&&($._redirectEventId=E),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new nr;i.updateFromServerResponse(n);const s=new vt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await to(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new nr;a.updateFromIdToken(r);const l=new vt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=new Map;function yt(t){kt(t instanceof Function,"Expected a class definition");let e=bd.get(t);return e?(kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}um.type="NONE";const zd=um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t,e,n){return`firebase:${t}:${e}:${n}`}class rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,s),this.fullPersistenceKey=Is("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rr(yt(zd),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yt(zd);const o=Is(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=vt._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new rr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new rr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pm(e))return"Blackberry";if(mm(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||dm(e))&&!e.includes("edge/"))return"Chrome";if(hm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cm(t=we()){return/firefox\//i.test(t)}function Hu(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dm(t=we()){return/crios\//i.test(t)}function fm(t=we()){return/iemobile/i.test(t)}function hm(t=we()){return/android/i.test(t)}function pm(t=we()){return/blackberry/i.test(t)}function mm(t=we()){return/webos/i.test(t)}function Ao(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ww(t=we()){var e;return Ao(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ew(){return U_()&&document.documentMode===10}function gm(t=we()){return Ao(t)||hm(t)||mm(t)||pm(t)||/windows phone/i.test(t)||fm(t)}function Sw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e=[]){let n;switch(t){case"Browser":n=jd(we());break;case"Worker":n=`${jd(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(t,e={}){return Er(t,"GET","/v2/passwordPolicy",$u(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=6;class Pw{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.beforeStateQueue=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await am(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(yn(this));const n=e?pe(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tw(this),n=new Pw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _w(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await rr.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function No(t){return pe(t)}class $d{constructor(e){this.auth=e,this.observer=null,this.addObserver=W_(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rw(t){Wu=t}function Aw(t){return Wu.loadJS(t)}function Nw(){return Wu.gapiScript}function xw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t,e){const n=Fu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xs(s,e??{}))return i;ut(i,"already-initialized")}return n.initialize({options:e})}function Dw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lw(t,e,n){const r=No(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ym(e),{host:o,port:a}=Vw(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Mw()}function ym(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Vw(t){const e=ym(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bd(o)}}}function Bd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t,e){return cw(t,"POST","/v1/accounts:signInWithIdp",$u(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="http://localhost";class Cn extends _m{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uu(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ir(e,n)}buildRequest(){const e={requestUri:Fw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Ku{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Li{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Li{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Li{constructor(){super("twitter.com")}static credential(e,n){return Cn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vt._fromIdTokenResponse(e,r,i),o=Hd(r);return new hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hd(r);return new hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new no(e,n,r,i)}}function wm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,s,e,r):s})}async function Uw(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(yn(r));const i="reauthenticate";try{const s=await vi(t,wm(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Bu(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e,n=!1){if(mt(t.app))return Promise.reject(yn(t));const r="signIn",i=await wm(t,r,e),s=await hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function jw(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function $w(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function Bw(t,e,n,r){return pe(t).onAuthStateChanged(e,n,r)}function Hw(t){return pe(t).signOut()}const ro="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ro,"1"),this.storage.removeItem(ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){const t=we();return Hu(t)||Ao(t)}const Kw=1e3,Gw=10;class Sm extends Em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ww()&&Sw(),this.fallbackToPolling=gm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ew()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sm.type="LOCAL";const qw=Sm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends Em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Im.type="SESSION";const Tm=Im;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Qw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function Jw(t){lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function Xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eE(){return km()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firebaseLocalStorageDb",tE=1,io="firebaseLocalStorage",Cm="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oo(t,e){return t.transaction([io],e?"readwrite":"readonly").objectStore(io)}function nE(){const t=indexedDB.deleteDatabase(Pm);return new Vi(t).toPromise()}function Rl(){const t=indexedDB.open(Pm,tE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(io,{keyPath:Cm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(io)?e(r):(r.close(),await nE(),e(await Rl()))})})}async function Wd(t,e,n){const r=Oo(t,!0).put({[Cm]:e,value:n});return new Vi(r).toPromise()}async function rE(t,e){const n=Oo(t,!1).get(e),r=await new Vi(n).toPromise();return r===void 0?null:r.value}function Kd(t,e){const n=Oo(t,!0).delete(e);return new Vi(n).toPromise()}const iE=800,sE=3;class Rm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(eE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xw(),!this.activeServiceWorker)return;this.sender=new Yw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rl();return await Wd(e,ro,"1"),await Kd(e,ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oo(i,!1).getAll();return new Vi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rm.type="LOCAL";const oE=Rm;new Di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e){return e?yt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends _m{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aE(t){return zw(t.auth,new qu(t),t.bypassAuthState)}function lE(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),bw(n,new qu(t),t.bypassAuthState)}async function uE(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Uw(n,new qu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aE;case"linkViaPopup":case"linkViaRedirect":return uE;case"reauthViaPopup":case"reauthViaRedirect":return lE;default:ut(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new Di(2e3,1e4);async function dE(t,e,n){if(mt(t.app))return Promise.reject(et(t,"operation-not-supported-in-this-environment"));const r=No(t);iw(t,e,Ku);const i=Am(r,n);return new pn(r,"signInViaPopup",e,i).executeNotNull()}class pn extends Nm{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cE.get())};e()}}pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="pendingRedirect",Ts=new Map;class hE extends Nm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ts.get(this.auth._key());if(!e){try{const r=await pE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ts.set(this.auth._key(),e)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pE(t,e){const n=vE(e),r=gE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mE(t,e){Ts.set(t._key(),e)}function gE(t){return yt(t._redirectPersistence)}function vE(t){return Is(fE,t.config.apiKey,t.name)}async function yE(t,e,n=!1){if(mt(t.app))return Promise.reject(yn(t));const r=No(t),i=Am(r,e),o=await new hE(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=10*60*1e3;class wE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_E&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TE=/^https?/;async function kE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SE(t);for(const n of e)try{if(PE(n))return}catch{}ut(t,"unauthorized-domain")}function PE(t){const e=Pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TE.test(n))return!1;if(IE.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new Di(3e4,6e4);function qd(){const t=lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RE(t){return new Promise((e,n)=>{var r,i,s;function o(){qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qd(),n(et(t,"network-request-failed"))},timeout:CE.get()})}if(!((i=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const a=xw("iframefcb");return lt()[a]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},Aw(`${Nw()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ks=null,e})}let ks=null;function AE(t){return ks=ks||RE(t),ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new Di(5e3,15e3),xE="__/auth/iframe",OE="emulator/auth/iframe",DE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VE(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ju(e,OE):`https://${t.config.authDomain}/${xE}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=LE.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oi(r).slice(1)}`}async function ME(t){const e=await AE(t),n=lt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:VE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=lt().setTimeout(()=>{s(o)},NE.get());function l(){lt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UE=500,bE=600,zE="_blank",jE="http://localhost";class Qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $E(t,e,n,r=UE,i=bE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FE),{width:r.toString(),height:i.toString(),top:s,left:o}),u=we().toLowerCase();n&&(a=dm(u)?zE:n),cm(u)&&(e=e||jE,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(ww(u)&&a!=="_self")return BE(e||"",a),new Qd(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new Qd(d)}function BE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="__/auth/handler",WE="emulator/auth/handler",KE=encodeURIComponent("fac");async function Yd(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof Ku){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",H_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof Li){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${KE}=${encodeURIComponent(l)}`:"";return`${GE(t)}?${Oi(a).slice(1)}${u}`}function GE({config:t}){return t.emulator?ju(t,WE):`https://${t.authDomain}/${HE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="webStorageSupport";class qE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tm,this._completeRedirectFn=yE,this._overrideRedirectResult=mE}async _openPopup(e,n,r,i){var s;kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Yd(e,n,r,Pl(),i);return $E(e,o,Gu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yd(e,n,r,Pl(),i);return Jw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ME(e),r=new wE(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ta,{type:Ta},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ta];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gm()||Hu()||Ao()}}const QE=qE;var Jd="@firebase/auth",Xd="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XE(t){fr(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vm(t)},u=new Cw(r,i,s,l);return Dw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fr(new kn("auth-internal",e=>{const n=No(e.getProvider("auth").getImmediate());return(r=>new YE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Jd,Xd,JE(t)),Xt(Jd,Xd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=5*60,eS=Qp("authIdTokenMaxAge")||ZE;let Zd=null;const tS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eS)return;const i=n==null?void 0:n.token;Zd!==i&&(Zd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qu(t=Zp()){const e=Fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ow(t,{popupRedirectResolver:QE,persistence:[oE,qw,Tm]}),r=Qp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=tS(s.toString());$w(n,o,()=>o(n.currentUser)),jw(n,a=>o(a))}}const i=Gp("auth");return i&&Lw(n,`http://${i}`),n}function nS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Rw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XE("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Vu("@firebase/firestore");function so(t,...e){if(pr.logLevel<=b.DEBUG){const n=e.map(Ju);pr.debug(`Firestore (${Sr}): ${t}`,...n)}}function Yu(t,...e){if(pr.logLevel<=b.ERROR){const n=e.map(Ju);pr.error(`Firestore (${Sr}): ${t}`,...n)}}function Om(t,...e){if(pr.logLevel<=b.WARN){const n=e.map(Ju);pr.warn(`Firestore (${Sr}): ${t}`,...n)}}function Ju(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Sr}) INTERNAL ASSERTION FAILED: `+t;throw Yu(e),new Error(e)}function tn(t,e){t||Y()}function Do(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="ok",rS="cancelled",qr="unknown",O="invalid-argument",iS="deadline-exceeded",sS="not-found",oS="permission-denied",Al="unauthenticated",aS="resource-exhausted",mr="failed-precondition",lS="aborted",uS="out-of-range",Dm="unimplemented",cS="internal",dS="unavailable";class A extends Rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class hS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pS{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(tn(typeof e.accessToken=="string"),new Lm(e.accessToken,new ke(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class mS{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class gS{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new mS(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yS{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(tn(typeof e.token=="string"),new vS(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class yi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}class _i{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends _i{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(O,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const wS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends _i{construct(e,n,r){return new Ce(e,n,r)}static isValidIdentifier(e){return wS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ce(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(O,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(O,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(O,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(O,"Unterminated ` in path: "+e);return new Ce(n)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(re.fromString(e))}static fromName(e){return new de(re.fromString(e).popFirst(5))}static empty(){return new de(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e,n){if(!n)throw new A(O,`Function ${t}() cannot be called with an empty ${e}.`)}function tf(t){if(!de.isDocumentKey(t))throw new A(O,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nf(t){if(de.isDocumentKey(t))throw new A(O,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Mi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(O,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lo(t);throw new A(O,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os=null;function ES(){return os===null?os=function(){return 268435456+Math.round(2147483648*Math.random())}():os++,"0x"+os.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){return t==null}function oo(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rf,F;function sf(t){if(t===void 0)return Yu("RPC_ERROR","HTTP error has no status"),qr;switch(t){case 200:return ef;case 400:return mr;case 401:return Al;case 403:return oS;case 404:return sS;case 409:return lS;case 416:return uS;case 429:return aS;case 499:return rS;case 500:return qr;case 501:return Dm;case 503:return dS;case 504:return iS;default:return t>=200&&t<300?ef:t>=400&&t<500?mr:t>=500&&t<600?cS:qr}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(F=rf||(rf={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";class TS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(n,r,i,s,o){const a=ES(),l=this.I(n,r.toUriEncodedString());so("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(so("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Om("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.P(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=IS[n];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new A(sf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new A(sf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Fm(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new CS("Invalid base64 string: "+s):s}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const RS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(tn(!!t),typeof t=="string"){let e=0;const n=RS.exec(t);if(tn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(t.seconds),nanos:ne(t.nanos)}}function ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wi(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(O,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(O,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(O,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(O,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bm(t){const e=t.mapValue.fields.__previous_value__;return Um(e)?bm(e):e}function Ei(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as={fields:{__type__:{stringValue:"__max__"}}};function An(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:Y()}function ao(t,e){if(t===e)return!0;const n=An(t);if(n!==An(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ei(t).isEqual(Ei(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Rn(i.timestampValue),a=Rn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wi(i.bytesValue).isEqual(wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ne(i.geoPointValue.latitude)===ne(s.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ne(i.integerValue)===ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ne(i.doubleValue),a=ne(s.doubleValue);return o===a?oo(o)===oo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Fm(t.arrayValue.values||[],e.arrayValue.values||[],ao);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(of(o)!==of(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ao(o[l],a[l])))return!1;return!0}(t,e);default:return Y()}}function Si(t,e){return(t.values||[]).find(n=>ao(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=An(t),r=An(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ne(s.integerValue||s.doubleValue),l=ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(Ei(t),Ei(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=wi(s),l=wi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=oe(a[u],l[u]);if(c!==0)return c}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=oe(ne(s.latitude),ne(o.latitude));return a!==0?a:oe(ne(s.longitude),ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=lo(a[u],l[u]);if(c)return c}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===as&&o===as)return 0;if(s===as)return 1;if(o===as)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=oe(l[d],c[d]);if(h!==0)return h;const g=lo(a[l[d]],u[c[d]]);if(g!==0)return g}return oe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Y()}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Rn(t),r=Rn(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function lf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zm(t){return!!t&&"arrayValue"in t}function uf(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ka(t){return!!t&&"mapValue"in t}function Qr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class df{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{}class nt extends jm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AS(e,n,r):n==="array-contains"?new OS(e,r):n==="in"?new DS(e,r):n==="not-in"?new LS(e,r):n==="array-contains-any"?new VS(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NS(e,r):new xS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(lo(n,this.value)):n!==null&&An(this.value)===An(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vo extends jm{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Vo(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class AS extends nt{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class NS extends nt{constructor(e,n){super(e,"in",n),this.keys=$m("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xS extends nt{constructor(e,n){super(e,"not-in",n),this.keys=$m("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $m(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class OS extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zm(n)&&Si(n.arrayValue,this.value)}}class DS extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class LS extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Si(this.value.arrayValue,n)}}class VS extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Si(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Me(0,0))}static max(){return new ve(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.comparator=e,this.root=n||ce.EMPTY}insert(e,n){return new uo(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new uo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ls(this.root,e,this.comparator,!0)}}class ls{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=s??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ce(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.comparator=e,this.data=new uo(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ii)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ii(this.comparator);return n.data=e,n}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Nn([])}unionWith(e){let n=new Ii(Ce.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fm(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(n)}setAll(e){let n=Ce.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Qr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ao(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $e(Qr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,ve.min(),ve.min(),ve.min(),$e.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,ve.min(),ve.min(),$e.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ve.min(),ve.min(),$e.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function hf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MS(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function FS(t){return t.collectionGroup!==null}function US(t){const e=Do(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ii(Ce.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new Nl(s,r))}),n.has(Ce.keyField().canonicalString())||e.S.push(new Nl(Ce.keyField(),r))}return e.S}function bS(t){const e=Do(t);return e.N||(e.N=zS(e,US(t))),e.N}function zS(t,e){if(t.limitType==="F")return hf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new df(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new df(t.startAt.position,t.startAt.inclusive):null;return hf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jS(t,e){const n=t.filters.concat([e]);return new Bm(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!oo(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this._=void 0}}class BS extends Mo{}class HS extends Mo{constructor(e){super(),this.elements=e}}class WS extends Mo{constructor(e){super(),this.elements=e}}class KS extends Mo{constructor(e,n){super(),this.serializer=e,this.q=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Fo{}class Hm extends Fo{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xu extends Fo{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Wm extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GS extends Fo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS={asc:"ASCENDING",desc:"DESCENDING"},QS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YS={and:"AND",or:"OR"};class JS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZS(t,e){return xl(t,e.toTimestamp())}function pf(t){return tn(!!t),ve.fromTimestamp(function(n){const r=Rn(n);return new Me(r.seconds,r.nanos)}(t))}function Zu(t,e){return Ol(t,e).canonicalString()}function Ol(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dl(t,e){return Zu(t.databaseId,e.path)}function e1(t,e){const n=function(i){const s=re.fromString(i);return tn(Gm(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new A(O,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(O,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(function(i){return tn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function mf(t,e,n){return{name:Dl(t,e),fields:n.value.mapValue.fields}}function t1(t,e){let n;if(e instanceof Hm)n={update:mf(t,e.key,e.value)};else if(e instanceof Wm)n={delete:Dl(t,e.key)};else if(e instanceof Xu)n={update:mf(t,e.key,e.data),updateMask:o1(e.fieldMask)};else{if(!(e instanceof GS))return Y();n={verify:Dl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof BS)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof HS)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof WS)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof KS)return{fieldPath:o.field.canonicalString(),increment:a.q};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function n1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(u,c){return Zu(u.databaseId,c)}(t,i);const s=function(u){if(u.length!==0)return Km(Vo.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Fn(h.field),direction:r1(h.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(u,c){return u.useProto3Json||SS(c)?c:{value:c}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{B:n,parent:i}}function r1(t){return qS[t]}function i1(t){return QS[t]}function s1(t){return YS[t]}function Fn(t){return{fieldPath:t.canonicalString()}}function Km(t){return t instanceof nt?function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:Fn(n.field),op:"IS_NAN"}};if(uf(n.value))return{unaryFilter:{field:Fn(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:Fn(n.field),op:"IS_NOT_NAN"}};if(uf(n.value))return{unaryFilter:{field:Fn(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(n.field),op:i1(n.op),value:n.value}}}(t):t instanceof Vo?function(n){const r=n.getFilters().map(i=>Km(i));return r.length===1?r[0]:{compositeFilter:{op:s1(n.op),filters:r}}}(t):Y()}function o1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return new JS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new A(mr,"The client has already been terminated.")}P(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,Ol(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Al&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(qr,s.toString())})}g(e,n,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,Ol(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Al&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new A(qr,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function tc(t,e){const n=Do(t),r={writes:e.map(i=>t1(n.serializer,i))};await n.P("Commit",n.serializer.databaseId,re.emptyPath(),r)}async function l1(t,e){const n=Do(t),{B:r,parent:i}=n1(n.serializer,bS(e));return(await n.g("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,u){const c=e1(a,l.name),d=pf(l.updateTime),h=l.createTime?pf(l.createTime):ve.min(),g=new $e({mapValue:{fields:l.fields}}),v=Dt.newFoundDocument(c,d,h,g);return u&&v.setHasCommittedMutations(),u?v.setHasCommittedMutations():v}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Map;function Uo(t){if(t._terminated)throw new A(mr,"The client has already been terminated.");if(!Yr.has(t)){so("ComponentProvider","Initializing Datastore");const e=function(s){return new TS(s,fetch.bind(null))}(function(s,o,a,l){return new _S(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Mm(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=ec(t._databaseId),r=function(s,o,a,l){return new a1(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Yr.set(t,r)}return Yr.get(t)}class gf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(O,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(O,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new A(O,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new A(O,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new A(O,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new A(O,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bo{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(mr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(mr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fS;switch(r.type){case"firstParty":return new gS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new A(O,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yr.get(n);r&&(so("ComponentProvider","Removing Datastore"),Yr.delete(n),r.terminate())}(this),Promise.resolve()}}function u1(t,e){const n=typeof t=="object"?t:Zp(),r=typeof t=="string"?t:"(default)",i=Fu(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=O_("firestore");s&&c1(i,...s)}return i}function c1(t,e,n,r={}){var i;const s=(t=Mi(t,bo))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Om("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ke.MOCK_USER;else{a=L_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(O,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ke(u)}t._authCredentials=new hS(new Lm(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class wt extends Ui{constructor(e,n,r){super(e,n,function(s){return new Bm(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new de(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function vf(t,e,...n){if(t=pe(t),Vm("collection","path",e),t instanceof bo){const r=re.fromString(e,...n);return nf(r),new wt(t,null,r)}{if(!(t instanceof Oe||t instanceof wt))throw new A(O,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return nf(r),new wt(t.firestore,null,r)}}function Ll(t,e,...n){if(t=pe(t),arguments.length===1&&(e=PS.newId()),Vm("doc","path",e),t instanceof bo){const r=re.fromString(e,...n);return tf(r),new Oe(t,null,new de(r))}{if(!(t instanceof Oe||t instanceof wt))throw new A(O,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return tf(r),new Oe(t.firestore,t instanceof wt?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gr(Pt.fromBase64String(e))}catch(n){throw new A(O,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gr(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(O,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(O,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(O,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/^__.*__$/;class f1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xu(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hm(e,this.data,n,this.fieldTransforms)}}class qm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xu(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Qm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ic{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new ic(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return co(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Qm(this.et)&&d1.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class h1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}ht(e,n,r,i=!1){return new ic({et:e,methodName:n,lt:r,path:Ce.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sc(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new h1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p1(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);oc("Data must be an object, but it was:",o,r);const a=Ym(r,o);let l,u;if(s.merge)l=new Nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Vl(e,d,n);if(!o.contains(h))throw new A(O,`Field '${h}' is specified in your field mask but missing from your input data.`);Xm(c,h)||c.push(h)}l=new Nn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new f1(new $e(a),l,u)}class jo extends nc{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jo}}function m1(t,e,n,r){const i=t.ht(1,e,n);oc("Data must be an object, but it was:",i,r);const s=[],o=$e.empty();Fi(r,(l,u)=>{const c=ac(e,l,n);u=pe(u);const d=i.ot(c);if(u instanceof jo)s.push(c);else{const h=bi(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Nn(s);return new qm(o,a,i.fieldTransforms)}function g1(t,e,n,r,i,s){const o=t.ht(1,e,n),a=[Vl(e,r,n)],l=[i];if(s.length%2!=0)throw new A(O,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Vl(e,s[h])),l.push(s[h+1]);const u=[],c=$e.empty();for(let h=a.length-1;h>=0;--h)if(!Xm(u,a[h])){const g=a[h];let v=l[h];v=pe(v);const _=o.ot(g);if(v instanceof jo)u.push(g);else{const E=bi(v,_);E!=null&&(u.push(g),c.set(g,E))}}const d=new Nn(u);return new qm(c,d,o.fieldTransforms)}function v1(t,e,n,r=!1){return bi(n,t.ht(r?4:3,e))}function bi(t,e){if(Jm(t=pe(t)))return oc("Unsupported field value:",e,t),Ym(t,e);if(t instanceof nc)return function(r,i){if(!Qm(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=bi(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $S(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:xl(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xl(i.serializer,s)}}if(r instanceof rc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gr)return{bytesValue:XS(i.serializer,r._byteString)};if(r instanceof Oe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zu(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${Lo(r)}`)}(t,e)}function Ym(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=bi(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof rc||t instanceof gr||t instanceof Oe||t instanceof nc)}function oc(t,e,n){if(!Jm(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lo(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function Vl(t,e,n){if((e=pe(e))instanceof zo)return e._internalPath;if(typeof e=="string")return ac(t,e);throw co("Field path arguments must be of type string or ",t,!1,void 0,n)}const y1=new RegExp("[~\\*/\\[\\]]");function ac(t,e,n){if(e.search(y1)>=0)throw co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zo(...e.split("."))._internalPath}catch{throw co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function co(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(O,a+t+l)}function Xm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zm extends _1{data(){return super.data()}}class w1{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function eg(t,e){return typeof e=="string"?ac(t,e):e instanceof zo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{}class S1 extends E1{}class lc extends S1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lc(e,n,r)}_apply(e){const n=this._parse(e);return T1(e._query,n),new Ui(e.firestore,e.converter,jS(e._query,n))}_parse(e){const n=sc(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(O,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){_f(d,c);const g=[];for(const v of d)g.push(yf(l,s,v));h={arrayValue:{values:g}}}else h=yf(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||_f(d,c),h=v1(a,o,d,c==="in"||c==="not-in");return nt.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function I1(t,e,n){const r=e,i=eg("where",t);return lc._create(i,r,n)}function yf(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new A(O,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FS(e)&&n.indexOf("/")!==-1)throw new A(O,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(re.fromString(n));if(!de.isDocumentKey(r))throw new A(O,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lf(t,new de(r))}if(n instanceof Oe)return lf(t,n._key);throw new A(O,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lo(n)}.`)}function _f(t,e){if(!Array.isArray(t)||t.length===0)throw new A(O,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T1(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(O,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(O,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class P1 extends class{convertValue(n,r="none"){switch(An(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ne(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(wi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw Y()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return Fi(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new rc(ne(n.latitude),ne(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=bm(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Ei(n));default:return null}}convertTimestamp(n){const r=Rn(n);return new Me(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=re.fromString(n);tn(Gm(i));const s=new yi(i.get(1),i.get(3)),o=new de(i.popFirst(5));return s.isEqual(r)||Yu(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new gr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function C1(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new A(Dm,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Mi(t,Ui))._query);const e=Uo(t.firestore),n=new P1(t.firestore);return l1(e,t._query).then(r=>{const i=r.map(s=>new Zm(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new w1(t,i)})}function R1(t,e,n,...r){const i=sc((t=Mi(t,Oe)).firestore);let s;return s=typeof(e=pe(e))=="string"||e instanceof zo?g1(i,"updateDoc",t._key,e,n,r):m1(i,"updateDoc",t._key,e),tc(Uo(t.firestore),[s.toMutation(t._key,_n.exists(!0))])}function A1(t){return tc(Uo((t=Mi(t,Oe)).firestore),[new Wm(t._key,_n.none())])}function N1(t,e){const n=Ll(t=Mi(t,wt)),r=k1(t.converter,e),i=p1(sc(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return tc(Uo(t.firestore),[i.toMutation(n._key,_n.exists(!1))]).then(()=>n)}(function(){(function(n){Sr=n})(`${wr}_lite`),fr(new kn("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new bo(new pS(e.getProvider("auth-internal")),new yS(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(O,'"projectId" not provided in firebase.initializeApp.');return new yi(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Xt("firestore-lite","4.6.4",""),Xt("firestore-lite","4.6.4","esm2017")})();async function x1(){const t=Qu(),e=new ft;try{await dE(t,e)}catch(n){console.log(n)}}function O1(){return N.jsxs("div",{className:"text-center",children:[N.jsx("h1",{children:"Welcome to Posts App"}),N.jsx("button",{onClick:x1,children:"Sign In with Google"})]})}function D1({posts:t,onEdit:e,onDelete:n}){return N.jsxs("div",{className:"flex flex-col",children:[N.jsxs("div",{className:"flex",children:[N.jsx("div",{className:"w-3/5 p-2 text-center",children:"Title"}),N.jsx("div",{className:"w-2/5 p-2 text-center",children:"Actions"})]}),t.map(r=>N.jsxs("div",{className:"flex",children:[N.jsx("div",{className:"w-3/5 p-2 text-center",children:r.title}),N.jsxs("div",{className:"w-2/5 p-2 text-center",children:[N.jsx("button",{onClick:()=>e(r),children:"Edit"}),N.jsx("button",{onClick:()=>n(r),children:"Delete"})]})]},r.id))]})}function wf({post:t,onSave:e,onCancel:n}){const[r,i]=k.useState((t==null?void 0:t.title)||""),[s,o]=k.useState((t==null?void 0:t.body)||""),a=()=>{const l={title:r,body:s};t&&(l.id=t.id),e(l)};return N.jsxs("div",{className:"flex flex-col w-5/12 p-8 mx-auto mt-4 border border-indigo-300 rounded-xl",children:[N.jsx("h2",{className:"p-2",children:"Save a Post"}),N.jsx("input",{type:"text",className:"p-2 my-2",placeholder:"Enter post title",value:r,onChange:l=>i(l.target.value)}),N.jsx("textarea",{className:"p-2 my-2",placeholder:"Enter post body",value:s,onChange:l=>o(l.target.value)}),N.jsxs("div",{className:"flex",children:[N.jsx("button",{className:"ms-auto",onClick:a,children:"Save"}),N.jsx("button",{onClick:n,children:"Cancel"})]}),N.jsx("hr",{className:"mt-5"})]})}class L1 extends zl.Component{constructor(n){super(n);kr(this,"fetchPosts",()=>{const{db:n,user:r}=this.props,i=vf(n,"posts"),s=s(i,I1("userId","==",r.uid));C1(s).then(o=>{const a=o.docs.map(l=>({id:l.id,...l.data()}));this.setState({posts:a})})});kr(this,"savePost",async n=>{const{db:r,user:i}=this.props;if(n.title.trim()!==""){const s={userId:i.uid,title:n.title,body:n.body};n!=null&&n.id?await R1(Ll(r,"posts",n.id),s):await N1(vf(r,"posts"),s),this.fetchPosts(),this.setState({newPost:!1,editingPost:null})}});kr(this,"deletePost",async n=>{const{db:r}=this.props;await A1(Ll(r,"posts",n.id)),this.fetchPosts()});kr(this,"handleSignOut",()=>{Hw(this.auth).then(()=>this.setState({logout:!0}))});this.state={posts:[],newPost:!1,editingPost:null,logout:!1},this.auth=Qu()}componentDidMount(){this.fetchPosts()}render(){const{user:n}=this.props,{posts:r,newPost:i,editingPost:s}=this.state;return this.state.logout?N.jsx(Es,{to:"/login"}):N.jsxs("div",{className:"flex flex-col justify-center",children:[N.jsxs("div",{className:"flex justify-between",children:[N.jsxs("h1",{children:["Welcome, ",n.displayName]}),N.jsx("button",{className:"ms-auto",onClick:()=>this.setState({newPost:!0}),children:"+ Add New Post"}),N.jsx("button",{onClick:this.handleSignOut,children:"Sign Out"})]}),N.jsx("hr",{className:"my-5"}),i&&N.jsx(wf,{post:null,onSave:this.savePost,onCancel:()=>this.setState({newPost:!1})}),s&&N.jsx(wf,{post:s,onSave:this.savePost,onCancel:()=>this.setState({editingPost:null})}),!(i||s)&&N.jsx(D1,{posts:r,onEdit:o=>this.setState({editingPost:o}),onDelete:this.deletePost})]})}}const V1={apiKey:"AIzaSyBP0YOp668pEpBywMrjkh1ZfJyQ5xx9I9A",authDomain:"fir-blog-39d0a.firebaseapp.com",projectId:"fir-blog-39d0a",storageBucket:"fir-blog-39d0a.appspot.com",messagingSenderId:"164948674029",appId:'"1:164948674029:web:5b8656ded8f3f97c4493e4'},tg=Xp(V1),M1=Qu(tg),F1=u1(tg);function U1(){const[t,e]=k.useState(null),[n,r]=k.useState(!0);return k.useEffect(()=>{const i=Bw(M1,s=>{e(s),r(!1)});return()=>i()},[]),n?N.jsx("div",{children:"Loading..."}):N.jsx(T_,{children:N.jsx("div",{className:"App",children:N.jsxs(E_,{children:[t&&N.jsx(Mn,{path:"/login",element:N.jsx(Es,{to:"/dashboard"})}),t&&N.jsx(Mn,{path:"/dashboard/*",element:N.jsx(L1,{user:t,db:F1})}),!t&&N.jsx(Mn,{path:"/login",element:N.jsx(O1,{})}),!t&&N.jsx(Mn,{path:"/dashboard/*",element:N.jsx(Es,{to:"/login"})}),N.jsx(Mn,{path:"*",element:N.jsx(Es,{to:t?"/dashboard":"/login"})})]})})})}Pa.createRoot(document.getElementById("root")).render(N.jsx(zl.StrictMode,{children:N.jsx(U1,{})}));
