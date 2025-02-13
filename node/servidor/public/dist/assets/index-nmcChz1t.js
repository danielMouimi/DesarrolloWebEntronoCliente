(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Td={exports:{}},Fa={},Id={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function CT(){if(xg)return Ce;xg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,W={};function F(V,Y,fe){this.props=V,this.context=Y,this.refs=W,this.updater=fe||N}F.prototype.isReactComponent={},F.prototype.setState=function(V,Y){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Y,"setState")},F.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=F.prototype;function G(V,Y,fe){this.props=V,this.context=Y,this.refs=W,this.updater=fe||N}var ee=G.prototype=new H;ee.constructor=G,L(ee,F.prototype),ee.isPureReactComponent=!0;var de=Array.isArray,Se=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(V,Y,fe){var Ae,Re={},De=null,Me=null;if(Y!=null)for(Ae in Y.ref!==void 0&&(Me=Y.ref),Y.key!==void 0&&(De=""+Y.key),Y)Se.call(Y,Ae)&&!x.hasOwnProperty(Ae)&&(Re[Ae]=Y[Ae]);var Fe=arguments.length-2;if(Fe===1)Re.children=fe;else if(1<Fe){for(var $e=Array(Fe),_t=0;_t<Fe;_t++)$e[_t]=arguments[_t+2];Re.children=$e}if(V&&V.defaultProps)for(Ae in Fe=V.defaultProps,Fe)Re[Ae]===void 0&&(Re[Ae]=Fe[Ae]);return{$$typeof:n,type:V,key:De,ref:Me,props:Re,_owner:Te.current}}function R(V,Y){return{$$typeof:n,type:V.type,key:Y,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var Y={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return Y[fe]})}var M=/\/+/g;function C(V,Y){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):Y.toString(36)}function nt(V,Y,fe,Ae,Re){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Re=Re(Me),V=Ae===""?"."+C(Me,0):Ae,de(Re)?(fe="",V!=null&&(fe=V.replace(M,"$&/")+"/"),nt(Re,Y,fe,"",function(_t){return _t})):Re!=null&&(k(Re)&&(Re=R(Re,fe+(!Re.key||Me&&Me.key===Re.key?"":(""+Re.key).replace(M,"$&/")+"/")+V)),Y.push(Re)),1;if(Me=0,Ae=Ae===""?".":Ae+":",de(V))for(var Fe=0;Fe<V.length;Fe++){De=V[Fe];var $e=Ae+C(De,Fe);Me+=nt(De,Y,fe,$e,Re)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(De=V.next()).done;)De=De.value,$e=Ae+C(De,Fe++),Me+=nt(De,Y,fe,$e,Re);else if(De==="object")throw Y=String(V),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Me}function xt(V,Y,fe){if(V==null)return V;var Ae=[],Re=0;return nt(V,Ae,"","",function(De){return Y.call(fe,De,Re++)}),Ae}function Dt(V){if(V._status===-1){var Y=V._result;Y=Y(),Y.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=Y)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},re={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:Te};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:xt,forEach:function(V,Y,fe){xt(V,function(){Y.apply(this,arguments)},fe)},count:function(V){var Y=0;return xt(V,function(){Y++}),Y},toArray:function(V){return xt(V,function(Y){return Y})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=F,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=G,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=se,Ce.cloneElement=function(V,Y,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=L({},V.props),Re=V.key,De=V.ref,Me=V._owner;if(Y!=null){if(Y.ref!==void 0&&(De=Y.ref,Me=Te.current),Y.key!==void 0&&(Re=""+Y.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in Y)Se.call(Y,$e)&&!x.hasOwnProperty($e)&&(Ae[$e]=Y[$e]===void 0&&Fe!==void 0?Fe[$e]:Y[$e])}var $e=arguments.length-2;if($e===1)Ae.children=fe;else if(1<$e){Fe=Array($e);for(var _t=0;_t<$e;_t++)Fe[_t]=arguments[_t+2];Ae.children=Fe}return{$$typeof:n,type:V.type,key:Re,ref:De,props:Ae,_owner:Me}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=S,Ce.createFactory=function(V){var Y=S.bind(null,V);return Y.type=V,Y},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:d,render:V}},Ce.isValidElement=k,Ce.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Dt}},Ce.memo=function(V,Y){return{$$typeof:y,type:V,compare:Y===void 0?null:Y}},Ce.startTransition=function(V){var Y=re.transition;re.transition={};try{V()}finally{re.transition=Y}},Ce.unstable_act=se,Ce.useCallback=function(V,Y){return ze.current.useCallback(V,Y)},Ce.useContext=function(V){return ze.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},Ce.useEffect=function(V,Y){return ze.current.useEffect(V,Y)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(V,Y,fe){return ze.current.useImperativeHandle(V,Y,fe)},Ce.useInsertionEffect=function(V,Y){return ze.current.useInsertionEffect(V,Y)},Ce.useLayoutEffect=function(V,Y){return ze.current.useLayoutEffect(V,Y)},Ce.useMemo=function(V,Y){return ze.current.useMemo(V,Y)},Ce.useReducer=function(V,Y,fe){return ze.current.useReducer(V,Y,fe)},Ce.useRef=function(V){return ze.current.useRef(V)},Ce.useState=function(V){return ze.current.useState(V)},Ce.useSyncExternalStore=function(V,Y,fe){return ze.current.useSyncExternalStore(V,Y,fe)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var Dg;function yf(){return Dg||(Dg=1,Id.exports=CT()),Id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function PT(){if(Og)return Fa;Og=1;var n=yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,y){var v,T={},I=null,N=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(N=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(T[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)T[v]===void 0&&(T[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:N,props:T,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var Lg;function kT(){return Lg||(Lg=1,Td.exports=PT()),Td.exports}var b=kT(),$=yf(),Fu={},Sd={exports:{}},Zt={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function NT(){return Vg||(Vg=1,function(n){function e(re,me){var se=re.length;re.push(me);e:for(;0<se;){var V=se-1>>>1,Y=re[V];if(0<o(Y,me))re[V]=me,re[se]=Y,se=V;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],se=re.pop();if(se!==me){re[0]=se;e:for(var V=0,Y=re.length,fe=Y>>>1;V<fe;){var Ae=2*(V+1)-1,Re=re[Ae],De=Ae+1,Me=re[De];if(0>o(Re,se))De<Y&&0>o(Me,Re)?(re[V]=Me,re[De]=se,V=De):(re[V]=Re,re[Ae]=se,V=Ae);else if(De<Y&&0>o(Me,se))re[V]=Me,re[De]=se,V=De;else break e}}return me}function o(re,me){var se=re.sortIndex-me.sortIndex;return se!==0?se:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],v=1,T=null,I=3,N=!1,L=!1,W=!1,F=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function de(re){if(W=!1,ee(re),!L)if(t(p)!==null)L=!0,Dt(Se);else{var me=t(y);me!==null&&ze(de,me.startTime-re)}}function Se(re,me){L=!1,W&&(W=!1,H(S),S=-1),N=!0;var se=I;try{for(ee(me),T=t(p);T!==null&&(!(T.expirationTime>me)||re&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var Y=V(T.expirationTime<=me);me=n.unstable_now(),typeof Y=="function"?T.callback=Y:T===t(p)&&i(p),ee(me)}else i(p);T=t(p)}if(T!==null)var fe=!0;else{var Ae=t(y);Ae!==null&&ze(de,Ae.startTime-me),fe=!1}return fe}finally{T=null,I=se,N=!1}}var Te=!1,x=null,S=-1,R=5,k=-1;function O(){return!(n.unstable_now()-k<R)}function M(){if(x!==null){var re=n.unstable_now();k=re;var me=!0;try{me=x(!0,re)}finally{me?C():(Te=!1,x=null)}}else Te=!1}var C;if(typeof G=="function")C=function(){G(M)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,xt=nt.port2;nt.port1.onmessage=M,C=function(){xt.postMessage(null)}}else C=function(){F(M,0)};function Dt(re){x=re,Te||(Te=!0,C())}function ze(re,me){S=F(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){L||N||(L=!0,Dt(Se))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var se=I;I=me;try{return re()}finally{I=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=I;I=re;try{return me()}finally{I=se}},n.unstable_scheduleCallback=function(re,me,se){var V=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?V+se:V):se=V,re){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=se+Y,re={id:v++,callback:me,priorityLevel:re,startTime:se,expirationTime:Y,sortIndex:-1},se>V?(re.sortIndex=se,e(y,re),t(p)===null&&re===t(y)&&(W?(H(S),S=-1):W=!0,ze(de,se-V))):(re.sortIndex=Y,e(p,re),L||N||(L=!0,Dt(Se))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var me=I;return function(){var se=I;I=me;try{return re.apply(this,arguments)}finally{I=se}}}}(Rd)),Rd}var bg;function xT(){return bg||(bg=1,Ad.exports=NT()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function DT(){if(Mg)return Zt;Mg=1;var n=yf(),e=xT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return p.call(T,r)?!0:p.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function N(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,a,c){if(s===null||typeof s>"u"||N(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function W(r,s,a,c,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){F[r]=new W(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];F[s]=new W(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){F[r]=new W(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){F[r]=new W(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){F[r]=new W(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){F[r]=new W(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){F[r]=new W(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){F[r]=new W(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){F[r]=new W(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function G(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,G);F[s]=new W(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,G);F[s]=new W(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,G);F[s]=new W(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){F[r]=new W(r,1,!1,r.toLowerCase(),null,!1,!1)}),F.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){F[r]=new W(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var f=F.hasOwnProperty(s)?F[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,a,f,c)&&(a=null),c||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var de=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,V;function Y(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var fe=!1;function Ae(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var c=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){c=B}r.call(s.prototype)}else{try{throw Error()}catch(B){c=B}r()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var f=B.stack.split(`
`),g=c.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var P=`
`+f[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Y(r):""}function Re(r){switch(r.tag){case 5:return Y(r.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Te:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case xt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Dt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _t(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=_t(r))}function As(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Wr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Mi(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Rs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Wo(r,s){qo(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Cs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Cs(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Il(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Cs(r,s,a){(s!=="number"||Wr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Ho(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ps(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function ks(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Go(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,Ko=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ui=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(r){Ui.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Fi[s]=Fi[r]})});function Qo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Fi.hasOwnProperty(r)&&Fi[r]?(""+s).trim():s+"px"}function Yo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Qo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Jo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(r,s){if(s){if(Jo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Zo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Ns(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var xs=null,fn=null,Kn=null;function Ds(r){if(r=Ia(r)){if(typeof xs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Zl(s),xs(r.stateNode,r.type,s))}}function Qn(r){fn?Kn?Kn.push(r):Kn=[r]:fn=r}function ea(){if(fn){var r=fn,s=Kn;if(Kn=fn=null,Ds(r),s)for(r=0;r<s.length;r++)Ds(s[r])}}function zi(r,s){return r(s)}function ta(){}var _r=!1;function na(r,s,a){if(_r)return r(s,a);_r=!0;try{return zi(r,s,a)}finally{_r=!1,(fn!==null||Kn!==null)&&(ta(),ea())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Os=!1;if(d)try{var An={};Object.defineProperty(An,"passive",{get:function(){Os=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Os=!1}function Bi(r,s,a,c,f,g,w,A,P){var B=Array.prototype.slice.call(arguments,3);try{s.apply(a,B)}catch(X){this.onError(X)}}var $i=!1,Ls=null,Rn=!1,ra=null,Yc={onError:function(r){$i=!0,Ls=r}};function Vs(r,s,a,c,f,g,w,A,P){$i=!1,Ls=null,Bi.apply(Yc,arguments)}function Sl(r,s,a,c,f,g,w,A,P){if(Vs.apply(this,arguments),$i){if($i){var B=Ls;$i=!1,Ls=null}else throw Error(t(198));Rn||(Rn=!0,ra=B)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function qi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(Cn(r)!==r)throw Error(t(188))}function Al(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Pn(f),r;if(g===c)return Pn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var w=!1,A=f.child;A;){if(A===a){w=!0,a=f,c=g;break}if(A===c){w=!0,c=f,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,c=f;break}if(A===c){w=!0,c=g,a=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ia(r){return r=Al(r),r!==null?bs(r):null}function bs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=bs(r);if(s!==null)return s;r=r.sibling}return null}var Ms=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Rl=e.unstable_shouldYield,Jc=e.unstable_requestPaint,qe=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,Gr=e.unstable_UserBlockingPriority,pn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Pl=e.unstable_IdlePriority,Hi=null,rn=null;function kl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Hi,r,void 0,(r.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:xl,aa=Math.log,Nl=Math.LN2;function xl(r){return r>>>=0,r===0?32:31-(aa(r)/Nl|0)|0}var Fs=64,Us=4194304;function Kr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Gi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~f;A!==0?c=Kr(A):(g&=w,g!==0&&(c=Kr(g)))}else w=a&~f,w!==0?c=Kr(w):g!==0&&(c=Kr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-zt(s),f=1<<a,c|=r[a],s&=~f;return c}function Xc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-zt(g),A=1<<w,P=f[w];P===-1?(!(A&a)||A&c)&&(f[w]=Xc(A,s)):P<=s&&(r.expiredLanes|=A),g&=~A}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ki(){var r=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),r}function Qr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Yr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-zt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-zt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Jr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-zt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var Ne=0;function Xr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Dl,js,Ol,Ll,Vl,la=!1,Yn=[],St=null,kn=null,Nn=null,Zr=new Map,mn=new Map,Jn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(r,s){switch(r){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Zr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function Ht(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ia(s),s!==null&&js(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function eh(r,s,a,c,f){switch(s){case"focusin":return St=Ht(St,r,s,a,c,f),!0;case"dragenter":return kn=Ht(kn,r,s,a,c,f),!0;case"mouseover":return Nn=Ht(Nn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Zr.set(g,Ht(Zr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,mn.set(g,Ht(mn.get(g)||null,r,s,a,c,f)),!0}return!1}function Ml(r){var s=Zi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=qi(a),s!==null){r.blockedOn=s,Vl(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function wr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=zs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ji=c,a.target.dispatchEvent(c),ji=null}else return s=Ia(a),s!==null&&js(s),r.blockedOn=a,!1;s.shift()}return!0}function Qi(r,s,a){wr(r)&&a.delete(s)}function Fl(){la=!1,St!==null&&wr(St)&&(St=null),kn!==null&&wr(kn)&&(kn=null),Nn!==null&&wr(Nn)&&(Nn=null),Zr.forEach(Qi),mn.forEach(Qi)}function xn(r,s){r.blockedOn===s&&(r.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function Dn(r){function s(f){return xn(f,r)}if(0<Yn.length){xn(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(St!==null&&xn(St,r),kn!==null&&xn(kn,r),Nn!==null&&xn(Nn,r),Zr.forEach(s),mn.forEach(s),a=0;a<Jn.length;a++)c=Jn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)Ml(a),a.blockedOn===null&&Jn.shift()}var Er=de.ReactCurrentBatchConfig,ei=!0;function Qe(r,s,a,c){var f=Ne,g=Er.transition;Er.transition=null;try{Ne=1,ua(r,s,a,c)}finally{Ne=f,Er.transition=g}}function th(r,s,a,c){var f=Ne,g=Er.transition;Er.transition=null;try{Ne=4,ua(r,s,a,c)}finally{Ne=f,Er.transition=g}}function ua(r,s,a,c){if(ei){var f=zs(r,s,a,c);if(f===null)dh(r,s,c,Yi,a),bl(r,c);else if(eh(f,r,s,a,c))c.stopPropagation();else if(bl(r,c),s&4&&-1<Zc.indexOf(r)){for(;f!==null;){var g=Ia(f);if(g!==null&&Dl(g),g=zs(r,s,a,c),g===null&&dh(r,s,c,Yi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else dh(r,s,c,null,a)}}var Yi=null;function zs(r,s,a,c){if(Yi=null,r=Ns(c),r=Zi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=qi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Yi=r,null}function ca(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case Wi:return 1;case Gr:return 4;case pn:case oa:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var on=null,Bs=null,Gt=null;function ha(){if(Gt)return Gt;var r,s=Bs,a=s.length,c,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(c=1;c<=w&&s[a-c]===f[g-c];c++);return Gt=f.slice(r,1<c?1-c:void 0)}function $s(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xn(){return!0}function da(){return!1}function At(r){function s(a,c,f,g,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xn:da,this.isPropagationStopped=da,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=At(On),Zn=se({},On,{view:0,detail:0}),nh=At(Zn),Ws,Tr,ti,Ji=se({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ti&&(ti&&r.type==="mousemove"?(Ws=r.screenX-ti.screenX,Tr=r.screenY-ti.screenY):Tr=Ws=0,ti=r),Ws)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Hs=At(Ji),fa=se({},Ji,{dataTransfer:0}),Ul=At(fa),Gs=se({},Zn,{relatedTarget:0}),Ks=At(Gs),jl=se({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=At(jl),zl=se({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Bl=At(zl),$l=se({},On,{data:0}),pa=At($l),Qs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ql[r])?!!s[r]:!1}function er(){return Wl}var u=se({},Zn,{key:function(r){if(r.key){var s=Qs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=$s(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Bt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?$s(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?$s(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=se({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=At(_),U=se({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),q=At(U),ne=se({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(ne),ft=se({},Ji,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(ft),vt=[9,13,27,32],ot=d&&"CompositionEvent"in window,gn=null;d&&"documentMode"in document&&(gn=document.documentMode);var an=d&&"TextEvent"in window&&!gn,Xi=d&&(!ot||gn&&8<gn&&11>=gn),Ys=" ",Ap=!1;function Rp(r,s){switch(r){case"keyup":return vt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Js=!1;function AE(r,s){switch(r){case"compositionend":return Cp(s);case"keypress":return s.which!==32?null:(Ap=!0,Ys);case"textInput":return r=s.data,r===Ys&&Ap?null:r;default:return null}}function RE(r,s){if(Js)return r==="compositionend"||!ot&&Rp(r,s)?(r=ha(),Gt=Bs=on=null,Js=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xi&&s.locale!=="ko"?null:s.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!CE[r.type]:s==="textarea"}function kp(r,s,a,c){Qn(c),s=Yl(s,"onChange"),0<s.length&&(a=new qs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ma=null,ga=null;function PE(r){Gp(r,0)}function Hl(r){var s=no(r);if(As(s))return r}function kE(r,s){if(r==="change")return s}var Np=!1;if(d){var rh;if(d){var ih="oninput"in document;if(!ih){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),ih=typeof xp.oninput=="function"}rh=ih}else rh=!1;Np=rh&&(!document.documentMode||9<document.documentMode)}function Dp(){ma&&(ma.detachEvent("onpropertychange",Op),ga=ma=null)}function Op(r){if(r.propertyName==="value"&&Hl(ga)){var s=[];kp(s,ga,r,Ns(r)),na(PE,s)}}function NE(r,s,a){r==="focusin"?(Dp(),ma=s,ga=a,ma.attachEvent("onpropertychange",Op)):r==="focusout"&&Dp()}function xE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Hl(ga)}function DE(r,s){if(r==="click")return Hl(s)}function OE(r,s){if(r==="input"||r==="change")return Hl(s)}function LE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:LE;function ya(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!Ln(r[f],s[f]))return!1}return!0}function Lp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Vp(r,s){var a=Lp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function bp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?bp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Mp(){for(var r=window,s=Wr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Wr(r.document)}return s}function sh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function VE(r){var s=Mp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&bp(a.ownerDocument.documentElement,a)){if(c!==null&&sh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Vp(a,g);var w=Vp(a,c);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var bE=d&&"documentMode"in document&&11>=document.documentMode,Xs=null,oh=null,_a=null,ah=!1;function Fp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ah||Xs==null||Xs!==Wr(c)||(c=Xs,"selectionStart"in c&&sh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ya(_a,c)||(_a=c,c=Yl(oh,"onSelect"),0<c.length&&(s=new qs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Xs)))}function Gl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Zs={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},lh={},Up={};d&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Kl(r){if(lh[r])return lh[r];if(!Zs[r])return r;var s=Zs[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Up)return lh[r]=s[a];return r}var jp=Kl("animationend"),zp=Kl("animationiteration"),Bp=Kl("animationstart"),$p=Kl("transitionend"),qp=new Map,Wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ni(r,s){qp.set(r,s),l(s,[r])}for(var uh=0;uh<Wp.length;uh++){var ch=Wp[uh],ME=ch.toLowerCase(),FE=ch[0].toUpperCase()+ch.slice(1);ni(ME,"on"+FE)}ni(jp,"onAnimationEnd"),ni(zp,"onAnimationIteration"),ni(Bp,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni($p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Hp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Sl(c,s,void 0,r),r.currentTarget=null}function Gp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var w=c.length-1;0<=w;w--){var A=c[w],P=A.instance,B=A.currentTarget;if(A=A.listener,P!==g&&f.isPropagationStopped())break e;Hp(f,A,B),g=P}else for(w=0;w<c.length;w++){if(A=c[w],P=A.instance,B=A.currentTarget,A=A.listener,P!==g&&f.isPropagationStopped())break e;Hp(f,A,B),g=P}}}if(Rn)throw r=ra,Rn=!1,ra=null,r}function He(r,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var c=r+"__bubble";a.has(c)||(Kp(s,r,2,!1),a.add(c))}function hh(r,s,a){var c=0;s&&(c|=4),Kp(a,r,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function wa(r){if(!r[Ql]){r[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(UE.has(a)||hh(a,!1,r),hh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,hh("selectionchange",!1,s))}}function Kp(r,s,a,c){switch(ca(s)){case 1:var f=Qe;break;case 4:f=th;break;default:f=ua}a=f.bind(null,s,a,r),f=void 0,!Os||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function dh(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;w=w.return}for(;A!==null;){if(w=Zi(A),w===null)return;if(P=w.tag,P===5||P===6){c=g=w;continue e}A=A.parentNode}}c=c.return}na(function(){var B=g,X=Ns(a),Z=[];e:{var J=qp.get(r);if(J!==void 0){var ie=qs,ue=r;switch(r){case"keypress":if($s(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":ue="focus",ie=Ks;break;case"focusout":ue="blur",ie=Ks;break;case"beforeblur":case"afterblur":ie=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=q;break;case jp:case zp:case Bp:ie=Ir;break;case $p:ie=je;break;case"scroll":ie=nh;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=E}var ce=(s&4)!==0,it=!ce&&r==="scroll",j=ce?J!==null?J+"Capture":null:J;ce=[];for(var D=B,z;D!==null;){z=D;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,j!==null&&(te=rt(D,j),te!=null&&ce.push(Ea(D,te,z)))),it)break;D=D.return}0<ce.length&&(J=new ie(J,ue,null,a,X),Z.push({event:J,listeners:ce}))}}if(!(s&7)){e:{if(J=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",J&&a!==ji&&(ue=a.relatedTarget||a.fromElement)&&(Zi(ue)||ue[Sr]))break e;if((ie||J)&&(J=X.window===X?X:(J=X.ownerDocument)?J.defaultView||J.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=B,ue=ue?Zi(ue):null,ue!==null&&(it=Cn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=B),ie!==ue)){if(ce=Hs,te="onMouseLeave",j="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(ce=E,te="onPointerLeave",j="onPointerEnter",D="pointer"),it=ie==null?J:no(ie),z=ue==null?J:no(ue),J=new ce(te,D+"leave",ie,a,X),J.target=it,J.relatedTarget=z,te=null,Zi(X)===B&&(ce=new ce(j,D+"enter",ue,a,X),ce.target=z,ce.relatedTarget=it,te=ce),it=te,ie&&ue)t:{for(ce=ie,j=ue,D=0,z=ce;z;z=eo(z))D++;for(z=0,te=j;te;te=eo(te))z++;for(;0<D-z;)ce=eo(ce),D--;for(;0<z-D;)j=eo(j),z--;for(;D--;){if(ce===j||j!==null&&ce===j.alternate)break t;ce=eo(ce),j=eo(j)}ce=null}else ce=null;ie!==null&&Qp(Z,J,ie,ce,!1),ue!==null&&it!==null&&Qp(Z,it,ue,ce,!0)}}e:{if(J=B?no(B):window,ie=J.nodeName&&J.nodeName.toLowerCase(),ie==="select"||ie==="input"&&J.type==="file")var he=kE;else if(Pp(J))if(Np)he=OE;else{he=xE;var ge=NE}else(ie=J.nodeName)&&ie.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(he=DE);if(he&&(he=he(r,B))){kp(Z,he,a,X);break e}ge&&ge(r,J,B),r==="focusout"&&(ge=J._wrapperState)&&ge.controlled&&J.type==="number"&&Cs(J,"number",J.value)}switch(ge=B?no(B):window,r){case"focusin":(Pp(ge)||ge.contentEditable==="true")&&(Xs=ge,oh=B,_a=null);break;case"focusout":_a=oh=Xs=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Fp(Z,a,X);break;case"selectionchange":if(bE)break;case"keydown":case"keyup":Fp(Z,a,X)}var ye;if(ot)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Js?Rp(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Xi&&a.locale!=="ko"&&(Js||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Js&&(ye=ha()):(on=X,Bs="value"in on?on.value:on.textContent,Js=!0)),ge=Yl(B,ve),0<ge.length&&(ve=new pa(ve,r,null,a,X),Z.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=Cp(a),ye!==null&&(ve.data=ye)))),(ye=an?AE(r,a):RE(r,a))&&(B=Yl(B,"onBeforeInput"),0<B.length&&(X=new pa("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:B}),X.data=ye))}Gp(Z,s)})}function Ea(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Yl(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=rt(r,a),g!=null&&c.unshift(Ea(r,g,f)),g=rt(r,s),g!=null&&c.push(Ea(r,g,f))),r=r.return}return c}function eo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Qp(r,s,a,c,f){for(var g=s._reactName,w=[];a!==null&&a!==c;){var A=a,P=A.alternate,B=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&B!==null&&(A=B,f?(P=rt(a,g),P!=null&&w.unshift(Ea(a,P,A))):f||(P=rt(a,g),P!=null&&w.push(Ea(a,P,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var jE=/\r\n?/g,zE=/\u0000|\uFFFD/g;function Yp(r){return(typeof r=="string"?r:""+r).replace(jE,`
`).replace(zE,"")}function Jl(r,s,a){if(s=Yp(s),Yp(r)!==s&&a)throw Error(t(425))}function Xl(){}var fh=null,ph=null;function mh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,BE=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,$E=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(r){return Jp.resolve(null).then(r).catch(qE)}:gh;function qE(r){setTimeout(function(){throw r})}function yh(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),Dn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Dn(s)}function ri(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Xp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var to=Math.random().toString(36).slice(2),tr="__reactFiber$"+to,Ta="__reactProps$"+to,Sr="__reactContainer$"+to,_h="__reactEvents$"+to,WE="__reactListeners$"+to,HE="__reactHandles$"+to;function Zi(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Xp(r);r!==null;){if(a=r[tr])return a;r=Xp(r)}return s}r=a,a=r.parentNode}return null}function Ia(r){return r=r[tr]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function no(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Zl(r){return r[Ta]||null}var vh=[],ro=-1;function ii(r){return{current:r}}function Ge(r){0>ro||(r.current=vh[ro],vh[ro]=null,ro--)}function We(r,s){ro++,vh[ro]=r.current,r.current=s}var si={},Ot=ii(si),Kt=ii(!1),es=si;function io(r,s){var a=r.type.contextTypes;if(!a)return si;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Qt(r){return r=r.childContextTypes,r!=null}function eu(){Ge(Kt),Ge(Ot)}function Zp(r,s,a){if(Ot.current!==si)throw Error(t(168));We(Ot,s),We(Kt,a)}function em(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return se({},a,c)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||si,es=Ot.current,We(Ot,r),We(Kt,Kt.current),!0}function tm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=em(r,s,es),c.__reactInternalMemoizedMergedChildContext=r,Ge(Kt),Ge(Ot),We(Ot,r)):Ge(Kt),We(Kt,a)}var Ar=null,nu=!1,wh=!1;function nm(r){Ar===null?Ar=[r]:Ar.push(r)}function GE(r){nu=!0,nm(r)}function oi(){if(!wh&&Ar!==null){wh=!0;var r=0,s=Ne;try{var a=Ar;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ar=null,nu=!1}catch(f){throw Ar!==null&&(Ar=Ar.slice(r+1)),Ms(Wi,oi),f}finally{Ne=s,wh=!1}}return null}var so=[],oo=0,ru=null,iu=0,yn=[],_n=0,ts=null,Rr=1,Cr="";function ns(r,s){so[oo++]=iu,so[oo++]=ru,ru=r,iu=s}function rm(r,s,a){yn[_n++]=Rr,yn[_n++]=Cr,yn[_n++]=ts,ts=r;var c=Rr;r=Cr;var f=32-zt(c)-1;c&=~(1<<f),a+=1;var g=32-zt(s)+f;if(30<g){var w=f-f%5;g=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Rr=1<<32-zt(s)+f|a<<f|c,Cr=g+r}else Rr=1<<g|a<<f|c,Cr=r}function Eh(r){r.return!==null&&(ns(r,1),rm(r,1,0))}function Th(r){for(;r===ru;)ru=so[--oo],so[oo]=null,iu=so[--oo],so[oo]=null;for(;r===ts;)ts=yn[--_n],yn[_n]=null,Cr=yn[--_n],yn[_n]=null,Rr=yn[--_n],yn[_n]=null}var ln=null,un=null,Ye=!1,Vn=null;function im(r,s){var a=Tn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function sm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ri(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ts!==null?{id:Rr,overflow:Cr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Tn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Ih(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Sh(r){if(Ye){var s=un;if(s){var a=s;if(!sm(r,s)){if(Ih(r))throw Error(t(418));s=ri(a.nextSibling);var c=ln;s&&sm(r,s)?im(c,a):(r.flags=r.flags&-4097|2,Ye=!1,ln=r)}}else{if(Ih(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,ln=r}}}function om(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function su(r){if(r!==ln)return!1;if(!Ye)return om(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!mh(r.type,r.memoizedProps)),s&&(s=un)){if(Ih(r))throw am(),Error(t(418));for(;s;)im(r,s),s=ri(s.nextSibling)}if(om(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ri(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ri(r.stateNode.nextSibling):null;return!0}function am(){for(var r=un;r;)r=ri(r.nextSibling)}function ao(){un=ln=null,Ye=!1}function Ah(r){Vn===null?Vn=[r]:Vn.push(r)}var KE=de.ReactCurrentBatchConfig;function Sa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function lm(r){var s=r._init;return s(r._payload)}function um(r){function s(j,D){if(r){var z=j.deletions;z===null?(j.deletions=[D],j.flags|=16):z.push(D)}}function a(j,D){if(!r)return null;for(;D!==null;)s(j,D),D=D.sibling;return null}function c(j,D){for(j=new Map;D!==null;)D.key!==null?j.set(D.key,D):j.set(D.index,D),D=D.sibling;return j}function f(j,D){return j=pi(j,D),j.index=0,j.sibling=null,j}function g(j,D,z){return j.index=z,r?(z=j.alternate,z!==null?(z=z.index,z<D?(j.flags|=2,D):z):(j.flags|=2,D)):(j.flags|=1048576,D)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function A(j,D,z,te){return D===null||D.tag!==6?(D=gd(z,j.mode,te),D.return=j,D):(D=f(D,z),D.return=j,D)}function P(j,D,z,te){var he=z.type;return he===x?X(j,D,z.props.children,te,z.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&lm(he)===D.type)?(te=f(D,z.props),te.ref=Sa(j,D,z),te.return=j,te):(te=Nu(z.type,z.key,z.props,null,j.mode,te),te.ref=Sa(j,D,z),te.return=j,te)}function B(j,D,z,te){return D===null||D.tag!==4||D.stateNode.containerInfo!==z.containerInfo||D.stateNode.implementation!==z.implementation?(D=yd(z,j.mode,te),D.return=j,D):(D=f(D,z.children||[]),D.return=j,D)}function X(j,D,z,te,he){return D===null||D.tag!==7?(D=cs(z,j.mode,te,he),D.return=j,D):(D=f(D,z),D.return=j,D)}function Z(j,D,z){if(typeof D=="string"&&D!==""||typeof D=="number")return D=gd(""+D,j.mode,z),D.return=j,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Se:return z=Nu(D.type,D.key,D.props,null,j.mode,z),z.ref=Sa(j,null,D),z.return=j,z;case Te:return D=yd(D,j.mode,z),D.return=j,D;case Dt:var te=D._init;return Z(j,te(D._payload),z)}if(mr(D)||me(D))return D=cs(D,j.mode,z,null),D.return=j,D;ou(j,D)}return null}function J(j,D,z,te){var he=D!==null?D.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return he!==null?null:A(j,D,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Se:return z.key===he?P(j,D,z,te):null;case Te:return z.key===he?B(j,D,z,te):null;case Dt:return he=z._init,J(j,D,he(z._payload),te)}if(mr(z)||me(z))return he!==null?null:X(j,D,z,te,null);ou(j,z)}return null}function ie(j,D,z,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(z)||null,A(D,j,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Se:return j=j.get(te.key===null?z:te.key)||null,P(D,j,te,he);case Te:return j=j.get(te.key===null?z:te.key)||null,B(D,j,te,he);case Dt:var ge=te._init;return ie(j,D,z,ge(te._payload),he)}if(mr(te)||me(te))return j=j.get(z)||null,X(D,j,te,he,null);ou(D,te)}return null}function ue(j,D,z,te){for(var he=null,ge=null,ye=D,ve=D=0,Tt=null;ye!==null&&ve<z.length;ve++){ye.index>ve?(Tt=ye,ye=null):Tt=ye.sibling;var be=J(j,ye,z[ve],te);if(be===null){ye===null&&(ye=Tt);break}r&&ye&&be.alternate===null&&s(j,ye),D=g(be,D,ve),ge===null?he=be:ge.sibling=be,ge=be,ye=Tt}if(ve===z.length)return a(j,ye),Ye&&ns(j,ve),he;if(ye===null){for(;ve<z.length;ve++)ye=Z(j,z[ve],te),ye!==null&&(D=g(ye,D,ve),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ye&&ns(j,ve),he}for(ye=c(j,ye);ve<z.length;ve++)Tt=ie(ye,j,ve,z[ve],te),Tt!==null&&(r&&Tt.alternate!==null&&ye.delete(Tt.key===null?ve:Tt.key),D=g(Tt,D,ve),ge===null?he=Tt:ge.sibling=Tt,ge=Tt);return r&&ye.forEach(function(mi){return s(j,mi)}),Ye&&ns(j,ve),he}function ce(j,D,z,te){var he=me(z);if(typeof he!="function")throw Error(t(150));if(z=he.call(z),z==null)throw Error(t(151));for(var ge=he=null,ye=D,ve=D=0,Tt=null,be=z.next();ye!==null&&!be.done;ve++,be=z.next()){ye.index>ve?(Tt=ye,ye=null):Tt=ye.sibling;var mi=J(j,ye,be.value,te);if(mi===null){ye===null&&(ye=Tt);break}r&&ye&&mi.alternate===null&&s(j,ye),D=g(mi,D,ve),ge===null?he=mi:ge.sibling=mi,ge=mi,ye=Tt}if(be.done)return a(j,ye),Ye&&ns(j,ve),he;if(ye===null){for(;!be.done;ve++,be=z.next())be=Z(j,be.value,te),be!==null&&(D=g(be,D,ve),ge===null?he=be:ge.sibling=be,ge=be);return Ye&&ns(j,ve),he}for(ye=c(j,ye);!be.done;ve++,be=z.next())be=ie(ye,j,ve,be.value,te),be!==null&&(r&&be.alternate!==null&&ye.delete(be.key===null?ve:be.key),D=g(be,D,ve),ge===null?he=be:ge.sibling=be,ge=be);return r&&ye.forEach(function(RT){return s(j,RT)}),Ye&&ns(j,ve),he}function it(j,D,z,te){if(typeof z=="object"&&z!==null&&z.type===x&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case Se:e:{for(var he=z.key,ge=D;ge!==null;){if(ge.key===he){if(he=z.type,he===x){if(ge.tag===7){a(j,ge.sibling),D=f(ge,z.props.children),D.return=j,j=D;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&lm(he)===ge.type){a(j,ge.sibling),D=f(ge,z.props),D.ref=Sa(j,ge,z),D.return=j,j=D;break e}a(j,ge);break}else s(j,ge);ge=ge.sibling}z.type===x?(D=cs(z.props.children,j.mode,te,z.key),D.return=j,j=D):(te=Nu(z.type,z.key,z.props,null,j.mode,te),te.ref=Sa(j,D,z),te.return=j,j=te)}return w(j);case Te:e:{for(ge=z.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===z.containerInfo&&D.stateNode.implementation===z.implementation){a(j,D.sibling),D=f(D,z.children||[]),D.return=j,j=D;break e}else{a(j,D);break}else s(j,D);D=D.sibling}D=yd(z,j.mode,te),D.return=j,j=D}return w(j);case Dt:return ge=z._init,it(j,D,ge(z._payload),te)}if(mr(z))return ue(j,D,z,te);if(me(z))return ce(j,D,z,te);ou(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,D!==null&&D.tag===6?(a(j,D.sibling),D=f(D,z),D.return=j,j=D):(a(j,D),D=gd(z,j.mode,te),D.return=j,j=D),w(j)):a(j,D)}return it}var lo=um(!0),cm=um(!1),au=ii(null),lu=null,uo=null,Rh=null;function Ch(){Rh=uo=lu=null}function Ph(r){var s=au.current;Ge(au),r._currentValue=s}function kh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function co(r,s){lu=r,Rh=uo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Yt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Rh!==r)if(r={context:r,memoizedValue:s,next:null},uo===null){if(lu===null)throw Error(t(308));uo=r,lu.dependencies={lanes:0,firstContext:r}}else uo=uo.next=r;return s}var rs=null;function Nh(r){rs===null?rs=[r]:rs.push(r)}function hm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,Nh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Pr(r,c)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ai=!1;function xh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function li(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Pr(r,a)}return f=c.interleaved,f===null?(s.next=s,Nh(c)):(s.next=f.next,f.next=s),c.interleaved=s,Pr(r,a)}function uu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Jr(r,a)}}function fm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function cu(r,s,a,c){var f=r.updateQueue;ai=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var P=A,B=P.next;P.next=null,w===null?g=B:w.next=B,w=P;var X=r.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==w&&(A===null?X.firstBaseUpdate=B:A.next=B,X.lastBaseUpdate=P))}if(g!==null){var Z=f.baseState;w=0,X=B=P=null,A=g;do{var J=A.lane,ie=A.eventTime;if((c&J)===J){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=r,ce=A;switch(J=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Z=ue.call(ie,Z,J);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,J=typeof ue=="function"?ue.call(ie,Z,J):ue,J==null)break e;Z=se({},Z,J);break e;case 2:ai=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,J=f.effects,J===null?f.effects=[A]:J.push(A))}else ie={eventTime:ie,lane:J,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(B=X=ie,P=Z):X=X.next=ie,w|=J;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;J=A,A=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);if(X===null&&(P=Z),f.baseState=P,f.firstBaseUpdate=B,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);os|=w,r.lanes=w,r.memoizedState=Z}}function pm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Aa={},nr=ii(Aa),Ra=ii(Aa),Ca=ii(Aa);function is(r){if(r===Aa)throw Error(t(174));return r}function Dh(r,s){switch(We(Ca,s),We(Ra,r),We(nr,Aa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=dt(s,r)}Ge(nr),We(nr,s)}function ho(){Ge(nr),Ge(Ra),Ge(Ca)}function mm(r){is(Ca.current);var s=is(nr.current),a=dt(s,r.type);s!==a&&(We(Ra,r),We(nr,a))}function Oh(r){Ra.current===r&&(Ge(nr),Ge(Ra))}var Xe=ii(0);function hu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Lh=[];function Vh(){for(var r=0;r<Lh.length;r++)Lh[r]._workInProgressVersionPrimary=null;Lh.length=0}var du=de.ReactCurrentDispatcher,bh=de.ReactCurrentBatchConfig,ss=0,Ze=null,pt=null,wt=null,fu=!1,Pa=!1,ka=0,QE=0;function Lt(){throw Error(t(321))}function Mh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function Fh(r,s,a,c,f,g){if(ss=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=r===null||r.memoizedState===null?ZE:eT,r=a(c,f),Pa){g=0;do{if(Pa=!1,ka=0,25<=g)throw Error(t(301));g+=1,wt=pt=null,s.updateQueue=null,du.current=tT,r=a(c,f)}while(Pa)}if(du.current=gu,s=pt!==null&&pt.next!==null,ss=0,wt=pt=Ze=null,fu=!1,s)throw Error(t(300));return r}function Uh(){var r=ka!==0;return ka=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=r:wt=wt.next=r,wt}function wn(){if(pt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=wt===null?Ze.memoizedState:wt.next;if(s!==null)wt=s,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},wt===null?Ze.memoizedState=wt=r:wt=wt.next=r}return wt}function Na(r,s){return typeof s=="function"?s(r):s}function jh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var A=w=null,P=null,B=g;do{var X=B.lane;if((ss&X)===X)P!==null&&(P=P.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:r(c,B.action);else{var Z={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};P===null?(A=P=Z,w=c):P=P.next=Z,Ze.lanes|=X,os|=X}B=B.next}while(B!==null&&B!==g);P===null?w=c:P.next=A,Ln(c,s.memoizedState)||(Yt=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,os|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function zh(r){var s=wn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Ln(g,s.memoizedState)||(Yt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function gm(){}function ym(r,s){var a=Ze,c=wn(),f=s(),g=!Ln(c.memoizedState,f);if(g&&(c.memoizedState=f,Yt=!0),c=c.queue,Bh(wm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,xa(9,vm.bind(null,a,c,f,s),void 0,null),Et===null)throw Error(t(349));ss&30||_m(a,s,f)}return f}function _m(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function vm(r,s,a,c){s.value=a,s.getSnapshot=c,Em(s)&&Tm(r)}function wm(r,s,a){return a(function(){Em(s)&&Tm(r)})}function Em(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function Tm(r){var s=Pr(r,1);s!==null&&Un(s,r,1,-1)}function Im(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},s.queue=r,r=r.dispatch=XE.bind(null,Ze,r),[s.memoizedState,r]}function xa(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Sm(){return wn().memoizedState}function pu(r,s,a,c){var f=rr();Ze.flags|=r,f.memoizedState=xa(1|s,a,void 0,c===void 0?null:c)}function mu(r,s,a,c){var f=wn();c=c===void 0?null:c;var g=void 0;if(pt!==null){var w=pt.memoizedState;if(g=w.destroy,c!==null&&Mh(c,w.deps)){f.memoizedState=xa(s,a,g,c);return}}Ze.flags|=r,f.memoizedState=xa(1|s,a,g,c)}function Am(r,s){return pu(8390656,8,r,s)}function Bh(r,s){return mu(2048,8,r,s)}function Rm(r,s){return mu(4,2,r,s)}function Cm(r,s){return mu(4,4,r,s)}function Pm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function km(r,s,a){return a=a!=null?a.concat([r]):null,mu(4,4,Pm.bind(null,s,r),a)}function $h(){}function Nm(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function xm(r,s){var a=wn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Mh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Dm(r,s,a){return ss&21?(Ln(a,s)||(a=Ki(),Ze.lanes|=a,os|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a)}function YE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=bh.transition;bh.transition={};try{r(!1),s()}finally{Ne=a,bh.transition=c}}function Om(){return wn().memoizedState}function JE(r,s,a){var c=di(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lm(r))Vm(s,a);else if(a=hm(r,s,a,c),a!==null){var f=qt();Un(a,r,c,f),bm(a,s,c)}}function XE(r,s,a){var c=di(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lm(r))Vm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(f.hasEagerState=!0,f.eagerState=A,Ln(A,w)){var P=s.interleaved;P===null?(f.next=f,Nh(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=hm(r,s,f,c),a!==null&&(f=qt(),Un(a,r,c,f),bm(a,s,c))}}function Lm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Vm(r,s){Pa=fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function bm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Jr(r,a)}}var gu={readContext:vn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},ZE={readContext:vn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:Am,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,pu(4194308,4,Pm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return pu(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=JE.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:Im,useDebugValue:$h,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=Im(!1),s=r[0];return r=YE.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,f=rr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Et===null)throw Error(t(349));ss&30||_m(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Am(wm.bind(null,c,g,r),[r]),c.flags|=2048,xa(9,vm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=Et.identifierPrefix;if(Ye){var a=Cr,c=Rr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ka++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=QE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},eT={readContext:vn,useCallback:Nm,useContext:vn,useEffect:Bh,useImperativeHandle:km,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:xm,useReducer:jh,useRef:Sm,useState:function(){return jh(Na)},useDebugValue:$h,useDeferredValue:function(r){var s=wn();return Dm(s,pt.memoizedState,r)},useTransition:function(){var r=jh(Na)[0],s=wn().memoizedState;return[r,s]},useMutableSource:gm,useSyncExternalStore:ym,useId:Om,unstable_isNewReconciler:!1},tT={readContext:vn,useCallback:Nm,useContext:vn,useEffect:Bh,useImperativeHandle:km,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:xm,useReducer:zh,useRef:Sm,useState:function(){return zh(Na)},useDebugValue:$h,useDeferredValue:function(r){var s=wn();return pt===null?s.memoizedState=r:Dm(s,pt.memoizedState,r)},useTransition:function(){var r=zh(Na)[0],s=wn().memoizedState;return[r,s]},useMutableSource:gm,useSyncExternalStore:ym,useId:Om,unstable_isNewReconciler:!1};function bn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function qh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var yu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=qt(),f=di(r),g=kr(c,f);g.payload=s,a!=null&&(g.callback=a),s=li(r,g,f),s!==null&&(Un(s,r,f,c),uu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=qt(),f=di(r),g=kr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=li(r,g,f),s!==null&&(Un(s,r,f,c),uu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=qt(),c=di(r),f=kr(a,c);f.tag=2,s!=null&&(f.callback=s),s=li(r,f,c),s!==null&&(Un(s,r,c,a),uu(s,r,c))}};function Mm(r,s,a,c,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,w):s.prototype&&s.prototype.isPureReactComponent?!ya(a,c)||!ya(f,g):!0}function Fm(r,s,a){var c=!1,f=si,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(f=Qt(s)?es:Ot.current,c=s.contextTypes,g=(c=c!=null)?io(r,f):si),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Um(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&yu.enqueueReplaceState(s,s.state,null)}function Wh(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},xh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=vn(g):(g=Qt(s)?es:Ot.current,f.context=io(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(qh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&yu.enqueueReplaceState(f,f.state,null),cu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function fo(r,s){try{var a="",c=s;do a+=Re(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Hh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Gh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var nT=typeof WeakMap=="function"?WeakMap:Map;function jm(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,ld=c),Gh(r,s)},a}function zm(r,s,a){a=kr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Gh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Gh(r,s),typeof c!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function Bm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new nT;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=gT.bind(null,r,s,a),s.then(r,r))}function $m(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function qm(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,li(a,s,1))),a.lanes|=1),r)}var rT=de.ReactCurrentOwner,Yt=!1;function $t(r,s,a,c){s.child=r===null?cm(s,null,a,c):lo(s,r.child,a,c)}function Wm(r,s,a,c,f){a=a.render;var g=s.ref;return co(s,f),c=Fh(r,s,a,c,g,f),a=Uh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Ye&&a&&Eh(s),s.flags|=1,$t(r,s,c,f),s.child)}function Hm(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!md(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Gm(r,s,g,c,f)):(r=Nu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(w,c)&&r.ref===s.ref)return Nr(r,s,f)}return s.flags|=1,r=pi(g,c),r.ref=s.ref,r.return=s,s.child=r}function Gm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(ya(g,c)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Yt=!0);else return s.lanes=r.lanes,Nr(r,s,f)}return Kh(r,s,a,c,f)}function Km(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(mo,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(mo,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(mo,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(mo,cn),cn|=c;return $t(r,s,f,a),s.child}function Qm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Kh(r,s,a,c,f){var g=Qt(a)?es:Ot.current;return g=io(s,g),co(s,f),a=Fh(r,s,a,c,g,f),c=Uh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Ye&&c&&Eh(s),s.flags|=1,$t(r,s,a,f),s.child)}function Ym(r,s,a,c,f){if(Qt(a)){var g=!0;tu(s)}else g=!1;if(co(s,f),s.stateNode===null)vu(r,s),Fm(s,a,c),Wh(s,a,c,f),c=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var P=w.context,B=a.contextType;typeof B=="object"&&B!==null?B=vn(B):(B=Qt(a)?es:Ot.current,B=io(s,B));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==c||P!==B)&&Um(s,w,c,B),ai=!1;var J=s.memoizedState;w.state=J,cu(s,c,w,f),P=s.memoizedState,A!==c||J!==P||Kt.current||ai?(typeof X=="function"&&(qh(s,a,X,c),P=s.memoizedState),(A=ai||Mm(s,a,A,c,J,P,B))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),w.props=c,w.state=P,w.context=B,c=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,dm(r,s),A=s.memoizedProps,B=s.type===s.elementType?A:bn(s.type,A),w.props=B,Z=s.pendingProps,J=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=vn(P):(P=Qt(a)?es:Ot.current,P=io(s,P));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==Z||J!==P)&&Um(s,w,c,P),ai=!1,J=s.memoizedState,w.state=J,cu(s,c,w,f);var ue=s.memoizedState;A!==Z||J!==ue||Kt.current||ai?(typeof ie=="function"&&(qh(s,a,ie,c),ue=s.memoizedState),(B=ai||Mm(s,a,B,c,J,ue,P)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,ue,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,ue,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),w.props=c,w.state=ue,w.context=P,c=B):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),c=!1)}return Qh(r,s,a,c,g,f)}function Qh(r,s,a,c,f,g){Qm(r,s);var w=(s.flags&128)!==0;if(!c&&!w)return f&&tm(s,a,!1),Nr(r,s,g);c=s.stateNode,rT.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&w?(s.child=lo(s,r.child,null,g),s.child=lo(s,null,A,g)):$t(r,s,A,g),s.memoizedState=c.state,f&&tm(s,a,!0),s.child}function Jm(r){var s=r.stateNode;s.pendingContext?Zp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Zp(r,s.context,!1),Dh(r,s.containerInfo)}function Xm(r,s,a,c,f){return ao(),Ah(f),s.flags|=256,$t(r,s,a,c),s.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function Jh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Zm(r,s,a){var c=s.pendingProps,f=Xe.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(Xe,f&1),r===null)return Sh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=c.children,r=c.fallback,g?(c=s.mode,g=s.child,w={mode:"hidden",children:w},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=xu(w,c,0,null),r=cs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Jh(a),s.memoizedState=Yh,r):Xh(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return iT(r,s,w,c,A,f,a);if(g){g=c.fallback,w=s.mode,f=r.child,A=f.sibling;var P={mode:"hidden",children:c.children};return!(w&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=pi(f,P),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=pi(A,g):(g=cs(g,w,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,w=r.child.memoizedState,w=w===null?Jh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=Yh,c}return g=r.child,r=g.sibling,c=pi(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Xh(r,s){return s=xu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function _u(r,s,a,c){return c!==null&&Ah(c),lo(s,r.child,null,a),r=Xh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function iT(r,s,a,c,f,g,w){if(a)return s.flags&256?(s.flags&=-257,c=Hh(Error(t(422))),_u(r,s,w,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=xu({mode:"visible",children:c.children},f,0,null),g=cs(g,f,w,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&lo(s,r.child,null,w),s.child.memoizedState=Jh(w),s.memoizedState=Yh,g);if(!(s.mode&1))return _u(r,s,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=Hh(g,c,void 0),_u(r,s,w,c)}if(A=(w&r.childLanes)!==0,Yt||A){if(c=Et,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|w)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),Un(c,r,f,-1))}return pd(),c=Hh(Error(t(421))),_u(r,s,w,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=yT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=ri(f.nextSibling),ln=s,Ye=!0,Vn=null,r!==null&&(yn[_n++]=Rr,yn[_n++]=Cr,yn[_n++]=ts,Rr=r.id,Cr=r.overflow,ts=s),s=Xh(s,c.children),s.flags|=4096,s)}function eg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),kh(r.return,s,a)}function Zh(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function tg(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if($t(r,s,c.children,a),c=Xe.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&eg(r,a,s);else if(r.tag===19)eg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Xe,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&hu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Zh(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&hu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Zh(s,!0,a,null,g);break;case"together":Zh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),os|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=pi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=pi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function sT(r,s,a){switch(s.tag){case 3:Jm(s),ao();break;case 5:mm(s);break;case 1:Qt(s.type)&&tu(s);break;case 4:Dh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;We(au,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Xe,Xe.current&1),s.flags|=128,null):a&s.child.childLanes?Zm(r,s,a):(We(Xe,Xe.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);We(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return tg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,Km(r,s,a)}return Nr(r,s,a)}var ng,ed,rg,ig;ng=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ed=function(){},rg=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,is(nr.current);var g=null;switch(a){case"input":f=Mi(r,f),c=Mi(r,c),g=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":f=Ho(r,f),c=Ho(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Xl)}Xo(a,c);var w;a=null;for(B in f)if(!c.hasOwnProperty(B)&&f.hasOwnProperty(B)&&f[B]!=null)if(B==="style"){var A=f[B];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in c){var P=c[B];if(A=f!=null?f[B]:void 0,c.hasOwnProperty(B)&&P!==A&&(P!=null||A!=null))if(B==="style")if(A){for(w in A)!A.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&A[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(g||(g=[]),g.push(B,a)),a=P;else B==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(g=g||[]).push(B,P)):B==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(B,""+P):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(P!=null&&B==="onScroll"&&He("scroll",r),g||A===P||(g=[])):(g=g||[]).push(B,P))}a&&(g=g||[]).push("style",a);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},ig=function(r,s,a,c){a!==c&&(s.flags|=4)};function Da(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Vt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function oT(r,s,a){var c=s.pendingProps;switch(Th(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(s),null;case 1:return Qt(s.type)&&eu(),Vt(s),null;case 3:return c=s.stateNode,ho(),Ge(Kt),Ge(Ot),Vh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Vn!==null&&(hd(Vn),Vn=null))),ed(r,s),Vt(s),null;case 5:Oh(s);var f=is(Ca.current);if(a=s.type,r!==null&&s.stateNode!=null)rg(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Vt(s),null}if(r=is(nr.current),su(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[tr]=s,c[Ta]=g,r=(s.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(f=0;f<va.length;f++)He(va[f],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":Rs(c,g),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},He("invalid",c);break;case"textarea":Ps(c,g),He("invalid",c)}Xo(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&Jl(c.textContent,A,r),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&Jl(c.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&He("scroll",c)}switch(a){case"input":pr(c),Il(c,g,!0);break;case"textarea":pr(c),Go(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Xl)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=w.createElement(a,{is:c.is}):(r=w.createElement(a),a==="select"&&(w=r,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):r=w.createElementNS(r,a),r[tr]=s,r[Ta]=c,ng(r,s,!1,!1),s.stateNode=r;e:{switch(w=Zo(a,c),a){case"dialog":He("cancel",r),He("close",r),f=c;break;case"iframe":case"object":case"embed":He("load",r),f=c;break;case"video":case"audio":for(f=0;f<va.length;f++)He(va[f],r);f=c;break;case"source":He("error",r),f=c;break;case"img":case"image":case"link":He("error",r),He("load",r),f=c;break;case"details":He("toggle",r),f=c;break;case"input":Rs(r,c),f=Mi(r,c),He("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),He("invalid",r);break;case"textarea":Ps(r,c),f=Ho(r,c),He("invalid",r);break;default:f=c}Xo(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var P=A[g];g==="style"?Yo(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Ko(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Hr(r,P):typeof P=="number"&&Hr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&He("scroll",r):P!=null&&ee(r,g,P,w))}switch(a){case"input":pr(r),Il(r,c,!1);break;case"textarea":pr(r),Go(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Xl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vt(s),null;case 6:if(r&&s.stateNode!=null)ig(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=is(Ca.current),is(nr.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Jl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Jl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Vt(s),null;case 13:if(Ge(Xe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&un!==null&&s.mode&1&&!(s.flags&128))am(),ao(),s.flags|=98560,g=!1;else if(g=su(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else ao(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Vt(s),g=!1}else Vn!==null&&(hd(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Xe.current&1?mt===0&&(mt=3):pd())),s.updateQueue!==null&&(s.flags|=4),Vt(s),null);case 4:return ho(),ed(r,s),r===null&&wa(s.stateNode.containerInfo),Vt(s),null;case 10:return Ph(s.type._context),Vt(s),null;case 17:return Qt(s.type)&&eu(),Vt(s),null;case 19:if(Ge(Xe),g=s.memoizedState,g===null)return Vt(s),null;if(c=(s.flags&128)!==0,w=g.rendering,w===null)if(c)Da(g,!1);else{if(mt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=hu(r),w!==null){for(s.flags|=128,Da(g,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>go&&(s.flags|=128,c=!0,Da(g,!1),s.lanes=4194304)}else{if(!c)if(r=hu(w),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Da(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Ye)return Vt(s),null}else 2*qe()-g.renderingStartTime>go&&a!==1073741824&&(s.flags|=128,c=!0,Da(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Xe.current,We(Xe,c?a&1|2:a&1),s):(Vt(s),null);case 22:case 23:return fd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Vt(s),s.subtreeFlags&6&&(s.flags|=8192)):Vt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function aT(r,s){switch(Th(s),s.tag){case 1:return Qt(s.type)&&eu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ho(),Ge(Kt),Ge(Ot),Vh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Oh(s),null;case 13:if(Ge(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return ho(),null;case 10:return Ph(s.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var wu=!1,bt=!1,lT=typeof WeakSet=="function"?WeakSet:Set,le=null;function po(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,s,c)}else a.current=null}function td(r,s,a){try{a()}catch(c){tt(r,s,c)}}var sg=!1;function uT(r,s){if(fh=ei,r=Mp(),sh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,P=-1,B=0,X=0,Z=r,J=null;t:for(;;){for(var ie;Z!==a||f!==0&&Z.nodeType!==3||(A=w+f),Z!==g||c!==0&&Z.nodeType!==3||(P=w+c),Z.nodeType===3&&(w+=Z.nodeValue.length),(ie=Z.firstChild)!==null;)J=Z,Z=ie;for(;;){if(Z===r)break t;if(J===a&&++B===f&&(A=w),J===g&&++X===c&&(P=w),(ie=Z.nextSibling)!==null)break;Z=J,J=Z.parentNode}Z=ie}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:r,selectionRange:a},ei=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,it=ue.memoizedState,j=s.stateNode,D=j.getSnapshotBeforeUpdate(s.elementType===s.type?ce:bn(s.type,ce),it);j.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){tt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=sg,sg=!1,ue}function Oa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&td(s,a,g)}f=f.next}while(f!==c)}}function Eu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function nd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function og(r){var s=r.alternate;s!==null&&(r.alternate=null,og(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Ta],delete s[_h],delete s[WE],delete s[HE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ag(r){return r.tag===5||r.tag===3||r.tag===4}function lg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ag(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function rd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Xl));else if(c!==4&&(r=r.child,r!==null))for(rd(r,s,a),r=r.sibling;r!==null;)rd(r,s,a),r=r.sibling}function id(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(id(r,s,a),r=r.sibling;r!==null;)id(r,s,a),r=r.sibling}var Rt=null,Mn=!1;function ui(r,s,a){for(a=a.child;a!==null;)ug(r,s,a),a=a.sibling}function ug(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:bt||po(a,s);case 6:var c=Rt,f=Mn;Rt=null,ui(r,s,a),Rt=c,Mn=f,Rt!==null&&(Mn?(r=Rt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Mn?(r=Rt,a=a.stateNode,r.nodeType===8?yh(r.parentNode,a):r.nodeType===1&&yh(r,a),Dn(r)):yh(Rt,a.stateNode));break;case 4:c=Rt,f=Mn,Rt=a.stateNode.containerInfo,Mn=!0,ui(r,s,a),Rt=c,Mn=f;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&td(a,s,w),f=f.next}while(f!==c)}ui(r,s,a);break;case 1:if(!bt&&(po(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,s,A)}ui(r,s,a);break;case 21:ui(r,s,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,ui(r,s,a),bt=c):ui(r,s,a);break;default:ui(r,s,a)}}function cg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new lT),s.forEach(function(c){var f=_T.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:Rt=A.stateNode,Mn=!1;break e;case 3:Rt=A.stateNode.containerInfo,Mn=!0;break e;case 4:Rt=A.stateNode.containerInfo,Mn=!0;break e}A=A.return}if(Rt===null)throw Error(t(160));ug(g,w,f),Rt=null,Mn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(B){tt(f,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)hg(s,r),s=s.sibling}function hg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),ir(r),c&4){try{Oa(3,r,r.return),Eu(3,r)}catch(ce){tt(r,r.return,ce)}try{Oa(5,r,r.return)}catch(ce){tt(r,r.return,ce)}}break;case 1:Fn(s,r),ir(r),c&512&&a!==null&&po(a,a.return);break;case 5:if(Fn(s,r),ir(r),c&512&&a!==null&&po(a,a.return),r.flags&32){var f=r.stateNode;try{Hr(f,"")}catch(ce){tt(r,r.return,ce)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&qo(f,g),Zo(A,w);var B=Zo(A,g);for(w=0;w<P.length;w+=2){var X=P[w],Z=P[w+1];X==="style"?Yo(f,Z):X==="dangerouslySetInnerHTML"?Ko(f,Z):X==="children"?Hr(f,Z):ee(f,X,Z,B)}switch(A){case"input":Wo(f,g);break;case"textarea":ks(f,g);break;case"select":var J=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?gr(f,!!g.multiple,ie,!1):J!==!!g.multiple&&(g.defaultValue!=null?gr(f,!!g.multiple,g.defaultValue,!0):gr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ta]=g}catch(ce){tt(r,r.return,ce)}}break;case 6:if(Fn(s,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){tt(r,r.return,ce)}}break;case 3:if(Fn(s,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(ce){tt(r,r.return,ce)}break;case 4:Fn(s,r),ir(r);break;case 13:Fn(s,r),ir(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(ad=qe())),c&4&&cg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(bt=(B=bt)||X,Fn(s,r),bt=B):Fn(s,r),ir(r),c&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!X&&r.mode&1)for(le=r,X=r.child;X!==null;){for(Z=le=X;le!==null;){switch(J=le,ie=J.child,J.tag){case 0:case 11:case 14:case 15:Oa(4,J,J.return);break;case 1:po(J,J.return);var ue=J.stateNode;if(typeof ue.componentWillUnmount=="function"){c=J,a=J.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:po(J,J.return);break;case 22:if(J.memoizedState!==null){pg(Z);continue}}ie!==null?(ie.return=J,le=ie):pg(Z)}X=X.sibling}e:for(X=null,Z=r;;){if(Z.tag===5){if(X===null){X=Z;try{f=Z.stateNode,B?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,P=Z.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Qo("display",w))}catch(ce){tt(r,r.return,ce)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=B?"":Z.memoizedProps}catch(ce){tt(r,r.return,ce)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Fn(s,r),ir(r),c&4&&cg(r);break;case 21:break;default:Fn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(ag(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Hr(f,""),c.flags&=-33);var g=lg(r);id(r,g,f);break;case 3:case 4:var w=c.stateNode.containerInfo,A=lg(r);rd(r,A,w);break;default:throw Error(t(161))}}catch(P){tt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function cT(r,s,a){le=r,dg(r)}function dg(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||wu;if(!w){var A=f.alternate,P=A!==null&&A.memoizedState!==null||bt;A=wu;var B=bt;if(wu=w,(bt=P)&&!B)for(le=f;le!==null;)w=le,P=w.child,w.tag===22&&w.memoizedState!==null?mg(f):P!==null?(P.return=w,le=P):mg(f);for(;g!==null;)le=g,dg(g),g=g.sibling;le=f,wu=A,bt=B}fg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,le=g):fg(r)}}function fg(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:bt||Eu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!bt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:bn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&pm(s,g,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}pm(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Dn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||s.flags&512&&nd(s)}catch(J){tt(s,s.return,J)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function pg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function mg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Eu(4,s)}catch(P){tt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(P){tt(s,f,P)}}var g=s.return;try{nd(s)}catch(P){tt(s,g,P)}break;case 5:var w=s.return;try{nd(s)}catch(P){tt(s,w,P)}}}catch(P){tt(s,s.return,P)}if(s===r){le=null;break}var A=s.sibling;if(A!==null){A.return=s.return,le=A;break}le=s.return}}var hT=Math.ceil,Tu=de.ReactCurrentDispatcher,sd=de.ReactCurrentOwner,En=de.ReactCurrentBatchConfig,Ve=0,Et=null,at=null,Ct=0,cn=0,mo=ii(0),mt=0,La=null,os=0,Iu=0,od=0,Va=null,Jt=null,ad=0,go=1/0,xr=null,Su=!1,ld=null,ci=null,Au=!1,hi=null,Ru=0,ba=0,ud=null,Cu=-1,Pu=0;function qt(){return Ve&6?qe():Cu!==-1?Cu:Cu=qe()}function di(r){return r.mode&1?Ve&2&&Ct!==0?Ct&-Ct:KE.transition!==null?(Pu===0&&(Pu=Ki()),Pu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ca(r.type)),r):1}function Un(r,s,a,c){if(50<ba)throw ba=0,ud=null,Error(t(185));Yr(r,a,c),(!(Ve&2)||r!==Et)&&(r===Et&&(!(Ve&2)&&(Iu|=a),mt===4&&fi(r,Ct)),Xt(r,c),a===1&&Ve===0&&!(s.mode&1)&&(go=qe()+500,nu&&oi()))}function Xt(r,s){var a=r.callbackNode;vr(r,s);var c=Gi(r,r===Et?Ct:0);if(c===0)a!==null&&sa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&sa(a),s===1)r.tag===0?GE(yg.bind(null,r)):nm(yg.bind(null,r)),$E(function(){!(Ve&6)&&oi()}),a=null;else{switch(Xr(c)){case 1:a=Wi;break;case 4:a=Gr;break;case 16:a=pn;break;case 536870912:a=Pl;break;default:a=pn}a=Ag(a,gg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function gg(r,s){if(Cu=-1,Pu=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(yo()&&r.callbackNode!==a)return null;var c=Gi(r,r===Et?Ct:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=ku(r,c);else{s=c;var f=Ve;Ve|=2;var g=vg();(Et!==r||Ct!==s)&&(xr=null,go=qe()+500,ls(r,s));do try{pT();break}catch(A){_g(r,A)}while(!0);Ch(),Tu.current=g,Ve=f,at!==null?s=0:(Et=null,Ct=0,s=mt)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(c=f,s=cd(r,f))),s===1)throw a=La,ls(r,0),fi(r,c),Xt(r,qe()),a;if(s===6)fi(r,c);else{if(f=r.current.alternate,!(c&30)&&!dT(f)&&(s=ku(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=cd(r,g))),s===1))throw a=La,ls(r,0),fi(r,c),Xt(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:us(r,Jt,xr);break;case 3:if(fi(r,c),(c&130023424)===c&&(s=ad+500-qe(),10<s)){if(Gi(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=gh(us.bind(null,r,Jt,xr),s);break}us(r,Jt,xr);break;case 4:if(fi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var w=31-zt(c);g=1<<w,w=s[w],w>f&&(f=w),c&=~g}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hT(c/1960))-c,10<c){r.timeoutHandle=gh(us.bind(null,r,Jt,xr),c);break}us(r,Jt,xr);break;case 5:us(r,Jt,xr);break;default:throw Error(t(329))}}}return Xt(r,qe()),r.callbackNode===a?gg.bind(null,r):null}function cd(r,s){var a=Va;return r.current.memoizedState.isDehydrated&&(ls(r,s).flags|=256),r=ku(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&hd(s)),r}function hd(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function dT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!Ln(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fi(r,s){for(s&=~od,s&=~Iu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-zt(s),c=1<<a;r[a]=-1,s&=~c}}function yg(r){if(Ve&6)throw Error(t(327));yo();var s=Gi(r,0);if(!(s&1))return Xt(r,qe()),null;var a=ku(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=cd(r,c))}if(a===1)throw a=La,ls(r,0),fi(r,s),Xt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,us(r,Jt,xr),Xt(r,qe()),null}function dd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(go=qe()+500,nu&&oi())}}function as(r){hi!==null&&hi.tag===0&&!(Ve&6)&&yo();var s=Ve;Ve|=1;var a=En.transition,c=Ne;try{if(En.transition=null,Ne=1,r)return r()}finally{Ne=c,En.transition=a,Ve=s,!(Ve&6)&&oi()}}function fd(){cn=mo.current,Ge(mo)}function ls(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,BE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Th(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:ho(),Ge(Kt),Ge(Ot),Vh();break;case 5:Oh(c);break;case 4:ho();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Ph(c.type._context);break;case 22:case 23:fd()}a=a.return}if(Et=r,at=r=pi(r.current,null),Ct=cn=s,mt=0,La=null,od=Iu=os=0,Jt=Va=null,rs!==null){for(s=0;s<rs.length;s++)if(a=rs[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,c.next=w}a.pending=c}rs=null}return r}function _g(r,s){do{var a=at;try{if(Ch(),du.current=gu,fu){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}fu=!1}if(ss=0,wt=pt=Ze=null,Pa=!1,ka=0,sd.current=null,a===null||a.return===null){mt=1,La=s,at=null;break}e:{var g=r,w=a.return,A=a,P=s;if(s=Ct,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var B=P,X=A,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var J=X.alternate;J?(X.updateQueue=J.updateQueue,X.memoizedState=J.memoizedState,X.lanes=J.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=$m(w);if(ie!==null){ie.flags&=-257,qm(ie,w,A,g,s),ie.mode&1&&Bm(g,B,s),s=ie,P=B;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else ue.add(P);break e}else{if(!(s&1)){Bm(g,B,s),pd();break e}P=Error(t(426))}}else if(Ye&&A.mode&1){var it=$m(w);if(it!==null){!(it.flags&65536)&&(it.flags|=256),qm(it,w,A,g,s),Ah(fo(P,A));break e}}g=P=fo(P,A),mt!==4&&(mt=2),Va===null?Va=[g]:Va.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var j=jm(g,P,s);fm(g,j);break e;case 1:A=P;var D=g.type,z=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(ci===null||!ci.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=zm(g,A,s);fm(g,te);break e}}g=g.return}while(g!==null)}Eg(a)}catch(he){s=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function vg(){var r=Tu.current;return Tu.current=gu,r===null?gu:r}function pd(){(mt===0||mt===3||mt===2)&&(mt=4),Et===null||!(os&268435455)&&!(Iu&268435455)||fi(Et,Ct)}function ku(r,s){var a=Ve;Ve|=2;var c=vg();(Et!==r||Ct!==s)&&(xr=null,ls(r,s));do try{fT();break}catch(f){_g(r,f)}while(!0);if(Ch(),Ve=a,Tu.current=c,at!==null)throw Error(t(261));return Et=null,Ct=0,mt}function fT(){for(;at!==null;)wg(at)}function pT(){for(;at!==null&&!Rl();)wg(at)}function wg(r){var s=Sg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Eg(r):at=s,sd.current=null}function Eg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=aT(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,at=null;return}}else if(a=oT(a,s,cn),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);mt===0&&(mt=5)}function us(r,s,a){var c=Ne,f=En.transition;try{En.transition=null,Ne=1,mT(r,s,a,c)}finally{En.transition=f,Ne=c}return null}function mT(r,s,a,c){do yo();while(hi!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===Et&&(at=Et=null,Ct=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Au||(Au=!0,Ag(pn,function(){return yo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=En.transition,En.transition=null;var w=Ne;Ne=1;var A=Ve;Ve|=4,sd.current=null,uT(r,a),hg(a,r),VE(ph),ei=!!fh,ph=fh=null,r.current=a,cT(a),Jc(),Ve=A,Ne=w,En.transition=g}else r.current=a;if(Au&&(Au=!1,hi=r,Ru=f),g=r.pendingLanes,g===0&&(ci=null),kl(a.stateNode),Xt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Su)throw Su=!1,r=ld,ld=null,r;return Ru&1&&r.tag!==0&&yo(),g=r.pendingLanes,g&1?r===ud?ba++:(ba=0,ud=r):ba=0,oi(),null}function yo(){if(hi!==null){var r=Xr(Ru),s=En.transition,a=Ne;try{if(En.transition=null,Ne=16>r?16:r,hi===null)var c=!1;else{if(r=hi,hi=null,Ru=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,w=g.child;if(le.flags&16){var A=g.deletions;if(A!==null){for(var P=0;P<A.length;P++){var B=A[P];for(le=B;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Oa(8,X,g)}var Z=X.child;if(Z!==null)Z.return=X,le=Z;else for(;le!==null;){X=le;var J=X.sibling,ie=X.return;if(og(X),X===B){le=null;break}if(J!==null){J.return=ie,le=J;break}le=ie}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,le=j;break e}le=g.return}}var D=r.current;for(le=D;le!==null;){w=le;var z=w.child;if(w.subtreeFlags&2064&&z!==null)z.return=w,le=z;else e:for(w=D;le!==null;){if(A=le,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Eu(9,A)}}catch(he){tt(A,A.return,he)}if(A===w){le=null;break e}var te=A.sibling;if(te!==null){te.return=A.return,le=te;break e}le=A.return}}if(Ve=f,oi(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Hi,r)}catch{}c=!0}return c}finally{Ne=a,En.transition=s}}return!1}function Tg(r,s,a){s=fo(a,s),s=jm(r,s,1),r=li(r,s,1),s=qt(),r!==null&&(Yr(r,1,s),Xt(r,s))}function tt(r,s,a){if(r.tag===3)Tg(r,r,a);else for(;s!==null;){if(s.tag===3){Tg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ci===null||!ci.has(c))){r=fo(a,r),r=zm(s,r,1),s=li(s,r,1),r=qt(),s!==null&&(Yr(s,1,r),Xt(s,r));break}}s=s.return}}function gT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=qt(),r.pingedLanes|=r.suspendedLanes&a,Et===r&&(Ct&a)===a&&(mt===4||mt===3&&(Ct&130023424)===Ct&&500>qe()-ad?ls(r,0):od|=a),Xt(r,s)}function Ig(r,s){s===0&&(r.mode&1?(s=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):s=1);var a=qt();r=Pr(r,s),r!==null&&(Yr(r,s,a),Xt(r,a))}function yT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Ig(r,a)}function _T(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Ig(r,a)}var Sg;Sg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Kt.current)Yt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Yt=!1,sT(r,s,a);Yt=!!(r.flags&131072)}else Yt=!1,Ye&&s.flags&1048576&&rm(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(r,s),r=s.pendingProps;var f=io(s,Ot.current);co(s,a),f=Fh(null,s,c,r,f,a);var g=Uh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(c)?(g=!0,tu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,xh(s),f.updater=yu,s.stateNode=f,f._reactInternals=s,Wh(s,c,r,a),s=Qh(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&Eh(s),$t(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=wT(c),r=bn(c,r),f){case 0:s=Kh(null,s,c,r,a);break e;case 1:s=Ym(null,s,c,r,a);break e;case 11:s=Wm(null,s,c,r,a);break e;case 14:s=Hm(null,s,c,bn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Kh(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Ym(r,s,c,f,a);case 3:e:{if(Jm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,dm(r,s),cu(s,c,null,a);var w=s.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=fo(Error(t(423)),s),s=Xm(r,s,c,a,f);break e}else if(c!==f){f=fo(Error(t(424)),s),s=Xm(r,s,c,a,f);break e}else for(un=ri(s.stateNode.containerInfo.firstChild),ln=s,Ye=!0,Vn=null,a=cm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ao(),c===f){s=Nr(r,s,a);break e}$t(r,s,c,a)}s=s.child}return s;case 5:return mm(s),r===null&&Sh(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,mh(c,f)?w=null:g!==null&&mh(c,g)&&(s.flags|=32),Qm(r,s),$t(r,s,w,a),s.child;case 6:return r===null&&Sh(s),null;case 13:return Zm(r,s,a);case 4:return Dh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=lo(s,null,c,a):$t(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Wm(r,s,c,f,a);case 7:return $t(r,s,s.pendingProps,a),s.child;case 8:return $t(r,s,s.pendingProps.children,a),s.child;case 12:return $t(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,We(au,c._currentValue),c._currentValue=w,g!==null)if(Ln(g.value,w)){if(g.children===f.children&&!Kt.current){s=Nr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=kr(-1,a&-a),P.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?P.next=P:(P.next=X.next,X.next=P),B.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),kh(g.return,a,s),A.lanes|=a;break}P=P.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),kh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}$t(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,co(s,a),f=vn(f),c=c(f),s.flags|=1,$t(r,s,c,a),s.child;case 14:return c=s.type,f=bn(c,s.pendingProps),f=bn(c.type,f),Hm(r,s,c,f,a);case 15:return Gm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),vu(r,s),s.tag=1,Qt(c)?(r=!0,tu(s)):r=!1,co(s,a),Fm(s,c,f),Wh(s,c,f,a),Qh(null,s,c,!0,r,a);case 19:return tg(r,s,a);case 22:return Km(r,s,a)}throw Error(t(156,s.tag))};function Ag(r,s){return Ms(r,s)}function vT(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new vT(r,s,a,c)}function md(r){return r=r.prototype,!(!r||!r.isReactComponent)}function wT(r){if(typeof r=="function")return md(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===xt)return 14}return 2}function pi(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Nu(r,s,a,c,f,g){var w=2;if(c=r,typeof r=="function")md(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case x:return cs(a.children,f,g,s);case S:w=8,f|=8;break;case R:return r=Tn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case C:return r=Tn(13,a,s,f),r.elementType=C,r.lanes=g,r;case nt:return r=Tn(19,a,s,f),r.elementType=nt,r.lanes=g,r;case ze:return xu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:w=10;break e;case O:w=9;break e;case M:w=11;break e;case xt:w=14;break e;case Dt:w=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Tn(w,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function cs(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function xu(r,s,a,c){return r=Tn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function gd(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function yd(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function ET(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _d(r,s,a,c,f,g,w,A,P){return r=new ET(r,s,a,A,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Tn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(g),r}function TT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Rg(r){if(!r)return si;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return em(r,a,s)}return s}function Cg(r,s,a,c,f,g,w,A,P){return r=_d(a,c,!0,r,f,g,w,A,P),r.context=Rg(null),a=r.current,c=qt(),f=di(a),g=kr(c,f),g.callback=s??null,li(a,g,f),r.current.lanes=f,Yr(r,f,c),Xt(r,c),r}function Du(r,s,a,c){var f=s.current,g=qt(),w=di(f);return a=Rg(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(g,w),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=li(f,s,w),r!==null&&(Un(r,f,w,g),uu(r,f,w)),w}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Pg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function vd(r,s){Pg(r,s),(r=r.alternate)&&Pg(r,s)}var kg=typeof reportError=="function"?reportError:function(r){console.error(r)};function wd(r){this._internalRoot=r}Lu.prototype.render=wd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Du(r,s,null,null)},Lu.prototype.unmount=wd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;as(function(){Du(null,r,null,null)}),s[Sr]=null}};function Lu(r){this._internalRoot=r}Lu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ll();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Jn.length&&s!==0&&s<Jn[a].priority;a++);Jn.splice(a,0,r),a===0&&Ml(r)}};function Ed(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Vu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function IT(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var B=Ou(w);g.call(B)}}var w=Cg(s,c,r,0,null,!1,!1,"",Ng);return r._reactRootContainer=w,r[Sr]=w.current,wa(r.nodeType===8?r.parentNode:r),as(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var B=Ou(P);A.call(B)}}var P=_d(r,0,!1,null,null,!1,!1,"",Ng);return r._reactRootContainer=P,r[Sr]=P.current,wa(r.nodeType===8?r.parentNode:r),as(function(){Du(s,P,a,c)}),P}function bu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var P=Ou(w);A.call(P)}}Du(s,w,r,f)}else w=IT(a,s,r,f,c);return Ou(w)}Dl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Kr(s.pendingLanes);a!==0&&(Jr(s,a|1),Xt(s,qe()),!(Ve&6)&&(go=qe()+500,oi()))}break;case 13:as(function(){var c=Pr(r,1);if(c!==null){var f=qt();Un(c,r,1,f)}}),vd(r,1)}},js=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=qt();Un(s,r,134217728,a)}vd(r,134217728)}},Ol=function(r){if(r.tag===13){var s=di(r),a=Pr(r,s);if(a!==null){var c=qt();Un(a,r,s,c)}vd(r,s)}},Ll=function(){return Ne},Vl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},xs=function(r,s,a){switch(s){case"input":if(Wo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=Zl(c);if(!f)throw Error(t(90));As(c),Wo(c,f)}}}break;case"textarea":ks(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},zi=dd,ta=as;var ST={usingClientEntryPoint:!1,Events:[Ia,no,Zl,Qn,ea,dd]},Ma={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AT={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ia(r),r===null?null:r.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Hi=Mu.inject(AT),rn=Mu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ST,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(s))throw Error(t(200));return TT(r,s,null,a)},Zt.createRoot=function(r,s){if(!Ed(r))throw Error(t(299));var a=!1,c="",f=kg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=_d(r,1,!1,null,null,a,!1,c,f),r[Sr]=s.current,wa(r.nodeType===8?r.parentNode:r),new wd(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ia(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return as(r)},Zt.hydrate=function(r,s,a){if(!Vu(s))throw Error(t(200));return bu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!Ed(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",w=kg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Cg(s,null,r,1,a??null,f,!1,g,w),r[Sr]=s.current,wa(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Lu(s)},Zt.render=function(r,s,a){if(!Vu(s))throw Error(t(200));return bu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!Vu(r))throw Error(t(40));return r._reactRootContainer?(as(function(){bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},Zt.unstable_batchedUpdates=dd,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Vu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return bu(r,s,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Fg;function OT(){if(Fg)return Sd.exports;Fg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Sd.exports=DT(),Sd.exports}var Ug;function LT(){if(Ug)return Fu;Ug=1;var n=OT();return Fu.createRoot=n.createRoot,Fu.hydrateRoot=n.hydrateRoot,Fu}var VT=LT(),Ua={},jg;function bT(){if(jg)return Ua;jg=1,Object.defineProperty(Ua,"__esModule",{value:!0}),Ua.parse=h,Ua.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function h(I,N){const L=new l,W=I.length;if(W<2)return L;const F=(N==null?void 0:N.decode)||v;let H=0;do{const G=I.indexOf("=",H);if(G===-1)break;const ee=I.indexOf(";",H),de=ee===-1?W:ee;if(G>de){H=I.lastIndexOf(";",G-1)+1;continue}const Se=d(I,H,G),Te=p(I,G,Se),x=I.slice(Se,Te);if(L[x]===void 0){let S=d(I,G+1,de),R=p(I,de,S);const k=F(I.slice(S,R));L[x]=k}H=de+1}while(H<W);return L}function d(I,N,L){do{const W=I.charCodeAt(N);if(W!==32&&W!==9)return N}while(++N<L);return L}function p(I,N,L){for(;N>L;){const W=I.charCodeAt(--N);if(W!==32&&W!==9)return N+1}return L}function y(I,N,L){const W=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const F=W(N);if(!e.test(F))throw new TypeError(`argument val is invalid: ${N}`);let H=I+"="+F;if(!L)return H;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);H+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);H+="; Domain="+L.domain}if(L.path){if(!i.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);H+="; Path="+L.path}if(L.expires){if(!T(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);H+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(H+="; HttpOnly"),L.secure&&(H+="; Secure"),L.partitioned&&(H+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return H}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Ua}bT();/**
 * react-router v7.1.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zg="popstate";function MT(n={}){function e(i,o){let{pathname:l,search:h,hash:d}=i.location;return $d("",{pathname:l,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Za(o)}return UT(e,t,null,n)}function Je(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Bn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FT(){return Math.random().toString(36).substring(2,10)}function Bg(n,e){return{usr:n.state,key:n.key,idx:e}}function $d(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Oo(e):e,state:t,key:e&&e.key||i||FT()}}function Za({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Oo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function UT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d="POP",p=null,y=v();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function v(){return(h.state||{idx:null}).idx}function T(){d="POP";let F=v(),H=F==null?null:F-y;y=F,p&&p({action:d,location:W.location,delta:H})}function I(F,H){d="PUSH";let G=$d(W.location,F,H);y=v()+1;let ee=Bg(G,y),de=W.createHref(G);try{h.pushState(ee,"",de)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(de)}l&&p&&p({action:d,location:W.location,delta:1})}function N(F,H){d="REPLACE";let G=$d(W.location,F,H);y=v();let ee=Bg(G,y),de=W.createHref(G);h.replaceState(ee,"",de),l&&p&&p({action:d,location:W.location,delta:0})}function L(F){let H=o.location.origin!=="null"?o.location.origin:o.location.href,G=typeof F=="string"?F:Za(F);return G=G.replace(/ $/,"%20"),Je(H,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,H)}let W={get action(){return d},get location(){return n(o,h)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(zg,T),p=F,()=>{o.removeEventListener(zg,T),p=null}},createHref(F){return e(o,F)},createURL:L,encodeLocation(F){let H=L(F);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:I,replace:N,go(F){return h.go(F)}};return W}function E_(n,e,t="/"){return jT(n,e,t,!1)}function jT(n,e,t,i){let o=typeof e=="string"?Oo(e):e,l=Ai(o.pathname||"/",t);if(l==null)return null;let h=T_(n);zT(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=XT(l);d=YT(h[p],y,i)}return d}function T_(n,e=[],t=[],i=""){let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Mr([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(Je(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),T_(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:KT(y,l.index),routesMeta:v})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of I_(l.path))o(l,h,p)}),e}function I_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=I_(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function zT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:QT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var BT=/^:[\w-]+$/,$T=3,qT=2,WT=1,HT=10,GT=-2,$g=n=>n==="*";function KT(n,e){let t=n.split("/"),i=t.length;return t.some($g)&&(i+=GT),e&&(i+=qT),t.filter(o=>!$g(o)).reduce((o,l)=>o+(BT.test(l)?$T:l===""?WT:HT),i)}function QT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function YT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Mr([l,T.pathname]),pathnameBase:nI(Mr([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=Mr([l,T.pathnameBase]))}return h}function ic(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=JT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let L=d[I]||"";h=l.slice(0,l.length-L.length).replace(/(.)\/+$/,"$1")}const N=d[I];return T&&!N?y[v]=void 0:y[v]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function JT(n,e=!1,t=!0){Bn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function XT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ai(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function ZT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Oo(n):n;return{pathname:t?t.startsWith("/")?t:eI(t,e):e,search:rI(i),hash:iI(o)}}function eI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Cd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _f(n){let e=tI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function vf(n,e,t,i=!1){let o;typeof n=="string"?o=Oo(n):(o={...n},Je(!o.pathname||!o.pathname.includes("?"),Cd("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Cd("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Cd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=ZT(o,d),y=h&&h!=="/"&&h.endsWith("/"),v=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var Mr=n=>n.join("/").replace(/\/\/+/g,"/"),nI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),rI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,iI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function sI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var S_=["POST","PUT","PATCH","DELETE"];new Set(S_);var oI=["GET",...S_];new Set(oI);var Lo=$.createContext(null);Lo.displayName="DataRouter";var Sc=$.createContext(null);Sc.displayName="DataRouterState";var A_=$.createContext({isTransitioning:!1});A_.displayName="ViewTransition";var aI=$.createContext(new Map);aI.displayName="Fetchers";var lI=$.createContext(null);lI.displayName="Await";var Wn=$.createContext(null);Wn.displayName="Navigation";var cl=$.createContext(null);cl.displayName="Location";var Hn=$.createContext({outlet:null,matches:[],isDataRoute:!1});Hn.displayName="Route";var wf=$.createContext(null);wf.displayName="RouteError";function uI(n,{relative:e}={}){Je(Vo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=$.useContext(Wn),{hash:o,pathname:l,search:h}=hl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Mr([t,l])),i.createHref({pathname:d,search:h,hash:o})}function Vo(){return $.useContext(cl)!=null}function fr(){return Je(Vo(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(cl).location}var R_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function C_(n){$.useContext(Wn).static||$.useLayoutEffect(n)}function bo(){let{isDataRoute:n}=$.useContext(Hn);return n?SI():cI()}function cI(){Je(Vo(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(Lo),{basename:e,navigator:t}=$.useContext(Wn),{matches:i}=$.useContext(Hn),{pathname:o}=fr(),l=JSON.stringify(_f(i)),h=$.useRef(!1);return C_(()=>{h.current=!0}),$.useCallback((p,y={})=>{if(Bn(h.current,R_),!h.current)return;if(typeof p=="number"){t.go(p);return}let v=vf(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Mr([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,l,o,n])}var hI=$.createContext(null);function dI(n){let e=$.useContext(Hn).outlet;return e&&$.createElement(hI.Provider,{value:n},e)}function hl(n,{relative:e}={}){let{matches:t}=$.useContext(Hn),{pathname:i}=fr(),o=JSON.stringify(_f(t));return $.useMemo(()=>vf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function fI(n,e){return P_(n,e)}function P_(n,e,t,i){var G;Je(Vo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=$.useContext(Wn),{matches:h}=$.useContext(Hn),d=h[h.length-1],p=d?d.params:{},y=d?d.pathname:"/",v=d?d.pathnameBase:"/",T=d&&d.route;{let ee=T&&T.path||"";k_(y,!T||ee.endsWith("*")||ee.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${ee}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${ee}"> to <Route path="${ee==="/"?"*":`${ee}/*`}">.`)}let I=fr(),N;if(e){let ee=typeof e=="string"?Oo(e):e;Je(v==="/"||((G=ee.pathname)==null?void 0:G.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${ee.pathname}" was given in the \`location\` prop.`),N=ee}else N=I;let L=N.pathname||"/",W=L;if(v!=="/"){let ee=v.replace(/^\//,"").split("/");W="/"+L.replace(/^\//,"").split("/").slice(ee.length).join("/")}let F=!l&&t&&t.matches&&t.matches.length>0?t.matches:E_(n,{pathname:W});Bn(T||F!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Bn(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=_I(F&&F.map(ee=>Object.assign({},ee,{params:Object.assign({},p,ee.params),pathname:Mr([v,o.encodeLocation?o.encodeLocation(ee.pathname).pathname:ee.pathname]),pathnameBase:ee.pathnameBase==="/"?v:Mr([v,o.encodeLocation?o.encodeLocation(ee.pathnameBase).pathname:ee.pathnameBase])})),h,t,i);return e&&H?$.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},H):H}function pI(){let n=II(),e=sI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,h)}var mI=$.createElement(pI,null),gI=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(Hn.Provider,{value:this.props.routeContext},$.createElement(wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function yI({routeContext:n,match:e,children:t}){let i=$.useContext(Lo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Hn.Provider,{value:n},t)}function _I(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,v)=>{let T,I=!1,N=null,L=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,N=y.route.errorElement||mI,h&&(d<0&&v===0?(k_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,L=null):d===v&&(I=!0,L=y.route.hydrateFallbackElement||null)));let W=e.concat(o.slice(0,v+1)),F=()=>{let H;return T?H=N:I?H=L:y.route.Component?H=$.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,$.createElement(yI,{match:y,routeContext:{outlet:p,matches:W,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?$.createElement(gI,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:F(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):F()},null)}function Ef(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vI(n){let e=$.useContext(Lo);return Je(e,Ef(n)),e}function wI(n){let e=$.useContext(Sc);return Je(e,Ef(n)),e}function EI(n){let e=$.useContext(Hn);return Je(e,Ef(n)),e}function Tf(n){let e=EI(n),t=e.matches[e.matches.length-1];return Je(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function TI(){return Tf("useRouteId")}function II(){var i;let n=$.useContext(wf),e=wI("useRouteError"),t=Tf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function SI(){let{router:n}=vI("useNavigate"),e=Tf("useNavigate"),t=$.useRef(!1);return C_(()=>{t.current=!0}),$.useCallback(async(o,l={})=>{Bn(t.current,R_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var qg={};function k_(n,e,t){!e&&!qg[n]&&(qg[n]=!0,Bn(!1,t))}$.memo(AI);function AI({routes:n,future:e,state:t}){return P_(n,void 0,t,e)}function RI({to:n,replace:e,state:t,relative:i}){Je(Vo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=$.useContext(Wn);Bn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=$.useContext(Hn),{pathname:h}=fr(),d=bo(),p=vf(n,_f(l),h,i==="path"),y=JSON.stringify(p);return $.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function CI(n){return dI(n.context)}function sr(n){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Je(!Vo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Oo(t));let{pathname:p="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,N=$.useMemo(()=>{let L=Ai(p,h);return L==null?null:{location:{pathname:L,search:y,hash:v,state:T,key:I},navigationType:i}},[h,p,y,v,T,I,i]);return Bn(N!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:$.createElement(Wn.Provider,{value:d},$.createElement(cl.Provider,{children:e,value:N}))}function kI({children:n,location:e}){return fI(qd(n),e)}function qd(n,e=[]){let t=[];return $.Children.forEach(n,(i,o)=>{if(!$.isValidElement(i))return;let l=[...e,o];if(i.type===$.Fragment){t.push.apply(t,qd(i.props.children,l));return}Je(i.type===sr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=qd(i.props.children,l)),t.push(h)}),t}var Hu="get",Gu="application/x-www-form-urlencoded";function Ac(n){return n!=null&&typeof n.tagName=="string"}function NI(n){return Ac(n)&&n.tagName.toLowerCase()==="button"}function xI(n){return Ac(n)&&n.tagName.toLowerCase()==="form"}function DI(n){return Ac(n)&&n.tagName.toLowerCase()==="input"}function OI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function LI(n,e){return n.button===0&&(!e||e==="_self")&&!OI(n)}var Uu=null;function VI(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var bI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(n){return n!=null&&!bI.has(n)?(Bn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gu}"`),null):n}function MI(n,e){let t,i,o,l,h;if(xI(n)){let d=n.getAttribute("action");i=d?Ai(d,e):null,t=n.getAttribute("method")||Hu,o=Pd(n.getAttribute("enctype"))||Gu,l=new FormData(n)}else if(NI(n)||DI(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ai(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Hu,o=Pd(n.getAttribute("formenctype"))||Pd(d.getAttribute("enctype"))||Gu,l=new FormData(d,n),!VI()){let{name:y,type:v,value:T}=n;if(v==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(Ac(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Hu,i=null,o=Gu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function If(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function FI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function UI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function jI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await FI(l,t);return h.links?h.links():[]}return[]}));return qI(i.flat(1).filter(UI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Wg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var v;return t[y].pathname!==p.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(h(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function zI(n,e){return BI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function BI(n){return[...new Set(n)]}function $I(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function qI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify($I(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function WI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function HI(){let n=$.useContext(Lo);return If(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function GI(){let n=$.useContext(Sc);return If(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Sf=$.createContext(void 0);Sf.displayName="FrameworkContext";function N_(){let n=$.useContext(Sf);return If(n,"You must render this element inside a <HydratedRouter> element"),n}function KI(n,e){let t=$.useContext(Sf),[i,o]=$.useState(!1),[l,h]=$.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=$.useRef(null);$.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let W=H=>{H.forEach(G=>{h(G.isIntersecting)})},F=new IntersectionObserver(W,{threshold:.5});return I.current&&F.observe(I.current),()=>{F.disconnect()}}},[n]),$.useEffect(()=>{if(i){let W=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(W)}}},[i]);let N=()=>{o(!0)},L=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:ja(d,N),onBlur:ja(p,L),onMouseEnter:ja(y,N),onMouseLeave:ja(v,L),onTouchStart:ja(T,N)}]:[!1,I,{}]}function ja(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function QI({page:n,...e}){let{router:t}=HI(),i=$.useMemo(()=>E_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?$.createElement(JI,{page:n,matches:i,...e}):null}function YI(n){let{manifest:e,routeModules:t}=N_(),[i,o]=$.useState([]);return $.useEffect(()=>{let l=!1;return jI(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function JI({page:n,matches:e,...t}){let i=fr(),{manifest:o,routeModules:l}=N_(),{loaderData:h,matches:d}=GI(),p=$.useMemo(()=>Wg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=$.useMemo(()=>Wg(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=$.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,L=!1;if(e.forEach(F=>{var G;let H=o.routes[F.route.id];!H||!H.hasLoader||(!p.some(ee=>ee.route.id===F.route.id)&&F.route.id in h&&((G=l[F.route.id])!=null&&G.shouldRevalidate)||H.hasClientLoader?L=!0:N.add(F.route.id))}),N.size===0)return[];let W=WI(n);return L&&N.size>0&&W.searchParams.set("_routes",e.filter(F=>N.has(F.route.id)).map(F=>F.route.id).join(",")),[W.pathname+W.search]},[h,i,o,p,e,n,l]),T=$.useMemo(()=>zI(y,o),[y,o]),I=YI(y);return $.createElement($.Fragment,null,v.map(N=>$.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),T.map(N=>$.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),I.map(({key:N,link:L})=>$.createElement("link",{key:N,...L})))}function XI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var x_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{x_&&(window.__reactRouterVersion="7.1.4")}catch{}function ZI({basename:n,children:e,window:t}){let i=$.useRef();i.current==null&&(i.current=MT({window:t,v5Compat:!0}));let o=i.current,[l,h]=$.useState({action:o.action,location:o.location}),d=$.useCallback(p=>{$.startTransition(()=>h(p))},[h]);return $.useLayoutEffect(()=>o.listen(d),[o,d]),$.createElement(PI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var D_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ds=$.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:d,target:p,to:y,preventScrollReset:v,viewTransition:T,...I},N){let{basename:L}=$.useContext(Wn),W=typeof y=="string"&&D_.test(y),F,H=!1;if(typeof y=="string"&&W&&(F=y,x_))try{let R=new URL(window.location.href),k=y.startsWith("//")?new URL(R.protocol+y):new URL(y),O=Ai(k.pathname,L);k.origin===R.origin&&O!=null?y=O+k.search+k.hash:H=!0}catch{Bn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=uI(y,{relative:o}),[ee,de,Se]=KI(i,I),Te=nS(y,{replace:h,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:T});function x(R){e&&e(R),R.defaultPrevented||Te(R)}let S=$.createElement("a",{...I,...Se,href:F||G,onClick:H||l?e:x,ref:XI(N,de),target:p,"data-discover":!W&&t==="render"?"true":void 0});return ee&&!W?$.createElement($.Fragment,null,S,$.createElement(QI,{page:G})):S});ds.displayName="Link";var Rc=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:d,children:p,...y},v){let T=hl(h,{relative:y.relative}),I=fr(),N=$.useContext(Sc),{navigator:L,basename:W}=$.useContext(Wn),F=N!=null&&aS(T)&&d===!0,H=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,G=I.pathname,ee=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(G=G.toLowerCase(),ee=ee?ee.toLowerCase():null,H=H.toLowerCase()),ee&&W&&(ee=Ai(ee,W)||ee);const de=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Se=G===H||!o&&G.startsWith(H)&&G.charAt(de)==="/",Te=ee!=null&&(ee===H||!o&&ee.startsWith(H)&&ee.charAt(H.length)==="/"),x={isActive:Se,isPending:Te,isTransitioning:F},S=Se?e:void 0,R;typeof i=="function"?R=i(x):R=[i,Se?"active":null,Te?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(x):l;return $.createElement(ds,{...y,"aria-current":S,className:R,ref:v,style:k,to:h,viewTransition:d},typeof p=="function"?p(x):p)});Rc.displayName="NavLink";var eS=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Hu,action:d,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:T,...I},N)=>{let L=sS(),W=oS(d,{relative:y}),F=h.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&D_.test(d),G=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let de=ee.nativeEvent.submitter,Se=(de==null?void 0:de.getAttribute("formmethod"))||h;L(de||ee.currentTarget,{fetcherKey:e,method:Se,navigate:t,replace:o,state:l,relative:y,preventScrollReset:v,viewTransition:T})};return $.createElement("form",{ref:N,method:F,action:W,onSubmit:i?p:G,...I,"data-discover":!H&&n==="render"?"true":void 0})});eS.displayName="Form";function tS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function O_(n){let e=$.useContext(Lo);return Je(e,tS(n)),e}function nS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let d=bo(),p=fr(),y=hl(n,{relative:l});return $.useCallback(v=>{if(LI(v,e)){v.preventDefault();let T=t!==void 0?t:Za(p)===Za(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,d,y,t,i,e,n,o,l,h])}var rS=0,iS=()=>`__${String(++rS)}__`;function sS(){let{router:n}=O_("useSubmit"),{basename:e}=$.useContext(Wn),t=TI();return $.useCallback(async(i,o={})=>{let{action:l,method:h,encType:d,formData:p,body:y}=MI(i,e);if(o.navigate===!1){let v=o.fetcherKey||iS();await n.fetch(v,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function oS(n,{relative:e}={}){let{basename:t}=$.useContext(Wn),i=$.useContext(Hn);Je(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...hl(n||".",{relative:e})},h=fr();if(n==null){l.search=h.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();l.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Mr([t,l.pathname])),Za(l)}function aS(n,e={}){let t=$.useContext(A_);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=O_("useViewTransitionState"),o=hl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ai(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ai(t.nextLocation.pathname,i)||t.nextLocation.pathname;return ic(o.pathname,h)!=null||ic(o.pathname,l)!=null}new TextEncoder;function lS(){const[n,e]=$.useState([]),[t,i]=$.useState("https://pokeapi.co/api/v2/pokemon?limit=8"),o=bo();function l(y){o("/detail",{state:{url:y}})}$.useEffect(()=>h(),[]);function h(){fetch(t).then(y=>y.json()).then(y=>{const v=y.results.map(T=>fetch(T.url).then(I=>I.json()).then(I=>{T.image=I.sprites.front_default,T.habilidad=I.abilities,T.Ps=I.stats[0].base_stat,T.type=I.types[0].type.name}));Promise.all(v).then(()=>{e(T=>T.concat(y.results)),i(y.next)})})}function d(){h()}function p(y){return{grass:"grass-type",fire:"fire-type",water:"water-type",electric:"electric-type",psychic:"psychic-type",fighting:"fighting-type",dark:"dark-type",dragon:"dragon-type",steel:"steel-type",normal:"normal-type"}[y]||"default-type"}return b.jsx(b.Fragment,{children:b.jsx("div",{className:"Pokemons",children:b.jsxs("div",{className:"row contPoke",children:[n.map(y=>b.jsxs("div",{className:`card pokeCard ${p(y.type)}`,children:[b.jsxs("div",{className:"card-header",children:[b.jsx("p",{className:"card-title",children:y.name}),b.jsxs("p",{className:"card-hp",children:["HP: ",y.Ps]})]}),b.jsx("div",{className:"card-image-container",children:b.jsx("img",{src:y.image,className:"card-img-top",alt:y.name})}),b.jsxs("ul",{className:"list-group list-group-flush",children:[b.jsx("li",{className:"list-group-item",children:b.jsx("b",{children:"Habilidades"})}),y.habilidad.map(v=>b.jsx("li",{className:"list-group-item",children:v.ability.name},v.ability.name))]}),b.jsx("div",{className:"card-body",children:b.jsx("button",{className:"card-link ",onClick:()=>l(y.url),children:"Saber mas"})})]},y.name)),b.jsx("button",{onClick:d,className:"chargeMore",children:"Cargar mas"})]})})})}function uS(){return b.jsx(b.Fragment,{children:b.jsx("div",{className:"Pokemons",children:b.jsx("div",{className:"contPoke",children:b.jsx("h1",{className:"error",children:"Error 404 pagina no encontrada"})})})})}function cS(){var p;const e=(p=fr().state)==null?void 0:p.url,[t,i]=$.useState(null),[o,l]=$.useState(""),[h,d]=$.useState(!0);return $.useEffect(()=>{fetch(e).then(y=>y.json()).then(y=>(i(y),console.log(y.sprites),fetch(y.species.url))).then(y=>y.json()).then(y=>{const v=y.flavor_text_entries.find(T=>T.language.name==="en");l(v?v.flavor_text:"No description available."),d(!1)}).catch(y=>console.error("Error fetching Pokémon data:",y))},[]),h?b.jsx("p",{children:"Loading..."}):b.jsx("div",{className:"Pokemons",children:b.jsxs("div",{className:"contPoke",children:[b.jsx("div",{className:"goBack-cont",children:b.jsx(Rc,{to:-1,className:"goBack",children:"Atras"})}),b.jsxs("h1",{className:"pokemon-title",children:[t.name," #",t.id]}),b.jsxs("div",{className:"cont-hero",children:[b.jsx("div",{className:"imagenes",children:Object.entries(t.sprites).map(([y,v])=>v?typeof v=="object"?Object.entries(v).map(([T,I])=>Object.entries(I).map(([N,L])=>{if(L&&typeof L!="object"&&L.startsWith("https"))return b.jsx("img",{src:L,alt:`${t.name} - ${N}`,className:"pokemon-image"},N)})):b.jsx("img",{src:v,alt:`${t.name} - ${y}`,className:"pokemon-image"},y):null)}),b.jsx("div",{className:"stats-container",children:t.stats.map(y=>b.jsxs("div",{className:"stat-item",children:[b.jsx("p",{className:"stat-name",children:y.stat.name}),b.jsx("div",{className:"stat-bar-bg",children:b.jsx("div",{className:"stat-bar",style:{width:`${y.base_stat/150*100}%`},children:y.base_stat})})]},y.stat.name))})]}),b.jsxs("div",{className:"cont-info-hero",children:[b.jsxs("div",{className:"cont-info",children:[b.jsx("p",{className:"section-title",children:"Description:"}),b.jsx("p",{className:"description",children:o}),b.jsx("p",{className:"section-title",children:"Types:"}),b.jsx("div",{className:"types-container",children:t.types.map(y=>b.jsx("span",{className:"type-badge",children:y.type.name},y.type.name))})]}),b.jsxs("div",{className:"cont-info",children:[b.jsx("p",{className:"section-title",children:"Abilities:"}),b.jsx("ul",{className:"abilities-list",children:t.abilities.map(y=>b.jsx("li",{className:"ability-item",children:y.ability.name},y.ability.name))}),b.jsx("p",{className:"section-title",children:"Height:"}),b.jsxs("p",{className:"info",children:[t.height/10," m"]}),b.jsx("p",{className:"section-title",children:"Weight:"}),b.jsxs("p",{className:"info",children:[t.weight/10," kg"]})]})]})]})})}var Hg={};/**
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
 */const L_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},hS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},V_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,N=y&63;p||(N=64,h||(I=64)),i.push(t[v],t[T],t[I],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(L_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new dS;const I=l<<2|d>>4;if(i.push(I),y!==64){const N=d<<4&240|y>>2;if(i.push(N),T!==64){const L=y<<6&192|T;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fS=function(n){const e=L_(n);return V_.encodeByteArray(e,!0)},sc=function(n){return fS(n).replace(/\./g,"")},b_=function(n){try{return V_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mS=()=>pS().__FIREBASE_DEFAULTS__,gS=()=>{if(typeof process>"u"||typeof Hg>"u")return;const n=Hg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&b_(n[1]);return e&&JSON.parse(e)},Cc=()=>{try{return mS()||gS()||yS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},M_=n=>{var e,t;return(t=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_S=n=>{const e=M_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},F_=()=>{var n;return(n=Cc())===null||n===void 0?void 0:n.config},U_=n=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class vS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function wS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sc(JSON.stringify(t)),sc(JSON.stringify(h)),""].join(".")}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ES(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function TS(){var n;const e=(n=Cc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function j_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AS(){const n=jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function RS(){return!TS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z_(){try{return typeof indexedDB=="object"}catch{return!1}}function B_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function CS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const PS="FirebaseError";class Gn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=PS,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Es.prototype.create)}}class Es{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?kS(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Gn(o,d,i)}}function kS(n,e){return n.replace(NS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const NS=/\{\$([^}]+)}/g;function xS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function el(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Gg(l)&&Gg(h)){if(!el(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Gg(n){return n!==null&&typeof n=="object"}/**
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
 */function dl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ba(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function DS(n,e){const t=new OS(n,e);return t.subscribe.bind(t)}class OS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");LS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function kd(){}/**
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
 */const VS=1e3,bS=2,MS=4*60*60*1e3,FS=.5;function Kg(n,e=VS,t=bS){const i=e*Math.pow(t,n),o=Math.round(FS*i*(Math.random()-.5)*2);return Math.min(MS,i+o)}/**
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
 */function ct(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class US{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new vS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zS(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jS(n){return n===hs?void 0:n}function zS(n){return n.instantiationMode==="EAGER"}/**
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
 */class BS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new US(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const $S={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},qS=Pe.INFO,WS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},HS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=WS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=qS,this._logHandler=HS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const GS=(n,e)=>e.some(t=>n instanceof t);let Qg,Yg;function KS(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QS(){return Yg||(Yg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $_=new WeakMap,Wd=new WeakMap,q_=new WeakMap,Nd=new WeakMap,Af=new WeakMap;function YS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ei(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&$_.set(t,n)}).catch(()=>{}),Af.set(e,n),e}function JS(n){if(Wd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Wd.set(n,e)}let Hd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||q_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function XS(n){Hd=n(Hd)}function ZS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xd(this),e,...t);return q_.set(i,e.sort?e.sort():[e]),Ei(i)}:QS().includes(n)?function(...e){return n.apply(xd(this),e),Ei($_.get(this))}:function(...e){return Ei(n.apply(xd(this),e))}}function e0(n){return typeof n=="function"?ZS(n):(n instanceof IDBTransaction&&JS(n),GS(n,KS())?new Proxy(n,Hd):n)}function Ei(n){if(n instanceof IDBRequest)return YS(n);if(Nd.has(n))return Nd.get(n);const e=e0(n);return e!==n&&(Nd.set(n,e),Af.set(e,n)),e}const xd=n=>Af.get(n);function W_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=Ei(h);return i&&h.addEventListener("upgradeneeded",p=>{i(Ei(h.result),p.oldVersion,p.newVersion,Ei(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const t0=["get","getKey","getAll","getAllKeys","count"],n0=["put","add","delete","clear"],Dd=new Map;function Jg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dd.get(e))return Dd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=n0.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||t0.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Dd.set(e,l),l}XS(n=>({...n,get:(e,t,i)=>Jg(e,t)||n.get(e,t,i),has:(e,t)=>!!Jg(e,t)||n.has(e,t)}));/**
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
 */class r0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(i0(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function i0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gd="@firebase/app",Xg="0.10.18";/**
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
 */const jr=new Pc("@firebase/app"),s0="@firebase/app-compat",o0="@firebase/analytics-compat",a0="@firebase/analytics",l0="@firebase/app-check-compat",u0="@firebase/app-check",c0="@firebase/auth",h0="@firebase/auth-compat",d0="@firebase/database",f0="@firebase/data-connect",p0="@firebase/database-compat",m0="@firebase/functions",g0="@firebase/functions-compat",y0="@firebase/installations",_0="@firebase/installations-compat",v0="@firebase/messaging",w0="@firebase/messaging-compat",E0="@firebase/performance",T0="@firebase/performance-compat",I0="@firebase/remote-config",S0="@firebase/remote-config-compat",A0="@firebase/storage",R0="@firebase/storage-compat",C0="@firebase/firestore",P0="@firebase/vertexai",k0="@firebase/firestore-compat",N0="firebase",x0="11.2.0";/**
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
 */const Kd="[DEFAULT]",D0={[Gd]:"fire-core",[s0]:"fire-core-compat",[a0]:"fire-analytics",[o0]:"fire-analytics-compat",[u0]:"fire-app-check",[l0]:"fire-app-check-compat",[c0]:"fire-auth",[h0]:"fire-auth-compat",[d0]:"fire-rtdb",[f0]:"fire-data-connect",[p0]:"fire-rtdb-compat",[m0]:"fire-fn",[g0]:"fire-fn-compat",[y0]:"fire-iid",[_0]:"fire-iid-compat",[v0]:"fire-fcm",[w0]:"fire-fcm-compat",[E0]:"fire-perf",[T0]:"fire-perf-compat",[I0]:"fire-rc",[S0]:"fire-rc-compat",[A0]:"fire-gcs",[R0]:"fire-gcs-compat",[C0]:"fire-fst",[k0]:"fire-fst-compat",[P0]:"fire-vertex","fire-js":"fire-js",[N0]:"fire-js-all"};/**
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
 */const oc=new Map,O0=new Map,Qd=new Map;function Zg(n,e){try{n.container.addComponent(e)}catch(t){jr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hr(n){const e=n.name;if(Qd.has(e))return jr.debug(`There were multiple attempts to register component ${e}.`),!1;Qd.set(e,n);for(const t of oc.values())Zg(t,n);for(const t of O0.values())Zg(t,n);return!0}function Ts(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jn(n){return n.settings!==void 0}/**
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
 */const L0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new Es("app","Firebase",L0);/**
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
 */class V0{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
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
 */const Mo=x0;function H_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Kd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ti.create("bad-app-name",{appName:String(o)});if(t||(t=F_()),!t)throw Ti.create("no-options");const l=oc.get(o);if(l){if(el(t,l.options)&&el(i,l.config))return l;throw Ti.create("duplicate-app",{appName:o})}const h=new BS(o);for(const p of Qd.values())h.addComponent(p);const d=new V0(t,i,h);return oc.set(o,d),d}function Rf(n=Kd){const e=oc.get(n);if(!e&&n===Kd&&F_())return H_();if(!e)throw Ti.create("no-app",{appName:n});return e}function In(n,e,t){var i;let o=(i=D0[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jr.warn(d.join(" "));return}hr(new $n(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const b0="firebase-heartbeat-database",M0=1,tl="firebase-heartbeat-store";let Od=null;function G_(){return Od||(Od=W_(b0,M0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ti.create("idb-open",{originalErrorMessage:n.message})})),Od}async function F0(n){try{const t=(await G_()).transaction(tl),i=await t.objectStore(tl).get(K_(n));return await t.done,i}catch(e){if(e instanceof Gn)jr.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jr.warn(t.message)}}}async function ey(n,e){try{const i=(await G_()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,K_(n)),await i.done}catch(t){if(t instanceof Gn)jr.warn(t.message);else{const i=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jr.warn(i.message)}}}function K_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const U0=1024,j0=30*24*60*60*1e3;class z0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $0(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ty();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=j0}),this._storage.overwrite(this._heartbeatsCache))}catch(i){jr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ty(),{heartbeatsToSend:i,unsentEntries:o}=B0(this._heartbeatsCache.heartbeats),l=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jr.warn(t),""}}}function ty(){return new Date().toISOString().substring(0,10)}function B0(n,e=U0){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),ny(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ny(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class $0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z_()?B_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await F0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ey(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ey(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ny(n){return sc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function q0(n){hr(new $n("platform-logger",e=>new r0(e),"PRIVATE")),hr(new $n("heartbeat",e=>new z0(e),"PRIVATE")),In(Gd,Xg,n),In(Gd,Xg,"esm2017"),In("fire-js","")}q0("");function Cf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W0=Q_,Y_=new Es("auth","Firebase",Q_());/**
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
 */const ac=new Pc("@firebase/auth");function H0(n,...e){ac.logLevel<=Pe.WARN&&ac.warn(`Auth (${Mo}): ${n}`,...e)}function Ku(n,...e){ac.logLevel<=Pe.ERROR&&ac.error(`Auth (${Mo}): ${n}`,...e)}/**
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
 */function Sn(n,...e){throw kf(n,...e)}function zn(n,...e){return kf(n,...e)}function Pf(n,e,t){const i=Object.assign(Object.assign({},W0()),{[e]:t});return new Es("auth","Firebase",i).create(e,{appName:n.name})}function Fr(n){return Pf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function G0(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Sn(n,"argument-error"),Pf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Y_.create(n,...e)}function _e(n,e,...t){if(!n)throw kf(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ku(e),new Error(e)}function zr(n,e){n||Lr(e)}/**
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
 */function Yd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function K0(){return ry()==="http:"||ry()==="https:"}function ry(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Q0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K0()||j_()||"connection"in navigator)?navigator.onLine:!0}function Y0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fl{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=ES()||SS()}get(){return Q0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nf(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class J_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const X0=new fl(3e4,6e4);function xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Di(n,e,t,i,o={}){return X_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=dl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return IS()||(y.referrerPolicy="no-referrer"),J_.fetch()(Z_(n,n.config.apiHost,t,d),y)})}async function X_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},J0),e);try{const o=new eA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ju(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw ju(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw ju(n,"user-disabled",h);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Pf(n,v,y);Sn(n,v)}}catch(o){if(o instanceof Gn)throw o;Sn(n,"network-request-failed",{message:String(o)})}}async function pl(n,e,t,i,o={}){const l=await Di(n,e,t,i,o);return"mfaPendingCredential"in l&&Sn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Z_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Nf(n.config,o):`${n.config.apiScheme}://${o}`}function Z0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(zn(this.auth,"network-request-failed")),X0.get())})}}function ju(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=zn(n,e,i);return o.customData._tokenResponse=t,o}function iy(n){return n!==void 0&&n.enterprise!==void 0}class tA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Z0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nA(n,e){return Di(n,"GET","/v2/recaptchaConfig",xi(n,e))}/**
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
 */async function rA(n,e){return Di(n,"POST","/v1/accounts:delete",e)}async function ev(n,e){return Di(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ga(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iA(n,e=!1){const t=ct(n),i=await t.getIdToken(e),o=xf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ga(Ld(o.auth_time)),issuedAtTime:Ga(Ld(o.iat)),expirationTime:Ga(Ld(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ld(n){return Number(n)*1e3}function xf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=b_(t);return o?JSON.parse(o):(Ku("Failed to decode base64 JWT payload"),null)}catch(o){return Ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sy(n){const e=xf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Gn&&sA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function sA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class oA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ga(this.lastLoginAt),this.creationTime=Ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await nl(n,ev(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?tv(l.providerUserInfo):[],d=lA(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Jd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function aA(n){const e=ct(n);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function tv(n){return n.map(e=>{var{providerId:t}=e,i=Cf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function uA(n,e){const t=await X_(n,{},async()=>{const i=dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=Z_(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",J_.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cA(n,e){return Di(n,"POST","/v2/accounts:revokeToken",xi(n,e))}/**
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
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=sy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await uA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new To;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
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
 */function gi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Jd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iA(this,e)}reload(){return aA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await nl(this,rA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,G=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ee,emailVerified:de,isAnonymous:Se,providerData:Te,stsTokenManager:x}=t;_e(ee&&x,e,"internal-error");const S=To.fromJSON(this.name,x);_e(typeof ee=="string",e,"internal-error"),gi(T,e.name),gi(I,e.name),_e(typeof de=="boolean",e,"internal-error"),_e(typeof Se=="boolean",e,"internal-error"),gi(N,e.name),gi(L,e.name),gi(W,e.name),gi(F,e.name),gi(H,e.name),gi(G,e.name);const R=new Vr({uid:ee,auth:e,email:I,emailVerified:de,displayName:T,isAnonymous:Se,photoURL:L,phoneNumber:N,tenantId:W,stsTokenManager:S,createdAt:H,lastLoginAt:G});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(k=>Object.assign({},k))),F&&(R._redirectEventId=F),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new To;o.updateFromServerResponse(t);const l=new Vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await lc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?tv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new To;d.updateFromIdToken(i);const p=new Vr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const oy=new Map;function br(n){zr(n instanceof Function,"Expected a class definition");let e=oy.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oy.set(n,e),e)}/**
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
 */class nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nv.type="NONE";const ay=nv;/**
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
 */function Qu(n,e,t){return`firebase:${n}:${e}:${t}`}class Io{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Qu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Qu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Io(br(ay),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(ay);const h=Qu(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(h);if(v){const T=Vr._fromJSON(e,v);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Io(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Io(l,e,i))}}/**
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
 */function ly(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lv(e))return"Blackberry";if(uv(e))return"Webos";if(iv(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function rv(n=jt()){return/firefox\//i.test(n)}function iv(n=jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(n=jt()){return/crios\//i.test(n)}function ov(n=jt()){return/iemobile/i.test(n)}function av(n=jt()){return/android/i.test(n)}function lv(n=jt()){return/blackberry/i.test(n)}function uv(n=jt()){return/webos/i.test(n)}function Df(n=jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hA(n=jt()){var e;return Df(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dA(){return AS()&&document.documentMode===10}function cv(n=jt()){return Df(n)||av(n)||uv(n)||lv(n)||/windows phone/i.test(n)||ov(n)}/**
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
 */function hv(n,e=[]){let t;switch(n){case"Browser":t=ly(jt());break;case"Worker":t=`${ly(jt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mo}/${i}`}/**
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
 */class fA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function pA(n,e={}){return Di(n,"GET","/v2/passwordPolicy",xi(n,e))}/**
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
 */const mA=6;class gA{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:mA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class yA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new fA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Io.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ev(this,{idToken:e}),i=await Vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Fr(this));const t=e?ct(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pA(this),t=new gA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Es("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await cA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&H0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oi(n){return ct(n)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=DS(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _A(n){kc=n}function dv(n){return kc.loadJS(n)}function vA(){return kc.recaptchaEnterpriseScript}function wA(){return kc.gapiScript}function EA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class TA{constructor(){this.enterprise=new IA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class IA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const SA="recaptcha-enterprise",fv="NO_RECAPTCHA";class AA{constructor(e){this.type=SA,this.auth=Oi(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{nA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new tA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;iy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(fv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TA().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&iy(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=vA();p.length!==0&&(p+=d),dv(p).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function cy(n,e,t,i=!1,o=!1){const l=new AA(n);let h;if(o)h=fv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Xd(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await cy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await cy(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(h)})}/**
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
 */function RA(n,e){const t=Ts(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(el(l,e??{}))return o;Sn(o,"already-initialized")}return t.initialize({options:e})}function CA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function PA(n,e,t){const i=Oi(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=pv(e),{host:h,port:d}=kA(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),NA()}function pv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kA(n){const e=pv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:hy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:hy(h)}}}function hy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function xA(n,e){return Di(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function DA(n,e){return pl(n,"POST","/v1/accounts:signInWithPassword",xi(n,e))}/**
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
 */async function OA(n,e){return pl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}async function LA(n,e){return pl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}/**
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
 */class rl extends Of{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xd(e,t,"signInWithPassword",DA);case"emailLink":return OA(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xd(e,i,"signUpPassword",xA);case"emailLink":return LA(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function So(n,e){return pl(n,"POST","/v1/accounts:signInWithIdp",xi(n,e))}/**
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
 */const VA="http://localhost";class gs extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Cf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new gs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,So(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:VA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dl(t)}return e}}/**
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
 */function bA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MA(n){const e=za(Ba(n)).link,t=e?za(Ba(e)).deep_link_id:null,i=za(Ba(n)).deep_link_id;return(i?za(Ba(i)).link:null)||i||t||e||n}class Lf{constructor(e){var t,i,o,l,h,d;const p=za(Ba(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=bA((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&v&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=MA(e);try{return new Lf(t)}catch{return null}}}/**
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
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Lf.parseLink(t);return _e(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ml extends Vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _i extends ml{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch{return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com";_i.PROVIDER_ID="facebook.com";/**
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
 */class Dr extends ml{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Dr.credential(t,i)}catch{return null}}}Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";/**
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
 */class Or extends ml{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
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
 */class vi extends ml{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return vi.credential(t,i)}catch{return null}}}vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";/**
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
 */async function FA(n,e){return pl(n,"POST","/v1/accounts:signUp",xi(n,e))}/**
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
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Vr._fromIdTokenResponse(e,i,o),h=dy(i);return new ys({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=dy(i);return new ys({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function dy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class uc extends Gn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new uc(e,t,i,o)}}function mv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(n,l,e,i):l})}async function UA(n,e,t=!1){const i=await nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ys._forOperation(n,"link",i)}/**
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
 */async function jA(n,e,t=!1){const{auth:i}=n;if(jn(i.app))return Promise.reject(Fr(i));const o="reauthenticate";try{const l=await nl(n,mv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=xf(l.idToken);_e(h,i,"internal-error");const{sub:d}=h;return _e(n.uid===d,i,"user-mismatch"),ys._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Sn(i,"user-mismatch"),l}}/**
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
 */async function gv(n,e,t=!1){if(jn(n.app))return Promise.reject(Fr(n));const i="signIn",o=await mv(n,i,e),l=await ys._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function zA(n,e){return gv(Oi(n),e)}/**
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
 */async function yv(n){const e=Oi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BA(n,e,t){if(jn(n.app))return Promise.reject(Fr(n));const i=Oi(n),h=await Xd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&yv(n),p}),d=await ys._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(d.user),d}function $A(n,e,t){return jn(n.app)?Promise.reject(Fr(n)):zA(ct(n),Fo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&yv(n),i})}function qA(n,e,t,i){return ct(n).onIdTokenChanged(e,t,i)}function WA(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function Nc(n,e,t,i){return ct(n).onAuthStateChanged(e,t,i)}function HA(n){return ct(n).signOut()}const cc="__sak";/**
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
 */class _v{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GA=1e3,KA=10;class vv extends _v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);dA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,KA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},GA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vv.type="LOCAL";const QA=vv;/**
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
 */class wv extends _v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wv.type="SESSION";const Ev=wv;/**
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
 */function YA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new xc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),p=await YA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
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
 */function bf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class JA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const y=bf("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function ar(){return window}function XA(n){ar().location.href=n}/**
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
 */function Tv(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function ZA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tR(){return Tv()?self:null}/**
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
 */const Iv="firebaseLocalStorageDb",nR=1,hc="firebaseLocalStorage",Sv="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dc(n,e){return n.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function rR(){const n=indexedDB.deleteDatabase(Iv);return new gl(n).toPromise()}function Zd(){const n=indexedDB.open(Iv,nR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(hc,{keyPath:Sv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(hc)?e(i):(i.close(),await rR(),e(await Zd()))})})}async function fy(n,e,t){const i=Dc(n,!0).put({[Sv]:e,value:t});return new gl(i).toPromise()}async function iR(n,e){const t=Dc(n,!1).get(e),i=await new gl(t).toPromise();return i===void 0?null:i.value}function py(n,e){const t=Dc(n,!0).delete(e);return new gl(t).toPromise()}const sR=800,oR=3;class Av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>oR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(tR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZA(),!this.activeServiceWorker)return;this.sender=new JA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zd();return await fy(e,cc,"1"),await py(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>fy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>iR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>py(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Dc(o,!1).getAll();return new gl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Av.type="LOCAL";const aR=Av;new fl(3e4,6e4);/**
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
 */function Rv(n,e){return e?br(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mf extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lR(n){return gv(n.auth,new Mf(n),n.bypassAuthState)}function uR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),jA(t,new Mf(n),n.bypassAuthState)}async function cR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),UA(t,new Mf(n),n.bypassAuthState)}/**
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
 */class Cv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lR;case"linkViaPopup":case"linkViaRedirect":return cR;case"reauthViaPopup":case"reauthViaRedirect":return uR;default:Sn(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hR=new fl(2e3,1e4);async function my(n,e,t){if(jn(n.app))return Promise.reject(zn(n,"operation-not-supported-in-this-environment"));const i=Oi(n);G0(n,e,Vf);const o=Rv(i,t);return new fs(i,"signInViaPopup",e,o).executeNotNull()}class fs extends Cv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hR.get())};e()}}fs.currentPopupAction=null;/**
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
 */const dR="pendingRedirect",Yu=new Map;class fR extends Cv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const i=await pR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pR(n,e){const t=yR(e),i=gR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function mR(n,e){Yu.set(n._key(),e)}function gR(n){return br(n._redirectPersistence)}function yR(n){return Qu(dR,n.config.apiKey,n.name)}async function _R(n,e,t=!1){if(jn(n.app))return Promise.reject(Fr(n));const i=Oi(n),o=Rv(i,e),h=await new fR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const vR=10*60*1e3;class wR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ER(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Pv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ER(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(n);default:return!1}}/**
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
 */async function TR(n,e={}){return Di(n,"GET","/v1/projects",e)}/**
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
 */const IR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SR=/^https?/;async function AR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TR(n);for(const t of e)try{if(RR(t))return}catch{}Sn(n,"unauthorized-domain")}function RR(n){const e=Yd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!SR.test(t))return!1;if(IR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const CR=new fl(3e4,6e4);function yy(){const n=ar().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PR(n){return new Promise((e,t)=>{var i,o,l;function h(){yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yy(),t(zn(n,"network-request-failed"))},timeout:CR.get()})}if(!((o=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ar().gapi)===null||l===void 0)&&l.load)h();else{const d=EA("iframefcb");return ar()[d]=()=>{gapi.load?h():t(zn(n,"network-request-failed"))},dv(`${wA()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function kR(n){return Ju=Ju||PR(n),Ju}/**
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
 */const NR=new fl(5e3,15e3),xR="__/auth/iframe",DR="emulator/auth/iframe",OR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VR(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nf(e,DR):`https://${n.config.authDomain}/${xR}`,i={apiKey:e.apiKey,appName:n.name,v:Mo},o=LR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${dl(i).slice(1)}`}async function bR(n){const e=await kR(n),t=ar().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:VR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=zn(n,"network-request-failed"),d=ar().setTimeout(()=>{l(h)},NR.get());function p(){ar().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const MR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FR=500,UR=600,jR="_blank",zR="http://localhost";class _y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(n,e,t,i=FR,o=UR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},MR),{width:i.toString(),height:o.toString(),top:l,left:h}),y=jt().toLowerCase();t&&(d=sv(y)?jR:t),rv(y)&&(e=e||zR,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[N,L])=>`${I}${N}=${L},`,"");if(hA(y)&&d!=="_self")return $R(e||"",d),new _y(null);const T=window.open(e||"",d,v);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new _y(T)}function $R(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const qR="__/auth/handler",WR="emulator/auth/handler",HR=encodeURIComponent("fac");async function vy(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Mo,eventId:o};if(e instanceof Vf){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",xS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))h[v]=T}if(e instanceof ml){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(h.scopes=v.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${HR}=${encodeURIComponent(p)}`:"";return`${GR(n)}?${dl(d).slice(1)}${y}`}function GR({config:n}){return n.emulator?Nf(n,WR):`https://${n.authDomain}/${qR}`}/**
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
 */const Vd="webStorageSupport";class KR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ev,this._completeRedirectFn=_R,this._overrideRedirectResult=mR}async _openPopup(e,t,i,o){var l;zr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await vy(e,t,i,Yd(),o);return BR(e,h,bf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await vy(e,t,i,Yd(),o);return XA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await bR(e),i=new wR(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vd,{type:Vd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Vd];h!==void 0&&t(!!h),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cv()||iv()||Df()}}const QR=KR;var wy="@firebase/auth",Ey="1.8.2";/**
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
 */class YR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XR(n){hr(new $n("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(n)},y=new yA(i,o,l,p);return CA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),hr(new $n("auth-internal",e=>{const t=Oi(e.getProvider("auth").getImmediate());return(i=>new YR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(wy,Ey,JR(n)),In(wy,Ey,"esm2017")}/**
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
 */const ZR=5*60,eC=U_("authIdTokenMaxAge")||ZR;let Ty=null;const tC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>eC)return;const o=t==null?void 0:t.token;Ty!==o&&(Ty=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function kv(n=Rf()){const e=Ts(n,"auth");if(e.isInitialized())return e.getImmediate();const t=RA(n,{popupRedirectResolver:QR,persistence:[aR,QA,Ev]}),i=U_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=tC(l.toString());WA(t,h,()=>h(t.currentUser)),qA(t,d=>h(d))}}const o=M_("auth");return o&&PA(t,`http://${o}`),t}function nC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_A({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=zn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",nC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XR("Browser");var rC="firebase",iC="11.2.0";/**
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
 */In(rC,iC,"app");const Nv="@firebase/installations",Ff="0.6.12";/**
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
 */const xv=1e4,Dv=`w:${Ff}`,Ov="FIS_v2",sC="https://firebaseinstallations.googleapis.com/v1",oC=60*60*1e3,aC="installations",lC="Installations";/**
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
 */const uC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_s=new Es(aC,lC,uC);function Lv(n){return n instanceof Gn&&n.code.includes("request-failed")}/**
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
 */function Vv({projectId:n}){return`${sC}/projects/${n}/installations`}function bv(n){return{token:n.token,requestStatus:2,expiresIn:hC(n.expiresIn),creationTime:Date.now()}}async function Mv(n,e){const i=(await e.json()).error;return _s.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Fv({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cC(n,{refreshToken:e}){const t=Fv(n);return t.append("Authorization",dC(e)),t}async function Uv(n){const e=await n();return e.status>=500&&e.status<600?n():e}function hC(n){return Number(n.replace("s","000"))}function dC(n){return`${Ov} ${n}`}/**
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
 */async function fC({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Vv(n),o=Fv(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:Ov,appId:n.appId,sdkVersion:Dv},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await Uv(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:bv(y.authToken)}}else throw await Mv("Create Installation",p)}/**
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
 */function jv(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function pC(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const mC=/^[cdef][\w-]{21}$/,ef="";function gC(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=yC(n);return mC.test(t)?t:ef}catch{return ef}}function yC(n){return pC(n).substr(0,22)}/**
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
 */function Oc(n){return`${n.appName}!${n.appId}`}/**
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
 */const zv=new Map;function Bv(n,e){const t=Oc(n);$v(t,e),_C(t,e)}function $v(n,e){const t=zv.get(n);if(t)for(const i of t)i(e)}function _C(n,e){const t=vC();t&&t.postMessage({key:n,fid:e}),wC()}let ps=null;function vC(){return!ps&&"BroadcastChannel"in self&&(ps=new BroadcastChannel("[Firebase] FID Change"),ps.onmessage=n=>{$v(n.data.key,n.data.fid)}),ps}function wC(){zv.size===0&&ps&&(ps.close(),ps=null)}/**
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
 */const EC="firebase-installations-database",TC=1,vs="firebase-installations-store";let bd=null;function Uf(){return bd||(bd=W_(EC,TC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vs)}}})),bd}async function dc(n,e){const t=Oc(n),o=(await Uf()).transaction(vs,"readwrite"),l=o.objectStore(vs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&Bv(n,e.fid),e}async function qv(n){const e=Oc(n),i=(await Uf()).transaction(vs,"readwrite");await i.objectStore(vs).delete(e),await i.done}async function Lc(n,e){const t=Oc(n),o=(await Uf()).transaction(vs,"readwrite"),l=o.objectStore(vs),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&Bv(n,d.fid),d}/**
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
 */async function jf(n){let e;const t=await Lc(n.appConfig,i=>{const o=IC(i),l=SC(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===ef?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function IC(n){const e=n||{fid:gC(),registrationStatus:0};return Wv(e)}function SC(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(_s.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=AC(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RC(n)}:{installationEntry:e}}async function AC(n,e){try{const t=await fC(n,e);return dc(n.appConfig,t)}catch(t){throw Lv(t)&&t.customData.serverCode===409?await qv(n.appConfig):await dc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function RC(n){let e=await Iy(n.appConfig);for(;e.registrationStatus===1;)await jv(100),e=await Iy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await jf(n);return i||t}return e}function Iy(n){return Lc(n,e=>{if(!e)throw _s.create("installation-not-found");return Wv(e)})}function Wv(n){return CC(n)?{fid:n.fid,registrationStatus:0}:n}function CC(n){return n.registrationStatus===1&&n.registrationTime+xv<Date.now()}/**
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
 */async function PC({appConfig:n,heartbeatServiceProvider:e},t){const i=kC(n,t),o=cC(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:Dv,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await Uv(()=>fetch(i,d));if(p.ok){const y=await p.json();return bv(y)}else throw await Mv("Generate Auth Token",p)}function kC(n,{fid:e}){return`${Vv(n)}/${e}/authTokens:generate`}/**
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
 */async function zf(n,e=!1){let t;const i=await Lc(n.appConfig,l=>{if(!Hv(l))throw _s.create("not-registered");const h=l.authToken;if(!e&&DC(h))return l;if(h.requestStatus===1)return t=NC(n,e),l;{if(!navigator.onLine)throw _s.create("app-offline");const d=LC(l);return t=xC(n,d),d}});return t?await t:i.authToken}async function NC(n,e){let t=await Sy(n.appConfig);for(;t.authToken.requestStatus===1;)await jv(100),t=await Sy(n.appConfig);const i=t.authToken;return i.requestStatus===0?zf(n,e):i}function Sy(n){return Lc(n,e=>{if(!Hv(e))throw _s.create("not-registered");const t=e.authToken;return VC(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xC(n,e){try{const t=await PC(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await dc(n.appConfig,i),t}catch(t){if(Lv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await qv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dc(n.appConfig,i)}throw t}}function Hv(n){return n!==void 0&&n.registrationStatus===2}function DC(n){return n.requestStatus===2&&!OC(n)}function OC(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+oC}function LC(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function VC(n){return n.requestStatus===1&&n.requestTime+xv<Date.now()}/**
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
 */async function bC(n){const e=n,{installationEntry:t,registrationPromise:i}=await jf(e);return i?i.catch(console.error):zf(e).catch(console.error),t.fid}/**
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
 */async function MC(n,e=!1){const t=n;return await FC(t),(await zf(t,e)).token}async function FC(n){const{registrationPromise:e}=await jf(n);e&&await e}/**
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
 */function UC(n){if(!n||!n.options)throw Md("App Configuration");if(!n.name)throw Md("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Md(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Md(n){return _s.create("missing-app-config-values",{valueName:n})}/**
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
 */const Gv="installations",jC="installations-internal",zC=n=>{const e=n.getProvider("app").getImmediate(),t=UC(e),i=Ts(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},BC=n=>{const e=n.getProvider("app").getImmediate(),t=Ts(e,Gv).getImmediate();return{getId:()=>bC(t),getToken:o=>MC(t,o)}};function $C(){hr(new $n(Gv,zC,"PUBLIC")),hr(new $n(jC,BC,"PRIVATE"))}$C();In(Nv,Ff);In(Nv,Ff,"esm2017");/**
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
 */const fc="analytics",qC="firebase_id",WC="origin",HC=60*1e3,GC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bf="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new Pc("@firebase/analytics");/**
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
 */const KC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new Es("analytics","Analytics",KC);/**
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
 */function QC(n){if(!n.startsWith(Bf)){const e=dn.create("invalid-gtag-resource",{gtagURL:n});return nn.warn(e.message),""}return n}function Kv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function YC(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function JC(n,e){const t=YC("firebase-js-sdk-policy",{createScriptURL:QC}),i=document.createElement("script"),o=`${Bf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function XC(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ZC(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await Kv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){nn.error(d)}n("config",o,l)}async function eP(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await Kv(t);for(const p of h){const y=d.find(T=>T.measurementId===p),v=y&&e[y.appId];if(v)l.push(v);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){nn.error(l)}}function tP(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[d,p]=h;await eP(n,e,t,d,p)}else if(l==="config"){const[d,p]=h;await ZC(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=h;n("consent",d,p)}else if(l==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(l==="set"){const[d]=h;n("set",d)}else n(l,...h)}catch(d){nn.error(d)}}return o}function nP(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=tP(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function rP(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bf)&&t.src.includes(n))return t;return null}/**
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
 */const iP=30,sP=1e3;class oP{constructor(e={},t=sP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qv=new oP;function aP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function lP(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:aP(i)},l=GC.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function uP(n,e=Qv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw dn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new dP;return setTimeout(async()=>{d.abort()},HC),Yv({appId:i,apiKey:o,measurementId:l},h,d,e)}async function Yv(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=Qv){var l;const{appId:h,measurementId:d}=n;try{await cP(i,e)}catch(p){if(d)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await lP(n);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!hP(y)){if(o.deleteThrottleMetadata(h),d)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:d};throw p}const v=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Kg(t,o.intervalMillis,iP):Kg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return o.setThrottleMetadata(h,T),nn.debug(`Calling attemptFetch again in ${v} millis`),Yv(n,T,i,o)}}function cP(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hP(n){if(!(n instanceof Gn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class dP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fP(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
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
 */async function pP(){if(z_())try{await B_()}catch(n){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mP(n,e,t,i,o,l,h){var d;const p=uP(n);p.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>nn.error(N)),e.push(p);const y=pP().then(N=>{if(N)return i.getId()}),[v,T]=await Promise.all([p,y]);rP(l)||JC(l,v.measurementId),o("js",new Date);const I=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return I[WC]="firebase",I.update=!0,T!=null&&(I[qC]=T),o("config",v.measurementId,I),v.measurementId}/**
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
 */class gP{constructor(e){this.app=e}_delete(){return delete Ka[this.app.options.appId],Promise.resolve()}}let Ka={},Ay=[];const Ry={};let Fd="dataLayer",yP="gtag",Cy,Jv,Py=!1;function _P(){const n=[];if(j_()&&n.push("This is a browser extension environment."),CS()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function vP(n,e,t){_P();const i=n.options.appId;if(!i)throw dn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(Ka[i]!=null)throw dn.create("already-exists",{id:i});if(!Py){XC(Fd);const{wrappedGtag:l,gtagCore:h}=nP(Ka,Ay,Ry,Fd,yP);Jv=l,Cy=h,Py=!0}return Ka[i]=mP(n,Ay,Ry,e,Cy,Fd,t),new gP(n)}function wP(n=Rf()){n=ct(n);const e=Ts(n,fc);return e.isInitialized()?e.getImmediate():EP(n)}function EP(n,e={}){const t=Ts(n,fc);if(t.isInitialized()){const o=t.getImmediate();if(el(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function TP(n,e,t,i){n=ct(n),fP(Jv,Ka[n.app.options.appId],e,t,i).catch(o=>nn.error(o))}const ky="@firebase/analytics",Ny="0.10.11";function IP(){hr(new $n(fc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return vP(i,o,t)},"PUBLIC")),hr(new $n("analytics-internal",n,"PRIVATE")),In(ky,Ny),In(ky,Ny,"esm2017");function n(e){try{const t=e.getProvider(fc).getImmediate();return{logEvent:(i,o,l)=>TP(t,i,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}IP();var xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,Xv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function R(){}R.prototype=S.prototype,x.D=S.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(k,O,M){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return S.prototype[O].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,R){R||(R=0);var k=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)k[O]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(O=0;16>O;++O)k[O]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=x.g[0],R=x.g[1],O=x.g[2];var M=x.g[3],C=S+(M^R&(O^M))+k[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+k[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+k[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+k[3]+3250441966&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+k[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+k[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+k[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+k[7]+4249261313&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+k[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+k[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+k[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+k[11]+2304563134&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(M^R&(O^M))+k[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=M+(O^S&(R^O))+k[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(R^M&(S^R))+k[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=R+(S^O&(M^S))+k[15]+1236535329&4294967295,R=O+(C<<22&4294967295|C>>>10),C=S+(O^M&(R^O))+k[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+k[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+k[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+k[0]+3921069994&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+k[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+k[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+k[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+k[4]+3889429448&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+k[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+k[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+k[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+k[8]+1163531501&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(R^O))+k[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=M+(R^O&(S^R))+k[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^R&(M^S))+k[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=R+(M^S&(O^M))+k[12]+2368359562&4294967295,R=O+(C<<20&4294967295|C>>>12),C=S+(R^O^M)+k[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+k[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+k[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+k[14]+4259657740&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+k[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+k[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+k[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+k[10]+3200236656&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+k[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+k[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+k[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+k[6]+76029189&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(R^O^M)+k[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=M+(S^R^O)+k[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^R)+k[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=R+(O^M^S)+k[2]+3299628645&4294967295,R=O+(C<<23&4294967295|C>>>9),C=S+(O^(R|~M))+k[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+k[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+k[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+k[5]+4237533241&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+k[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+k[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+k[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+k[1]+2240044497&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+k[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+k[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+k[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+k[13]+1309151649&4294967295,R=O+(C<<21&4294967295|C>>>11),C=S+(O^(R|~M))+k[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=M+(R^(S|~O))+k[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~R))+k[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=R+(M^(O|~S))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var R=S-this.blockSize,k=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=R;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(k[O++]=x.charCodeAt(M++),O==this.blockSize){o(this,k),O=0;break}}else for(;M<S;)if(k[O++]=x[M++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var R=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=R&255,R/=256;for(this.u(x),x=Array(16),S=R=0;4>S;++S)for(var k=0;32>k;k+=8)x[R++]=this.g[S]>>>k&255;return x};function l(x,S){var R=d;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=S(x)}function h(x,S){this.h=S;for(var R=[],k=!0,O=x.length-1;0<=O;O--){var M=x[O]|0;k&&M==S||(R[O]=M,k=!1)}this.g=R}var d={};function p(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return F(y(-x));for(var S=[],R=1,k=0;x>=R;k++)S[k]=x/R|0,R*=4294967296;return new h(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return F(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),k=T,O=0;O<x.length;O+=8){var M=Math.min(8,x.length-O),C=parseInt(x.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),k=k.j(M).add(y(C))):(k=k.j(R),k=k.add(y(C)))}return k}var T=p(0),I=p(1),N=p(16777216);n=h.prototype,n.m=function(){if(W(this))return-F(this).m();for(var x=0,S=1,R=0;R<this.g.length;R++){var k=this.i(R);x+=(0<=k?k:4294967296+k)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(L(this))return"0";if(W(this))return"-"+F(this).toString(x);for(var S=y(Math.pow(x,6)),R=this,k="";;){var O=de(R,S).g;R=H(R,O.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=O,L(R))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function L(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function W(x){return x.h==-1}n.l=function(x){return x=H(this,x),W(x)?-1:L(x)?0:1};function F(x){for(var S=x.g.length,R=[],k=0;k<S;k++)R[k]=~x.g[k];return new h(R,~x.h).add(I)}n.abs=function(){return W(this)?F(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],k=0,O=0;O<=S;O++){var M=k+(this.i(O)&65535)+(x.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);k=C>>>16,M&=65535,C&=65535,R[O]=C<<16|M}return new h(R,R[R.length-1]&-2147483648?-1:0)};function H(x,S){return x.add(F(S))}n.j=function(x){if(L(this)||L(x))return T;if(W(this))return W(x)?F(this).j(F(x)):F(F(this).j(x));if(W(x))return F(this.j(F(x)));if(0>this.l(N)&&0>x.l(N))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,R=[],k=0;k<2*S;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<x.g.length;O++){var M=this.i(k)>>>16,C=this.i(k)&65535,nt=x.i(O)>>>16,xt=x.i(O)&65535;R[2*k+2*O]+=C*xt,G(R,2*k+2*O),R[2*k+2*O+1]+=M*xt,G(R,2*k+2*O+1),R[2*k+2*O+1]+=C*nt,G(R,2*k+2*O+1),R[2*k+2*O+2]+=M*nt,G(R,2*k+2*O+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new h(R,0)};function G(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function ee(x,S){this.g=x,this.h=S}function de(x,S){if(L(S))throw Error("division by zero");if(L(x))return new ee(T,T);if(W(x))return S=de(F(x),S),new ee(F(S.g),F(S.h));if(W(S))return S=de(x,F(S)),new ee(F(S.g),S.h);if(30<x.g.length){if(W(x)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,k=S;0>=k.l(x);)R=Se(R),k=Se(k);var O=Te(R,1),M=Te(k,1);for(k=Te(k,2),R=Te(R,2);!L(k);){var C=M.add(k);0>=C.l(x)&&(O=O.add(R),M=C),k=Te(k,1),R=Te(R,1)}return S=H(x,O.j(S)),new ee(O,S)}for(O=T;0<=x.l(S);){for(R=Math.max(1,Math.floor(x.m()/S.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(R),C=M.j(S);W(C)||0<C.l(x);)R-=k,M=y(R),C=M.j(S);L(M)&&(M=I),O=O.add(M),x=H(x,C)}return new ee(O,x)}n.A=function(x){return de(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)&x.i(k);return new h(R,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)|x.i(k);return new h(R,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],k=0;k<S;k++)R[k]=this.i(k)^x.i(k);return new h(R,this.h^x.h)};function Se(x){for(var S=x.g.length+1,R=[],k=0;k<S;k++)R[k]=x.i(k)<<1|x.i(k-1)>>>31;return new h(R,x.h)}function Te(x,S){var R=S>>5;S%=32;for(var k=x.g.length-R,O=[],M=0;M<k;M++)O[M]=0<S?x.i(M+R)>>>S|x.i(M+R+1)<<32-S:x.i(M+R);return new h(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Xv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=v,Ii=h}).apply(typeof xy<"u"?xy:typeof self<"u"?self:typeof window<"u"?window:{});var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zv,$a,ew,Xu,tf,tw,nw,rw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof zu=="object"&&zu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break e;_=_[U]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function L(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,q){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return m.prototype[U].apply(E,ne)}}function W(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function F(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const U=u.length||0,q=E.length||0;u.length=U+q;for(let ne=0;ne<q;ne++)u[U+ne]=E[ne]}else u.push(E)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function de(u){return de[" "](u),u}de[" "]=function(){};var Se=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function Te(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function x(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let q=0;q<R.length;q++)_=R[q],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const E=xt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var xt=new H(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,me=new nt,se=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=xt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Re(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{de(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}L(Re,fe);var De={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,E,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=U,this.key=++Fe,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,E,U){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ne=Wr(u,m,E,U);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new $e(m,this.src,q,!!E,U),m.fa=_,u.push(m)),m};function As(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,m,void 0),q;(q=0<=U)&&Array.prototype.splice.call(E,U,1),q&&(_t(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Wr(u,m,_,E){for(var U=0;U<u.length;++U){var q=u[U];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==E)return U}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),Rs={};function qo(u,m,_,E,U){if(Array.isArray(m)){for(var q=0;q<m.length;q++)qo(u,m[q],_,E,U);return null}return _=Go(_),u&&u[Me]?u.K(m,_,y(E)?!!E.capture:!1,U):Wo(u,m,_,!1,E,U)}function Wo(u,m,_,E,U,q){if(!m)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,je=Ps(u);if(je||(u[Mi]=je=new pr(u)),_=je.add(m,_,E,ne,q),_.proxy)return _;if(E=Il(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Ae||(U=ne),U===void 0&&(U=!1),u.addEventListener(m.toString(),E,U);else if(u.attachEvent)u.attachEvent(gr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Il(){function u(_){return m.call(u.src,u.listener,_)}const m=Ho;return u}function Cs(u,m,_,E,U){if(Array.isArray(m))for(var q=0;q<m.length;q++)Cs(u,m[q],_,E,U);else E=y(E)?!!E.capture:!!E,_=Go(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=Wr(q,_,E,U),-1<_&&(_t(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ps(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Wr(m,_,E,U)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])As(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(gr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Ps(m))?(As(_,u),_.h==0&&(_.src=null,m[Mi]=null)):_t(u)}}}function gr(u){return u in Rs?Rs[u]:Rs[u]="on"+u}function Ho(u,m){if(u.da)u=!0;else{m=new Re(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&mr(u),u=_.call(E,m)}return u}function Ps(u){return u=u[Mi],u instanceof pr?u:null}var ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Go(u){return typeof u=="function"?u:(u[ks]||(u[ks]=function(m){return u.handleEvent(m)}),u[ks])}function ht(){Y.call(this),this.i=new pr(this),this.M=this,this.F=null}L(ht,Y),ht.prototype[Me]=!0,ht.prototype.removeEventListener=function(u,m,_,E){Cs(this,u,m,_,E)};function dt(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var U=m;m=new fe(E,u),k(m,U)}if(U=!0,_)for(var q=_.length-1;0<=q;q--){var ne=m.g=_[q];U=yr(ne,E,!0,m)&&U}if(ne=m.g=u,U=yr(ne,E,!0,m)&&U,U=yr(ne,E,!1,m)&&U,_)for(q=0;q<_.length;q++)ne=m.g=_[q],U=yr(ne,E,!1,m)&&U}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)_t(_[E]);delete u.g[m],u.h--}}this.F=null},ht.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},ht.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function yr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,q=0;q<m.length;++q){var ne=m[q];if(ne&&!ne.da&&ne.capture==_){var je=ne.listener,ft=ne.ha||ne.src;ne.fa&&As(u.i,ne),U=je.call(ft,E)!==!1&&U}}return U&&!E.defaultPrevented}function Ko(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Hr(u){u.g=Ko(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Fi extends Y{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(u){Y.call(this),this.h=u,this.g={}}L(Ui,Y);var Qo=[];function Yo(u){Te(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}Ui.prototype.N=function(){Ui.aa.N.call(this),Yo(this)},Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jo=d.JSON.stringify,Xo=d.JSON.parse,Zo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function ji(){}ji.prototype.h=null;function Ns(u){return u.h||(u.h=u.i())}function xs(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){fe.call(this,"d")}L(Kn,fe);function Ds(){fe.call(this,"c")}L(Ds,fe);var Qn={},ea=null;function zi(){return ea=ea||new ht}Qn.La="serverreachability";function ta(u){fe.call(this,Qn.La,u)}L(ta,fe);function _r(u){const m=zi();dt(m,new ta(m))}Qn.STAT_EVENT="statevent";function na(u,m){fe.call(this,Qn.STAT_EVENT,u),this.stat=m}L(na,fe);function rt(u){const m=zi();dt(m,new na(m,u))}Qn.Ma="timingevent";function Os(u,m){fe.call(this,Qn.Ma,u),this.size=m}L(Os,fe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Bi(){this.g=!0}Bi.prototype.xa=function(){this.g=!1};function $i(u,m,_,E,U,q){u.info(function(){if(u.g)if(q)for(var ne="",je=q.split("&"),ft=0;ft<je.length;ft++){var Oe=je[ft].split("=");if(1<Oe.length){var vt=Oe[0];Oe=Oe[1];var ot=vt.split("_");ne=2<=ot.length&&ot[1]=="type"?ne+(vt+"="+Oe+"&"):ne+(vt+"=redacted&")}}else ne=null;else ne=q;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+_+`
`+ne})}function Ls(u,m,_,E,U,q,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+_+`
`+q+" "+ne})}function Rn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Yc(u,_)+(E?" "+E:"")})}function ra(u,m){u.info(function(){return"TIMEOUT: "+m})}Bi.prototype.info=function(){};function Yc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var q=U[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return Jo(_)}catch{return m}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function qi(){}L(qi,ji),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},Cn=new qi;function Pn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var ia={},bs={};function Ms(u,m,_){u.L=1,u.v=Jr(sn(m)),u.m=_,u.P=!0,sa(u,null)}function sa(u,m){u.F=Date.now(),qe(u),u.A=sn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Zr(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Al,u.g=$l(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Fi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Qo[0]=U.toString()),U=Qo);for(var q=0;q<U.length;q++){var ne=qo(_,U[q],E||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),$i(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Gt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Gt(this.g);var m=this.g.Ba();const gn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||ot!=4||m==7||(m==8||0>=gn?_r(3):_r(2)),Wi(this);var _=this.g.Z();this.X=_;t:if(Rl(this)){var E=ha(this.g);u="";var U=E.length,q=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Gr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(q&&m==U-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Ls(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(je)){var Oe=je;break t}}Oe=null}if(_=Oe)Rn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,_);else{this.o=!1,this.s=3,rt(12),pn(this),Gr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<ne.length;)if(an=Jc(this,ne),an==bs){ot==4&&(this.s=4,rt(14),_=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==ia){this.s=4,rt(15),Rn(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else Rn(this.i,this.l,an,null),oa(this,an);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ne.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)Rn(this.i,this.l,ne,"[Invalid Chunked Response]"),pn(this),Gr(this);else if(0<ne.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),fa(vt),vt.M=!0,rt(11))}}else Rn(this.i,this.l,ne,null),oa(this,ne);ot==4&&pn(this),this.o&&!this.J&&(ot==4?Ks(this.j,this):(this.o=!1,qe(this)))}else $s(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),pn(this),Gr(this)}}}catch{}finally{}};function Rl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Jc(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?bs:(_=Number(m.substring(_,E)),isNaN(_)?ia:(E+=1,E+_>m.length?bs:(m=m.slice(E,E+_),u.C=E+_,m)))}Pn.prototype.cancel=function(){this.J=!0,pn(this)};function qe(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(I(u.ba,u),m)}function Wi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(_r(),rt(17)),pn(this),this.s=2,Gr(this)):Cl(this,this.S-u)};function Gr(u){u.j.G==0||u.J||Ks(u.j,u)}function pn(u){Wi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Yo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function oa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||zt(_.h,u))){if(!u.K&&zt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Gs(_),On(_);else break e;Hs(_),rt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=An(I(_.Za,_),6e3));if(1>=kl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Gs(_),!G(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Oe=U[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const vt=Oe[3];vt!=null&&(_.la=vt,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const gn=Oe[5];gn!=null&&typeof gn=="number"&&0<gn&&(E=1.5*gn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const an=u.g;if(an){const Xi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var q=E.h;q.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(aa(q,q.h),q.h=null))}if(E.D){const Ys=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(E.ya=Ys,Be(E.I,E.D,Ys))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ne=u;if(E.qa=Bl(E,E.J?E.ia:null,E.W),ne.K){Nl(E.h,ne);var je=ne,ft=E.L;ft&&(je.I=ft),je.B&&(Wi(je),qe(je)),E.g=ne}else Ji(E);0<_.i.length&&Zn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Ir(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Ir(_,7):At(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}_r(4)}catch{}}var Pl=class{constructor(u,m){this.g=u,this.map=m}};function Hi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function kl(u){return u.h?1:u.g?u.g.size:0}function zt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function aa(u,m){u.g?u.g.add(m):u.h=m}function Nl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Hi.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return W(u.i)}function Fs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Us(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function Kr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Us(u),E=Fs(u),U=E.length,q=0;q<U;q++)m.call(void 0,E[q],_&&_[q],u)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var q=u[_].substring(0,E);U=u[_].substring(E+1)}else q=u[_];m(q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Ki(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var m=u.i,_=new Yn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Yr(this,_),this.m=u.m}else u&&(m=String(u).match(Gi))?(this.h=!1,Ki(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Qr(this,m[4]),this.l=Ne(m[5]||"",!0),Yr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}vr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Xr(m,js,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Xr(m,js,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Xr(_,_.charAt(0)=="/"?Ll:Ol,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Xr(_,la)),u.join("")};function sn(u){return new vr(u)}function Ki(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Yr(u,m,_){m instanceof Yn?(u.i=m,Jn(u.i,u.h)):(_||(m=Xr(m,Vl)),u.i=new Yn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Jr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Xr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Dl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Dl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var js=/[#\/\?@]/g,Ol=/[#\?:]/g,Ll=/[#\?]/g,Vl=/[#\?@]/g,la=/#/g;function Yn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&Xc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,m){St(this),this.i=null,u=mn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function kn(u,m){St(u),m=mn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return St(u),m=mn(u,m),u.g.has(m)}n.forEach=function(u,m){St(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(m,U,E,this)},this)},this)},n.na=function(){St(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const U=u[E];for(let q=0;q<U.length;q++)_.push(m[E])}return _},n.V=function(u){St(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(mn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return St(this),this.i=null,u=mn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Zr(u,m,_){kn(u,m),0<_.length&&(u.i=null,u.g.set(mn(u,m),W(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const q=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var U=q;ne[E]!==""&&(U+="="+encodeURIComponent(String(ne[E]))),u.push(U)}}return this.i=u.join("&")};function mn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Jn(u,m){m&&!u.j&&(St(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(kn(this,E),Zr(this,U,_))},u)),u.j=m}function Zc(u,m){const _=new Bi;if(d.Image){const E=new Image;E.onload=N(Ht,_,"TestLoadImage: loaded",!0,m,E),E.onerror=N(Ht,_,"TestLoadImage: error",!1,m,E),E.onabort=N(Ht,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=N(Ht,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function bl(u,m){const _=new Bi,E=new AbortController,U=setTimeout(()=>{E.abort(),Ht(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(q=>{clearTimeout(U),q.ok?Ht(_,"TestPingServer: ok",!0,m):Ht(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Ht(_,"TestPingServer: error",!1,m)})}function Ht(u,m,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function eh(){this.g=new Zo}function Ml(u,m,_){const E=_||"";try{Kr(u,function(U,q){let ne=U;y(U)&&(ne=Jo(U)),m.push(E+q+"="+encodeURIComponent(ne))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function wr(u){this.l=u.Ub||null,this.j=u.eb||!1}L(wr,ji),wr.prototype.g=function(){return new Qi(this.l,this.j)},wr.prototype.i=function(u){return function(){return u}}({});function Qi(u,m){ht.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Qi,ht),n=Qi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?xn(this):Dn(this),this.readyState==3&&Fl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,xn(this))},n.Qa=function(u){this.g&&(this.response=u,xn(this))},n.ga=function(){this.g&&xn(this)};function xn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Er(u){let m="";return Te(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function ei(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Er(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Qe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Qe,ht);var th=/^https?$/i,ua=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ns(this.o):Ns(Cn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){Yi(this,q);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const q of E.keys())_.set(q,E.get(q));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,m,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ne]of _)this.g.setRequestHeader(q,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){Yi(this,q)}};function Yi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,zs(u),on(u)}function zs(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},n.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Ko(u.Ea,0,u);else if(dt(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ne===0){var U=String(u.D).match(Gi)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),E=!th.test(U?U.toLowerCase():"")}_=E}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var q=2<Gt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",zs(u)}}finally{on(u)}}}}function on(u,m){if(u.g){Bs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||dt(u,"ready");try{_.onreadystatechange=E}catch{}}}function Bs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Xo(m)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function $s(u){const m={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(G(u[E]))continue;var _=O(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[U]||[];m[U]=q,q.push(_)}x(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function da(u){this.Aa=0,this.i=[],this.j=new Bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(u&&u.concurrentRequestLimit),this.Da=new eh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){rt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=Bl(this,null,this.W),Zn(this)};function At(u){if(qs(u),u.G==3){var m=u.U++,_=sn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),Tr(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=Jr(sn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}zl(u)}function On(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function qs(u){On(u),u.u&&(d.clearTimeout(u.u),u.u=null),Gs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Zn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||se(),re||(ze(),re=!0),me.add(m,u),u.B=0}}function nh(u,m){return kl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(I(u.Ga,u,m),jl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Pn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=S(q),k(q,this.S)):q=this.S),this.m!==null||this.O||(U.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ti(this,U,m),_=sn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Tr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(Er(q)))+"&"+m:this.m&&ei(_,this.m,q)),aa(this.h,U),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),U.T=!0,Ms(U,_,null)):Ms(U,_,m),this.G=2}}else this.G==3&&(u?Ws(this,u):this.i.length==0||rn(this.h)||Ws(this))};function Ws(u,m){var _;m?_=m.l:_=u.U++;const E=sn(u.I);Be(E,"SID",u.K),Be(E,"RID",_),Be(E,"AID",u.T),Tr(u,E),u.m&&u.o&&ei(E,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ti(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,_),Ms(_,E,m)}function Tr(u,m){u.H&&Te(u.H,function(_,E){Be(m,E,_)}),u.l&&Kr({},function(_,E){Be(m,E,_)})}function ti(u,m,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let q=-1;for(;;){const ne=["count="+_];q==-1?0<_?(q=U[0].g,ne.push("ofs="+q)):q=0:ne.push("ofs="+q);let je=!0;for(let ft=0;ft<_;ft++){let Oe=U[ft].g;const vt=U[ft].map;if(Oe-=q,0>Oe)q=Math.max(0,U[ft].g-100),je=!1;else try{Ml(vt,ne,"req"+Oe+"_")}catch{E&&E(vt)}}if(je){E=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function Ji(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||se(),re||(ze(),re=!0),me.add(m,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(I(u.Fa,u),jl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),On(this),Ul(this))};function fa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&ei(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Jr(sn(m)),_.m=null,_.P=!0,sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Hs(this),rt(19))};function Gs(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Ks(u,m){var _=null;if(u.g==m){Gs(u),fa(u),u.g=null;var E=2}else if(zt(u.h,m))_=m.D,Nl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;E=zi(),dt(E,new Os(E,_)),Zn(u)}else Ji(u);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&nh(u,m)||E==2&&Hs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function jl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),E=u.Xa;const U=!E;E=new vr(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ki(E,"https"),Jr(E),U?Zc(E.toString(),_):bl(E.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),zl(u),qs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function zl(u){if(u.G=0,u.ka=[],u.l){const m=xl(u.h);(m.length!=0||u.i.length!=0)&&(F(u.ka,m),F(u.ka,u.i),u.h.i.length=0,W(u.i),u.i.length=0),u.l.ra()}}function Bl(u,m,_){var E=_ instanceof vr?sn(_):new vr(_);if(E.g!="")m&&(E.g=m+"."+E.g),Qr(E,E.s);else{var U=d.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var q=new vr(null);E&&Ki(q,E),m&&(q.g=m),U&&Qr(q,U),_&&(q.l=_),E=q}return _=u.D,m=u.ya,_&&m&&Be(E,_,m),Be(E,"VER",u.la),Tr(u,E),E}function $l(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new wr({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qs(){}Qs.prototype.g=function(u,m){return new Bt(u,m)};function Bt(u,m){ht.call(this),this.g=new da(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!G(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}L(Bt,ht),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){At(this.g)},Bt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Jo(u),u=_);m.i.push(new Pl(m.Ya++,u)),m.G==3&&Zn(m)},Bt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,Bt.aa.N.call(this)};function ql(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}L(ql,Kn);function Wl(){Ds.call(this),this.status=1}L(Wl,Ds);function er(u){this.g=u}L(er,pa),er.prototype.ua=function(){dt(this.g,"a")},er.prototype.ta=function(u){dt(this.g,new ql(u))},er.prototype.sa=function(u){dt(this.g,new Wl)},er.prototype.ra=function(){dt(this.g,"b")},Qs.prototype.createWebChannel=Qs.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,rw=function(){return new Qs},nw=function(){return zi()},tw=Qn,tf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Xu=Vs,Sl.COMPLETE="complete",ew=Sl,xs.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,$a=xs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Zv=Qe}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});const Dy="@firebase/firestore";/**
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
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
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
 */let Uo="11.2.0";/**
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
 */const ws=new Pc("@firebase/firestore");function _o(){return ws.logLevel}function oe(n,...e){if(ws.logLevel<=Pe.DEBUG){const t=e.map($f);ws.debug(`Firestore (${Uo}): ${n}`,...t)}}function Br(n,...e){if(ws.logLevel<=Pe.ERROR){const t=e.map($f);ws.error(`Firestore (${Uo}): ${n}`,...t)}}function Ro(n,...e){if(ws.logLevel<=Pe.WARN){const t=e.map($f);ws.warn(`Firestore (${Uo}): ${n}`,...t)}}function $f(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function we(n="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function Ue(n,e){n||we()}function Ie(n,e){return n}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ur{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class iw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class AP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class RP{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ur,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ur)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new iw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class CP{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class PP{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new CP(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new kP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class sw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=xP(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new gt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new gt(0,0))}static max(){return new Ee(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ii.fromString(e.substring(4,e.length-2))}}class Ke extends or{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ae(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const DP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends or{construct(e,t,i){return new kt(e,t,i)}static isValidIdentifier(e){return DP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ae(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ae(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new ae(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ke.fromString(e))}static fromName(e){return new pe(Ke.fromString(e).popFirst(5))}static empty(){return new pe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ke(e.slice()))}}function OP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new gt(t+1,0):new gt(t,i));return new Ri(o,pe.empty(),e)}function LP(n){return new Ri(n.readTime,n.key,-1)}class Ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ri(Ee.min(),pe.empty(),-1)}static max(){return new Ri(Ee.max(),pe.empty(),-1)}}function VP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
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
 */const bP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function jo(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==bP)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,i)=>{t(e)})}static reject(e){return new Q((t,i)=>{i(e)})}static waitFor(e){return new Q((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next(o=>o?Q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Q((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{h[y]=v,++d,d===l&&i(h)},v=>o(v))}})}static doWhile(e,t){return new Q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function FP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vc.oe=-1;function bc(n){return n==null}function pc(n){return n===0&&1/n==-1/0}function UP(n){return typeof n=="number"&&Number.isInteger(n)&&!pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function jP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Oy(e)),e=zP(n.get(t),e);return Oy(e)}function zP(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Oy(n){return n+""}/**
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
 */function Ly(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Li(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ow(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bu(this.root,e,this.comparator,!0)}}class Bu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vy(this.data.getIterator())}getIteratorFrom(e){return new Vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class hn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new yt(kt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class aw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new aw("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const BP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=BP.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pi(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
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
 */function qf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mc(n){const e=n.mapValue.fields.__previous_value__;return qf(e)?Mc(e):e}function il(n){const e=Ci(n.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
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
 */class $P{constructor(e,t,i,o,l,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class sl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qf(n)?4:WP(n)?9007199254740991:qP(n)?10:11:we()}function dr(n,e){if(n===e)return!0;const t=ki(n);if(t!==ki(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return il(n).isEqual(il(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ci(o.timestampValue),d=Ci(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Pi(o.bytesValue).isEqual(Pi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),d=st(l.doubleValue);return h===d?pc(h)===pc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Ly(h)!==Ly(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!dr(h[p],d[p])))return!1;return!0}(n,e);default:return we()}}function ol(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function Po(n,e){if(n===e)return 0;const t=ki(n),i=ki(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return by(n.timestampValue,e.timestampValue);case 4:return by(il(n),il(e));case 5:return xe(n.stringValue,e.stringValue);case 6:return function(l,h){const d=Pi(l),p=Pi(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=xe(d[y],p[y]);if(v!==0)return v}return xe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=xe(st(l.latitude),st(h.latitude));return d!==0?d:xe(st(l.longitude),st(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return My(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,y,v;const T=l.fields||{},I=h.fields||{},N=(d=T.value)===null||d===void 0?void 0:d.arrayValue,L=(p=I.value)===null||p===void 0?void 0:p.arrayValue,W=xe(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((v=L==null?void 0:L.values)===null||v===void 0?void 0:v.length)||0);return W!==0?W:My(N,L)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===$u.mapValue&&h===$u.mapValue)return 0;if(l===$u.mapValue)return 1;if(h===$u.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=h.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=xe(p[T],v[T]);if(I!==0)return I;const N=Po(d[p[T]],y[v[T]]);if(N!==0)return N}return xe(p.length,v.length)}(n.mapValue,e.mapValue);default:throw we()}}function by(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Ci(n),i=Ci(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function My(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Po(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function ko(n){return nf(n)}function nf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ci(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Pi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=nf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${nf(t.fields[h])}`;return o+"}"}(n.mapValue):we()}function Zu(n){switch(ki(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(n);return e?16+Zu(e):16;case 5:return 2*n.stringValue.length;case 6:return Pi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Zu(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Li(i.fields,(l,h)=>{o+=l.length+Zu(h)}),o}(n.mapValue);default:throw we()}}function Fy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function rf(n){return!!n&&"integerValue"in n}function Wf(n){return!!n&&"arrayValue"in n}function Uy(n){return!!n&&"nullValue"in n}function jy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ec(n){return!!n&&"mapValue"in n}function qP(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Li(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Qa(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function WP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qa(t)}setAll(e){let t=kt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=Qa(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];ec(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Li(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new tn(Qa(this.value))}}function lw(n){const e=[];return Li(n.fields,(t,i)=>{const o=new kt([t]);if(ec(i)){const l=lw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new hn(e)}/**
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
 */class Ut{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Ut(e,0,Ee.min(),Ee.min(),Ee.min(),tn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ee.min(),Ee.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ee.min(),Ee.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mc{constructor(e,t){this.position=e,this.inclusive=t}}function zy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Po(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function By(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class al{constructor(e,t="asc"){this.field=e,this.dir=t}}function HP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class uw{}class ut extends uw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new KP(e,t,i):t==="array-contains"?new JP(e,i):t==="in"?new XP(e,i):t==="not-in"?new ZP(e,i):t==="array-contains-any"?new ek(e,i):new ut(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new QP(e,i):new YP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Po(t,this.value)):t!==null&&ki(this.value)===ki(t)&&this.matchesComparison(Po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends uw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qn(e,t)}matches(e){return cw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cw(n){return n.op==="and"}function hw(n){return GP(n)&&cw(n)}function GP(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function sf(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+ko(n.value);if(hw(n))return n.filters.map(e=>sf(e)).join(",");{const e=n.filters.map(t=>sf(t)).join(",");return`${n.op}(${e})`}}function dw(n,e){return n instanceof ut?function(i,o){return o instanceof ut&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)}(n,e):n instanceof qn?function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&dw(h,o.filters[d]),!0):!1}(n,e):void we()}function fw(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${ko(t.value)}`}(n):n instanceof qn?function(t){return t.op.toString()+" {"+t.getFilters().map(fw).join(" ,")+"}"}(n):"Filter"}class KP extends ut{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class QP extends ut{constructor(e,t){super(e,"in",t),this.keys=pw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class YP extends ut{constructor(e,t){super(e,"not-in",t),this.keys=pw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class JP extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wf(t)&&ol(t.arrayValue,this.value)}}class XP extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ol(this.value.arrayValue,t)}}class ZP extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ol(this.value.arrayValue,t)}}class ek extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ol(this.value.arrayValue,i))}}/**
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
 */class tk{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function $y(n,e=null,t=[],i=[],o=null,l=null,h=null){return new tk(n,e,t,i,o,l,h)}function Hf(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>sf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ko(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ko(i)).join(",")),e.ue=t}return e.ue}function Gf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!HP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!By(n.startAt,e.startAt)&&By(n.endAt,e.endAt)}function of(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Bo{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nk(n,e,t,i,o,l,h,d){return new Bo(n,e,t,i,o,l,h,d)}function Kf(n){return new Bo(n)}function qy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mw(n){return n.collectionGroup!==null}function Ya(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new yt(kt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new al(l,i))}),t.has(kt.keyField().canonicalString())||e.ce.push(new al(kt.keyField(),i))}return e.ce}function lr(n){const e=Ie(n);return e.le||(e.le=rk(e,Ya(n))),e.le}function rk(n,e){if(n.limitType==="F")return $y(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new al(o.field,l)});const t=n.endAt?new mc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new mc(n.startAt.position,n.startAt.inclusive):null;return $y(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function af(n,e){const t=n.filters.concat([e]);return new Bo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function gc(n,e,t){return new Bo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fc(n,e){return Gf(lr(n),lr(e))&&n.limitType===e.limitType}function gw(n){return`${Hf(lr(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>fw(o)).join(", ")}]`),bc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ko(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ko(o)).join(",")),`Target(${i})`}(lr(n))}; limitType=${n.limitType})`}function Uc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ya(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const y=zy(h,d,p);return h.inclusive?y<=0:y<0}(i.startAt,Ya(i),o)||i.endAt&&!function(h,d,p){const y=zy(h,d,p);return h.inclusive?y>=0:y>0}(i.endAt,Ya(i),o))}(n,e)}function ik(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yw(n){return(e,t)=>{let i=!1;for(const o of Ya(n)){const l=sk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function sk(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Po(p,y):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
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
 */class Is{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return ow(this.inner)}size(){return this.innerSize}}/**
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
 */const ok=new et(pe.comparator);function $r(){return ok}const _w=new et(pe.comparator);function qa(...n){let e=_w;for(const t of n)e=e.insert(t.key,t);return e}function vw(n){let e=_w;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ms(){return Ja()}function ww(){return Ja()}function Ja(){return new Is(n=>n.toString(),(n,e)=>n.isEqual(e))}const ak=new et(pe.comparator),lk=new yt(pe.comparator);function ke(...n){let e=lk;for(const t of n)e=e.add(t);return e}const uk=new yt(xe);function ck(){return uk}/**
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
 */function Qf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function Ew(n){return{integerValue:""+n}}function hk(n,e){return UP(e)?Ew(e):Qf(n,e)}/**
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
 */class jc{constructor(){this._=void 0}}function dk(n,e,t){return n instanceof yc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&qf(l)&&(l=Mc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof ll?Iw(n,e):n instanceof ul?Sw(n,e):function(o,l){const h=Tw(o,l),d=Wy(h)+Wy(o.Pe);return rf(h)&&rf(o.Pe)?Ew(d):Qf(o.serializer,d)}(n,e)}function fk(n,e,t){return n instanceof ll?Iw(n,e):n instanceof ul?Sw(n,e):t}function Tw(n,e){return n instanceof _c?function(i){return rf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class yc extends jc{}class ll extends jc{constructor(e){super(),this.elements=e}}function Iw(n,e){const t=Aw(e);for(const i of n.elements)t.some(o=>dr(o,i))||t.push(i);return{arrayValue:{values:t}}}class ul extends jc{constructor(e){super(),this.elements=e}}function Sw(n,e){let t=Aw(e);for(const i of n.elements)t=t.filter(o=>!dr(o,i));return{arrayValue:{values:t}}}class _c extends jc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Wy(n){return st(n.integerValue||n.doubleValue)}function Aw(n){return Wf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function pk(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ll&&o instanceof ll||i instanceof ul&&o instanceof ul?Co(i.elements,o.elements,dr):i instanceof _c&&o instanceof _c?dr(i.Pe,o.Pe):i instanceof yc&&o instanceof yc}(n.transform,e.transform)}class mk{constructor(e,t){this.version=e,this.transformResults=t}}class ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zc{}function Rw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pw(n.key,ur.none()):new yl(n.key,n.data,ur.none());{const t=n.data,i=tn.empty();let o=new yt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Vi(n.key,i,new hn(o.toArray()),ur.none())}}function gk(n,e,t){n instanceof yl?function(o,l,h){const d=o.value.clone(),p=Gy(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Vi?function(o,l,h){if(!tc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Gy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Cw(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Xa(n,e,t,i){return n instanceof yl?function(l,h,d,p){if(!tc(l.precondition,h))return d;const y=l.value.clone(),v=Ky(l.fieldTransforms,p,h);return y.setAll(v),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Vi?function(l,h,d,p){if(!tc(l.precondition,h))return d;const y=Ky(l.fieldTransforms,p,h),v=h.data;return v.setAll(Cw(l)),v.setAll(y),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,d){return tc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function yk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Tw(i.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(i.field,l))}return t||null}function Hy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Co(i,o,(l,h)=>pk(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yl extends zc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Vi extends zc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Gy(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,fk(h,d,t[o]))}return i}function Ky(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,dk(l,h,e))}return i}class Pw extends zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _k extends zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&gk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Xa(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Xa(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=ww();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=Rw(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,i)=>Hy(t,i))&&Co(this.baseMutations,e.baseMutations,(t,i)=>Hy(t,i))}}class Yf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return ak}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Yf(e,t,i,o)}}/**
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
 */class wk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ek{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Le;function Tk(n){switch(n){default:return we();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function kw(n){if(n===void 0)return Br("GRPC error has no .code"),K.UNKNOWN;switch(n){case lt.OK:return K.OK;case lt.CANCELLED:return K.CANCELLED;case lt.UNKNOWN:return K.UNKNOWN;case lt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case lt.INTERNAL:return K.INTERNAL;case lt.UNAVAILABLE:return K.UNAVAILABLE;case lt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case lt.NOT_FOUND:return K.NOT_FOUND;case lt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case lt.ABORTED:return K.ABORTED;case lt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case lt.DATA_LOSS:return K.DATA_LOSS;default:return we()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ik(){return new TextEncoder}/**
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
 */const Sk=new Ii([4294967295,4294967295],0);function Qy(n){const e=Ik().encode(n),t=new Xv;return t.update(e),new Uint8Array(t.digest())}function Yy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ii([t,i],0),new Ii([o,l],0)]}class Jf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ii.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ii.fromNumber(i)));return o.compare(Sk)===1&&(o=new Ii([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Qy(e),[i,o]=Yy(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);if(!this.Ee(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Jf(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Te===0)return;const t=Qy(e),[i,o]=Yy(t);for(let l=0;l<this.hashCount;l++){const h=this.de(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Bc(Ee.min(),o,new et(xe),$r(),ke())}}class _l{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new _l(i,t,ke(),ke(),ke())}}/**
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
 */class nc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Nw{constructor(e,t){this.targetId=e,this.me=t}}class xw{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Jy{constructor(){this.fe=0,this.ge=Xy(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),i=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new _l(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Xy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ak{constructor(e){this.Be=e,this.Le=new Map,this.ke=$r(),this.qe=qu(),this.Qe=qu(),this.Ke=new et(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(of(l))if(i===0){const h=new pe(l.path);this.We(t,h,Ut.newNoDocument(h,Ee.min()))}else Ue(i===1);else{const h=this.Ze(t);if(h!==i){const d=this.Xe(e),p=d?this.et(d,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=Pi(i).toUint8Array()}catch(p){if(p instanceof aw)return Ro("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Jf(h,o,l)}catch(p){return Ro(p instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Be.nt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,h)=>{const d=this.Ye(h);if(d){if(l.current&&of(d.target)){const p=new pe(d.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=ke();this.Qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Bc(e,t,this.Ke,this.ke,i);return this.ke=$r(),this.qe=qu(),this.Qe=qu(),this.Ke=new et(xe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Jy,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new yt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new yt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Jy),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function qu(){return new et(pe.comparator)}function Xy(){return new et(pe.comparator)}const Rk={asc:"ASCENDING",desc:"DESCENDING"},Ck={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pk={and:"AND",or:"OR"};class kk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lf(n,e){return n.useProto3Json||bc(e)?e:{value:e}}function vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Nk(n,e){return vc(n,e.toTimestamp())}function cr(n){return Ue(!!n),Ee.fromTimestamp(function(t){const i=Ci(t);return new gt(i.seconds,i.nanos)}(n))}function Xf(n,e){return uf(n,e).canonicalString()}function uf(n,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ow(n){const e=Ke.fromString(n);return Ue(Fw(e)),e}function cf(n,e){return Xf(n.databaseId,e.path)}function Ud(n,e){const t=Ow(e);if(t.get(1)!==n.databaseId.projectId)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ae(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(Vw(t))}function Lw(n,e){return Xf(n.databaseId,e)}function xk(n){const e=Ow(n);return e.length===4?Ke.emptyPath():Vw(e)}function hf(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vw(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Zy(n,e,t){return{name:cf(n,e),fields:t.value.mapValue.fields}}function Dk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(Ue(v===void 0||typeof v=="string"),Nt.fromBase64String(v||"")):(Ue(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Nt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const v=y.code===void 0?K.UNKNOWN:kw(y.code);return new ae(v,y.message||"")}(h);t=new xw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ud(n,i.document.name),l=cr(i.document.updateTime),h=i.document.createTime?cr(i.document.createTime):Ee.min(),d=new tn({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,h,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new nc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ud(n,i.document),l=i.readTime?cr(i.readTime):Ee.min(),h=Ut.newNoDocument(o,l),d=i.removedTargetIds||[];t=new nc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ud(n,i.document),l=i.removedTargetIds||[];t=new nc([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new Ek(o,l),d=i.targetId;t=new Nw(d,h)}}return t}function Ok(n,e){let t;if(e instanceof yl)t={update:Zy(n,e.key,e.value)};else if(e instanceof Pw)t={delete:cf(n,e.key)};else if(e instanceof Vi)t={update:Zy(n,e.key,e.data),updateMask:Bk(e.fieldMask)};else{if(!(e instanceof _k))return we();t={verify:cf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof yc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ll)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ul)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _c)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:Nk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(n,e.precondition)),t}function Lk(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?cr(o.updateTime):cr(l);return h.isEqual(Ee.min())&&(h=cr(l)),new mk(h,o.transformResults||[])}(t,e))):[]}function Vk(n,e){return{documents:[Lw(n,e.path)]}}function bk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Lw(n,o);const l=function(y){if(y.length!==0)return Mw(qn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:wo(I.field),direction:Uk(I.dir)}}(v))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=lf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Mk(n){let e=xk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const I=bw(T);return I instanceof qn&&hw(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(L){return new al(Eo(L.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,bc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,N=T.values||[];return new mc(N,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,N=T.values||[];return new mc(N,I)}(t.endAt)),nk(e,o,h,l,d,"F",p,y)}function Fk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Eo(t.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return ut.create(Eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qn.create(t.compositeFilter.filters.map(i=>bw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function Uk(n){return Rk[n]}function jk(n){return Ck[n]}function zk(n){return Pk[n]}function wo(n){return{fieldPath:n.canonicalString()}}function Eo(n){return kt.fromServerFormat(n.fieldPath)}function Mw(n){return n instanceof ut?function(t){if(t.op==="=="){if(jy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NAN"}};if(Uy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NAN"}};if(Uy(t.value))return{unaryFilter:{field:wo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wo(t.field),op:jk(t.op),value:t.value}}}(n):n instanceof qn?function(t){const i=t.getFilters().map(o=>Mw(o));return i.length===1?i[0]:{compositeFilter:{op:zk(t.op),filters:i}}}(n):we()}function Bk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class wi{constructor(e,t,i,o,l=Ee.min(),h=Ee.min(),d=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $k{constructor(e){this.ht=e}}function qk(n){const e=Mk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gc(e,e.limit,"L"):e}/**
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
 */class Wk{constructor(){this.ln=new Hk}addToCollectionParentIndex(e,t){return this.ln.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Ri.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class Hk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new yt(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new yt(Ke.comparator)).toArray()}}/**
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
 */const e_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class No{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new No(0)}static Qn(){return new No(-1)}}/**
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
 */function t_([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class Gk{constructor(e){this.Gn=e,this.buffer=new yt(t_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();t_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Kk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){oe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?oe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Yn(3e5)})}}class Qk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Vc.oe);const i=new Gk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(e_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),_o()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function Yk(n,e){return new Qk(n,e)}/**
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
 */class Jk{constructor(){this.changes=new Is(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Xk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Zk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Xa(i.mutation,o,hn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=ms();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=qa();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ms();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=$r();const h=Ja(),d=function(){return Ja()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Vi)?l=l.insert(y.key,y):v!==void 0?(h.set(y.key,v.mutation.getFieldMask()),Xa(v.mutation,y,v.mutation.getFieldMask(),gt.now())):h.set(y.key,hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>h.set(y,v)),t.forEach((y,v)=>{var T;return d.set(y,new Xk(v,(T=h.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Ja();let o=new et((h,d)=>h-d),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||hn.empty();v=d.applyToLocalView(y,v),i.set(p,v);const T=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,T=ww();v.forEach(I=>{if(!l.has(I)){const N=Rw(t.get(I),i.get(I));N!==null&&T.set(I,N),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return Q.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(ms());let d=-1,p=l;return h.next(y=>Q.forEach(y,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(v=>({batchId:d,changes:vw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=qa();return this.indexManager.getCollectionParents(e,l).next(d=>Q.forEach(d,p=>{const y=function(T,I){return new Bo(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const v=y.getKey();h.get(v)===null&&(h=h.insert(v,Ut.newInvalidDocument(v)))});let d=qa();return h.forEach((p,y)=>{const v=l.get(p);v!==void 0&&Xa(v.mutation,y,hn.empty(),gt.now()),Uc(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class e1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return Q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:cr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:qk(o.bundledQuery),readTime:cr(o.readTime)}}(t)),Q.resolve()}}/**
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
 */class t1{constructor(){this.overlays=new et(pe.comparator),this.dr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ms();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=ms(),l=t.length+1,h=new pe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,v)=>y-v);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=ms(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=ms(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return Q.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new wk(t,i));let l=this.dr.get(t);l===void 0&&(l=ke(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class n1{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class Zf{constructor(){this.Er=new yt(It.Ar),this.Rr=new yt(It.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new It(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new It(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new pe(new Ke([])),i=new It(t,e),o=new It(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Ke([])),i=new It(t,e),o=new It(t,e+1);let l=ke();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new It(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class It{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
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
 */class r1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new yt(It.Ar)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vk(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.vr=this.vr.add(new It(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(h)}lookupMutationBatch(e,t){return Q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const d=this.Cr(h.br);l.push(d)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new yt(xe);return t.forEach(o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],d=>{i=i.add(d.br)})}),Q.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new It(new pe(l),0);let d=new yt(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},h),Q.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return Q.forEach(t.mutations,o=>{const l=new It(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new It(t,0),o=this.vr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class i1{constructor(e){this.Nr=e,this.docs=function(){return new et(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=$r();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=$r();const h=t.path,d=new pe(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||VP(LP(v),i)<=0||(o.has(v.key)||Uc(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Br(e,t){return Q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new s1(this)}getSize(e){return Q.resolve(this.size)}}class s1 extends Jk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),Q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class o1{constructor(e){this.persistence=e,this.Lr=new Is(t=>Hf(t),Gf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new Zf,this.targetCount=0,this.Qr=No.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),Q.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new No(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Un(t),Q.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.qr.containsKey(t))}}/**
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
 */class Uw{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vc(0),this.Ur=!1,this.Ur=!0,this.Wr=new n1,this.referenceDelegate=e(this),this.Gr=new o1(this),this.indexManager=new Wk,this.remoteDocumentCache=function(o){return new i1(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new $k(t),this.jr=new e1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new t1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new r1(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new a1(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return Q.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class a1 extends MP{constructor(e){super(),this.currentSequenceNumber=e}}class ep{constructor(e){this.persistence=e,this.Zr=new Zf,this.Xr=null}static ei(e){return new ep(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ti,i=>{const o=pe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ee.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return Q.or([()=>Q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class wc{constructor(e,t){this.persistence=e,this.ri=new Is(i=>jP(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=Yk(this,t)}static ei(e,t){return new wc(e,t)}Hr(){}Jr(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return Q.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?Q.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(d=>{d||(i++,l.removeEntry(h,Ee.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),Q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zu(e.data.value)),t}ir(e,t,i){return Q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new tp(e,t.fromCache,i,o)}}/**
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
 */class l1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class u1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return RS()?8:FP(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new l1;return this.ts(e,t,h).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,h,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(_o()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Q.resolve()):(_o()<=Pe.DEBUG&&oe("QueryEngine","Query:",vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(_o()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):Q.resolve())}Xi(e,t){if(qy(t))return Q.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=gc(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,h,p.readTime)?this.Xi(e,gc(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return qy(t)||o.isEqual(Ee.min())?Q.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?Q.resolve(null):(_o()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(t)),this.os(e,h,t,OP(o,-1)).next(d=>d))})}rs(e,t){let i=new yt(yw(e));return t.forEach((o,l)=>{Uc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return _o()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",vo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ri.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class c1{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(xe),this.cs=new Is(l=>Hf(l),Gf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function h1(n,e,t,i){return new c1(n,e,t,i)}async function jw(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=ke();for(const y of o){h.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:d}))})})}function d1(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const T=y.batch,I=T.keys();let N=Q.resolve();return I.forEach(L=>{N=N.next(()=>v.getEntry(p,L)).next(W=>{const F=y.docVersions.get(L);Ue(F!==null),W.version.compareTo(F)<0&&(T.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),v.addEntry(W)))})}),N.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ke();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function zw(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function f1(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,v.addedDocuments,T)));let N=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(Nt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):v.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(v.resumeToken,i)),o=o.insert(T,N),function(W,F,H){return W.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,N,v)&&d.push(t.Gr.updateTargetData(l,N))});let p=$r(),y=ke();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(p1(l,h,e.documentUpdates).next(v=>{p=v.Is,y=v.ds})),!i.isEqual(Ee.min())){const v=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return Q.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function p1(n,e,t){let i=ke(),o=ke();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=$r();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):oe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:h,ds:o}})}function m1(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function g1(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,Q.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new wi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function df(n,e,t){const i=Ie(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!zo(h))throw h;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function n_(n,e,t){const i=Ie(n);let o=Ee.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,v){const T=Ie(p),I=T.cs.get(v);return I!==void 0?Q.resolve(T.us.get(I)):T.Gr.getTargetData(y,v)}(i,h,lr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?l:ke())).next(d=>(y1(i,ik(e),d),{documents:d,Es:l})))}function y1(n,e,t){let i=n.ls.get(e)||Ee.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class r_{constructor(){this.activeTargetIds=ck()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _1{constructor(){this._o=new r_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new r_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v1{uo(e){}shutdown(){}}/**
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
 */class i_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wu=null;function jd(){return Wu===null?Wu=function(){return 268435456+Math.round(2147483648*Math.random())}():Wu++,"0x"+Wu.toString(16)}/**
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
 */const w1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class E1{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Mt="WebChannelConnection";class T1 extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const d=jd(),p=this.No(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,h),this.Lo(t,p,y,o).then(v=>(oe("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Ro("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}ko(t,i,o,l,h,d){return this.Oo(t,i,o,l,h)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=w1[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=jd();return new Promise((h,d)=>{const p=new Zv;p.setWithCredentials(!0),p.listenOnce(ew.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Xu.NO_ERROR:const v=p.getResponseJson();oe(Mt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),h(v);break;case Xu.TIMEOUT:oe(Mt,`RPC '${e}' ${l} timed out`),d(new ae(K.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const T=p.getStatus();if(oe(Mt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const L=function(F){const H=F.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(H)>=0?H:K.UNKNOWN}(N.status);d(new ae(L,N.message))}else d(new ae(K.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ae(K.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{oe(Mt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(Mt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=jd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=rw(),d=nw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");oe(Mt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const T=h.createWebChannel(v,p);let I=!1,N=!1;const L=new E1({Eo:F=>{N?oe(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(I||(oe(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),oe(Mt,`RPC '${e}' stream ${o} sending:`,F),T.send(F))},Ao:()=>T.close()}),W=(F,H,G)=>{F.listen(H,ee=>{try{G(ee)}catch(de){setTimeout(()=>{throw de},0)}})};return W(T,$a.EventType.OPEN,()=>{N||(oe(Mt,`RPC '${e}' stream ${o} transport opened.`),L.So())}),W(T,$a.EventType.CLOSE,()=>{N||(N=!0,oe(Mt,`RPC '${e}' stream ${o} transport closed`),L.Do())}),W(T,$a.EventType.ERROR,F=>{N||(N=!0,Ro(Mt,`RPC '${e}' stream ${o} transport errored:`,F),L.Do(new ae(K.UNAVAILABLE,"The operation could not be completed")))}),W(T,$a.EventType.MESSAGE,F=>{var H;if(!N){const G=F.data[0];Ue(!!G);const ee=G,de=(ee==null?void 0:ee.error)||((H=ee[0])===null||H===void 0?void 0:H.error);if(de){oe(Mt,`RPC '${e}' stream ${o} received error:`,de);const Se=de.status;let Te=function(R){const k=lt[R];if(k!==void 0)return kw(k)}(Se),x=de.message;Te===void 0&&(Te=K.INTERNAL,x="Unknown error status: "+Se+" with message "+de.message),N=!0,L.Do(new ae(Te,x)),T.close()}else oe(Mt,`RPC '${e}' stream ${o} received:`,G),L.vo(G)}}),W(d,tw.STAT_EVENT,F=>{F.stat===tf.PROXY?oe(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===tf.NOPROXY&&oe(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.bo()},0),L}}function zd(){return typeof document<"u"?document:null}/**
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
 */function $c(n){return new kk(n,!0)}/**
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
 */class Bw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class $w{constructor(e,t,i,o,l,h,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Bw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ae(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I1 extends $w{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Dk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ee.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?cr(h.readTime):Ee.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=hf(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=of(p)?{documents:Vk(l,p)}:{query:bk(l,p).ct},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=Dw(l,h.resumeToken);const y=lf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ee.min())>0){d.readTime=vc(l,h.snapshotVersion.toTimestamp());const y=lf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=Fk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=hf(this.serializer),t.removeTarget=e,this.c_(t)}}class S1 extends $w{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Lk(e.writeResults,e.commitTime),i=cr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=hf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Ok(this.serializer,i))};this.c_(t)}}/**
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
 */class A1 extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,uf(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ae(K.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,uf(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(K.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class R1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Br(t),this.C_=!1):oe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class C1{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{Ss(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ie(p);y.k_.add(4),await vl(y),y.K_.set("Unknown"),y.k_.delete(4),await qc(y)}(this))})}),this.K_=new R1(i,o)}}async function qc(n){if(Ss(n))for(const e of n.q_)await e(!0)}async function vl(n){for(const e of n.q_)await e(!1)}function qw(n,e){const t=Ie(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),sp(t)?ip(t):$o(t).s_()&&rp(t,e))}function np(n,e){const t=Ie(n),i=$o(t);t.L_.delete(e),i.s_()&&Ww(t,e),t.L_.size===0&&(i.s_()?i.a_():Ss(t)&&t.K_.set("Unknown"))}function rp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(n).V_(e)}function Ww(n,e){n.U_.xe(e),$o(n).m_(e)}function ip(n){n.U_=new Ak({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),$o(n).start(),n.K_.F_()}function sp(n){return Ss(n)&&!$o(n).i_()&&n.L_.size>0}function Ss(n){return Ie(n).k_.size===0}function Hw(n){n.U_=void 0}async function P1(n){n.K_.set("Online")}async function k1(n){n.L_.forEach((e,t)=>{rp(n,e)})}async function N1(n,e){Hw(n),sp(n)?(n.K_.O_(e),ip(n)):n.K_.set("Unknown")}async function x1(n,e,t){if(n.K_.set("Online"),e instanceof xw&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.L_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.L_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(n,i)}else if(e instanceof nc?n.U_.$e(e):e instanceof Nw?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ee.min()))try{const i=await zw(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.U_.it(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.L_.get(y);v&&l.L_.set(y,v.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const v=l.L_.get(p);if(!v)return;l.L_.set(p,v.withResumeToken(Nt.EMPTY_BYTE_STRING,v.snapshotVersion)),Ww(l,p);const T=new wi(v.target,p,y,v.sequenceNumber);rp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await Ec(n,i)}}async function Ec(n,e,t){if(!zo(e))throw e;n.k_.add(1),await vl(n),n.K_.set("Offline"),t||(t=()=>zw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await qc(n)})}function Gw(n,e){return e().catch(t=>Ec(n,t,e))}async function Wc(n){const e=Ie(n),t=Ni(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;D1(e);)try{const o=await m1(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,O1(e,o)}catch(o){await Ec(e,o)}Kw(e)&&Qw(e)}function D1(n){return Ss(n)&&n.B_.length<10}function O1(n,e){n.B_.push(e);const t=Ni(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Kw(n){return Ss(n)&&!Ni(n).i_()&&n.B_.length>0}function Qw(n){Ni(n).start()}async function L1(n){Ni(n).w_()}async function V1(n){const e=Ni(n);for(const t of n.B_)e.g_(t.mutations)}async function b1(n,e,t){const i=n.B_.shift(),o=Yf.from(i,e,t);await Gw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Wc(n)}async function M1(n,e){e&&Ni(n).f_&&await async function(i,o){if(function(h){return Tk(h)&&h!==K.ABORTED}(o.code)){const l=i.B_.shift();Ni(i).__(),await Gw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Wc(i)}}(n,e),Kw(n)&&Qw(n)}async function s_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=Ss(t);t.k_.add(3),await vl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await qc(t)}async function F1(n,e){const t=Ie(n);e?(t.k_.delete(2),await qc(t)):e||(t.k_.add(2),await vl(t),t.K_.set("Unknown"))}function $o(n){return n.W_||(n.W_=function(t,i,o){const l=Ie(t);return l.b_(),new I1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:P1.bind(null,n),mo:k1.bind(null,n),po:N1.bind(null,n),R_:x1.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),sp(n)?ip(n):n.K_.set("Unknown")):(await n.W_.stop(),Hw(n))})),n.W_}function Ni(n){return n.G_||(n.G_=function(t,i,o){const l=Ie(t);return l.b_(),new S1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:L1.bind(null,n),po:M1.bind(null,n),p_:V1.bind(null,n),y_:b1.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Wc(n)):(await n.G_.stop(),n.B_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
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
 */class op{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new op(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ap(n,e){if(Br("AsyncQueue",`${e}: ${n}`),zo(n))return new ae(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=qa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ao;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class o_{constructor(){this.z_=new et(pe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class xo{constructor(e,t,i,o,l,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new xo(e,t,Ao.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class U1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class j1{constructor(){this.queries=a_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=a_(),l.forEach((h,d)=>{for(const p of d.J_)p.onError(i)})})(this,new ae(K.ABORTED,"Firestore shutting down"))}}function a_(){return new Is(n=>gw(n),Fc)}async function Yw(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new U1,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=ap(h,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&lp(t)}async function Jw(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function z1(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.J_)d.ta(o)&&(i=!0);h.H_=o}}i&&lp(t)}function B1(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function lp(n){n.X_.forEach(e=>{e.next()})}var ff,l_;(l_=ff||(ff={})).na="default",l_.Cache="cache";class Xw{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ff.Cache}}/**
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
 */class Zw{constructor(e){this.key=e}}class eE{constructor(e){this.key=e}}class $1{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=yw(e),this.ma=new Ao(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new o_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),N=Uc(this.query,T)?T:null,L=!!I&&this.mutatedKeys.has(I.key),W=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let F=!1;I&&N?I.data.isEqual(N.data)?L!==W&&(i.track({type:3,doc:N}),F=!0):this.ya(I,N)||(i.track({type:2,doc:N}),F=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(d=!0)):!I&&N?(i.track({type:0,doc:N}),F=!0):I&&!N&&(i.track({type:1,doc:I}),F=!0,(p||y)&&(d=!0)),F&&(N?(h=h.add(N),l=W?l.add(v):l.delete(v)):(h=h.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{ma:h,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((v,T)=>function(N,L){const W=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return W(N)-W(L)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new xo(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new o_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new eE(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new Zw(i))}),t}va(e){this.Ea=e.Es,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return xo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class q1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class W1{constructor(e){this.key=e,this.Fa=!1}}class H1{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Is(d=>gw(d),Fc),this.Oa=new Map,this.Na=new Set,this.Ba=new et(pe.comparator),this.La=new Map,this.ka=new Zf,this.qa={},this.Qa=new Map,this.Ka=No.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function G1(n,e,t=!0){const i=oE(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await tE(i,e,t,!0),o}async function K1(n,e){const t=oE(n);await tE(t,e,!0,!1)}async function tE(n,e,t,i){const o=await g1(n.localStore,lr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await Q1(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&qw(n.remoteStore,o),d}async function Q1(n,e,t,i,o){n.Ua=(T,I,N)=>async function(W,F,H,G){let ee=F.view.ga(H);ee.ss&&(ee=await n_(W.localStore,F.query,!1).then(({documents:x})=>F.view.ga(x,ee)));const de=G&&G.targetChanges.get(F.targetId),Se=G&&G.targetMismatches.get(F.targetId)!=null,Te=F.view.applyChanges(ee,W.isPrimaryClient,de,Se);return c_(W,F.targetId,Te.ba),Te.snapshot}(n,T,I,N);const l=await n_(n.localStore,e,!0),h=new $1(e,l.Es),d=h.ga(l.documents),p=_l.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);c_(n,t,y.ba);const v=new q1(e,t,h);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function Y1(n,e,t){const i=Ie(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Fc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await df(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&np(i.remoteStore,o.targetId),pf(i,o.targetId)}).catch(jo)):(pf(i,o.targetId),await df(i.localStore,o.targetId,!0))}async function J1(n,e){const t=Ie(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),np(t.remoteStore,i.targetId))}async function X1(n,e,t){const i=sN(n);try{const o=await function(h,d){const p=Ie(h),y=gt.now(),v=d.reduce((N,L)=>N.add(L.key),ke());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let L=$r(),W=ke();return p.hs.getEntries(N,v).next(F=>{L=F,L.forEach((H,G)=>{G.isValidDocument()||(W=W.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,L)).next(F=>{T=F;const H=[];for(const G of d){const ee=yk(G,T.get(G.key).overlayedDocument);ee!=null&&H.push(new Vi(G.key,ee,lw(ee.value.mapValue),ur.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,H,d)}).next(F=>{I=F;const H=F.applyToLocalDocumentSet(T,W);return p.documentOverlayCache.saveOverlays(N,F.batchId,H)})}).then(()=>({batchId:I.batchId,changes:vw(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(xe)),y=y.insert(d,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await wl(i,o.changes),await Wc(i.remoteStore)}catch(o){const l=ap(o,"Failed to persist write");t.reject(l)}}async function nE(n,e){const t=Ie(n);try{const i=await f1(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.La.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await wl(t,i,e)}catch(i){await jo(i)}}function u_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const d=h.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Ie(h);p.onlineState=d;let y=!1;p.queries.forEach((v,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&lp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Z1(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,Ut.newNoDocument(l,Ee.min()));const d=ke().add(l),p=new Bc(Ee.min(),new Map,new et(xe),h,d);await nE(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),up(i)}else await df(i.localStore,e,!1).then(()=>pf(i,e,t)).catch(jo)}async function eN(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await d1(t.localStore,e);iE(t,i,null),rE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await wl(t,o)}catch(o){await jo(o)}}async function tN(n,e,t){const i=Ie(n);try{const o=await function(h,d){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Ue(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);iE(i,e,t),rE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await wl(i,o)}catch(o){await jo(o)}}function rE(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function iE(n,e,t){const i=Ie(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function pf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||sE(n,i)})}function sE(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(np(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),up(n))}function c_(n,e,t){for(const i of t)i instanceof Zw?(n.ka.addReference(i.key,e),nN(n,i)):i instanceof eE?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||sE(n,i.key)):we()}function nN(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.Na.add(i),up(n))}function up(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new pe(Ke.fromString(e)),i=n.Ka.next();n.La.set(i,new W1(t)),n.Ba=n.Ba.insert(t,i),qw(n.remoteStore,new wi(lr(Kf(t.path)),i,"TargetPurposeLimboResolution",Vc.oe))}}async function wl(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{h.push(i.Ua(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=tp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const v=Ie(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Q.forEach(y,I=>Q.forEach(I.Wi,N=>v.persistence.referenceDelegate.addReference(T,I.targetId,N)).next(()=>Q.forEach(I.Gi,N=>v.persistence.referenceDelegate.removeReference(T,I.targetId,N)))))}catch(T){if(!zo(T))throw T;oe("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const N=v.us.get(I),L=N.snapshotVersion,W=N.withLastLimboFreeSnapshotVersion(L);v.us=v.us.insert(I,W)}}}(i.localStore,l))}async function rN(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await jw(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new ae(K.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await wl(t,i.Ts)}}function iN(n,e){const t=Ie(n),i=t.La.get(e);if(i&&i.Fa)return ke().add(i.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const d=t.xa.get(h);o=o.unionWith(d.view.fa)}return o}}function oE(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Z1.bind(null,e),e.Ma.R_=z1.bind(null,e.eventManager),e.Ma.Wa=B1.bind(null,e.eventManager),e}function sN(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tN.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$c(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return h1(this.persistence,new u1,e.initialUser,this.serializer)}ja(e){return new Uw(ep.ei,this.serializer)}za(e){return new _1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class oN extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof wc);const i=this.persistence.referenceDelegate.garbageCollector;return new Kk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new Uw(i=>wc.ei(i,t),this.serializer)}}class mf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>u_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=rN.bind(null,this.syncEngine),await F1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new j1}()}createDatastore(e){const t=$c(e.databaseInfo.databaseId),i=function(l){return new T1(l)}(e.databaseInfo);return function(l,h,d,p){return new A1(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new C1(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>u_(this.syncEngine,t,0),function(){return i_.p()?new i_:new v1}())}createSyncEngine(e,t){return function(o,l,h,d,p,y,v){const T=new H1(o,l,h,d,p,y);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);oe("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await vl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}mf.provider={build:()=>new mf};/**
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
 */class aE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=sw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{oe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(oe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ap(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Bd(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await jw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function h_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lN(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>s_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>s_(e.remoteStore,o)),n._onlineComponents=e}async function lN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ro("Error using user provided cache. Falling back to memory cache: "+t),await Bd(n,new Tc)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Bd(n,new oN(void 0));return n._offlineComponents}async function lE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await h_(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await h_(n,new mf))),n._onlineComponents}function uN(n){return lE(n).then(e=>e.syncEngine)}async function uE(n){const e=await lE(n),t=e.eventManager;return t.onListen=G1.bind(null,e.syncEngine),t.onUnlisten=Y1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=K1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=J1.bind(null,e.syncEngine),t}function cN(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const v=new aE({next:I=>{v.eu(),h.enqueueAndForget(()=>Jw(l,T));const N=I.docs.has(d);!N&&I.fromCache?y.reject(new ae(K.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&I.fromCache&&p&&p.source==="server"?y.reject(new ae(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Xw(Kf(d.path),v,{includeMetadataChanges:!0,ua:!0});return Yw(l,T)}(await uE(n),n.asyncQueue,e,t,i)),i.promise}function hN(n,e,t={}){const i=new Ur;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const v=new aE({next:I=>{v.eu(),h.enqueueAndForget(()=>Jw(l,T)),I.fromCache&&p.source==="server"?y.reject(new ae(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Xw(d,v,{includeMetadataChanges:!0,ua:!0});return Yw(l,T)}(await uE(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function cE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const d_=new Map;/**
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
 */function hE(n,e,t){if(!t)throw new ae(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dN(n,e,t,i){if(e===!0&&i===!0)throw new ae(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function f_(n){if(!pe.isDocumentKey(n))throw new ae(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function p_(n){if(pe.isDocumentKey(n))throw new ae(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function qr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ae(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hc(n);throw new ae(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class m_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ae(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new SP;switch(i.type){case"firstParty":return new PP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ae(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=d_.get(t);i&&(oe("ComponentProvider","Removing Datastore"),d_.delete(t),i.terminate())}(this),Promise.resolve()}}function fN(n,e,t,i={}){var o;const l=(n=qr(n,Gc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ft.MOCK_USER;else{d=wS(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ae(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new AP(new iw(d,p))}}/**
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
 */class bi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new bi(this.firestore,e,this._query)}}class Wt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Si extends bi{constructor(e,t,i){super(e,t,Kf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new pe(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function pN(n,e,...t){if(n=ct(n),hE("collection","path",e),n instanceof Gc){const i=Ke.fromString(e,...t);return p_(i),new Si(n,null,i)}{if(!(n instanceof Wt||n instanceof Si))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return p_(i),new Si(n.firestore,null,i)}}function mN(n,e,...t){if(n=ct(n),arguments.length===1&&(e=sw.newId()),hE("doc","path",e),n instanceof Gc){const i=Ke.fromString(e,...t);return f_(i),new Wt(n,null,new pe(i))}{if(!(n instanceof Wt||n instanceof Si))throw new ae(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return f_(i),new Wt(n.firestore,n instanceof Si?n.converter:null,new pe(i))}}/**
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
 */class g_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Bw(this,"async_queue_retry"),this.fu=()=>{const i=zd();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=zd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=zd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Ur;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!zo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=op.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class El extends Gc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new g_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new g_(e),this._firestoreClient=void 0,await e}}}function gN(n,e){const t=typeof n=="object"?n:Rf(),i=typeof n=="string"?n:"(default)",o=Ts(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=_S("firestore");l&&fN(o,...l)}return o}function cp(n){if(n._terminated)throw new ae(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yN(n),n._firestoreClient}function yN(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new $P(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,cE(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new aN(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(Nt.fromBase64String(e))}catch(t){throw new ae(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Do(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hp{constructor(e){this._methodName=e}}/**
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
 */class dp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class fp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const _N=/^__.*__$/;class vN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new yl(e,this.data,t,this.fieldTransforms)}}class dE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class pp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ic(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(fE(this.Mu)&&_N.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class wN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||$c(e)}$u(e,t,i,o=!1){return new pp({Mu:e,methodName:t,Ku:i,path:kt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mp(n){const e=n._freezeSettings(),t=$c(n._databaseId);return new wN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function EN(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);gp("Data must be an object, but it was:",h,i);const d=pE(i,h);let p,y;if(l.merge)p=new hn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=gf(e,T,t);if(!h.contains(I))throw new ae(K.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);gE(v,I)||v.push(I)}p=new hn(v),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new vN(new tn(d),p,y)}class Qc extends hp{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}function TN(n,e,t,i){const o=n.$u(1,e,t);gp("Data must be an object, but it was:",o,i);const l=[],h=tn.empty();Li(i,(p,y)=>{const v=yp(e,p,t);y=ct(y);const T=o.Lu(v);if(y instanceof Qc)l.push(v);else{const I=Tl(y,T);I!=null&&(l.push(v),h.set(v,I))}});const d=new hn(l);return new dE(h,d,o.fieldTransforms)}function IN(n,e,t,i,o,l){const h=n.$u(1,e,t),d=[gf(e,i,t)],p=[o];if(l.length%2!=0)throw new ae(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(gf(e,l[I])),p.push(l[I+1]);const y=[],v=tn.empty();for(let I=d.length-1;I>=0;--I)if(!gE(y,d[I])){const N=d[I];let L=p[I];L=ct(L);const W=h.Lu(N);if(L instanceof Qc)y.push(N);else{const F=Tl(L,W);F!=null&&(y.push(N),v.set(N,F))}}const T=new hn(y);return new dE(v,T,h.fieldTransforms)}function SN(n,e,t,i=!1){return Tl(t,n.$u(i?4:3,e))}function Tl(n,e){if(mE(n=ct(n)))return gp("Unsupported field value:",e,n),pE(n,e);if(n instanceof hp)return function(i,o){if(!fE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=Tl(d,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=ct(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=gt.fromDate(i);return{timestampValue:vc(o.serializer,l)}}if(i instanceof gt){const l=new gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vc(o.serializer,l)}}if(i instanceof dp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Do)return{bytesValue:Dw(o.serializer,i._byteString)};if(i instanceof Wt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Xf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof fp)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return Qf(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Hc(i)}`)}(n,e)}function pE(n,e){const t={};return ow(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(n,(i,o)=>{const l=Tl(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function mE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof dp||n instanceof Do||n instanceof Wt||n instanceof hp||n instanceof fp)}function gp(n,e,t){if(!mE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Hc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function gf(n,e,t){if((e=ct(e))instanceof Kc)return e._internalPath;if(typeof e=="string")return yp(n,e);throw Ic("Field path arguments must be of type string or ",n,!1,void 0,t)}const AN=new RegExp("[~\\*/\\[\\]]");function yp(n,e,t){if(e.search(AN)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Kc(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ic(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new ae(K.INVALID_ARGUMENT,d+n+p)}function gE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class yE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_p("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class RN extends yE{data(){return super.data()}}function _p(n,e){return typeof e=="string"?yp(n,e):e instanceof Kc?e._internalPath:e._delegate._internalPath}/**
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
 */function CN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ae(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vp{}class wp extends vp{}function PN(n,e,...t){let i=[];e instanceof vp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof Tp).length,d=l.filter(p=>p instanceof Ep).length;if(h>1||h>0&&d>0)throw new ae(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Ep extends wp{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ep(e,t,i)}_apply(e){const t=this._parse(e);return _E(e._query,t),new bi(e.firestore,e.converter,af(e._query,t))}_parse(e){const t=mp(e.firestore);return function(l,h,d,p,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ae(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){__(T,v);const N=[];for(const L of T)N.push(y_(p,l,L));I={arrayValue:{values:N}}}else I=y_(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||__(T,v),I=SN(d,h,T,v==="in"||v==="not-in");return ut.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Tp extends vp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)_E(h,p),h=af(h,p)}(e._query,t),new bi(e.firestore,e.converter,af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ip extends wp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ip(e,t)}_apply(e){const t=function(o,l,h){if(o.startAt!==null)throw new ae(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ae(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new al(l,h)}(e._query,this._field,this._direction);return new bi(e.firestore,e.converter,function(o,l){const h=o.explicitOrderBy.concat([l]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function kN(n,e="asc"){const t=e,i=_p("orderBy",n);return Ip._create(i,t)}class Sp extends wp{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Sp(e,t,i)}_apply(e){return new bi(e.firestore,e.converter,gc(e._query,this._limit,this._limitType))}}function NN(n){return Sp._create("limit",n,"F")}function y_(n,e,t){if(typeof(t=ct(t))=="string"){if(t==="")throw new ae(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mw(e)&&t.indexOf("/")!==-1)throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!pe.isDocumentKey(i))throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Fy(n,new pe(i))}if(t instanceof Wt)return Fy(n,t._key);throw new ae(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(t)}.`)}function __(n,e){if(!Array.isArray(n)||n.length===0)throw new ae(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _E(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ae(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class xN{convertValue(e,t="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Li(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new fp(l)}convertGeoPoint(e){return new dp(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(il(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(Fw(i));const o=new sl(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function DN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class Ha{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vE extends yE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(_p("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class rc extends vE{data(e={}){return super.data(e)}}class ON{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ha(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new rc(this._firestore,this._userDataWriter,i.key,i,new Ha(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new rc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ha(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new rc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Ha(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),v=h.indexOf(d.doc.key)),{type:LN(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function LN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}/**
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
 */function VN(n){n=qr(n,Wt);const e=qr(n.firestore,El);return cN(cp(e),n._key).then(t=>FN(e,n,t))}class wE extends xN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function bN(n){n=qr(n,bi);const e=qr(n.firestore,El),t=cp(e),i=new wE(e);return CN(n._query),hN(t,n._query).then(o=>new ON(e,i,n,o))}function v_(n,e,t){n=qr(n,Wt);const i=qr(n.firestore,El),o=DN(n.converter,e);return EE(i,[EN(mp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,ur.none())])}function MN(n,e,t,...i){n=qr(n,Wt);const o=qr(n.firestore,El),l=mp(o);let h;return h=typeof(e=ct(e))=="string"||e instanceof Kc?IN(l,"updateDoc",n._key,e,t,i):TN(l,"updateDoc",n._key,e),EE(o,[h.toMutation(n._key,ur.exists(!0))])}function EE(n,e){return function(i,o){const l=new Ur;return i.asyncQueue.enqueueAndForget(async()=>X1(await uN(i),o,l)),l.promise}(cp(n),e)}function FN(n,e,t){const i=t.docs.get(e._key),o=new wE(n);return new vE(n,o,e._key,i,new Ha(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(Mo),hr(new $n("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new El(new RP(i.getProvider("auth-internal")),new NP(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ae(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sl(y.options.projectId,v)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),In(Dy,"4.7.6",e),In(Dy,"4.7.6","esm2017")})();const UN={apiKey:"AIzaSyBaV_JGFpKO_oeBiMJMjcWuAAmOVeI5cj8",authDomain:"pkapireact.firebaseapp.com",projectId:"pkapireact",storageBucket:"pkapireact.firebasestorage.app",messagingSenderId:"949244559512",appId:"1:949244559512:web:89aa9b7f59171d188a10ed",measurementId:"G-RX26R0YYRL"},TE=H_(UN);wP(TE);const yi=kv(),IE=gN(TE);function jN(){const[n,e]=$.useState(null),[t,i]=$.useState(""),[o,l]=$.useState(""),[h,d]=$.useState("");$.useEffect(()=>{Nc(yi,G=>{e(G)})},[]);const p=bo(),y=new Dr,[v,T]=$.useState(!1);function I(){T(!v)}function N(){my(yi,y).then(()=>{console.log("Autenticación correcta"),p("/")}).catch(G=>{console.error("Error:",G)})}function L(){HA(yi).then(()=>{console.log("Cierre de sesión exitoso"),p("/")}).catch(G=>console.error("Error:",G))}function W(){v?o===h?BA(yi,t,o).then(()=>{console.log("Usuario registrado correctamente"),p("/")}).catch(G=>{console.error("Error al registrar:",G.message)}):console.error("Las contraseñas no coinciden"):$A(yi,t,o).then(()=>{console.log("Inicio de sesión exitoso"),p("/")}).catch(G=>{console.error("Error al iniciar sesión:",G.message)})}const F=new Or;function H(){my(yi,F).then(()=>{p("/")}).catch(G=>{console.error("Error en el inicio de sesión con GitHub:",G)})}return b.jsx(b.Fragment,{children:b.jsx("div",{className:"Pokemons",children:b.jsx("div",{className:"contPoke",children:b.jsx("div",{className:"form-container",children:b.jsxs("div",{className:"form-container-inner",children:[b.jsx(Rc,{to:-1,className:"secondary-button back-btn",children:"Atras"}),n?b.jsxs("div",{className:"logout",children:[b.jsx("p",{className:"h1",children:"¿Desea cerrar sesion?"}),b.jsx("button",{onClick:L,className:"primary-button",children:"Cerrar Sesion"})]}):b.jsxs(b.Fragment,{children:[b.jsxs("div",{className:"auth-form",children:[b.jsx("label",{htmlFor:"email",children:"Email:"}),b.jsx("input",{name:"email",type:"email",placeholder:"ejemplo@algoMas.algo",value:t,onChange:G=>i(G.target.value),required:!0}),b.jsx("label",{htmlFor:"password",children:"Contraseña:"}),b.jsx("input",{name:"password",type:"password",placeholder:"Contraseña",value:o,onChange:G=>l(G.target.value),onKeyDown:G=>{G.key==="Enter"&&(G.preventDefault(),W())},required:!0}),v&&b.jsxs(b.Fragment,{children:[b.jsx("label",{htmlFor:"password2",children:"Repite la contraseña:"}),b.jsx("input",{name:"password2",type:"password",placeholder:"Repite la contraseña",value:h,onChange:G=>d(G.target.value),onKeyDown:G=>{G.key==="Enter"&&(G.preventDefault(),W())},required:!0})]}),b.jsx("button",{className:"primary-button",onClick:W,children:v?"Registrarme":"Iniciar sesión"}),b.jsx("button",{onClick:I,className:"primary-button",children:v?"Ya tengo cuenta":"Registrarme"})]}),b.jsxs("div",{className:"actions",children:[b.jsx("button",{onClick:N,className:"secondary-button",children:"Iniciar sesión con Google"}),b.jsx("button",{onClick:H,className:"secondary-button",children:"Iniciar sesión con Github"})]})]})]})})})})})}function SE(){const[n,e]=$.useState([]);$.useEffect(()=>{t()},[]);function t(){try{const i=pN(IE,"Ranking"),o=PN(i,kN("victorias","desc"),NN(3));bN(o).then(l=>{const h=[];l.forEach(d=>{console.log(d),h.push({id:d.id,...d.data()})}),e(h)}).catch(l=>{console.log("error",l)})}catch(i){console.error("Error al obtener el ranking:",i)}}return b.jsxs("div",{className:"ranking",children:[b.jsx("h2",{children:"Top 3 Usuarios"}),b.jsx("ul",{children:n.map((i,o)=>b.jsxs("li",{children:[b.jsxs("span",{children:[o+1,". ",i.usuario]}),b.jsxs("span",{children:[" ",i.victorias," victorias"]})]},i.id))})]})}function zN(){const[n,e]=$.useState([]),[t,i]=$.useState(""),[o,l]=$.useState(""),[h,d]=$.useState(""),[p,y]=$.useState(0),[v,T]=$.useState(0),I=bo();function N(H){I("/checkwin",{state:{winOrLose:H,name:o}})}$.useEffect(()=>{L()},[]);function L(){const H=Math.floor(Math.random()*1025)+1;fetch(`https://pokeapi.co/api/v2/pokemon/${H}/`).then(G=>G.json()).then(G=>{e(G.types),i(G.sprites.other.home.front_default),l(G.name),console.log(G.name),y(0),T(60),d("")})}function W(){h.toLowerCase()===o.toLowerCase()?N(!0):p<4?(y(p+1),T(H=>H<100?H+5:100)):N(!1)}function F(H){H.key==="Enter"&&W()}return b.jsx("div",{className:"Pokemons",children:b.jsxs("div",{className:"contPoke",children:[b.jsx("div",{className:"image-container",style:{clipPath:`inset(${100-v}% ${100-v}% round 20%)`},children:b.jsx("img",{src:t,alt:"Pokémon",className:"pokemon-game-image"})}),p>=3&&b.jsxs("div",{className:"pistas",children:[b.jsx("p",{children:"Pista (tipos del pokemon):"}),n.map((H,G)=>b.jsx("p",{children:H.type.name},G))]}),b.jsxs("div",{className:"answer-cont",children:[b.jsx("input",{type:"text",className:"gess-input",value:h,onChange:H=>d(H.target.value),onKeyDown:F,placeholder:"¿Quién es este Pokémon?"}),b.jsx("button",{className:"gess-button",onClick:W,children:"Adivinar"})]}),b.jsx(SE,{})]})})}function BN(){var p,y;const n=fr(),e=(p=n.state)==null?void 0:p.winOrLose,t=(y=n.state)==null?void 0:y.name,[i,o]=$.useState(null),[l,h]=$.useState(0);$.useEffect(()=>{Nc(yi,v=>{v&&o(v)})},[]),$.useEffect(()=>{i&&d()},[i]);function d(){if(!i||!i.uid)return;const v=mN(IE,"Ranking",i.uid);VN(v).then(T=>{if(T.exists())e?(MN(v,{victorias:T.data().victorias+1}),h(T.data().victorias+1)):h(T.data().victorias);else{console.log(i.displayName);let I=i.displayName?i.displayName:i.email.split("@")[0];e?v_(v,{usuario:I,victorias:1}):v_(v,{usuario:I,victorias:0})}}).catch(T=>console.error("Error al obtener/crear ranking:",T))}return b.jsx(b.Fragment,{children:b.jsx("div",{className:"Pokemons",children:b.jsx("div",{className:"contPoke",children:b.jsxs("div",{className:"winPage",children:[e?b.jsxs(b.Fragment,{children:[b.jsx("h1",{children:"Correcto Has ganado."}),b.jsxs("p",{children:["numero de victorias",l]})]}):b.jsxs(b.Fragment,{children:[b.jsxs("h1",{children:["Has perdido, el pokemon era: ",t]}),b.jsxs("p",{children:["numero de victorias ",l]})]}),b.jsx(Rc,{to:-1,className:"goBack",children:"Volver a jugar"}),b.jsx(SE,{})]})})})})}function w_(){let[n,e]=$.useState(null);const t=kv();return $.useEffect(()=>{Nc(t,i=>{i?(console.log("cambio en ususario"),e(b.jsx(CI,{}))):(console.log("El usuario no esta registrado, no entra"),e(b.jsx(RI,{to:"/login"})))})},[]),n}function $N(){const n=bo();function e(){n("/pkGame")}function t(){n("/showPokemon")}return b.jsx("div",{children:b.jsx("section",{className:"hero",children:b.jsxs("div",{id:"pokemonCarousel",className:"carousel slide carr","data-bs-ride":"carousel",children:[b.jsxs("div",{className:"carousel-inner",children:[b.jsx("div",{className:"carousel-item active",children:b.jsx("img",{className:"d-block w-100",src:"/images/fondo1.jpg",alt:"Pokemon 1"})}),b.jsx("div",{className:"carousel-item",children:b.jsx("img",{className:"d-block w-100",src:"/images/fondo2.jpg",alt:"Pokemon 2"})}),b.jsx("div",{className:"carousel-item",children:b.jsx("img",{className:"d-block w-100",src:"/images/fondo3.jpg",alt:"Pokemon 3"})}),b.jsx("div",{className:"carousel-item",children:b.jsx("img",{className:"d-block w-100",src:"/images/fondo4.jpg",alt:"Pokemon 4"})})]}),b.jsxs("div",{className:"hero-overlay",children:[b.jsx("h1",{children:"Explora el mundo Pokémon"}),b.jsx("div",{className:"container mt-5 text-center text-buttons",children:b.jsxs("div",{className:"row",children:[b.jsxs("div",{className:"col-md-6 mb-4",children:[b.jsx("h2",{children:"Explora Pokémon"}),b.jsx("p",{children:"Descubre información sobre todos los Pokémon en nuestra base de datos."}),b.jsx("button",{className:"btn btn-primary",onClick:t,children:"Explorar"})]}),b.jsxs("div",{className:"col-md-6 mb-4",children:[b.jsx("h2",{children:"Juega a nuestro juego"}),b.jsx("p",{children:"Disfruta de una increíble aventura Pokémon en nuestro juego exclusivo."}),b.jsx("button",{className:"btn btn-success",onClick:e,children:"Jugar Ahora"})]})]})})]})]})})})}function qN(){const[n,e]=$.useState(null);return $.useEffect(()=>{Nc(yi,t=>{e(t)})},[]),b.jsx(b.Fragment,{children:b.jsxs(ZI,{children:[b.jsxs("div",{className:"nav",children:[b.jsx(ds,{to:"/",children:"inicio"}),b.jsx(ds,{to:"/showPokemon",children:"Mostrar Pokemons"}),b.jsx(ds,{to:"/pkGame",children:"Jugar"}),n?b.jsxs(b.Fragment,{children:[b.jsxs("p",{children:["Bienvenido, ",n.displayName?n.displayName:n.email.split("@")[0]]}),b.jsx(ds,{to:"/login",children:"Cerrar Sesión"})]}):b.jsx(ds,{to:"/login",children:"Login"})]}),b.jsxs(kI,{children:[b.jsx(sr,{path:"/",element:b.jsx($N,{})}),b.jsx(sr,{path:"/login",element:b.jsx(jN,{})}),b.jsx(sr,{element:b.jsx(w_,{}),children:b.jsx(sr,{path:"/showPokemon",element:b.jsx(lS,{})})}),b.jsx(sr,{element:b.jsx(w_,{}),children:b.jsx(sr,{path:"/pkGame",element:b.jsx(zN,{})})}),b.jsx(sr,{path:"/detail",element:b.jsx(cS,{})}),b.jsx(sr,{path:"/checkwin",element:b.jsx(BN,{})}),b.jsx(sr,{path:"*",element:b.jsx(uS,{})})]})]})})}VT.createRoot(document.getElementById("root")).render(b.jsx(qN,{}));
