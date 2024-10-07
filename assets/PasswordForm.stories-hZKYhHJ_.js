import{j as e}from"./jsx-runtime-CexXSJP5.js";import{W as p}from"./warning-B4ZpXzLn.js";import{P as s}from"./Progress-CSH-SY2b.js";import{T as x}from"./Tooltip-GcGKJhf-.js";import{R as r,H as g,S as w}from"./Message-BiisbMQR.js";import{a}from"./Password-D4qsyn4M.js";import{L as o,F as t}from"./Label-DrSdbBfa.js";import"./index-BP8_t0zE.js";import"./index-CSpfAsmC.js";import"./index-CcH3h_90.js";import"./index-BjHk5heU.js";import"./index-BlTQwN6S.js";import"./index-Dp4tTk3o.js";import"./useId-DIHOOv91.js";import"./floating-ui.react-BR2piq7W.js";import"./index-Br7_Jfcb.js";import"./index-DD7XHAoh.js";import"./check-circle-solid-TQoBW1Dk.js";import"./error-Dmbc84hO.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./visibility-on-D1sVPsTi.js";import"./Action-BuGy3aLo.js";import"./Text-DffShOOB.js";const q={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:s,PasswordControl:a,Label:o,Field:t},decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},d=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{}),e.jsx(s,{getValueLabel:n,size:"sm",value:0,max:4})]})}),i=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"hunter2"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"this is a strong password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"this is a very strong password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};const A=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{d as Empty,m as Strong,u as VeryStrong,i as VeryWeak,l as Weak,A as __namedExportsOrder,q as default};
