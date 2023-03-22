import{r as u}from"./index-f1f749bf.js";var s={},x={get exports(){return s},set exports(t){s=t}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=u,a=Symbol.for("react.element"),m=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function i(t,r,f){var e,o={},p=null,_=null;f!==void 0&&(p=""+f),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)c.call(r,e)&&!j.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:a,type:t,key:p,ref:_,props:o,_owner:y.current}}n.Fragment=m;n.jsx=i;n.jsxs=i;(function(t){t.exports=n})(x);const d=s.jsx,E=s.jsxs;export{E as a,d as j};
//# sourceMappingURL=jsx-runtime-9a6f6fa0.js.map
