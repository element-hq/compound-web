import{j as e}from"./jsx-runtime-CexXSJP5.js";import{W as c}from"./warning-ChS4d0Jy.js";import"./Action-TfqU809o.js";import{a as s}from"./Password-BTYCOeTM.js";import"./Text-Cz5oMJIL.js";import"./MFA-1X7uPcX5.js";import"./Checkbox-C46Ejh3M.js";import"./Radio-CvV1BscZ.js";import"./Toggle-Q78m7eTC.js";import{R as r,L as a,F as o,H as g,b as w}from"./Search-CCoKOr8w.js";import{P as t}from"./Progress-C3rwhIWa.js";import"./index-BP8_t0zE.js";import"./index-CSpfAsmC.js";import"./useId-DIHOOv91.js";import"./index-Dn9bhuYh.js";import"./index-DD7XHAoh.js";import"./index-Dp4tTk3o.js";import"./index-vl_XNHfj.js";import"./index-CkD-EKAR.js";import"./index-Cw6ikIwd.js";import"./Tooltip-BPWNxroh.js";import"./floating-ui.react-BO1cKL3J.js";import"./visibility-on-CjnqbRsU.js";import"./check-DrA_wPr-.js";import"./close-BapqxG5D.js";import"./search-BC9ffyhQ.js";import"./InlineSpinner-DZ2uBgAt.js";import"./spinner-DszwWdC7.js";import"./Button-iukP6Ype.js";import"./UnstyledButton-C9fNLva5.js";import"./Alert-ejU2cg2U.js";import"./Text-43GasnQW.js";import"./Typography-BWOtt-hZ.js";import"./IconButton-DFNStmTH.js";import"./IndicatorIcon-Dtf30Spd.js";import"./Avatar-OPpxc4CT.js";import"./AvatarStack-Ba__udwu.js";import"./Badge-CDnfCw2C.js";import"./ContextMenu-Dm_eMI1f.js";import"./index-DVjhIofj.js";import"./extends-CF3RwP-h.js";import"./FloatingMenu-CL2la2kV.js";import"./DrawerMenu-BgyYdqxq.js";import"./MenuItem-DakIqoyJ.js";import"./chevron-right-CaLdGLa3.js";import"./Glass-COqtBFQM.js";import"./Heading-DUAGg0Hg.js";import"./Link-CCSCFCbW.js";import"./NavItem-CCdVkP0k.js";import"./Menu-DgcUsKZr.js";import"./Separator-l0Lys_Sb.js";import"./ToggleMenuItem-BC_hGi6M.js";import"./ReleaseAnnouncement-rKa3scX-.js";import"./Toast-BFUH-DR1.js";/* empty css               */const je={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:t,PasswordControl:s,Label:a,Field:o},decorators:[u=>e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(u,{})})]},n=u=>{switch(u){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},i=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{}),e.jsx(t,{getValueLabel:n,size:"sm",value:0,max:4})]})}),m=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"red",value:1,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),d=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"hunter2"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(g,{children:[e.jsx(c,{}),"Guess time: a few days. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"lime",value:3,max:4}),e.jsx(w,{children:"Guess time: years"})]})}),p=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a very strong password"}),e.jsx(t,{getValueLabel:n,size:"sm",tint:"green",value:4,max:4}),e.jsx(w,{children:"Guess time: centruries"})]})});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
