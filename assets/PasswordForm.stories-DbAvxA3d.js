import{j as e}from"./jsx-runtime-CexXSJP5.js";import{W as c}from"./warning-B4ZpXzLn.js";import"./Action-DOKAb0gd.js";import{a as s}from"./Password-BMEqo95U.js";import"./Text-CbEoPjZC.js";import"./MFA-DeuBTLWq.js";import"./Checkbox-D1pECWlH.js";import"./Radio-xCqHn8Eh.js";import"./Toggle-DqDpfLtf.js";import{R as r,L as o,F as a,H as g,b as w}from"./EditInPlace-oQnHbB55.js";import{P as t}from"./Progress-C6Su6PJM.js";import{T as x}from"./Tooltip-CTXZVMYG.js";import"./index-BP8_t0zE.js";import"./index-CSpfAsmC.js";import"./useId-DIHOOv91.js";import"./index-BugjtUKR.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-CcH3h_90.js";import"./index-BjHk5heU.js";import"./index-BlTQwN6S.js";import"./visibility-on-D1sVPsTi.js";import"./check-Bjchr0Ec.js";import"./close-D4bMmhFz.js";import"./search-BC9ffyhQ.js";import"./error-Dmbc84hO.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-C0_Ps78g.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-Ce9ytuQk.js";import"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";import"./IconButton-CcnD_oXR.js";import"./IndicatorIcon-_PMFIuo8.js";import"./Avatar-DyB-Y6ln.js";import"./AvatarStack-DBPldPV8.js";import"./Badge-Cf9Fivpi.js";import"./ContextMenu-zZe3xWRX.js";import"./index-BF9S1Jqn.js";import"./floating-ui.react-CWvUcNvr.js";import"./FloatingMenu-t36h7pay.js";import"./DrawerMenu-BgyYdqxq.js";import"./MenuItem-CmF0V73j.js";import"./chevron-right-DF47_mtr.js";import"./Glass-COqtBFQM.js";import"./Heading-DqG7uK5Y.js";import"./Link-DttFLitk.js";import"./NavItem-CCdVkP0k.js";import"./Menu-CW2xqy9n.js";import"./Separator-zVStbRaM.js";import"./ToggleMenuItem--uj374TQ.js";import"./ReleaseAnnouncement-DJufSwFk.js";import"./Toast-BFUH-DR1.js";import"./Dropdown-CoygDPzy.js";import"./chevron-down-Ua1BCmcD.js";/* empty css               */const fe={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:t,PasswordControl:s,Label:o,Field:a},decorators:[u=>e.jsx(x,{children:e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(u,{})})})]},n=u=>{switch(u){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(r,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(s,{}),e.jsx(t,{getValueLabel:n,size:"sm",value:0,max:4})]})}),m=()=>e.jsx(r,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(s,{defaultValue:"password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),d=()=>e.jsx(r,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(s,{defaultValue:"hunter2"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few days. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(s,{defaultValue:"this is a strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),p=()=>e.jsx(r,{children:e.jsxs(a,{name:"password",children:[e.jsx(o,{children:"Password"}),e.jsx(s,{defaultValue:"this is a very strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const Ve=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{i as Empty,l as Strong,p as VeryStrong,m as VeryWeak,d as Weak,Ve as __namedExportsOrder,fe as default};
