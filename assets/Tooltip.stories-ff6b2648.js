import{j as e}from"./jsx-runtime-f6d73c06.js";import{T as P}from"./Tooltip-91d6e219.js";import"./Button-1d7556c8.js";import{I as i}from"./IconButton-3b043bff.js";import{U as p}from"./user-profile-5dd823c8.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./floating-ui.react-97a0fed4.js";import"./index-8bf7f4ad.js";import"./index-e131923d.js";import"./UnstyledButton-f4d497aa.js";import"./IndicatorIcon-ec96b47b.js";const K={title:"Tooltip",component:P,tags:["autodocs"],controls:{include:["placement","open","label","caption","isTriggerInteractive"]},argTypes:{placement:{control:"inline-radio",options:["top","right","left","bottom"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"string"},caption:{control:"string"}},args:{placement:"left",label:"@bob:example.org",onOpenChange:void 0,children:e.jsx(i,{"data-testid":"testbutton",children:e.jsx(p,{})})},decorators:[r=>e.jsx("div",{style:{padding:100},children:e.jsx(r,{})})]},U=({children:r})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:r}),L=()=>e.jsx(U,{children:["top","top-start","right","right-end","bottom","bottom-end","left","left-start"].map(r=>e.jsx(P,{open:!0,placement:r,label:"@bob:example.org",children:e.jsx(i,{children:e.jsx(p,{})})},r))}),o=L.bind({});o.args={};const t={args:{placement:void 0}},a={args:{...t.args,label:"Copy",caption:"Ctrl + C"}},s={args:{...t.args,open:!0,label:"I'm always open"}},n={args:{...t.args,open:!1,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},l={args:{...t.args,isTriggerInteractive:!0,label:"Shown with delay"}},c={args:{...t.args,isTriggerInteractive:!1,label:"Shown without delay",children:e.jsx(i,{"data-testid":"testbutton",disabled:!0,children:e.jsx(p,{})})}};var m,d,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,b,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    // unset to test defaults
    placement: undefined
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,x,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Copy",
    caption: "Ctrl + C"
  }
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var T,y,j;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open"
  }
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,C,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,D,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay"
  }
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var F,N,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
  }
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const M=["Placement","Default","WithCaption","ForcedOpen","ForcedClose","InteractiveTrigger","NonInteractiveTrigger"];export{t as Default,n as ForcedClose,s as ForcedOpen,l as InteractiveTrigger,c as NonInteractiveTrigger,o as Placement,a as WithCaption,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Tooltip.stories-ff6b2648.js.map
