import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{T as m}from"./Tooltip-IwNDV4YA.js";import"./Button-BPkQI5Wr.js";import{I as g}from"./IconButton-CvqrWQtw.js";import{U as u}from"./user-profile-DtRG5E1-.js";import"./index-Cu9bd8lq.js";import"./floating-ui.react-D5UUZX8q.js";import"./index-s2Ee__EW.js";import"./index-C2KoGaFq.js";import"./UnstyledButton-CUaD5tB8.js";import"./IndicatorIcon-iinDG_Nf.js";const k={title:"Tooltip",component:m,tags:["autodocs"],controls:{include:["placement","open","label","caption","isTriggerInteractive"]},argTypes:{placement:{control:"inline-radio",options:["top","right","left","bottom"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"text"},description:{control:"text"},caption:{control:"text"}},args:{onOpenChange:void 0,children:e.jsx(g,{children:e.jsx(u,{})})},decorators:[r=>e.jsx("div",{style:{padding:100},children:e.jsx(r,{})})]},h=({children:r})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:r}),b=()=>e.jsx(h,{children:["top","top-start","right","right-end","bottom","bottom-end","left","left-start"].map(r=>e.jsx(m,{open:!0,placement:r,label:"@bob:example.org",children:e.jsx(g,{children:e.jsx(u,{})})},r))}),o=b.bind({});o.args={};const t={args:{label:"@bob:example.org"}},n={args:{label:"I can have a caption",caption:"My beautiful caption"}},a={args:{label:"Copy",caption:e.jsxs(e.Fragment,{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"})]})}},s={args:{open:!0,label:"I'm always open"}},i={args:{open:!1,description:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},c={args:{disabled:!0,description:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},p={args:{isTriggerInteractive:!0,description:"Shown with delay",children:e.jsx("a",{href:"https://example.org",children:"Link"})}},l={args:{isTriggerInteractive:!1,description:"Shown without delay",children:"Just some text"}},d={args:{open:!0,description:"Employer Identification Number",children:e.jsx("span",{children:"EIN"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "@bob:example.org"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    label: "I'm always open"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: true,
    description: "Shown with delay",
    children: <a href="https://example.org">Link</a>
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: false,
    description: "Shown without delay",
    children: "Just some text"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    description: "Employer Identification Number",
    children: <span>EIN</span>
  }
}`,...d.parameters?.docs?.source}}};const D=["Placement","Default","WithStringCaption","WithComponentCaption","ForcedOpen","ForcedClose","ForcedDisabled","InteractiveTrigger","NonInteractiveTrigger","Descriptive"];export{t as Default,d as Descriptive,i as ForcedClose,c as ForcedDisabled,s as ForcedOpen,p as InteractiveTrigger,l as NonInteractiveTrigger,o as Placement,a as WithComponentCaption,n as WithStringCaption,D as __namedExportsOrder,k as default};
