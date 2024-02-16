import{j as t}from"./jsx-runtime-f6d73c06.js";import{S as g}from"./extensions-37e27587.js";import{C as h}from"./chat-ae65e692.js";import{r as I}from"./index-8ee6c85d.js";import{M as f}from"./MenuItem-6190501a.js";import{a as y}from"./Toggle-784da0b5.js";import{u as T}from"./useId-a94b91a4.js";import"./_commonjsHelpers-de833af9.js";import"./index-e131923d.js";import"./Text-270962e1.js";import"./Typography-1dd46c86.js";import"./index-fc9b93e8.js";import"./index-473717ad.js";import"./index-79556c5a.js";import"./index-6e117a6c.js";import"./index-8bf7f4ad.js";const o=I.forwardRef(function({className:l,Icon:m,label:c,onSelect:u,...p},d){const r=T();return t.jsx(f,{as:"label",htmlFor:r,role:"menuitemcheckbox",className:l,Icon:m,label:c,onSelect:u,children:t.jsx(y,{id:r,ref:d,...p})})});try{o.displayName="ToggleMenuItem",o.__docgenInfo={description:`A menu item with a toggle control. Clicking anywhere on the surface will
activate the toggle.`,displayName:"ToggleMenuItem",props:{label:{defaultValue:null,description:"The label to show on this menu item.",name:"label",required:!0,type:{name:"string | null"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:`Event callback for when the item is selected via mouse, touch, or keyboard.
Calling event.preventDefault in this handler will prevent the menu from
being dismissed.`,name:"onSelect",required:!0,type:{name:"((e: Event) => void) | null"}},Icon:{defaultValue:null,description:"The icon to show on this menu item.\nWhen `Icon` is a ReactNode, it should spread the props",name:"Icon",required:!0,type:{name:"ReactNode | ComponentType<SVGAttributes<SVGElement>>"}}}}}catch{}const G={title:"Menu/ToggleMenuItem",component:o,tags:["autodocs"],argTypes:{},args:{}},b=n=>t.jsxs("div",{style:{width:300},children:[t.jsx(o,{...n,Icon:h,label:"First item"}),t.jsx(o,{...n,Icon:g,label:"Second item with a name that's quite long"})]}),e=b.bind({});e.args={};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => <div style={{
  width: 300
}}>
    <ToggleMenuItemComponent {...args} Icon={ChatIcon} label="First item" />
    <ToggleMenuItemComponent {...args} Icon={ExtensionsIcon} label="Second item with a name that's quite long" />
  </div>`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const P=["Primary"];export{e as Primary,P as __namedExportsOrder,G as default};
//# sourceMappingURL=ToggleMenuItem.stories-31bf70dc.js.map