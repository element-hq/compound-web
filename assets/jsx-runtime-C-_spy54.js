var u={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function x(l,r,t){var s=null;if(t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),"key"in r){t={};for(var n in r)n!=="key"&&(t[n]=r[n])}else t=r;return r=t.ref,{$$typeof:E,type:l,key:s,ref:r!==void 0?r:null,props:t}}e.Fragment=d;e.jsx=x;e.jsxs=x;u.exports=e;var o=u.exports;export{o as j};
