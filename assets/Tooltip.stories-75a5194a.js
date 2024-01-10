import{j as e}from"./jsx-runtime-f6d73c06.js";import{T as r}from"./Tooltip-edd3b586.js";import"./Button-dcdac7b3.js";import{I as o}from"./IconButton-2afdb332.js";import{U as n}from"./user-profile-9aa97790.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-dcc1e4a0.js";import"./index-8bf7f4ad.js";import"./index-79556c5a.js";import"./index-2cb7b73c.js";import"./index-e131923d.js";import"./UnstyledButton-60dcee3b.js";const Z={title:"Tooltip",component:r,tags:["autodocs"],controls:{include:["side","align","open","label","caption","isTriggerInteractive"]},argTypes:{side:{control:"inline-radio",options:["left","right","top","bottom"]},align:{control:"inline-radio",options:["center","start","end"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"string"},caption:{control:"string"}},args:{side:"left",align:"center",open:void 0,label:"@bob:example.org",caption:void 0,children:e.jsx(o,{"data-testid":"testbutton",children:e.jsx(n,{})})},decorators:[W=>e.jsx("div",{style:{padding:100},children:e.jsx(W,{})})]},Y=()=>e.jsxs("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{open:!0,side:"top",label:"@bob:example.org",children:e.jsx(o,{children:e.jsx(n,{})})}),e.jsx(r,{open:!0,side:"right",label:"@bob:example.org",children:e.jsx(o,{children:e.jsx(n,{})})}),e.jsx(r,{open:!0,side:"bottom",label:"@bob:example.org",children:e.jsx(o,{children:e.jsx(n,{})})}),e.jsx(r,{open:!0,side:"left",label:"@bob:example.org",children:e.jsx(o,{children:e.jsx(n,{})})})]}),a=Y.bind({});a.args={};const R=()=>e.jsxs("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{open:!0,align:"center",label:"Copy",caption:"⌘ + C",children:e.jsx(o,{children:e.jsx(n,{})})}),e.jsx(r,{open:!0,align:"start",label:"@bob:example.org",caption:"⌘ + C",children:e.jsx(o,{children:e.jsx(n,{})})}),e.jsx(r,{open:!0,align:"end",label:"@bob:example.org",caption:"⌘ + C",children:e.jsx(o,{children:e.jsx(n,{})})})]}),s=R.bind({});s.args={};const t={args:{side:void 0,align:void 0}},i={args:{...t.args,label:"Copy",caption:"⌘ + C"}},l={args:{...t.args,open:!0,label:"I'm always open"}},c={args:{...t.args,open:!1,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},p={args:{...t.args,isTriggerInteractive:!0,label:"Shown with delay"}},d={args:{...t.args,isTriggerInteractive:!1,label:"Shown without delay",children:e.jsx(o,{"data-testid":"testbutton",disabled:!0,children:e.jsx(n,{})})}};var g,m,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "50px",
  flexDirection: "column",
  alignItems: "center"
}}>
    <TooltipComponent open={true} side="top" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="right" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="bottom" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="left" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
  </div>`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,x,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "50px",
  flexDirection: "column",
  alignItems: "center"
}}>
    <TooltipComponent open={true} align="center" label="Copy" caption="⌘ + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} align="start" label="@bob:example.org" caption="⌘ + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} align="end" label="@bob:example.org" caption="⌘ + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
  </div>`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var h,j,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // unset to test defaults
    side: undefined,
    align: undefined
  }
}`,...(f=(j=t.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var T,C,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Copy",
    caption: "⌘ + C"
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var y,B,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open"
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,w,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...(U=(w=c.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var F,N,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay"
  }
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var O,_,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
  }
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const $=["Side","Align","Default","WithCaption","ForcedOpen","ForcedClose","InteractiveTrigger","NonInteractiveTrigger"];export{s as Align,t as Default,c as ForcedClose,l as ForcedOpen,p as InteractiveTrigger,d as NonInteractiveTrigger,a as Side,i as WithCaption,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Tooltip.stories-75a5194a.js.map
