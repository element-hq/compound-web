import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{c as p}from"./index-DUolvyrz.js";import{r as u}from"./index-7h80QhK_.js";const c={"nav-bar":"_nav-bar_1fp3r_8","nav-bar-items":"_nav-bar-items_1fp3r_14","nav-tab":"_nav-tab_1fp3r_25","nav-item":"_nav-item_1fp3r_47"},d=({children:e,className:a,role:t,"aria-label":r,...i})=>{const n=p(a,c["nav-bar"]),o=t!=="tablist"?{role:"navigation","aria-label":r}:{role:"presentation"},l=t==="tablist"?{role:"tablist","aria-label":r}:{};return s.jsx("nav",{...o,...i,className:n,children:s.jsx("ul",{...l,className:c["nav-bar-items"],children:e})})};try{d.displayName="NavBar",d.__docgenInfo={description:"A navigation bar component",displayName:"NavBar",props:{className:{defaultValue:null,description:"The CSS class name",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Require a label for navigation landmarks",name:"aria-label",required:!0,type:{name:"string"}},role:{defaultValue:null,description:`Accessibility role that defaults to navigation.

If you pass tablist you must also pass \`aria-controls\` as prop to your NavItem and must
ensure that the conditions stated in https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-ariaroles,states,andproperties
are met.`,name:"role",required:!1,type:{name:"enum",value:[{value:'"navigation"'},{value:'"tablist"'}]}}}}}catch{}const b=u.forwardRef(function({children:a,href:t,onClick:r,...i},n){return s.jsx("a",{href:t,onClick:r,className:c["nav-item"],...i,ref:n,children:a})}),f=u.forwardRef(function({children:a,disabled:t,onClick:r,...i},n){return s.jsx("button",{onClick:r,className:c["nav-item"],disabled:t,ref:n,...i,children:a})}),_=e=>"href"in e&&!!e.href,v=u.forwardRef(function(a,t){const r=a["aria-controls"],n=!!r?{"aria-controls":r,role:"tab","aria-selected":a.active}:{"aria-current":a.active?!0:void 0},o={...a};delete o.active;let l;if(_(o)){const m=t;l=s.jsx(b,{...o,...n,ref:m})}else{const m=t;l=s.jsx(f,{...o,...n,ref:m})}return s.jsx("li",{className:c["nav-tab"],"data-current":a.active?!0:void 0,role:"presentation",children:l})});try{v.displayName="NavItem",v.__docgenInfo={description:`A navigation item component to be used with a navigation bar.
Will render an anchor when href is provided, otherwise a button element.`,displayName:"NavItem",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}export{d as N,v as a};
