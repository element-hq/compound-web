import{r as u}from"./index-7h80QhK_.js";import{j as C}from"./jsx-runtime-BjG_zV1W.js";function j(t,s){const n=u.createContext(s),p=r=>{const{children:e,...o}=r,c=u.useMemo(()=>o,Object.values(o));return C.jsx(n.Provider,{value:c,children:e})};p.displayName=t+"Provider";function i(r){const e=u.useContext(n);if(e)return e;if(s!==void 0)return s;throw new Error(`\`${r}\` must be used within \`${t}\``)}return[p,i]}function w(t,s=[]){let n=[];function p(r,e){const o=u.createContext(e),c=n.length;n=[...n,e];const m=x=>{const{scope:d,children:v,...a}=x,S=d?.[t]?.[c]||o,h=u.useMemo(()=>a,Object.values(a));return C.jsx(S.Provider,{value:h,children:v})};m.displayName=r+"Provider";function f(x,d){const v=d?.[t]?.[c]||o,a=u.useContext(v);if(a)return a;if(e!==void 0)return e;throw new Error(`\`${x}\` must be used within \`${r}\``)}return[m,f]}const i=()=>{const r=n.map(e=>u.createContext(e));return function(o){const c=o?.[t]||r;return u.useMemo(()=>({[`__scope${t}`]:{...o,[t]:c}}),[o,c])}};return i.scopeName=t,[p,P(i,...s)]}function P(...t){const s=t[0];if(t.length===1)return s;const n=()=>{const p=t.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(r){const e=p.reduce((o,{useScope:c,scopeName:m})=>{const x=c(r)[`__scope${m}`];return{...o,...x}},{});return u.useMemo(()=>({[`__scope${s.scopeName}`]:e}),[e])}};return n.scopeName=s.scopeName,n}export{j as a,w as c};
