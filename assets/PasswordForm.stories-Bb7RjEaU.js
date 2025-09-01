import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Ce87_885.js";import"./index-NvzJM6FR.js";import{W as p}from"./warning-JQU_t2mA.js";import{P as r}from"./Progress-B4b2-CDO.js";import{T as x}from"./Tooltip-Cekd10Ob.js";import{R as s}from"./Root-u4gFNU8S.js";import{F as a}from"./Field-CcsUJZNH.js";import{L as o}from"./Label-CD2bNPo2.js";import{a as t}from"./Password-DicqQq9t.js";import{H as g,S as w}from"./Message-Bn6qlOLU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-C0DvSvJ7.js";import"./index-JOnPK44y.js";import"./index-DUX8viAi.js";import"./index-C_y1kSHD.js";import"./index-Dzxe2tK2.js";import"./index-CvtJb58s.js";import"./floating-ui.react-C9H12F-C.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-B4MF0zFl.js";import"./index-BE-qklfi.js";import"./visibility-on-Bzu2dq37.js";import"./Action-CdK7Eq9u.js";import"./Text-DG7g7ZN3.js";import"./check-circle-solid-BBHmkCNC.js";import"./error-solid-Ckyoia2B.js";import"./InlineSpinner-CGWhhFzF.js";import"./spinner-BTbelInm.js";const K={title:"Form/Password form",component:s,tags:["autodocs"],decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{}),e.jsx(r,{getValueLabel:n,size:"sm",value:0,max:4})]})}),d=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"hunter2"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a very strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
