import{j as y}from"./jsx-runtime-f6d73c06.js";import{_ as x,a as j,c as F}from"./index-fc9b93e8.js";import{r as o}from"./index-8ee6c85d.js";import{$ as K,b as B,a as T}from"./index-79556c5a.js";import{b as S,$ as Y,c as z,d as U,e as V,f as X,g as J,h as Q,i as Z}from"./index-67f1f257.js";import{$ as q}from"./index-6e117a6c.js";import{c as ee}from"./index-e131923d.js";const te=o.forwardRef((e,n)=>o.createElement(q.span,x({},e,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),ne=te,[D,Ve]=K("Tooltip",[S]),O=S(),oe="TooltipProvider",re=700,I="tooltip.open",[ae,k]=D(oe),ce=e=>{const{__scopeTooltip:n,delayDuration:t=re,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:s}=e,[i,u]=o.useState(!0),c=o.useRef(!1),p=o.useRef(0);return o.useEffect(()=>{const l=p.current;return()=>window.clearTimeout(l)},[]),o.createElement(ae,{scope:n,isOpenDelayed:i,delayDuration:t,onOpen:o.useCallback(()=>{window.clearTimeout(p.current),u(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:o.useCallback(l=>{c.current=l},[]),disableHoverableContent:a},s)},L="Tooltip",[se,P]=D(L),ie=e=>{const{__scopeTooltip:n,children:t,open:r,defaultOpen:a=!1,onOpenChange:s,disableHoverableContent:i,delayDuration:u}=e,c=k(L,e.__scopeTooltip),p=O(n),[l,d]=o.useState(null),h=B(),f=o.useRef(0),$=i??c.disableHoverableContent,b=u??c.delayDuration,v=o.useRef(!1),[g=!1,m]=Y({prop:r,defaultProp:a,onChange:M=>{M?(c.onOpen(),document.dispatchEvent(new CustomEvent(I))):c.onClose(),s==null||s(M)}}),w=o.useMemo(()=>g?v.current?"delayed-open":"instant-open":"closed",[g]),E=o.useCallback(()=>{window.clearTimeout(f.current),v.current=!1,m(!0)},[m]),C=o.useCallback(()=>{window.clearTimeout(f.current),m(!1)},[m]),A=o.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{v.current=!0,m(!0)},b)},[b,m]);return o.useEffect(()=>()=>window.clearTimeout(f.current),[]),o.createElement(z,p,o.createElement(se,{scope:n,contentId:h,open:g,stateAttribute:w,trigger:l,onTriggerChange:d,onTriggerEnter:o.useCallback(()=>{c.isOpenDelayed?A():E()},[c.isOpenDelayed,A,E]),onTriggerLeave:o.useCallback(()=>{$?C():window.clearTimeout(f.current)},[C,$]),onOpen:E,onClose:C,disableHoverableContent:$},t))},H="TooltipTrigger",le=o.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,a=P(H,t),s=k(H,t),i=O(t),u=o.useRef(null),c=j(n,u,a.onTriggerChange),p=o.useRef(!1),l=o.useRef(!1),d=o.useCallback(()=>p.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),o.createElement(U,x({asChild:!0},i),o.createElement(q.button,x({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:T(e.onPointerMove,h=>{h.pointerType!=="touch"&&!l.current&&!s.isPointerInTransitRef.current&&(a.onTriggerEnter(),l.current=!0)}),onPointerLeave:T(e.onPointerLeave,()=>{a.onTriggerLeave(),l.current=!1}),onPointerDown:T(e.onPointerDown,()=>{p.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:T(e.onFocus,()=>{p.current||a.onOpen()}),onBlur:T(e.onBlur,a.onClose),onClick:T(e.onClick,a.onClose)})))}),W="TooltipPortal",[ue,pe]=D(W,{forceMount:void 0}),de=e=>{const{__scopeTooltip:n,forceMount:t,children:r,container:a}=e,s=P(W,n);return o.createElement(ue,{scope:n,forceMount:t},o.createElement(V,{present:t||s.open},o.createElement(X,{asChild:!0,container:a},r)))},_="TooltipContent",fe=o.forwardRef((e,n)=>{const t=pe(_,e.__scopeTooltip),{forceMount:r=t.forceMount,side:a="top",...s}=e,i=P(_,e.__scopeTooltip);return o.createElement(V,{present:r||i.open},i.disableHoverableContent?o.createElement(G,x({side:a},s,{ref:n})):o.createElement($e,x({side:a},s,{ref:n})))}),$e=o.forwardRef((e,n)=>{const t=P(_,e.__scopeTooltip),r=k(_,e.__scopeTooltip),a=o.useRef(null),s=j(n,a),[i,u]=o.useState(null),{trigger:c,onClose:p}=t,l=a.current,{onPointerInTransitChange:d}=r,h=o.useCallback(()=>{u(null),d(!1)},[d]),f=o.useCallback(($,b)=>{const v=$.currentTarget,g={x:$.clientX,y:$.clientY},m=ge(g,v.getBoundingClientRect()),w=xe(g,m),E=ye(b.getBoundingClientRect()),C=we([...w,...E]);u(C),d(!0)},[d]);return o.useEffect(()=>()=>h(),[h]),o.useEffect(()=>{if(c&&l){const $=v=>f(v,l),b=v=>f(v,c);return c.addEventListener("pointerleave",$),l.addEventListener("pointerleave",b),()=>{c.removeEventListener("pointerleave",$),l.removeEventListener("pointerleave",b)}}},[c,l,f,h]),o.useEffect(()=>{if(i){const $=b=>{const v=b.target,g={x:b.clientX,y:b.clientY},m=(c==null?void 0:c.contains(v))||(l==null?void 0:l.contains(v)),w=!Te(g,i);m?h():w&&(h(),p())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[c,l,i,p,h]),o.createElement(G,x({},e,{ref:s}))}),[he,ve]=D(L,{isInside:!1}),G=o.forwardRef((e,n)=>{const{__scopeTooltip:t,children:r,"aria-label":a,onEscapeKeyDown:s,onPointerDownOutside:i,...u}=e,c=P(_,t),p=O(t),{onClose:l}=c;return o.useEffect(()=>(document.addEventListener(I,l),()=>document.removeEventListener(I,l)),[l]),o.useEffect(()=>{if(c.trigger){const d=h=>{const f=h.target;f!=null&&f.contains(c.trigger)&&l()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[c.trigger,l]),o.createElement(J,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:d=>d.preventDefault(),onDismiss:l},o.createElement(Q,x({"data-state":c.stateAttribute},p,u,{ref:n,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(F,null,r),o.createElement(he,{scope:t,isInside:!0},o.createElement(ne,{id:c.contentId,role:"tooltip"},a||r))))}),be="TooltipArrow",me=o.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,a=O(t);return ve(be,t).isInside?null:o.createElement(Z,x({},a,r,{ref:n}))});function ge(e,n){const t=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),a=Math.abs(n.right-e.x),s=Math.abs(n.left-e.x);switch(Math.min(t,r,a,s)){case s:return"left";case a:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function xe(e,n,t=5){const r=[];switch(n){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function ye(e){const{top:n,right:t,bottom:r,left:a}=e;return[{x:a,y:n},{x:t,y:n},{x:t,y:r},{x:a,y:r}]}function Te(e,n){const{x:t,y:r}=e;let a=!1;for(let s=0,i=n.length-1;s<n.length;i=s++){const u=n[s].x,c=n[s].y,p=n[i].x,l=n[i].y;c>r!=l>r&&t<(p-u)*(r-c)/(l-c)+u&&(a=!a)}return a}function we(e){const n=e.slice();return n.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),Ee(n)}function Ee(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const a=e[r];for(;n.length>=2;){const s=n[n.length-1],i=n[n.length-2];if((s.x-i.x)*(a.y-i.y)>=(s.y-i.y)*(a.x-i.x))n.pop();else break}n.push(a)}n.pop();const t=[];for(let r=e.length-1;r>=0;r--){const a=e[r];for(;t.length>=2;){const s=t[t.length-1],i=t[t.length-2];if((s.x-i.x)*(a.y-i.y)>=(s.y-i.y)*(a.x-i.x))t.pop();else break}t.push(a)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}const qe=ce,Ce=ie,_e=le,Pe=de,De=fe,Oe=me,Re="_tooltip_svz44_17",Ie="_caption_svz44_29",ke="_arrow_svz44_34",R={tooltip:Re,caption:Ie,arrow:ke},N=({children:e,label:n,caption:t,side:r="bottom",align:a="center",onEscapeKeyDown:s,onPointerDownOutside:i,isTriggerInteractive:u=!0,nonInteractiveTriggerTabIndex:c=0,open:p})=>y.jsxs(Ce,{open:p,delayDuration:u?300:0,children:[y.jsx(_e,{asChild:!0,children:u?e:y.jsx("span",{tabIndex:c,children:e})}),y.jsx(Pe,{children:y.jsxs(De,{side:r,align:a,onEscapeKeyDown:s,onPointerDownOutside:i,className:R.tooltip,children:[n,t&&y.jsx("span",{className:ee(R.caption,"cpd-theme-dark"),children:t}),y.jsx(Oe,{width:10,height:6,className:R.arrow})]})})]});try{N.displayName="Tooltip",N.__docgenInfo={description:"A tooltip component",displayName:"Tooltip",props:{label:{defaultValue:null,description:"The tooltip label",name:"label",required:!0,type:{name:"string"}},caption:{defaultValue:null,description:"The tooltip caption",name:"caption",required:!1,type:{name:"string"}},side:{defaultValue:{value:"bottom"},description:"The side where the tooltip is rendered",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},align:{defaultValue:{value:"center"},description:`The preferred alignment against the trigger.
May change when collisions occur.`,name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},onEscapeKeyDown:{defaultValue:null,description:"Event handler called when the escape key is down.",name:"onEscapeKeyDown",required:!1,type:{name:"((event: KeyboardEvent) => void)"}},onPointerDownOutside:{defaultValue:null,description:`Event handler called when a pointer event occurs outside
the bounds of the component.`,name:"onPointerDownOutside",required:!1,type:{name:"((event: PointerDownOutsideEvent) => void)"}},open:{defaultValue:{value:"undefined"},description:`The controlled open state of the tooltip.
When true, the tooltip is always open. When false, the tooltip is always hidden.
When undefined, the tooltip will manage its own open state.
You will mostly want to omit this property. Will be used the vast majority
of the time during development.`,name:"open",required:!1,type:{name:"boolean"}},isTriggerInteractive:{defaultValue:{value:"true"},description:`Whether the trigger element is interactive.
When trigger is interactive:
     - tooltip will be shown after a 300ms delay.
When trigger is not interactive:
     - tooltip will be shown instantly when pointer enters trigger.
     - trigger will be wrapped in a span with a tab index from prop nonInteractiveTriggerTabIndex`,name:"isTriggerInteractive",required:!1,type:{name:"boolean"}},nonInteractiveTriggerTabIndex:{defaultValue:{value:"0"},description:"Tab index to apply to the span wrapping non interactive tooltip triggers.\nOnly used when `isTriggerInteractive` is false.",name:"nonInteractiveTriggerTabIndex",required:!1,type:{name:"number"}}}}}catch{}export{qe as $,N as T};
//# sourceMappingURL=Tooltip-7b34be2e.js.map
