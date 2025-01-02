import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{r as s}from"./index-DRjF_FHU.js";import{u as A,b as k,c as C,o as V,s as q,n as E,d as N,j as F,k as I,a as M,l as L,p as P,m as S}from"./floating-ui.react-C2LRQ0sB.js";import{T as R}from"./Text-BvzksikX.js";import{B as T}from"./Button-BORixq-h.js";import"./index-BvEl7W6R.js";import"./Typography-DzhKoIWt.js";import"./index-lhGYx47h.js";import"./UnstyledButton-DuxpNl0e.js";const B="_content_1oa1y_17",O="_header_1oa1y_46",H="_description_1oa1y_52",W="_button_1oa1y_57",z="_arrow_1oa1y_62",l={content:B,header:O,description:H,button:W,arrow:z},j=s.createContext(null);function b(){const e=s.useContext(j);if(e==null)throw new Error("ReleaseAnnouncement components must be wrapped in <ReleaseAnnouncement />");return e}function g({open:e,header:t,description:a,closeLabel:o,placement:r,onClick:i,displayArrow:p}){const v=A(),w=A(),h=s.useRef(null),f=k({placement:r,open:e,whileElementsMounted:C,middleware:[V(16),q({limiter:E({offset:50})}),p&&N({element:h})]}),x=F(f.context),_=I([x]);return s.useMemo(()=>({open:e,...f,..._,labelId:v,descriptionId:w,header:t,description:a,closeLabel:o,onClick:i,displayArrow:p,arrowRef:h}),[e,x,_,f,v,w,t,a,o,i,p,h])}try{g.displayName="useReleaseAnnouncement",g.__docgenInfo={description:"This hook provides the necessary props to create a release announcement.",displayName:"useReleaseAnnouncement",props:{open:{defaultValue:null,description:"Whether the release announcement is open.",name:"open",required:!0,type:{name:"boolean"}},header:{defaultValue:null,description:"The header of the release announcement.",name:"header",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"The description of the release announcement.",name:"description",required:!0,type:{name:"string"}},closeLabel:{defaultValue:null,description:"The label of the close button.",name:"closeLabel",required:!0,type:{name:"string"}},placement:{defaultValue:null,description:"The placement of the release announcement.",name:"placement",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},onClick:{defaultValue:null,description:"The event handler for the close button.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},displayArrow:{defaultValue:null,description:"Whether to display an arrow.",name:"displayArrow",required:!1,type:{name:"boolean"}}}}}catch{}function y({children:e,placement:t="right",displayArrow:a=!0,...o}){const r=g({placement:t,displayArrow:a,...o});return n.jsxs(j.Provider,{value:r,children:[n.jsx(D,{children:e}),n.jsx(K,{children:n.jsx(U,{})})]})}function D({children:e}){const t=b(),a=e?.ref,o=M([t.refs.setReference,a]);if(!s.isValidElement(e))throw new Error("ReleaseAnnouncement anchor must be a single valid React element");return s.cloneElement(e,t.getReferenceProps({ref:o,...e.props,...t.open&&{"aria-describedby":t.getFloatingProps().id}}))}function K({children:e}){const{context:t,arrowRef:a,displayArrow:o,...r}=b();return t.open?n.jsx(L,{children:n.jsx(P,{context:t,modal:!1,children:n.jsxs("div",{ref:r.refs.setFloating,style:r.floatingStyles,"aria-labelledby":r.labelId,"aria-describedby":r.descriptionId,...r.getFloatingProps(),className:l.content,children:[o&&n.jsx(S,{ref:a,context:t,width:20,height:12,className:l.arrow}),e]})})}):null}function U(){const{labelId:e,descriptionId:t,header:a,description:o,closeLabel:r,onClick:i}=b();return n.jsxs(n.Fragment,{children:[n.jsx(R,{as:"h3",id:e,className:l.header,size:"lg",weight:"semibold",children:a}),n.jsx(R,{as:"span",id:t,className:l.description,size:"sm",weight:"regular",children:o}),n.jsx(T,{size:"sm",kind:"secondary",className:l.button,onClick:i,children:r})]})}try{y.displayName="ReleaseAnnouncement",y.__docgenInfo={description:`The ReleaseAnnouncement component purpose is to inform the user of a new available feature.
This component is a floating component that will appear next to an anchor.`,displayName:"ReleaseAnnouncement",props:{placement:{defaultValue:{value:"right"},description:"The placement of the component",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},displayArrow:{defaultValue:{value:"true"},description:"Whether to display an arrow.",name:"displayArrow",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"The header of the release announcement.",name:"header",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"The event handler for the close button.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},open:{defaultValue:null,description:"Whether the release announcement is open.",name:"open",required:!0,type:{name:"boolean"}},description:{defaultValue:null,description:"The description of the release announcement.",name:"description",required:!0,type:{name:"string"}},closeLabel:{defaultValue:null,description:"The label of the close button.",name:"closeLabel",required:!0,type:{name:"string"}}}}}catch{}const $=e=>{const[t,a]=s.useState(!0);return n.jsx(y,{...e,open:t,onClick:()=>a(!1),children:n.jsx(T,{onClick:()=>a(o=>!o),children:"Open menu"})})},ae={title:"Release Announcement",component:$,tags:["autodocs"],argTypes:{},args:{header:"Notifications have moved",description:"From now on, click the icon here to view your notifications.",placement:"right",closeLabel:"Ok"}},c={args:{}},u={args:{header:"A multi line header which is taking multiple lines",description:"A multi line description which is taking multiple lines. The OK button should be vertically centred."}},d={args:{placement:"bottom"}},m={args:{displayArrow:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    header: "A multi line header which is taking multiple lines",
    description: "A multi line description which is taking multiple lines. The OK button should be vertically centred."
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placement: "bottom"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    displayArrow: false
  }
}`,...m.parameters?.docs?.source}}};const oe=["Default","MultiLinesContent","BottomPlacement","NoArrow"];export{d as BottomPlacement,c as Default,u as MultiLinesContent,m as NoArrow,oe as __namedExportsOrder,ae as default};