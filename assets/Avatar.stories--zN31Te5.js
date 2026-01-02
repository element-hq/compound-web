import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-B1r1CUe8.js";import"./index-Bl5en0Wb.js";import{A as a}from"./Avatar-u0s0KEUT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvpdxyaY.js";const b={title:"Avatar",component:a,tags:["autodocs"],argTypes:{},args:{name:"Bob",size:"64px",id:"@bob:example.org",src:"/images/__test__/kitten.jpg",type:"round"}},n={args:{type:"round"}},t={args:{type:"square"}},s={tags:["axe-exclude"],args:{type:"round",onClick:()=>console.log("clicked!")}},o={args:{src:""}},c={tags:["axe-exclude"],args:{...o.args,...s.args}},p={args:{src:"",size:"128px"}},m={args:{src:"",size:"36px"},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(a,{...e,id:"1"})," ",r.jsx(a,{...e,id:"2"})," ",r.jsx(a,{...e,id:"3"})," ",r.jsx(a,{...e,id:"4"})," ",r.jsx(a,{...e,id:"5"})," ",r.jsx(a,{...e,id:"6"})," "]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "round"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "square"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["axe-exclude"],
  args: {
    type: "round",
    onClick: () => console.log("clicked!")
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: ""
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["axe-exclude"],
  args: {
    ...NoImageFallback.args,
    ...Button.args
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: "",
    size: "128px"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: "",
    size: "36px"
  },
  render: (args: React.ComponentProps<typeof AvatarComponent>) => <>
      <AvatarComponent {...args} id="1" />
      &nbsp;
      <AvatarComponent {...args} id="2" />
      &nbsp;
      <AvatarComponent {...args} id="3" />
      &nbsp;
      <AvatarComponent {...args} id="4" />
      &nbsp;
      <AvatarComponent {...args} id="5" />
      &nbsp;
      <AvatarComponent {...args} id="6" />
      &nbsp;
    </>
}`,...m.parameters?.docs?.source}}};const A=["Round","Square","Button","NoImageFallback","NoImageFallbackButton","LargeNoImageFallback","AllAvatars"];export{m as AllAvatars,s as Button,p as LargeNoImageFallback,o as NoImageFallback,c as NoImageFallbackButton,n as Round,t as Square,A as __namedExportsOrder,b as default};
