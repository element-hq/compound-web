import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as m,T as h}from"./Tooltip-CNzGrA1g.js";import{U as g}from"./user-profile-Cv-igaOS.js";import{I as u}from"./IconButton-BiQIzZW4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./floating-ui.react-CUHBVVHR.js";import"./floating-ui.react-dom-6ZVBEX4r.js";import"./index-D77-yIvl.js";import"./index-DQw2Bw4b.js";import"./index-FGJkmGnF.js";import"./UnstyledButton-CpKE2ZH4.js";import"./IndicatorIcon-f90a8Ogl.js";const E={title:"Tooltip",component:m,tags:["autodocs"],parameters:{controls:{include:["placement","open","label","caption","isTriggerInteractive"]}},argTypes:{placement:{control:"inline-radio",options:["top","right","left","bottom"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"text"},description:{control:"text"},caption:{control:"text"}},args:{onOpenChange:void 0,open:void 0,description:"",label:"",children:e.jsx(u,{children:e.jsx(g,{})})},decorators:[r=>e.jsx("div",{style:{padding:100},children:e.jsx(h,{children:e.jsx(r,{})})})]},b=({children:r})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:r}),x=()=>e.jsx(b,{children:["top","top-start","right","right-end","bottom","bottom-end","left","left-start"].map(r=>e.jsx(m,{open:!0,placement:r,label:"@bob:example.org",children:e.jsx(u,{children:e.jsx(g,{})})},r))}),o=x.bind({});o.args={};const t={args:{label:"@bob:example.org"}},a={args:{label:"I can have a caption",caption:"My beautiful caption"}},n={args:{label:"Copy",caption:e.jsxs(e.Fragment,{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"})]})}},s={args:{open:!0,label:"I'm always open"}},i={args:{open:!1,description:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},c={args:{disabled:!0,description:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},p={args:{isTriggerInteractive:!0,description:"Shown with delay",children:e.jsx("a",{href:"https://example.org",children:"Link"})}},l={args:{isTriggerInteractive:!1,description:"Shown without delay",children:e.jsx("span",{children:"Just some text"})}},d={args:{open:!0,description:"Employer Identification Number",children:e.jsx("span",{children:"EIN"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "@bob:example.org"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    children: <span>Just some text</span>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    description: "Employer Identification Number",
    children: <span>EIN</span>
  }
}`,...d.parameters?.docs?.source}}};const L=["Placement","Default","WithStringCaption","WithComponentCaption","ForcedOpen","ForcedClose","ForcedDisabled","InteractiveTrigger","NonInteractiveTrigger","Descriptive"];export{t as Default,d as Descriptive,i as ForcedClose,c as ForcedDisabled,s as ForcedOpen,p as InteractiveTrigger,l as NonInteractiveTrigger,o as Placement,n as WithComponentCaption,a as WithStringCaption,L as __namedExportsOrder,E as default};
