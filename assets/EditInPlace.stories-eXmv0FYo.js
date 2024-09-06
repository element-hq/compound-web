import{j as l}from"./jsx-runtime-CexXSJP5.js";import{E as m,a as d}from"./EditInPlace-Bn1xRqMB.js";import{w as c,u as a,e as v}from"./index-BSM_bQPn.js";import{T as g}from"./Tooltip-CQBcxN9Y.js";import"./index-BP8_t0zE.js";import"./index-Dn9bhuYh.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-vl_XNHfj.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./check-Bjchr0Ec.js";import"./close-D4bMmhFz.js";import"./Action-s7Caf6WB.js";import"./index-CSpfAsmC.js";import"./Text-Cz5oMJIL.js";import"./useId-DIHOOv91.js";import"./Password-9fm3sf2n.js";import"./visibility-on-D1sVPsTi.js";import"./MFA-QkHhz391.js";import"./Checkbox-Ch9dGUQd.js";import"./Radio-CvV1BscZ.js";import"./Toggle-Q78m7eTC.js";import"./search-BC9ffyhQ.js";import"./error-Dmbc84hO.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-C0_Ps78g.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-tS7NCe3X.js";import"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";import"./IconButton-DpFGYH0l.js";import"./IndicatorIcon-_PMFIuo8.js";import"./Avatar-DyB-Y6ln.js";import"./AvatarStack-DBPldPV8.js";import"./Badge-Cf9Fivpi.js";import"./ContextMenu-atZ_dKnN.js";import"./index-DOPlf36I.js";import"./floating-ui.react-KXiqSXy2.js";import"./FloatingMenu-t36h7pay.js";import"./DrawerMenu-BgyYdqxq.js";import"./MenuItem-CmF0V73j.js";import"./chevron-right-DF47_mtr.js";import"./Glass-COqtBFQM.js";import"./Heading-DqG7uK5Y.js";import"./Link-DttFLitk.js";import"./NavItem-CCdVkP0k.js";import"./Menu-H7LLfzYQ.js";import"./Progress-CTwHYCo_.js";import"./Separator-gTPqRITt.js";import"./ToggleMenuItem-B05vJNUm.js";import"./ReleaseAnnouncement-BYL7854Q.js";import"./Toast-BFUH-DR1.js";import"./Dropdown-BSdLZXLc.js";import"./chevron-down-Ua1BCmcD.js";/* empty css               */import"./index-C8k3Z-3Y.js";const he={title:"Form/Controls/EditInPlace",component:m,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>l.jsx(g,{children:l.jsx(m,{...e})}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=c(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=c(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await v(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:l.jsx(d,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const we=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,we as __namedExportsOrder,he as default};
