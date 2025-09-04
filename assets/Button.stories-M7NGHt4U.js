import"./index-B6C7MMgp.js";import{B as y}from"./Button-CMjhHk72.js";import{i as l}from"./index-CGAc8hdv.js";import{V as g}from"./visibility-on-Dbkfz3ds.js";import"./iframe-WJMJEPOv.js";import"./preload-helper-D9Z9MdNV.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DV_wYwtK.js";import"./UnstyledButton-D1cY9v3Q.js";import"./notifications-CCK8MZPp.js";import"./extensions-zW7wovJc.js";import"./check-circle-solid-f5El73bQ.js";import"./check-circle-Dg1HS-gq.js";import"./check-DLKptYoc.js";import"./chevron-down-C1Lkv_YN.js";import"./chevron-left-BgeS73oy.js";import"./chevron-right-BrYETUuY.js";import"./close-CI71Geom.js";import"./error-solid-I3c4PVnW.js";import"./info-d95Swb_u.js";import"./key-CGbHzhFW.js";import"./search-BLyEXh61.js";import"./settings-CPyzYAkS.js";import"./spinner-BPEH8I7d.js";import"./threads-r80meavc.js";import"./user-profile-BpsgMxQt.js";import"./warning-Bt8qyDgK.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:"Button",component:y,tags:["autodocs"],argTypes:{size:{options:["sm","lg"],control:{type:"inline-radio"}},kind:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},destructive:{type:"boolean"},disabled:{type:"boolean"},as:{options:["a","button"],control:{type:"inline-radio"}},iconOnly:{type:"boolean"},Icon:{options:Object.keys(l),mapping:l,control:{type:"select"}},onClick:{action:"onClick"}},args:{size:"lg",as:"button",destructive:!1,disabled:!1,children:"Click me!",onClick:k()}},s={args:{kind:void 0,size:void 0}},a={args:{kind:void 0,size:"sm"}},r={args:{kind:"primary"}},o={args:{kind:"primary",destructive:!0}},t={args:{kind:"secondary"}},n={args:{kind:"secondary",destructive:!0}},i={args:{kind:"tertiary"}},c={args:{kind:"tertiary",destructive:!0}},m={args:{...r.args,Icon:g}},d={args:{...r.args,size:"sm",Icon:g}},p={args:{...r.args,disabled:!0}},e={args:{...r.args,as:"a",href:"https://example.org"}},u={args:{...e.args,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    // test component defaults
    kind: undefined,
    size: undefined
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    // test component defaults
    kind: undefined,
    size: "sm"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary",
    destructive: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "secondary",
    destructive: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "tertiary"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "tertiary",
    destructive: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    Icon: icons.VisibilityOnIcon
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    size: "sm",
    Icon: icons.VisibilityOnIcon
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    as: "a",
    href: "https://example.org"
  }
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Link.args,
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};const F=["Default","Small","Primary","PrimaryDestructive","Secondary","SecondaryDestructive","Tertiary","TertiaryDestructive","WithIcon","SmallWithIcon","Disabled","Link","LinkDisabled"];export{s as Default,p as Disabled,e as Link,u as LinkDisabled,r as Primary,o as PrimaryDestructive,t as Secondary,n as SecondaryDestructive,a as Small,d as SmallWithIcon,i as Tertiary,c as TertiaryDestructive,m as WithIcon,F as __namedExportsOrder,A as default};
