import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-DgpG2w9i.js";import"./index-BfUtgIzr.js";import{L as A,S as K,H as Q,E as $}from"./Message-BZn1XDqc.js";import{a as I,T as G}from"./Tooltip-CogJYjeO.js";import{S as J,V as X}from"./index-CeZmZF5O.js";import{C as Z}from"./check-D01qBbnP.js";import{C as ee}from"./close-CxPUn26J.js";import{R as te}from"./Root-CC1YbCih.js";import{F as ae}from"./Field-BKiXN48k.js";import{L as ne}from"./Label-sHEurN-s.js";import{T as re}from"./Text-DBWgRY3m.js";import{B as R}from"./Button-DxdpmbU8.js";import"./preload-helper-PPVm8Dsz.js";import"./check-circle-solid-CmjUSnrP.js";import"./error-solid-BatX3XZq.js";import"./index-BPSjclFB.js";import"./InlineSpinner-DCvhExJE.js";import"./spinner-DlefO5qf.js";import"./floating-ui.react-B7WNAc62.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-DruG7NEL.js";import"./index-DDnizkrf.js";import"./index-Dudydq1e.js";import"./index-CE9rzG0a.js";import"./index-1XBdxQs7.js";import"./index-3QCBAHsp.js";import"./UnstyledButton-CbQBVK3o.js";const se="_controls_17lij_8",E={controls:se,"button-group":"_button-group_17lij_18"};function oe(e,s){switch(s){case 0:return e===0||e===3?1:e;case 1:return 2;case 4:return 0;case 2:return e===2?3:e;case 3:return e===2?0:e;case 5:return e===3?0:e}le(s)}function le(e){throw new Error(`Unreachable value: ${e}`)}const g=a.forwardRef(function({className:s,label:o,onSave:u,onCancel:S,onInput:L,onClearServerErrors:V,serverInvalid:w,saveButtonLabel:_,cancelButtonLabel:H,savedLabel:T,savingLabel:q,helpLabel:C,disabled:F,children:k,...W},M){const[n,l]=a.useReducer(oe,0),d=a.useRef(!1),[y,p]=a.useState(!1),P=n===1||n===2||y,i=a.useRef(void 0);a.useEffect(()=>(n===3&&(i.current=setTimeout(()=>{l(5),i.current=void 0},2e3)),()=>{i.current&&clearTimeout(i.current),i.current=void 0}),[n]);const O=a.useRef(null),B=a.useRef(null),x=a.useRef(null),N=a.useCallback(()=>{d.current||(d.current=!0,p(!0))},[y,p]),D=a.useCallback(r=>{d.current&&(r.currentTarget.contains(r.relatedTarget)||(d.current=!1,p(!1)))},[y,p]),z=a.useCallback(r=>{l(0),L?.(r)},[l,L]),U=a.useCallback(async r=>{if(r.preventDefault(),n!==0)try{l(1),B.current?.blur(),await u?.(r),l(2)}catch{l(3)}},[u,n,i]),Y=a.useCallback(r=>{x.current?.blur(),S?.(r),l(4)},[x,S]);return t.jsx(te,{className:s,onSubmit:U,onReset:Y,onFocus:N,onBlur:D,onClearServerErrors:V,ref:O,children:t.jsxs(ae,{name:"input",serverInvalid:w,children:[t.jsx(ne,{children:o}),t.jsxs("div",{className:E.controls,children:[t.jsx(re,{ref:M,...W,onInput:z,disabled:F||n===2}),P&&t.jsxs("div",{className:E["button-group"],children:[t.jsx(I,{label:_,children:t.jsx(J,{asChild:!0,children:t.jsx(R,{type:"submit",kind:"primary",size:"sm",ref:B,disabled:n!==1,iconOnly:!0,Icon:Z})})}),t.jsx(I,{label:H,children:t.jsx(R,{type:"reset",kind:"secondary",size:"sm",ref:x,className:E.button,disabled:n===2,iconOnly:!0,Icon:ee})})]})]}),n===2?t.jsx(A,{children:q}):k,T&&n===3&&t.jsx(K,{children:T}),C&&(n===0||n===1)&&t.jsx(X,{children:r=>(r===void 0||r.valid)&&!w&&t.jsx(Q,{children:C})})]})})});try{g.displayName="EditInPlace",g.__docgenInfo={description:`A text box with save/cancel buttons that appear when the field is active.
Since thios control has its own 'save' button, it should *not* appear as part
of a larger form: it exists as its own form that submits separately.`,displayName:"EditInPlace",props:{disabled:{defaultValue:null,description:"If true, disabled the entire component to disallow editing.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the control",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onInput:{defaultValue:null,description:"onInput event handler on the text control",name:"onInput",required:!1,type:{name:"(((e: ChangeEvent<HTMLInputElement>) => void) & FormEventHandler<HTMLInputElement>)"}},helpLabel:{defaultValue:null,description:"Label to be displayed under the input as a help text",name:"helpLabel",required:!1,type:{name:"string"}},serverInvalid:{defaultValue:null,description:`Whether the field is in an error state according to the server validation.

For validation messages, use native validations properties directly, or add custom error messages as children.`,name:"serverInvalid",required:!1,type:{name:"boolean"}},onClearServerErrors:{defaultValue:null,description:"Callback for when the server validation errors should be cleared.",name:"onClearServerErrors",required:!1,type:{name:"(() => void)"}},enableLigatures:{defaultValue:null,description:`Enable contextual alternate ligatures on input text
For example on an in-place editing field
https://github.com/rsms/inter/issues/222
https://github.com/rsms/inter/blob/master/src/features/calt.fea`,name:"enableLigatures",required:!1,type:{name:"boolean"}},onSave:{defaultValue:null,description:"Callback for when the user confirms the change",name:"onSave",required:!1,type:{name:"((e: FormEvent<HTMLFormElement>) => void | Promise<void>)"}},onCancel:{defaultValue:null,description:"Callback for when the user wishes to cancel the change",name:"onCancel",required:!1,type:{name:"((e: FormEvent<HTMLFormElement>) => void)"}},savedLabel:{defaultValue:null,description:`Label to be displayed by the green check at the bottom. Will only be displayed
for 2 seconds after the onSave callback promise resolves successfully.`,name:"savedLabel",required:!1,type:{name:"string"}},saveButtonLabel:{defaultValue:null,description:"The label for the save button",name:"saveButtonLabel",required:!0,type:{name:"string"}},savingLabel:{defaultValue:null,description:"The label for the 'in progress' saving caption",name:"savingLabel",required:!0,type:{name:"string"}},cancelButtonLabel:{defaultValue:null,description:"The label for the cancel button",name:"cancelButtonLabel",required:!0,type:{name:"string"}}}}}catch{}const{expect:ie,userEvent:c,within:j}=__STORYBOOK_MODULE_TEST__,We={title:"Form/Controls/EditInPlace",component:g,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>t.jsx(G,{children:t.jsx(g,{...e})}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},m={},f={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const o=j(e).getByRole("textbox");await c.clear(o),await c.type(o,"Hello, Computer")}},v={tags:["axe-exclude"],args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const s=j(e),o=s.getByRole("textbox");await c.clear(o),await c.type(o,"Hello");const u=s.getByRole("button",{name:"Save"});await c.click(u),await ie(s.getByText("Saving…")).toBeInTheDocument()}},h={args:{serverInvalid:!0,children:t.jsx($,{children:"I am a teapot"})}},b={args:{helpLabel:"Optional help text."}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    serverInvalid: true,
    children: <ErrorMessage>I am a teapot</ErrorMessage>
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  }
}`,...b.parameters?.docs?.source}}};const Me=["Empty","WithText","Saving","WithError","WithHelpText"];export{m as Empty,v as Saving,h as WithError,b as WithHelpText,f as WithText,Me as __namedExportsOrder,We as default};
