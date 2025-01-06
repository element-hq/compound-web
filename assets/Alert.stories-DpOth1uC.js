import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as u}from"./Button-b1sryxZu.js";import{c as b}from"./index-DUolvyrz.js";import{r as q}from"./index-7h80QhK_.js";import{C as v}from"./check-circle-DRkHbrdJ.js";import{E as C}from"./error-8TjxXL1w.js";import{I as j}from"./info-DpUI6qfX.js";import{C as N}from"./close-DLI2KJsO.js";import{T as p}from"./Text-BielnbAw.js";import{I as S}from"./IconButton-CARywoCW.js";import"./UnstyledButton-Cbxfy2C6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Typography-CZ39clbP.js";import"./IndicatorIcon-DUJozi6_.js";import"./Tooltip-D66w01Gl.js";import"./floating-ui.react-s73wBwnq.js";import"./index-Dmd9PWHg.js";const I="_alert_1bz08_19",A="_content_1bz08_46",w="_title_1bz08_57",z="_icon_1bz08_57",B="_actions_1bz08_73",t={alert:I,content:A,"text-content":"_text-content_1bz08_53",title:w,icon:z,actions:B},l=({type:s,title:g,children:h,className:f,actions:m,onClose:d,...x})=>{const y=b(t.alert,f),_=q.useCallback(c=>{switch(s){case"critical":return e.jsx(C,{...c});case"info":return e.jsx(j,{...c});case"success":return e.jsx(v,{...c})}},[s]);return e.jsxs("div",{...x,className:y,"data-type":s,children:[_({width:24,height:24,className:t.icon,"aria-hidden":!0}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t["text-content"],children:[e.jsx(p,{size:"md",weight:"semibold",children:g}),e.jsx(p,{size:"sm",weight:"regular",children:h})]}),m&&e.jsx("div",{className:t.actions,children:m})]}),d&&e.jsx(S,{onClick:d,"aria-label":"Close",role:"button",className:t.close,children:e.jsx(N,{})})]})};try{l.displayName="Alert",l.__docgenInfo={description:"An alert component component that is dismissable when passing an `onClose`\nproperty.",displayName:"Alert",props:{type:{defaultValue:null,description:"The type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"critical"'},{value:'"info"'}]}},title:{defaultValue:null,description:"The headline of the alert.",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:`Actions that will be displayed to the right of the content
Wraps and stacks actions under content when alert's size is <=600px
eg
\`\`\`
<Alert
 title='Title'
 actions={<Button onClick={doSomething}>Yes</Button>}
/>
\`\`\``,name:"actions",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:`Event callback when dismissing the alert. Determines the display of the
"close" button at the top right of the alert.
@param e the event parameters`,name:"onClose",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const H={title:"Alert",component:l,tags:["autodocs"],argTypes:{type:{options:["success","critical","info"],control:{type:"inline-radio"}}},args:{title:"Title",children:"Description",onClose:()=>{console.log("Clicked!")}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0"}}},o={args:{type:"success"}},n={args:{type:"critical"}},a={args:{type:"info"}},i={args:{type:"info",title:"Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",children:"Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Yes"}),e.jsx(u,{children:"No"})]})}},r={...o,args:{...o.args,onClose:void 0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const K=["Success","Critical","Info","WithActions","WithoutClose"];export{n as Critical,a as Info,o as Success,i as WithActions,r as WithoutClose,K as __namedExportsOrder,H as default};
