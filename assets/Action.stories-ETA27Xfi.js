import{j as s}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DN5LAeRr.js";import"./index-CjOrG5Q7.js";import{i}from"./index-CrWhDrSf.js";import{T as l}from"./Tooltip-DPQxW7d6.js";import{A as p}from"./Action-BzO_-U8o.js";import{C as c}from"./check-CiHY-lZf.js";import"./preload-helper-D9Z9MdNV.js";import"./notifications-BUDgdszD.js";import"./extensions-CCB_Bjyx.js";import"./check-circle-solid-PWuGmvlL.js";import"./check-circle-DyyUshqM.js";import"./chevron-down-DphWVODW.js";import"./chevron-left-8z1mRmKU.js";import"./chevron-right-woFZsZ2u.js";import"./close-CbL7QLMB.js";import"./error-solid-DwWPlU6N.js";import"./info-DzSkd5_l.js";import"./key-DPwmWFvv.js";import"./search-C21NJqFI.js";import"./settings-SMqAW66L.js";import"./spinner-D4Mf7aPO.js";import"./threads-Cej39BK3.js";import"./user-profile-Dy2xtzeN.js";import"./visibility-on-CnvpbVbk.js";import"./warning-DvZXIMiC.js";import"./floating-ui.react-CIn8xAZH.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-BDgIRT0M.js";import"./index-D6WfFsXF.js";import"./index-pswVqBD4.js";import"./index-CYIQOypX.js";import"./index-CfCMVjqB.js";import"./index-Bv24_F7V.js";import"./index-CzBIjp-u.js";import"./index-NAbZZ6Wo.js";import"./Text-C1qVWRBd.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,X={title:"Form/Controls/Action",component:p,tags:["autodocs","axe-exclude"],parameters:{controls:{include:["onActionClick","defaultValue","placeholder","disabled","autoFocus","readOnly","invalid","actionLabel","Icon"]}},argTypes:{onActionClick:{action:"clicked"},defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"},actionLabel:{type:"string"},Icon:{options:Object.keys(i),mapping:i,defaultValue:"check",control:{type:"select"}}},render:({invalid:m,...d})=>s.jsx(l,{children:s.jsx(p,{"data-invalid":m||void 0,...d})}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1,actionLabel:"Action",onActionClick:u(),Icon:c}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},o={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},a={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},n={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},t={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
