import{j as u}from"./jsx-runtime-DR9Q75dM.js";import{R as g}from"./index-DRjF_FHU.js";import{c as f}from"./index-lhGYx47h.js";import{K as _}from"./key-CQb-bpaf.js";const v="_content_md016_17",h="_destructive_md016_43",I="_success_md016_48",i={content:v,destructive:h,success:I};function n({className:c,size:m="large",destructive:d=!1,success:l=!1,children:p}){return u.jsx("div",{className:f(i.content,c,{[i.destructive]:d,[i.success]:l}),"data-size":m,children:g.Children.only(p)})}try{n.displayName="BigIcon",n.__docgenInfo={description:"",displayName:"BigIcon",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"The size of the icon.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}},success:{defaultValue:{value:"false"},description:"Whether this button triggers a success action.",name:"success",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Icon/BigIcon",component:n,tags:["autodocs"],args:{children:u.jsx(_,{})}},t=c=>u.jsx(n,{...c}),o=t.bind({}),e=t.bind({});e.args={size:"medium"};const s=t.bind({});s.args={size:"small"};const r=t.bind({});r.args={destructive:!0};const a=t.bind({});a.args={success:!0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <BigIconComponent {...args} />",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <BigIconComponent {...args} />",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <BigIconComponent {...args} />",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <BigIconComponent {...args} />",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <BigIconComponent {...args} />",...a.parameters?.docs?.source}}};const C=["Default","Medium","Small","Destructive","Success"];export{o as Default,r as Destructive,e as Medium,s as Small,a as Success,C as __namedExportsOrder,x as default};