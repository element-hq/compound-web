import"./index-DPRZpnMh.js";import{B as y}from"./Button-slDNBcv5.js";import{i as l}from"./index-CSz2AZuo.js";import{V as g}from"./visibility-on-Da9P2ix1.js";import"./iframe-DBN3Wag4.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-u17CrQMm.js";import"./index-B7fTOeS1.js";import"./UnstyledButton-Ch4Cc77P.js";import"./notifications-C80_7Hkr.js";import"./extensions-DHytle0_.js";import"./check-circle-solid-CeFGWoaX.js";import"./check-circle-DTrHb4Mw.js";import"./check-C17XRE9w.js";import"./chevron-down-B_2BnRas.js";import"./chevron-left-YKFjWjqi.js";import"./chevron-right-CeyQRURE.js";import"./close-CXB8QHzi.js";import"./error-solid-aleVd8NX.js";import"./info-D_ahIogH.js";import"./key-DiA95EvU.js";import"./search-Bqjjf3NQ.js";import"./settings-DG9fG2SS.js";import"./spinner-73i2obqw.js";import"./threads-D6Qn8hGy.js";import"./user-profile-CXiq2s3q.js";import"./warning-BLlJLnJ8.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:"Button",component:y,tags:["autodocs"],argTypes:{size:{options:["sm","lg"],control:{type:"inline-radio"}},kind:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},destructive:{type:"boolean"},disabled:{type:"boolean"},as:{options:["a","button"],control:{type:"inline-radio"}},iconOnly:{type:"boolean"},Icon:{options:Object.keys(l),mapping:l,control:{type:"select"}},onClick:{action:"onClick"}},args:{size:"lg",as:"button",destructive:!1,disabled:!1,children:"Click me!",onClick:k()}},s={args:{kind:void 0,size:void 0}},a={args:{kind:void 0,size:"sm"}},r={args:{kind:"primary"}},o={args:{kind:"primary",destructive:!0}},t={args:{kind:"secondary"}},n={args:{kind:"secondary",destructive:!0}},i={args:{kind:"tertiary"}},c={args:{kind:"tertiary",destructive:!0}},m={args:{...r.args,Icon:g}},d={args:{...r.args,size:"sm",Icon:g}},p={args:{...r.args,disabled:!0}},e={args:{...r.args,as:"a",href:"https://example.org"}},u={args:{...e.args,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
