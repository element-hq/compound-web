import{r as u}from"./index-aRQRyZp7.js";import{j as v}from"./jsx-runtime-C-_spy54.js";function j(t,s){const o=u.createContext(s),p=r=>{const{children:e,...n}=r,c=u.useMemo(()=>n,Object.values(n));return v.jsx(o.Provider,{value:c,children:e})};p.displayName=t+"Provider";function i(r){const e=u.useContext(o);if(e)return e;if(s!==void 0)return s;throw new Error(`\`${r}\` must be used within \`${t}\``)}return[p,i]}function w(t,s=[]){let o=[];function p(r,e){const n=u.createContext(e),c=o.length;o=[...o,e];const d=x=>{const{scope:m,children:f,...a}=x,S=m?.[t]?.[c]||n,h=u.useMemo(()=>a,Object.values(a));return v.jsx(S.Provider,{value:h,children:f})};d.displayName=r+"Provider";function C(x,m){const f=m?.[t]?.[c]||n,a=u.useContext(f);if(a)return a;if(e!==void 0)return e;throw new Error(`\`${x}\` must be used within \`${r}\``)}return[d,C]}const i=()=>{const r=o.map(e=>u.createContext(e));return function(n){const c=n?.[t]||r;return u.useMemo(()=>({[`__scope${t}`]:{...n,[t]:c}}),[n,c])}};return i.scopeName=t,[p,P(i,...s)]}function P(...t){const s=t[0];if(t.length===1)return s;const o=()=>{const p=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(r){const e=p.reduce((n,{useScope:c,scopeName:d})=>{const x=c(r)[`__scope${d}`];return{...n,...x}},{});return u.useMemo(()=>({[`__scope${s.scopeName}`]:e}),[e])}};return o.scopeName=s.scopeName,o}export{j as a,w as c};
