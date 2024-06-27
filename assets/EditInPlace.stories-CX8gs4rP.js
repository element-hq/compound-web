import{j as m}from"./jsx-runtime-DoxjgJx5.js";import{E as l,a as v}from"./Search-DMRy-anq.js";import{w as c,u as a,e as d}from"./index-B-6fpdcS.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Action-D3kc_YnM.js";import"./Text-4w3_4lhY.js";import"./index-CLjJe-Lm.js";import"./index-Cmw95SmN.js";import"./index-tFWdirwu.js";import"./index-BHpG8fra.js";import"./index-s2Ee__EW.js";import"./useId-D5m2XpUu.js";import"./Tooltip-BpTSfUbF.js";import"./floating-ui.react-D5UUZX8q.js";import"./Password-JmlbaIo5.js";import"./visibility-on-BrkRTjSX.js";import"./MFA-CTfASJTF.js";import"./Checkbox-24zwpgpd.js";import"./check-CXsFGzWm.js";import"./Radio-UDuulrdd.js";import"./Toggle-DF6sfyIf.js";import"./close-D55JIkKE.js";import"./Alert-CONg58U6.js";import"./Text-DCibjNNg.js";import"./Typography-D-74lRMS.js";import"./Button-BPkQI5Wr.js";import"./UnstyledButton-CUaD5tB8.js";import"./IconButton-Dd7bS9VQ.js";import"./IndicatorIcon-iinDG_Nf.js";import"./InlineSpinner-CZEeBvQo.js";import"./Avatar-D_h5K73j.js";import"./AvatarStack-zKeD_o_3.js";import"./Badge-DhRzaND9.js";import"./ContextMenu-DzJTThZa.js";import"./index-H3MR2rqV.js";import"./index-ChiipFpT.js";import"./FloatingMenu-BxFYcaYT.js";import"./DrawerMenu-BYj777Pr.js";import"./MenuItem-CykI4Oi1.js";import"./Glass-CwZVZZDo.js";import"./Heading-Bj7GMP5j.js";import"./Link-DCPbMbAN.js";import"./Menu-Ba5Xv7WP.js";import"./search-CWkX64tk.js";import"./Separator-D0l5BZ7R.js";import"./ToggleMenuItem-D2Q1tfYc.js";import"./ReleaseAnnouncement-DiJEEtE4.js";import"./Toast-DiTTZX7x.js";/* empty css               */import"./index-CVRyq5ci.js";const ue={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ve=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,ve as __namedExportsOrder,ue as default};
