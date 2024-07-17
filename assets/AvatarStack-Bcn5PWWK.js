import{j as o}from"./jsx-runtime-CexXSJP5.js";import{c}from"./index-BSFQGMYZ.js";import{r as d}from"./index-BP8_t0zE.js";import{s as n}from"./Avatar-Bzl0WR0v.js";const p=`<!--
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
`,a="cpdAvatarClipSvg";let e=0;const s=({children:t,className:i})=>(d.useEffect(()=>{if(e===0){const r=`
        <div aria-hidden="true" id="${a}" class="${n["clip-path"]}">
          ${p}
        </div>
      `;document.body.insertAdjacentHTML("beforeend",r)}return e++,()=>{e--,e<=0&&document.getElementById(a)?.remove()}},[]),o.jsx("div",{className:c(n["stacked-avatars"],i),children:t}));try{s.displayName="AvatarStack",s.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:"AvatarStack",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{s as A};
