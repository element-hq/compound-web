import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./react-Baqbuk-D.js";import{t as n}from"./jsx-runtime-DC6t-S6Q.js";import{t as r}from"./dist-Bragt-Yk.js";import{n as i,t as a}from"./Text-BYksVgAj.js";import{i as o,n as s,r as c,t as l}from"./extensions-D_pwEU7j.js";import{n as u,t as d}from"./settings-hc2IDSWk.js";import{n as f,t as p}from"./MenuItem-PIN7nQBb.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{t(),r(),s(),o(),d(),f(),i(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Menu/MenuItem`,component:p,tags:[`autodocs`,`axe-exclude`],args:{label:`Menu item`,children:(0,m.jsx)(a,{as:`span`,size:`sm`,children:`99`}),Icon:c,onSelect:h()},decorators:[e=>(0,m.jsx)(`div`,{style:{width:300},children:(0,m.jsx)(e,{})})]},_={render:()=>(0,m.jsxs)(`div`,{style:{width:300},children:[(0,m.jsx)(p,{Icon:c,label:`First item`,onSelect:()=>{},children:(0,m.jsx)(a,{as:`span`,size:`sm`,children:`99`})}),(0,m.jsx)(p,{Icon:l,label:`Second item with a name that's quite long`,onSelect:()=>{}}),(0,m.jsx)(p,{Icon:u,label:null,onSelect:()=>{},children:(0,m.jsx)(a,{as:`span`,size:`sm`,children:`Third item without a label`})}),(0,m.jsx)(p,{label:`Fourth item without an icon`,onSelect:()=>{}}),(0,m.jsx)(p,{label:`Fith item`,onSelect:()=>{},children:(0,m.jsx)(a,{as:`span`,size:`sm`,children:`99`})})]})},v={args:{kind:`primary`}},y={args:{kind:`critical`}},b={args:{...v.args,disabled:!0}},x={args:{...y.args,disabled:!0}},S=e=>(0,m.jsx)(`div`,{style:{height:24,width:48,backgroundColor:`teal`},...e}),C={args:{...v.args,Icon:(0,m.jsx)(S,{})}},w={args:{...v.args,label:void 0}},T={args:{...v.args,label:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}},E={args:{...v.args,label:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.`,children:(0,m.jsx)(a,{as:`span`,size:`sm`,children:`Longer children too`})}},D={args:{hideChevron:!0}},O={args:{Icon:void 0}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <MenuItemComponent Icon={ChatIcon} label="First item" onSelect={() => {}}>
        <Text as="span" size="sm">
          99
        </Text>
      </MenuItemComponent>
      <MenuItemComponent Icon={ExtensionsIcon} label="Second item with a name that's quite long" onSelect={() => {}} />
      <MenuItemComponent Icon={SettingsLabel} label={null} onSelect={() => {}}>
        <Text as="span" size="sm">
          Third item without a label
        </Text>
      </MenuItemComponent>
      <MenuItemComponent label="Fourth item without an icon" onSelect={() => {}} />
      <MenuItemComponent label="Fith item" onSelect={() => {}}>
        <Text as="span" size="sm">
          99
        </Text>
      </MenuItemComponent>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "critical"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Critical.args,
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    // @ts-expect-error: For some reason, this isn't liking the type here
    Icon: <SimpleComponent />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: undefined
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",
    children: <Text as="span" size="sm">
        Longer children too
      </Text>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    hideChevron: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: undefined
  }
}`,...O.parameters?.docs?.source}}},k=[`Example`,`Primary`,`Critical`,`PrimaryDisabled`,`CriticalDisabled`,`IconIsComponent`,`WithoutLabel`,`WithALongLabel`,`WithALongLabelAndChildren`,`WithoutChevron`,`WithoutIcon`]}))();export{y as Critical,x as CriticalDisabled,_ as Example,C as IconIsComponent,v as Primary,b as PrimaryDisabled,T as WithALongLabel,E as WithALongLabelAndChildren,D as WithoutChevron,O as WithoutIcon,w as WithoutLabel,k as __namedExportsOrder,g as default};