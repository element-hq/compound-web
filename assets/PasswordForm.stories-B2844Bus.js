import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{W as p}from"./warning-BjF2Nk_8.js";import{P as s}from"./Progress-Chcy4XTv.js";import{T as x}from"./Tooltip-Cdg4zD8Q.js";import{R as r,H as g,S as w}from"./Message-DCWeNZp6.js";import{a}from"./Password-WF5siPDX.js";import{L as o,F as t}from"./Label-BeCBVhF_.js";import"./index-CTjT7uj6.js";import"./index-CCQ3W5xA.js";import"./index-DB7jFGW4.js";import"./index-D5Q7rJ_l.js";import"./index-CMONDToX.js";import"./index-oNbozaCL.js";import"./floating-ui.react-CSAlgT53.js";import"./index-BCYjhLHs.js";import"./index-DbI0TId9.js";import"./check-circle-solid-DVxMr22u.js";import"./error-BNJ-Uf88.js";import"./InlineSpinner-BcfLWtUV.js";import"./spinner-CUi8pG9q.js";import"./visibility-on-DD08DRPb.js";import"./Action-DnQ6T7I2.js";import"./Text-D7oYaZ87.js";const O={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:s,PasswordControl:a,Label:o,Field:t},decorators:[c=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(c,{})})})]},n=c=>{switch(c){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},d=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{}),e.jsx(s,{getValueLabel:n,size:"sm",value:0,max:4})]})}),i=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"hunter2"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(p,{}),"Guess time: a few days. Try adding a few more words."]})]})}),m=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"this is a strong password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),u=()=>e.jsx(r,{children:e.jsxs(t,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(a,{defaultValue:"this is a very strong password"}),e.jsx(s,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
