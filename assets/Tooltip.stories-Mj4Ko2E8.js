import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{T as g}from"./Tooltip-BXywdbkR.js";import"./Button-BUToQOmF.js";import{I as d}from"./IconButton-9C8cD-i_.js";import{S as m}from"./user-profile-CB1AInEY.js";import"./index-Cu9bd8lq.js";import"./floating-ui.react-DRrg5oqz.js";import"./index-s2Ee__EW.js";import"./index-C2KoGaFq.js";import"./UnstyledButton-CUaD5tB8.js";import"./IndicatorIcon-iinDG_Nf.js";const w={title:"Tooltip",component:g,tags:["autodocs"],controls:{include:["placement","open","label","caption","isTriggerInteractive"]},argTypes:{placement:{control:"inline-radio",options:["top","right","left","bottom"]},open:{control:"boolean"},isTriggerInteractive:{control:"boolean"},label:{control:"text"},caption:{control:"text"}},args:{placement:"left",label:"@bob:example.org",onOpenChange:void 0,children:e.jsx(d,{"data-testid":"testbutton",children:e.jsx(m,{})})},decorators:[r=>e.jsx("div",{style:{padding:100},children:e.jsx(r,{})})]},u=({children:r})=>e.jsx("div",{style:{display:"flex",gap:"50px",flexDirection:"column",alignItems:"center"},children:r}),b=()=>e.jsx(u,{children:["top","top-start","right","right-end","bottom","bottom-end","left","left-start"].map(r=>e.jsx(g,{open:!0,placement:r,label:"@bob:example.org",children:e.jsx(d,{children:e.jsx(m,{})})},r))}),a=b.bind({});a.args={};const t={args:{placement:void 0}},o={args:{...t.args,label:"I can have a caption",caption:"My beautiful caption"}},n={args:{...t.args,label:"Copy",caption:e.jsxs(e.Fragment,{children:[e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"})]})}},s={args:{...t.args,open:!0,label:"I'm always open"}},c={args:{...t.args,open:!1,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},l={args:{...t.args,disabled:!0,label:"You can't see me",children:e.jsx("span",{children:"No tooltip to see here"})}},i={args:{...t.args,isTriggerInteractive:!0,label:"Shown with delay"}},p={args:{...t.args,isTriggerInteractive:!1,label:"Shown without delay",children:e.jsx(d,{"data-testid":"testbutton",disabled:!0,children:e.jsx(m,{})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    // unset to test defaults
    placement: undefined
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    label: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
  }
}`,...p.parameters?.docs?.source}}};const k=["Placement","Default","WithStringCaption","WithComponentCaption","ForcedOpen","ForcedClose","ForcedDisabled","InteractiveTrigger","NonInteractiveTrigger"];export{t as Default,c as ForcedClose,l as ForcedDisabled,s as ForcedOpen,i as InteractiveTrigger,p as NonInteractiveTrigger,a as Placement,n as WithComponentCaption,o as WithStringCaption,k as __namedExportsOrder,w as default};
