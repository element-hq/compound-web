import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as b}from"./index-B9Dy1COi.js";import{C as h,E as x}from"./extensions-CWmgbcAh.js";import{S as I}from"./settings-D-9Z9WE1.js";import{M as a}from"./MenuItem-BZD_SHT7.js";import{T as o}from"./Text-CBxtQn4u.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-FGJkmGnF.js";import"./chevron-right-CV8n5cvu.js";import"./index-C66SyY0f.js";import"./Typography-B085WH0_.js";const P={title:"Menu/MenuItem",component:a,tags:["autodocs"],args:{label:"Menu item",children:e.jsx(o,{as:"span",size:"sm",children:"99"}),Icon:h,onSelect:b()},decorators:[g=>e.jsx("div",{style:{width:300},children:e.jsx(g,{})})]},t={render:()=>e.jsxs("div",{style:{width:300},children:[e.jsx(a,{Icon:h,label:"First item",onSelect:()=>{},children:e.jsx(o,{as:"span",size:"sm",children:"99"})}),e.jsx(a,{Icon:x,label:"Second item with a name that's quite long",onSelect:()=>{}}),e.jsx(a,{Icon:I,label:null,onSelect:()=>{},children:e.jsx(o,{as:"span",size:"sm",children:"Third item without a label"})}),e.jsx(a,{label:"Fourth item without an icon",onSelect:()=>{}}),e.jsx(a,{label:"Fith item",onSelect:()=>{},children:e.jsx(o,{as:"span",size:"sm",children:"99"})})]})},r={args:{kind:"primary"}},s={args:{kind:"critical"}},n={args:{...r.args,disabled:!0}},i={args:{...s.args,disabled:!0}},S=g=>e.jsx("div",{style:{height:24,width:48,backgroundColor:"teal"},...g}),c={args:{...r.args,Icon:e.jsx(S,{})}},m={args:{...r.args,label:void 0}},l={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},d={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",children:e.jsx(o,{as:"span",size:"sm",children:"Longer children too"})}},u={args:{hideChevron:!0}},p={args:{Icon:void 0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      <MenuItemComponent label="Fourth item without an icon" onSelect={() => {}} />
      <MenuItemComponent label="Fith item" onSelect={() => {}}>
        <Text as="span" size="sm">
          99
        </Text>
      </MenuItemComponent>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "critical"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    // @ts-expect-error: For some reason, this isn't liking the type here
    Icon: <SimpleComponent />
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: undefined
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",
    children: <Text as="span" size="sm">
        Longer children too
      </Text>
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hideChevron: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: undefined
  }
}`,...p.parameters?.docs?.source}}};const E=["Example","Primary","Critical","PrimaryDisabled","CriticalDisabled","IconIsComponent","WithoutLabel","WithALongLabel","WithALongLabelAndChildren","WithoutChevron","WithoutIcon"];export{s as Critical,i as CriticalDisabled,t as Example,c as IconIsComponent,r as Primary,n as PrimaryDisabled,l as WithALongLabel,d as WithALongLabelAndChildren,u as WithoutChevron,p as WithoutIcon,m as WithoutLabel,E as __namedExportsOrder,P as default};
