import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-CQblamiJ.js";import{t as a}from"./classnames-D09xBJOL.js";import{n as o,t as s}from"./error-solid-B103M6Rr.js";import{n as c,t as l}from"./check-BR_QtkL8.js";import{n as u,t as d}from"./chevron-down-DluIZOr1.js";var f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=`_container_1xtut_8`,p=`_chevron_1xtut_34`,m=`_placeholder_1xtut_58`,h=`_content_1xtut_62`,g=`_seamless_1xtut_118`,_=`_open_1xtut_41`,v=`_help_1xtut_143`,y=`_error_1xtut_148`,b={container:f,"trigger-button":`_trigger-button_1xtut_18`,chevron:p,"open-trigger":`_open-trigger_1xtut_41`,placeholder:m,content:h,seamless:g,open:_,help:v,error:y}})))()}function S({className:e,label:t,helpLabel:n,onValueChange:r,error:i,value:a,defaultValue:o,values:c,renderItem:l,trigger:u,ref:f,...p}){let[m,h]=(0,T.useState)(o),g=a??m??null,_=(0,T.useMemo)(()=>l(g),[g,l]),v=(0,T.useCallback)(e=>{h(e),r?.(e)},[h,r]),[y,x,S]=C(),{listRef:k,onComboboxKeyDown:A,onOptionKeyDown:j}=w(y,x,v),M=(0,T.useRef)(null);(0,T.useEffect)(()=>{g!==null&&M.current?.focus()},[g]);let N=(0,E.default)({[b[`trigger-button`]]:!0,[b.placeholder]:g===null,[b[`open-trigger`]]:y}),P=(0,E.default)(b.content,{[b.open]:y,[b.seamless]:!u}),F=(0,T.useId)(),I=(0,T.useId)(),L=e=>{M.current=e,typeof f==`function`?f(e):f&&(f.current=e)},R={role:`combobox`,"aria-haspopup":`listbox`,"aria-controls":I,"aria-expanded":y,onClick:()=>x(e=>!e),onKeyDown:A};return t&&(R[`aria-labelledby`]=F),(0,D.jsxs)(`div`,{ref:S,className:(0,E.default)(e,b.container),"aria-invalid":!!i,children:[t&&(0,D.jsx)(`label`,{id:F,children:t}),u?u(R):(0,D.jsxs)(`button`,{className:N,...R,ref:L,...p,children:[_,(0,D.jsx)(d,{className:b.chevron,width:`24`,height:`24`})]}),(0,D.jsx)(`div`,{className:P,children:(0,D.jsx)(`ul`,{ref:k,id:I,role:`listbox`,className:b.content,children:c.map(e=>(0,D.jsx)(O,{isDisplayed:y,isSelected:g===e,onClick:()=>{x(!1),v(e)},onKeyDown:t=>j(t,e),children:l(e)},e))})}),!i&&n&&(0,D.jsx)(`span`,{className:b.help,children:n}),i&&(0,D.jsxs)(`span`,{className:b.error,children:[(0,D.jsx)(s,{width:`20`,height:`20`}),i]})]})}function C(){let[e,t]=(0,T.useState)(!1),n=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=e=>{n.current&&!n.current.contains(e.target)&&t(!1)};return document.addEventListener(`click`,e),()=>document.removeEventListener(`click`,e)},[t]),[e,t,n]}function w(e,t,n){let r=(0,T.useRef)(null);return{listRef:r,onComboboxKeyDown:(0,T.useCallback)(({key:n})=>{switch(n){case`Escape`:t(!1);break;case`ArrowDown`:t(!0),e&&(r.current?.firstElementChild)?.focus();break;case`ArrowUp`:t(!0);break;case`Home`:t(!0),Promise.resolve().then(()=>{(r.current?.firstElementChild)?.focus()});break;case`End`:t(!0),Promise.resolve().then(()=>{(r.current?.lastElementChild)?.focus()})}},[r,e,t]),onOptionKeyDown:(0,T.useCallback)((e,i)=>{let{key:a,altKey:o}=e;switch(e.stopPropagation(),e.preventDefault(),a){case`Enter`:case` `:n(i),t(!1);break;case`Tab`:case`Escape`:t(!1);break;case`ArrowDown`:{let e=document.activeElement;r.current?.contains(e)&&e&&e.nextElementSibling?.focus();break}case`ArrowUp`:if(o)n(i),t(!1);else{let e=document.activeElement;r.current?.contains(e)&&e&&e.previousElementSibling?.focus()}break;case`Home`:(r.current?.firstElementChild)?.focus();break;case`End`:(r.current?.lastElementChild)?.focus()}},[r,n,t])}}var T,E,D,O;function k(){return(k=t((()=>{u(),c(),o(),T=e(n(),1),E=e(a(),1),x(),D=r(),O=(0,T.memo)(function({children:e,isSelected:t,isDisplayed:n,...r}){let i=(0,T.useRef)(null);return(0,T.useEffect)(()=>{t&&n&&i.current?.focus()},[t,n]),(0,D.jsxs)(`li`,{tabIndex:0,role:`option`,ref:i,"aria-selected":t,...r,children:[(0,D.jsx)(`span`,{children:e}),` `,t&&(0,D.jsx)(l,{width:`20`,height:`20`})]})});try{S.displayName=`Dropdown`,S.__docgenInfo={description:"A dropdown that lets the user select one of a set of values.\nThe type parameter `K` represents the set of values.",displayName:`Dropdown`,filePath:`/home/runner/work/compound-web/compound-web/src/components/Dropdown/Dropdown.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The CSS class name.`,name:`className`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The controlled value of the dropdown.`,name:`value`,required:!1,tags:{},type:{name:`string | number`}},defaultValue:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The default value of the dropdown, used when uncontrolled.`,name:`defaultValue`,required:!1,tags:{},type:{name:`string | number`}},values:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The values of the items presented in the dropdown, in order.
These are the values provided back to onValueChange and the values provided
to renderItem, if provided.`,name:`values`,required:!0,tags:{},type:{name:`K[]`}},label:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The label to display at the top of the dropdown
Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
in which case you may explicitly pass null.`,name:`label`,required:!0,tags:{},type:{name:`string | null`}},helpLabel:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The help label to display at the bottom of the dropdown`,name:`helpLabel`,required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`Callback for when the value changes.`,name:`onValueChange`,required:!1,tags:{param:`value`},type:{name:`((value: K) => void)`}},error:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The error message to display.`,name:`error`,required:!1,tags:{},type:{name:`string`}},trigger:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`The trigger element used to open the menu.
Receives the props to apply to the trigger.
Default: a button with the selected value or the placeholder text and a chevron down icon.`,name:`trigger`,required:!1,tags:{},type:{name:`((props: DropdownTriggerProps) => ReactNode)`}},renderItem:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:`A function render the node that represent a given item, given the value of that item.
To render the placeholder, null is passed.`,name:`renderItem`,required:!0,tags:{},type:{name:`(value: K | null) => ReactNode`}},ref:{defaultValue:null,declarations:[{fileName:`compound-web/src/components/Dropdown/Dropdown.tsx`,name:`TypeLiteral`}],description:"A ref to the default trigger button.\nUnused if a custom `trigger` is provided.",name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLButtonElement>`}}},tags:{}}}catch{}})))()}var A,j,M,N,P,F,I,L,R;function z(){return(z=t((()=>{k(),i(),n(),A=r(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Dropdown`,component:S,tags:[`autodocs`],parameters:{controls:{include:[`defaultValue`,`placeholder`,`error`]}},argTypes:{label:{type:`string`},error:{type:`string`},values:{type:`string`}},args:{label:`Label`,onValueChange:j(),values:[`Option1`,`Option2`,`Option3`],renderItem:e=>e?e?.replace(`Option`,`Option `):`Select an option`}},N={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4`}}},P={args:{helpLabel:`Optional help text.`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4`}}},F={args:{error:`Select an option`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4`}}},I={args:{defaultValue:`Option2`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4`}}},L={args:{trigger:e=>(0,A.jsx)(`button`,{"aria-label":`Custom trigger`,...e,children:`🐴`}),label:null},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=13501-3908&t=udyWNnl3nVzp2l52-0`}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithHelpLabel`,`WithError`,`WithDefaultValue`,`WithCustomTrigger`]})))()}z();export{N as Default,L as WithCustomTrigger,I as WithDefaultValue,F as WithError,P as WithHelpLabel,R as __namedExportsOrder,M as default};