import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{w as V,u as c,e as Q}from"./index-JRK_GaCU.js";import{R as Y,L as $,S as G,H as J,E as K}from"./Message-BHGjBNK0.js";import{a as B,T as X}from"./Tooltip-Cyj2cWtL.js";import{r as a}from"./index-DRjF_FHU.js";import{S as Z,V as ee}from"./index-l3lCcgwz.js";import{C as te}from"./check-BWxs5Tf9.js";import{C as ae}from"./close-CWATPeIo.js";import{F as ne,L as re}from"./Label-BiiKcOmL.js";import{a as se}from"./Text-qStLCapf.js";import{B as R}from"./Button-BORixq-h.js";import"./index-lhGYx47h.js";import"./check-circle-solid-DvGH8qX5.js";import"./error-DOy7ZFuJ.js";import"./InlineSpinner-DDpdhuC2.js";import"./spinner--mCkS-8r.js";import"./floating-ui.react-C2LRQ0sB.js";import"./index-BvEl7W6R.js";import"./index-CGa_gRws.js";import"./index-BN8FVwUr.js";import"./index-DXSGkuqC.js";import"./index-DMG2A0zD.js";import"./UnstyledButton-DuxpNl0e.js";const oe="_controls_1h4nb_17",E={controls:oe,"button-group":"_button-group_1h4nb_27"};function le(e,s){switch(s){case 0:return e===0||e===3?1:e;case 1:return 2;case 4:return 0;case 2:return e===2?3:e;case 3:return e===2?0:e;case 5:return e===3?0:e}ie(s)}function ie(e){throw new Error(`Unreachable value: ${e}`)}const g=a.forwardRef(function({className:s,label:o,onSave:u,onCancel:S,onInput:w,onClearServerErrors:j,serverInvalid:L,saveButtonLabel:H,cancelButtonLabel:q,savedLabel:C,savingLabel:F,helpLabel:T,disabled:_,children:k,...W},M){const[n,l]=a.useReducer(le,0),d=a.useRef(!1),[y,p]=a.useState(!1),P=n===1||n===2||y,i=a.useRef();a.useEffect(()=>(n===3&&(i.current=setTimeout(()=>{l(5),i.current=void 0},2e3)),()=>{i.current&&clearTimeout(i.current),i.current=void 0}),[n]);const N=a.useRef(null),I=a.useRef(null),x=a.useRef(null),O=a.useCallback(()=>{d.current||(d.current=!0,p(!0))},[y,p]),D=a.useCallback(r=>{d.current&&(r.currentTarget.contains(r.relatedTarget)||(d.current=!1,p(!1)))},[y,p]),z=a.useCallback(r=>{l(0),w?.(r)},[l,w]),U=a.useCallback(async r=>{if(r.preventDefault(),n!==0)try{l(1),I.current?.blur(),await u?.(r),l(2)}catch{l(3)}},[u,n,i]),A=a.useCallback(r=>{x.current?.blur(),S?.(r),l(4)},[x,S]);return t.jsx(Y,{className:s,onSubmit:U,onReset:A,onFocus:O,onBlur:D,onClearServerErrors:j,ref:N,children:t.jsxs(ne,{name:"input",serverInvalid:L,children:[t.jsx(re,{children:o}),t.jsxs("div",{className:E.controls,children:[t.jsx(se,{ref:M,...W,onInput:z,disabled:_||n===2}),P&&t.jsxs("div",{className:E["button-group"],children:[t.jsx(B,{label:H,children:t.jsx(Z,{asChild:!0,children:t.jsx(R,{type:"submit",kind:"primary",size:"sm",ref:I,disabled:n!==1,iconOnly:!0,Icon:te})})}),t.jsx(B,{label:q,children:t.jsx(R,{type:"reset",kind:"secondary",size:"sm",ref:x,className:E.button,disabled:n===2,iconOnly:!0,Icon:ae})})]})]}),n===2?t.jsx($,{children:F}):k,C&&n===3&&t.jsx(G,{children:C}),T&&(n===0||n===1)&&t.jsx(ee,{children:r=>(r===void 0||r.valid)&&!L&&t.jsx(J,{children:T})})]})})});try{g.displayName="EditInPlace",g.__docgenInfo={description:`A text box with save/cancel buttons that appear when the field is active.
Since thios control has its own 'save' button, it should *not* appear as part
of a larger form: it exists as its own form that submits separately.`,displayName:"EditInPlace",props:{disabled:{defaultValue:null,description:"If true, disabled the entire component to disallow editing.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the control",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onInput:{defaultValue:null,description:"onInput event handler on the text control",name:"onInput",required:!1,type:{name:"(((e: ChangeEvent<HTMLInputElement>) => void) & FormEventHandler<HTMLInputElement>)"}},helpLabel:{defaultValue:null,description:"Label to be displayed under the input as a help text",name:"helpLabel",required:!1,type:{name:"string"}},serverInvalid:{defaultValue:null,description:`Whether the field is in an error state according to the server validation.

For validation messages, use native validations properties directly, or add custom error messages as children.`,name:"serverInvalid",required:!1,type:{name:"boolean"}},enableLigatures:{defaultValue:null,description:`Enable contextual alternate ligatures on input text
For example on an in-place editing field
https://github.com/rsms/inter/issues/222
https://github.com/rsms/inter/blob/master/src/features/calt.fea`,name:"enableLigatures",required:!1,type:{name:"boolean"}},onClearServerErrors:{defaultValue:null,description:"Callback for when the server validation errors should be cleared.",name:"onClearServerErrors",required:!1,type:{name:"(() => void)"}},onSave:{defaultValue:null,description:"Callback for when the user confirms the change",name:"onSave",required:!1,type:{name:"((e: FormEvent<HTMLFormElement>) => void | Promise<void>)"}},onCancel:{defaultValue:null,description:"Callback for when the user wishes to cancel the change",name:"onCancel",required:!1,type:{name:"((e: FormEvent<HTMLFormElement>) => void)"}},savedLabel:{defaultValue:null,description:`Label to be displayed by the green check at the bottom. Will only be displayed
for 2 seconds after the onSave callback promise resolves successfully.`,name:"savedLabel",required:!1,type:{name:"string"}},saveButtonLabel:{defaultValue:null,description:"The label for the save button",name:"saveButtonLabel",required:!0,type:{name:"string"}},savingLabel:{defaultValue:null,description:"The label for the 'in progress' saving caption",name:"savingLabel",required:!0,type:{name:"string"}},cancelButtonLabel:{defaultValue:null,description:"The label for the cancel button",name:"cancelButtonLabel",required:!0,type:{name:"string"}}}}}catch{}const He={title:"Form/Controls/EditInPlace",component:g,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","onClearServerErrors","defaultValue","error","serverInvalid","savedLabel","saveButtonLabel","cancelButtonLabel","helpLabel","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},defaultValue:{type:"string"},onChange:{action:"changed"},onCancel:{action:"cancelled"},onClearServerErrors:{action:"cleared server errors"},serverInvalid:{type:"boolean"},helpLabel:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...e})=>t.jsx(X,{children:t.jsx(g,{...e})}),args:{label:"Label",onSave:()=>new Promise(e=>setTimeout(e,1e3)),savedLabel:"Saved",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving…"}},m={},h={args:{defaultValue:"Hello, Computer"},play:async({canvasElement:e})=>{const o=V(e).getByRole("textbox");await c.clear(o),await c.type(o,"Hello, Computer")}},f={args:{defaultValue:"Hello",onSave:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{const s=V(e),o=s.getByRole("textbox");await c.clear(o),await c.type(o,"Hello");const u=s.getByRole("button",{name:"Save"});await c.click(u),await Q(s.getByText("Saving…")).toBeInTheDocument()}},v={args:{serverInvalid:!0,children:t.jsx(K,{children:"I am a teapot"})}},b={args:{helpLabel:"Optional help text."}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    serverInvalid: true,
    children: <ErrorMessage>I am a teapot</ErrorMessage>
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  }
}`,...b.parameters?.docs?.source}}};const qe=["Empty","WithText","Saving","WithError","WithHelpText"];export{m as Empty,f as Saving,v as WithError,b as WithHelpText,h as WithText,qe as __namedExportsOrder,He as default};