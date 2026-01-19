import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-nQp9ZmD_.js";import"./index-COTdpg_J.js";import{c as p}from"./index-CULgrCPQ.js";import{s as n,A as o}from"./Avatar-Bx68Tn0g.js";import"./preload-helper-PPVm8Dsz.js";const m=`<!--
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
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
`,c="cpdAvatarClipSvg";let a=0;const s=({children:r,className:i})=>(l.useEffect(()=>{if(a===0){const d=`
        <div aria-hidden="true" id="${c}" class="${n["clip-path"]}">
          ${m}
        </div>
      `;document.body.insertAdjacentHTML("beforeend",d)}return a++,()=>{a--,a<=0&&document.getElementById(c)?.remove()}},[]),e.jsx("div",{className:p(n["stacked-avatars"],i),children:r}));try{s.displayName="AvatarStack",s.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:"AvatarStack",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const h={title:"Avatar/StackedAvatar",component:s,tags:["autodocs"],argTypes:{},args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o,{name:"Alice",id:"@alice:example.org",size:"200px",src:"/images/__test__/kitten.jpg"}),e.jsx(o,{name:"Bob",id:"@bob:example.org",size:"200px",src:"/images/__test__/kitten2.jpg"})]})}},t={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const x=["AvatarStack"];export{t as AvatarStack,x as __namedExportsOrder,h as default};
