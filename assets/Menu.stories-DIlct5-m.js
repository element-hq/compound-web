import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-BWty9SW1.js";import{n as a,t as o}from"./Button-BMqSfXMo.js";import{a as s,i as c,n as l,o as u,r as ee,t as te}from"./notifications-CFCtFxPr.js";import{n as ne,t as re}from"./user-profile-B3b4jLiE.js";import{n as d,t as f}from"./MenuTitle-nSWxweQt.js";import{i as ie,n as ae,r as p,t as m}from"./MenuScrollArea-BHwiLUUl.js";import{n as h,t as g}from"./MenuItem-DpH9W6dv.js";import{n as _,t as v}from"./Menu-H0TB_fe9.js";import{n as oe,t as y}from"./Separator-DgH_gpOC.js";var b,x,S;function C(){return(C=t((()=>{b=`_header_eqntx_10`,x=`_footer_eqntx_17`,S={header:b,footer:x}})))()}function w({title:e}){let t=E(`addHeader`);return(0,O.jsx)(`div`,{ref:t,"aria-hidden":!0,className:S.header,children:(0,O.jsx)(f,{title:e})})}function T({children:e}){let t=E(`addFooter`);return(0,O.jsx)(`div`,{ref:t,role:`none`,className:S.footer,children:e})}function E(e){let t=(0,D.useContext)(p),[n,r]=(0,D.useState)(null);return(0,D.useEffect)(()=>t&&n?t[e](n):void 0,[t,n,e]),r}var D,O;function k(){return(k=t((()=>{D=e(n(),1),C(),d(),ie(),O=r();try{w.displayName=`MenuStickyHeader`,w.__docgenInfo={description:`A section's title, held at the top of the scroll area while the section's
items scroll under it. Hidden, as the section's group carries the name.`,displayName:`MenuStickyHeader`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Menu/MenuSticky.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Menu/MenuSticky.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{T.displayName=`MenuStickyFooter`,T.__docgenInfo={description:`Content held at the foot of the scroll area while its section is in view.`,displayName:`MenuStickyFooter`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Menu/MenuSticky.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function A({title:e,stickyBottomItem:t,children:n}){return(0,j.jsxs)(`div`,{role:`group`,"aria-label":e,children:[(0,j.jsx)(w,{title:e}),(0,j.jsxs)(`div`,{role:`none`,children:[n,t!=null&&t!==!1&&(0,j.jsx)(T,{children:t})]})]})}var j;function M(){return(M=t((()=>{n(),k(),j=r();try{A.displayName=`MenuScrollSection`,A.__docgenInfo={description:"A titled group of items within a `MenuScrollArea`. Its title stays at the\ntop, and any `stickyBottomItem` at the foot, while the items scroll under\nthem; an item reached by keyboard is kept clear of both.",displayName:`MenuScrollSection`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Menu/MenuScrollSection.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Menu/MenuScrollSection.tsx`,name:`MenuScrollSectionProps`}],description:`Shown at the top of the section while it is in view.`,name:`title`,parent:{fileName:`compound-web/src/components/Menu/MenuScrollSection.tsx`,name:`MenuScrollSectionProps`},required:!0,tags:{},type:{name:`string`}},stickyBottomItem:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Menu/MenuScrollSection.tsx`,name:`MenuScrollSectionProps`}],description:`Content held at the foot of the scroll area while the section is in view,
such as a live reading for its items. Leaves with the section.`,name:`stickyBottomItem`,parent:{fileName:`compound-web/src/components/Menu/MenuScrollSection.tsx`,name:`MenuScrollSectionProps`},required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Menu/MenuScrollSection.tsx`,name:`MenuScrollSectionProps`}],description:`The section's items.`,name:`children`,parent:{fileName:`compound-web/src/components/Menu/MenuScrollSection.tsx`,name:`MenuScrollSectionProps`},required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{N=e(n(),1),i(),re(),te(),u(),ee(),_(),h(),oe(),a(),d(),ae(),M(),P=r(),{expect:F,screen:I,waitFor:L}=__STORYBOOK_MODULE_TEST__,R=e=>{let[t,n]=(0,N.useState)(!0);return(0,P.jsxs)(v,{...e,open:t,onOpenChange:n,trigger:(0,P.jsx)(o,{children:`Open menu`}),align:`start`,children:[(0,P.jsx)(g,{Icon:ne,label:`Profile`,onSelect:()=>{}}),(0,P.jsx)(g,{Icon:l,label:`Notifications`,onSelect:()=>{}}),(0,P.jsx)(f,{title:`Other section`}),(0,P.jsx)(g,{Icon:l,label:`Other Notifications`,onSelect:()=>{}}),(0,P.jsx)(g,{Icon:s,label:`Feedback`,onSelect:()=>{}}),(0,P.jsx)(y,{}),(0,P.jsx)(g,{kind:`critical`,Icon:c,label:`Sign out`,onSelect:()=>{}})]})},z={title:`Menu`,component:R,tags:[`autodocs`,`axe-exclude`],argTypes:{},args:{}},B={args:{title:`Today's Menu`}},V={args:{title:`Untitled Menu`,showTitle:!1}},H=Array.from({length:30},(e,t)=>(0,P.jsx)(g,{Icon:l,label:`Item ${t+1}`,onSelect:()=>{}},t)),U=e=>{let[t,n]=(0,N.useState)(!0);return(0,P.jsx)(v,{...e,open:t,onOpenChange:n,trigger:(0,P.jsx)(o,{children:`Open menu`}),align:`start`,children:H})},W={render:e=>(0,P.jsx)(U,{...e}),args:{title:`A long menu`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},G=e=>{let[t,n]=(0,N.useState)(!0),[r,i]=(0,N.useState)(null);return(0,P.jsx)(`div`,{ref:i,style:{blockSize:320,inlineSize:280,outline:`1px dashed var(--cpd-color-border-interactive-primary)`},children:(0,P.jsx)(v,{...e,open:t,onOpenChange:n,trigger:(0,P.jsx)(o,{children:`Open menu`}),align:`start`,collisionBoundary:r,collisionPadding:8,children:H})})},K={render:e=>(0,P.jsx)(G,{...e}),args:{title:`A bounded menu`},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},q=e=>{let[t,n]=(0,N.useState)(!0),[r,i]=(0,N.useState)(null);return(0,P.jsx)(`div`,{ref:i,style:{blockSize:400,inlineSize:280,outline:`1px dashed var(--cpd-color-border-interactive-primary)`},children:(0,P.jsxs)(v,{...e,open:t,onOpenChange:n,trigger:(0,P.jsx)(o,{children:`Open menu`}),align:`start`,collisionBoundary:r,collisionPadding:8,children:[(0,P.jsx)(f,{title:`Devices`}),(0,P.jsx)(m,{children:H})]})})},J={render:e=>(0,P.jsx)(q,{...e}),args:{title:`A menu with a scrolling region`,showTitle:!1},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4`}}},Y=e=>{let[t,n]=(0,N.useState)(!0),[r,i]=(0,N.useState)(null),a=(e,t)=>Array.from({length:t},(t,n)=>(0,P.jsx)(g,{label:`${e} ${n+1}`,onSelect:()=>{}},n));return(0,P.jsx)(`div`,{ref:i,style:{blockSize:400,inlineSize:280,outline:`1px dashed var(--cpd-color-border-interactive-primary)`},children:(0,P.jsx)(v,{...e,open:t,onOpenChange:n,trigger:(0,P.jsx)(o,{children:`Open menu`}),align:`start`,collisionBoundary:r,collisionPadding:8,children:(0,P.jsxs)(m,{children:[(0,P.jsx)(A,{title:`Speakers`,children:a(`Speaker`,6)}),(0,P.jsx)(A,{title:`Microphones`,stickyBottomItem:(0,P.jsx)(`div`,{style:{margin:`var(--cpd-space-1x) var(--cpd-space-4x)`,padding:`var(--cpd-space-2x) var(--cpd-space-3x)`,border:`1px dashed var(--cpd-color-border-interactive-secondary)`,borderRadius:`var(--cpd-space-2x)`,background:`var(--cpd-color-bg-subtle-secondary)`,font:`var(--cpd-font-body-sm-regular)`,color:`var(--cpd-color-text-secondary)`,textAlign:`center`},children:`Microphone level`}),children:a(`Microphone`,12)}),(0,P.jsx)(A,{title:`Cameras`,children:a(`Camera`,6)})]})})})},X={render:e=>(0,P.jsx)(Y,{...e}),args:{title:`A menu with scrolling sections`,showTitle:!1}},Z={render:e=>(0,P.jsx)(Y,{...e}),args:{title:`A menu with a pinned footer`,showTitle:!1},play:async()=>{let e=await I.findByRole(`group`,{name:`Microphones`}),t=e.parentElement;await L(()=>F(t.scrollHeight).toBeGreaterThan(t.clientHeight)),t.scrollTop+=e.getBoundingClientRect().top-t.getBoundingClientRect().top+120;let n=I.getByText(`Microphone level`).parentElement;await L(()=>F(n).toHaveAttribute(`data-pinned`))}},Q=[`Menu`,`WithoutTitle`,`WithManyItems`,`WithinABoundary`,`WithAScrollingRegion`,`WithScrollSections`,`WithAPinnedFooter`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Today's Menu"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Untitled Menu",
    showTitle: false
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <LongTemplate {...args} />,
  args: {
    title: "A long menu"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <BoundaryTemplate {...args} />,
  args: {
    title: "A bounded menu"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`As in an app embedded in a page: the menu scrolls within the box.`,...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => <RegionTemplate {...args} />,
  args: {
    title: "A menu with a scrolling region",
    showTitle: false
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=15001-41548&t=RLC8Yo2JsfB3rYqz-4"
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Only the list scrolls, and fades out down to the frame; the heading stays put.`,...J.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <SectionsTemplate {...args} />,
  args: {
    title: "A menu with scrolling sections",
    showTitle: false
  }
}`,...X.parameters?.docs?.source},description:{story:`Each section's title stays at the top while the section is in view, and the
microphones' level at the foot; both leave with their section.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => <SectionsTemplate {...args} />,
  args: {
    title: "A menu with a pinned footer",
    showTitle: false
  },
  play: async () => {
    const group = await screen.findByRole("group", {
      name: "Microphones"
    });
    const area = group.parentElement!;
    // Sized by the menu's position, which settles after the first render.
    await waitFor(() => expect(area.scrollHeight).toBeGreaterThan(area.clientHeight));
    // Past the title, so it is only on screen if it is held there.
    area.scrollTop += group.getBoundingClientRect().top - area.getBoundingClientRect().top + 120;
    const footer = screen.getByText("Microphone level").parentElement!;
    await waitFor(() => expect(footer).toHaveAttribute("data-pinned"));
  }
}`,...Z.parameters?.docs?.source},description:{story:`Scrolled into the microphones: their title is held at the top, and their
level at the foot with the items fading out above it.`,...Z.parameters?.docs?.description}}}})))()}$();export{B as Menu,Z as WithAPinnedFooter,J as WithAScrollingRegion,W as WithManyItems,X as WithScrollSections,K as WithinABoundary,V as WithoutTitle,Q as __namedExportsOrder,z as default};