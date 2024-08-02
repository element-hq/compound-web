import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{M as p}from"./MenuItem-CDXjHeqL.js";import{T as h}from"./Toggle-Q78m7eTC.js";import{u as g}from"./useId-DIHOOv91.js";const a=o.forwardRef(function({className:l,Icon:i,label:u,onSelect:s,checked:e,disabled:t},m){const d=g(),c=o.useCallback(()=>{},[]);return n.jsx(p,{as:"div",role:"menuitemcheckbox","aria-checked":e,className:l,Icon:i,label:u,onSelect:s,disabled:t,children:n.jsx(h,{id:d,ref:m,"aria-hidden":!0,checked:e,disabled:t,onChange:c})})});try{a.displayName="ToggleMenuItem",a.__docgenInfo={description:"A menu item with a toggle control.\nMust be used within a compound Menu or other `menu` or `menubar` aria role subtree.",displayName:"ToggleMenuItem",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:`Event callback for when the item is selected via mouse, touch, or keyboard.
Calling event.preventDefault in this handler will prevent the menu from
being dismissed.`,name:"onSelect",required:!0,type:{name:"((e: Event) => void) | null"}},label:{defaultValue:null,description:"The label to show on this menu item.",name:"label",required:!0,type:{name:"string | null"}},Icon:{defaultValue:null,description:"The icon to show on this menu item.\nWhen `Icon` is a ReactNode, it should spread the props",name:"Icon",required:!0,type:{name:"ReactNode | ComponentType<SVGAttributes<SVGElement>>"}},checked:{defaultValue:null,description:"Whether the toggle is checked.",name:"checked",required:!0,type:{name:"boolean"}}}}}catch{}export{a as T};
