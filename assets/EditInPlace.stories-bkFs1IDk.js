import{j as l}from"./jsx-runtime-DoxjgJx5.js";import{E as s}from"./EditInPlace-BYGZ7DfF.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Text-CxyMlQTK.js";import"./index-COQO8x8p.js";import"./index-Cmw95SmN.js";import"./index-tFWdirwu.js";import"./index-BetXjMvb.js";import"./index-MTP5U5xA.js";import"./useId-D5m2XpUu.js";import"./check-CXsFGzWm.js";import"./close-D55JIkKE.js";import"./error-YokBWoNX.js";import"./InlineSpinner-BZBYCXgP.js";const E={title:"Form/Controls/EditInPlace",component:s,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","value","initialValue","error","savedLabel","saveButtonLabel","cancelButtonLabel","disableSaveButton","disabled"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},value:{type:"string"},disableSaveButton:{type:"boolean"},onChange:{action:"changed"},onSave:{action:"saved"},onCancel:{action:"cancelled"},error:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},savingLabel:{type:"string"},cancelButtonLabel:{type:"string"},disabled:{type:"boolean"}},render:({...n})=>l.jsx(s,{...n}),args:{label:"Label",value:"",saveButtonLabel:"Save",cancelButtonLabel:"Cancel",savingLabel:"Saving..."}},e={},a={args:{value:"Hello, Computer"}},r={args:{value:"Hello, World",disableSaveButton:!0}},t={args:{error:"I am a teapot"}},o={args:{helpLabel:"Optional help text."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Hello, Computer"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Hello, World",
    disableSaveButton: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    error: "I am a teapot"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  }
}`,...o.parameters?.docs?.source}}};const C=["Empty","WithText","SaveDisabled","WithError","WithHelpText"];export{e as Empty,r as SaveDisabled,t as WithError,o as WithHelpText,a as WithText,C as __namedExportsOrder,E as default};
