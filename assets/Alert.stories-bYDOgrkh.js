import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./dist-BYWRpQRE.js";import{t as a}from"./classnames-Bkdxq3RN.js";import{n as o,t as s}from"./Button-DiOZqSef.js";import{n as c,t as l}from"./check-circle-BVIybNMt.js";import{n as u,t as d}from"./error-solid-Cu5fnBeP.js";import{n as f,t as p}from"./info-CVLwEIF1.js";import{n as m,t as h}from"./close-BAHz4CpM.js";import{n as g,t as _}from"./Text-D0e5bXfJ.js";import{t as v}from"./IconButton-CGpdMELZ.js";import{t as y}from"./Button-fcUrmBVh.js";var b,x,S,C,w,T,E=t((()=>{b=`_alert_zx76t_10`,x=`_content_zx76t_37`,S=`_title_zx76t_48`,C=`_icon_zx76t_48`,w=`_actions_zx76t_64`,T={alert:b,content:x,"text-content":`_text-content_zx76t_44`,title:S,icon:C,actions:w}})),D,O,k,A,j=t((()=>{D=e(a(),1),O=e(n(),1),c(),u(),f(),m(),E(),g(),y(),k=r(),A=({type:e,title:t,children:n,className:r,actions:i,onClose:a,...o})=>{let s=(0,D.default)(T.alert,r),c=(0,O.useCallback)(t=>{switch(e){case`critical`:return(0,k.jsx)(d,{...t});case`info`:return(0,k.jsx)(p,{...t});case`success`:return(0,k.jsx)(l,{...t})}},[e]);return(0,k.jsxs)(`div`,{...o,className:s,"data-type":e,children:[c({width:24,height:24,className:T.icon,"aria-hidden":!0}),(0,k.jsxs)(`div`,{className:T.content,children:[(0,k.jsxs)(`div`,{className:T[`text-content`],children:[(0,k.jsx)(_,{size:`md`,weight:`semibold`,children:t}),(0,k.jsx)(_,{size:`sm`,weight:`regular`,children:n})]}),i&&(0,k.jsx)(`div`,{className:T.actions,children:i})]}),a&&(0,k.jsx)(v,{onClick:a,"aria-label":`Close`,role:`button`,className:T.close,children:(0,k.jsx)(h,{})})]})};try{A.displayName=`Alert`,A.__docgenInfo={description:"An alert component component that is dismissable when passing an `onClose`\nproperty.",displayName:`Alert`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Alert/Alert.tsx`,methods:[],props:{type:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Alert/Alert.tsx`,name:`TypeLiteral`}],description:`The type of alert`,name:`type`,required:!0,tags:{},type:{name:`enum`,raw:`"success" | "critical" | "info"`,value:[{value:`"success"`},{value:`"critical"`},{value:`"info"`}]}},title:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Alert/Alert.tsx`,name:`TypeLiteral`}],description:`The headline of the alert.`,name:`title`,required:!0,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Alert/Alert.tsx`,name:`TypeLiteral`}],description:`The CSS class name.`,name:`className`,required:!1,tags:{},type:{name:`string`}},actions:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Alert/Alert.tsx`,name:`TypeLiteral`}],description:`Actions that will be displayed to the right of the content
Wraps and stacks actions under content when alert's size is <=600px
eg
\`\`\`
<Alert
 title='Title'
 actions={<Button onClick={doSomething}>Yes</Button>}
/>
\`\`\``,name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},onClose:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Alert/Alert.tsx`,name:`TypeLiteral`}],description:`Event callback when dismissing the alert. Determines the display of the
"close" button at the top right of the alert.`,name:`onClose`,required:!1,tags:{param:`e the event parameters`},type:{name:`((e: MouseEvent<Element, MouseEvent>) => void)`}}},tags:{}}}catch{}})),M,N,P,F,I,L,R,z;t((()=>{n(),i(),o(),j(),M=r(),N={title:`Alert`,component:A,tags:[`autodocs`],argTypes:{type:{options:[`success`,`critical`,`info`],control:{type:`inline-radio`}}},args:{title:`Title`,children:`Description`,onClose:()=>{console.log(`Clicked!`)}},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0`}}},P={args:{type:`success`}},F={args:{type:`critical`}},I={args:{type:`info`}},L={args:{type:`info`,title:`Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,children:`Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,actions:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(s,{children:`Yes`}),(0,M.jsx)(s,{children:`No`})]})}},R={...P,args:{...P.args,onClose:void 0}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    type: "success"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    type: "critical"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info"
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children: "Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: <>
        <Button>Yes</Button>
        <Button>No</Button>
      </>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...Success,
  args: {
    ...Success.args,
    onClose: undefined
  }
}`,...R.parameters?.docs?.source}}},z=[`Success`,`Critical`,`Info`,`WithActions`,`WithoutClose`]}))();export{F as Critical,I as Info,P as Success,L as WithActions,R as WithoutClose,z as __namedExportsOrder,N as default};