import{j as e}from"./jsx-runtime-f6d73c06.js";import{U as c}from"./user-profile-9aa97790.js";import{S as l,a as m,b as p}from"./leave-e92ccc05.js";import{D as s,d as S}from"./DrawerMenu-da2be9d5.js";import{M as r}from"./MenuItem-e866612d.js";import{S as u}from"./Separator-defdd7de.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-e131923d.js";import"./Text-270962e1.js";import"./Typography-1dd46c86.js";import"./index-dcc1e4a0.js";import"./index-8bf7f4ad.js";const k={title:"Menu/DrawerMenu",component:s,argTypes:{},args:{}},d=i=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:S.bg}),e.jsxs(s,{...i,title:"Settings",children:[e.jsx(r,{Icon:c,label:"Profile",onSelect:()=>{}}),e.jsx(r,{Icon:l,label:"Notifications",onSelect:()=>{}}),e.jsx(r,{Icon:m,label:"Feedback",onSelect:()=>{}}),e.jsx(u,{}),e.jsx(r,{kind:"critical",Icon:p,label:"Sign out",onSelect:()=>{}})]})]}),o=d.bind({});o.args={};var t,n,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => <>
    <div className={drawerStyles.bg} />
    <DrawerMenuComponent {...args} title="Settings">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </DrawerMenuComponent>
  </>`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const C=["DrawerMenu"];export{o as DrawerMenu,C as __namedExportsOrder,k as default};
//# sourceMappingURL=DrawerMenu.stories-7d41f8c1.js.map
