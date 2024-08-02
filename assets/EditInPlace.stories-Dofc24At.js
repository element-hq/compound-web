import{j as m}from"./jsx-runtime-CexXSJP5.js";import{E as l,a as v}from"./Search-DU2_4xTs.js";import{w as c,u as a,e as d}from"./index-BSM_bQPn.js";import"./index-BP8_t0zE.js";import"./index-CSpfAsmC.js";import"./Action-CWepeJGG.js";import"./Text-Cz5oMJIL.js";import"./index-Dn9bhuYh.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-vl_XNHfj.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./useId-DIHOOv91.js";import"./Tooltip-D3X7zSTe.js";import"./floating-ui.react-B-qURRA4.js";import"./Password-CGBCIgRd.js";import"./visibility-on-CjnqbRsU.js";import"./MFA-QkHhz391.js";import"./Checkbox-C46Ejh3M.js";import"./check-DrA_wPr-.js";import"./Radio-CvV1BscZ.js";import"./Toggle-Q78m7eTC.js";import"./close-BapqxG5D.js";import"./search-BC9ffyhQ.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-iukP6Ype.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-ydgRwkxX.js";import"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";import"./IconButton-D6wkAs9e.js";import"./IndicatorIcon-_PMFIuo8.js";import"./Avatar-DyB-Y6ln.js";import"./AvatarStack-DBPldPV8.js";import"./Badge-Cf9Fivpi.js";import"./ContextMenu-DSLkIwBW.js";import"./index-CTpxkypK.js";import"./FloatingMenu-t36h7pay.js";import"./DrawerMenu-BgyYdqxq.js";import"./MenuItem-CDXjHeqL.js";import"./chevron-right-CaLdGLa3.js";import"./Glass-COqtBFQM.js";import"./Heading-DqG7uK5Y.js";import"./Link-DttFLitk.js";import"./NavItem-CCdVkP0k.js";import"./Menu-RL6tnMSQ.js";import"./Progress-CTwHYCo_.js";import"./Separator-MYmqMLpp.js";import"./ToggleMenuItem-BlWhluwa.js";import"./ReleaseAnnouncement-ViECv-cV.js";import"./Toast-BFUH-DR1.js";/* empty css               */import"./index-C8k3Z-3Y.js";const ye={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const be=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,be as __namedExportsOrder,ye as default};
