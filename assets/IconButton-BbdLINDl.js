import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{r as y,a as v}from"./index-Cu9bd8lq.js";import{c as _}from"./index-C2KoGaFq.js";import{U as g}from"./UnstyledButton-CUaD5tB8.js";import{I}from"./IndicatorIcon-iinDG_Nf.js";import{T as x}from"./Tooltip-ULVuzg2r.js";const q="_destructive_bh2qc_83",e={"icon-button":"_icon-button_bh2qc_17","subtle-bg":"_subtle-bg_bh2qc_38",destructive:q},s=y.forwardRef(function({children:l,className:d,indicator:o,size:u="32px",style:c,disabled:n,destructive:b,tooltip:a,subtleBackground:p,...m},h){const f=_(e["icon-button"],d,{[e.destructive]:b,[e["subtle-bg"]]:p}),i=t.jsx(g,{as:"button",ref:h,className:f,style:{"--cpd-icon-button-size":u,...c},disabled:n,...m,"data-indicator":o,children:t.jsx(I,{indicator:o,colour:n?"var(--cpd-color-icon-disabled)":void 0,children:v.Children.only(l)})});return a?t.jsx(x,{label:a,children:i}):i});try{s.displayName="IconButton",s.__docgenInfo={description:"Display an icon as a button. Can render an indicator",displayName:"IconButton",props:{size:{defaultValue:{value:"32px"},description:'The size of the button in CSS units, e.g. `"24px"`.\nNote that this is the size of the *button* itself: the icon will be 0.75 * this size',name:"size",required:!1,type:{name:"string"}},indicator:{defaultValue:null,description:`The icon button indicator dot displayed on the top right
As in IndicatorIcon`,name:"indicator",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"critical"'}]}},tooltip:{defaultValue:null,description:"Optional tooltip for the button",name:"tooltip",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.
\`aria-disabled\` attribute is used to indicate button is disabled.
Event handlers are not passed to disabled buttons (onClick, onSubmit, etc.)
Whether the button is interactable`,name:"disabled",required:!1,type:{name:"boolean"}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}},subtleBackground:{defaultValue:null,description:"",name:"subtleBackground",required:!1,type:{name:"boolean"}}}}}catch{}export{s as I};
