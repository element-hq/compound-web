import{a as e,n as t}from"./chunk-BneVvdWh.js";import{J as n}from"./iframe-DBaNuyQJ.js";import{t as r}from"./jsx-runtime-DweqXWlm.js";import{t as i}from"./classnames-BmD4jabB.js";import{i as a,r as o}from"./Avatar-Dm0MBMfv.js";var s,c=t((()=>{s=`<!--
Copyright 2023 New Vector Ltd.
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
-->

<svg>
  <clipPath id="cpdAvatarClip" clipPathUnits="objectBoundingBox">
    <!-- 
        All values below need to be between 0 and 1
        for objectBoundingBox to work
     -->
    <path d="M 0,0 V 1 H 0.7683594 A 0.6,0.6 0 0 1 0.5,0.5 0.6,0.6 0 0 1 0.7683594,0 Z" />
  </clipPath>
</svg>
`})),l,u,d,f,p,m,h=t((()=>{l=e(i(),1),u=e(n(),1),a(),c(),d=r(),f=`cpdAvatarClipSvg`,p=0,m=({children:e,className:t})=>((0,u.useEffect)(()=>{if(p===0){let e=`
        <div aria-hidden="true" id="${f}" class="${o[`clip-path`]}">
          ${s}
        </div>
      `;document.body.insertAdjacentHTML(`beforeend`,e)}return p++,()=>{p--,p<=0&&document.getElementById(f)?.remove()}},[]),(0,d.jsx)(`div`,{className:(0,l.default)(o[`stacked-avatars`],t),children:e}));try{m.displayName=`AvatarStack`,m.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:`AvatarStack`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Avatar/AvatarStack.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Avatar/AvatarStack.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}}));export{h as n,m as t};