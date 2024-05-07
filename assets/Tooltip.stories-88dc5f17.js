import{j as e}from"./jsx-runtime-f6d73c06.js";import{T as L}from"./Tooltip-cfef343f.js";import"./Button-1d7556c8.js";import{I as p}from"./IconButton-3b043bff.js";import{U as d}from"./user-profile-5dd823c8.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./floating-ui.react-97a0fed4.js";import"./index-8bf7f4ad.js";import"./index-e131923d.js";import"./UnstyledButton-f4d497aa.js";import"./IndicatorIcon-ec96b47b.js";const X={title:"Tooltip",component:L,tags:["autodocs"],controls:{include:["placement","open","label","caption","isTriggerInteractive"]},argTypes:{placement:{control:"inline-radio",options:["top","right","left","bottom"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"string"},caption:{control:"string"}},args:{placement:"left",label:"@bob:example.org",onOpenChange:void 0,children:e.jsx(p,{"data-testid":"testbutton",children:e.jsx(d,{})})},decorators:[r=>e.jsx("div",{style:{padding:100},children:e.jsx(r,{})})]},_=({children:r})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:r}),E=()=>e.jsx(_,{children:["top","top-start","right","right-end","bottom","bottom-end","left","left-start"].map(r=>e.jsx(L,{open:!0,placement:r,label:"@bob:example.org",children:e.jsx(p,{children:e.jsx(d,{})})},r))}),a=E.bind({});a.args={};const t={args:{placement:void 0}},o={args:{...t.args,label:"I can have a caption",caption:"My beautiful caption"}},n={args:{...t.args,label:"Copy",caption:e.jsxs(e.Fragment,{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"})]})}},s={args:{...t.args,open:!0,label:"I'm always open"}},c={args:{...t.args,open:!1,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},i={args:{...t.args,isTriggerInteractive:!0,label:"Shown with delay"}},l={args:{...t.args,isTriggerInteractive:!1,label:"Shown without delay",children:e.jsx(p,{"data-testid":"testbutton",disabled:!0,children:e.jsx(d,{})})}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    // unset to test defaults
    placement: undefined
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,I,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var T,j,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var v,S,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open"
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,k,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var F,N,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay"
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,U,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
  }
}`,...(W=(U=l.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Z=["Placement","Default","WithStringCaption","WithComponentCaption","ForcedOpen","ForcedClose","InteractiveTrigger","NonInteractiveTrigger"];export{t as Default,c as ForcedClose,s as ForcedOpen,i as InteractiveTrigger,l as NonInteractiveTrigger,a as Placement,n as WithComponentCaption,o as WithStringCaption,Z as __namedExportsOrder,X as default};
//# sourceMappingURL=Tooltip.stories-88dc5f17.js.map
