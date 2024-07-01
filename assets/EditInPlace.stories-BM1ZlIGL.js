import{j as c}from"./jsx-runtime-DoxjgJx5.js";import{E as l,a as v}from"./Search-DLjrrfN2.js";import{w as m,u as a,e as d}from"./index-B-6fpdcS.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Action-B6RLn1A4.js";import"./Text-DD0XOzYS.js";import"./index-BmT6I48N.js";import"./extends-CF3RwP-h.js";import"./index-s2Ee__EW.js";import"./useId-D5m2XpUu.js";import"./Tooltip-BXywdbkR.js";import"./floating-ui.react-DRrg5oqz.js";import"./Password-DfO7W_Rt.js";import"./visibility-on-BrkRTjSX.js";import"./MFA-igl6gjG9.js";import"./Checkbox-CaQY2e7j.js";import"./check-CXsFGzWm.js";import"./Radio-Ck_PSuWE.js";import"./Toggle-CDHqfjSy.js";import"./close-D55JIkKE.js";import"./Alert-BuXpW77I.js";import"./Text-kGdW88BP.js";import"./Typography-1hAQHuSf.js";import"./Button-BPkQI5Wr.js";import"./UnstyledButton-CUaD5tB8.js";import"./IconButton-Bju1gPaN.js";import"./IndicatorIcon-a_EsC0Go.js";import"./InlineSpinner-CZEeBvQo.js";import"./Avatar-CtfIy4av.js";import"./AvatarStack-CW3nt8pe.js";import"./Badge-DVGvppqm.js";import"./ContextMenu-OGsvAE6D.js";import"./index-DxIrD-82.js";import"./index-B2VpcjXg.js";import"./Separator-DoybTZWY.js";import"./index-CwP7MxYe.js";import"./FloatingMenu-CRmLyRDS.js";import"./DrawerMenu-BYj777Pr.js";import"./MenuItem-CoMODTnX.js";import"./Glass-CwZVZZDo.js";import"./Heading-l8bpqp5t.js";import"./Link-Do2tSqaM.js";import"./Menu-nWyLoAyZ.js";import"./search-CWkX64tk.js";import"./ToggleMenuItem-8hUo7RTE.js";import"./ReleaseAnnouncement-KE5jvHw0.js";import"./Toast-DiTTZX7x.js";/* empty css               */import"./index-CVRyq5ci.js";const me={title:"Form/Controls/EditInPlace",component:l,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>c.jsx(l,{...e}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},o={},n={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const t=m(e).getByRole("textbox");await a.clear(t),await a.type(t,"Hello, Computer")}},s={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const r=m(e),t=r.getByRole("textbox");await a.clear(t),await a.type(t,"Hello");const u=r.getByRole("button",{name:"Save"});await a.click(u),await d(r.getByText("Saving…")).toBeInTheDocument()}},i={args:{serverInvalid:!0,children:c.jsx(v,{children:"I am a teapot"})}},p={args:{helpLabel:"Optional help text."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ue=["Empty","WithText","Saving","WithError","WithHelpText"];export{o as Empty,s as Saving,i as WithError,p as WithHelpText,n as WithText,ue as __namedExportsOrder,me as default};
