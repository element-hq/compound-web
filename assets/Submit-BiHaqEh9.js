import{j as n}from"./jsx-runtime-DoxjgJx5.js";import{r as o}from"./index-Cu9bd8lq.js";import{b as N,c as y,d as x,e as h,f as v}from"./index-v5u6b-Nk.js";import{c as i}from"./index-C2KoGaFq.js";import{S as w}from"./error-YokBWoNX.js";import{B as S}from"./Button-Yybe91ei.js";const C="_root_148br_24",V="_field_148br_34",q="_label_148br_67",R="_message_148br_98",l={root:C,field:V,"inline-field":"_inline-field_148br_40","inline-field-body":"_inline-field-body_148br_46","inline-field-control":"_inline-field-control_148br_52",label:q,message:R,"help-message":"_help-message_148br_104","error-message":"_error-message_148br_108"},c=o.forwardRef(function({children:s,...e},t){const r=i(l.root,e.className);return n.jsx(N,{ref:t,...e,className:r,children:s})});try{c.displayName="Root",c.__docgenInfo={description:`Thin wrapper around Radix UI Root component
https://www.radix-ui.com/docs/primitives/components/form#root`,displayName:"Root",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const u=o.forwardRef(function({children:s,...e},t){const r=i(l.field,e.className);return n.jsx(y,{ref:t,...e,className:r,children:s})});try{u.displayName="Field",u.__docgenInfo={description:`Thin wrapper around Radix UI Field component
https://www.radix-ui.com/docs/primitives/components/form#field`,displayName:"Field",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const m=o.forwardRef(function({className:s,control:e,children:t,...r},d){const g=i(l["inline-field"],s);return n.jsxs(y,{ref:d,...r,className:g,children:[n.jsx("div",{className:l["inline-field-control"],children:e}),n.jsx("div",{className:l["inline-field-body"],children:t})]})});try{m.displayName="InlineField",m.__docgenInfo={description:"",displayName:"InlineField",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"The checkbox/radio control to render alongside the rest of the field.",name:"control",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const p=o.forwardRef(function({children:s,...e},t){const r=i(l.label,e.className);return n.jsx(x,{ref:t,...e,className:r,children:s})});try{p.displayName="Label",p.__docgenInfo={description:`Thin wrapper around Radix UI Label component
https://www.radix-ui.com/docs/primitives/components/form#label`,displayName:"Label",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const f=o.forwardRef(function({children:s,className:e,...t},r){const d=i(l.message,l["error-message"],e);return n.jsxs(h,{ref:r,...t,className:d,children:[n.jsx(w,{}),s]})}),_=o.forwardRef(function({children:s,className:e,...t},r){const d=i(l.message,l["help-message"],e);return n.jsx(h,{ref:r,...t,className:d,children:s})});try{f.displayName="ErrorMessage",f.__docgenInfo={description:"An error message to display below a form control.",displayName:"ErrorMessage",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="HelpMessage",_.__docgenInfo={description:"A help message to display below a form control.",displayName:"HelpMessage",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const b=o.forwardRef(function(s,e){return n.jsx(v,{asChild:!0,children:n.jsx(S,{type:"submit",ref:e,...s})})});try{b.displayName="Submit",b.__docgenInfo={description:"A stylised submit button for forms.",displayName:"Submit",props:{size:{defaultValue:null,description:"The t-shirt size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},disabled:{defaultValue:null,description:"Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.\n`aria-disabled` attribute is used to indicate button is disabled.\nEvent handlers are not passed to disabled buttons (onClick, onSubmit, etc.)",name:"disabled",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"An icon to display within the button.",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGElement>>"}},kind:{defaultValue:null,description:`The type of button.
Note: "destructive" is deprecated, please use the destructive prop in
conjunction with another button kind.`,name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'},{value:'"tertiary"'}]}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"Whether the button is an icon only button.",name:"iconOnly",required:!1,type:{name:"boolean"}}}}}catch{}export{f as E,u as F,_ as H,m as I,p as L,c as R,b as S};