import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{c as i}from"./index-CSpfAsmC.js";import{T as c}from"./Text-BgCCN_GG.js";import"./Typography-DuHxGDyc.js";const d="_glass_1x9g9_17",p={glass:d},t=n.forwardRef(({children:a,className:r,...o},l)=>e.jsx("div",{ref:l,className:i(r,p.glass),...o,children:n.Children.only(a)}));t.displayName="Glass";try{t.displayName="Glass",t.__docgenInfo={description:"Adds a border of glass around a child component.",displayName:"Glass",props:{children:{defaultValue:null,description:"The child component.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS class.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const h={title:"Glass",component:t,tags:["autodocs"],argTypes:{},args:{}},g=a=>e.jsx("div",{style:{background:"url('/images/__test__/kitten2.jpg')",backgroundSize:"cover",inlineSize:"fit-content",blockSize:"fit-content",padding:16},children:e.jsx(t,{style:{inlineSize:250,blockSize:150},...a,children:e.jsx("div",{style:{background:"var(--cpd-color-bg-canvas-default)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(c,{style:{textAlign:"center"},children:"Your content here"})})})}),s=g.bind({});s.args={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args =>
// Use an image as the background to really show off the glass effect
<div style={{
  background: "url('/images/__test__/kitten2.jpg')",
  backgroundSize: "cover",
  inlineSize: "fit-content",
  blockSize: "fit-content",
  padding: 16
}}>
    <GlassComponent style={{
    inlineSize: 250,
    blockSize: 150
  }} {...args}>
      <div style={{
      background: "var(--cpd-color-bg-canvas-default)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
        <Text style={{
        textAlign: "center"
      }}>Your content here</Text>
      </div>
    </GlassComponent>
  </div>`,...s.parameters?.docs?.source}}};const x=["Glass"];export{s as Glass,x as __namedExportsOrder,h as default};
