import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{c as m}from"./index-CCQ3W5xA.js";import{r as i}from"./index-CTjT7uj6.js";import{T as c}from"./Text-DUPZfVce.js";const _="_menu_1x5h1_17",p="_title_1x5h1_83",n={menu:_,"slide-in":"_slide-in_1x5h1_1","slide-out":"_slide-out_1x5h1_1","fade-in":"_fade-in_1x5h1_1","fade-out":"_fade-out_1x5h1_1",title:p},h=({title:e,id:t})=>a.jsx(c,{as:"h3",id:t,className:n.title,size:"sm",weight:"semibold",children:e}),l=i.forwardRef(({title:e,showTitle:t=!0,className:r,children:o,...d},u)=>{const s=i.useId();return a.jsxs("div",{role:"menu",ref:u,"aria-label":t?void 0:e,"aria-labelledby":t?s:void 0,className:m(r,n.menu),...d,children:[t&&a.jsx(h,{title:e,id:s}),o]})});l.displayName="FloatingMenu";try{l.displayName="FloatingMenu",l.__docgenInfo={description:"A menu in a floating box, as commonly seen on desktop.",displayName:"FloatingMenu",props:{title:{defaultValue:null,description:"The menu title.",name:"title",required:!0,type:{name:"string"}},showTitle:{defaultValue:{value:"true"},description:"Whether to show the title. If false, the title will be hidden but still used as a label for screen readers.",name:"showTitle",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"The CSS class.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The menu contents.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{l as F};
