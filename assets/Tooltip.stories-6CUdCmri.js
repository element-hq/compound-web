import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{t as i}from"./dist-CFXBaIdt.js";import{n as a,t as o}from"./IconButton-DvWbhT2A.js";import{i as s,n as c,r as l,t as u}from"./Tooltip-BkkJB1lt.js";import{n as d,t as f}from"./user-profile-CKMfPqYH.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{c(),a(),f(),i(),p=e(n(),1),s(),m=r(),h={title:`Tooltip`,component:u,tags:[`autodocs`],parameters:{controls:{include:[`placement`,`open`,`label`,`caption`,`isTriggerInteractive`]}},argTypes:{placement:{control:`inline-radio`,options:[`top`,`right`,`left`,`bottom`]},open:{control:`inline-radio`,options:[`auto`,!1,!0],mapping:{auto:void 0}},isTriggerInteractive:{control:`boolean`},label:{control:`text`},description:{control:`text`},caption:{control:`text`}},args:{onOpenChange:void 0,open:void 0,description:``,label:``,children:(0,m.jsx)(o,{children:(0,m.jsx)(d,{})})},decorators:[e=>(0,m.jsx)(`div`,{style:{padding:100},children:(0,m.jsx)(l,{children:(0,m.jsx)(e,{})})})]},g=({children:e})=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`50px`,flexDirection:`column`,alignItems:`center`},children:e}),_=e=>(0,m.jsx)(g,{children:[`top`,`top-start`,`right`,`right-end`,`bottom`,`bottom-end`,`left`,`left-start`].map(t=>(0,p.createElement)(u,{...e,key:t,placement:t},(0,m.jsx)(o,{children:(0,m.jsx)(d,{})})))}),v=_.bind({}),v.args={open:!0,label:`@bob:example.org`},y={args:{label:`@bob:example.org`}},b={args:{label:`I can have a caption`,caption:`My beautiful caption`}},x={args:{label:`Copy`,caption:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,m.jsx)(`kbd`,{children:`C`})]})}},S={args:{open:!0,label:`I'm always open`}},C={args:{open:!1,description:`You can't see me`,children:(0,m.jsx)(`span`,{children:`No tooltip to see here`})}},w={args:{disabled:!0,description:`You can't see me`,children:(0,m.jsx)(`span`,{children:`No tooltip to see here`})}},T={args:{isTriggerInteractive:!0,description:`Shown with delay`,children:(0,m.jsx)(`a`,{href:`https://example.org`,children:`Link`})}},E={args:{isTriggerInteractive:!1,description:`Shown without delay`,children:(0,m.jsx)(`span`,{children:`Just some text`})}},D={args:{open:!0,description:`Employer Identification Number`,children:(0,m.jsx)(`span`,{children:`EIN`})}},O={args:{open:!0,maxWidth:150,label:`This is a long tooltip label that will wrap onto multiple lines because of the maxWidth prop`}},k={args:{open:!0,maxWidth:150,maxLines:1,label:`reallylongbitoftextwithnospacesthatwouldallowthebrowserto-sensiblylinebreak`}},A={args:{open:!0,maxWidth:150,maxLines:2,label:`This is a long tooltip label that will be truncated after two lines because of the maxLines prop`}},j=[`Placement`,`Default`,`WithStringCaption`,`WithComponentCaption`,`ForcedOpen`,`ForcedClose`,`ForcedDisabled`,`InteractiveTrigger`,`NonInteractiveTrigger`,`Descriptive`,`WithMaxWidth`,`WithMaxWidthNoSpaces`,`WithMaxLines`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Layout>
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: 150,
    label: "This is a long tooltip label that will wrap onto multiple lines because of the maxWidth prop"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: 150,
    maxLines: 1,
    label: "reallylongbitoftextwithnospacesthatwouldallowthebrowserto-sensiblylinebreak"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: 150,
    maxLines: 2,
    label: "This is a long tooltip label that will be truncated after two lines because of the maxLines prop"
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{y as Default,D as Descriptive,C as ForcedClose,w as ForcedDisabled,S as ForcedOpen,T as InteractiveTrigger,E as NonInteractiveTrigger,v as Placement,x as WithComponentCaption,A as WithMaxLines,O as WithMaxWidth,k as WithMaxWidthNoSpaces,b as WithStringCaption,j as __namedExportsOrder,h as default};