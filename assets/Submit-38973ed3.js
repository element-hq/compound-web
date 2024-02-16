import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as o}from"./index-8ee6c85d.js";import{b as N,c as b,d as v,e as h,f as x}from"./index-473717ad.js";import{c as i}from"./index-e131923d.js";import{S as w}from"./error-a33e3c4a.js";import{B as S}from"./Button-1d7556c8.js";const C="_root_578ve_24",V="_field_578ve_34",q="_label_578ve_67",R="_message_578ve_98",n={root:C,field:V,"inline-field":"_inline-field_578ve_40","inline-field-body":"_inline-field-body_578ve_46","inline-field-control":"_inline-field-control_578ve_52",label:q,message:R,"help-message":"_help-message_578ve_104","error-message":"_error-message_578ve_108"},c=o.forwardRef(function({children:s,...e},t){const r=i(n.root,e.className);return l.jsx(N,{ref:t,...e,className:r,children:s})});try{c.displayName="Root",c.__docgenInfo={description:`Thin wrapper around Radix UI Root component
https://www.radix-ui.com/docs/primitives/components/form#root`,displayName:"Root",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const m=o.forwardRef(function({children:s,...e},t){const r=i(n.field,e.className);return l.jsx(b,{ref:t,...e,className:r,children:s})});try{m.displayName="Field",m.__docgenInfo={description:`Thin wrapper around Radix UI Field component
https://www.radix-ui.com/docs/primitives/components/form#field`,displayName:"Field",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const u=o.forwardRef(function({className:s,control:e,children:t,...r},d){const g=i(n["inline-field"],s);return l.jsxs(b,{ref:d,...r,className:g,children:[l.jsx("div",{className:n["inline-field-control"],children:e}),l.jsx("div",{className:n["inline-field-body"],children:t})]})});try{u.displayName="InlineField",u.__docgenInfo={description:"",displayName:"InlineField",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},control:{defaultValue:null,description:"The checkbox/radio control to render alongside the rest of the field.",name:"control",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const p=o.forwardRef(function({children:s,...e},t){const r=i(n.label,e.className);return l.jsx(v,{ref:t,...e,className:r,children:s})});try{p.displayName="Label",p.__docgenInfo={description:`Thin wrapper around Radix UI Label component
https://www.radix-ui.com/docs/primitives/components/form#label`,displayName:"Label",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const f=o.forwardRef(function({children:s,className:e,...t},r){const d=i(n.message,n["error-message"],e);return l.jsxs(h,{ref:r,...t,className:d,children:[l.jsx(w,{}),s]})}),_=o.forwardRef(function({children:s,className:e,...t},r){const d=i(n.message,n["help-message"],e);return l.jsx(h,{ref:r,...t,className:d,children:s})});try{f.displayName="ErrorMessage",f.__docgenInfo={description:"An error message to display below a form control.",displayName:"ErrorMessage",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="HelpMessage",_.__docgenInfo={description:"A help message to display below a form control.",displayName:"HelpMessage",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const y=o.forwardRef(function(s,e){return l.jsx(x,{asChild:!0,children:l.jsx(S,{type:"submit",ref:e,...s})})});try{y.displayName="Submit",y.__docgenInfo={description:"A stylised submit button for forms.",displayName:"Submit",props:{size:{defaultValue:null,description:"The t-shirt size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},kind:{defaultValue:null,description:`The type of button.
Note: "destructive" is deprecated, please use the destructive prop in
conjunction with another button kind.`,name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"destructive"'}]}},disabled:{defaultValue:null,description:"Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.\n`aria-disabled` attribute is used to indicate button is disabled.\nEvent handlers are not passed to disabled buttons (onClick, onSubmit, etc.)",name:"disabled",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"An icon to display within the button.",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGElement>>"}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}}}}}catch{}export{f as E,m as F,_ as H,u as I,p as L,c as R,y as S};
//# sourceMappingURL=Submit-38973ed3.js.map