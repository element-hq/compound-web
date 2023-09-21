import{j as $}from"./jsx-runtime-ffb262ed.js";import{c as M}from"./index-e131923d.js";import{r as a}from"./index-76fb7be0.js";import{_ as C}from"./extends-98964cd2.js";import{$ as w,a as _e,b as J,c as T,d as Q}from"./index-c339dd50.js";import{B as Ce}from"./Button-44c2d377.js";const ye=a.forwardRef((e,o)=>a.createElement(w.label,C({},e,{ref:o,onMouseDown:t=>{var n;(n=e.onMouseDown)===null||n===void 0||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),[W,it]=_e("Form"),ce="Form",[ge,N]=W(ce),[be,le]=W(ce),Fe=a.forwardRef((e,o)=>{const{__scopeForm:t,onClearServerErrors:n=()=>{},...r}=e,c=a.useRef(null),f=J(o,c),[u,p]=a.useState({}),h=a.useCallback(i=>u[i],[u]),b=a.useCallback((i,l)=>p(d=>{var m;return{...d,[i]:{...(m=d[i])!==null&&m!==void 0?m:{},...l}}}),[]),I=a.useCallback(i=>{p(l=>({...l,[i]:void 0})),s(l=>({...l,[i]:{}}))},[]),[_,y]=a.useState({}),x=a.useCallback(i=>{var l;return(l=_[i])!==null&&l!==void 0?l:[]},[_]),F=a.useCallback((i,l)=>{y(d=>{var m;return{...d,[i]:[...(m=d[i])!==null&&m!==void 0?m:[],l]}})},[]),g=a.useCallback((i,l)=>{y(d=>{var m;return{...d,[i]:((m=d[i])!==null&&m!==void 0?m:[]).filter(j=>j.id!==l)}})},[]),[V,s]=a.useState({}),v=a.useCallback(i=>{var l;return(l=V[i])!==null&&l!==void 0?l:{}},[V]),E=a.useCallback((i,l)=>{s(d=>{var m;return{...d,[i]:{...(m=d[i])!==null&&m!==void 0?m:{},...l}}})},[]),[R,S]=a.useState({}),O=a.useCallback((i,l)=>{S(d=>{const m=new Set(d[i]).add(l);return{...d,[i]:m}})},[]),k=a.useCallback((i,l)=>{S(d=>{const m=new Set(d[i]);return m.delete(l),{...d,[i]:m}})},[]),L=a.useCallback(i=>{var l;return Array.from((l=R[i])!==null&&l!==void 0?l:[]).join(" ")||void 0},[R]);return a.createElement(ge,{scope:t,getFieldValidity:h,onFieldValidityChange:b,getFieldCustomMatcherEntries:x,onFieldCustomMatcherEntryAdd:F,onFieldCustomMatcherEntryRemove:g,getFieldCustomErrors:v,onFieldCustomErrorsChange:E,onFieldValiditionClear:I},a.createElement(be,{scope:t,onFieldMessageIdAdd:O,onFieldMessageIdRemove:k,getFieldDescription:L},a.createElement(w.form,C({},r,{ref:f,onInvalid:T(e.onInvalid,i=>{const l=ue(i.currentTarget);l===i.target&&l.focus(),i.preventDefault()}),onSubmit:T(e.onSubmit,n,{checkForDefaultPrevented:!1}),onReset:T(e.onReset,n)}))))}),de="FormField",[Ee,D]=W(de),xe=a.forwardRef((e,o)=>{const{__scopeForm:t,name:n,serverInvalid:r=!1,...c}=e,u=N(de,t).getFieldValidity(n),p=Q();return a.createElement(Ee,{scope:t,id:p,name:n,serverInvalid:r},a.createElement(w.div,C({"data-valid":Z(u,r),"data-invalid":ee(u,r)},c,{ref:o})))}),te="FormLabel",Me=a.forwardRef((e,o)=>{const{__scopeForm:t,...n}=e,r=N(te,t),c=D(te,t),f=n.htmlFor||c.id,u=r.getFieldValidity(c.name);return a.createElement(ye,C({"data-valid":Z(u,c.serverInvalid),"data-invalid":ee(u,c.serverInvalid)},n,{ref:o,htmlFor:f}))}),U="FormControl",Ie=a.forwardRef((e,o)=>{const{__scopeForm:t,...n}=e,r=N(U,t),c=D(U,t),f=le(U,t),u=a.useRef(null),p=J(o,u),h=n.name||c.name,b=n.id||c.id,I=r.getFieldCustomMatcherEntries(h),{onFieldValidityChange:_,onFieldCustomErrorsChange:y,onFieldValiditionClear:x}=r,F=a.useCallback(async s=>{if(me(s.validity)){const d=B(s.validity);_(h,d);return}const v=s.form?new FormData(s.form):new FormData,E=[s.value,v],R=[],S=[];I.forEach(d=>{Le(d,E)?S.push(d):je(d)&&R.push(d)});const O=R.map(({id:d,match:m})=>[d,m(...E)]),k=Object.fromEntries(O),L=Object.values(k).some(Boolean),i=L;s.setCustomValidity(i?q:"");const l=B(s.validity);if(_(h,l),y(h,k),!L&&S.length>0){const d=S.map(({id:he,match:ve})=>ve(...E).then($e=>[he,$e])),m=await Promise.all(d),j=Object.fromEntries(m),fe=Object.values(j).some(Boolean);s.setCustomValidity(fe?q:"");const pe=B(s.validity);_(h,pe),y(h,j)}},[I,h,y,_]);a.useEffect(()=>{const s=u.current;if(s){const v=()=>F(s);return s.addEventListener("change",v),()=>s.removeEventListener("change",v)}},[F]);const g=a.useCallback(()=>{const s=u.current;s&&(s.setCustomValidity(""),x(h))},[h,x]);a.useEffect(()=>{var s;const v=(s=u.current)===null||s===void 0?void 0:s.form;if(v)return v.addEventListener("reset",g),()=>v.removeEventListener("reset",g)},[g]),a.useEffect(()=>{const s=u.current,v=s==null?void 0:s.closest("form");if(v&&c.serverInvalid){const E=ue(v);E===s&&E.focus()}},[c.serverInvalid]);const V=r.getFieldValidity(h);return a.createElement(w.input,C({"data-valid":Z(V,c.serverInvalid),"data-invalid":ee(V,c.serverInvalid),"aria-invalid":c.serverInvalid?!0:void 0,"aria-describedby":f.getFieldDescription(h),title:""},n,{ref:p,id:b,name:h,onInvalid:T(e.onInvalid,s=>{const v=s.currentTarget;F(v)}),onChange:T(e.onChange,s=>{g()})}))}),q="This value is not valid",Ve={badInput:q,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},P="FormMessage",Se=a.forwardRef((e,o)=>{const{match:t,name:n,...r}=e,c=D(P,e.__scopeForm),f=n??c.name;return t===void 0?a.createElement(X,C({},r,{ref:o,name:f}),e.children||q):typeof t=="function"?a.createElement(Ne,C({match:t},r,{ref:o,name:f})):a.createElement(we,C({match:t},r,{ref:o,name:f}))}),we=a.forwardRef((e,o)=>{const{match:t,forceMatch:n=!1,name:r,children:c,...f}=e,p=N(P,f.__scopeForm).getFieldValidity(r);return n||(p==null?void 0:p[t])?a.createElement(X,C({ref:o},f,{name:r}),c??Ve[t]):null}),Ne=a.forwardRef((e,o)=>{const{match:t,forceMatch:n=!1,name:r,id:c,children:f,...u}=e,p=N(P,u.__scopeForm),h=a.useRef(null),b=J(o,h),I=Q(),_=c??I,y=a.useMemo(()=>({id:_,match:t}),[_,t]),{onFieldCustomMatcherEntryAdd:x,onFieldCustomMatcherEntryRemove:F}=p;a.useEffect(()=>(x(r,y),()=>F(r,y.id)),[y,r,x,F]);const g=p.getFieldValidity(r),s=p.getFieldCustomErrors(r)[_];return n||g&&!me(g)&&s?a.createElement(X,C({id:_,ref:b},u,{name:r}),f??q):null}),X=a.forwardRef((e,o)=>{const{__scopeForm:t,id:n,name:r,...c}=e,f=le(P,t),u=Q(),p=n??u,{onFieldMessageIdAdd:h,onFieldMessageIdRemove:b}=f;return a.useEffect(()=>(h(r,p),()=>b(r,p)),[r,p,h,b]),a.createElement(w.span,C({id:p},c,{ref:o}))}),ae="FormValidityState",Ae=e=>{const{__scopeForm:o,name:t,children:n}=e,r=N(ae,o),c=D(ae,o),f=t??c.name,u=r.getFieldValidity(f);return a.createElement(a.Fragment,null,n(u))},Re=a.forwardRef((e,o)=>{const{__scopeForm:t,...n}=e;return a.createElement(w.button,C({type:"submit"},n,{ref:o}))});function B(e){const o={};for(const t in e)o[t]=e[t];return o}function Te(e){return e instanceof HTMLElement}function qe(e){return"validity"in e}function ke(e){return qe(e)&&(e.validity.valid===!1||e.getAttribute("aria-invalid")==="true")}function ue(e){const o=e.elements,[t]=Array.from(o).filter(Te).filter(ke);return t}function Le(e,o){return e.match.constructor.name==="AsyncFunction"||De(e.match,o)}function je(e){return e.match.constructor.name==="Function"}function De(e,o){return e(...o)instanceof Promise}function me(e){let o=!1;for(const t in e){const n=t;if(n!=="valid"&&n!=="customError"&&e[n]){o=!0;break}}return o}function Z(e,o){if((e==null?void 0:e.valid)===!0&&!o)return!0}function ee(e,o){if((e==null?void 0:e.valid)===!1||o)return!0}const Pe=Fe,Oe=xe,Ue=Me,Be=Ie,Ge=Se,ze=Ae,He=Re,Ye="_root_1eiqo_23",Ke="_field_1eiqo_32",Je="_label_1eiqo_41",Qe="_control_1eiqo_55",A={root:Ye,field:Ke,label:Je,control:Qe},z=a.forwardRef(function({children:o,...t},n){const r=M(A.root,t.className);return $.jsx(Pe,{ref:n,...t,className:r,children:o})});try{z.displayName="Root",z.__docgenInfo={description:`Thin wrapper around Radix UI Root component
https://www.radix-ui.com/docs/primitives/components/form#root`,displayName:"Root",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const H=a.forwardRef(function({children:o,...t},n){const r=M(A.field,t.className);return $.jsx(Oe,{ref:n,...t,className:r,children:o})});try{H.displayName="Field",H.__docgenInfo={description:`Thin wrapper around Radix UI Field component
https://www.radix-ui.com/docs/primitives/components/form#field`,displayName:"Field",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const oe=a.forwardRef(function({children:o,...t},n){const r=M(A.label,t.className);return $.jsx(Ue,{ref:n,...t,className:r,children:o})});try{oe.displayName="Label",oe.__docgenInfo={description:`Thin wrapper around Radix UI Label component
https://www.radix-ui.com/docs/primitives/components/form#label`,displayName:"Label",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Y=a.forwardRef(function({children:o,...t},n){const r=M(A.control,t.className);return $.jsx(Be,{ref:n,...t,className:r,children:o})});try{Y.displayName="Control",Y.__docgenInfo={description:`Thin wrapper around Radix UI Control component
https://www.radix-ui.com/docs/primitives/components/form#control`,displayName:"Control",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ne=a.forwardRef(function({children:o,...t},n){const r=M(A.message,t.className);return $.jsx(Ge,{ref:n,...t,className:r,children:o})});try{ne.displayName="Message",ne.__docgenInfo={description:`Thin wrapper around Radix UI Message component
https://www.radix-ui.com/docs/primitives/components/form#message`,displayName:"Message",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const re=({children:e,...o})=>$.jsx(ze,{...o,children:e});try{re.displayName="ValidityState",re.__docgenInfo={description:`Thin wrapper around Radix UI ValidityState component
https://www.radix-ui.com/docs/primitives/components/form#validitystate`,displayName:"ValidityState",props:{__scopeForm:{defaultValue:null,description:"",name:"__scopeForm",required:!1,type:{name:"Scope"}}}}}catch{}const se=({children:e,size:o,...t})=>{const n=M(A.submit,t.className);return $.jsx(He,{...t,asChild:!0,children:$.jsx(Ce,{type:"submit",size:o,className:n,children:e})})};try{se.displayName="Submit",se.__docgenInfo={description:`Thin wrapper around Radix UI Submit component
https://www.radix-ui.com/docs/primitives/components/form#submit`,displayName:"Submit",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The t-shirt size of the submit button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const We="_actioncontrol_15sm4_17",Xe="_input_15sm4_22",Ze="_icon_15sm4_26",G={actioncontrol:We,input:Xe,icon:Ze},K=a.forwardRef(function({children:o,Icon:t,className:n,actionLabel:r,onActionClick:c,...f},u){const p=a.useId(),h=M(G.actioncontrol,n);return $.jsxs("div",{className:h,children:[$.jsx(Y,{ref:u,...f,className:G.input,id:p,autoComplete:"off",autoCorrect:"off",children:o}),$.jsx(t,{width:24,height:24,onClick:c,className:G.icon,"aria-label":r,"aria-controls":p,role:"button"})]})}),ie=a.forwardRef(function(o,t){return $.jsx(z,{children:$.jsx(H,{name:"action",children:$.jsx(K,{ref:t,...o})})})});try{K.displayName="ActionControl",K.__docgenInfo={description:`A generic input with an action icon on the right hand side.
You should rarely use it directly,
but it is powering the likes of "copy to clipboard input", "password reveal", ...`,displayName:"ActionControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"The React component to display on the right hand side of the icon.",name:"Icon",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},actionLabel:{defaultValue:null,description:'The name of the action to perform (e.g. "Copy to clipboard")',name:"actionLabel",required:!0,type:{name:"string"}},onActionClick:{defaultValue:null,description:"On click callback for the icon on the right hand side",name:"onActionClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}}}}}catch{}try{ie.displayName="StandaloneActionControl",ie.__docgenInfo={description:"",displayName:"StandaloneActionControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"The React component to display on the right hand side of the icon.",name:"Icon",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},actionLabel:{defaultValue:null,description:'The name of the action to perform (e.g. "Copy to clipboard")',name:"actionLabel",required:!0,type:{name:"string"}},onActionClick:{defaultValue:null,description:"On click callback for the icon on the right hand side",name:"onActionClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}}}}}catch{}export{K as A,Y as C,H as F,oe as L,z as R,ie as S,se as a,A as f};
//# sourceMappingURL=ActionControl-4d655112.js.map
