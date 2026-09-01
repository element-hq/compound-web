import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./dist-CCCdPyND.js";import{i as a,n as o,r as s,t as c}from"./NavItem-B5TT79D2.js";var l,u,d,f,p,m;function h(){return(h=t((()=>{l=e(n(),1),i(),a(),o(),u=r(),d={title:`Nav`,component:s,tags:[`autodocs`,`axe-exclude`],parameters:{controls:{include:[`aria-label`]},design:{type:`figma`,url:`https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0`}},args:{"aria-label":`Main`}},f={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{onClick:()=>{},children:`Info`}),(0,u.jsx)(c,{onClick:()=>{},active:!0,children:`People`}),(0,u.jsx)(c,{onClick:()=>{},disabled:!0,children:`Disabled`}),(0,u.jsx)(c,{href:`https://example.com`,children:`External`})]})}},p={render:function(){let[e,t]=(0,l.useState)(`panel-2`),n=(e,t)=>{let n=document.querySelector(`#${e}`);n&&(n.style.display=t)};return(0,l.useEffect)(()=>{[`panel-1`,`panel-2`].forEach(e=>{n(e,`none`)}),n(e,`block`)},[e]),(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(s,{role:`tablist`,"aria-label":`main`,children:[(0,u.jsx)(c,{"aria-controls":`panel-1`,onClick:()=>{t(`panel-1`)},active:e===`panel-1`,children:`Tab 1`}),(0,u.jsx)(c,{"aria-controls":`panel-2`,onClick:()=>{t(`panel-2`)},active:e===`panel-2`,children:`Tab 2`}),(0,u.jsx)(c,{"aria-controls":`panel-3`,onClick:()=>{},disabled:!0,children:`Disabled Tab`})]}),(0,u.jsx)(`div`,{id:`panel-1`,style:{display:`none`},children:`This is panel 1`}),(0,u.jsx)(`div`,{id:`panel-2`,style:{display:`none`},children:`This is panel 2`}),(0,u.jsx)(`div`,{id:`panel-3`,style:{display:`none`},children:`This is panel 3`})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <NavItem onClick={() => {}}>Info</NavItem>
        <NavItem onClick={() => {}} active>
          People
        </NavItem>
        <NavItem onClick={() => {}} disabled>
          Disabled
        </NavItem>
        <NavItem href="https://example.com">External</NavItem>
      </>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Component() {
    // An example tab implementation
    const [activePanelId, setActivePanelId] = useState("panel-2");
    const changeDisplay = (id: string, display: string) => {
      const e = document.querySelector(\`#\${id}\`) as HTMLDivElement;
      if (e) e.style.display = display;
    };
    useEffect(() => {
      ["panel-1", "panel-2"].forEach(id => {
        changeDisplay(id, "none");
      });
      changeDisplay(activePanelId, "block");
    }, [activePanelId]);
    return <div>
        <NavBar role="tablist" aria-label="main">
          <NavItem aria-controls="panel-1" onClick={() => {
          setActivePanelId("panel-1");
        }} active={activePanelId === "panel-1"}>
            Tab 1
          </NavItem>
          <NavItem aria-controls="panel-2" onClick={() => {
          setActivePanelId("panel-2");
        }} active={activePanelId === "panel-2"}>
            Tab 2
          </NavItem>
          <NavItem aria-controls="panel-3" onClick={() => {}} disabled>
            Disabled Tab
          </NavItem>
        </NavBar>
        <div id="panel-1" style={{
        display: "none"
      }}>
          This is panel 1
        </div>
        <div id="panel-2" style={{
        display: "none"
      }}>
          This is panel 2
        </div>
        <div id="panel-3" style={{
        display: "none"
      }}>
          This is panel 3
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`TabRole`]})))()}h();export{f as Default,p as TabRole,m as __namedExportsOrder,d as default};