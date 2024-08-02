import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{B as u}from"./Button-iukP6Ype.js";import"./IconButton-B43clWNp.js";import{R as a}from"./ReleaseAnnouncement-CgDHpKLk.js";import"./index-CSpfAsmC.js";import"./UnstyledButton-C9fNLva5.js";import"./IndicatorIcon-_PMFIuo8.js";import"./Tooltip-DCOt0Zqn.js";import"./floating-ui.react-4qK1KPOR.js";import"./index-Cw6ikIwd.js";import"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";const x={title:"Release Announcement",component:a,tags:["autodocs"],argTypes:{},args:{header:"Notifications have moved",description:"From now on, click the icon here to view your notifications.",placement:"right",closeLabel:"Ok"}},o=p=>{const[i,s]=m.useState(!0);return r.jsx(a,{...p,open:i,onClick:()=>s(!1),children:r.jsx(u,{onClick:()=>s(c=>!c),children:"Open menu"})})},e=o.bind({});e.args={};const n=o.bind({});n.args={header:"A multi line header which is taking multiple lines",description:"A multi line description which is taking multiple lines. The OK button should be vertically centred."};const t=o.bind({});t.args={placement:"bottom"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...t.parameters?.docs?.source}}};const S=["Default","MultiLinesContent","BottomPlacement"];export{t as BottomPlacement,e as Default,n as MultiLinesContent,S as __namedExportsOrder,x as default};
