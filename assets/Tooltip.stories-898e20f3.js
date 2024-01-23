import{j as e}from"./jsx-runtime-f6d73c06.js";import{T as m}from"./Tooltip-7b34be2e.js";import"./Button-dcdac7b3.js";import{I as a}from"./IconButton-b6311958.js";import{U as s}from"./user-profile-9aa97790.js";import{T as W}from"./TooltipProvider-1374ddd1.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-fc9b93e8.js";import"./index-79556c5a.js";import"./index-67f1f257.js";import"./index-6e117a6c.js";import"./index-8bf7f4ad.js";import"./index-e131923d.js";import"./UnstyledButton-60dcee3b.js";import"./IndicatorIcon-a0fbf39e.js";const te={title:"Tooltip",component:m,tags:["autodocs"],controls:{include:["side","align","open","label","caption","isTriggerInteractive"]},argTypes:{side:{control:"inline-radio",options:["left","right","top","bottom"]},align:{control:"inline-radio",options:["center","start","end"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"string"},caption:{control:"string"}},args:{side:"left",align:"center",open:void 0,label:"@bob:example.org",caption:void 0,children:e.jsx(a,{"data-testid":"testbutton",children:e.jsx(s,{})})},decorators:[o=>e.jsx(W,{children:e.jsx("div",{style:{padding:100},children:e.jsx(o,{})})})]},E=({children:o})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:o}),Y=()=>e.jsx(E,{children:["top","right","bottom","left"].map(o=>e.jsx(m,{open:!0,side:o,label:"@bob:example.org",children:e.jsx(a,{children:e.jsx(s,{})})},o))}),t=Y.bind({});t.args={};const P=()=>e.jsxs(E,{children:[e.jsx(m,{open:!0,align:"center",label:"Copy",caption:"⌘ + C",children:e.jsx(a,{children:e.jsx(s,{})})}),["start","end"].map(o=>e.jsx(m,{open:!0,align:o,label:"@bob:example.org",caption:"⌘ + C",children:e.jsx(a,{children:e.jsx(s,{})})},o))]}),n=P.bind({});n.args={};const r={args:{side:void 0,align:void 0}},i={args:{...r.args,label:"Copy",caption:"⌘ + C"}},l={args:{...r.args,open:!0,label:"I'm always open"}},c={args:{...r.args,open:!1,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},p={args:{...r.args,isTriggerInteractive:!0,label:"Shown with delay"}},d={args:{...r.args,isTriggerInteractive:!1,label:"Shown without delay",children:e.jsx(a,{"data-testid":"testbutton",disabled:!0,children:e.jsx(s,{})})}};var g,u,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Layout>
    {(["top", "right", "bottom", "left"] as const).map(side => <TooltipComponent key={side} open side={side} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,I;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Layout>
    <TooltipComponent open={true} align="center" label="Copy" caption="⌘ + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    {(["start", "end"] as const).map(align => <TooltipComponent key={align} open align={align} label="@bob:example.org" caption="⌘ + C">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var f,T,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    // unset to test defaults
    side: undefined,
    align: undefined
  }
}`,...(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var y,C,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Copy",
    caption: "⌘ + C"
  }
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,w,B;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open"
  }
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var D,U,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...(L=(U=c.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var F,N,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay"
  }
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var O,_,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ne=["Side","Align","Default","WithCaption","ForcedOpen","ForcedClose","InteractiveTrigger","NonInteractiveTrigger"];export{n as Align,r as Default,c as ForcedClose,l as ForcedOpen,p as InteractiveTrigger,d as NonInteractiveTrigger,t as Side,i as WithCaption,ne as __namedExportsOrder,te as default};
//# sourceMappingURL=Tooltip.stories-898e20f3.js.map
