import{j as e}from"./jsx-runtime-CexXSJP5.js";import{U as i}from"./user-profile-EvkA4CON.js";import{N as s,C as a,L as c}from"./notifications-MBLL4uPX.js";import{C as o}from"./ContextMenu-atZ_dKnN.js";import{M as n}from"./MenuItem-CmF0V73j.js";import{S as l}from"./Separator-DLPJ0xlb.js";import"./index-BP8_t0zE.js";import"./index-DD7XHAoh.js";import"./index-vl_XNHfj.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./index-Dp4tTk3o.js";import"./index-DOPlf36I.js";import"./floating-ui.react-KXiqSXy2.js";import"./FloatingMenu-t36h7pay.js";import"./index-CSpfAsmC.js";import"./useId-DIHOOv91.js";import"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";import"./DrawerMenu-BgyYdqxq.js";import"./chevron-right-DF47_mtr.js";const L={title:"Menu/ContextMenu",component:o,tags:["autodocs"],argTypes:{},args:{}},m=r=>e.jsxs(o,{...r,title:"Settings",trigger:e.jsx("div",{style:{borderRadius:24,background:"var(--cpd-color-bg-subtle-secondary)",inlineSize:300,blockSize:200,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:32,boxSizing:"border-box"},children:"Right click or long press to open menu"}),hasAccessibleAlternative:!1,children:[e.jsx(n,{Icon:i,label:"Profile",onSelect:()=>{}}),e.jsx(n,{Icon:s,label:"Notifications",onSelect:()=>{}}),e.jsx(n,{Icon:a,label:"Feedback",onSelect:()=>{}}),e.jsx(l,{}),e.jsx(n,{kind:"critical",Icon:c,label:"Sign out",onSelect:()=>{}})]}),t=m.bind({});t.args={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};const U=["ContextMenu"];export{t as ContextMenu,U as __namedExportsOrder,L as default};