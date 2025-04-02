import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{f as g}from"./index-B9Dy1COi.js";import{I as m}from"./IconButton--XgqAuqs.js";import{U as l}from"./user-profile-ComBrQ4m.js";import{T as I}from"./Tooltip-CMsw7SDU.js";import"./index-7h80QhK_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./UnstyledButton-Cbxfy2C6.js";import"./IndicatorIcon-CFn7u98c.js";import"./floating-ui.react-Dw8aoZv5.js";import"./index-Dmd9PWHg.js";const z={title:"Button/IconButton",component:m,tags:["autodocs"],argTypes:{disabled:{type:"boolean"},onClick:{action:"onClick"}},args:{size:"32px",disabled:!1,children:r.jsx(l,{}),onClick:g()}},o={render:e=>r.jsxs(r.Fragment,{children:[r.jsx(m,{...e,size:"32px",children:r.jsx(l,{})}),r.jsx(m,{...e,size:"48px",children:r.jsx(l,{})}),r.jsx(m,{...e,size:"64px",children:r.jsx(l,{})})]})},s={args:{}},t={args:{disabled:!0}},a={args:{indicator:"default"}},n={args:{indicator:"default",disabled:!0}},c={args:{indicator:"success"}},i={args:{indicator:"critical"}},d={args:{subtleBackground:!0}},p={decorators:[e=>r.jsx(I,{children:r.jsx(e,{})})],args:{tooltip:"label"}},u={args:{destructive:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: React.ComponentProps<typeof IconButtonComponent>) => <>
      <IconButtonComponent {...args} size="32px">
        <UserIcon />
      </IconButtonComponent>

      <IconButtonComponent {...args} size="48px">
        <UserIcon />
      </IconButtonComponent>

      <IconButtonComponent {...args} size="64px">
        <UserIcon />
      </IconButtonComponent>
    </>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "default"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "default",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "success"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "critical"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    subtleBackground: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TooltipProvider>
        <Story />
      </TooltipProvider>],
  args: {
    tooltip: "label"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    destructive: true
  }
}`,...u.parameters?.docs?.source}}};const y=["Demo","Default","DefaultDisabled","WithIndicator","WithIndicatorDisabled","WithSuccessIndicator","WithCriticalIndicator","WithSubtleBackground","WithLabel","Destructive"];export{s as Default,t as DefaultDisabled,o as Demo,u as Destructive,i as WithCriticalIndicator,a as WithIndicator,n as WithIndicatorDisabled,p as WithLabel,d as WithSubtleBackground,c as WithSuccessIndicator,y as __namedExportsOrder,z as default};
