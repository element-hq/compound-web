import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CAZF3VLQ.js";import"./index-jNOUuU9x.js";import{i}from"./index-S1-SPO_7.js";import{T as l}from"./Tooltip-DpkmCPSU.js";import{A as p}from"./Action-CyrQd3D6.js";import{C as c}from"./check-C8LnSvvh.js";import"./preload-helper-PPVm8Dsz.js";import"./notifications-QuU9CdLv.js";import"./extensions-DMOMXr1x.js";import"./check-circle-solid-CpgzZrd6.js";import"./check-circle-DYMnfNeY.js";import"./chevron-down-8cYlu1Cu.js";import"./chevron-left-DiuuwJWh.js";import"./chevron-right-jlRzuMPs.js";import"./close-ZH3mK4iO.js";import"./error-solid-DOXh87Ia.js";import"./info-B62Rd3lg.js";import"./key-D1U9L2Pa.js";import"./search-DysyZwzK.js";import"./settings-DCQ9LPOx.js";import"./spinner-7xGBpjnP.js";import"./threads-BRg_Hxsl.js";import"./user-profile-BAP4Deqr.js";import"./visibility-on-BkWFpsEu.js";import"./warning-VNcxawYD.js";import"./floating-ui.react-C3YRyo-2.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-3F671WqP.js";import"./index-BskFxYQU.js";import"./index-DgHM-M2e.js";import"./index-RVEmlGXS.js";import"./index-CdM82b-X.js";import"./index-D53Kd2kb.js";import"./index-Dv2n_H-w.js";import"./index-DfkOqQVE.js";import"./Text-CVhLK0ZH.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,X={title:"Form/Controls/Action",component:p,tags:["autodocs","axe-exclude"],parameters:{controls:{include:["onActionClick","defaultValue","placeholder","disabled","autoFocus","readOnly","invalid","actionLabel","Icon"]}},argTypes:{onActionClick:{action:"clicked"},defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"},actionLabel:{type:"string"},Icon:{options:Object.keys(i),mapping:i,defaultValue:"check",control:{type:"select"}}},render:({invalid:m,...d})=>s.jsx(l,{children:s.jsx(p,{"data-invalid":m||void 0,...d})}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1,actionLabel:"Action",onActionClick:u(),Icon:c}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},o={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},a={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},n={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},t={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
