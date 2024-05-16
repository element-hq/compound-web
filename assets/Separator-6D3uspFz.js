import{j as $}from"./jsx-runtime-DoxjgJx5.js";import{c as v}from"./index-C2KoGaFq.js";import{_ as y}from"./index-icJLasaE.js";import{r as s}from"./index-Cu9bd8lq.js";import{$ as _}from"./index-CZs6vfAl.js";import{u as h}from"./floating-ui.react-C9uQe9t5.js";const p="horizontal",x=["horizontal","vertical"],u=s.forwardRef((e,r)=>{const{decorative:t,orientation:a=p,...o}=e,n=m(a)?a:p,c=t?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return s.createElement(_.div,y({"data-orientation":n},c,o,{ref:r}))});u.propTypes={orientation(e,r,t){const a=e[r],o=String(a);return a&&!m(a)?new Error(N(o,t)):null}};function N(e,r){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${p}\`.`}function m(e){return x.includes(e)}const S=u,g="_separator_144s5_17",O={separator:g},f="--cpd-separator-spacing",l=s.forwardRef(({className:e,spacing:r,kind:t="primary",...a},o)=>{const n=v(O.separator,e),i=s.useRef(null),c=h([i,o]);return s.useEffect(()=>{const d=i.current?.style;r?d?.setProperty(f,r):d?.removeProperty(f)},[r]),$.jsx(S,{...a,className:n,ref:c,"data-kind":t})});l.displayName="Separator";try{l.displayName="Separator",l.__docgenInfo={description:"A separator component.",displayName:"Separator",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},kind:{defaultValue:{value:"primary"},description:"The style of separator.",name:"kind",required:!1,type:{name:"enum",value:[{value:'"section"'},{value:'"primary"'},{value:'"secondary"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},spacing:{defaultValue:{value:"var(--cpd-space-2x)"},description:"The spacing on either side of the separator.",name:"spacing",required:!1,type:{name:"string"}}}}}catch{}export{l as S};
