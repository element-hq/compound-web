import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const{useParameter:p,addons:f,useEffect:S,useMemo:$}=__STORYBOOK_MODULE_PREVIEW_API__;var _=Object.defineProperty,b=(e,t)=>{for(var r in t)_(e,r,{get:t[r],enumerable:!0})},k={};b(k,{initializeThemeState:()=>u,pluckThemeFromContext:()=>m,useThemeParameters:()=>d});var R="@storybook/addon-styling",v=`${R}/theme-switcher`,O="theming",y="theme",M={},I={REGISTER_THEMES:`${v}/REGISTER_THEMES`};function m({globals:e}){return e[y]||""}function d(){return p(O,M)}function u(e,t){f.getChannel().emit(I.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",i=e=>e.split(" ").filter(Boolean),x=({themes:e,defaultTheme:t,parentSelector:r=P})=>(u(Object.keys(e),t),(g,E)=>{let{themeOverride:o}=d(),a=m(E);return S(()=>{let n=o||a||t,s=document.querySelector(r);Object.entries(e).filter(([l])=>l!==n).forEach(([l,T])=>{let h=i(T);h.length>0&&s.classList.remove(...h)});let c=i(e[n]);c.length>0&&s.classList.add(...c)},[o,a,r]),g()});const j={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{disable:!0}},A=[x({themes:{light:"cpd-theme-light",dark:"cpd-theme-dark","light-high-contrast":"cpd-theme-light-hc","dark-high-contrast":"cpd-theme-dark-hc"},defaultTheme:"light"})];export{A as decorators,j as parameters};
//# sourceMappingURL=preview-347ef830.js.map