import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-C8yu1u5S.js";import{t as a}from"./classnames-D09xBJOL.js";import{n as o,t as s}from"./close-b98MjEXC.js";import{n as c,t as l}from"./Text-C9oUfluT.js";import{n as u,t as d}from"./IconButton-BEMPMYjV.js";import{i as f,r as p}from"./Tooltip-D7Gf771O.js";import{n as m,t as h}from"./check-BR_QtkL8.js";var g,_,v,y,b;function x(){return(x=t((()=>{g=`_clickable_1jkz7_33`,_=`_icon_1jkz7_55`,v=`_content_1jkz7_68`,y=`_close_1jkz7_75`,b={"toast-container":`_toast-container_1jkz7_8`,clickable:g,icon:_,"has-close":`_has-close_1jkz7_59`,content:v,close:y}})))()}var S,C,w,T;function E(){return(E=t((()=>{S=e(a(),1),C=e(n(),1),x(),c(),u(),o(),w=r(),T=(0,C.forwardRef)(function({children:e,className:t,Icon:n,onClick:r,onClose:i,tooltip:a,...o},c){let u=(0,w.jsxs)(l,{as:`div`,size:`sm`,weight:`medium`,className:b.content,children:[n&&(0,w.jsx)(n,{className:b.icon,width:20,height:20,"aria-hidden":!0}),e]});if(r)return(0,w.jsx)(`button`,{...o,ref:c,type:`button`,onClick:r,className:(0,S.default)(b[`toast-container`],b.clickable,t),children:u});let f=!!i;return(0,w.jsxs)(`div`,{...o,ref:c,className:(0,S.default)(b[`toast-container`],t,{[b[`has-close`]]:f}),children:[u,f&&(0,w.jsx)(d,{size:`24px`,kind:`secondary`,noBackground:!0,tooltip:a,tooltipPlacement:`right`,className:b.close,onClick:i,children:(0,w.jsx)(s,{})})]})});try{T.displayName=`Toast`,T.__docgenInfo={description:``,displayName:`Toast`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Toast/Toast.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`},{fileName:`compound-web/node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`},{fileName:`compound-web/node_modules/.pnpm/@types+react@19.2.18/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},Icon:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`}],description:`An icon to display within the toast.`,name:`Icon`,required:!1,tags:{},type:{name:`ComponentType<SVGAttributes<SVGElement>>`}},onClose:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`},{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`}],description:`Handler called when the close button is clicked. If provided, a close
button is shown on the right side of the toast.

Mutually exclusive with \`onClick\`.`,name:`onClose`,required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}},tooltip:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`},{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`}],description:"The tooltip to show on the close button. This is only used if `onClose` is\nprovided.",name:`tooltip`,required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`},{fileName:`compound-web/src/components/Toast/Toast.tsx`,name:`TypeLiteral`}],description:`Handler called when the toast is clicked. If provided, the whole toast
becomes a button.

Mutually exclusive with \`onClose\`: as the toast is itself a button, it
cannot contain a nested close button.`,name:`onClick`,required:!1,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}}},tags:{}}}catch{}})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{n(),i(),m(),E(),f(),D=r(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Toast`,component:T,tags:[`autodocs`],argTypes:{},args:{children:`Would you like some toast?`,onClose:void 0,onClick:void 0},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0`}},decorators:[e=>(0,D.jsx)(p,{children:(0,D.jsx)(e,{})})]},A={},j={args:{Icon:h}},M={args:{Icon:h,onClose:O(),tooltip:`Close`}},N={decorators:[e=>(0,D.jsx)(`div`,{style:{width:`250px`},children:(0,D.jsx)(e,{})})],args:{Icon:h,children:`Would you like some toast on multiple multiple multiple lines?`}},P={decorators:[e=>(0,D.jsx)(`div`,{style:{width:`250px`},children:(0,D.jsx)(e,{})})],args:{Icon:h,onClose:O(),tooltip:`Close`,children:`Would you like some toast on multiple multiple multiple lines?`}},F={args:{onClick:O(),children:`There are new messages, jump to them`}},I={args:{Icon:h,onClick:O(),children:`There are new messages, jump to them`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "250px"
  }}>
        <Story />
      </div>],
  args: {
    Icon: CheckIcon,
    children: "Would you like some toast on multiple multiple multiple lines?"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: "250px"
  }}>
        <Story />
      </div>],
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
    children: "Would you like some toast on multiple multiple multiple lines?"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn(),
    children: "There are new messages, jump to them"
  }
}`,...F.parameters?.docs?.source},description:{story:"When `onClick` is provided, the whole toast becomes a button. This is\nmutually exclusive with `onClose`, as a button cannot contain another button.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: CheckIcon,
    onClick: fn(),
    children: "There are new messages, jump to them"
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Icon`,`CloseAndIcon`,`Multiline`,`MultilineAndClose`,`Clickable`,`ClickableWithIcon`]})))()}R();export{F as Clickable,I as ClickableWithIcon,M as CloseAndIcon,A as Default,j as Icon,N as Multiline,P as MultilineAndClose,L as __namedExportsOrder,k as default};