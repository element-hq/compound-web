import{j as m}from"./jsx-runtime-CexXSJP5.js";import{P as p}from"./Password-BBBeuWEE.js";import{u as l,s as u}from"./index-BSM_bQPn.js";import"./index-BP8_t0zE.js";import"./index-DA5mkyhX.js";import"./extends-CF3RwP-h.js";import"./index-DG4CWwun.js";import"./index-BvxdkTda.js";import"./Action-BbkCfKKe.js";import"./index-BSFQGMYZ.js";import"./Text-BpUtDsRn.js";import"./useId-DIHOOv91.js";import"./Tooltip-D9iS9LOc.js";import"./floating-ui.react-BampJf39.js";import"./visibility-on-mD4cgeZZ.js";import"./index-C8k3Z-3Y.js";const F={title:"Form/Controls/Password",component:p,tags:["autodocs"],parameters:{controls:{include:["defaultValue","placeholder","disabled","autoFocus","readOnly","invalid"]}},argTypes:{defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"}},render:({invalid:d,...i})=>m.jsx(p,{"data-invalid":d||void 0,...i}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},a={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},n={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},o={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},s={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}},t={args:{defaultValue:"hunter2"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}},play:async()=>{const d=l.setup(),i=u.getByRole("button",{name:"Show"});await d.click(i)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Filled"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "hunter2"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"
    }
  },
  play: async () => {
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", {
      name: "Show"
    });
    await user.click(toggle);
  }
}`,...t.parameters?.docs?.source}}};const L=["Empty","Filled","Disabled","ReadOnly","Focused","Invalid","Visible"];export{n as Disabled,e as Empty,a as Filled,r as Focused,s as Invalid,o as ReadOnly,t as Visible,L as __namedExportsOrder,F as default};
