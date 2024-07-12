import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as l}from"./index-Cu9bd8lq.js";import{S as p}from"./user-profile-CB1AInEY.js";import{S as m,a as u,b as g}from"./leave-ZJppWO3C.js";import{M as r}from"./Menu-C5GIh1Nt.js";import{M as n}from"./MenuItem-w6vXgVqw.js";import{S}from"./Separator-WhFrIW3T.js";import{B as I}from"./Button-BUToQOmF.js";import"./index-yeRPabPH.js";import"./index-CcE1NYMq.js";import"./index-B2VpcjXg.js";import"./index-CEUj4GHJ.js";import"./index-s2Ee__EW.js";import"./extends-DhVGKg3b.js";import"./index-_X4q1Xs8.js";import"./FloatingMenu-CRmLyRDS.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./Text-kGdW88BP.js";import"./Typography-1hAQHuSf.js";import"./DrawerMenu-r2v5qmrO.js";import"./floating-ui.react-D5UUZX8q.js";import"./UnstyledButton-CUaD5tB8.js";const R={title:"Menu",component:r,tags:["autodocs"],argTypes:{},args:{}},a=i=>{const[s,c]=l.useState(!0);return e.jsxs(r,{...i,open:s,onOpenChange:c,trigger:e.jsx(I,{children:"Open menu"}),align:"start",children:[e.jsx(n,{Icon:p,label:"Profile",onSelect:()=>{}}),e.jsx(n,{Icon:m,label:"Notifications",onSelect:()=>{}}),e.jsx(n,{Icon:u,label:"Feedback",onSelect:()=>{}}),e.jsx(S,{}),e.jsx(n,{kind:"critical",Icon:g,label:"Sign out",onSelect:()=>{}})]})},t=a.bind({});t.args={title:"Today's Menu"};const o=a.bind({});o.args={title:"Untitled Menu",showTitle:!1};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <MenuComponent {...args} open={open} onOpenChange={setOpen} trigger={<Button>Open menu</Button>} align="start">
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </MenuComponent>;
}`,...o.parameters?.docs?.source}}};const $=["Menu","WithoutTitle"];export{t as Menu,o as WithoutTitle,$ as __namedExportsOrder,R as default};
