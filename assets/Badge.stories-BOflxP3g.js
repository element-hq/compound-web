import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as t}from"./index-lhGYx47h.js";import{T as i}from"./Typography-f-oayws_.js";import"./index-DRjF_FHU.js";const l="_badge_1171v_17",p={badge:l},n=({children:a,kind:o="default",className:s})=>{const r=t(p.badge,s);return e.jsx(i,{as:"span",size:"sm",weight:"medium",className:r,"data-kind":o,children:a})};try{n.displayName="Badge",n.__docgenInfo={description:"A Badge component.",displayName:"Badge",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},kind:{defaultValue:{value:"default"},description:"The type of badge.",name:"kind",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"green"'},{value:'"grey"'},{value:'"red"'},{value:'"default"'},{value:'"on-solid"'}]}}}}}catch{}const k={title:"Badge",component:n,argTypes:{},args:{}},m=()=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx(n,{kind:"green",children:"Trusted"})," ",e.jsx(n,{kind:"red",children:"Not trusted"})," ",e.jsx(n,{kind:"grey",children:"Public room"})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx(n,{kind:"default",children:"Default"})," ",e.jsx(n,{kind:"grey",children:"Grey"})," ",e.jsx(n,{kind:"on-solid",children:"On Solid"})," ",e.jsx(n,{kind:"blue",children:"Blue"})," ",e.jsx(n,{kind:"green",children:"Green"})," ",e.jsx(n,{kind:"red",children:"Red"})]})]}),d=m.bind({});d.args={};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <div>
    <div>
      <BadgeComponent kind="green">Trusted</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="red">Not trusted</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="grey">Public room</BadgeComponent>
    </div>
    <br />
    <div>
      <BadgeComponent kind="default">Default</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="grey">Grey</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="on-solid">On Solid</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="blue">Blue</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="green">Green</BadgeComponent>
      &nbsp;
      <BadgeComponent kind="red">Red</BadgeComponent>
    </div>
  </div>`,...d.parameters?.docs?.source}}};const b=["Badge"];export{d as Badge,b as __namedExportsOrder,k as default};
