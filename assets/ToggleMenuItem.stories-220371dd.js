import{j as t}from"./jsx-runtime-f6d73c06.js";import{S as g}from"./extensions-39c6de6e.js";import{S as d}from"./chat-b739917b.js";import{r as h}from"./index-8ee6c85d.js";import{M as I}from"./MenuItem-8a82c6bb.js";import{a as f}from"./Toggle-32c06088.js";import{u as T}from"./useId-a94b91a4.js";import"./_commonjsHelpers-de833af9.js";import"./index-e131923d.js";import"./Text-8be2a38d.js";import"./Typography-632d64e2.js";import"./index-ef80d2e8.js";import"./extends-98964cd2.js";import"./index-79556c5a.js";import"./index-b41057c1.js";import"./index-8bf7f4ad.js";const o=h.forwardRef(function({className:m,Icon:l,label:c,...p},u){const n=T();return t.jsx(I,{as:"label",htmlFor:n,role:"menuitemcheckbox",className:m,Icon:l,label:c,children:t.jsx(f,{id:n,ref:u,...p})})});try{o.displayName="ToggleMenuItem",o.__docgenInfo={description:`A menu item with a toggle control. Clicking anywhere on the surface will
activate the toggle.`,displayName:"ToggleMenuItem",props:{label:{defaultValue:null,description:"The label to show on this menu item.",name:"label",required:!0,type:{name:"string | undefined"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"The icon to show on this menu item.",name:"Icon",required:!0,type:{name:"ComponentType<SVGAttributes<SVGElement>>"}}}}}catch{}const G={title:"ToggleMenuItem",component:o,tags:["autodocs"],argTypes:{},args:{}},y=r=>t.jsxs("div",{style:{width:300},children:[t.jsx(o,{...r,Icon:d,label:"First item"}),t.jsx(o,{...r,Icon:g,label:"Second item with a name that's quite long"})]}),e=y.bind({});e.args={};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => <div style={{
  width: 300
}}>
    <ToggleMenuItemComponent {...args} Icon={ChatIcon} label="First item" />
    <ToggleMenuItemComponent {...args} Icon={ExtensionsIcon} label="Second item with a name that's quite long" />
  </div>`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const P=["Primary"];export{e as Primary,P as __namedExportsOrder,G as default};
//# sourceMappingURL=ToggleMenuItem.stories-220371dd.js.map