import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{C as p,E as g}from"./extensions-zjZYc7mI.js";import{S as b}from"./settings-BsCEFnoB.js";import{M as l}from"./MenuItem-JgayYv5j.js";import{T as d}from"./Text-DCibjNNg.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./chevron-right-DRUMXvCI.js";import"./index-B2VpcjXg.js";import"./Typography-D-74lRMS.js";const P={title:"Menu/MenuItem",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked!"}},args:{label:"Menu item",children:e.jsx(d,{as:"span",size:"sm",children:"99"}),Icon:p},decorators:[u=>e.jsx("div",{style:{width:300},children:e.jsx(u,{})})]},s={render:()=>e.jsxs("div",{style:{width:300},children:[e.jsx(l,{Icon:p,label:"First item",onSelect:()=>{},children:e.jsx(d,{as:"span",size:"sm",children:"99"})}),e.jsx(l,{Icon:g,label:"Second item with a name that's quite long",onSelect:()=>{}}),e.jsx(l,{Icon:b,label:null,onSelect:()=>{},children:e.jsx(d,{as:"span",size:"sm",children:"Third item without a label"})})]})},r={args:{kind:"primary"}},a={args:{kind:"critical"}},n={args:{...r.args,disabled:!0}},o={args:{...a.args,disabled:!0}};function h(u){return e.jsx("div",{style:{height:24,width:48,backgroundColor:"teal"},...u})}const t={args:{...r.args,Icon:e.jsx(h,{})}},i={args:{...r.args,label:void 0}},c={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},m={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",children:e.jsx(d,{as:"span",size:"sm",children:"Longer children too"})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args,
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    Icon: <SimpleComponent />
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const f=["Example","Primary","Critical","PrimaryDisabled","CriticalDisabled","IconIsComponent","WithoutLabel","WithALongLabel","WithALongLabelAndChildren"];export{a as Critical,o as CriticalDisabled,s as Example,t as IconIsComponent,r as Primary,n as PrimaryDisabled,c as WithALongLabel,m as WithALongLabelAndChildren,i as WithoutLabel,f as __namedExportsOrder,P as default};
