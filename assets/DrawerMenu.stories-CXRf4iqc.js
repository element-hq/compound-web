import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{U as a}from"./user-profile-DpJAtKRi.js";import{N as s,C as i,L as c}from"./notifications-CIZ5xXmZ.js";import{D as t,d as l}from"./DrawerMenu-B0eUoCAz.js";import{M as r}from"./MenuItem-BL1YpgJ8.js";import{S as m}from"./Separator-igzH2H_u.js";import"./index-CTjT7uj6.js";import"./index-CCQ3W5xA.js";import"./Text-DUPZfVce.js";import"./Typography-BH_K20Kd.js";import"./chevron-right-C-skg4d4.js";import"./index-oNbozaCL.js";import"./index-D5Q7rJ_l.js";import"./index-CMONDToX.js";import"./floating-ui.react-CSAlgT53.js";const h={title:"Menu/DrawerMenu",component:t,argTypes:{},args:{}},p=n=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:l.bg}),e.jsxs(t,{...n,title:"Settings",children:[e.jsx(r,{Icon:a,label:"Profile",onSelect:()=>{}}),e.jsx(r,{Icon:s,label:"Notifications",onSelect:()=>{}}),e.jsx(r,{Icon:i,label:"Feedback",onSelect:()=>{}}),e.jsx(m,{}),e.jsx(r,{kind:"critical",Icon:c,label:"Sign out",onSelect:()=>{}})]})]}),o=p.bind({});o.args={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
    <div className={drawerStyles.bg} />
    <DrawerMenuComponent {...args} title="Settings">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </DrawerMenuComponent>
  </>`,...o.parameters?.docs?.source}}};const k=["DrawerMenu"];export{o as DrawerMenu,k as __namedExportsOrder,h as default};
