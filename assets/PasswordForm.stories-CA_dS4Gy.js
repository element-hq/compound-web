import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./dist-AX8C0Cmt.js";import{i,r as a}from"./Tooltip-3ECq4K_M.js";import{n as o,t as s}from"./warning-Byv-A2_W.js";import{r as c,t as l}from"./Password-DV_2445D.js";import{n as u,t as d}from"./Label-BhEKbK4l.js";import{a as f,i as p,n as m}from"./Message-Ck4l89ge.js";import{n as h,t as g}from"./Root-qn3czX6E.js";import{n as _,t as v}from"./Field-vJD_SABu.js";import{n as y,t as b}from"./Progress-CVoHSm2q.js";var x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{t(),r(),s(),h(),c(),_(),u(),f(),y(),i(),x=n(),S={title:`Form/Password form`,component:g,tags:[`autodocs`],decorators:[e=>(0,x.jsx)(a,{children:(0,x.jsx)(`div`,{style:{maxWidth:`378px`},children:(0,x.jsx)(e,{})})})]},C=e=>{switch(e){case 1:return`Very weak password`;case 2:return`Weak password`;case 3:return`Strong password`;case 4:return`Very strong password`;default:return`Password strength`}},w=()=>(0,x.jsx)(g,{children:(0,x.jsxs)(v,{name:`password`,children:[(0,x.jsx)(d,{children:`Password`}),(0,x.jsx)(l,{}),(0,x.jsx)(b,{getValueLabel:C,size:`sm`,value:0,max:4})]})}),T=()=>(0,x.jsx)(g,{children:(0,x.jsxs)(v,{name:`password`,children:[(0,x.jsx)(d,{children:`Password`}),(0,x.jsx)(l,{defaultValue:`password`}),(0,x.jsx)(b,{getValueLabel:C,size:`sm`,tint:`red`,value:1,max:4}),(0,x.jsxs)(m,{children:[(0,x.jsx)(o,{}),`Guess time: a few seconds. Try adding a few more words.`]})]})}),E=()=>(0,x.jsx)(g,{children:(0,x.jsxs)(v,{name:`password`,children:[(0,x.jsx)(d,{children:`Password`}),(0,x.jsx)(l,{defaultValue:`hunter2`}),(0,x.jsx)(b,{getValueLabel:C,size:`sm`,tint:`orange`,value:2,max:4}),(0,x.jsxs)(m,{children:[(0,x.jsx)(o,{}),`Guess time: a few days. Try adding a few more words.`]})]})}),D=()=>(0,x.jsx)(g,{children:(0,x.jsxs)(v,{name:`password`,children:[(0,x.jsx)(d,{children:`Password`}),(0,x.jsx)(l,{defaultValue:`this is a strong password`}),(0,x.jsx)(b,{getValueLabel:C,size:`sm`,tint:`lime`,value:3,max:4}),(0,x.jsx)(p,{children:`Guess time: years`})]})}),O=()=>(0,x.jsx)(g,{children:(0,x.jsxs)(v,{name:`password`,children:[(0,x.jsx)(d,{children:`Password`}),(0,x.jsx)(l,{defaultValue:`this is a very strong password`}),(0,x.jsx)(b,{getValueLabel:C,size:`sm`,tint:`green`,value:4,max:4}),(0,x.jsx)(p,{children:`Guess time: centruries`})]})}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="lime" value={3} max={4} />
        <SuccessMessage>Guess time: years</SuccessMessage>
      </Field>
    </Root>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a very strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="green" value={4} max={4} />
        <SuccessMessage>Guess time: centruries</SuccessMessage>
      </Field>
    </Root>;
}`,...O.parameters?.docs?.source}}},k=[`Empty`,`VeryWeak`,`Weak`,`Strong`,`VeryStrong`]})))()}A();export{w as Empty,D as Strong,O as VeryStrong,T as VeryWeak,E as Weak,k as __namedExportsOrder,S as default};