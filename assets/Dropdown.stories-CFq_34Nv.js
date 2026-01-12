import{j as a}from"./jsx-runtime-u17CrQMm.js";import{C as H}from"./chevron-down-lathx5TS.js";import{C as P}from"./check-spTFYgw8.js";import{E as B}from"./error-solid-C2hwmJ3G.js";import{r as t}from"./iframe-D9XPr8fL.js";import{c as b}from"./index-Cv_r_weX.js";import{u as S}from"./floating-ui.react-BXwsLQOU.js";import"./index-Ce0oswAc.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-ui.core-BbbQpTXO.js";import"./index-BwwzWf3E.js";import"./index-RhJa66JJ.js";const F="_container_j0rlq_8",M="_placeholder_j0rlq_47",Y="_border_j0rlq_51",G="_content_j0rlq_60",J="_open_j0rlq_108",X="_help_j0rlq_112",Z="_error_j0rlq_117",c={container:F,placeholder:M,border:Y,content:G,open:J,help:X,error:Z},_=t.forwardRef(function({className:n,label:r,placeholder:e,helpLabel:i,onValueChange:d,error:s,value:g,defaultValue:C,values:m,...l},h){const[N,v]=t.useState(C),p=g??N,k=t.useMemo(()=>p===void 0?e:m.find(([o])=>o===p)?.[1]??e,[p,m,e]),I=t.useCallback(o=>{v(o),d?.(o)},[v,d]),[f,T,V]=ee(),{listRef:L,onComboboxKeyDown:z,onOptionKeyDown:W}=ne(f,T,I),q=t.useRef(null);t.useEffect(()=>{p!==void 0&&q.current?.focus()},[p]);const O=k===e,U=b({[c.placeholder]:O}),R=b(c.border,{[c.open]:f}),K=b(c.content,{[c.open]:f}),j=S(),D=S();return a.jsxs("div",{ref:V,className:b(n,c.container),"aria-invalid":!!s,children:[a.jsx("label",{id:j,children:r}),a.jsxs("button",{className:U,role:"combobox","aria-haspopup":"listbox","aria-labelledby":j,"aria-controls":D,"aria-expanded":f,ref:o=>{q.current=o,typeof h=="function"?h(o):h&&(h.current=o)},onClick:()=>T(o=>!o),onKeyDown:z,...l,children:[k,a.jsx(H,{width:"24",height:"24"})]}),a.jsx("div",{className:R}),a.jsx("div",{className:K,children:a.jsx("ul",{ref:L,id:D,role:"listbox",className:c.content,children:m.map(([o,Q])=>a.jsx($,{isDisplayed:f,isSelected:p===o,onClick:()=>{T(!1),I(o)},onKeyDown:A=>W(A,o),children:Q},o))})}),!s&&i&&a.jsx("span",{className:c.help,children:i}),s&&a.jsxs("span",{className:c.error,children:[a.jsx(B,{width:"20",height:"20"}),s]})]})}),$=t.memo(function({children:n,isSelected:r,isDisplayed:e,...i}){const d=t.useRef(null);return t.useEffect(()=>{r&&e&&d.current?.focus()},[r,e]),a.jsxs("li",{tabIndex:0,role:"option",ref:d,"aria-selected":r,...i,children:[n," ",r&&a.jsx(P,{width:"20",height:"20"})]})});function ee(){const[u,n]=t.useState(!1),r=t.useRef(null);return t.useEffect(()=>{const e=i=>{r.current&&!r.current.contains(i.target)&&n(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n]),[u,n,r]}function ne(u,n,r){const e=t.useRef(null),i=t.useCallback(({key:s})=>{switch(s){case"Escape":n(!1);break;case"ArrowDown":n(!0),u&&e.current?.firstElementChild?.focus();break;case"ArrowUp":n(!0);break;case"Home":{n(!0),Promise.resolve().then(()=>{e.current?.firstElementChild?.focus()});break}case"End":{n(!0),Promise.resolve().then(()=>{e.current?.lastElementChild?.focus()});break}}},[e,u,n]),d=t.useCallback((s,g)=>{const{key:C,altKey:m}=s;switch(s.stopPropagation(),s.preventDefault(),C){case"Enter":case" ":{r(g),n(!1);break}case"Tab":case"Escape":n(!1);break;case"ArrowDown":{const l=document.activeElement;e.current?.contains(l)&&l&&l.nextElementSibling?.focus();break}case"ArrowUp":{if(m)r(g),n(!1);else{const l=document.activeElement;e.current?.contains(l)&&l&&l.previousElementSibling?.focus()}break}case"Home":{e.current?.firstElementChild?.focus();break}case"End":{e.current?.lastElementChild?.focus();break}}},[e,r,n]);return{listRef:e,onComboboxKeyDown:i,onOptionKeyDown:d}}try{_.displayName="Dropdown",_.__docgenInfo={description:"The dropdown content.",displayName:"Dropdown",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The controlled value of the dropdown.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value of the dropdown, used when uncontrolled.",name:"defaultValue",required:!1,type:{name:"string"}},values:{defaultValue:null,description:`The values of the dropdown.
[value, text]`,name:"values",required:!0,type:{name:"[string, string][]"}},placeholder:{defaultValue:null,description:"The placeholder text.",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label to display at the top of the dropdown",name:"label",required:!0,type:{name:"string"}},helpLabel:{defaultValue:null,description:"The help label to display at the bottom of the dropdown",name:"helpLabel",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:`Callback for when the value changes.
@param value`,name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},error:{defaultValue:null,description:"The error message to display.",name:"error",required:!1,type:{name:"string"}}}}}catch{}const{fn:oe}=__STORYBOOK_MODULE_TEST__,ge={title:"Dropdown",component:_,tags:["autodocs"],parameters:{controls:{include:["defaultValue","placeholder","error"]}},argTypes:{label:{type:"string"},error:{type:"string"},placeholder:{type:"string"},values:{type:"string"}},args:{label:"Label",placeholder:"Select an option",onValueChange:oe(),values:[["Option1","Option 1"],["Option2","Option 2"],["Option3","Option 3"]]}},w={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"}}},E={args:{helpLabel:"Optional help text."},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"}}},y={args:{error:"Select an option"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"}}},x={args:{defaultValue:"Option2"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    helpLabel: "Optional help text."
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...E.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Select an option"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Option2"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"
    }
  }
}`,...x.parameters?.docs?.source}}};const he=["Default","WithHelpLabel","WithError","WithDefaultValue"];export{w as Default,x as WithDefaultValue,y as WithError,E as WithHelpLabel,he as __namedExportsOrder,ge as default};
