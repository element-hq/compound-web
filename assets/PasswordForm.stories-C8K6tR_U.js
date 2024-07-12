import{j as e}from"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./Action-DO1O2FQ_.js";import{a as s}from"./Password-ugyJgigV.js";import"./Text-DOGHqVyt.js";import"./MFA-C9IlUuRU.js";import"./Checkbox-2E2p-REM.js";import"./Radio-Ckv_MoIU.js";import"./Toggle-Bf6I5dOM.js";import{R as r,L as a,F as o,H as u,c as g}from"./Search-PS7XYGBf.js";import{P as t}from"./Progress-HdE7dnwC.js";import"./index-C2KoGaFq.js";import"./useId-D5m2XpUu.js";import"./index-C6FLQqRT.js";import"./extends-DhVGKg3b.js";import"./index-s2Ee__EW.js";import"./Tooltip-BpTSfUbF.js";import"./floating-ui.react-D5UUZX8q.js";import"./visibility-on-BrkRTjSX.js";import"./check-CXsFGzWm.js";import"./close-D55JIkKE.js";import"./Alert-CONg58U6.js";import"./Text-DCibjNNg.js";import"./Typography-D-74lRMS.js";import"./Button-BPkQI5Wr.js";import"./UnstyledButton-CUaD5tB8.js";import"./IconButton-Dd7bS9VQ.js";import"./IndicatorIcon-iinDG_Nf.js";import"./InlineSpinner-CZEeBvQo.js";import"./Avatar-D_h5K73j.js";import"./AvatarStack-zKeD_o_3.js";import"./Badge-DhRzaND9.js";import"./ContextMenu-BLQAD9iT.js";import"./index-yeRPabPH.js";import"./index-CcE1NYMq.js";import"./index-B2VpcjXg.js";import"./index-CEUj4GHJ.js";import"./index-_X4q1Xs8.js";import"./FloatingMenu-BxFYcaYT.js";import"./DrawerMenu-r2v5qmrO.js";import"./MenuItem-CudgTWaB.js";import"./Glass-CwZVZZDo.js";import"./Heading-Bj7GMP5j.js";import"./Link-DCPbMbAN.js";import"./NavItem-B0c6PAnD.js";import"./Menu-D_7mooHs.js";import"./search-CWkX64tk.js";import"./Separator-RJ3q-qnd.js";import"./ToggleMenuItem-D2g1RKK0.js";import"./ReleaseAnnouncement-DiJEEtE4.js";import"./Toast-DiTTZX7x.js";/* empty css               */const w=n=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24",className:"cpd-icon",...n,children:[e.jsx("path",{d:"M12.713 17.712A.968.968 0 0 1 12 18a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 17a.97.97 0 0 1 .287-.712A.968.968 0 0 1 12 16a.97.97 0 0 1 .713.288c.191.191.287.429.287.712s-.096.52-.287.712Zm0-3.999A.968.968 0 0 1 12 14a.968.968 0 0 1-.713-.287A.968.968 0 0 1 11 13V9c0-.283.096-.52.287-.713A.968.968 0 0 1 12 8c.283 0 .52.096.713.287.191.192.287.43.287.713v4c0 .283-.096.52-.287.713Z"}),e.jsx("path",{fillRule:"evenodd",d:"M10.264 3.039c.767-1.344 2.705-1.344 3.472 0l8.554 14.969c.762 1.333-.2 2.992-1.736 2.992H3.446c-1.535 0-2.498-1.659-1.736-2.992l8.553-14.97ZM3.446 19 12 4.031 20.554 19H3.446Z",clipRule:"evenodd"})]}),ge={title:"Form/Password form",component:r,tags:["autodocs"],subcomponents:{Progress:t,PasswordControl:s,Label:a,Field:o},decorators:[n=>e.jsx("div",{style:{maxWidth:"378px"},children:e.jsx(n,{})})]},i=n=>{switch(n){case 1:return"Very weak password";case 2:return"Weak password";case 3:return"Strong password";case 4:return"Very strong password";default:return"Password strength"}},m=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{}),e.jsx(t,{getValueLabel:i,size:"sm",value:0,max:4})]})}),d=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"password"}),e.jsx(t,{getValueLabel:i,size:"sm",tint:"red",value:1,max:4}),e.jsxs(u,{children:[e.jsx(w,{}),"Guess time: a few seconds. Try adding a few more words."]})]})}),l=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"hunter2"}),e.jsx(t,{getValueLabel:i,size:"sm",tint:"orange",value:2,max:4}),e.jsxs(u,{children:[e.jsx(w,{}),"Guess time: a few days. Try adding a few more words."]})]})}),p=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a strong password"}),e.jsx(t,{getValueLabel:i,size:"sm",tint:"lime",value:3,max:4}),e.jsx(g,{children:"Guess time: years"})]})}),c=()=>e.jsx(r,{children:e.jsxs(o,{name:"password",children:[e.jsx(a,{children:"Password"}),e.jsx(s,{defaultValue:"this is a very strong password"}),e.jsx(t,{getValueLabel:i,size:"sm",tint:"green",value:4,max:4}),e.jsx(g,{children:"Guess time: centruries"})]})});m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="lime" value={3} max={4} />
        <SuccessMessage>Guess time: years</SuccessMessage>
      </Field>
    </Root>;
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a very strong password" />
        <Progress getValueLabel={getValueLabel} size="sm" tint="green" value={4} max={4} />
        <SuccessMessage>Guess time: centruries</SuccessMessage>
      </Field>
    </Root>;
}`,...c.parameters?.docs?.source}}};const we=["Empty","VeryWeak","Weak","Strong","VeryStrong"];export{m as Empty,p as Strong,c as VeryStrong,d as VeryWeak,l as Weak,we as __namedExportsOrder,ge as default};
