import{j as r}from"./jsx-runtime-DoxjgJx5.js";import{r as m}from"./index-Cu9bd8lq.js";import{B as u}from"./Button-BPkQI5Wr.js";import"./IconButton-j0Nfr_Qv.js";import{R as a}from"./ReleaseAnnouncement-p4ipVr5n.js";import"./index-C2KoGaFq.js";import"./UnstyledButton-CUaD5tB8.js";import"./IndicatorIcon-iinDG_Nf.js";import"./floating-ui.react-C9uQe9t5.js";import"./index-MTP5U5xA.js";import"./Text-BrcN_buA.js";import"./Typography-BcgMUEGb.js";const b={title:"Release Announcement",component:a,tags:["autodocs"],argTypes:{},args:{header:"Notifications have moved",description:"From now on, click the icon here to view your notifications.",placement:"right",closeLabel:"Ok"}},o=p=>{const[i,s]=m.useState(!0);return r.jsx(a,{...p,open:i,onClick:()=>s(!1),children:r.jsx(u,{onClick:()=>s(c=>!c),children:"Open menu"})})},e=o.bind({});e.args={};const n=o.bind({});n.args={header:"A multi line header which is taking multiple lines",description:"A multi line description which is taking multiple lines. The OK button should be vertically centred."};const t=o.bind({});t.args={placement:"bottom"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};const x=["Default","MultiLinesContent","BottomPlacement"];export{t as BottomPlacement,e as Default,n as MultiLinesContent,x as __namedExportsOrder,b as default};
