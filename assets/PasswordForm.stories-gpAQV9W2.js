import{j as e}from"./jsx-runtime-CexXSJP5.js";import{W as c}from"./warning-ChS4d0Jy.js";import"./Action-DpWob5LS.js";import{a as s}from"./Password-DPDp-Eyb.js";import"./Text-BpUtDsRn.js";import"./MFA-BcsE-4m7.js";import"./Checkbox-BHW8qkwR.js";import"./Radio-CFt7gJUV.js";import"./Toggle-BlCbqmZl.js";import{R as r,L as a,F as o,H as g,b as w}from"./Search-CjNpLk5E.js";import{P as t}from"./Progress-kAo68Ncz.js";import"./index-BP8_t0zE.js";import"./index-BSFQGMYZ.js";import"./useId-DIHOOv91.js";import"./index-DA5mkyhX.js";import"./extends-CF3RwP-h.js";import"./index-DG4CWwun.js";import"./index-BvxdkTda.js";import"./Tooltip-CHeTE3nE.js";import"./floating-ui.react-BampJf39.js";import"./visibility-on-CjnqbRsU.js";import"./check-DrA_wPr-.js";import"./close-BapqxG5D.js";import"./search-BC9ffyhQ.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-BLPDHEoz.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-B-hND-IY.js";import"./Text-DQA-v0me.js";import"./Typography-DW1jQAHD.js";import"./IconButton-Db7JTW02.js";import"./IndicatorIcon-yC0g9ajQ.js";import"./Avatar-Bzl0WR0v.js";import"./AvatarStack-Bcn5PWWK.js";import"./Badge-DERiemOv.js";import"./ContextMenu-CvgE_T27.js";import"./index-CHUZ5_qD.js";import"./index-vl_XNHfj.js";import"./index-Dp4tTk3o.js";import"./index-ChBlSHh4.js";import"./FloatingMenu-ChdMoh_x.js";import"./DrawerMenu-DPEIp9Qb.js";import"./MenuItem-D5bjBLJv.js";import"./chevron-right-CaLdGLa3.js";import"./Glass-CSik8Dag.js";import"./Heading-BzQEB82_.js";import"./Link-H_Ar01eM.js";import"./NavItem-BeIhRN_Q.js";import"./Menu-CK5oJ9qx.js";import"./Separator-YkkwOwd9.js";import"./ToggleMenuItem-_3rdvkj3.js";import"./ReleaseAnnouncement-BKItNgir.js";import"./Toast-DFHCLnMH.js";/* empty css               */const je={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:t,PasswordControl:s,Label:a,Field:o},decorators:[u=>e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(u,{})})]},n=u=>{switch(u){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{}),e.jsx(t,{getValueLabel:n,size:"sm",value:0,max:4})]})}),m=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),d=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"hunter2"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few days. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),p=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a very strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
