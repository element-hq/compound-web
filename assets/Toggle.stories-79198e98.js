import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as h}from"./index-e131923d.js";import{R as b}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const v="_toggle_1qgl3_17",c={toggle:v,"toggle-ui":"_toggle-ui_1qgl3_41"},t=b.forwardRef(function({className:f,onMouseDown:a,..._},x){const T=h(c.toggle,f);return e.jsxs("div",{className:T,children:[e.jsx("input",{ref:x,..._,type:"checkbox",onMouseDown:n=>{n.preventDefault(),a==null||a(n)}}),e.jsx("div",{className:c["toggle-ui"]})]})});try{t.displayName="Toggle",t.__docgenInfo={description:`Standalone toggle component to be used with a Radix form control
See https://www.radix-ui.com/docs/primitives/components/form#composing-with-your-own-components`,displayName:"Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"(((e: MouseEvent<HTMLInputElement, MouseEvent>) => void) & MouseEventHandler<HTMLInputElement>)"}}}}}catch{}const w={title:"Toggle",component:t,argTypes:{},args:{}},u=r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,checked:!1}),e.jsx("br",{}),e.jsx(t,{...r,checked:!0})]}),s=u.bind({});s.args={};const o=u.bind({});o.args={disabled:!0};var l,g,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => <>
    <ToggleComponent {...args} checked={false} />
    <br />
    <ToggleComponent {...args} checked={true} />
  </>`,...(i=(g=s.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => <>
    <ToggleComponent {...args} checked={false} />
    <br />
    <ToggleComponent {...args} checked={true} />
  </>`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["Active","Disabled"];export{s as Active,o as Disabled,N as __namedExportsOrder,w as default};
//# sourceMappingURL=Toggle.stories-79198e98.js.map
