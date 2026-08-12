(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const f of a)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function l(a){const f={};return a.integrity&&(f.integrity=a.integrity),a.referrerPolicy&&(f.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?f.credentials="include":a.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(a){if(a.ep)return;a.ep=!0;const f=l(a);fetch(a.href,f)}})();function zp(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var aa={exports:{}},io={},ua={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function Hg(){if(zf)return pe;zf=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.iterator;function b($){return $===null||typeof $!="object"?null:($=w&&$[w]||$["@@iterator"],typeof $=="function"?$:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,z={};function T($,N,ne){this.props=$,this.context=N,this.refs=z,this.updater=ne||F}T.prototype.isReactComponent={},T.prototype.setState=function($,N){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,N,"setState")},T.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function I(){}I.prototype=T.prototype;function _($,N,ne){this.props=$,this.context=N,this.refs=z,this.updater=ne||F}var V=_.prototype=new I;V.constructor=_,L(V,T.prototype),V.isPureReactComponent=!0;var te=Array.isArray,W=Object.prototype.hasOwnProperty,A={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function O($,N,ne){var ie,le={},he=null,me=null;if(N!=null)for(ie in N.ref!==void 0&&(me=N.ref),N.key!==void 0&&(he=""+N.key),N)W.call(N,ie)&&!U.hasOwnProperty(ie)&&(le[ie]=N[ie]);var ge=arguments.length-2;if(ge===1)le.children=ne;else if(1<ge){for(var we=Array(ge),Ne=0;Ne<ge;Ne++)we[Ne]=arguments[Ne+2];le.children=we}if($&&$.defaultProps)for(ie in ge=$.defaultProps,ge)le[ie]===void 0&&(le[ie]=ge[ie]);return{$$typeof:n,type:$,key:he,ref:me,props:le,_owner:A.current}}function ue($,N){return{$$typeof:n,type:$.type,key:N,ref:$.ref,props:$.props,_owner:$._owner}}function Z($){return typeof $=="object"&&$!==null&&$.$$typeof===n}function de($){var N={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(ne){return N[ne]})}var Le=/\/+/g;function fe($,N){return typeof $=="object"&&$!==null&&$.key!=null?de(""+$.key):N.toString(36)}function $e($,N,ne,ie,le){var he=typeof $;(he==="undefined"||he==="boolean")&&($=null);var me=!1;if($===null)me=!0;else switch(he){case"string":case"number":me=!0;break;case"object":switch($.$$typeof){case n:case i:me=!0}}if(me)return me=$,le=le(me),$=ie===""?"."+fe(me,0):ie,te(le)?(ne="",$!=null&&(ne=$.replace(Le,"$&/")+"/"),$e(le,N,ne,"",function(Ne){return Ne})):le!=null&&(Z(le)&&(le=ue(le,ne+(!le.key||me&&me.key===le.key?"":(""+le.key).replace(Le,"$&/")+"/")+$)),N.push(le)),1;if(me=0,ie=ie===""?".":ie+":",te($))for(var ge=0;ge<$.length;ge++){he=$[ge];var we=ie+fe(he,ge);me+=$e(he,N,ne,we,le)}else if(we=b($),typeof we=="function")for($=we.call($),ge=0;!(he=$.next()).done;)he=he.value,we=ie+fe(he,ge++),me+=$e(he,N,ne,we,le);else if(he==="object")throw N=String($),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return me}function Ce($,N,ne){if($==null)return $;var ie=[],le=0;return $e($,ie,"","",function(he){return N.call(ne,he,le++)}),ie}function Fe($){if($._status===-1){var N=$._result;N=N(),N.then(function(ne){($._status===0||$._status===-1)&&($._status=1,$._result=ne)},function(ne){($._status===0||$._status===-1)&&($._status=2,$._result=ne)}),$._status===-1&&($._status=0,$._result=N)}if($._status===1)return $._result.default;throw $._result}var ke={current:null},G={transition:null},ee={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:G,ReactCurrentOwner:A};function Q(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Ce,forEach:function($,N,ne){Ce($,function(){N.apply(this,arguments)},ne)},count:function($){var N=0;return Ce($,function(){N++}),N},toArray:function($){return Ce($,function(N){return N})||[]},only:function($){if(!Z($))throw Error("React.Children.only expected to receive a single React element child.");return $}},pe.Component=T,pe.Fragment=l,pe.Profiler=a,pe.PureComponent=_,pe.StrictMode=u,pe.Suspense=m,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,pe.act=Q,pe.cloneElement=function($,N,ne){if($==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+$+".");var ie=L({},$.props),le=$.key,he=$.ref,me=$._owner;if(N!=null){if(N.ref!==void 0&&(he=N.ref,me=A.current),N.key!==void 0&&(le=""+N.key),$.type&&$.type.defaultProps)var ge=$.type.defaultProps;for(we in N)W.call(N,we)&&!U.hasOwnProperty(we)&&(ie[we]=N[we]===void 0&&ge!==void 0?ge[we]:N[we])}var we=arguments.length-2;if(we===1)ie.children=ne;else if(1<we){ge=Array(we);for(var Ne=0;Ne<we;Ne++)ge[Ne]=arguments[Ne+2];ie.children=ge}return{$$typeof:n,type:$.type,key:le,ref:he,props:ie,_owner:me}},pe.createContext=function($){return $={$$typeof:h,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},$.Provider={$$typeof:f,_context:$},$.Consumer=$},pe.createElement=O,pe.createFactory=function($){var N=O.bind(null,$);return N.type=$,N},pe.createRef=function(){return{current:null}},pe.forwardRef=function($){return{$$typeof:g,render:$}},pe.isValidElement=Z,pe.lazy=function($){return{$$typeof:S,_payload:{_status:-1,_result:$},_init:Fe}},pe.memo=function($,N){return{$$typeof:x,type:$,compare:N===void 0?null:N}},pe.startTransition=function($){var N=G.transition;G.transition={};try{$()}finally{G.transition=N}},pe.unstable_act=Q,pe.useCallback=function($,N){return ke.current.useCallback($,N)},pe.useContext=function($){return ke.current.useContext($)},pe.useDebugValue=function(){},pe.useDeferredValue=function($){return ke.current.useDeferredValue($)},pe.useEffect=function($,N){return ke.current.useEffect($,N)},pe.useId=function(){return ke.current.useId()},pe.useImperativeHandle=function($,N,ne){return ke.current.useImperativeHandle($,N,ne)},pe.useInsertionEffect=function($,N){return ke.current.useInsertionEffect($,N)},pe.useLayoutEffect=function($,N){return ke.current.useLayoutEffect($,N)},pe.useMemo=function($,N){return ke.current.useMemo($,N)},pe.useReducer=function($,N,ne){return ke.current.useReducer($,N,ne)},pe.useRef=function($){return ke.current.useRef($)},pe.useState=function($){return ke.current.useState($)},pe.useSyncExternalStore=function($,N,ne){return ke.current.useSyncExternalStore($,N,ne)},pe.useTransition=function(){return ke.current.useTransition()},pe.version="18.3.1",pe}var Lf;function su(){return Lf||(Lf=1,ua.exports=Hg()),ua.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function Vg(){if(_f)return io;_f=1;var n=su(),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(g,m,x){var S,w={},b=null,F=null;x!==void 0&&(b=""+x),m.key!==void 0&&(b=""+m.key),m.ref!==void 0&&(F=m.ref);for(S in m)u.call(m,S)&&!f.hasOwnProperty(S)&&(w[S]=m[S]);if(g&&g.defaultProps)for(S in m=g.defaultProps,m)w[S]===void 0&&(w[S]=m[S]);return{$$typeof:i,type:g,key:b,ref:F,props:w,_owner:a.current}}return io.Fragment=l,io.jsx=h,io.jsxs=h,io}var Tf;function Qg(){return Tf||(Tf=1,aa.exports=Vg()),aa.exports}var d=Qg(),j=su();const ze=zp(j);var Mi={},ca={exports:{}},at={},da={exports:{}},fa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If;function Gg(){return If||(If=1,(function(n){function i(G,ee){var Q=G.length;G.push(ee);e:for(;0<Q;){var $=Q-1>>>1,N=G[$];if(0<a(N,ee))G[$]=ee,G[Q]=N,Q=$;else break e}}function l(G){return G.length===0?null:G[0]}function u(G){if(G.length===0)return null;var ee=G[0],Q=G.pop();if(Q!==ee){G[0]=Q;e:for(var $=0,N=G.length,ne=N>>>1;$<ne;){var ie=2*($+1)-1,le=G[ie],he=ie+1,me=G[he];if(0>a(le,Q))he<N&&0>a(me,le)?(G[$]=me,G[he]=Q,$=he):(G[$]=le,G[ie]=Q,$=ie);else if(he<N&&0>a(me,Q))G[$]=me,G[he]=Q,$=he;else break e}}return ee}function a(G,ee){var Q=G.sortIndex-ee.sortIndex;return Q!==0?Q:G.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();n.unstable_now=function(){return h.now()-g}}var m=[],x=[],S=1,w=null,b=3,F=!1,L=!1,z=!1,T=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(G){for(var ee=l(x);ee!==null;){if(ee.callback===null)u(x);else if(ee.startTime<=G)u(x),ee.sortIndex=ee.expirationTime,i(m,ee);else break;ee=l(x)}}function te(G){if(z=!1,V(G),!L)if(l(m)!==null)L=!0,Fe(W);else{var ee=l(x);ee!==null&&ke(te,ee.startTime-G)}}function W(G,ee){L=!1,z&&(z=!1,I(O),O=-1),F=!0;var Q=b;try{for(V(ee),w=l(m);w!==null&&(!(w.expirationTime>ee)||G&&!de());){var $=w.callback;if(typeof $=="function"){w.callback=null,b=w.priorityLevel;var N=$(w.expirationTime<=ee);ee=n.unstable_now(),typeof N=="function"?w.callback=N:w===l(m)&&u(m),V(ee)}else u(m);w=l(m)}if(w!==null)var ne=!0;else{var ie=l(x);ie!==null&&ke(te,ie.startTime-ee),ne=!1}return ne}finally{w=null,b=Q,F=!1}}var A=!1,U=null,O=-1,ue=5,Z=-1;function de(){return!(n.unstable_now()-Z<ue)}function Le(){if(U!==null){var G=n.unstable_now();Z=G;var ee=!0;try{ee=U(!0,G)}finally{ee?fe():(A=!1,U=null)}}else A=!1}var fe;if(typeof _=="function")fe=function(){_(Le)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ce=$e.port2;$e.port1.onmessage=Le,fe=function(){Ce.postMessage(null)}}else fe=function(){T(Le,0)};function Fe(G){U=G,A||(A=!0,fe())}function ke(G,ee){O=T(function(){G(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){L||F||(L=!0,Fe(W))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return l(m)},n.unstable_next=function(G){switch(b){case 1:case 2:case 3:var ee=3;break;default:ee=b}var Q=b;b=ee;try{return G()}finally{b=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Q=b;b=G;try{return ee()}finally{b=Q}},n.unstable_scheduleCallback=function(G,ee,Q){var $=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?$+Q:$):Q=$,G){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Q+N,G={id:S++,callback:ee,priorityLevel:G,startTime:Q,expirationTime:N,sortIndex:-1},Q>$?(G.sortIndex=Q,i(x,G),l(m)===null&&G===l(x)&&(z?(I(O),O=-1):z=!0,ke(te,Q-$))):(G.sortIndex=N,i(m,G),L||F||(L=!0,Fe(W))),G},n.unstable_shouldYield=de,n.unstable_wrapCallback=function(G){var ee=b;return function(){var Q=b;b=ee;try{return G.apply(this,arguments)}finally{b=Q}}}})(fa)),fa}var Nf;function Yg(){return Nf||(Nf=1,da.exports=Gg()),da.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function qg(){if(Of)return at;Of=1;var n=su(),i=Yg();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,a={};function f(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(a[e]=t,e=0;e<t.length;e++)u.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},w={};function b(e){return m.call(w,e)?!0:m.call(S,e)?!1:x.test(e)?w[e]=!0:(S[e]=!0,!1)}function F(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L(e,t,r,o){if(t===null||typeof t>"u"||F(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function z(e,t,r,o,s,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function _(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,_);T[t]=new z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,_);T[t]=new z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,_);T[t]=new z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function V(e,t,r,o){var s=T.hasOwnProperty(t)?T[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L(t,r,s,o)&&(r=null),o||s===null?b(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,o=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var te=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),de=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),G=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,$;function N(e){if($===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);$=t&&t[1]||""}return`
`+$+e}var ne=!1;function ie(e,t){if(!e||ne)return"";ne=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var o=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){o=P}e.call(t.prototype)}else{try{throw Error()}catch(P){o=P}e()}}catch(P){if(P&&o&&typeof P.stack=="string"){for(var s=P.stack.split(`
`),c=o.stack.split(`
`),p=s.length-1,y=c.length-1;1<=p&&0<=y&&s[p]!==c[y];)y--;for(;1<=p&&0<=y;p--,y--)if(s[p]!==c[y]){if(p!==1||y!==1)do if(p--,y--,0>y||s[p]!==c[y]){var k=`
`+s[p].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=p&&0<=y);break}}}finally{ne=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function le(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case A:return"Portal";case ue:return"Profiler";case O:return"StrictMode";case fe:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case de:return(e.displayName||"Context")+".Consumer";case Z:return(e._context.displayName||"Context")+".Provider";case Le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ne(e){var t=we(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(p){o=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=Ne(e))}function Nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var r=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ou(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=ge(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fu(e,t){t=t.checked,t!=null&&V(e,"checked",t,!1)}function gl(e,t){Fu(e,t);var r=ge(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,r):t.hasOwnProperty("defaultValue")&&xl(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function xl(e,t,r){(t!=="number"||Po(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wr=Array.isArray;function Dn(e,t,r,o){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ge(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Du(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(wr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ge(r)}}function Au(e,t){var r=ge(t.value),o=ge(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,Uu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yh=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){Yh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Hu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Vu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,s=Hu(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,s):e[r]=s}}var qh=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(qh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function Cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,An=null,Bn=null;function Qu(e){if(e=Hr(e)){if(typeof jl!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Zo(t),jl(e.stateNode,e.type,t))}}function Gu(e){An?Bn?Bn.push(e):Bn=[e]:An=e}function Yu(){if(An){var e=An,t=Bn;if(Bn=An=null,Qu(e),t)for(e=0;e<t.length;e++)Qu(t[e])}}function qu(e,t){return e(t)}function Ku(){}var $l=!1;function Xu(e,t,r){if($l)return e(t,r);$l=!0;try{return qu(e,t,r)}finally{$l=!1,(An!==null||Bn!==null)&&(Ku(),Yu())}}function Cr(e,t){var r=e.stateNode;if(r===null)return null;var o=Zo(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var bl=!1;if(g)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){bl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{bl=!1}function Kh(e,t,r,o,s,c,p,y,k){var P=Array.prototype.slice.call(arguments,3);try{t.apply(r,P)}catch(D){this.onError(D)}}var $r=!1,Lo=null,_o=!1,El=null,Xh={onError:function(e){$r=!0,Lo=e}};function Jh(e,t,r,o,s,c,p,y,k){$r=!1,Lo=null,Kh.apply(Xh,arguments)}function Zh(e,t,r,o,s,c,p,y,k){if(Jh.apply(this,arguments),$r){if($r){var P=Lo;$r=!1,Lo=null}else throw Error(l(198));_o||(_o=!0,El=P)}}function Sn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zu(e){if(Sn(e)!==e)throw Error(l(188))}function em(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,o=t;;){var s=r.return;if(s===null)break;var c=s.alternate;if(c===null){if(o=s.return,o!==null){r=o;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===r)return Zu(s),e;if(c===o)return Zu(s),t;c=c.sibling}throw Error(l(188))}if(r.return!==o.return)r=s,o=c;else{for(var p=!1,y=s.child;y;){if(y===r){p=!0,r=s,o=c;break}if(y===o){p=!0,o=s,r=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===r){p=!0,r=c,o=s;break}if(y===o){p=!0,o=c,r=s;break}y=y.sibling}if(!p)throw Error(l(189))}}if(r.alternate!==o)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function ec(e){return e=em(e),e!==null?tc(e):null}function tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tc(e);if(t!==null)return t;e=e.sibling}return null}var nc=i.unstable_scheduleCallback,rc=i.unstable_cancelCallback,tm=i.unstable_shouldYield,nm=i.unstable_requestPaint,Me=i.unstable_now,rm=i.unstable_getCurrentPriorityLevel,Rl=i.unstable_ImmediatePriority,oc=i.unstable_UserBlockingPriority,To=i.unstable_NormalPriority,om=i.unstable_LowPriority,ic=i.unstable_IdlePriority,Io=null,_t=null;function im(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Io,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:am,lm=Math.log,sm=Math.LN2;function am(e){return e>>>=0,e===0?32:31-(lm(e)/sm|0)|0}var No=64,Oo=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,s=e.suspendedLanes,c=e.pingedLanes,p=r&268435455;if(p!==0){var y=p&~s;y!==0?o=br(y):(c&=p,c!==0&&(o=br(c)))}else p=r&~s,p!==0?o=br(p):c!==0&&(o=br(c));if(o===0)return 0;if(t!==0&&t!==o&&(t&s)===0&&(s=o&-o,c=t&-t,s>=c||s===16&&(c&4194240)!==0))return t;if((o&4)!==0&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-St(t),s=1<<r,o|=e[r],t&=~s;return o}function um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-St(c),y=1<<p,k=s[p];k===-1?((y&r)===0||(y&o)!==0)&&(s[p]=um(y,t)):k<=t&&(e.expiredLanes|=y),c&=~y}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=No;return No<<=1,(No&4194240)===0&&(No=64),e}function zl(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Er(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=r}function dm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-St(r),c=1<<s;t[s]=0,o[s]=-1,e[s]=-1,r&=~c}}function Ll(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-St(r),s=1<<o;s&t|e[o]&t&&(e[o]|=t),r&=~s}}var Se=0;function sc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ac,_l,uc,cc,dc,Tl=!1,Mo=[],qt=null,Kt=null,Xt=null,Rr=new Map,Pr=new Map,Jt=[],fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fc(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function zr(e,t,r,o,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:c,targetContainers:[s]},t!==null&&(t=Hr(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function pm(e,t,r,o,s){switch(t){case"focusin":return qt=zr(qt,e,t,r,o,s),!0;case"dragenter":return Kt=zr(Kt,e,t,r,o,s),!0;case"mouseover":return Xt=zr(Xt,e,t,r,o,s),!0;case"pointerover":var c=s.pointerId;return Rr.set(c,zr(Rr.get(c)||null,e,t,r,o,s)),!0;case"gotpointercapture":return c=s.pointerId,Pr.set(c,zr(Pr.get(c)||null,e,t,r,o,s)),!0}return!1}function pc(e){var t=kn(e.target);if(t!==null){var r=Sn(t);if(r!==null){if(t=r.tag,t===13){if(t=Ju(r),t!==null){e.blockedOn=t,dc(e.priority,function(){uc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);kl=o,r.target.dispatchEvent(o),kl=null}else return t=Hr(r),t!==null&&_l(t),e.blockedOn=r,!1;t.shift()}return!0}function hc(e,t,r){Do(e)&&r.delete(t)}function hm(){Tl=!1,qt!==null&&Do(qt)&&(qt=null),Kt!==null&&Do(Kt)&&(Kt=null),Xt!==null&&Do(Xt)&&(Xt=null),Rr.forEach(hc),Pr.forEach(hc)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,hm)))}function _r(e){function t(s){return Lr(s,e)}if(0<Mo.length){Lr(Mo[0],e);for(var r=1;r<Mo.length;r++){var o=Mo[r];o.blockedOn===e&&(o.blockedOn=null)}}for(qt!==null&&Lr(qt,e),Kt!==null&&Lr(Kt,e),Xt!==null&&Lr(Xt,e),Rr.forEach(t),Pr.forEach(t),r=0;r<Jt.length;r++)o=Jt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Jt.length&&(r=Jt[0],r.blockedOn===null);)pc(r),r.blockedOn===null&&Jt.shift()}var Wn=te.ReactCurrentBatchConfig,Ao=!0;function mm(e,t,r,o){var s=Se,c=Wn.transition;Wn.transition=null;try{Se=1,Il(e,t,r,o)}finally{Se=s,Wn.transition=c}}function gm(e,t,r,o){var s=Se,c=Wn.transition;Wn.transition=null;try{Se=4,Il(e,t,r,o)}finally{Se=s,Wn.transition=c}}function Il(e,t,r,o){if(Ao){var s=Nl(e,t,r,o);if(s===null)Jl(e,t,o,Bo,r),fc(e,o);else if(pm(s,e,t,r,o))o.stopPropagation();else if(fc(e,o),t&4&&-1<fm.indexOf(e)){for(;s!==null;){var c=Hr(s);if(c!==null&&ac(c),c=Nl(e,t,r,o),c===null&&Jl(e,t,o,Bo,r),c===s)break;s=c}s!==null&&o.stopPropagation()}else Jl(e,t,o,null,r)}}var Bo=null;function Nl(e,t,r,o){if(Bo=null,e=Cl(o),e=kn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ju(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rm()){case Rl:return 1;case oc:return 4;case To:case om:return 16;case ic:return 536870912;default:return 16}default:return 16}}var Zt=null,Ol=null,Wo=null;function gc(){if(Wo)return Wo;var e,t=Ol,r=t.length,o,s="value"in Zt?Zt.value:Zt.textContent,c=s.length;for(e=0;e<r&&t[e]===s[e];e++);var p=r-e;for(o=1;o<=p&&t[r-o]===s[c-o];o++);return Wo=s.slice(e,1<o?1-o:void 0)}function Uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ho(){return!0}function xc(){return!1}function ut(e){function t(r,o,s,c,p){this._reactName=r,this._targetInst=s,this.type=o,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ho:xc,this.isPropagationStopped=xc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=ut(Un),Tr=Q({},Un,{view:0,detail:0}),xm=ut(Tr),Ml,Dl,Ir,Vo=Q({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Ml=e.screenX-Ir.screenX,Dl=e.screenY-Ir.screenY):Dl=Ml=0,Ir=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),yc=ut(Vo),ym=Q({},Vo,{dataTransfer:0}),vm=ut(ym),wm=Q({},Tr,{relatedTarget:0}),Al=ut(wm),Sm=Q({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),km=ut(Sm),Cm=Q({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jm=ut(Cm),$m=Q({},Un,{data:0}),vc=ut($m),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rm[e])?!!t[e]:!1}function Bl(){return Pm}var zm=Q({},Tr,{key:function(e){if(e.key){var t=bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lm=ut(zm),_m=Q({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=ut(_m),Tm=Q({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),Im=ut(Tm),Nm=Q({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=ut(Nm),Fm=Q({},Vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mm=ut(Fm),Dm=[9,13,27,32],Wl=g&&"CompositionEvent"in window,Nr=null;g&&"documentMode"in document&&(Nr=document.documentMode);var Am=g&&"TextEvent"in window&&!Nr,Sc=g&&(!Wl||Nr&&8<Nr&&11>=Nr),kc=" ",Cc=!1;function jc(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Bm(e,t){switch(e){case"compositionend":return $c(t);case"keypress":return t.which!==32?null:(Cc=!0,kc);case"textInput":return e=t.data,e===kc&&Cc?null:e;default:return null}}function Wm(e,t){if(Hn)return e==="compositionend"||!Wl&&jc(e,t)?(e=gc(),Wo=Ol=Zt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sc&&t.locale!=="ko"?null:t.data;default:return null}}var Um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Um[e.type]:t==="textarea"}function Ec(e,t,r,o){Gu(o),t=Ko(t,"onChange"),0<t.length&&(r=new Fl("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Or=null,Fr=null;function Hm(e){Vc(e,0)}function Qo(e){var t=qn(e);if(Nu(t))return e}function Vm(e,t){if(e==="change")return t}var Rc=!1;if(g){var Ul;if(g){var Hl="oninput"in document;if(!Hl){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),Hl=typeof Pc.oninput=="function"}Ul=Hl}else Ul=!1;Rc=Ul&&(!document.documentMode||9<document.documentMode)}function zc(){Or&&(Or.detachEvent("onpropertychange",Lc),Fr=Or=null)}function Lc(e){if(e.propertyName==="value"&&Qo(Fr)){var t=[];Ec(t,Fr,e,Cl(e)),Xu(Hm,t)}}function Qm(e,t,r){e==="focusin"?(zc(),Or=t,Fr=r,Or.attachEvent("onpropertychange",Lc)):e==="focusout"&&zc()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Fr)}function Ym(e,t){if(e==="click")return Qo(t)}function qm(e,t){if(e==="input"||e==="change")return Qo(t)}function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Km;function Mr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var s=r[o];if(!m.call(t,s)||!kt(e[s],t[s]))return!1}return!0}function _c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var r=_c(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_c(r)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(){for(var e=window,t=Po();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Po(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xm(e){var t=Nc(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ic(r.ownerDocument.documentElement,r)){if(o!==null&&Vl(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,c=Math.min(o.start,s);o=o.end===void 0?c:Math.min(o.end,s),!e.extend&&c>o&&(s=o,o=c,c=s),s=Tc(r,c);var p=Tc(r,o);s&&p&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),c>o?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jm=g&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ql=null,Dr=null,Gl=!1;function Oc(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Gl||Vn==null||Vn!==Po(o)||(o=Vn,"selectionStart"in o&&Vl(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Dr&&Mr(Dr,o)||(Dr=o,o=Ko(Ql,"onSelect"),0<o.length&&(t=new Fl("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Vn)))}function Go(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Qn={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Yl={},Fc={};g&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Yo(e){if(Yl[e])return Yl[e];if(!Qn[e])return e;var t=Qn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Fc)return Yl[e]=t[r];return e}var Mc=Yo("animationend"),Dc=Yo("animationiteration"),Ac=Yo("animationstart"),Bc=Yo("transitionend"),Wc=new Map,Uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Wc.set(e,t),f(t,[e])}for(var ql=0;ql<Uc.length;ql++){var Kl=Uc[ql],Zm=Kl.toLowerCase(),eg=Kl[0].toUpperCase()+Kl.slice(1);en(Zm,"on"+eg)}en(Mc,"onAnimationEnd"),en(Dc,"onAnimationIteration"),en(Ac,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(Bc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function Hc(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,Zh(o,t,void 0,e),e.currentTarget=null}function Vc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],s=o.event;o=o.listeners;e:{var c=void 0;if(t)for(var p=o.length-1;0<=p;p--){var y=o[p],k=y.instance,P=y.currentTarget;if(y=y.listener,k!==c&&s.isPropagationStopped())break e;Hc(s,y,P),c=k}else for(p=0;p<o.length;p++){if(y=o[p],k=y.instance,P=y.currentTarget,y=y.listener,k!==c&&s.isPropagationStopped())break e;Hc(s,y,P),c=k}}}if(_o)throw e=El,_o=!1,El=null,e}function be(e,t){var r=t[os];r===void 0&&(r=t[os]=new Set);var o=e+"__bubble";r.has(o)||(Qc(t,e,2,!1),r.add(o))}function Xl(e,t,r){var o=0;t&&(o|=4),Qc(r,e,o,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[qo]){e[qo]=!0,u.forEach(function(r){r!=="selectionchange"&&(tg.has(r)||Xl(r,!1,e),Xl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,Xl("selectionchange",!1,t))}}function Qc(e,t,r,o){switch(mc(t)){case 1:var s=mm;break;case 4:s=gm;break;default:s=Il}r=s.bind(null,t,r,e),s=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Jl(e,t,r,o,s){var c=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var y=o.stateNode.containerInfo;if(y===s||y.nodeType===8&&y.parentNode===s)break;if(p===4)for(p=o.return;p!==null;){var k=p.tag;if((k===3||k===4)&&(k=p.stateNode.containerInfo,k===s||k.nodeType===8&&k.parentNode===s))return;p=p.return}for(;y!==null;){if(p=kn(y),p===null)return;if(k=p.tag,k===5||k===6){o=c=p;continue e}y=y.parentNode}}o=o.return}Xu(function(){var P=c,D=Cl(r),B=[];e:{var M=Wc.get(e);if(M!==void 0){var Y=Fl,K=e;switch(e){case"keypress":if(Uo(r)===0)break e;case"keydown":case"keyup":Y=Lm;break;case"focusin":K="focus",Y=Al;break;case"focusout":K="blur",Y=Al;break;case"beforeblur":case"afterblur":Y=Al;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Im;break;case Mc:case Dc:case Ac:Y=km;break;case Bc:Y=Om;break;case"scroll":Y=xm;break;case"wheel":Y=Mm;break;case"copy":case"cut":case"paste":Y=jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=wc}var X=(t&4)!==0,De=!X&&e==="scroll",E=X?M!==null?M+"Capture":null:M;X=[];for(var C=P,R;C!==null;){R=C;var H=R.stateNode;if(R.tag===5&&H!==null&&(R=H,E!==null&&(H=Cr(C,E),H!=null&&X.push(Wr(C,H,R)))),De)break;C=C.return}0<X.length&&(M=new Y(M,K,null,r,D),B.push({event:M,listeners:X}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",M&&r!==kl&&(K=r.relatedTarget||r.fromElement)&&(kn(K)||K[Dt]))break e;if((Y||M)&&(M=D.window===D?D:(M=D.ownerDocument)?M.defaultView||M.parentWindow:window,Y?(K=r.relatedTarget||r.toElement,Y=P,K=K?kn(K):null,K!==null&&(De=Sn(K),K!==De||K.tag!==5&&K.tag!==6)&&(K=null)):(Y=null,K=P),Y!==K)){if(X=yc,H="onMouseLeave",E="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(X=wc,H="onPointerLeave",E="onPointerEnter",C="pointer"),De=Y==null?M:qn(Y),R=K==null?M:qn(K),M=new X(H,C+"leave",Y,r,D),M.target=De,M.relatedTarget=R,H=null,kn(D)===P&&(X=new X(E,C+"enter",K,r,D),X.target=R,X.relatedTarget=De,H=X),De=H,Y&&K)t:{for(X=Y,E=K,C=0,R=X;R;R=Gn(R))C++;for(R=0,H=E;H;H=Gn(H))R++;for(;0<C-R;)X=Gn(X),C--;for(;0<R-C;)E=Gn(E),R--;for(;C--;){if(X===E||E!==null&&X===E.alternate)break t;X=Gn(X),E=Gn(E)}X=null}else X=null;Y!==null&&Gc(B,M,Y,X,!1),K!==null&&De!==null&&Gc(B,De,K,X,!0)}}e:{if(M=P?qn(P):window,Y=M.nodeName&&M.nodeName.toLowerCase(),Y==="select"||Y==="input"&&M.type==="file")var J=Vm;else if(bc(M))if(Rc)J=qm;else{J=Gm;var re=Qm}else(Y=M.nodeName)&&Y.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(J=Ym);if(J&&(J=J(e,P))){Ec(B,J,r,D);break e}re&&re(e,M,P),e==="focusout"&&(re=M._wrapperState)&&re.controlled&&M.type==="number"&&xl(M,"number",M.value)}switch(re=P?qn(P):window,e){case"focusin":(bc(re)||re.contentEditable==="true")&&(Vn=re,Ql=P,Dr=null);break;case"focusout":Dr=Ql=Vn=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Oc(B,r,D);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":Oc(B,r,D)}var oe;if(Wl)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Hn?jc(e,r)&&(se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(se="onCompositionStart");se&&(Sc&&r.locale!=="ko"&&(Hn||se!=="onCompositionStart"?se==="onCompositionEnd"&&Hn&&(oe=gc()):(Zt=D,Ol="value"in Zt?Zt.value:Zt.textContent,Hn=!0)),re=Ko(P,se),0<re.length&&(se=new vc(se,e,null,r,D),B.push({event:se,listeners:re}),oe?se.data=oe:(oe=$c(r),oe!==null&&(se.data=oe)))),(oe=Am?Bm(e,r):Wm(e,r))&&(P=Ko(P,"onBeforeInput"),0<P.length&&(D=new vc("onBeforeInput","beforeinput",null,r,D),B.push({event:D,listeners:P}),D.data=oe))}Vc(B,t)})}function Wr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ko(e,t){for(var r=t+"Capture",o=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Cr(e,r),c!=null&&o.unshift(Wr(e,c,s)),c=Cr(e,t),c!=null&&o.push(Wr(e,c,s))),e=e.return}return o}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gc(e,t,r,o,s){for(var c=t._reactName,p=[];r!==null&&r!==o;){var y=r,k=y.alternate,P=y.stateNode;if(k!==null&&k===o)break;y.tag===5&&P!==null&&(y=P,s?(k=Cr(r,c),k!=null&&p.unshift(Wr(r,k,y))):s||(k=Cr(r,c),k!=null&&p.push(Wr(r,k,y)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var ng=/\r\n?/g,rg=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(ng,`
`).replace(rg,"")}function Xo(e,t,r){if(t=Yc(t),Yc(e)!==t&&r)throw Error(l(425))}function Jo(){}var Zl=null,es=null;function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,og=typeof clearTimeout=="function"?clearTimeout:void 0,qc=typeof Promise=="function"?Promise:void 0,ig=typeof queueMicrotask=="function"?queueMicrotask:typeof qc<"u"?function(e){return qc.resolve(null).then(e).catch(lg)}:ns;function lg(e){setTimeout(function(){throw e})}function rs(e,t){var r=t,o=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(o===0){e.removeChild(s),_r(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=s}while(r);_r(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Yn,Ur="__reactProps$"+Yn,Dt="__reactContainer$"+Yn,os="__reactEvents$"+Yn,sg="__reactListeners$"+Yn,ag="__reactHandles$"+Yn;function kn(e){var t=e[Tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Dt]||r[Tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Kc(e);e!==null;){if(r=e[Tt])return r;e=Kc(e)}return t}e=r,r=e.parentNode}return null}function Hr(e){return e=e[Tt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Zo(e){return e[Ur]||null}var is=[],Kn=-1;function nn(e){return{current:e}}function Ee(e){0>Kn||(e.current=is[Kn],is[Kn]=null,Kn--)}function je(e,t){Kn++,is[Kn]=e.current,e.current=t}var rn={},Ke=nn(rn),rt=nn(!1),Cn=rn;function Xn(e,t){var r=e.type.contextTypes;if(!r)return rn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in r)s[c]=t[c];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ot(e){return e=e.childContextTypes,e!=null}function ei(){Ee(rt),Ee(Ke)}function Xc(e,t,r){if(Ke.current!==rn)throw Error(l(168));je(Ke,t),je(rt,r)}function Jc(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(l(108,me(e)||"Unknown",s));return Q({},r,o)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,Cn=Ke.current,je(Ke,e),je(rt,rt.current),!0}function Zc(e,t,r){var o=e.stateNode;if(!o)throw Error(l(169));r?(e=Jc(e,t,Cn),o.__reactInternalMemoizedMergedChildContext=e,Ee(rt),Ee(Ke),je(Ke,e)):Ee(rt),je(rt,r)}var At=null,ni=!1,ls=!1;function ed(e){At===null?At=[e]:At.push(e)}function ug(e){ni=!0,ed(e)}function on(){if(!ls&&At!==null){ls=!0;var e=0,t=Se;try{var r=At;for(Se=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}At=null,ni=!1}catch(s){throw At!==null&&(At=At.slice(e+1)),nc(Rl,on),s}finally{Se=t,ls=!1}}return null}var Jn=[],Zn=0,ri=null,oi=0,pt=[],ht=0,jn=null,Bt=1,Wt="";function $n(e,t){Jn[Zn++]=oi,Jn[Zn++]=ri,ri=e,oi=t}function td(e,t,r){pt[ht++]=Bt,pt[ht++]=Wt,pt[ht++]=jn,jn=e;var o=Bt;e=Wt;var s=32-St(o)-1;o&=~(1<<s),r+=1;var c=32-St(t)+s;if(30<c){var p=s-s%5;c=(o&(1<<p)-1).toString(32),o>>=p,s-=p,Bt=1<<32-St(t)+s|r<<s|o,Wt=c+e}else Bt=1<<c|r<<s|o,Wt=e}function ss(e){e.return!==null&&($n(e,1),td(e,1,0))}function as(e){for(;e===ri;)ri=Jn[--Zn],Jn[Zn]=null,oi=Jn[--Zn],Jn[Zn]=null;for(;e===jn;)jn=pt[--ht],pt[ht]=null,Wt=pt[--ht],pt[ht]=null,Bt=pt[--ht],pt[ht]=null}var ct=null,dt=null,Pe=!1,Ct=null;function nd(e,t){var r=yt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function rd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=jn!==null?{id:Bt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=yt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ct=e,dt=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(Pe){var t=dt;if(t){var r=t;if(!rd(e,t)){if(us(e))throw Error(l(418));t=tn(r.nextSibling);var o=ct;t&&rd(e,t)?nd(o,r):(e.flags=e.flags&-4097|2,Pe=!1,ct=e)}}else{if(us(e))throw Error(l(418));e.flags=e.flags&-4097|2,Pe=!1,ct=e}}}function od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function ii(e){if(e!==ct)return!1;if(!Pe)return od(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ts(e.type,e.memoizedProps)),t&&(t=dt)){if(us(e))throw id(),Error(l(418));for(;t;)nd(e,t),t=tn(t.nextSibling)}if(od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dt=tn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?tn(e.stateNode.nextSibling):null;return!0}function id(){for(var e=dt;e;)e=tn(e.nextSibling)}function er(){dt=ct=null,Pe=!1}function ds(e){Ct===null?Ct=[e]:Ct.push(e)}var cg=te.ReactCurrentBatchConfig;function Vr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var o=r.stateNode}if(!o)throw Error(l(147,e));var s=o,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var y=s.refs;p===null?delete y[c]:y[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function li(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ld(e){var t=e._init;return t(e._payload)}function sd(e){function t(E,C){if(e){var R=E.deletions;R===null?(E.deletions=[C],E.flags|=16):R.push(C)}}function r(E,C){if(!e)return null;for(;C!==null;)t(E,C),C=C.sibling;return null}function o(E,C){for(E=new Map;C!==null;)C.key!==null?E.set(C.key,C):E.set(C.index,C),C=C.sibling;return E}function s(E,C){return E=pn(E,C),E.index=0,E.sibling=null,E}function c(E,C,R){return E.index=R,e?(R=E.alternate,R!==null?(R=R.index,R<C?(E.flags|=2,C):R):(E.flags|=2,C)):(E.flags|=1048576,C)}function p(E){return e&&E.alternate===null&&(E.flags|=2),E}function y(E,C,R,H){return C===null||C.tag!==6?(C=na(R,E.mode,H),C.return=E,C):(C=s(C,R),C.return=E,C)}function k(E,C,R,H){var J=R.type;return J===U?D(E,C,R.props.children,H,R.key):C!==null&&(C.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Fe&&ld(J)===C.type)?(H=s(C,R.props),H.ref=Vr(E,C,R),H.return=E,H):(H=zi(R.type,R.key,R.props,null,E.mode,H),H.ref=Vr(E,C,R),H.return=E,H)}function P(E,C,R,H){return C===null||C.tag!==4||C.stateNode.containerInfo!==R.containerInfo||C.stateNode.implementation!==R.implementation?(C=ra(R,E.mode,H),C.return=E,C):(C=s(C,R.children||[]),C.return=E,C)}function D(E,C,R,H,J){return C===null||C.tag!==7?(C=Tn(R,E.mode,H,J),C.return=E,C):(C=s(C,R),C.return=E,C)}function B(E,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return C=na(""+C,E.mode,R),C.return=E,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case W:return R=zi(C.type,C.key,C.props,null,E.mode,R),R.ref=Vr(E,null,C),R.return=E,R;case A:return C=ra(C,E.mode,R),C.return=E,C;case Fe:var H=C._init;return B(E,H(C._payload),R)}if(wr(C)||ee(C))return C=Tn(C,E.mode,R,null),C.return=E,C;li(E,C)}return null}function M(E,C,R,H){var J=C!==null?C.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return J!==null?null:y(E,C,""+R,H);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case W:return R.key===J?k(E,C,R,H):null;case A:return R.key===J?P(E,C,R,H):null;case Fe:return J=R._init,M(E,C,J(R._payload),H)}if(wr(R)||ee(R))return J!==null?null:D(E,C,R,H,null);li(E,R)}return null}function Y(E,C,R,H,J){if(typeof H=="string"&&H!==""||typeof H=="number")return E=E.get(R)||null,y(C,E,""+H,J);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case W:return E=E.get(H.key===null?R:H.key)||null,k(C,E,H,J);case A:return E=E.get(H.key===null?R:H.key)||null,P(C,E,H,J);case Fe:var re=H._init;return Y(E,C,R,re(H._payload),J)}if(wr(H)||ee(H))return E=E.get(R)||null,D(C,E,H,J,null);li(C,H)}return null}function K(E,C,R,H){for(var J=null,re=null,oe=C,se=C=0,Ge=null;oe!==null&&se<R.length;se++){oe.index>se?(Ge=oe,oe=null):Ge=oe.sibling;var ye=M(E,oe,R[se],H);if(ye===null){oe===null&&(oe=Ge);break}e&&oe&&ye.alternate===null&&t(E,oe),C=c(ye,C,se),re===null?J=ye:re.sibling=ye,re=ye,oe=Ge}if(se===R.length)return r(E,oe),Pe&&$n(E,se),J;if(oe===null){for(;se<R.length;se++)oe=B(E,R[se],H),oe!==null&&(C=c(oe,C,se),re===null?J=oe:re.sibling=oe,re=oe);return Pe&&$n(E,se),J}for(oe=o(E,oe);se<R.length;se++)Ge=Y(oe,E,se,R[se],H),Ge!==null&&(e&&Ge.alternate!==null&&oe.delete(Ge.key===null?se:Ge.key),C=c(Ge,C,se),re===null?J=Ge:re.sibling=Ge,re=Ge);return e&&oe.forEach(function(hn){return t(E,hn)}),Pe&&$n(E,se),J}function X(E,C,R,H){var J=ee(R);if(typeof J!="function")throw Error(l(150));if(R=J.call(R),R==null)throw Error(l(151));for(var re=J=null,oe=C,se=C=0,Ge=null,ye=R.next();oe!==null&&!ye.done;se++,ye=R.next()){oe.index>se?(Ge=oe,oe=null):Ge=oe.sibling;var hn=M(E,oe,ye.value,H);if(hn===null){oe===null&&(oe=Ge);break}e&&oe&&hn.alternate===null&&t(E,oe),C=c(hn,C,se),re===null?J=hn:re.sibling=hn,re=hn,oe=Ge}if(ye.done)return r(E,oe),Pe&&$n(E,se),J;if(oe===null){for(;!ye.done;se++,ye=R.next())ye=B(E,ye.value,H),ye!==null&&(C=c(ye,C,se),re===null?J=ye:re.sibling=ye,re=ye);return Pe&&$n(E,se),J}for(oe=o(E,oe);!ye.done;se++,ye=R.next())ye=Y(oe,E,se,ye.value,H),ye!==null&&(e&&ye.alternate!==null&&oe.delete(ye.key===null?se:ye.key),C=c(ye,C,se),re===null?J=ye:re.sibling=ye,re=ye);return e&&oe.forEach(function(Ug){return t(E,Ug)}),Pe&&$n(E,se),J}function De(E,C,R,H){if(typeof R=="object"&&R!==null&&R.type===U&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case W:e:{for(var J=R.key,re=C;re!==null;){if(re.key===J){if(J=R.type,J===U){if(re.tag===7){r(E,re.sibling),C=s(re,R.props.children),C.return=E,E=C;break e}}else if(re.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===Fe&&ld(J)===re.type){r(E,re.sibling),C=s(re,R.props),C.ref=Vr(E,re,R),C.return=E,E=C;break e}r(E,re);break}else t(E,re);re=re.sibling}R.type===U?(C=Tn(R.props.children,E.mode,H,R.key),C.return=E,E=C):(H=zi(R.type,R.key,R.props,null,E.mode,H),H.ref=Vr(E,C,R),H.return=E,E=H)}return p(E);case A:e:{for(re=R.key;C!==null;){if(C.key===re)if(C.tag===4&&C.stateNode.containerInfo===R.containerInfo&&C.stateNode.implementation===R.implementation){r(E,C.sibling),C=s(C,R.children||[]),C.return=E,E=C;break e}else{r(E,C);break}else t(E,C);C=C.sibling}C=ra(R,E.mode,H),C.return=E,E=C}return p(E);case Fe:return re=R._init,De(E,C,re(R._payload),H)}if(wr(R))return K(E,C,R,H);if(ee(R))return X(E,C,R,H);li(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,C!==null&&C.tag===6?(r(E,C.sibling),C=s(C,R),C.return=E,E=C):(r(E,C),C=na(R,E.mode,H),C.return=E,E=C),p(E)):r(E,C)}return De}var tr=sd(!0),ad=sd(!1),si=nn(null),ai=null,nr=null,fs=null;function ps(){fs=nr=ai=null}function hs(e){var t=si.current;Ee(si),e._currentValue=t}function ms(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function rr(e,t){ai=e,fs=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(it=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(ai===null)throw Error(l(308));nr=e,ai.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var bn=null;function gs(e){bn===null?bn=[e]:bn.push(e)}function ud(e,t,r,o){var s=t.interleaved;return s===null?(r.next=r,gs(t)):(r.next=s.next,s.next=r),t.interleaved=r,Ut(e,o)}function Ut(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ln=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(xe&2)!==0){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,Ut(e,r)}return s=o.interleaved,s===null?(t.next=t,gs(o)):(t.next=s.next,s.next=t),o.interleaved=t,Ut(e,r)}function ui(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ll(e,r)}}function dd(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var s=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?s=c=p:c=c.next=p,r=r.next}while(r!==null);c===null?s=c=t:c=c.next=t}else s=c=t;r={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ci(e,t,r,o){var s=e.updateQueue;ln=!1;var c=s.firstBaseUpdate,p=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var k=y,P=k.next;k.next=null,p===null?c=P:p.next=P,p=k;var D=e.alternate;D!==null&&(D=D.updateQueue,y=D.lastBaseUpdate,y!==p&&(y===null?D.firstBaseUpdate=P:y.next=P,D.lastBaseUpdate=k))}if(c!==null){var B=s.baseState;p=0,D=P=k=null,y=c;do{var M=y.lane,Y=y.eventTime;if((o&M)===M){D!==null&&(D=D.next={eventTime:Y,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var K=e,X=y;switch(M=t,Y=r,X.tag){case 1:if(K=X.payload,typeof K=="function"){B=K.call(Y,B,M);break e}B=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=X.payload,M=typeof K=="function"?K.call(Y,B,M):K,M==null)break e;B=Q({},B,M);break e;case 2:ln=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,M=s.effects,M===null?s.effects=[y]:M.push(y))}else Y={eventTime:Y,lane:M,tag:y.tag,payload:y.payload,callback:y.callback,next:null},D===null?(P=D=Y,k=B):D=D.next=Y,p|=M;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;M=y,y=M.next,M.next=null,s.lastBaseUpdate=M,s.shared.pending=null}}while(!0);if(D===null&&(k=B),s.baseState=k,s.firstBaseUpdate=P,s.lastBaseUpdate=D,t=s.shared.interleaved,t!==null){s=t;do p|=s.lane,s=s.next;while(s!==t)}else c===null&&(s.shared.lanes=0);Pn|=p,e.lanes=p,e.memoizedState=B}}function fd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=r,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var Qr={},It=nn(Qr),Gr=nn(Qr),Yr=nn(Qr);function En(e){if(e===Qr)throw Error(l(174));return e}function ys(e,t){switch(je(Yr,t),je(Gr,e),je(It,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vl(t,e)}Ee(It),je(It,t)}function or(){Ee(It),Ee(Gr),Ee(Yr)}function pd(e){En(Yr.current);var t=En(It.current),r=vl(t,e.type);t!==r&&(je(Gr,e),je(It,r))}function vs(e){Gr.current===e&&(Ee(It),Ee(Gr))}var _e=nn(0);function di(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function Ss(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var fi=te.ReactCurrentDispatcher,ks=te.ReactCurrentBatchConfig,Rn=0,Te=null,We=null,Ve=null,pi=!1,qr=!1,Kr=0,dg=0;function Xe(){throw Error(l(321))}function Cs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function js(e,t,r,o,s,c){if(Rn=c,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?mg:gg,e=r(o,s),qr){c=0;do{if(qr=!1,Kr=0,25<=c)throw Error(l(301));c+=1,Ve=We=null,t.updateQueue=null,fi.current=xg,e=r(o,s)}while(qr)}if(fi.current=gi,t=We!==null&&We.next!==null,Rn=0,Ve=We=Te=null,pi=!1,t)throw Error(l(300));return e}function $s(){var e=Kr!==0;return Kr=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Te.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function gt(){if(We===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ve===null?Te.memoizedState:Ve.next;if(t!==null)Ve=t,We=e;else{if(e===null)throw Error(l(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ve===null?Te.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Xr(e,t){return typeof t=="function"?t(e):t}function bs(e){var t=gt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=We,s=o.baseQueue,c=r.pending;if(c!==null){if(s!==null){var p=s.next;s.next=c.next,c.next=p}o.baseQueue=s=c,r.pending=null}if(s!==null){c=s.next,o=o.baseState;var y=p=null,k=null,P=c;do{var D=P.lane;if((Rn&D)===D)k!==null&&(k=k.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),o=P.hasEagerState?P.eagerState:e(o,P.action);else{var B={lane:D,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};k===null?(y=k=B,p=o):k=k.next=B,Te.lanes|=D,Pn|=D}P=P.next}while(P!==null&&P!==c);k===null?p=o:k.next=y,kt(o,t.memoizedState)||(it=!0),t.memoizedState=o,t.baseState=p,t.baseQueue=k,r.lastRenderedState=o}if(e=r.interleaved,e!==null){s=e;do c=s.lane,Te.lanes|=c,Pn|=c,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Es(e){var t=gt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var o=r.dispatch,s=r.pending,c=t.memoizedState;if(s!==null){r.pending=null;var p=s=s.next;do c=e(c,p.action),p=p.next;while(p!==s);kt(c,t.memoizedState)||(it=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,o]}function hd(){}function md(e,t){var r=Te,o=gt(),s=t(),c=!kt(o.memoizedState,s);if(c&&(o.memoizedState=s,it=!0),o=o.queue,Rs(yd.bind(null,r,o,e),[e]),o.getSnapshot!==t||c||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Jr(9,xd.bind(null,r,o,s,t),void 0,null),Qe===null)throw Error(l(349));(Rn&30)!==0||gd(r,t,s)}return s}function gd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xd(e,t,r,o){t.value=r,t.getSnapshot=o,vd(t)&&wd(e)}function yd(e,t,r){return r(function(){vd(t)&&wd(e)})}function vd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function wd(e){var t=Ut(e,1);t!==null&&Et(t,e,1,-1)}function Sd(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=hg.bind(null,Te,e),[t.memoizedState,e]}function Jr(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function kd(){return gt().memoizedState}function hi(e,t,r,o){var s=Nt();Te.flags|=e,s.memoizedState=Jr(1|t,r,void 0,o===void 0?null:o)}function mi(e,t,r,o){var s=gt();o=o===void 0?null:o;var c=void 0;if(We!==null){var p=We.memoizedState;if(c=p.destroy,o!==null&&Cs(o,p.deps)){s.memoizedState=Jr(t,r,c,o);return}}Te.flags|=e,s.memoizedState=Jr(1|t,r,c,o)}function Cd(e,t){return hi(8390656,8,e,t)}function Rs(e,t){return mi(2048,8,e,t)}function jd(e,t){return mi(4,2,e,t)}function $d(e,t){return mi(4,4,e,t)}function bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,r){return r=r!=null?r.concat([e]):null,mi(4,4,bd.bind(null,t,e),r)}function Ps(){}function Rd(e,t){var r=gt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Cs(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Pd(e,t){var r=gt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Cs(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function zd(e,t,r){return(Rn&21)===0?(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=r):(kt(r,t)||(r=lc(),Te.lanes|=r,Pn|=r,e.baseState=!0),t)}function fg(e,t){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var o=ks.transition;ks.transition={};try{e(!1),t()}finally{Se=r,ks.transition=o}}function Ld(){return gt().memoizedState}function pg(e,t,r){var o=dn(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},_d(e))Td(t,r);else if(r=ud(e,t,r,o),r!==null){var s=nt();Et(r,e,o,s),Id(r,t,o)}}function hg(e,t,r){var o=dn(e),s={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(_d(e))Td(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,r);if(s.hasEagerState=!0,s.eagerState=y,kt(y,p)){var k=t.interleaved;k===null?(s.next=s,gs(t)):(s.next=k.next,k.next=s),t.interleaved=s;return}}catch{}finally{}r=ud(e,t,s,o),r!==null&&(s=nt(),Et(r,e,o,s),Id(r,t,o))}}function _d(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Td(e,t){qr=pi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Id(e,t,r){if((r&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Ll(e,r)}}var gi={readContext:mt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},mg={readContext:mt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Cd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,hi(4194308,4,bd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return hi(4,2,e,t)},useMemo:function(e,t){var r=Nt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Nt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=pg.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:Sd,useDebugValue:Ps,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=Sd(!1),t=e[0];return e=fg.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=Te,s=Nt();if(Pe){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Qe===null)throw Error(l(349));(Rn&30)!==0||gd(o,t,r)}s.memoizedState=r;var c={value:r,getSnapshot:t};return s.queue=c,Cd(yd.bind(null,o,c,e),[e]),o.flags|=2048,Jr(9,xd.bind(null,o,c,r,t),void 0,null),r},useId:function(){var e=Nt(),t=Qe.identifierPrefix;if(Pe){var r=Wt,o=Bt;r=(o&~(1<<32-St(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=Kr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=dg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gg={readContext:mt,useCallback:Rd,useContext:mt,useEffect:Rs,useImperativeHandle:Ed,useInsertionEffect:jd,useLayoutEffect:$d,useMemo:Pd,useReducer:bs,useRef:kd,useState:function(){return bs(Xr)},useDebugValue:Ps,useDeferredValue:function(e){var t=gt();return zd(t,We.memoizedState,e)},useTransition:function(){var e=bs(Xr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:md,useId:Ld,unstable_isNewReconciler:!1},xg={readContext:mt,useCallback:Rd,useContext:mt,useEffect:Rs,useImperativeHandle:Ed,useInsertionEffect:jd,useLayoutEffect:$d,useMemo:Pd,useReducer:Es,useRef:kd,useState:function(){return Es(Xr)},useDebugValue:Ps,useDeferredValue:function(e){var t=gt();return We===null?t.memoizedState=e:zd(t,We.memoizedState,e)},useTransition:function(){var e=Es(Xr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:md,useId:Ld,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function zs(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:Q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xi={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=nt(),s=dn(e),c=Ht(o,s);c.payload=t,r!=null&&(c.callback=r),t=sn(e,c,s),t!==null&&(Et(t,e,s,o),ui(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=nt(),s=dn(e),c=Ht(o,s);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=sn(e,c,s),t!==null&&(Et(t,e,s,o),ui(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=nt(),o=dn(e),s=Ht(r,o);s.tag=2,t!=null&&(s.callback=t),t=sn(e,s,o),t!==null&&(Et(t,e,o,r),ui(t,e,o))}};function Nd(e,t,r,o,s,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,c,p):t.prototype&&t.prototype.isPureReactComponent?!Mr(r,o)||!Mr(s,c):!0}function Od(e,t,r){var o=!1,s=rn,c=t.contextType;return typeof c=="object"&&c!==null?c=mt(c):(s=ot(t)?Cn:Ke.current,o=t.contextTypes,c=(o=o!=null)?Xn(e,s):rn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),t}function Fd(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&xi.enqueueReplaceState(t,t.state,null)}function Ls(e,t,r,o){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},xs(e);var c=t.contextType;typeof c=="object"&&c!==null?s.context=mt(c):(c=ot(t)?Cn:Ke.current,s.context=Xn(e,c)),s.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(zs(e,t,c,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&xi.enqueueReplaceState(s,s.state,null),ci(e,r,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var r="",o=t;do r+=le(o),o=o.return;while(o);var s=r}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:s,digest:null}}function _s(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var yg=typeof WeakMap=="function"?WeakMap:Map;function Md(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){ji||(ji=!0,Ys=o),Ts(e,t)},r}function Dd(e,t,r){r=Ht(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;r.payload=function(){return o(s)},r.callback=function(){Ts(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Ts(e,t),typeof o!="function"&&(un===null?un=new Set([this]):un.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function Ad(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new yg;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(r)||(s.add(r),e=_g.bind(null,e,t,r),t.then(e,e))}function Bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wd(e,t,r,o,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,sn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var vg=te.ReactCurrentOwner,it=!1;function tt(e,t,r,o){t.child=e===null?ad(t,null,r,o):tr(t,e.child,r,o)}function Ud(e,t,r,o,s){r=r.render;var c=t.ref;return rr(t,s),o=js(e,t,r,o,c,s),r=$s(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Vt(e,t,s)):(Pe&&r&&ss(t),t.flags|=1,tt(e,t,o,s),t.child)}function Hd(e,t,r,o,s){if(e===null){var c=r.type;return typeof c=="function"&&!ta(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Vd(e,t,c,o,s)):(e=zi(r.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&s)===0){var p=c.memoizedProps;if(r=r.compare,r=r!==null?r:Mr,r(p,o)&&e.ref===t.ref)return Vt(e,t,s)}return t.flags|=1,e=pn(c,o),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,r,o,s){if(e!==null){var c=e.memoizedProps;if(Mr(c,o)&&e.ref===t.ref)if(it=!1,t.pendingProps=o=c,(e.lanes&s)!==0)(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,Vt(e,t,s)}return Is(e,t,r,o,s)}function Qd(e,t,r){var o=t.pendingProps,s=o.children,c=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(sr,ft),ft|=r;else{if((r&1073741824)===0)return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(sr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=c!==null?c.baseLanes:r,je(sr,ft),ft|=o}else c!==null?(o=c.baseLanes|r,t.memoizedState=null):o=r,je(sr,ft),ft|=o;return tt(e,t,s,r),t.child}function Gd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Is(e,t,r,o,s){var c=ot(r)?Cn:Ke.current;return c=Xn(t,c),rr(t,s),r=js(e,t,r,o,c,s),o=$s(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Vt(e,t,s)):(Pe&&o&&ss(t),t.flags|=1,tt(e,t,r,s),t.child)}function Yd(e,t,r,o,s){if(ot(r)){var c=!0;ti(t)}else c=!1;if(rr(t,s),t.stateNode===null)vi(e,t),Od(t,r,o),Ls(t,r,o,s),o=!0;else if(e===null){var p=t.stateNode,y=t.memoizedProps;p.props=y;var k=p.context,P=r.contextType;typeof P=="object"&&P!==null?P=mt(P):(P=ot(r)?Cn:Ke.current,P=Xn(t,P));var D=r.getDerivedStateFromProps,B=typeof D=="function"||typeof p.getSnapshotBeforeUpdate=="function";B||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==o||k!==P)&&Fd(t,p,o,P),ln=!1;var M=t.memoizedState;p.state=M,ci(t,o,p,s),k=t.memoizedState,y!==o||M!==k||rt.current||ln?(typeof D=="function"&&(zs(t,r,D,o),k=t.memoizedState),(y=ln||Nd(t,r,y,o,M,k,P))?(B||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=k),p.props=o,p.state=k,p.context=P,o=y):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{p=t.stateNode,cd(e,t),y=t.memoizedProps,P=t.type===t.elementType?y:jt(t.type,y),p.props=P,B=t.pendingProps,M=p.context,k=r.contextType,typeof k=="object"&&k!==null?k=mt(k):(k=ot(r)?Cn:Ke.current,k=Xn(t,k));var Y=r.getDerivedStateFromProps;(D=typeof Y=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==B||M!==k)&&Fd(t,p,o,k),ln=!1,M=t.memoizedState,p.state=M,ci(t,o,p,s);var K=t.memoizedState;y!==B||M!==K||rt.current||ln?(typeof Y=="function"&&(zs(t,r,Y,o),K=t.memoizedState),(P=ln||Nd(t,r,P,o,M,K,k)||!1)?(D||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(o,K,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(o,K,k)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=K),p.props=o,p.state=K,p.context=k,o=P):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),o=!1)}return Ns(e,t,r,o,c,s)}function Ns(e,t,r,o,s,c){Gd(e,t);var p=(t.flags&128)!==0;if(!o&&!p)return s&&Zc(t,r,!1),Vt(e,t,c);o=t.stateNode,vg.current=t;var y=p&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&p?(t.child=tr(t,e.child,null,c),t.child=tr(t,null,y,c)):tt(e,t,y,c),t.memoizedState=o.state,s&&Zc(t,r,!0),t.child}function qd(e){var t=e.stateNode;t.pendingContext?Xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xc(e,t.context,!1),ys(e,t.containerInfo)}function Kd(e,t,r,o,s){return er(),ds(s),t.flags|=256,tt(e,t,r,o),t.child}var Os={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,r){var o=t.pendingProps,s=_e.current,c=!1,p=(t.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(s&2)!==0),y?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),je(_e,s&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(p=o.children,e=o.fallback,c?(o=t.mode,c=t.child,p={mode:"hidden",children:p},(o&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=p):c=Li(p,o,0,null),e=Tn(e,o,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Fs(r),t.memoizedState=Os,e):Ms(t,p));if(s=e.memoizedState,s!==null&&(y=s.dehydrated,y!==null))return wg(e,t,p,o,y,s,r);if(c){c=o.fallback,p=t.mode,s=e.child,y=s.sibling;var k={mode:"hidden",children:o.children};return(p&1)===0&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=k,t.deletions=null):(o=pn(s,k),o.subtreeFlags=s.subtreeFlags&14680064),y!==null?c=pn(y,c):(c=Tn(c,p,r,null),c.flags|=2),c.return=t,o.return=t,o.sibling=c,t.child=o,o=c,c=t.child,p=e.child.memoizedState,p=p===null?Fs(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~r,t.memoizedState=Os,o}return c=e.child,e=c.sibling,o=pn(c,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function Ms(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,r,o){return o!==null&&ds(o),tr(t,e.child,null,r),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wg(e,t,r,o,s,c,p){if(r)return t.flags&256?(t.flags&=-257,o=_s(Error(l(422))),yi(e,t,p,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=o.fallback,s=t.mode,o=Li({mode:"visible",children:o.children},s,0,null),c=Tn(c,s,p,null),c.flags|=2,o.return=t,c.return=t,o.sibling=c,t.child=o,(t.mode&1)!==0&&tr(t,e.child,null,p),t.child.memoizedState=Fs(p),t.memoizedState=Os,c);if((t.mode&1)===0)return yi(e,t,p,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var y=o.dgst;return o=y,c=Error(l(419)),o=_s(c,o,void 0),yi(e,t,p,o)}if(y=(p&e.childLanes)!==0,it||y){if(o=Qe,o!==null){switch(p&-p){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|p))!==0?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,Ut(e,s),Et(o,e,s,-1))}return ea(),o=_s(Error(l(421))),yi(e,t,p,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Tg.bind(null,e),s._reactRetry=t,null):(e=c.treeContext,dt=tn(s.nextSibling),ct=t,Pe=!0,Ct=null,e!==null&&(pt[ht++]=Bt,pt[ht++]=Wt,pt[ht++]=jn,Bt=e.id,Wt=e.overflow,jn=t),t=Ms(t,o.children),t.flags|=4096,t)}function Jd(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),ms(e.return,t,r)}function Ds(e,t,r,o,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=o,c.tail=r,c.tailMode=s)}function Zd(e,t,r){var o=t.pendingProps,s=o.revealOrder,c=o.tail;if(tt(e,t,o.children,r),o=_e.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,r,t);else if(e.tag===19)Jd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(je(_e,o),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&di(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Ds(t,!1,s,r,c);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&di(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Ds(t,!0,r,null,c);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=pn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Sg(e,t,r){switch(t.tag){case 3:qd(t),er();break;case 5:pd(t);break;case 1:ot(t.type)&&ti(t);break;case 4:ys(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;je(si,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(je(_e,_e.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Xd(e,t,r):(je(_e,_e.current&1),e=Vt(e,t,r),e!==null?e.sibling:null);je(_e,_e.current&1);break;case 19:if(o=(r&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Zd(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),je(_e,_e.current),o)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,r)}return Vt(e,t,r)}var ef,As,tf,nf;ef=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},As=function(){},tf=function(e,t,r,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,En(It.current);var c=null;switch(r){case"input":s=ml(e,s),o=ml(e,o),c=[];break;case"select":s=Q({},s,{value:void 0}),o=Q({},o,{value:void 0}),c=[];break;case"textarea":s=yl(e,s),o=yl(e,o),c=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Jo)}wl(r,o);var p;r=null;for(P in s)if(!o.hasOwnProperty(P)&&s.hasOwnProperty(P)&&s[P]!=null)if(P==="style"){var y=s[P];for(p in y)y.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(a.hasOwnProperty(P)?c||(c=[]):(c=c||[]).push(P,null));for(P in o){var k=o[P];if(y=s!=null?s[P]:void 0,o.hasOwnProperty(P)&&k!==y&&(k!=null||y!=null))if(P==="style")if(y){for(p in y)!y.hasOwnProperty(p)||k&&k.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in k)k.hasOwnProperty(p)&&y[p]!==k[p]&&(r||(r={}),r[p]=k[p])}else r||(c||(c=[]),c.push(P,r)),r=k;else P==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,y=y?y.__html:void 0,k!=null&&y!==k&&(c=c||[]).push(P,k)):P==="children"?typeof k!="string"&&typeof k!="number"||(c=c||[]).push(P,""+k):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(a.hasOwnProperty(P)?(k!=null&&P==="onScroll"&&be("scroll",e),c||y===k||(c=[])):(c=c||[]).push(P,k))}r&&(c=c||[]).push("style",r);var P=c;(t.updateQueue=P)&&(t.flags|=4)}},nf=function(e,t,r,o){r!==o&&(t.flags|=4)};function Zr(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function kg(e,t,r){var o=t.pendingProps;switch(as(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return ot(t.type)&&ei(),Je(t),null;case 3:return o=t.stateNode,or(),Ee(rt),Ee(Ke),Ss(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Xs(Ct),Ct=null))),As(e,t),Je(t),null;case 5:vs(t);var s=En(Yr.current);if(r=t.type,e!==null&&t.stateNode!=null)tf(e,t,r,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Je(t),null}if(e=En(It.current),ii(t)){o=t.stateNode,r=t.type;var c=t.memoizedProps;switch(o[Tt]=t,o[Ur]=c,e=(t.mode&1)!==0,r){case"dialog":be("cancel",o),be("close",o);break;case"iframe":case"object":case"embed":be("load",o);break;case"video":case"audio":for(s=0;s<Ar.length;s++)be(Ar[s],o);break;case"source":be("error",o);break;case"img":case"image":case"link":be("error",o),be("load",o);break;case"details":be("toggle",o);break;case"input":Ou(o,c),be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!c.multiple},be("invalid",o);break;case"textarea":Du(o,c),be("invalid",o)}wl(r,c),s=null;for(var p in c)if(c.hasOwnProperty(p)){var y=c[p];p==="children"?typeof y=="string"?o.textContent!==y&&(c.suppressHydrationWarning!==!0&&Xo(o.textContent,y,e),s=["children",y]):typeof y=="number"&&o.textContent!==""+y&&(c.suppressHydrationWarning!==!0&&Xo(o.textContent,y,e),s=["children",""+y]):a.hasOwnProperty(p)&&y!=null&&p==="onScroll"&&be("scroll",o)}switch(r){case"input":Ro(o),Mu(o,c,!0);break;case"textarea":Ro(o),Bu(o);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(o.onclick=Jo)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{p=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=p.createElement(r,{is:o.is}):(e=p.createElement(r),r==="select"&&(p=e,o.multiple?p.multiple=!0:o.size&&(p.size=o.size))):e=p.createElementNS(e,r),e[Tt]=t,e[Ur]=o,ef(e,t,!1,!1),t.stateNode=e;e:{switch(p=Sl(r,o),r){case"dialog":be("cancel",e),be("close",e),s=o;break;case"iframe":case"object":case"embed":be("load",e),s=o;break;case"video":case"audio":for(s=0;s<Ar.length;s++)be(Ar[s],e);s=o;break;case"source":be("error",e),s=o;break;case"img":case"image":case"link":be("error",e),be("load",e),s=o;break;case"details":be("toggle",e),s=o;break;case"input":Ou(e,o),s=ml(e,o),be("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Q({},o,{value:void 0}),be("invalid",e);break;case"textarea":Du(e,o),s=yl(e,o),be("invalid",e);break;default:s=o}wl(r,s),y=s;for(c in y)if(y.hasOwnProperty(c)){var k=y[c];c==="style"?Vu(e,k):c==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Uu(e,k)):c==="children"?typeof k=="string"?(r!=="textarea"||k!=="")&&Sr(e,k):typeof k=="number"&&Sr(e,""+k):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(a.hasOwnProperty(c)?k!=null&&c==="onScroll"&&be("scroll",e):k!=null&&V(e,c,k,p))}switch(r){case"input":Ro(e),Mu(e,o,!1);break;case"textarea":Ro(e),Bu(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ge(o.value));break;case"select":e.multiple=!!o.multiple,c=o.value,c!=null?Dn(e,!!o.multiple,c,!1):o.defaultValue!=null&&Dn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Jo)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)nf(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(r=En(Yr.current),En(It.current),ii(t)){if(o=t.stateNode,r=t.memoizedProps,o[Tt]=t,(c=o.nodeValue!==r)&&(e=ct,e!==null))switch(e.tag){case 3:Xo(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(o.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Tt]=t,t.stateNode=o}return Je(t),null;case 13:if(Ee(_e),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)id(),er(),t.flags|=98560,c=!1;else if(c=ii(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[Tt]=t}else er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),c=!1}else Ct!==null&&(Xs(Ct),Ct=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(_e.current&1)!==0?Ue===0&&(Ue=3):ea())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return or(),As(e,t),e===null&&Br(t.stateNode.containerInfo),Je(t),null;case 10:return hs(t.type._context),Je(t),null;case 17:return ot(t.type)&&ei(),Je(t),null;case 19:if(Ee(_e),c=t.memoizedState,c===null)return Je(t),null;if(o=(t.flags&128)!==0,p=c.rendering,p===null)if(o)Zr(c,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(p=di(e),p!==null){for(t.flags|=128,Zr(c,!1),o=p.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)c=r,e=o,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return je(_e,_e.current&1|2),t.child}e=e.sibling}c.tail!==null&&Me()>ar&&(t.flags|=128,o=!0,Zr(c,!1),t.lanes=4194304)}else{if(!o)if(e=di(p),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Zr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Pe)return Je(t),null}else 2*Me()-c.renderingStartTime>ar&&r!==1073741824&&(t.flags|=128,o=!0,Zr(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(r=c.last,r!==null?r.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Me(),t.sibling=null,r=_e.current,je(_e,o?r&1|2:r&1),t):(Je(t),null);case 22:case 23:return Zs(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Cg(e,t){switch(as(t),t.tag){case 1:return ot(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),Ee(rt),Ee(Ke),Ss(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return vs(t),null;case 13:if(Ee(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(_e),null;case 4:return or(),null;case 10:return hs(t.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var wi=!1,Ze=!1,jg=typeof WeakSet=="function"?WeakSet:Set,q=null;function lr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Oe(e,t,o)}else r.current=null}function Bs(e,t,r){try{r()}catch(o){Oe(e,t,o)}}var rf=!1;function $g(e,t){if(Zl=Ao,e=Nc(),Vl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var s=o.anchorOffset,c=o.focusNode;o=o.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var p=0,y=-1,k=-1,P=0,D=0,B=e,M=null;t:for(;;){for(var Y;B!==r||s!==0&&B.nodeType!==3||(y=p+s),B!==c||o!==0&&B.nodeType!==3||(k=p+o),B.nodeType===3&&(p+=B.nodeValue.length),(Y=B.firstChild)!==null;)M=B,B=Y;for(;;){if(B===e)break t;if(M===r&&++P===s&&(y=p),M===c&&++D===o&&(k=p),(Y=B.nextSibling)!==null)break;B=M,M=B.parentNode}B=Y}r=y===-1||k===-1?null:{start:y,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(es={focusedElem:e,selectionRange:r},Ao=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var K=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var X=K.memoizedProps,De=K.memoizedState,E=t.stateNode,C=E.getSnapshotBeforeUpdate(t.elementType===t.type?X:jt(t.type,X),De);E.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var R=t.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(H){Oe(t,t.return,H)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return K=rf,rf=!1,K}function eo(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&Bs(t,r,c)}s=s.next}while(s!==o)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function Ws(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function of(e){var t=e.alternate;t!==null&&(e.alternate=null,of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Ur],delete t[os],delete t[sg],delete t[ag])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Jo));else if(o!==4&&(e=e.child,e!==null))for(Us(e,t,r),e=e.sibling;e!==null;)Us(e,t,r),e=e.sibling}function Hs(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Hs(e,t,r),e=e.sibling;e!==null;)Hs(e,t,r),e=e.sibling}var Ye=null,$t=!1;function an(e,t,r){for(r=r.child;r!==null;)af(e,t,r),r=r.sibling}function af(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Io,r)}catch{}switch(r.tag){case 5:Ze||lr(r,t);case 6:var o=Ye,s=$t;Ye=null,an(e,t,r),Ye=o,$t=s,Ye!==null&&($t?(e=Ye,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ye.removeChild(r.stateNode));break;case 18:Ye!==null&&($t?(e=Ye,r=r.stateNode,e.nodeType===8?rs(e.parentNode,r):e.nodeType===1&&rs(e,r),_r(e)):rs(Ye,r.stateNode));break;case 4:o=Ye,s=$t,Ye=r.stateNode.containerInfo,$t=!0,an(e,t,r),Ye=o,$t=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var c=s,p=c.destroy;c=c.tag,p!==void 0&&((c&2)!==0||(c&4)!==0)&&Bs(r,t,p),s=s.next}while(s!==o)}an(e,t,r);break;case 1:if(!Ze&&(lr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(y){Oe(r,t,y)}an(e,t,r);break;case 21:an(e,t,r);break;case 22:r.mode&1?(Ze=(o=Ze)||r.memoizedState!==null,an(e,t,r),Ze=o):an(e,t,r);break;default:an(e,t,r)}}function uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new jg),t.forEach(function(o){var s=Ig.bind(null,e,o);r.has(o)||(r.add(o),o.then(s,s))})}}function bt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var s=r[o];try{var c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 5:Ye=y.stateNode,$t=!1;break e;case 3:Ye=y.stateNode.containerInfo,$t=!0;break e;case 4:Ye=y.stateNode.containerInfo,$t=!0;break e}y=y.return}if(Ye===null)throw Error(l(160));af(c,p,s),Ye=null,$t=!1;var k=s.alternate;k!==null&&(k.return=null),s.return=null}catch(P){Oe(s,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cf(t,e),t=t.sibling}function cf(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Ot(e),o&4){try{eo(3,e,e.return),Si(3,e)}catch(X){Oe(e,e.return,X)}try{eo(5,e,e.return)}catch(X){Oe(e,e.return,X)}}break;case 1:bt(t,e),Ot(e),o&512&&r!==null&&lr(r,r.return);break;case 5:if(bt(t,e),Ot(e),o&512&&r!==null&&lr(r,r.return),e.flags&32){var s=e.stateNode;try{Sr(s,"")}catch(X){Oe(e,e.return,X)}}if(o&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,p=r!==null?r.memoizedProps:c,y=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{y==="input"&&c.type==="radio"&&c.name!=null&&Fu(s,c),Sl(y,p);var P=Sl(y,c);for(p=0;p<k.length;p+=2){var D=k[p],B=k[p+1];D==="style"?Vu(s,B):D==="dangerouslySetInnerHTML"?Uu(s,B):D==="children"?Sr(s,B):V(s,D,B,P)}switch(y){case"input":gl(s,c);break;case"textarea":Au(s,c);break;case"select":var M=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var Y=c.value;Y!=null?Dn(s,!!c.multiple,Y,!1):M!==!!c.multiple&&(c.defaultValue!=null?Dn(s,!!c.multiple,c.defaultValue,!0):Dn(s,!!c.multiple,c.multiple?[]:"",!1))}s[Ur]=c}catch(X){Oe(e,e.return,X)}}break;case 6:if(bt(t,e),Ot(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(X){Oe(e,e.return,X)}}break;case 3:if(bt(t,e),Ot(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(X){Oe(e,e.return,X)}break;case 4:bt(t,e),Ot(e);break;case 13:bt(t,e),Ot(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(Gs=Me())),o&4&&uf(e);break;case 22:if(D=r!==null&&r.memoizedState!==null,e.mode&1?(Ze=(P=Ze)||D,bt(t,e),Ze=P):bt(t,e),Ot(e),o&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!D&&(e.mode&1)!==0)for(q=e,D=e.child;D!==null;){for(B=q=D;q!==null;){switch(M=q,Y=M.child,M.tag){case 0:case 11:case 14:case 15:eo(4,M,M.return);break;case 1:lr(M,M.return);var K=M.stateNode;if(typeof K.componentWillUnmount=="function"){o=M,r=M.return;try{t=o,K.props=t.memoizedProps,K.state=t.memoizedState,K.componentWillUnmount()}catch(X){Oe(o,r,X)}}break;case 5:lr(M,M.return);break;case 22:if(M.memoizedState!==null){pf(B);continue}}Y!==null?(Y.return=M,q=Y):pf(B)}D=D.sibling}e:for(D=null,B=e;;){if(B.tag===5){if(D===null){D=B;try{s=B.stateNode,P?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(y=B.stateNode,k=B.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null,y.style.display=Hu("display",p))}catch(X){Oe(e,e.return,X)}}}else if(B.tag===6){if(D===null)try{B.stateNode.nodeValue=P?"":B.memoizedProps}catch(X){Oe(e,e.return,X)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;D===B&&(D=null),B=B.return}D===B&&(D=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:bt(t,e),Ot(e),o&4&&uf(e);break;case 21:break;default:bt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(lf(r)){var o=r;break e}r=r.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Sr(s,""),o.flags&=-33);var c=sf(e);Hs(e,c,s);break;case 3:case 4:var p=o.stateNode.containerInfo,y=sf(e);Us(e,y,p);break;default:throw Error(l(161))}}catch(k){Oe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bg(e,t,r){q=e,df(e)}function df(e,t,r){for(var o=(e.mode&1)!==0;q!==null;){var s=q,c=s.child;if(s.tag===22&&o){var p=s.memoizedState!==null||wi;if(!p){var y=s.alternate,k=y!==null&&y.memoizedState!==null||Ze;y=wi;var P=Ze;if(wi=p,(Ze=k)&&!P)for(q=s;q!==null;)p=q,k=p.child,p.tag===22&&p.memoizedState!==null?hf(s):k!==null?(k.return=p,q=k):hf(s);for(;c!==null;)q=c,df(c),c=c.sibling;q=s,wi=y,Ze=P}ff(e)}else(s.subtreeFlags&8772)!==0&&c!==null?(c.return=s,q=c):ff(e)}}function ff(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ze||Si(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ze)if(r===null)o.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:jt(t.type,r.memoizedProps);o.componentDidUpdate(s,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&fd(t,c,o);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}fd(t,p,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&r.focus();break;case"img":k.src&&(r.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var D=P.memoizedState;if(D!==null){var B=D.dehydrated;B!==null&&_r(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ze||t.flags&512&&Ws(t)}catch(M){Oe(t,t.return,M)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function pf(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function hf(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Si(4,t)}catch(k){Oe(t,r,k)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(k){Oe(t,s,k)}}var c=t.return;try{Ws(t)}catch(k){Oe(t,c,k)}break;case 5:var p=t.return;try{Ws(t)}catch(k){Oe(t,p,k)}}}catch(k){Oe(t,t.return,k)}if(t===e){q=null;break}var y=t.sibling;if(y!==null){y.return=t.return,q=y;break}q=t.return}}var Eg=Math.ceil,ki=te.ReactCurrentDispatcher,Vs=te.ReactCurrentOwner,xt=te.ReactCurrentBatchConfig,xe=0,Qe=null,Ae=null,qe=0,ft=0,sr=nn(0),Ue=0,to=null,Pn=0,Ci=0,Qs=0,no=null,lt=null,Gs=0,ar=1/0,Qt=null,ji=!1,Ys=null,un=null,$i=!1,cn=null,bi=0,ro=0,qs=null,Ei=-1,Ri=0;function nt(){return(xe&6)!==0?Me():Ei!==-1?Ei:Ei=Me()}function dn(e){return(e.mode&1)===0?1:(xe&2)!==0&&qe!==0?qe&-qe:cg.transition!==null?(Ri===0&&(Ri=lc()),Ri):(e=Se,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e)}function Et(e,t,r,o){if(50<ro)throw ro=0,qs=null,Error(l(185));Er(e,r,o),((xe&2)===0||e!==Qe)&&(e===Qe&&((xe&2)===0&&(Ci|=r),Ue===4&&fn(e,qe)),st(e,o),r===1&&xe===0&&(t.mode&1)===0&&(ar=Me()+500,ni&&on()))}function st(e,t){var r=e.callbackNode;cm(e,t);var o=Fo(e,e===Qe?qe:0);if(o===0)r!==null&&rc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&rc(r),t===1)e.tag===0?ug(gf.bind(null,e)):ed(gf.bind(null,e)),ig(function(){(xe&6)===0&&on()}),r=null;else{switch(sc(o)){case 1:r=Rl;break;case 4:r=oc;break;case 16:r=To;break;case 536870912:r=ic;break;default:r=To}r=jf(r,mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function mf(e,t){if(Ei=-1,Ri=0,(xe&6)!==0)throw Error(l(327));var r=e.callbackNode;if(ur()&&e.callbackNode!==r)return null;var o=Fo(e,e===Qe?qe:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=Pi(e,o);else{t=o;var s=xe;xe|=2;var c=yf();(Qe!==e||qe!==t)&&(Qt=null,ar=Me()+500,Ln(e,t));do try{zg();break}catch(y){xf(e,y)}while(!0);ps(),ki.current=c,xe=s,Ae!==null?t=0:(Qe=null,qe=0,t=Ue)}if(t!==0){if(t===2&&(s=Pl(e),s!==0&&(o=s,t=Ks(e,s))),t===1)throw r=to,Ln(e,0),fn(e,o),st(e,Me()),r;if(t===6)fn(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Rg(s)&&(t=Pi(e,o),t===2&&(c=Pl(e),c!==0&&(o=c,t=Ks(e,c))),t===1))throw r=to,Ln(e,0),fn(e,o),st(e,Me()),r;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(l(345));case 2:_n(e,lt,Qt);break;case 3:if(fn(e,o),(o&130023424)===o&&(t=Gs+500-Me(),10<t)){if(Fo(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){nt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ns(_n.bind(null,e,lt,Qt),t);break}_n(e,lt,Qt);break;case 4:if(fn(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var p=31-St(o);c=1<<p,p=t[p],p>s&&(s=p),o&=~c}if(o=s,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Eg(o/1960))-o,10<o){e.timeoutHandle=ns(_n.bind(null,e,lt,Qt),o);break}_n(e,lt,Qt);break;case 5:_n(e,lt,Qt);break;default:throw Error(l(329))}}}return st(e,Me()),e.callbackNode===r?mf.bind(null,e):null}function Ks(e,t){var r=no;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=Pi(e,t),e!==2&&(t=lt,lt=r,t!==null&&Xs(t)),e}function Xs(e){lt===null?lt=e:lt.push.apply(lt,e)}function Rg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var s=r[o],c=s.getSnapshot;s=s.value;try{if(!kt(c(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Qs,t&=~Ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-St(t),o=1<<r;e[r]=-1,t&=~o}}function gf(e){if((xe&6)!==0)throw Error(l(327));ur();var t=Fo(e,0);if((t&1)===0)return st(e,Me()),null;var r=Pi(e,t);if(e.tag!==0&&r===2){var o=Pl(e);o!==0&&(t=o,r=Ks(e,o))}if(r===1)throw r=to,Ln(e,0),fn(e,t),st(e,Me()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,lt,Qt),st(e,Me()),null}function Js(e,t){var r=xe;xe|=1;try{return e(t)}finally{xe=r,xe===0&&(ar=Me()+500,ni&&on())}}function zn(e){cn!==null&&cn.tag===0&&(xe&6)===0&&ur();var t=xe;xe|=1;var r=xt.transition,o=Se;try{if(xt.transition=null,Se=1,e)return e()}finally{Se=o,xt.transition=r,xe=t,(xe&6)===0&&on()}}function Zs(){ft=sr.current,Ee(sr)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,og(r)),Ae!==null)for(r=Ae.return;r!==null;){var o=r;switch(as(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ei();break;case 3:or(),Ee(rt),Ee(Ke),Ss();break;case 5:vs(o);break;case 4:or();break;case 13:Ee(_e);break;case 19:Ee(_e);break;case 10:hs(o.type._context);break;case 22:case 23:Zs()}r=r.return}if(Qe=e,Ae=e=pn(e.current,null),qe=ft=t,Ue=0,to=null,Qs=Ci=Pn=0,lt=no=null,bn!==null){for(t=0;t<bn.length;t++)if(r=bn[t],o=r.interleaved,o!==null){r.interleaved=null;var s=o.next,c=r.pending;if(c!==null){var p=c.next;c.next=s,o.next=p}r.pending=o}bn=null}return e}function xf(e,t){do{var r=Ae;try{if(ps(),fi.current=gi,pi){for(var o=Te.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}pi=!1}if(Rn=0,Ve=We=Te=null,qr=!1,Kr=0,Vs.current=null,r===null||r.return===null){Ue=1,to=t,Ae=null;break}e:{var c=e,p=r.return,y=r,k=t;if(t=qe,y.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var P=k,D=y,B=D.tag;if((D.mode&1)===0&&(B===0||B===11||B===15)){var M=D.alternate;M?(D.updateQueue=M.updateQueue,D.memoizedState=M.memoizedState,D.lanes=M.lanes):(D.updateQueue=null,D.memoizedState=null)}var Y=Bd(p);if(Y!==null){Y.flags&=-257,Wd(Y,p,y,c,t),Y.mode&1&&Ad(c,P,t),t=Y,k=P;var K=t.updateQueue;if(K===null){var X=new Set;X.add(k),t.updateQueue=X}else K.add(k);break e}else{if((t&1)===0){Ad(c,P,t),ea();break e}k=Error(l(426))}}else if(Pe&&y.mode&1){var De=Bd(p);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),Wd(De,p,y,c,t),ds(ir(k,y));break e}}c=k=ir(k,y),Ue!==4&&(Ue=2),no===null?no=[c]:no.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var E=Md(c,k,t);dd(c,E);break e;case 1:y=k;var C=c.type,R=c.stateNode;if((c.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(un===null||!un.has(R)))){c.flags|=65536,t&=-t,c.lanes|=t;var H=Dd(c,y,t);dd(c,H);break e}}c=c.return}while(c!==null)}wf(r)}catch(J){t=J,Ae===r&&r!==null&&(Ae=r=r.return);continue}break}while(!0)}function yf(){var e=ki.current;return ki.current=gi,e===null?gi:e}function ea(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Qe===null||(Pn&268435455)===0&&(Ci&268435455)===0||fn(Qe,qe)}function Pi(e,t){var r=xe;xe|=2;var o=yf();(Qe!==e||qe!==t)&&(Qt=null,Ln(e,t));do try{Pg();break}catch(s){xf(e,s)}while(!0);if(ps(),xe=r,ki.current=o,Ae!==null)throw Error(l(261));return Qe=null,qe=0,Ue}function Pg(){for(;Ae!==null;)vf(Ae)}function zg(){for(;Ae!==null&&!tm();)vf(Ae)}function vf(e){var t=Cf(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?wf(e):Ae=t,Vs.current=null}function wf(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=kg(r,t,ft),r!==null){Ae=r;return}}else{if(r=Cg(r,t),r!==null){r.flags&=32767,Ae=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ae=null;return}}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ue===0&&(Ue=5)}function _n(e,t,r){var o=Se,s=xt.transition;try{xt.transition=null,Se=1,Lg(e,t,r,o)}finally{xt.transition=s,Se=o}return null}function Lg(e,t,r,o){do ur();while(cn!==null);if((xe&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(dm(e,c),e===Qe&&(Ae=Qe=null,qe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||$i||($i=!0,jf(To,function(){return ur(),null})),c=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||c){c=xt.transition,xt.transition=null;var p=Se;Se=1;var y=xe;xe|=4,Vs.current=null,$g(e,r),cf(r,e),Xm(es),Ao=!!Zl,es=Zl=null,e.current=r,bg(r),nm(),xe=y,Se=p,xt.transition=c}else e.current=r;if($i&&($i=!1,cn=e,bi=s),c=e.pendingLanes,c===0&&(un=null),im(r.stateNode),st(e,Me()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],o(s.value,{componentStack:s.stack,digest:s.digest});if(ji)throw ji=!1,e=Ys,Ys=null,e;return(bi&1)!==0&&e.tag!==0&&ur(),c=e.pendingLanes,(c&1)!==0?e===qs?ro++:(ro=0,qs=e):ro=0,on(),null}function ur(){if(cn!==null){var e=sc(bi),t=xt.transition,r=Se;try{if(xt.transition=null,Se=16>e?16:e,cn===null)var o=!1;else{if(e=cn,cn=null,bi=0,(xe&6)!==0)throw Error(l(331));var s=xe;for(xe|=4,q=e.current;q!==null;){var c=q,p=c.child;if((q.flags&16)!==0){var y=c.deletions;if(y!==null){for(var k=0;k<y.length;k++){var P=y[k];for(q=P;q!==null;){var D=q;switch(D.tag){case 0:case 11:case 15:eo(8,D,c)}var B=D.child;if(B!==null)B.return=D,q=B;else for(;q!==null;){D=q;var M=D.sibling,Y=D.return;if(of(D),D===P){q=null;break}if(M!==null){M.return=Y,q=M;break}q=Y}}}var K=c.alternate;if(K!==null){var X=K.child;if(X!==null){K.child=null;do{var De=X.sibling;X.sibling=null,X=De}while(X!==null)}}q=c}}if((c.subtreeFlags&2064)!==0&&p!==null)p.return=c,q=p;else e:for(;q!==null;){if(c=q,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:eo(9,c,c.return)}var E=c.sibling;if(E!==null){E.return=c.return,q=E;break e}q=c.return}}var C=e.current;for(q=C;q!==null;){p=q;var R=p.child;if((p.subtreeFlags&2064)!==0&&R!==null)R.return=p,q=R;else e:for(p=C;q!==null;){if(y=q,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Si(9,y)}}catch(J){Oe(y,y.return,J)}if(y===p){q=null;break e}var H=y.sibling;if(H!==null){H.return=y.return,q=H;break e}q=y.return}}if(xe=s,on(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Io,e)}catch{}o=!0}return o}finally{Se=r,xt.transition=t}}return!1}function Sf(e,t,r){t=ir(r,t),t=Md(e,t,1),e=sn(e,t,1),t=nt(),e!==null&&(Er(e,1,t),st(e,t))}function Oe(e,t,r){if(e.tag===3)Sf(e,e,r);else for(;t!==null;){if(t.tag===3){Sf(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(un===null||!un.has(o))){e=ir(r,e),e=Dd(t,e,1),t=sn(t,e,1),e=nt(),t!==null&&(Er(t,1,e),st(t,e));break}}t=t.return}}function _g(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&r,Qe===e&&(qe&r)===r&&(Ue===4||Ue===3&&(qe&130023424)===qe&&500>Me()-Gs?Ln(e,0):Qs|=r),st(e,t)}function kf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Oo,Oo<<=1,(Oo&130023424)===0&&(Oo=4194304)));var r=nt();e=Ut(e,t),e!==null&&(Er(e,t,r),st(e,r))}function Tg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),kf(e,r)}function Ig(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(t),kf(e,r)}var Cf;Cf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)it=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return it=!1,Sg(e,t,r);it=(e.flags&131072)!==0}else it=!1,Pe&&(t.flags&1048576)!==0&&td(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;vi(e,t),e=t.pendingProps;var s=Xn(t,Ke.current);rr(t,r),s=js(null,t,o,e,s,r);var c=$s();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(o)?(c=!0,ti(t)):c=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,xs(t),s.updater=xi,t.stateNode=s,s._reactInternals=t,Ls(t,o,e,r),t=Ns(null,t,o,!0,c,r)):(t.tag=0,Pe&&c&&ss(t),tt(null,t,s,r),t=t.child),t;case 16:o=t.elementType;e:{switch(vi(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=Og(o),e=jt(o,e),s){case 0:t=Is(null,t,o,e,r);break e;case 1:t=Yd(null,t,o,e,r);break e;case 11:t=Ud(null,t,o,e,r);break e;case 14:t=Hd(null,t,o,jt(o.type,e),r);break e}throw Error(l(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:jt(o,s),Is(e,t,o,s,r);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:jt(o,s),Yd(e,t,o,s,r);case 3:e:{if(qd(t),e===null)throw Error(l(387));o=t.pendingProps,c=t.memoizedState,s=c.element,cd(e,t),ci(t,o,null,r);var p=t.memoizedState;if(o=p.element,c.isDehydrated)if(c={element:o,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){s=ir(Error(l(423)),t),t=Kd(e,t,o,r,s);break e}else if(o!==s){s=ir(Error(l(424)),t),t=Kd(e,t,o,r,s);break e}else for(dt=tn(t.stateNode.containerInfo.firstChild),ct=t,Pe=!0,Ct=null,r=ad(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(er(),o===s){t=Vt(e,t,r);break e}tt(e,t,o,r)}t=t.child}return t;case 5:return pd(t),e===null&&cs(t),o=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,p=s.children,ts(o,s)?p=null:c!==null&&ts(o,c)&&(t.flags|=32),Gd(e,t),tt(e,t,p,r),t.child;case 6:return e===null&&cs(t),null;case 13:return Xd(e,t,r);case 4:return ys(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=tr(t,null,o,r):tt(e,t,o,r),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:jt(o,s),Ud(e,t,o,s,r);case 7:return tt(e,t,t.pendingProps,r),t.child;case 8:return tt(e,t,t.pendingProps.children,r),t.child;case 12:return tt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,c=t.memoizedProps,p=s.value,je(si,o._currentValue),o._currentValue=p,c!==null)if(kt(c.value,p)){if(c.children===s.children&&!rt.current){t=Vt(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var y=c.dependencies;if(y!==null){p=c.child;for(var k=y.firstContext;k!==null;){if(k.context===o){if(c.tag===1){k=Ht(-1,r&-r),k.tag=2;var P=c.updateQueue;if(P!==null){P=P.shared;var D=P.pending;D===null?k.next=k:(k.next=D.next,D.next=k),P.pending=k}}c.lanes|=r,k=c.alternate,k!==null&&(k.lanes|=r),ms(c.return,r,t),y.lanes|=r;break}k=k.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(l(341));p.lanes|=r,y=p.alternate,y!==null&&(y.lanes|=r),ms(p,r,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}tt(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,rr(t,r),s=mt(s),o=o(s),t.flags|=1,tt(e,t,o,r),t.child;case 14:return o=t.type,s=jt(o,t.pendingProps),s=jt(o.type,s),Hd(e,t,o,s,r);case 15:return Vd(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:jt(o,s),vi(e,t),t.tag=1,ot(o)?(e=!0,ti(t)):e=!1,rr(t,r),Od(t,o,s),Ls(t,o,s,r),Ns(null,t,o,!0,e,r);case 19:return Zd(e,t,r);case 22:return Qd(e,t,r)}throw Error(l(156,t.tag))};function jf(e,t){return nc(e,t)}function Ng(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,r,o){return new Ng(e,t,r,o)}function ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Og(e){if(typeof e=="function")return ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Le)return 11;if(e===Ce)return 14}return 2}function pn(e,t){var r=e.alternate;return r===null?(r=yt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function zi(e,t,r,o,s,c){var p=2;if(o=e,typeof e=="function")ta(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case U:return Tn(r.children,s,c,t);case O:p=8,s|=8;break;case ue:return e=yt(12,r,t,s|2),e.elementType=ue,e.lanes=c,e;case fe:return e=yt(13,r,t,s),e.elementType=fe,e.lanes=c,e;case $e:return e=yt(19,r,t,s),e.elementType=$e,e.lanes=c,e;case ke:return Li(r,s,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:p=10;break e;case de:p=9;break e;case Le:p=11;break e;case Ce:p=14;break e;case Fe:p=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(p,r,t,s),t.elementType=e,t.type=o,t.lanes=c,t}function Tn(e,t,r,o){return e=yt(7,e,o,t),e.lanes=r,e}function Li(e,t,r,o){return e=yt(22,e,o,t),e.elementType=ke,e.lanes=r,e.stateNode={isHidden:!1},e}function na(e,t,r){return e=yt(6,e,null,t),e.lanes=r,e}function ra(e,t,r){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fg(e,t,r,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function oa(e,t,r,o,s,c,p,y,k){return e=new Fg(e,t,r,y,k),t===1?(t=1,c===!0&&(t|=8)):t=0,c=yt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(c),e}function Mg(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function $f(e){if(!e)return rn;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(ot(r))return Jc(e,r,t)}return t}function bf(e,t,r,o,s,c,p,y,k){return e=oa(r,o,!0,e,s,c,p,y,k),e.context=$f(null),r=e.current,o=nt(),s=dn(r),c=Ht(o,s),c.callback=t??null,sn(r,c,s),e.current.lanes=s,Er(e,s,o),st(e,o),e}function _i(e,t,r,o){var s=t.current,c=nt(),p=dn(s);return r=$f(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(c,p),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=sn(s,t,p),e!==null&&(Et(e,s,p,c),ui(e,s,p)),p}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ia(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function Dg(){return null}var Rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}Ii.prototype.render=la.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));_i(e,t,null,null)},Ii.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){_i(null,e,null,null)}),t[Dt]=null}};function Ii(e){this._internalRoot=e}Ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Jt.length&&t!==0&&t<Jt[r].priority;r++);Jt.splice(r,0,e),r===0&&pc(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function Ag(e,t,r,o,s){if(s){if(typeof o=="function"){var c=o;o=function(){var P=Ti(p);c.call(P)}}var p=bf(t,o,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=p,e[Dt]=p.current,Br(e.nodeType===8?e.parentNode:e),zn(),p}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var y=o;o=function(){var P=Ti(k);y.call(P)}}var k=oa(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=k,e[Dt]=k.current,Br(e.nodeType===8?e.parentNode:e),zn(function(){_i(t,k,r,o)}),k}function Oi(e,t,r,o,s){var c=r._reactRootContainer;if(c){var p=c;if(typeof s=="function"){var y=s;s=function(){var k=Ti(p);y.call(k)}}_i(t,p,e,s)}else p=Ag(r,t,e,s,o);return Ti(p)}ac=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(Ll(t,r|1),st(t,Me()),(xe&6)===0&&(ar=Me()+500,on()))}break;case 13:zn(function(){var o=Ut(e,1);if(o!==null){var s=nt();Et(o,e,1,s)}}),ia(e,1)}},_l=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var r=nt();Et(t,e,134217728,r)}ia(e,134217728)}},uc=function(e){if(e.tag===13){var t=dn(e),r=Ut(e,t);if(r!==null){var o=nt();Et(r,e,t,o)}ia(e,t)}},cc=function(){return Se},dc=function(e,t){var r=Se;try{return Se=e,t()}finally{Se=r}},jl=function(e,t,r){switch(t){case"input":if(gl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var s=Zo(o);if(!s)throw Error(l(90));Nu(o),gl(o,s)}}}break;case"textarea":Au(e,r);break;case"select":t=r.value,t!=null&&Dn(e,!!r.multiple,t,!1)}},qu=Js,Ku=zn;var Bg={usingClientEntryPoint:!1,Events:[Hr,qn,Zo,Gu,Yu,Js]},oo={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wg={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ec(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Io=Fi.inject(Wg),_t=Fi}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bg,at.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(l(200));return Mg(e,t,null,r)},at.createRoot=function(e,t){if(!sa(e))throw Error(l(299));var r=!1,o="",s=Rf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=oa(e,1,!1,null,null,r,!1,o,s),e[Dt]=t.current,Br(e.nodeType===8?e.parentNode:e),new la(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=ec(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return zn(e)},at.hydrate=function(e,t,r){if(!Ni(t))throw Error(l(200));return Oi(null,e,t,!0,r)},at.hydrateRoot=function(e,t,r){if(!sa(e))throw Error(l(405));var o=r!=null&&r.hydratedSources||null,s=!1,c="",p=Rf;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=bf(t,null,e,1,r??null,s,!1,c,p),e[Dt]=t.current,Br(e),o)for(e=0;e<o.length;e++)r=o[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Ii(t)},at.render=function(e,t,r){if(!Ni(t))throw Error(l(200));return Oi(null,e,t,!1,r)},at.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(l(40));return e._reactRootContainer?(zn(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},at.unstable_batchedUpdates=Js,at.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Ni(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Oi(e,t,r,!1,o)},at.version="18.3.1-next-f1338f8080-20240426",at}var Ff;function Kg(){if(Ff)return ca.exports;Ff=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),ca.exports=qg(),ca.exports}var Mf;function Xg(){if(Mf)return Mi;Mf=1;var n=Kg();return Mi.createRoot=n.createRoot,Mi.hydrateRoot=n.hydrateRoot,Mi}var Jg=Xg();const Zg=zp(Jg);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var au=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Lp=/^[\\/]{2}/;function e0(n,i){return i+n.replace(/\\/g,"/")}var Df="popstate";function Af(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function t0(n={}){function i(u,a){var x;let f=(x=a.state)==null?void 0:x.masked,{pathname:h,search:g,hash:m}=f||u.location;return Ha("",{pathname:h,search:g,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default",f?{pathname:u.location.pathname,search:u.location.search,hash:u.location.hash}:void 0)}function l(u,a){return typeof a=="string"?a:yo(a)}return r0(i,l,null,n)}function Ie(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Ft(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function n0(){return Math.random().toString(36).substring(2,10)}function Bf(n,i){return{usr:n.state,key:n.key,idx:i,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Ha(n,i,l=null,u,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?gr(i):i,state:l,key:i&&i.key||u||n0(),mask:a}}function yo({pathname:n="/",search:i="",hash:l=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function gr(n){let i={};if(n){let l=n.indexOf("#");l>=0&&(i.hash=n.substring(l),n=n.substring(0,l));let u=n.indexOf("?");u>=0&&(i.search=n.substring(u),n=n.substring(0,u)),n&&(i.pathname=n)}return i}function r0(n,i,l,u={}){let{window:a=document.defaultView,v5Compat:f=!1}=u,h=a.history,g="POP",m=null,x=S();x==null&&(x=0,h.replaceState({...h.state,idx:x},""));function S(){return(h.state||{idx:null}).idx}function w(){g="POP";let T=S(),I=T==null?null:T-x;x=T,m&&m({action:g,location:z.location,delta:I})}function b(T,I){g="PUSH";let _=Af(T)?T:Ha(z.location,T,I);x=S()+1;let V=Bf(_,x),te=z.createHref(_.mask||_);try{h.pushState(V,"",te)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(te)}f&&m&&m({action:g,location:z.location,delta:1})}function F(T,I){g="REPLACE";let _=Af(T)?T:Ha(z.location,T,I);x=S();let V=Bf(_,x),te=z.createHref(_.mask||_);h.replaceState(V,"",te),f&&m&&m({action:g,location:z.location,delta:0})}function L(T){return o0(a,T)}let z={get action(){return g},get location(){return n(a,h)},listen(T){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(Df,w),m=T,()=>{a.removeEventListener(Df,w),m=null}},createHref(T){return i(a,T)},createURL:L,encodeLocation(T){let I=L(T);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:b,replace:F,go(T){return h.go(T)}};return z}function o0(n,i,l=!1){let u="http://localhost";n&&(u=n.location.origin!=="null"?n.location.origin:n.location.href),Ie(u,"No window.location.(origin|href) available to create URL");let a=typeof i=="string"?i:yo(i);return a=a.replace(/ $/,"%20"),!l&&Lp.test(a)&&(a=u+a),new URL(a,u)}function _p(n,i,l="/"){return i0(n,i,l,!1)}function i0(n,i,l,u,a){let f=typeof i=="string"?gr(i):i,h=Yt(f.pathname||"/",l);if(h==null)return null;let g=l0(n),m=null,x=x0(h);for(let S=0;m==null&&S<g.length;++S)m=g0(g[S],x,u);return m}function l0(n){let i=Tp(n);return s0(i),i}function Tp(n,i=[],l=[],u="",a=!1){let f=(h,g,m=a,x)=>{let S={relativePath:x===void 0?h.path||"":x,caseSensitive:h.caseSensitive===!0,childrenIndex:g,route:h};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(u)&&m)return;Ie(S.relativePath.startsWith(u),`Absolute route path "${S.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(u.length)}let w=Pt([u,S.relativePath]),b=l.concat(S);h.children&&h.children.length>0&&(Ie(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Tp(h.children,i,b,w,m)),!(h.path==null&&!h.index)&&i.push({path:w,score:h0(w,h.index),routesMeta:b.map((F,L)=>{let[z,T]=Op(F.relativePath,F.caseSensitive,L===b.length-1);return{...F,matcher:z,compiledParams:T}})})};return n.forEach((h,g)=>{var m;if(h.path===""||!((m=h.path)!=null&&m.includes("?")))f(h,g);else for(let x of Ip(h.path))f(h,g,!0,x)}),i}function Ip(n){let i=n.split("/");if(i.length===0)return[];let[l,...u]=i,a=l.endsWith("?"),f=l.replace(/\?$/,"");if(u.length===0)return a?[f,""]:[f];let h=Ip(u.join("/")),g=[];return g.push(...h.map(m=>m===""?f:[f,m].join("/"))),a&&g.push(...h),g.map(m=>n.startsWith("/")&&m===""?"/":m)}function s0(n){n.sort((i,l)=>i.score!==l.score?l.score-i.score:m0(i.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}var a0=/^:[\w-]+$/,u0=3,c0=2,d0=1,f0=10,p0=-2,Wf=n=>n==="*";function h0(n,i){let l=n.split("/"),u=l.length;return l.some(Wf)&&(u+=p0),i&&(u+=c0),l.filter(a=>!Wf(a)).reduce((a,f)=>a+(a0.test(f)?u0:f===""?d0:f0),u)}function m0(n,i){return n.length===i.length&&n.slice(0,-1).every((u,a)=>u===i[a])?n[n.length-1]-i[i.length-1]:0}function g0(n,i,l=!1){let{routesMeta:u}=n,a={},f="/",h=[];for(let g=0;g<u.length;++g){let m=u[g],x=g===u.length-1,S=f==="/"?i:i.slice(f.length)||"/",w={path:m.relativePath,caseSensitive:m.caseSensitive,end:x},b=m.matcher&&m.compiledParams?Np(w,S,m.matcher,m.compiledParams):Zi(w,S),F=m.route;if(!b&&x&&l&&!u[u.length-1].route.index&&(b=Zi({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},S)),!b)return null;Object.assign(a,b.params),h.push({params:a,pathname:Pt([f,b.pathname]),pathnameBase:w0(Pt([f,b.pathnameBase])),route:F}),b.pathnameBase!=="/"&&(f=Pt([f,b.pathnameBase]))}return h}function Zi(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,u]=Op(n.path,n.caseSensitive,n.end);return Np(n,i,l,u)}function Np(n,i,l,u){let a=i.match(l);if(!a)return null;let f=a[0],h=f.replace(/(.)\/+$/,"$1"),g=a.slice(1);return{params:u.reduce((x,{paramName:S,isOptional:w},b)=>{if(S==="*"){let L=g[b]||"";h=f.slice(0,f.length-L.length).replace(/(.)\/+$/,"$1")}const F=g[b];return w&&!F?x[S]=void 0:x[S]=(F||"").replace(/%2F/g,"/"),x},{}),pathname:f,pathnameBase:h,pattern:n}}function Op(n,i=!1,l=!0){Ft(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let u=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,m,x,S)=>{if(u.push({paramName:g,isOptional:m!=null}),m){let w=S.charAt(x+h.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(u.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,i?void 0:"i"),u]}function x0(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Ft(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Yt(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,u=n.charAt(l);return u&&u!=="/"?null:n.slice(l)||"/"}function y0(n,i="/"){let{pathname:l,search:u="",hash:a=""}=typeof n=="string"?gr(n):n,f;return l?(l=Mp(l),l.startsWith("/")?f=Uf(l.substring(1),"/"):f=Uf(l,i)):f=i,{pathname:f,search:S0(u),hash:k0(a)}}function Uf(n,i){let l=el(i).split("/");return n.split("/").forEach(a=>{a===".."?l.length>1&&l.pop():a!=="."&&l.push(a)}),l.length>1?l.join("/"):"/"}function pa(n,i,l,u){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function v0(n){return n.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function Fp(n){let i=v0(n);return i.map((l,u)=>u===i.length-1?l.pathname:l.pathnameBase)}function uu(n,i,l,u=!1){let a;typeof n=="string"?a=gr(n):(a={...n},Ie(!a.pathname||!a.pathname.includes("?"),pa("?","pathname","search",a)),Ie(!a.pathname||!a.pathname.includes("#"),pa("#","pathname","hash",a)),Ie(!a.search||!a.search.includes("#"),pa("#","search","hash",a)));let f=n===""||a.pathname==="",h=f?"/":a.pathname,g;if(h==null)g=l;else{let w=i.length-1;if(!u&&h.startsWith("..")){let b=h.split("/");for(;b[0]==="..";)b.shift(),w-=1;a.pathname=b.join("/")}g=w>=0?i[w]:"/"}let m=y0(a,g),x=h&&h!=="/"&&h.endsWith("/"),S=(f||h===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(x||S)&&(m.pathname+="/"),m}var Mp=n=>n.replace(/[\\/]{2,}/g,"/"),Pt=n=>Mp(n.join("/")),el=n=>n.replace(/\/+$/,""),w0=n=>el(n).replace(/^\/*/,"/"),S0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,k0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,C0=class{constructor(n,i,l,u=!1){this.status=n,this.statusText=i||"",this.internal=u,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function j0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function $0(n){let i=n.map(l=>l.route.path).filter(Boolean);return Pt(i)||"/"}var Dp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ap(n,i){let l=n;if(typeof l!="string"||!au.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let u=l,a=!1;if(Dp)try{let f=new URL(window.location.href),h=Lp.test(l)?new URL(e0(l,f.protocol)):new URL(l),g=Yt(h.pathname,i);h.origin===f.origin&&g!=null?l=g+h.search+h.hash:a=!0}catch{Ft(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:a,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Bp=["POST","PUT","PATCH","DELETE"];new Set(Bp);var b0=["GET",...Bp];new Set(b0);var E0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function R0(n){try{return E0.includes(new URL(n).protocol)}catch{return!1}}var xr=j.createContext(null);xr.displayName="DataRouter";var il=j.createContext(null);il.displayName="DataRouterState";var Wp=j.createContext(!1);function P0(){return j.useContext(Wp)}var Up=j.createContext({isTransitioning:!1});Up.displayName="ViewTransition";var z0=j.createContext(new Map);z0.displayName="Fetchers";var L0=j.createContext(null);L0.displayName="Await";var wt=j.createContext(null);wt.displayName="Navigation";var jo=j.createContext(null);jo.displayName="Location";var Mt=j.createContext({outlet:null,matches:[],isDataRoute:!1});Mt.displayName="Route";var cu=j.createContext(null);cu.displayName="RouteError";var Hp="REACT_ROUTER_ERROR",_0="REDIRECT",T0="ROUTE_ERROR_RESPONSE";function I0(n){if(n.startsWith(`${Hp}:${_0}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function N0(n){if(n.startsWith(`${Hp}:${T0}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new C0(i.status,i.statusText,i.data)}catch{}}function O0(n,{relative:i}={}){Ie($o(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:u}=j.useContext(wt),{hash:a,pathname:f,search:h}=bo(n,{relative:i}),g=f;return l!=="/"&&(g=f==="/"?l:Pt([l,f])),u.createHref({pathname:g,search:h,hash:a})}function $o(){return j.useContext(jo)!=null}function Lt(){return Ie($o(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(jo).location}var Vp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qp(n){j.useContext(wt).static||j.useLayoutEffect(n)}function F0(){let{isDataRoute:n}=j.useContext(Mt);return n?X0():M0()}function M0(){Ie($o(),"useNavigate() may be used only in the context of a <Router> component.");let n=j.useContext(xr),{basename:i,navigator:l}=j.useContext(wt),{matches:u}=j.useContext(Mt),{pathname:a}=Lt(),f=JSON.stringify(Fp(u)),h=j.useRef(!1);return Qp(()=>{h.current=!0}),j.useCallback((m,x={})=>{if(Ft(h.current,Vp),!h.current)return;if(typeof m=="number"){l.go(m);return}let S=uu(m,JSON.parse(f),a,x.relative==="path");n==null&&i!=="/"&&(S.pathname=S.pathname==="/"?i:Pt([i,S.pathname])),(x.replace?l.replace:l.push)(S,x.state,x)},[i,l,f,a,n])}j.createContext(null);function D0(){let{matches:n}=j.useContext(Mt),i=n[n.length-1];return(i==null?void 0:i.params)??{}}function bo(n,{relative:i}={}){let{matches:l}=j.useContext(Mt),{pathname:u}=Lt(),a=JSON.stringify(Fp(l));return j.useMemo(()=>uu(n,JSON.parse(a),u,i==="path"),[n,a,u,i])}function A0(n,i){return Gp(n,i)}function Gp(n,i,l){var T;Ie($o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=j.useContext(wt),{matches:a}=j.useContext(Mt),f=a[a.length-1],h=f?f.params:{},g=f?f.pathname:"/",m=f?f.pathnameBase:"/",x=f&&f.route;{let I=x&&x.path||"";qp(g,!x||I.endsWith("*")||I.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)}let S=Lt(),w;if(i){let I=typeof i=="string"?gr(i):i;Ie(m==="/"||((T=I.pathname)==null?void 0:T.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${I.pathname}" was given in the \`location\` prop.`),w=I}else w=S;let b=w.pathname||"/",F=b;if(m!=="/"){let I=m.replace(/^\//,"").split("/");F="/"+b.replace(/^\//,"").split("/").slice(I.length).join("/")}let L=l&&l.state.matches.length?l.state.matches.map(I=>Object.assign(I,{route:l.manifest[I.route.id]||I.route})):_p(n,{pathname:F});Ft(x||L!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Ft(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=V0(L&&L.map(I=>Object.assign({},I,{params:Object.assign({},h,I.params),pathname:Pt([m,u.encodeLocation?u.encodeLocation(I.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?m:Pt([m,u.encodeLocation?u.encodeLocation(I.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:I.pathnameBase])})),a,l);return i&&z?j.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...w},navigationType:"POP"}},z):z}function B0(){let n=K0(),i=j0(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,u="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:f},"ErrorBoundary")," or"," ",j.createElement("code",{style:f},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},i),l?j.createElement("pre",{style:a},l):null,h)}var W0=j.createElement(B0,null),Yp=class extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const l=N0(n.digest);l&&(n=l)}let i=n!==void 0?j.createElement(Mt.Provider,{value:this.props.routeContext},j.createElement(cu.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?j.createElement(U0,{error:n},i):i}};Yp.contextType=Wp;var ha=new WeakMap;function U0({children:n,error:i}){let{basename:l}=j.useContext(wt);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let u=I0(i.digest);if(u){let a=ha.get(i);if(a)throw a;let f=Ap(u.location,l),h=f.absoluteURL||f.to;if(R0(h))throw new Error("Invalid redirect location");if(Dp&&!ha.get(i))if(f.isExternal||u.reloadDocument)window.location.href=h;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:u.replace}));throw ha.set(i,g),g}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h}`})}}return n}function H0({routeContext:n,match:i,children:l}){let u=j.useContext(xr);return u&&u.static&&u.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=i.route.id),j.createElement(Mt.Provider,{value:n},l)}function V0(n,i=[],l){let u=l==null?void 0:l.state;if(n==null){if(!u)return null;if(u.errors)n=u.matches;else if(i.length===0&&!u.initialized&&u.matches.length>0)n=u.matches;else return null}let a=n,f=u==null?void 0:u.errors;if(f!=null){let S=a.findIndex(w=>w.route.id&&(f==null?void 0:f[w.route.id])!==void 0);Ie(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),a=a.slice(0,Math.min(a.length,S+1))}let h=!1,g=-1;if(l&&u){h=u.renderFallback;for(let S=0;S<a.length;S++){let w=a[S];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=S),w.route.id){let{loaderData:b,errors:F}=u,L=w.route.loader&&!b.hasOwnProperty(w.route.id)&&(!F||F[w.route.id]===void 0);if(w.route.lazy||L){l.isStatic&&(h=!0),g>=0?a=a.slice(0,g+1):a=[a[0]];break}}}}let m=l==null?void 0:l.onError,x=u&&m?(S,w)=>{var b,F;m(S,{location:u.location,params:((F=(b=u.matches)==null?void 0:b[0])==null?void 0:F.params)??{},pattern:$0(u.matches),errorInfo:w})}:void 0;return a.reduceRight((S,w,b)=>{let F,L=!1,z=null,T=null;u&&(F=f&&w.route.id?f[w.route.id]:void 0,z=w.route.errorElement||W0,h&&(g<0&&b===0?(qp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),L=!0,T=null):g===b&&(L=!0,T=w.route.hydrateFallbackElement||null)));let I=i.concat(a.slice(0,b+1)),_=()=>{let V;return F?V=z:L?V=T:w.route.Component?V=j.createElement(w.route.Component,null):w.route.element?V=w.route.element:V=S,j.createElement(H0,{match:w,routeContext:{outlet:S,matches:I,isDataRoute:u!=null},children:V})};return u&&(w.route.ErrorBoundary||w.route.errorElement||b===0)?j.createElement(Yp,{location:u.location,revalidation:u.revalidation,component:z,error:F,children:_(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:x}):_()},null)}function du(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q0(n){let i=j.useContext(xr);return Ie(i,du(n)),i}function G0(n){let i=j.useContext(il);return Ie(i,du(n)),i}function Y0(n){let i=j.useContext(Mt);return Ie(i,du(n)),i}function fu(n){let i=Y0(n),l=i.matches[i.matches.length-1];return Ie(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function q0(){return fu("useRouteId")}function K0(){var u;let n=j.useContext(cu),i=G0("useRouteError"),l=fu("useRouteError");return n!==void 0?n:(u=i.errors)==null?void 0:u[l]}function X0(){let{router:n}=Q0("useNavigate"),i=fu("useNavigate"),l=j.useRef(!1);return Qp(()=>{l.current=!0}),j.useCallback(async(a,f={})=>{Ft(l.current,Vp),l.current&&(typeof a=="number"?await n.navigate(a):await n.navigate(a,{fromRouteId:i,...f}))},[n,i])}var Hf={};function qp(n,i,l){!i&&!Hf[n]&&(Hf[n]=!0,Ft(!1,l))}j.memo(J0);function J0({routes:n,manifest:i,future:l,state:u,isStatic:a,onError:f}){return Gp(n,void 0,{manifest:i,state:u,isStatic:a,onError:f})}function dr(n){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Z0({basename:n="/",children:i=null,location:l,navigationType:u="POP",navigator:a,static:f=!1,useTransitions:h}){Ie(!$o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=n.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:g,navigator:a,static:f,useTransitions:h,future:{}}),[g,a,f,h]);typeof l=="string"&&(l=gr(l));let{pathname:x="/",search:S="",hash:w="",state:b=null,key:F="default",mask:L}=l,z=j.useMemo(()=>{let T=Yt(x,g);return T==null?null:{location:{pathname:T,search:S,hash:w,state:b,key:F,mask:L},navigationType:u}},[g,x,S,w,b,F,u,L]);return Ft(z!=null,`<Router basename="${g}"> is not able to match the URL "${x}${S}${w}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:j.createElement(wt.Provider,{value:m},j.createElement(jo.Provider,{children:i,value:z}))}function ex({children:n,location:i}){return A0(Va(n),i)}function Va(n,i=[]){let l=[];return j.Children.forEach(n,(u,a)=>{if(!j.isValidElement(u))return;let f=[...i,a];if(u.type===j.Fragment){l.push.apply(l,Va(u.props.children,f));return}Ie(u.type===dr,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Va(u.props.children,f)),l.push(h)}),l}var Hi="get",Vi="application/x-www-form-urlencoded";function ll(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function tx(n){return ll(n)&&n.tagName.toLowerCase()==="button"}function nx(n){return ll(n)&&n.tagName.toLowerCase()==="form"}function rx(n){return ll(n)&&n.tagName.toLowerCase()==="input"}function ox(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ix(n,i){return n.button===0&&(!i||i==="_self")&&!ox(n)}var Di=null;function lx(){if(Di===null)try{new FormData(document.createElement("form"),0),Di=!1}catch{Di=!0}return Di}var sx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ma(n){return n!=null&&!sx.has(n)?(Ft(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vi}"`),null):n}function ax(n,i){let l,u,a,f,h;if(nx(n)){let g=n.getAttribute("action");u=g?Yt(g,i):null,l=n.getAttribute("method")||Hi,a=ma(n.getAttribute("enctype"))||Vi,f=new FormData(n)}else if(tx(n)||rx(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||g.getAttribute("action");if(u=m?Yt(m,i):null,l=n.getAttribute("formmethod")||g.getAttribute("method")||Hi,a=ma(n.getAttribute("formenctype"))||ma(g.getAttribute("enctype"))||Vi,f=new FormData(g,n),!lx()){let{name:x,type:S,value:w}=n;if(S==="image"){let b=x?`${x}.`:"";f.append(`${b}x`,"0"),f.append(`${b}y`,"0")}else x&&f.append(x,w)}}else{if(ll(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Hi,u=null,a=Vi,h=n}return f&&a==="text/plain"&&(h=f,f=void 0),{action:u,method:l.toLowerCase(),encType:a,formData:f,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pu(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Kp(n,i,l,u){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${u}`:a.pathname=`${a.pathname}.${u}`:a.pathname==="/"?a.pathname=`_root.${u}`:i&&Yt(a.pathname,i)==="/"?a.pathname=`${el(i)}/_root.${u}`:a.pathname=`${el(a.pathname)}.${u}`,a}async function ux(n,i){if(n.id in i)return i[n.id];try{let l=await import(n.module);return i[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function dx(n,i,l){let u=await Promise.all(n.map(async a=>{let f=i.routes[a.route.id];if(f){let h=await ux(f,l);return h.links?h.links():[]}return[]}));return mx(u.flat(1).filter(cx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Vf(n,i,l,u,a,f){let h=(m,x)=>l[x]?m.route.id!==l[x].route.id:!0,g=(m,x)=>{var S;return l[x].pathname!==m.pathname||((S=l[x].route.path)==null?void 0:S.endsWith("*"))&&l[x].params["*"]!==m.params["*"]};return f==="assets"?i.filter((m,x)=>h(m,x)||g(m,x)):f==="data"?i.filter((m,x)=>{var w;let S=u.routes[m.route.id];if(!S||!S.hasLoader)return!1;if(h(m,x)||g(m,x))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=l[0])==null?void 0:w.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function fx(n,i,{includeHydrateFallback:l}={}){return px(n.map(u=>{let a=i.routes[u.route.id];if(!a)return[];let f=[a.module];return a.clientActionModule&&(f=f.concat(a.clientActionModule)),a.clientLoaderModule&&(f=f.concat(a.clientLoaderModule)),l&&a.hydrateFallbackModule&&(f=f.concat(a.hydrateFallbackModule)),a.imports&&(f=f.concat(a.imports)),f}).flat(1))}function px(n){return[...new Set(n)]}function hx(n){let i={},l=Object.keys(n).sort();for(let u of l)i[u]=n[u];return i}function mx(n,i){let l=new Set;return new Set(i),n.reduce((u,a)=>{let f=JSON.stringify(hx(a));return l.has(f)||(l.add(f),u.push({key:f,link:a})),u},[])}function hu(){let n=j.useContext(xr);return pu(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function gx(){let n=j.useContext(il);return pu(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var mu=j.createContext(void 0);mu.displayName="FrameworkContext";function sl(){let n=j.useContext(mu);return pu(n,"You must render this element inside a <HydratedRouter> element"),n}function xx(n,i){let l=j.useContext(mu),[u,a]=j.useState(!1),[f,h]=j.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:x,onMouseLeave:S,onTouchStart:w}=i,b=j.useRef(null);j.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let z=I=>{I.forEach(_=>{h(_.isIntersecting)})},T=new IntersectionObserver(z,{threshold:.5});return b.current&&T.observe(b.current),()=>{T.disconnect()}}},[n]),j.useEffect(()=>{if(u){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[u]);let F=()=>{a(!0)},L=()=>{a(!1),h(!1)};return l?n!=="intent"?[f,b,{}]:[f,b,{onFocus:lo(g,F),onBlur:lo(m,L),onMouseEnter:lo(x,F),onMouseLeave:lo(S,L),onTouchStart:lo(w,F)}]:[!1,b,{}]}function lo(n,i){return l=>{n&&n(l),l.defaultPrevented||i(l)}}function yx({page:n,...i}){let l=P0(),{nonce:u}=sl(),{router:a}=hu(),f=j.useMemo(()=>_p(a.routes,n,a.basename),[a.routes,n,a.basename]);return f?(i.nonce==null&&u&&(i={...i,nonce:u}),l?j.createElement(wx,{page:n,matches:f,...i}):j.createElement(Sx,{page:n,matches:f,...i})):null}function vx(n){let{manifest:i,routeModules:l}=sl(),[u,a]=j.useState([]);return j.useEffect(()=>{let f=!1;return dx(n,i,l).then(h=>{f||a(h)}),()=>{f=!0}},[n,i,l]),u}function wx({page:n,matches:i,...l}){let u=Lt(),{future:a}=sl(),{basename:f}=hu(),h=j.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let g=Kp(n,f,a.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,x=[];for(let S of i)typeof S.route.shouldRevalidate=="function"?m=!0:x.push(S.route.id);return m&&x.length>0&&g.searchParams.set("_routes",x.join(",")),[g.pathname+g.search]},[f,a.v8_trailingSlashAwareDataRequests,n,u,i]);return j.createElement(j.Fragment,null,h.map(g=>j.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...l})))}function Sx({page:n,matches:i,...l}){let u=Lt(),{future:a,manifest:f,routeModules:h}=sl(),{basename:g}=hu(),{loaderData:m,matches:x}=gx(),S=j.useMemo(()=>Vf(n,i,x,f,u,"data"),[n,i,x,f,u]),w=j.useMemo(()=>Vf(n,i,x,f,u,"assets"),[n,i,x,f,u]),b=j.useMemo(()=>{if(n===u.pathname+u.search+u.hash)return[];let z=new Set,T=!1;if(i.forEach(_=>{var te;let V=f.routes[_.route.id];!V||!V.hasLoader||(!S.some(W=>W.route.id===_.route.id)&&_.route.id in m&&((te=h[_.route.id])!=null&&te.shouldRevalidate)||V.hasClientLoader?T=!0:z.add(_.route.id))}),z.size===0)return[];let I=Kp(n,g,a.v8_trailingSlashAwareDataRequests,"data");return T&&z.size>0&&I.searchParams.set("_routes",i.filter(_=>z.has(_.route.id)).map(_=>_.route.id).join(",")),[I.pathname+I.search]},[g,a.v8_trailingSlashAwareDataRequests,m,u,f,S,i,n,h]),F=j.useMemo(()=>fx(w,f),[w,f]),L=vx(w);return j.createElement(j.Fragment,null,b.map(z=>j.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...l})),F.map(z=>j.createElement("link",{key:z,rel:"modulepreload",href:z,...l})),L.map(({key:z,link:T})=>j.createElement("link",{key:z,nonce:l.nonce,...T,crossOrigin:T.crossOrigin??l.crossOrigin})))}function kx(...n){return i=>{n.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var Cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cx&&(window.__reactRouterVersion="7.18.2")}catch{}function jx({basename:n,children:i,useTransitions:l,window:u}){let a=j.useRef();a.current==null&&(a.current=t0({window:u,v5Compat:!0}));let f=a.current,[h,g]=j.useState({action:f.action,location:f.location}),m=j.useCallback(x=>{l===!1?g(x):j.startTransition(()=>g(x))},[l]);return j.useLayoutEffect(()=>f.listen(m),[f,m]),j.createElement(Z0,{basename:n,children:i,location:h.location,navigationType:h.action,navigator:f,useTransitions:l})}var et=j.forwardRef(function({onClick:i,discover:l="render",prefetch:u="none",relative:a,reloadDocument:f,replace:h,mask:g,state:m,target:x,to:S,preventScrollReset:w,viewTransition:b,defaultShouldRevalidate:F,...L},z){let{basename:T,navigator:I,useTransitions:_}=j.useContext(wt),V=typeof S=="string"&&au.test(S),te=Ap(S,T);S=te.to;let W=O0(S,{relative:a}),A=Lt(),U=null;if(g){let Ce=uu(g,[],A.mask?A.mask.pathname:"/",!0);T!=="/"&&(Ce.pathname=Ce.pathname==="/"?T:Pt([T,Ce.pathname])),U=I.createHref(Ce)}let[O,ue,Z]=xx(u,L),de=Rx(S,{replace:h,mask:g,state:m,target:x,preventScrollReset:w,relative:a,viewTransition:b,defaultShouldRevalidate:F,useTransitions:_});function Le(Ce){i&&i(Ce),Ce.defaultPrevented||de(Ce)}let fe=!(te.isExternal||f),$e=j.createElement("a",{...L,...Z,href:(fe?U:void 0)||te.absoluteURL||W,onClick:fe?Le:i,ref:kx(z,ue),target:x,"data-discover":!V&&l==="render"?"true":void 0});return O&&!V?j.createElement(j.Fragment,null,$e,j.createElement(yx,{page:W})):$e});et.displayName="Link";var $x=j.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:u="",end:a=!1,style:f,to:h,viewTransition:g,children:m,...x},S){let w=bo(h,{relative:x.relative}),b=Lt(),F=j.useContext(il),{navigator:L,basename:z}=j.useContext(wt),T=F!=null&&Tx(w)&&g===!0,I=L.encodeLocation?L.encodeLocation(w).pathname:w.pathname,_=b.pathname,V=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;l||(_=_.toLowerCase(),V=V?V.toLowerCase():null,I=I.toLowerCase()),V&&z&&(V=Yt(V,z)||V);const te=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let W=_===I||!a&&_.startsWith(I)&&_.charAt(te)==="/",A=V!=null&&(V===I||!a&&V.startsWith(I)&&V.charAt(I.length)==="/"),U={isActive:W,isPending:A,isTransitioning:T},O=W?i:void 0,ue;typeof u=="function"?ue=u(U):ue=[u,W?"active":null,A?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let Z=typeof f=="function"?f(U):f;return j.createElement(et,{...x,"aria-current":O,className:ue,ref:S,style:Z,to:h,viewTransition:g},typeof m=="function"?m(U):m)});$x.displayName="NavLink";var bx=j.forwardRef(({discover:n="render",fetcherKey:i,navigate:l,reloadDocument:u,replace:a,state:f,method:h=Hi,action:g,onSubmit:m,relative:x,preventScrollReset:S,viewTransition:w,defaultShouldRevalidate:b,...F},L)=>{let{useTransitions:z}=j.useContext(wt),T=Lx(),I=_x(g,{relative:x}),_=h.toLowerCase()==="get"?"get":"post",V=typeof g=="string"&&au.test(g),te=W=>{if(m&&m(W),W.defaultPrevented)return;W.preventDefault();let A=W.nativeEvent.submitter,U=(A==null?void 0:A.getAttribute("formmethod"))||h,O=()=>T(A||W.currentTarget,{fetcherKey:i,method:U,navigate:l,replace:a,state:f,relative:x,preventScrollReset:S,viewTransition:w,defaultShouldRevalidate:b});z&&l!==!1?j.startTransition(()=>O()):O()};return j.createElement("form",{ref:L,method:_,action:I,onSubmit:u?m:te,...F,"data-discover":!V&&n==="render"?"true":void 0})});bx.displayName="Form";function Ex(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xp(n){let i=j.useContext(xr);return Ie(i,Ex(n)),i}function Rx(n,{target:i,replace:l,mask:u,state:a,preventScrollReset:f,relative:h,viewTransition:g,defaultShouldRevalidate:m,useTransitions:x}={}){let S=F0(),w=Lt(),b=bo(n,{relative:h});return j.useCallback(F=>{if(ix(F,i)){F.preventDefault();let L=l!==void 0?l:yo(w)===yo(b),z=()=>S(n,{replace:L,mask:u,state:a,preventScrollReset:f,relative:h,viewTransition:g,defaultShouldRevalidate:m});x?j.startTransition(()=>z()):z()}},[w,S,b,l,u,a,i,n,f,h,g,m,x])}var Px=0,zx=()=>`__${String(++Px)}__`;function Lx(){let{router:n}=Xp("useSubmit"),{basename:i}=j.useContext(wt),l=q0(),u=n.fetch,a=n.navigate;return j.useCallback(async(f,h={})=>{let{action:g,method:m,encType:x,formData:S,body:w}=ax(f,i);if(h.navigate===!1){let b=h.fetcherKey||zx();await u(b,l,h.action||g,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:S,body:w,formMethod:h.method||m,formEncType:h.encType||x,flushSync:h.flushSync})}else await a(h.action||g,{defaultShouldRevalidate:h.defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:S,body:w,formMethod:h.method||m,formEncType:h.encType||x,replace:h.replace,state:h.state,fromRouteId:l,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,a,i,l])}function _x(n,{relative:i}={}){let{basename:l}=j.useContext(wt),u=j.useContext(Mt);Ie(u,"useFormAction must be used inside a RouteContext");let[a]=u.matches.slice(-1),f={...bo(n||".",{relative:i})},h=Lt();if(n==null){f.search=h.search;let g=new URLSearchParams(f.search),m=g.getAll("index");if(m.some(S=>S==="")){g.delete("index"),m.filter(w=>w).forEach(w=>g.append("index",w));let S=g.toString();f.search=S?`?${S}`:""}}return(!n||n===".")&&a.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:Pt([l,f.pathname])),yo(f)}function Tx(n,{relative:i}={}){let l=j.useContext(Up);Ie(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Xp("useViewTransitionState"),a=bo(n,{relative:i});if(!l.isTransitioning)return!1;let f=Yt(l.currentLocation.pathname,u)||l.currentLocation.pathname,h=Yt(l.nextLocation.pathname,u)||l.nextLocation.pathname;return Zi(a.pathname,h)!=null||Zi(a.pathname,f)!=null}var Re="-ms-",ho="-moz-",ve="-webkit-",Jp="comm",al="rule",gu="decl",Ix="@import",Nx="@namespace",Zp="@keyframes",Ox="@layer",eh=Math.abs,xu=String.fromCharCode,Qa=Object.assign;function Fx(n,i){return He(n,0)^45?(((i<<2^He(n,0))<<2^He(n,1))<<2^He(n,2))<<2^He(n,3):0}function th(n){return n.trim()}function Gt(n,i){return(n=i.exec(n))?n[0]:n}function ce(n,i,l){return n.replace(i,l)}function Qi(n,i,l){return n.indexOf(i,l)}function He(n,i){return n.charCodeAt(i)|0}function On(n,i,l){return n.slice(i,l)}function Rt(n){return n.length}function nh(n){return n.length}function co(n,i){return i.push(n),n}function Mx(n,i){return n.map(i).join("")}function Qf(n,i){return n.filter(function(l){return!Gt(l,i)})}var ul=1,pr=1,rh=0,vt=0,Be=0,yr="";function cl(n,i,l,u,a,f,h,g){return{value:n,root:i,parent:l,type:u,props:a,children:f,line:ul,column:pr,length:h,return:"",siblings:g}}function yn(n,i){return Qa(cl("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function cr(n){for(;n.root;)n=yn(n.root,{children:[n]});co(n,n.siblings)}function Dx(){return Be}function Ax(){return Be=vt>0?He(yr,--vt):0,pr--,Be===10&&(pr=1,ul--),Be}function zt(){return Be=vt<rh?He(yr,vt++):0,pr++,Be===10&&(pr=1,ul++),Be}function vn(){return He(yr,vt)}function Gi(){return vt}function dl(n,i){return On(yr,n,i)}function vo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bx(n){return ul=pr=1,rh=Rt(yr=n),vt=0,[]}function Wx(n){return yr="",n}function ga(n){return th(dl(vt-1,Ga(n===91?n+2:n===40?n+1:n)))}function Ux(n){for(;(Be=vn())&&Be<33;)zt();return vo(n)>2||vo(Be)>3?"":" "}function Hx(n,i){for(;--i&&zt()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return dl(n,Gi()+(i<6&&vn()==32&&zt()==32))}function Ga(n){for(;zt();)switch(Be){case n:return vt;case 34:case 39:n!==34&&n!==39&&Ga(Be);break;case 40:n===41&&Ga(n);break;case 92:zt();break}return vt}function Vx(n,i){for(;zt()&&n+Be!==57;)if(n+Be===84&&vn()===47)break;return"/*"+dl(i,vt-1)+"*"+xu(n===47?n:zt())}function Qx(n){for(;!vo(vn());)zt();return dl(n,vt)}function Gx(n){return Wx(Yi("",null,null,null,[""],n=Bx(n),0,[0],n))}function Yi(n,i,l,u,a,f,h,g,m){for(var x=0,S=0,w=h,b=0,F=0,L=0,z=1,T=1,I=1,_=0,V="",te=a,W=f,A=u,U=V;T;)switch(L=_,_=zt()){case 40:if(L!=108&&He(U,w-1)==58){Qi(U+=ce(ga(_),"&","&\f"),"&\f",eh(x?g[x-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:U+=ga(_);break;case 9:case 10:case 13:case 32:U+=Ux(L);break;case 92:U+=Hx(Gi()-1,7);continue;case 47:switch(vn()){case 42:case 47:co(Yx(Vx(zt(),Gi()),i,l,m),m),(vo(L||1)==5||vo(vn()||1)==5)&&Rt(U)&&On(U,-1,void 0)!==" "&&(U+=" ");break;default:U+="/"}break;case 123*z:g[x++]=Rt(U)*I;case 125*z:case 59:case 0:switch(_){case 0:case 125:T=0;case 59+S:I==-1&&(U=ce(U,/\f/g,"")),F>0&&(Rt(U)-w||z===0&&L===47)&&co(F>32?Yf(U+";",u,l,w-1,m):Yf(ce(U," ","")+";",u,l,w-2,m),m);break;case 59:U+=";";default:if(co(A=Gf(U,i,l,x,S,a,g,V,te=[],W=[],w,f),f),_===123)if(S===0)Yi(U,i,A,A,te,f,w,g,W);else{switch(b){case 99:if(He(U,3)===110)break;case 108:if(He(U,2)===97)break;default:S=0;case 100:case 109:case 115:}S?Yi(n,A,A,u&&co(Gf(n,A,A,0,0,a,g,V,a,te=[],w,W),W),a,W,w,g,u?te:W):Yi(U,A,A,A,[""],W,0,g,W)}}x=S=F=0,z=I=1,V=U="",w=h;break;case 58:w=1+Rt(U),F=L;default:if(z<1){if(_==123)--z;else if(_==125&&z++==0&&Ax()==125)continue}switch(U+=xu(_),_*z){case 38:I=S>0?1:(U+="\f",-1);break;case 44:g[x++]=(Rt(U)-1)*I,I=1;break;case 64:vn()===45&&(U+=ga(zt())),b=vn(),S=w=Rt(V=U+=Qx(Gi())),_++;break;case 45:L===45&&Rt(U)==2&&(z=0)}}return f}function Gf(n,i,l,u,a,f,h,g,m,x,S,w){for(var b=a-1,F=a===0?f:[""],L=nh(F),z=0,T=0,I=0;z<u;++z)for(var _=0,V=On(n,b+1,b=eh(T=h[z])),te=n;_<L;++_)(te=th(T>0?F[_]+" "+V:ce(V,/&\f/g,F[_])))&&(m[I++]=te);return cl(n,i,l,a===0?al:g,m,x,S,w)}function Yx(n,i,l,u){return cl(n,i,l,Jp,xu(Dx()),On(n,2,-2),0,u)}function Yf(n,i,l,u,a){return cl(n,i,l,gu,On(n,0,u),On(n,u+1,-1),u,a)}function oh(n,i,l){switch(Fx(n,i)){case 5103:return ve+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ve+n+n;case 4855:return ve+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return ho+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+n+ho+n+Re+n+n;case 5936:switch(He(n,i+11)){case 114:return ve+n+Re+ce(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ve+n+Re+ce(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ve+n+Re+ce(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ve+n+Re+n+n;case 6165:return ve+n+Re+"flex-"+n+n;case 5187:return ve+n+ce(n,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Re+"flex-$1$2")+n;case 5443:return ve+n+Re+"flex-item-"+ce(n,/flex-|-self/g,"")+(Gt(n,/flex-|baseline/)?"":Re+"grid-row-"+ce(n,/flex-|-self/g,""))+n;case 4675:return ve+n+Re+"flex-line-pack"+ce(n,/align-content|flex-|-self/g,"")+n;case 5548:return ve+n+Re+ce(n,"shrink","negative")+n;case 5292:return ve+n+Re+ce(n,"basis","preferred-size")+n;case 6060:return ve+"box-"+ce(n,"-grow","")+ve+n+Re+ce(n,"grow","positive")+n;case 4554:return ve+ce(n,/([^-])(transform)/g,"$1"+ve+"$2")+n;case 6187:return ce(ce(ce(n,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),n,"")+n;case 5495:case 3959:return ce(n,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return ce(ce(n,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Re+"flex-pack:$3"),/space-between/,"justify")+ve+n+n;case 4200:if(!Gt(n,/flex-|baseline/))return Re+"grid-column-align"+On(n,i)+n;break;case 2592:case 3360:return Re+ce(n,"template-","")+n;case 4384:case 3616:return l&&l.some(function(u,a){return i=a,Gt(u.props,/grid-\w+-end/)})?~Qi(n+(l=l[i].value),"span",0)?n:Re+ce(n,"-start","")+n+Re+"grid-row-span:"+(~Qi(l,"span",0)?Gt(l,/\d+/):+Gt(l,/\d+/)-+Gt(n,/\d+/))+";":Re+ce(n,"-start","")+n;case 4896:case 4128:return l&&l.some(function(u){return Gt(u.props,/grid-\w+-start/)})?n:Re+ce(ce(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ce(n,/(.+)-inline(.+)/,ve+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(n)-1-i>6)switch(He(n,i+1)){case 109:if(He(n,i+4)!==45)break;case 102:return ce(n,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+ho+(He(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Qi(n,"stretch",0)?oh(ce(n,"stretch","fill-available"),i,l)+n:n}break;case 5152:case 5920:return ce(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,a,f,h,g,m,x){return Re+a+":"+f+x+(h?Re+a+"-span:"+(g?m:+m-+f)+x:"")+n});case 4949:if(He(n,i+6)===121)return ce(n,":",":"+ve)+n;break;case 6444:switch(He(n,He(n,14)===45?18:11)){case 120:return ce(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(He(n,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Re+"$2box$3")+n;case 100:return ce(n,":",":"+Re)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(n,"scroll-","scroll-snap-")+n}return n}function tl(n,i){for(var l="",u=0;u<n.length;u++)l+=i(n[u],u,n,i)||"";return l}function qx(n,i,l,u){switch(n.type){case Ox:if(n.children.length)break;case Ix:case Nx:case gu:return n.return=n.return||n.value;case Jp:return"";case Zp:return n.return=n.value+"{"+tl(n.children,u)+"}";case al:if(!Rt(n.value=n.props.join(",")))return""}return Rt(l=tl(n.children,u))?n.return=n.value+"{"+l+"}":""}function Kx(n){var i=nh(n);return function(l,u,a,f){for(var h="",g=0;g<i;g++)h+=n[g](l,u,a,f)||"";return h}}function Xx(n){return function(i){i.root||(i=i.return)&&n(i)}}function Jx(n,i,l,u){if(n.length>-1&&!n.return)switch(n.type){case gu:n.return=oh(n.value,n.length,l);return;case Zp:return tl([yn(n,{value:ce(n.value,"@","@"+ve)})],u);case al:if(n.length)return Mx(l=n.props,function(a){switch(Gt(a,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(yn(n,{props:[ce(a,/:(read-\w+)/,":"+ho+"$1")]})),cr(yn(n,{props:[a]})),Qa(n,{props:Qf(l,u)});break;case"::placeholder":cr(yn(n,{props:[ce(a,/:(plac\w+)/,":"+ve+"input-$1")]})),cr(yn(n,{props:[ce(a,/:(plac\w+)/,":"+ho+"$1")]})),cr(yn(n,{props:[ce(a,/:(plac\w+)/,Re+"input-$1")]})),cr(yn(n,{props:[a]})),Qa(n,{props:Qf(l,u)});break}return""})}}var fr={},xa,ya;const hr=typeof process<"u"&&fr!==void 0&&(fr.REACT_APP_SC_ATTR||fr.SC_ATTR)||"data-styled",ih="active",lh="data-styled-version",fl="6.5.2",yu=`/*!sc*/
`,mo=typeof window<"u"&&typeof document<"u";function qf(n){if(typeof process<"u"&&fr!==void 0){const i=fr[n];if(i!==void 0&&i!=="")return i!=="false"}}const Zx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(ya=(xa=qf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&xa!==void 0?xa:qf("SC_DISABLE_SPEEDY"))!==null&&ya!==void 0?ya:typeof process<"u"&&fr!==void 0&&!1),sh="sc-keyframes-",ey={};function Fn(n,...i){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${n} for more information.${i.length>0?` Args: ${i.join(", ")}`:""}`)}let qi=new Map,nl=new Map,Ki=1;const fo=n=>{if(qi.has(n))return qi.get(n);for(;nl.has(Ki);)Ki++;const i=Ki++;return qi.set(n,i),nl.set(i,n),i},ty=n=>nl.get(n),ny=(n,i)=>{Ki=i+1,qi.set(n,i),nl.set(i,n)},vu=Object.freeze([]),mr=Object.freeze({});function ah(n,i,l=mr){return n.theme!==l.theme&&n.theme||i||l.theme}const ry=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oy=/(^-|-$)/g;function uh(n){return n.replace(ry,"-").replace(oy,"")}const iy=/(a)(d)/gi,Kf=n=>String.fromCharCode(n+(n>25?39:97));function wu(n){let i,l="";for(i=Math.abs(n);i>52;i=i/52|0)l=Kf(i%52)+l;return(Kf(i%52)+l).replace(iy,"$1-$2")}const Ya=5381,Nn=(n,i)=>{let l=i.length;for(;l;)n=33*n^i.charCodeAt(--l);return n},ch=n=>Nn(Ya,n);function Su(n){return wu(ch(n)>>>0)}function ly(n){return n.displayName||n.name||"Component"}function qa(n){return typeof n=="string"&&!0}function sy(n){return qa(n)?`styled.${n}`:`Styled(${ly(n)})`}const dh=Symbol.for("react.memo"),ay=Symbol.for("react.forward_ref"),uy={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},cy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dy={[ay]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[dh]:fh};function Xf(n){return("type"in(i=n)&&i.type.$$typeof)===dh?fh:"$$typeof"in n?dy[n.$$typeof]:uy;var i}const fy=Object.defineProperty,py=Object.getOwnPropertyNames,hy=Object.getOwnPropertySymbols,my=Object.getOwnPropertyDescriptor,gy=Object.getPrototypeOf,xy=Object.prototype;function ph(n,i,l){if(typeof i!="string"){const u=gy(i);u&&u!==xy&&ph(n,u,l);const a=py(i).concat(hy(i)),f=Xf(n),h=Xf(i);for(let g=0;g<a.length;++g){const m=a[g];if(!(m in cy||l&&l[m]||h&&m in h||f&&m in f)){const x=my(i,m);try{fy(n,m,x)}catch{}}}}return n}function vr(n){return typeof n=="function"}const yy=Symbol.for("react.forward_ref");function ku(n){return n!=null&&(typeof n=="object"||typeof n=="function")&&n.$$typeof===yy&&"styledComponentId"in n}function po(n,i){return n&&i?n+" "+i:n||i||""}function rl(n,i){return n.join("")}function wo(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ka(n,i,l=!1){if(!l&&!wo(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(let u=0;u<i.length;u++)n[u]=Ka(n[u],i[u]);else if(wo(i))for(const u in i)n[u]=Ka(n[u],i[u]);return n}function Cu(n,i){Object.defineProperty(n,"toString",{value:i})}const vy=class{constructor(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n,this._cGroup=0,this._cIndex=0}indexOfGroup(n){if(n===this._cGroup)return this._cIndex;let i=this._cIndex;if(n>this._cGroup)for(let l=this._cGroup;l<n;l++)i+=this.groupSizes[l];else for(let l=this._cGroup-1;l>=n;l--)i-=this.groupSizes[l];return this._cGroup=n,this._cIndex=i,i}insertRules(n,i){if(n>=this.groupSizes.length){const a=this.groupSizes,f=a.length;let h=f;for(;n>=h;)if(h<<=1,h<0)throw Fn(16,`${n}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(a),this.length=h;for(let g=f;g<h;g++)this.groupSizes[g]=0}let l=this.indexOfGroup(n+1),u=0;for(let a=0,f=i.length;a<f;a++)this.tag.insertRule(l,i[a])&&(this.groupSizes[n]++,l++,u++);u>0&&this._cGroup>n&&(this._cIndex+=u)}clearGroup(n){if(n<this.length){const i=this.groupSizes[n],l=this.indexOfGroup(n),u=l+i;this.groupSizes[n]=0;for(let a=l;a<u;a++)this.tag.deleteRule(l);i>0&&this._cGroup>n&&(this._cIndex-=i)}}getGroup(n){let i="";if(n>=this.length||this.groupSizes[n]===0)return i;const l=this.groupSizes[n],u=this.indexOfGroup(n),a=u+l;for(let f=u;f<a;f++)i+=this.tag.getRule(f)+yu;return i}},wy=`style[${hr}][${lh}="${fl}"]`,Sy=new RegExp(`^${hr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Jf=n=>typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11,Xa=n=>{if(!n)return document;if(Jf(n))return n;if("getRootNode"in n){const i=n.getRootNode();if(Jf(i))return i}return document},ky=(n,i,l)=>{const u=l.split(",");let a;for(let f=0,h=u.length;f<h;f++)(a=u[f])&&n.registerName(i,a)},Cy=(n,i)=>{var l;const u=((l=i.textContent)!==null&&l!==void 0?l:"").split(yu),a=[];for(let f=0,h=u.length;f<h;f++){const g=u[f].trim();if(!g)continue;const m=g.match(Sy);if(m){const x=0|parseInt(m[1],10),S=m[2];x!==0&&(ny(S,x),ky(n,S,m[3]),n.getTag().insertRules(x,a)),a.length=0}else a.push(g)}},va=n=>{const i=Xa(n.options.target).querySelectorAll(wy);for(let l=0,u=i.length;l<u;l++){const a=i[l];a&&a.getAttribute(hr)!==ih&&(Cy(n,a),a.parentNode&&a.parentNode.removeChild(a))}};let so=!1;function jy(){if(so!==!1)return so;if(typeof document<"u"){const n=document.head.querySelector('meta[property="csp-nonce"]');if(n)return so=n.nonce||n.getAttribute("content")||void 0;const i=document.head.querySelector('meta[name="sc-nonce"]');if(i)return so=i.getAttribute("content")||void 0}return so=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const hh=(n,i)=>{const l=document.head,u=n||l,a=document.createElement("style"),f=(m=>{const x=Array.from(m.querySelectorAll(`style[${hr}]`));return x[x.length-1]})(u),h=f!==void 0?f.nextSibling:null;a.setAttribute(hr,ih),a.setAttribute(lh,fl);const g=i||jy();return g&&a.setAttribute("nonce",g),u.insertBefore(a,h),a},$y=class{constructor(n,i){this.element=hh(n,i),this.element.appendChild(document.createTextNode("")),this.sheet=(l=>{var u;if(l.sheet)return l.sheet;const a=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets;for(let f=0,h=a.length;f<h;f++){const g=a[f];if(g.ownerNode===l)return g}throw Fn(17)})(this.element),this.length=0}insertRule(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}}deleteRule(n){this.sheet.deleteRule(n),this.length--}getRule(n){const i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""}},by=class{constructor(n,i){this.element=hh(n,i),this.nodes=this.element.childNodes,this.length=0}insertRule(n,i){if(n<=this.length&&n>=0){const l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[n]||null),this.length++,!0}return!1}deleteRule(n){this.element.removeChild(this.nodes[n]),this.length--}getRule(n){return n<this.length?this.nodes[n].textContent:""}};let Zf=mo;const Ey={isServer:!mo,useCSSOMInjection:!Zx};class Eo{static registerId(i){return fo(i)}constructor(i=mr,l={},u){this.options=Object.assign(Object.assign({},Ey),i),this.gs=l,this.keyframeIds=new Set,this.names=new Map(u),this.server=!!i.isServer,!this.server&&mo&&Zf&&(Zf=!1,va(this)),Cu(this,()=>(a=>{const f=a.getTag(),{length:h}=f;let g="";for(let m=0;m<h;m++){const x=ty(m);if(x===void 0)continue;const S=a.names.get(x);if(S===void 0||!S.size)continue;const w=f.getGroup(m);if(w.length===0)continue;const b=hr+".g"+m+'[id="'+x+'"]';let F="";for(const L of S)L.length>0&&(F+=L+",");g+=w+b+'{content:"'+F+'"}'+yu}return g})(this))}rehydrate(){!this.server&&mo&&va(this)}reconstructWithOptions(i,l=!0){const u=new Eo(Object.assign(Object.assign({},this.options),i),this.gs,l&&this.names||void 0);return u.keyframeIds=new Set(this.keyframeIds),!this.server&&mo&&i.target!==this.options.target&&Xa(this.options.target)!==Xa(i.target)&&va(u),u}allocateGSInstance(i){return this.gs[i]=(this.gs[i]||0)+1}getTag(){return this.tag||(this.tag=(i=(({useCSSOMInjection:l,target:u,nonce:a})=>l?new $y(u,a):new by(u,a))(this.options),new vy(i)));var i}hasNameForId(i,l){var u,a;return(a=(u=this.names.get(i))===null||u===void 0?void 0:u.has(l))!==null&&a!==void 0&&a}registerName(i,l){fo(i),i.startsWith(sh)&&this.keyframeIds.add(i);const u=this.names.get(i);u?u.add(l):this.names.set(i,new Set([l]))}insertRules(i,l,u){this.registerName(i,l),this.getTag().insertRules(fo(i),u)}clearNames(i){this.names.has(i)&&this.names.get(i).clear()}clearRules(i){this.getTag().clearGroup(fo(i)),this.clearNames(i)}clearTag(){this.tag=void 0}}const mh=new WeakSet,Ry={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Py(n,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in Ry||n.startsWith("--")?String(i).trim():i+"px"}const In=47;function ep(n){if(n.charCodeAt(0)===45&&n.charCodeAt(1)===45)return n;let i="";for(let l=0;l<n.length;l++){const u=n.charCodeAt(l);i+=u>=65&&u<=90?"-"+String.fromCharCode(u+32):n[l]}return i.startsWith("ms-")?"-"+i:i}const gh=Symbol.for("sc-keyframes");function zy(n){return typeof n=="object"&&n!==null&&gh in n}function xh(n){return vr(n)&&!(n.prototype&&n.prototype.isReactComponent)}const yh=n=>n==null||n===!1||n==="",Ly=Symbol.for("react.client.reference");function tp(n){return n.$$typeof===Ly}function vh(n,i){for(const l in n){const u=n[l];n.hasOwnProperty(l)&&!yh(u)&&(Array.isArray(u)&&mh.has(u)||vr(u)?i.push(ep(l)+":",u,";"):wo(u)?(i.push(l+" {"),vh(u,i),i.push("}")):i.push(ep(l)+": "+Py(l,u)+";"))}}function wn(n,i,l,u,a=[]){if(yh(n))return a;const f=typeof n;if(f==="string")return a.push(n),a;if(f==="function"){if(tp(n))return a;if(xh(n)&&i){const h=n(i);return wn(h,i,l,u,a)}return a.push(n),a}if(Array.isArray(n)){for(let h=0;h<n.length;h++)wn(n[h],i,l,u,a);return a}return ku(n)?(a.push(`.${n.styledComponentId}`),a):zy(n)?(l?(n.inject(l,u),a.push(n.getName(u))):a.push(n),a):tp(n)?a:wo(n)?n.toString!==Object.prototype.toString?(a.push(n.toString()),a):(vh(n,a),a):(a.push(n.toString()),a)}const _y=ch(fl);class Ty{constructor(i,l,u){this.rules=i,this.componentId=l,this.baseHash=Nn(_y,l),this.baseStyle=u,Eo.registerId(l)}generateAndInjectStyles(i,l,u){let a=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,u):"";{let f="";for(let h=0;h<this.rules.length;h++){const g=this.rules[h];if(typeof g=="string")f+=g;else if(g)if(xh(g)){const m=g(i);typeof m=="string"?f+=m:m!=null&&m!==!1&&(f+=rl(wn(m,i,l,u)))}else f+=rl(wn(g,i,l,u))}if(f){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=u.hash?u.hash+f:f;let g=this.dynamicNameCache.get(h);if(!g){if(g=wu(Nn(Nn(this.baseHash,u.hash),f)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(h,g)}if(!l.hasNameForId(this.componentId,g)){const m=u(f,"."+g,void 0,this.componentId);l.insertRules(this.componentId,g,m)}a=po(a,g)}}return a}}const Iy=/&/g;function wh(n,i){let l=0;for(;--i>=0&&n.charCodeAt(i)===92;)l++;return!(1&~l)}function wa(n){const i=n.length;let l="",u=0,a=0,f=0,h=!1,g=!1;for(let m=0;m<i;m++){const x=n.charCodeAt(m);if(f!==0||h||x!==In||n.charCodeAt(m+1)!==42)if(h)x===42&&n.charCodeAt(m+1)===In&&(h=!1,m++);else if(x!==34&&x!==39||wh(n,m)){if(f===0)if(x===123)a++;else if(x===125){if(a--,a<0){g=!0;let S=m+1;for(;S<i;){const w=n.charCodeAt(S);if(w===59||w===10)break;S++}S<i&&n.charCodeAt(S)===59&&S++,a=0,m=S-1,u=S;continue}a===0&&(l+=n.substring(u,m+1),u=m+1)}else x===59&&a===0&&(l+=n.substring(u,m+1),u=m+1)}else f===0?f=x:f===x&&(f=0);else h=!0,m++}return g||a!==0||f!==0?(u<i&&a===0&&f===0&&(l+=n.substring(u)),l):n}function Sh(n,i){const l=i+" ",u=","+l;for(let a=0;a<n.length;a++){const f=n[a];if(f.type==="rule"){f.value=(l+f.value).replaceAll(",",u);const h=f.props,g=[];for(let m=0;m<h.length;m++)g[m]=l+h[m];f.props=g}Array.isArray(f.children)&&f.type!=="@keyframes"&&Sh(f.children,i)}return n}function Ny({options:n=mr,plugins:i=vu}=mr){let l,u,a;const f=(b,F,L)=>L.startsWith(u)&&L.endsWith(u)&&L.replaceAll(u,"").length>0?`.${l}`:b,h=i.slice();h.push(b=>{b.type===al&&b.value.includes("&")&&(a||(a=new RegExp(`\\${u}\\b`,"g")),b.props[0]=b.props[0].replace(Iy,u).replace(a,f))}),n.prefix&&h.push(Jx),h.push(qx);let g=[];const m=Kx(h.concat(Xx(b=>g.push(b)))),x=(b,F="",L="",z="&")=>{l=z,u=F,a=void 0;const T=(function(_){const V=_.indexOf("//")!==-1,te=_.indexOf("}")!==-1;if(!V&&!te)return _;if(!V)return wa(_);const W=_.length;let A="",U=0,O=0,ue=0,Z=0,de=0,Le=!1;for(;O<W;){const fe=_.charCodeAt(O);if(fe!==34&&fe!==39||wh(_,O))if(ue===0)if(fe===In&&O+1<W&&_.charCodeAt(O+1)===42){for(O+=2;O+1<W&&(_.charCodeAt(O)!==42||_.charCodeAt(O+1)!==In);)O++;O+=2}else if(fe!==40)if(fe!==41)if(Z>0)O++;else if(fe===42&&O+1<W&&_.charCodeAt(O+1)===In)A+=_.substring(U,O),O+=2,U=O,Le=!0;else if(fe===In&&O+1<W&&_.charCodeAt(O+1)===In){for(A+=_.substring(U,O);O<W&&_.charCodeAt(O)!==10;)O++;U=O,Le=!0}else fe===123?de++:fe===125&&de--,O++;else Z>0&&Z--,O++;else Z++,O++;else O++;else ue===0?ue=fe:ue===fe&&(ue=0),O++}return Le?(U<W&&(A+=_.substring(U)),de===0?A:wa(A)):de===0?_:wa(_)})(b);let I=Gx(L||F?L+" "+F+" { "+T+" }":T);return n.namespace&&(I=Sh(I,n.namespace)),g=[],tl(I,m),g},S=n;let w=Ya;for(let b=0;b<i.length;b++)i[b].name||Fn(15),w=Nn(w,i[b].name);return S!=null&&S.namespace&&(w=Nn(w,S.namespace)),S!=null&&S.prefix&&(w=Nn(w,"p")),x.hash=w!==Ya?w.toString():"",x}const Oy=new Eo,Ja=Ny(),kh=ze.createContext({shouldForwardProp:void 0,styleSheet:Oy,stylis:Ja,stylisPlugins:void 0});kh.Consumer;function Ch(){return ze.useContext(kh)}const So=ze.createContext(void 0);So.Consumer;function Fy(n){const i=ze.useContext(So),l=ze.useMemo(()=>(function(u,a){if(!u)throw Fn(14);if(vr(u))return u(a);if(Array.isArray(u)||typeof u!="object")throw Fn(8);return a?Object.assign(Object.assign({},a),u):u})(n.theme,i),[n.theme,i]);return n.children?ze.createElement(So.Provider,{value:l},n.children):null}const np=Object.prototype.hasOwnProperty,Sa={};function My(n,i){const l=typeof n!="string"?"sc":uh(n);Sa[l]=(Sa[l]||0)+1;const u=l+"-"+Su(fl+l+Sa[l]);return i?i+"-"+u:u}function Dy(n,i,l){const u=ku(n),a=n,f=!qa(n),{attrs:h=vu,componentId:g=My(i.displayName,i.parentComponentId),displayName:m=sy(n)}=i,x=i.displayName&&i.componentId?uh(i.displayName)+"-"+i.componentId:i.componentId||g,S=u&&a.attrs?a.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=i;if(u&&a.shouldForwardProp){const z=a.shouldForwardProp;if(i.shouldForwardProp){const T=i.shouldForwardProp;w=(I,_)=>z(I,_)&&T(I,_)}else w=z}const b=new Ty(l,x,u?a.componentStyle:void 0);function F(z,T){return(function(I,_,V){const{attrs:te,componentStyle:W,defaultProps:A,foldedComponentIds:U,styledComponentId:O,target:ue}=I,Z=ze.useContext(So),de=Ch(),Le=I.shouldForwardProp||de.shouldForwardProp,fe=ah(_,Z,A)||mr;let $e,Ce;{const ee=ze.useRef(null),Q=ee.current;if(Q!==null&&Q[1]===fe&&Q[2]===de.styleSheet&&Q[3]===de.stylis&&Q[7]===W&&(function($,N,ne){const ie=$,le=N;let he=0;for(const me in le)if(np.call(le,me)&&(he++,ie[me]!==le[me]))return!1;return he===ne})(Q[0],_,Q[4]))$e=Q[5],Ce=Q[6];else{$e=(function(N,ne,ie){const le=Object.assign(Object.assign({},ne),{className:void 0,theme:ie}),he=N.length>1;for(let me=0;me<N.length;me++){const ge=N[me],we=vr(ge)?ge(he?Object.assign({},le):le):ge;for(const Ne in we)Ne==="className"?le.className=po(le.className,we[Ne]):Ne==="style"?le.style=Object.assign(Object.assign({},le.style),we[Ne]):Ne in ne&&ne[Ne]===void 0||(le[Ne]=we[Ne])}return"className"in ne&&typeof ne.className=="string"&&(le.className=po(le.className,ne.className)),le})(te,_,fe),Ce=W.generateAndInjectStyles($e,de.styleSheet,de.stylis);let $=0;for(const N in _)np.call(_,N)&&$++;ee.current=[_,fe,de.styleSheet,de.stylis,$,$e,Ce,W]}}const Fe=$e.as||ue,ke=(function(ee,Q,$,N){const ne={};for(const ie in ee)ee[ie]===void 0||ie[0]==="$"||ie==="as"||ie==="theme"&&ee.theme===$||(ie==="forwardedAs"?ne.as=ee.forwardedAs:N&&!N(ie,Q)||(ne[ie]=ee[ie]));return ne})($e,Fe,fe,Le);let G=po(U,O);return Ce&&(G+=" "+Ce),$e.className&&(G+=" "+$e.className),ke[qa(Fe)&&Fe.includes("-")?"class":"className"]=G,V&&(ke.ref=V),j.createElement(Fe,ke)})(L,z,T)}F.displayName=m;let L=ze.forwardRef(F);return L.attrs=S,L.componentStyle=b,L.displayName=m,L.shouldForwardProp=w,L.foldedComponentIds=u?po(a.foldedComponentIds,a.styledComponentId):"",L.styledComponentId=x,L.target=u?a.target:n,Object.defineProperty(L,"defaultProps",{get(){return this._foldedDefaultProps},set(z){this._foldedDefaultProps=u?(function(T,...I){for(const _ of I)Ka(T,_,!0);return T})({},a.defaultProps,z):z}}),Cu(L,()=>`.${L.styledComponentId}`),f&&ph(L,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}var Ay=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function rp(n,i){const l=[n[0]];for(let u=0,a=i.length;u<a;u+=1)l.push(i[u],n[u+1]);return l}const op=n=>(mh.add(n),n);function ju(n,...i){if(vr(n)||wo(n))return op(wn(rp(vu,[n,...i])));const l=n;return i.length===0&&l.length===1&&typeof l[0]=="string"?wn(l):op(wn(rp(l,i)))}function Za(n,i,l=mr){if(!i)throw Fn(1,i);const u=(a,...f)=>n(i,l,ju(a,...f));return u.attrs=a=>Za(n,i,Object.assign(Object.assign({},l),{attrs:Array.prototype.concat(l.attrs,a).filter(Boolean)})),u.withConfig=a=>Za(n,i,Object.assign(Object.assign({},l),a)),u}const jh=n=>Za(Dy,n),v=jh;Ay.forEach(n=>{v[n]=jh(n)});class By{constructor(i,l){this.instanceRules=new Map,this.rules=i,this.componentId=l,this.isStatic=(function(u){for(let a=0;a<u.length;a+=1){const f=u[a];if(vr(f)&&!ku(f))return!1}return!0})(i),Eo.registerId(this.componentId)}removeStyles(i,l){this.instanceRules.delete(i),this.rebuildGroup(l)}renderStyles(i,l,u,a){const f=this.componentId;if(this.isStatic){if(u.hasNameForId(f,f+i))this.instanceRules.has(i)||this.computeRules(i,l,u,a);else{const g=this.computeRules(i,l,u,a);u.insertRules(f,g.name,g.rules)}return}const h=this.instanceRules.get(i);if(this.computeRules(i,l,u,a),!u.server&&h){const g=h.rules,m=this.instanceRules.get(i).rules;if(g.length===m.length){let x=!0;for(let S=0;S<g.length;S++)if(g[S]!==m[S]){x=!1;break}if(x)return}}this.rebuildGroup(u)}computeRules(i,l,u,a){const f=rl(wn(this.rules,l,u,a)),h={name:this.componentId+i,rules:a(f,"")};return this.instanceRules.set(i,h),h}rebuildGroup(i){const l=this.componentId;i.clearRules(l);for(const u of this.instanceRules.values())i.insertRules(l,u.name,u.rules)}}function Wy(n,...i){const l=ju(n,...i),u=`sc-global-${Su(JSON.stringify(l))}`,a=new By(l,u),f=g=>{const m=Ch(),x=ze.useContext(So);let S;{const w=ze.useRef(null);w.current===null&&(w.current=m.styleSheet.allocateGSInstance(u)),S=w.current}m.styleSheet.server&&h(S,g,m.styleSheet,x,m.stylis);{const w=a.isStatic?[S,m.styleSheet,a]:[S,g,m.styleSheet,x,m.stylis,a],b=ze.useRef(a);ze.useLayoutEffect(()=>{m.styleSheet.server||(b.current!==a&&(m.styleSheet.clearRules(u),b.current=a),h(S,g,m.styleSheet,x,m.stylis))},w),ze.useLayoutEffect(()=>()=>{m.styleSheet.server||a.removeStyles(S,m.styleSheet)},[S,m.styleSheet,a])}return m.styleSheet.server&&a.instanceRules.delete(S),null};function h(g,m,x,S,w){if(a.isStatic)a.renderStyles(g,ey,x,w);else{const b=Object.assign(Object.assign({},m),{theme:ah(m,S,f.defaultProps)});a.renderStyles(g,b,x,w)}}return ze.memo(f)}var $h;class Uy{constructor(i,l){this[$h]=!0,this.inject=(u,a=Ja)=>{const f=this.getName(a);if(!u.hasNameForId(this.id,f)){const h=a(this.rules,f,"@keyframes");u.insertRules(this.id,f,h)}},this.name=i,this.id=sh+i,this.rules=l,fo(this.id),Cu(this,()=>{throw Fn(12,String(this.name))})}getName(i=Ja){return i.hash?this.name+wu(+i.hash>>>0):this.name}}function $u(n,...i){const l=rl(ju(n,...i)),u=Su(l);return new Uy(u,l)}$h=gh;const Hy={colors:{bgCream:"#F9F4EB",gold:"#DCA842",goldHover:"#C69435",charcoal:"#2C221E",sand:"#EAE3D2",sandLight:"#F4EFE5",sage:"#8F9E8B",white:"#FFFFFF",overlay:"rgba(44, 34, 30, 0.4)",borderLight:"rgba(44, 34, 30, 0.08)",textMuted:"rgba(44, 34, 30, 0.6)"},fonts:{serif:"'Playfair Display', serif",sans:"'Plus Jakarta Sans', sans-serif"},layout:{maxWidth:"1200px"},transitions:{smooth:"all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",fast:"all 0.2s ease"},breakpoints:{desktop:"1024px",mobile:"768px"}},Vy=Wy`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({theme:n})=>n.colors.bgCream};
    color: ${({theme:n})=>n.colors.charcoal};
    font-family: ${({theme:n})=>n.colors.sans};
    overflow-x: hidden;
    line-height: 1.6;
  }

  /* Grab cursor for carousel drag */
  .carousel-viewport {
    cursor: grab;
  }
  .carousel-viewport:active {
    cursor: grabbing;
  }
`,Qy=v.div`
  background-color: ${({theme:n})=>n.colors.gold};
  color: ${({theme:n})=>n.colors.white};
  text-align: center;
  padding: 10px 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  width: 100%;
  position: relative;
  z-index: 10;
`;function Gy(){return d.jsx(Qy,{children:"NEW SUMMER ARRIVALS ADDED! DRESS NOW, RECEIVE WITHIN 1-3 BUSINESS DAYS! —"})}const go=/^[a-z0-9]+(-[a-z0-9]+)*$/,pl=(n,i,l,u="")=>{const a=n.split(":");if(n.slice(0,1)==="@"){if(a.length<2||a.length>3)return null;u=a.shift().slice(1)}if(a.length>3||!a.length)return null;if(a.length>1){const g=a.pop(),m=a.pop(),x={provider:a.length>0?a[0]:u,prefix:m,name:g};return i&&!Xi(x)?null:x}const f=a[0],h=f.split("-");if(h.length>1){const g={provider:u,prefix:h.shift(),name:h.join("-")};return i&&!Xi(g)?null:g}if(l&&u===""){const g={provider:u,prefix:"",name:f};return i&&!Xi(g,l)?null:g}return null},Xi=(n,i)=>n?!!((n.provider===""||n.provider.match(go))&&(i&&n.prefix===""||n.prefix.match(go))&&n.name.match(go)):!1,bh=Object.freeze({left:0,top:0,width:16,height:16}),ol=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),bu=Object.freeze({...bh,...ol}),eu=Object.freeze({...bu,body:"",hidden:!1});function Yy(n,i){const l={};!n.hFlip!=!i.hFlip&&(l.hFlip=!0),!n.vFlip!=!i.vFlip&&(l.vFlip=!0);const u=((n.rotate||0)+(i.rotate||0))%4;return u&&(l.rotate=u),l}function ip(n,i){const l=Yy(n,i);for(const u in eu)u in ol?u in n&&!(u in l)&&(l[u]=ol[u]):u in i?l[u]=i[u]:u in n&&(l[u]=n[u]);return l}function qy(n,i){const l=n.icons,u=n.aliases||Object.create(null),a=Object.create(null);function f(h){if(l[h])return a[h]=[];if(!(h in a)){a[h]=null;const g=u[h]&&u[h].parent,m=g&&f(g);m&&(a[h]=[g].concat(m))}return a[h]}return Object.keys(l).concat(Object.keys(u)).forEach(f),a}function Ky(n,i,l){const u=n.icons,a=n.aliases||Object.create(null);let f={};function h(g){f=ip(u[g]||a[g],f)}return h(i),l.forEach(h),ip(n,f)}function Eh(n,i){const l=[];if(typeof n!="object"||typeof n.icons!="object")return l;n.not_found instanceof Array&&n.not_found.forEach(a=>{i(a,null),l.push(a)});const u=qy(n);for(const a in u){const f=u[a];f&&(i(a,Ky(n,a,f)),l.push(a))}return l}const Xy={provider:"",aliases:{},not_found:{},...bh};function ka(n,i){for(const l in i)if(l in n&&typeof n[l]!=typeof i[l])return!1;return!0}function Rh(n){if(typeof n!="object"||n===null)return null;const i=n;if(typeof i.prefix!="string"||!n.icons||typeof n.icons!="object"||!ka(n,Xy))return null;const l=i.icons;for(const a in l){const f=l[a];if(!a.match(go)||typeof f.body!="string"||!ka(f,eu))return null}const u=i.aliases||Object.create(null);for(const a in u){const f=u[a],h=f.parent;if(!a.match(go)||typeof h!="string"||!l[h]&&!u[h]||!ka(f,eu))return null}return i}const lp=Object.create(null);function Jy(n,i){return{provider:n,prefix:i,icons:Object.create(null),missing:new Set}}function Mn(n,i){const l=lp[n]||(lp[n]=Object.create(null));return l[i]||(l[i]=Jy(n,i))}function Eu(n,i){return Rh(i)?Eh(i,(l,u)=>{u?n.icons[l]=u:n.missing.add(l)}):[]}function Zy(n,i,l){try{if(typeof l.body=="string")return n.icons[i]={...l},!0}catch{}return!1}let ko=!1;function Ph(n){return typeof n=="boolean"&&(ko=n),ko}function ev(n){const i=typeof n=="string"?pl(n,!0,ko):n;if(i){const l=Mn(i.provider,i.prefix),u=i.name;return l.icons[u]||(l.missing.has(u)?null:void 0)}}function tv(n,i){const l=pl(n,!0,ko);if(!l)return!1;const u=Mn(l.provider,l.prefix);return Zy(u,l.name,i)}function nv(n,i){if(typeof n!="object")return!1;if(typeof i!="string"&&(i=n.provider||""),ko&&!i&&!n.prefix){let a=!1;return Rh(n)&&(n.prefix="",Eh(n,(f,h)=>{h&&tv(f,h)&&(a=!0)})),a}const l=n.prefix;if(!Xi({provider:i,prefix:l,name:"a"}))return!1;const u=Mn(i,l);return!!Eu(u,n)}const zh=Object.freeze({width:null,height:null}),Lh=Object.freeze({...zh,...ol}),rv=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ov=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function sp(n,i,l){if(i===1)return n;if(l=l||100,typeof n=="number")return Math.ceil(n*i*l)/l;if(typeof n!="string")return n;const u=n.split(rv);if(u===null||!u.length)return n;const a=[];let f=u.shift(),h=ov.test(f);for(;;){if(h){const g=parseFloat(f);isNaN(g)?a.push(f):a.push(Math.ceil(g*i*l)/l)}else a.push(f);if(f=u.shift(),f===void 0)return a.join("");h=!h}}const iv=n=>n==="unset"||n==="undefined"||n==="none";function lv(n,i){const l={...bu,...n},u={...Lh,...i},a={left:l.left,top:l.top,width:l.width,height:l.height};let f=l.body;[l,u].forEach(L=>{const z=[],T=L.hFlip,I=L.vFlip;let _=L.rotate;T?I?_+=2:(z.push("translate("+(a.width+a.left).toString()+" "+(0-a.top).toString()+")"),z.push("scale(-1 1)"),a.top=a.left=0):I&&(z.push("translate("+(0-a.left).toString()+" "+(a.height+a.top).toString()+")"),z.push("scale(1 -1)"),a.top=a.left=0);let V;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:V=a.height/2+a.top,z.unshift("rotate(90 "+V.toString()+" "+V.toString()+")");break;case 2:z.unshift("rotate(180 "+(a.width/2+a.left).toString()+" "+(a.height/2+a.top).toString()+")");break;case 3:V=a.width/2+a.left,z.unshift("rotate(-90 "+V.toString()+" "+V.toString()+")");break}_%2===1&&(a.left!==a.top&&(V=a.left,a.left=a.top,a.top=V),a.width!==a.height&&(V=a.width,a.width=a.height,a.height=V)),z.length&&(f='<g transform="'+z.join(" ")+'">'+f+"</g>")});const h=u.width,g=u.height,m=a.width,x=a.height;let S,w;h===null?(w=g===null?"1em":g==="auto"?x:g,S=sp(w,m/x)):(S=h==="auto"?m:h,w=g===null?sp(S,x/m):g==="auto"?x:g);const b={},F=(L,z)=>{iv(z)||(b[L]=z.toString())};return F("width",S),F("height",w),b.viewBox=a.left.toString()+" "+a.top.toString()+" "+m.toString()+" "+x.toString(),{attributes:b,body:f}}const sv=/\sid="(\S+)"/g,av="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let uv=0;function cv(n,i=av){const l=[];let u;for(;u=sv.exec(n);)l.push(u[1]);if(!l.length)return n;const a="suffix"+(Math.random()*16777216|Date.now()).toString(16);return l.forEach(f=>{const h=typeof i=="function"?i(f):i+(uv++).toString(),g=f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+g+')([")]|\\.[a-z])',"g"),"$1"+h+a+"$3")}),n=n.replace(new RegExp(a,"g"),""),n}const tu=Object.create(null);function dv(n,i){tu[n]=i}function nu(n){return tu[n]||tu[""]}function Ru(n){let i;if(typeof n.resources=="string")i=[n.resources];else if(i=n.resources,!(i instanceof Array)||!i.length)return null;return{resources:i,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:n.random===!0,index:n.index||0,dataAfterTimeout:n.dataAfterTimeout!==!1}}const Pu=Object.create(null),ao=["https://api.simplesvg.com","https://api.unisvg.com"],Ji=[];for(;ao.length>0;)ao.length===1||Math.random()>.5?Ji.push(ao.shift()):Ji.push(ao.pop());Pu[""]=Ru({resources:["https://api.iconify.design"].concat(Ji)});function fv(n,i){const l=Ru(i);return l===null?!1:(Pu[n]=l,!0)}function zu(n){return Pu[n]}const pv=()=>{let n;try{if(n=fetch,typeof n=="function")return n}catch{}};let ap=pv();function hv(n,i){const l=zu(n);if(!l)return 0;let u;if(!l.maxURL)u=0;else{let a=0;l.resources.forEach(h=>{a=Math.max(a,h.length)});const f=i+".json?icons=";u=l.maxURL-a-l.path.length-f.length}return u}function mv(n){return n===404}const gv=(n,i,l)=>{const u=[],a=hv(n,i),f="icons";let h={type:f,provider:n,prefix:i,icons:[]},g=0;return l.forEach((m,x)=>{g+=m.length+1,g>=a&&x>0&&(u.push(h),h={type:f,provider:n,prefix:i,icons:[]},g=m.length),h.icons.push(m)}),u.push(h),u};function xv(n){if(typeof n=="string"){const i=zu(n);if(i)return i.path}return"/"}const yv=(n,i,l)=>{if(!ap){l("abort",424);return}let u=xv(i.provider);switch(i.type){case"icons":{const f=i.prefix,g=i.icons.join(","),m=new URLSearchParams({icons:g});u+=f+".json?"+m.toString();break}case"custom":{const f=i.uri;u+=f.slice(0,1)==="/"?f.slice(1):f;break}default:l("abort",400);return}let a=503;ap(n+u).then(f=>{const h=f.status;if(h!==200){setTimeout(()=>{l(mv(h)?"abort":"next",h)});return}return a=501,f.json()}).then(f=>{if(typeof f!="object"||f===null){setTimeout(()=>{f===404?l("abort",f):l("next",a)});return}setTimeout(()=>{l("success",f)})}).catch(()=>{l("next",a)})},vv={prepare:gv,send:yv};function wv(n){const i={loaded:[],missing:[],pending:[]},l=Object.create(null);n.sort((a,f)=>a.provider!==f.provider?a.provider.localeCompare(f.provider):a.prefix!==f.prefix?a.prefix.localeCompare(f.prefix):a.name.localeCompare(f.name));let u={provider:"",prefix:"",name:""};return n.forEach(a=>{if(u.name===a.name&&u.prefix===a.prefix&&u.provider===a.provider)return;u=a;const f=a.provider,h=a.prefix,g=a.name,m=l[f]||(l[f]=Object.create(null)),x=m[h]||(m[h]=Mn(f,h));let S;g in x.icons?S=i.loaded:h===""||x.missing.has(g)?S=i.missing:S=i.pending;const w={provider:f,prefix:h,name:g};S.push(w)}),i}function _h(n,i){n.forEach(l=>{const u=l.loaderCallbacks;u&&(l.loaderCallbacks=u.filter(a=>a.id!==i))})}function Sv(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout(()=>{n.pendingCallbacksFlag=!1;const i=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(!i.length)return;let l=!1;const u=n.provider,a=n.prefix;i.forEach(f=>{const h=f.icons,g=h.pending.length;h.pending=h.pending.filter(m=>{if(m.prefix!==a)return!0;const x=m.name;if(n.icons[x])h.loaded.push({provider:u,prefix:a,name:x});else if(n.missing.has(x))h.missing.push({provider:u,prefix:a,name:x});else return l=!0,!0;return!1}),h.pending.length!==g&&(l||_h([n],f.id),f.callback(h.loaded.slice(0),h.missing.slice(0),h.pending.slice(0),f.abort))})}))}let kv=0;function Cv(n,i,l){const u=kv++,a=_h.bind(null,l,u);if(!i.pending.length)return a;const f={id:u,icons:i,callback:n,abort:a};return l.forEach(h=>{(h.loaderCallbacks||(h.loaderCallbacks=[])).push(f)}),a}function jv(n,i=!0,l=!1){const u=[];return n.forEach(a=>{const f=typeof a=="string"?pl(a,i,l):a;f&&u.push(f)}),u}var $v={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function bv(n,i,l,u){const a=n.resources.length,f=n.random?Math.floor(Math.random()*a):n.index;let h;if(n.random){let A=n.resources.slice(0);for(h=[];A.length>1;){const U=Math.floor(Math.random()*A.length);h.push(A[U]),A=A.slice(0,U).concat(A.slice(U+1))}h=h.concat(A)}else h=n.resources.slice(f).concat(n.resources.slice(0,f));const g=Date.now();let m="pending",x=0,S,w=null,b=[],F=[];typeof u=="function"&&F.push(u);function L(){w&&(clearTimeout(w),w=null)}function z(){m==="pending"&&(m="aborted"),L(),b.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),b=[]}function T(A,U){U&&(F=[]),typeof A=="function"&&F.push(A)}function I(){return{startTime:g,payload:i,status:m,queriesSent:x,queriesPending:b.length,subscribe:T,abort:z}}function _(){m="failed",F.forEach(A=>{A(void 0,S)})}function V(){b.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),b=[]}function te(A,U,O){const ue=U!=="success";switch(b=b.filter(Z=>Z!==A),m){case"pending":break;case"failed":if(ue||!n.dataAfterTimeout)return;break;default:return}if(U==="abort"){S=O,_();return}if(ue){S=O,b.length||(h.length?W():_());return}if(L(),V(),!n.random){const Z=n.resources.indexOf(A.resource);Z!==-1&&Z!==n.index&&(n.index=Z)}m="completed",F.forEach(Z=>{Z(O)})}function W(){if(m!=="pending")return;L();const A=h.shift();if(A===void 0){if(b.length){w=setTimeout(()=>{L(),m==="pending"&&(V(),_())},n.timeout);return}_();return}const U={status:"pending",resource:A,callback:(O,ue)=>{te(U,O,ue)}};b.push(U),x++,w=setTimeout(W,n.rotate),l(A,i,U.callback)}return setTimeout(W),I}function Th(n){const i={...$v,...n};let l=[];function u(){l=l.filter(g=>g().status==="pending")}function a(g,m,x){const S=bv(i,g,m,(w,b)=>{u(),x&&x(w,b)});return l.push(S),S}function f(g){return l.find(m=>g(m))||null}return{query:a,find:f,setIndex:g=>{i.index=g},getIndex:()=>i.index,cleanup:u}}function up(){}const Ca=Object.create(null);function Ev(n){if(!Ca[n]){const i=zu(n);if(!i)return;const l=Th(i),u={config:i,redundancy:l};Ca[n]=u}return Ca[n]}function Rv(n,i,l){let u,a;if(typeof n=="string"){const f=nu(n);if(!f)return l(void 0,424),up;a=f.send;const h=Ev(n);h&&(u=h.redundancy)}else{const f=Ru(n);if(f){u=Th(f);const h=n.resources?n.resources[0]:"",g=nu(h);g&&(a=g.send)}}return!u||!a?(l(void 0,424),up):u.query(i,a,l)().abort}const cp="iconify2",Co="iconify",Ih=Co+"-count",dp=Co+"-version",Nh=36e5,Pv=168;function ru(n,i){try{return n.getItem(i)}catch{}}function Lu(n,i,l){try{return n.setItem(i,l),!0}catch{}}function fp(n,i){try{n.removeItem(i)}catch{}}function ou(n,i){return Lu(n,Ih,i.toString())}function iu(n){return parseInt(ru(n,Ih))||0}const hl={local:!0,session:!0},Oh={local:new Set,session:new Set};let _u=!1;function zv(n){_u=n}let Ai=typeof window>"u"?{}:window;function Fh(n){const i=n+"Storage";try{if(Ai&&Ai[i]&&typeof Ai[i].length=="number")return Ai[i]}catch{}hl[n]=!1}function Mh(n,i){const l=Fh(n);if(!l)return;const u=ru(l,dp);if(u!==cp){if(u){const g=iu(l);for(let m=0;m<g;m++)fp(l,Co+m.toString())}Lu(l,dp,cp),ou(l,0);return}const a=Math.floor(Date.now()/Nh)-Pv,f=g=>{const m=Co+g.toString(),x=ru(l,m);if(typeof x=="string"){try{const S=JSON.parse(x);if(typeof S=="object"&&typeof S.cached=="number"&&S.cached>a&&typeof S.provider=="string"&&typeof S.data=="object"&&typeof S.data.prefix=="string"&&i(S,g))return!0}catch{}fp(l,m)}};let h=iu(l);for(let g=h-1;g>=0;g--)f(g)||(g===h-1?(h--,ou(l,h)):Oh[n].add(g))}function Dh(){if(!_u){zv(!0);for(const n in hl)Mh(n,i=>{const l=i.data,u=i.provider,a=l.prefix,f=Mn(u,a);if(!Eu(f,l).length)return!1;const h=l.lastModified||-1;return f.lastModifiedCached=f.lastModifiedCached?Math.min(f.lastModifiedCached,h):h,!0})}}function Lv(n,i){const l=n.lastModifiedCached;if(l&&l>=i)return l===i;if(n.lastModifiedCached=i,l)for(const u in hl)Mh(u,a=>{const f=a.data;return a.provider!==n.provider||f.prefix!==n.prefix||f.lastModified===i});return!0}function _v(n,i){_u||Dh();function l(u){let a;if(!hl[u]||!(a=Fh(u)))return;const f=Oh[u];let h;if(f.size)f.delete(h=Array.from(f).shift());else if(h=iu(a),!ou(a,h+1))return;const g={cached:Math.floor(Date.now()/Nh),provider:n.provider,data:i};return Lu(a,Co+h.toString(),JSON.stringify(g))}i.lastModified&&!Lv(n,i.lastModified)||Object.keys(i.icons).length&&(i.not_found&&(i=Object.assign({},i),delete i.not_found),l("local")||l("session"))}function pp(){}function Tv(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout(()=>{n.iconsLoaderFlag=!1,Sv(n)}))}function Iv(n,i){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(i).sort():n.iconsToLoad=i,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout(()=>{n.iconsQueueFlag=!1;const{provider:l,prefix:u}=n,a=n.iconsToLoad;delete n.iconsToLoad;let f;if(!a||!(f=nu(l)))return;f.prepare(l,u,a).forEach(g=>{Rv(l,g,m=>{if(typeof m!="object")g.icons.forEach(x=>{n.missing.add(x)});else try{const x=Eu(n,m);if(!x.length)return;const S=n.pendingIcons;S&&x.forEach(w=>{S.delete(w)}),_v(n,m)}catch(x){console.error(x)}Tv(n)})})}))}const Nv=(n,i)=>{const l=jv(n,!0,Ph()),u=wv(l);if(!u.pending.length){let m=!0;return i&&setTimeout(()=>{m&&i(u.loaded,u.missing,u.pending,pp)}),()=>{m=!1}}const a=Object.create(null),f=[];let h,g;return u.pending.forEach(m=>{const{provider:x,prefix:S}=m;if(S===g&&x===h)return;h=x,g=S,f.push(Mn(x,S));const w=a[x]||(a[x]=Object.create(null));w[S]||(w[S]=[])}),u.pending.forEach(m=>{const{provider:x,prefix:S,name:w}=m,b=Mn(x,S),F=b.pendingIcons||(b.pendingIcons=new Set);F.has(w)||(F.add(w),a[x][S].push(w))}),f.forEach(m=>{const{provider:x,prefix:S}=m;a[x][S].length&&Iv(m,a[x][S])}),i?Cv(i,u,f):pp};function Ov(n,i){const l={...n};for(const u in i){const a=i[u],f=typeof a;u in zh?(a===null||a&&(f==="string"||f==="number"))&&(l[u]=a):f===typeof l[u]&&(l[u]=u==="rotate"?a%4:a)}return l}const Fv=/[\s,]+/;function Mv(n,i){i.split(Fv).forEach(l=>{switch(l.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0;break}})}function Dv(n,i=0){const l=n.replace(/^-?[0-9.]*/,"");function u(a){for(;a<0;)a+=4;return a%4}if(l===""){const a=parseInt(n);return isNaN(a)?0:u(a)}else if(l!==n){let a=0;switch(l){case"%":a=25;break;case"deg":a=90}if(a){let f=parseFloat(n.slice(0,n.length-l.length));return isNaN(f)?0:(f=f/a,f%1===0?u(f):0)}}return i}function Av(n,i){let l=n.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const u in i)l+=" "+u+'="'+i[u]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+l+">"+n+"</svg>"}function Bv(n){return n.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Wv(n){return"data:image/svg+xml,"+Bv(n)}function Uv(n){return'url("'+Wv(n)+'")'}let xo;function Hv(){try{xo=window.trustedTypes.createPolicy("iconify",{createHTML:n=>n})}catch{xo=null}}function Vv(n){return xo===void 0&&Hv(),xo?xo.createHTML(n):n}const Ah={...Lh,inline:!1},Qv={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Gv={display:"inline-block"},lu={backgroundColor:"currentColor"},Bh={backgroundColor:"transparent"},hp={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},mp={WebkitMask:lu,mask:lu,background:Bh};for(const n in mp){const i=mp[n];for(const l in hp)i[n+l]=hp[l]}const Yv={...Ah,inline:!0};function gp(n){return n+(n.match(/^[-0-9.]+$/)?"px":"")}const qv=(n,i,l,u)=>{const a=l?Yv:Ah,f=Ov(a,i),h=i.mode||"svg",g={},m=i.style||{},x={...h==="svg"?Qv:{},ref:u};for(let I in i){const _=i[I];if(_!==void 0)switch(I){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":f[I]=_===!0||_==="true"||_===1;break;case"flip":typeof _=="string"&&Mv(f,_);break;case"color":g.color=_;break;case"rotate":typeof _=="string"?f[I]=Dv(_):typeof _=="number"&&(f[I]=_);break;case"ariaHidden":case"aria-hidden":_!==!0&&_!=="true"&&delete x["aria-hidden"];break;default:a[I]===void 0&&(x[I]=_)}}const S=lv(n,f),w=S.attributes;if(f.inline&&(g.verticalAlign="-0.125em"),h==="svg"){x.style={...g,...m},Object.assign(x,w);let I=0,_=i.id;return typeof _=="string"&&(_=_.replace(/-/g,"_")),x.dangerouslySetInnerHTML={__html:Vv(cv(S.body,_?()=>_+"ID"+I++:"iconifyReact"))},ze.createElement("svg",x)}const{body:b,width:F,height:L}=n,z=h==="mask"||(h==="bg"?!1:b.indexOf("currentColor")!==-1),T=Av(b,{...w,width:F+"",height:L+""});return x.style={...g,"--svg":Uv(T),width:gp(w.width),height:gp(w.height),...Gv,...z?lu:Bh,...m},ze.createElement("span",x)};Ph(!0);dv("",vv);if(typeof document<"u"&&typeof window<"u"){Dh();const n=window;if(n.IconifyPreload!==void 0){const i=n.IconifyPreload,l="Invalid IconifyPreload syntax.";typeof i=="object"&&i!==null&&(i instanceof Array?i:[i]).forEach(u=>{try{(typeof u!="object"||u===null||u instanceof Array||typeof u.icons!="object"||typeof u.prefix!="string"||!nv(u))&&console.error(l)}catch{console.error(l)}})}if(n.IconifyProviders!==void 0){const i=n.IconifyProviders;if(typeof i=="object"&&i!==null)for(let l in i){const u="IconifyProviders["+l+"] is invalid.";try{const a=i[l];if(typeof a!="object"||!a||a.resources===void 0)continue;fv(l,a)||console.error(u)}catch{console.error(u)}}}}class Wh extends ze.Component{constructor(i){super(i),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(i){this.state.icon!==i&&this.setState({icon:i})}_checkIcon(i){const l=this.state,u=this.props.icon;if(typeof u=="object"&&u!==null&&typeof u.body=="string"){this._icon="",this._abortLoading(),(i||l.icon===null)&&this._setData({data:u});return}let a;if(typeof u!="string"||(a=pl(u,!1,!0))===null){this._abortLoading(),this._setData(null);return}const f=ev(a);if(!f){(!this._loading||this._loading.name!==u)&&(this._abortLoading(),this._icon="",this._setData(null),f!==null&&(this._loading={name:u,abort:Nv([a],this._checkIcon.bind(this,!1))}));return}if(this._icon!==u||l.icon===null){this._abortLoading(),this._icon=u;const h=["iconify"];a.prefix!==""&&h.push("iconify--"+a.prefix),a.provider!==""&&h.push("iconify--"+a.provider),this._setData({data:f,classes:h}),this.props.onLoad&&this.props.onLoad(u)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(i){i.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const i=this.props,l=this.state.icon;if(l===null)return i.children?i.children:ze.createElement("span",{});let u=i;return l.classes&&(u={...i,className:(typeof i.className=="string"?i.className+" ":"")+l.classes.join(" ")}),qv({...bu,...l.data},u,i._inline,i._ref)}}const ae=ze.forwardRef(function(i,l){const u={...i,_ref:l,_inline:!1};return ze.createElement(Wh,u)});ze.forwardRef(function(i,l){const u={...i,_ref:l,_inline:!0};return ze.createElement(Wh,u)});const Kv=v.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({$scrolled:n})=>n?"10px 40px":"15px 40px"};
  background-color: ${({theme:n})=>n.colors.bgCream};
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: ${({theme:n})=>n.transitions.smooth};
  box-shadow: ${({$scrolled:n})=>n?"0 4px 20px rgba(44, 34, 30, 0.04)":"none"};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 12px 20px; /* Reduced slightly for compact mobile layout */
  }
`,Xv=v(et)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  position: relative;
  cursor: pointer;
  transition: ${({theme:n})=>n.transitions.smooth};
  z-index: 101; /* Stay above mobile menu */

  &:hover {
    transform: rotate(5deg) scale(1.05);
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
  }
`,Jv=v.svg`
  width: 100%;
  height: 100%;

  text {
    font-family: ${({theme:n})=>n.colors.sans};
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 1.2px;
    fill: ${({theme:n})=>n.colors.charcoal};
    text-transform: uppercase;
  }
`,Zv=v.nav`
  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: none;
  }
`,e1=v.ul`
  display: flex;
  gap: 35px;
  list-style: none;
`,Bi=v(et)`
  text-decoration: none;
  color: ${({theme:n})=>n.colors.charcoal};
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  position: relative;
  padding: 5px 0;
  transition: ${({theme:n})=>n.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${({theme:n})=>n.colors.gold};
    transition: ${({theme:n})=>n.transitions.smooth};
  }

  &:hover {
    color: ${({theme:n})=>n.colors.gold};
  }

  &:hover::after {
    width: 100%;
  }
`,t1=v.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 101; /* Stay above mobile menu */
`,ja=v.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({theme:n})=>n.transitions.fast};

  svg {
    font-size: 20px;
    transition: ${({theme:n})=>n.transitions.smooth};
  }

  &:hover {
    color: ${({theme:n})=>n.colors.gold};
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,xp=v.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: ${({theme:n})=>n.colors.gold};
  color: ${({theme:n})=>n.colors.white};
  font-size: 0.6rem;
  font-weight: 700;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,n1=v.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 5px;
  align-items: center;
  justify-content: center;
  transition: ${({theme:n})=>n.transitions.fast};

  svg {
    font-size: 24px;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: flex;
  }
`,r1=v.div`
  display: none;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({theme:n})=>n.colors.bgCream};
    z-index: 99;
    padding: 120px 40px 40px 40px; /* Large top padding to make space for header logo/icons */
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(-100%)"};
    overflow-y: auto;
  }
`,o1=v.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Wi=v(et)`
  text-decoration: none;
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.2rem;
  color: ${({theme:n})=>n.colors.charcoal};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
  display: inline-block;

  &:hover {
    color: ${({theme:n})=>n.colors.gold};
    transform: translateX(10px);
  }
`;function i1({cartCount:n,wishlistCount:i,onOpenCart:l,onOpenWishlist:u,onOpenSearch:a}){const[f,h]=j.useState(!1),[g,m]=j.useState(!1),x=Lt();j.useEffect(()=>{const w=()=>{window.scrollY>50?h(!0):h(!1)};return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]),j.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),j.useEffect(()=>{m(!1)},[x]);const S=()=>{m(!1),x.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})};return d.jsxs(Kv,{$scrolled:f,children:[d.jsx(Xv,{to:"/",id:"brand-logo",onClick:S,children:d.jsxs(Jv,{viewBox:"0 0 100 100",children:[d.jsxs("defs",{children:[d.jsx("path",{id:"topCircle",d:"M 16,50 A 34,34 0 0,1 84,50",fill:"none"}),d.jsx("path",{id:"bottomCircle",d:"M 84,50 A 34,34 0 0,1 16,50",fill:"none"})]}),d.jsx("circle",{cx:"50",cy:"50",r:"46",fill:"none",stroke:"#2C221E",strokeWidth:"1.2",strokeDasharray:"3, 3"}),d.jsx("circle",{cx:"50",cy:"50",r:"38",fill:"none",stroke:"#DCA842",strokeWidth:"0.8"}),d.jsxs("g",{transform:"translate(38,36) scale(0.6)",stroke:"#2C221E",strokeWidth:"2.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M 20,36 C 20,36 10,24 20,10 C 30,24 20,36 20,36 Z",fill:"rgba(220, 168, 66, 0.08)"}),d.jsx("path",{d:"M 20,8 L 20,36",stroke:"#DCA842",strokeWidth:"2"}),d.jsx("path",{d:"M 20,16 C 27,15 31,19 31,19"}),d.jsx("path",{d:"M 20,22 C 13,21 9,25 9,25"}),d.jsx("path",{d:"M 20,26 C 26,25 29,28 29,28"})]}),d.jsx("text",{children:d.jsx("textPath",{href:"#topCircle",startOffset:"50%",textAnchor:"middle",children:"Island Child"})}),d.jsx("text",{children:d.jsx("textPath",{href:"#bottomCircle",startOffset:"50%",textAnchor:"middle",children:"Apparel"})})]})}),d.jsx(Zv,{children:d.jsxs(e1,{children:[d.jsx("li",{children:d.jsx(Bi,{to:"/",children:"Home"})}),d.jsx("li",{children:d.jsx(Bi,{to:"/shop",children:"Shop"})}),d.jsx("li",{children:d.jsx(Bi,{to:"/about",children:"About"})}),d.jsx("li",{children:d.jsx(Bi,{to:"/contact",children:"Contact"})})]})}),d.jsx(r1,{$isOpen:g,children:d.jsxs(o1,{children:[d.jsx("li",{children:d.jsx(Wi,{to:"/",children:"Home"})}),d.jsx("li",{children:d.jsx(Wi,{to:"/shop",children:"Shop"})}),d.jsx("li",{children:d.jsx(Wi,{to:"/about",children:"About"})}),d.jsx("li",{children:d.jsx(Wi,{to:"/contact",children:"Contact"})})]})}),d.jsxs(t1,{children:[d.jsx(ja,{onClick:a,"aria-label":"Search Catalog",children:d.jsx(ae,{icon:"ph:magnifying-glass"})}),d.jsxs(ja,{onClick:u,"aria-label":"Favorites List",children:[d.jsx(ae,{icon:"ph:heart"}),i>0&&d.jsx(xp,{children:i})]}),d.jsxs(ja,{onClick:l,"aria-label":"Shopping Bag",children:[d.jsx(ae,{icon:"ph:shopping-bag"}),n>0&&d.jsx(xp,{children:n})]}),d.jsx(n1,{onClick:()=>m(!g),"aria-label":g?"Close Menu":"Open Menu",children:d.jsx(ae,{icon:g?"ph:x":"ph:list"})})]})]})}const l1=v.footer`
  background-color: ${({theme:n})=>n.colors.sandLight};
  padding: 80px 40px 40px 40px;
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 60px 20px 30px 20px;
  }
`,s1=v.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto 50px auto;
`,$a=v.div`
  flex: 1.5;
  min-width: 240px;

  &:nth-child(2) {
    flex: 1;
    min-width: 150px;
  }
`,a1=v.h4`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 18px;
  color: ${({theme:n})=>n.colors.charcoal};
`,yp=v.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(44, 34, 30, 0.7);
  margin-bottom: 20px;
  max-width: 320px;
`,vp=v.h5`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({theme:n})=>n.colors.charcoal};
`,u1=v.ul`
  list-style: none;
  font-size: 0.85rem;
  line-height: 2.2;
  padding: 0;

  a {
    color: rgba(44, 34, 30, 0.7);
    text-decoration: none;
    transition: ${({theme:n})=>n.transitions.fast};

    &:hover {
      color: ${({theme:n})=>n.colors.gold};
    }
  }
`,c1=v.form`
  display: flex;
  gap: 8px;
  margin-top: 15px;
  max-width: 320px;
`,d1=v.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.8rem;
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;
  transition: ${({theme:n})=>n.transitions.fast};

  &:focus {
    border-color: ${({theme:n})=>n.colors.gold};
  }
`,f1=v.button`
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 10px 18px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 2px;
  cursor: pointer;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`,p1=v.p`
  font-size: 0.8rem;
  color: ${({theme:n})=>n.colors.sage};
  margin-top: 10px;
  font-weight: 500;
`,h1=v.div`
  border-top: 1px solid rgba(44, 34, 30, 0.08);
  padding-top: 30px;
  text-align: center;
  font-size: 0.75rem;
  color: ${({theme:n})=>n.colors.textMuted};
  letter-spacing: 0.02em;
`;function m1(){const[n,i]=j.useState(""),[l,u]=j.useState(!1),a=f=>{f.preventDefault(),n&&(u(!0),i(""),setTimeout(()=>{u(!1)},5e3))};return d.jsxs(l1,{children:[d.jsxs(s1,{children:[d.jsxs($a,{children:[d.jsx(a1,{children:"Island Child Apparel"}),d.jsx(yp,{children:"Bermudian boutique crafting organic, gender-neutral cotton clothing designed for baby play, explore, and rest."})]}),d.jsxs($a,{children:[d.jsx(vp,{children:"Boutique"}),d.jsxs(u1,{children:[d.jsx("li",{children:d.jsx(et,{to:"/",children:"Home"})}),d.jsx("li",{children:d.jsx(et,{to:"/shop",children:"Shop"})}),d.jsx("li",{children:d.jsx(et,{to:"/about",children:"Our Story"})}),d.jsx("li",{children:d.jsx(et,{to:"/contact",children:"Get in Touch"})})]})]}),d.jsxs($a,{children:[d.jsx(vp,{children:"Join the Narrative"}),d.jsx(yp,{children:"Receive news, organic restock releases, and boutique updates straight to your inbox."}),l?d.jsx(p1,{children:"Thank you! You have successfully joined the narrative."}):d.jsxs(c1,{onSubmit:a,children:[d.jsx(d1,{type:"email",placeholder:"Enter your email",value:n,onChange:f=>i(f.target.value),required:!0}),d.jsx(f1,{type:"submit",children:"Join"})]})]})]}),d.jsxs(h1,{children:["© ",new Date().getFullYear()," Island Child Apparel. All rights reserved. Bermuda local courier deliveries."]})]})}const g1=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 34, 30, 0.4);
  z-index: 999;
  opacity: ${({$isOpen:n})=>n?1:0};
  pointer-events: ${({$isOpen:n})=>n?"auto":"none"};
  transition: opacity 0.4s ease;
`,x1=v.div`
  position: fixed;
  top: 0;
  right: ${({$isOpen:n})=>n?"0":"-450px"};
  width: 100%;
  max-width: 450px;
  height: 100%;
  background-color: ${({theme:n})=>n.colors.bgCream};
  z-index: 1000;
  box-shadow: -10px 0 30px rgba(44, 34, 30, 0.1);
  transition: right 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  flex-direction: column;
`,y1=v.div`
  padding: 30px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,v1=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.6rem;
  font-weight: 400;
`,w1=v.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }
`,S1=v.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px;
`,k1=v.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
`,C1=v.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:n})=>n.colors.sandLight};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,j1=v.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  mix-blend-mode: multiply;
`,$1=v.div`
  flex: 1;
`,b1=v.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
`,E1=v.p`
  font-size: 0.75rem;
  color: ${({theme:n})=>n.colors.textMuted};
  margin-bottom: 10px;
`,R1=v.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,wp=v.button`
  background: none;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  width: 24px;
  height: 24px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.sand};
  }
`,P1=v.span`
  font-size: 0.85rem;
  font-weight: 600;
`,z1=v.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.gold};
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,L1=v.button`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(44, 34, 30, 0.4);
  font-size: 0.75rem;
  text-decoration: underline;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    color: ${({theme:n})=>n.colors.charcoal};
  }
`,_1=v.div`
  text-align: center;
  margin-top: 50px;
  color: rgba(44, 34, 30, 0.5);
`,T1=v.button`
  display: inline-block;
  background-color: ${({theme:n})=>n.colors.gold};
  color: ${({theme:n})=>n.colors.white};
  padding: 10px 25px;
  text-decoration: none;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(220, 168, 66, 0.15);
  margin-top: 20px;
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.goldHover};
    transform: translateY(-2px);
  }
`,I1=v.div`
  padding: 30px;
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
  background-color: ${({theme:n})=>n.colors.sandLight};
`,N1=v.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
`,O1=v.span`
  color: ${({theme:n})=>n.colors.gold};
`,F1=v.button`
  width: 100%;
  display: block;
  text-align: center;
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`;function M1({isOpen:n,onClose:i,cart:l,onUpdateQty:u,onRemoveItem:a,onOpenCheckout:f}){const h=l.reduce((m,x)=>m+x.price*x.quantity,0),g=()=>{l.length!==0&&(f(),i())};return d.jsxs(d.Fragment,{children:[d.jsx(g1,{$isOpen:n,onClick:i}),d.jsxs(x1,{$isOpen:n,children:[d.jsxs(y1,{children:[d.jsx(v1,{children:"Your Bag"}),d.jsx(w1,{onClick:i,"aria-label":"Close Shopping Bag",children:d.jsx(ae,{icon:"ph:x"})})]}),d.jsx(S1,{children:l.length===0?d.jsxs(_1,{children:[d.jsx("p",{children:"Your shopping bag is empty."}),d.jsx(T1,{onClick:i,children:"Start Shopping"})]}):l.map((m,x)=>d.jsxs(k1,{children:[d.jsx(C1,{children:d.jsx(j1,{src:m.image,alt:m.title})}),d.jsxs($1,{children:[d.jsx(b1,{children:m.title}),d.jsxs(E1,{children:[m.color," / ",m.size]}),d.jsxs(R1,{children:[d.jsx(wp,{onClick:()=>u(x,-1),children:"-"}),d.jsx(P1,{children:m.quantity}),d.jsx(wp,{onClick:()=>u(x,1),children:"+"})]})]}),d.jsxs(z1,{children:[d.jsxs("span",{children:["$",(m.price*m.quantity).toFixed(2)]}),d.jsx(L1,{onClick:()=>a(x),children:"Remove"})]})]},`${m.id}-${m.color}-${m.size}`))}),d.jsxs(I1,{children:[d.jsxs(N1,{children:[d.jsx("span",{children:"Subtotal"}),d.jsxs(O1,{children:["$",h.toFixed(2)]})]}),d.jsx(F1,{onClick:g,disabled:l.length===0,children:"Proceed to Checkout"})]})]})]})}const D1=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 34, 30, 0.4);
  z-index: 999;
  opacity: ${({$isOpen:n})=>n?1:0};
  pointer-events: ${({$isOpen:n})=>n?"auto":"none"};
  transition: opacity 0.4s ease;
`,A1=v.div`
  position: fixed;
  top: 0;
  right: ${({$isOpen:n})=>n?"0":"-450px"};
  width: 100%;
  max-width: 450px;
  height: 100%;
  background-color: ${({theme:n})=>n.colors.bgCream};
  z-index: 1000;
  box-shadow: -10px 0 30px rgba(44, 34, 30, 0.1);
  transition: right 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  flex-direction: column;
`,B1=v.div`
  padding: 30px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,W1=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme:n})=>n.colors.charcoal};
`,U1=v.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }
`,H1=v.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px;
`,V1=v.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
`,Q1=v.div`
  width: 80px;
  height: 80px;
  background-color: ${({theme:n})=>n.colors.sandLight};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,G1=v.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  mix-blend-mode: multiply;
`,Y1=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,q1=v.h4`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${({theme:n})=>n.colors.charcoal};
`,K1=v.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.gold};
`,X1=v.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`,J1=v.button`
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 6px 12px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`,Z1=v.button`
  background: none;
  border: none;
  color: ${({theme:n})=>n.colors.textMuted};
  font-size: 0.65rem;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  padding: 0;

  &:hover {
    color: ${({theme:n})=>n.colors.charcoal};
  }
`,ew=v.div`
  text-align: center;
  padding: 80px 0;
  color: ${({theme:n})=>n.colors.textMuted};

  p {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
`,tw=v.button`
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 12px 30px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`;function nw({isOpen:n,onClose:i,wishlist:l,onRemoveFromWishlist:u,onMoveToBag:a}){return d.jsxs(d.Fragment,{children:[d.jsx(D1,{$isOpen:n,onClick:i}),d.jsxs(A1,{$isOpen:n,children:[d.jsxs(B1,{children:[d.jsx(W1,{children:"Your Favorites"}),d.jsx(U1,{onClick:i,"aria-label":"Close Favorites",children:d.jsx(ae,{icon:"ph:x"})})]}),d.jsx(H1,{children:l.length===0?d.jsxs(ew,{children:[d.jsx("p",{children:"Your favorites list is empty."}),d.jsx(tw,{onClick:i,children:"Start Exploring"})]}):l.map(f=>d.jsxs(V1,{children:[d.jsx(Q1,{children:d.jsx(G1,{src:f.image,alt:f.title})}),d.jsxs(Y1,{children:[d.jsxs("div",{children:[d.jsx(q1,{children:f.title}),d.jsxs(K1,{children:["$",f.price.toFixed(2)]})]}),d.jsxs(X1,{children:[d.jsx(J1,{onClick:()=>a(f),children:"Move to Bag"}),d.jsx(Z1,{onClick:()=>u(f.id),children:"Remove"})]})]})]},f.id))})]})]})}const rw=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 34, 30, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({$isOpen:n})=>n?1:0};
  pointer-events: ${({$isOpen:n})=>n?"auto":"none"};
  transition: opacity 0.4s ease;
  padding: 20px;
`,ow=v.div`
  background-color: ${({theme:n})=>n.colors.bgCream};
  width: 100%;
  max-width: 550px;
  border-radius: 6px;
  box-shadow: 0 10px 40px rgba(44, 34, 30, 0.15);
  border: 1px solid ${({theme:n})=>n.colors.borderLight};
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  transform: ${({$isOpen:n})=>n?"translateY(0)":"translateY(30px)"};
`,iw=v.div`
  padding: 25px 30px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,lw=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({theme:n})=>n.colors.charcoal};
`,sw=v.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }
`,aw=v.form`
  padding: 30px;
  overflow-y: auto;
  flex: 1;
`,ba=v.h3`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({theme:n})=>n.colors.gold};
  margin-bottom: 20px;
  font-weight: 600;
`,mn=v.div`
  margin-bottom: 18px;
`,gn=v.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 6px;
  color: ${({theme:n})=>n.colors.charcoal};
`,xn=v.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.85rem;
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;
  transition: ${({theme:n})=>n.transitions.fast};

  &:focus {
    border-color: ${({theme:n})=>n.colors.gold};
  }
`,Sp=v.div`
  display: flex;
  gap: 15px;

  & > div {
    flex: 1;
  }
`,uw=v.div`
  background-color: ${({theme:n})=>n.colors.sandLight};
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 25px;
  border: 1px solid ${({theme:n})=>n.colors.borderLight};
`,Ea=v.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 0.95rem;
    border-top: 1px dashed rgba(44, 34, 30, 0.15);
    padding-top: 8px;
  }
`,cw=v.div`
  padding: 25px 30px;
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
  display: flex;
  gap: 15px;
`,dw=v.button`
  flex: 1;
  background: none;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 14px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.sandLight};
  }
`,fw=v.button`
  flex: 2;
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 14px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(44, 34, 30, 0.15);
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }

  &:disabled {
    background-color: ${({theme:n})=>n.colors.textMuted};
    cursor: not-allowed;
    box-shadow: none;
  }
`,pw=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(254, 252, 249, 0.95);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 40px;
  text-align: center;
`,hw=$u`
  to { transform: rotate(360deg); }
`,mw=v.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({theme:n})=>n.colors.sand};
  border-top-color: ${({theme:n})=>n.colors.gold};
  border-radius: 50%;
  animation: ${hw} 1s linear infinite;
  margin-bottom: 20px;
`,gw=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme:n})=>n.colors.bgCream};
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`,xw=v.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(143, 158, 139, 0.15);
  color: ${({theme:n})=>n.colors.sage};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 25px;
`,yw=v.div`
  background-color: ${({theme:n})=>n.colors.sandLight};
  padding: 10px 20px;
  border-radius: 4px;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: ${({theme:n})=>n.colors.charcoal};
  margin: 15px 0 25px 0;
  border: 1px dashed ${({theme:n})=>n.colors.sand};
`,vw=v.button`
  background-color: ${({theme:n})=>n.colors.gold};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 12px 30px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.goldHover};
  }
`;function ww({isOpen:n,onClose:i,cart:l,total:u,onClearCart:a}){const[f,h]=j.useState({name:"",email:"",address:"",city:"",country:"Bermuda",card:"",expiry:"",cvv:""}),[g,m]=j.useState(!1),[x,S]=j.useState(null),w=L=>{const{name:z,value:T}=L.target;h(I=>({...I,[z]:T}))},b=L=>{L.preventDefault(),!(!f.name||!f.email||!f.address||!f.card)&&(m(!0),setTimeout(()=>{fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:l.map(z=>({id:z.id,title:z.title,color:z.color,size:z.size,price:z.price,quantity:z.quantity})),customer:{name:f.name,email:f.email,address:f.address,city:f.city,country:f.country},total:u})}).then(z=>{if(!z.ok)throw new Error("Failed to create order");return z.json()}).then(z=>{m(!1),S(z.order),a()}).catch(z=>{console.error(z),m(!1),alert("Failed to submit checkout order. Please check that server is active.")})},2e3))},F=()=>{S(null),i()};return d.jsx(rw,{$isOpen:n,onClick:i,children:d.jsxs(ow,{$isOpen:n,onClick:L=>L.stopPropagation(),children:[d.jsxs(iw,{children:[d.jsx(lw,{children:"Checkout"}),d.jsx(sw,{onClick:i,"aria-label":"Close Checkout",children:d.jsx(ae,{icon:"ph:x"})})]}),g&&d.jsxs(pw,{children:[d.jsx(mw,{}),d.jsx("h3",{children:"Processing payment securely..."}),d.jsx("p",{style:{fontSize:"0.85rem",color:"#8F9E8B",marginTop:"10px"},children:"Securing your GOTS-certified organic cotton package."})]}),x&&d.jsxs(gw,{children:[d.jsx(xw,{children:d.jsx(ae,{icon:"ph:check"})}),d.jsx("h2",{style:{fontFamily:"var(--font-serif)",fontWeight:400},children:"Order Confirmed!"}),d.jsxs("p",{style:{fontSize:"0.9rem",color:"rgba(44, 34, 30, 0.7)",marginTop:"10px",maxWidth:"350px"},children:["Thank you, ",x.customer.name,"! We have received your order. A copy of the receipt has been sent to ",x.customer.email,"."]}),d.jsxs(yw,{children:["Order Reference: ",x.id]}),d.jsx(vw,{onClick:F,children:"Back to Collection"})]}),d.jsxs(aw,{onSubmit:b,children:[d.jsx(ba,{children:"1. Shipping Information"}),d.jsxs(mn,{children:[d.jsx(gn,{children:"Full Name"}),d.jsx(xn,{type:"text",name:"name",value:f.name,onChange:w,placeholder:"e.g. Mary Outerbridge",required:!0})]}),d.jsxs(mn,{children:[d.jsx(gn,{children:"Email Address"}),d.jsx(xn,{type:"email",name:"email",value:f.email,onChange:w,placeholder:"e.g. mary@islandchild.bm",required:!0})]}),d.jsxs(mn,{children:[d.jsx(gn,{children:"Street Address"}),d.jsx(xn,{type:"text",name:"address",value:f.address,onChange:w,placeholder:"e.g. 45 Front Street",required:!0})]}),d.jsxs(Sp,{children:[d.jsxs(mn,{children:[d.jsx(gn,{children:"City / Parish"}),d.jsx(xn,{type:"text",name:"city",value:f.city,onChange:w,placeholder:"e.g. Hamilton",required:!0})]}),d.jsxs(mn,{children:[d.jsx(gn,{children:"Country"}),d.jsx(xn,{type:"text",name:"country",value:f.country,onChange:w,placeholder:"Bermuda",required:!0})]})]}),d.jsx(ba,{style:{marginTop:"20px"},children:"2. Payment (Mock)"}),d.jsxs(mn,{children:[d.jsx(gn,{children:"Card Number"}),d.jsx(xn,{type:"text",name:"card",value:f.card,onChange:w,placeholder:"4111 •••• •••• ••••",maxLength:"19",required:!0})]}),d.jsxs(Sp,{children:[d.jsxs(mn,{children:[d.jsx(gn,{children:"Expiry Date"}),d.jsx(xn,{type:"text",name:"expiry",value:f.expiry,onChange:w,placeholder:"MM/YY",maxLength:"5",required:!0})]}),d.jsxs(mn,{children:[d.jsx(gn,{children:"Security Code (CVV)"}),d.jsx(xn,{type:"password",name:"cvv",value:f.cvv,onChange:w,placeholder:"•••",maxLength:"3",required:!0})]})]}),d.jsx(ba,{style:{marginTop:"20px"},children:"3. Summary"}),d.jsxs(uw,{children:[d.jsxs(Ea,{children:[d.jsxs("span",{children:["Subtotal (",l.reduce((L,z)=>L+z.quantity,0)," items)"]}),d.jsxs("span",{children:["$",u.toFixed(2)]})]}),d.jsxs(Ea,{children:[d.jsx("span",{children:"Shipping (Bermuda local courier)"}),d.jsx("span",{children:"FREE"})]}),d.jsxs(Ea,{children:[d.jsx("span",{children:"Total"}),d.jsxs("span",{children:["$",u.toFixed(2)]})]})]})]}),d.jsxs(cw,{children:[d.jsx(dw,{type:"button",onClick:i,children:"Cancel"}),d.jsxs(fw,{type:"submit",disabled:l.length===0,children:["Pay $",u.toFixed(2)]})]})]})})}const Sw=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(249, 244, 235, 0.98);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  opacity: ${({$isOpen:n})=>n?1:0};
  pointer-events: ${({$isOpen:n})=>n?"auto":"none"};
  transition: opacity 0.3s ease;
`,kw=v.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    top: 20px;
    right: 20px;
  }
`,Cw=v.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`,jw=v.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 30px;
`,$w=v.div`
  position: relative;
  border-bottom: 2px solid ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 20px;
`,bw=v.input`
  width: 100%;
  border: none;
  background: transparent;
  padding: 15px 0;
  font-size: 1.5rem;
  font-family: ${({theme:n})=>n.fonts.sans};
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;

  ::placeholder {
    color: rgba(44, 34, 30, 0.3);
  }
`,Ew=v.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
  }
`,Rw=v.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  list-style: none;
  font-size: 0.8rem;
  color: ${({theme:n})=>n.colors.textMuted};
`,Ui=v.a`
  color: ${({theme:n})=>n.colors.charcoal};
  text-decoration: none;
  font-weight: 600;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    color: ${({theme:n})=>n.colors.gold};
  }
`;function Pw({isOpen:n,onClose:i}){const l=j.useRef(null);return j.useEffect(()=>{if(n){document.body.style.overflow="hidden";const u=setTimeout(()=>{var a;(a=l.current)==null||a.focus()},100);return()=>{clearTimeout(u),document.body.style.overflow=""}}},[n]),j.useEffect(()=>{const u=a=>{a.key==="Escape"&&i()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[i]),d.jsxs(Sw,{$isOpen:n,children:[d.jsx(kw,{onClick:i,"aria-label":"Close Search",children:d.jsx(ae,{icon:"ph:x"})}),d.jsxs(Cw,{children:[d.jsx(jw,{children:"Search our boutique"}),d.jsxs($w,{children:[d.jsx(bw,{ref:l,type:"text",placeholder:"Search for clothing, accessories...","aria-label":"Search catalog"}),d.jsx(Ew,{"aria-label":"Submit Search",children:d.jsx(ae,{icon:"ph:magnifying-glass"})})]}),d.jsxs(Rw,{children:[d.jsx("li",{children:"Suggestions:"}),d.jsx("li",{children:d.jsx(Ui,{href:"#shop",onClick:i,children:"Sets"})}),d.jsx("li",{children:d.jsx(Ui,{href:"#shop",onClick:i,children:"Onesies"})}),d.jsx("li",{children:d.jsx(Ui,{href:"#shop",onClick:i,children:"Accessories"})}),d.jsx("li",{children:d.jsx(Ui,{href:"#shop",onClick:i,children:"Summer Collection"})})]})]})]})}const zw=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    display: none;
  }
`,Lw=v.div.attrs(({$x:n,$y:i})=>({style:{transform:`translate3d(${n-3}px, ${i-3}px, 0)`}}))`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: ${({theme:n})=>n.colors.white};
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease;
  will-change: transform;
`,_w=v.div.attrs(({$x:n,$y:i,$size:l})=>({style:{width:`${l}px`,height:`${l}px`,transform:`translate3d(${n-l/2}px, ${i-l/2}px, 0)`}}))`
  position: absolute;
  border: 1px solid ${({theme:n})=>n.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, width, height;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
`,Tw=v.span`
  color: ${({theme:n})=>n.colors.charcoal};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: ${({$show:n})=>n?1:0};
  transition: opacity 0.2s ease;
`;function Iw(){const[n,i]=j.useState({x:-100,y:-100}),[l,u]=j.useState({x:-100,y:-100}),[a,f]=j.useState("default"),h=j.useRef();j.useEffect(()=>{const S=()=>{u(w=>{const b=n.x-w.x,F=n.y-w.y;return{x:w.x+b*.15,y:w.y+F*.15}}),h.current=requestAnimationFrame(S)};return h.current=requestAnimationFrame(S),()=>cancelAnimationFrame(h.current)},[n]),j.useEffect(()=>{const S=w=>{i({x:w.clientX,y:w.clientY})};return window.addEventListener("mousemove",S),()=>window.removeEventListener("mousemove",S)},[]),j.useEffect(()=>{const S=w=>{const b=w.target.closest("[data-cursor], a, button, .swatch, .qty-btn");if(!b){f("default");return}const F=b.getAttribute("data-cursor");f(F||"link")};return window.addEventListener("mouseover",S),()=>window.removeEventListener("mouseover",S)},[]);let g=20,m=!1,x="";return a==="view"?(g=70,m=!0,x="view"):a==="drag"?(g=70,m=!0,x="drag"):a==="link"&&(g=40),n.x===-100?null:d.jsxs(zw,{children:[d.jsx(Lw,{$x:n.x,$y:n.y}),d.jsx(_w,{$x:l.x,$y:l.y,$size:g,children:d.jsx(Tw,{$show:m,children:x})})]})}function Nw(){const{pathname:n}=Lt();return j.useEffect(()=>{window.scrollTo(0,0)},[n]),null}const Uh=v.section`
  position: relative;
  height: 620px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    height: 500px;
  }
`,Ow=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,Fw=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.95);
  transition: transform 8s cubic-bezier(0.16, 1, 0.3, 1);

  ${Uh}:hover & {
    transform: scale(1.03);
  }
`,Mw=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(249, 244, 235, 0.1) 0%, rgba(44, 34, 30, 0.25) 100%);
  z-index: 2;
`,Dw=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: ${({theme:n})=>n.colors.white};
  max-width: 700px;
  padding: 0 20px;
  text-shadow: 0 2px 10px rgba(44, 34, 30, 0.15);
`,Aw=v.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 15px;
  opacity: 0.9;
`,Bw=v.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -0.01em;

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`,Ww=v.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 35px;
  opacity: 0.95;
  letter-spacing: 0.02em;
`,Uw=v.a`
  display: inline-block;
  background-color: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.charcoal};
  padding: 14px 35px;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    background-color: ${({theme:n})=>n.colors.bgCream};
    color: ${({theme:n})=>n.colors.gold};
  }
`;function Hw(){return d.jsxs(Uh,{id:"home",children:[d.jsx(Ow,{children:d.jsx(Fw,{src:"assets/hero_baby.png",alt:"Baby resting on fluffy fur fabric wearing neutral knitwear"})}),d.jsx(Mw,{}),d.jsxs(Dw,{children:[d.jsx(Aw,{children:"Island Child Apparel"}),d.jsx(Bw,{children:"Speciality Gender-Neutral Pieces."}),d.jsx(Ww,{children:"Minimal clothing for all to wear, anytime, anywhere!"}),d.jsx(Uw,{href:"#shop",children:"Shop Now"})]})]})}const Hh=v.div`
  flex: 0 0 calc(33.333% - 20px);
  min-width: 300px;
  display: flex;
  flex-direction: column;
  background: transparent;
  transition: ${({theme:n})=>n.transitions.smooth};

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    flex: 0 0 calc(50% - 15px);
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    flex: 0 0 100%;
  }
`,Vw=$u`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
`,Vh=v.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({theme:n})=>n.colors.sandLight};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
  box-shadow: inset 0 0 20px rgba(44, 34, 30, 0.02);
  transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(220, 168, 66, 0.12) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  &:hover {
    background-color: ${({theme:n})=>n.colors.sand};
  }

  &:hover::before {
    opacity: 1;
    animation: ${Vw} 4s infinite ease-in-out;
  }
`,Qw=v.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  mix-blend-mode: multiply;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  ${Hh}:hover & {
    transform: scale(1.05);
  }
`,Gw=v.button`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 20px);
  background-color: rgba(255, 255, 255, 0.95);
  color: ${({theme:n})=>n.colors.charcoal};
  border: none;
  padding: 10px 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  white-space: nowrap;
  z-index: 5;

  ${Vh}:hover & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
    color: ${({theme:n})=>n.colors.white};
  }
`,Yw=v.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$active:n,theme:i})=>n?i.colors.gold:i.colors.charcoal};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.2s ease;
  z-index: 5;

  svg {
    font-size: 16px;
  }

  &:hover {
    transform: scale(1.15);
  }
`,qw=v.div`
  text-align: center;
  padding: 0 10px;
`,Kw=v.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`,Xw=v.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(44, 34, 30, 0.1);
  position: relative;
  background-color: ${({$colorVal:n})=>n};
  transform: scale(1);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease;

  &:hover {
    transform: scale(1.25);
  }

  &::after {
    display: ${({$active:n})=>n?"block":"none"};
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    border: 1.5px solid ${({theme:n})=>n.colors.charcoal};
  }
`,Jw=v(et)`
  text-decoration: none;
  color: ${({theme:n})=>n.colors.charcoal};
  
  &:hover h3 {
    color: ${({theme:n})=>n.colors.gold};
  }
`,Zw=v.h3`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 6px;
  letter-spacing: 0.01em;
  transition: ${({theme:n})=>n.transitions.fast};
`,eS=v.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:n})=>n.colors.gold};
`,tS=v.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 5px;
`,nS=v.button`
  background: none;
  border: 1px solid ${({$active:n,theme:i})=>n?i.colors.charcoal:i.colors.sand};
  padding: 2px 6px;
  font-size: 0.65rem;
  border-radius: 2px;
  cursor: pointer;
  font-weight: ${({$active:n})=>n?"600":"400"};
  color: ${({theme:n})=>n.colors.charcoal};
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    border-color: ${({theme:n})=>n.colors.charcoal};
  }
`;function Tu({product:n,onAddToCart:i,wishlist:l=[],onToggleWishlist:u}){const[a,f]=j.useState(n.colors[0]),[h,g]=j.useState("12-18m"),m=l.some(w=>w.id===n.id),x=w=>{w.preventDefault(),w.stopPropagation(),u(n)},S=w=>{w.preventDefault(),w.stopPropagation(),i({id:`${n.id}-${a.name.toLowerCase().replace(/\s+/g,"-")}`,title:n.title,price:n.price,image:a.image,color:a.name,size:h})};return d.jsxs(Hh,{children:[d.jsxs(Vh,{"data-cursor":"view",children:[d.jsx(Yw,{type:"button",$active:m,onClick:x,"aria-label":"Add to Favorites",children:d.jsx(ae,{icon:m?"ph:heart-fill":"ph:heart"})}),d.jsx(et,{to:`/product/${n.id}`,style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:d.jsx(Qw,{src:a.image,alt:n.title})}),d.jsx(Gw,{onClick:S,children:"Quick Add"})]}),d.jsxs(qw,{children:[d.jsx(Kw,{children:n.colors.map(w=>d.jsx(Xw,{title:w.name,$colorVal:w.hex,$active:a.name===w.name,onClick:()=>f(w)},w.name))}),d.jsx(Jw,{to:`/product/${n.id}`,children:d.jsx(Zw,{children:n.title})}),d.jsxs(eS,{children:["$",n.price.toFixed(2)]}),d.jsx(tS,{children:["6-12m","12-18m","18-24m"].map(w=>d.jsx(nS,{$active:h===w,onClick:()=>g(w),children:w},w))})]})]})}const rS=v.section`
  padding: 80px 40px;
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`,oS=v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 40px;
`,iS=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: -0.02em;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,lS=v(et)`
  font-size: 0.75rem;
  color: ${({theme:n})=>n.colors.charcoal};
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.08em;
  border-bottom: 1.5px solid ${({theme:n})=>n.colors.charcoal};
  padding-bottom: 2px;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    color: ${({theme:n})=>n.colors.gold};
    border-color: ${({theme:n})=>n.colors.gold};
  }
`,sS=v.div`
  overflow-x: auto;
  scroll-behavior: auto; /* Disabled smooth to allow drag/momentum to take control */
  scrollbar-width: none; /* Firefox */
  display: flex;
  gap: 30px;
  padding-bottom: 15px;
  user-select: none;

  &::-webkit-scrollbar {
    display: none; /* Safari / Chrome */
  }
`,aS=v.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme:n})=>n.colors.sand};
  margin-top: 40px;
  position: relative;
  border-radius: 1px;
`,uS=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 33.333%; /* Matches view ratio roughly */
  background-color: ${({theme:n})=>n.colors.charcoal};
  border-radius: 1px;
  transition: left 0.1s ease-out;
`;function cS({onAddToCart:n,wishlist:i,onToggleWishlist:l}){const[u,a]=j.useState([]),[f,h]=j.useState(!0),g=j.useRef(null),m=j.useRef(null),x=j.useRef(null),[S,w]=j.useState(!1),[b,F]=j.useState(0),[L,z]=j.useState(0),T=j.useRef(null),I=j.useRef(0),_=j.useRef(0);j.useEffect(()=>{fetch("/api/products").then(Z=>Z.json()).then(Z=>{a(Z),h(!1)}).catch(Z=>{console.error("Failed to fetch featured products:",Z),h(!1)})},[]);const V=u.slice(0,3),te=()=>{const Z=g.current,de=m.current,Le=x.current;if(!Z||!de||!Le)return;const fe=Z.scrollWidth-Z.clientWidth;if(fe<=0)return;const $e=Z.scrollLeft/fe,Ce=de.clientWidth,Fe=Le.clientWidth,ke=$e*(Ce-Fe);Le.style.left=`${ke}px`};j.useEffect(()=>{const Z=g.current;if(!Z)return;Z.addEventListener("scroll",te),window.addEventListener("resize",te);const de=setTimeout(te,100);return()=>{Z.removeEventListener("scroll",te),window.removeEventListener("resize",te),cancelAnimationFrame(T.current),clearTimeout(de)}},[]);const W=Z=>{const de=g.current;de&&(cancelAnimationFrame(T.current),w(!0),F(Z.pageX-de.offsetLeft),z(de.scrollLeft),_.current=Z.pageX,I.current=0)},A=()=>{S&&(w(!1),ue())},U=()=>{S&&(w(!1),ue())},O=Z=>{if(!S)return;Z.preventDefault();const de=g.current;if(!de)return;const fe=(Z.pageX-de.offsetLeft-b)*1.2;de.scrollLeft=L-fe,I.current=Z.pageX-_.current,_.current=Z.pageX},ue=()=>{const Z=g.current;if(!Z)return;const de=()=>{Z.scrollLeft-=I.current,I.current*=.92,Math.abs(I.current)>.2&&(T.current=requestAnimationFrame(de))};T.current=requestAnimationFrame(de)};return d.jsxs(rS,{id:"shop",children:[d.jsxs(oS,{children:[d.jsx(iS,{children:"Featured collection"}),d.jsx(lS,{to:"/shop",children:"View all"})]}),d.jsx(sS,{ref:g,className:"carousel-viewport","data-cursor":"drag",onMouseDown:W,onMouseLeave:A,onMouseUp:U,onMouseMove:O,children:f?d.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",padding:"40px 0",color:"#8F9E8B"},children:"Curating featured collection..."}):V.map(Z=>d.jsx(Tu,{product:Z,onAddToCart:n,wishlist:i,onToggleWishlist:l},Z.id))}),d.jsx(aS,{ref:m,children:d.jsx(uS,{ref:x})})]})}const Qh=v.section`
  position: relative;
  height: 480px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    height: 360px;
  }
`,dS=v.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;

  ${Qh}:hover & {
    transform: scale(1.04);
  }
`,fS=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(44, 34, 30, 0.2);
  z-index: 2;
`,pS=v.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: ${({theme:n})=>n.colors.white};
  max-width: 600px;
  padding: 0 20px;
  text-shadow: 0 2px 10px rgba(44, 34, 30, 0.15);
`,hS=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,mS=v.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.95;
  font-weight: 400;
`;function gS(){return d.jsxs(Qh,{children:[d.jsx(dS,{src:"assets/banner_socks.png",alt:"Infant feet wearing white knit textured socks"}),d.jsx(fS,{}),d.jsxs(pS,{children:[d.jsx(hS,{children:"High Quality Clothing"}),d.jsx(mS,{children:"Designed to keep up with all of the island babies and toddlers as they go on their everyday adventures."})]})]})}const xS=v.section`
  padding: 100px 20px;
  background-color: ${({theme:n})=>n.colors.bgCream};
  text-align: center;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`,yS=v.div`
  max-width: 650px;
  margin: 0 auto;
`,vS=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 25px;
  letter-spacing: -0.01em;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`,wS=v.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(44, 34, 30, 0.8);
  margin-bottom: 35px;
  letter-spacing: 0.02em;
`,SS=v(et)`
  display: inline-block;
  background-color: ${({theme:n})=>n.colors.gold};
  color: ${({theme:n})=>n.colors.white};
  padding: 14px 35px;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  box-shadow: 0 4px 15px rgba(220, 168, 66, 0.15);
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.goldHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(220, 168, 66, 0.25);
  }
`;function kS(){return d.jsx(xS,{children:d.jsxs(yS,{children:[d.jsx(vS,{children:"The Narrative"}),d.jsx(wS,{children:"We launched Island Child Apparel after observing a lack of premium, minimalist, and organic clothing options in Bermuda. Our boutique was crafted to offer comfortable, GOTS certified garments that keep baby skin safe while flowing naturally with the island breeze."}),d.jsx(SS,{to:"/about",children:"Read The Narrative"})]})})}const CS=v.section`
  display: flex;
  width: 100%;

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    flex-direction: column;
  }
`,Iu=v.a`
  flex: 1;
  height: 480px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    height: 380px;
  }
`,jS=v.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;

  ${Iu}:hover & {
    transform: scale(1.05);
  }
`,Gh=v(Iu)`
  background-color: ${({theme:n})=>n.colors.sage};
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(44, 34, 30, 0.05);
  }
`,$S=v.div`
  z-index: 2;
  margin-bottom: 20px;
  transition: ${({theme:n})=>n.transitions.smooth};

  svg {
    width: 80px;
    height: 80px;
    stroke: ${({theme:n})=>n.colors.white};
    stroke-width: 1.5;
    fill: none;
  }

  ${Gh}:hover & {
    transform: translateY(-5px) scale(1.05);
  }
`,bS=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(44, 34, 30, 0.1) 0%, rgba(44, 34, 30, 0.3) 100%);
  z-index: 2;
`,kp=v.h3`
  position: relative;
  z-index: 3;
  color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(44, 34, 30, 0.2);
`;function ES(){return d.jsxs(CS,{id:"contact",children:[d.jsxs(Gh,{href:"#shop",children:[d.jsx($S,{children:d.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",children:[d.jsx("path",{d:"M 50,15 C 32,15 22,25 22,45 C 22,68 34,83 50,83 C 66,83 78,68 78,45 C 78,25 68,15 50,15 Z",strokeWidth:"1.8",strokeLinecap:"round"}),d.jsx("path",{d:"M 50,15 C 40,15 35,22 35,32 C 35,42 42,47 50,47 C 58,47 65,42 65,32 C 65,22 60,15 50,15 Z",strokeWidth:"1.8",strokeLinecap:"round"}),d.jsx("path",{d:"M 35,32 C 35,22 45,8 50,8 C 55,8 65,22 65,32",strokeWidth:"1.2",strokeDasharray:"2, 2"}),d.jsx("circle",{cx:"50",cy:"11",r:"1.5",fill:"currentColor"})]})}),d.jsx(kp,{children:"Accessories"})]}),d.jsxs(Iu,{href:"#shop",children:[d.jsx(jS,{src:"assets/category_onesie.png",alt:"Onesies Category"}),d.jsx(bS,{}),d.jsx(kp,{children:"Onesies"})]})]})}const RS=v.section`
  padding: 100px 20px;
  background-color: ${({theme:n})=>n.colors.sandLight};
  text-align: center;
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
  overflow: hidden;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`,PS=v.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,zS=v.div`
  font-size: 2.5rem;
  color: ${({theme:n})=>n.colors.gold};
  opacity: 0.4;
  margin-bottom: 25px;
`,LS=v.div`
  transition: opacity 0.5s ease;
  opacity: ${({$active:n})=>n?1:0};
  display: ${({$active:n})=>n?"block":"none"};
`,_S=v.p`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.5rem;
  line-height: 1.7;
  color: ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 25px;
  font-style: italic;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`,TS=v.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.textMuted};
`,IS=v.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 35px;
`,NS=v.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${({$active:n,theme:i})=>n?i.colors.gold:i.colors.sand};
  cursor: pointer;
  padding: 0;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`,Ra=[{quote:"The softest organic cotton I have ever found. My baby literally sleeps so well in the ribbed sets. Absolutely love the minimal aesthetic!",author:"Sarah M. — Hamilton, Bermuda"},{quote:"Island Child is our absolute go-to for gifts. The GOTS organic quality is amazing, and the shipping envelopes are biodegradable!",author:"David K. — Paget, Bermuda"},{quote:"So glad to have premium, gender-neutral options in Bermuda. The mineral-dyed oatmeal and sage colors look stunning in baby photos!",author:"Jessica T. — St. George's, Bermuda"}];function OS(){const[n,i]=j.useState(0);return j.useEffect(()=>{const l=setInterval(()=>{i(u=>(u+1)%Ra.length)},6e3);return()=>clearInterval(l)},[]),d.jsx(RS,{children:d.jsxs(PS,{children:[d.jsx(zS,{children:d.jsx(ae,{icon:"ph:quotes"})}),Ra.map((l,u)=>d.jsxs(LS,{$active:n===u,children:[d.jsxs(_S,{children:["“",l.quote,"”"]}),d.jsx(TS,{children:l.author})]},u)),d.jsx(IS,{children:Ra.map((l,u)=>d.jsx(NS,{$active:n===u,onClick:()=>i(u),"aria-label":`Go to slide ${u+1}`},u))})]})})}function FS({onAddToCart:n,wishlist:i,onToggleWishlist:l}){return d.jsxs(d.Fragment,{children:[d.jsx(Hw,{}),d.jsx(cS,{onAddToCart:n,wishlist:i,onToggleWishlist:l}),d.jsx(gS,{}),d.jsx(OS,{}),d.jsx(kS,{}),d.jsx(ES,{})]})}const MS=v.div`
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;
  padding: 80px 40px 120px 40px;
  position: relative;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 60px 20px 80px 20px;
  }
`,DS=v.div`
  text-align: center;
  margin-bottom: 70px;
  position: relative;
  z-index: 1;
`,AS=v.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9rem;
  font-family: ${({theme:n})=>n.fonts.serif};
  font-weight: 700;
  color: ${({theme:n})=>n.colors.sand};
  opacity: 0.25;
  pointer-events: none;
  white-space: nowrap;
  z-index: 0;
  user-select: none;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 5.5rem;
    top: -15px;
  }
`,BS=v.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 15px;
  position: relative;
  z-index: 2;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2.4rem;
  }
`,WS=v.p`
  font-size: 0.95rem;
  color: ${({theme:n})=>n.colors.textMuted};
  letter-spacing: 0.05em;
  position: relative;
  z-index: 2;
`,US=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
`,HS=v.div`
  position: relative;
  width: 100%;
  max-width: 320px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    max-width: 100%;
  }
`,VS=v.input`
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.sandLight};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.85rem;
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;
  transition: ${({theme:n})=>n.transitions.fast};

  &:focus {
    border-color: ${({theme:n})=>n.colors.gold};
    background-color: ${({theme:n})=>n.colors.white};
  }
`,QS=v.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:n})=>n.colors.textMuted};
  display: flex;
  align-items: center;
`,GS=v.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
`,Cp=v.select`
  padding: 12px 15px;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.white};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.85rem;
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;
  cursor: pointer;
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    border-color: ${({theme:n})=>n.colors.gold};
  }
`,YS=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;

  /* Asymmetric editorial offsets */
  & > div:nth-child(3n + 2) {
    margin-top: 40px;
  }
  & > div:nth-child(3n + 3) {
    margin-top: 80px;
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    & > div:nth-child(3n + 2),
    & > div:nth-child(3n + 3) {
      margin-top: 0;
    }
    & > div:nth-child(2n) {
      margin-top: 30px;
    }
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    & > div:nth-child(2n) {
      margin-top: 0;
    }
    gap: 30px;
  }
`,qS=v.div`
  width: 100%;
  text-align: center;
  padding: 80px 20px;
  color: ${({theme:n})=>n.colors.textMuted};

  svg {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${({theme:n})=>n.colors.sand};
  }

  h3 {
    font-family: ${({theme:n})=>n.fonts.serif};
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({theme:n})=>n.colors.charcoal};
    margin-bottom: 10px;
  }
`,KS=v.div`
  width: 100%;
  text-align: center;
  padding: 80px 20px;
  color: ${({theme:n})=>n.colors.textMuted};

  svg {
    font-size: 2.5rem;
    color: ${({theme:n})=>n.colors.gold};
    animation: spin 1.5s linear infinite;
    margin-bottom: 15px;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;function XS({onAddToCart:n,wishlist:i,onToggleWishlist:l}){const[u,a]=j.useState([]),[f,h]=j.useState(!0),[g,m]=j.useState(""),[x,S]=j.useState("All"),[w,b]=j.useState("Default");j.useEffect(()=>{fetch("/api/products").then(L=>L.json()).then(L=>{a(L),h(!1)}).catch(L=>{console.error("Failed to fetch products:",L),h(!1)})},[]);const F=u.filter(L=>{const z=L.title.toLowerCase().includes(g.toLowerCase())||L.description.toLowerCase().includes(g.toLowerCase()),T=x==="All"||L.category===x;return z&&T}).sort((L,z)=>w==="PriceLowHigh"?L.price-z.price:w==="PriceHighLow"?z.price-L.price:0);return d.jsxs(MS,{children:[d.jsx(AS,{children:"ORGANIC"}),d.jsxs(DS,{children:[d.jsx(BS,{children:"Our Collection"}),d.jsx(WS,{children:"Speciality, GOTS certified gender-neutral garments"})]}),d.jsxs(US,{children:[d.jsxs(HS,{children:[d.jsx(VS,{type:"text",placeholder:"Search our boutique...",value:g,onChange:L=>m(L.target.value)}),d.jsx(QS,{children:d.jsx(ae,{icon:"ph:magnifying-glass"})})]}),d.jsxs(GS,{children:[d.jsxs(Cp,{value:x,onChange:L=>S(L.target.value),"aria-label":"Filter by category",children:[d.jsx("option",{value:"All",children:"All Categories"}),d.jsx("option",{value:"Sets",children:"Sets"}),d.jsx("option",{value:"Onesies",children:"Onesies"}),d.jsx("option",{value:"Accessories",children:"Accessories"}),d.jsx("option",{value:"Tops",children:"Tops"}),d.jsx("option",{value:"Rompers",children:"Rompers"})]}),d.jsxs(Cp,{value:w,onChange:L=>b(L.target.value),"aria-label":"Sort products",children:[d.jsx("option",{value:"Default",children:"Featured"}),d.jsx("option",{value:"PriceLowHigh",children:"Price: Low to High"}),d.jsx("option",{value:"PriceHighLow",children:"Price: High to Low"})]})]})]}),f?d.jsxs(KS,{children:[d.jsx(ae,{icon:"ph:spinner-gap"}),d.jsx("p",{children:"Curating our premium organic garments..."})]}):F.length===0?d.jsxs(qS,{children:[d.jsx(ae,{icon:"ph:smiley-sad"}),d.jsx("h3",{children:"No items found"}),d.jsx("p",{children:"Try searching for a different keyword or adjusting your filters."})]}):d.jsx(YS,{children:F.map(L=>d.jsx(Tu,{product:L,onAddToCart:n,wishlist:i,onToggleWishlist:l},L.id))})]})}const Pa=v.div`
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;
  padding: 60px 40px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 40px 20px;
  }
`,JS=v.div`
  margin-bottom: 30px;
  font-size: 0.8rem;
  color: ${({theme:n})=>n.colors.textMuted};

  a {
    color: ${({theme:n})=>n.colors.charcoal};
    text-decoration: none;
    font-weight: 500;
    transition: ${({theme:n})=>n.transitions.fast};

    &:hover {
      color: ${({theme:n})=>n.colors.gold};
    }
  }

  span {
    margin: 0 8px;
  }
`,ZS=v.div`
  display: flex;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    flex-direction: column;
    gap: 40px;
  }
`,ek=v.div`
  flex: 1.2;
  background-color: ${({theme:n})=>n.colors.sandLight};
  border-radius: 6px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 30px rgba(44, 34, 30, 0.03);
`,tk=v.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  mix-blend-mode: multiply;
`,nk=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,rk=v.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({theme:n})=>n.colors.gold};
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`,ok=v.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 15px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2rem;
  }
`,ik=v.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 25px;
`,lk=v.hr`
  border: 0;
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
  margin: 25px 0;
`,jp=v.h4`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;

  span {
    font-weight: 400;
    color: ${({theme:n})=>n.colors.textMuted};
    text-transform: none;
    margin-left: 5px;
  }
`,sk=v.div`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
`,ak=v.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(44, 34, 30, 0.15);
  position: relative;
  transition: ${({theme:n})=>n.transitions.fast};
  background-color: ${({$colorVal:n})=>n};

  &::after {
    display: ${({$active:n})=>n?"block":"none"};
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    border: 1.5px solid ${({theme:n})=>n.colors.charcoal};
  }
`,uk=v.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`,ck=v.button`
  background: none;
  border: 1.5px solid ${({$active:n,theme:i})=>n?i.colors.charcoal:i.colors.sand};
  padding: 10px 20px;
  font-size: 0.8rem;
  font-weight: ${({$active:n})=>n?"600":"400"};
  border-radius: 2px;
  cursor: pointer;
  color: ${({theme:n})=>n.colors.charcoal};
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    border-color: ${({theme:n})=>n.colors.charcoal};
  }
`,dk=v.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`,fk=v.div`
  display: flex;
  align-items: center;
  border: 1.5px solid ${({theme:n})=>n.colors.sand};
  border-radius: 2px;
`,$p=v.button`
  background: none;
  border: none;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:n})=>n.colors.charcoal};
  transition: ${({theme:n})=>n.transitions.fast};

  &:hover {
    background-color: ${({theme:n})=>n.colors.sandLight};
  }
`,pk=v.span`
  width: 40px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
`,hk=v.button`
  flex: 1;
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 14px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`,mk=v.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: ${({theme:n})=>n.colors.gold};
  margin-top: 10px;
  margin-bottom: 20px;
  
  span {
    color: ${({theme:n})=>n.colors.textMuted};
    margin-left: 5px;
    font-size: 0.8rem;
  }
`,gk=v.button`
  background: none;
  border: 1.5px solid ${({theme:n})=>n.colors.sand};
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$active:n,theme:i})=>n?i.colors.gold:i.colors.charcoal};
  transition: ${({theme:n})=>n.transitions.fast};

  svg {
    font-size: 20px;
  }

  &:hover {
    border-color: ${({theme:n})=>n.colors.charcoal};
    transform: scale(1.03);
  }
`,xk=v.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(44, 34, 30, 0.8);
  margin-bottom: 30px;
`,yk=v.div`
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
`,za=v.div`
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
`,La=v.button`
  width: 100%;
  background: none;
  border: none;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:n})=>n.colors.charcoal};

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
    transform: ${({$isOpen:n})=>n?"rotate(180deg)":"rotate(0deg)"};
  }
`,_a=v.div`
  max-height: ${({$isOpen:n})=>n?"200px":"0"};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(44, 34, 30, 0.7);
  padding-bottom: ${({$isOpen:n})=>n?"15px":"0"};
`,vk=v.section`
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
  padding-top: 60px;
`,wk=v.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
`,Sk=v.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;function kk({onAddToCart:n,wishlist:i=[],onToggleWishlist:l}){const{id:u}=D0(),[a,f]=j.useState(null),[h,g]=j.useState(null),[m,x]=j.useState("12-18m"),[S,w]=j.useState(1),[b,F]=j.useState(null),L=a?i.some(O=>O.id===a.id):!1,z=()=>{a&&l(a)},[T,I]=j.useState([]),[_,V]=j.useState(!0);if(j.useEffect(()=>{V(!0),fetch("/api/products").then(O=>O.json()).then(O=>{I(O);const ue=O.find(Z=>Z.id===u);ue&&(f(ue),g(ue.colors[0]),w(1)),V(!1)}).catch(O=>{console.error("Failed to fetch product details:",O),V(!1)}),window.scrollTo(0,0)},[u]),_)return d.jsx(Pa,{style:{textAlign:"center",padding:"100px 20px",color:"#8F9E8B"},children:d.jsx("h2",{children:"Curating garment details..."})});if(!a)return d.jsxs(Pa,{style:{textAlign:"center",padding:"100px 20px"},children:[d.jsx("h2",{children:"Product not found"}),d.jsx(et,{to:"/shop",style:{color:"#DCA842",textDecoration:"underline",marginTop:"20px",display:"block"},children:"Return to Shop"})]});const te=O=>{w(ue=>Math.max(1,ue+O))},W=()=>{for(let O=0;O<S;O++)n({id:`${a.id}-${h.name.toLowerCase().replace(/\s+/g,"-")}`,title:a.title,price:a.price,image:h.image,color:h.name,size:m})},A=O=>{F(b===O?null:O)},U=T.filter(O=>O.id!==a.id).slice(0,3);return d.jsxs(Pa,{children:[d.jsxs(JS,{children:[d.jsx(et,{to:"/",children:"Home"}),d.jsx("span",{children:"—"}),d.jsx(et,{to:"/shop",children:"Shop"}),d.jsx("span",{children:"—"}),d.jsx("span",{children:a.title})]}),d.jsxs(ZS,{children:[d.jsx(ek,{children:h&&d.jsx(tk,{src:h.image,alt:a.title})}),d.jsxs(nk,{children:[d.jsx(rk,{children:a.category}),d.jsx(ok,{children:a.title}),d.jsxs(ik,{children:["$",a.price.toFixed(2)]}),d.jsxs(mk,{children:[d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx("span",{children:"4.9 (3 reviews)"})]}),d.jsx(xk,{children:a.description}),d.jsx(lk,{}),h&&d.jsxs(d.Fragment,{children:[d.jsxs(jp,{children:["Color: ",d.jsx("span",{children:h.name})]}),d.jsx(sk,{children:a.colors.map(O=>d.jsx(ak,{$colorVal:O.hex,$active:h.name===O.name,onClick:()=>g(O)},O.name))})]}),d.jsxs(jp,{children:["Size: ",d.jsx("span",{children:m})]}),d.jsx(uk,{children:["6-12m","12-18m","18-24m"].map(O=>d.jsx(ck,{$active:m===O,onClick:()=>x(O),children:O},O))}),d.jsxs(dk,{children:[d.jsxs(fk,{children:[d.jsx($p,{onClick:()=>te(-1),children:"-"}),d.jsx(pk,{children:S}),d.jsx($p,{onClick:()=>te(1),children:"+"})]}),d.jsx(hk,{onClick:W,children:"Add to Bag"}),d.jsx(gk,{type:"button",$active:L,onClick:z,"aria-label":"Add to Favorites",children:d.jsx(ae,{icon:L?"ph:heart-fill":"ph:heart"})})]}),d.jsxs(yk,{children:[d.jsxs(za,{children:[d.jsxs(La,{$isOpen:b==="materials",onClick:()=>A("materials"),children:[d.jsx("span",{children:"Materials & Care"}),d.jsx(ae,{icon:"ph:caret-down"})]}),d.jsxs(_a,{$isOpen:b==="materials",children:[d.jsx("p",{children:a.materials}),d.jsx("p",{style:{marginTop:"10px"},children:"Wash with similar colors on a cool, gentle cycle. Hang or lay flat to dry. Low iron if needed."})]})]}),d.jsxs(za,{children:[d.jsxs(La,{$isOpen:b==="shipping",onClick:()=>A("shipping"),children:[d.jsx("span",{children:"Shipping & Returns"}),d.jsx(ae,{icon:"ph:caret-down"})]}),d.jsxs(_a,{$isOpen:b==="shipping",children:[d.jsx("p",{children:a.shipping}),d.jsx("p",{style:{marginTop:"10px"},children:"We want you to love your purchase. Unworn and unwashed items can be returned within 14 days of delivery."})]})]}),d.jsxs(za,{children:[d.jsxs(La,{$isOpen:b==="reviews",onClick:()=>A("reviews"),children:[d.jsx("span",{children:"Customer Reviews (3)"}),d.jsx(ae,{icon:"ph:caret-down"})]}),d.jsx(_a,{$isOpen:b==="reviews",children:d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px",paddingTop:"10px"},children:[d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",color:"#DCA842",gap:"2px",fontSize:"0.75rem",marginBottom:"4px"},children:[d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"})]}),d.jsx("strong",{style:{fontSize:"0.85rem",color:"#2C221E"},children:"Wonderfully soft cotton!"}),d.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(44, 34, 30, 0.7)",marginTop:"4px"},children:"“This garment exceeded my expectations. The organic cotton is so soft and holds its shape perfectly after washing.” — Emily S."})]}),d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",color:"#DCA842",gap:"2px",fontSize:"0.75rem",marginBottom:"4px"},children:[d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"})]}),d.jsx("strong",{style:{fontSize:"0.85rem",color:"#2C221E"},children:"Perfect fit and lovely color"}),d.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(44, 34, 30, 0.7)",marginTop:"4px"},children:"“The color is beautiful and earthy. Snap fasteners make diaper changes very easy.” — Clara R."})]}),d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",color:"#DCA842",gap:"2px",fontSize:"0.75rem",marginBottom:"4px"},children:[d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-fill"}),d.jsx(ae,{icon:"ph:star-light"})]}),d.jsx("strong",{style:{fontSize:"0.85rem",color:"#2C221E"},children:"Highly recommended!"}),d.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(44, 34, 30, 0.7)",marginTop:"4px"},children:"“Keeps my baby cozy and looks very stylish. Delivery to Hamilton was super fast.” — Liam N."})]})]})})]})]})]})]}),d.jsxs(vk,{children:[d.jsx(wk,{children:"You may also like"}),d.jsx(Sk,{children:U.map(O=>d.jsx(Tu,{product:O,onAddToCart:n,wishlist:i,onToggleWishlist:l},O.id))})]})]})}const Ck=v.div`
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;
  padding: 80px 40px 120px 40px;
  position: relative;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 60px 20px 80px 20px;
  }
`,jk=v.div`
  text-align: center;
  margin-bottom: 60px;
`,$k=v.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 15px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2.4rem;
  }
`,bk=v.p`
  font-size: 0.95rem;
  color: ${({theme:n})=>n.colors.textMuted};
  letter-spacing: 0.05em;
`,Ek=v.div`
  width: 100%;
  height: 420px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 80px;
  box-shadow: 0 8px 30px rgba(44, 34, 30, 0.06);

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    height: 240px;
    margin-bottom: 60px;
  }
`,Rk=v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
`,Pk=v.div`
  max-width: 700px;
  margin: 0 auto 80px auto;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.8;
  font-family: ${({theme:n})=>n.fonts.serif};
  color: ${({theme:n})=>n.colors.charcoal};
  font-style: italic;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.05rem;
    margin-bottom: 60px;
  }
`,zk=v.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto 100px auto;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: ${({theme:n})=>n.colors.sand};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -0.5px;

    @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
      left: 20px;
    }
  }
`,Ta=v.div`
  position: relative;
  width: 50%;
  margin-bottom: 50px;
  box-sizing: border-box;

  /* Alternating left and right alignment */
  align-self: ${({$align:n})=>n==="left"?"flex-start":"flex-end"};
  padding: ${({$align:n})=>n==="left"?"0 50px 0 0":"0 0 0 50px"};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    width: 100%;
    align-self: flex-start;
    padding-left: 50px;
    padding-right: 0;
    margin-bottom: 40px;
  }
`,Ia=v.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.gold};
  border: 4px solid ${({theme:n})=>n.colors.bgCream};
  position: absolute;
  top: 30px;
  z-index: 10;
  box-shadow: 0 0 0 1px ${({theme:n})=>n.colors.sand};

  /* Alternating left and right position */
  right: ${({$align:n})=>n==="left"?"-11px":"auto"};
  left: ${({$align:n})=>n==="left"?"auto":"-11px"};

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    left: 12px !important;
    right: auto !important;
  }
`,Na=v.div`
  background-color: ${({theme:n})=>n.colors.white};
  padding: 40px;
  border-radius: 6px;
  border: 1px solid ${({theme:n})=>n.colors.borderLight};
  box-shadow: 0 4px 20px rgba(44, 34, 30, 0.02);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({theme:n})=>n.colors.gold};
  }

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 25px;
  }
`,Oa=v.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({theme:n})=>n.colors.gold};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  svg {
    font-size: 1rem;
  }
`,Fa=v.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 15px;
  line-height: 1.3;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`,Ma=v.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(44, 34, 30, 0.8);
`,Lk=v.div`
  background-color: ${({theme:n})=>n.colors.sandLight};
  padding: 40px;
  border-radius: 6px;
  border: 1px solid ${({theme:n})=>n.colors.borderLight};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 25px;
  }
`,_k=v.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 25px;
  color: ${({theme:n})=>n.colors.charcoal};
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${({theme:n})=>n.colors.gold};
  }
`,Tk=v.ul`
  list-style: none;
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(44, 34, 30, 0.8);

  li {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed rgba(44, 34, 30, 0.1);
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }

  span:first-child {
    font-weight: 600;
    color: ${({theme:n})=>n.colors.charcoal};
  }
`;function Ik(){return d.jsxs(Ck,{children:[d.jsxs(jk,{children:[d.jsx($k,{children:"The Narrative"}),d.jsx(bk,{children:"Boutique children's garments spun with Bermudian heritage"})]}),d.jsx(Ek,{children:d.jsx(Rk,{src:"assets/hero_baby.png",alt:"Baby sleeping in organic wrap"})}),d.jsx(Pk,{children:"“Every child is born on a soft shore, ready to feel the sun, the wind, and the comfort of protective threads. We build apparel that lets them play freely and nap deeply.”"}),d.jsxs(zk,{children:[d.jsxs(Ta,{$align:"left",children:[d.jsx(Ia,{$align:"left"}),d.jsxs(Na,{children:[d.jsxs(Oa,{children:[d.jsx(ae,{icon:"ph:seed"})," Chapter One — The Bermudian Seed"]}),d.jsx(Fa,{children:"Born in Hamilton"}),d.jsx(Ma,{children:"Island Child Apparel was conceived on the sun-washed pink sands of Bermuda. We observed a persistent challenge: finding high-end children's wear that was concurrently hypoallergenic, organic, and breezy enough to survive warm island summers. So, in October 2023, our seed was planted."})]})]}),d.jsxs(Ta,{$align:"right",children:[d.jsx(Ia,{$align:"right"}),d.jsxs(Na,{children:[d.jsxs(Oa,{children:[d.jsx(ae,{icon:"ph:flower-lotus"})," Chapter Two — The Pure Weave"]}),d.jsx(Fa,{children:"Organically Grown"}),d.jsx(Ma,{children:"We pledged to protect delicate baby skin by sourcing strictly GOTS-certified organic cotton. Sourced without pesticides, the cotton is spun into fine ribbed threads, dyed using mineral-infused plant elements, and pre-washed for immediate warmth and play-safe elasticity."})]})]}),d.jsxs(Ta,{$align:"left",children:[d.jsx(Ia,{$align:"left"}),d.jsxs(Na,{children:[d.jsxs(Oa,{children:[d.jsx(ae,{icon:"ph:paper-plane-tilt"})," Chapter Three — The Journey"]}),d.jsx(Fa,{children:"Earthy Elements"}),d.jsx(Ma,{children:"Inspired by the elements, we curated our palettes (honey gold, sand, sage green, and oatmeal). Packaged in biodegradable glassine envelopes and shipped from Front Street, each piece journeys straight to local and international nurseries carrying comfort and laughter."})]})]})]}),d.jsxs(Lk,{children:[d.jsxs(_k,{children:[d.jsx(ae,{icon:"ph:info"})," Boutique Summary"]}),d.jsxs(Tk,{children:[d.jsxs("li",{children:[d.jsx("span",{children:"Launch Date"}),d.jsx("span",{children:"October 2023"})]}),d.jsxs("li",{children:[d.jsx("span",{children:"Boutique Atelier"}),d.jsx("span",{children:"Front Street, Hamilton, Bermuda"})]}),d.jsxs("li",{children:[d.jsx("span",{children:"Direct Inquiries"}),d.jsx("span",{children:"hello@islandchildapparel.bm"})]}),d.jsxs("li",{children:[d.jsx("span",{children:"Eco Deliveries"}),d.jsx("span",{children:"Monday - Friday, 9:00 AM - 5:00 PM AST"})]})]})]})]})}const Nk=v.div`
  max-width: ${({theme:n})=>n.layout.maxWidth};
  margin: 0 auto;
  padding: 60px 40px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 40px 20px;
  }
`,Ok=v.div`
  text-align: center;
  margin-bottom: 50px;
`,Fk=v.h1`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 2.8rem;
  font-weight: 400;
  color: ${({theme:n})=>n.colors.charcoal};
  margin-bottom: 10px;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`,Mk=v.p`
  font-size: 0.95rem;
  color: ${({theme:n})=>n.colors.textMuted};
  letter-spacing: 0.05em;
`,Dk=v.div`
  display: flex;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: ${({theme:n})=>n.breakpoints.desktop}) {
    flex-direction: column;
    gap: 40px;
  }
`,Ak=v.div`
  flex: 1.2;
`,Bk=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 25px;
`,Wk=v.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Da=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Aa=v.label`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:n})=>n.colors.charcoal};
`,bp=v.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.sandLight};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.9rem;
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;
  transition: ${({theme:n})=>n.transitions.fast};

  &:focus {
    border-color: ${({theme:n})=>n.colors.gold};
    background-color: ${({theme:n})=>n.colors.white};
  }
`,Uk=v.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 15px;
  border: 1px solid ${({theme:n})=>n.colors.sand};
  border-radius: 4px;
  background-color: ${({theme:n})=>n.colors.sandLight};
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.9rem;
  color: ${({theme:n})=>n.colors.charcoal};
  outline: none;
  resize: vertical;
  transition: ${({theme:n})=>n.transitions.fast};

  &:focus {
    border-color: ${({theme:n})=>n.colors.gold};
    background-color: ${({theme:n})=>n.colors.white};
  }
`,Hk=v.button`
  background-color: ${({theme:n})=>n.colors.charcoal};
  color: ${({theme:n})=>n.colors.white};
  border: none;
  padding: 14px 35px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  align-self: flex-start;
  transition: ${({theme:n})=>n.transitions.smooth};

  &:hover {
    background-color: ${({theme:n})=>n.colors.gold};
  }
`,Vk=v.div`
  flex: 1;
`,Qk=v.h2`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 25px;
`,Gk=v.div`
  border-top: 1px solid ${({theme:n})=>n.colors.borderLight};
`,Ba=v.div`
  border-bottom: 1px solid ${({theme:n})=>n.colors.borderLight};
`,Wa=v.button`
  width: 100%;
  background: none;
  border: none;
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  font-family: ${({theme:n})=>n.fonts.sans};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:n})=>n.colors.charcoal};

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
    transform: ${({$isOpen:n})=>n?"rotate(180deg)":"rotate(0deg)"};
  }
`,Ua=v.div`
  max-height: ${({$isOpen:n})=>n?"200px":"0"};
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  font-size: 0.85rem;
  line-height: 1.7;
  color: rgba(44, 34, 30, 0.7);
  padding-bottom: ${({$isOpen:n})=>n?"18px":"0"};
`,Yk=v.div`
  background-color: ${({theme:n})=>n.colors.sandLight};
  padding: 40px;
  border-radius: 6px;
  border: 1px solid ${({theme:n})=>n.colors.borderLight};
  display: flex;

  @media (max-width: ${({theme:n})=>n.breakpoints.mobile}) {
    padding: 25px;
  }
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`,Ep=v.div`
  flex: 1;
  min-width: 250px;
`,qk=v.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.white};
  color: ${({theme:n})=>n.colors.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(44, 34, 30, 0.03);

  svg {
    font-size: 1.5rem;
  }
`,Rp=v.h3`
  font-family: ${({theme:n})=>n.fonts.serif};
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 10px;
`,Pp=v.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(44, 34, 30, 0.8);
`;function Kk(){const[n,i]=j.useState({name:"",email:"",message:""}),[l,u]=j.useState(null),a=g=>{const{name:m,value:x}=g.target;i(S=>({...S,[m]:x}))},f=g=>{g.preventDefault(),!(!n.name||!n.email||!n.message)&&(alert(`Thank you, ${n.name}! Your message has been sent successfully. We will get back to you shortly.`),i({name:"",email:"",message:""}))},h=g=>{u(l===g?null:g)};return d.jsxs(Nk,{children:[d.jsxs(Ok,{children:[d.jsx(Fk,{children:"Get in Touch"}),d.jsx(Mk,{children:"Have questions about sizes, delivery, or custom orders?"})]}),d.jsxs(Dk,{children:[d.jsxs(Ak,{children:[d.jsx(Bk,{children:"Send a Message"}),d.jsxs(Wk,{onSubmit:f,children:[d.jsxs(Da,{children:[d.jsx(Aa,{htmlFor:"name",children:"Your Name"}),d.jsx(bp,{id:"name",name:"name",type:"text",placeholder:"Enter your name",value:n.name,onChange:a,required:!0})]}),d.jsxs(Da,{children:[d.jsx(Aa,{htmlFor:"email",children:"Email Address"}),d.jsx(bp,{id:"email",name:"email",type:"email",placeholder:"Enter your email",value:n.email,onChange:a,required:!0})]}),d.jsxs(Da,{children:[d.jsx(Aa,{htmlFor:"message",children:"Message"}),d.jsx(Uk,{id:"message",name:"message",placeholder:"How can we help you?",value:n.message,onChange:a,required:!0})]}),d.jsx(Hk,{type:"submit",children:"Submit Form"})]})]}),d.jsxs(Vk,{children:[d.jsx(Qk,{children:"Frequently Asked Questions"}),d.jsxs(Gk,{children:[d.jsxs(Ba,{children:[d.jsxs(Wa,{$isOpen:l==="shipping",onClick:()=>h("shipping"),children:[d.jsx("span",{children:"Where do you ship?"}),d.jsx(ae,{icon:"ph:caret-down"})]}),d.jsx(Ua,{$isOpen:l==="shipping",children:"We offer free delivery island-wide in Bermuda on orders over $50. For orders under $50, local courier delivery is $5.00. Delivery takes between 1-3 business days."})]}),d.jsxs(Ba,{children:[d.jsxs(Wa,{$isOpen:l==="sizing",onClick:()=>h("sizing"),children:[d.jsx("span",{children:"How does your sizing run?"}),d.jsx(ae,{icon:"ph:caret-down"})]}),d.jsx(Ua,{$isOpen:l==="sizing",children:"Our GOTS organic ribbed cotton has excellent natural stretch and flexibility. In general, our sizing runs true to age, but we recommend sizing up if your little one is in between sizes."})]}),d.jsxs(Ba,{children:[d.jsxs(Wa,{$isOpen:l==="returns",onClick:()=>h("returns"),children:[d.jsx("span",{children:"What is your return policy?"}),d.jsx(ae,{icon:"ph:caret-down"})]}),d.jsx(Ua,{$isOpen:l==="returns",children:"We accept exchanges or refunds on all unworn, unwashed garments with tag attachments within 14 days of delivery. Sale items and custom sets are final sale."})]})]})]})]}),d.jsxs(Yk,{children:[d.jsxs(Ep,{children:[d.jsx(qk,{children:d.jsx(ae,{icon:"ph:map-pin"})}),d.jsx(Rp,{children:"Flagship Hamilton Location"}),d.jsx(Pp,{children:"Come visit our collection counter in central Front Street, Hamilton, Bermuda for package pick-ups, exchanges, or custom order previews."})]}),d.jsxs(Ep,{children:[d.jsx(Rp,{children:"Pick-Up Counter Timings"}),d.jsxs(Pp,{style:{lineHeight:"2"},children:[d.jsx("strong",{children:"Monday - Friday:"})," 10:00 AM - 4:00 PM ",d.jsx("br",{}),d.jsx("strong",{children:"Saturday:"})," 11:00 AM - 3:00 PM ",d.jsx("br",{}),d.jsx("strong",{children:"Sunday:"})," Closed"]})]})]})]})}const Xk=$u`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,uo=v.div`
  animation: ${Xk} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;function Jk(){const[n,i]=j.useState([{id:"oatmeal-set",title:"Short Sleeve Pocket Set",color:"Oatmeal",size:"6-12m",price:18,quantity:1,image:"assets/product_oatmeal.png"}]),[l,u]=j.useState([]),[a,f]=j.useState(!1),[h,g]=j.useState(!1),[m,x]=j.useState(!1),[S,w]=j.useState(!1);j.useEffect(()=>{try{const W=localStorage.getItem("wishlist");W&&u(JSON.parse(W))}catch(W){console.error("Failed to load wishlist from localStorage:",W)}},[]);const b=W=>{i(A=>{const U=A.findIndex(O=>O.id===W.id&&O.color===W.color&&O.size===W.size);if(U>-1){const O=[...A];return O[U].quantity+=1,O}return[...A,{...W,quantity:1}]}),f(!0)},F=(W,A)=>{i(U=>{const O=[...U];return O[W].quantity+=A,O[W].quantity<=0&&O.splice(W,1),O})},L=W=>{i(A=>{const U=[...A];return U.splice(W,1),U})},z=()=>{i([])},T=W=>{u(A=>{const U=A.some(ue=>ue.id===W.id);let O;return U?O=A.filter(ue=>ue.id!==W.id):O=[...A,W],localStorage.setItem("wishlist",JSON.stringify(O)),O})},I=W=>{u(A=>{const U=A.filter(O=>O.id!==W);return localStorage.setItem("wishlist",JSON.stringify(U)),U})},_=W=>{b({id:`${W.id}-${W.colors[0].name.toLowerCase().replace(/\s+/g,"-")}`,title:W.title,price:W.price,image:W.colors[0].image,color:W.colors[0].name,size:"12-18m"}),I(W.id),g(!1),f(!0)},V=n.reduce((W,A)=>W+A.quantity,0),te=n.reduce((W,A)=>W+A.price*A.quantity,0);return d.jsxs(Fy,{theme:Hy,children:[d.jsx(Vy,{}),d.jsx(Iw,{}),d.jsxs(jx,{children:[d.jsx(Nw,{}),d.jsx(Gy,{}),d.jsx(i1,{cartCount:V,wishlistCount:l.length,onOpenCart:()=>f(!0),onOpenWishlist:()=>g(!0),onOpenSearch:()=>w(!0)}),d.jsxs(ex,{children:[d.jsx(dr,{path:"/",element:d.jsx(uo,{children:d.jsx(FS,{onAddToCart:b,wishlist:l,onToggleWishlist:T})})}),d.jsx(dr,{path:"/shop",element:d.jsx(uo,{children:d.jsx(XS,{onAddToCart:b,wishlist:l,onToggleWishlist:T})})}),d.jsx(dr,{path:"/product/:id",element:d.jsx(uo,{children:d.jsx(kk,{onAddToCart:b,wishlist:l,onToggleWishlist:T})})}),d.jsx(dr,{path:"/about",element:d.jsx(uo,{children:d.jsx(Ik,{})})}),d.jsx(dr,{path:"/contact",element:d.jsx(uo,{children:d.jsx(Kk,{})})})]}),d.jsx(m1,{}),d.jsx(M1,{isOpen:a,onClose:()=>f(!1),cart:n,onUpdateQty:F,onRemoveItem:L,onOpenCheckout:()=>x(!0)}),d.jsx(nw,{isOpen:h,onClose:()=>g(!1),wishlist:l,onRemoveFromWishlist:I,onMoveToBag:_}),d.jsx(ww,{isOpen:m,onClose:()=>x(!1),cart:n,total:te,onClearCart:z}),d.jsx(Pw,{isOpen:S,onClose:()=>w(!1)})]})]})}Zg.createRoot(document.getElementById("root")).render(d.jsx(ze.StrictMode,{children:d.jsx(Jk,{})}));
