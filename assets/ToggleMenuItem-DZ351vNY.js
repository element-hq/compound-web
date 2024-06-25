import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{r as m}from"./index-Cu9bd8lq.js";import{M as c}from"./MenuItem-CjxlTIiG.js";import{T as d}from"./Toggle-C-uiCCLl.js";import{u as p}from"./useId-D5m2XpUu.js";const o=m.forwardRef(function({className:a,Icon:l,label:i,onSelect:s,...e},u){const t=p();return n.jsx(c,{as:"div",role:"menuitemcheckbox",className:a,Icon:l,label:i,labelProps:{as:"label",htmlFor:t},onSelect:s,"aria-checked":e.checked,children:n.jsx(d,{id:t,ref:u,...e})})});try{o.displayName="ToggleMenuItem",o.__docgenInfo={description:"A menu item with a toggle control. Clicking anywhere on the surface will\nactivate the toggle.\nMust be used within a compound Menu or other `menu` or `menubar` aria role subtree.",displayName:"ToggleMenuItem",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:`Event callback for when the item is selected via mouse, touch, or keyboard.
Calling event.preventDefault in this handler will prevent the menu from
being dismissed.`,name:"onSelect",required:!0,type:{name:"((e: Event) => void) | null"}},label:{defaultValue:null,description:"The label to show on this menu item.",name:"label",required:!0,type:{name:"string | null"}},Icon:{defaultValue:null,description:"The icon to show on this menu item.\nWhen `Icon` is a ReactNode, it should spread the props",name:"Icon",required:!0,type:{name:"ReactNode | ComponentType<SVGAttributes<SVGElement>>"}}}}}catch{}export{o as T};