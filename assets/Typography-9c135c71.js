import{r as d}from"./index-f1f749bf.js";var p={},m={get exports(){return p},set exports(r){p=r}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=d,f=Symbol.for("react.element"),c=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,_=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function i(r,e,o){var t,a={},n=null,u=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(u=e.ref);for(t in e)v.call(e,t)&&!g.hasOwnProperty(t)&&(a[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:f,type:r,key:n,ref:u,props:a,_owner:_.current}}l.Fragment=c;l.jsx=i;l.jsxs=i;(function(r){r.exports=l})(m);const x=p.jsx,s=({as:r,children:e,type:o="body",weight:t="regular",size:a="md",...n})=>x(r||"p",{...n,style:{...n.style||{},font:`var(--cpd-font-${o}-${a}-${t})`,letterSpacing:`var(--cpd-font-letter-spacing-${o}-${a})`},children:e});try{s.displayName="Typography",s.__docgenInfo={description:"",displayName:"Typography",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},type:{defaultValue:{value:"body"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"heading"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"semibold"'},{value:'"medium"'},{value:'"bold"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}export{s as T,x as j};
//# sourceMappingURL=Typography-9c135c71.js.map
