import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DEAyTKha.js";import"./index-BuxLTuqg.js";import{W as p}from"./warning-D6B4mhDo.js";import{P as r}from"./Progress-CnaEooXx.js";import{T as x}from"./Tooltip-CtHH_Rd-.js";import{R as s}from"./Root-D54ObBKl.js";import{F as a}from"./Field-BFpG_mOG.js";import{L as o}from"./Label-qS-z_oJI.js";import{a as t}from"./Password-DO48mldX.js";import{S as g,H as w}from"./Message-ChjD6Koj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Uj5m292_.js";import"./index-BKFfprmm.js";import"./index-BZvkY9vX.js";import"./index-Bh7Eganq.js";import"./index-BmTgIjMZ.js";import"./floating-ui.react-Doc1Zd8n.js";import"./index-BRW6gyhX.js";import"./index-Cah0FWnK.js";import"./visibility-on-C-r7hD0s.js";import"./Action-CyWY60am.js";import"./Text-CR8Gz6ke.js";import"./check-circle-solid-CZPcpWUi.js";import"./error-solid-C-gaRdfv.js";import"./InlineSpinner-DYgJ6ZE9.js";import"./spinner-eId45Rtj.js";const D={title:"Form/Password form",component:s,tags:["autodocs"],decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{}),e.jsx(r,{getValueLabel:n,size:"sm",value:0,max:4})]})}),d=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(w,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"hunter2"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(w,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(g,{children:"Guess time: years"})]})}),u=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a very strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(g,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const J=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{i as Empty,m as Strong,u as VeryStrong,d as VeryWeak,l as Weak,J as __namedExportsOrder,D as default};
