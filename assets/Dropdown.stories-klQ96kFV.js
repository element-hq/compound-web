import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as H}from"./chevron-down-C_HLOr0c.js";import{C as P}from"./check-Css5R888.js";import{E as F}from"./error-solid-DBDQzJkq.js";import{r}from"./index-BKyFwriW.js";import{c as b}from"./index-FGJkmGnF.js";import{u as N}from"./floating-ui.react-CUHBVVHR.js";import{f as B}from"./index-B9Dy1COi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./floating-ui.react-dom-6ZVBEX4r.js";import"./index-D77-yIvl.js";import"./index-DQw2Bw4b.js";const M="_container_j0rlq_8",G="_placeholder_j0rlq_47",J="_border_j0rlq_51",X="_content_j0rlq_60",Y="_open_j0rlq_108",Z="_help_j0rlq_112",$="_error_j0rlq_117",c={container:M,placeholder:G,border:J,content:X,open:Y,help:Z,error:$},v=r.forwardRef(function({className:n,label:t,placeholder:e,helpLabel:i,onValueChange:d,error:s,value:g,defaultValue:C,values:m,...l},h){const[S,_]=r.useState(C),p=g??S,k=r.useMemo(()=>p===void 0?e:m.find(([o])=>o===p)?.[1]??e,[p,m,e]),I=r.useCallback(o=>{_(o),d?.(o)},[_,d]),[f,T,V]=ne(),{listRef:z,onComboboxKeyDown:L,onOptionKeyDown:W}=oe(f,T,I),q=r.useRef(null);r.useEffect(()=>{p!==void 0&&q.current?.focus()},[p]);const U=k===e,R=b({[c.placeholder]:U}),K=b(c.border,{[c.open]:f}),O=b(c.content,{[c.open]:f}),j=N(),D=N();return a.jsxs("div",{ref:V,className:b(n,c.container),"aria-invalid":!!s,children:[a.jsx("label",{id:j,children:t}),a.jsxs("button",{className:R,role:"combobox","aria-haspopup":"listbox","aria-labelledby":j,"aria-controls":D,"aria-expanded":f,ref:o=>{q.current=o,typeof h=="function"?h(o):h&&(h.current=o)},onClick:()=>T(o=>!o),onKeyDown:L,...l,children:[k,a.jsx(H,{width:"24",height:"24"})]}),a.jsx("div",{className:K}),a.jsx("div",{className:O,children:a.jsx("ul",{ref:z,id:D,role:"listbox",className:c.content,children:m.map(([o,Q])=>a.jsx(ee,{isDisplayed:f,isSelected:p===o,onClick:()=>{T(!1),I(o)},onKeyDown:A=>W(A,o),children:Q},o))})}),!s&&i&&a.jsx("span",{className:c.help,children:i}),s&&a.jsxs("span",{className:c.error,children:[a.jsx(F,{width:"20",height:"20"}),s]})]})}),ee=r.memo(function({children:n,isSelected:t,isDisplayed:e,...i}){const d=r.useRef(null);return r.useEffect(()=>{t&&e&&d.current?.focus()},[t,e]),a.jsxs("li",{tabIndex:0,role:"option",ref:d,"aria-selected":t,...i,children:[n," ",t&&a.jsx(P,{width:"20",height:"20"})]})});function ne(){const[u,n]=r.useState(!1),t=r.useRef(null);return r.useEffect(()=>{const e=i=>{t.current&&!t.current.contains(i.target)&&n(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[n]),[u,n,t]}function oe(u,n,t){const e=r.useRef(null),i=r.useCallback(({key:s})=>{switch(s){case"Escape":n(!1);break;case"ArrowDown":n(!0),u&&e.current?.firstElementChild?.focus();break;case"ArrowUp":n(!0);break;case"Home":{n(!0),Promise.resolve().then(()=>{e.current?.firstElementChild?.focus()});break}case"End":{n(!0),Promise.resolve().then(()=>{e.current?.lastElementChild?.focus()});break}}},[e,u,n]),d=r.useCallback((s,g)=>{const{key:C,altKey:m}=s;switch(s.stopPropagation(),s.preventDefault(),C){case"Enter":case" ":{t(g),n(!1);break}case"Tab":case"Escape":n(!1);break;case"ArrowDown":{const l=document.activeElement;e.current?.contains(l)&&l&&l.nextElementSibling?.focus();break}case"ArrowUp":{if(m)t(g),n(!1);else{const l=document.activeElement;e.current?.contains(l)&&l&&l.previousElementSibling?.focus()}break}case"Home":{e.current?.firstElementChild?.focus();break}case"End":{e.current?.lastElementChild?.focus();break}}},[e,t,n]);return{listRef:e,onComboboxKeyDown:i,onOptionKeyDown:d}}try{v.displayName="Dropdown",v.__docgenInfo={description:"The dropdown content.",displayName:"Dropdown",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The controlled value of the dropdown.",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value of the dropdown, used when uncontrolled.",name:"defaultValue",required:!1,type:{name:"string"}},values:{defaultValue:null,description:`The values of the dropdown.
[value, text]`,name:"values",required:!0,type:{name:"[string, string][]"}},placeholder:{defaultValue:null,description:"The placeholder text.",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label to display at the top of the dropdown",name:"label",required:!0,type:{name:"string"}},helpLabel:{defaultValue:null,description:"The help label to display at the bottom of the dropdown",name:"helpLabel",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:`Callback for when the value changes.
@param value`,name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},error:{defaultValue:null,description:"The error message to display.",name:"error",required:!1,type:{name:"string"}}}}}catch{}const ge={title:"Dropdown",component:v,tags:["autodocs"],parameters:{controls:{include:["defaultValue","placeholder","error"]}},argTypes:{label:{type:"string"},error:{type:"string"},placeholder:{type:"string"},values:{type:"string"}},args:{label:"Label",placeholder:"Select an option",onValueChange:B(),values:[["Option1","Option 1"],["Option2","Option 2"],["Option3","Option 3"]]}},w={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4"}}},E={args:{helpLabel:"Optional help text."},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4"}}},y={args:{error:"Select an option"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4"}}},x={args:{defaultValue:"Option2"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4"}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
