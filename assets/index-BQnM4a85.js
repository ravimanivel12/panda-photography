(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var hd={exports:{}},Io={};var Z0;function uy(){if(Z0)return Io;Z0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Io.Fragment=t,Io.jsx=i,Io.jsxs=i,Io}var K0;function cy(){return K0||(K0=1,hd.exports=uy()),hd.exports}var K=cy(),pd={exports:{}},ot={};var Q0;function fy(){if(Q0)return ot;Q0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,x={};function y(P,Y,ve){this.props=P,this.context=Y,this.refs=x,this.updater=ve||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=y.prototype;function D(P,Y,ve){this.props=P,this.context=Y,this.refs=x,this.updater=ve||b}var N=D.prototype=new w;N.constructor=D,C(N,y.prototype),N.isPureReactComponent=!0;var H=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,Y,ve){var Ce=ve.ref;return{$$typeof:s,type:P,key:Y,ref:Ce!==void 0?Ce:null,props:ve}}function he(P,Y){return U(P.type,Y,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function J(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ve){return Y[ve]})}var te=/\/+/g;function ue(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):Y.toString(36)}function Z(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,ve,Ce,Pe){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(ne){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case s:case t:xe=!0;break;case v:return xe=P._init,O(xe(P._payload),Y,ve,Ce,Pe)}}if(xe)return Pe=Pe(P),xe=Ce===""?"."+ue(P,0):Ce,H(Pe)?(ve="",xe!=null&&(ve=xe.replace(te,"$&/")+"/"),O(Pe,Y,ve,"",function(Ke){return Ke})):Pe!=null&&(G(Pe)&&(Pe=he(Pe,ve+(Pe.key==null||P&&P.key===Pe.key?"":(""+Pe.key).replace(te,"$&/")+"/")+xe)),Y.push(Pe)),1;xe=0;var Me=Ce===""?".":Ce+":";if(H(P))for(var Ge=0;Ge<P.length;Ge++)Ce=P[Ge],ne=Me+ue(Ce,Ge),xe+=O(Ce,Y,ve,ne,Pe);else if(Ge=M(P),typeof Ge=="function")for(P=Ge.call(P),Ge=0;!(Ce=P.next()).done;)Ce=Ce.value,ne=Me+ue(Ce,Ge++),xe+=O(Ce,Y,ve,ne,Pe);else if(ne==="object"){if(typeof P.then=="function")return O(Z(P),Y,ve,Ce,Pe);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return xe}function I(P,Y,ve){if(P==null)return P;var Ce=[],Pe=0;return O(P,Ce,"","",function(ne){return Y.call(ve,ne,Pe++)}),Ce}function oe(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(ve){(P._status===0||P._status===-1)&&(P._status=1,P._result=ve)},function(ve){(P._status===0||P._status===-1)&&(P._status=2,P._result=ve)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Te={map:I,forEach:function(P,Y,ve){I(P,function(){Y.apply(this,arguments)},ve)},count:function(P){var Y=0;return I(P,function(){Y++}),Y},toArray:function(P){return I(P,function(Y){return Y})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ot.Activity=_,ot.Children=Te,ot.Component=y,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=D,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ot.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},ot.cache=function(P){return function(){return P.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(P,Y,ve){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ce=C({},P.props),Pe=P.key;if(Y!=null)for(ne in Y.key!==void 0&&(Pe=""+Y.key),Y)!T.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(Ce[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)Ce.children=ve;else if(1<ne){for(var xe=Array(ne),Me=0;Me<ne;Me++)xe[Me]=arguments[Me+2];Ce.children=xe}return U(P.type,Pe,Ce)},ot.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},ot.createElement=function(P,Y,ve){var Ce,Pe={},ne=null;if(Y!=null)for(Ce in Y.key!==void 0&&(ne=""+Y.key),Y)T.call(Y,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Pe[Ce]=Y[Ce]);var xe=arguments.length-2;if(xe===1)Pe.children=ve;else if(1<xe){for(var Me=Array(xe),Ge=0;Ge<xe;Ge++)Me[Ge]=arguments[Ge+2];Pe.children=Me}if(P&&P.defaultProps)for(Ce in xe=P.defaultProps,xe)Pe[Ce]===void 0&&(Pe[Ce]=xe[Ce]);return U(P,ne,Pe)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(P){return{$$typeof:p,render:P}},ot.isValidElement=G,ot.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:oe}},ot.memo=function(P,Y){return{$$typeof:h,type:P,compare:Y===void 0?null:Y}},ot.startTransition=function(P){var Y=F.T,ve={};F.T=ve;try{var Ce=P(),Pe=F.S;Pe!==null&&Pe(ve,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(z,me)}catch(ne){me(ne)}finally{Y!==null&&ve.types!==null&&(Y.types=ve.types),F.T=Y}},ot.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ot.use=function(P){return F.H.use(P)},ot.useActionState=function(P,Y,ve){return F.H.useActionState(P,Y,ve)},ot.useCallback=function(P,Y){return F.H.useCallback(P,Y)},ot.useContext=function(P){return F.H.useContext(P)},ot.useDebugValue=function(){},ot.useDeferredValue=function(P,Y){return F.H.useDeferredValue(P,Y)},ot.useEffect=function(P,Y){return F.H.useEffect(P,Y)},ot.useEffectEvent=function(P){return F.H.useEffectEvent(P)},ot.useId=function(){return F.H.useId()},ot.useImperativeHandle=function(P,Y,ve){return F.H.useImperativeHandle(P,Y,ve)},ot.useInsertionEffect=function(P,Y){return F.H.useInsertionEffect(P,Y)},ot.useLayoutEffect=function(P,Y){return F.H.useLayoutEffect(P,Y)},ot.useMemo=function(P,Y){return F.H.useMemo(P,Y)},ot.useOptimistic=function(P,Y){return F.H.useOptimistic(P,Y)},ot.useReducer=function(P,Y,ve){return F.H.useReducer(P,Y,ve)},ot.useRef=function(P){return F.H.useRef(P)},ot.useState=function(P){return F.H.useState(P)},ot.useSyncExternalStore=function(P,Y,ve){return F.H.useSyncExternalStore(P,Y,ve)},ot.useTransition=function(){return F.H.useTransition()},ot.version="19.2.4",ot}var J0;function Zh(){return J0||(J0=1,pd.exports=fy()),pd.exports}var ce=Zh(),md={exports:{}},Bo={},gd={exports:{}},_d={};var $0;function dy(){return $0||($0=1,(function(s){function t(O,I){var oe=O.length;O.push(I);e:for(;0<oe;){var me=oe-1>>>1,Te=O[me];if(0<l(Te,I))O[me]=I,O[oe]=Te,oe=me;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],oe=O.pop();if(oe!==I){O[0]=oe;e:for(var me=0,Te=O.length,P=Te>>>1;me<P;){var Y=2*(me+1)-1,ve=O[Y],Ce=Y+1,Pe=O[Ce];if(0>l(ve,oe))Ce<Te&&0>l(Pe,ve)?(O[me]=Pe,O[Ce]=oe,me=Ce):(O[me]=ve,O[Y]=oe,me=Y);else if(Ce<Te&&0>l(Pe,oe))O[me]=Pe,O[Ce]=oe,me=Ce;else break e}}return I}function l(O,I){var oe=O.sortIndex-I.sortIndex;return oe!==0?oe:O.id-I.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var m=[],h=[],v=1,_=null,g=3,M=!1,b=!1,C=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var I=i(h);I!==null;){if(I.callback===null)r(h);else if(I.startTime<=O)r(h),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(h)}}function H(O){if(C=!1,N(O),!b)if(i(m)!==null)b=!0,z||(z=!0,J());else{var I=i(h);I!==null&&Z(H,I.startTime-O)}}var z=!1,F=-1,T=5,U=-1;function he(){return x?!0:!(s.unstable_now()-U<T)}function G(){if(x=!1,z){var O=s.unstable_now();U=O;var I=!0;try{e:{b=!1,C&&(C=!1,w(F),F=-1),M=!0;var oe=g;try{t:{for(N(O),_=i(m);_!==null&&!(_.expirationTime>O&&he());){var me=_.callback;if(typeof me=="function"){_.callback=null,g=_.priorityLevel;var Te=me(_.expirationTime<=O);if(O=s.unstable_now(),typeof Te=="function"){_.callback=Te,N(O),I=!0;break t}_===i(m)&&r(m),N(O)}else r(m);_=i(m)}if(_!==null)I=!0;else{var P=i(h);P!==null&&Z(H,P.startTime-O),I=!1}}break e}finally{_=null,g=oe,M=!1}I=void 0}}finally{I?J():z=!1}}}var J;if(typeof D=="function")J=function(){D(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ue=te.port2;te.port1.onmessage=G,J=function(){ue.postMessage(null)}}else J=function(){y(G,0)};function Z(O,I){F=y(function(){O(s.unstable_now())},I)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var oe=g;g=I;try{return O()}finally{g=oe}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var oe=g;g=O;try{return I()}finally{g=oe}},s.unstable_scheduleCallback=function(O,I,oe){var me=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?me+oe:me):oe=me,O){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=oe+Te,O={id:v++,callback:I,priorityLevel:O,startTime:oe,expirationTime:Te,sortIndex:-1},oe>me?(O.sortIndex=oe,t(h,O),i(m)===null&&O===i(h)&&(C?(w(F),F=-1):C=!0,Z(H,oe-me))):(O.sortIndex=Te,t(m,O),b||M||(b=!0,z||(z=!0,J()))),O},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(O){var I=g;return function(){var oe=g;g=I;try{return O.apply(this,arguments)}finally{g=oe}}}})(_d)),_d}var e_;function hy(){return e_||(e_=1,gd.exports=dy()),gd.exports}var vd={exports:{}},An={};var t_;function py(){if(t_)return An;t_=1;var s=Zh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:v}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return u(m,h,null,v)},An.flushSync=function(m){var h=f.T,v=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=v,r.d.f()}},An.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},An.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},An.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,_=p(v,h.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},An.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,h){return m(h)},An.useFormState=function(m,h,v){return f.H.useFormState(m,h,v)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.4",An}var n_;function my(){if(n_)return vd.exports;n_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vd.exports=py(),vd.exports}var i_;function gy(){if(i_)return Bo;i_=1;var s=hy(),t=Zh(),i=my();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return m(c),e;if(d===o)return m(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=d;break}if(A===o){S=!0,o=c,a=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===a){S=!0,a=d,o=c;break}if(A===o){S=!0,o=d,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case z:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}var Z=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function P(e){return{current:e}}function Y(e){0>Te||(e.current=me[Te],me[Te]=null,Te--)}function ve(e,n){Te++,me[Te]=e.current,e.current=n}var Ce=P(null),Pe=P(null),ne=P(null),xe=P(null);function Me(e,n){switch(ve(ne,n),ve(Pe,e),ve(Ce,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?v0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=v0(n),e=x0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Ce),ve(Ce,e)}function Ge(){Y(Ce),Y(Pe),Y(ne)}function Ke(e){e.memoizedState!==null&&ve(xe,e);var n=Ce.current,a=x0(n,e.type);n!==a&&(ve(Pe,e),ve(Ce,a))}function et(e){Pe.current===e&&(Y(Ce),Y(Pe)),xe.current===e&&(Y(xe),Lo._currentValue=oe)}var qt,gt;function ct(e){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+e+gt}var bt=!1;function Je(e,n){if(!e||bt)return"";bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var ae=le}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(le){ae=le}e.call(Se.prototype)}}else{try{throw Error()}catch(le){ae=le}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var B=S.split(`
`),ee=A.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===ee.length)for(o=B.length-1,c=ee.length-1;1<=o&&0<=c&&B[o]!==ee[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==ee[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==ee[c]){var pe=`
`+B[o].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=o&&0<=c);break}}}finally{bt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function _t(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return Je(e.type,!1);case 11:return Je(e.type.render,!1);case 1:return Je(e.type,!0);case 31:return ct("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=_t(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Wt=Object.prototype.hasOwnProperty,Tt=s.unstable_scheduleCallback,Lt=s.unstable_cancelCallback,Ye=s.unstable_shouldYield,L=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,de=s.unstable_NormalPriority,We=s.unstable_LowPriority,De=s.unstable_IdlePriority,Qe=s.log,nt=s.unstable_setDisableYieldValue,Ae=null,Ee=null;function Fe(e){if(typeof Qe=="function"&&nt(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Ae,e)}catch{}}var Oe=Math.clz32?Math.clz32:W,Ie=Math.log,ft=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ie(e)/ft|0)|0}var we=256,Re=262144,Be=4194304;function be(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?c=be(o):(S&=A,S!==0?c=be(S):a||(a=A&~e,a!==0&&(c=be(a))))):(A=o&~d,A!==0?c=be(A):S!==0?c=be(S):a||(a=o&~e,a!==0&&(c=be(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function He(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function at(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,n,a,o,c,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,ee=e.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-Oe(a),Se=1<<pe;A[pe]=0,B[pe]=-1;var ae=ee[pe];if(ae!==null)for(ee[pe]=null,pe=0;pe<ae.length;pe++){var le=ae[pe];le!==null&&(le.lane&=-536870913)}a&=~Se}o!==0&&Ys(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function Ys(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Oe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Oe(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function sl(e,n){var a=n&-n;return a=(a&42)!==0?1:Hr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Hr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:V0(e.type))}function Vr(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var gi=Math.random().toString(36).slice(2),rn="__reactFiber$"+gi,pn="__reactProps$"+gi,qi="__reactContainer$"+gi,Ra="__reactEvents$"+gi,ol="__reactListeners$"+gi,ll="__reactHandles$"+gi,ul="__reactResources$"+gi,ur="__reactMarker$"+gi;function js(e){delete e[rn],delete e[pn],delete e[Ra],delete e[ol],delete e[ll]}function Ca(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[qi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=A0(e);e!==null;){if(a=e[rn])return a;e=A0(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[rn]||e[qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function cr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function R(e){var n=e[ul];return n||(n=e[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[ur]=!0}var se=new Set,ie={};function Q(e,n){Ue(e,n),Ue(e+"Capture",n)}function Ue(e,n){for(ie[e]=n,e=0;e<n.length;e++)se.add(n[e])}var ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ne={},qe={};function Ze(e){return Wt.call(qe,e)?!0:Wt.call(Ne,e)?!1:ze.test(e)?qe[e]=!0:(Ne[e]=!0,!1)}function it(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function st(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ve(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ct(e){if(!e._valueTracker){var n=Zt(e)?"checked":"value";e._valueTracker=Kt(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Zt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Xe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function rt(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(e,n,a,o,c,d,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+dt(n)):e.value!==""+dt(n)&&(e.value=""+dt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?_i(e,S,dt(n)):a!=null?_i(e,S,dt(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+dt(A):e.removeAttribute("name")}function Wn(e,n,a,o,c,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ct(e);return}a=a!=null?""+dt(a):"",n=n!=null?""+dt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ct(e)}function _i(e,n,a){n==="number"&&Xe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ot(e,n,a){if(n!=null&&(n=""+dt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+dt(a):""}function sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Z(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=dt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ct(e)}function Ln(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yi(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&vi(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&vi(e,d,n[d])}function kr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var uc=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,Wr=null;function _p(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[pn]||null;if(!c)throw Error(r(90));Nn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&mn(o)}break e;case"textarea":Ot(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&qn(e,!!a.multiple,n,!1)}}}var fc=!1;function vp(e,n,a){if(fc)return e(n,a);fc=!0;try{var o=e(n);return o}finally{if(fc=!1,(Xr!==null||Wr!==null)&&(Ql(),Xr&&(n=Xr,e=Wr,Wr=Xr=null,_p(n),e)))for(n=0;n<e.length;n++)_p(e[n])}}function Zs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dc=!1;if(Zi)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{dc=!1}var Da=null,hc=null,fl=null;function xp(){if(fl)return fl;var e,n=hc,a=n.length,o,c="value"in Da?Da.value:Da.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[d-o];o++);return fl=c.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Sp(){return!1}function In(e){function n(a,o,c,d,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hl:Sp,this.isPropagationStopped=Sp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=In(fr),Qs=_({},fr,{view:0,detail:0}),ox=In(Qs),pc,mc,Js,ml=_({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Js&&(Js&&e.type==="mousemove"?(pc=e.screenX-Js.screenX,mc=e.screenY-Js.screenY):mc=pc=0,Js=e),pc)},movementY:function(e){return"movementY"in e?e.movementY:mc}}),yp=In(ml),lx=_({},ml,{dataTransfer:0}),ux=In(lx),cx=_({},Qs,{relatedTarget:0}),gc=In(cx),fx=_({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=In(fx),hx=_({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),px=In(hx),mx=_({},fr,{data:0}),Mp=In(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vx[e])?!!n[e]:!1}function _c(){return xx}var Sx=_({},Qs,{key:function(e){if(e.key){var n=gx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yx=In(Sx),Mx=_({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=In(Mx),Ex=_({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),bx=In(Ex),Tx=_({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=In(Tx),Rx=_({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=In(Rx),wx=_({},fr,{newState:0,oldState:0}),Dx=In(wx),Ux=[9,13,27,32],vc=Zi&&"CompositionEvent"in window,$s=null;Zi&&"documentMode"in document&&($s=document.documentMode);var Nx=Zi&&"TextEvent"in window&&!$s,bp=Zi&&(!vc||$s&&8<$s&&11>=$s),Tp=" ",Ap=!1;function Rp(e,n){switch(e){case"keyup":return Ux.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function Lx(e,n){switch(e){case"compositionend":return Cp(n);case"keypress":return n.which!==32?null:(Ap=!0,Tp);case"textInput":return e=n.data,e===Tp&&Ap?null:e;default:return null}}function Ox(e,n){if(qr)return e==="compositionend"||!vc&&Rp(e,n)?(e=xp(),fl=hc=Da=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Px[e.type]:n==="textarea"}function Dp(e,n,a,o){Xr?Wr?Wr.push(o):Wr=[o]:Xr=o,n=au(n,"onChange"),0<n.length&&(a=new pl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,to=null;function Fx(e){d0(e,0)}function gl(e){var n=cr(e);if(mn(n))return e}function Up(e,n){if(e==="change")return n}var Np=!1;if(Zi){var xc;if(Zi){var Sc="oninput"in document;if(!Sc){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Sc=typeof Lp.oninput=="function"}xc=Sc}else xc=!1;Np=xc&&(!document.documentMode||9<document.documentMode)}function Op(){eo&&(eo.detachEvent("onpropertychange",Pp),to=eo=null)}function Pp(e){if(e.propertyName==="value"&&gl(to)){var n=[];Dp(n,to,e,cc(e)),vp(Fx,n)}}function Ix(e,n,a){e==="focusin"?(Op(),eo=n,to=a,eo.attachEvent("onpropertychange",Pp)):e==="focusout"&&Op()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(to)}function zx(e,n){if(e==="click")return gl(n)}function Hx(e,n){if(e==="input"||e==="change")return gl(n)}function Gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Gx;function no(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Wt.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ip(e,n){var a=Fp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fp(a)}}function Bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Xe(e.document)}return n}function yc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vx=Zi&&"documentMode"in document&&11>=document.documentMode,Yr=null,Mc=null,io=null,Ec=!1;function Hp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Yr==null||Yr!==Xe(o)||(o=Yr,"selectionStart"in o&&yc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=au(Mc,"onSelect"),0<o.length&&(n=new pl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Yr)))}function dr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var jr={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},bc={},Gp={};Zi&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function hr(e){if(bc[e])return bc[e];if(!jr[e])return e;var n=jr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gp)return bc[e]=n[a];return e}var Vp=hr("animationend"),kp=hr("animationiteration"),Xp=hr("animationstart"),kx=hr("transitionrun"),Xx=hr("transitionstart"),Wx=hr("transitioncancel"),Wp=hr("transitionend"),qp=new Map,Tc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tc.push("scrollEnd");function xi(e,n){qp.set(e,n),Q(n,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Zr=0,Ac=0;function vl(){for(var e=Zr,n=Ac=Zr=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}d!==0&&Yp(a,c,d)}}function xl(e,n,a,o){ii[Zr++]=e,ii[Zr++]=n,ii[Zr++]=a,ii[Zr++]=o,Ac|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Rc(e,n,a,o){return xl(e,n,a,o),Sl(e)}function pr(e,n){return xl(e,null,null,n),Sl(e)}function Yp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-Oe(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function Sl(e){if(50<Ao)throw Ao=0,If=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Kr={};function qx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new qx(e,n,a,o)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,o,c,d){var S=0;if(o=e,typeof e=="function")Cc(e)&&(S=1);else if(typeof e=="string")S=QS(e,a,Ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case U:return e=jn(31,a,n,c),e.elementType=U,e.lanes=d,e;case C:return mr(a.children,c,d,n);case x:S=8,c|=24;break;case y:return e=jn(12,a,n,c|2),e.elementType=y,e.lanes=d,e;case H:return e=jn(13,a,n,c),e.elementType=H,e.lanes=d,e;case z:return e=jn(19,a,n,c),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break e;case w:S=9;break e;case N:S=11;break e;case F:S=14;break e;case T:S=16,o=null;break e}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=jn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function mr(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function wc(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Zp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function Dc(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Kp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=Kp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Kp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Qr=[],Jr=0,Ml=null,ao=0,ri=[],si=0,Ua=null,Di=1,Ui="";function Qi(e,n){Qr[Jr++]=ao,Qr[Jr++]=Ml,Ml=e,ao=n}function Qp(e,n,a){ri[si++]=Di,ri[si++]=Ui,ri[si++]=Ua,Ua=e;var o=Di;e=Ui;var c=32-Oe(o)-1;o&=~(1<<c),a+=1;var d=32-Oe(n)+c;if(30<d){var S=c-c%5;d=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Di=1<<32-Oe(n)+c|a<<c|o,Ui=d+e}else Di=1<<d|a<<c|o,Ui=e}function Uc(e){e.return!==null&&(Qi(e,1),Qp(e,1,0))}function Nc(e){for(;e===Ml;)Ml=Qr[--Jr],Qr[Jr]=null,ao=Qr[--Jr],Qr[Jr]=null;for(;e===Ua;)Ua=ri[--si],ri[si]=null,Ui=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null}function Jp(e,n){ri[si++]=Di,ri[si++]=Ui,ri[si++]=Ua,Di=n.id,Ui=n.overflow,Ua=e}var yn=null,Yt=null,Mt=!1,Na=null,oi=!1,Lc=Error(r(519));function La(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(ai(n,e)),Lc}function $p(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[pn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)xt(Co[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Wn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),sn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||g0(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||La(e,!0)}function em(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:yn=yn.return}}function $r(e){if(e!==yn)return!1;if(!Mt)return em(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Jf(e.type,e.memoizedProps)),a=!a),a&&Yt&&La(e),em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=T0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=T0(e)}else n===27?(n=Yt,Ya(e.type)?(e=id,id=null,Yt=e):Yt=n):Yt=yn?ui(e.stateNode.nextSibling):null;return!0}function gr(){Yt=yn=null,Mt=!1}function Oc(){var e=Na;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Na=null),e}function ro(e){Na===null?Na=[e]:Na.push(e)}var Pc=P(null),_r=null,Ji=null;function Oa(e,n,a){ve(Pc,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Pc.current,Y(Pc)}function Fc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ic(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var S=c.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Fc(d.return,a,e),o||(S=null);break e}d=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Fc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function es(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;Yn(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===xe.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}c=c.return}e!==null&&Ic(n,e,a,o),n.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vr(e){_r=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return tm(_r,e)}function bl(e,n){return _r===null&&vr(e),tm(e,n)}function tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(r(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var Yx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},jx=s.unstable_scheduleCallback,Zx=s.unstable_NormalPriority,ln={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bc(){return{controller:new Yx,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&jx(Zx,function(){e.controller.abort()})}var oo=null,zc=0,ts=0,ns=null;function Kx(e,n){if(oo===null){var a=oo=[];zc=0,ts=kf(),ns={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zc++,n.then(nm,nm),n}function nm(){if(--zc===0&&oo!==null){ns!==null&&(ns.status="fulfilled");var e=oo;oo=null,ts=0,ns=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Qx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var im=O.S;O.S=function(e,n){Hg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kx(e,n),im!==null&&im(e,n)};var xr=P(null);function Hc(){var e=xr.current;return e!==null?e:Xt.pooledCache}function Tl(e,n){n===null?ve(xr,xr.current):ve(xr,n.pool)}function am(){var e=Hc();return e===null?null:{parent:ln._currentValue,pool:e}}var is=Error(r(460)),Gc=Error(r(474)),Al=Error(r(542)),Rl={then:function(){}};function rm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lm(e),e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lm(e),e}throw yr=n,is}}function Sr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(yr=a,is):a}}var yr=null;function om(){if(yr===null)throw Error(r(459));var e=yr;return yr=null,e}function lm(e){if(e===is||e===Al)throw Error(r(483))}var as=null,lo=0;function Cl(e){var n=lo;return lo+=1,as===null&&(as=[]),sm(as,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function um(e){function n(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Ki(j,k),j.index=0,j.sibling=null,j}function d(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,$,_e){return k===null||k.tag!==6?(k=wc($,j.mode,_e),k.return=j,k):(k=c(k,$),k.return=j,k)}function B(j,k,$,_e){var $e=$.type;return $e===C?pe(j,k,$.props.children,_e,$.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&Sr($e)===k.type)?(k=c(k,$.props),uo(k,$),k.return=j,k):(k=yl($.type,$.key,$.props,null,j.mode,_e),uo(k,$),k.return=j,k)}function ee(j,k,$,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Dc($,j.mode,_e),k.return=j,k):(k=c(k,$.children||[]),k.return=j,k)}function pe(j,k,$,_e,$e){return k===null||k.tag!==7?(k=mr($,j.mode,_e,$e),k.return=j,k):(k=c(k,$),k.return=j,k)}function Se(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wc(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=yl(k.type,k.key,k.props,null,j.mode,$),uo($,k),$.return=j,$;case b:return k=Dc(k,j.mode,$),k.return=j,k;case T:return k=Sr(k),Se(j,k,$)}if(Z(k)||J(k))return k=mr(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return Se(j,Cl(k),$);if(k.$$typeof===D)return Se(j,bl(j,k),$);wl(j,k)}return null}function ae(j,k,$,_e){var $e=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $e!==null?null:A(j,k,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===$e?B(j,k,$,_e):null;case b:return $.key===$e?ee(j,k,$,_e):null;case T:return $=Sr($),ae(j,k,$,_e)}if(Z($)||J($))return $e!==null?null:pe(j,k,$,_e,null);if(typeof $.then=="function")return ae(j,k,Cl($),_e);if($.$$typeof===D)return ae(j,k,bl(j,$),_e);wl(j,$)}return null}function le(j,k,$,_e,$e){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get($)||null,A(k,j,""+_e,$e);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case M:return j=j.get(_e.key===null?$:_e.key)||null,B(k,j,_e,$e);case b:return j=j.get(_e.key===null?$:_e.key)||null,ee(k,j,_e,$e);case T:return _e=Sr(_e),le(j,k,$,_e,$e)}if(Z(_e)||J(_e))return j=j.get($)||null,pe(k,j,_e,$e,null);if(typeof _e.then=="function")return le(j,k,$,Cl(_e),$e);if(_e.$$typeof===D)return le(j,k,$,bl(k,_e),$e);wl(k,_e)}return null}function ke(j,k,$,_e){for(var $e=null,wt=null,je=k,ht=k=0,yt=null;je!==null&&ht<$.length;ht++){je.index>ht?(yt=je,je=null):yt=je.sibling;var Dt=ae(j,je,$[ht],_e);if(Dt===null){je===null&&(je=yt);break}e&&je&&Dt.alternate===null&&n(j,je),k=d(Dt,k,ht),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt,je=yt}if(ht===$.length)return a(j,je),Mt&&Qi(j,ht),$e;if(je===null){for(;ht<$.length;ht++)je=Se(j,$[ht],_e),je!==null&&(k=d(je,k,ht),wt===null?$e=je:wt.sibling=je,wt=je);return Mt&&Qi(j,ht),$e}for(je=o(je);ht<$.length;ht++)yt=le(je,j,ht,$[ht],_e),yt!==null&&(e&&yt.alternate!==null&&je.delete(yt.key===null?ht:yt.key),k=d(yt,k,ht),wt===null?$e=yt:wt.sibling=yt,wt=yt);return e&&je.forEach(function(Ja){return n(j,Ja)}),Mt&&Qi(j,ht),$e}function tt(j,k,$,_e){if($==null)throw Error(r(151));for(var $e=null,wt=null,je=k,ht=k=0,yt=null,Dt=$.next();je!==null&&!Dt.done;ht++,Dt=$.next()){je.index>ht?(yt=je,je=null):yt=je.sibling;var Ja=ae(j,je,Dt.value,_e);if(Ja===null){je===null&&(je=yt);break}e&&je&&Ja.alternate===null&&n(j,je),k=d(Ja,k,ht),wt===null?$e=Ja:wt.sibling=Ja,wt=Ja,je=yt}if(Dt.done)return a(j,je),Mt&&Qi(j,ht),$e;if(je===null){for(;!Dt.done;ht++,Dt=$.next())Dt=Se(j,Dt.value,_e),Dt!==null&&(k=d(Dt,k,ht),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt);return Mt&&Qi(j,ht),$e}for(je=o(je);!Dt.done;ht++,Dt=$.next())Dt=le(je,j,ht,Dt.value,_e),Dt!==null&&(e&&Dt.alternate!==null&&je.delete(Dt.key===null?ht:Dt.key),k=d(Dt,k,ht),wt===null?$e=Dt:wt.sibling=Dt,wt=Dt);return e&&je.forEach(function(ly){return n(j,ly)}),Mt&&Qi(j,ht),$e}function kt(j,k,$,_e){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var $e=$.key;k!==null;){if(k.key===$e){if($e=$.type,$e===C){if(k.tag===7){a(j,k.sibling),_e=c(k,$.props.children),_e.return=j,j=_e;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===T&&Sr($e)===k.type){a(j,k.sibling),_e=c(k,$.props),uo(_e,$),_e.return=j,j=_e;break e}a(j,k);break}else n(j,k);k=k.sibling}$.type===C?(_e=mr($.props.children,j.mode,_e,$.key),_e.return=j,j=_e):(_e=yl($.type,$.key,$.props,null,j.mode,_e),uo(_e,$),_e.return=j,j=_e)}return S(j);case b:e:{for($e=$.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),_e=c(k,$.children||[]),_e.return=j,j=_e;break e}else{a(j,k);break}else n(j,k);k=k.sibling}_e=Dc($,j.mode,_e),_e.return=j,j=_e}return S(j);case T:return $=Sr($),kt(j,k,$,_e)}if(Z($))return ke(j,k,$,_e);if(J($)){if($e=J($),typeof $e!="function")throw Error(r(150));return $=$e.call($),tt(j,k,$,_e)}if(typeof $.then=="function")return kt(j,k,Cl($),_e);if($.$$typeof===D)return kt(j,k,bl(j,$),_e);wl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),_e=c(k,$),_e.return=j,j=_e):(a(j,k),_e=wc($,j.mode,_e),_e.return=j,j=_e),S(j)):a(j,k)}return function(j,k,$,_e){try{lo=0;var $e=kt(j,k,$,_e);return as=null,$e}catch(je){if(je===is||je===Al)throw je;var wt=jn(29,je,null,j.mode);return wt.lanes=_e,wt.return=j,wt}}}var Mr=um(!0),cm=um(!1),Pa=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ia(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Sl(e),Yp(e,null,a),n}return xl(e,o,n,a),Sl(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zr(e,a)}}function Xc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Wc=!1;function fo(){if(Wc){var e=ns;if(e!==null)throw e}}function ho(e,n,a,o){Wc=!1;var c=e.updateQueue;Pa=!1;var d=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,ee=B.next;B.next=null,S===null?d=ee:S.next=ee,S=B;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==S&&(A===null?pe.firstBaseUpdate=ee:A.next=ee,pe.lastBaseUpdate=B))}if(d!==null){var Se=c.baseState;S=0,pe=ee=B=null,A=d;do{var ae=A.lane&-536870913,le=ae!==A.lane;if(le?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===ts&&(Wc=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ke=e,tt=A;ae=n;var kt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){Se=ke.call(kt,Se,ae);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ae=typeof ke=="function"?ke.call(kt,Se,ae):ke,ae==null)break e;Se=_({},Se,ae);break e;case 2:Pa=!0}}ae=A.callback,ae!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(ee=pe=le,B=Se):pe=pe.next=le,S|=ae;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;le=A,A=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);pe===null&&(B=Se),c.baseState=B,c.firstBaseUpdate=ee,c.lastBaseUpdate=pe,d===null&&(c.shared.lanes=0),Va|=S,e.lanes=S,e.memoizedState=Se}}function fm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function dm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fm(a[e],n)}var rs=P(null),Dl=P(0);function hm(e,n){e=la,ve(Dl,e),ve(rs,n),la=e|n.baseLanes}function qc(){ve(Dl,la),ve(rs,rs.current)}function Yc(){la=Dl.current,Y(rs),Y(Dl)}var Zn=P(null),li=null;function Ba(e){var n=e.alternate;ve(tn,tn.current&1),ve(Zn,e),li===null&&(n===null||rs.current!==null||n.memoizedState!==null)&&(li=e)}function jc(e){ve(tn,tn.current),ve(Zn,e),li===null&&(li=e)}function pm(e){e.tag===22?(ve(tn,tn.current),ve(Zn,e),li===null&&(li=e)):za()}function za(){ve(tn,tn.current),ve(Zn,Zn.current)}function Kn(e){Y(Zn),li===e&&(li=null),Y(tn)}var tn=P(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||td(a)||nd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ut=null,Gt=null,un=null,Nl=!1,ss=!1,Er=!1,Ll=0,po=0,os=null,Jx=0;function $t(){throw Error(r(321))}function Zc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Kc(e,n,a,o,c,d){return ea=d,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Qm:df,Er=!1,d=a(o,c),Er=!1,ss&&(d=gm(n,a,o,c)),mm(e),d}function mm(e){O.H=_o;var n=Gt!==null&&Gt.next!==null;if(ea=0,un=Gt=ut=null,Nl=!1,po=0,os=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&El(e)&&(cn=!0))}function gm(e,n,a,o){ut=e;var c=0;do{if(ss&&(os=null),po=0,ss=!1,25<=c)throw Error(r(301));if(c+=1,un=Gt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Jm,d=n(a,o)}while(ss);return d}function $x(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?mo(n):n,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(ut.flags|=1024),n}function Qc(){var e=Ll!==0;return Ll=0,e}function Jc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $c(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}ea=0,un=Gt=ut=null,ss=!1,po=Ll=0,os=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ut.memoizedState=un=e:un=un.next=e,un}function nn(){if(Gt===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var n=un===null?ut.memoizedState:un.next;if(n!==null)un=n,Gt=e;else{if(e===null)throw ut.alternate===null?Error(r(467)):Error(r(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?ut.memoizedState=un=e:un=un.next=e}return un}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(e){var n=po;return po+=1,os===null&&(os=[]),e=sm(os,e,n),n=ut,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Qm:df),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mo(e);if(e.$$typeof===D)return Mn(e)}throw Error(r(438,String(e)))}function ef(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ut.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ol(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=he;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=nn();return tf(n,Gt,e)}function tf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var S=c.next;c.next=d.next,d.next=S}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var A=S=null,B=null,ee=n,pe=!1;do{var Se=ee.lane&-536870913;if(Se!==ee.lane?(St&Se)===Se:(ea&Se)===Se){var ae=ee.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Se===ts&&(pe=!0);else if((ea&ae)===ae){ee=ee.next,ae===ts&&(pe=!0);continue}else Se={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=Se,S=d):B=B.next=Se,ut.lanes|=ae,Va|=ae;Se=ee.action,Er&&a(d,Se),d=ee.hasEagerState?ee.eagerState:a(d,Se)}else ae={lane:Se,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=ae,S=d):B=B.next=ae,ut.lanes|=Se,Va|=Se;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?S=d:B.next=A,!Yn(d,e.memoizedState)&&(cn=!0,pe&&(a=ns,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=B,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nf(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do d=e(d,S.action),S=S.next;while(S!==c);Yn(d,n.memoizedState)||(cn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function _m(e,n,a){var o=ut,c=nn(),d=Mt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((Gt||c).memoizedState,a);if(S&&(c.memoizedState=a,cn=!0),c=c.queue,sf(Sm.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ls(9,{destroy:void 0},xm.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));d||(ea&127)!==0||vm(o,n,a)}return a}function vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=Ol(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function xm(e,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Mm(e)}function Sm(e,n,a){return a(function(){ym(n)&&Mm(e)})}function ym(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Mm(e){var n=pr(e,2);n!==null&&Vn(n,e,2)}function af(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),Er){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function Em(e,n,a,o){return e.baseState=a,tf(e,Gt,typeof o=="function"?o:ta)}function eS(e,n,a,o,c){if(zl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,bm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function bm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=O.T,S={};O.T=S;try{var A=a(c,o),B=O.S;B!==null&&B(S,A),Tm(e,n,A)}catch(ee){rf(e,n,ee)}finally{d!==null&&S.types!==null&&(d.types=S.types),O.T=d}}else try{d=a(c,o),Tm(e,n,d)}catch(ee){rf(e,n,ee)}}function Tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Am(e,n,o)},function(o){return rf(e,n,o)}):Am(e,n,a)}function Am(e,n,a){n.status="fulfilled",n.value=a,Rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function rf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Rm(n),n=n.next;while(n!==o)}e.action=null}function Rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cm(e,n){return n}function wm(e,n){if(Mt){var a=Xt.formState;if(a!==null){e:{var o=ut;if(Mt){if(Yt){t:{for(var c=Yt,d=oi;c.nodeType!==8;){if(!d){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Yt=ui(c.nextSibling),o=c.data==="F!";break e}}La(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:n},a.queue=o,a=jm.bind(null,ut,o),o.dispatch=a,o=af(!1),d=ff.bind(null,ut,!1,o.queue),o=On(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=eS.bind(null,ut,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Dm(e){var n=nn();return Um(n,Gt,e)}function Um(e,n,a){if(n=tf(e,n,Cm)[0],e=Fl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(S){throw S===is?Al:S}else o=n;n=nn();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,ls(9,{destroy:void 0},tS.bind(null,c,a),null)),[o,d,e]}function tS(e,n){e.action=n}function Nm(e){var n=nn(),a=Gt;if(a!==null)return Um(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ls(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ut.updateQueue,n===null&&(n=Ol(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Lm(){return nn().memoizedState}function Il(e,n,a,o){var c=On();ut.flags|=e,c.memoizedState=ls(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var c=nn();o=o===void 0?null:o;var d=c.memoizedState.inst;Gt!==null&&o!==null&&Zc(o,Gt.memoizedState.deps)?c.memoizedState=ls(n,d,a,o):(ut.flags|=e,c.memoizedState=ls(1|n,d,a,o))}function Om(e,n){Il(8390656,8,e,n)}function sf(e,n){Bl(2048,8,e,n)}function nS(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=Ol(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Pm(e){var n=nn().memoizedState;return nS({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Fm(e,n){return Bl(4,2,e,n)}function Im(e,n){return Bl(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zm(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Bm.bind(null,n,e),a)}function of(){}function Hm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Zc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Gm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Zc(n,o[1]))return o[0];if(o=e(),Er){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[o,n],o}function lf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Vg(),ut.lanes|=e,Va|=e,a)}function Vm(e,n,a,o){return Yn(a,n)?a:rs.current!==null?(e=lf(e,a,o),Yn(e,n)||(cn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(St&261930)===0?(cn=!0,e.memoizedState=a):(e=Vg(),ut.lanes|=e,Va|=e,n)}function km(e,n,a,o,c){var d=I.p;I.p=d!==0&&8>d?d:8;var S=O.T,A={};O.T=A,ff(e,!1,n,a);try{var B=c(),ee=O.S;if(ee!==null&&ee(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=Qx(B,o);go(e,n,pe,$n(e))}else go(e,n,o,$n(e))}catch(Se){go(e,n,{then:function(){},status:"rejected",reason:Se},$n())}finally{I.p=d,S!==null&&A.types!==null&&(S.types=A.types),O.T=S}}function iS(){}function uf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=Xm(e).queue;km(e,c,n,oe,a===null?iS:function(){return Wm(e),a(o)})}function Xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wm(e){var n=Xm(e);n.next===null&&(n=e.alternate.memoizedState),go(e,n.next.queue,{},$n())}function cf(){return Mn(Lo)}function qm(){return nn().memoizedState}function Ym(){return nn().memoizedState}function aS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Fa(a);var o=Ia(n,e,a);o!==null&&(Vn(o,n,a),co(o,n,a)),n={cache:Bc()},e.payload=n;return}n=n.return}}function rS(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Zm(n,a):(a=Rc(e,n,a,o),a!==null&&(Vn(a,e,o),Km(a,n,o)))}function jm(e,n,a){var o=$n();go(e,n,a,o)}function go(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Zm(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,a);if(c.hasEagerState=!0,c.eagerState=A,Yn(A,S))return xl(e,n,c,0),Xt===null&&vl(),!1}catch{}if(a=Rc(e,n,c,o),a!==null)return Vn(a,e,o),Km(a,n,o),!0}return!1}function ff(e,n,a,o){if(o={lane:2,revertLane:kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(r(479))}else n=Rc(e,a,o,2),n!==null&&Vn(n,e,2)}function zl(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function Zm(e,n){ss=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Km(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zr(e,a)}}var _o={readContext:Mn,use:Pl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};_o.useEffectEvent=$t;var Qm={readContext:Mn,use:Pl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(Er){Fe(!0);try{e()}finally{Fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var c=a(n);if(Er){Fe(!0);try{a(n)}finally{Fe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=rS.bind(null,ut,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=af(e);var n=e.queue,a=jm.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:of,useDeferredValue:function(e,n){var a=On();return lf(a,e,n)},useTransition:function(){var e=af(!1);return e=km.bind(null,ut,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ut,c=On();if(Mt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(St&127)!==0||vm(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,Om(Sm.bind(null,o,d,e),[e]),o.flags|=2048,ls(9,{destroy:void 0},xm.bind(null,o,d,a,n),null),a},useId:function(){var e=On(),n=Xt.identifierPrefix;if(Mt){var a=Ui,o=Di;a=(o&~(1<<32-Oe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:cf,useFormState:wm,useActionState:wm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:ef,useCacheRefresh:function(){return On().memoizedState=aS.bind(null,ut)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},df={readContext:Mn,use:Pl,useCallback:Hm,useContext:Mn,useEffect:sf,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Im,useMemo:Gm,useReducer:Fl,useRef:Lm,useState:function(){return Fl(ta)},useDebugValue:of,useDeferredValue:function(e,n){var a=nn();return Vm(a,Gt.memoizedState,e,n)},useTransition:function(){var e=Fl(ta)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:_m,useId:qm,useHostTransitionStatus:cf,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,n){var a=nn();return Em(a,Gt,e,n)},useMemoCache:ef,useCacheRefresh:Ym};df.useEffectEvent=Pm;var Jm={readContext:Mn,use:Pl,useCallback:Hm,useContext:Mn,useEffect:sf,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Im,useMemo:Gm,useReducer:nf,useRef:Lm,useState:function(){return nf(ta)},useDebugValue:of,useDeferredValue:function(e,n){var a=nn();return Gt===null?lf(a,e,n):Vm(a,Gt.memoizedState,e,n)},useTransition:function(){var e=nf(ta)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:mo(e),n]},useSyncExternalStore:_m,useId:qm,useHostTransitionStatus:cf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=nn();return Gt!==null?Em(a,Gt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Ym};Jm.useEffectEvent=Pm;function hf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Fa(o);c.payload=n,a!=null&&(c.callback=a),n=Ia(e,c,o),n!==null&&(Vn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ia(e,c,o),n!==null&&(Vn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ia(e,o,a),n!==null&&(Vn(n,e,a),co(n,e,a))}};function $m(e,n,a,o,c,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!no(a,o)||!no(c,d):!0}function eg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&pf.enqueueReplaceState(n,n.state,null)}function br(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function tg(e){_l(e)}function ng(e){console.error(e)}function ig(e){_l(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ag(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function mf(e,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function rg(e){return e=Fa(e),e.tag=3,e}function sg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){ag(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){ag(n,a,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function sS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&es(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Jl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hf(e,o,c)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hf(e,o,c)),!1}throw Error(r(435,a.tag))}return Hf(e,o,c),Jl(),!1}if(Mt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Lc&&(e=Error(r(422),{cause:o}),ro(ai(e,a)))):(o!==Lc&&(n=Error(r(423),{cause:o}),ro(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ai(o,a),c=mf(e.stateNode,o,c),Xc(e,c),en!==4&&(en=2)),!1;var d=Error(r(520),{cause:o});if(d=ai(d,a),To===null?To=[d]:To.push(d),en!==4&&(en=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=mf(a.stateNode,o,e),Xc(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ka===null||!ka.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=rg(c),sg(c,e,a,o),Xc(a,c),!1}a=a.return}while(a!==null);return!1}var gf=Error(r(461)),cn=!1;function En(e,n,a,o){n.child=e===null?cm(n,null,a,o):Mr(n,e.child,a,o)}function og(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return vr(n),o=Kc(e,n,a,S,d,c),A=Qc(),e!==null&&!cn?(Jc(e,n,c),na(e,n,c)):(Mt&&A&&Uc(n),n.flags|=1,En(e,n,o,c),n.child)}function lg(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!Cc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,ug(e,n,d,o,c)):(e=yl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!bf(e,c)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(S,o)&&e.ref===n.ref)return na(e,n,c)}return n.flags|=1,e=Ki(d,o),e.ref=n.ref,e.return=n,n.child=e}function ug(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(no(d,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=d,bf(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,na(e,n,c)}return _f(e,n,a,o,c)}function cg(e,n,a,o){var c=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return fg(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(n,d!==null?d.cachePool:null),d!==null?hm(n,d):qc(),pm(n);else return o=n.lanes=536870912,fg(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Tl(n,d.cachePool),hm(n,d),za(),n.memoizedState=null):(e!==null&&Tl(n,null),qc(),za());return En(e,n,c,a),n.child}function vo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fg(e,n,a,o,c){var d=Hc();return d=d===null?null:{parent:ln._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Tl(n,null),qc(),pm(n),e!==null&&es(e,n,o,!0),n.childLanes=c,null}function Gl(e,n){return n=kl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function dg(e,n,a){return Mr(n,e.child,null,a),e=Gl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function oS(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(o.mode==="hidden")return e=Gl(n,o),n.lanes=536870912,vo(null,e);if(jc(n),(e=Yt)?(e=b0(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=n,n.child=a,yn=n,Yt=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Gl(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(jc(n),c)if(n.flags&256)n.flags&=-257,n=dg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||es(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(o=Xt,o!==null&&(S=sl(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,pr(e,S),Vn(o,e,S),gf;Jl(),n=dg(e,n,a)}else e=d.treeContext,Yt=ui(S.nextSibling),yn=n,Mt=!0,Na=null,oi=!1,e!==null&&Jp(n,e),n=Gl(n,o),n.flags|=4096;return n}return e=Ki(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function _f(e,n,a,o,c){return vr(n),a=Kc(e,n,a,o,void 0,c),o=Qc(),e!==null&&!cn?(Jc(e,n,c),na(e,n,c)):(Mt&&o&&Uc(n),n.flags|=1,En(e,n,a,c),n.child)}function hg(e,n,a,o,c,d){return vr(n),n.updateQueue=null,a=gm(n,o,a,c),mm(e),o=Qc(),e!==null&&!cn?(Jc(e,n,d),na(e,n,d)):(Mt&&o&&Uc(n),n.flags|=1,En(e,n,a,d),n.child)}function pg(e,n,a,o,c){if(vr(n),n.stateNode===null){var d=Kr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Mn(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Vc(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Mn(S):Kr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(hf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&pf.enqueueReplaceState(d,d.state,null),ho(n,o,d,c),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,B=br(a,A);d.props=B;var ee=d.context,pe=a.contextType;S=Kr,typeof pe=="object"&&pe!==null&&(S=Mn(pe));var Se=a.getDerivedStateFromProps;pe=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||ee!==S)&&eg(n,d,o,S),Pa=!1;var ae=n.memoizedState;d.state=ae,ho(n,o,d,c),fo(),ee=n.memoizedState,A||ae!==ee||Pa?(typeof Se=="function"&&(hf(n,a,Se,o),ee=n.memoizedState),(B=Pa||$m(n,a,B,o,ae,ee,S))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),d.props=o,d.state=ee,d.context=S,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,kc(e,n),S=n.memoizedProps,pe=br(a,S),d.props=pe,Se=n.pendingProps,ae=d.context,ee=a.contextType,B=Kr,typeof ee=="object"&&ee!==null&&(B=Mn(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Se||ae!==B)&&eg(n,d,o,B),Pa=!1,ae=n.memoizedState,d.state=ae,ho(n,o,d,c),fo();var le=n.memoizedState;S!==Se||ae!==le||Pa||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof A=="function"&&(hf(n,a,A,o),le=n.memoizedState),(pe=Pa||$m(n,a,pe,o,ae,le,B)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=B,o=pe):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Vl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Mr(n,e.child,null,c),n.child=Mr(n,null,a,c)):En(e,n,a,c),n.memoizedState=d.state,e=n.child):e=na(e,n,c),e}function mg(e,n,a,o){return gr(),n.flags|=256,En(e,n,a,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:am()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function gg(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?Ba(n):za(),(e=Yt)?(e=b0(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=n,n.child=a,yn=n,Yt=null)):e=null,e===null)throw La(n);return nd(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,c?(za(),c=n.mode,A=kl({mode:"hidden",children:A},c),o=mr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(e,S,a),n.memoizedState=vf,vo(null,o)):(Ba(n),yf(n,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(d)n.flags&256?(Ba(n),n.flags&=-257,n=Mf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),A=o.fallback,c=n.mode,o=kl({mode:"visible",children:o.children},c),A=mr(A,c,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Mr(n,e.child,null,a),o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(e,S,a),n.memoizedState=vf,n=vo(null,o));else if(Ba(n),nd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(r(419)),o.stack="",o.digest=S,ro({value:o,source:null,stack:null}),n=Mf(e,n,a)}else if(cn||es(e,n,a,!1),S=(a&e.childLanes)!==0,cn||S){if(S=Xt,S!==null&&(o=sl(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,pr(e,o),Vn(S,e,o),gf;td(A)||Jl(),n=Mf(e,n,a)}else td(A)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Yt=ui(A.nextSibling),yn=n,Mt=!0,Na=null,oi=!1,e!==null&&Jp(n,e),n=yf(n,o.children),n.flags|=4096);return n}return c?(za(),A=o.fallback,c=n.mode,B=e.child,ee=B.sibling,o=Ki(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?A=Ki(ee,A):(A=mr(A,c,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=xf(a):(c=A.cachePool,c!==null?(B=ln._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=am(),A={baseLanes:A.baseLanes|a,cachePool:c}),o.memoizedState=A,o.childLanes=Sf(e,S,a),n.memoizedState=vf,vo(e.child,o)):(Ba(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function yf(e,n){return n=kl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function kl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function Mf(e,n,a){return Mr(n,e.child,null,a),e=yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _g(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Fc(e.return,n,a)}function Ef(e,n,a,o,c,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=d)}function vg(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var S=tn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,ve(tn,S),En(e,n,o,a),o=Mt?ao:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_g(e,a,n);else if(e.tag===19)_g(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ef(n,!1,c,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ul(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ef(n,!0,a,null,d,o);break;case"together":Ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(es(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function lS(e,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Oa(n,ln,e.memoizedState.cache),gr();break;case 27:case 5:Ke(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,jc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gg(e,n,a):(Ba(n),e=na(e,n,a),e!==null?e.sibling:null);Ba(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(es(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return vg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(tn,tn.current),o)break;return null;case 22:return n.lanes=0,cg(e,n,a,n.pendingProps);case 24:Oa(n,ln,e.memoizedState.cache)}return na(e,n,a)}function xg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!bf(e,a)&&(n.flags&128)===0)return cn=!1,lS(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Mt&&(n.flags&1048576)!==0&&Qp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=Sr(n.elementType),n.type=e,typeof e=="function")Cc(e)?(o=br(e,o),n.tag=1,n=pg(null,n,e,o,a)):(n.tag=0,n=_f(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===N){n.tag=11,n=og(null,n,e,o,a);break e}else if(c===F){n.tag=14,n=lg(null,n,e,o,a);break e}}throw n=ue(e)||e,Error(r(306,n,""))}}return n;case 0:return _f(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=br(o,n.pendingProps),pg(e,n,o,c,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,kc(e,n),ho(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Oa(n,ln,o),o!==d.cache&&Ic(n,[ln],a,!0),fo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=mg(e,n,o,a);break e}else if(o!==c){c=ai(Error(r(424)),n),ro(c),n=mg(e,n,o,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Yt=ui(e.firstChild),yn=n,Mt=!0,Na=null,oi=!0,a=cm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gr(),o===c){n=na(e,n,a);break e}En(e,n,o,a)}n=n.child}return n;case 26:return Vl(e,n),e===null?(a=D0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,o=ru(ne.current).createElement(a),o[rn]=n,o[pn]=e,bn(o,a,e),X(o),n.stateNode=o):n.memoizedState=D0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ke(n),e===null&&Mt&&(o=n.stateNode=R0(n.type,n.pendingProps,ne.current),yn=n,oi=!0,c=Yt,Ya(n.type)?(id=c,Yt=ui(o.firstChild)):Yt=c),En(e,n,n.pendingProps.children,a),Vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=o=Yt)&&(o=BS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,yn=n,Yt=ui(o.firstChild),oi=!1,c=!0):c=!1),c||La(n)),Ke(n),c=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,Jf(c,d)?o=null:S!==null&&Jf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Kc(e,n,$x,null,null,a),Lo._currentValue=c),Vl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Mt&&((e=a=Yt)&&(a=zS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,yn=n,Yt=null,e=!0):e=!1),e||La(n)),null;case 13:return gg(e,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Mr(n,null,o,a):En(e,n,o,a),n.child;case 11:return og(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,vr(n),c=Mn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return lg(e,n,n.type,n.pendingProps,a);case 15:return ug(e,n,n.type,n.pendingProps,a);case 19:return vg(e,n,a);case 31:return oS(e,n,a);case 22:return cg(e,n,a,n.pendingProps);case 24:return vr(n),o=Mn(ln),e===null?(c=Hc(),c===null&&(c=Xt,d=Bc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Vc(n),Oa(n,ln,c)):((e.lanes&a)!==0&&(kc(e,n),ho(n,null,null,a),fo()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Oa(n,ln,o)):(o=d.cache,Oa(n,ln,o),o!==c.cache&&Ic(n,[ln],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(e){e.flags|=4}function Tf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(qg())e.flags|=8192;else throw yr=Rl,Gc}else e.flags&=-16777217}function Sg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P0(n))if(qg())e.flags|=8192;else throw yr=Rl,Gc}function Xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ft():536870912,e.lanes|=n,ds|=n)}function xo(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function uS(e,n,a){var o=n.pendingProps;switch(Nc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),$i(ln),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&($r(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Oc())),jt(n),null;case 26:var c=n.type,d=n.memoizedState;return e===null?(ia(n),d!==null?(jt(n),Sg(n,d)):(jt(n),Tf(n,c,null,o,a))):d?d!==e.memoizedState?(ia(n),jt(n),Sg(n,d)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ia(n),jt(n),Tf(n,c,e,o,a)),null;case 27:if(et(n),a=ne.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}e=Ce.current,$r(n)?$p(n):(e=R0(c,o,a),n.stateNode=e,ia(n))}return jt(n),null;case 5:if(et(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(d=Ce.current,$r(n))$p(n);else{var S=ru(ne.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}d[rn]=n,d[pn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(bn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ia(n)}}return jt(n),Tf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ia(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ne.current,$r(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||g0(e.nodeValue,a)),e||La(n,!0)}else e=ru(e).createTextNode(o),e[rn]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=$r(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=$r(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else gr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),jt(n),null);case 4:return Ge(),e===null&&Yf(n.stateNode.containerInfo),jt(n),null;case 10:return $i(n.type),jt(n),null;case 19:if(Y(tn),o=n.memoizedState,o===null)return jt(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)xo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ul(e),d!==null){for(n.flags|=128,xo(o,!1),e=d.updateQueue,n.updateQueue=e,Xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jp(a,e),a=a.sibling;return ve(tn,tn.current&1|2),Mt&&Qi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Zl&&(n.flags|=128,c=!0,xo(o,!1),n.lanes=4194304)}else{if(!c)if(e=Ul(d),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Xl(n,e),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Mt)return jt(n),null}else 2*E()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,c=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=tn.current,ve(tn,c?a&1|2:a&1),Mt&&Qi(n,o.treeForkCount),e):(jt(n),null);case 22:case 23:return Kn(n),Yc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Y(xr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(ln),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cS(e,n){switch(Nc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(ln),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(tn),null;case 4:return Ge(),null;case 10:return $i(n.type),null;case 22:case 23:return Kn(n),Yc(),e!==null&&Y(xr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(ln),null;case 25:return null;default:return null}}function yg(e,n){switch(Nc(n),n.tag){case 3:$i(ln),Ge();break;case 26:case 27:case 5:et(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y(tn);break;case 10:$i(n.type);break;case 22:case 23:Kn(n),Yc(),e!==null&&Y(xr);break;case 24:$i(ln)}}function So(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){Bt(n,n.return,A)}}function Ha(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var B=a,ee=A;try{ee()}catch(pe){Bt(c,B,pe)}}}o=o.next}while(o!==d)}}catch(pe){Bt(n,n.return,pe)}}function Mg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{dm(n,a)}catch(o){Bt(e,e.return,o)}}}function Eg(e,n,a){a.props=br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(e,n,o)}}function yo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Bt(e,n,c)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(e,n,c)}else a.current=null}function bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(e,e.return,c)}}function Af(e,n,a){try{var o=e.stateNode;NS(o,e.type,a,n),o[pn]=n}catch(c){Bt(e,e.return,c)}}function Tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Cf(e,n,a),e=e.sibling;e!==null;)Cf(e,n,a),e=e.sibling}function Wl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Wl(e,n,a),e=e.sibling;e!==null;)Wl(e,n,a),e=e.sibling}function Ag(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[rn]=e,n[pn]=a}catch(d){Bt(e,e.return,d)}}var aa=!1,fn=!1,wf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function fS(e,n){if(e=e.containerInfo,Kf=du,e=zp(e),yc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,A=-1,B=-1,ee=0,pe=0,Se=e,ae=null;t:for(;;){for(var le;Se!==a||c!==0&&Se.nodeType!==3||(A=S+c),Se!==d||o!==0&&Se.nodeType!==3||(B=S+o),Se.nodeType===3&&(S+=Se.nodeValue.length),(le=Se.firstChild)!==null;)ae=Se,Se=le;for(;;){if(Se===e)break t;if(ae===a&&++ee===c&&(A=S),ae===d&&++pe===o&&(B=S),(le=Se.nextSibling)!==null)break;Se=ae,ae=Se.parentNode}Se=le}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:e,selectionRange:a},du=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ke=br(a.type,c);e=o.getSnapshotBeforeUpdate(ke,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ed(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ed(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Cg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),o&4&&So(5,a);break;case 1:if(sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var c=br(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&Mg(a),o&512&&yo(a,a.return);break;case 3:if(sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dm(e,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&Ag(a);case 26:case 5:sa(e,a),n===null&&o&4&&bg(a),o&512&&yo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),o&4&&Ug(e,a);break;case 13:sa(e,a),o&4&&Ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=SS.bind(null,a),HS(e,a))));break;case 22:if(o=a.memoizedState!==null||aa,!o){n=n!==null&&n.memoizedState!==null||fn,c=aa;var d=fn;aa=o,(fn=n)&&!d?oa(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),aa=c,fn=d}break;case 30:break;default:sa(e,a)}}function wg(e){var n=e.alternate;n!==null&&(e.alternate=null,wg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&js(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Bn=!1;function ra(e,n,a){for(a=a.child;a!==null;)Dg(e,n,a),a=a.sibling}function Dg(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:fn||Ni(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ni(a,n);var o=Qt,c=Bn;Ya(a.type)&&(Qt=a.stateNode,Bn=!1),ra(e,n,a),Do(a.stateNode),Qt=o,Bn=c;break;case 5:fn||Ni(a,n);case 6:if(o=Qt,c=Bn,Qt=null,ra(e,n,a),Qt=o,Bn=c,Qt!==null)if(Bn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{Qt.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:Qt!==null&&(Bn?(e=Qt,M0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ss(e)):M0(Qt,a.stateNode));break;case 4:o=Qt,c=Bn,Qt=a.stateNode.containerInfo,Bn=!0,ra(e,n,a),Qt=o,Bn=c;break;case 0:case 11:case 14:case 15:Ha(2,a,n),fn||Ha(4,a,n),ra(e,n,a);break;case 1:fn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Eg(a,n,o)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ra(e,n,a),fn=o;break;default:ra(e,n,a)}}function Ug(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ss(e)}catch(a){Bt(n,n.return,a)}}}function Ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ss(e)}catch(a){Bt(n,n.return,a)}}function dS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rg),n;default:throw Error(r(435,e.tag))}}function ql(e,n){var a=dS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=yS.bind(null,e,o);o.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){Qt=A.stateNode,Bn=!1;break e}break;case 5:Qt=A.stateNode,Bn=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(Qt===null)throw Error(r(160));Dg(d,S,c),Qt=null,Bn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lg(n,e),n=n.sibling}var Si=null;function Lg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Hn(e),o&4&&(Ha(3,e,e.return),So(3,e),Ha(5,e,e.return));break;case 1:zn(n,e),Hn(e),o&512&&(fn||a===null||Ni(a,a.return)),o&64&&aa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Si;if(zn(n,e),Hn(e),o&512&&(fn||a===null||Ni(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[ur]||d[rn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),bn(d,o,a),d[rn]=e,X(d),o=d;break e;case"link":var S=L0("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}d=c.createElement(o),bn(d,o,a),c.head.appendChild(d);break;case"meta":if(S=L0("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}d=c.createElement(o),bn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[rn]=e,X(d),o=d}e.stateNode=o}else O0(c,e.type,e.stateNode);else e.stateNode=N0(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?O0(c,e.type,e.stateNode):N0(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Af(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Hn(e),o&512&&(fn||a===null||Ni(a,a.return)),a!==null&&o&4&&Af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Hn(e),o&512&&(fn||a===null||Ni(a,a.return)),e.flags&32){c=e.stateNode;try{Ln(c,"")}catch(ke){Bt(e,e.return,ke)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Af(e,c,a!==null?a.memoizedProps:c)),o&1024&&(wf=!0);break;case 6:if(zn(n,e),Hn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ke){Bt(e,e.return,ke)}}break;case 3:if(lu=null,c=Si,Si=su(n.containerInfo),zn(n,e),Si=c,Hn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(n.containerInfo)}catch(ke){Bt(e,e.return,ke)}wf&&(wf=!1,Og(e));break;case 4:o=Si,Si=su(e.stateNode.containerInfo),zn(n,e),Hn(e),Si=o;break;case 12:zn(n,e),Hn(e);break;case 31:zn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 13:zn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=aa,pe=fn;if(aa=ee||c,fn=pe||B,zn(n,e),fn=pe,aa=ee,Hn(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||aa||fn||Tr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(d=B.stateNode,c)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var Se=B.memoizedProps.style,ae=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;c?E0(le,!0):E0(B.stateNode,!1)}catch(ke){Bt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(e,a))));break;case 19:zn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 30:break;case 21:break;default:zn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Tg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=Rf(e);Wl(e,d,c);break;case 5:var S=a.stateNode;a.flags&32&&(Ln(S,""),a.flags&=-33);var A=Rf(e);Wl(e,A,S);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=Rf(e);Cf(e,ee,B);break;default:throw Error(r(161))}}catch(pe){Bt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(e,n.alternate,n),n=n.sibling}function Tr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Tr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Eg(n,n.return,a),Tr(n);break;case 27:Do(n.stateNode);case 26:case 5:Ni(n,n.return),Tr(n);break;case 22:n.memoizedState===null&&Tr(n);break;case 30:Tr(n);break;default:Tr(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:oa(c,d,a),So(4,d);break;case 1:if(oa(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){Bt(o,o.return,ee)}if(o=d,c=o.updateQueue,c!==null){var A=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)fm(B[c],A)}catch(ee){Bt(o,o.return,ee)}}a&&S&64&&Mg(d),yo(d,d.return);break;case 27:Ag(d);case 26:case 5:oa(c,d,a),a&&o===null&&S&4&&bg(d),yo(d,d.return);break;case 12:oa(c,d,a);break;case 31:oa(c,d,a),a&&S&4&&Ug(c,d);break;case 13:oa(c,d,a),a&&S&4&&Ng(c,d);break;case 22:d.memoizedState===null&&oa(c,d,a),yo(d,d.return);break;case 30:break;default:oa(c,d,a)}n=n.sibling}}function Df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&so(a))}function Uf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e))}function yi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(e,n,a,o),n=n.sibling}function Pg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,o),c&2048&&So(9,n);break;case 1:yi(e,n,a,o);break;case 3:yi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&so(e)));break;case 12:if(c&2048){yi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else yi(e,n,a,o);break;case 31:yi(e,n,a,o);break;case 13:yi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?yi(e,n,a,o):Mo(e,n):d._visibility&2?yi(e,n,a,o):(d._visibility|=2,us(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Df(S,n);break;case 24:yi(e,n,a,o),c&2048&&Uf(n.alternate,n);break;default:yi(e,n,a,o)}}function us(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,A=a,B=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:us(d,S,A,B,c),So(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?us(d,S,A,B,c):Mo(d,S):(pe._visibility|=2,us(d,S,A,B,c)),c&&ee&2048&&Df(S.alternate,S);break;case 24:us(d,S,A,B,c),c&&ee&2048&&Uf(S.alternate,S);break;default:us(d,S,A,B,c)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Mo(a,o),c&2048&&Df(o.alternate,o);break;case 24:Mo(a,o),c&2048&&Uf(o.alternate,o);break;default:Mo(a,o)}n=n.sibling}}var Eo=8192;function cs(e,n,a){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)Fg(e,n,a),e=e.sibling}function Fg(e,n,a){switch(e.tag){case 26:cs(e,n,a),e.flags&Eo&&e.memoizedState!==null&&JS(a,Si,e.memoizedState,e.memoizedProps);break;case 5:cs(e,n,a);break;case 3:case 4:var o=Si;Si=su(e.stateNode.containerInfo),cs(e,n,a),Si=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Eo,Eo=16777216,cs(e,n,a),Eo=o):cs(e,n,a));break;default:cs(e,n,a)}}function Ig(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,zg(o,e)}Ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bg(e),e=e.sibling}function Bg(e){switch(e.tag){case 0:case 11:case 15:bo(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:bo(e);break;case 12:bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):bo(e);break;default:bo(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,zg(o,e)}Ig(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function zg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=e;xn!==null;){o=xn;var c=o.sibling,d=o.return;if(wg(o),o===a){xn=null;break e}if(c!==null){c.return=d,xn=c;break e}xn=d}}}var hS={getCacheForType:function(e){var n=Mn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},pS=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,vt=null,St=0,It=0,Qn=null,Ga=!1,fs=!1,Nf=!1,la=0,en=0,Va=0,Ar=0,Lf=0,Jn=0,ds=0,To=null,Gn=null,Of=!1,jl=0,Hg=0,Zl=1/0,Kl=null,ka=null,gn=0,Xa=null,hs=null,ua=0,Pf=0,Ff=null,Gg=null,Ao=0,If=null;function $n(){return(Nt&2)!==0&&St!==0?St&-St:O.T!==null?kf():wi()}function Vg(){if(Jn===0)if((St&536870912)===0||Mt){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===Xt&&(It===2||It===9)||e.cancelPendingCommit!==null)&&(ps(e,0),Wa(e,St,Jn,!1)),Dn(e,a),((Nt&2)===0||e!==Xt)&&(e===Xt&&((Nt&2)===0&&(Ar|=a),en===4&&Wa(e,St,Jn,!1)),Li(e))}function kg(e,n,a){if((Nt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||He(e,n),c=o?_S(e,n):zf(e,n,!0),d=o;do{if(c===0){fs&&!o&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!mS(a)){c=zf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=e;c=To;var B=A.current.memoizedState.isDehydrated;if(B&&(ps(A,S).flags|=256),S=zf(A,S,!1),S!==2){if(Nf&&!B){A.errorRecoveryDisabledLanes|=d,Ar|=d,c=4;break e}d=Gn,Gn=c,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}c=S}if(d=!1,c!==2)continue}}if(c===1){ps(e,0),Wa(e,n,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,Jn,!Ga);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=jl+300-E(),10<c)){if(Wa(o,n,Jn,!Ga),fe(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=S0(Xg.bind(null,o,a,Gn,Kl,Of,n,Jn,Ar,ds,Ga,d,"Throttled",-0,0),c);break e}Xg(o,a,Gn,Kl,Of,n,Jn,Ar,ds,Ga,d,null,-0,0)}}break}while(!0);Li(e)}function Xg(e,n,a,o,c,d,S,A,B,ee,pe,Se,ae,le){if(e.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Fg(n,d,Se);var ke=(d&62914560)===d?jl-E():(d&4194048)===d?Hg-E():0;if(ke=$S(Se,ke),ke!==null){ua=d,e.cancelPendingCommit=ke(Jg.bind(null,e,n,d,a,o,c,S,A,B,pe,Se,null,ae,le)),Wa(e,d,S,!ee);return}}Jg(e,n,d,a,o,c,S,A,B)}function mS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Yn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,o){n&=~Lf,n&=~Ar,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-Oe(c),S=1<<d;o[d]=-1,c&=~S}a!==0&&Ys(e,a,n)}function Ql(){return(Nt&6)===0?(Ro(0),!1):!0}function Bf(){if(vt!==null){if(It===0)var e=vt.return;else e=vt,Ji=_r=null,$c(e),as=null,lo=0,e=vt;for(;e!==null;)yg(e.alternate,e),e=e.return;vt=null}}function ps(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,PS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Bf(),Xt=e,vt=a=Ki(e.current,null),St=n,It=0,Qn=null,Ga=!1,fs=He(e,n),Nf=!1,ds=Jn=Lf=Ar=Va=en=0,Gn=To=null,Of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Oe(o),d=1<<c;n|=e[c],o&=~d}return la=n,vl(),a}function Wg(e,n){ut=null,O.H=_o,n===is||n===Al?(n=om(),It=3):n===Gc?(n=om(),It=4):It=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,vt===null&&(en=1,Hl(e,ai(n,e.current)))}function qg(){var e=Zn.current;return e===null?!0:(St&4194048)===St?li===null:(St&62914560)===St||(St&536870912)!==0?e===li:!1}function Yg(){var e=O.H;return O.H=_o,e===null?_o:e}function jg(){var e=O.A;return O.A=hS,e}function Jl(){en=4,Ga||(St&4194048)!==St&&Zn.current!==null||(fs=!0),(Va&134217727)===0&&(Ar&134217727)===0||Xt===null||Wa(Xt,St,Jn,!1)}function zf(e,n,a){var o=Nt;Nt|=2;var c=Yg(),d=jg();(Xt!==e||St!==n)&&(Kl=null,ps(e,n)),n=!1;var S=en;e:do try{if(It!==0&&vt!==null){var A=vt,B=Qn;switch(It){case 8:Bf(),S=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var ee=It;if(It=0,Qn=null,ms(e,A,B,ee),a&&fs){S=0;break e}break;default:ee=It,It=0,Qn=null,ms(e,A,B,ee)}}gS(),S=en;break}catch(pe){Wg(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Ji=_r=null,Nt=o,O.H=c,O.A=d,vt===null&&(Xt=null,St=0,vl()),S}function gS(){for(;vt!==null;)Zg(vt)}function _S(e,n){var a=Nt;Nt|=2;var o=Yg(),c=jg();Xt!==e||St!==n?(Kl=null,Zl=E()+500,ps(e,n)):fs=He(e,n);e:do try{if(It!==0&&vt!==null){n=vt;var d=Qn;t:switch(It){case 1:It=0,Qn=null,ms(e,n,d,1);break;case 2:case 9:if(rm(d)){It=0,Qn=null,Kg(n);break}n=function(){It!==2&&It!==9||Xt!==e||(It=7),Li(e)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:rm(d)?(It=0,Qn=null,Kg(n)):(It=0,Qn=null,ms(e,n,d,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var A=vt;if(S?P0(S):A.stateNode.complete){It=0,Qn=null;var B=A.sibling;if(B!==null)vt=B;else{var ee=A.return;ee!==null?(vt=ee,$l(ee)):vt=null}break t}}It=0,Qn=null,ms(e,n,d,5);break;case 6:It=0,Qn=null,ms(e,n,d,6);break;case 8:Bf(),en=6;break e;default:throw Error(r(462))}}vS();break}catch(pe){Wg(e,pe)}while(!0);return Ji=_r=null,O.H=o,O.A=c,Nt=a,vt!==null?0:(Xt=null,St=0,vl(),en)}function vS(){for(;vt!==null&&!Ye();)Zg(vt)}function Zg(e){var n=xg(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?$l(e):vt=n}function Kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=hg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=hg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:$c(n);default:yg(a,n),n=vt=jp(n,la),n=xg(a,n,la)}e.memoizedProps=e.pendingProps,n===null?$l(e):vt=n}function ms(e,n,a,o){Ji=_r=null,$c(n),as=null,lo=0;var c=n.return;try{if(sS(e,c,n,a,St)){en=1,Hl(e,ai(a,e.current)),vt=null;return}}catch(d){if(c!==null)throw vt=c,d;en=1,Hl(e,ai(a,e.current)),vt=null;return}n.flags&32768?(Mt||o===1?e=!0:fs||(St&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,e)):$l(n)}function $l(e){var n=e;do{if((n.flags&32768)!==0){Qg(n,Ga);return}e=n.return;var a=uS(n.alternate,n,la);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);en===0&&(en=5)}function Qg(e,n){do{var a=cS(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);en=6,vt=null}function Jg(e,n,a,o,c,d,S,A,B){e.cancelPendingCommit=null;do eu();while(gn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Ac,mi(e,a,d,S,A,B),e===Xt&&(vt=Xt=null,St=0),hs=n,Xa=e,ua=a,Pf=d,Ff=c,Gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MS(de,function(){return i0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=I.p,I.p=2,S=Nt,Nt|=4;try{fS(e,n,a)}finally{Nt=S,I.p=c,O.T=o}}gn=1,$g(),e0(),t0()}}function $g(){if(gn===1){gn=0;var e=Xa,n=hs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=I.p;I.p=2;var c=Nt;Nt|=4;try{Lg(n,e);var d=Qf,S=zp(e.containerInfo),A=d.focusedElem,B=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&Bp(A.ownerDocument.documentElement,A)){if(B!==null&&yc(A)){var ee=B.start,pe=B.end;if(pe===void 0&&(pe=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(pe,A.value.length);else{var Se=A.ownerDocument||document,ae=Se&&Se.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),ke=A.textContent.length,tt=Math.min(B.start,ke),kt=B.end===void 0?tt:Math.min(B.end,ke);!le.extend&&tt>kt&&(S=kt,kt=tt,tt=S);var j=Ip(A,tt),k=Ip(A,kt);if(j&&k&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var $=Se.createRange();$.setStart(j.node,j.offset),le.removeAllRanges(),tt>kt?(le.addRange($),le.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),le.addRange($))}}}}for(Se=[],le=A;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Se.length;A++){var _e=Se[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}du=!!Kf,Qf=Kf=null}finally{Nt=c,I.p=o,O.T=a}}e.current=n,gn=2}}function e0(){if(gn===2){gn=0;var e=Xa,n=hs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=I.p;I.p=2;var c=Nt;Nt|=4;try{Cg(e,n.alternate,n)}finally{Nt=c,I.p=o,O.T=a}}gn=3}}function t0(){if(gn===4||gn===3){gn=0,L();var e=Xa,n=hs,a=ua,o=Gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,hs=Xa=null,n0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ka=null),Gr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=I.p,I.p=2,O.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{O.T=n,I.p=c}}(ua&3)!==0&&eu(),Li(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===If?Ao++:(Ao=0,If=e):Ao=0,Ro(0)}}function n0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,so(n)))}function eu(){return $g(),e0(),t0(),i0()}function i0(){if(gn!==5)return!1;var e=Xa,n=Pf;Pf=0;var a=Gr(ua),o=O.T,c=I.p;try{I.p=32>a?32:a,O.T=null,a=Ff,Ff=null;var d=Xa,S=ua;if(gn=0,hs=Xa=null,ua=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,Bg(d.current),Pg(d,d.current,S,a),Nt=A,Ro(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Ae,d)}catch{}return!0}finally{I.p=c,O.T=o,n0(e,n)}}function a0(e,n,a){n=ai(a,n),n=mf(e.stateNode,n,2),e=Ia(e,n,2),e!==null&&(Dn(e,2),Li(e))}function Bt(e,n,a){if(e.tag===3)a0(e,e,a);else for(;n!==null;){if(n.tag===3){a0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=ai(a,e),a=rg(2),o=Ia(n,a,2),o!==null&&(sg(a,o,n,e),Dn(o,2),Li(o));break}}n=n.return}}function Hf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new pS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Nf=!0,c.add(a),e=xS.bind(null,e,n,a),n.then(e,e))}function xS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(St&a)===a&&(en===4||en===3&&(St&62914560)===St&&300>E()-jl?(Nt&2)===0&&ps(e,0):Lf|=a,ds===St&&(ds=0)),Li(e)}function r0(e,n){n===0&&(n=Ft()),e=pr(e,n),e!==null&&(Dn(e,n),Li(e))}function SS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r0(e,a)}function yS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),r0(e,a)}function MS(e,n){return Tt(e,n)}var tu=null,gs=null,Gf=!1,nu=!1,Vf=!1,qa=0;function Li(e){e!==gs&&e.next===null&&(gs===null?tu=gs=e:gs=gs.next=e),nu=!0,Gf||(Gf=!0,bS())}function Ro(e,n){if(!Vf&&nu){Vf=!0;do for(var a=!1,o=tu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Oe(42|e)+1)-1,d&=c&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,u0(o,d))}else d=St,d=fe(o,o===Xt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,u0(o,d));o=o.next}while(a);Vf=!1}}function ES(){s0()}function s0(){nu=Gf=!1;var e=0;qa!==0&&OS()&&(e=qa);for(var n=E(),a=null,o=tu;o!==null;){var c=o.next,d=o0(o,n);d===0?(o.next=null,a===null?tu=c:a.next=c,c===null&&(gs=a)):(a=o,(e!==0||(d&3)!==0)&&(nu=!0)),o=c}gn!==0&&gn!==5||Ro(e),qa!==0&&(qa=0)}function o0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Oe(d),A=1<<S,B=c[S];B===-1?((A&a)===0||(A&o)!==0)&&(c[S]=at(A,n)):B<=n&&(e.expiredLanes|=A),d&=~A}if(n=Xt,a=St,a=fe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(It===2||It===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Lt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||He(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Lt(o),Gr(a)){case 2:case 8:a=ye;break;case 32:a=de;break;case 268435456:a=De;break;default:a=de}return o=l0.bind(null,e),a=Tt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Lt(o),e.callbackPriority=2,e.callbackNode=null,2}function l0(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(eu()&&e.callbackNode!==a)return null;var o=St;return o=fe(e,e===Xt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kg(e,o,n),o0(e,E()),e.callbackNode!=null&&e.callbackNode===a?l0.bind(null,e):null)}function u0(e,n){if(eu())return null;kg(e,n,!0)}function bS(){FS(function(){(Nt&6)!==0?Tt(ge,ES):s0()})}function kf(){if(qa===0){var e=ts;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),qa=e}return qa}function c0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function f0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function TS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=c0((c[pn]||null).action),S=o.submitter;S&&(n=(n=S[pn]||null)?c0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new pl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var B=S?f0(c,S):new FormData(c);uf(a,{pending:!0,data:B,method:c.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=S?f0(c,S):new FormData(c),uf(a,{pending:!0,data:B,method:c.method,action:d},d,B))},currentTarget:c}]})}}for(var Xf=0;Xf<Tc.length;Xf++){var Wf=Tc[Xf],AS=Wf.toLowerCase(),RS=Wf[0].toUpperCase()+Wf.slice(1);xi(AS,"on"+RS)}xi(Vp,"onAnimationEnd"),xi(kp,"onAnimationIteration"),xi(Xp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(kx,"onTransitionRun"),xi(Xx,"onTransitionStart"),xi(Wx,"onTransitionCancel"),xi(Wp,"onTransitionEnd"),Ue("onMouseEnter",["mouseout","mouseover"]),Ue("onMouseLeave",["mouseout","mouseover"]),Ue("onPointerEnter",["pointerout","pointerover"]),Ue("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function d0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,ee=A.currentTarget;if(A=A.listener,B!==d&&c.isPropagationStopped())break e;d=A,c.currentTarget=ee;try{d(c)}catch(pe){_l(pe)}c.currentTarget=null,d=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,ee=A.currentTarget,A=A.listener,B!==d&&c.isPropagationStopped())break e;d=A,c.currentTarget=ee;try{d(c)}catch(pe){_l(pe)}c.currentTarget=null,d=B}}}}function xt(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(h0(n,e,2,!1),a.add(o))}function qf(e,n,a){var o=0;n&&(o|=4),h0(a,e,o,n)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[iu]){e[iu]=!0,se.forEach(function(a){a!=="selectionchange"&&(CS.has(a)||qf(a,!1,e),qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[iu]||(n[iu]=!0,qf("selectionchange",!1,n))}}function h0(e,n,a,o){switch(V0(n)){case 2:var c=ny;break;case 8:c=iy;break;default:c=ld}a=c.bind(null,n,a,e),c=void 0,!dc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ca(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=d=S;continue e}A=A.parentNode}}o=o.return}vp(function(){var ee=d,pe=cc(a),Se=[];e:{var ae=qp.get(e);if(ae!==void 0){var le=pl,ke=e;switch(e){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":le=yx;break;case"focusin":ke="focus",le=gc;break;case"focusout":ke="blur",le=gc;break;case"beforeblur":case"afterblur":le=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=bx;break;case Vp:case kp:case Xp:le=dx;break;case Wp:le=Ax;break;case"scroll":case"scrollend":le=ox;break;case"wheel":le=Cx;break;case"copy":case"cut":case"paste":le=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Ep;break;case"toggle":case"beforetoggle":le=Dx}var tt=(n&4)!==0,kt=!tt&&(e==="scroll"||e==="scrollend"),j=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var k=ee,$;k!==null;){var _e=k;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||j===null||(_e=Zs(k,j),_e!=null&&tt.push(wo(k,_e,$))),kt)break;k=k.return}0<tt.length&&(ae=new le(ae,ke,null,a,pe),Se.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ae&&a!==uc&&(ke=a.relatedTarget||a.fromElement)&&(Ca(ke)||ke[qi]))break e;if((le||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=ee,ke=ke?Ca(ke):null,ke!==null&&(kt=u(ke),tt=ke.tag,ke!==kt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=ee),le!==ke)){if(tt=yp,_e="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(tt=Ep,_e="onPointerLeave",j="onPointerEnter",k="pointer"),kt=le==null?ae:cr(le),$=ke==null?ae:cr(ke),ae=new tt(_e,k+"leave",le,a,pe),ae.target=kt,ae.relatedTarget=$,_e=null,Ca(pe)===ee&&(tt=new tt(j,k+"enter",ke,a,pe),tt.target=$,tt.relatedTarget=kt,_e=tt),kt=_e,le&&ke)t:{for(tt=wS,j=le,k=ke,$=0,_e=j;_e;_e=tt(_e))$++;_e=0;for(var $e=k;$e;$e=tt($e))_e++;for(;0<$-_e;)j=tt(j),$--;for(;0<_e-$;)k=tt(k),_e--;for(;$--;){if(j===k||k!==null&&j===k.alternate){tt=j;break t}j=tt(j),k=tt(k)}tt=null}else tt=null;le!==null&&p0(Se,ae,le,tt,!1),ke!==null&&kt!==null&&p0(Se,kt,ke,tt,!0)}}e:{if(ae=ee?cr(ee):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var wt=Up;else if(wp(ae))if(Np)wt=Hx;else{wt=Bx;var je=Ix}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&kr(ee.elementType)&&(wt=Up):wt=zx;if(wt&&(wt=wt(e,ee))){Dp(Se,wt,a,pe);break e}je&&je(e,ae,ee),e==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&_i(ae,"number",ae.value)}switch(je=ee?cr(ee):window,e){case"focusin":(wp(je)||je.contentEditable==="true")&&(Yr=je,Mc=ee,io=null);break;case"focusout":io=Mc=Yr=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,Hp(Se,a,pe);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Hp(Se,a,pe)}var ht;if(vc)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else qr?Rp(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(bp&&a.locale!=="ko"&&(qr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&qr&&(ht=xp()):(Da=pe,hc="value"in Da?Da.value:Da.textContent,qr=!0)),je=au(ee,yt),0<je.length&&(yt=new Mp(yt,e,null,a,pe),Se.push({event:yt,listeners:je}),ht?yt.data=ht:(ht=Cp(a),ht!==null&&(yt.data=ht)))),(ht=Nx?Lx(e,a):Ox(e,a))&&(yt=au(ee,"onBeforeInput"),0<yt.length&&(je=new Mp("onBeforeInput","beforeinput",null,a,pe),Se.push({event:je,listeners:yt}),je.data=ht)),TS(Se,e,ee,a,pe)}d0(Se,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function au(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Zs(e,a),c!=null&&o.unshift(wo(e,c,d)),c=Zs(e,n),c!=null&&o.push(wo(e,c,d))),e.tag===3)return o;e=e.return}return[]}function wS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p0(e,n,a,o,c){for(var d=n._reactName,S=[];a!==null&&a!==o;){var A=a,B=A.alternate,ee=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||ee===null||(B=ee,c?(ee=Zs(a,d),ee!=null&&S.unshift(wo(a,ee,B))):c||(ee=Zs(a,d),ee!=null&&S.push(wo(a,ee,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var DS=/\r\n?/g,US=/\u0000|\uFFFD/g;function m0(e){return(typeof e=="string"?e:""+e).replace(DS,`
`).replace(US,"")}function g0(e,n){return n=m0(n),m0(e)===n}function Vt(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ln(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ln(e,""+o);break;case"className":st(e,"class",o);break;case"tabIndex":st(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":st(e,a,o);break;case"style":Yi(e,o,d);break;case"data":if(n!=="object"){st(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(e,n,"name",c.name,c,null),Vt(e,n,"formEncType",c.formEncType,c,null),Vt(e,n,"formMethod",c.formMethod,c,null),Vt(e,n,"formTarget",c.formTarget,c,null)):(Vt(e,n,"encType",c.encType,c,null),Vt(e,n,"method",c.method,c,null),Vt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);break;case"onScroll":o!=null&&xt("scroll",e);break;case"onScrollEnd":o!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xt("beforetoggle",e),xt("toggle",e),it(e,"popover",o);break;case"xlinkActuate":Ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":it(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rx.get(a)||a,it(e,a,o))}}function Zf(e,n,a,o,c,d){switch(a){case"style":Yi(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ln(e,o):(typeof o=="number"||typeof o=="bigint")&&Ln(e,""+o);break;case"onScroll":o!=null&&xt("scroll",e);break;case"onScrollEnd":o!=null&&xt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ie.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[pn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):it(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(e,n,d,S,a,null)}}c&&Vt(e,n,"srcSet",a.srcSet,a,null),o&&Vt(e,n,"src",a.src,a,null);return;case"input":xt("invalid",e);var A=d=S=c=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":c=pe;break;case"type":S=pe;break;case"checked":B=pe;break;case"defaultChecked":ee=pe;break;case"value":d=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Vt(e,n,o,pe,a,null)}}Wn(e,d,A,B,ee,S,c,!1);return;case"select":xt("invalid",e),o=S=d=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Vt(e,n,c,A,a,null)}n=d,a=S,e.multiple=!!o,n!=null?qn(e,!!o,n,!1):a!=null&&qn(e,!!o,a,!0);return;case"textarea":xt("invalid",e),d=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Vt(e,n,S,A,a,null)}sn(e,o,c,d);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(e,n,B,o,a,null));return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(o=0;o<Co.length;o++)xt(Co[o],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(e,n,ee,o,a,null)}return;default:if(kr(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&Zf(e,n,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(e,n,A,o,a,null))}function NS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,S=null,A=null,B=null,ee=null,pe=null;for(le in a){var Se=a[le];if(a.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=Se;default:o.hasOwnProperty(le)||Vt(e,n,le,null,o,Se)}}for(var ae in o){var le=o[ae];if(Se=a[ae],o.hasOwnProperty(ae)&&(le!=null||Se!=null))switch(ae){case"type":d=le;break;case"name":c=le;break;case"checked":ee=le;break;case"defaultChecked":pe=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==Se&&Vt(e,n,ae,le,o,Se)}}Nn(e,S,A,B,ee,pe,d,c);return;case"select":le=S=A=ae=null;for(d in a)if(B=a[d],a.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(d)||Vt(e,n,d,null,o,B)}for(c in o)if(d=o[c],B=a[c],o.hasOwnProperty(c)&&(d!=null||B!=null))switch(c){case"value":ae=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==B&&Vt(e,n,c,d,o,B)}n=A,a=S,o=le,ae!=null?qn(e,!!a,ae,!1):!!o!=!!a&&(n!=null?qn(e,!!a,n,!0):qn(e,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(e,n,A,null,o,c)}for(S in o)if(c=o[S],d=a[S],o.hasOwnProperty(S)&&(c!=null||d!=null))switch(S){case"value":ae=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Vt(e,n,S,c,o,d)}Ot(e,ae,le);return;case"option":for(var ke in a)ae=a[ke],a.hasOwnProperty(ke)&&ae!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?e.selected=!1:Vt(e,n,ke,null,o,ae));for(B in o)ae=o[B],le=a[B],o.hasOwnProperty(B)&&ae!==le&&(ae!=null||le!=null)&&(B==="selected"?e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Vt(e,n,B,ae,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!o.hasOwnProperty(tt)&&Vt(e,n,tt,null,o,ae);for(ee in o)if(ae=o[ee],le=a[ee],o.hasOwnProperty(ee)&&ae!==le&&(ae!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Vt(e,n,ee,ae,o,le)}return;default:if(kr(n)){for(var kt in a)ae=a[kt],a.hasOwnProperty(kt)&&ae!==void 0&&!o.hasOwnProperty(kt)&&Zf(e,n,kt,void 0,o,ae);for(pe in o)ae=o[pe],le=a[pe],!o.hasOwnProperty(pe)||ae===le||ae===void 0&&le===void 0||Zf(e,n,pe,ae,o,le);return}}for(var j in a)ae=a[j],a.hasOwnProperty(j)&&ae!=null&&!o.hasOwnProperty(j)&&Vt(e,n,j,null,o,ae);for(Se in o)ae=o[Se],le=a[Se],!o.hasOwnProperty(Se)||ae===le||ae==null&&le==null||Vt(e,n,Se,ae,o,le)}function _0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],d=c.transferSize,S=c.initiatorType,A=c.duration;if(d&&A&&_0(S)){for(S=0,A=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],ee=B.startTime;if(ee>A)break;var pe=B.transferSize,Se=B.initiatorType;pe&&_0(Se)&&(B=B.responseEnd,S+=pe*(B<A?1:(A-ee)/(B-ee)))}if(--o,n+=8*(d+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kf=null,Qf=null;function ru(e){return e.nodeType===9?e:e.ownerDocument}function v0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function OS(){var e=window.event;return e&&e.type==="popstate"?e===$f?!1:($f=e,!0):($f=null,!1)}var S0=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,y0=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof y0<"u"?function(e){return y0.resolve(null).then(e).catch(IS)}:S0;function IS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function M0(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Do(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Do(a);for(var d=a.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[ur]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Do(e.ownerDocument.body);a=c}while(a);Ss(n)}function E0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ed(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ed(a),js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function BS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ur])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function zS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function b0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function td(e){return e.data==="$?"||e.data==="$~"}function nd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var id=null;function T0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function A0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function R0(e,n,a){switch(n=ru(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Do(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);js(e)}var ci=new Map,C0=new Set;function su(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=I.d;I.d={f:GS,r:VS,D:kS,C:XS,L:WS,m:qS,X:jS,S:YS,M:ZS};function GS(){var e=ca.f(),n=Ql();return e||n}function VS(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?Wm(n):ca.r(e)}var _s=typeof document>"u"?null:document;function w0(e,n,a){var o=_s;if(o&&typeof n=="string"&&n){var c=rt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),C0.has(c)||(C0.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),X(n),o.head.appendChild(n)))}}function kS(e){ca.D(e),w0("dns-prefetch",e,null)}function XS(e,n){ca.C(e,n),w0("preconnect",e,n)}function WS(e,n,a){ca.L(e,n,a);var o=_s;if(o&&e&&n){var c='link[rel="preload"][as="'+rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+rt(a.imageSizes)+'"]')):c+='[href="'+rt(e)+'"]';var d=c;switch(n){case"style":d=vs(e);break;case"script":d=xs(e)}ci.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Uo(d))||n==="script"&&o.querySelector(No(d))||(n=o.createElement("link"),bn(n,"link",e),X(n),o.head.appendChild(n)))}}function qS(e,n){ca.m(e,n);var a=_s;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+rt(o)+'"][href="'+rt(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xs(e)}if(!ci.has(d)&&(e=_({rel:"modulepreload",href:e},n),ci.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(No(d)))return}o=a.createElement("link"),bn(o,"link",e),X(o),a.head.appendChild(o)}}}function YS(e,n,a){ca.S(e,n,a);var o=_s;if(o&&e){var c=R(o).hoistableStyles,d=vs(e);n=n||"default";var S=c.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Uo(d)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(d))&&ad(e,a);var B=S=o.createElement("link");X(B),bn(B,"link",e),B._p=new Promise(function(ee,pe){B.onload=ee,B.onerror=pe}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ou(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(d,S)}}}function jS(e,n){ca.X(e,n);var a=_s;if(a&&e){var o=R(a).hoistableScripts,c=xs(e),d=o.get(c);d||(d=a.querySelector(No(c)),d||(e=_({src:e,async:!0},n),(n=ci.get(c))&&rd(e,n),d=a.createElement("script"),X(d),bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function ZS(e,n){ca.M(e,n);var a=_s;if(a&&e){var o=R(a).hoistableScripts,c=xs(e),d=o.get(c);d||(d=a.querySelector(No(c)),d||(e=_({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&rd(e,n),d=a.createElement("script"),X(d),bn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function D0(e,n,a,o){var c=(c=ne.current)?su(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vs(a.href),a=R(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vs(a.href);var d=R(c).hoistableStyles,S=d.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=c.querySelector(Uo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),d||KS(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xs(a),a=R(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function vs(e){return'href="'+rt(e)+'"'}function Uo(e){return'link[rel="stylesheet"]['+e+"]"}function U0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function KS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),X(n),e.head.appendChild(n))}function xs(e){return'[src="'+rt(e)+'"]'}function No(e){return"script[async]"+e}function N0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(o)return n.instance=o,X(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),bn(o,"style",c),ou(o,a.precedence,e),n.instance=o;case"stylesheet":c=vs(a.href);var d=e.querySelector(Uo(c));if(d)return n.state.loading|=4,n.instance=d,X(d),d;o=U0(a),(c=ci.get(c))&&ad(o,c),d=(e.ownerDocument||e).createElement("link"),X(d);var S=d;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),bn(d,"link",o),n.state.loading|=4,ou(d,a.precedence,e),n.instance=d;case"script":return d=xs(a.src),(c=e.querySelector(No(d)))?(n.instance=c,X(c),c):(o=a,(c=ci.get(d))&&(o=_({},a),rd(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),X(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ou(o,a.precedence,e));return n.instance}function ou(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lu=null;function L0(e,n,a){if(lu===null){var o=new Map,c=lu=new Map;c.set(a,o)}else c=lu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[ur]||d[rn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function O0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function QS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function JS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=vs(o.href),d=n.querySelector(Uo(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,X(d);return}d=n.ownerDocument||n,o=U0(o),(c=ci.get(c))&&ad(o,c),d=d.createElement("link"),X(d);var S=d;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),bn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sd=0;function $S(e,n){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&sd===0&&(sd=62500*LS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>sd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cu=null;function fu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cu=new Map,n.forEach(ey,e),cu=null,uu.call(e))}function ey(e,n){if(!(n.state.loading&4)){var a=cu.get(e);if(a)var o=a.get(null);else{a=new Map,cu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var S=c[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,c),a.set(S,c),this.count++,o=uu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:D,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function ty(e,n,a,o,c,d,S,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function F0(e,n,a,o,c,d,S,A,B,ee,pe,Se){return e=new ty(e,n,a,S,B,ee,pe,Se,A),n=1,d===!0&&(n|=24),d=jn(3,null,null,n),e.current=d,d.stateNode=e,n=Bc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Vc(d),e}function I0(e){return e?(e=Kr,e):Kr}function B0(e,n,a,o,c,d){c=I0(c),o.context===null?o.context=c:o.pendingContext=c,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ia(e,o,n),a!==null&&(Vn(a,e,n),co(a,e,n))}function z0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function od(e,n){z0(e,n),(e=e.alternate)&&z0(e,n)}function H0(e){if(e.tag===13||e.tag===31){var n=pr(e,67108864);n!==null&&Vn(n,e,67108864),od(e,67108864)}}function G0(e){if(e.tag===13||e.tag===31){var n=$n();n=Hr(n);var a=pr(e,n);a!==null&&Vn(a,e,n),od(e,n)}}var du=!0;function ny(e,n,a,o){var c=O.T;O.T=null;var d=I.p;try{I.p=2,ld(e,n,a,o)}finally{I.p=d,O.T=c}}function iy(e,n,a,o){var c=O.T;O.T=null;var d=I.p;try{I.p=8,ld(e,n,a,o)}finally{I.p=d,O.T=c}}function ld(e,n,a,o){if(du){var c=ud(o);if(c===null)jf(e,n,o,hu,a),k0(e,o);else if(ry(c,e,n,a,o))o.stopPropagation();else if(k0(e,o),n&4&&-1<ay.indexOf(e)){for(;c!==null;){var d=wa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=be(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Oe(S);A.entanglements[1]|=B,S&=~B}Li(d),(Nt&6)===0&&(Zl=E()+500,Ro(0))}}break;case 31:case 13:A=pr(d,2),A!==null&&Vn(A,d,2),Ql(),od(d,2)}if(d=ud(o),d===null&&jf(e,n,o,hu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function ud(e){return e=cc(e),cd(e)}var hu=null;function cd(e){if(hu=null,e=Ca(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hu=e,null}function V0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ge:return 2;case ye:return 8;case de:case We:return 32;case De:return 268435456;default:return 32}default:return 32}}var fd=!1,ja=null,Za=null,Ka=null,Oo=new Map,Po=new Map,Qa=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k0(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function Fo(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=wa(n),n!==null&&H0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ry(e,n,a,o,c){switch(n){case"focusin":return ja=Fo(ja,e,n,a,o,c),!0;case"dragenter":return Za=Fo(Za,e,n,a,o,c),!0;case"mouseover":return Ka=Fo(Ka,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Oo.set(d,Fo(Oo.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Po.set(d,Fo(Po.get(d)||null,e,n,a,o,c)),!0}return!1}function X0(e){var n=Ca(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){G0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Vr(e.priority,function(){G0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ud(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);uc=o,a.target.dispatchEvent(o),uc=null}else return n=wa(a),n!==null&&H0(n),e.blockedOn=a,!1;n.shift()}return!0}function W0(e,n,a){pu(e)&&a.delete(n)}function sy(){fd=!1,ja!==null&&pu(ja)&&(ja=null),Za!==null&&pu(Za)&&(Za=null),Ka!==null&&pu(Ka)&&(Ka=null),Oo.forEach(W0),Po.forEach(W0)}function mu(e,n){e.blockedOn===n&&(e.blockedOn=null,fd||(fd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,sy)))}var gu=null;function q0(e){gu!==e&&(gu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var d=wa(a);d!==null&&(e.splice(n,3),n-=3,uf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ss(e){function n(B){return mu(B,e)}ja!==null&&mu(ja,e),Za!==null&&mu(Za,e),Ka!==null&&mu(Ka,e),Oo.forEach(n),Po.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)X0(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],S=c[pn]||null;if(typeof d=="function")S||q0(a);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(c=d,S=d[pn]||null)A=S.formAction;else if(cd(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),q0(a)}}}function Y0(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function dd(e){this._internalRoot=e}_u.prototype.render=dd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=$n();B0(a,o,e,n,null,null)},_u.prototype.unmount=dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;B0(e.current,2,null,e,null,null),Ql(),n[qi]=null}};function _u(e){this._internalRoot=e}_u.prototype.unstable_scheduleHydration=function(e){if(e){var n=wi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&X0(e)}};var j0=t.version;if(j0!=="19.2.4")throw Error(r(527,j0,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var oy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{Ae=vu.inject(oy),Ee=vu}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=tg,d=ng,S=ig;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=F0(e,1,!1,null,null,a,o,null,c,d,S,Y0),e[qi]=n.current,Yf(e),new dd(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",d=tg,S=ng,A=ig,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=F0(e,1,!0,n,a??null,o,c,B,d,S,A,Y0),n.context=I0(null),a=n.current,o=$n(),o=Hr(o),c=Fa(o),c.callback=null,Ia(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Li(n),e[qi]=n.current,Yf(e),new _u(n)},Bo.version="19.2.4",Bo}var a_;function _y(){if(a_)return md.exports;a_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),md.exports=gy(),md.exports}var vy=_y();var r_="popstate";function s_(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function xy(s={}){function t(r,l){let u=l.state?.masked,{pathname:f,search:p,hash:m}=u||r.location;return th("",{pathname:f,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:Zo(l)}return yy(t,i,null,s)}function Jt(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function ki(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sy(){return Math.random().toString(36).substring(2,10)}function o_(s,t){return{usr:s.state,key:s.key,idx:t,masked:s.unstable_mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function th(s,t,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Vs(t):t,state:i,key:t&&t.key||r||Sy(),unstable_mask:l}}function Zo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Vs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function yy(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,p="POP",m=null,h=v();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function v(){return(f.state||{idx:null}).idx}function _(){p="POP";let x=v(),y=x==null?null:x-h;h=x,m&&m({action:p,location:C.location,delta:y})}function g(x,y){p="PUSH";let w=s_(x)?x:th(C.location,x,y);h=v()+1;let D=o_(w,h),N=C.createHref(w.unstable_mask||w);try{f.pushState(D,"",N)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(N)}u&&m&&m({action:p,location:C.location,delta:1})}function M(x,y){p="REPLACE";let w=s_(x)?x:th(C.location,x,y);h=v();let D=o_(w,h),N=C.createHref(w.unstable_mask||w);f.replaceState(D,"",N),u&&m&&m({action:p,location:C.location,delta:0})}function b(x){return My(x)}let C={get action(){return p},get location(){return s(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(r_,_),m=x,()=>{l.removeEventListener(r_,_),m=null}},createHref(x){return t(l,x)},createURL:b,encodeLocation(x){let y=b(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:M,go(x){return f.go(x)}};return C}function My(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function ov(s,t,i="/"){return Ey(s,t,i,!1)}function Ey(s,t,i,r){let l=typeof t=="string"?Vs(t):t,u=ya(l.pathname||"/",i);if(u==null)return null;let f=lv(s);by(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let h=Py(u);p=Ly(f[m],h,r)}return p}function lv(s,t=[],i=[],r="",l=!1){let u=(f,p,m=l,h)=>{let v={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&m)return;Jt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let _=zi([r,v.relativePath]),g=i.concat(v);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),lv(f.children,t,g,_,m)),!(f.path==null&&!f.index)&&t.push({path:_,score:Uy(_,f.index),routesMeta:g})};return s.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))u(f,p);else for(let m of uv(f.path))u(f,p,!0,m)}),t}function uv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=uv(r.join("/")),p=[];return p.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&p.push(...f),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function by(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:Ny(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Ty=/^:[\w-]+$/,Ay=3,Ry=2,Cy=1,wy=10,Dy=-2,l_=s=>s==="*";function Uy(s,t){let i=s.split("/"),r=i.length;return i.some(l_)&&(r+=Dy),t&&(r+=Ry),i.filter(l=>!l_(l)).reduce((l,u)=>l+(Ty.test(u)?Ay:u===""?Cy:wy),r)}function Ny(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function Ly(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let p=0;p<r.length;++p){let m=r[p],h=p===r.length-1,v=u==="/"?t:t.slice(u.length)||"/",_=Ju({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},v),g=m.route;if(!_&&h&&i&&!r[r.length-1].route.index&&(_=Ju({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:zi([u,_.pathname]),pathnameBase:zy(zi([u,_.pathnameBase])),route:g}),_.pathnameBase!=="/"&&(u=zi([u,_.pathnameBase]))}return f}function Ju(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Oy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,{paramName:v,isOptional:_},g)=>{if(v==="*"){let b=p[g]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=p[g];return _&&!M?h[v]=void 0:h[v]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:f,pattern:s}}function Oy(s,t=!1,i=!0){ki(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m,h,v)=>{if(r.push({paramName:p,isOptional:m!=null}),m){let _=v.charAt(h+f.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Py(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ki(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ya(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Iy(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Vs(s):s,u;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?u=u_(i.substring(1),"/"):u=u_(i,t)):u=t,{pathname:u,search:Hy(r),hash:Gy(l)}}function u_(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function xd(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function By(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function cv(s){let t=By(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Kh(s,t,i,r=!1){let l;typeof s=="string"?l=Vs(s):(l={...s},Jt(!l.pathname||!l.pathname.includes("?"),xd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),xd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),xd("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,p;if(f==null)p=i;else{let _=t.length-1;if(!r&&f.startsWith("..")){let g=f.split("/");for(;g[0]==="..";)g.shift(),_-=1;l.pathname=g.join("/")}p=_>=0?t[_]:"/"}let m=Iy(l,p),h=f&&f!=="/"&&f.endsWith("/"),v=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(h||v)&&(m.pathname+="/"),m}var zi=s=>s.join("/").replace(/\/\/+/g,"/"),zy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Hy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Gy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Vy=class{constructor(s,t,i,r=!1){this.status=s,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function ky(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function Xy(s){return s.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function dv(s,t){let i=s;if(typeof i!="string"||!Fy.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(fv)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),p=ya(f.pathname,t);f.origin===u.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{ki(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hv=["POST","PUT","PATCH","DELETE"];new Set(hv);var Wy=["GET",...hv];new Set(Wy);var ks=ce.createContext(null);ks.displayName="DataRouter";var ic=ce.createContext(null);ic.displayName="DataRouterState";var qy=ce.createContext(!1),pv=ce.createContext({isTransitioning:!1});pv.displayName="ViewTransition";var Yy=ce.createContext(new Map);Yy.displayName="Fetchers";var jy=ce.createContext(null);jy.displayName="Await";var pi=ce.createContext(null);pi.displayName="Navigation";var $o=ce.createContext(null);$o.displayName="Location";var Ta=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var Qh=ce.createContext(null);Qh.displayName="RouteError";var mv="REACT_ROUTER_ERROR",Zy="REDIRECT",Ky="ROUTE_ERROR_RESPONSE";function Qy(s){if(s.startsWith(`${mv}:${Zy}:{`))try{let t=JSON.parse(s.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Jy(s){if(s.startsWith(`${mv}:${Ky}:{`))try{let t=JSON.parse(s.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Vy(t.status,t.statusText,t.data)}catch{}}function $y(s,{relative:t}={}){Jt(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ce.useContext(pi),{hash:l,pathname:u,search:f}=tl(s,{relative:t}),p=u;return i!=="/"&&(p=u==="/"?i:zi([i,u])),r.createHref({pathname:p,search:f,hash:l})}function el(){return ce.useContext($o)!=null}function lr(){return Jt(el(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext($o).location}var gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _v(s){ce.useContext(pi).static||ce.useLayoutEffect(s)}function Jh(){let{isDataRoute:s}=ce.useContext(Ta);return s?dM():eM()}function eM(){Jt(el(),"useNavigate() may be used only in the context of a <Router> component.");let s=ce.useContext(ks),{basename:t,navigator:i}=ce.useContext(pi),{matches:r}=ce.useContext(Ta),{pathname:l}=lr(),u=JSON.stringify(cv(r)),f=ce.useRef(!1);return _v(()=>{f.current=!0}),ce.useCallback((m,h={})=>{if(ki(f.current,gv),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=Kh(m,JSON.parse(u),l,h.relative==="path");s==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:zi([t,v.pathname])),(h.replace?i.replace:i.push)(v,h.state,h)},[t,i,u,l,s])}ce.createContext(null);function tl(s,{relative:t}={}){let{matches:i}=ce.useContext(Ta),{pathname:r}=lr(),l=JSON.stringify(cv(i));return ce.useMemo(()=>Kh(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function tM(s,t){return vv(s,t)}function vv(s,t,i){Jt(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ce.useContext(pi),{matches:l}=ce.useContext(Ta),u=l[l.length-1],f=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",h=u&&u.route;{let x=h&&h.path||"";Sv(p,!h||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let v=lr(),_;if(t){let x=typeof t=="string"?Vs(t):t;Jt(m==="/"||x.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${x.pathname}" was given in the \`location\` prop.`),_=x}else _=v;let g=_.pathname||"/",M=g;if(m!=="/"){let x=m.replace(/^\//,"").split("/");M="/"+g.replace(/^\//,"").split("/").slice(x.length).join("/")}let b=ov(s,{pathname:M});ki(h||b!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),ki(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=sM(b&&b.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:zi([m,r.encodeLocation?r.encodeLocation(x.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?m:zi([m,r.encodeLocation?r.encodeLocation(x.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),l,i);return t&&C?ce.createElement($o.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,..._},navigationType:"POP"}},C):C}function nM(){let s=fM(),t=ky(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:u},"ErrorBoundary")," or"," ",ce.createElement("code",{style:u},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},t),i?ce.createElement("pre",{style:l},i):null,f)}var iM=ce.createElement(nM,null),xv=class extends ce.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=Jy(s.digest);i&&(s=i)}let t=s!==void 0?ce.createElement(Ta.Provider,{value:this.props.routeContext},ce.createElement(Qh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ce.createElement(aM,{error:s},t):t}};xv.contextType=qy;var Sd=new WeakMap;function aM({children:s,error:t}){let{basename:i}=ce.useContext(pi);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=Qy(t.digest);if(r){let l=Sd.get(t);if(l)throw l;let u=dv(r.location,i);if(fv&&!Sd.get(t))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Sd.set(t,f),f}return ce.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function rM({routeContext:s,match:t,children:i}){let r=ce.useContext(ks);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ce.createElement(Ta.Provider,{value:s},i)}function sM(s,t=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r?.errors;if(u!=null){let v=l.findIndex(_=>_.route.id&&u?.[_.route.id]!==void 0);Jt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let f=!1,p=-1;if(i&&r){f=r.renderFallback;for(let v=0;v<l.length;v++){let _=l[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=v),_.route.id){let{loaderData:g,errors:M}=r,b=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||b){i.isStatic&&(f=!0),p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}}let m=i?.onError,h=r&&m?(v,_)=>{m(v,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Xy(r.matches),errorInfo:_})}:void 0;return l.reduceRight((v,_,g)=>{let M,b=!1,C=null,x=null;r&&(M=u&&_.route.id?u[_.route.id]:void 0,C=_.route.errorElement||iM,f&&(p<0&&g===0?(Sv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,x=null):p===g&&(b=!0,x=_.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,g+1)),w=()=>{let D;return M?D=C:b?D=x:_.route.Component?D=ce.createElement(_.route.Component,null):_.route.element?D=_.route.element:D=v,ce.createElement(rM,{match:_,routeContext:{outlet:v,matches:y,isDataRoute:r!=null},children:D})};return r&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?ce.createElement(xv,{location:r.location,revalidation:r.revalidation,component:C,error:M,children:w(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:h}):w()},null)}function $h(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oM(s){let t=ce.useContext(ks);return Jt(t,$h(s)),t}function lM(s){let t=ce.useContext(ic);return Jt(t,$h(s)),t}function uM(s){let t=ce.useContext(Ta);return Jt(t,$h(s)),t}function ep(s){let t=uM(s),i=t.matches[t.matches.length-1];return Jt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function cM(){return ep("useRouteId")}function fM(){let s=ce.useContext(Qh),t=lM("useRouteError"),i=ep("useRouteError");return s!==void 0?s:t.errors?.[i]}function dM(){let{router:s}=oM("useNavigate"),t=ep("useNavigate"),i=ce.useRef(!1);return _v(()=>{i.current=!0}),ce.useCallback(async(l,u={})=>{ki(i.current,gv),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var c_={};function Sv(s,t,i){!t&&!c_[s]&&(c_[s]=!0,ki(!1,i))}ce.memo(hM);function hM({routes:s,future:t,state:i,isStatic:r,onError:l}){return vv(s,void 0,{state:i,isStatic:r,onError:l})}function ku(s){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){Jt(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=ce.useMemo(()=>({basename:p,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[p,l,u,f]);typeof i=="string"&&(i=Vs(i));let{pathname:h="/",search:v="",hash:_="",state:g=null,key:M="default",unstable_mask:b}=i,C=ce.useMemo(()=>{let x=ya(h,p);return x==null?null:{location:{pathname:x,search:v,hash:_,state:g,key:M,unstable_mask:b},navigationType:r}},[p,h,v,_,g,M,r,b]);return ki(C!=null,`<Router basename="${p}"> is not able to match the URL "${h}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:ce.createElement(pi.Provider,{value:m},ce.createElement($o.Provider,{children:t,value:C}))}function mM({children:s,location:t}){return tM(nh(s),t)}function nh(s,t=[]){let i=[];return ce.Children.forEach(s,(r,l)=>{if(!ce.isValidElement(r))return;let u=[...t,l];if(r.type===ce.Fragment){i.push.apply(i,nh(r.props.children,u));return}Jt(r.type===ku,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=nh(r.props.children,u)),i.push(f)}),i}var Xu="get",Wu="application/x-www-form-urlencoded";function ac(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function gM(s){return ac(s)&&s.tagName.toLowerCase()==="button"}function _M(s){return ac(s)&&s.tagName.toLowerCase()==="form"}function vM(s){return ac(s)&&s.tagName.toLowerCase()==="input"}function xM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function SM(s,t){return s.button===0&&(!t||t==="_self")&&!xM(s)}var xu=null;function yM(){if(xu===null)try{new FormData(document.createElement("form"),0),xu=!1}catch{xu=!0}return xu}var MM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yd(s){return s!=null&&!MM.has(s)?(ki(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wu}"`),null):s}function EM(s,t){let i,r,l,u,f;if(_M(s)){let p=s.getAttribute("action");r=p?ya(p,t):null,i=s.getAttribute("method")||Xu,l=yd(s.getAttribute("enctype"))||Wu,u=new FormData(s)}else if(gM(s)||vM(s)&&(s.type==="submit"||s.type==="image")){let p=s.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||p.getAttribute("action");if(r=m?ya(m,t):null,i=s.getAttribute("formmethod")||p.getAttribute("method")||Xu,l=yd(s.getAttribute("formenctype"))||yd(p.getAttribute("enctype"))||Wu,u=new FormData(p,s),!yM()){let{name:h,type:v,value:_}=s;if(v==="image"){let g=h?`${h}.`:"";u.append(`${g}x`,"0"),u.append(`${g}y`,"0")}else h&&u.append(h,_)}}else{if(ac(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Xu,r=null,l=Wu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function bM(s,t,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:t&&ya(l.pathname,t)==="/"?l.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function TM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function AM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function RM(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await TM(u,i);return f.links?f.links():[]}return[]}));return UM(r.flat(1).filter(AM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function f_(s,t,i,r,l,u){let f=(m,h)=>i[h]?m.route.id!==i[h].route.id:!0,p=(m,h)=>i[h].pathname!==m.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,h)=>f(m,h)||p(m,h)):u==="data"?t.filter((m,h)=>{let v=r.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function CM(s,t,{includeHydrateFallback:i}={}){return wM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function wM(s){return[...new Set(s)]}function DM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function UM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(DM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function yv(){let s=ce.useContext(ks);return tp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function NM(){let s=ce.useContext(ic);return tp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var np=ce.createContext(void 0);np.displayName="FrameworkContext";function Mv(){let s=ce.useContext(np);return tp(s,"You must render this element inside a <HydratedRouter> element"),s}function LM(s,t){let i=ce.useContext(np),[r,l]=ce.useState(!1),[u,f]=ce.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:v,onTouchStart:_}=t,g=ce.useRef(null);ce.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let C=y=>{y.forEach(w=>{f(w.isIntersecting)})},x=new IntersectionObserver(C,{threshold:.5});return g.current&&x.observe(g.current),()=>{x.disconnect()}}},[s]),ce.useEffect(()=>{if(r){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,g,{}]:[u,g,{onFocus:zo(p,M),onBlur:zo(m,b),onMouseEnter:zo(h,M),onMouseLeave:zo(v,b),onTouchStart:zo(_,M)}]:[!1,g,{}]}function zo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function OM({page:s,...t}){let{router:i}=yv(),r=ce.useMemo(()=>ov(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ce.createElement(FM,{page:s,matches:r,...t}):null}function PM(s){let{manifest:t,routeModules:i}=Mv(),[r,l]=ce.useState([]);return ce.useEffect(()=>{let u=!1;return RM(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function FM({page:s,matches:t,...i}){let r=lr(),{future:l,manifest:u,routeModules:f}=Mv(),{basename:p}=yv(),{loaderData:m,matches:h}=NM(),v=ce.useMemo(()=>f_(s,t,h,u,r,"data"),[s,t,h,u,r]),_=ce.useMemo(()=>f_(s,t,h,u,r,"assets"),[s,t,h,u,r]),g=ce.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let C=new Set,x=!1;if(t.forEach(w=>{let D=u.routes[w.route.id];!D||!D.hasLoader||(!v.some(N=>N.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||D.hasClientLoader?x=!0:C.add(w.route.id))}),C.size===0)return[];let y=bM(s,p,l.unstable_trailingSlashAwareDataRequests,"data");return x&&C.size>0&&y.searchParams.set("_routes",t.filter(w=>C.has(w.route.id)).map(w=>w.route.id).join(",")),[y.pathname+y.search]},[p,l.unstable_trailingSlashAwareDataRequests,m,r,u,v,t,s,f]),M=ce.useMemo(()=>CM(_,u),[_,u]),b=PM(_);return ce.createElement(ce.Fragment,null,g.map(C=>ce.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>ce.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),b.map(({key:C,link:x})=>ce.createElement("link",{key:C,nonce:i.nonce,...x,crossOrigin:x.crossOrigin??i.crossOrigin})))}function IM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var BM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{BM&&(window.__reactRouterVersion="7.13.1")}catch{}function zM({basename:s,children:t,unstable_useTransitions:i,window:r}){let l=ce.useRef();l.current==null&&(l.current=xy({window:r,v5Compat:!0}));let u=l.current,[f,p]=ce.useState({action:u.action,location:u.location}),m=ce.useCallback(h=>{i===!1?p(h):ce.startTransition(()=>p(h))},[i]);return ce.useLayoutEffect(()=>u.listen(m),[u,m]),ce.createElement(pM,{basename:s,children:t,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var Ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ip=ce.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,unstable_mask:p,state:m,target:h,to:v,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:M,...b},C){let{basename:x,navigator:y,unstable_useTransitions:w}=ce.useContext(pi),D=typeof v=="string"&&Ev.test(v),N=dv(v,x);v=N.to;let H=$y(v,{relative:l}),z=lr(),F=null;if(p){let Z=Kh(p,[],z.unstable_mask?z.unstable_mask.pathname:"/",!0);x!=="/"&&(Z.pathname=Z.pathname==="/"?x:zi([x,Z.pathname])),F=y.createHref(Z)}let[T,U,he]=LM(r,b),G=kM(v,{replace:f,unstable_mask:p,state:m,target:h,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:M,unstable_useTransitions:w});function J(Z){t&&t(Z),Z.defaultPrevented||G(Z)}let te=!(N.isExternal||u),ue=ce.createElement("a",{...b,...he,href:(te?F:void 0)||N.absoluteURL||H,onClick:te?J:t,ref:IM(C,U),target:h,"data-discover":!D&&i==="render"?"true":void 0});return T&&!D?ce.createElement(ce.Fragment,null,ue,ce.createElement(OM,{page:H})):ue});ip.displayName="Link";var HM=ce.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:p,children:m,...h},v){let _=tl(f,{relative:h.relative}),g=lr(),M=ce.useContext(ic),{navigator:b,basename:C}=ce.useContext(pi),x=M!=null&&jM(_)&&p===!0,y=b.encodeLocation?b.encodeLocation(_).pathname:_.pathname,w=g.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),D=D?D.toLowerCase():null,y=y.toLowerCase()),D&&C&&(D=ya(D,C)||D);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let H=w===y||!l&&w.startsWith(y)&&w.charAt(N)==="/",z=D!=null&&(D===y||!l&&D.startsWith(y)&&D.charAt(y.length)==="/"),F={isActive:H,isPending:z,isTransitioning:x},T=H?t:void 0,U;typeof r=="function"?U=r(F):U=[r,H?"active":null,z?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let he=typeof u=="function"?u(F):u;return ce.createElement(ip,{...h,"aria-current":T,className:U,ref:v,style:he,to:f,viewTransition:p},typeof m=="function"?m(F):m)});HM.displayName="NavLink";var GM=ce.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Xu,action:p,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:g,...M},b)=>{let{unstable_useTransitions:C}=ce.useContext(pi),x=qM(),y=YM(p,{relative:h}),w=f.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&Ev.test(p),N=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let z=H.nativeEvent.submitter,F=z?.getAttribute("formmethod")||f,T=()=>x(z||H.currentTarget,{fetcherKey:t,method:F,navigate:i,replace:l,state:u,relative:h,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:g});C&&i!==!1?ce.startTransition(()=>T()):T()};return ce.createElement("form",{ref:b,method:w,action:y,onSubmit:r?m:N,...M,"data-discover":!D&&s==="render"?"true":void 0})});GM.displayName="Form";function VM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bv(s){let t=ce.useContext(ks);return Jt(t,VM(s)),t}function kM(s,{target:t,replace:i,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m,unstable_useTransitions:h}={}){let v=Jh(),_=lr(),g=tl(s,{relative:f});return ce.useCallback(M=>{if(SM(M,t)){M.preventDefault();let b=i!==void 0?i:Zo(_)===Zo(g),C=()=>v(s,{replace:b,unstable_mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:p,unstable_defaultShouldRevalidate:m});h?ce.startTransition(()=>C()):C()}},[_,v,g,i,r,l,t,s,u,f,p,m,h])}var XM=0,WM=()=>`__${String(++XM)}__`;function qM(){let{router:s}=bv("useSubmit"),{basename:t}=ce.useContext(pi),i=cM(),r=s.fetch,l=s.navigate;return ce.useCallback(async(u,f={})=>{let{action:p,method:m,encType:h,formData:v,body:_}=EM(u,t);if(f.navigate===!1){let g=f.fetcherKey||WM();await r(g,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,t,i])}function YM(s,{relative:t}={}){let{basename:i}=ce.useContext(pi),r=ce.useContext(Ta);Jt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...tl(s||".",{relative:t})},f=lr();if(s==null){u.search=f.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(_=>_).forEach(_=>p.append("index",_));let v=p.toString();u.search=v?`?${v}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:zi([i,u.pathname])),Zo(u)}function jM(s,{relative:t}={}){let i=ce.useContext(pv);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bv("useViewTransitionState"),l=tl(s,{relative:t});if(!i.isTransitioning)return!1;let u=ya(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Ju(l.pathname,f)!=null||Ju(l.pathname,u)!=null}const ap="183",ZM=0,d_=1,KM=2,qu=1,QM=2,Yo=3,or=0,Xn=1,ga=2,va=0,Ps=1,h_=2,p_=3,m_=4,JM=5,Or=100,$M=101,eE=102,tE=103,nE=104,iE=200,aE=201,rE=202,sE=203,ih=204,ah=205,oE=206,lE=207,uE=208,cE=209,fE=210,dE=211,hE=212,pE=213,mE=214,rh=0,sh=1,oh=2,Is=3,lh=4,uh=5,ch=6,fh=7,Tv=0,gE=1,_E=2,Hi=0,Av=1,Rv=2,Cv=3,wv=4,Dv=5,Uv=6,Nv=7,Lv=300,Br=301,Bs=302,Md=303,Ed=304,rc=306,dh=1e3,_a=1001,hh=1002,Tn=1003,vE=1004,Su=1005,wn=1006,bd=1007,Fr=1008,hi=1009,Ov=1010,Pv=1011,Ko=1012,rp=1013,Xi=1014,Ii=1015,Ma=1016,sp=1017,op=1018,Qo=1020,Fv=35902,Iv=35899,Bv=1021,zv=1022,Ri=1023,Ea=1026,Ir=1027,Hv=1028,lp=1029,zs=1030,up=1031,cp=1033,Yu=33776,ju=33777,Zu=33778,Ku=33779,ph=35840,mh=35841,gh=35842,_h=35843,vh=36196,xh=37492,Sh=37496,yh=37488,Mh=37489,Eh=37490,bh=37491,Th=37808,Ah=37809,Rh=37810,Ch=37811,wh=37812,Dh=37813,Uh=37814,Nh=37815,Lh=37816,Oh=37817,Ph=37818,Fh=37819,Ih=37820,Bh=37821,zh=36492,Hh=36494,Gh=36495,Vh=36283,kh=36284,Xh=36285,Wh=36286,xE=3200,SE=0,yE=1,rr="",di="srgb",Hs="srgb-linear",$u="linear",zt="srgb",ys=7680,g_=519,ME=512,EE=513,bE=514,fp=515,TE=516,AE=517,dp=518,RE=519,__=35044,v_="300 es",Bi=2e3,ec=2001;function CE(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wE(){const s=tc("canvas");return s.style.display="block",s}const x_={};function S_(...s){const t="THREE."+s.shift();console.log(t,...s)}function Gv(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function lt(...s){s=Gv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...s)}}function Ut(...s){s=Gv(s);const t="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...s)}}function nc(...s){const t=s.join(" ");t in x_||(x_[t]=!0,lt(...s))}function DE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const UE={[rh]:sh,[oh]:ch,[lh]:fh,[Is]:uh,[sh]:rh,[ch]:oh,[fh]:lh,[uh]:Is};class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,qh=180/Math.PI;function nl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Et(s,t,i){return Math.max(t,Math.min(i,s))}function NE(s,t){return(s%t+t)%t}function Ad(s,t,i){return(1-i)*s+i*t}function Ho(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(t=0,i=0){Pt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,p){let m=r[l+0],h=r[l+1],v=r[l+2],_=r[l+3],g=u[f+0],M=u[f+1],b=u[f+2],C=u[f+3];if(_!==C||m!==g||h!==M||v!==b){let x=m*g+h*M+v*b+_*C;x<0&&(g=-g,M=-M,b=-b,C=-C,x=-x);let y=1-p;if(x<.9995){const w=Math.acos(x),D=Math.sin(w);y=Math.sin(y*w)/D,p=Math.sin(p*w)/D,m=m*y+g*p,h=h*y+M*p,v=v*y+b*p,_=_*y+C*p}else{m=m*y+g*p,h=h*y+M*p,v=v*y+b*p,_=_*y+C*p;const w=1/Math.sqrt(m*m+h*h+v*v+_*_);m*=w,h*=w,v*=w,_*=w}}t[i]=m,t[i+1]=h,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,f){const p=r[l],m=r[l+1],h=r[l+2],v=r[l+3],_=u[f],g=u[f+1],M=u[f+2],b=u[f+3];return t[i]=p*b+v*_+m*M-h*g,t[i+1]=m*b+v*g+h*_-p*M,t[i+2]=h*b+v*M+p*g-m*_,t[i+3]=v*b-p*_-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,p=Math.cos,m=Math.sin,h=p(r/2),v=p(l/2),_=p(u/2),g=m(r/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=g*v*_+h*M*b,this._y=h*M*_-g*v*b,this._z=h*v*b+g*M*_,this._w=h*v*_-g*M*b;break;case"YXZ":this._x=g*v*_+h*M*b,this._y=h*M*_-g*v*b,this._z=h*v*b-g*M*_,this._w=h*v*_+g*M*b;break;case"ZXY":this._x=g*v*_-h*M*b,this._y=h*M*_+g*v*b,this._z=h*v*b+g*M*_,this._w=h*v*_-g*M*b;break;case"ZYX":this._x=g*v*_-h*M*b,this._y=h*M*_+g*v*b,this._z=h*v*b-g*M*_,this._w=h*v*_+g*M*b;break;case"YZX":this._x=g*v*_+h*M*b,this._y=h*M*_+g*v*b,this._z=h*v*b-g*M*_,this._w=h*v*_-g*M*b;break;case"XZY":this._x=g*v*_-h*M*b,this._y=h*M*_-g*v*b,this._z=h*v*b+g*M*_,this._w=h*v*_+g*M*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],p=i[5],m=i[9],h=i[2],v=i[6],_=i[10],g=r+p+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-h)*M,this._z=(f-l)*M}else if(r>p&&r>_){const M=2*Math.sqrt(1+r-p-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-r-_);this._w=(u-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-p);this._w=(f-l)/M,this._x=(u+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=r*v+f*p+l*h-u*m,this._y=l*v+f*m+u*p-r*h,this._z=u*v+f*h+r*m-l*p,this._w=f*v-r*p-l*m-u*h,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,f=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,u=-u,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,p=t.z,m=t.w,h=2*(f*l-p*r),v=2*(p*i-u*l),_=2*(u*r-f*i);return this.x=i+m*h+f*_-p*v,this.y=r+m*v+p*h-u*_,this.z=l+m*_+u*v-f*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*f-r*m,this.z=r*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Rd.copy(this).projectOnVector(t),this.sub(Rd)}reflect(t){return this.sub(Rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new re,y_=new Ws;class pt{constructor(t,i,r,l,u,f,p,m,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,p,m,h)}set(t,i,r,l,u,f,p,m,h){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=f,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],p=r[3],m=r[6],h=r[1],v=r[4],_=r[7],g=r[2],M=r[5],b=r[8],C=l[0],x=l[3],y=l[6],w=l[1],D=l[4],N=l[7],H=l[2],z=l[5],F=l[8];return u[0]=f*C+p*w+m*H,u[3]=f*x+p*D+m*z,u[6]=f*y+p*N+m*F,u[1]=h*C+v*w+_*H,u[4]=h*x+v*D+_*z,u[7]=h*y+v*N+_*F,u[2]=g*C+M*w+b*H,u[5]=g*x+M*D+b*z,u[8]=g*y+M*N+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],h=t[7],v=t[8];return i*f*v-i*p*h-r*u*v+r*p*m+l*u*h-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],h=t[7],v=t[8],_=v*f-p*h,g=p*m-v*u,M=h*u-f*m,b=i*_+r*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=_*C,t[1]=(l*h-v*r)*C,t[2]=(p*r-l*f)*C,t[3]=g*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-p*i)*C,t[6]=M*C,t[7]=(r*m-h*i)*C,t[8]=(f*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,p){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*f+h*p)+f+t,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Cd.makeScale(t,i)),this}rotate(t){return this.premultiply(Cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new pt,M_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LE(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===zt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=Fs(l.r),l.g=Fs(l.g),l.b=Fs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rr?$u:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return nc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return nc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:t,whitePoint:r,transfer:$u,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:zt,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Rt=LE();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class OE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ms===void 0&&(Ms=tc("canvas")),Ms.width=t.width,Ms.height=t.height;const l=Ms.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ms}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=xa(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:t.width,height:t.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PE=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=nl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?u.push(wd(l[f].image)):u.push(wd(l[f]))}else u=wd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?OE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let FE=0;const Dd=new re;class Fn extends Xs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=_a,l=_a,u=wn,f=Fr,p=Ri,m=hi,h=Fn.DEFAULT_ANISOTROPY,v=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=nl(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dh:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dh:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Lv;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,h=m[0],v=m[4],_=m[8],g=m[1],M=m[5],b=m[9],C=m[2],x=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(b-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(b+x)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(h+1)/2,N=(M+1)/2,H=(y+1)/2,z=(v+g)/4,F=(_+C)/4,T=(b+x)/4;return D>N&&D>H?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=z/r,u=F/r):N>H?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=z/l,u=T/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=F/u,l=T/u),this.set(r,l,u,i),this}let w=Math.sqrt((x-b)*(x-b)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(x-b)/w,this.y=(_-C)/w,this.z=(g-v)/w,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IE extends Xs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Fn(l),f=r.count;for(let p=0;p<f;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends IE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Vv extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(t,i,r,l,u,f,p,m,h,v,_,g,M,b,C,x){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,p,m,h,v,_,g,M,b,C,x)}set(t,i,r,l,u,f,p,m,h,v,_,g,M,b,C,x){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=u,y[5]=f,y[9]=p,y[13]=m,y[2]=h,y[6]=v,y[10]=_,y[14]=g,y[3]=M,y[7]=b,y[11]=C,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Es.setFromMatrixColumn(t,0).length(),u=1/Es.setFromMatrixColumn(t,1).length(),f=1/Es.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const g=f*v,M=f*_,b=p*v,C=p*_;i[0]=m*v,i[4]=-m*_,i[8]=h,i[1]=M+b*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=b+M*h,i[10]=f*m}else if(t.order==="YXZ"){const g=m*v,M=m*_,b=h*v,C=h*_;i[0]=g+C*p,i[4]=b*p-M,i[8]=f*h,i[1]=f*_,i[5]=f*v,i[9]=-p,i[2]=M*p-b,i[6]=C+g*p,i[10]=f*m}else if(t.order==="ZXY"){const g=m*v,M=m*_,b=h*v,C=h*_;i[0]=g-C*p,i[4]=-f*_,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*v,i[9]=C-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const g=f*v,M=f*_,b=p*v,C=p*_;i[0]=m*v,i[4]=b*h-M,i[8]=g*h+C,i[1]=m*_,i[5]=C*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,M=f*h,b=p*m,C=p*h;i[0]=m*v,i[4]=C-g*_,i[8]=b*_+M,i[1]=_,i[5]=f*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*_+b,i[10]=g-C*_}else if(t.order==="XZY"){const g=f*m,M=f*h,b=p*m,C=p*h;i[0]=m*v,i[4]=-_,i[8]=h*v,i[1]=g*_+C,i[5]=f*v,i[9]=M*_-b,i[2]=b*_-M,i[6]=p*v,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zE,t,HE)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),$a.crossVectors(r,ei),$a.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),$a.crossVectors(r,ei)),$a.normalize(),yu.crossVectors(ei,$a),l[0]=$a.x,l[4]=yu.x,l[8]=ei.x,l[1]=$a.y,l[5]=yu.y,l[9]=ei.y,l[2]=$a.z,l[6]=yu.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],p=r[4],m=r[8],h=r[12],v=r[1],_=r[5],g=r[9],M=r[13],b=r[2],C=r[6],x=r[10],y=r[14],w=r[3],D=r[7],N=r[11],H=r[15],z=l[0],F=l[4],T=l[8],U=l[12],he=l[1],G=l[5],J=l[9],te=l[13],ue=l[2],Z=l[6],O=l[10],I=l[14],oe=l[3],me=l[7],Te=l[11],P=l[15];return u[0]=f*z+p*he+m*ue+h*oe,u[4]=f*F+p*G+m*Z+h*me,u[8]=f*T+p*J+m*O+h*Te,u[12]=f*U+p*te+m*I+h*P,u[1]=v*z+_*he+g*ue+M*oe,u[5]=v*F+_*G+g*Z+M*me,u[9]=v*T+_*J+g*O+M*Te,u[13]=v*U+_*te+g*I+M*P,u[2]=b*z+C*he+x*ue+y*oe,u[6]=b*F+C*G+x*Z+y*me,u[10]=b*T+C*J+x*O+y*Te,u[14]=b*U+C*te+x*I+y*P,u[3]=w*z+D*he+N*ue+H*oe,u[7]=w*F+D*G+N*Z+H*me,u[11]=w*T+D*J+N*O+H*Te,u[15]=w*U+D*te+N*I+H*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],p=t[5],m=t[9],h=t[13],v=t[2],_=t[6],g=t[10],M=t[14],b=t[3],C=t[7],x=t[11],y=t[15],w=m*M-h*g,D=p*M-h*_,N=p*g-m*_,H=f*M-h*v,z=f*g-m*v,F=f*_-p*v;return i*(C*w-x*D+y*N)-r*(b*w-x*H+y*z)+l*(b*D-C*H+y*F)-u*(b*N-C*z+x*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],p=t[5],m=t[6],h=t[7],v=t[8],_=t[9],g=t[10],M=t[11],b=t[12],C=t[13],x=t[14],y=t[15],w=i*p-r*f,D=i*m-l*f,N=i*h-u*f,H=r*m-l*p,z=r*h-u*p,F=l*h-u*m,T=v*C-_*b,U=v*x-g*b,he=v*y-M*b,G=_*x-g*C,J=_*y-M*C,te=g*y-M*x,ue=w*te-D*J+N*G+H*he-z*U+F*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ue;return t[0]=(p*te-m*J+h*G)*Z,t[1]=(l*J-r*te-u*G)*Z,t[2]=(C*F-x*z+y*H)*Z,t[3]=(g*z-_*F-M*H)*Z,t[4]=(m*he-f*te-h*U)*Z,t[5]=(i*te-l*he+u*U)*Z,t[6]=(x*N-b*F-y*D)*Z,t[7]=(v*F-g*N+M*D)*Z,t[8]=(f*J-p*he+h*T)*Z,t[9]=(r*he-i*J-u*T)*Z,t[10]=(b*z-C*N+y*w)*Z,t[11]=(_*N-v*z-M*w)*Z,t[12]=(p*U-f*G-m*T)*Z,t[13]=(i*G-r*U+l*T)*Z,t[14]=(C*D-b*H-x*w)*Z,t[15]=(v*H-_*D+g*w)*Z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,p=t.y,m=t.z,h=u*f,v=u*p;return this.set(h*f+r,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+r,v*m-l*f,0,h*m-l*p,v*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,p=i._z,m=i._w,h=u+u,v=f+f,_=p+p,g=u*h,M=u*v,b=u*_,C=f*v,x=f*_,y=p*_,w=m*h,D=m*v,N=m*_,H=r.x,z=r.y,F=r.z;return l[0]=(1-(C+y))*H,l[1]=(M+N)*H,l[2]=(b-D)*H,l[3]=0,l[4]=(M-N)*z,l[5]=(1-(g+y))*z,l[6]=(x+w)*z,l[7]=0,l[8]=(b+D)*F,l[9]=(x-w)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let f=Es.set(l[0],l[1],l[2]).length();const p=Es.set(l[4],l[5],l[6]).length(),m=Es.set(l[8],l[9],l[10]).length();u<0&&(f=-f),Mi.copy(this);const h=1/f,v=1/p,_=1/m;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=v,Mi.elements[5]*=v,Mi.elements[6]*=v,Mi.elements[8]*=_,Mi.elements[9]*=_,Mi.elements[10]*=_,i.setFromRotationMatrix(Mi),r.x=f,r.y=p,r.z=m,this}makePerspective(t,i,r,l,u,f,p=Bi,m=!1){const h=this.elements,v=2*u/(i-t),_=2*u/(r-l),g=(i+t)/(i-t),M=(r+l)/(r-l);let b,C;if(m)b=u/(f-u),C=f*u/(f-u);else if(p===Bi)b=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(p===ec)b=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,u,f,p=Bi,m=!1){const h=this.elements,v=2/(i-t),_=2/(r-l),g=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,C;if(m)b=1/(f-u),C=f/(f-u);else if(p===Bi)b=-2/(f-u),C=-(f+u)/(f-u);else if(p===ec)b=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Es=new re,Mi=new hn,zE=new re(0,0,0),HE=new re(1,1,1),$a=new re,yu=new re,ei=new re,b_=new hn,T_=new Ws;class ba{constructor(t=0,i=0,r=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],p=l[8],m=l[1],h=l[5],v=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T_.setFromEuler(this),this.setFromQuaternion(T_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class kv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let GE=0;const A_=new re,bs=new Ws,fa=new hn,Mu=new re,Go=new re,VE=new re,kE=new Ws,R_=new re(1,0,0),C_=new re(0,1,0),w_=new re(0,0,1),D_={type:"added"},XE={type:"removed"},Ts={type:"childadded",child:null},Ud={type:"childremoved",child:null};class ni extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new re,i=new ba,r=new Ws,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new pt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(R_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(w_,t)}translateOnAxis(t,i){return A_.copy(t).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(R_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(w_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Mu.copy(t):Mu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Go,Mu,this.up):fa.lookAt(Mu,Go,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(fa),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(XE),Ud.child=t,this.dispatchEvent(Ud),Ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D_),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,VE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,kE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const _=m[h];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(t.materials,this.material[m]));l.material=p}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),h=f(t.textures),v=f(t.images),_=f(t.shapes),g=f(t.skeletons),M=f(t.animations),b=f(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new re(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Eu extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){f=!0;for(const C of t.hand.values()){const x=i.getJointPose(C,r),y=this._getHandJoint(h,C);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Eu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},bu={h:0,s:0,l:0};function Ld(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ht{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Rt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Rt.workingColorSpace){if(t=NE(t,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Ld(f,u,t+1/3),this.g=Ld(f,u,t),this.b=Ld(f,u,t-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&lt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:lt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const r=Xv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Rt.workingToColorSpace(Cn.copy(this),t),Math.round(Et(Cn.r*255,0,255))*65536+Math.round(Et(Cn.g*255,0,255))*256+Math.round(Et(Cn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Rt.workingColorSpace){Rt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,f=Math.max(r,l,u),p=Math.min(r,l,u);let m,h;const v=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=v<=.5?_/(f+p):_/(2-f-p),f){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=h,t.l=v,t}getRGB(t,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=di){Rt.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(er),this.setHSL(er.h+t,er.s+i,er.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(er),t.getHSL(bu);const r=Ad(er.h,bu.h,i),l=Ad(er.s,bu.s,i),u=Ad(er.l,bu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ht;Ht.NAMES=Xv;class qE extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ei=new re,da=new re,Od=new re,ha=new re,As=new re,Rs=new re,U_=new re,Pd=new re,Fd=new re,Id=new re,Bd=new an,zd=new an,Hd=new an;class Ai{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),da.subVectors(r,i),Od.subVectors(t,i);const f=Ei.dot(Ei),p=Ei.dot(da),m=Ei.dot(Od),h=da.dot(da),v=da.dot(Od),_=f*h-p*p;if(_===0)return u.set(0,0,0),null;const g=1/_,M=(h*m-p*v)*g,b=(f*v-p*m)*g;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,r,l,u,f,p,m){return this.getBarycoord(t,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(f,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(t,i,r,l,u,f){return Bd.setScalar(0),zd.setScalar(0),Hd.setScalar(0),Bd.fromBufferAttribute(t,i),zd.fromBufferAttribute(t,r),Hd.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Bd,u.x),f.addScaledVector(zd,u.y),f.addScaledVector(Hd,u.z),f}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),da.subVectors(t,i),Ei.cross(da).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ei.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ai.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,p;As.subVectors(l,r),Rs.subVectors(u,r),Pd.subVectors(t,r);const m=As.dot(Pd),h=Rs.dot(Pd);if(m<=0&&h<=0)return i.copy(r);Fd.subVectors(t,l);const v=As.dot(Fd),_=Rs.dot(Fd);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*h;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(r).addScaledVector(As,f);Id.subVectors(t,u);const M=As.dot(Id),b=Rs.dot(Id);if(b>=0&&M<=b)return i.copy(u);const C=M*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(Rs,p);const x=v*b-M*_;if(x<=0&&_-v>=0&&M-b>=0)return U_.subVectors(u,l),p=(_-v)/(_-v+(M-b)),i.copy(l).addScaledVector(U_,p);const y=1/(x+C+g);return f=C*y,p=g*y,i.copy(r).addScaledVector(As,f).addScaledVector(Rs,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class il{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=u.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,bi):bi.fromBufferAttribute(u,f),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tu.copy(r.boundingBox)),Tu.applyMatrix4(t.matrixWorld),this.union(Tu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Au.subVectors(this.max,Vo),Cs.subVectors(t.a,Vo),ws.subVectors(t.b,Vo),Ds.subVectors(t.c,Vo),tr.subVectors(ws,Cs),nr.subVectors(Ds,ws),Rr.subVectors(Cs,Ds);let i=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Rr.z,Rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Rr.z,0,-Rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Rr.y,Rr.x,0];return!Gd(i,Cs,ws,Ds,Au)||(i=[1,0,0,0,1,0,0,0,1],!Gd(i,Cs,ws,Ds,Au))?!1:(Ru.crossVectors(tr,nr),i=[Ru.x,Ru.y,Ru.z],Gd(i,Cs,ws,Ds,Au))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new re,new re,new re,new re,new re,new re,new re,new re],bi=new re,Tu=new il,Cs=new re,ws=new re,Ds=new re,tr=new re,nr=new re,Rr=new re,Vo=new re,Au=new re,Ru=new re,Cr=new re;function Gd(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Cr.fromArray(s,u);const p=l.x*Math.abs(Cr.x)+l.y*Math.abs(Cr.y)+l.z*Math.abs(Cr.z),m=t.dot(Cr),h=i.dot(Cr),v=r.dot(Cr);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const dn=new re,Cu=new Pt;let YE=0;class Vi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=__,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Cu.fromBufferAttribute(this,i),Cu.applyMatrix3(t),this.setXY(i,Cu.x,Cu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ho(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==__&&(t.usage=this.usage),t}}class Wv extends Vi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class qv extends Vi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sa extends Vi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const jE=new il,ko=new re,Vd=new re;class pp{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):jE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(Vd)),this.expandByPoint(ko.copy(t.center).sub(Vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ZE=0;const fi=new hn,kd=new ni,Us=new re,ti=new il,Xo=new il,Sn=new re;class Aa extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(CE(t)?qv:Wv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return kd.lookAt(t),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Sa(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const p=i[u];Xo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ti.min,Xo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,Xo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(Xo.min),ti.expandByPoint(Xo.max))}ti.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)Sn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let u=0,f=i.length;u<f;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Sn.fromBufferAttribute(p,h),m&&(Us.fromBufferAttribute(t,h),Sn.add(Us)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new re,m[T]=new re;const h=new re,v=new re,_=new re,g=new Pt,M=new Pt,b=new Pt,C=new re,x=new re;function y(T,U,he){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,U),_.fromBufferAttribute(r,he),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,U),b.fromBufferAttribute(u,he),v.sub(h),_.sub(h),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(G),x.copy(_).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(G),p[T].add(C),p[U].add(C),p[he].add(C),m[T].add(x),m[U].add(x),m[he].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,U=w.length;T<U;++T){const he=w[T],G=he.start,J=he.count;for(let te=G,ue=G+J;te<ue;te+=3)y(t.getX(te+0),t.getX(te+1),t.getX(te+2))}const D=new re,N=new re,H=new re,z=new re;function F(T){H.fromBufferAttribute(l,T),z.copy(H);const U=p[T];D.copy(U),D.sub(H.multiplyScalar(H.dot(U))).normalize(),N.crossVectors(z,U);const G=N.dot(m[T])<0?-1:1;f.setXYZW(T,D.x,D.y,D.z,G)}for(let T=0,U=w.length;T<U;++T){const he=w[T],G=he.start,J=he.count;for(let te=G,ue=G+J;te<ue;te+=3)F(t.getX(te+0)),F(t.getX(te+1)),F(t.getX(te+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new re,u=new re,f=new re,p=new re,m=new re,h=new re,v=new re,_=new re;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),C=t.getX(g+1),x=t.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,x),v.subVectors(f,u),_.subVectors(l,u),v.cross(_),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,x),p.add(v),m.add(v),h.add(v),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,u),_.subVectors(l,u),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const h=p.array,v=p.itemSize,_=p.normalized,g=new h.constructor(m.length*v);let M=0,b=0;for(let C=0,x=m.length;C<x;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let y=0;y<v;y++)g[b++]=h[M++]}return new Vi(g,v,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Aa,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let v=0,_=h.length;v<_;v++){const g=h[v],M=t(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let _=0,g=h.length;_<g;_++){const M=h[_];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const u=t.morphAttributes;for(const h in u){const v=[],_=u[h];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let h=0,v=f.length;h<v;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KE=0;class sc extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Ps,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=ah,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ih&&(r.blendSrc=this.blendSrc),this.blendDst!==ah&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const p in u){const m=u[p];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ma=new re,Xd=new re,wu=new re,ir=new re,Wd=new re,Du=new re,qd=new re;class QE{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Xd.copy(t).add(i).multiplyScalar(.5),wu.copy(i).sub(t).normalize(),ir.copy(this.origin).sub(Xd);const u=t.distanceTo(i)*.5,f=-this.direction.dot(wu),p=ir.dot(this.direction),m=-ir.dot(wu),h=ir.lengthSq(),v=Math.abs(1-f*f);let _,g,M,b;if(v>0)if(_=f*m-p,g=f*p-m,b=u*v,_>=0)if(g>=-b)if(g<=b){const C=1/v;_*=C,g*=C,M=_*(_+f*g+2*p)+g*(f*_+g+2*m)+h}else g=u,_=Math.max(0,-(f*g+p)),M=-_*_+g*(g+2*m)+h;else g=-u,_=Math.max(0,-(f*g+p)),M=-_*_+g*(g+2*m)+h;else g<=-b?(_=Math.max(0,-(-f*u+p)),g=_>0?-u:Math.min(Math.max(-u,-m),u),M=-_*_+g*(g+2*m)+h):g<=b?(_=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+h):(_=Math.max(0,-(f*u+p)),g=_>0?u:Math.min(Math.max(-u,-m),u),M=-_*_+g*(g+2*m)+h);else g=f>0?-u:u,_=Math.max(0,-(f*g+p)),M=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Xd).addScaledVector(wu,g),M}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),p=r-f,m=r+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,p,m;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),v>=0?(u=(t.min.y-g.y)*v,f=(t.max.y-g.y)*v):(u=(t.max.y-g.y)*v,f=(t.min.y-g.y)*v),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),_>=0?(p=(t.min.z-g.z)*_,m=(t.max.z-g.z)*_):(p=(t.max.z-g.z)*_,m=(t.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,r,l,u){Wd.subVectors(i,t),Du.subVectors(r,t),qd.crossVectors(Wd,Du);let f=this.direction.dot(qd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ir.subVectors(this.origin,t);const m=p*this.direction.dot(Du.crossVectors(ir,Du));if(m<0)return null;const h=p*this.direction.dot(Wd.cross(ir));if(h<0||m+h>f)return null;const v=-p*ir.dot(qd);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yv extends sc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const N_=new hn,wr=new QE,Uu=new pp,L_=new re,Nu=new re,Lu=new re,Ou=new re,Yd=new re,Pu=new re,O_=new re,Fu=new re;class Wi extends ni{constructor(t=new Aa,i=new Yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(u&&p){Pu.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const v=p[m],_=u[m];v!==0&&(Yd.fromBufferAttribute(_,t),f?Pu.addScaledVector(Yd,v):Pu.addScaledVector(Yd.sub(i),v))}i.add(Pu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uu.copy(r.boundingSphere),Uu.applyMatrix4(u),wr.copy(t.ray).recast(t.near),!(Uu.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Uu,L_)===null||wr.origin.distanceToSquared(L_)>(t.far-t.near)**2))&&(N_.copy(u).invert(),wr.copy(t.ray).applyMatrix4(N_),!(r.boundingBox!==null&&wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,wr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,g=u.groups,M=u.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,C=g.length;b<C;b++){const x=g[b],y=f[x.materialIndex],w=Math.max(x.start,M.start),D=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let N=w,H=D;N<H;N+=3){const z=p.getX(N),F=p.getX(N+1),T=p.getX(N+2);l=Iu(this,y,t,r,h,v,_,z,F,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let x=b,y=C;x<y;x+=3){const w=p.getX(x),D=p.getX(x+1),N=p.getX(x+2);l=Iu(this,f,t,r,h,v,_,w,D,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,C=g.length;b<C;b++){const x=g[b],y=f[x.materialIndex],w=Math.max(x.start,M.start),D=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let N=w,H=D;N<H;N+=3){const z=N,F=N+1,T=N+2;l=Iu(this,y,t,r,h,v,_,z,F,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let x=b,y=C;x<y;x+=3){const w=x,D=x+1,N=x+2;l=Iu(this,f,t,r,h,v,_,w,D,N),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function JE(s,t,i,r,l,u,f,p){let m;if(t.side===Xn?m=r.intersectTriangle(f,u,l,!0,p):m=r.intersectTriangle(l,u,f,t.side===or,p),m===null)return null;Fu.copy(p),Fu.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Fu);return h<i.near||h>i.far?null:{distance:h,point:Fu.clone(),object:s}}function Iu(s,t,i,r,l,u,f,p,m,h){s.getVertexPosition(p,Nu),s.getVertexPosition(m,Lu),s.getVertexPosition(h,Ou);const v=JE(s,t,i,r,Nu,Lu,Ou,O_);if(v){const _=new re;Ai.getBarycoord(O_,Nu,Lu,Ou,_),l&&(v.uv=Ai.getInterpolatedAttribute(l,p,m,h,_,new Pt)),u&&(v.uv1=Ai.getInterpolatedAttribute(u,p,m,h,_,new Pt)),f&&(v.normal=Ai.getInterpolatedAttribute(f,p,m,h,_,new re),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Ai.getNormal(Nu,Lu,Ou,g.normal),v.face=g,v.barycoord=_}return v}class $E extends Fn{constructor(t=null,i=1,r=1,l,u,f,p,m,h=Tn,v=Tn,_,g){super(null,f,p,m,h,v,l,u,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new re,eb=new re,tb=new pt;class Lr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=jd.subVectors(r,i).cross(eb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||tb.getNormalMatrix(t),l=this.coplanarPoint(jd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new pp,nb=new Pt(.5,.5),Bu=new re;class jv{constructor(t=new Lr,i=new Lr,r=new Lr,l=new Lr,u=new Lr,f=new Lr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Bi,r=!1){const l=this.planes,u=t.elements,f=u[0],p=u[1],m=u[2],h=u[3],v=u[4],_=u[5],g=u[6],M=u[7],b=u[8],C=u[9],x=u[10],y=u[11],w=u[12],D=u[13],N=u[14],H=u[15];if(l[0].setComponents(h-f,M-v,y-b,H-w).normalize(),l[1].setComponents(h+f,M+v,y+b,H+w).normalize(),l[2].setComponents(h+p,M+_,y+C,H+D).normalize(),l[3].setComponents(h-p,M-_,y-C,H-D).normalize(),r)l[4].setComponents(m,g,x,N).normalize(),l[5].setComponents(h-m,M-g,y-x,H-N).normalize();else if(l[4].setComponents(h-m,M-g,y-x,H-N).normalize(),i===Bi)l[5].setComponents(h+m,M+g,y+x,H+N).normalize();else if(i===ec)l[5].setComponents(m,g,x,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);const i=nb.distanceTo(t.center);return Dr.radius=.7071067811865476+i,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Bu.x=l.normal.x>0?t.max.x:t.min.x,Bu.y=l.normal.y>0?t.max.y:t.min.y,Bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zv extends Fn{constructor(t=[],i=Br,r,l,u,f,p,m,h,v){super(t,i,r,l,u,f,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jo extends Fn{constructor(t,i,r=Xi,l,u,f,p=Tn,m=Tn,h,v=Ea,_=1){if(v!==Ea&&v!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,u,f,p,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ib extends Jo{constructor(t,i=Xi,r=Br,l,u,f=Tn,p=Tn,m,h=Ea){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,r,l,u,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class al extends Aa{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const p=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],h=[],v=[],_=[];let g=0,M=0;b("z","y","x",-1,-1,r,i,t,f,u,0),b("z","y","x",1,-1,r,i,-t,f,u,1),b("x","z","y",1,1,t,r,i,l,f,2),b("x","z","y",1,-1,t,r,-i,l,f,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Sa(h,3)),this.setAttribute("normal",new Sa(v,3)),this.setAttribute("uv",new Sa(_,2));function b(C,x,y,w,D,N,H,z,F,T,U){const he=N/F,G=H/T,J=N/2,te=H/2,ue=z/2,Z=F+1,O=T+1;let I=0,oe=0;const me=new re;for(let Te=0;Te<O;Te++){const P=Te*G-te;for(let Y=0;Y<Z;Y++){const ve=Y*he-J;me[C]=ve*w,me[x]=P*D,me[y]=ue,h.push(me.x,me.y,me.z),me[C]=0,me[x]=0,me[y]=z>0?1:-1,v.push(me.x,me.y,me.z),_.push(Y/F),_.push(1-Te/T),I+=1}}for(let Te=0;Te<T;Te++)for(let P=0;P<F;P++){const Y=g+P+Z*Te,ve=g+P+Z*(Te+1),Ce=g+(P+1)+Z*(Te+1),Pe=g+(P+1)+Z*Te;m.push(Y,ve,Pe),m.push(ve,Ce,Pe),oe+=6}p.addGroup(M,oe,U),M+=oe,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class rl extends Aa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,v=m+1,_=t/p,g=i/m,M=[],b=[],C=[],x=[];for(let y=0;y<v;y++){const w=y*g-f;for(let D=0;D<h;D++){const N=D*_-u;b.push(N,-w,0),C.push(0,0,1),x.push(D/p),x.push(1-y/m)}}for(let y=0;y<m;y++)for(let w=0;w<p;w++){const D=w+h*y,N=w+h*(y+1),H=w+1+h*(y+1),z=w+1+h*y;M.push(D,N,z),M.push(N,H,z)}this.setIndex(M),this.setAttribute("position",new Sa(b,3)),this.setAttribute("normal",new Sa(C,3)),this.setAttribute("uv",new Sa(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.widthSegments,t.heightSegments)}}function Gs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(s){const t={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)t[l]=r[l]}return t}function ab(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Qv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}const rb={clone:Gs,merge:Pn};var sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends sc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sb,this.fragmentShader=ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=ab(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class lb extends Ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ub extends sc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cb extends sc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zu=new re,Hu=new Ws,Oi=new re;class Jv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zu,Hu,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Hu,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(zu,Hu,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,Hu,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new re,P_=new Pt,F_=new Pt;class Ti extends Jv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,i){return this.getViewBounds(t,P_,F_),i.subVectors(F_,P_)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Td*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/h,l*=f.width/m,r*=f.height/h}const p=this.filmOffset;p!==0&&(u+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class mp extends Jv{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,f=u+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ns=-90,Ls=1;class fb extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Ns,Ls,t,i);l.layers=this.layers,this.add(l);const u=new Ti(Ns,Ls,t,i);u.layers=this.layers,this.add(u);const f=new Ti(Ns,Ls,t,i);f.layers=this.layers,this.add(f);const p=new Ti(Ns,Ls,t,i);p.layers=this.layers,this.add(p);const m=new Ti(Ns,Ls,t,i);m.layers=this.layers,this.add(m);const h=new Ti(Ns,Ls,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,p,m]=i;for(const h of i)this.remove(h);if(t===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ec)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,p,m,h,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(r,2,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(_,g,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class db extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function I_(s,t,i,r){const l=hb(r);switch(i){case Bv:return s*t;case Hv:return s*t/l.components*l.byteLength;case lp:return s*t/l.components*l.byteLength;case zs:return s*t*2/l.components*l.byteLength;case up:return s*t*2/l.components*l.byteLength;case zv:return s*t*3/l.components*l.byteLength;case Ri:return s*t*4/l.components*l.byteLength;case cp:return s*t*4/l.components*l.byteLength;case Yu:case ju:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zu:case Ku:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mh:case _h:return Math.max(s,16)*Math.max(t,8)/4;case ph:case gh:return Math.max(s,8)*Math.max(t,8)/2;case vh:case xh:case yh:case Mh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sh:case Eh:case bh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zh:case Hh:case Gh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vh:case kh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xh:case Wh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hb(s){switch(s){case hi:case Ov:return{byteLength:1,components:1};case Ko:case Pv:case Ma:return{byteLength:2,components:1};case sp:case op:return{byteLength:2,components:4};case Xi:case rp:case Ii:return{byteLength:4,components:1};case Fv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);function $v(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function pb(s){const t=new WeakMap;function i(p,m){const h=p.array,v=p.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const v=m.array,_=m.updateRanges;if(s.bindBuffer(h,p),_.length===0)s.bufferSubData(h,0,v);else{_.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<_.length;M++){const b=_[g],C=_[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,b=_.length;M<b;M++){const C=_[M];s.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:f}}var mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_b=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ET=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$T=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:_b,alphamap_pars_fragment:vb,alphatest_fragment:xb,alphatest_pars_fragment:Sb,aomap_fragment:yb,aomap_pars_fragment:Mb,batching_pars_vertex:Eb,batching_vertex:bb,begin_vertex:Tb,beginnormal_vertex:Ab,bsdfs:Rb,iridescence_fragment:Cb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Db,clipping_planes_pars_fragment:Ub,clipping_planes_pars_vertex:Nb,clipping_planes_vertex:Lb,color_fragment:Ob,color_pars_fragment:Pb,color_pars_vertex:Fb,color_vertex:Ib,common:Bb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Hb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Vb,emissivemap_fragment:kb,emissivemap_pars_fragment:Xb,colorspace_fragment:Wb,colorspace_pars_fragment:qb,envmap_fragment:Yb,envmap_common_pars_fragment:jb,envmap_pars_fragment:Zb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:oT,envmap_vertex:Qb,fog_vertex:Jb,fog_pars_vertex:$b,fog_fragment:eT,fog_pars_fragment:tT,gradientmap_pars_fragment:nT,lightmap_pars_fragment:iT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:rT,lights_pars_begin:sT,lights_toon_fragment:lT,lights_toon_pars_fragment:uT,lights_phong_fragment:cT,lights_phong_pars_fragment:fT,lights_physical_fragment:dT,lights_physical_pars_fragment:hT,lights_fragment_begin:pT,lights_fragment_maps:mT,lights_fragment_end:gT,logdepthbuf_fragment:_T,logdepthbuf_pars_fragment:vT,logdepthbuf_pars_vertex:xT,logdepthbuf_vertex:ST,map_fragment:yT,map_pars_fragment:MT,map_particle_fragment:ET,map_particle_pars_fragment:bT,metalnessmap_fragment:TT,metalnessmap_pars_fragment:AT,morphinstance_vertex:RT,morphcolor_vertex:CT,morphnormal_vertex:wT,morphtarget_pars_vertex:DT,morphtarget_vertex:UT,normal_fragment_begin:NT,normal_fragment_maps:LT,normal_pars_fragment:OT,normal_pars_vertex:PT,normal_vertex:FT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:BT,clearcoat_normal_fragment_maps:zT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:VT,packing:kT,premultiplied_alpha_fragment:XT,project_vertex:WT,dithering_fragment:qT,dithering_pars_fragment:YT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:a1,specularmap_pars_fragment:r1,tonemapping_fragment:s1,tonemapping_pars_fragment:o1,transmission_fragment:l1,transmission_pars_fragment:u1,uv_pars_fragment:c1,uv_pars_vertex:f1,uv_vertex:d1,worldpos_vertex:h1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:_1,cube_vert:v1,cube_frag:x1,depth_vert:S1,depth_frag:y1,distance_vert:M1,distance_frag:E1,equirect_vert:b1,equirect_frag:T1,linedashed_vert:A1,linedashed_frag:R1,meshbasic_vert:C1,meshbasic_frag:w1,meshlambert_vert:D1,meshlambert_frag:U1,meshmatcap_vert:N1,meshmatcap_frag:L1,meshnormal_vert:O1,meshnormal_frag:P1,meshphong_vert:F1,meshphong_frag:I1,meshphysical_vert:B1,meshphysical_frag:z1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:k1,shadow_vert:X1,shadow_frag:W1,sprite_vert:q1,sprite_frag:Y1},Le={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Fi={basic:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ht(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Pn([Le.common,Le.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Pn([Le.lights,Le.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Fi.physical={uniforms:Pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Gu={r:0,b:0,g:0},Ur=new ba,j1=new hn;function Z1(s,t,i,r,l,u){const f=new Ht(0);let p=l===!0?0:1,m,h,v=null,_=0,g=null;function M(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const N=w.backgroundBlurriness>0;D=t.get(D,N)}return D}function b(w){let D=!1;const N=M(w);N===null?x(f,p):N&&N.isColor&&(x(N,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(w,D){const N=M(D);N&&(N.isCubeTexture||N.mapping===rc)?(h===void 0&&(h=new Wi(new al(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Gs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ur.copy(D.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Ur)),h.material.toneMapped=Rt.getTransfer(N.colorSpace)!==zt,(v!==N||_!==N.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,_=N.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Wi(new rl(2,2),new Ci({name:"BackgroundMaterial",uniforms:Gs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==zt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,_=N.version,g=s.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function x(w,D){w.getRGB(Gu,Qv(s)),i.buffers.color.setClear(Gu.r,Gu.g,Gu.b,D,u)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,D=1){f.set(w),p=D,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:b,addToRenderList:C,dispose:y}}function K1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,f=!1;function p(G,J,te,ue,Z){let O=!1;const I=_(G,ue,te,J);u!==I&&(u=I,h(u.object)),O=M(G,ue,te,Z),O&&b(G,ue,te,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(G,J,te,ue),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function v(G){return s.deleteVertexArray(G)}function _(G,J,te,ue){const Z=ue.wireframe===!0;let O=r[J.id];O===void 0&&(O={},r[J.id]=O);const I=G.isInstancedMesh===!0?G.id:0;let oe=O[I];oe===void 0&&(oe={},O[I]=oe);let me=oe[te.id];me===void 0&&(me={},oe[te.id]=me);let Te=me[Z];return Te===void 0&&(Te=g(m()),me[Z]=Te),Te}function g(G){const J=[],te=[],ue=[];for(let Z=0;Z<i;Z++)J[Z]=0,te[Z]=0,ue[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:te,attributeDivisors:ue,object:G,attributes:{},index:null}}function M(G,J,te,ue){const Z=u.attributes,O=J.attributes;let I=0;const oe=te.getAttributes();for(const me in oe)if(oe[me].location>=0){const P=Z[me];let Y=O[me];if(Y===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;I++}return u.attributesNum!==I||u.index!==ue}function b(G,J,te,ue){const Z={},O=J.attributes;let I=0;const oe=te.getAttributes();for(const me in oe)if(oe[me].location>=0){let P=O[me];P===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),Z[me]=Y,I++}u.attributes=Z,u.attributesNum=I,u.index=ue}function C(){const G=u.newAttributes;for(let J=0,te=G.length;J<te;J++)G[J]=0}function x(G){y(G,0)}function y(G,J){const te=u.newAttributes,ue=u.enabledAttributes,Z=u.attributeDivisors;te[G]=1,ue[G]===0&&(s.enableVertexAttribArray(G),ue[G]=1),Z[G]!==J&&(s.vertexAttribDivisor(G,J),Z[G]=J)}function w(){const G=u.newAttributes,J=u.enabledAttributes;for(let te=0,ue=J.length;te<ue;te++)J[te]!==G[te]&&(s.disableVertexAttribArray(te),J[te]=0)}function D(G,J,te,ue,Z,O,I){I===!0?s.vertexAttribIPointer(G,J,te,Z,O):s.vertexAttribPointer(G,J,te,ue,Z,O)}function N(G,J,te,ue){C();const Z=ue.attributes,O=te.getAttributes(),I=J.defaultAttributeValues;for(const oe in O){const me=O[oe];if(me.location>=0){let Te=Z[oe];if(Te===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(Te=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(Te=G.instanceColor)),Te!==void 0){const P=Te.normalized,Y=Te.itemSize,ve=t.get(Te);if(ve===void 0)continue;const Ce=ve.buffer,Pe=ve.type,ne=ve.bytesPerElement,xe=Pe===s.INT||Pe===s.UNSIGNED_INT||Te.gpuType===rp;if(Te.isInterleavedBufferAttribute){const Me=Te.data,Ge=Me.stride,Ke=Te.offset;if(Me.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)y(me.location+et,Me.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let et=0;et<me.locationSize;et++)x(me.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let et=0;et<me.locationSize;et++)D(me.location+et,Y/me.locationSize,Pe,P,Ge*ne,(Ke+Y/me.locationSize*et)*ne,xe)}else{if(Te.isInstancedBufferAttribute){for(let Me=0;Me<me.locationSize;Me++)y(me.location+Me,Te.meshPerAttribute);G.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Me=0;Me<me.locationSize;Me++)x(me.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Me=0;Me<me.locationSize;Me++)D(me.location+Me,Y/me.locationSize,Pe,P,Y*ne,Y/me.locationSize*Me*ne,xe)}}else if(I!==void 0){const P=I[oe];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(me.location,P);break;case 3:s.vertexAttrib3fv(me.location,P);break;case 4:s.vertexAttrib4fv(me.location,P);break;default:s.vertexAttrib1fv(me.location,P)}}}}w()}function H(){U();for(const G in r){const J=r[G];for(const te in J){const ue=J[te];for(const Z in ue){const O=ue[Z];for(const I in O)v(O[I].object),delete O[I];delete ue[Z]}}delete r[G]}}function z(G){if(r[G.id]===void 0)return;const J=r[G.id];for(const te in J){const ue=J[te];for(const Z in ue){const O=ue[Z];for(const I in O)v(O[I].object),delete O[I];delete ue[Z]}}delete r[G.id]}function F(G){for(const J in r){const te=r[J];for(const ue in te){const Z=te[ue];if(Z[G.id]===void 0)continue;const O=Z[G.id];for(const I in O)v(O[I].object),delete O[I];delete Z[G.id]}}}function T(G){for(const J in r){const te=r[J],ue=G.isInstancedMesh===!0?G.id:0,Z=te[ue];if(Z!==void 0){for(const O in Z){const I=Z[O];for(const oe in I)v(I[oe].object),delete I[oe];delete Z[O]}delete te[ue],Object.keys(te).length===0&&delete r[J]}}}function U(){he(),f=!0,u!==l&&(u=l,h(u.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:he,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:x,disableUnusedAttributes:w}}function Q1(s,t,i){let r;function l(h){r=h}function u(h,v){s.drawArrays(r,h,v),i.update(v,r,1)}function f(h,v,_){_!==0&&(s.drawArraysInstanced(r,h,v,_),i.update(v,r,_))}function p(h,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=v[b];i.update(M,r,1)}function m(h,v,_,g){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)f(h[b],v[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,v,0,g,0,_);let b=0;for(let C=0;C<_;C++)b+=v[C]*g[C];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function J1(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Ri&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==hi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!T)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(lt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:N,maxSamples:H,samples:z}}function $1(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new Lr,p=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||l;return l=g,r=_.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,M){const b=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!l||b===null||b.length===0||u&&!x)u?v(null):h();else{const w=u?0:r,D=w*4;let N=y.clippingState||null;m.value=N,N=v(b,g,D,M);for(let H=0;H!==D;++H)N[H]=i[H];y.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(_,g,M,b){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=m.value,b!==!0||x===null){const y=M+C*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(x===null||x.length<y)&&(x=new Float32Array(y));for(let D=0,N=M;D!==C;++D,N+=4)f.copy(_[D]).applyMatrix4(w,p),f.normal.toArray(x,N),x[N+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,x}}const sr=4,B_=[.125,.215,.35,.446,.526,.582],Pr=20,eA=256,Wo=new mp,z_=new Ht;let Zd=null,Kd=0,Qd=0,Jd=!1;const tA=new re;class H_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:p=tA}=u;Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zd,Kd,Qd),this._renderer.xr.enabled=Jd,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Br||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ma,format:Ri,colorSpace:Hs,depthBuffer:!1},l=G_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nA(u)),this._blurMaterial=aA(u,t,i),this._ggxMaterial=iA(u,t,i)}return l}_compileMaterial(t){const i=new Wi(new Aa,t);this._renderer.compile(i,Wo)}_sceneToCubeUV(t,i,r,l,u){const m=new Ti(90,1,i,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(z_),_.toneMapping=Hi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new al,new Yv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let y=!1;const w=t.background;w?w.isColor&&(x.color.copy(w),t.background=null,y=!0):(x.color.copy(z_),y=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(m.up.set(0,h[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[D],u.y,u.z)):N===1?(m.up.set(0,0,h[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[D],u.z)):(m.up.set(0,h[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[D]));const H=this._cubeSize;Os(l,N*H,D>2?H:0,H,H),_.setRenderTarget(l),y&&_.render(C,m),_.render(t,m)}_.toneMapping=M,_.autoClear=g,t.background=w}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Br||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const p=u.uniforms;p.envMap.value=t;const m=this._cubeSize;Os(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Wo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[r];p.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,M=_*g,{_lodMax:b}=this,C=this._sizeLods[r],x=3*C*(r>b-sr?r-b+sr:0),y=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Os(u,x,y,3*C,2*C),l.setRenderTarget(u),l.render(p,Wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Os(t,x,y,3*C,2*C),l.setRenderTarget(t),l.render(p,Wo)}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Pr-1),C=u/b,x=isFinite(u)?1+Math.floor(v*C):Pr;x>Pr&&lt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pr}`);const y=[];let w=0;for(let F=0;F<Pr;++F){const T=F/C,U=Math.exp(-T*T/2);y.push(U),F===0?w+=U:F<x&&(w+=2*U)}for(let F=0;F<y.length;F++)y[F]=y[F]/w;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=b,g.mipInt.value=D-r;const N=this._sizeLods[l],H=3*N*(l>D-sr?l-D+sr:0),z=4*(this._cubeSize-N);Os(i,H,z,3*N,2*N),m.setRenderTarget(i),m.render(_,Wo)}}function nA(s){const t=[],i=[],r=[];let l=s;const u=s-sr+1+B_.length;for(let f=0;f<u;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>s-sr?m=B_[f-s+sr-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,b=6,C=3,x=2,y=1,w=new Float32Array(C*b*M),D=new Float32Array(x*b*M),N=new Float32Array(y*b*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,T=z>2?0:-1,U=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];w.set(U,C*b*z),D.set(g,x*b*z);const he=[z,z,z,z,z,z];N.set(he,y*b*z)}const H=new Aa;H.setAttribute("position",new Vi(w,C)),H.setAttribute("uv",new Vi(D,x)),H.setAttribute("faceIndex",new Vi(N,y)),r.push(new Wi(H,null)),l>sr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function G_(s,t,i){const r=new Gi(s,t,i);return r.texture.mapping=rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function iA(s,t,i){return new Ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function aA(s,t,i){const r=new Float32Array(Pr),l=new re(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function V_(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function k_(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ex extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),u=new Ci({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:va});u.uniforms.tEquirect.value=i;const f=new Wi(l,u),p=i.minFilter;return i.minFilter===Fr&&(i.minFilter=wn),new fb(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}function rA(s){let t=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?f(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Md||M===Ed)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new ex(b.height);return C.fromEquirectangularTexture(s,g),t.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,b=M===Md||M===Ed,C=M===Br||M===Bs;if(b||C){let x=i.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new H_(s)),x=b?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const w=g.image;return b&&w&&w.height>0||C&&w&&m(w)?(r===null&&(r=new H_(s)),x=b?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function p(g,M){return M===Md?g.mapping=Br:M===Ed&&(g.mapping=Bs),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function sA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&nc("WebGLRenderer: "+r+" extension not supported."),l}}}function oA(s,t,i,r){const l={},u=new WeakMap;function f(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const M=u.get(g);M&&(t.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)t.update(g[M],s.ARRAY_BUFFER)}function h(_){const g=[],M=_.index,b=_.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let D=0,N=w.length;D<N;D+=3){const H=w[D+0],z=w[D+1],F=w[D+2];g.push(H,z,z,F,F,H)}}else{const w=b.array;C=b.version;for(let D=0,N=w.length/3-1;D<N;D+=3){const H=D+0,z=D+1,F=D+2;g.push(H,z,z,F,F,H)}}const x=new(b.count>=65535?qv:Wv)(g,1);x.version=C;const y=u.get(_);y&&t.remove(y),u.set(_,x)}function v(_){const g=u.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&h(_)}else h(_);return u.get(_)}return{get:p,update:m,getWireframeAttribute:v}}function lA(s,t,i){let r;function l(g){r=g}let u,f;function p(g){u=g.type,f=g.bytesPerElement}function m(g,M){s.drawElements(r,M,u,g*f),i.update(M,r,1)}function h(g,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,g*f,b),i.update(M,r,b))}function v(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,g,0,b);let x=0;for(let y=0;y<b;y++)x+=M[y];i.update(x,r,1)}function _(g,M,b,C){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)h(g[y]/f,M[y],C[y]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,u,g,0,C,0,b);let y=0;for(let w=0;w<b;w++)y+=M[w]*C[w];i.update(y,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function uA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,p){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=p*(u/3);break;case s.LINES:i.lines+=p*(u/2);break;case s.LINE_STRIP:i.lines+=p*(u-1);break;case s.LINE_LOOP:i.lines+=p*u;break;case s.POINTS:i.points+=p*u;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function cA(s,t,i){const r=new WeakMap,l=new an;function u(f,p,m){const h=f.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let he=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",he)};var M=he;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),x===!0&&(N=3);let H=p.attributes.position.count*N,z=1;H>t.maxTextureSize&&(z=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*z*4*_),T=new Vv(F,H,z,_);T.type=Ii,T.needsUpdate=!0;const U=N*4;for(let G=0;G<_;G++){const J=y[G],te=w[G],ue=D[G],Z=H*z*4*G;for(let O=0;O<J.count;O++){const I=O*U;b===!0&&(l.fromBufferAttribute(J,O),F[Z+I+0]=l.x,F[Z+I+1]=l.y,F[Z+I+2]=l.z,F[Z+I+3]=0),C===!0&&(l.fromBufferAttribute(te,O),F[Z+I+4]=l.x,F[Z+I+5]=l.y,F[Z+I+6]=l.z,F[Z+I+7]=0),x===!0&&(l.fromBufferAttribute(ue,O),F[Z+I+8]=l.x,F[Z+I+9]=l.y,F[Z+I+10]=l.z,F[Z+I+11]=ue.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new Pt(H,z)},r.set(p,g),p.addEventListener("dispose",he)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let x=0;x<h.length;x++)b+=h[x];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function fA(s,t,i,r,l){let u=new WeakMap;function f(h){const v=l.render.frame,_=h.geometry,g=t.get(h,_);if(u.get(g)!==v&&(t.update(g),u.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==v&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),u.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;u.get(M)!==v&&(M.update(),u.set(M,v))}return g}function p(){u=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:p}}const dA={[Av]:"LINEAR_TONE_MAPPING",[Rv]:"REINHARD_TONE_MAPPING",[Cv]:"CINEON_TONE_MAPPING",[wv]:"ACES_FILMIC_TONE_MAPPING",[Uv]:"AGX_TONE_MAPPING",[Nv]:"NEUTRAL_TONE_MAPPING",[Dv]:"CUSTOM_TONE_MAPPING"};function hA(s,t,i,r,l){const u=new Gi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Gi(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Aa;p.setAttribute("position",new Sa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Sa([0,2,0,0,2,0],2));const m=new lb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(p,m),v=new mp(-1,1,1,-1,0,1);let _=null,g=null,M=!1,b,C=null,x=[],y=!1;this.setSize=function(w,D){u.setSize(w,D),f.setSize(w,D);for(let N=0;N<x.length;N++){const H=x[N];H.setSize&&H.setSize(w,D)}},this.setEffects=function(w){x=w,y=x.length>0&&x[0].isRenderPass===!0;const D=u.width,N=u.height;for(let H=0;H<x.length;H++){const z=x[H];z.setSize&&z.setSize(D,N)}},this.begin=function(w,D){if(M||w.toneMapping===Hi&&x.length===0)return!1;if(C=D,D!==null){const N=D.width,H=D.height;(u.width!==N||u.height!==H)&&this.setSize(N,H)}return y===!1&&w.setRenderTarget(u),b=w.toneMapping,w.toneMapping=Hi,!0},this.hasRenderPass=function(){return y},this.end=function(w,D){w.toneMapping=b,M=!0;let N=u,H=f;for(let z=0;z<x.length;z++){const F=x[z];if(F.enabled!==!1&&(F.render(w,H,N,D),F.needsSwap!==!1)){const T=N;N=H,H=T}}if(_!==w.outputColorSpace||g!==w.toneMapping){_=w.outputColorSpace,g=w.toneMapping,m.defines={},Rt.getTransfer(_)===zt&&(m.defines.SRGB_TRANSFER="");const z=dA[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(C),w.render(h,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),p.dispose(),m.dispose()}}const tx=new Fn,Yh=new Jo(1,1),nx=new Vv,ix=new BE,ax=new Zv,X_=[],W_=[],q_=new Float32Array(16),Y_=new Float32Array(9),j_=new Float32Array(4);function qs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=X_[l];if(u===void 0&&(u=new Float32Array(l),X_[l]=u),t!==0){r.toArray(u,0);for(let f=1,p=0;f!==t;++f)p+=i,s[f].toArray(u,p)}return u}function _n(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function vn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function lc(s,t){let i=W_[t];i===void 0&&(i=new Int32Array(t),W_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function pA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function mA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2fv(this.addr,t),vn(i,t)}}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;s.uniform3fv(this.addr,t),vn(i,t)}}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4fv(this.addr,t),vn(i,t)}}function vA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;j_.set(r),s.uniformMatrix2fv(this.addr,!1,j_),vn(i,r)}}function xA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Y_.set(r),s.uniformMatrix3fv(this.addr,!1,Y_),vn(i,r)}}function SA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;q_.set(r),s.uniformMatrix4fv(this.addr,!1,q_),vn(i,r)}}function yA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function MA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2iv(this.addr,t),vn(i,t)}}function EA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3iv(this.addr,t),vn(i,t)}}function bA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4iv(this.addr,t),vn(i,t)}}function TA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function AA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;s.uniform2uiv(this.addr,t),vn(i,t)}}function RA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;s.uniform3uiv(this.addr,t),vn(i,t)}}function CA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;s.uniform4uiv(this.addr,t),vn(i,t)}}function wA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Yh.compareFunction=i.isReversedDepthBuffer()?dp:fp,u=Yh):u=tx,i.setTexture2D(t||u,l)}function DA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ix,l)}function UA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||ax,l)}function NA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||nx,l)}function LA(s){switch(s){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return xA;case 35676:return SA;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return NA}}function OA(s,t){s.uniform1fv(this.addr,t)}function PA(s,t){const i=qs(t,this.size,2);s.uniform2fv(this.addr,i)}function FA(s,t){const i=qs(t,this.size,3);s.uniform3fv(this.addr,i)}function IA(s,t){const i=qs(t,this.size,4);s.uniform4fv(this.addr,i)}function BA(s,t){const i=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function zA(s,t){const i=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function HA(s,t){const i=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function GA(s,t){s.uniform1iv(this.addr,t)}function VA(s,t){s.uniform2iv(this.addr,t)}function kA(s,t){s.uniform3iv(this.addr,t)}function XA(s,t){s.uniform4iv(this.addr,t)}function WA(s,t){s.uniform1uiv(this.addr,t)}function qA(s,t){s.uniform2uiv(this.addr,t)}function YA(s,t){s.uniform3uiv(this.addr,t)}function jA(s,t){s.uniform4uiv(this.addr,t)}function ZA(s,t,i){const r=this.cache,l=t.length,u=lc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=Yh:f=tx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,u[p])}function KA(s,t,i){const r=this.cache,l=t.length,u=lc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ix,u[f])}function QA(s,t,i){const r=this.cache,l=t.length,u=lc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ax,u[f])}function JA(s,t,i){const r=this.cache,l=t.length,u=lc(i,l);_n(r,u)||(s.uniform1iv(this.addr,u),vn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||nx,u[f])}function $A(s){switch(s){case 5126:return OA;case 35664:return PA;case 35665:return FA;case 35666:return IA;case 35674:return BA;case 35675:return zA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return kA;case 35669:case 35673:return XA;case 5125:return WA;case 36294:return qA;case 36295:return YA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}class eR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=LA(i.type)}}class tR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$A(i.type)}}class nR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const p=l[u];p.setValue(t,i[p.id],r)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function Z_(s,t){s.seq.push(t),s.map[t.id]=t}function iR(s,t,i){const r=s.name,l=r.length;for($d.lastIndex=0;;){const u=$d.exec(r),f=$d.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Z_(i,h===void 0?new eR(p,s,t):new tR(p,s,t));break}else{let _=i.map[p];_===void 0&&(_=new nR(p),Z_(i,_)),i=_}}}class Qu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);iR(p,m,this)}const l=[],u=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function K_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const aR=37297;let rR=0;function sR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const p=f+1;r.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return r.join(`
`)}const Q_=new pt;function oR(s){Rt._getMatrix(Q_,Rt.workingColorSpace,s);const t=`mat3( ${Q_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case $u:return[t,"LinearTransferOETF"];case zt:return[t,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function J_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+sR(s.getShaderSource(t),p)}else return u}function lR(s,t){const i=oR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const uR={[Av]:"Linear",[Rv]:"Reinhard",[Cv]:"Cineon",[wv]:"ACESFilmic",[Uv]:"AgX",[Nv]:"Neutral",[Dv]:"Custom"};function cR(s,t){const i=uR[t];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vu=new re;function fR(){Rt.getLuminanceCoefficients(Vu);const s=Vu.x.toFixed(4),t=Vu.y.toFixed(4),i=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function hR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function pR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let p=1;u.type===s.FLOAT_MAT2&&(p=2),u.type===s.FLOAT_MAT3&&(p=3),u.type===s.FLOAT_MAT4&&(p=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:p}}return i}function jo(s){return s!==""}function $_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(s){return s.replace(mR,_R)}const gR=new Map;function _R(s,t){let i=mt[t];if(i===void 0){const r=gR.get(t);if(r!==void 0)i=mt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return jh(i)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(s){return s.replace(vR,xR)}function xR(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function nv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const SR={[qu]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function yR(s){return SR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MR={[Br]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function ER(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":MR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const bR={[Bs]:"ENVMAP_MODE_REFRACTION"};function TR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":bR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const AR={[Tv]:"ENVMAP_BLENDING_MULTIPLY",[gE]:"ENVMAP_BLENDING_MIX",[_E]:"ENVMAP_BLENDING_ADD"};function RR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":AR[s.combine]||"ENVMAP_BLENDING_NONE"}function CR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function wR(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=yR(i),h=ER(i),v=TR(i),_=RR(i),g=CR(i),M=dR(i),b=hR(u),C=l.createProgram();let x,y,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),y.length>0&&(y+=`
`)):(x=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),y=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?mt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?cR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,lR("linearToOutputTexel",i.outputColorSpace),fR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),f=jh(f),f=$_(f,i),f=ev(f,i),p=jh(p),p=$_(p,i),p=ev(p,i),f=tv(f),p=tv(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",i.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=w+x+f,N=w+y+p,H=K_(l,l.VERTEX_SHADER,D),z=K_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,H),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(G){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",te=l.getShaderInfoLog(H)||"",ue=l.getShaderInfoLog(z)||"",Z=J.trim(),O=te.trim(),I=ue.trim();let oe=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,H,z);else{const Te=J_(l,H,"vertex"),P=J_(l,z,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+Te+`
`+P)}else Z!==""?lt("WebGLProgram: Program Info Log:",Z):(O===""||I==="")&&(me=!1);me&&(G.diagnostics={runnable:oe,programLog:Z,vertexShader:{log:O,prefix:x},fragmentShader:{log:I,prefix:y}})}l.deleteShader(H),l.deleteShader(z),T=new Qu(l,C),U=pR(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let he=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return he===!1&&(he=l.getProgramParameter(C,aR)),he},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rR++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=z,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new NR(t),i.set(t,r)),r}}class NR{constructor(t){this.id=DR++,this.code=t,this.usedTimes=0}}function LR(s,t,i,r,l,u){const f=new kv,p=new UR,m=new Set,h=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,U,he,G,J){const te=G.fog,ue=J.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=t.get(T.envMap||Z,O),oe=I&&I.mapping===rc?I.image.height:null,me=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const Te=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,P=Te!==void 0?Te.length:0;let Y=0;ue.morphAttributes.position!==void 0&&(Y=1),ue.morphAttributes.normal!==void 0&&(Y=2),ue.morphAttributes.color!==void 0&&(Y=3);let ve,Ce,Pe,ne;if(me){const At=Fi[me];ve=At.vertexShader,Ce=At.fragmentShader}else ve=T.vertexShader,Ce=T.fragmentShader,p.update(T),Pe=p.getVertexShaderID(T),ne=p.getFragmentShaderID(T);const xe=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ge=J.isInstancedMesh===!0,Ke=J.isBatchedMesh===!0,et=!!T.map,qt=!!T.matcap,gt=!!I,ct=!!T.aoMap,bt=!!T.lightMap,Je=!!T.bumpMap,_t=!!T.normalMap,V=!!T.displacementMap,Wt=!!T.emissiveMap,Tt=!!T.metalnessMap,Lt=!!T.roughnessMap,Ye=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ge=T.sheen>0,ye=T.transmission>0,de=Ye&&!!T.anisotropyMap,We=L&&!!T.clearcoatMap,De=L&&!!T.clearcoatNormalMap,Qe=L&&!!T.clearcoatRoughnessMap,nt=q&&!!T.iridescenceMap,Ae=q&&!!T.iridescenceThicknessMap,Ee=ge&&!!T.sheenColorMap,Fe=ge&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Ie=!!T.specularColorMap,ft=!!T.specularIntensityMap,W=ye&&!!T.transmissionMap,we=ye&&!!T.thicknessMap,Re=!!T.gradientMap,Be=!!T.alphaMap,be=T.alphaTest>0,fe=!!T.alphaHash,He=!!T.extensions;let at=Hi;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ft={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:ve,fragmentShader:Ce,defines:T.defines,customVertexShaderID:Pe,customFragmentShaderID:ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&J._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&J.instanceColor!==null,instancingMorph:Ge&&J.morphTexture!==null,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Hs,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:qt,envMap:gt,envMapMode:gt&&I.mapping,envMapCubeUVHeight:oe,aoMap:ct,lightMap:bt,bumpMap:Je,normalMap:_t,displacementMap:V,emissiveMap:Wt,normalMapObjectSpace:_t&&T.normalMapType===yE,normalMapTangentSpace:_t&&T.normalMapType===SE,metalnessMap:Tt,roughnessMap:Lt,anisotropy:Ye,anisotropyMap:de,clearcoat:L,clearcoatMap:We,clearcoatNormalMap:De,clearcoatRoughnessMap:Qe,dispersion:E,iridescence:q,iridescenceMap:nt,iridescenceThicknessMap:Ae,sheen:ge,sheenColorMap:Ee,sheenRoughnessMap:Fe,specularMap:Oe,specularColorMap:Ie,specularIntensityMap:ft,transmission:ye,transmissionMap:W,thicknessMap:we,gradientMap:Re,opaque:T.transparent===!1&&T.blending===Ps&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:fe,combine:T.combine,mapUv:et&&b(T.map.channel),aoMapUv:ct&&b(T.aoMap.channel),lightMapUv:bt&&b(T.lightMap.channel),bumpMapUv:Je&&b(T.bumpMap.channel),normalMapUv:_t&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:Wt&&b(T.emissiveMap.channel),metalnessMapUv:Tt&&b(T.metalnessMap.channel),roughnessMapUv:Lt&&b(T.roughnessMap.channel),anisotropyMapUv:de&&b(T.anisotropyMap.channel),clearcoatMapUv:We&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(T.sheenRoughnessMap.channel),specularMapUv:Oe&&b(T.specularMap.channel),specularColorMapUv:Ie&&b(T.specularColorMap.channel),specularIntensityMapUv:ft&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:we&&b(T.thicknessMap.channel),alphaMapUv:Be&&b(T.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(_t||Ye),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ue.attributes.uv&&(et||Be),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ue.attributes.normal===void 0&&_t===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:J.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&he.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===zt,decodeVideoTextureEmissive:Wt&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=m.has(1),Ft.vertexUv2s=m.has(2),Ft.vertexUv3s=m.has(3),m.clear(),Ft}function x(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const he in T.defines)U.push(he),U.push(T.defines[he]);return T.isRawShaderMaterial===!1&&(y(U,T),w(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function y(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function w(T,U){f.disableAll(),U.instancing&&f.enable(0),U.instancingColor&&f.enable(1),U.instancingMorph&&f.enable(2),U.matcap&&f.enable(3),U.envMap&&f.enable(4),U.normalMapObjectSpace&&f.enable(5),U.normalMapTangentSpace&&f.enable(6),U.clearcoat&&f.enable(7),U.iridescence&&f.enable(8),U.alphaTest&&f.enable(9),U.vertexColors&&f.enable(10),U.vertexAlphas&&f.enable(11),U.vertexUv1s&&f.enable(12),U.vertexUv2s&&f.enable(13),U.vertexUv3s&&f.enable(14),U.vertexTangents&&f.enable(15),U.anisotropy&&f.enable(16),U.alphaHash&&f.enable(17),U.batching&&f.enable(18),U.dispersion&&f.enable(19),U.batchingColor&&f.enable(20),U.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),T.push(f.mask)}function D(T){const U=M[T.type];let he;if(U){const G=Fi[U];he=rb.clone(G.uniforms)}else he=T.uniforms;return he}function N(T,U){let he=v.get(U);return he!==void 0?++he.usedTimes:(he=new wR(s,U,T,l),h.push(he),v.set(U,he)),he}function H(T){if(--T.usedTimes===0){const U=h.indexOf(T);h[U]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function F(){p.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:D,acquireProgram:N,releaseProgram:H,releaseShaderCache:z,programs:h,dispose:F}}function OR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let p=s.get(f);return p===void 0&&(p={},s.set(f,p)),p}function r(f){s.delete(f)}function l(f,p,m){s.get(f)[p]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function PR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function av(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,C,x,y){let w=s[t];return w===void 0?(w={id:g.id,object:g,geometry:M,material:b,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:x,group:y},s[t]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=b,w.materialVariant=f(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=x,w.group=y),t++,w}function m(g,M,b,C,x,y){const w=p(g,M,b,C,x,y);b.transmission>0?r.push(w):b.transparent===!0?l.push(w):i.push(w)}function h(g,M,b,C,x,y){const w=p(g,M,b,C,x,y);b.transmission>0?r.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function v(g,M){i.length>1&&i.sort(g||PR),r.length>1&&r.sort(M||iv),l.length>1&&l.sort(M||iv)}function _(){for(let g=t,M=s.length;g<M;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:h,finish:_,sort:v}}function FR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new av,s.set(r,[f])):l>=u.length?(f=new av,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function IR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Ht};break;case"SpotLight":i={position:new re,direction:new re,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":i={color:new Ht,position:new re,halfWidth:new re,halfHeight:new re};break}return s[t.id]=i,i}}}function BR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let zR=0;function HR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function GR(s){const t=new IR,i=BR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const l=new re,u=new hn,f=new hn;function p(h){let v=0,_=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,C=0,x=0,y=0,w=0,D=0,N=0,H=0,z=0,F=0;h.sort(HR);for(let U=0,he=h.length;U<he;U++){const G=h[U],J=G.color,te=G.intensity,ue=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===zs?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=J.r*te,_+=J.g*te,g+=J.b*te;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],te);F++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,oe=i.get(G);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,r.directionalShadow[M]=oe,r.directionalShadowMap[M]=Z,r.directionalShadowMatrix[M]=G.shadow.matrix,w++}r.directional[M]=O,M++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(J).multiplyScalar(te),O.distance=ue,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[C]=O;const I=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,I.updateMatrices(G),G.castShadow&&z++),r.spotLightMatrix[C]=I.matrix,G.castShadow){const oe=i.get(G);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,r.spotShadow[C]=oe,r.spotShadowMap[C]=Z,N++}C++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(J).multiplyScalar(te),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=O,x++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const I=G.shadow,oe=i.get(G);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,oe.shadowCameraNear=I.camera.near,oe.shadowCameraFar=I.camera.far,r.pointShadow[b]=oe,r.pointShadowMap[b]=Z,r.pointShadowMatrix[b]=G.shadow.matrix,D++}r.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(te),O.groundColor.copy(G.groundColor).multiplyScalar(te),r.hemi[y]=O,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==x||T.hemiLength!==y||T.numDirectionalShadows!==w||T.numPointShadows!==D||T.numSpotShadows!==N||T.numSpotMaps!==H||T.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=x,r.point.length=b,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+H-z,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=x,T.hemiLength=y,T.numDirectionalShadows=w,T.numPointShadows=D,T.numSpotShadows=N,T.numSpotMaps=H,T.numLightProbes=F,r.version=zR++)}function m(h,v){let _=0,g=0,M=0,b=0,C=0;const x=v.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){const D=h[y];if(D.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),_++}else if(D.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(x),f.identity(),u.copy(D.matrixWorld),u.premultiply(x),f.extractRotation(u),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const N=r.point[g];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(x),g++}else if(D.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(x),C++}}}return{setup:p,setupView:m,state:r}}function rv(s){const t=new GR(s),i=[],r=[];function l(v){h.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function f(v){r.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:f}}function VR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let p;return f===void 0?(p=new rv(s),t.set(l,[p])):u>=f.length?(p=new rv(s),f.push(p)):p=f[u],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const kR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WR=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],qR=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],sv=new hn,qo=new re,eh=new re;function YR(s,t,i){let r=new jv;const l=new Pt,u=new Pt,f=new an,p=new ub,m=new cb,h={},v=i.maxTextureSize,_={[or]:Xn,[Xn]:or,[ga]:ga},g=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:kR,fragmentShader:XR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Aa;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wi(b,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let y=this.type;this.render=function(z,F,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;this.type===QM&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qu);const U=s.getRenderTarget(),he=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),J=s.state;J.setBlending(va),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const te=y!==this.type;te&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Z=>Z.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Z=z.length;ue<Z;ue++){const O=z[ue],I=O.shadow;if(I===void 0){lt("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const oe=I.getFrameExtents();l.multiply(oe),u.copy(I.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/oe.x),l.x=u.x*oe.x,I.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/oe.y),l.y=u.y*oe.y,I.mapSize.y=u.y));const me=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=me,I.map===null||te===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Yo){if(O.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Gi(l.x,l.y,{format:zs,type:Ma,minFilter:wn,magFilter:wn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Jo(l.x,l.y,Ii),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=Ea,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tn,I.map.depthTexture.magFilter=Tn}else O.isPointLight?(I.map=new ex(l.x),I.map.depthTexture=new ib(l.x,Xi)):(I.map=new Gi(l.x,l.y),I.map.depthTexture=new Jo(l.x,l.y,Xi)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=Ea,this.type===qu?(I.map.depthTexture.compareFunction=me?dp:fp,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Tn,I.map.depthTexture.magFilter=Tn);I.camera.updateProjectionMatrix()}const Te=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Te;P++){if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,P),s.clear();else{P===0&&(s.setRenderTarget(I.map),s.clear());const Y=I.getViewport(P);f.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),J.viewport(f)}if(O.isPointLight){const Y=I.camera,ve=I.matrix,Ce=O.distance||Y.far;Ce!==Y.far&&(Y.far=Ce,Y.updateProjectionMatrix()),qo.setFromMatrixPosition(O.matrixWorld),Y.position.copy(qo),eh.copy(Y.position),eh.add(WR[P]),Y.up.copy(qR[P]),Y.lookAt(eh),Y.updateMatrixWorld(),ve.makeTranslation(-qo.x,-qo.y,-qo.z),sv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(sv,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(O);r=I.getFrustum(),N(F,T,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Yo&&w(I,T),I.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(U,he,G)};function w(z,F){const T=t.update(C);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Gi(l.x,l.y,{format:zs,type:Ma})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,C,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,T,M,C,null)}function D(z,F,T,U){let he=null;const G=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)he=G;else if(he=T.isPointLight===!0?m:p,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=he.uuid,te=F.uuid;let ue=h[J];ue===void 0&&(ue={},h[J]=ue);let Z=ue[te];Z===void 0&&(Z=he.clone(),ue[te]=Z,F.addEventListener("dispose",H)),he=Z}if(he.visible=F.visible,he.wireframe=F.wireframe,U===Yo?he.side=F.shadowSide!==null?F.shadowSide:F.side:he.side=F.shadowSide!==null?F.shadowSide:_[F.side],he.alphaMap=F.alphaMap,he.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,he.map=F.map,he.clipShadows=F.clipShadows,he.clippingPlanes=F.clippingPlanes,he.clipIntersection=F.clipIntersection,he.displacementMap=F.displacementMap,he.displacementScale=F.displacementScale,he.displacementBias=F.displacementBias,he.wireframeLinewidth=F.wireframeLinewidth,he.linewidth=F.linewidth,T.isPointLight===!0&&he.isMeshDistanceMaterial===!0){const J=s.properties.get(he);J.light=T}return he}function N(z,F,T,U,he){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&he===Yo)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const te=t.update(z),ue=z.material;if(Array.isArray(ue)){const Z=te.groups;for(let O=0,I=Z.length;O<I;O++){const oe=Z[O],me=ue[oe.materialIndex];if(me&&me.visible){const Te=D(z,me,U,he);z.onBeforeShadow(s,z,F,T,te,Te,oe),s.renderBufferDirect(T,null,te,Te,z,oe),z.onAfterShadow(s,z,F,T,te,Te,oe)}}}else if(ue.visible){const Z=D(z,ue,U,he);z.onBeforeShadow(s,z,F,T,te,Z,null),s.renderBufferDirect(T,null,te,Z,z,null),z.onAfterShadow(s,z,F,T,te,Z,null)}}const J=z.children;for(let te=0,ue=J.length;te<ue;te++)N(J[te],F,T,U,he)}function H(z){z.target.removeEventListener("dispose",H);for(const T in h){const U=h[T],he=z.target.uuid;he in U&&(U[he].dispose(),delete U[he])}}}function jR(s,t){function i(){let W=!1;const we=new an;let Re=null;const Be=new an(0,0,0,0);return{setMask:function(be){Re!==be&&!W&&(s.colorMask(be,be,be,be),Re=be)},setLocked:function(be){W=be},setClear:function(be,fe,He,at,Ft){Ft===!0&&(be*=at,fe*=at,He*=at),we.set(be,fe,He,at),Be.equals(we)===!1&&(s.clearColor(be,fe,He,at),Be.copy(we))},reset:function(){W=!1,Re=null,Be.set(-1,0,0,0)}}}function r(){let W=!1,we=!1,Re=null,Be=null,be=null;return{setReversed:function(fe){if(we!==fe){const He=t.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const at=be;be=null,this.setClear(at)}},getReversed:function(){return we},setTest:function(fe){fe?xe(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(fe){Re!==fe&&!W&&(s.depthMask(fe),Re=fe)},setFunc:function(fe){if(we&&(fe=UE[fe]),Be!==fe){switch(fe){case rh:s.depthFunc(s.NEVER);break;case sh:s.depthFunc(s.ALWAYS);break;case oh:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case uh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case fh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=fe}},setLocked:function(fe){W=fe},setClear:function(fe){be!==fe&&(be=fe,we&&(fe=1-fe),s.clearDepth(fe))},reset:function(){W=!1,Re=null,Be=null,be=null,we=!1}}}function l(){let W=!1,we=null,Re=null,Be=null,be=null,fe=null,He=null,at=null,Ft=null;return{setTest:function(At){W||(At?xe(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(At){we!==At&&!W&&(s.stencilMask(At),we=At)},setFunc:function(At,Dn,mi){(Re!==At||Be!==Dn||be!==mi)&&(s.stencilFunc(At,Dn,mi),Re=At,Be=Dn,be=mi)},setOp:function(At,Dn,mi){(fe!==At||He!==Dn||at!==mi)&&(s.stencilOp(At,Dn,mi),fe=At,He=Dn,at=mi)},setLocked:function(At){W=At},setClear:function(At){Ft!==At&&(s.clearStencil(At),Ft=At)},reset:function(){W=!1,we=null,Re=null,Be=null,be=null,fe=null,He=null,at=null,Ft=null}}}const u=new i,f=new r,p=new l,m=new WeakMap,h=new WeakMap;let v={},_={},g=new WeakMap,M=[],b=null,C=!1,x=null,y=null,w=null,D=null,N=null,H=null,z=null,F=new Ht(0,0,0),T=0,U=!1,he=null,G=null,J=null,te=null,ue=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,I=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(oe)[1]),O=I>=1):oe.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),O=I>=2);let me=null,Te={};const P=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),ve=new an().fromArray(P),Ce=new an().fromArray(Y);function Pe(W,we,Re,Be){const be=new Uint8Array(4),fe=s.createTexture();s.bindTexture(W,fe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<Re;He++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(we+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return fe}const ne={};ne[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),p.setClear(0),xe(s.DEPTH_TEST),f.setFunc(Is),Je(!1),_t(d_),xe(s.CULL_FACE),ct(va);function xe(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Me(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Ge(W,we){return _[W]!==we?(s.bindFramebuffer(W,we),_[W]=we,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=we),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ke(W,we){let Re=M,Be=!1;if(W){Re=g.get(we),Re===void 0&&(Re=[],g.set(we,Re));const be=W.textures;if(Re.length!==be.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,He=be.length;fe<He;fe++)Re[fe]=s.COLOR_ATTACHMENT0+fe;Re.length=be.length,Be=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Re)}function et(W){return b!==W?(s.useProgram(W),b=W,!0):!1}const qt={[Or]:s.FUNC_ADD,[$M]:s.FUNC_SUBTRACT,[eE]:s.FUNC_REVERSE_SUBTRACT};qt[tE]=s.MIN,qt[nE]=s.MAX;const gt={[iE]:s.ZERO,[aE]:s.ONE,[rE]:s.SRC_COLOR,[ih]:s.SRC_ALPHA,[fE]:s.SRC_ALPHA_SATURATE,[uE]:s.DST_COLOR,[oE]:s.DST_ALPHA,[sE]:s.ONE_MINUS_SRC_COLOR,[ah]:s.ONE_MINUS_SRC_ALPHA,[cE]:s.ONE_MINUS_DST_COLOR,[lE]:s.ONE_MINUS_DST_ALPHA,[dE]:s.CONSTANT_COLOR,[hE]:s.ONE_MINUS_CONSTANT_COLOR,[pE]:s.CONSTANT_ALPHA,[mE]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(W,we,Re,Be,be,fe,He,at,Ft,At){if(W===va){C===!0&&(Me(s.BLEND),C=!1);return}if(C===!1&&(xe(s.BLEND),C=!0),W!==JM){if(W!==x||At!==U){if((y!==Or||N!==Or)&&(s.blendEquation(s.FUNC_ADD),y=Or,N=Or),At)switch(W){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h_:s.blendFunc(s.ONE,s.ONE);break;case p_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case m_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",W);break}else switch(W){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case p_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",W);break}w=null,D=null,H=null,z=null,F.set(0,0,0),T=0,x=W,U=At}return}be=be||we,fe=fe||Re,He=He||Be,(we!==y||be!==N)&&(s.blendEquationSeparate(qt[we],qt[be]),y=we,N=be),(Re!==w||Be!==D||fe!==H||He!==z)&&(s.blendFuncSeparate(gt[Re],gt[Be],gt[fe],gt[He]),w=Re,D=Be,H=fe,z=He),(at.equals(F)===!1||Ft!==T)&&(s.blendColor(at.r,at.g,at.b,Ft),F.copy(at),T=Ft),x=W,U=!1}function bt(W,we){W.side===ga?Me(s.CULL_FACE):xe(s.CULL_FACE);let Re=W.side===Xn;we&&(Re=!Re),Je(Re),W.blending===Ps&&W.transparent===!1?ct(va):ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const Be=W.stencilWrite;p.setTest(Be),Be&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(W){he!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),he=W)}function _t(W){W!==ZM?(xe(s.CULL_FACE),W!==G&&(W===d_?s.cullFace(s.BACK):W===KM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),G=W}function V(W){W!==J&&(O&&s.lineWidth(W),J=W)}function Wt(W,we,Re){W?(xe(s.POLYGON_OFFSET_FILL),(te!==we||ue!==Re)&&(te=we,ue=Re,f.getReversed()&&(we=-we),s.polygonOffset(we,Re))):Me(s.POLYGON_OFFSET_FILL)}function Tt(W){W?xe(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Lt(W){W===void 0&&(W=s.TEXTURE0+Z-1),me!==W&&(s.activeTexture(W),me=W)}function Ye(W,we,Re){Re===void 0&&(me===null?Re=s.TEXTURE0+Z-1:Re=me);let Be=Te[Re];Be===void 0&&(Be={type:void 0,texture:void 0},Te[Re]=Be),(Be.type!==W||Be.texture!==we)&&(me!==Re&&(s.activeTexture(Re),me=Re),s.bindTexture(W,we||ne[W]),Be.type=W,Be.texture=we)}function L(){const W=Te[me];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ge(){try{s.texSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ye(){try{s.texSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function We(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function De(){try{s.texStorage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Qe(){try{s.texStorage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function nt(){try{s.texImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ae(){try{s.texImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ee(W){ve.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function Fe(W){Ce.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function Oe(W,we){let Re=h.get(we);Re===void 0&&(Re=new WeakMap,h.set(we,Re));let Be=Re.get(W);Be===void 0&&(Be=s.getUniformBlockIndex(we,W.name),Re.set(W,Be))}function Ie(W,we){const Be=h.get(we).get(W);m.get(we)!==Be&&(s.uniformBlockBinding(we,Be,W.__bindingPointIndex),m.set(we,Be))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},me=null,Te={},_={},g=new WeakMap,M=[],b=null,C=!1,x=null,y=null,w=null,D=null,N=null,H=null,z=null,F=new Ht(0,0,0),T=0,U=!1,he=null,G=null,J=null,te=null,ue=null,ve.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),p.reset()}return{buffers:{color:u,depth:f,stencil:p},enable:xe,disable:Me,bindFramebuffer:Ge,drawBuffers:Ke,useProgram:et,setBlending:ct,setMaterial:bt,setFlipSided:Je,setCullFace:_t,setLineWidth:V,setPolygonOffset:Wt,setScissorTest:Tt,activeTexture:Lt,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:nt,texImage3D:Ae,updateUBOMapping:Oe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:Qe,texSubImage2D:ge,texSubImage3D:ye,compressedTexSubImage2D:de,compressedTexSubImage3D:We,scissor:Ee,viewport:Fe,reset:ft}}function ZR(s,t,i,r,l,u,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,v=new WeakMap;let _;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):tc("canvas")}function C(L,E,q){let ge=1;const ye=Ye(L);if((ye.width>q||ye.height>q)&&(ge=q/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(ge*ye.width),We=Math.floor(ge*ye.height);_===void 0&&(_=b(de,We));const De=E?b(de,We):_;return De.width=de,De.height=We,De.getContext("2d").drawImage(L,0,0,de,We),lt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+de+"x"+We+")."),De}else return"data"in L&&lt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function x(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,E,q,ge,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=E;if(E===s.RED&&(q===s.FLOAT&&(de=s.R32F),q===s.HALF_FLOAT&&(de=s.R16F),q===s.UNSIGNED_BYTE&&(de=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.R8UI),q===s.UNSIGNED_SHORT&&(de=s.R16UI),q===s.UNSIGNED_INT&&(de=s.R32UI),q===s.BYTE&&(de=s.R8I),q===s.SHORT&&(de=s.R16I),q===s.INT&&(de=s.R32I)),E===s.RG&&(q===s.FLOAT&&(de=s.RG32F),q===s.HALF_FLOAT&&(de=s.RG16F),q===s.UNSIGNED_BYTE&&(de=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RG8UI),q===s.UNSIGNED_SHORT&&(de=s.RG16UI),q===s.UNSIGNED_INT&&(de=s.RG32UI),q===s.BYTE&&(de=s.RG8I),q===s.SHORT&&(de=s.RG16I),q===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),q===s.UNSIGNED_INT&&(de=s.RGB32UI),q===s.BYTE&&(de=s.RGB8I),q===s.SHORT&&(de=s.RGB16I),q===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),q===s.UNSIGNED_INT&&(de=s.RGBA32UI),q===s.BYTE&&(de=s.RGBA8I),q===s.SHORT&&(de=s.RGBA16I),q===s.INT&&(de=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),E===s.RGBA){const We=ye?$u:Rt.getTransfer(ge);q===s.FLOAT&&(de=s.RGBA32F),q===s.HALF_FLOAT&&(de=s.RGBA16F),q===s.UNSIGNED_BYTE&&(de=We===zt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function N(L,E){let q;return L?E===null||E===Xi||E===Qo?q=s.DEPTH24_STENCIL8:E===Ii?q=s.DEPTH32F_STENCIL8:E===Ko&&(q=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Qo?q=s.DEPTH_COMPONENT24:E===Ii?q=s.DEPTH_COMPONENT32F:E===Ko&&(q=s.DEPTH_COMPONENT16),q}function H(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function z(L){const E=L.target;E.removeEventListener("dispose",z),T(E),E.isVideoTexture&&v.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),he(E)}function T(L){const E=r.get(L);if(E.__webglInit===void 0)return;const q=L.source,ge=g.get(q);if(ge){const ye=ge[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&U(L),Object.keys(ge).length===0&&g.delete(q)}r.remove(L)}function U(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const q=L.source,ge=g.get(q);delete ge[E.__cacheKey],f.memory.textures--}function he(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ye=0;ye<E.__webglFramebuffer[ge].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[ge][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[ge]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=L.textures;for(let ge=0,ye=q.length;ge<ye;ge++){const de=r.get(q[ge]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(q[ge])}r.remove(L)}let G=0;function J(){G=0}function te(){const L=G;return L>=l.maxTextures&&lt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function ue(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Z(L,E){const q=r.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const ge=L.image;if(ge===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function O(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ne(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function I(L,E){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){ne(q,L,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function oe(L,E){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){xe(q,L,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const me={[dh]:s.REPEAT,[_a]:s.CLAMP_TO_EDGE,[hh]:s.MIRRORED_REPEAT},Te={[Tn]:s.NEAREST,[vE]:s.NEAREST_MIPMAP_NEAREST,[Su]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[bd]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},P={[ME]:s.NEVER,[RE]:s.ALWAYS,[EE]:s.LESS,[fp]:s.LEQUAL,[bE]:s.EQUAL,[dp]:s.GEQUAL,[TE]:s.GREATER,[AE]:s.NOTEQUAL};function Y(L,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===bd||E.magFilter===Su||E.magFilter===Fr||E.minFilter===wn||E.minFilter===bd||E.minFilter===Su||E.minFilter===Fr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,me[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,me[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,me[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Te[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Su&&E.minFilter!==Fr||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",z));const ge=E.source;let ye=g.get(ge);ye===void 0&&(ye={},g.set(ge,ye));const de=ue(E);if(de!==L.__cacheKey){ye[de]===void 0&&(ye[de]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),ye[de].usedTimes++;const We=ye[L.__cacheKey];We!==void 0&&(ye[L.__cacheKey].usedTimes--,We.usedTimes===0&&U(E)),L.__cacheKey=de,L.__webglTexture=ye[de].texture}return q}function Ce(L,E,q){return Math.floor(Math.floor(L/q)/E)}function Pe(L,E,q,ge){const de=L.updateRanges;if(de.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,ge,E.data);else{de.sort((Ae,Ee)=>Ae.start-Ee.start);let We=0;for(let Ae=1;Ae<de.length;Ae++){const Ee=de[We],Fe=de[Ae],Oe=Ee.start+Ee.count,Ie=Ce(Fe.start,E.width,4),ft=Ce(Ee.start,E.width,4);Fe.start<=Oe+1&&Ie===ft&&Ce(Fe.start+Fe.count-1,E.width,4)===Ie?Ee.count=Math.max(Ee.count,Fe.start+Fe.count-Ee.start):(++We,de[We]=Fe)}de.length=We+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),Qe=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,Ee=de.length;Ae<Ee;Ae++){const Fe=de[Ae],Oe=Math.floor(Fe.start/4),Ie=Math.ceil(Fe.count/4),ft=Oe%E.width,W=Math.floor(Oe/E.width),we=Ie,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),i.texSubImage2D(s.TEXTURE_2D,0,ft,W,we,Re,q,ge,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function ne(L,E,q){let ge=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=s.TEXTURE_3D);const ye=ve(L,E),de=E.source;i.bindTexture(ge,L.__webglTexture,s.TEXTURE0+q);const We=r.get(de);if(de.version!==We.__version||ye===!0){i.activeTexture(s.TEXTURE0+q);const De=Rt.getPrimaries(Rt.workingColorSpace),Qe=E.colorSpace===rr?null:Rt.getPrimaries(E.colorSpace),nt=E.colorSpace===rr||De===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ae=C(E.image,!1,l.maxTextureSize);Ae=Lt(E,Ae);const Ee=u.convert(E.format,E.colorSpace),Fe=u.convert(E.type);let Oe=D(E.internalFormat,Ee,Fe,E.colorSpace,E.isVideoTexture);Y(ge,E);let Ie;const ft=E.mipmaps,W=E.isVideoTexture!==!0,we=We.__version===void 0||ye===!0,Re=de.dataReady,Be=H(E,Ae);if(E.isDepthTexture)Oe=N(E.format===Ir,E.type),we&&(W?i.texStorage2D(s.TEXTURE_2D,1,Oe,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Oe,Ae.width,Ae.height,0,Ee,Fe,null));else if(E.isDataTexture)if(ft.length>0){W&&we&&i.texStorage2D(s.TEXTURE_2D,Be,Oe,ft[0].width,ft[0].height);for(let be=0,fe=ft.length;be<fe;be++)Ie=ft[be],W?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ie.width,Ie.height,Ee,Fe,Ie.data):i.texImage2D(s.TEXTURE_2D,be,Oe,Ie.width,Ie.height,0,Ee,Fe,Ie.data);E.generateMipmaps=!1}else W?(we&&i.texStorage2D(s.TEXTURE_2D,Be,Oe,Ae.width,Ae.height),Re&&Pe(E,Ae,Ee,Fe)):i.texImage2D(s.TEXTURE_2D,0,Oe,Ae.width,Ae.height,0,Ee,Fe,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Oe,ft[0].width,ft[0].height,Ae.depth);for(let be=0,fe=ft.length;be<fe;be++)if(Ie=ft[be],E.format!==Ri)if(Ee!==null)if(W){if(Re)if(E.layerUpdates.size>0){const He=I_(Ie.width,Ie.height,E.format,E.type);for(const at of E.layerUpdates){const Ft=Ie.data.subarray(at*He/Ie.data.BYTES_PER_ELEMENT,(at+1)*He/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,at,Ie.width,Ie.height,1,Ee,Ft)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ie.width,Ie.height,Ae.depth,Ee,Ie.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,Oe,Ie.width,Ie.height,Ae.depth,0,Ie.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ie.width,Ie.height,Ae.depth,Ee,Fe,Ie.data):i.texImage3D(s.TEXTURE_2D_ARRAY,be,Oe,Ie.width,Ie.height,Ae.depth,0,Ee,Fe,Ie.data)}else{W&&we&&i.texStorage2D(s.TEXTURE_2D,Be,Oe,ft[0].width,ft[0].height);for(let be=0,fe=ft.length;be<fe;be++)Ie=ft[be],E.format!==Ri?Ee!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Ie.width,Ie.height,Ee,Ie.data):i.compressedTexImage2D(s.TEXTURE_2D,be,Oe,Ie.width,Ie.height,0,Ie.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ie.width,Ie.height,Ee,Fe,Ie.data):i.texImage2D(s.TEXTURE_2D,be,Oe,Ie.width,Ie.height,0,Ee,Fe,Ie.data)}else if(E.isDataArrayTexture)if(W){if(we&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Oe,Ae.width,Ae.height,Ae.depth),Re)if(E.layerUpdates.size>0){const be=I_(Ae.width,Ae.height,E.format,E.type);for(const fe of E.layerUpdates){const He=Ae.data.subarray(fe*be/Ae.data.BYTES_PER_ELEMENT,(fe+1)*be/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Ae.width,Ae.height,1,Ee,Fe,He)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ee,Fe,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,Ae.width,Ae.height,Ae.depth,0,Ee,Fe,Ae.data);else if(E.isData3DTexture)W?(we&&i.texStorage3D(s.TEXTURE_3D,Be,Oe,Ae.width,Ae.height,Ae.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ee,Fe,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Oe,Ae.width,Ae.height,Ae.depth,0,Ee,Fe,Ae.data);else if(E.isFramebufferTexture){if(we)if(W)i.texStorage2D(s.TEXTURE_2D,Be,Oe,Ae.width,Ae.height);else{let be=Ae.width,fe=Ae.height;for(let He=0;He<Be;He++)i.texImage2D(s.TEXTURE_2D,He,Oe,be,fe,0,Ee,Fe,null),be>>=1,fe>>=1}}else if(ft.length>0){if(W&&we){const be=Ye(ft[0]);i.texStorage2D(s.TEXTURE_2D,Be,Oe,be.width,be.height)}for(let be=0,fe=ft.length;be<fe;be++)Ie=ft[be],W?Re&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee,Fe,Ie):i.texImage2D(s.TEXTURE_2D,be,Oe,Ee,Fe,Ie);E.generateMipmaps=!1}else if(W){if(we){const be=Ye(Ae);i.texStorage2D(s.TEXTURE_2D,Be,Oe,be.width,be.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Fe,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Oe,Ee,Fe,Ae);x(E)&&y(ge),We.__version=de.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function xe(L,E,q){if(E.image.length!==6)return;const ge=ve(L,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const de=r.get(ye);if(ye.version!==de.__version||ge===!0){i.activeTexture(s.TEXTURE0+q);const We=Rt.getPrimaries(Rt.workingColorSpace),De=E.colorSpace===rr?null:Rt.getPrimaries(E.colorSpace),Qe=E.colorSpace===rr||We===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!nt&&!Ae?Ee[fe]=C(E.image[fe],!0,l.maxCubemapSize):Ee[fe]=Ae?E.image[fe].image:E.image[fe],Ee[fe]=Lt(E,Ee[fe]);const Fe=Ee[0],Oe=u.convert(E.format,E.colorSpace),Ie=u.convert(E.type),ft=D(E.internalFormat,Oe,Ie,E.colorSpace),W=E.isVideoTexture!==!0,we=de.__version===void 0||ge===!0,Re=ye.dataReady;let Be=H(E,Fe);Y(s.TEXTURE_CUBE_MAP,E);let be;if(nt){W&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ft,Fe.width,Fe.height);for(let fe=0;fe<6;fe++){be=Ee[fe].mipmaps;for(let He=0;He<be.length;He++){const at=be[He];E.format!==Ri?Oe!==null?W?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,at.width,at.height,Oe,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,ft,at.width,at.height,0,at.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,at.width,at.height,Oe,Ie,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,ft,at.width,at.height,0,Oe,Ie,at.data)}}}else{if(be=E.mipmaps,W&&we){be.length>0&&Be++;const fe=Ye(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ae){W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,Oe,Ie,Ee[fe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Ee[fe].width,Ee[fe].height,0,Oe,Ie,Ee[fe].data);for(let He=0;He<be.length;He++){const Ft=be[He].image[fe].image;W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Ft.width,Ft.height,Oe,Ie,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,ft,Ft.width,Ft.height,0,Oe,Ie,Ft.data)}}else{W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe,Ie,Ee[fe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Oe,Ie,Ee[fe]);for(let He=0;He<be.length;He++){const at=be[He];W?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Oe,Ie,at.image[fe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,ft,Oe,Ie,at.image[fe])}}}x(E)&&y(s.TEXTURE_CUBE_MAP),de.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Me(L,E,q,ge,ye,de){const We=u.convert(q.format,q.colorSpace),De=u.convert(q.type),Qe=D(q.internalFormat,We,De,q.colorSpace),nt=r.get(E),Ae=r.get(q);if(Ae.__renderTarget=E,!nt.__hasExternalTextures){const Ee=Math.max(1,E.width>>de),Fe=Math.max(1,E.height>>de);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,de,Qe,Ee,Fe,E.depth,0,We,De,null):i.texImage2D(ye,de,Qe,Ee,Fe,0,We,De,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),Wt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ye,Ae.__webglTexture,0,V(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ye,Ae.__webglTexture,de),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(L,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const ge=E.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,de=N(E.stencilBuffer,ye),We=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Wt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),de,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,L)}else{const ge=E.textures;for(let ye=0;ye<ge.length;ye++){const de=ge[ye],We=u.convert(de.format,de.colorSpace),De=u.convert(de.type),Qe=D(de.internalFormat,We,De,de.colorSpace);Wt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),Qe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),Qe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(L,E,q){const ge=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const nt=u.convert(E.depthTexture.format),Ae=u.convert(E.depthTexture.type);let Ee;E.depthTexture.format===Ea?Ee=s.DEPTH_COMPONENT24:E.depthTexture.format===Ir&&(Ee=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,E.width,E.height,0,nt,Ae,null)}}else Z(E.depthTexture,0);const de=ye.__webglTexture,We=V(E),De=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Qe=E.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ea)Wt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qe,De,de,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Qe,De,de,0);else if(E.depthTexture.format===Ir)Wt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Qe,De,de,0,We):s.framebufferTexture2D(s.FRAMEBUFFER,Qe,De,de,0);else throw new Error("Unknown depthTexture format")}function et(L){const E=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=ge}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Ke(E.__webglFramebuffer[ge],L,ge);else{const ge=L.texture.mipmaps;ge&&ge.length>0?Ke(E.__webglFramebuffer[0],L,0):Ke(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=s.createRenderbuffer(),Ge(E.__webglDepthbuffer[ge],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,de)}}else{const ge=L.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ge(E.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,de)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(L,E,q){const ge=r.get(L);E!==void 0&&Me(ge.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&et(L)}function gt(L){const E=L.texture,q=r.get(L),ge=r.get(E);L.addEventListener("dispose",F);const ye=L.textures,de=L.isWebGLCubeRenderTarget===!0,We=ye.length>1;if(We||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=E.version,f.memory.textures++),de){q.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[De]=[];for(let Qe=0;Qe<E.mipmaps.length;Qe++)q.__webglFramebuffer[De][Qe]=s.createFramebuffer()}else q.__webglFramebuffer[De]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)q.__webglFramebuffer[De]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(We)for(let De=0,Qe=ye.length;De<Qe;De++){const nt=r.get(ye[De]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Wt(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const Qe=ye[De];q.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[De]);const nt=u.convert(Qe.format,Qe.colorSpace),Ae=u.convert(Qe.type),Ee=D(Qe.internalFormat,nt,Ae,Qe.colorSpace,L.isXRRenderTarget===!0),Fe=V(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ee,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,q.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Me(q.__webglFramebuffer[De][Qe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,Qe);else Me(q.__webglFramebuffer[De],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);x(E)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let De=0,Qe=ye.length;De<Qe;De++){const nt=ye[De],Ae=r.get(nt);let Ee=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,Ae.__webglTexture),Y(Ee,nt),Me(q.__webglFramebuffer,L,nt,s.COLOR_ATTACHMENT0+De,Ee,0),x(nt)&&y(Ee)}i.unbindTexture()}else{let De=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(De=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,ge.__webglTexture),Y(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Qe=0;Qe<E.mipmaps.length;Qe++)Me(q.__webglFramebuffer[Qe],L,E,s.COLOR_ATTACHMENT0,De,Qe);else Me(q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,De,0);x(E)&&y(De),i.unbindTexture()}L.depthBuffer&&et(L)}function ct(L){const E=L.textures;for(let q=0,ge=E.length;q<ge;q++){const ye=E[q];if(x(ye)){const de=w(L),We=r.get(ye).__webglTexture;i.bindTexture(de,We),y(de),i.unbindTexture()}}}const bt=[],Je=[];function _t(L){if(L.samples>0){if(Wt(L)===!1){const E=L.textures,q=L.width,ge=L.height;let ye=s.COLOR_BUFFER_BIT;const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(L),De=E.length>1;if(De)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Qe=L.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[nt]);const Ae=r.get(E[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,q,ge,0,0,q,ge,ye,s.NEAREST),m===!0&&(bt.length=0,Je.length=0,bt.push(s.COLOR_ATTACHMENT0+nt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(bt.push(de),Je.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,We.__webglColorRenderbuffer[nt]);const Ae=r.get(E[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function Wt(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(L){const E=f.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Lt(L,E){const q=L.colorSpace,ge=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Hs&&q!==rr&&(Rt.getTransfer(q)===zt?(ge!==Ri||ye!==hi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",q)),E}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=J,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=oe,this.rebindTextures=qt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KR(s,t){function i(r,l=rr){let u;const f=Rt.getTransfer(l);if(r===hi)return s.UNSIGNED_BYTE;if(r===sp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===op)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Iv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ov)return s.BYTE;if(r===Pv)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===rp)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===Ma)return s.HALF_FLOAT;if(r===Bv)return s.ALPHA;if(r===zv)return s.RGB;if(r===Ri)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===Hv)return s.RED;if(r===lp)return s.RED_INTEGER;if(r===zs)return s.RG;if(r===up)return s.RG_INTEGER;if(r===cp)return s.RGBA_INTEGER;if(r===Yu||r===ju||r===Zu||r===Ku)if(f===zt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ju)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===_h)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ph)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_h)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vh||r===xh||r===Sh||r===yh||r===Mh||r===Eh||r===bh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===vh||r===xh)return f===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Sh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===yh)return u.COMPRESSED_R11_EAC;if(r===Mh)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Eh)return u.COMPRESSED_RG11_EAC;if(r===bh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Nh||r===Lh||r===Oh||r===Ph||r===Fh||r===Ih||r===Bh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Th)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ih)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zh||r===Hh||r===Gh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===zh)return f===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vh||r===kh||r===Xh||r===Wh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Vh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const QR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Kv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ci({vertexShader:QR,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new rl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eC extends Xs{constructor(t,i){super();const r=this;let l=null,u=1,f=null,p="local-floor",m=1,h=null,v=null,_=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",x=new $R,y={},w=i.getContextAttributes();let D=null,N=null;const H=[],z=[],F=new Pt;let T=null;const U=new Ti;U.viewport=new an;const he=new Ti;he.viewport=new an;const G=[U,he],J=new db;let te=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=H[ne];return xe===void 0&&(xe=new Nd,H[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=H[ne];return xe===void 0&&(xe=new Nd,H[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=H[ne];return xe===void 0&&(xe=new Nd,H[ne]=xe),xe.getHandSpace()};function Z(ne){const xe=z.indexOf(ne.inputSource);if(xe===-1)return;const Me=H[xe];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,h||f),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function O(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",I);for(let ne=0;ne<H.length;ne++){const xe=z[ne];xe!==null&&(z[ne]=null,H[ne].disconnect(xe))}te=null,ue=null,x.reset();for(const ne in y)delete y[ne];t.setRenderTarget(D),M=null,g=null,_=null,l=null,N=null,Pe.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",O),l.addEventListener("inputsourceschange",I),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ge=null,Ke=null;w.depth&&(Ke=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=w.stencil?Ir:Ea,Ge=w.stencil?Qo:Xi);const et={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:u};_=this.getBinding(),g=_.createProjectionLayer(et),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Gi(g.textureWidth,g.textureHeight,{format:Ri,type:hi,depthTexture:new Jo(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Gi(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(ne){for(let xe=0;xe<ne.removed.length;xe++){const Me=ne.removed[xe],Ge=z.indexOf(Me);Ge>=0&&(z[Ge]=null,H[Ge].disconnect(Me))}for(let xe=0;xe<ne.added.length;xe++){const Me=ne.added[xe];let Ge=z.indexOf(Me);if(Ge===-1){for(let et=0;et<H.length;et++)if(et>=z.length){z.push(Me),Ge=et;break}else if(z[et]===null){z[et]=Me,Ge=et;break}if(Ge===-1)break}const Ke=H[Ge];Ke&&Ke.connect(Me)}}const oe=new re,me=new re;function Te(ne,xe,Me){oe.setFromMatrixPosition(xe.matrixWorld),me.setFromMatrixPosition(Me.matrixWorld);const Ge=oe.distanceTo(me),Ke=xe.projectionMatrix.elements,et=Me.projectionMatrix.elements,qt=Ke[14]/(Ke[10]-1),gt=Ke[14]/(Ke[10]+1),ct=(Ke[9]+1)/Ke[5],bt=(Ke[9]-1)/Ke[5],Je=(Ke[8]-1)/Ke[0],_t=(et[8]+1)/et[0],V=qt*Je,Wt=qt*_t,Tt=Ge/(-Je+_t),Lt=Tt*-Je;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Lt),ne.translateZ(Tt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ke[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Ye=qt+Tt,L=gt+Tt,E=V-Lt,q=Wt+(Ge-Lt),ge=ct*gt/L*Ye,ye=bt*gt/L*Ye;ne.projectionMatrix.makePerspective(E,q,ge,ye,Ye,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let xe=ne.near,Me=ne.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),J.near=he.near=U.near=xe,J.far=he.far=U.far=Me,(te!==J.near||ue!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),te=J.near,ue=J.far),J.layers.mask=ne.layers.mask|6,U.layers.mask=J.layers.mask&-5,he.layers.mask=J.layers.mask&-3;const Ge=ne.parent,Ke=J.cameras;P(J,Ge);for(let et=0;et<Ke.length;et++)P(Ke[et],Ge);Ke.length===2?Te(J,U,he):J.projectionMatrix.copy(U.projectionMatrix),Y(ne,J,Ge)};function Y(ne,xe,Me){Me===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=qh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(ne){return y[ne]};let ve=null;function Ce(ne,xe){if(v=xe.getViewerPose(h||f),b=xe,v!==null){const Me=v.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let Ge=!1;Me.length!==J.cameras.length&&(J.cameras.length=0,Ge=!0);for(let gt=0;gt<Me.length;gt++){const ct=Me[gt];let bt=null;if(M!==null)bt=M.getViewport(ct);else{const _t=_.getViewSubImage(g,ct);bt=_t.viewport,gt===0&&(t.setRenderTargetTextures(N,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(N))}let Je=G[gt];Je===void 0&&(Je=new Ti,Je.layers.enable(gt),Je.viewport=new an,G[gt]=Je),Je.matrix.fromArray(ct.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ct.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(bt.x,bt.y,bt.width,bt.height),gt===0&&(J.matrix.copy(Je.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ge===!0&&J.cameras.push(Je)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const gt=_.getDepthInformation(Me[0]);gt&&gt.isValid&&gt.texture&&x.init(gt,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){t.state.unbindTexture(),_=r.getBinding();for(let gt=0;gt<Me.length;gt++){const ct=Me[gt].camera;if(ct){let bt=y[ct];bt||(bt=new Kv,y[ct]=bt);const Je=_.getCameraImage(ct);bt.sourceTexture=Je}}}}for(let Me=0;Me<H.length;Me++){const Ge=z[Me],Ke=H[Me];Ge!==null&&Ke!==void 0&&Ke.update(Ge,xe,h||f)}ve&&ve(ne,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),b=null}const Pe=new $v;Pe.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const Nr=new ba,tC=new hn;function nC(s,t){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Qv(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,w,D,N){y.isMeshBasicMaterial?u(x,y):y.isMeshLambertMaterial?(u(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(x,y),_(x,y)):y.isMeshPhongMaterial?(u(x,y),v(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(x,y),g(x,y),y.isMeshPhysicalMaterial&&M(x,y,N)):y.isMeshMatcapMaterial?(u(x,y),b(x,y)):y.isMeshDepthMaterial?u(x,y):y.isMeshDistanceMaterial?(u(x,y),C(x,y)):y.isMeshNormalMaterial?u(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&p(x,y)):y.isPointsMaterial?m(x,y,w,D):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Xn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Xn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const w=t.get(y),D=w.envMap,N=w.envMapRotation;D&&(x.envMap.value=D,Nr.copy(N),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),x.envMapRotation.value.setFromMatrix4(tC.makeRotationFromEuler(Nr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function p(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function m(x,y,w,D){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*w,x.scale.value=D*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function M(x,y,w){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,y){y.matcap&&(x.matcap.value=y.matcap)}function C(x,y){const w=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iC(s,t,i,r){let l={},u={},f=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const N=D.program;r.uniformBlockBinding(w,N)}function h(w,D){let N=l[w.id];N===void 0&&(b(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",x));const H=D.program;r.updateUBOMapping(w,H);const z=t.render.frame;u[w.id]!==z&&(g(w),u[w.id]=z)}function v(w){const D=_();w.__bindingPointIndex=D;const N=s.createBuffer(),H=w.__size,z=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,H,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,N),N}function _(){for(let w=0;w<p;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const D=l[w.id],N=w.uniforms,H=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,F=N.length;z<F;z++){const T=Array.isArray(N[z])?N[z]:[N[z]];for(let U=0,he=T.length;U<he;U++){const G=T[U];if(M(G,z,U,H)===!0){const J=G.__offset,te=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let Z=0;Z<te.length;Z++){const O=te[Z],I=C(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,J+ue,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ue),ue+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,D,N,H){const z=w.value,F=D+"_"+N;if(H[F]===void 0)return typeof z=="number"||typeof z=="boolean"?H[F]=z:H[F]=z.clone(),!0;{const T=H[F];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return H[F]=z,!0}else if(T.equals(z)===!1)return T.copy(z),!0}return!1}function b(w){const D=w.uniforms;let N=0;const H=16;for(let F=0,T=D.length;F<T;F++){const U=Array.isArray(D[F])?D[F]:[D[F]];for(let he=0,G=U.length;he<G;he++){const J=U[he],te=Array.isArray(J.value)?J.value:[J.value];for(let ue=0,Z=te.length;ue<Z;ue++){const O=te[ue],I=C(O),oe=N%H,me=oe%I.boundary,Te=oe+me;N+=me,Te!==0&&H-Te<I.storage&&(N+=H-Te),J.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=I.storage}}}const z=N%H;return z>0&&(N+=H-z),w.__size=N,w.__cache={},this}function C(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",w),D}function x(w){const D=w.target;D.removeEventListener("dispose",x);const N=f.indexOf(D.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function y(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:h,dispose:y}}const aC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function rC(){return Pi===null&&(Pi=new $E(aC,16,16,zs,Ma),Pi.name="DFG_LUT",Pi.minFilter=wn,Pi.magFilter=wn,Pi.wrapS=_a,Pi.wrapT=_a,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class sC{constructor(t={}){const{canvas:i=wE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=hi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const C=M,x=new Set([cp,up,lp]),y=new Set([hi,Xi,Ko,Qo,sp,op]),w=new Uint32Array(4),D=new Int32Array(4);let N=null,H=null;const z=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let he=!1;this._outputColorSpace=di;let G=0,J=0,te=null,ue=-1,Z=null;const O=new an,I=new an;let oe=null;const me=new Ht(0);let Te=0,P=i.width,Y=i.height,ve=1,Ce=null,Pe=null;const ne=new an(0,0,P,Y),xe=new an(0,0,P,Y);let Me=!1;const Ge=new jv;let Ke=!1,et=!1;const qt=new hn,gt=new re,ct=new an,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function _t(){return te===null?ve:1}let V=r;function Wt(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",at,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),V===null){const X="webgl2";if(V=Wt(X,R),V===null)throw Wt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ut("WebGLRenderer: "+R.message),R}let Tt,Lt,Ye,L,E,q,ge,ye,de,We,De,Qe,nt,Ae,Ee,Fe,Oe,Ie,ft,W,we,Re,Be;function be(){Tt=new sA(V),Tt.init(),we=new KR(V,Tt),Lt=new J1(V,Tt,t,we),Ye=new jR(V,Tt),Lt.reversedDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),L=new uA(V),E=new OR,q=new ZR(V,Tt,Ye,E,Lt,we,L),ge=new rA(U),ye=new pb(V),Re=new K1(V,ye),de=new oA(V,ye,L,Re),We=new fA(V,de,ye,Re,L),Ie=new cA(V,Lt,q),Ee=new $1(E),De=new LR(U,ge,Tt,Lt,Re,Ee),Qe=new nC(U,E),nt=new FR,Ae=new VR(Tt),Oe=new Z1(U,ge,Ye,We,b,m),Fe=new YR(U,We,Lt),Be=new iC(V,L,Lt,Ye),ft=new Q1(V,Tt,L),W=new lA(V,Tt,L),L.programs=De.programs,U.capabilities=Lt,U.extensions=Tt,U.properties=E,U.renderLists=nt,U.shadowMap=Fe,U.state=Ye,U.info=L}be(),C!==hi&&(T=new hA(C,i.width,i.height,l,u));const fe=new eC(U,V);this.xr=fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,X,se=!0){if(fe.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=X,i.width=Math.floor(R*ve),i.height=Math.floor(X*ve),se===!0&&(i.style.width=R+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*ve,Y*ve).floor()},this.setDrawingBufferSize=function(R,X,se){P=R,Y=X,ve=se,i.width=Math.floor(R*se),i.height=Math.floor(X*se),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(C===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,X,se,ie){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,X,se,ie),Ye.viewport(O.copy(ne).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,X,se,ie){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,X,se,ie),Ye.scissor(I.copy(xe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Ye.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Ce=R},this.setTransparentSort=function(R){Pe=R},this.getClearColor=function(R){return R.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,se=!0){let ie=0;if(R){let Q=!1;if(te!==null){const Ue=te.texture.format;Q=x.has(Ue)}if(Q){const Ue=te.texture.type,ze=y.has(Ue),Ne=Oe.getClearColor(),qe=Oe.getClearAlpha(),Ze=Ne.r,it=Ne.g,st=Ne.b;ze?(w[0]=Ze,w[1]=it,w[2]=st,w[3]=qe,V.clearBufferuiv(V.COLOR,0,w)):(D[0]=Ze,D[1]=it,D[2]=st,D[3]=qe,V.clearBufferiv(V.COLOR,0,D))}else ie|=V.COLOR_BUFFER_BIT}X&&(ie|=V.DEPTH_BUFFER_BIT),se&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",at,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),Oe.dispose(),nt.dispose(),Ae.dispose(),E.dispose(),ge.dispose(),We.dispose(),Re.dispose(),Be.dispose(),De.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Hr),fe.removeEventListener("sessionend",Gr),wi.stop()};function He(R){R.preventDefault(),S_("WebGLRenderer: Context Lost."),he=!0}function at(){S_("WebGLRenderer: Context Restored."),he=!1;const R=L.autoReset,X=Fe.enabled,se=Fe.autoUpdate,ie=Fe.needsUpdate,Q=Fe.type;be(),L.autoReset=R,Fe.enabled=X,Fe.autoUpdate=se,Fe.needsUpdate=ie,Fe.type=Q}function Ft(R){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function At(R){const X=R.target;X.removeEventListener("dispose",At),Dn(X)}function Dn(R){mi(R),E.remove(R)}function mi(R){const X=E.get(R).programs;X!==void 0&&(X.forEach(function(se){De.releaseProgram(se)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,se,ie,Q,Ue){X===null&&(X=bt);const ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Ne=ul(R,X,se,ie,Q);Ye.setMaterial(ie,ze);let qe=se.index,Ze=1;if(ie.wireframe===!0){if(qe=de.getWireframeAttribute(se),qe===void 0)return;Ze=2}const it=se.drawRange,st=se.attributes.position;let Ve=it.start*Ze,dt=(it.start+it.count)*Ze;Ue!==null&&(Ve=Math.max(Ve,Ue.start*Ze),dt=Math.min(dt,(Ue.start+Ue.count)*Ze)),qe!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,qe.count)):st!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,st.count));const Zt=dt-Ve;if(Zt<0||Zt===1/0)return;Re.setup(Q,ie,Ne,se,qe);let Kt,Ct=ft;if(qe!==null&&(Kt=ye.get(qe),Ct=W,Ct.setIndex(Kt)),Q.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*_t()),Ct.setMode(V.LINES)):Ct.setMode(V.TRIANGLES);else if(Q.isLine){let mn=ie.linewidth;mn===void 0&&(mn=1),Ye.setLineWidth(mn*_t()),Q.isLineSegments?Ct.setMode(V.LINES):Q.isLineLoop?Ct.setMode(V.LINE_LOOP):Ct.setMode(V.LINE_STRIP)}else Q.isPoints?Ct.setMode(V.POINTS):Q.isSprite&&Ct.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)nc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const mn=Q._multiDrawStarts,Xe=Q._multiDrawCounts,Un=Q._multiDrawCount,rt=qe?ye.get(qe).bytesPerElement:1,Nn=E.get(ie).currentProgram.getUniforms();for(let Wn=0;Wn<Un;Wn++)Nn.setValue(V,"_gl_DrawID",Wn),Ct.render(mn[Wn]/rt,Xe[Wn])}else if(Q.isInstancedMesh)Ct.renderInstances(Ve,Zt,Q.count);else if(se.isInstancedBufferGeometry){const mn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xe=Math.min(se.instanceCount,mn);Ct.renderInstances(Ve,Zt,Xe)}else Ct.render(Ve,Zt)};function Ys(R,X,se){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ra(R,X,se),R.side=or,R.needsUpdate=!0,Ra(R,X,se),R.side=ga):Ra(R,X,se)}this.compile=function(R,X,se=null){se===null&&(se=R),H=Ae.get(se),H.init(X),F.push(H),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(H.pushLight(Q),Q.castShadow&&H.pushShadow(Q))}),R!==se&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(H.pushLight(Q),Q.castShadow&&H.pushShadow(Q))}),H.setupLights();const ie=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let ze=0;ze<Ue.length;ze++){const Ne=Ue[ze];Ys(Ne,se,Q),ie.add(Ne)}else Ys(Ue,se,Q),ie.add(Ue)}),H=F.pop(),ie},this.compileAsync=function(R,X,se=null){const ie=this.compile(R,X,se);return new Promise(Q=>{function Ue(){if(ie.forEach(function(ze){E.get(ze).currentProgram.isReady()&&ie.delete(ze)}),ie.size===0){Q(R);return}setTimeout(Ue,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let zr=null;function sl(R){zr&&zr(R)}function Hr(){wi.stop()}function Gr(){wi.start()}const wi=new $v;wi.setAnimationLoop(sl),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){zr=R,fe.setAnimationLoop(R),R===null?wi.stop():wi.start()},fe.addEventListener("sessionstart",Hr),fe.addEventListener("sessionend",Gr),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(he===!0)return;const se=fe.enabled===!0&&fe.isPresenting===!0,ie=T!==null&&(te===null||se)&&T.begin(U,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,X,te),H=Ae.get(R,F.length),H.init(X),F.push(H),qt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ge.setFromProjectionMatrix(qt,Bi,X.reversedDepth),et=this.localClippingEnabled,Ke=Ee.init(this.clippingPlanes,et),N=nt.get(R,z.length),N.init(),z.push(N),fe.enabled===!0&&fe.isPresenting===!0){const ze=U.xr.getDepthSensingMesh();ze!==null&&Vr(ze,X,-1/0,U.sortObjects)}Vr(R,X,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(Ce,Pe),Je=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Je&&Oe.addToRenderList(N,R),this.info.render.frame++,Ke===!0&&Ee.beginShadows();const Q=H.state.shadowsArray;if(Fe.render(Q,R,X),Ke===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&T.hasRenderPass())===!1){const ze=N.opaque,Ne=N.transmissive;if(H.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Ne.length>0)for(let Ze=0,it=qe.length;Ze<it;Ze++){const st=qe[Ze];rn(ze,Ne,R,st)}Je&&Oe.render(R);for(let Ze=0,it=qe.length;Ze<it;Ze++){const st=qe[Ze];gi(N,R,st,st.viewport)}}else Ne.length>0&&rn(ze,Ne,R,X),Je&&Oe.render(R),gi(N,R,X)}te!==null&&J===0&&(q.updateMultisampleRenderTarget(te),q.updateRenderTargetMipmap(te)),ie&&T.end(U),R.isScene===!0&&R.onAfterRender(U,R,X),Re.resetDefaultState(),ue=-1,Z=null,F.pop(),F.length>0?(H=F[F.length-1],Ke===!0&&Ee.setGlobalState(U.clippingPlanes,H.state.camera)):H=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function Vr(R,X,se,ie){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)H.pushLight(R),R.castShadow&&H.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){ie&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(qt);const ze=We.update(R),Ne=R.material;Ne.visible&&N.push(R,ze,Ne,se,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const ze=We.update(R),Ne=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ct.copy(ze.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(qt)),Array.isArray(Ne)){const qe=ze.groups;for(let Ze=0,it=qe.length;Ze<it;Ze++){const st=qe[Ze],Ve=Ne[st.materialIndex];Ve&&Ve.visible&&N.push(R,ze,Ve,se,ct.z,st)}}else Ne.visible&&N.push(R,ze,Ne,se,ct.z,null)}}const Ue=R.children;for(let ze=0,Ne=Ue.length;ze<Ne;ze++)Vr(Ue[ze],X,se,ie)}function gi(R,X,se,ie){const{opaque:Q,transmissive:Ue,transparent:ze}=R;H.setupLightsView(se),Ke===!0&&Ee.setGlobalState(U.clippingPlanes,se),ie&&Ye.viewport(O.copy(ie)),Q.length>0&&pn(Q,X,se),Ue.length>0&&pn(Ue,X,se),ze.length>0&&pn(ze,X,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function rn(R,X,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ie.id]===void 0){const Ve=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ie.id]=new Gi(1,1,{generateMipmaps:!0,type:Ve?Ma:hi,minFilter:Fr,samples:Lt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ue=H.state.transmissionRenderTarget[ie.id],ze=ie.viewport||O;Ue.setSize(ze.z*U.transmissionResolutionScale,ze.w*U.transmissionResolutionScale);const Ne=U.getRenderTarget(),qe=U.getActiveCubeFace(),Ze=U.getActiveMipmapLevel();U.setRenderTarget(Ue),U.getClearColor(me),Te=U.getClearAlpha(),Te<1&&U.setClearColor(16777215,.5),U.clear(),Je&&Oe.render(se);const it=U.toneMapping;U.toneMapping=Hi;const st=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),H.setupLightsView(ie),Ke===!0&&Ee.setGlobalState(U.clippingPlanes,ie),pn(R,se,ie),q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let dt=0,Zt=X.length;dt<Zt;dt++){const Kt=X[dt],{object:Ct,geometry:mn,material:Xe,group:Un}=Kt;if(Xe.side===ga&&Ct.layers.test(ie.layers)){const rt=Xe.side;Xe.side=Xn,Xe.needsUpdate=!0,qi(Ct,se,ie,mn,Xe,Un),Xe.side=rt,Xe.needsUpdate=!0,Ve=!0}}Ve===!0&&(q.updateMultisampleRenderTarget(Ue),q.updateRenderTargetMipmap(Ue))}U.setRenderTarget(Ne,qe,Ze),U.setClearColor(me,Te),st!==void 0&&(ie.viewport=st),U.toneMapping=it}function pn(R,X,se){const ie=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){const ze=R[Q],{object:Ne,geometry:qe,group:Ze}=ze;let it=ze.material;it.allowOverride===!0&&ie!==null&&(it=ie),Ne.layers.test(se.layers)&&qi(Ne,X,se,qe,it,Ze)}}function qi(R,X,se,ie,Q,Ue){R.onBeforeRender(U,X,se,ie,Q,Ue),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(U,X,se,ie,R,Ue),Q.transparent===!0&&Q.side===ga&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,U.renderBufferDirect(se,X,ie,Q,R,Ue),Q.side=or,Q.needsUpdate=!0,U.renderBufferDirect(se,X,ie,Q,R,Ue),Q.side=ga):U.renderBufferDirect(se,X,ie,Q,R,Ue),R.onAfterRender(U,X,se,ie,Q,Ue)}function Ra(R,X,se){X.isScene!==!0&&(X=bt);const ie=E.get(R),Q=H.state.lights,Ue=H.state.shadowsArray,ze=Q.state.version,Ne=De.getParameters(R,Q.state,Ue,X,se),qe=De.getProgramCacheKey(Ne);let Ze=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=ge.get(R.envMap||ie.environment,it),ie.envMapRotation=ie.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Ze===void 0&&(R.addEventListener("dispose",At),Ze=new Map,ie.programs=Ze);let st=Ze.get(qe);if(st!==void 0){if(ie.currentProgram===st&&ie.lightsStateVersion===ze)return ll(R,Ne),st}else Ne.uniforms=De.getUniforms(R),R.onBeforeCompile(Ne,U),st=De.acquireProgram(Ne,qe),Ze.set(qe,st),ie.uniforms=Ne.uniforms;const Ve=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Ee.uniform),ll(R,Ne),ie.needsLights=js(R),ie.lightsStateVersion=ze,ie.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=st,ie.uniformsList=null,st}function ol(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Qu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ll(R,X){const se=E.get(R);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function ul(R,X,se,ie,Q){X.isScene!==!0&&(X=bt),q.resetTextureUnits();const Ue=X.fog,ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Ne=te===null?U.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Hs,qe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ze=ge.get(ie.envMap||ze,qe),it=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!se.morphAttributes.position,dt=!!se.morphAttributes.normal,Zt=!!se.morphAttributes.color;let Kt=Hi;ie.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Kt=U.toneMapping);const Ct=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,mn=Ct!==void 0?Ct.length:0,Xe=E.get(ie),Un=H.state.lights;if(Ke===!0&&(et===!0||R!==Z)){const on=R===Z&&ie.id===ue;Ee.setState(ie,R,on)}let rt=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Un.state.version||Xe.outputColorSpace!==Ne||Q.isBatchedMesh&&Xe.batching===!1||!Q.isBatchedMesh&&Xe.batching===!0||Q.isBatchedMesh&&Xe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xe.instancingMorph===!1&&Q.morphTexture!==null||Xe.envMap!==Ze||ie.fog===!0&&Xe.fog!==Ue||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ee.numPlanes||Xe.numIntersection!==Ee.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==st||Xe.morphTargets!==Ve||Xe.morphNormals!==dt||Xe.morphColors!==Zt||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==mn)&&(rt=!0):(rt=!0,Xe.__version=ie.version);let Nn=Xe.currentProgram;rt===!0&&(Nn=Ra(ie,X,Q));let Wn=!1,_i=!1,qn=!1;const Ot=Nn.getUniforms(),sn=Xe.uniforms;if(Ye.useProgram(Nn.program)&&(Wn=!0,_i=!0,qn=!0),ie.id!==ue&&(ue=ie.id,_i=!0),Wn||Z!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ot.setValue(V,"projectionMatrix",R.projectionMatrix),Ot.setValue(V,"viewMatrix",R.matrixWorldInverse);const vi=Ot.map.cameraPosition;vi!==void 0&&vi.setValue(V,gt.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,_i=!0,qn=!0)}if(Xe.needsLights&&(Un.state.directionalShadowMap.length>0&&Ot.setValue(V,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&Ot.setValue(V,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&Ot.setValue(V,"pointShadowMap",Un.state.pointShadowMap,q)),Q.isSkinnedMesh){Ot.setOptional(V,Q,"bindMatrix"),Ot.setOptional(V,Q,"bindMatrixInverse");const on=Q.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ot.setValue(V,"boneTexture",on.boneTexture,q))}Q.isBatchedMesh&&(Ot.setOptional(V,Q,"batchingTexture"),Ot.setValue(V,"batchingTexture",Q._matricesTexture,q),Ot.setOptional(V,Q,"batchingIdTexture"),Ot.setValue(V,"batchingIdTexture",Q._indirectTexture,q),Ot.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",Q._colorsTexture,q));const Ln=se.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Ie.update(Q,se,Nn),(_i||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,Ot.setValue(V,"receiveShadow",Q.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(sn.envMapIntensity.value=X.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=rC()),_i&&(Ot.setValue(V,"toneMappingExposure",U.toneMappingExposure),Xe.needsLights&&ur(sn,qn),Ue&&ie.fog===!0&&Qe.refreshFogUniforms(sn,Ue),Qe.refreshMaterialUniforms(sn,ie,ve,Y,H.state.transmissionRenderTarget[R.id]),Qu.upload(V,ol(Xe),sn,q)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Qu.upload(V,ol(Xe),sn,q),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(V,"center",Q.center),Ot.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ot.setValue(V,"normalMatrix",Q.normalMatrix),Ot.setValue(V,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const on=ie.uniformsGroups;for(let vi=0,Yi=on.length;vi<Yi;vi++){const kr=on[vi];Be.update(kr,Nn),Be.bind(kr,Nn)}}return Nn}function ur(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function js(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,X,se){const ie=E.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=X,E.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const se=E.get(R);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const Ca=V.createFramebuffer();this.setRenderTarget=function(R,X=0,se=0){te=R,G=X,J=se;let ie=null,Q=!1,Ue=!1;if(R){const Ne=E.get(R);if(Ne.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(V.FRAMEBUFFER,Ne.__webglFramebuffer),O.copy(R.viewport),I.copy(R.scissor),oe=R.scissorTest,Ye.viewport(O),Ye.scissor(I),Ye.setScissorTest(oe),ue=-1;return}else if(Ne.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(Ne.__hasExternalTextures)q.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Ne.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Ze=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ie=Ze[X][se]:ie=Ze[X],Q=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?ie=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?ie=Ze[se]:ie=Ze,O.copy(R.viewport),I.copy(R.scissor),oe=R.scissorTest}else O.copy(ne).multiplyScalar(ve).floor(),I.copy(xe).multiplyScalar(ve).floor(),oe=Me;if(se!==0&&(ie=Ca),Ye.bindFramebuffer(V.FRAMEBUFFER,ie)&&Ye.drawBuffers(R,ie),Ye.viewport(O),Ye.scissor(I),Ye.setScissorTest(oe),Q){const Ne=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,se)}else if(Ue){const Ne=X;for(let qe=0;qe<R.textures.length;qe++){const Ze=E.get(R.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,se,Ne)}}else if(R!==null&&se!==0){const Ne=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ne.__webglTexture,se)}ue=-1},this.readRenderTargetPixels=function(R,X,se,ie,Q,Ue,ze,Ne=0){if(!(R&&R.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe){Ye.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Ze=R.textures[Ne],it=Ze.format,st=Ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ne),!Lt.textureFormatReadable(it)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(st)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ie&&se>=0&&se<=R.height-Q&&V.readPixels(X,se,ie,Q,we.convert(it),we.convert(st),Ue)}finally{const Ze=te!==null?E.get(te).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(R,X,se,ie,Q,Ue,ze,Ne=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe)if(X>=0&&X<=R.width-ie&&se>=0&&se<=R.height-Q){Ye.bindFramebuffer(V.FRAMEBUFFER,qe);const Ze=R.textures[Ne],it=Ze.format,st=Ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ne),!Lt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ve),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),V.readPixels(X,se,ie,Q,we.convert(it),we.convert(st),0);const dt=te!==null?E.get(te).__webglFramebuffer:null;Ye.bindFramebuffer(V.FRAMEBUFFER,dt);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await DE(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ve),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(Ve),V.deleteSync(Zt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,se=0){const ie=Math.pow(2,-se),Q=Math.floor(R.image.width*ie),Ue=Math.floor(R.image.height*ie),ze=X!==null?X.x:0,Ne=X!==null?X.y:0;q.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,ze,Ne,Q,Ue),Ye.unbindTexture()};const wa=V.createFramebuffer(),cr=V.createFramebuffer();this.copyTextureToTexture=function(R,X,se=null,ie=null,Q=0,Ue=0){let ze,Ne,qe,Ze,it,st,Ve,dt,Zt;const Kt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(se!==null)ze=se.max.x-se.min.x,Ne=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,it=se.min.y,st=se.isBox3?se.min.z:0;else{const sn=Math.pow(2,-Q);ze=Math.floor(Kt.width*sn),Ne=Math.floor(Kt.height*sn),R.isDataArrayTexture?qe=Kt.depth:R.isData3DTexture?qe=Math.floor(Kt.depth*sn):qe=1,Ze=0,it=0,st=0}ie!==null?(Ve=ie.x,dt=ie.y,Zt=ie.z):(Ve=0,dt=0,Zt=0);const Ct=we.convert(X.format),mn=we.convert(X.type);let Xe;X.isData3DTexture?(q.setTexture3D(X,0),Xe=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),Xe=V.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),Xe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Un=V.getParameter(V.UNPACK_ROW_LENGTH),rt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Nn=V.getParameter(V.UNPACK_SKIP_PIXELS),Wn=V.getParameter(V.UNPACK_SKIP_ROWS),_i=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,st);const qn=R.isDataArrayTexture||R.isData3DTexture,Ot=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const sn=E.get(R),Ln=E.get(X),on=E.get(sn.__renderTarget),vi=E.get(Ln.__renderTarget);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Yi=0;Yi<qe;Yi++)qn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,Q,st+Yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Ue,Zt+Yi)),V.blitFramebuffer(Ze,it,ze,Ne,Ve,dt,ze,Ne,V.DEPTH_BUFFER_BIT,V.NEAREST);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||E.has(R)){const sn=E.get(R),Ln=E.get(X);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,wa),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,cr);for(let on=0;on<qe;on++)qn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Q,st+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Q),Ot?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,Ue,Zt+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,Ue),Q!==0?V.blitFramebuffer(Ze,it,ze,Ne,Ve,dt,ze,Ne,V.COLOR_BUFFER_BIT,V.NEAREST):Ot?V.copyTexSubImage3D(Xe,Ue,Ve,dt,Zt+on,Ze,it,ze,Ne):V.copyTexSubImage2D(Xe,Ue,Ve,dt,Ze,it,ze,Ne);Ye.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ot?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Xe,Ue,Ve,dt,Zt,ze,Ne,qe,Ct,mn,Kt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,Ue,Ve,dt,Zt,ze,Ne,qe,Ct,Kt.data):V.texSubImage3D(Xe,Ue,Ve,dt,Zt,ze,Ne,qe,Ct,mn,Kt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,Ve,dt,ze,Ne,Ct,mn,Kt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,Ve,dt,Kt.width,Kt.height,Ct,Kt.data):V.texSubImage2D(V.TEXTURE_2D,Ue,Ve,dt,ze,Ne,Ct,mn,Kt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Un),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Nn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_i),Ue===0&&X.generateMipmaps&&V.generateMipmap(Xe),Ye.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){G=0,J=0,te=null,Ye.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const oC=({topColor:s="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:r=.3,interactive:l=!1,className:u="",glowAmount:f=.005,pillarWidth:p=3,pillarHeight:m=.4,noiseIntensity:h=.5,mixBlendMode:v="screen",pillarRotation:_=0,quality:g="high"})=>{const M=ce.useRef(null),b=ce.useRef(null),C=ce.useRef(null),x=ce.useRef(null),y=ce.useRef(null),w=ce.useRef(null),D=ce.useRef(null),N=ce.useRef(new Pt(0,0)),H=ce.useRef(0),[z,F]=ce.useState(!0);return ce.useEffect(()=>{const T=document.createElement("canvas");T.getContext("webgl")||T.getContext("experimental-webgl")||F(!1)},[]),ce.useEffect(()=>{if(!M.current||!z)return;const T=M.current,U=T.clientWidth,he=T.clientHeight,G=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),J=G||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let te=g;J&&g==="high"&&(te="medium"),G&&g!=="low"&&(te="low");const ue={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},Z=ue[te]||ue.medium,O=new qE;y.current=O;const I=new mp(-1,1,1,-1,0,1);w.current=I;let oe;try{oe=new sC({antialias:!1,alpha:!0,powerPreference:te==="high"?"high-performance":"low-power",precision:Z.precision,stencil:!1,depth:!1})}catch{F(!1);return}oe.setSize(U,he),oe.setPixelRatio(Z.pixelRatio),T.appendChild(oe.domElement),C.current=oe;const me=Je=>{const _t=new Ht(Je);return new re(_t.r,_t.g,_t.b)},Te=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,P=`
      precision ${Z.precision} float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uRotCos;
      uniform float uRotSin;
      uniform float uPillarRotCos;
      uniform float uPillarRotSin;
      uniform float uWaveSin;
      uniform float uWaveCos;
      varying vec2 vUv;

      const float STEP_MULT = ${Z.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${Z.iterations};
      const int WAVE_ITER = ${Z.waveIterations};

      void main() {
        vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
        uv = vec2(uPillarRotCos * uv.x - uPillarRotSin * uv.y, uPillarRotSin * uv.x + uPillarRotCos * uv.y);

        vec3 ro = vec3(0.0, 0.0, -10.0);
        vec3 rd = normalize(vec3(uv, 1.0));

        float rotC = uRotCos;
        float rotS = uRotSin;
        if(uInteractive && (uMouse.x != 0.0 || uMouse.y != 0.0)) {
          float a = uMouse.x * 6.283185;
          rotC = cos(a);
          rotS = sin(a);
        }

        vec3 col = vec3(0.0);
        float t = 0.1;
        
        for(int i = 0; i < MAX_ITER; i++) {
          vec3 p = ro + rd * t;
          p.xz = vec2(rotC * p.x - rotS * p.z, rotS * p.x + rotC * p.z);

          vec3 q = p;
          q.y = p.y * uPillarHeight + uTime;
          
          float freq = 1.0;
          float amp = 1.0;
          for(int j = 0; j < WAVE_ITER; j++) {
            q.xz = vec2(uWaveCos * q.x - uWaveSin * q.z, uWaveSin * q.x + uWaveCos * q.z);
            q += cos(q.zxy * freq - uTime * float(j) * 2.0) * amp;
            freq *= 2.0;
            amp *= 0.5;
          }
          
          float d = length(cos(q.xz)) - 0.2;
          float bound = length(p.xz) - uPillarWidth;
          float k = 4.0;
          float h = max(k - abs(d - bound), 0.0);
          d = max(d, bound) + h * h * 0.0625 / k;
          d = abs(d) * 0.15 + 0.01;

          float grad = clamp((15.0 - p.y) / 30.0, 0.0, 1.0);
          col += mix(uBottomColor, uTopColor, grad) / d;

          t += d * STEP_MULT;
          if(t > 50.0) break;
        }

        float widthNorm = uPillarWidth / 3.0;
        col = tanh(col * uGlowAmount / widthNorm);
        
        col -= fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) / 15.0 * uNoiseIntensity;
        
        gl_FragColor = vec4(col * uIntensity, 1.0);
      }
    `,Y=_*Math.PI/180,ve=Math.sin(.4),Ce=Math.cos(.4),Pe=new Ci({vertexShader:Te,fragmentShader:P,uniforms:{uTime:{value:0},uResolution:{value:new Pt(U,he)},uMouse:{value:N.current},uTopColor:{value:me(s)},uBottomColor:{value:me(t)},uIntensity:{value:i},uInteractive:{value:l},uGlowAmount:{value:f},uPillarWidth:{value:p},uPillarHeight:{value:m},uNoiseIntensity:{value:h},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(Y)},uPillarRotSin:{value:Math.sin(Y)},uWaveSin:{value:ve},uWaveCos:{value:Ce}},transparent:!0,depthWrite:!1,depthTest:!1});x.current=Pe;const ne=new rl(2,2);D.current=ne;const xe=new Wi(ne,Pe);O.add(xe);let Me=null;const Ge=Je=>{if(!l||Me)return;Me=window.setTimeout(()=>{Me=null},16);const _t=T.getBoundingClientRect(),V=(Je.clientX-_t.left)/_t.width*2-1,Wt=-((Je.clientY-_t.top)/_t.height)*2+1;N.current.set(V,Wt)};l&&T.addEventListener("mousemove",Ge,{passive:!0});let Ke=performance.now();const qt=1e3/(te==="low"?30:60),gt=Je=>{if(!x.current||!C.current||!y.current||!w.current)return;const _t=Je-Ke;if(_t>=qt){H.current+=.016*r;const V=H.current;x.current.uniforms.uTime.value=V,x.current.uniforms.uRotCos.value=Math.cos(V*.3),x.current.uniforms.uRotSin.value=Math.sin(V*.3),C.current.render(y.current,w.current),Ke=Je-_t%qt}b.current=requestAnimationFrame(gt)};b.current=requestAnimationFrame(gt);let ct=null;const bt=()=>{ct&&clearTimeout(ct),ct=window.setTimeout(()=>{if(!C.current||!x.current||!M.current)return;const Je=M.current.clientWidth,_t=M.current.clientHeight;C.current.setSize(Je,_t),x.current.uniforms.uResolution.value.set(Je,_t)},150)};return window.addEventListener("resize",bt,{passive:!0}),()=>{window.removeEventListener("resize",bt),l&&T.removeEventListener("mousemove",Ge),b.current&&cancelAnimationFrame(b.current),C.current&&(C.current.dispose(),C.current.forceContextLoss(),T.contains(C.current.domElement)&&T.removeChild(C.current.domElement)),x.current&&x.current.dispose(),D.current&&D.current.dispose(),C.current=null,x.current=null,y.current=null,w.current=null,D.current=null,b.current=null}},[s,t,i,r,l,f,p,m,h,_,z,g]),z?K.jsx("div",{ref:M,className:`light-pillar-container ${u}`,style:{mixBlendMode:v}}):K.jsx("div",{className:`light-pillar-fallback ${u}`,style:{mixBlendMode:v},children:"WebGL not supported"})},gp=()=>{const[s,t]=ce.useState(!1),i="#5227FF",r="#FF9FFC",l=[{name:"Home",href:"/"},{name:"About",href:"/aboutus"},{name:"Contact",href:"/contact"}];return K.jsxs("header",{className:"relative bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50",children:[K.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5",style:{background:`linear-gradient(90deg, transparent, ${i}, ${r}, transparent)`}}),K.jsxs("nav",{className:"max-w-7xl mx-auto px-6 md:px-8 py-4",children:[K.jsxs("div",{className:"flex items-center justify-between",children:[K.jsxs("a",{href:"/",className:"flex items-center gap-2 group",children:[K.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110",style:{background:`linear-gradient(135deg, ${i}20, ${r}20)`},children:K.jsx("span",{className:"text-2xl",children:"🐼"})}),K.jsx("span",{className:"text-xl font-bold bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(135deg, ${i}, ${r})`},children:"Panda"})]}),K.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[l.map(u=>K.jsxs(ip,{to:u.href,className:"relative text-gray-600 hover:text-gray-900 font-medium transition-colors group",children:[u.name,K.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",style:{background:`linear-gradient(90deg, ${i}, ${r})`}})]},u.name)),K.jsx("a",{href:"/contact",className:"px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all transform hover:scale-105 hover:shadow-lg",style:{background:`linear-gradient(135deg, ${i}, ${r})`,boxShadow:`0 4px 15px -5px ${i}80`},children:"Book Now 📸"})]}),K.jsx("button",{onClick:()=>t(!s),className:"md:hidden w-10 h-10 rounded-lg flex items-center justify-center focus:outline-none",style:{background:`linear-gradient(135deg, ${i}10, ${r}10)`},"aria-label":"Toggle menu",children:K.jsxs("div",{className:"space-y-1.5",children:[K.jsx("span",{className:"block w-5 h-0.5 transition-transform",style:{background:`linear-gradient(90deg, ${i}, ${r})`,transform:s?"rotate(45deg) translate(3px, 3px)":"none"}}),K.jsx("span",{className:"block w-5 h-0.5 transition-opacity",style:{background:`linear-gradient(90deg, ${i}, ${r})`,opacity:s?0:1}}),K.jsx("span",{className:"block w-5 h-0.5 transition-transform",style:{background:`linear-gradient(90deg, ${i}, ${r})`,transform:s?"rotate(-45deg) translate(3px, -3px)":"none"}})]})})]}),K.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${s?"max-h-64 opacity-100 mt-4":"max-h-0 opacity-0"}`,children:K.jsxs("div",{className:"flex flex-col gap-3 py-4 border-t border-gray-100",children:[l.map(u=>K.jsx("a",{href:u.href,className:"text-gray-600 hover:text-gray-900 font-medium py-2 px-4 rounded-lg transition-all",onClick:()=>t(!1),onMouseEnter:f=>f.currentTarget.style.background=`linear-gradient(135deg, ${i}10, ${r}10)`,onMouseLeave:f=>f.currentTarget.style.background="transparent",children:u.name},u.name)),K.jsx("a",{href:"/contact",className:"mt-2 px-6 py-3 rounded-xl text-white font-semibold text-center transition-all",style:{background:`linear-gradient(135deg, ${i}, ${r})`},onClick:()=>t(!1),children:"Book Now 📸"})]})})]}),K.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[K.jsx("div",{className:"absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10",style:{background:`radial-gradient(circle, ${i} 0%, transparent 70%)`,filter:"blur(30px)"}}),K.jsx("div",{className:"absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10",style:{background:`radial-gradient(circle, ${r} 0%, transparent 70%)`,filter:"blur(30px)"}})]})]})},lC=()=>{const s=Jh();return K.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:[K.jsx(gp,{}),K.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:K.jsx(oC,{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,glowAmount:.002,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:25,interactive:!1,mixBlendMode:"screen",quality:"high"})}),K.jsx("div",{style:{position:"relative",zIndex:2,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:K.jsxs("div",{style:{textAlign:"center",backdropFilter:"blur(15px)",background:"rgba(255,255,255,0.05)",padding:"60px",borderRadius:"20px",boxShadow:"0 0 40px rgba(0,0,0,0.4)",maxWidth:"700px"},className:"text-white",children:[K.jsx("h1",{style:{fontSize:"3.5rem",fontWeight:700,marginBottom:"20px",letterSpacing:"2px"},children:"Panda Photography"}),K.jsx("p",{style:{fontSize:"1.2rem",marginBottom:"35px",opacity:.85},children:"Capturing timeless moments with creativity, passion, and perfection. Weddings • Portraits • Events • Nature"}),K.jsxs("div",{style:{display:"flex",gap:"20px",justifyContent:"center"},children:[K.jsx("button",{style:{padding:"12px 28px",borderRadius:"30px",border:"none",background:"#ffffff",color:"#5227FF",fontWeight:600,cursor:"pointer"},onClick:()=>{s("/aboutus")},children:"View Portfolio"}),K.jsx("button",{onClick:()=>{s("/contact")},style:{padding:"12px 28px",borderRadius:"30px",border:"1px solid white",background:"transparent",color:"white",fontWeight:600,cursor:"pointer"},children:"Book a Shoot"})]})]})})]})},uC=()=>{const s=Jh(),t="#5227FF",i="#FF9FFC",r=[{category:"Weddings & Couples",items:["Wedding Photography","Pre-Wedding Shoots","Engagement & Couple Shoots"]},{category:"Events & Portraits",items:["Birthday & Event Photography","Maternity & Baby Shoots","Corporate & Portfolio Photography"]}],l=[{icon:"✨",title:"Creative & Candid Style",desc:"Natural, unposed moments that tell your unique story"},{icon:"📸",title:"Professional Equipment",desc:"High-quality gear for stunning results in any setting"},{icon:"💫",title:"Comfortable Experience",desc:"Friendly approach that puts you at ease"},{icon:"⚡",title:"Timely Delivery",desc:"Quick turnaround without compromising quality"},{icon:"🎨",title:"Customized Packages",desc:"Flexible options tailored to your needs"}];return K.jsxs("div",{children:[K.jsx(gp,{}),K.jsxs("section",{className:"relative bg-gradient-to-b from-white via-purple-50 to-white py-20 px-6 md:px-20 overflow-hidden",children:[K.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[K.jsx("div",{className:"absolute top-20 left-10 w-96 h-96 rounded-full mix-blend-screen opacity-30 animate-pulse",style:{background:`radial-gradient(circle, ${t}40 0%, ${i}20 70%, transparent 100%)`,filter:"blur(60px)",animation:"float 20s ease-in-out infinite"}}),K.jsx("div",{className:"absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full mix-blend-screen opacity-30 animate-pulse",style:{background:`radial-gradient(circle, ${i}30 0%, ${t}20 70%, transparent 100%)`,filter:"blur(80px)",animation:"float 25s ease-in-out infinite reverse"}}),K.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:`
              linear-gradient(${t}10 1px, transparent 1px),
              linear-gradient(90deg, ${i}10 1px, transparent 1px)
            `,backgroundSize:"50px 50px"}}),[...Array(5)].map((u,f)=>K.jsx("div",{className:"absolute w-3 h-40 opacity-20",style:{background:`linear-gradient(135deg, ${t}, ${i})`,left:`${15+f*20}%`,top:`${Math.sin(f)*30+20}%`,transform:"rotate(25deg)",filter:"blur(8px)",animation:`pillarFloat ${8+f}s ease-in-out infinite`}},f))]}),K.jsxs("div",{className:"relative max-w-6xl mx-auto",children:[K.jsxs("div",{className:"relative text-center mb-20",children:[K.jsx("div",{className:"absolute inset-0 flex justify-center",children:K.jsx("div",{className:"w-64 h-64 rounded-full blur-3xl opacity-30",style:{background:`linear-gradient(135deg, ${t}40, ${i}40)`}})}),K.jsxs("div",{className:"relative",children:[K.jsx("span",{className:"inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white",style:{background:`linear-gradient(135deg, ${t}, ${i})`},children:"📸 Since 2020"}),K.jsxs("h1",{className:"text-5xl md:text-6xl font-bold mb-6",children:[K.jsx("span",{className:"text-gray-800",children:"Panda"})," ",K.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(135deg, ${t}, ${i})`},children:"Photography"})]}),K.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[K.jsx("div",{className:"h-px w-12",style:{background:`linear-gradient(90deg, transparent, ${t})`}}),K.jsx("p",{className:"text-2xl text-gray-600 font-light italic",children:"Capturing Moments. Creating Memories."}),K.jsx("div",{className:"h-px w-12",style:{background:`linear-gradient(90deg, ${i}, transparent)`}})]})]})]}),K.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center mb-20",children:[K.jsxs("div",{className:"space-y-6",children:[K.jsxs("h2",{className:"text-4xl font-bold text-gray-800",children:["Our"," ",K.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(135deg, ${t}, ${i})`},children:"Story"})]}),K.jsxs("div",{className:"space-y-4 text-gray-600 text-lg",children:[K.jsxs("p",{className:"leading-relaxed",children:["At ",K.jsx("span",{className:"font-semibold",style:{color:t},children:"Panda Photography"}),", we believe every smile, every glance, and every celebration tells a beautiful story. Our passion is turning those fleeting moments into timeless memories that you can cherish forever."]}),K.jsx("p",{className:"leading-relaxed",children:"We specialize in capturing emotions in their purest form — natural, candid, and full of life."})]}),K.jsx("div",{className:"grid grid-cols-3 gap-4 pt-6",children:[{number:"500+",label:"Events Covered"},{number:"1000+",label:"Happy Clients"},{number:"50k+",label:"Photos Taken"}].map((u,f)=>K.jsxs("div",{className:"text-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow",children:[K.jsx("div",{className:"text-3xl font-bold mb-1 bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(135deg, ${t}, ${i})`},children:u.number}),K.jsx("div",{className:"text-sm text-gray-500",children:u.label})]},f))})]}),K.jsx("div",{className:"relative h-96 rounded-2xl overflow-hidden shadow-xl p-1",style:{background:`linear-gradient(135deg, ${t}, ${i})`},children:K.jsxs("div",{className:"w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden",children:[K.jsx("span",{className:"text-lg font-semibold px-6 py-3 rounded-full shadow-lg",style:{background:`linear-gradient(135deg, ${t}, ${i})`,color:"white"},children:"📷 Our Studio"}),K.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-overlay",style:{background:`repeating-linear-gradient(45deg, ${t} 0px, ${t} 10px, transparent 10px, transparent 20px)`}})]})})]}),K.jsxs("div",{className:"mb-20",children:[K.jsxs("div",{className:"text-center mb-12",children:[K.jsxs("h2",{className:"text-4xl font-bold text-gray-800 mb-4",children:["📸 What"," ",K.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(135deg, ${t}, ${i})`},children:"We Do"})]}),K.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"From intimate moments to grand celebrations, we capture it all with passion and creativity"})]}),K.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:r.map((u,f)=>K.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1",children:[K.jsx("h3",{className:"text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2",style:{borderColor:`${t}40`},children:u.category}),K.jsx("ul",{className:"space-y-4",children:u.items.map((p,m)=>K.jsxs("li",{className:"flex items-center gap-3 text-gray-700",children:[K.jsx("span",{className:"w-2 h-2 rounded-full",style:{background:`linear-gradient(135deg, ${t}, ${i})`}}),p]},m))})]},f))}),K.jsx("div",{className:"mt-10 p-6 rounded-xl text-center max-w-3xl mx-auto",style:{background:`linear-gradient(135deg, ${t}10, ${i}10)`,backdropFilter:"blur(8px)"},children:K.jsxs("p",{className:"text-gray-700 text-lg",children:[K.jsx("span",{style:{color:t},className:"font-semibold",children:"Every moment tells a story —"})," ","we're here to help you tell yours through creative angles, natural lighting, and artistic composition."]})})]}),K.jsxs("div",{className:"grid md:grid-cols-2 gap-12 mb-20",children:[K.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1",children:[K.jsx("div",{className:"w-16 h-16 rounded-xl flex items-center justify-center mb-6",style:{background:`linear-gradient(135deg, ${t}20, ${i}20)`},children:K.jsx("span",{className:"text-3xl",children:"🎯"})}),K.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"Our Vision"}),K.jsx("p",{className:"text-gray-600 leading-relaxed text-lg",children:"Our goal is simple — to make every client feel comfortable, confident, and truly special in front of the camera. We don't just take photos; we capture emotions, laughter, tears, and unforgettable memories."}),K.jsx("div",{className:"mt-6 space-y-3",children:["Authentic Moments","Artistic Approach","Lasting Memories"].map((u,f)=>K.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[K.jsx("span",{style:{color:t},children:"✓"}),u]},f))})]}),K.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1",children:[K.jsx("div",{className:"w-16 h-16 rounded-xl flex items-center justify-center mb-6",style:{background:`linear-gradient(135deg, ${t}20, ${i}20)`},children:K.jsx("span",{className:"text-3xl",children:"💡"})}),K.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-6",children:"Why Choose Us?"}),K.jsx("div",{className:"space-y-6",children:l.map((u,f)=>K.jsxs("div",{className:"flex gap-4",children:[K.jsx("div",{className:"w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",style:{background:`linear-gradient(135deg, ${t}20, ${i}20)`},children:K.jsx("span",{className:"text-xl",children:u.icon})}),K.jsxs("div",{children:[K.jsx("h3",{className:"font-semibold text-gray-800",children:u.title}),K.jsx("p",{className:"text-sm text-gray-500",children:u.desc})]})]},f))})]})]}),K.jsxs("div",{className:"relative rounded-3xl p-12 text-center text-white overflow-hidden",style:{background:`linear-gradient(135deg, ${t}, ${i})`},children:[K.jsxs("div",{className:"absolute inset-0 opacity-10",children:[K.jsx("div",{className:"absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"}),K.jsx("div",{className:"absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"})]}),K.jsxs("div",{className:"relative",children:[K.jsx("span",{className:"text-5xl mb-4 block",children:"❤️"}),K.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Our Promise to You"}),K.jsx("p",{className:"text-xl mb-6 max-w-2xl mx-auto opacity-90",children:"When you choose Panda Photography, you're not just hiring photographers — you're choosing storytellers who care about your special moments as much as you do."}),K.jsx("p",{className:"text-2xl font-semibold mb-8",children:"Let's create magic together."}),K.jsx("button",{className:"bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl",style:{color:t},onClick:()=>{s("/contact")},children:"Book Your Session 📷"})]})]}),K.jsxs("div",{className:"mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400",children:[K.jsx("span",{className:"text-sm font-semibold",children:"Featured on:"}),["Photography Mag","Wedding Digest","Creative Lens"].map((u,f)=>K.jsx("span",{className:"font-medium",style:{color:f===0?t:f===1?i:"#9CA3AF",opacity:f<2?.8:.5},children:u},f))]})]})]})]})},cC=()=>{const[s,t]=ce.useState({name:"",email:"",message:""}),[i,r]=ce.useState(!1),[l,u]=ce.useState(null),f="#5227FF",p="#FF9FFC",m=v=>{t({...s,[v.target.name]:v.target.value})},h=v=>{v.preventDefault(),r(!0),console.log("Form submitted:",s),u("success"),r(!1),setTimeout(()=>{t({name:"",email:"",message:""}),u(null)},2e3)};return K.jsxs("div",{children:[K.jsx(gp,{}),K.jsxs("section",{className:"min-h-screen bg-gradient-to-b from-white via-purple-50 to-white py-20 px-6 md:px-20 relative overflow-hidden",children:[K.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[K.jsx("div",{className:"absolute top-20 right-20 w-96 h-96 rounded-full opacity-20",style:{background:`radial-gradient(circle, ${f}40 0%, ${p}20 70%, transparent 100%)`,filter:"blur(60px)"}}),K.jsx("div",{className:"absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full opacity-20",style:{background:`radial-gradient(circle, ${p}30 0%, ${f}20 70%, transparent 100%)`,filter:"blur(80px)"}})]}),K.jsxs("div",{className:"max-w-4xl mx-auto relative",children:[K.jsxs("div",{className:"text-center mb-12",children:[K.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-4",children:["Get in"," ",K.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:`linear-gradient(135deg, ${f}, ${p})`},children:"Touch"})]}),K.jsx("p",{className:"text-gray-600 text-lg",children:"We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),K.jsxs("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10",style:{boxShadow:`0 20px 40px -15px ${f}40`},children:[K.jsxs("form",{onSubmit:h,className:"space-y-6",children:[K.jsxs("div",{children:[K.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Your Name"}),K.jsx("input",{type:"text",name:"name",value:s.name,onChange:m,required:!0,className:"w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all bg-white/50",style:{borderColor:s.name?f:"#e5e7eb"},placeholder:"John Doe"})]}),K.jsxs("div",{children:[K.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Email Address"}),K.jsx("input",{type:"email",name:"email",value:s.email,onChange:m,required:!0,className:"w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all bg-white/50",style:{borderColor:s.email?f:"#e5e7eb"},placeholder:"john@example.com"})]}),K.jsxs("div",{children:[K.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Your Message"}),K.jsx("textarea",{name:"message",value:s.message,onChange:m,required:!0,rows:5,className:"w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all bg-white/50 resize-none",style:{borderColor:s.message?f:"#e5e7eb"},placeholder:"Tell us about your photography needs..."})]}),K.jsx("button",{type:"submit",disabled:i,className:"w-full py-4 px-6 rounded-lg font-semibold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50",style:{background:`linear-gradient(135deg, ${f}, ${p})`,boxShadow:`0 10px 20px -10px ${f}80`},children:i?"Sending...":"Send Message"}),l==="success"&&K.jsxs("div",{className:"text-center p-4 rounded-lg bg-green-50 text-green-700 animate-fade-in",children:[K.jsx("p",{className:"font-semibold",children:"✓ Message sent successfully!"}),K.jsx("p",{className:"text-sm mt-1",children:"Check console for submitted data."})]})]}),K.jsxs("div",{className:"mt-10 pt-8 border-t border-gray-200 grid md:grid-cols-2 gap-6",children:[K.jsxs("div",{className:"flex items-center gap-4",children:[K.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:`linear-gradient(135deg, ${f}20, ${p}20)`},children:"📧"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-sm text-gray-500",children:"Email us at"}),K.jsx("p",{className:"font-semibold text-gray-800",children:"hello@pandaphoto.com"})]})]}),K.jsxs("div",{className:"flex items-center gap-4",children:[K.jsx("div",{className:"w-12 h-12 rounded-lg flex items-center justify-center",style:{background:`linear-gradient(135deg, ${f}20, ${p}20)`},children:"📱"}),K.jsxs("div",{children:[K.jsx("p",{className:"text-sm text-gray-500",children:"Call us at"}),K.jsx("p",{className:"font-semibold text-gray-800",children:"+1 (555) 123-4567"})]})]})]})]}),K.jsx("p",{className:"text-center text-gray-400 text-sm mt-8",children:"© 2024 Panda Photography. All rights reserved."})]})]})]})};function fC(){return K.jsx(zM,{basename:"/panda-photography/",children:K.jsxs(mM,{children:[K.jsx(ku,{path:"/",element:K.jsx(lC,{})}),K.jsx(ku,{path:"/aboutus",element:K.jsx(uC,{})}),K.jsx(ku,{path:"/contact",element:K.jsx(cC,{})})]})})}vy.createRoot(document.getElementById("root")).render(K.jsx(ce.StrictMode,{children:K.jsx(fC,{})}));
