import{j as e}from"./jsx-runtime-CCN1M2D4.js";import"./iframe-Cb-DQFC4.js";import"./index-qiB8ITaD.js";import{W as p}from"./warning-CYVGvjzV.js";import{P as r}from"./Progress-BTccfLo7.js";import{T as x}from"./Tooltip-uKWw52VZ.js";import{R as s}from"./Root-BBGm-tSf.js";import{F as a}from"./Field-BiRP8cE5.js";import{L as o}from"./Label-mz63T7oK.js";import{a as t}from"./Password-C7z4XDle.js";import{H as g,S as w}from"./Message-DIDvI34G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R_IcpHoB.js";import"./index-DHt2Atod.js";import"./index-G_6YbI0A.js";import"./index-Pj1OCSO7.js";import"./index-BAa1NHqO.js";import"./floating-ui.react-DyOY4A2i.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-C9QqeA7l.js";import"./index-CHP1Dja4.js";import"./visibility-on-BwPGm8Bw.js";import"./Action-4UJ7VLSh.js";import"./Text-DqhtgRIF.js";import"./check-circle-solid-Ca2jfnqu.js";import"./error-solid-BB9oGC5H.js";import"./InlineSpinner-Dq2LC4MO.js";import"./spinner-D1DwAF9J.js";const J={title:"Form/Password form",component:s,tags:["autodocs"],decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{}),e.jsx(r,{getValueLabel:n,size:"sm",value:0,max:4})]})}),d=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"hunter2"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a very strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const K=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{i as Empty,m as Strong,u as VeryStrong,d as VeryWeak,l as Weak,K as __namedExportsOrder,J as default};
