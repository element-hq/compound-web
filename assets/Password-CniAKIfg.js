import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{C as m}from"./index-BugjtUKR.js";import{A as f}from"./Action-CUJ6t2MN.js";import{a as b,V as h}from"./visibility-on-D1sVPsTi.js";const r={isHidden:!0,icon:b,label:"Show",type:"password"},g={isHidden:!1,icon:h,label:"Hide",type:"text"},n=o.forwardRef(function(t,s){const[{icon:l,label:d,type:p},c]=o.useReducer(u=>u.isHidden?g:r,r);return a.jsx(f,{ref:s,...t,Icon:l,actionLabel:d,onActionClick:()=>c(),type:p})}),i=o.forwardRef(function(t,s){return a.jsx(m,{asChild:!0,children:a.jsx(n,{ref:s,...t})})});try{n.displayName="PasswordInput",n.__docgenInfo={description:`A password input with a toggle to show/hide the password.

Standalone input to be used outside of Radix forms.`,displayName:"PasswordInput",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},enableLigatures:{defaultValue:null,description:`Enable contextual alternate ligatures on input text
For example on an in-place editing field
https://github.com/rsms/inter/issues/222
https://github.com/rsms/inter/blob/master/src/features/calt.fea`,name:"enableLigatures",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="PasswordControl",i.__docgenInfo={description:`A password input with a toggle to show/hide the password.

Control to be used in a Radix form.`,displayName:"PasswordControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},enableLigatures:{defaultValue:null,description:`Enable contextual alternate ligatures on input text
For example on an in-place editing field
https://github.com/rsms/inter/issues/222
https://github.com/rsms/inter/blob/master/src/features/calt.fea`,name:"enableLigatures",required:!1,type:{name:"boolean"}}}}}catch{}export{n as P,i as a};
