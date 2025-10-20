import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DejGgbje.js";import{r as m}from"./iframe-kUEg4aaf.js";import{L as w}from"./Label-BQQ9_HNl.js";import{H as u}from"./Message-DB7SSawc.js";import{I as b}from"./InlineField-2BN83lvd.js";import{C,F as S}from"./index-DgBSbrK3.js";import{T as x}from"./Toggle-DmOM-Wz9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYuvcjDC.js";import"./check-circle-solid-BXf3JcXP.js";import"./error-solid-B4_SurDV.js";import"./InlineSpinner-D0fqwfkn.js";import"./spinner-Dfy4-L9H.js";import"./index-OFzIPPeq.js";import"./index-BHSHF_Qs.js";import"./index-Cx6HPqUy.js";import"./index-vH6nmK6g.js";import"./index-bvnV1M2-.js";import"./index-BsSEAyha.js";const i=m.forwardRef(function({className:o,label:d,helpMessage:p,disabledMessage:g,name:h,...l},T){const y=m.useId(),c=l.id??y;return e.jsxs(b,{className:o,name:h,control:e.jsx(x,{id:c,ref:T,...l}),children:[e.jsx(w,{htmlFor:c,children:d}),p&&e.jsx(u,{children:p}),g&&l.disabled&&e.jsx(u,{children:g})]})}),f=m.forwardRef(function(o,d){return e.jsx(C,{asChild:!0,children:e.jsx(i,{ref:d,...o})})});try{i.displayName="SettingsToggleInput",i.__docgenInfo={description:"A toggle component.",displayName:"SettingsToggleInput",props:{className:{defaultValue:null,description:`The CSS class name for the containing field.
The CSS class name.`,name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The field name.",name:"name",required:!1,type:{name:"string"}},helpMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"helpMessage",required:!1,type:{name:"string"}},disabledMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"disabledMessage",required:!1,type:{name:"string"}}}}}catch{}try{f.displayName="SettingsToggleControl",f.__docgenInfo={description:"A styled checkbox input wrapped in a `Control` component, for use in Radix forms.",displayName:"SettingsToggleControl",props:{className:{defaultValue:null,description:`The CSS class name for the containing field.
The CSS class name.`,name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The field name.",name:"name",required:!1,type:{name:"string"}},helpMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"helpMessage",required:!1,type:{name:"string"}},disabledMessage:{defaultValue:null,description:"Optional help text to display below the setting.",name:"disabledMessage",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Form/Controls/SettingsToggle",component:i,decorators:[t=>e.jsx(S,{children:e.jsx(t,{})})],tags:["autodocs","axe-exclude"],argTypes:{},args:{name:'"any-name"',label:"Setting name",helpMessage:"This is some help text to explain what this setting does."}},a={args:{defaultChecked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874"}}},s={args:{defaultChecked:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874"}}},n={args:{disabled:!0,disabledMessage:"This feature isn't available to you right now."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574"}}},r={args:{disabled:!0,defaultChecked:!0,disabledMessage:"This feature cannot be disabled."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const B=["Unchecked","Checked","DisabledUnchecked","DisabledChecked"];export{s as Checked,r as DisabledChecked,n as DisabledUnchecked,a as Unchecked,B as __namedExportsOrder,z as default};
