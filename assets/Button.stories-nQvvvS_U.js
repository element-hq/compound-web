import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./dist-DmciedYU.js";import{n,t as r}from"./Button-Es2cm7EE.js";import{n as i,t as a}from"./icons-YocME_Mi.js";import{n as o}from"./visibility-on-BPOzEUb9.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Button`,component:r,tags:[`autodocs`],argTypes:{size:{options:[`sm`,`lg`],control:{type:`inline-radio`}},kind:{options:[`primary`,`secondary`,`tertiary`],control:{type:`inline-radio`}},destructive:{type:`boolean`},disabled:{type:`boolean`},as:{options:[`a`,`button`],control:{type:`inline-radio`}},iconOnly:{type:`boolean`},Icon:{options:Object.keys(a),mapping:a,control:{type:`select`}},onClick:{action:`onClick`}},args:{size:`lg`,as:`button`,destructive:!1,disabled:!1,children:`Click me!`,onClick:s()}},l={args:{kind:void 0,size:void 0}},u={args:{kind:void 0,size:`sm`}},d={args:{kind:`primary`}},f={args:{kind:`primary`,destructive:!0}},p={args:{kind:`secondary`}},m={args:{kind:`secondary`,destructive:!0}},h={args:{kind:`tertiary`}},g={args:{kind:`tertiary`,destructive:!0}},_={args:{...d.args,Icon:o}},v={args:{...d.args,size:`sm`,Icon:o}},y={args:{...d.args,disabled:!0}},b={args:{...d.args,as:`a`,href:`https://example.org`}},x={args:{...b.args,disabled:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    // test component defaults
    kind: undefined,
    size: undefined
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    // test component defaults
    kind: undefined,
    size: "sm"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary",
    destructive: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary",
    destructive: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "tertiary"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "tertiary",
    destructive: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    Icon: icons.VisibilityOnIcon
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: "sm",
    Icon: icons.VisibilityOnIcon
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    as: "a",
    href: "https://example.org"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Link.args,
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Small`,`Primary`,`PrimaryDestructive`,`Secondary`,`SecondaryDestructive`,`Tertiary`,`TertiaryDestructive`,`WithIcon`,`SmallWithIcon`,`Disabled`,`Link`,`LinkDisabled`]}))();export{l as Default,y as Disabled,b as Link,x as LinkDisabled,d as Primary,f as PrimaryDestructive,p as Secondary,m as SecondaryDestructive,u as Small,v as SmallWithIcon,h as Tertiary,g as TertiaryDestructive,_ as WithIcon,S as __namedExportsOrder,c as default};