import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{c as d}from"./index-lhGYx47h.js";import{r as l}from"./index-DRjF_FHU.js";import{s as r,A as i}from"./Avatar-BPJ7Tfaa.js";const m=`<!--
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
`,o="cpdAvatarClipSvg";let t=0;const n=({children:a,className:c})=>(l.useEffect(()=>{if(t===0){const p=`
        <div aria-hidden="true" id="${o}" class="${r["clip-path"]}">
          ${m}
        </div>
      `;document.body.insertAdjacentHTML("beforeend",p)}return t++,()=>{t--,t<=0&&document.getElementById(o)?.remove()}},[]),s.jsx("div",{className:d(r["stacked-avatars"],c),children:a}));try{n.displayName="AvatarStack",n.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:"AvatarStack",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Avatar/StackedAvatar",component:n,tags:["autodocs"],argTypes:{},args:{size:"64px"}},g=a=>s.jsxs(n,{...a,children:[s.jsx(i,{name:"Alice",id:"@alice:example.org",size:"200px",src:"/images/__test__/kitten.jpg"}),s.jsx(i,{name:"Bob",id:"@bob:example.org",size:"200px",src:"/images/__test__/kitten2.jpg"})]}),e=g.bind({});e.args={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <AvatarStackComponent {...args}>
    <Avatar name="Alice" id="@alice:example.org" size="200px" src="/images/__test__/kitten.jpg" />
    <Avatar name="Bob" id="@bob:example.org" size="200px" src="/images/__test__/kitten2.jpg" />
  </AvatarStackComponent>`,...e.parameters?.docs?.source}}};const x=["AvatarStack"];export{e as AvatarStack,x as __namedExportsOrder,_ as default};
