import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DqOPuZFd.js";import"./index-D0NZyfV4.js";import{i}from"./index-CiiU3Y-j.js";import{T as l}from"./Tooltip-ChXhLbvQ.js";import{A as p}from"./Action-CC8tKI_a.js";import{C as c}from"./check-BYkbX9Mf.js";import"./preload-helper-D9Z9MdNV.js";import"./notifications-BLOFCq-7.js";import"./extensions-B-kyXRB6.js";import"./check-circle-solid-BYcUcstu.js";import"./check-circle-Az9CQlmP.js";import"./chevron-down-B5hZ6I8Q.js";import"./chevron-left-BNupX3wk.js";import"./chevron-right-M5ENzyY8.js";import"./close-2TSgz8p6.js";import"./error-solid-Cu41d6hF.js";import"./info-B9y4uNoI.js";import"./key-DgjSFF8Y.js";import"./search-DQEkG2s4.js";import"./settings-DE0Hl4mw.js";import"./spinner-C0s2KyZI.js";import"./threads-D0CsWUQ-.js";import"./user-profile-Dy8IlB4u.js";import"./visibility-on-248Nnf8f.js";import"./warning-dFgJ11uw.js";import"./floating-ui.react-CvxV62aF.js";import"./floating-ui.react-dom-5MZr80wY.js";import"./index-CfBVFd-r.js";import"./index-CqkqSU0Z.js";import"./index-BXZSD-zD.js";import"./index-CJaMfoWS.js";import"./index-AJ37He1K.js";import"./index-BLEFX-D0.js";import"./index-DKhzsWz4.js";import"./index-DKVU53u8.js";import"./Text-C7nbYly2.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,X={title:"Form/Controls/Action",component:p,tags:["autodocs"],parameters:{controls:{include:["onActionClick","defaultValue","placeholder","disabled","autoFocus","readOnly","invalid","actionLabel","Icon"]}},argTypes:{onActionClick:{action:"clicked"},defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"},actionLabel:{type:"string"},Icon:{options:Object.keys(i),mapping:i,defaultValue:"check",control:{type:"select"}}},render:({invalid:m,...d})=>s.jsx(l,{children:s.jsx(p,{"data-invalid":m||void 0,...d})}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1,actionLabel:"Action",onActionClick:u(),Icon:c}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},o={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},a={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},n={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},t={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
