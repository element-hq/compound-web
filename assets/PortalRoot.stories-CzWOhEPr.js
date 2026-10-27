import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-BroprUy_.js";import{n as a,t as o}from"./Button-BGg1b5HP.js";import{n as s,t as c}from"./IconButton-BBFKNwgc.js";import{i as l,n as u,r as d,t as f}from"./Tooltip-CwSghLof.js";import{n as p,t as m}from"./PortalRoot-CO_L1_E-.js";import{n as h,t as g}from"./settings-c7PmV01A.js";import{n as _,t as v}from"./user-profile-B3b4jLiE.js";import{n as y,t as b}from"./MenuItem-C5_xhe0V.js";import{n as x,t as S}from"./Menu-BK0ZUjPM.js";var C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{C=e(n(),1),i(),v(),g(),p(),x(),y(),u(),l(),a(),s(),w=r(),T={border:`1px dashed var(--cpd-color-border-interactive-secondary)`,borderRadius:`var(--cpd-space-2x)`,padding:`var(--cpd-space-4x)`,display:`flex`,flexDirection:`column`,gap:`var(--cpd-space-3x)`,font:`var(--cpd-font-body-sm-regular)`,color:`var(--cpd-color-text-secondary)`},E=({root:e,selector:t})=>{let[n,r]=(0,C.useState)(`…`);return(0,C.useEffect)(()=>{let n=()=>{e?.querySelector(t)?r(`the portal root`):document.body.querySelector(t)?r(`document.body`):r(`not rendered`)};n();let i=new MutationObserver(n);return i.observe(document.body,{childList:!0,subtree:!0}),()=>i.disconnect()},[e,t]),(0,w.jsxs)(`span`,{children:[`The floating part was rendered in `,(0,w.jsx)(`strong`,{children:n}),`.`]})},D=`portal-root-story-root`,O=`2px dashed var(--cpd-color-purple-900)`,k=({enabled:e,selector:t,children:n})=>{let[r,i]=(0,C.useState)(null),a=(0,w.jsxs)(`div`,{style:T,children:[(0,w.jsx)(`span`,{children:`Host`}),(0,w.jsx)(`div`,{children:n}),(0,w.jsx)(E,{root:r,selector:t})]});return(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,w.jsx)(`style`,{children:`.${D} ${t} { outline: ${O} !important; outline-offset: 2px; }`}),e?(0,w.jsx)(m,{root:r,children:a}):a,(0,w.jsx)(`div`,{ref:i,className:D,style:{...T,border:O,minHeight:32},children:(0,w.jsx)(`span`,{children:`Portal root: anything portalled in here gets the same purple dashed outline`})})]})},A=()=>{let[e,t]=(0,C.useState)(!0);return(0,w.jsxs)(S,{open:e,onOpenChange:t,title:`Settings`,trigger:(0,w.jsx)(o,{Icon:h,children:`Open menu`}),align:`start`,children:[(0,w.jsx)(b,{Icon:_,label:`Profile`,onSelect:()=>{}}),(0,w.jsx)(b,{Icon:h,label:`Preferences`,onSelect:()=>{}})]})},j={title:`PortalRoot`,component:m,tags:[`autodocs`,`axe-exclude`],args:{root:null,children:null},parameters:{controls:{disable:!0},docs:{description:{component:`
Compound's menus, context menus, tooltips and release announcements are not
rendered in place. They are portalled out of their trigger's subtree so that
they can float above the rest of the page, and by default they land in
\`document.body\`.

That is the wrong place when the content does not live in the main document:
inside a shadow root, or in another window such as a Document
Picture-in-Picture window. Wrap such content in a \`PortalRoot\` to define a
custom \`root\` (as a \`prop\`) to portal into.

\`\`\`tsx
const [root, setRoot] = useState<HTMLElement | null>(null);

<PortalRoot root={root}>
  <Menu … />
</PortalRoot>
\`\`\`

\`null\` means the root is not available yet, so state that is only set once
the element has mounted can be passed straight in: floating parts follow it
once it is. Nested providers are fine: the innermost one wins.

### Caveats

- \`root\` must be in the same document as the triggers, or positioning will
  be off. Positioning itself is unaffected by the choice of root: floating
  parts are placed relative to their trigger either way. That is why
  anything portalled into the portal root in the stories below gets a purple
  dashed outline.
- Styles are not carried across. A root inside a shadow root needs Compound's
  stylesheet as well.
`}}}},M={render:()=>(0,w.jsx)(k,{enabled:!0,selector:`[role='menu']`,children:(0,w.jsx)(A,{})})},N={render:()=>(0,w.jsx)(k,{enabled:!1,selector:`[role='menu']`,children:(0,w.jsx)(A,{})})},P={render:()=>(0,w.jsx)(k,{enabled:!0,selector:`[role='tooltip']`,children:(0,w.jsx)(d,{children:(0,w.jsx)(f,{description:`Open the settings`,open:!0,placement:`right`,children:(0,w.jsx)(c,{"aria-label":`Settings`,children:(0,w.jsx)(h,{})})})})})},F=[`WithCustomPortalRoot`,`WithoutPortalRoot`,`WithTooltip`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Host enabled selector="[role='menu']">
      <OpenMenu />
    </Host>
}`,...M.parameters?.docs?.source},description:{story:"A menu whose host provides a `PortalRoot`. The menu opens next to its\ntrigger as usual, but is a descendant of the portal root rather than of\n`document.body`.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Host enabled={false} selector="[role='menu']">
      <OpenMenu />
    </Host>
}`,...N.parameters?.docs?.source},description:{story:"The same menu without a `PortalRoot`, for comparison: it goes into\n`document.body`.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Host enabled selector="[role='tooltip']">
      <TooltipProvider>
        <Tooltip description="Open the settings" open placement="right">
          <IconButton aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </TooltipProvider>
    </Host>
}`,...P.parameters?.docs?.source},description:{story:"Tooltips follow the `PortalRoot` too. The `TooltipProvider` can sit on\neither side of it.",...P.parameters?.docs?.description}}}})))()}I();export{M as WithCustomPortalRoot,P as WithTooltip,N as WithoutPortalRoot,F as __namedExportsOrder,j as default};