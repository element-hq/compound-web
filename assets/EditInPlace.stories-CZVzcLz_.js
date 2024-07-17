import{j as m}from"./jsx-runtime-CexXSJP5.js";import{E as l,a as v}from"./Search-DAFNOTHJ.js";import{w as c,u as a,e as d}from"./index-BSM_bQPn.js";import"./index-BP8_t0zE.js";import"./index-BSFQGMYZ.js";import"./Action-BbkCfKKe.js";import"./Text-BpUtDsRn.js";import"./index-DA5mkyhX.js";import"./extends-CF3RwP-h.js";import"./index-DG4CWwun.js";import"./index-BvxdkTda.js";import"./useId-DIHOOv91.js";import"./Tooltip-D9iS9LOc.js";import"./floating-ui.react-BampJf39.js";import"./Password-BBBeuWEE.js";import"./visibility-on-mD4cgeZZ.js";import"./MFA-BcsE-4m7.js";import"./Checkbox-CobtHQXn.js";import"./check-C0YOU8gr.js";import"./Radio-CFt7gJUV.js";import"./Toggle-BlCbqmZl.js";import"./close-LsILEpZ9.js";import"./search-B4wGXzoL.js";import"./InlineSpinner-Cuwfqkh1.js";import"./spinner-BbkoBCjI.js";import"./Button-BLPDHEoz.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-D-o-J2Oc.js";import"./Text-DQA-v0me.js";import"./Typography-DW1jQAHD.js";import"./IconButton-BDC83b00.js";import"./IndicatorIcon-yC0g9ajQ.js";import"./Avatar-Bzl0WR0v.js";import"./AvatarStack-Bcn5PWWK.js";import"./Badge-DERiemOv.js";import"./ContextMenu-CXgItuXf.js";import"./index-CHUZ5_qD.js";import"./index-vl_XNHfj.js";import"./index-Dp4tTk3o.js";import"./index-ChBlSHh4.js";import"./FloatingMenu-ChdMoh_x.js";import"./DrawerMenu-DPEIp9Qb.js";import"./MenuItem-CpQapiyZ.js";import"./chevron-right-D0A4MQny.js";import"./Glass-CSik8Dag.js";import"./Heading-BzQEB82_.js";import"./Link-H_Ar01eM.js";import"./NavItem-BeIhRN_Q.js";import"./Menu-el2Xm1kX.js";import"./Progress-kAo68Ncz.js";import"./Separator-YkkwOwd9.js";import"./ToggleMenuItem-C_rv3t5W.js";import"./ReleaseAnnouncement-CczbywAg.js";import"./Toast-DFHCLnMH.js";/* empty css               */import"./index-C8k3Z-3Y.js";const be={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello, Computer"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Hello, Computer");
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Hello",
    onSave: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Hello");
    const save = canvas.getByRole("button", {
      name: "Save"
    });
    await userEvent.click(save);
    await expect(canvas.getByText("Saving…")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    serverInvalid: true,
    children: <ErrorMessage>I am a teapot</ErrorMessage>
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  }
}`,...p.parameters?.docs?.source}}};const Ee=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,Ee as __namedExportsOrder,be as default};
