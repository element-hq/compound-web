import{j as e}from"./jsx-runtime-CexXSJP5.js";import{W as c}from"./warning-ChS4d0Jy.js";import"./Action-BnHPbiOZ.js";import{a as s}from"./Password-BOcbW_8L.js";import"./Text-BpUtDsRn.js";import"./MFA-CXKePhxN.js";import"./Checkbox-BHW8qkwR.js";import"./Radio-CFt7gJUV.js";import"./Toggle-BlCbqmZl.js";import{R as r,L as a,F as o,H as g,b as w}from"./Search-DRa3JZpz.js";import{P as t}from"./Progress-CXZoBeWb.js";import"./index-BP8_t0zE.js";import"./index-BSFQGMYZ.js";import"./useId-DIHOOv91.js";import"./index-DA5mkyhX.js";import"./extends-CF3RwP-h.js";import"./index-DG4CWwun.js";import"./index-BvxdkTda.js";import"./Tooltip-Ci0GGlGn.js";import"./floating-ui.react-BampJf39.js";import"./visibility-on-CjnqbRsU.js";import"./check-DrA_wPr-.js";import"./close-BapqxG5D.js";import"./search-BC9ffyhQ.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-BLPDHEoz.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-CRpBfD9a.js";import"./Text-BbTw4EGb.js";import"./Typography-Du42WgpX.js";import"./IconButton-DWF2dIdC.js";import"./IndicatorIcon-BAe7lg0o.js";import"./Avatar-BSTe3LpV.js";import"./AvatarStack-DkNfjvk5.js";import"./Badge-CVqqsKU2.js";import"./ContextMenu-D7YbtuQ_.js";import"./index-CHUZ5_qD.js";import"./index-vl_XNHfj.js";import"./index-Dp4tTk3o.js";import"./index-ChBlSHh4.js";import"./FloatingMenu-Bh96dAM3.js";import"./DrawerMenu-DPEIp9Qb.js";import"./MenuItem-DyAc03nM.js";import"./chevron-right-CaLdGLa3.js";import"./Glass-CSik8Dag.js";import"./Heading-BJzoNNuu.js";import"./Link-zrkAu2Ho.js";import"./NavItem-BeIhRN_Q.js";import"./Menu-Cecy--r7.js";import"./Separator-DGFWAXNA.js";import"./ToggleMenuItem-CJljrQdD.js";import"./ReleaseAnnouncement-DES3rrHS.js";import"./Toast-DFHCLnMH.js";/* empty css               */const je={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:t,PasswordControl:s,Label:a,Field:o},decorators:[u=>e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(u,{})})]},n=u=>{switch(u){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{}),e.jsx(t,{getValueLabel:n,size:"sm",value:0,max:4})]})}),m=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),d=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"hunter2"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few days. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),p=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a very strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
