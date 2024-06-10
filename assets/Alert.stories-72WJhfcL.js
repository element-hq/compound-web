import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{B as u}from"./Button-DrAMl4OR.js";import{c as _}from"./index-C2KoGaFq.js";import{r as C}from"./index-Cu9bd8lq.js";import{S as b}from"./error-YokBWoNX.js";import{S as w}from"./close-D55JIkKE.js";import{T as p}from"./Text-CFqa5qYe.js";import{I as A}from"./IconButton-Dc_P6nj-.js";import"./UnstyledButton-CUaD5tB8.js";import"./Typography-D4-afh9Z.js";import"./IndicatorIcon-iinDG_Nf.js";const q=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24",className:"cpd-icon",...t,children:e.jsx("path",{d:"m10.6 13.8-2.15-2.15a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275.948.948 0 0 0-.275.7.95.95 0 0 0 .275.7L9.9 15.9c.2.2.433.3.7.3.267 0 .5-.1.7-.3l5.65-5.65a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.8ZM12 22a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2a9.74 9.74 0 0 1 3.9.788 10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20Z"})}),j=t=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24",className:"cpd-icon",...t,children:[e.jsx("path",{d:"M11.287 7.287A.968.968 0 0 1 12 7c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0 1 12 9a.968.968 0 0 1-.713-.287A.967.967 0 0 1 11 8c0-.283.096-.52.287-.713Zm0 4A.968.968 0 0 1 12 11c.283 0 .52.096.713.287.191.192.287.43.287.713v4a.97.97 0 0 1-.287.712A.968.968 0 0 1 12 17a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 16v-4c0-.283.096-.52.287-.713Z"}),e.jsx("path",{fillRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",clipRule:"evenodd"})]}),S="_alert_1bz08_19",N="_content_1bz08_46",B="_title_1bz08_57",z="_icon_1bz08_57",T="_actions_1bz08_73",s={alert:S,content:N,"text-content":"_text-content_1bz08_53",title:B,icon:z,actions:T},l=({type:t,title:g,children:h,className:x,actions:m,onClose:d,...f})=>{const v=_(s.alert,x),y=C.useCallback(c=>{switch(t){case"critical":return e.jsx(b,{...c});case"info":return e.jsx(j,{...c});case"success":return e.jsx(q,{...c})}},[t]);return e.jsxs("div",{...f,className:v,"data-type":t,children:[y({width:24,height:24,className:s.icon,"aria-hidden":!0}),e.jsxs("div",{className:s.content,children:[e.jsxs("div",{className:s["text-content"],children:[e.jsx(p,{size:"md",weight:"semibold",children:g}),e.jsx(p,{size:"sm",weight:"regular",children:h})]}),m&&e.jsx("div",{className:s.actions,children:m})]}),d&&e.jsx(A,{onClick:d,"aria-label":"Close",role:"button",className:s.close,children:e.jsx(w,{})})]})};try{l.displayName="Alert",l.__docgenInfo={description:"An alert component component that is dismissable when passing an `onClose`\nproperty.",displayName:"Alert",props:{type:{defaultValue:null,description:"The type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"critical"'},{value:'"info"'}]}},title:{defaultValue:null,description:"The headline of the alert.",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:`Actions that will be displayed to the right of the content
Wraps and stacks actions under content when alert's size is <=600px
eg
\`\`\`
<Alert
 title='Title'
 actions={<Button onClick={doSomething}>Yes</Button>}
/>
\`\`\``,name:"actions",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:`Event callback when dismissing the alert. Determines the display of the
"close" button at the top right of the alert.
@param e the event parameters`,name:"onClose",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const D={title:"Alert",component:l,tags:["autodocs"],argTypes:{type:{options:["success","critical","info"],control:{type:"inline-radio"}}},args:{title:"Title",children:"Description",onClose:()=>{console.log("Clicked!")}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0"}}},o={args:{type:"success"}},n={args:{type:"critical"}},a={args:{type:"info"}},i={args:{type:"info",title:"Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",children:"Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Yes"}),e.jsx(u,{children:"No"})]})}},r={...o,args:{...o.args,onClose:void 0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "success"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "critical"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children: "Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: <>
        <Button>Yes</Button>
        <Button>No</Button>
      </>
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Success,
  args: {
    ...Success.args,
    onClose: undefined
  }
}`,...r.parameters?.docs?.source}}};const Q=["Success","Critical","Info","WithActions","WithoutClose"];export{n as Critical,a as Info,o as Success,i as WithActions,r as WithoutClose,Q as __namedExportsOrder,D as default};
