import{j as l}from"./jsx-runtime-CexXSJP5.js";import{E as m,a as d}from"./EditInPlace-Cs2zLc_6.js";import{w as c,u as a,e as v}from"./index-ozRUDpri.js";import{T as g}from"./Tooltip-D_O9JViv.js";import"./index-BP8_t0zE.js";import"./index-BugjtUKR.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-CcH3h_90.js";import"./index-BjHk5heU.js";import"./index-BlTQwN6S.js";import"./check-Bjchr0Ec.js";import"./close-D4bMmhFz.js";import"./Action-727FUtea.js";import"./index-CSpfAsmC.js";import"./Text-CbEoPjZC.js";import"./useId-DIHOOv91.js";import"./Password-XTK6WorY.js";import"./visibility-on-D1sVPsTi.js";import"./MFA-D9O_-CVJ.js";import"./Checkbox-D1pECWlH.js";import"./Radio-xCqHn8Eh.js";import"./Toggle-DqDpfLtf.js";import"./search-BC9ffyhQ.js";import"./error-Dmbc84hO.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-C0_Ps78g.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-D-biByT4.js";import"./Text-43GasnQW.js";import"./Typography-BWOtt-hZ.js";import"./IconButton-D0swx-SO.js";import"./IndicatorIcon-B59qELJf.js";import"./Avatar-OPpxc4CT.js";import"./AvatarStack-Ba__udwu.js";import"./Badge-CDnfCw2C.js";import"./ContextMenu-CKdVMkas.js";import"./index-BF9S1Jqn.js";import"./floating-ui.react-CWvUcNvr.js";import"./FloatingMenu-CL2la2kV.js";import"./DrawerMenu-BgyYdqxq.js";import"./MenuItem-B7JmuVZQ.js";import"./chevron-right-DF47_mtr.js";import"./Glass-COqtBFQM.js";import"./Heading-DUAGg0Hg.js";import"./Link-CCSCFCbW.js";import"./NavItem-CCdVkP0k.js";import"./Menu-BmJi1-74.js";import"./Progress-DsNNMz7s.js";import"./Separator-DhZpoFZg.js";import"./ToggleMenuItem-DZiMXthf.js";import"./ReleaseAnnouncement-C4KVtjLC.js";import"./Toast-BFUH-DR1.js";import"./Dropdown-CoygDPzy.js";import"./chevron-down-Ua1BCmcD.js";/* empty css               */const Ee={title:"Form/Controls/EditInPlace",component:m,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>l.jsx(g,{children:l.jsx(m,{...e})}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await v(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:l.jsx(d,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const he=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,he as __namedExportsOrder,Ee as default};
