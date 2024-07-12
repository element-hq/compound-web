import{j as m}from"./jsx-runtime-DoxjgJx5.js";import{E as l,a as v}from"./Search-B-e5C7CX.js";import{w as c,u as a,e as d}from"./index-B-6fpdcS.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Action-DsJFaPn7.js";import"./Text-DOGHqVyt.js";import"./index-C6FLQqRT.js";import"./extends-DhVGKg3b.js";import"./index-s2Ee__EW.js";import"./useId-D5m2XpUu.js";import"./Tooltip-ULVuzg2r.js";import"./floating-ui.react-D5UUZX8q.js";import"./Password-BLl8RpxT.js";import"./visibility-on-BrkRTjSX.js";import"./MFA-HL_02ReL.js";import"./Checkbox-2E2p-REM.js";import"./check-CXsFGzWm.js";import"./Radio-Ckv_MoIU.js";import"./Toggle-Bf6I5dOM.js";import"./close-D55JIkKE.js";import"./Alert-C6lzOPUn.js";import"./Text-kGdW88BP.js";import"./Typography-1hAQHuSf.js";import"./Button-BUToQOmF.js";import"./UnstyledButton-CUaD5tB8.js";import"./IconButton-BbdLINDl.js";import"./IndicatorIcon-iinDG_Nf.js";import"./InlineSpinner-CZEeBvQo.js";import"./Avatar-CtfIy4av.js";import"./AvatarStack-CW3nt8pe.js";import"./Badge-BWxP3093.js";import"./ContextMenu-wLSeK6p2.js";import"./index-yeRPabPH.js";import"./index-CcE1NYMq.js";import"./index-B2VpcjXg.js";import"./index-CEUj4GHJ.js";import"./index-_X4q1Xs8.js";import"./FloatingMenu-CRmLyRDS.js";import"./DrawerMenu-r2v5qmrO.js";import"./MenuItem-w6vXgVqw.js";import"./Glass-CwZVZZDo.js";import"./Heading-l8bpqp5t.js";import"./Link-DCPbMbAN.js";import"./NavItem-B0c6PAnD.js";import"./Menu-C5GIh1Nt.js";import"./Progress-DwuqmC5Q.js";import"./search-CWkX64tk.js";import"./Separator-WhFrIW3T.js";import"./ToggleMenuItem-_bXLtp_P.js";import"./ReleaseAnnouncement-B0g6gK7M.js";import"./Toast-DiTTZX7x.js";/* empty css               */import"./index-CVRyq5ci.js";const ge={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>m.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:m.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ye=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,ye as __namedExportsOrder,ge as default};
