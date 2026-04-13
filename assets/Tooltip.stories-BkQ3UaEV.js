import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-D1sJ83FZ.js";import{t as n}from"./jsx-runtime-fcfuQg7E.js";import{t as r}from"./dist-DJ4Ld394.js";import{t as i}from"./IconButton-CjsosLH8.js";import{i as a,n as o,r as s,t as c}from"./Tooltip-B3jLERRQ.js";import{t as l}from"./Button-iae5vYAp.js";import{n as u,t as d}from"./user-profile-nc3IN35J.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{o(),l(),d(),r(),t(),a(),f=n(),p={title:`Tooltip`,component:c,tags:[`autodocs`],parameters:{controls:{include:[`placement`,`open`,`label`,`caption`,`isTriggerInteractive`]}},argTypes:{placement:{control:`inline-radio`,options:[`top`,`right`,`left`,`bottom`]},open:{control:`boolean`},isTriggerInteractive:{control:`boolean`},label:{control:`text`},description:{control:`text`},caption:{control:`text`}},args:{onOpenChange:void 0,open:void 0,description:``,label:``,children:(0,f.jsx)(i,{children:(0,f.jsx)(u,{})})},decorators:[e=>(0,f.jsx)(`div`,{style:{padding:100},children:(0,f.jsx)(s,{children:(0,f.jsx)(e,{})})})]},m=({children:e})=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:`50px`,flexDirection:`column`,alignItems:`center`},children:e}),h=()=>(0,f.jsx)(m,{children:[`top`,`top-start`,`right`,`right-end`,`bottom`,`bottom-end`,`left`,`left-start`].map(e=>(0,f.jsx)(c,{open:!0,placement:e,label:`@bob:example.org`,children:(0,f.jsx)(i,{children:(0,f.jsx)(u,{})})},e))}),g=h.bind({}),g.args={},_={args:{label:`@bob:example.org`}},v={args:{label:`I can have a caption`,caption:`My beautiful caption`}},y={args:{label:`Copy`,caption:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,f.jsx)(`kbd`,{children:`C`})]})}},b={args:{open:!0,label:`I'm always open`}},x={args:{open:!1,description:`You can't see me`,children:(0,f.jsx)(`span`,{children:`No tooltip to see here`})}},S={args:{disabled:!0,description:`You can't see me`,children:(0,f.jsx)(`span`,{children:`No tooltip to see here`})}},C={args:{isTriggerInteractive:!0,description:`Shown with delay`,children:(0,f.jsx)(`a`,{href:`https://example.org`,children:`Link`})}},w={args:{isTriggerInteractive:!1,description:`Shown without delay`,children:(0,f.jsx)(`span`,{children:`Just some text`})}},T={args:{open:!0,description:`Employer Identification Number`,children:(0,f.jsx)(`span`,{children:`EIN`})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent key={placement} open={true} placement={placement} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "@bob:example.org"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    label: "I'm always open"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: true,
    description: "Shown with delay",
    children: <a href="https://example.org">Link</a>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: false,
    description: "Shown without delay",
    children: <span>Just some text</span>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    description: "Employer Identification Number",
    children: <span>EIN</span>
  }
}`,...T.parameters?.docs?.source}}},E=[`Placement`,`Default`,`WithStringCaption`,`WithComponentCaption`,`ForcedOpen`,`ForcedClose`,`ForcedDisabled`,`InteractiveTrigger`,`NonInteractiveTrigger`,`Descriptive`]}))();export{_ as Default,T as Descriptive,x as ForcedClose,S as ForcedDisabled,b as ForcedOpen,C as InteractiveTrigger,w as NonInteractiveTrigger,g as Placement,y as WithComponentCaption,v as WithStringCaption,E as __namedExportsOrder,p as default};