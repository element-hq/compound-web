import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{U as p}from"./user-profile-EvkA4CON.js";import{N as m,C as u,L as I}from"./notifications-MBLL4uPX.js";import{M as r}from"./Menu-DHOXlLgL.js";import{M as t}from"./MenuItem-B7JmuVZQ.js";import{S as g}from"./Separator-BuyJc6J7.js";import{B as S}from"./Button-DgWOmrd7.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-vl_XNHfj.js";import"./index-DOPlf36I.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./floating-ui.react-KXiqSXy2.js";import"./FloatingMenu-CL2la2kV.js";import"./index-CSpfAsmC.js";import"./useId-DIHOOv91.js";import"./Text-43GasnQW.js";import"./Typography-BWOtt-hZ.js";import"./DrawerMenu-BgyYdqxq.js";import"./chevron-right-DF47_mtr.js";import"./UnstyledButton-C9fNLva5.js";const R={title:"Menu",component:r,tags:["autodocs"],argTypes:{},args:{}},a=s=>{const[i,c]=l.useState(!0);return e.jsxs(r,{...s,open:i,onOpenChange:c,trigger:e.jsx(S,{children:"Open menu"}),align:"start",children:[e.jsx(t,{Icon:p,label:"Profile",onSelect:()=>{}}),e.jsx(t,{Icon:m,label:"Notifications",onSelect:()=>{}}),e.jsx(t,{Icon:u,label:"Feedback",onSelect:()=>{}}),e.jsx(g,{}),e.jsx(t,{kind:"critical",Icon:I,label:"Sign out",onSelect:()=>{}})]})},n=a.bind({});n.args={title:"Today's Menu"};const o=a.bind({});o.args={title:"Untitled Menu",showTitle:!1};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...o.parameters?.docs?.source}}};const $=["Menu","WithoutTitle"];export{n as Menu,o as WithoutTitle,$ as __namedExportsOrder,R as default};
