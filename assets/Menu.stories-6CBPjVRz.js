import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-CNV3hThj.js";import{n as a,t as o}from"./Button-BMqSfXMo.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./notifications-CFCtFxPr.js";import{n as p,t as m}from"./user-profile-B3b4jLiE.js";import{n as h,t as g}from"./MenuTitle-nSWxweQt.js";import{n as _,t as v}from"./MenuScrollArea-CLLJtq3n.js";import{n as y,t as b}from"./MenuItem-DpH9W6dv.js";import{n as x,t as S}from"./Menu-DH6SS5zp.js";import{n as C,t as w}from"./Separator-n8KM0Ys2.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{T=e(n(),1),i(),m(),f(),u(),d(),x(),y(),C(),a(),h(),_(),E=r(),D=e=>{let[t,n]=(0,T.useState)(!0);return(0,E.jsxs)(S,{...e,open:t,onOpenChange:n,trigger:(0,E.jsx)(o,{children:`Open menu`}),align:`start`,children:[(0,E.jsx)(b,{Icon:p,label:`Profile`,onSelect:()=>{}}),(0,E.jsx)(b,{Icon:l,label:`Notifications`,onSelect:()=>{}}),(0,E.jsx)(g,{title:`Other section`}),(0,E.jsx)(b,{Icon:l,label:`Other Notifications`,onSelect:()=>{}}),(0,E.jsx)(b,{Icon:s,label:`Feedback`,onSelect:()=>{}}),(0,E.jsx)(w,{}),(0,E.jsx)(b,{kind:`critical`,Icon:c,label:`Sign out`,onSelect:()=>{}})]})},O={title:`Menu`,component:D,tags:[`autodocs`,`axe-exclude`],argTypes:{},args:{}},k={args:{title:`Today's Menu`}},A={args:{title:`Untitled Menu`,showTitle:!1}},j=Array.from({length:30},(e,t)=>(0,E.jsx)(b,{Icon:l,label:`Item ${t+1}`,onSelect:()=>{}},t)),M=e=>{let[t,n]=(0,T.useState)(!0);return(0,E.jsx)(S,{...e,open:t,onOpenChange:n,trigger:(0,E.jsx)(o,{children:`Open menu`}),align:`start`,children:j})},N={render:e=>(0,E.jsx)(M,{...e}),args:{title:`A long menu`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},P=e=>{let[t,n]=(0,T.useState)(!0),[r,i]=(0,T.useState)(null);return(0,E.jsx)(`div`,{ref:i,style:{blockSize:320,inlineSize:280,outline:`1px dashed var(--cpd-color-border-interactive-primary)`},children:(0,E.jsx)(S,{...e,open:t,onOpenChange:n,trigger:(0,E.jsx)(o,{children:`Open menu`}),align:`start`,collisionBoundary:r,collisionPadding:8,children:j})})},F={render:e=>(0,E.jsx)(P,{...e}),args:{title:`A bounded menu`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},I=e=>{let[t,n]=(0,T.useState)(!0),[r,i]=(0,T.useState)(null);return(0,E.jsx)(`div`,{ref:i,style:{blockSize:400,inlineSize:280,outline:`1px dashed var(--cpd-color-border-interactive-primary)`},children:(0,E.jsxs)(S,{...e,open:t,onOpenChange:n,trigger:(0,E.jsx)(o,{children:`Open menu`}),align:`start`,collisionBoundary:r,collisionPadding:8,children:[(0,E.jsx)(g,{title:`Devices`}),(0,E.jsx)(v,{children:j})]})})},L={render:e=>(0,E.jsx)(I,{...e}),args:{title:`A menu with a scrolling region`,showTitle:!1},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},R=[`Menu`,`WithoutTitle`,`WithManyItems`,`WithinABoundary`,`WithAScrollingRegion`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Today's Menu"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Untitled Menu",
    showTitle: false
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <LongTemplate {...args} />,
  args: {
    title: "A long menu"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <BoundaryTemplate {...args} />,
  args: {
    title: "A bounded menu"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`As in an app embedded in a page: the menu scrolls within the box.`,...F.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <RegionTemplate {...args} />,
  args: {
    title: "A menu with a scrolling region",
    showTitle: false
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`Only the list scrolls, and fades out down to the frame; the heading stays put.`,...L.parameters?.docs?.description}}}})))()}z();export{k as Menu,L as WithAScrollingRegion,N as WithManyItems,F as WithinABoundary,A as WithoutTitle,R as __namedExportsOrder,O as default};