import{j as u}from"./jsx-runtime-DoxjgJx5.js";import{E as m}from"./Search-Dco_6vuE.js";import{w as l,u as a,e as d}from"./index-B-6fpdcS.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Action-BJniBKiJ.js";import"./Text-Cr8eyvvV.js";import"./index-BEd8YfQ8.js";import"./index-Cmw95SmN.js";import"./index-tFWdirwu.js";import"./index-BHpG8fra.js";import"./index-s2Ee__EW.js";import"./useId-D5m2XpUu.js";import"./Tooltip-BpTSfUbF.js";import"./floating-ui.react-D5UUZX8q.js";import"./Password-BL0bK9Cg.js";import"./visibility-on-BrkRTjSX.js";import"./MFA-Bg-QQaLT.js";import"./Checkbox-UWXrg9ui.js";import"./check-CXsFGzWm.js";import"./Radio-DnV3u_Pm.js";import"./Toggle-CCZdSH3V.js";import"./close-D55JIkKE.js";import"./Alert-D-MUtyoA.js";import"./Text-BrcN_buA.js";import"./Typography-BcgMUEGb.js";import"./Button-Yybe91ei.js";import"./UnstyledButton-CUaD5tB8.js";import"./IconButton-GCNuw6ew.js";import"./IndicatorIcon-iinDG_Nf.js";import"./InlineSpinner-CZEeBvQo.js";import"./Avatar-D_h5K73j.js";import"./AvatarStack-zKeD_o_3.js";import"./Badge-C2aKwjRk.js";import"./ContextMenu-DezHmrk0.js";import"./index-H3MR2rqV.js";import"./index-ChiipFpT.js";import"./FloatingMenu-Eb22vTDs.js";import"./DrawerMenu-BYj777Pr.js";import"./MenuItem-BNN94JoD.js";import"./Glass-CwZVZZDo.js";import"./Heading-D0UD_l3r.js";import"./Link-DCPbMbAN.js";import"./Menu-BVPTPdCk.js";import"./search-CWkX64tk.js";import"./Separator-D0l5BZ7R.js";import"./ToggleMenuItem-IrFGmotN.js";import"./ReleaseAnnouncement-kJXVjrNP.js";import"./Toast-DiTTZX7x.js";/* empty css               */import"./index-CVRyq5ci.js";const ce={title:"Form/Controls/EditInPlace",component:m,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","defaultValue","error","savedLabel","saveButtonLabel","cancelButtonLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},error:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>u.jsx(m,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},r={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const o=l(e),t=o.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const c=o.getByRole("button",{name:"Save"});await a.click(c),await d(o.getByText("Saving…")).toBeInTheDocument()}},i={args:{error:"I am a teapot"}},p={args:{helpLabel:"Optional help text."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    error: "I am a teapot"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  }
}`,...p.parameters?.docs?.source}}};const ue=["Empty","WithText","Saving","WithError","WithHelpText"];export{r as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,ue as __namedExportsOrder,ce as default};
