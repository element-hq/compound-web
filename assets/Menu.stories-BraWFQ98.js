import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as l}from"./index-Cu9bd8lq.js";import{S as p}from"./user-profile-CB1AInEY.js";import{S as m,a as u,b as g}from"./leave-ZJppWO3C.js";import{M as r}from"./Menu-Hxy2XXUy.js";import{M as o}from"./MenuItem-CjxlTIiG.js";import{S}from"./Separator-D9goDqil.js";import{B as I}from"./Button-Yybe91ei.js";import"./index-Cmw95SmN.js";import"./index-tFWdirwu.js";import"./index-ChiipFpT.js";import"./index-BHpG8fra.js";import"./index-s2Ee__EW.js";import"./index-H3MR2rqV.js";import"./FloatingMenu-Eb22vTDs.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./Text-BrcN_buA.js";import"./Typography-BcgMUEGb.js";import"./DrawerMenu-BYj777Pr.js";import"./floating-ui.react-D5UUZX8q.js";import"./UnstyledButton-CUaD5tB8.js";const w={title:"Menu",component:r,tags:["autodocs"],argTypes:{},args:{}},a=s=>{const[i,c]=l.useState(!0);return e.jsxs(r,{...s,open:i,onOpenChange:c,trigger:e.jsx(I,{children:"Open menu"}),align:"start",children:[e.jsx(o,{Icon:p,label:"Profile",onSelect:()=>{}}),e.jsx(o,{Icon:m,label:"Notifications",onSelect:()=>{}}),e.jsx(o,{Icon:u,label:"Feedback",onSelect:()=>{}}),e.jsx(S,{}),e.jsx(o,{kind:"critical",Icon:g,label:"Sign out",onSelect:()=>{}})]})},t=a.bind({});t.args={title:"Today's Menu"};const n=a.bind({});n.args={title:"Untitled Menu",showTitle:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...n.parameters?.docs?.source}}};const R=["Menu","WithoutTitle"];export{t as Menu,n as WithoutTitle,R as __namedExportsOrder,w as default};