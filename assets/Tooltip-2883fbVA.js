import{j as i}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{i as k,u as g,b as O,c as G,o as U,j as Y,s as H,d as J,k as K,m as X,n as $,p as z,e as B,f as L,F as Q,h as Z,a as ee}from"./floating-ui.react-KXiqSXy2.js";import{c as C}from"./index-CSpfAsmC.js";const E=l.createContext(null);function y(){const e=l.useContext(E);if(e==null)throw new Error("Tooltip components must be wrapped in <Tooltip />");return e}const te="_tooltip_1pslb_17",oe="_invisible_1pslb_30",ne="_caption_1pslb_37",ie="_arrow_1pslb_42",c={tooltip:te,invisible:oe,caption:ne,arrow:ie},R={open:300,close:0},v=({children:e})=>i.jsx(k,{delay:R,timeoutMs:300,children:e});v.displayName="TooltipProvider";try{v.displayName="TooltipProvider",v.__docgenInfo={description:`Enables tooltips to share a global "warm-up" period for their hover delay.
You must wrap your application in this component for tooltips to function.`,displayName:"TooltipProvider",props:{}}}catch{}function ae({open:e,disabled:n=!1,onOpenChange:r,placement:t="bottom",isTriggerInteractive:a,caption:o,...u}){const p=g(),w=g(),x=g(),f=l.useRef(null),[V,P]=l.useState(!1),m=n?!1:e??V,b=(I,M,S)=>{r?.(I,M,S),e===void 0&&P(I)},h=O({placement:t,open:m,onOpenChange:b,whileElementsMounted:G,middleware:[U(6),Y({crossAxis:t.includes("-"),fallbackAxisSideDirection:"start",padding:5}),H({padding:5}),J({element:f})]}),s=h.context,{delay:q,initialDelay:F}=K(s);if(F!==R)throw new Error("Tooltips must be wrapped in a global <TooltipProvider>");const N=X(s,{move:!1,enabled:e===void 0,delay:a?q:{}}),W=$(s,{enabled:e===void 0,visibleOnly:!1}),A=z(s),d="label"in u?"label":"description",T=B(s,{enabled:d==="description",role:"tooltip"}),D=l.useMemo(()=>d==="label"?{reference:{"aria-labelledby":p},floating:{id:p}}:{},[d,p]),_=L([N,W,A,T,D]);return l.useMemo(()=>({contentId:p,labelId:w,captionId:o?x:void 0,caption:o,purpose:d,open:m,setOpen:b,..._,...h,arrowRef:f}),[w,x,o,T,m,b,_,h,f])}function j({children:e,isTriggerInteractive:n=!0,nonInteractiveTriggerTabIndex:r=0,...t}){const a=ae({isTriggerInteractive:n,...t});return i.jsxs(E.Provider,{value:a,children:[i.jsx(se,{children:n?e:i.jsx("span",{tabIndex:r,children:e})}),i.jsxs(re,{children:[i.jsx("span",{id:a.labelId,children:"label"in t?t.label:t.description}),i.jsx(le,{})]})]})}function le(){const{caption:e,captionId:n}=y();if(!e)return null;const t=typeof e=="string"?"span":"div";return i.jsx(t,{id:n,className:C(c.caption,"cpd-theme-dark"),children:e})}function re({children:e}){const{context:n,open:r,arrowRef:t,purpose:a,...o}=y();return!r&&a!=="label"?null:i.jsx(Q,{children:i.jsxs("div",{ref:o.refs.setFloating,"aria-labelledby":o.labelId,"aria-describedby":o.captionId||o.labelId,style:o.floatingStyles,...o.getFloatingProps(),className:C(c.tooltip,{[c.invisible]:a==="label"&&!r}),children:[i.jsx(Z,{ref:t,context:n,width:10,height:6,className:c.arrow}),e]})})}function se({children:e}){const n=y(),r=e?.ref,t=ee([n.refs.setReference,r]),a=l.isValidElement(e)&&e.props,o=l.useMemo(()=>{if(!l.isValidElement(e))return;const u=n.getReferenceProps({ref:t,...a});return l.cloneElement(e,u)},[n,t,e,a]);if(!o)throw new Error("Tooltip anchor must be a single valid React element");return o}try{j.displayName="Tooltip",j.__docgenInfo={description:"A tooltip component",displayName:"Tooltip",props:{open:{defaultValue:{value:"undefined"},description:`The controlled open state of the tooltip.
If provided, the tooltip will be in controlled mode.
When true, the tooltip is always open. When false, the tooltip is always hidden.
When undefined, the tooltip will manage its own open state.
You will mostly want to omit this property. Will be used the vast majority
of the time during development.`,name:"open",required:!1,type:{name:"boolean"}},caption:{defaultValue:null,description:`The caption of the tooltip.
JSX.Element can be used to provide accessibility content like kbd element.
Keep in mind, the caption should not be used for interactive content.`,name:"caption",required:!1,type:{name:"string | Element"}},disabled:{defaultValue:null,description:"Whether the tooltip should be forced to be in a closed state.",name:"disabled",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"The event handler for the open change.",name:"onOpenChange",required:!1,type:{name:"((open: boolean, event?: Event, reason?: OpenChangeReason) => void) | undefined"}},placement:{defaultValue:{value:'"bottom"'},description:"The placement of the tooltip.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},label:{defaultValue:null,description:"A label for the target element.",name:"label",required:!0,type:{name:"string"}},isTriggerInteractive:{defaultValue:{value:"true"},description:`Whether the trigger element is interactive.
When trigger is interactive:
     - tooltip will be shown after a 300ms delay.
When trigger is not interactive:
     - tooltip will be shown instantly when pointer enters trigger.
     - trigger will be wrapped in a span with a tab index from prop nonInteractiveTriggerTabIndex`,name:"isTriggerInteractive",required:!1,type:{name:"boolean"}},nonInteractiveTriggerTabIndex:{defaultValue:{value:"0"},description:"The tab index for the non interactive trigger.",name:"nonInteractiveTriggerTabIndex",required:!1,type:{name:"number"}},description:{defaultValue:null,description:"A description for the target element.",name:"description",required:!0,type:{name:"string"}}}}}catch{}export{v as T,j as a};