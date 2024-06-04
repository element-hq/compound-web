import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{E as o}from"./EditInPlace-DPd5XUd5.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./Text-BTQEANK3.js";import"./index-8DUk24eR.js";import"./index-icJLasaE.js";import"./index-tFWdirwu.js";import"./index-CZs6vfAl.js";import"./index-MTP5U5xA.js";import"./useId-D5m2XpUu.js";import"./check-CXsFGzWm.js";import"./close-D55JIkKE.js";import"./error-YokBWoNX.js";const C={title:"Form/Controls/EditInPlace",component:o,tags:["autodocs"],parameters:{controls:{include:["onChange","onSave","onCancel","value","initialValue","error","savedLabel","saveButtonLabel","cancelButtonLabel"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0"}},argTypes:{label:{type:"string"},value:{type:"string"},disableSaveButton:{type:"string"},onChange:{action:"changed"},onSave:{action:"saved"},onCancel:{action:"cancelled"},error:{type:"string"},savedLabel:{type:"string"},saveButtonLabel:{type:"string"},cancelButtonLabel:{type:"string"}},render:({...s})=>n.jsx(o,{...s}),args:{label:"Label",value:"",saveButtonLabel:"Save",cancelButtonLabel:"Cancel"}},e={},a={args:{value:"Hello, Computer"}},r={args:{value:"Hello, World",disableSaveButton:!0}},t={args:{error:"I am a teapot"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Empty","WithText","SaveDisabled","WithError"];export{e as Empty,r as SaveDisabled,t as WithError,a as WithText,L as __namedExportsOrder,C as default};
