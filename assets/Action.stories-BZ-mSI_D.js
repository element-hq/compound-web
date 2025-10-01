import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-hJJX34uD.js";import"./index-Kiw9KL1q.js";import{i}from"./index-B1wOa3Ur.js";import{T as l}from"./Tooltip-rzcTmQ9r.js";import{A as p}from"./Action-Ctc_06-S.js";import{C as c}from"./check-B3D7tVtg.js";import"./preload-helper-PPVm8Dsz.js";import"./notifications-D3e1qbQB.js";import"./extensions-BmFEAKf6.js";import"./check-circle-solid-DM0Qf_JP.js";import"./check-circle-BWDVS-PB.js";import"./chevron-down-CtyFBqSq.js";import"./chevron-left-sJmab2Eo.js";import"./chevron-right-lHpo2wa5.js";import"./close-D2i5rEdv.js";import"./error-solid-DQs-Tq5D.js";import"./info-9yFoqnU_.js";import"./key-DwCTDnZ6.js";import"./search-B7c2DTgS.js";import"./settings-D0J2j-SV.js";import"./spinner-DX9gsNXs.js";import"./threads-2OJE5geQ.js";import"./user-profile-DRUf5XrC.js";import"./visibility-on-CN1RntMM.js";import"./warning-oK4RgAeE.js";import"./floating-ui.react-CnRpmvi-.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-a0VNTauB.js";import"./index-Bxd6ijIg.js";import"./index-CXRNAG1N.js";import"./index-DGxF2Tqt.js";import"./index-CF3FEcqz.js";import"./index-CwKeosUi.js";import"./index-DegkxFRn.js";import"./index-Bo0SSoPh.js";import"./Text-BjbLM-gC.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,X={title:"Form/Controls/Action",component:p,tags:["autodocs","axe-exclude"],parameters:{controls:{include:["onActionClick","defaultValue","placeholder","disabled","autoFocus","readOnly","invalid","actionLabel","Icon"]}},argTypes:{onActionClick:{action:"clicked"},defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"},actionLabel:{type:"string"},Icon:{options:Object.keys(i),mapping:i,defaultValue:"check",control:{type:"select"}}},render:({invalid:m,...d})=>s.jsx(l,{children:s.jsx(p,{"data-invalid":m||void 0,...d})}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1,actionLabel:"Action",onActionClick:u(),Icon:c}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},o={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},a={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},n={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},t={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Filled"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Disabled",
    disabled: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Read only",
    readOnly: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Invalid",
    invalid: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"
    }
  }
}`,...t.parameters?.docs?.source}}};const Z=["Empty","Filled","Disabled","ReadOnly","Focused","Invalid"];export{a as Disabled,e as Empty,o as Filled,r as Focused,t as Invalid,n as ReadOnly,Z as __namedExportsOrder,X as default};
