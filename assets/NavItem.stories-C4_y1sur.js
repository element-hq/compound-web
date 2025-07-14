import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{a as c,N as d}from"./NavItem-DvrYzIgP.js";import"./index-BoK9af0E.js";import"./iframe-BCpr_kNZ.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,S={title:"Nav/Nav Item",component:c,tags:["autodocs"],args:{onClick:m(),href:void 0},decorators:[i=>t.jsx(d,{"aria-label":"Testing",children:t.jsx(i,{})})],parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0"}}},s={args:{children:"Sessions"}},r={args:{children:"Sessions",disabled:!0}},e={args:{children:"Sessions",href:"https://example.org"}},a={args:{children:"Sessions",active:!0}},o={args:{...e.args,active:!0}},n={args:{children:"Sessions",active:!0,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Sessions",
    active: true,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const h=["Default","Disabled","Link","Active","ActiveLink","ActiveDisabled"];export{a as Active,n as ActiveDisabled,o as ActiveLink,s as Default,r as Disabled,e as Link,h as __namedExportsOrder,S as default};
