import{i as e}from"./preload-helper-xPQekRTU.js";import{X as t}from"./iframe-BKA1Oy6Y.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./dist-BeQyAyEE.js";import{n as i,t as a}from"./Button-B3En-N8y.js";import{t as o}from"./close-DfGiSiFl.js";import{i as s,n as c,r as l,t as u}from"./Tooltip-B0Xb2m0y.js";import{C as d,D as f,T as p,b as m,c as h,f as g,g as _,i as v,m as y,n as b,o as x,t as S,u as C}from"./icons-DXUTxcyW.js";import{t as w}from"./check-BHmlpBy3.js";import{n as T}from"./search-DuCOOaKg.js";var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{t(),r(),b(),i(),c(),s(),E=n(),{fn:D}=__STORYBOOK_MODULE_TEST__,O=({label:e,...t})=>(0,E.jsx)(l,{children:(0,E.jsx)(u,{label:e,children:(0,E.jsx)(a,{iconOnly:!0,...t})})}),k={title:`Button/Actions`,component:O,tags:[`autodocs`],argTypes:{label:{type:`string`},size:{options:[`sm`,`lg`],control:{type:`inline-radio`}},kind:{options:[`primary`,`secondary`,`tertiary`],control:{type:`inline-radio`}},destructive:{type:`boolean`},disabled:{type:`boolean`},as:{options:[`a`,`button`],control:{type:`inline-radio`}},Icon:{options:Object.keys(S),mapping:S,control:{type:`select`}},onClick:{action:`onClick`}},args:{label:`Action`,size:`lg`,as:`button`,destructive:!1,disabled:!1,onClick:D()},parameters:{controls:{exclude:[`children`]}}},A={args:{label:`Settings`,kind:`secondary`,Icon:g}},j={args:{label:`Copy link`,kind:`secondary`,Icon:m}},M={args:{label:`Turn video off`,kind:`secondary`,Icon:v}},N={args:{label:`Turn video on`,kind:`primary`,Icon:x}},P={args:{label:`Turn mic off`,kind:`secondary`,Icon:y}},F={args:{label:`Turn mic on`,kind:`primary`,Icon:_}},I={args:{label:`Share screen`,kind:`secondary`,Icon:C}},L={args:{label:`Stop sharing screen`,kind:`primary`,Icon:C}},R={args:{label:`Full screen`,kind:`secondary`,Icon:d}},z={args:{label:`End call`,kind:`primary`,destructive:!0,Icon:p}},B={args:{label:`Invite`,kind:`primary`,size:`md`,Icon:h}},V={args:{label:`Edit`,kind:`primary`,size:`md`,Icon:f}},H={args:{label:`Search`,kind:`secondary`,size:`md`,Icon:T}},U={args:{label:`Save`,kind:`primary`,size:`md`,Icon:w}},W={args:{label:`Save`,kind:`primary`,size:`md`,Icon:w,disabled:!0}},G={args:{label:`Cancel`,kind:`secondary`,size:`md`,Icon:o}},K={args:{label:`Close`,kind:`secondary`,size:`md`,Icon:o}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Settings",
    kind: "secondary",
    Icon: icons.SettingsSolidIcon
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy link",
    kind: "secondary",
    Icon: icons.LinkIcon
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn video off",
    kind: "secondary",
    Icon: icons.VideoCallSolidIcon
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn video on",
    kind: "primary",
    Icon: icons.VideoCallOffSolidIcon
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn mic off",
    kind: "secondary",
    Icon: icons.MicOnSolidIcon
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn mic on",
    kind: "primary",
    Icon: icons.MicOffSolidIcon
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Share screen",
    kind: "secondary",
    Icon: icons.ShareScreenSolidIcon
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Stop sharing screen",
    kind: "primary",
    Icon: icons.ShareScreenSolidIcon
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full screen",
    kind: "secondary",
    Icon: icons.ExpandIcon
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: "End call",
    kind: "primary",
    destructive: true,
    Icon: icons.EndCallIcon
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Invite",
    kind: "primary",
    size: "md",
    Icon: icons.UserAddIcon
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Edit",
    kind: "primary",
    size: "md",
    Icon: icons.EditIcon
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    kind: "secondary",
    size: "md",
    Icon: icons.SearchIcon
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Save",
    kind: "primary",
    size: "md",
    Icon: icons.CheckIcon
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Save",
    kind: "primary",
    size: "md",
    Icon: icons.CheckIcon,
    disabled: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Cancel",
    kind: "secondary",
    size: "md",
    Icon: icons.CloseIcon
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Close",
    kind: "secondary",
    size: "md",
    Icon: icons.CloseIcon
  }
}`,...K.parameters?.docs?.source}}},q=[`Settings`,`ShareLink`,`VideoOn`,`VideoOff`,`MicOn`,`MicOff`,`ShareScreen`,`SharingScreen`,`Fullscreen`,`EndCall`,`Invite`,`Edit`,`Search`,`Save`,`SaveDisabled`,`Cancel`,`Close`]}))();export{G as Cancel,K as Close,V as Edit,z as EndCall,R as Fullscreen,B as Invite,F as MicOff,P as MicOn,U as Save,W as SaveDisabled,H as Search,A as Settings,j as ShareLink,I as ShareScreen,L as SharingScreen,N as VideoOff,M as VideoOn,q as __namedExportsOrder,k as default};