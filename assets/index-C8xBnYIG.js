import{r as o}from"./index-DRjF_FHU.js";import{j as c}from"./jsx-runtime-DR9Q75dM.js";function d(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function p(...e){return r=>e.forEach(n=>d(n,r))}function j(...e){return o.useCallback(p(...e),e)}var m=o.forwardRef((e,r)=>{const{children:n,...t}=e,i=o.Children.toArray(n),l=i.find(g);if(l){const s=l.props.children,a=i.map(u=>u===l?o.Children.count(s)>1?o.Children.only(null):o.isValidElement(s)?s.props.children:null:u);return c.jsx(f,{...t,ref:r,children:o.isValidElement(s)?o.cloneElement(s,void 0,a):null})}return c.jsx(f,{...t,ref:r,children:n})});m.displayName="Slot";var f=o.forwardRef((e,r)=>{const{children:n,...t}=e;if(o.isValidElement(n)){const i=E(n);return o.cloneElement(n,{...h(t,n.props),ref:r?p(r,i):i})}return o.Children.count(n)>1?o.Children.only(null):null});f.displayName="SlotClone";var y=({children:e})=>c.jsx(c.Fragment,{children:e});function g(e){return o.isValidElement(e)&&e.type===y}function h(e,r){const n={...r};for(const t in r){const i=e[t],l=r[t];/^on[A-Z]/.test(t)?i&&l?n[t]=(...a)=>{l(...a),i(...a)}:i&&(n[t]=i):t==="style"?n[t]={...i,...l}:t==="className"&&(n[t]=[i,l].filter(Boolean).join(" "))}return{...e,...n}}function E(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(r=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}export{m as S,p as c,j as u};