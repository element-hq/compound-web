import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CAJ-Em19.js";import"./index-COk11a5Y.js";import{I as l}from"./IconButton-C610dron.js";import{U as g}from"./user-profile-BUdJLd_1.js";import{T as x}from"./Tooltip--yZ-WPQv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BS4ekoq0.js";import"./UnstyledButton-C3EN3Fhq.js";import"./IndicatorIcon-DtXpbqc1.js";import"./floating-ui.react-Dy_SAc9i.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-qJjR82Cp.js";import"./index-CecOzUgp.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,z={title:"Button/IconButton",component:l,tags:["autodocs","axe-exclude"],argTypes:{disabled:{type:"boolean"},onClick:{action:"onClick"},kind:{type:"string",control:{type:"select"},options:["primary","secondary"]}},args:{size:"32px",disabled:!1,children:r.jsx(g,{}),onClick:I(),kind:"primary"}},o={render:e=>r.jsxs(r.Fragment,{children:[r.jsx(l,{...e,size:"32px",children:r.jsx(g,{})}),r.jsx(l,{...e,size:"48px",children:r.jsx(g,{})}),r.jsx(l,{...e,size:"64px",children:r.jsx(g,{})})]})},s={args:{}},a={args:{disabled:!0}},t={args:{indicator:"default"}},n={args:{indicator:"default",disabled:!0}},c={args:{indicator:"success"}},i={args:{indicator:"critical"}},d={args:{kind:"secondary"}},p={args:{kind:"secondary",noBackground:!0}},m={decorators:[e=>r.jsx(x,{children:r.jsx(e,{})})],args:{tooltip:"label"}},u={args:{destructive:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "default"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    kind: "secondary"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary",
    noBackground: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TooltipProvider>
        <Story />
      </TooltipProvider>],
  args: {
    tooltip: "label"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    destructive: true
  }
}`,...u.parameters?.docs?.source}}};const U=["Demo","Default","DefaultDisabled","WithIndicator","WithIndicatorDisabled","WithSuccessIndicator","WithCriticalIndicator","WithSecondaryKind","WithSecondaryKindAndNoBackground","WithLabel","Destructive"];export{s as Default,a as DefaultDisabled,o as Demo,u as Destructive,i as WithCriticalIndicator,t as WithIndicator,n as WithIndicatorDisabled,m as WithLabel,d as WithSecondaryKind,p as WithSecondaryKindAndNoBackground,c as WithSuccessIndicator,U as __namedExportsOrder,z as default};
