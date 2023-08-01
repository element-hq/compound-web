import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as l}from"./index-e131923d.js";import{T as m}from"./Typography-69314a66.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const p="_badge_qipht_17",u={badge:p},a=({children:t,kind:o="default",className:c})=>{const i=l(u.badge,c);return e.jsx(m,{as:"span",size:"sm",weight:"medium",className:i,"data-kind":o,children:t})};try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},kind:{defaultValue:{value:"default"},description:"",name:"kind",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"critical"'},{value:'"default"'}]}}}}}catch{}const k={title:"Badge",component:a,argTypes:{},args:{}},g=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{kind:"success",children:"Trusted"})," ",e.jsx(a,{kind:"critical",children:"Not trusted"})," ",e.jsx(a,{kind:"default",children:"Public room"})]}),s=g.bind({});s.args={};var n,r,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => <>
    <BadgeComponent kind="success">Trusted</BadgeComponent>
    &nbsp;
    <BadgeComponent kind="critical">Not trusted</BadgeComponent>
    &nbsp;
    <BadgeComponent kind="default">Public room</BadgeComponent>
  </>`,...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const x=["Badge"];export{s as Badge,x as __namedExportsOrder,k as default};
//# sourceMappingURL=Badge.stories-83aa68b6.js.map
