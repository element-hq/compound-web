import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{c as y}from"./index-DUolvyrz.js";import{r as o}from"./index-7h80QhK_.js";import{P as v}from"./index-Ck84dWZn.js";import{a as N}from"./floating-ui.react-Dw8aoZv5.js";var _="Separator",d="horizontal",S=["horizontal","vertical"],f=o.forwardRef((e,a)=>{const{decorative:s,orientation:t=d,...i}=e,r=h(t)?t:d,p=s?{role:"none"}:{"aria-orientation":r==="vertical"?r:void 0,role:"separator"};return u.jsx(v.div,{"data-orientation":r,...p,...i,ref:a})});f.displayName=_;function h(e){return S.includes(e)}var P=f;const R="_separator_7ckbw_8",O={separator:R},m="--cpd-separator-spacing",l=o.forwardRef(({className:e,spacing:a,kind:s="primary",...t},i)=>{const r=y(O.separator,e),n=o.useRef(null),p=N([n,i]);return o.useEffect(()=>{const c=n.current?.style;a?c?.setProperty(m,a):c?.removeProperty(m)},[a]),u.jsx(P,{...t,className:r,ref:p,"data-kind":s})});l.displayName="Separator";try{l.displayName="Separator",l.__docgenInfo={description:"A separator component.",displayName:"Separator",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},kind:{defaultValue:{value:"primary"},description:"The style of separator.",name:"kind",required:!1,type:{name:"enum",value:[{value:'"section"'},{value:'"primary"'},{value:'"secondary"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},spacing:{defaultValue:{value:"var(--cpd-space-2x)"},description:"The spacing on either side of the separator.",name:"spacing",required:!1,type:{name:"string"}}}}}catch{}export{l as S};
