import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{r as l}from"./index-Cu9bd8lq.js";import{c}from"./index-C2KoGaFq.js";const m="_bg_py3lt_17",u="_drawer_py3lt_26",p="_body_py3lt_60",n={bg:m,drawer:u,body:p};let e;/android/i.test(navigator.userAgent)?e="android":/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)&&"ontouchend"in document?e="ios":e="other";const _=()=>e,r=l.forwardRef(({title:a,children:o,className:s,...d},i)=>t.jsx("div",{ref:i,className:c(s,n.drawer),"aria-label":a,"data-platform":_(),...d,role:"menu",children:t.jsx("div",{className:n.body,children:o})}));r.displayName="DrawerMenu";try{r.displayName="DrawerMenu",r.__docgenInfo={description:"A menu in a drawer, as commonly seen on mobile.",displayName:"DrawerMenu",props:{title:{defaultValue:null,description:"The menu title.",name:"title",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The menu contents.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{r as D,n as d,_ as g};
