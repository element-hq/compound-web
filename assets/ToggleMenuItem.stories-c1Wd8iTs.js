import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{C as m,E as p}from"./extensions-NPI-SMnu.js";import{T as o}from"./ToggleMenuItem--uj374TQ.js";import"./MenuItem-CmF0V73j.js";import"./index-CSpfAsmC.js";import"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";import"./chevron-right-DF47_mtr.js";import"./index-Dp4tTk3o.js";import"./Toggle-DqDpfLtf.js";import"./index-BugjtUKR.js";import"./index-DD7XHAoh.js";import"./index-CcH3h_90.js";import"./index-BjHk5heU.js";import"./index-BlTQwN6S.js";import"./useId-DIHOOv91.js";const F={title:"Menu/ToggleMenuItem",component:o,tags:["autodocs"],argTypes:{},args:{}},d=r=>{const[s,i]=c.useState(!1);return t.jsxs("div",{style:{width:300},children:[t.jsx(o,{...r,Icon:m,label:"First item",checked:s,onSelect:a=>{a.preventDefault(),i(n=>!n)}}),t.jsx(o,{...r,Icon:p,label:"Second item with a name that's quite long",checked:!0,disabled:!0})]})},e=d.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const [firstChecked, setFirstChecked] = useState(false);
  return <div style={{
    width: 300
  }}>
      <ToggleMenuItemComponent {...args} Icon={ChatIcon} label="First item" checked={firstChecked} onSelect={e => {
      e.preventDefault();
      setFirstChecked(c => !c);
    }} />
      <ToggleMenuItemComponent {...args} Icon={ExtensionsIcon} label="Second item with a name that's quite long" checked disabled />
    </div>;
}`,...e.parameters?.docs?.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,F as default};
