import{j as e}from"./jsx-runtime-C-_spy54.js";import{f as h}from"./index-DbC2Qtzz.js";import{C as g,E as b}from"./extensions-D71AzikE.js";import{S as x}from"./settings-DYI12tmC.js";import{M as d}from"./MenuItem-DIjJyzEI.js";import{T as u}from"./Text-B8nWEeLF.js";import"./index-aRQRyZp7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./chevron-right-BVzB4aIM.js";import"./index-BWu37rA2.js";import"./Typography-Sq-9FTuv.js";const W={title:"Menu/MenuItem",component:d,tags:["autodocs"],args:{label:"Menu item",children:e.jsx(u,{as:"span",size:"sm",children:"99"}),Icon:g,onSelect:h()},decorators:[p=>e.jsx("div",{style:{width:300},children:e.jsx(p,{})})]},s={render:()=>e.jsxs("div",{style:{width:300},children:[e.jsx(d,{Icon:g,label:"First item",onSelect:()=>{},children:e.jsx(u,{as:"span",size:"sm",children:"99"})}),e.jsx(d,{Icon:b,label:"Second item with a name that's quite long",onSelect:()=>{}}),e.jsx(d,{Icon:x,label:null,onSelect:()=>{},children:e.jsx(u,{as:"span",size:"sm",children:"Third item without a label"})})]})},r={args:{kind:"primary"}},a={args:{kind:"critical"}},o={args:{...r.args,disabled:!0}},t={args:{...a.args,disabled:!0}},C=p=>e.jsx("div",{style:{height:24,width:48,backgroundColor:"teal"},...p}),n={args:{...r.args,Icon:e.jsx(C,{})}},i={args:{...r.args,label:void 0}},c={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},m={args:{...r.args,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",children:e.jsx(u,{as:"span",size:"sm",children:"Longer children too"})}},l={args:{hideChevron:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    // @ts-expect-error: For some reason, this isn't liking the type here
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hideChevron: true
  }
}`,...l.parameters?.docs?.source}}};const z=["Example","Primary","Critical","PrimaryDisabled","CriticalDisabled","IconIsComponent","WithoutLabel","WithALongLabel","WithALongLabelAndChildren","WithoutChevron"];export{a as Critical,t as CriticalDisabled,s as Example,n as IconIsComponent,r as Primary,o as PrimaryDisabled,c as WithALongLabel,m as WithALongLabelAndChildren,l as WithoutChevron,i as WithoutLabel,z as __namedExportsOrder,W as default};
