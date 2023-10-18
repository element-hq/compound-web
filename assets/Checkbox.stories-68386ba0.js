import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as w}from"./index-e131923d.js";import{r as S}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const L="_checkbox_1q844_17",n={checkbox:L,"checkbox-ui":"_checkbox-ui_1q844_37"},q=o=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"cpd-icon",...o,children:e.jsx("path",{d:"M9.55003 17.575C9.4167 17.575 9.2917 17.5542 9.17503 17.5125C9.05836 17.4709 8.95003 17.4 8.85003 17.3L4.55003 13C4.3667 12.8167 4.2792 12.5792 4.28753 12.2875C4.29586 11.9959 4.3917 11.7584 4.57503 11.575C4.75836 11.3917 4.9917 11.3 5.27503 11.3C5.55836 11.3 5.7917 11.3917 5.97503 11.575L9.55003 15.15L18.025 6.67502C18.2084 6.49169 18.4459 6.40002 18.7375 6.40002C19.0292 6.40002 19.2667 6.49169 19.45 6.67502C19.6334 6.85836 19.725 7.09586 19.725 7.38752C19.725 7.67919 19.6334 7.91669 19.45 8.10002L10.25 17.3C10.15 17.4 10.0417 17.4709 9.92503 17.5125C9.80836 17.5542 9.68336 17.575 9.55003 17.575Z",fill:"currentColor"})}),i=S.forwardRef(function({kind:y="primary",className:v,onMouseDown:t,...N},j){const E=w(n.checkbox,v);return e.jsxs("div",{className:E,"data-kind":y,children:[e.jsx("input",{ref:j,...N,type:"checkbox",onMouseDown:d=>{d.preventDefault(),t==null||t(d)}}),e.jsx("div",{className:n["checkbox-ui"],children:e.jsx(q,{"aria-hidden":!0,className:n["checkbox-check"]})})]})});try{i.displayName="Checkbox",i.__docgenInfo={description:"A checkbox component.",displayName:"Checkbox",props:{kind:{defaultValue:{value:"primary"},description:"The type of checkbox.",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"critical"'}]}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onMouseDown:{defaultValue:null,description:"On mouse down callback for the checkbox.",name:"onMouseDown",required:!1,type:{name:"(((e: MouseEvent<HTMLInputElement, MouseEvent>) => void) & MouseEventHandler<HTMLInputElement>)"}}}}}catch{}const I={title:"Checkbox",component:i,tags:["autodocs"],argTypes:{},args:{}},r={args:{}},a={args:{kind:"critical"}},s={args:{disabled:!0,checked:!1}},c={args:{disabled:!0,checked:!0}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    kind: "critical"
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,b,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: false
  }
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var g,f,_;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const V=["Primary","Critical","Disabled","DisabledChecked"];export{a as Critical,s as Disabled,c as DisabledChecked,r as Primary,V as __namedExportsOrder,I as default};
//# sourceMappingURL=Checkbox.stories-68386ba0.js.map
