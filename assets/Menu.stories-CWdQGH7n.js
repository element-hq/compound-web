import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as l}from"./index-Cu9bd8lq.js";import{U as p}from"./user-profile-DtRG5E1-.js";import{N as m,C as u,L as I}from"./notifications-CsnPVue7.js";import{M as r}from"./Menu-D9oSI7e5.js";import{M as n}from"./MenuItem-98kGf5zv.js";import{S as g}from"./Separator-cQ79fVAM.js";import{B as S}from"./Button-BPkQI5Wr.js";import"./index-CnJsbg5X.js";import"./index-CcE1NYMq.js";import"./index-B2VpcjXg.js";import"./index-CEUj4GHJ.js";import"./index-s2Ee__EW.js";import"./extends-DhVGKg3b.js";import"./index-D5jPnxf-.js";import"./FloatingMenu-BxFYcaYT.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./Text-DCibjNNg.js";import"./Typography-D-74lRMS.js";import"./DrawerMenu-r2v5qmrO.js";import"./chevron-right-DRUMXvCI.js";import"./floating-ui.react-D5UUZX8q.js";import"./UnstyledButton-CUaD5tB8.js";const $={title:"Menu",component:r,tags:["autodocs"],argTypes:{},args:{}},a=i=>{const[s,c]=l.useState(!0);return e.jsxs(r,{...i,open:s,onOpenChange:c,trigger:e.jsx(S,{children:"Open menu"}),align:"start",children:[e.jsx(n,{Icon:p,label:"Profile",onSelect:()=>{}}),e.jsx(n,{Icon:m,label:"Notifications",onSelect:()=>{}}),e.jsx(n,{Icon:u,label:"Feedback",onSelect:()=>{}}),e.jsx(g,{}),e.jsx(n,{kind:"critical",Icon:I,label:"Sign out",onSelect:()=>{}})]})},o=a.bind({});o.args={title:"Today's Menu"};const t=a.bind({});t.args={title:"Untitled Menu",showTitle:!1};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
