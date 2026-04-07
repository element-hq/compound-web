import{n as e}from"./chunk-BneVvdWh.js";import{J as t}from"./iframe-WTe4_nYq.js";import{t as n}from"./jsx-runtime-DweqXWlm.js";import{t as r}from"./dist-ytBllGKW.js";import{i,r as a}from"./Tooltip-TkeHibPu.js";import{r as o,t as s}from"./Password-CssTmHIV.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),r(),s(),i(),c=n(),{screen:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Form/Controls/Password`,component:o,tags:[`autodocs`,`axe-exclude`],parameters:{controls:{include:[`defaultValue`,`placeholder`,`disabled`,`autoFocus`,`readOnly`,`invalid`]}},argTypes:{defaultValue:{type:`string`},placeholder:{type:`string`},disabled:{type:`boolean`},autoFocus:{type:`boolean`},readOnly:{type:`boolean`},invalid:{type:`boolean`}},render:({invalid:e,...t})=>(0,c.jsx)(a,{children:(0,c.jsx)(o,{"data-invalid":e||void 0,...t})}),args:{placeholder:``,autoFocus:!1,disabled:!1,readOnly:!1,invalid:!1}},f={parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477`}}},p={args:{defaultValue:`Filled`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536`}}},m={args:{defaultValue:`Disabled`,disabled:!0},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530`}}},h={args:{defaultValue:`Read only`,readOnly:!0},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984`}}},g={args:{autoFocus:!0}},_={args:{defaultValue:`Invalid`,invalid:!0},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514`}}},v={args:{defaultValue:`hunter2`},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536`}},play:async()=>{let e=u.setup(),t=l.getByRole(`button`,{name:`Show`});await e.click(t)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477"
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Filled"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Disabled",
    disabled: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530"
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Read only",
    readOnly: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984"
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Invalid",
    invalid: true
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514"
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "hunter2"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536"
    }
  },
  play: async () => {
    // eslint-disable-next-line storybook/await-interactions
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", {
      name: "Show"
    });
    await user.click(toggle);
  }
}`,...v.parameters?.docs?.source}}},y=[`Empty`,`Filled`,`Disabled`,`ReadOnly`,`Focused`,`Invalid`,`Visible`]}))();export{m as Disabled,f as Empty,p as Filled,g as Focused,_ as Invalid,h as ReadOnly,v as Visible,y as __namedExportsOrder,d as default};