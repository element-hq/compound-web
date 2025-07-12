import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-b3J6pLRR.js";import{L as w}from"./Label-83gRVbJA.js";import{H as u}from"./Message-D2AQT47d.js";import{I as b}from"./InlineField-BhWnqwH2.js";import{C,F as S}from"./index-CjTp_9mR.js";import{T as x}from"./Toggle-BAuvNBQt.js";import"./index-gRy6E0bs.js";import"./check-circle-solid-BxFpSwt5.js";import"./error-solid-ejVB4lgA.js";import"./InlineSpinner-DUwqsVk8.js";import"./spinner-CiEkBzE7.js";import"./index-B7u__E_F.js";import"./index-PwNlt2sR.js";import"./index-C2fONm1T.js";import"./index-DJHp1dg3.js";import"./index-PwG7f-gv.js";import"./index-Br4TC580.js";const i=m.forwardRef(function({className:o,label:d,helpMessage:p,disabledMessage:g,name:h,...l},T){const y=m.useId(),c=l.id??y;return e.jsxs(b,{className:o,name:h,control:e.jsx(x,{id:c,ref:T,...l}),children:[e.jsx(w,{htmlFor:c,children:d}),p&&e.jsx(u,{children:p}),g&&l.disabled&&e.jsx(u,{children:g})]})}),f=m.forwardRef(function(o,d){return e.jsx(C,{asChild:!0,children:e.jsx(i,{ref:d,...o})})});try{i.displayName="SettingsToggleInput",i.__docgenInfo={description:"A toggle component.",displayName:"SettingsToggleInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The field name.",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`The CSS class name for the containing field.
The CSS class name.`,name:"className",required:!1,type:{name:"string"}},helpMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"helpMessage",required:!1,type:{name:"string"}},disabledMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"disabledMessage",required:!1,type:{name:"string"}}}}}catch{}try{f.displayName="SettingsToggleControl",f.__docgenInfo={description:"A styled checkbox input wrapped in a `Control` component, for use in Radix forms.",displayName:"SettingsToggleControl",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The field name.",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`The CSS class name for the containing field.
The CSS class name.`,name:"className",required:!1,type:{name:"string"}},helpMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"helpMessage",required:!1,type:{name:"string"}},disabledMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"disabledMessage",required:!1,type:{name:"string"}}}}}catch{}const A={title:"Form/Controls/SettingsToggle",component:i,decorators:[t=>e.jsx(S,{children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{},args:{name:'"any-name"',label:"Setting name",helpMessage:"This is some help text to explain what this setting does."}},a={args:{defaultChecked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874"}}},s={args:{defaultChecked:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874"}}},n={args:{disabled:!0,disabledMessage:"This feature isn't available to you right now."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574"}}},r={args:{disabled:!0,defaultChecked:!0,disabledMessage:"This feature cannot be disabled."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874"
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874"
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    disabledMessage: "This feature isn't available to you right now."
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574"
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true,
    disabledMessage: "This feature cannot be disabled."
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574"
    }
  }
}`,...r.parameters?.docs?.source}}};const H=["Unchecked","Checked","DisabledUnchecked","DisabledChecked"];export{s as Checked,r as DisabledChecked,n as DisabledUnchecked,a as Unchecked,H as __namedExportsOrder,A as default};
