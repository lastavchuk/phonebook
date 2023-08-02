"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[637],{5462:function(){},9085:function(t,e,n){n.d(e,{Mi:function(){return M},Ix:function(){return x},Am:function(){return Q}});var o=n(4942),a=n(9439),r=n(1413),i=n(4925),s=n(3433),c=n(2791);function u(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=u(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var l=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=u(t))&&(o&&(o+=" "),o+=e);return o},d=["theme","type"],f=["delay","staleId"],p=function(t){return"number"==typeof t&&!isNaN(t)},m=function(t){return"string"==typeof t},v=function(t){return"function"==typeof t},g=function(t){return m(t)||v(t)?t:null},h=function(t){return(0,c.isValidElement)(t)||m(t)||v(t)||p(t)};function y(t){var e=t.enter,n=t.exit,o=t.appendPosition,a=void 0!==o&&o,r=t.collapse,i=void 0===r||r,u=t.collapseDuration,l=void 0===u?300:u;return function(t){var o=t.children,r=t.position,u=t.preventExitTransition,d=t.done,f=t.nodeRef,p=t.isIn,m=a?"".concat(e,"--").concat(r):e,v=a?"".concat(n,"--").concat(r):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var t,e=f.current,n=m.split(" "),o=function t(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,s.Z)(n)))};(t=e.classList).add.apply(t,(0,s.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var t=f.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,a=t.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(e,n)}))}))}(t,d,l):d()};p||(u?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),c.createElement(c.Fragment,null,o)}}function T(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var E={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(a)}))}},C=function(t){var e=t.theme,n=t.type,o=(0,i.Z)(t,d);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},b={info:function(t){return c.createElement(C,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(C,(0,r.Z)({},t),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(C,(0,r.Z)({},t),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(C,(0,r.Z)({},t),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function I(t){var e=(0,c.useReducer)((function(t){return t+1}),0),n=(0,a.Z)(e,2)[1],o=(0,c.useState)([]),u=(0,a.Z)(o,2),l=u[0],d=u[1],y=(0,c.useRef)(null),C=(0,c.useRef)(new Map).current,I=function(t){return-1!==l.indexOf(t)},Z=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:I,getToast:function(t){return C.get(t)}}).current;function _(t){var e=t.containerId;!Z.props.limit||e&&Z.containerId!==e||(Z.count-=Z.queue.length,Z.queue=[])}function L(t){d((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function O(){var t=Z.queue.shift();R(t.toastContent,t.toastProps,t.staleId)}function N(t,e){var o=e.delay,s=e.staleId,u=(0,i.Z)(e,f);if(h(t)&&!function(t){return!y.current||Z.props.enableMultiContainer&&t.containerId!==Z.props.containerId||C.has(t.toastId)&&null==t.updateId}(u)){var l=u.toastId,d=u.updateId,I=u.data,_=Z.props,N=function(){return L(l)},k=null==d;k&&Z.count++;var w,M,x=(0,r.Z)((0,r.Z)((0,r.Z)({},_),{},{style:_.toastStyle,key:Z.toastKey++},Object.fromEntries(Object.entries(u).filter((function(t){var e=(0,a.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:l,updateId:d,data:I,closeToast:N,isIn:!1,className:g(u.className||_.toastClassName),bodyClassName:g(u.bodyClassName||_.bodyClassName),progressClassName:g(u.progressClassName||_.progressClassName),autoClose:!u.isLoading&&(w=u.autoClose,M=_.autoClose,!1===w||p(w)&&w>0?w:M),deleteToast:function(){var t=T(C.get(l),"removed");C.delete(l),E.emit(4,t);var e=Z.queue.length;if(Z.count=null==l?Z.count-Z.displayedToast:Z.count-1,Z.count<0&&(Z.count=0),e>0){var o=null==l?Z.props.limit:1;if(1===e||1===o)Z.displayedToast++,O();else{var a=o>e?e:o;Z.displayedToast=a;for(var r=0;r<a;r++)O()}}else n()}});x.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,a=t.icon,r=null,i={theme:e,type:n};return!1===a||(v(a)?r=a(i):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,i):m(a)||p(a)?r=a:o?r=b.spinner():function(t){return t in b}(n)&&(r=b[n](i))),r}(x),v(u.onOpen)&&(x.onOpen=u.onOpen),v(u.onClose)&&(x.onClose=u.onClose),x.closeButton=_.closeButton,!1===u.closeButton||h(u.closeButton)?x.closeButton=u.closeButton:!0===u.closeButton&&(x.closeButton=!h(_.closeButton)||_.closeButton);var P=t;(0,c.isValidElement)(t)&&!m(t.type)?P=(0,c.cloneElement)(t,{closeToast:N,toastProps:x,data:I}):v(t)&&(P=t({closeToast:N,toastProps:x,data:I})),_.limit&&_.limit>0&&Z.count>_.limit&&k?Z.queue.push({toastContent:P,toastProps:x,staleId:s}):p(o)?setTimeout((function(){R(P,x,s)}),o):R(P,x,s)}}function R(t,e,n){var o=e.toastId;n&&C.delete(n);var a={content:t,props:e};C.set(o,a),d((function(t){return[].concat((0,s.Z)(t),[o]).filter((function(t){return t!==n}))})),E.emit(4,T(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return Z.containerId=t.containerId,E.cancelEmit(3).on(0,N).on(1,(function(t){return y.current&&L(t)})).on(5,_).emit(2,Z),function(){C.clear(),E.emit(3,Z)}}),[]),(0,c.useEffect)((function(){Z.props=t,Z.isToastActive=I,Z.displayedToast=l.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(C.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:y,isToastActive:I}}function Z(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function _(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function L(t){var e=(0,c.useState)(!1),n=(0,a.Z)(e,2),o=n[0],r=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(t),m=t.autoClose,g=t.pauseOnHover,h=t.closeToast,y=t.onClick,T=t.closeOnClick;function E(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",L),document.addEventListener("mouseup",O),document.addEventListener("touchmove",L),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=Z(e.nativeEvent),f.y=_(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function C(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=o&&f.y<=a?I():b()}}function b(){r(!0)}function I(){r(!1)}function L(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&I(),f.x=Z(e),f.y=_(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",L),document.removeEventListener("touchend",O);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,c.useEffect)((function(){p.current=t})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),v(t.onOpen)&&t.onOpen((0,c.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;v(t.onClose)&&t.onClose((0,c.isValidElement)(t.children)&&t.children.props)}}),[]),(0,c.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||I(),window.addEventListener("focus",b),window.addEventListener("blur",I)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",I))}}),[t.pauseOnFocusLoss]);var N={onMouseDown:E,onTouchStart:E,onMouseUp:C,onTouchEnd:C};return m&&g&&(N.onMouseEnter=I,N.onMouseLeave=b),T&&(N.onClick=function(t){y&&y(t),f.canCloseOnClick&&h()}),{playToast:b,pauseToast:I,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:N}}function O(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function N(t){var e=t.delay,n=t.isRunning,a=t.closeToast,i=t.type,s=void 0===i?"default":i,u=t.hide,d=t.className,f=t.style,p=t.controlledProgress,m=t.progress,g=t.rtl,h=t.isIn,y=t.theme,T=u||p&&0===m,E=(0,r.Z)((0,r.Z)({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:T?0:1});p&&(E.transform="scaleX(".concat(m,")"));var C=l("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(s),{"Toastify__progress-bar--rtl":g}),b=v(d)?d({rtl:g,type:s,defaultClassName:C}):l(C,d);return c.createElement("div",(0,o.Z)({role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:b,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){h&&a()}))}var R=function(t){var e=L(t),n=e.isRunning,o=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,s=t.closeButton,u=t.children,d=t.autoClose,f=t.onClick,p=t.type,m=t.hideProgressBar,g=t.closeToast,h=t.transition,y=t.position,T=t.className,E=t.style,C=t.bodyClassName,b=t.bodyStyle,I=t.progressClassName,Z=t.progressStyle,_=t.updateId,R=t.role,k=t.progress,w=t.rtl,M=t.toastId,x=t.deleteToast,P=t.isIn,A=t.isLoading,B=t.iconOut,D=t.closeOnClick,z=t.theme,F=l("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":D}),S=v(T)?T({rtl:w,position:y,type:p,defaultClassName:F}):l(F,T),H=!!k||!d,q={closeToast:g,type:p,theme:z},Q=null;return!1===s||(Q=v(s)?s(q):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,q):O(q)),c.createElement(h,{isIn:P,done:x,position:y,preventExitTransition:o,nodeRef:a},c.createElement("div",(0,r.Z)((0,r.Z)({id:M,onClick:f,className:S},i),{},{style:E,ref:a}),c.createElement("div",(0,r.Z)((0,r.Z)({},P&&{role:R}),{},{className:v(C)?C({type:p}):l("Toastify__toast-body",C),style:b}),null!=B&&c.createElement("div",{className:l("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},B),c.createElement("div",null,u)),Q,c.createElement(N,(0,r.Z)((0,r.Z)({},_&&!H?{key:"pb-".concat(_)}:{}),{},{rtl:w,theme:z,delay:d,isRunning:n,isIn:P,closeToast:g,hide:m,type:p,style:Z,className:I,controlledProgress:H,progress:k||0}))))},k=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},w=y(k("bounce",!0)),M=y(k("slide",!0)),x=(y(k("zoom")),y(k("flip")),(0,c.forwardRef)((function(t,e){var n=I(t),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=t.className,u=t.style,d=t.rtl,f=t.containerId;function p(t){var e=l("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":d});return v(s)?s({position:t,rtl:d,defaultClassName:e}):l(e,g(s))}return(0,c.useEffect)((function(){e&&(e.current=a.current)}),[]),c.createElement("div",{ref:a,className:"Toastify",id:f},o((function(t,e){var n=e.length?(0,r.Z)({},u):(0,r.Z)((0,r.Z)({},u),{},{pointerEvents:"none"});return c.createElement("div",{className:p(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,a=t.props;return c.createElement(R,(0,r.Z)((0,r.Z)({},a),{},{isIn:i(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),o)})))})))})));x.displayName="ToastContainer",x.defaultProps={position:"top-right",transition:w,autoClose:5e3,closeButton:O,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var P,A=new Map,B=[],D=1;function z(){return""+D++}function F(t){return t&&(m(t.toastId)||p(t.toastId))?t.toastId:z()}function S(t,e){return A.size>0?E.emit(0,t,e):B.push({content:t,options:e}),e.toastId}function H(t,e){return(0,r.Z)((0,r.Z)({},e),{},{type:e&&e.type||t,toastId:F(e)})}function q(t){return function(e,n){return S(e,H(t,n))}}function Q(t,e){return S(t,H("default",e))}Q.loading=function(t,e){return S(t,H("default",(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},Q.promise=function(t,e,n){var o,a=e.pending,i=e.error,s=e.success;a&&(o=m(a)?Q.loading(a,n):Q.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(t,e,a){if(null!=e){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:t},c),n),{},{data:a}),s=m(e)?{render:e}:e;return o?Q.update(o,(0,r.Z)((0,r.Z)({},i),s)):Q(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}Q.dismiss(o)},l=v(t)?t():t;return l.then((function(t){return u("success",s,t)})).catch((function(t){return u("error",i,t)})),l},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=function(t,e){return S(t,H("default",(0,r.Z)({theme:"dark"},e)))},Q.dismiss=function(t){A.size>0?E.emit(1,t):B=B.filter((function(e){return null!=t&&e.options.toastId!==t}))},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),E.emit(5,t)},Q.isActive=function(t){var e=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},Q.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=A.get(n||P);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({delay:100},o),e),{},{toastId:e.toastId||t,updateId:z()});i.toastId!==t&&(i.staleId=t);var s=i.render||a;delete i.render,S(s,i)}}),0)},Q.done=function(t){Q.update(t,{progress:1})},Q.onChange=function(t){return E.on(4,t),function(){E.off(4,t)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},E.on(2,(function(t){P=t.containerId||t,A.set(P,t),B.forEach((function(t){E.emit(0,t.content,t.options)})),B=[]})).on(3,(function(t){A.delete(t.containerId||t),0===A.size&&E.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=637.1dc0b56d.chunk.js.map