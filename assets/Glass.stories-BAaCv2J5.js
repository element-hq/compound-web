import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{r as a}from"./index-Cu9bd8lq.js";import{c as i}from"./index-C2KoGaFq.js";import{T as c}from"./Text-kGdW88BP.js";import"./Typography-1hAQHuSf.js";const d="_glass_1x9g9_17",p={glass:d},n=a.forwardRef(({children:t,className:r,...o},l)=>e.jsx("div",{ref:l,className:i(r,p.glass),...o,children:a.Children.only(t)}));n.displayName="Glass";try{n.displayName="Glass",n.__docgenInfo={description:"Adds a border of glass around a child component.",displayName:"Glass",props:{children:{defaultValue:null,description:"The child component.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS class.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const h={title:"Glass",component:n,tags:["autodocs"],argTypes:{},args:{}},g=t=>e.jsx("div",{style:{background:"url('/images/__test__/kitten2.jpg')",backgroundSize:"cover",inlineSize:"fit-content",blockSize:"fit-content",padding:16},children:e.jsx(n,{style:{inlineSize:250,blockSize:150},...t,children:e.jsx("div",{style:{background:"var(--cpd-color-bg-canvas-default)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(c,{style:{textAlign:"center"},children:"Your content here"})})})}),s=g.bind({});s.args={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args =>
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
