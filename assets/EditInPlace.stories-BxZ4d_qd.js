import{j as m}from"./jsx-runtime-CexXSJP5.js";import{E as l,a as v}from"./Search-s2W2vuHo.js";import{w as c,u as a,e as d}from"./index-BSM_bQPn.js";import"./index-BP8_t0zE.js";import"./index-CSpfAsmC.js";import"./Action-JMYNzy5J.js";import"./Text-Cz5oMJIL.js";import"./index-Dn9bhuYh.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-vl_XNHfj.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./useId-DIHOOv91.js";import"./Tooltip-BZNLLHxc.js";import"./floating-ui.react-B-qURRA4.js";import"./Password-B9k2Af8o.js";import"./visibility-on-CjnqbRsU.js";import"./MFA-1X7uPcX5.js";import"./Checkbox-C46Ejh3M.js";import"./check-DrA_wPr-.js";import"./Radio-CvV1BscZ.js";import"./Toggle-Q78m7eTC.js";import"./close-BapqxG5D.js";import"./search-BC9ffyhQ.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-iukP6Ype.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-kO35A4tX.js";import"./Text-43GasnQW.js";import"./Typography-BWOtt-hZ.js";import"./IconButton-DWB0NNu-.js";import"./IndicatorIcon-B59qELJf.js";import"./Avatar-OPpxc4CT.js";import"./AvatarStack-Ba__udwu.js";import"./Badge-CDnfCw2C.js";import"./ContextMenu-C02nebHs.js";import"./index-CTpxkypK.js";import"./FloatingMenu-CL2la2kV.js";import"./DrawerMenu-BgyYdqxq.js";import"./MenuItem-DakIqoyJ.js";import"./chevron-right-CaLdGLa3.js";import"./Glass-COqtBFQM.js";import"./Heading-DUAGg0Hg.js";import"./Link-CCSCFCbW.js";import"./NavItem-CCdVkP0k.js";import"./Menu-0jcVIraJ.js";import"./Progress-D6LZLfTs.js";import"./Separator-CPGib7Ah.js";import"./ToggleMenuItem-BC_hGi6M.js";import"./ReleaseAnnouncement-Dsr75Ow7.js";import"./Toast-BFUH-DR1.js";/* empty css               */import"./index-C8k3Z-3Y.js";const ye={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
