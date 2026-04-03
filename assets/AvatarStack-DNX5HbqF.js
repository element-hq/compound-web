import{a as e,n as t}from"./chunk-BneVvdWh.js";import{J as n}from"./iframe-rfQJEnvR.js";import{t as r}from"./jsx-runtime-DweqXWlm.js";import{t as i}from"./classnames-BmD4jabB.js";import{i as a,r as o}from"./Avatar-DIKC2ukU.js";var s,c=t((()=>{s=`<!--
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
`})),l,u,d,f,p,m,h=t((()=>{l=e(i(),1),u=e(n(),1),a(),c(),d=r(),f=`cpdAvatarClipSvg`,p=0,m=({children:e,className:t})=>((0,u.useEffect)(()=>{if(p===0){let e=`
        <div aria-hidden="true" id="${f}" class="${o[`clip-path`]}">
          ${s}
        </div>
      `;document.body.insertAdjacentHTML(`beforeend`,e)}return p++,()=>{p--,p<=0&&document.getElementById(f)?.remove()}},[]),(0,d.jsx)(`div`,{className:(0,l.default)(o[`stacked-avatars`],t),children:e}));try{m.displayName=`AvatarStack`,m.__docgenInfo={description:"Renders a stack of avatars and clips the content appropriately.\n\nThe `type` of avatars should always be set to `round`\nAnd all the avatars should have the same size.",displayName:`AvatarStack`,props:{className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string`}}}}}catch{}}));export{h as n,m as t};