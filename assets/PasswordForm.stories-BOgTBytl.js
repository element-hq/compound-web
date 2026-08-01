import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./react-BJoyWkjz.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{t as r}from"./dist-BYWRpQRE.js";import{i,r as a}from"./Tooltip-bz360ahY.js";import{n as o,t as s}from"./warning-AtMO-QsY.js";import{n as c}from"./Password-BKLOk8fi.js";import{i as l,o as u,t as d}from"./Form-CQK_H2v-.js";import{c as f,i as p,o as m}from"./InlineField-CA8pctdA.js";import{n as h,t as g}from"./Progress-BZseRX4L.js";var _,v,y,b,x,S,C,w,T;e((()=>{t(),r(),s(),d(),h(),i(),_=n(),v={title:`Form/Password form`,component:u,tags:[`autodocs`],decorators:[e=>(0,_.jsx)(a,{children:(0,_.jsx)(`div`,{style:{maxWidth:`378px`},children:(0,_.jsx)(e,{})})})]},y=e=>{switch(e){case 1:return`Very weak password`;case 2:return`Weak password`;case 3:return`Strong password`;case 4:return`Very strong password`;default:return`Password strength`}},b=()=>(0,_.jsx)(u,{children:(0,_.jsxs)(l,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(c,{}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,value:0,max:4})]})}),x=()=>(0,_.jsx)(u,{children:(0,_.jsxs)(l,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(c,{defaultValue:`password`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`red`,value:1,max:4}),(0,_.jsxs)(p,{children:[(0,_.jsx)(o,{}),`Guess time: a few seconds. Try adding a few more words.`]})]})}),S=()=>(0,_.jsx)(u,{children:(0,_.jsxs)(l,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(c,{defaultValue:`hunter2`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`orange`,value:2,max:4}),(0,_.jsxs)(p,{children:[(0,_.jsx)(o,{}),`Guess time: a few days. Try adding a few more words.`]})]})}),C=()=>(0,_.jsx)(u,{children:(0,_.jsxs)(l,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(c,{defaultValue:`this is a strong password`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`lime`,value:3,max:4}),(0,_.jsx)(m,{children:`Guess time: years`})]})}),w=()=>(0,_.jsx)(u,{children:(0,_.jsxs)(l,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(c,{defaultValue:`this is a very strong password`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`green`,value:4,max:4}),(0,_.jsx)(m,{children:`Guess time: centruries`})]})}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="lime" value={3} max={4} />
        <SuccessMessage>Guess time: years</SuccessMessage>
      </Field>
    </Root>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a very strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="green" value={4} max={4} />
        <SuccessMessage>Guess time: centruries</SuccessMessage>
      </Field>
    </Root>;
}`,...w.parameters?.docs?.source}}},T=[`Empty`,`VeryWeak`,`Weak`,`Strong`,`VeryStrong`]}))();export{b as Empty,C as Strong,w as VeryStrong,x as VeryWeak,S as Weak,T as __namedExportsOrder,v as default};