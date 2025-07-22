import{j as y}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DBdYsKIK.js";import"./index-ezr25my4.js";import{i as b,s as O,l as z,v as T,a as E,m as x,b as _,c as k,e as M,d as j,u as V,f as A}from"./index-DfOrzoNC.js";import{B}from"./Button-JmeTulpi.js";import{T as F,a as L}from"./Tooltip-DsDjgGVe.js";import{S as D}from"./search-Bf5ROuDK.js";import{C as f}from"./check-CqIYRr8e.js";import{C}from"./close-Cn8MngLZ.js";import"./notifications-BnaRW02w.js";import"./extensions-Dq1H7KG_.js";import"./check-circle-solid-CliMkRgY.js";import"./check-circle-CgKHsyA0.js";import"./chevron-down-IwgQIex4.js";import"./chevron-left-MPmxbtmz.js";import"./chevron-right-DIegbZfL.js";import"./error-solid-CIorYBWj.js";import"./info-CzcpB6z6.js";import"./key-YHpDGhC1.js";import"./settings-Bo3r6aDd.js";import"./spinner-BMHw90_2.js";import"./threads-CRswP_1r.js";import"./user-profile-B52Hvy7h.js";import"./visibility-on-BSRpoGII.js";import"./warning-DvhP2KbV.js";import"./index-DkJZOGMe.js";import"./UnstyledButton-BmKgbr7U.js";import"./floating-ui.react-BWfTEaxs.js";import"./floating-ui.react-dom-BHYeL_XL.js";import"./index-DQpUlY9K.js";import"./index-CLU8KYJU.js";const{fn:R}=__STORYBOOK_MODULE_TEST__,U=({label:h,...v})=>y.jsx(F,{children:y.jsx(L,{label:h,children:y.jsx(B,{iconOnly:!0,...v})})}),ye={title:"Button/Actions",component:U,tags:["autodocs"],argTypes:{label:{type:"string"},size:{options:["sm","lg"],control:{type:"inline-radio"}},kind:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},destructive:{type:"boolean"},disabled:{type:"boolean"},as:{options:["a","button"],control:{type:"inline-radio"}},Icon:{options:Object.keys(b),mapping:b,control:{type:"select"}},onClick:{action:"onClick"}},args:{label:"Action",size:"lg",as:"button",destructive:!1,disabled:!1,onClick:R()},parameters:{controls:{exclude:["children"]}}},e={args:{label:"Settings",kind:"secondary",Icon:O}},r={args:{label:"Copy link",kind:"secondary",Icon:z}},n={args:{label:"Turn video off",kind:"secondary",Icon:T}},o={args:{label:"Turn video on",kind:"primary",Icon:E}},s={args:{label:"Turn mic off",kind:"secondary",Icon:x}},a={args:{label:"Turn mic on",kind:"primary",Icon:_}},c={args:{label:"Share screen",kind:"secondary",Icon:k}},i={args:{label:"Stop sharing screen",kind:"primary",Icon:k}},t={args:{label:"Full screen",kind:"secondary",Icon:M}},l={args:{label:"End call",kind:"primary",destructive:!0,Icon:j}},d={args:{label:"Invite",kind:"primary",size:"sm",Icon:V}},m={args:{label:"Edit",kind:"primary",size:"sm",Icon:A}},p={args:{label:"Search",kind:"secondary",size:"sm",Icon:D}},u={args:{label:"Save",kind:"primary",size:"sm",Icon:f}},S={args:{label:"Save",kind:"primary",size:"sm",Icon:f,disabled:!0}},g={args:{label:"Cancel",kind:"secondary",size:"sm",Icon:C}},I={args:{label:"Close",kind:"secondary",size:"sm",Icon:C}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
