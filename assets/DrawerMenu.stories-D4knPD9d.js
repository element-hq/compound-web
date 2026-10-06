import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./dist-BEaCOi87.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./notifications-CFCtFxPr.js";import{n as u,t as d}from"./user-profile-B3b4jLiE.js";import{a as f,n as p,o as m,t as h}from"./DrawerMenu-BOTQnfnw.js";import{n as g,t as _}from"./MenuItem-C5id0yoB.js";import{n as v,t as y}from"./Separator-CTmPlHXY.js";var b,x,S,C,w,T;function E(){return(E=e((()=>{t(),r(),d(),l(),s(),c(),p(),m(),g(),v(),b=n(),x=e=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:f.bg}),(0,b.jsxs)(h,{...e,title:`Settings`,children:[(0,b.jsx)(_,{Icon:u,label:`Profile`,onSelect:()=>{}}),(0,b.jsx)(_,{Icon:o,label:`Notifications`,onSelect:()=>{}}),(0,b.jsx)(_,{Icon:i,label:`Feedback`,onSelect:()=>{}}),(0,b.jsx)(y,{}),(0,b.jsx)(_,{kind:`critical`,Icon:a,label:`Sign out`,onSelect:()=>{}})]})]}),S={title:`Menu/DrawerMenu`,component:x,argTypes:{},args:{}},C={args:{}},w={render:e=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:f.bg}),(0,b.jsx)(h,{...e,title:`Settings`,children:Array.from({length:30},(e,t)=>(0,b.jsx)(_,{Icon:o,label:`Item ${t+1}`,onSelect:()=>{}},t))})]}),args:{},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},T=[`DrawerMenu`,`WithManyItems`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <div className={drawerStyles.bg} />
      <DrawerMenuComponent {...args} title="Settings">
        {Array.from({
        length: 30
      }, (_, i) => <MenuItem key={i} Icon={NotificationsIcon} label={\`Item \${i + 1}\`} onSelect={() => {}} />)}
      </DrawerMenuComponent>
    </>,
  args: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as DrawerMenu,w as WithManyItems,T as __namedExportsOrder,S as default};