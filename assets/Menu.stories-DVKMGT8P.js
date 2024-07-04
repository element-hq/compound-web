import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as l}from"./index-Cu9bd8lq.js";import{S as p}from"./user-profile-CB1AInEY.js";import{S as m,a as u,b as g}from"./leave-ZJppWO3C.js";import{M as r}from"./Menu-DAEcuzUw.js";import{M as o}from"./MenuItem-DC_cEudJ.js";import{S}from"./Separator-243SrNoD.js";import{B as I}from"./Button-BUToQOmF.js";import"./index-n8rlHWvF.js";import"./index-B2VpcjXg.js";import"./index-s2Ee__EW.js";import"./extends-DhVGKg3b.js";import"./index-_X4q1Xs8.js";import"./FloatingMenu-AlLZwHuz.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./Text-CFqa5qYe.js";import"./Typography-D4-afh9Z.js";import"./DrawerMenu-BYj777Pr.js";import"./floating-ui.react-DRrg5oqz.js";import"./UnstyledButton-CUaD5tB8.js";const W={title:"Menu",component:r,tags:["autodocs"],argTypes:{},args:{}},a=s=>{const[i,c]=l.useState(!0);return e.jsxs(r,{...s,open:i,onOpenChange:c,trigger:e.jsx(I,{children:"Open menu"}),align:"start",children:[e.jsx(o,{Icon:p,label:"Profile",onSelect:()=>{}}),e.jsx(o,{Icon:m,label:"Notifications",onSelect:()=>{}}),e.jsx(o,{Icon:u,label:"Feedback",onSelect:()=>{}}),e.jsx(S,{}),e.jsx(o,{kind:"critical",Icon:g,label:"Sign out",onSelect:()=>{}})]})},t=a.bind({});t.args={title:"Today's Menu"};const n=a.bind({});n.args={title:"Untitled Menu",showTitle:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}};const w=["Menu","WithoutTitle"];export{t as Menu,n as WithoutTitle,w as __namedExportsOrder,W as default};
