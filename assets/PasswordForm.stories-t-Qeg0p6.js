import{n as e}from"./chunk-BneVvdWh.js";import{J as t}from"./iframe-D_uSTyK6.js";import{t as n}from"./jsx-runtime-DweqXWlm.js";import{t as r}from"./dist-CPflfhBD.js";import{i,r as a}from"./Tooltip-MvKhvd73.js";import{n as o,t as s}from"./warning-D1J6yepc.js";import{d as c,f as l,l as u}from"./EditInPlace-C5NgDmy4.js";import{n as d}from"./Password-C-Fzsdr1.js";import{c as f,i as p,o as m}from"./InlineField-Dz4-6Ru4.js";import{n as h,t as g}from"./Progress-DcgCg6eO.js";var _,v,y,b,x,S,C,w,T;e((()=>{t(),r(),s(),u(),h(),i(),_=n(),v={title:`Form/Password form`,component:l,tags:[`autodocs`],decorators:[e=>(0,_.jsx)(a,{children:(0,_.jsx)(`div`,{style:{maxWidth:`378px`},children:(0,_.jsx)(e,{})})})]},y=e=>{switch(e){case 1:return`Very weak password`;case 2:return`Weak password`;case 3:return`Strong password`;case 4:return`Very strong password`;default:return`Password strength`}},b=()=>(0,_.jsx)(l,{children:(0,_.jsxs)(c,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(d,{}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,value:0,max:4})]})}),x=()=>(0,_.jsx)(l,{children:(0,_.jsxs)(c,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(d,{defaultValue:`password`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`red`,value:1,max:4}),(0,_.jsxs)(p,{children:[(0,_.jsx)(o,{}),`Guess time: a few seconds. Try adding a few more words.`]})]})}),S=()=>(0,_.jsx)(l,{children:(0,_.jsxs)(c,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(d,{defaultValue:`hunter2`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`orange`,value:2,max:4}),(0,_.jsxs)(p,{children:[(0,_.jsx)(o,{}),`Guess time: a few days. Try adding a few more words.`]})]})}),C=()=>(0,_.jsx)(l,{children:(0,_.jsxs)(c,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(d,{defaultValue:`this is a strong password`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`lime`,value:3,max:4}),(0,_.jsx)(m,{children:`Guess time: years`})]})}),w=()=>(0,_.jsx)(l,{children:(0,_.jsxs)(c,{name:`password`,children:[(0,_.jsx)(f,{children:`Password`}),(0,_.jsx)(d,{defaultValue:`this is a very strong password`}),(0,_.jsx)(g,{getValueLabel:y,size:`sm`,tint:`green`,value:4,max:4}),(0,_.jsx)(m,{children:`Guess time: centruries`})]})}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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