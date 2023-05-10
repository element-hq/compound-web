import{j as y}from"./jsx-runtime-94f6e698.js";import{c as M}from"./index-582f377c.js";import{r as o,a as be}from"./index-8db94870.js";import{_}from"./extends-98964cd2.js";import"./index-8ce4a492.js";import{B as Ee}from"./Button-5ea4a309.js";const ge="_actioncontrol_15sm4_17",Fe="_input_15sm4_22",xe="_icon_15sm4_26",O={actioncontrol:ge,input:Fe,icon:xe};function P(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function Ve(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function le(...e){return t=>e.forEach(n=>Ve(n,t))}function J(...e){return o.useCallback(le(...e),e)}function Me(e,t=[]){let n=[];function r(s,i){const c=o.createContext(i),m=n.length;n=[...n,i];function p(E){const{scope:v,children:C,...b}=E,x=(v==null?void 0:v[e][m])||c,F=o.useMemo(()=>b,Object.values(b));return o.createElement(x.Provider,{value:F},C)}function g(E,v){const C=(v==null?void 0:v[e][m])||c,b=o.useContext(C);if(b)return b;if(i!==void 0)return i;throw new Error(`\`${E}\` must be used within \`${s}\``)}return p.displayName=s+"Provider",[p,g]}const a=()=>{const s=n.map(i=>o.createContext(i));return function(c){const m=(c==null?void 0:c[e])||s;return o.useMemo(()=>({[`__scope${e}`]:{...c,[e]:m}}),[c,m])}};return a.scopeName=e,[r,Ie(a,...t)]}function Ie(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(s){const i=r.reduce((c,{useScope:m,scopeName:p})=>{const E=m(s)[`__scope${p}`];return{...c,...E}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}const Ne=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{},Se=be["useId".toString()]||(()=>{});let we=0;function Q(e){const[t,n]=o.useState(Se());return Ne(()=>{e||n(r=>r??String(we++))},[e]),e||(t?`radix-${t}`:"")}const de=o.forwardRef((e,t)=>{const{children:n,...r}=e,a=o.Children.toArray(n),s=a.find(Re);if(s){const i=s.props.children,c=a.map(m=>m===s?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:m);return o.createElement(z,_({},r,{ref:t}),o.isValidElement(i)?o.cloneElement(i,void 0,c):null)}return o.createElement(z,_({},r,{ref:t}),n)});de.displayName="Slot";const z=o.forwardRef((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...Pe(r,n.props),ref:le(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null});z.displayName="SlotClone";const Ae=({children:e})=>o.createElement(o.Fragment,null,e);function Re(e){return o.isValidElement(e)&&e.type===Ae}function Pe(e,t){const n={...t};for(const r in t){const a=e[r],s=t[r];/^on[A-Z]/.test(r)?a&&s?n[r]=(...c)=>{s(...c),a(...c)}:a&&(n[r]=a):r==="style"?n[r]={...a,...s}:r==="className"&&(n[r]=[a,s].filter(Boolean).join(" "))}return{...e,...n}}const Te=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],S=Te.reduce((e,t)=>{const n=o.forwardRef((r,a)=>{const{asChild:s,...i}=r,c=s?de:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(c,_({},i,{ref:a}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),je=o.forwardRef((e,t)=>o.createElement(S.label,_({},e,{ref:t,onMouseDown:n=>{var r;(r=e.onMouseDown)===null||r===void 0||r.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),[W,yt]=Me("Form"),ue="Form",[qe,w]=W(ue),[Le,me]=W(ue),ke=o.forwardRef((e,t)=>{const{__scopeForm:n,onClearServerErrors:r=()=>{},...a}=e,s=o.useRef(null),i=J(t,s),[c,m]=o.useState({}),p=o.useCallback(d=>c[d],[c]),g=o.useCallback((d,u)=>m(f=>{var $;return{...f,[d]:{...($=f[d])!==null&&$!==void 0?$:{},...u}}}),[]),E=o.useCallback(d=>{m(u=>({...u,[d]:void 0})),l(u=>({...u,[d]:{}}))},[]),[v,C]=o.useState({}),b=o.useCallback(d=>{var u;return(u=v[d])!==null&&u!==void 0?u:[]},[v]),x=o.useCallback((d,u)=>{C(f=>{var $;return{...f,[d]:[...($=f[d])!==null&&$!==void 0?$:[],u]}})},[]),F=o.useCallback((d,u)=>{C(f=>{var $;return{...f,[d]:(($=f[d])!==null&&$!==void 0?$:[]).filter(L=>L.id!==u)}})},[]),[I,l]=o.useState({}),h=o.useCallback(d=>{var u;return(u=I[d])!==null&&u!==void 0?u:{}},[I]),V=o.useCallback((d,u)=>{l(f=>{var $;return{...f,[d]:{...($=f[d])!==null&&$!==void 0?$:{},...u}}})},[]),[R,N]=o.useState({}),B=o.useCallback((d,u)=>{N(f=>{const $=new Set(f[d]).add(u);return{...f,[d]:$}})},[]),j=o.useCallback((d,u)=>{N(f=>{const $=new Set(f[d]);return $.delete(u),{...f,[d]:$}})},[]),q=o.useCallback(d=>{var u;return Array.from((u=R[d])!==null&&u!==void 0?u:[]).join(" ")||void 0},[R]);return o.createElement(qe,{scope:n,getFieldValidity:p,onFieldValidityChange:g,getFieldCustomMatcherEntries:b,onFieldCustomMatcherEntryAdd:x,onFieldCustomMatcherEntryRemove:F,getFieldCustomErrors:h,onFieldCustomErrorsChange:V,onFieldValiditionClear:E},o.createElement(Le,{scope:n,onFieldMessageIdAdd:B,onFieldMessageIdRemove:j,getFieldDescription:q},o.createElement(S.form,_({},a,{ref:i,onInvalid:P(e.onInvalid,d=>{const u=pe(d.currentTarget);u===d.target&&u.focus(),d.preventDefault()}),onSubmit:P(e.onSubmit,r,{checkForDefaultPrevented:!1}),onReset:P(e.onReset,r)}))))}),fe="FormField",[De,k]=W(fe),Be=o.forwardRef((e,t)=>{const{__scopeForm:n,name:r,serverInvalid:a=!1,...s}=e,c=w(fe,n).getFieldValidity(r),m=Q();return o.createElement(De,{scope:n,id:m,name:r,serverInvalid:a},o.createElement(S.div,_({"data-valid":ee(c,a),"data-invalid":te(c,a)},s,{ref:t})))}),ne="FormLabel",Oe=o.forwardRef((e,t)=>{const{__scopeForm:n,...r}=e,a=w(ne,n),s=k(ne,n),i=r.htmlFor||s.id,c=a.getFieldValidity(s.name);return o.createElement(je,_({"data-valid":ee(c,s.serverInvalid),"data-invalid":te(c,s.serverInvalid)},r,{ref:t,htmlFor:i}))}),U="FormControl",Ue=o.forwardRef((e,t)=>{const{__scopeForm:n,...r}=e,a=w(U,n),s=k(U,n),i=me(U,n),c=o.useRef(null),m=J(t,c),p=r.name||s.name,g=r.id||s.id,E=a.getFieldCustomMatcherEntries(p),{onFieldValidityChange:v,onFieldCustomErrorsChange:C,onFieldValiditionClear:b}=a,x=o.useCallback(async l=>{if($e(l.validity)){const f=G(l.validity);v(p,f);return}const h=l.form?new FormData(l.form):new FormData,V=[l.value,h],R=[],N=[];E.forEach(f=>{Xe(f,V)?N.push(f):et(f)&&R.push(f)});const B=R.map(({id:f,match:$})=>[f,$(...V)]),j=Object.fromEntries(B),q=Object.values(j).some(Boolean),d=q;l.setCustomValidity(d?T:"");const u=G(l.validity);if(v(p,u),C(p,j),!q&&N.length>0){const f=N.map(({id:_e,match:Ce})=>Ce(...V).then(ye=>[_e,ye])),$=await Promise.all(f),L=Object.fromEntries($),ve=Object.values(L).some(Boolean);l.setCustomValidity(ve?T:"");const he=G(l.validity);v(p,he),C(p,L)}},[E,p,C,v]);o.useEffect(()=>{const l=c.current;if(l){const h=()=>x(l);return l.addEventListener("change",h),()=>l.removeEventListener("change",h)}},[x]);const F=o.useCallback(()=>{const l=c.current;l&&(l.setCustomValidity(""),b(p))},[p,b]);o.useEffect(()=>{var l;const h=(l=c.current)===null||l===void 0?void 0:l.form;if(h)return h.addEventListener("reset",F),()=>h.removeEventListener("reset",F)},[F]),o.useEffect(()=>{const l=c.current,h=l==null?void 0:l.closest("form");if(h&&s.serverInvalid){const V=pe(h);V===l&&V.focus()}},[s.serverInvalid]);const I=a.getFieldValidity(p);return o.createElement(S.input,_({"data-valid":ee(I,s.serverInvalid),"data-invalid":te(I,s.serverInvalid),"aria-invalid":s.serverInvalid?!0:void 0,"aria-describedby":i.getFieldDescription(p),title:""},r,{ref:m,id:g,name:p,onInvalid:P(e.onInvalid,l=>{const h=l.currentTarget;x(h)}),onChange:P(e.onChange,l=>{F()})}))}),T="This value is not valid",Ge={badInput:T,patternMismatch:"This value does not match the required pattern",rangeOverflow:"This value is too large",rangeUnderflow:"This value is too small",stepMismatch:"This value does not match the required step",tooLong:"This value is too long",tooShort:"This value is too short",typeMismatch:"This value does not match the required type",valid:void 0,valueMissing:"This value is missing"},D="FormMessage",ze=o.forwardRef((e,t)=>{const{match:n,name:r,...a}=e,s=k(D,e.__scopeForm),i=r??s.name;return n===void 0?o.createElement(X,_({},a,{ref:t,name:i}),e.children||T):typeof n=="function"?o.createElement(Ke,_({match:n},a,{ref:t,name:i})):o.createElement(He,_({match:n},a,{ref:t,name:i}))}),He=o.forwardRef((e,t)=>{const{match:n,forceMatch:r=!1,name:a,children:s,...i}=e,m=w(D,i.__scopeForm).getFieldValidity(a);return r||(m==null?void 0:m[n])?o.createElement(X,_({ref:t},i,{name:a}),s??Ge[n]):null}),Ke=o.forwardRef((e,t)=>{const{match:n,forceMatch:r=!1,name:a,id:s,children:i,...c}=e,m=w(D,c.__scopeForm),p=o.useRef(null),g=J(t,p),E=Q(),v=s??E,C=o.useMemo(()=>({id:v,match:n}),[v,n]),{onFieldCustomMatcherEntryAdd:b,onFieldCustomMatcherEntryRemove:x}=m;o.useEffect(()=>(b(a,C),()=>x(a,C.id)),[C,a,b,x]);const F=m.getFieldValidity(a),l=m.getFieldCustomErrors(a)[v];return r||F&&!$e(F)&&l?o.createElement(X,_({id:v,ref:g},c,{name:a}),i??T):null}),X=o.forwardRef((e,t)=>{const{__scopeForm:n,id:r,name:a,...s}=e,i=me(D,n),c=Q(),m=r??c,{onFieldMessageIdAdd:p,onFieldMessageIdRemove:g}=i;return o.useEffect(()=>(p(a,m),()=>g(a,m)),[a,m,p,g]),o.createElement(S.span,_({id:m},s,{ref:t}))}),oe="FormValidityState",Ye=e=>{const{__scopeForm:t,name:n,children:r}=e,a=w(oe,t),s=k(oe,t),i=n??s.name,c=a.getFieldValidity(i);return o.createElement(o.Fragment,null,r(c))},Ze=o.forwardRef((e,t)=>{const{__scopeForm:n,...r}=e;return o.createElement(S.button,_({type:"submit"},r,{ref:t}))});function G(e){const t={};for(const n in e)t[n]=e[n];return t}function Je(e){return e instanceof HTMLElement}function Qe(e){return"validity"in e}function We(e){return Qe(e)&&(e.validity.valid===!1||e.getAttribute("aria-invalid")==="true")}function pe(e){const t=e.elements,[n]=Array.from(t).filter(Je).filter(We);return n}function Xe(e,t){return e.match.constructor.name==="AsyncFunction"||tt(e.match,t)}function et(e){return e.match.constructor.name==="Function"}function tt(e,t){return e(...t)instanceof Promise}function $e(e){let t=!1;for(const n in e){const r=n;if(r!=="valid"&&r!=="customError"&&e[r]){t=!0;break}}return t}function ee(e,t){if((e==null?void 0:e.valid)===!0&&!t)return!0}function te(e,t){if((e==null?void 0:e.valid)===!1||t)return!0}const nt=ke,ot=Be,rt=Oe,at=Ue,st=ze,it=Ye,ct=Ze,lt="_root_1j44i_23",dt="_field_1j44i_32",ut="_label_1j44i_41",mt="_control_1j44i_55",A={root:lt,field:dt,label:ut,control:mt};function H({children:e,...t}){const n=M(A.root,t.className);return y.jsx(nt,{...t,className:n,children:e})}try{H.displayName="Root",H.__docgenInfo={description:`Thin wrapper around Radix UI Root component
https://www.radix-ui.com/docs/primitives/components/form#root`,displayName:"Root",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function K({children:e,...t}){const n=M(A.field,t.className);return y.jsx(ot,{...t,className:n,children:e})}try{K.displayName="Field",K.__docgenInfo={description:`Thin wrapper around Radix UI Field component
https://www.radix-ui.com/docs/primitives/components/form#field`,displayName:"Field",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function re({children:e,...t}){const n=M(A.label,t.className);return y.jsx(rt,{...t,className:n,children:e})}try{re.displayName="Label",re.__docgenInfo={description:`Thin wrapper around Radix UI Label component
https://www.radix-ui.com/docs/primitives/components/form#label`,displayName:"Label",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function Y({children:e,...t}){const n=M(A.control,t.className);return y.jsx(at,{...t,className:n,children:e})}try{Y.displayName="Control",Y.__docgenInfo={description:`Thin wrapper around Radix UI Control component
https://www.radix-ui.com/docs/primitives/components/form#control`,displayName:"Control",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function ae({children:e,...t}){const n=M(A.message,t.className);return y.jsx(st,{...t,className:n,children:e})}try{ae.displayName="Message",ae.__docgenInfo={description:`Thin wrapper around Radix UI Message component
https://www.radix-ui.com/docs/primitives/components/form#message`,displayName:"Message",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function se({children:e,...t}){return y.jsx(it,{...t,children:e})}try{se.displayName="ValidityState",se.__docgenInfo={description:`Thin wrapper around Radix UI ValidityState component
https://www.radix-ui.com/docs/primitives/components/form#validitystate`,displayName:"ValidityState",props:{__scopeForm:{defaultValue:null,description:"",name:"__scopeForm",required:!1,type:{name:"Scope<any>"}}}}}catch{}function ie({children:e,size:t,...n}){const r=M(A.submit,n.className);return y.jsx(ct,{...n,asChild:!0,children:y.jsx(Ee,{type:"submit",size:t,className:r,children:e})})}try{ie.displayName="Submit",ie.__docgenInfo={description:`Thin wrapper around Radix UI Submit component
https://www.radix-ui.com/docs/primitives/components/form#submit`,displayName:"Submit",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Z=({children:e,Icon:t,className:n,actionLabel:r,onActionClick:a,...s})=>{const i=o.useId(),c=M(O.actioncontrol,n);return y.jsxs("div",{className:c,children:[y.jsx(Y,{...s,className:O.input,id:i,autoComplete:"off",autoCorrect:"off",children:e}),y.jsx(t,{width:24,height:24,onClick:a,className:O.icon,"aria-label":r,"aria-controls":i,role:"button"})]})},ce=e=>y.jsx(H,{children:y.jsx(K,{name:"action",children:y.jsx(Z,{...e})})});try{Z.displayName="ActionControl",Z.__docgenInfo={description:"",displayName:"ActionControl",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{ce.displayName="StandaloneActionControl",ce.__docgenInfo={description:"",displayName:"StandaloneActionControl",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"FunctionComponent<SVGAttributes<SVGElement>>"}},onActionClick:{defaultValue:null,description:"",name:"onActionClick",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{Z as A,Y as C,K as F,re as L,H as R,ce as S,ie as a};
//# sourceMappingURL=ActionControl-c0b98bd6.js.map
