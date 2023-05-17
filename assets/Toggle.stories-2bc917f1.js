import{j as e}from"./jsx-runtime-94f6e698.js";import{c as x}from"./index-582f377c.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const h="_toggle_fyxu5_17",c={toggle:h,"toggle-ui":"_toggle-ui_fyxu5_41"},r=({className:s,onMouseDown:a,..._})=>{const f=x(c.toggle,s);return e.jsxs("div",{className:f,children:[e.jsx("input",{..._,type:"checkbox",onMouseDown:n=>{n.preventDefault(),a==null||a(n)}}),e.jsx("div",{className:c["toggle-ui"]})]})};try{r.displayName="Toggle",r.__docgenInfo={description:`Standalone toggle component to be used with a Radix form control
See https://www.radix-ui.com/docs/primitives/components/form#composing-with-your-own-components`,displayName:"Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"(((e: MouseEvent<HTMLInputElement, MouseEvent>) => void) & MouseEventHandler<HTMLInputElement>)"}}}}}catch{}const j={title:"Toggle",component:r,argTypes:{},args:{}},u=s=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...s,checked:!1}),e.jsx("br",{}),e.jsx(r,{...s,checked:!0})]}),o=u.bind({});o.args={};const t=u.bind({});t.args={disabled:!0};var l,g,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => <>
    <ToggleComponent {...args} checked={false} />
    <br />
    <ToggleComponent {...args} checked={true} />
  </>`,...(i=(g=o.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => <>
    <ToggleComponent {...args} checked={false} />
    <br />
    <ToggleComponent {...args} checked={true} />
  </>`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const k=["Active","Disabled"];export{o as Active,t as Disabled,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Toggle.stories-2bc917f1.js.map
