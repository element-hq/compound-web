import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./dist-AX8C0Cmt.js";import{n as i,t as a}from"./IconButton-BAbT3IHd.js";import{i as o,n as s,r as c,t as l}from"./Tooltip-3ECq4K_M.js";import{n as u,t as d}from"./user-profile-BSOfN4AT.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{s(),i(),d(),r(),t(),o(),f=n(),p=t(),m={title:`Tooltip`,component:l,tags:[`autodocs`],parameters:{controls:{include:[`placement`,`open`,`label`,`caption`,`isTriggerInteractive`]}},argTypes:{placement:{control:`inline-radio`,options:[`top`,`right`,`left`,`bottom`]},open:{control:`inline-radio`,options:[`auto`,!1,!0],mapping:{auto:void 0}},isTriggerInteractive:{control:`boolean`},label:{control:`text`},description:{control:`text`},caption:{control:`text`}},args:{onOpenChange:void 0,open:void 0,description:``,label:``,children:(0,f.jsx)(a,{children:(0,f.jsx)(u,{})})},decorators:[e=>(0,f.jsx)(`div`,{style:{padding:100},children:(0,f.jsx)(c,{children:(0,f.jsx)(e,{})})})]},h=({children:e})=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:`50px`,flexDirection:`column`,alignItems:`center`},children:e}),g=e=>(0,f.jsx)(h,{children:[`top`,`top-start`,`right`,`right-end`,`bottom`,`bottom-end`,`left`,`left-start`].map(t=>(0,p.createElement)(l,{...e,key:t,placement:t},(0,f.jsx)(a,{children:(0,f.jsx)(u,{})})))}),_=g.bind({}),_.args={open:!0,label:`@bob:example.org`},v={args:{label:`@bob:example.org`}},y={args:{label:`I can have a caption`,caption:`My beautiful caption`}},b={args:{label:`Copy`,caption:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,f.jsx)(`kbd`,{children:`C`})]})}},x={args:{open:!0,label:`I'm always open`}},S={args:{open:!1,description:`You can't see me`,children:(0,f.jsx)(`span`,{children:`No tooltip to see here`})}},C={args:{disabled:!0,description:`You can't see me`,children:(0,f.jsx)(`span`,{children:`No tooltip to see here`})}},w={args:{isTriggerInteractive:!0,description:`Shown with delay`,children:(0,f.jsx)(`a`,{href:`https://example.org`,children:`Link`})}},T={args:{isTriggerInteractive:!1,description:`Shown without delay`,children:(0,f.jsx)(`span`,{children:`Just some text`})}},E={args:{open:!0,description:`Employer Identification Number`,children:(0,f.jsx)(`span`,{children:`EIN`})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Layout>
    {(["top", "top-start", "right", "right-end", "bottom", "bottom-end", "left", "left-start"] as Array<PlacementType>).map(placement => <TooltipComponent {...args} key={placement} placement={placement}>
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>)}
  </Layout>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "@bob:example.org"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I can have a caption",
    caption: "My beautiful caption"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy",
    caption: <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    label: "I'm always open"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: true,
    description: "Shown with delay",
    children: <a href="https://example.org">Link</a>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    isTriggerInteractive: false,
    description: "Shown without delay",
    children: <span>Just some text</span>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    description: "Employer Identification Number",
    children: <span>EIN</span>
  }
}`,...E.parameters?.docs?.source}}},D=[`Placement`,`Default`,`WithStringCaption`,`WithComponentCaption`,`ForcedOpen`,`ForcedClose`,`ForcedDisabled`,`InteractiveTrigger`,`NonInteractiveTrigger`,`Descriptive`]})))()}O();export{v as Default,E as Descriptive,S as ForcedClose,C as ForcedDisabled,x as ForcedOpen,w as InteractiveTrigger,T as NonInteractiveTrigger,_ as Placement,b as WithComponentCaption,y as WithStringCaption,D as __namedExportsOrder,m as default};