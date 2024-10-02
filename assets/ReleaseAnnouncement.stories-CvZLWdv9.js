import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{B as l}from"./Button-C0_Ps78g.js";import"./IconButton-6M-3OOYo.js";import{R as p}from"./ReleaseAnnouncement-D5EEg6rz.js";import"./index-CSpfAsmC.js";import"./UnstyledButton-C9fNLva5.js";import"./IndicatorIcon-_PMFIuo8.js";import"./Tooltip-DnZZBEQi.js";import"./floating-ui.react-DsCqWC0H.js";import"./index-Cw6ikIwd.js";import"./Text-43GasnQW.js";import"./Typography-BWOtt-hZ.js";const w={title:"Release Announcement",component:p,tags:["autodocs"],argTypes:{},args:{header:"Notifications have moved",description:"From now on, click the icon here to view your notifications.",placement:"right",closeLabel:"Ok"}},s=c=>{const[i,r]=u.useState(!0);return a.jsx(p,{...c,open:i,onClick:()=>r(!1),children:a.jsx(l,{onClick:()=>r(m=>!m),children:"Open menu"})})},e=s.bind({});e.args={};const n=s.bind({});n.args={header:"A multi line header which is taking multiple lines",description:"A multi line description which is taking multiple lines. The OK button should be vertically centred."};const o=s.bind({});o.args={placement:"bottom"};const t=s.bind({});t.args={displayArrow:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(true);
  return <ReleaseAnnouncementComponent {...args} open={open} onClick={() => setOpen(false)}>
      <Button onClick={() => setOpen(_open => !_open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>;
}`,...t.parameters?.docs?.source}}};const x=["Default","MultiLinesContent","BottomPlacement","NoArrow"];export{o as BottomPlacement,e as Default,n as MultiLinesContent,t as NoArrow,x as __namedExportsOrder,w as default};
