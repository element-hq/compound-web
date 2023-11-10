import{j as e}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{c as p}from"./index-e131923d.js";import{T as m}from"./Text-270962e1.js";import"./_commonjsHelpers-de833af9.js";import"./Typography-1dd46c86.js";const g="_glass_1x9g9_17",u={glass:g},t=n.forwardRef(({children:a,className:i,...c},d)=>e.jsx("div",{ref:d,className:p(i,u.glass),...c,children:n.Children.only(a)}));t.displayName="Glass";try{t.displayName="Glass",t.__docgenInfo={description:"Adds a border of glass around a child component.",displayName:"Glass",props:{children:{defaultValue:null,description:"The child component.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"The CSS class.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Glass",component:t,tags:["autodocs"],argTypes:{},args:{}},f=a=>e.jsx("div",{style:{background:"url('/images/__test__/kitten2.jpg')",backgroundSize:"cover",inlineSize:"fit-content",blockSize:"fit-content",padding:16},children:e.jsx(t,{style:{inlineSize:250,blockSize:150},...a,children:e.jsx("div",{style:{background:"var(--cpd-color-bg-canvas-default)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(m,{style:{textAlign:"center"},children:"Your content here"})})})}),s=f.bind({});s.args={};var r,o,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args =>
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
  </div>`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const S=["Glass"];export{s as Glass,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Glass.stories-d8dceb40.js.map
