import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-9Cw6JC8m.js";import"./index-lfLk3oyn.js";import{a as c,N as d}from"./NavItem-DjYBdB2f.js";import"./index-Bio7adSb.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Nav/Nav Item",component:c,tags:["autodocs"],args:{onClick:m(),href:void 0},decorators:[i=>n.jsx(d,{"aria-label":"Testing",children:n.jsx(i,{})})],parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0"}}},s={args:{children:"Sessions"}},r={args:{children:"Sessions",disabled:!0}},e={args:{children:"Sessions",href:"https://example.org"}},a={args:{children:"Sessions",active:!0}},o={args:{...e.args,active:!0}},t={args:{children:"Sessions",active:!0,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Sessions"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Sessions",
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Sessions",
    href: "https://example.org"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Sessions",
    active: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Link.args,
    active: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Sessions",
    active: true,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};const v=["Default","Disabled","Link","Active","ActiveLink","ActiveDisabled"];export{a as Active,t as ActiveDisabled,o as ActiveLink,s as Default,r as Disabled,e as Link,v as __namedExportsOrder,h as default};
