import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as h}from"./index-e131923d.js";import{r as b}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const j="_toggle_136pa_17",c={toggle:j,"toggle-ui":"_toggle-ui_136pa_41"},r=b.forwardRef(function({className:f,onMouseDown:a,..._},T){const x=h(c.toggle,f);return e.jsxs("div",{className:x,children:[e.jsx("input",{ref:T,..._,type:"checkbox",onMouseDown:n=>{n.preventDefault(),a==null||a(n)}}),e.jsx("div",{className:c["toggle-ui"]})]})});try{r.displayName="Toggle",r.__docgenInfo={description:"A toggle component.",displayName:"Toggle",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onMouseDown:{defaultValue:null,description:"On mouse down callback for the toggle.",name:"onMouseDown",required:!1,type:{name:"(((e: MouseEvent<HTMLInputElement, MouseEvent>) => void) & MouseEventHandler<HTMLInputElement>)"}}}}}catch{}const N={title:"Toggle",component:r,argTypes:{},args:{}},u=t=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...t,checked:!1}),e.jsx("br",{}),e.jsx(r,{...t,checked:!0})]}),s=u.bind({});s.args={};const o=u.bind({});o.args={disabled:!0};var l,g,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => <>
    <ToggleComponent {...args} checked={false} />
    <br />
    <ToggleComponent {...args} checked={true} />
  </>`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var d,i,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => <>
    <ToggleComponent {...args} checked={false} />
    <br />
    <ToggleComponent {...args} checked={true} />
  </>`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["Active","Disabled"];export{s as Active,o as Disabled,C as __namedExportsOrder,N as default};
//# sourceMappingURL=Toggle.stories-ad57c187.js.map
