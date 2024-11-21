import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{W as p}from"./warning-DNnCy5FR.js";import{P as s}from"./Progress-B_e5mjcT.js";import{T as x}from"./Tooltip-BZY7-Lxm.js";import{F as r,L as a}from"./Label-D6kuM1CS.js";import{a as o}from"./Password-DlAh7deI.js";import{R as t,H as g,S as w}from"./Message-C73b1htF.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./index-BXwbELbV.js";import"./index-Ksfxd92j.js";import"./index-BvEl7W6R.js";import"./index-C8xBnYIG.js";import"./floating-ui.react-Db6yOP75.js";import"./index-D1HWMFAy.js";import"./index-CGa_gRws.js";import"./visibility-on-BsZOuBEH.js";import"./Action-Bg3Q4nae.js";import"./Text-dpxHjQ7y.js";import"./check-circle-solid-DvGH8qX5.js";import"./error-DOy7ZFuJ.js";import"./InlineSpinner-DDpdhuC2.js";import"./spinner--mCkS-8r.js";const O={title:"Form/Password form",component:t,tags:["autodocs"],subcomponents:{Progress:s,PasswordControl:o,Label:a,Field:r},decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},d=()=>e.jsx(t,{children:e.jsxs(r,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(o,{}),e.jsx(s,{getValueLabel:n,size:"sm",value:0,max:4})]})}),i=()=>e.jsx(t,{children:e.jsxs(r,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(o,{defaultValue:"password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(t,{children:e.jsxs(r,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(o,{defaultValue:"hunter2"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(t,{children:e.jsxs(r,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(o,{defaultValue:"this is a strong password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(t,{children:e.jsxs(r,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(o,{defaultValue:"this is a very strong password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>;
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="red" value={1} max={4} />
        <HelpMessage>
          <WarningIcon />
          Guess time: a few seconds. Try adding a few more words.
        </HelpMessage>
      </Field>
    </Root>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="hunter2" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="orange" value={2} max={4} />
        <HelpMessage>
          <WarningIcon />
          Guess time: a few days. Try adding a few more words.
        </HelpMessage>
      </Field>
    </Root>;
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="lime" value={3} max={4} />
        <SuccessMessage>Guess time: years</SuccessMessage>
      </Field>
    </Root>;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a very strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="green" value={4} max={4} />
        <SuccessMessage>Guess time: centruries</SuccessMessage>
      </Field>
    </Root>;
}`,...u.parameters?.docs?.source}}};const q=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{d as Empty,m as Strong,u as VeryStrong,i as VeryWeak,l as Weak,q as __namedExportsOrder,O as default};
