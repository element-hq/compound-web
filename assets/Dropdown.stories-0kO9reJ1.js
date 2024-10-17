import{j as r}from"./jsx-runtime-CexXSJP5.js";import{C as K}from"./chevron-down-Ua1BCmcD.js";import{C as O}from"./check-Bjchr0Ec.js";import{E as Q}from"./error-Dmbc84hO.js";import{r as a}from"./index-BP8_t0zE.js";import{c as h}from"./index-CSpfAsmC.js";import{u as S}from"./floating-ui.react-Cq_2y1sM.js";import{f as A}from"./index-ozRUDpri.js";import"./index-BlTQwN6S.js";const H="_container_1b6mf_17",P="_placeholder_1b6mf_56",F="_border_1b6mf_60",B="_content_1b6mf_69",G="_open_1b6mf_117",J="_help_1b6mf_121",M="_error_1b6mf_126",u={container:H,placeholder:P,border:F,content:B,open:G,help:J,error:M},_=a.forwardRef(function({className:n,label:o,placeholder:e,helpLabel:s,onValueChange:p,error:i,defaultValue:g,values:m,...x},d){const[t,v]=Z(m,e,g),[f,C,N]=Y(),{listRef:q,onComboboxKeyDown:z,onOptionKeyDown:L}=$(f,C,v),k=a.useRef(null);a.useEffect(()=>{t.value!==void 0&&k.current?.focus()},[t]);const j=t.text===e,V=h({[u.placeholder]:j}),W=h(u.border,{[u.open]:f}),R=h(u.content,{[u.open]:f}),I=S(),D=S();return r.jsxs("div",{ref:N,className:h(n,u.container),"aria-invalid":!!i,children:[r.jsx("label",{id:I,children:o}),r.jsxs("button",{className:V,role:"combobox","aria-haspopup":"listbox","aria-labelledby":I,"aria-controls":D,"aria-expanded":f,ref:l=>{k.current=l,typeof d=="function"?d(l):d&&(d.current=l)},onClick:()=>C(l=>!l),onKeyDown:z,...x,children:[t.text,r.jsx(K,{width:"24",height:"24"})]}),r.jsx("div",{className:W}),r.jsx("div",{className:R,children:r.jsx("ul",{ref:q,id:D,role:"listbox",className:u.content,children:m.map(([l,T])=>r.jsx(X,{isDisplayed:f,isSelected:t.value===l,onClick:()=>{C(!1),v({value:l,text:T}),p?.(l)},onKeyDown:U=>L(U,l,T),children:T},l))})}),!i&&s&&r.jsx("span",{className:u.help,children:s}),i&&r.jsxs("span",{className:u.error,children:[r.jsx(Q,{width:"20",height:"20"}),i]})]})}),X=a.memo(function({children:n,isSelected:o,isDisplayed:e,...s}){const p=a.useRef(null);return a.useEffect(()=>{o&&e&&p.current?.focus()},[o,e]),r.jsxs("li",{tabIndex:0,role:"option",ref:p,"aria-selected":o,...s,children:[n," ",o&&r.jsx(O,{width:"20",height:"20"})]})});function Y(){const[c,n]=a.useState(!1),o=a.useRef(null);return a.useEffect(()=>{const e=s=>{o.current&&!o.current.contains(s.target)&&n(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n]),[c,n,o]}function Z(c,n,o){return a.useState(()=>{const e={value:void 0,text:n};if(!o)return e;const s=c.find(([p])=>p===o);return s?{value:s[0],text:s[1]}:e})}function $(c,n,o){const e=a.useRef(null),s=a.useCallback(({key:i})=>{switch(i){case"Escape":n(!1);break;case"ArrowDown":n(!0),c&&e.current?.firstElementChild?.focus();break;case"ArrowUp":n(!0);break;case"Home":{n(!0),Promise.resolve().then(()=>{e.current?.firstElementChild?.focus()});break}case"End":{n(!0),Promise.resolve().then(()=>{e.current?.lastElementChild?.focus()});break}}},[e,c,n]),p=a.useCallback((i,g,m)=>{const{key:x,altKey:d}=i;switch(i.stopPropagation(),i.preventDefault(),x){case"Enter":case" ":{o({text:m,value:g}),n(!1);break}case"Tab":case"Escape":n(!1);break;case"ArrowDown":{const t=document.activeElement;e.current?.contains(t)&&t&&t.nextElementSibling?.focus();break}case"ArrowUp":{if(d)o({text:m,value:g}),n(!1);else{const t=document.activeElement;e.current?.contains(t)&&t&&t.previousElementSibling?.focus()}break}case"Home":{e.current?.firstElementChild?.focus();break}case"End":{e.current?.lastElementChild?.focus();break}}},[e,o,n]);return{listRef:e,onComboboxKeyDown:s,onOptionKeyDown:p}}try{_.displayName="Dropdown",_.__docgenInfo={description:"The dropdown content.",displayName:"Dropdown",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value of the dropdown.",name:"defaultValue",required:!1,type:{name:"string"}},values:{defaultValue:null,description:`The values of the dropdown.
[value, text]`,name:"values",required:!0,type:{name:"[string, string][]"}},placeholder:{defaultValue:null,description:"The placeholder text.",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label to display at the top of the dropdown",name:"label",required:!0,type:{name:"string"}},helpLabel:{defaultValue:null,description:"The help label to display at the bottom of the dropdown",name:"helpLabel",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:`Callback for when the value changes.
@param value`,name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},error:{defaultValue:null,description:"The error message to display.",name:"error",required:!1,type:{name:"string"}}}}}catch{}const ce={title:"Dropdown",component:_,tags:["autodocs"],parameters:{controls:{include:["defaultValue","placeholder","error"]}},argTypes:{label:{type:"string"},error:{type:"string"},placeholder:{type:"string"},values:{type:"string"}},args:{label:"Label",placeholder:"Select an option",onValueChange:A(),values:[["Option1","Option 1"],["Option2","Option 2"],["Option3","Option 3"]]}},b={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"}}},w={args:{helpLabel:"Optional help text."},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"}}},E={args:{error:"Select an option"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"}}},y={args:{defaultValue:"Option2"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Select an option"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Option2"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...y.parameters?.docs?.source}}};const ue=["Default","WithHelpLabel","WithError","WithDefaultValue"];export{b as Default,y as WithDefaultValue,E as WithError,w as WithHelpLabel,ue as __namedExportsOrder,ce as default};
