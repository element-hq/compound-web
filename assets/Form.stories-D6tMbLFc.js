import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{T as v}from"./Tooltip-BWee_oA-.js";import{R as S,E as a,H as o}from"./Message-t35Ysetp.js";import{s as u,F as p,L as n}from"./Label-BsNBFg9B.js";import{a as _}from"./Text-DZrEBsw6.js";import{a as C}from"./Password-BuisQPJa.js";import{a as I}from"./MFA-BqVpayht.js";import{r as x}from"./index-DRjF_FHU.js";import{F as E,S as V}from"./index-4or38LtJ.js";import{c as k}from"./index-lhGYx47h.js";import{a as N}from"./Checkbox-CiKmyzre.js";import{a as f}from"./Radio-2VunTFL7.js";import{a as F}from"./Toggle-BRCP4wr-.js";import{B as T}from"./Button-BORixq-h.js";import"./floating-ui.react-C6OC3uct.js";import"./index-BvEl7W6R.js";import"./check-circle-solid-DvGH8qX5.js";import"./error-DOy7ZFuJ.js";import"./InlineSpinner-DDpdhuC2.js";import"./spinner--mCkS-8r.js";import"./visibility-on-BsZOuBEH.js";import"./Action-C2z5DxOh.js";import"./index-CGa_gRws.js";import"./index-C8xBnYIG.js";import"./index-BXwbELbV.js";import"./index-Ksfxd92j.js";import"./check-BWxs5Tf9.js";import"./UnstyledButton-DuxpNl0e.js";const i=x.forwardRef(function({className:r,control:t,children:b,...j},g){const y=k(u["inline-field"],r);return e.jsxs(E,{ref:g,...j,className:y,children:[e.jsx("div",{className:u["inline-field-control"],children:t}),e.jsx("div",{className:u["inline-field-body"],children:b})]})});try{i.displayName="InlineField",i.__docgenInfo={description:"",displayName:"InlineField",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"The checkbox/radio control to render alongside the rest of the field.",name:"control",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const h=x.forwardRef(function(r,t){return e.jsx(V,{asChild:!0,children:e.jsx(T,{type:"submit",ref:t,...r})})});try{h.displayName="Submit",h.__docgenInfo={description:"A stylised submit button for forms.",displayName:"Submit",props:{disabled:{defaultValue:null,description:"Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.\n`aria-disabled` attribute is used to indicate button is disabled.\nEvent handlers are not passed to disabled buttons (onClick, onSubmit, etc.)",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The t-shirt size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},kind:{defaultValue:null,description:`The type of button.
Note: "destructive" is deprecated, please use the destructive prop in
conjunction with another button kind.`,name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"destructive"'}]}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Whether the button is an icon only button.",name:"iconOnly",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"An icon to display within the button.",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGElement>>"}}}}}catch{}const H=({disabled:s,invalid:r,readOnly:t})=>e.jsx(v,{children:e.jsxs(S,{children:[e.jsxs(p,{serverInvalid:r,name:"mxid",children:[e.jsx(n,{children:"Username"}),e.jsx(_,{disabled:s,readOnly:t,defaultValue:"Hello world!"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsxs(p,{serverInvalid:r,name:"password",children:[e.jsx(n,{children:"Password"}),e.jsx(C,{disabled:s,readOnly:t,defaultValue:"sup3rS3cur3p4ssw0rd!"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsxs(p,{serverInvalid:r,name:"mfa",children:[e.jsx(n,{children:"MFA"}),e.jsx(I,{disabled:s,readOnly:t,defaultValue:"123"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsxs(i,{serverInvalid:r,name:"remember",control:e.jsx(N,{disabled:s,readOnly:t,defaultChecked:!0}),children:[e.jsx(n,{children:"Remember me"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsxs(i,{serverInvalid:r,name:"radio",control:e.jsx(f,{disabled:s,readOnly:t,defaultChecked:!0}),children:[e.jsx(n,{children:"Option 1"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsxs(i,{serverInvalid:r,name:"radio",control:e.jsx(f,{disabled:s,readOnly:t,defaultChecked:!0}),children:[e.jsx(n,{children:"Option 2"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsxs(i,{serverInvalid:r,name:"toggle",control:e.jsx(F,{disabled:s,readOnly:t,defaultChecked:!0}),children:[e.jsx(n,{children:"Toggle"}),r?e.jsx(a,{children:"Error message."}):e.jsx(o,{children:"Help message."})]}),e.jsx(h,{disabled:s,children:"Submit"})]})}),ie={title:"Form/Kitchen Sink",component:H,argTypes:{disabled:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"}},args:{disabled:!1,readOnly:!1,invalid:!1}},l={},d={args:{disabled:!0}},c={args:{readOnly:!0}},m={args:{invalid:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...m.parameters?.docs?.source}}};const le=["Normal","Disabled","ReadOnly","Invalid"];export{d as Disabled,m as Invalid,l as Normal,c as ReadOnly,le as __namedExportsOrder,ie as default};
