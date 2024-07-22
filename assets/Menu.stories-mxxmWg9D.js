import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{U as p}from"./user-profile-EvkA4CON.js";import{N as m,C as u,L as I}from"./notifications-CmnzXmCw.js";import{M as r}from"./Menu-DgcUsKZr.js";import{M as n}from"./MenuItem-DakIqoyJ.js";import{S as g}from"./Separator-l0Lys_Sb.js";import{B as S}from"./Button-iukP6Ype.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-vl_XNHfj.js";import"./index-DVjhIofj.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./floating-ui.react-BO1cKL3J.js";import"./extends-CF3RwP-h.js";import"./FloatingMenu-CL2la2kV.js";import"./index-CSpfAsmC.js";import"./useId-DIHOOv91.js";import"./Text-43GasnQW.js";import"./Typography-BWOtt-hZ.js";import"./DrawerMenu-BgyYdqxq.js";import"./chevron-right-CaLdGLa3.js";import"./UnstyledButton-C9fNLva5.js";const $={title:"Menu",component:r,tags:["autodocs"],argTypes:{},args:{}},a=i=>{const[s,c]=l.useState(!0);return e.jsxs(r,{...i,open:s,onOpenChange:c,trigger:e.jsx(S,{children:"Open menu"}),align:"start",children:[e.jsx(n,{Icon:p,label:"Profile",onSelect:()=>{}}),e.jsx(n,{Icon:m,label:"Notifications",onSelect:()=>{}}),e.jsx(n,{Icon:u,label:"Feedback",onSelect:()=>{}}),e.jsx(g,{}),e.jsx(n,{kind:"critical",Icon:I,label:"Sign out",onSelect:()=>{}})]})},o=a.bind({});o.args={title:"Today's Menu"};const t=a.bind({});t.args={title:"Untitled Menu",showTitle:!1};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...t.parameters?.docs?.source}}};const q=["Menu","WithoutTitle"];export{o as Menu,t as WithoutTitle,q as __namedExportsOrder,$ as default};
