import{j as o}from"./jsx-runtime-DoxjgJx5.js";import{B as a}from"./Button-Yybe91ei.js";import{A as n}from"./Alert-BSBcvyGa.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./UnstyledButton-CUaD5tB8.js";import"./close-D55JIkKE.js";import"./Text-BrcN_buA.js";import"./Typography-BcgMUEGb.js";import"./IconButton-B2-l3HAM.js";import"./IndicatorIcon-iinDG_Nf.js";import"./Tooltip-CsPcieVk.js";import"./floating-ui.react-DRrg5oqz.js";import"./index-s2Ee__EW.js";const b={title:"Alert",component:n,tags:["autodocs"],argTypes:{type:{options:["success","critical","info"],control:{type:"inline-radio"}}},args:{title:"Title",children:"Description",onClose:()=>{console.log("Clicked!")}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0"}}},e={args:{type:"success"}},t={args:{type:"critical"}},i={args:{type:"info"}},s={args:{type:"info",title:"Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",children:"Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",actions:o.jsxs(o.Fragment,{children:[o.jsx(a,{children:"Yes"}),o.jsx(a,{children:"No"})]})}},r={...e,args:{...e.args,onClose:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: "success"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "critical"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children: "Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: <>
        <Button>Yes</Button>
        <Button>No</Button>
      </>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Success,
  args: {
    ...Success.args,
    onClose: undefined
  }
}`,...r.parameters?.docs?.source}}};const v=["Success","Critical","Info","WithActions","WithoutClose"];export{t as Critical,i as Info,e as Success,s as WithActions,r as WithoutClose,v as __namedExportsOrder,b as default};
