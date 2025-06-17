import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{W as p}from"./warning-DjySiPv7.js";import{P as r}from"./Progress-bTmZAyJn.js";import{T as x}from"./Tooltip-CNzGrA1g.js";import{R as s}from"./Root-BKygk2rD.js";import{F as a}from"./Field-B_P5RYxS.js";import{L as o}from"./Label-tz7o8eg8.js";import{a as t}from"./Password-LbcOc_BD.js";import{H as g,S as w}from"./Message-D9ShLS-4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-FGJkmGnF.js";import"./index-CKTwuSvb.js";import"./index-BwBOz17u.js";import"./index-D77-yIvl.js";import"./index-DQw2Bw4b.js";import"./index-C66SyY0f.js";import"./floating-ui.react-CUHBVVHR.js";import"./floating-ui.react-dom-6ZVBEX4r.js";import"./index-B4NPFxk7.js";import"./index-BRw1A0gZ.js";import"./visibility-on-D12idZoO.js";import"./Action-BT4DkLgj.js";import"./Text-Dcdew5g-.js";import"./check-circle-solid-Dz1dn1SN.js";import"./error-solid-DBDQzJkq.js";import"./InlineSpinner-De6ckyvb.js";import"./spinner-CR9mR-g-.js";const J={title:"Form/Password form",component:s,tags:["autodocs"],decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{}),e.jsx(r,{getValueLabel:n,size:"sm",value:0,max:4})]})}),d=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"hunter2"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(s,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(t,{defaultValue:"this is a very strong password"}),e.jsx(r,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
