import{j as m}from"./jsx-runtime-CexXSJP5.js";import{E as l,a as v}from"./Search-vaJfvP-p.js";import{w as c,u as a,e as d}from"./index-BSM_bQPn.js";import"./index-BP8_t0zE.js";import"./index-BSFQGMYZ.js";import"./Action-BnHPbiOZ.js";import"./Text-BpUtDsRn.js";import"./index-DA5mkyhX.js";import"./extends-CF3RwP-h.js";import"./index-DG4CWwun.js";import"./index-BvxdkTda.js";import"./useId-DIHOOv91.js";import"./Tooltip-Ci0GGlGn.js";import"./floating-ui.react-BampJf39.js";import"./Password-BOcbW_8L.js";import"./visibility-on-CjnqbRsU.js";import"./MFA-CXKePhxN.js";import"./Checkbox-BHW8qkwR.js";import"./check-DrA_wPr-.js";import"./Radio-CFt7gJUV.js";import"./Toggle-BlCbqmZl.js";import"./close-BapqxG5D.js";import"./search-BC9ffyhQ.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-BLPDHEoz.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-CRpBfD9a.js";import"./Text-BbTw4EGb.js";import"./Typography-Du42WgpX.js";import"./IconButton-DWF2dIdC.js";import"./IndicatorIcon-BAe7lg0o.js";import"./Avatar-BSTe3LpV.js";import"./AvatarStack-DkNfjvk5.js";import"./Badge-CVqqsKU2.js";import"./ContextMenu-D7YbtuQ_.js";import"./index-CHUZ5_qD.js";import"./index-vl_XNHfj.js";import"./index-Dp4tTk3o.js";import"./index-ChBlSHh4.js";import"./FloatingMenu-Bh96dAM3.js";import"./DrawerMenu-DPEIp9Qb.js";import"./MenuItem-DyAc03nM.js";import"./chevron-right-CaLdGLa3.js";import"./Glass-CSik8Dag.js";import"./Heading-BJzoNNuu.js";import"./Link-zrkAu2Ho.js";import"./NavItem-BeIhRN_Q.js";import"./Menu-Cecy--r7.js";import"./Progress-CXZoBeWb.js";import"./Separator-DGFWAXNA.js";import"./ToggleMenuItem-CJljrQdD.js";import"./ReleaseAnnouncement-DES3rrHS.js";import"./Toast-DFHCLnMH.js";/* empty css               */import"./index-C8k3Z-3Y.js";const be={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
