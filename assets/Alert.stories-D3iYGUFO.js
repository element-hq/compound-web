import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as q}from"./iframe-oLeK6Hl7.js";import"./index-B8hnM05j.js";import{B as u}from"./Button-C8kSVVFg.js";import{c as v}from"./index-D2bE8d7s.js";import{C}from"./check-circle-B0JzGztc.js";import{E as b}from"./error-solid-iFerPeEo.js";import{I as j}from"./info-BHBhucKV.js";import{C as N}from"./close-DveNO2fe.js";import{T as p}from"./Text-B-Ix5hDt.js";import{I as S}from"./IconButton-D1-qA_Ye.js";import"./preload-helper-PPVm8Dsz.js";import"./UnstyledButton-DptCZiND.js";import"./Typography-CYTN6ely.js";import"./IndicatorIcon-BOLIdXAN.js";import"./Tooltip-CWuJSUmU.js";import"./floating-ui.react-DY-Kok6C.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-C_ayqkhH.js";import"./index-DwrWogp_.js";const I="_alert_zx76t_10",A="_content_zx76t_37",w="_icon_zx76t_48",B="_actions_zx76t_64",t={alert:I,content:A,"text-content":"_text-content_zx76t_44",icon:w,actions:B},l=({type:s,title:g,children:h,className:f,actions:m,onClose:d,...x})=>{const y=v(t.alert,f),_=q.useCallback(c=>{switch(s){case"critical":return e.jsx(b,{...c});case"info":return e.jsx(j,{...c});case"success":return e.jsx(C,{...c})}},[s]);return e.jsxs("div",{...x,className:y,"data-type":s,children:[_({width:24,height:24,className:t.icon,"aria-hidden":!0}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t["text-content"],children:[e.jsx(p,{size:"md",weight:"semibold",children:g}),e.jsx(p,{size:"sm",weight:"regular",children:h})]}),m&&e.jsx("div",{className:t.actions,children:m})]}),d&&e.jsx(S,{onClick:d,"aria-label":"Close",role:"button",className:t.close,children:e.jsx(N,{})})]})};try{l.displayName="Alert",l.__docgenInfo={description:"An alert component component that is dismissable when passing an `onClose`\nproperty.",displayName:"Alert",props:{type:{defaultValue:null,description:"The type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"critical"'},{value:'"info"'}]}},title:{defaultValue:null,description:"The headline of the alert.",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:`Actions that will be displayed to the right of the content
Wraps and stacks actions under content when alert's size is <=600px
eg
\`\`\`
<Alert
 title='Title'
 actions={<Button onClick={doSomething}>Yes</Button>}
/>
\`\`\``,name:"actions",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:`Event callback when dismissing the alert. Determines the display of the
"close" button at the top right of the alert.
@param e the event parameters`,name:"onClose",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const P={title:"Alert",component:l,tags:["autodocs"],argTypes:{type:{options:["success","critical","info"],control:{type:"inline-radio"}}},args:{title:"Title",children:"Description",onClose:()=>{console.log("Clicked!")}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0"}}},o={args:{type:"success"}},n={args:{type:"critical"}},a={args:{type:"info"}},i={args:{type:"info",title:"Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",children:"Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Yes"}),e.jsx(u,{children:"No"})]})}},r={...o,args:{...o.args,onClose:void 0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const X=["Success","Critical","Info","WithActions","WithoutClose"];export{n as Critical,a as Info,o as Success,i as WithActions,r as WithoutClose,X as __namedExportsOrder,P as default};
