import{j as o}from"./jsx-runtime-ffb262ed.js";import{c as P}from"./index-e131923d.js";import{r as V}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const L="_radio_18dei_17",l={radio:L,"radio-ui":"_radio-ui_18dei_37"},d=V.forwardRef(function({kind:M="primary",className:T,onMouseDown:t,...q},H){const I=P(l.radio,T);return o.jsxs("div",{className:I,"data-kind":M,children:[o.jsx("input",{ref:H,...q,type:"radio",onMouseDown:n=>{n.preventDefault(),t==null||t(n)}}),o.jsx("div",{className:l["radio-ui"]})]})});try{d.displayName="Radio",d.__docgenInfo={description:"A radio component.",displayName:"Radio",props:{kind:{defaultValue:{value:"primary"},description:"The type of radio.",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"critical"'}]}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onMouseDown:{defaultValue:null,description:"On mouse down callback for the radio.",name:"onMouseDown",required:!1,type:{name:"(((e: MouseEvent<HTMLInputElement, MouseEvent>) => void) & MouseEventHandler<HTMLInputElement>)"}}}}}catch{}const B={title:"Radio",component:d,tags:["autodocs"],args:{checked:!1,disabled:!1,kind:"primary"}},s={},e={...s,args:{checked:!0}},c={...e,args:{...e.args,disabled:!0}},r={args:{kind:"critical"}},a={...r,args:{...r.args,checked:!0}},i={...a,args:{...a.args,disabled:!0}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,k,C;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Primary,
  args: {
    checked: true
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var h,f,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Checked,
  args: {
    ...Checked.args,
    disabled: true
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var _,v,b;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    kind: "critical"
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,E,R;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Critical,
  args: {
    ...Critical.args,
    checked: true
  }
}`,...(R=(E=a.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,N,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...CriticalChecked,
  args: {
    ...CriticalChecked.args,
    disabled: true
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const F=["Primary","Checked","CheckedDisabled","Critical","CriticalChecked","CriticalCheckedDisabled"];export{e as Checked,c as CheckedDisabled,r as Critical,a as CriticalChecked,i as CriticalCheckedDisabled,s as Primary,F as __namedExportsOrder,B as default};
//# sourceMappingURL=Radio.stories-82f0d556.js.map
