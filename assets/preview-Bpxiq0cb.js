import"./index-DRjF_FHU.js";const{useParameter:p,addons:S,useEffect:R,useMemo:D}=__STORYBOOK_MODULE_PREVIEW_API__;var f=Object.defineProperty,A=(e,t)=>{for(var r in t)f(e,r,{get:t[r],enumerable:!0})},O={};A(O,{initializeThemeState:()=>d,pluckThemeFromContext:()=>E,useThemeParameters:()=>T});var m="themes",k=`storybook/${m}`,M="theme",v={},L={REGISTER_THEMES:`${k}/REGISTER_THEMES`};function E({globals:e}){return e[M]||""}function T(){return p(m,v)}function d(e,t){S.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",l=e=>e.split(" ").filter(Boolean),b=({themes:e,defaultTheme:t,parentSelector:r=P})=>(d(Object.keys(e),t),(_,u)=>{let{themeOverride:s}=T(),o=E(u);return R(()=>{let c=s||o||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([h])=>h!==c).forEach(([h,g])=>{let i=l(g);i.length>0&&a.classList.remove(...i)});let n=l(e[c]);n.length>0&&a.classList.add(...n)},[s,o]),_()});const I={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{disable:!0}},N=[b({themes:{light:"cpd-theme-light",dark:"cpd-theme-dark","light-high-contrast":"cpd-theme-light-hc","dark-high-contrast":"cpd-theme-dark-hc"},defaultTheme:"light"})],x=["autodocs"];export{N as decorators,I as parameters,x as tags};