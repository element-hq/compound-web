import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{N as d,a as n}from"./NavItem-DtjjtZVE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-FGJkmGnF.js";const b={title:"Nav",component:d,tags:["autodocs"],parameters:{controls:{include:["aria-label"]},design:{type:"figma",url:"https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0"}},args:{"aria-label":"Main"}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>{},children:"Info"}),e.jsx(n,{onClick:()=>{},active:!0,children:"People"}),e.jsx(n,{onClick:()=>{},disabled:!0,children:"Disabled"}),e.jsx(n,{href:"https://example.com",children:"External"})]})}},l={render:function(){const[a,s]=c.useState("panel-2"),r=(t,p)=>{const o=document.querySelector(`#${t}`);o&&(o.style.display=p)};return c.useEffect(()=>{["panel-1","panel-2"].forEach(t=>{r(t,"none")}),r(a,"block")},[a]),e.jsxs("div",{children:[e.jsxs(d,{role:"tablist","aria-label":"main",children:[e.jsx(n,{"aria-controls":"panel-1",onClick:()=>{s("panel-1")},active:a==="panel-1",children:"Tab 1"}),e.jsx(n,{"aria-controls":"panel-2",onClick:()=>{s("panel-2")},active:a==="panel-2",children:"Tab 2"}),e.jsx(n,{"aria-controls":"panel-3",onClick:()=>{},disabled:!0,children:"Disabled Tab"})]}),e.jsx("div",{id:"panel-1",style:{display:"none"},children:"This is panel 1"}),e.jsx("div",{id:"panel-2",style:{display:"none"},children:"This is panel 2"}),e.jsx("div",{id:"panel-3",style:{display:"none"},children:"This is panel 3"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const f=["Default","TabRole"];export{i as Default,l as TabRole,f as __namedExportsOrder,b as default};
