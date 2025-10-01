import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bhg0zYJA.js";import"./index-zjdN5a1N.js";import{W as p}from"./warning-D8OmYt_-.js";import{P as r}from"./Progress-BZ2eern2.js";import{T as x}from"./Tooltip-D7zevKa0.js";import{R as s}from"./Root-C5fsr3at.js";import{F as a}from"./Field-BcasndK9.js";import{L as o}from"./Label-DOcv0u3V.js";import{a as t}from"./Password-CDfoDC0_.js";import{H as g,S as w}from"./Message-BkKadAta.js";import"./preload-helper-D9Z9MdNV.js";import"./index-CZgHnP5D.js";import"./index-DX12Qqey.js";import"./index-CpRWZ-N-.js";import"./index-BZMNXkkt.js";import"./index-B7iO71av.js";import"./index-DBYqfBe2.js";import"./floating-ui.react-BgBN5lP_.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-mHv1i3rV.js";import"./index-DuSAb-NX.js";import"./visibility-on-D5iOV6eo.js";import"./Action-CoYk5pLm.js";import"./Text-DDAQIxoO.js";import"./check-circle-solid-yF79DZ2P.js";import"./error-solid-DRIzH7eF.js";import"./InlineSpinner-XFcGm7E1.js";import"./spinner-BnIIKOiD.js";const K={title:"Form/Password form",component:s,tags:["autodocs"],decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{}),e.jsx(r,{getValueLabel:n,size:"sm",value:0,max:4})]})}),d=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"hunter2"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a very strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const N=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{i as Empty,m as Strong,u as VeryStrong,d as VeryWeak,l as Weak,N as __namedExportsOrder,K as default};
