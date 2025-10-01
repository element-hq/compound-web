import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bhg0zYJA.js";import"./index-zjdN5a1N.js";import{i}from"./index-lre7BF7Z.js";import{T as l}from"./Tooltip-D7zevKa0.js";import{A as p}from"./Action-CoYk5pLm.js";import{C as c}from"./check-C5Vw01TP.js";import"./preload-helper-D9Z9MdNV.js";import"./notifications-87mZJ461.js";import"./extensions-Dmg7fQtM.js";import"./check-circle-solid-yF79DZ2P.js";import"./check-circle-BGx8nJ4I.js";import"./chevron-down-BZgYFnyD.js";import"./chevron-left-BMAezqBY.js";import"./chevron-right-DBJk4FkU.js";import"./close-DNvm1ADs.js";import"./error-solid-DRIzH7eF.js";import"./info-CN-I4RJA.js";import"./key-CuSozTcP.js";import"./search-D9TQn_25.js";import"./settings-BzSlFe1T.js";import"./spinner-BnIIKOiD.js";import"./threads-mj379hXg.js";import"./user-profile-KLolnvCb.js";import"./visibility-on-D5iOV6eo.js";import"./warning-D8OmYt_-.js";import"./floating-ui.react-BgBN5lP_.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-BZMNXkkt.js";import"./index-B7iO71av.js";import"./index-CZgHnP5D.js";import"./index-mHv1i3rV.js";import"./index-DuSAb-NX.js";import"./index-DBYqfBe2.js";import"./index-DX12Qqey.js";import"./index-CpRWZ-N-.js";import"./Text-DDAQIxoO.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,X={title:"Form/Controls/Action",component:p,tags:["autodocs","axe-exclude"],parameters:{controls:{include:["onActionClick","defaultValue","placeholder","disabled","autoFocus","readOnly","invalid","actionLabel","Icon"]}},argTypes:{onActionClick:{action:"clicked"},defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"},actionLabel:{type:"string"},Icon:{options:Object.keys(i),mapping:i,defaultValue:"check",control:{type:"select"}}},render:({invalid:m,...d})=>s.jsx(l,{children:s.jsx(p,{"data-invalid":m||void 0,...d})}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1,actionLabel:"Action",onActionClick:u(),Icon:c}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},o={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},a={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},n={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},t={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
