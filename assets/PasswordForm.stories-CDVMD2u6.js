import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{W as c}from"./warning-Ba4XmzbL.js";import"./Action-CLcpE10y.js";import{a as s}from"./Password-Bf2o8jT2.js";import"./Text-DT5JRS9S.js";import"./MFA-CKAKPInK.js";import"./Checkbox-BdilkAqW.js";import"./Radio-Cc5Jo-u-.js";import"./Toggle-ZJYgkTo7.js";import{R as r,L as a,F as o,H as g,b as w}from"./Search-CNK1dYgd.js";import{P as t}from"./Progress-HdE7dnwC.js";import"./index-Cu9bd8lq.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./index-DKbG0bj1.js";import"./extends-DhVGKg3b.js";import"./index-s2Ee__EW.js";import"./Tooltip-BpTSfUbF.js";import"./floating-ui.react-D5UUZX8q.js";import"./visibility-on-CPVyCp5D.js";import"./check-C2HOlS1h.js";import"./close-Bexrj0gb.js";import"./search-2N9K5Dd1.js";import"./InlineSpinner-CMho_Rk3.js";import"./spinner-VY0Kw2FV.js";import"./Button-BUToQOmF.js";import"./UnstyledButton-CUaD5tB8.js";import"./Alert-BdC-ppGz.js";import"./Text-DCibjNNg.js";import"./Typography-D-74lRMS.js";import"./IconButton-Dk-0Mddn.js";import"./IndicatorIcon-iinDG_Nf.js";import"./Avatar-D_h5K73j.js";import"./AvatarStack-zKeD_o_3.js";import"./Badge-DhRzaND9.js";import"./ContextMenu-BNd97RtX.js";import"./index-CnJsbg5X.js";import"./index-CcE1NYMq.js";import"./index-B2VpcjXg.js";import"./index-CEUj4GHJ.js";import"./index-D5jPnxf-.js";import"./FloatingMenu-BxFYcaYT.js";import"./DrawerMenu-r2v5qmrO.js";import"./MenuItem-JgayYv5j.js";import"./chevron-right-DRUMXvCI.js";import"./Glass-CwZVZZDo.js";import"./Heading-Bj7GMP5j.js";import"./Link-DCPbMbAN.js";import"./NavItem-B0c6PAnD.js";import"./Menu-DnrSuccJ.js";import"./Separator-cQ79fVAM.js";import"./ToggleMenuItem-CjjUsEF6.js";import"./ReleaseAnnouncement-BsNCDX57.js";import"./Toast-DiTTZX7x.js";/* empty css               */const je={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:t,PasswordControl:s,Label:a,Field:o},decorators:[u=>e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(u,{})})]},n=u=>{switch(u){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{}),e.jsx(t,{getValueLabel:n,size:"sm",value:0,max:4})]})}),m=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),d=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"hunter2"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few days. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),p=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a very strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>;
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="lime" value={3} max={4} />
        <SuccessMessage>Guess time: years</SuccessMessage>
      </Field>
    </Root>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a very strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="green" value={4} max={4} />
        <SuccessMessage>Guess time: centruries</SuccessMessage>
      </Field>
    </Root>;
}`,...p.parameters?.docs?.source}}};const he=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{i as Empty,l as Strong,p as VeryStrong,m as VeryWeak,d as Weak,he as __namedExportsOrder,je as default};
