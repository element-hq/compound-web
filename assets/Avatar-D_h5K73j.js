import{j as m}from"./jsx-runtime-DoxjgJx5.js";import{c as d}from"./index-C2KoGaFq.js";import{r as f,a as u}from"./index-Cu9bd8lq.js";const v="@",h="#",y="+",A=new Intl.Segmenter;function I(a){if(a.length<1)return"";const e=a[0];[v,h,y].includes(e)&&(a=a.substring(1));const t=A.segment(a)[Symbol.iterator]().next();return t.done?"":t.value.segment}const M="_avatar_mcap2_17",R="_image_mcap2_50",o={avatar:M,image:R,"avatar-imageless":"_avatar-imageless_mcap2_61","stacked-avatars":"_stacked-avatars_mcap2_111","clip-path":"_clip-path_mcap2_130"};function S(a){return a.split("").reduce((r,n)=>r+n.charCodeAt(0),0)%6+1}function x(a){return!!(a.onClick||a.onKeyDown||a.onKeyUp)}const p=f.forwardRef(function({src:e,id:t,name:i="",type:r="round",className:n="",size:s,style:c={},onError:_,...l},g){return u.createElement(x(l)?"button":"span",{ref:g,role:"img","aria-label":t,...l,"data-type":r,"data-color":S(t),className:d(o.avatar,n,{[o["avatar-imageless"]]:!e}),style:{...c,"--cpd-avatar-size":s}},m.jsx(u.Fragment,{children:e?m.jsx("img",{loading:"lazy",alt:"",src:e,referrerPolicy:"no-referrer",className:d(o.image),"data-type":r,style:c,width:s,height:s,onError:_}):I(i)}))});try{p.displayName="Avatar",p.__docgenInfo={description:`Avatar component that will fallback to an initial letter over a coloured
background if no source is provided or if the source has failed to load.`,displayName:"Avatar",props:{src:{defaultValue:null,description:"The avatar image URL, if any.",name:"src",required:!1,type:{name:"string"}},size:{defaultValue:null,description:'The avatar size in CSS units, e.g. `"24px"`.',name:"size",required:!1,type:{name:"string"}}}}}catch{}export{p as A,o as s};
