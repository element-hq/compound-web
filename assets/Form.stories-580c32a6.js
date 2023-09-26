import{j as e}from"./jsx-runtime-ffb262ed.js";import{A as v,f as j,R as b,F as c,L as p,C as S,a as L}from"./ActionControl-a13d1c69.js";import{r as n}from"./index-76fb7be0.js";import{S as A}from"./visibility-on-2a2c44f8.js";import{c as g}from"./index-e131923d.js";import"./extends-98964cd2.js";import"./index-c339dd50.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./Button-44c2d377.js";const M=a=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"cpd-icon",...a,children:e.jsx("path",{d:"M16.1 13.3L14.65 11.85C14.8 11.0666 14.575 10.3333 13.975 9.64998C13.375 8.96664 12.6 8.69998 11.65 8.84998L10.2 7.39998C10.4834 7.26664 10.7709 7.16664 11.0625 7.09998C11.3542 7.03331 11.6667 6.99998 12 6.99998C13.25 6.99998 14.3125 7.43748 15.1875 8.31248C16.0625 9.18748 16.5 10.25 16.5 11.5C16.5 11.8333 16.4667 12.1458 16.4 12.4375C16.3334 12.7291 16.2334 13.0166 16.1 13.3ZM19.3 16.45L17.85 15.05C18.4834 14.5666 19.0459 14.0375 19.5375 13.4625C20.0292 12.8875 20.45 12.2333 20.8 11.5C19.9667 9.81664 18.7709 8.47914 17.2125 7.48748C15.6542 6.49581 13.9167 5.99998 12 5.99998C11.5167 5.99998 11.0417 6.03331 10.575 6.09998C10.1084 6.16664 9.65005 6.26664 9.20005 6.39998L7.65005 4.84998C8.33338 4.56664 9.03338 4.35414 9.75005 4.21248C10.4667 4.07081 11.2167 3.99998 12 3.99998C14.3834 3.99998 16.525 4.62914 18.425 5.88748C20.325 7.14581 21.75 8.78331 22.7 10.8C22.75 10.8833 22.7834 10.9875 22.8 11.1125C22.8167 11.2375 22.825 11.3666 22.825 11.5C22.825 11.6333 22.8125 11.7625 22.7875 11.8875C22.7625 12.0125 22.7334 12.1166 22.7 12.2C22.3167 13.05 21.8375 13.8333 21.2625 14.55C20.6875 15.2666 20.0334 15.9 19.3 16.45ZM19.1 21.9L15.6 18.45C15.0167 18.6333 14.4292 18.7708 13.8375 18.8625C13.2459 18.9541 12.6334 19 12 19C9.61672 19 7.47505 18.3708 5.57505 17.1125C3.67505 15.8541 2.25005 14.2166 1.30005 12.2C1.25005 12.1166 1.21672 12.0125 1.20005 11.8875C1.18338 11.7625 1.17505 11.6333 1.17505 11.5C1.17505 11.3666 1.18338 11.2416 1.20005 11.125C1.21672 11.0083 1.25005 10.9083 1.30005 10.825C1.65005 10.075 2.06672 9.38331 2.55005 8.74998C3.03338 8.11664 3.56672 7.53331 4.15005 6.99998L2.07505 4.89998C1.89172 4.71664 1.80005 4.48748 1.80005 4.21248C1.80005 3.93748 1.90005 3.69998 2.10005 3.49998C2.28338 3.31664 2.51672 3.22498 2.80005 3.22498C3.08338 3.22498 3.31672 3.31664 3.50005 3.49998L20.5 20.5C20.6834 20.6833 20.7792 20.9125 20.7875 21.1875C20.7959 21.4625 20.7 21.7 20.5 21.9C20.3167 22.0833 20.0834 22.175 19.8 22.175C19.5167 22.175 19.2834 22.0833 19.1 21.9ZM5.55005 8.39998C5.06672 8.83331 4.62505 9.30831 4.22505 9.82498C3.82505 10.3416 3.48338 10.9 3.20005 11.5C4.03338 13.1833 5.22922 14.5208 6.78755 15.5125C8.34588 16.5041 10.0834 17 12 17C12.3334 17 12.6584 16.9791 12.975 16.9375C13.2917 16.8958 13.6167 16.85 13.95 16.8L13.05 15.85C12.8667 15.9 12.6917 15.9375 12.525 15.9625C12.3584 15.9875 12.1834 16 12 16C10.75 16 9.68755 15.5625 8.81255 14.6875C7.93755 13.8125 7.50005 12.75 7.50005 11.5C7.50005 11.3166 7.51255 11.1416 7.53755 10.975C7.56255 10.8083 7.60005 10.6333 7.65005 10.45L5.55005 8.39998Z",fill:"currentColor"})}),F={isHidden:!0,icon:A,label:"Show",type:"password"},N={isHidden:!1,icon:M,label:"Hide",type:"text"},u=n.forwardRef(function(i,r){const[{icon:s,label:l,type:m},t]=n.useReducer(d=>d.isHidden?N:F,F);return e.jsx(v,{ref:r,...i,Icon:s,actionLabel:l,onActionClick:()=>t(),type:m})});try{u.displayName="PasswordControl",u.__docgenInfo={description:`Thin wrapper around Radix UI Control component
https://www.radix-ui.com/docs/primitives/components/form#control`,displayName:"PasswordControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const R="_mfa_130tj_17",V="_digit_130tj_34",C={mfa:R,"mfa-input":"_mfa-input_130tj_25",digit:V},f=n.forwardRef(function({className:i,length:r=6,...s},l){const m=g(C.mfa,i),[t,d]=n.useState(s.value??"");return e.jsxs("div",{className:m,children:[e.jsx("input",{...s,type:"tel",minLength:0,maxLength:r,value:t,className:C["mfa-input"],onChange:h=>{d(h.currentTarget.value.replace(/[^\d]/g,"").slice(0,r))},autoComplete:"off",ref:l}),Array(r).fill(0).map((h,w)=>e.jsx("div",{className:g(C.digit,j.control),"aria-hidden":"true",children:t.charAt(w)??""},`digit-${w}`))]})});try{f.displayName="MFAControl",f.__docgenInfo={description:`Thin wrapper around Radix UI Control component
https://www.radix-ui.com/docs/primitives/components/form#control`,displayName:"MFAControl",props:{className:{defaultValue:null,description:"The CSS class name.",name:"className",required:!1,type:{name:"string"}},length:{defaultValue:{value:"6"},description:"",name:"length",required:!1,type:{name:"number"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | (string & readonly string[])"}}}}}catch{}const k={title:"Form",component:b},P=()=>e.jsxs(b,{children:[e.jsxs(c,{name:"mxid",children:[e.jsx(p,{children:"Username"}),e.jsx(S,{value:"Hello world!"})]}),e.jsxs(c,{name:"password",children:[e.jsx(p,{children:"Password"}),e.jsx(u,{value:"sup3rS3cur3p4ssw0rd!"})]}),e.jsxs(c,{name:"mfa",children:[e.jsx(p,{children:"MFA"}),e.jsx(f,{value:"123"})]}),e.jsx(L,{children:"Submit"})]}),o=P.bind({});o.args={};o.parameters={design:{type:"figma",url:"https://www.figma.com/file/HUysJAhv6cK6p1Pc81Fxaa/Matrix-Authentication-Service-(MAS)?node-id=101%3A16968&t=gc1qRwZLEob0m7OM-1"}};var x,_,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Form.Root>
    <Form.Field name="mxid">
      <Form.Label>Username</Form.Label>
      <Form.Control value="Hello world!" />
    </Form.Field>
    <Form.Field name="password">
      <Form.Label>Password</Form.Label>
      <PasswordControl value="sup3rS3cur3p4ssw0rd!" />
    </Form.Field>
    <Form.Field name="mfa">
      <Form.Label>MFA</Form.Label>
      <MFAControl value="123" />
    </Form.Field>

    <Form.Submit>Submit</Form.Submit>
  </Form.Root>`,...(y=(_=o.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const B=["Root"];export{o as Root,B as __namedExportsOrder,k as default};
//# sourceMappingURL=Form.stories-580c32a6.js.map