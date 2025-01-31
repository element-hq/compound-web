import{j as t}from"./jsx-runtime-C-_spy54.js";import{r as y,R as _}from"./index-aRQRyZp7.js";import{c as v}from"./index-DUolvyrz.js";import{U as g}from"./UnstyledButton-zoctzHbu.js";import{I}from"./IndicatorIcon-BtGGgNoY.js";import{a as x}from"./Tooltip-UFqn53rE.js";const B="_destructive_m2erp_74",e={"icon-button":"_icon-button_m2erp_8","subtle-bg":"_subtle-bg_m2erp_29",destructive:B},s=y.forwardRef(function({children:l,className:d,indicator:n,size:u="32px",style:c,disabled:o,destructive:b,tooltip:a,subtleBackground:p,...m},f){const h=v(e["icon-button"],d,{[e.destructive]:b,[e["subtle-bg"]]:p}),i=t.jsx(g,{as:"button",ref:f,className:h,style:{"--cpd-icon-button-size":u,...c},disabled:o,...m,"data-indicator":n,children:t.jsx(I,{indicator:n,colour:o?"var(--cpd-color-icon-disabled)":void 0,children:_.Children.only(l)})});return a?t.jsx(x,{label:a,children:i}):i});try{s.displayName="IconButton",s.__docgenInfo={description:"Display an icon as a button. Can render an indicator",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Optional tooltip for the button",name:"tooltip",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.
\`aria-disabled\` attribute is used to indicate button is disabled.
Event handlers are not passed to disabled buttons (onClick, onSubmit, etc.)
Whether the button is interactable`,name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"32px"},description:'The size of the button in CSS units, e.g. `"24px"`.\nNote that this is the size of the *button* itself: the icon will be 0.75 * this size',name:"size",required:!1,type:{name:"string"}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}},indicator:{defaultValue:null,description:`The icon button indicator dot displayed on the top right
As in IndicatorIcon`,name:"indicator",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"critical"'}]}},subtleBackground:{defaultValue:null,description:"",name:"subtleBackground",required:!1,type:{name:"boolean"}}}}}catch{}export{s as I};
