import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-B_0iYUWB.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{t as r}from"./dist-jlgopDWl.js";import{i,r as a}from"./Tooltip-DtK5d9eg.js";import{n as o,t as s}from"./EditInPlace-DrtoGFiY.js";import{r as c,s as l}from"./InlineField-CHeg7AET.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),s(),r(),l(),i(),u=n(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Form/Controls/EditInPlace`,component:o,tags:[`autodocs`],parameters:{controls:{include:[`onChange`,`onSave`,`onCancel`,`onClearServerErrors`,`defaultValue`,`error`,`serverInvalid`,`savedLabel`,`saveButtonLabel`,`cancelButtonLabel`,`helpLabel`,`disabled`]},design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0`}},argTypes:{label:{type:`string`},defaultValue:{type:`string`},onChange:{action:`changed`},onCancel:{action:`cancelled`},onClearServerErrors:{action:`cleared server errors`},serverInvalid:{type:`boolean`},helpLabel:{type:`string`},savedLabel:{type:`string`},saveButtonLabel:{type:`string`},savingLabel:{type:`string`},cancelButtonLabel:{type:`string`},disabled:{type:`boolean`}},render:({...e})=>(0,u.jsx)(a,{children:(0,u.jsx)(o,{...e})}),args:{label:`Label`,onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:`Saved`,saveButtonLabel:`Save`,cancelButtonLabel:`Cancel`,savingLabel:`Saving…`}},h={},g={args:{defaultValue:`Hello, Computer`},play:async({canvasElement:e})=>{let t=p(e).getByRole(`textbox`);await f.clear(t),await f.type(t,`Hello, Computer`)}},_={tags:[`axe-exclude`],args:{defaultValue:`Hello`,onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`textbox`);await f.clear(n),await f.type(n,`Hello`);let r=t.getByRole(`button`,{name:`Save`});await f.click(r),await d(t.getByText(`Saving…`)).toBeInTheDocument()}},v={args:{serverInvalid:!0,children:(0,u.jsx)(c,{children:`I am a teapot`})}},y={args:{helpLabel:`Optional help text.`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ["axe-exclude"],
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    serverInvalid: true,
    children: <ErrorMessage>I am a teapot</ErrorMessage>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  }
}`,...y.parameters?.docs?.source}}},b=[`Empty`,`WithText`,`Saving`,`WithError`,`WithHelpText`]}))();export{h as Empty,_ as Saving,v as WithError,y as WithHelpText,g as WithText,b as __namedExportsOrder,m as default};