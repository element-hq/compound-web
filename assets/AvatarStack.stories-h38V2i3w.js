import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as p}from"./index-lhGYx47h.js";import{r as l}from"./index-DRjF_FHU.js";import{s as r,A as i}from"./Avatar-Bru8WDRV.js";const m=`<!--
Copyright 2023  New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<svg>
  <clipPath id="cpdAvatarClip" clipPathUnits="objectBoundingBox">
    <!-- 
        All values below need to be between 0 and 1
        for objectBoundingBox to work
     -->
    <path d="
        M 0.875 0.16666
        A 0.5 0.5 0 1 0 0.875 0.83333
        Q 0.65 0.5 0.875 0.16666
        Z
     "/>
  </clipPath>
</svg>
`,o="cpdAvatarClipSvg";let a=0;const s=({children:n,className:c})=>(l.useEffect(()=>{if(a===0){const d=`
        <div aria-hidden="true" id="${o}" class="${r["clip-path"]}">
          ${m}
        </div>
      `;document.body.insertAdjacentHTML("beforeend",d)}return a++,()=>{a--,a<=0&&document.getElementById(o)?.remove()}},[]),e.jsx("div",{className:p(r["stacked-avatars"],c),children:n}));try{s.displayName="AvatarStack",s.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:"AvatarStack",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Avatar/StackedAvatar",component:s,tags:["autodocs"],argTypes:{},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(i,{name:"Alice",id:"@alice:example.org",size:"200px",src:"/images/__test__/kitten.jpg"}),e.jsx(i,{name:"Bob",id:"@bob:example.org",size:"200px",src:"/images/__test__/kitten2.jpg"})]})}},t={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const f=["AvatarStack"];export{t as AvatarStack,f as __namedExportsOrder,v as default};
