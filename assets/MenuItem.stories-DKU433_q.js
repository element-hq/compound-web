import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{C as p,E as g}from"./extensions-DRIHxRsb.js";import{S as b}from"./settings-xa_4DC6i.js";import{M as l}from"./MenuItem-2y-pqdrL.js";import{T as d}from"./Text-Ca3mYoxg.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./chevron-right-DND12YKW.js";import"./index-C8xBnYIG.js";import"./Typography-f-oayws_.js";const P={title:"Menu/MenuItem",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked!"}},args:{label:"Menu item",children:e.jsx(d,{as:"span",size:"sm",children:"99"}),Icon:p},decorators:[u=>e.jsx("div",{style:{width:300},children:e.jsx(u,{})})]},s={render:()=>e.jsxs("div",{style:{width:300},children:[e.jsx(l,{Icon:p,label:"First item",onSelect:()=>{},children:e.jsx(d,{as:"span",size:"sm",children:"99"})}),e.jsx(l,{Icon:g,label:"Second item with a name that's quite long",onSelect:()=>{}}),e.jsx(l,{Icon:b,label:null,onSelect:()=>{},children:e.jsx(d,{as:"span",size:"sm",children:"Third item without a label"})})]})},r={args:{kind:"primary"}},a={args:{kind:"critical"}},o={args:{...r.args,disabled:!0}},t={args:{...a.args,disabled:!0}};function h(u){return e.jsx("div",{style:{height:24,width:48,backgroundColor:"teal"},...u})}const n={args:{...r.args,Icon:e.jsx(h,{})}},i={args:{...r.args,label:void 0}},c={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},m={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",children:e.jsx(d,{as:"span",size:"sm",children:"Longer children too"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <MenuItemComponent Icon={ChatIcon} label="First item" onSelect={() => {}}>
        <Text as="span" size="sm">
          99
        </Text>
      </MenuItemComponent>
      <MenuItemComponent Icon={ExtensionsIcon} label="Second item with a name that's quite long" onSelect={() => {}} />
      <MenuItemComponent Icon={SettingsLabel} label={null} onSelect={() => {}}>
        <Text as="span" size="sm">
          Third item without a label
        </Text>
      </MenuItemComponent>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "critical"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    Icon: <SimpleComponent />
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: undefined
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",
    children: <Text as="span" size="sm">
        Longer children too
      </Text>
  }
}`,...m.parameters?.docs?.source}}};const f=["Example","Primary","Critical","PrimaryDisabled","CriticalDisabled","IconIsComponent","WithoutLabel","WithALongLabel","WithALongLabelAndChildren"];export{a as Critical,t as CriticalDisabled,s as Example,n as IconIsComponent,r as Primary,o as PrimaryDisabled,c as WithALongLabel,m as WithALongLabelAndChildren,i as WithoutLabel,f as __namedExportsOrder,P as default};