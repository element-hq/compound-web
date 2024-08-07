import{j as e}from"./jsx-runtime-CexXSJP5.js";import{c as h}from"./index-CSpfAsmC.js";import{r as _}from"./index-BP8_t0zE.js";import{a as f,I as x,C as y}from"./close-D4bMmhFz.js";import{E as b}from"./error-Dmbc84hO.js";import{T as i}from"./Text-BgCCN_GG.js";import"./Button-iukP6Ype.js";import{I as g}from"./IconButton-Y-BQAUFS.js";const j="_alert_1bz08_19",v="_content_1bz08_46",C="_title_1bz08_57",N="_icon_1bz08_57",I="_actions_1bz08_73",t={alert:j,content:v,"text-content":"_text-content_1bz08_53",title:C,icon:N,actions:I},r=({type:n,title:l,children:c,className:m,actions:a,onClose:o,...d})=>{const u=h(t.alert,m),p=_.useCallback(s=>{switch(n){case"critical":return e.jsx(b,{...s});case"info":return e.jsx(x,{...s});case"success":return e.jsx(f,{...s})}},[n]);return e.jsxs("div",{...d,className:u,"data-type":n,children:[p({width:24,height:24,className:t.icon,"aria-hidden":!0}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t["text-content"],children:[e.jsx(i,{size:"md",weight:"semibold",children:l}),e.jsx(i,{size:"sm",weight:"regular",children:c})]}),a&&e.jsx("div",{className:t.actions,children:a})]}),o&&e.jsx(g,{onClick:o,"aria-label":"Close",role:"button",className:t.close,children:e.jsx(y,{})})]})};try{r.displayName="Alert",r.__docgenInfo={description:"An alert component component that is dismissable when passing an `onClose`\nproperty.",displayName:"Alert",props:{type:{defaultValue:null,description:"The type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"critical"'},{value:'"info"'}]}},title:{defaultValue:null,description:"The headline of the alert.",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:`Actions that will be displayed to the right of the content
Wraps and stacks actions under content when alert's size is <=600px
eg
\`\`\`
<Alert
 title='Title'
 actions={<Button onClick={doSomething}>Yes</Button>}
/>
\`\`\``,name:"actions",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:`Event callback when dismissing the alert. Determines the display of the
"close" button at the top right of the alert.
@param e the event parameters`,name:"onClose",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}export{r as A};
