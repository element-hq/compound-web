import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-BbTYzt9E.js";import{t as a}from"./classnames-D09xBJOL.js";import{n as o,t as s}from"./error-solid-B103M6Rr.js";import{n as c,t as l}from"./check-BR_QtkL8.js";import{n as u,t as d}from"./chevron-down-DluIZOr1.js";var f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{f=`_container_1dsjc_8`,p=`_disabled_1dsjc_17`,m=`_chevron_1dsjc_38`,h=`_placeholder_1dsjc_62`,g=`_content_1dsjc_73`,_=`_seamless_1dsjc_129`,v=`_open_1dsjc_45`,y=`_help_1dsjc_154`,b=`_error_1dsjc_159`,x={container:f,disabled:p,"trigger-button":`_trigger-button_1dsjc_22`,chevron:m,"open-trigger":`_open-trigger_1dsjc_45`,placeholder:h,"disabled-trigger":`_disabled-trigger_1dsjc_66`,content:g,seamless:_,open:v,help:y,error:b}})))()}function C({className:e,label:t,helpLabel:n,onValueChange:r,error:i,value:a,defaultValue:o,values:c,renderItem:l,trigger:u,ref:f,disabled:p=!1,...m}){let[h,g]=(0,E.useState)(o),_=a??h??null,v=(0,E.useMemo)(()=>l(_),[_,l]),y=(0,E.useCallback)(e=>{g(e),r?.(e)},[g,r]),[b,S,C]=w(),{listRef:A,onComboboxKeyDown:j,onOptionKeyDown:M}=T(b,S,y),N=(0,E.useRef)(null);(0,E.useEffect)(()=>{_!==null&&N.current?.focus()},[_]);let P=(0,D.default)({[x[`trigger-button`]]:!0,[x.placeholder]:_===null,[x[`open-trigger`]]:b,[x[`disabled-trigger`]]:p}),F=(0,D.default)(x.content,{[x.open]:b,[x.seamless]:!u}),I=(0,E.useId)(),L=(0,E.useId)(),R=e=>{N.current=e,typeof f==`function`?f(e):f&&(f.current=e)},z={role:`combobox`,"aria-haspopup":`listbox`,"aria-controls":L,"aria-expanded":b,onClick:(0,E.useCallback)(()=>{p||S(e=>!e)},[S,p]),onKeyDown:j};return t&&(z[`aria-labelledby`]=I),(0,O.jsxs)(`div`,{ref:C,className:(0,D.default)(e,x.container),"aria-invalid":!!i,children:[t&&(0,O.jsx)(`label`,{id:I,className:(0,D.default)({[x.disabled]:p}),children:t}),u?u(z):(0,O.jsxs)(`button`,{className:P,...z,ref:R,...m,disabled:p,children:[v,(0,O.jsx)(d,{className:x.chevron,width:`24`,height:`24`})]}),(0,O.jsx)(`div`,{className:F,children:(0,O.jsx)(`ul`,{ref:A,id:L,role:`listbox`,className:x.content,children:c.map(e=>(0,O.jsx)(k,{isDisplayed:b,isSelected:_===e,onClick:()=>{S(!1),y(e)},onKeyDown:t=>M(t,e),children:l(e)},e))})}),!i&&n&&(0,O.jsx)(`span`,{className:x.help,children:n}),i&&(0,O.jsxs)(`span`,{className:x.error,children:[(0,O.jsx)(s,{width:`20`,height:`20`}),i]})]})}function w(){let[e,t]=(0,E.useState)(!1),n=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&t(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[t]),[e,t,n]}function T(e,t,n){let r=(0,E.useRef)(null);return{listRef:r,onComboboxKeyDown:(0,E.useCallback)(({key:n})=>{switch(n){case`Escape`:t(!1);break;case`ArrowDown`:t(!0),e&&(r.current?.firstElementChild)?.focus();break;case`ArrowUp`:t(!0);break;case`Home`:t(!0),Promise.resolve().then(()=>{(r.current?.firstElementChild)?.focus()});break;case`End`:t(!0),Promise.resolve().then(()=>{(r.current?.lastElementChild)?.focus()})}},[r,e,t]),onOptionKeyDown:(0,E.useCallback)((e,i)=>{let{key:a,altKey:o}=e;switch(e.stopPropagation(),e.preventDefault(),a){case`Enter`:case` `:n(i),t(!1);break;case`Tab`:case`Escape`:t(!1);break;case`ArrowDown`:{let e=document.activeElement;r.current?.contains(e)&&e&&e.nextElementSibling?.focus();break}case`ArrowUp`:if(o)n(i),t(!1);else{let e=document.activeElement;r.current?.contains(e)&&e&&e.previousElementSibling?.focus()}break;case`Home`:(r.current?.firstElementChild)?.focus();break;case`End`:(r.current?.lastElementChild)?.focus()}},[r,n,t])}}var E,D,O,k;function A(){return(A=t((()=>{u(),c(),o(),E=e(n(),1),D=e(a(),1),S(),O=r(),k=(0,E.memo)(function({children:e,isSelected:t,isDisplayed:n,...r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{t&&n&&i.current?.focus()},[t,n]),(0,O.jsxs)(`li`,{tabIndex:0,role:`option`,ref:i,"aria-selected":t,...r,children:[(0,O.jsx)(`span`,{children:e}),` `,t&&(0,O.jsx)(l,{width:`20`,height:`20`})]})});try{C.displayName=`Dropdown`,C.__docgenInfo={description:"A dropdown that lets the user select one of a set of values.\nThe type parameter `K` represents the set of values.",displayName:`Dropdown`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Dropdown/Dropdown.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The CSS class name.`,name:`className`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The controlled value of the dropdown.`,name:`value`,required:!1,tags:{},type:{name:`string | number`}},defaultValue:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The default value of the dropdown, used when uncontrolled.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string | number`}},values:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The values of the items presented in the dropdown, in order.
These are the values provided back to onValueChange and the values provided
to renderItem, if provided.`,name:`values`,required:!0,tags:{},type:{name:`K[]`}},label:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The label to display at the top of the dropdown
Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
in which case you may explicitly pass null.`,name:`label`,required:!0,tags:{},type:{name:`string | null`}},helpLabel:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The help label to display at the bottom of the dropdown`,name:`helpLabel`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`Callback for when the value changes.`,name:`onValueChange`,required:!1,tags:{param:`value`},type:{name:`((value: K) => void)`}},error:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The error message to display.`,name:`error`,required:!1,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The trigger element used to open the menu.
Receives the props to apply to the trigger.
Default: a button with the selected value or the placeholder text and a chevron down icon.`,name:`trigger`,required:!1,tags:{},type:{name:`((props: DropdownTriggerProps) => ReactNode)`}},renderItem:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`A function render the node that represent a given item, given the value of that item.
To render the placeholder, null is passed.`,name:`renderItem`,required:!0,tags:{},type:{name:`(value: K | null) => ReactNode`}},ref:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:"A ref to the default trigger button.\nUnused if a custom `trigger` is provided.",name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`True to make the dropdown disabled and non-interactive.
Default: false.`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{A(),i(),n(),j=r(),{fn:M}=__STORYBOOK_MODULE_TEST__,N={title:`Dropdown`,component:C,tags:[`autodocs`],parameters:{controls:{include:[`defaultValue`,`placeholder`,`error`]}},argTypes:{label:{type:`string`},error:{type:`string`},values:{type:`string`}},args:{label:`Label`,onValueChange:M(),values:[`Option1`,`Option2`,`Option3`],renderItem:e=>e?e?.replace(`Option`,`Option `):`Select an option`}},P={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4`}}},F={args:{disabled:!0},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4`}}},I={args:{helpLabel:`Optional help text.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4`}}},L={args:{error:`Select an option`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4`}}},R={args:{defaultValue:`Option2`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4`}}},z={args:{trigger:e=>(0,j.jsx)(`button`,{"aria-label":`Custom trigger`,...e,children:`🐴`}),label:null},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=13501-3908&t=udyWNnl3nVzp2l52-0`}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Select an option"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Option2"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Default`,`Disabled`,`WithHelpLabel`,`WithError`,`WithDefaultValue`,`WithCustomTrigger`]})))()}V();export{P as Default,F as Disabled,z as WithCustomTrigger,R as WithDefaultValue,L as WithError,I as WithHelpLabel,B as __namedExportsOrder,N as default};