import{j as z}from"./jsx-runtime-f6d73c06.js";import{a as i}from"./Text-67f23194.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-473717ad.js";import"./index-fc9b93e8.js";import"./index-79556c5a.js";import"./index-6e117a6c.js";import"./index-8bf7f4ad.js";import"./index-e131923d.js";const B={title:"Form/Controls/Text",component:i,tags:["autodocs"],parameters:{controls:{include:["defaultValue","placeholder","disabled","autoFocus","readOnly","dataInvalid","enableLigatures"]}},argTypes:{defaultValue:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"},autoFocus:{type:"boolean"},readOnly:{type:"boolean"},invalid:{type:"boolean"},enableLigatures:{type:"boolean"}},render:({invalid:W,...q})=>z.jsx(i,{"data-invalid":W||void 0,...q}),args:{placeholder:"",autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1,enableLigatures:void 0}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2689"}}},a={args:{defaultValue:"-> 1x2x3"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2724"}}},n={args:{defaultValue:"-> 1x2x3",enableLigatures:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2724"}}},t={args:{defaultValue:"Disabled",disabled:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2717"}}},s={args:{defaultValue:"Read only",readOnly:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21865"}}},r={args:{autoFocus:!0}},o={args:{defaultValue:"Invalid",invalid:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2710"}}};var d,p,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2689"
    }
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    /**
     * Use this text to check ligatures are not displayed in inputs
     * Once visual testing is reinstated
     */
    defaultValue: "-> 1x2x3"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2724"
    }
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var c,f,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    /**
     * Use this text to check ligatures are enabled by enableLigatures
     * Once visual testing is reinstated
     */
    defaultValue: "-> 1x2x3",
    enableLigatures: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2724"
    }
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,b,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    defaultValue: "Disabled",
    disabled: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2717"
    }
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var v,C,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultValue: "Read only",
    readOnly: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21865"
    }
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var L,S,x;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,E,U;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: "Invalid",
    invalid: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2710"
    }
  }
}`,...(U=(E=o.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const G=["Empty","Filled","WithLigatures","Disabled","ReadOnly","Focused","Invalid"];export{t as Disabled,e as Empty,a as Filled,r as Focused,o as Invalid,s as ReadOnly,n as WithLigatures,G as __namedExportsOrder,B as default};
//# sourceMappingURL=Text.stories-646675f2.js.map
