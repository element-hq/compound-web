import{j as m}from"./jsx-runtime-DoxjgJx5.js";import{E as l,a as v}from"./Search-9m4oMi9i.js";import{w as c,u as a,e as d}from"./index-B-6fpdcS.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Action-CLcpE10y.js";import"./Text-DT5JRS9S.js";import"./index-DKbG0bj1.js";import"./extends-DhVGKg3b.js";import"./index-s2Ee__EW.js";import"./useId-D5m2XpUu.js";import"./Tooltip-BpTSfUbF.js";import"./floating-ui.react-D5UUZX8q.js";import"./Password-Bf2o8jT2.js";import"./visibility-on-CPVyCp5D.js";import"./MFA-CKAKPInK.js";import"./Checkbox-BdilkAqW.js";import"./check-C2HOlS1h.js";import"./Radio-Cc5Jo-u-.js";import"./Toggle-ZJYgkTo7.js";import"./close-Bexrj0gb.js";import"./search-2N9K5Dd1.js";import"./InlineSpinner-CMho_Rk3.js";import"./spinner-VY0Kw2FV.js";import"./Button-BPkQI5Wr.js";import"./UnstyledButton-CUaD5tB8.js";import"./Alert-CAYUdImW.js";import"./Text-BrcN_buA.js";import"./Typography-BcgMUEGb.js";import"./IconButton-DE5aHYqt.js";import"./IndicatorIcon-CVdpdEcx.js";import"./Avatar-D_h5K73j.js";import"./AvatarStack-zKeD_o_3.js";import"./Badge-CYnSY-vQ.js";import"./ContextMenu-gCeacBWJ.js";import"./index-CnJsbg5X.js";import"./index-CcE1NYMq.js";import"./index-B2VpcjXg.js";import"./index-CEUj4GHJ.js";import"./index-D5jPnxf-.js";import"./FloatingMenu-Eb22vTDs.js";import"./DrawerMenu-r2v5qmrO.js";import"./MenuItem-BCfVc93v.js";import"./chevron-right-DRUMXvCI.js";import"./Glass-CwZVZZDo.js";import"./Heading-D0UD_l3r.js";import"./Link-Do2tSqaM.js";import"./NavItem-B0c6PAnD.js";import"./Menu-MnT87Lec.js";import"./Progress-HdE7dnwC.js";import"./Separator-RJ3q-qnd.js";import"./ToggleMenuItem-BDzYTxLl.js";import"./ReleaseAnnouncement-BdzKeMXg.js";import"./Toast-DiTTZX7x.js";/* empty css               */import"./index-CVRyq5ci.js";const be={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
