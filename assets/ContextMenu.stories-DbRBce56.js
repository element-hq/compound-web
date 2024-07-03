import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{S as i}from"./user-profile-CB1AInEY.js";import{S as s,a,b as c}from"./leave-ZJppWO3C.js";import{C as o}from"./ContextMenu-Bphw9l-j.js";import{M as n}from"./MenuItem-C3kYcHjL.js";import{S as l}from"./Separator-D8gjKPDD.js";import"./index-Cu9bd8lq.js";import"./index-CjTrpfS1.js";import"./index-B2VpcjXg.js";import"./index-s2Ee__EW.js";import"./extends-DhVGKg3b.js";import"./index-_X4q1Xs8.js";import"./FloatingMenu-Eb22vTDs.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./Text-BrcN_buA.js";import"./Typography-BcgMUEGb.js";import"./DrawerMenu-BYj777Pr.js";import"./floating-ui.react-DRrg5oqz.js";const R={title:"Menu/ContextMenu",component:o,tags:["autodocs"],argTypes:{},args:{}},m=r=>e.jsxs(o,{...r,title:"Settings",trigger:e.jsx("div",{style:{borderRadius:24,background:"var(--cpd-color-bg-subtle-secondary)",inlineSize:300,blockSize:200,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:32,boxSizing:"border-box"},children:"Right click or long press to open menu"}),hasAccessibleAlternative:!1,children:[e.jsx(n,{Icon:i,label:"Profile",onSelect:()=>{}}),e.jsx(n,{Icon:s,label:"Notifications",onSelect:()=>{}}),e.jsx(n,{Icon:a,label:"Feedback",onSelect:()=>{}}),e.jsx(l,{}),e.jsx(n,{kind:"critical",Icon:c,label:"Sign out",onSelect:()=>{}})]}),t=m.bind({});t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  return <ContextMenuComponent {...args} title="Settings" trigger={<div style={{
    borderRadius: 24,
    background: "var(--cpd-color-bg-subtle-secondary)",
    inlineSize: 300,
    blockSize: 200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    boxSizing: "border-box"
  }}>
          Right click or long press to open menu
        </div>} hasAccessibleAlternative={false}>
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={NotificationsIcon} label="Notifications" onSelect={() => {}} />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem kind="critical" Icon={LeaveIcon} label="Sign out" onSelect={() => {}} />
    </ContextMenuComponent>;
}`,...t.parameters?.docs?.source}}};const N=["ContextMenu"];export{t as ContextMenu,N as __namedExportsOrder,R as default};
