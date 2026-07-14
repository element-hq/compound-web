import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-B_yVhtXG.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./dist-xDuJYsUr.js";import{t as a}from"./classnames-Dm_LJ4P4.js";import{n as o,t as s}from"./error-solid-CM0bfTC2.js";import{n as c,t as l}from"./check-6Qmd2jG3.js";import{n as u,t as d}from"./chevron-down-9yqRy7BH.js";var f,p,m,h,g,_,v,y,b,x=e((()=>{f=`_container_1xtut_8`,p=`_chevron_1xtut_34`,m=`_placeholder_1xtut_58`,h=`_content_1xtut_62`,g=`_seamless_1xtut_118`,_=`_open_1xtut_41`,v=`_help_1xtut_143`,y=`_error_1xtut_148`,b={container:f,"trigger-button":`_trigger-button_1xtut_18`,chevron:p,"open-trigger":`_open-trigger_1xtut_41`,placeholder:m,content:h,seamless:g,open:_,help:v,error:y}}));function S(){let[e,t]=(0,w.useState)(!1),n=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&t(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[t]),[e,t,n]}function C(e,t,n){let r=(0,w.useRef)(null);return{listRef:r,onComboboxKeyDown:(0,w.useCallback)(({key:n})=>{switch(n){case`Escape`:t(!1);break;case`ArrowDown`:t(!0),e&&(r.current?.firstElementChild)?.focus();break;case`ArrowUp`:t(!0);break;case`Home`:t(!0),Promise.resolve().then(()=>{(r.current?.firstElementChild)?.focus()});break;case`End`:t(!0),Promise.resolve().then(()=>{(r.current?.lastElementChild)?.focus()});break}},[r,e,t]),onOptionKeyDown:(0,w.useCallback)((e,i)=>{let{key:a,altKey:o}=e;switch(e.stopPropagation(),e.preventDefault(),a){case`Enter`:case` `:n(i),t(!1);break;case`Tab`:case`Escape`:t(!1);break;case`ArrowDown`:{let e=document.activeElement;r.current?.contains(e)&&e&&e.nextElementSibling?.focus();break}case`ArrowUp`:if(o)n(i),t(!1);else{let e=document.activeElement;r.current?.contains(e)&&e&&e.previousElementSibling?.focus()}break;case`Home`:(r.current?.firstElementChild)?.focus();break;case`End`:(r.current?.lastElementChild)?.focus();break}},[r,n,t])}}var w,T,E,D,O,k=e((()=>{u(),c(),o(),w=t(n(),1),T=t(a(),1),x(),E=r(),D=(0,w.forwardRef)(function({className:e,label:t,placeholder:n,helpLabel:r,onValueChange:i,error:a,value:o,defaultValue:c,values:l,trigger:u,...f},p){let[m,h]=(0,w.useState)(c),g=o??m,_=(0,w.useMemo)(()=>g===void 0?n:l.find(([e])=>e===g)?.[1]??n,[g,l,n]),v=(0,w.useCallback)(e=>{h(e),i?.(e)},[h,i]),[y,x,D]=S(),{listRef:k,onComboboxKeyDown:A,onOptionKeyDown:j}=C(y,x,v),M=(0,w.useRef)(null);(0,w.useEffect)(()=>{g!==void 0&&M.current?.focus()},[g]);let N=_===n,P=(0,T.default)({[b[`trigger-button`]]:!0,[b.placeholder]:N,[b[`open-trigger`]]:y}),F=(0,T.default)(b.content,{[b.open]:y,[b.seamless]:!u}),I=(0,w.useId)(),L=(0,w.useId)(),R=e=>{M.current=e,typeof p==`function`?p(e):p&&(p.current=e)},z={role:`combobox`,"aria-haspopup":`listbox`,"aria-controls":L,"aria-expanded":y,onClick:()=>x(e=>!e),onKeyDown:A};return t&&(z[`aria-labelledby`]=I),(0,E.jsxs)(`div`,{ref:D,className:(0,T.default)(e,b.container),"aria-invalid":!!a,children:[t&&(0,E.jsx)(`label`,{id:I,children:t}),u?u(z):(0,E.jsxs)(`button`,{className:P,...z,ref:R,...f,children:[_,(0,E.jsx)(d,{className:b.chevron,width:`24`,height:`24`})]}),(0,E.jsx)(`div`,{className:F,children:(0,E.jsx)(`ul`,{ref:k,id:L,role:`listbox`,className:b.content,children:l.map(([e,t])=>(0,E.jsx)(O,{isDisplayed:y,isSelected:g===e,onClick:()=>{x(!1),v(e)},onKeyDown:t=>j(t,e),children:t},e))})}),!a&&r&&(0,E.jsx)(`span`,{className:b.help,children:r}),a&&(0,E.jsxs)(`span`,{className:b.error,children:[(0,E.jsx)(s,{width:`20`,height:`20`}),a]})]})}),O=(0,w.memo)(function({children:e,isSelected:t,isDisplayed:n,...r}){let i=(0,w.useRef)(null);return(0,w.useEffect)(()=>{t&&n&&i.current?.focus()},[t,n]),(0,E.jsxs)(`li`,{tabIndex:0,role:`option`,ref:i,"aria-selected":t,...r,children:[e,` `,t&&(0,E.jsx)(l,{width:`20`,height:`20`})]})});try{D.displayName=`Dropdown`,D.__docgenInfo={description:`The dropdown content.`,displayName:`Dropdown`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Dropdown/Dropdown.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The CSS class name.`,name:`className`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The controlled value of the dropdown.`,name:`value`,required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The default value of the dropdown, used when uncontrolled.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string`}},values:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The values of the dropdown.
[value, text]`,name:`values`,required:!0,tags:{},type:{name:`[string, string][]`}},placeholder:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The placeholder text.
Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
in which case you may explicitly pass null.`,name:`placeholder`,required:!0,tags:{},type:{name:`string | null`}},label:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The label to display at the top of the dropdown
Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
in which case you may explicitly pass null.`,name:`label`,required:!0,tags:{},type:{name:`string | null`}},helpLabel:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The help label to display at the bottom of the dropdown`,name:`helpLabel`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`Callback for when the value changes.`,name:`onValueChange`,required:!1,tags:{param:`value`},type:{name:`((value: string) => void)`}},error:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The error message to display.`,name:`error`,required:!1,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The trigger element used to open the menu.
Receives the props to apply to the trigger.
Default: a button with the selected value or the placeholder text and a chevron down icon.`,name:`trigger`,required:!1,tags:{},type:{name:`((props: DropdownTriggerProps) => ReactNode)`}}},tags:{}}}catch{}})),A,j,M,N,P,F,I,L,R;e((()=>{k(),i(),n(),A=r(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Dropdown`,component:D,tags:[`autodocs`],parameters:{controls:{include:[`defaultValue`,`placeholder`,`error`]}},argTypes:{label:{type:`string`},error:{type:`string`},placeholder:{type:`string`},values:{type:`string`}},args:{label:`Label`,placeholder:`Select an option`,onValueChange:j(),values:[[`Option1`,`Option 1`],[`Option2`,`Option 2`],[`Option3`,`Option 3`]]}},N={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4`}}},P={args:{helpLabel:`Optional help text.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4`}}},F={args:{error:`Select an option`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4`}}},I={args:{defaultValue:`Option2`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4`}}},L={args:{trigger:e=>(0,A.jsx)(`button`,{"aria-label":`Custom trigger`,...e,children:`🐴`}),label:null},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=13501-3908&t=udyWNnl3nVzp2l52-0`}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Select an option"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Option2"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: props => <button aria-label="Custom trigger" {...props}>
        🐴
      </button>,
    label: null
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=13501-3908&t=udyWNnl3nVzp2l52-0"
    }
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithHelpLabel`,`WithError`,`WithDefaultValue`,`WithCustomTrigger`]}))();export{N as Default,L as WithCustomTrigger,I as WithDefaultValue,F as WithError,P as WithHelpLabel,R as __namedExportsOrder,M as default};