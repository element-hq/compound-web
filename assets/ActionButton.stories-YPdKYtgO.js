import{j as y}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DEAyTKha.js";import"./index-BuxLTuqg.js";import{e as O,a as z,b as T,u as E,m as x,c as _,s as M,l as j,d as k,v as V,f as A,i as b}from"./index-BIJXSFLC.js";import{B}from"./Button-DrXcXAy2.js";import{T as F,a as L}from"./Tooltip-CtHH_Rd-.js";import{C as f}from"./close-CaQaJn8i.js";import{C}from"./check-DT7g6Y0t.js";import{S as D}from"./search-CG3QLIaH.js";import"./preload-helper-PPVm8Dsz.js";import"./notifications-DeNYRfLs.js";import"./extensions-Cfr5yN1D.js";import"./check-circle-solid-CZPcpWUi.js";import"./check-circle-qU6EHP_k.js";import"./chevron-down-B-6KXxoN.js";import"./chevron-left-Cxr2T9IM.js";import"./chevron-right--RO7B6Mb.js";import"./error-solid-C-gaRdfv.js";import"./info-DKHyFrvt.js";import"./key-Do9kN6_a.js";import"./settings-YBCX-WhD.js";import"./spinner-eId45Rtj.js";import"./threads-ZoGIL34v.js";import"./user-profile-CpKxdSvc.js";import"./visibility-on-C-r7hD0s.js";import"./warning-D6B4mhDo.js";import"./index-Uj5m292_.js";import"./UnstyledButton-yfjHHjlV.js";import"./floating-ui.react-Doc1Zd8n.js";import"./index-BKFfprmm.js";import"./index-BZvkY9vX.js";const{fn:R}=__STORYBOOK_MODULE_TEST__,U=({label:h,...v})=>y.jsx(F,{children:y.jsx(L,{label:h,children:y.jsx(B,{iconOnly:!0,...v})})}),ye={title:"Button/Actions",component:U,tags:["autodocs"],argTypes:{label:{type:"string"},size:{options:["sm","lg"],control:{type:"inline-radio"}},kind:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},destructive:{type:"boolean"},disabled:{type:"boolean"},as:{options:["a","button"],control:{type:"inline-radio"}},Icon:{options:Object.keys(b),mapping:b,control:{type:"select"}},onClick:{action:"onClick"}},args:{label:"Action",size:"lg",as:"button",destructive:!1,disabled:!1,onClick:R()},parameters:{controls:{exclude:["children"]}}},e={args:{label:"Settings",kind:"secondary",Icon:M}},r={args:{label:"Copy link",kind:"secondary",Icon:j}},n={args:{label:"Turn video off",kind:"secondary",Icon:A}},o={args:{label:"Turn video on",kind:"primary",Icon:V}},s={args:{label:"Turn mic off",kind:"secondary",Icon:_}},a={args:{label:"Turn mic on",kind:"primary",Icon:x}},c={args:{label:"Share screen",kind:"secondary",Icon:k}},i={args:{label:"Stop sharing screen",kind:"primary",Icon:k}},t={args:{label:"Full screen",kind:"secondary",Icon:T}},l={args:{label:"End call",kind:"primary",destructive:!0,Icon:z}},d={args:{label:"Invite",kind:"primary",size:"sm",Icon:E}},m={args:{label:"Edit",kind:"primary",size:"sm",Icon:O}},p={args:{label:"Search",kind:"secondary",size:"sm",Icon:D}},u={args:{label:"Save",kind:"primary",size:"sm",Icon:C}},S={args:{label:"Save",kind:"primary",size:"sm",Icon:C,disabled:!0}},g={args:{label:"Cancel",kind:"secondary",size:"sm",Icon:f}},I={args:{label:"Close",kind:"secondary",size:"sm",Icon:f}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Settings",
    kind: "secondary",
    Icon: icons.SettingsSolidIcon
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Copy link",
    kind: "secondary",
    Icon: icons.LinkIcon
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn video off",
    kind: "secondary",
    Icon: icons.VideoCallSolidIcon
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn video on",
    kind: "primary",
    Icon: icons.VideoCallOffSolidIcon
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn mic off",
    kind: "secondary",
    Icon: icons.MicOnSolidIcon
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Turn mic on",
    kind: "primary",
    Icon: icons.MicOffSolidIcon
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Share screen",
    kind: "secondary",
    Icon: icons.ShareScreenSolidIcon
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Stop sharing screen",
    kind: "primary",
    Icon: icons.ShareScreenSolidIcon
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full screen",
    kind: "secondary",
    Icon: icons.ExpandIcon
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "End call",
    kind: "primary",
    destructive: true,
    Icon: icons.EndCallIcon
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Invite",
    kind: "primary",
    size: "sm",
    Icon: icons.UserAddIcon
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Edit",
    kind: "primary",
    size: "sm",
    Icon: icons.EditIcon
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search",
    kind: "secondary",
    size: "sm",
    Icon: icons.SearchIcon
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: icons.CheckIcon
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: icons.CheckIcon,
    disabled: true
  }
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Cancel",
    kind: "secondary",
    size: "sm",
    Icon: icons.CloseIcon
  }
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Close",
    kind: "secondary",
    size: "sm",
    Icon: icons.CloseIcon
  }
}`,...I.parameters?.docs?.source}}};const be=["Settings","ShareLink","VideoOn","VideoOff","MicOn","MicOff","ShareScreen","SharingScreen","Fullscreen","EndCall","Invite","Edit","Search","Save","SaveDisabled","Cancel","Close"];export{g as Cancel,I as Close,m as Edit,l as EndCall,t as Fullscreen,d as Invite,a as MicOff,s as MicOn,u as Save,S as SaveDisabled,p as Search,e as Settings,r as ShareLink,c as ShareScreen,i as SharingScreen,o as VideoOff,n as VideoOn,be as __namedExportsOrder,ye as default};
