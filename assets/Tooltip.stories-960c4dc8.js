import{j as e}from"./jsx-runtime-f6d73c06.js";import{T as M}from"./Tooltip-08173e5b.js";import"./Button-1d7556c8.js";import{I as d}from"./IconButton-3b043bff.js";import{U as m}from"./user-profile-5dd823c8.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./floating-ui.react-97a0fed4.js";import"./index-8bf7f4ad.js";import"./index-e131923d.js";import"./UnstyledButton-f4d497aa.js";import"./IndicatorIcon-ec96b47b.js";const te={title:"Tooltip",component:M,tags:["autodocs"],controls:{include:["placement","open","label","caption","isTriggerInteractive"]},argTypes:{placement:{control:"inline-radio",options:["top","right","left","bottom"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"string"},caption:{control:"string"}},args:{placement:"left",label:"@bob:example.org",onOpenChange:void 0,children:e.jsx(d,{"data-testid":"testbutton",children:e.jsx(m,{})})},decorators:[r=>e.jsx("div",{style:{padding:100},children:e.jsx(r,{})})]},A=({children:r})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:r}),R=()=>e.jsx(A,{children:["top","top-start","right","right-end","bottom","bottom-end","left","left-start"].map(r=>e.jsx(M,{open:!0,placement:r,label:"@bob:example.org",children:e.jsx(d,{children:e.jsx(m,{})})},r))}),a=R.bind({});a.args={};const t={args:{placement:void 0}},o={args:{...t.args,label:"I can have a caption",caption:"My beautiful caption"}},s={args:{...t.args,label:"Copy",caption:e.jsxs(e.Fragment,{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"})]})}},n={args:{...t.args,open:!0,label:"I'm always open"}},c={args:{...t.args,open:!1,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},l={args:{...t.args,disabled:!0,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},i={args:{...t.args,isTriggerInteractive:!0,label:"Shown with delay"}},p={args:{...t.args,isTriggerInteractive:!1,label:"Shown without delay",children:e.jsx(d,{"data-testid":"testbutton",disabled:!0,children:e.jsx(m,{})})}};var g,u,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    // unset to test defaults
    placement: undefined
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var I,y,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,C,v;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,D,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open"
  }
}`,...(w=(D=n.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var k,F,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var B,O,P;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var U,W,Y;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay"
  }
}`,...(Y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var L,_,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
  }
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const re=["Placement","Default","WithStringCaption","WithComponentCaption","ForcedOpen","ForcedClose","ForcedDisabled","InteractiveTrigger","NonInteractiveTrigger"];export{t as Default,c as ForcedClose,l as ForcedDisabled,n as ForcedOpen,i as InteractiveTrigger,p as NonInteractiveTrigger,a as Placement,s as WithComponentCaption,o as WithStringCaption,re as __namedExportsOrder,te as default};
//# sourceMappingURL=Tooltip.stories-960c4dc8.js.map
