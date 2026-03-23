import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-B_0iYUWB.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{t as r}from"./dist-jlgopDWl.js";import{n as i,t as a}from"./IconButton-BAC2x1ze.js";import{i as o,r as s}from"./Tooltip-DtK5d9eg.js";import{n as c,t as l}from"./user-profile-C6_QJlLe.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{t(),r(),i(),l(),o(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Button/IconButton`,component:a,tags:[`autodocs`,`axe-exclude`],argTypes:{disabled:{type:`boolean`},onClick:{action:`onClick`},kind:{type:`string`,control:{type:`select`},options:[`primary`,`secondary`]}},args:{size:`32px`,disabled:!1,children:(0,u.jsx)(c,{}),onClick:d(),kind:`primary`}},p={render:e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{...e,size:`32px`,children:(0,u.jsx)(c,{})}),(0,u.jsx)(a,{...e,size:`48px`,children:(0,u.jsx)(c,{})}),(0,u.jsx)(a,{...e,size:`64px`,children:(0,u.jsx)(c,{})})]})},m={args:{}},h={args:{disabled:!0}},g={args:{indicator:`default`}},_={args:{indicator:`default`,disabled:!0}},v={args:{indicator:`success`}},y={args:{indicator:`critical`}},b={args:{kind:`secondary`}},x={args:{kind:`secondary`,noBackground:!0}},S={decorators:[e=>(0,u.jsx)(s,{children:(0,u.jsx)(e,{})})],args:{tooltip:`label`}},C={args:{destructive:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "default"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "default",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "success"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    indicator: "critical"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary",
    noBackground: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TooltipProvider>
        <Story />
      </TooltipProvider>],
  args: {
    tooltip: "label"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    destructive: true
  }
}`,...C.parameters?.docs?.source}}},w=[`Demo`,`Default`,`DefaultDisabled`,`WithIndicator`,`WithIndicatorDisabled`,`WithSuccessIndicator`,`WithCriticalIndicator`,`WithSecondaryKind`,`WithSecondaryKindAndNoBackground`,`WithLabel`,`Destructive`]}))();export{m as Default,h as DefaultDisabled,p as Demo,C as Destructive,y as WithCriticalIndicator,g as WithIndicator,_ as WithIndicatorDisabled,S as WithLabel,b as WithSecondaryKind,x as WithSecondaryKindAndNoBackground,v as WithSuccessIndicator,w as __namedExportsOrder,f as default};