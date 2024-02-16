import{a as ve,_ as G}from"./index-fc9b93e8.js";import{r as m}from"./index-8ee6c85d.js";import{a as be,c as ne,$ as bt}from"./index-79556c5a.js";import{$ as re,a as $t}from"./index-6e117a6c.js";import{r as Xe,R as Et}from"./index-8bf7f4ad.js";function J(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function At(e,t=globalThis==null?void 0:globalThis.document){const n=J(e);m.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const $e="dismissableLayer.update",Pt="dismissableLayer.pointerDownOutside",Ot="dismissableLayer.focusOutside";let Me;const Ct=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Wn=m.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:a,onDismiss:c,...l}=e,u=m.useContext(Ct),[d,h]=m.useState(null),f=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,p]=m.useState({}),w=ve(t,E=>h(E)),v=Array.from(u.layers),[g]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(g),y=d?v.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,$=y>=b,A=Rt(E=>{const R=E.target,N=[...u.branches].some(D=>D.contains(R));!$||N||(r==null||r(E),a==null||a(E),E.defaultPrevented||c==null||c())},f),C=St(E=>{const R=E.target;[...u.branches].some(D=>D.contains(R))||(s==null||s(E),a==null||a(E),E.defaultPrevented||c==null||c())},f);return At(E=>{y===u.layers.size-1&&(i==null||i(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},f),m.useEffect(()=>{if(d)return o&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Me=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ke(),()=>{o&&u.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=Me)}},[d,f,o,u]),m.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ke())},[d,u]),m.useEffect(()=>{const E=()=>p({});return document.addEventListener($e,E),()=>document.removeEventListener($e,E)},[]),m.createElement(re.div,G({},l,{ref:w,style:{pointerEvents:x?$?"auto":"none":void 0,...e.style},onFocusCapture:be(e.onFocusCapture,C.onFocusCapture),onBlurCapture:be(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:be(e.onPointerDownCapture,A.onPointerDownCapture)}))});function Rt(e,t=globalThis==null?void 0:globalThis.document){const n=J(e),o=m.useRef(!1),i=m.useRef(()=>{});return m.useEffect(()=>{const r=a=>{if(a.target&&!o.current){let l=function(){je(Pt,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",r)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",r),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function St(e,t=globalThis==null?void 0:globalThis.document){const n=J(e),o=m.useRef(!1);return m.useEffect(()=>{const i=r=>{r.target&&!o.current&&je(Ot,n,{originalEvent:r},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function ke(){const e=new CustomEvent($e);document.dispatchEvent(e)}function je(e,t,n,{discrete:o}){const i=n.originalEvent.target,r=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?$t(i,r):i.dispatchEvent(r)}const Dt=["top","right","bottom","left"],V=Math.min,_=Math.max,pe=Math.round,de=Math.floor,Y=e=>({x:e,y:e}),Tt={left:"right",right:"left",bottom:"top",top:"bottom"},Lt={start:"end",end:"start"};function Ee(e,t,n){return _(e,V(t,n))}function H(e,t){return typeof e=="function"?e(t):e}function I(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function Pe(e){return e==="x"?"y":"x"}function Oe(e){return e==="y"?"height":"width"}function ee(e){return["top","bottom"].includes(I(e))?"y":"x"}function Ce(e){return Pe(ee(e))}function Nt(e,t,n){n===void 0&&(n=!1);const o=Q(e),i=Ce(e),r=Oe(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=he(s)),[s,he(s)]}function _t(e){const t=he(e);return[Ae(e),t,Ae(t)]}function Ae(e){return e.replace(/start|end/g,t=>Lt[t])}function Mt(e,t,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?r:s;default:return[]}}function kt(e,t,n,o){const i=Q(e);let r=Mt(I(e),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),t&&(r=r.concat(r.map(Ae)))),r}function he(e){return e.replace(/left|right|bottom|top/g,t=>Tt[t])}function Ft(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ke(e){return typeof e!="number"?Ft(e):{top:e,right:e,bottom:e,left:e}}function ge(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Fe(e,t,n){let{reference:o,floating:i}=e;const r=ee(t),s=Ce(t),a=Oe(s),c=I(t),l=r==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,h=o[a]/2-i[a]/2;let f;switch(c){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(Q(t)){case"start":f[s]-=h*(n&&l?-1:1);break;case"end":f[s]+=h*(n&&l?-1:1);break}return f}const Wt=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Fe(l,o,c),h=o,f={},p=0;for(let w=0;w<a.length;w++){const{name:v,fn:g}=a[w],{x:b,y,data:x,reset:$}=await g({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:l,platform:s,elements:{reference:e,floating:t}});if(u=b??u,d=y??d,f={...f,[v]:{...f[v],...x}},$&&p<=50){p++,typeof $=="object"&&($.placement&&(h=$.placement),$.rects&&(l=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):$.rects),{x:u,y:d}=Fe(l,h,c)),w=-1;continue}}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}};async function oe(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:s,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=H(t,e),p=Ke(f),v=a[h?d==="floating"?"reference":"floating":d],g=ge(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(v)))==null||n?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),b=d==="floating"?{...s.floating,x:o,y:i}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),x=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},$=ge(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:y,strategy:c}):b);return{top:(g.top-$.top+p.top)/x.y,bottom:($.bottom-g.bottom+p.bottom)/x.y,left:(g.left-$.left+p.left)/x.x,right:($.right-g.right+p.right)/x.x}}const We=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:r,platform:s,elements:a,middlewareData:c}=t,{element:l,padding:u=0}=H(e,t)||{};if(l==null)return{};const d=Ke(u),h={x:n,y:o},f=Ce(i),p=Oe(f),w=await s.getDimensions(l),v=f==="y",g=v?"top":"left",b=v?"bottom":"right",y=v?"clientHeight":"clientWidth",x=r.reference[p]+r.reference[f]-h[f]-r.floating[p],$=h[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let C=A?A[y]:0;(!C||!await(s.isElement==null?void 0:s.isElement(A)))&&(C=a.floating[y]||r.floating[p]);const E=x/2-$/2,R=C/2-w[p]/2-1,N=V(d[g],R),D=V(d[b],R),S=N,F=C-w[p]-D,O=C/2-w[p]/2+E,L=Ee(S,O,F),P=!c.arrow&&Q(i)!=null&&O!=L&&r.reference[p]/2-(O<S?N:D)-w[p]/2<0,T=P?O<S?O-S:O-F:0;return{[f]:h[f]+T,data:{[f]:L,centerOffset:O-L-T,...P&&{alignmentOffset:T}},reset:P}}}),Bt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:w=!0,...v}=H(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=I(i),b=I(a)===a,y=await(c.isRTL==null?void 0:c.isRTL(l.floating)),x=h||(b||!w?[he(a)]:_t(a));!h&&p!=="none"&&x.push(...kt(a,w,p,y));const $=[a,...x],A=await oe(t,v),C=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&C.push(A[g]),d){const S=Nt(i,s,y);C.push(A[S[0]],A[S[1]])}if(E=[...E,{placement:i,overflows:C}],!C.every(S=>S<=0)){var R,N;const S=(((R=r.flip)==null?void 0:R.index)||0)+1,F=$[S];if(F)return{data:{index:S,overflows:E},reset:{placement:F}};let O=(N=E.filter(L=>L.overflows[0]<=0).sort((L,P)=>L.overflows[1]-P.overflows[1])[0])==null?void 0:N.placement;if(!O)switch(f){case"bestFit":{var D;const L=(D=E.map(P=>[P.placement,P.overflows.filter(T=>T>0).reduce((T,W)=>T+W,0)]).sort((P,T)=>P[1]-T[1])[0])==null?void 0:D[0];L&&(O=L);break}case"initialPlacement":O=a;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Be(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function He(e){return Dt.some(t=>e[t]>=0)}const Ht=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...i}=H(e,t);switch(o){case"referenceHidden":{const r=await oe(t,{...i,elementContext:"reference"}),s=Be(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:He(s)}}}case"escaped":{const r=await oe(t,{...i,altBoundary:!0}),s=Be(r,n.floating);return{data:{escapedOffsets:s,escaped:He(s)}}}default:return{}}}}};async function It(e,t){const{placement:n,platform:o,elements:i}=e,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=I(n),a=Q(n),c=ee(n)==="y",l=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,d=H(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof p=="number"&&(f=a==="end"?p*-1:p),c?{x:f*u,y:h*l}:{x:h*l,y:f*u}}const zt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,i=await It(t,e);return{x:n+i.x,y:o+i.y,data:i}}}},Ut=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:v=>{let{x:g,y:b}=v;return{x:g,y:b}}},...c}=H(e,t),l={x:n,y:o},u=await oe(t,c),d=ee(I(i)),h=Pe(d);let f=l[h],p=l[d];if(r){const v=h==="y"?"top":"left",g=h==="y"?"bottom":"right",b=f+u[v],y=f-u[g];f=Ee(b,f,y)}if(s){const v=d==="y"?"top":"left",g=d==="y"?"bottom":"right",b=p+u[v],y=p-u[g];p=Ee(b,p,y)}const w=a.fn({...t,[h]:f,[d]:p});return{...w,data:{x:w.x-n,y:w.y-o}}}}},Vt=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=t,{offset:a=0,mainAxis:c=!0,crossAxis:l=!0}=H(e,t),u={x:n,y:o},d=ee(i),h=Pe(d);let f=u[h],p=u[d];const w=H(a,t),v=typeof w=="number"?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(c){const y=h==="y"?"height":"width",x=r.reference[h]-r.floating[y]+v.mainAxis,$=r.reference[h]+r.reference[y]-v.mainAxis;f<x?f=x:f>$&&(f=$)}if(l){var g,b;const y=h==="y"?"width":"height",x=["top","left"].includes(I(i)),$=r.reference[d]-r.floating[y]+(x&&((g=s.offset)==null?void 0:g[d])||0)+(x?0:v.crossAxis),A=r.reference[d]+r.reference[y]+(x?0:((b=s.offset)==null?void 0:b[d])||0)-(x?v.crossAxis:0);p<$?p=$:p>A&&(p=A)}return{[h]:f,[d]:p}}}},Yt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:i,elements:r}=t,{apply:s=()=>{},...a}=H(e,t),c=await oe(t,a),l=I(n),u=Q(n),d=ee(n)==="y",{width:h,height:f}=o.floating;let p,w;l==="top"||l==="bottom"?(p=l,w=u===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(w=l,p=u==="end"?"top":"bottom");const v=f-c[p],g=h-c[w],b=!t.middlewareData.shift;let y=v,x=g;if(d){const A=h-c.left-c.right;x=u||b?V(g,A):A}else{const A=f-c.top-c.bottom;y=u||b?V(v,A):A}if(b&&!u){const A=_(c.left,0),C=_(c.right,0),E=_(c.top,0),R=_(c.bottom,0);d?x=h-2*(A!==0||C!==0?A+C:_(c.left,c.right)):y=f-2*(E!==0||R!==0?E+R:_(c.top,c.bottom))}await s({...t,availableWidth:x,availableHeight:y});const $=await i.getDimensions(r.floating);return h!==$.width||f!==$.height?{reset:{rects:!0}}:{}}}};function X(e){return qe(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function U(e){var t;return(t=(qe(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qe(e){return e instanceof Node||e instanceof M(e).Node}function z(e){return e instanceof Element||e instanceof M(e).Element}function B(e){return e instanceof HTMLElement||e instanceof M(e).HTMLElement}function Ie(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}function se(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=k(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function Xt(e){return["table","td","th"].includes(X(e))}function Re(e){const t=Se(),n=k(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function jt(e){let t=Z(e);for(;B(t)&&!ye(t);){if(Re(t))return t;t=Z(t)}return null}function Se(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ye(e){return["html","body","#document"].includes(X(e))}function k(e){return M(e).getComputedStyle(e)}function xe(e){return z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Z(e){if(X(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ie(e)&&e.host||U(e);return Ie(t)?t.host:t}function Ze(e){const t=Z(e);return ye(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&se(t)?t:Ze(t)}function ie(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ze(e),r=i===((o=e.ownerDocument)==null?void 0:o.body),s=M(i);return r?t.concat(s,s.visualViewport||[],se(i)?i:[],s.frameElement&&n?ie(s.frameElement):[]):t.concat(i,ie(i,[],n))}function Ge(e){const t=k(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=B(e),r=i?e.offsetWidth:n,s=i?e.offsetHeight:o,a=pe(n)!==r||pe(o)!==s;return a&&(n=r,o=s),{width:n,height:o,$:a}}function De(e){return z(e)?e:e.contextElement}function q(e){const t=De(e);if(!B(t))return Y(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:r}=Ge(t);let s=(r?pe(n.width):n.width)/o,a=(r?pe(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Kt=Y(0);function Je(e){const t=M(e);return!Se()||!t.visualViewport?Kt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==M(e)?!1:t}function j(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),r=De(e);let s=Y(1);t&&(o?z(o)&&(s=q(o)):s=q(e));const a=qt(r,n,o)?Je(r):Y(0);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(r){const h=M(r),f=o&&z(o)?M(o):o;let p=h.frameElement;for(;p&&o&&f!==h;){const w=q(p),v=p.getBoundingClientRect(),g=k(p),b=v.left+(p.clientLeft+parseFloat(g.paddingLeft))*w.x,y=v.top+(p.clientTop+parseFloat(g.paddingTop))*w.y;c*=w.x,l*=w.y,u*=w.x,d*=w.y,c+=b,l+=y,p=M(p).frameElement}}return ge({width:u,height:d,x:c,y:l})}function Zt(e){let{rect:t,offsetParent:n,strategy:o}=e;const i=B(n),r=U(n);if(n===r)return t;let s={scrollLeft:0,scrollTop:0},a=Y(1);const c=Y(0);if((i||!i&&o!=="fixed")&&((X(n)!=="body"||se(r))&&(s=xe(n)),B(n))){const l=j(n);a=q(n),c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+c.x,y:t.y*a.y-s.scrollTop*a.y+c.y}}function Gt(e){return Array.from(e.getClientRects())}function Qe(e){return j(U(e)).left+xe(e).scrollLeft}function Jt(e){const t=U(e),n=xe(e),o=e.ownerDocument.body,i=_(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=_(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qe(e);const a=-n.scrollTop;return k(o).direction==="rtl"&&(s+=_(t.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:a}}function Qt(e,t){const n=M(e),o=U(e),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;const l=Se();(!l||l&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a,y:c}}function en(e,t){const n=j(e,!0,t==="fixed"),o=n.top+e.clientTop,i=n.left+e.clientLeft,r=B(e)?q(e):Y(1),s=e.clientWidth*r.x,a=e.clientHeight*r.y,c=i*r.x,l=o*r.y;return{width:s,height:a,x:c,y:l}}function ze(e,t,n){let o;if(t==="viewport")o=Qt(e,n);else if(t==="document")o=Jt(U(e));else if(z(t))o=en(t,n);else{const i=Je(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return ge(o)}function et(e,t){const n=Z(e);return n===t||!z(n)||ye(n)?!1:k(n).position==="fixed"||et(n,t)}function tn(e,t){const n=t.get(e);if(n)return n;let o=ie(e,[],!1).filter(a=>z(a)&&X(a)!=="body"),i=null;const r=k(e).position==="fixed";let s=r?Z(e):e;for(;z(s)&&!ye(s);){const a=k(s),c=Re(s);!c&&a.position==="fixed"&&(i=null),(r?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||se(s)&&!c&&et(e,s))?o=o.filter(u=>u!==s):i=a,s=Z(s)}return t.set(e,o),o}function nn(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const s=[...n==="clippingAncestors"?tn(t,this._c):[].concat(n),o],a=s[0],c=s.reduce((l,u)=>{const d=ze(t,u,i);return l.top=_(d.top,l.top),l.right=V(d.right,l.right),l.bottom=V(d.bottom,l.bottom),l.left=_(d.left,l.left),l},ze(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function on(e){return Ge(e)}function rn(e,t,n){const o=B(t),i=U(t),r=n==="fixed",s=j(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const c=Y(0);if(o||!o&&!r)if((X(t)!=="body"||se(i))&&(a=xe(t)),o){const l=j(t,!0,r,t);c.x=l.x+t.clientLeft,c.y=l.y+t.clientTop}else i&&(c.x=Qe(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Ue(e,t){return!B(e)||k(e).position==="fixed"?null:t?t(e):e.offsetParent}function tt(e,t){const n=M(e);if(!B(e))return n;let o=Ue(e,t);for(;o&&Xt(o)&&k(o).position==="static";)o=Ue(o,t);return o&&(X(o)==="html"||X(o)==="body"&&k(o).position==="static"&&!Re(o))?n:o||jt(e)||n}const sn=async function(e){let{reference:t,floating:n,strategy:o}=e;const i=this.getOffsetParent||tt,r=this.getDimensions;return{reference:rn(t,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function cn(e){return k(e).direction==="rtl"}const an={convertOffsetParentRelativeRectToViewportRelativeRect:Zt,getDocumentElement:U,getClippingRect:nn,getOffsetParent:tt,getElementRects:sn,getClientRects:Gt,getDimensions:on,getScale:q,isElement:z,isRTL:cn};function ln(e,t){let n=null,o;const i=U(e);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),r();const{left:l,top:u,width:d,height:h}=e.getBoundingClientRect();if(a||t(),!d||!h)return;const f=de(u),p=de(i.clientWidth-(l+d)),w=de(i.clientHeight-(u+h)),v=de(l),b={rootMargin:-f+"px "+-p+"px "+-w+"px "+-v+"px",threshold:_(0,V(1,c))||1};let y=!0;function x($){const A=$[0].intersectionRatio;if(A!==c){if(!y)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(x,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(x,b)}n.observe(e)}return s(!0),r}function fn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,l=De(e),u=i||r?[...l?ie(l):[],...ie(t)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const d=l&&a?ln(l,n):null;let h=-1,f=null;s&&(f=new ResizeObserver(g=>{let[b]=g;b&&b.target===l&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{f&&f.observe(t)})),n()}),l&&!c&&f.observe(l),f.observe(t));let p,w=c?j(e):null;c&&v();function v(){const g=j(e);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&n(),w=g,p=requestAnimationFrame(v)}return n(),()=>{u.forEach(g=>{i&&g.removeEventListener("scroll",n),r&&g.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const dn=(e,t,n)=>{const o=new Map,i={platform:an,...n},r={...i.platform,_c:o};return Wt(e,t,{...i,platform:r})},un=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:i}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?We({element:o.current,padding:i}).fn(n):{}:o?We({element:o,padding:i}).fn(n):{}}}};var me=typeof document<"u"?m.useLayoutEffect:m.useEffect;function we(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!we(e[o],t[o]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&e.$$typeof)&&!we(e[r],t[r]))return!1}return!0}return e!==e&&t!==t}function nt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ve(e,t){const n=nt(e);return Math.round(t*n)/n}function Ye(e){const t=m.useRef(e);return me(()=>{t.current=e}),t}function mn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:a=!0,whileElementsMounted:c,open:l}=e,[u,d]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=m.useState(o);we(h,o)||f(o);const[p,w]=m.useState(null),[v,g]=m.useState(null),b=m.useCallback(P=>{P!=A.current&&(A.current=P,w(P))},[w]),y=m.useCallback(P=>{P!==C.current&&(C.current=P,g(P))},[g]),x=r||p,$=s||v,A=m.useRef(null),C=m.useRef(null),E=m.useRef(u),R=Ye(c),N=Ye(i),D=m.useCallback(()=>{if(!A.current||!C.current)return;const P={placement:t,strategy:n,middleware:h};N.current&&(P.platform=N.current),dn(A.current,C.current,P).then(T=>{const W={...T,isPositioned:!0};S.current&&!we(E.current,W)&&(E.current=W,Xe.flushSync(()=>{d(W)}))})},[h,t,n,N]);me(()=>{l===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[l]);const S=m.useRef(!1);me(()=>(S.current=!0,()=>{S.current=!1}),[]),me(()=>{if(x&&(A.current=x),$&&(C.current=$),x&&$){if(R.current)return R.current(x,$,D);D()}},[x,$,D,R]);const F=m.useMemo(()=>({reference:A,floating:C,setReference:b,setFloating:y}),[b,y]),O=m.useMemo(()=>({reference:x,floating:$}),[x,$]),L=m.useMemo(()=>{const P={position:n,left:0,top:0};if(!O.floating)return P;const T=Ve(O.floating,u.x),W=Ve(O.floating,u.y);return a?{...P,transform:"translate("+T+"px, "+W+"px)",...nt(O.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:W}},[n,a,O.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:D,refs:F,elements:O,floatingStyles:L}),[u,D,F,O,L])}const pn=m.forwardRef((e,t)=>{const{children:n,width:o=10,height:i=5,...r}=e;return m.createElement(re.svg,G({},r,{ref:t,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:m.createElement("polygon",{points:"0,0 30,0 15,10"}))}),hn=pn;function gn(e){const[t,n]=m.useState(void 0);return ne(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const r=i[0];let s,a;if("borderBoxSize"in r){const c=r.borderBoxSize,l=Array.isArray(c)?c[0]:c;s=l.inlineSize,a=l.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const ot="Popper",[it,Bn]=bt(ot),[wn,rt]=it(ot),vn=e=>{const{__scopePopper:t,children:n}=e,[o,i]=m.useState(null);return m.createElement(wn,{scope:t,anchor:o,onAnchorChange:i},n)},yn="PopperAnchor",xn=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...i}=e,r=rt(yn,n),s=m.useRef(null),a=ve(t,s);return m.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:m.createElement(re.div,G({},i,{ref:a}))}),st="PopperContent",[bn,$n]=it(st),En=m.forwardRef((e,t)=>{var n,o,i,r,s,a,c,l;const{__scopePopper:u,side:d="bottom",sideOffset:h=0,align:f="center",alignOffset:p=0,arrowPadding:w=0,avoidCollisions:v=!0,collisionBoundary:g=[],collisionPadding:b=0,sticky:y="partial",hideWhenDetached:x=!1,updatePositionStrategy:$="optimized",onPlaced:A,...C}=e,E=rt(st,u),[R,N]=m.useState(null),D=ve(t,te=>N(te)),[S,F]=m.useState(null),O=gn(S),L=(n=O==null?void 0:O.width)!==null&&n!==void 0?n:0,P=(o=O==null?void 0:O.height)!==null&&o!==void 0?o:0,T=d+(f!=="center"?"-"+f:""),W=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},Te=Array.isArray(g)?g:[g],at=Te.length>0,ce={padding:W,boundary:Te.filter(Cn),altBoundary:at},{refs:lt,floatingStyles:Le,placement:ft,isPositioned:ae,middlewareData:K}=mn({strategy:"fixed",placement:T,whileElementsMounted:(...te)=>fn(...te,{animationFrame:$==="always"}),elements:{reference:E.anchor},middleware:[zt({mainAxis:h+P,alignmentAxis:p}),v&&Ut({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?Vt():void 0,...ce}),v&&Bt({...ce}),Yt({...ce,apply:({elements:te,rects:_e,availableWidth:wt,availableHeight:vt})=>{const{width:yt,height:xt}=_e.reference,fe=te.floating.style;fe.setProperty("--radix-popper-available-width",`${wt}px`),fe.setProperty("--radix-popper-available-height",`${vt}px`),fe.setProperty("--radix-popper-anchor-width",`${yt}px`),fe.setProperty("--radix-popper-anchor-height",`${xt}px`)}}),S&&un({element:S,padding:w}),Rn({arrowWidth:L,arrowHeight:P}),x&&Ht({strategy:"referenceHidden",...ce})]}),[Ne,dt]=ct(ft),le=J(A);ne(()=>{ae&&(le==null||le())},[ae,le]);const ut=(i=K.arrow)===null||i===void 0?void 0:i.x,mt=(r=K.arrow)===null||r===void 0?void 0:r.y,pt=((s=K.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ht,gt]=m.useState();return ne(()=>{R&&gt(window.getComputedStyle(R).zIndex)},[R]),m.createElement("div",{ref:lt.setFloating,"data-radix-popper-content-wrapper":"",style:{...Le,transform:ae?Le.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ht,"--radix-popper-transform-origin":[(a=K.transformOrigin)===null||a===void 0?void 0:a.x,(c=K.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},m.createElement(bn,{scope:u,placedSide:Ne,onArrowChange:F,arrowX:ut,arrowY:mt,shouldHideArrow:pt},m.createElement(re.div,G({"data-side":Ne,"data-align":dt},C,{ref:D,style:{...C.style,animation:ae?void 0:"none",opacity:(l=K.hide)!==null&&l!==void 0&&l.referenceHidden?0:void 0}}))))}),An="PopperArrow",Pn={top:"bottom",right:"left",bottom:"top",left:"right"},On=m.forwardRef(function(t,n){const{__scopePopper:o,...i}=t,r=$n(An,o),s=Pn[r.placedSide];return m.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},m.createElement(hn,G({},i,{ref:n,style:{...i.style,display:"block"}})))});function Cn(e){return e!==null}const Rn=e=>({name:"transformOrigin",options:e,fn(t){var n,o,i,r,s;const{placement:a,rects:c,middlewareData:l}=t,d=((n=l.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=d?0:e.arrowWidth,f=d?0:e.arrowHeight,[p,w]=ct(a),v={start:"0%",center:"50%",end:"100%"}[w],g=((o=(i=l.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+h/2,b=((r=(s=l.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+f/2;let y="",x="";return p==="bottom"?(y=d?v:`${g}px`,x=`${-f}px`):p==="top"?(y=d?v:`${g}px`,x=`${c.floating.height+f}px`):p==="right"?(y=`${-f}px`,x=d?v:`${b}px`):p==="left"&&(y=`${c.floating.width+f}px`,x=d?v:`${b}px`),{data:{x:y,y:x}}}});function ct(e){const[t,n="center"]=e.split("-");return[t,n]}const Hn=vn,In=xn,zn=En,Un=On,Vn=m.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...i}=e;return o?Et.createPortal(m.createElement(re.div,G({},i,{ref:t})),o):null});function Sn(e,t){return m.useReducer((n,o)=>{const i=t[n][o];return i??n},e)}const Dn=e=>{const{present:t,children:n}=e,o=Tn(t),i=typeof n=="function"?n({present:o.isPresent}):m.Children.only(n),r=ve(o.ref,i.ref);return typeof n=="function"||o.isPresent?m.cloneElement(i,{ref:r}):null};Dn.displayName="Presence";function Tn(e){const[t,n]=m.useState(),o=m.useRef({}),i=m.useRef(e),r=m.useRef("none"),s=e?"mounted":"unmounted",[a,c]=Sn(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const l=ue(o.current);r.current=a==="mounted"?l:"none"},[a]),ne(()=>{const l=o.current,u=i.current;if(u!==e){const h=r.current,f=ue(l);e?c("MOUNT"):f==="none"||(l==null?void 0:l.display)==="none"?c("UNMOUNT"):c(u&&h!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),ne(()=>{if(t){const l=d=>{const f=ue(o.current).includes(d.animationName);d.target===t&&f&&Xe.flushSync(()=>c("ANIMATION_END"))},u=d=>{d.target===t&&(r.current=ue(o.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",l),t.addEventListener("animationend",l),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",l),t.removeEventListener("animationend",l)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:m.useCallback(l=>{l&&(o.current=getComputedStyle(l)),n(l)},[])}}function ue(e){return(e==null?void 0:e.animationName)||"none"}function Yn({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,i]=Ln({defaultProp:t,onChange:n}),r=e!==void 0,s=r?e:o,a=J(n),c=m.useCallback(l=>{if(r){const d=typeof l=="function"?l(e):l;d!==e&&a(d)}else i(l)},[r,e,i,a]);return[s,c]}function Ln({defaultProp:e,onChange:t}){const n=m.useState(e),[o]=n,i=m.useRef(o),r=J(t);return m.useEffect(()=>{i.current!==o&&(r(o),i.current=o)},[o,i,r]),n}export{Yn as $,J as a,Bn as b,Hn as c,In as d,Dn as e,Vn as f,Wn as g,zn as h,Un as i};
//# sourceMappingURL=index-67f1f257.js.map