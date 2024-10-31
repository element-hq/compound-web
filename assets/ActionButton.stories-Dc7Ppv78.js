import{j as y}from"./jsx-runtime-DR9Q75dM.js";import{f as O}from"./index-JRK_GaCU.js";import{i as b,s as z,l as E,v as T,a as x,m as j,b as M,c as k,e as V,d as A,u as B,f as F}from"./index-C87-hJvQ.js";import{B as L}from"./Button-BORixq-h.js";import{T as _,a as D}from"./Tooltip-DGTzhuPA.js";import{S as P}from"./search-DQyZo8im.js";import{C as f}from"./check-BWxs5Tf9.js";import{C}from"./close-CWATPeIo.js";import"./index-DRjF_FHU.js";import"./notifications-BEKrtwGv.js";import"./extensions-DRIHxRsb.js";import"./check-circle-solid-DvGH8qX5.js";import"./info-D9sKA_Xt.js";import"./chevron-down-vguALCSX.js";import"./chevron-right-DND12YKW.js";import"./error-DOy7ZFuJ.js";import"./settings-xa_4DC6i.js";import"./spinner--mCkS-8r.js";import"./threads-CbVN7W51.js";import"./user-profile-cqTW1cHH.js";import"./visibility-on-BsZOuBEH.js";import"./warning-DNnCy5FR.js";import"./index-lhGYx47h.js";import"./UnstyledButton-DuxpNl0e.js";import"./floating-ui.react-CACRriTf.js";import"./index-BvEl7W6R.js";const R=({label:h,...v})=>y.jsx(_,{children:y.jsx(D,{label:h,children:y.jsx(L,{iconOnly:!0,...v})})}),pe={title:"Button/Actions",component:R,tags:["autodocs"],argTypes:{label:{type:"string"},size:{options:["sm","lg"],control:{type:"inline-radio"}},kind:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},destructive:{type:"boolean"},disabled:{type:"boolean"},as:{options:["a","button"],control:{type:"inline-radio"}},Icon:{options:Object.keys(b),mapping:b,control:{type:"select"}},onClick:{action:"onClick"}},args:{label:"Action",size:"lg",as:"button",destructive:!1,disabled:!1,onClick:O()},controls:{exclude:["children"]}},e={args:{label:"Settings",kind:"secondary",Icon:z}},r={args:{label:"Copy link",kind:"secondary",Icon:E}},n={args:{label:"Turn video off",kind:"secondary",Icon:T}},o={args:{label:"Turn video on",kind:"primary",Icon:x}},s={args:{label:"Turn mic off",kind:"secondary",Icon:j}},a={args:{label:"Turn mic on",kind:"primary",Icon:M}},c={args:{label:"Share screen",kind:"secondary",Icon:k}},i={args:{label:"Stop sharing screen",kind:"primary",Icon:k}},t={args:{label:"Full screen",kind:"secondary",Icon:V}},l={args:{label:"End call",kind:"primary",destructive:!0,Icon:A}},d={args:{label:"Invite",kind:"primary",size:"sm",Icon:B}},m={args:{label:"Edit",kind:"primary",size:"sm",Icon:F}},p={args:{label:"Search",kind:"secondary",size:"sm",Icon:P}},u={args:{label:"Save",kind:"primary",size:"sm",Icon:f}},S={args:{label:"Save",kind:"primary",size:"sm",Icon:f,disabled:!0}},g={args:{label:"Cancel",kind:"secondary",size:"sm",Icon:C}},I={args:{label:"Close",kind:"secondary",size:"sm",Icon:C}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const ue=["Settings","ShareLink","VideoOn","VideoOff","MicOn","MicOff","ShareScreen","SharingScreen","Fullscreen","EndCall","Invite","Edit","Search","Save","SaveDisabled","Cancel","Close"];export{g as Cancel,I as Close,m as Edit,l as EndCall,t as Fullscreen,d as Invite,a as MicOff,s as MicOn,u as Save,S as SaveDisabled,p as Search,e as Settings,r as ShareLink,c as ShareScreen,i as SharingScreen,o as VideoOff,n as VideoOn,ue as __namedExportsOrder,pe as default};
