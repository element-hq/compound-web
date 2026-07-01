import{i as e}from"./preload-helper-xPQekRTU.js";import{X as t}from"./iframe-ynsJVEFJ.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./dist-Dt_3_OwD.js";import{i,r as a}from"./Tooltip-DNzwMIgM.js";import{n as o,t as s}from"./check--KXUsjV2.js";import{n as c,t as l}from"./Toast-DOOHWNvk.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),r(),o(),c(),i(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Toast`,component:l,tags:[`autodocs`],argTypes:{},args:{children:`Would you like some toast?`,onClose:void 0,onClick:void 0},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0`}},decorators:[e=>(0,u.jsx)(a,{children:(0,u.jsx)(e,{})})]},p={},m={args:{Icon:s}},h={args:{Icon:s,onClose:d(),tooltip:`Close`}},g={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`250px`},children:(0,u.jsx)(e,{})})],args:{Icon:s,children:`Would you like some toast on multiple multiple multiple lines?`}},_={decorators:[e=>(0,u.jsx)(`div`,{style:{width:`250px`},children:(0,u.jsx)(e,{})})],args:{Icon:s,onClose:d(),tooltip:`Close`,children:`Would you like some toast on multiple multiple multiple lines?`}},v={args:{onClick:d(),children:`There are new messages, jump to them`}},y={args:{Icon:s,onClick:d(),children:`There are new messages, jump to them`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "250px"
  }}>
        <Story />
      </div>],
  args: {
    Icon: CheckIcon,
    children: "Would you like some toast on multiple multiple multiple lines?"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "250px"
  }}>
        <Story />
      </div>],
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
    children: "Would you like some toast on multiple multiple multiple lines?"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    children: "There are new messages, jump to them"
  }
}`,...v.parameters?.docs?.source},description:{story:"When `onClick` is provided, the whole toast becomes a button. This is\nmutually exclusive with `onClose`, as a button cannot contain another button.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon,
    onClick: fn(),
    children: "There are new messages, jump to them"
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Icon`,`CloseAndIcon`,`Multiline`,`MultilineAndClose`,`Clickable`,`ClickableWithIcon`]}))();export{v as Clickable,y as ClickableWithIcon,h as CloseAndIcon,p as Default,m as Icon,g as Multiline,_ as MultilineAndClose,b as __namedExportsOrder,f as default};