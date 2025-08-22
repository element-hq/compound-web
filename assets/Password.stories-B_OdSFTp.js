import{j as p}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D3G1PVRp.js";import"./index-BPn197UE.js";import{T as l}from"./Tooltip-DpVWZy2O.js";import{P as m}from"./Password-CYD1RzNl.js";import"./preload-helper-D9Z9MdNV.js";import"./floating-ui.react-CTzpeTp6.js";import"./floating-ui.react-dom-Ccgdi_Qh.js";import"./index-D7ci3Uoh.js";import"./index-DYpVow4H.js";import"./index-D2Sq8HV4.js";import"./index-Dm994e_9.js";import"./index-othDQwGH.js";import"./index-DJI5kuuS.js";import"./index-ZixeJoNR.js";import"./index-BbskRFbV.js";import"./visibility-on-BgrdV7Tu.js";import"./Action-CDCbu-dR.js";import"./Text-xK552Qka.js";const{screen:u,userEvent:c}=__STORYBOOK_MODULE_TEST__,Q={title:"Form/Controls/Password",component:m,tags:["autodocs"],parameters:{controls:{include:["defaultValue","placeholder","disabled","autoFocus","readOnly","invalid"]}},argTypes:{defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"}},render:({invalid:i,...d})=>p.jsx(l,{children:p.jsx(m,{"data-invalid":i||void 0,...d})}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"}}},a={args:{defaultValue:"Filled"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}}},n={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"}}},o={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"}}},r={args:{autoFocus:!0}},s={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"}}},t={args:{defaultValue:"hunter2"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"}},play:async()=>{const i=c.setup(),d=u.getByRole("button",{name:"Show"});await i.click(d)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    // eslint-disable-next-line storybook/await-interactions
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", {
      name: "Show"
    });
    await user.click(toggle);
  }
}`,...t.parameters?.docs?.source}}};const W=["Empty","Filled","Disabled","ReadOnly","Focused","Invalid","Visible"];export{n as Disabled,e as Empty,a as Filled,r as Focused,s as Invalid,o as ReadOnly,t as Visible,W as __namedExportsOrder,Q as default};
