import{j as $}from"./jsx-runtime-ffb262ed.js";import{c as I}from"./index-e131923d.js";import{r as o}from"./index-76fb7be0.js";import{_ as C}from"./extends-98964cd2.js";import{$ as w,a as Ce,b as J,c as T,d as Q}from"./index-c339dd50.js";import{B as ye}from"./Button-44c2d377.js";const ge=o.forwardRef((e,n)=>o.createElement(w.label,C({},e,{ref:n,onMouseDown:t=>{var a;(a=e.onMouseDown)===null||a===void 0||a.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),[W,ut]=Ce("Form"),le="Form",[be,N]=W(le),[Fe,de]=W(le),Ee=o.forwardRef((e,n)=>{const{__scopeForm:t,onClearServerErrors:a=()=>{},...r}=e,c=o.useRef(null),f=J(n,c),[u,p]=o.useState({}),h=o.useCallback(i=>u[i],[u]),b=o.useCallback((i,l)=>p(d=>{var m;return{...d,[i]:{...(m=d[i])!==null&&m!==void 0?m:{},...l}}}),[]),M=o.useCallback(i=>{p(l=>({...l,[i]:void 0})),s(l=>({...l,[i]:{}}))},[]),[_,y]=o.useState({}),x=o.useCallback(i=>{var l;return(l=_[i])!==null&&l!==void 0?l:[]},[_]),F=o.useCallback((i,l)=>{y(d=>{var m;return{...d,[i]:[...(m=d[i])!==null&&m!==void 0?m:[],l]}})},[]),g=o.useCallback((i,l)=>{y(d=>{var m;return{...d,[i]:((m=d[i])!==null&&m!==void 0?m:[]).filter(j=>j.id!==l)}})},[]),[V,s]=o.useState({}),v=o.useCallback(i=>{var l;return(l=V[i])!==null&&l!==void 0?l:{}},[V]),E=o.useCallback((i,l)=>{s(d=>{var m;return{...d,[i]:{...(m=d[i])!==null&&m!==void 0?m:{},...l}}})},[]),[R,S]=o.useState({}),U=o.useCallback((i,l)=>{S(d=>{const m=new Set(d[i]).add(l);return{...d,[i]:m}})},[]),k=o.useCallback((i,l)=>{S(d=>{const m=new Set(d[i]);return m.delete(l),{...d,[i]:m}})},[]),L=o.useCallback(i=>{var l;return Array.from((l=R[i])!==null&&l!==void 0?l:[]).join(" ")||void 0},[R]);return o.createElement(be,{scope:t,getFieldValidity:h,onFieldValidityChange:b,getFieldCustomMatcherEntries:x,onFieldCustomMatcherEntryAdd:F,onFieldCustomMatcherEntryRemove:g,getFieldCustomErrors:v,onFieldCustomErrorsChange:E,onFieldValiditionClear:M},o.createElement(Fe,{scope:t,onFieldMessageIdAdd:U,onFieldMessageIdRemove:k,getFieldDescription:L},o.createElement(w.form,C({},r,{ref:f,onInvalid:T(e.onInvalid,i=>{const l=me(i.currentTarget);l===i.target&&l.focus(),i.preventDefault()}),onSubmit:T(e.onSubmit,a,{checkForDefaultPrevented:!1}),onReset:T(e.onReset,a)}))))}),ue="FormField",[xe,D]=W(ue),Ie=o.forwardRef((e,n)=>{const{__scopeForm:t,name:a,serverInvalid:r=!1,...c}=e,u=N(ue,t).getFieldValidity(a),p=Q();return o.createElement(xe,{scope:t,id:p,name:a,serverInvalid:r},o.createElement(w.div,C({"data-valid":Z(u,r),"data-invalid":ee(u,r)},c,{ref:n})))}),te="FormLabel",Me=o.forwardRef((e,n)=>{const{__scopeForm:t,...a}=e,r=N(te,t),c=D(te,t),f=a.htmlFor||c.id,u=r.getFieldValidity(c.name);return o.createElement(ge,C({"data-valid":Z(u,c.serverInvalid),"data-invalid":ee(u,c.serverInvalid)},a,{ref:n,htmlFor:f}))}),O="FormControl",Ve=o.forwardRef((e,n)=>{const{__scopeForm:t,...a}=e,r=N(O,t),c=D(O,t),f=de(O,t),u=o.useRef(null),p=J(n,u),h=a.name||c.name,b=a.id||c.id,M=r.getFieldCustomMatcherEntries(h),{onFieldValidityChange:_,onFieldCustomErrorsChange:y,onFieldValiditionClear:x}=r,F=o.useCallback(async s=>{if(fe(s.validity)){const d=B(s.validity);_(h,d);return}const v=s.form?new FormData(s.form):new FormData,E=[s.value,v],R=[],S=[];M.forEach(d=>{je(d,E)?S.push(d):De(d)&&R.push(d)});const U=R.map(({id:d,match:m})=>[d,m(...E)]),k=Object.fromEntries(U),L=Object.values(k).some(Boolean),i=L;s.setCustomValidity(i?q:"");const l=B(s.validity);if(_(h,l),y(h,k),!L&&S.length>0){const d=S.map(({id:ve,match:$e})=>$e(...E).then(_e=>[ve,_e])),m=await Promise.all(d),j=Object.fromEntries(m),pe=Object.values(j).some(Boolean);s.setCustomValidity(pe?q:"");const he=B(s.validity);_(h,he),y(h,j)}},[M,h,y,_]);o.useEffect(()=>{const s=u.current;if(s){const v=()=>F(s);return s.addEventListener("change",v),()=>s.removeEventListener("change",v)}},[F]);const g=o.useCallback(()=>{const s=u.current;s&&(s.setCustomValidity(""),x(h))},[h,x]);o.useEffect(()=>{var s;const v=(s=u.current)===null||s===void 0?void 0:s.form;if(v)return v.addEventListener("reset",g),()=>v.removeEventListener("reset",g)},[g]),o.useEffect(()=>{const s=u.current,v=s==null?void 0:s.closest("form");if(v&&c.serverInvalid){const E=me(v);E===s&&E.focus()}},[c.serverInvalid]);const V=r.getFieldValidity(h);return o.createElement(w.input,C({"data-valid":Z(V,c.serverInvalid),"data-invalid":ee(V,c.serverInvalid),"aria-invalid":c.serverInvalid?!0:void 0,"aria-describedby":f.getFieldDescription(h),title:""},a,{ref:p,id:b,name:h,onInvalid:T(e.onInvalid,s=>{const v=s.currentTarget;F(v)}),onChange:T(e.onChange,s=>{g()})}))}),q="This value is not valid",Se={badInput:q,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},P="FormMessage",we=o.forwardRef((e,n)=>{const{match:t,name:a,...r}=e,c=D(P,e.__scopeForm),f=a??c.name;return t===void 0?o.createElement(X,C({},r,{ref:n,name:f}),e.children||q):typeof t=="function"?o.createElement(Ae,C({match:t},r,{ref:n,name:f})):o.createElement(Ne,C({match:t},r,{ref:n,name:f}))}),Ne=o.forwardRef((e,n)=>{const{match:t,forceMatch:a=!1,name:r,children:c,...f}=e,p=N(P,f.__scopeForm).getFieldValidity(r);return a||(p==null?void 0:p[t])?o.createElement(X,C({ref:n},f,{name:r}),c??Se[t]):null}),Ae=o.forwardRef((e,n)=>{const{match:t,forceMatch:a=!1,name:r,id:c,children:f,...u}=e,p=N(P,u.__scopeForm),h=o.useRef(null),b=J(n,h),M=Q(),_=c??M,y=o.useMemo(()=>({id:_,match:t}),[_,t]),{onFieldCustomMatcherEntryAdd:x,onFieldCustomMatcherEntryRemove:F}=p;o.useEffect(()=>(x(r,y),()=>F(r,y.id)),[y,r,x,F]);const g=p.getFieldValidity(r),s=p.getFieldCustomErrors(r)[_];return a||g&&!fe(g)&&s?o.createElement(X,C({id:_,ref:b},u,{name:r}),f??q):null}),X=o.forwardRef((e,n)=>{const{__scopeForm:t,id:a,name:r,...c}=e,f=de(P,t),u=Q(),p=a??u,{onFieldMessageIdAdd:h,onFieldMessageIdRemove:b}=f;return o.useEffect(()=>(h(r,p),()=>b(r,p)),[r,p,h,b]),o.createElement(w.span,C({id:p},c,{ref:n}))}),oe="FormValidityState",Re=e=>{const{__scopeForm:n,name:t,children:a}=e,r=N(oe,n),c=D(oe,n),f=t??c.name,u=r.getFieldValidity(f);return o.createElement(o.Fragment,null,a(u))},Te=o.forwardRef((e,n)=>{const{__scopeForm:t,...a}=e;return o.createElement(w.button,C({type:"submit"},a,{ref:n}))});function B(e){const n={};for(const t in e)n[t]=e[t];return n}function qe(e){return e instanceof HTMLElement}function ke(e){return"validity"in e}function Le(e){return ke(e)&&(e.validity.valid===!1||e.getAttribute("aria-invalid")==="true")}function me(e){const n=e.elements,[t]=Array.from(n).filter(qe).filter(Le);return t}function je(e,n){return e.match.constructor.name==="AsyncFunction"||Pe(e.match,n)}function De(e){return e.match.constructor.name==="Function"}function Pe(e,n){return e(...n)instanceof Promise}function fe(e){let n=!1;for(const t in e){const a=t;if(a!=="valid"&&a!=="customError"&&e[a]){n=!0;break}}return n}function Z(e,n){if((e==null?void 0:e.valid)===!0&&!n)return!0}function ee(e,n){if((e==null?void 0:e.valid)===!1||n)return!0}const Ue=Ee,Oe=Ie,Be=Me,Ge=Ve,ze=we,He=Re,Ye=Te,Ke="_root_1eiqo_23",Je="_field_1eiqo_32",Qe="_label_1eiqo_41",We="_control_1eiqo_55",A={root:Ke,field:Je,label:Qe,control:We},z=o.forwardRef(function({children:n,...t},a){const r=I(A.root,t.className);return $.jsx(Ue,{ref:a,...t,className:r,children:n})});try{z.displayName="Root",z.__docgenInfo={description:`Thin wrapper around Radix UI Root component
https://www.radix-ui.com/docs/primitives/components/form#root`,displayName:"Root",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const H=o.forwardRef(function({children:n,...t},a){const r=I(A.field,t.className);return $.jsx(Oe,{ref:a,...t,className:r,children:n})});try{H.displayName="Field",H.__docgenInfo={description:`Thin wrapper around Radix UI Field component
https://www.radix-ui.com/docs/primitives/components/form#field`,displayName:"Field",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ne=o.forwardRef(function({children:n,...t},a){const r=I(A.label,t.className);return $.jsx(Be,{ref:a,...t,className:r,children:n})});try{ne.displayName="Label",ne.__docgenInfo={description:`Thin wrapper around Radix UI Label component
https://www.radix-ui.com/docs/primitives/components/form#label`,displayName:"Label",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Y=o.forwardRef(function({children:n,...t},a){const r=I(A.control,t.className);return $.jsx(Ge,{ref:a,...t,className:r,children:n})});try{Y.displayName="Control",Y.__docgenInfo={description:`Thin wrapper around Radix UI Control component
https://www.radix-ui.com/docs/primitives/components/form#control`,displayName:"Control",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const ae=o.forwardRef(function({children:n,...t},a){const r=I(A.message,t.className);return $.jsx(ze,{ref:a,...t,className:r,children:n})});try{ae.displayName="Message",ae.__docgenInfo={description:`Thin wrapper around Radix UI Message component
https://www.radix-ui.com/docs/primitives/components/form#message`,displayName:"Message",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const re=({children:e,...n})=>$.jsx(He,{...n,children:e});try{re.displayName="ValidityState",re.__docgenInfo={description:`Thin wrapper around Radix UI ValidityState component
https://www.radix-ui.com/docs/primitives/components/form#validitystate`,displayName:"ValidityState",props:{__scopeForm:{defaultValue:null,description:"",name:"__scopeForm",required:!1,type:{name:"Scope"}}}}}catch{}const se=({children:e,size:n,...t})=>{const a=I(A.submit,t.className);return $.jsx(Ye,{...t,asChild:!0,children:$.jsx(ye,{type:"submit",size:n,className:a,children:e})})};try{se.displayName="Submit",se.__docgenInfo={description:`Thin wrapper around Radix UI Submit component
https://www.radix-ui.com/docs/primitives/components/form#submit`,displayName:"Submit",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"The t-shirt size of the submit button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Xe="_actioncontrol_15sm4_17",Ze="_input_15sm4_22",et="_icon_15sm4_26",G={actioncontrol:Xe,input:Ze,icon:et},ie=o.useId,tt=(()=>{let e=1;return()=>`:r${e++}:`})(),ot=()=>o.useMemo(tt,[]),nt=typeof ie=="function"?ie:ot,K=o.forwardRef(function({children:n,Icon:t,className:a,actionLabel:r,onActionClick:c,...f},u){const p=nt(),h=I(G.actioncontrol,a);return $.jsxs("div",{className:h,children:[$.jsx(Y,{ref:u,...f,className:G.input,id:p,autoComplete:"off",autoCorrect:"off",children:n}),$.jsx(t,{width:24,height:24,onClick:c,className:G.icon,"aria-label":r,"aria-controls":p,role:"button"})]})}),ce=o.forwardRef(function(n,t){return $.jsx(z,{children:$.jsx(H,{name:"action",children:$.jsx(K,{ref:t,...n})})})});try{K.displayName="ActionControl",K.__docgenInfo={description:`A generic input with an action icon on the right hand side.
You should rarely use it directly,
but it is powering the likes of "copy to clipboard input", "password reveal", ...`,displayName:"ActionControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"The React component to display on the right hand side of the icon.",name:"Icon",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},actionLabel:{defaultValue:null,description:'The name of the action to perform (e.g. "Copy to clipboard")',name:"actionLabel",required:!0,type:{name:"string"}},onActionClick:{defaultValue:null,description:"On click callback for the icon on the right hand side",name:"onActionClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}}}}}catch{}try{ce.displayName="StandaloneActionControl",ce.__docgenInfo={description:"",displayName:"StandaloneActionControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},Icon:{defaultValue:null,description:"The React component to display on the right hand side of the icon.",name:"Icon",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},actionLabel:{defaultValue:null,description:'The name of the action to perform (e.g. "Copy to clipboard")',name:"actionLabel",required:!0,type:{name:"string"}},onActionClick:{defaultValue:null,description:"On click callback for the icon on the right hand side",name:"onActionClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}}}}}catch{}export{K as A,Y as C,H as F,ne as L,z as R,ce as S,se as a,A as f};
//# sourceMappingURL=ActionControl-a13d1c69.js.map