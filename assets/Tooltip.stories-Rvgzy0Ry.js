import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-by1vYL1p.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./dist-DY8cSRUx.js";import{t as a}from"./IconButton-BE1f0ntd.js";import{i as o,n as s,r as c,t as l}from"./Tooltip-B6hgeslg.js";import{t as u}from"./Button-RGOJ__9O.js";import{n as d,t as f}from"./user-profile-BFJ0i9gi.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{s(),u(),f(),i(),n(),o(),p=r(),m=t(n(),1),h={title:`Tooltip`,component:l,tags:[`autodocs`],parameters:{controls:{include:[`placement`,`open`,`label`,`caption`,`isTriggerInteractive`]}},argTypes:{placement:{control:`inline-radio`,options:[`top`,`right`,`left`,`bottom`]},open:{control:`inline-radio`,options:[`auto`,!1,!0],mapping:{auto:void 0}},isTriggerInteractive:{control:`boolean`},label:{control:`text`},description:{control:`text`},caption:{control:`text`}},args:{onOpenChange:void 0,open:void 0,description:``,label:``,children:(0,p.jsx)(a,{children:(0,p.jsx)(d,{})})},decorators:[e=>(0,p.jsx)(`div`,{style:{padding:100},children:(0,p.jsx)(c,{children:(0,p.jsx)(e,{})})})]},g=({children:e})=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:`50px`,flexDirection:`column`,alignItems:`center`},children:e}),_=e=>(0,p.jsx)(g,{children:[`top`,`top-start`,`right`,`right-end`,`bottom`,`bottom-end`,`left`,`left-start`].map(t=>(0,m.createElement)(l,{...e,key:t,placement:t},(0,p.jsx)(a,{children:(0,p.jsx)(d,{})})))}),v=_.bind({}),v.args={open:!0,label:`@bob:example.org`},y={args:{label:`@bob:example.org`}},b={args:{label:`I can have a caption`,caption:`My beautiful caption`}},x={args:{label:`Copy`,caption:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,p.jsx)(`kbd`,{children:`C`})]})}},S={args:{open:!0,label:`I'm always open`}},C={args:{open:!1,description:`You can't see me`,children:(0,p.jsx)(`span`,{children:`No tooltip to see here`})}},w={args:{disabled:!0,description:`You can't see me`,children:(0,p.jsx)(`span`,{children:`No tooltip to see here`})}},T={args:{isTriggerInteractive:!0,description:`Shown with delay`,children:(0,p.jsx)(`a`,{href:`https://example.org`,children:`Link`})}},E={args:{isTriggerInteractive:!1,description:`Shown without delay`,children:(0,p.jsx)(`span`,{children:`Just some text`})}},D={args:{open:!0,description:`Employer Identification Number`,children:(0,p.jsx)(`span`,{children:`EIN`})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent {...args} key={placement} placement={placement}>
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "@bob:example.org"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    label: "I'm always open"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: true,
    description: "Shown with delay",
    children: <a href="https://example.org">Link</a>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: false,
    description: "Shown without delay",
    children: <span>Just some text</span>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    description: "Employer Identification Number",
    children: <span>EIN</span>
  }
}`,...D.parameters?.docs?.source}}},O=[`Placement`,`Default`,`WithStringCaption`,`WithComponentCaption`,`ForcedOpen`,`ForcedClose`,`ForcedDisabled`,`InteractiveTrigger`,`NonInteractiveTrigger`,`Descriptive`]}))();export{y as Default,D as Descriptive,C as ForcedClose,w as ForcedDisabled,S as ForcedOpen,T as InteractiveTrigger,E as NonInteractiveTrigger,v as Placement,x as WithComponentCaption,b as WithStringCaption,O as __namedExportsOrder,h as default};