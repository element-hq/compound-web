import{r as u}from"./index-f1f749bf.js";var p={},l={get exports(){return p},set exports(t){p=t}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=u,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(t,r,f){var e,o={},s=null,_=null;f!==void 0&&(s=""+f),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)a.call(r,e)&&!v.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:t,key:s,ref:_,props:o,_owner:c.current}}n.Fragment=y;n.jsx=i;n.jsxs=i;(function(t){t.exports=n})(l);const j=p.jsx;export{j};
//# sourceMappingURL=jsx-runtime-aa19aab8.js.map
