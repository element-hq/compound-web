import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{U as a}from"./user-profile-cqTW1cHH.js";import{N as s,C as i,L as c}from"./notifications-BEKrtwGv.js";import{D as t,d as l}from"./DrawerMenu-BNILBemh.js";import{M as r}from"./MenuItem-2y-pqdrL.js";import{S as m}from"./Separator-D8xh5QaH.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./Text-Ca3mYoxg.js";import"./Typography-f-oayws_.js";import"./chevron-right-DND12YKW.js";import"./index-C8xBnYIG.js";import"./index-Ksfxd92j.js";import"./index-BvEl7W6R.js";import"./floating-ui.react-C6OC3uct.js";const h={title:"Menu/DrawerMenu",component:t,argTypes:{},args:{}},p=n=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:l.bg}),e.jsxs(t,{...n,title:"Settings",children:[e.jsx(r,{Icon:a,label:"Profile",onSelect:()=>{}}),e.jsx(r,{Icon:s,label:"Notifications",onSelect:()=>{}}),e.jsx(r,{Icon:i,label:"Feedback",onSelect:()=>{}}),e.jsx(m,{}),e.jsx(r,{kind:"critical",Icon:c,label:"Sign out",onSelect:()=>{}})]})]}),o=p.bind({});o.args={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
    <div className={drawerStyles.bg} />
    <DrawerMenuComponent {...args} title="Settings">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </DrawerMenuComponent>
  </>`,...o.parameters?.docs?.source}}};const k=["DrawerMenu"];export{o as DrawerMenu,k as __namedExportsOrder,h as default};
