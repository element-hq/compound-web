import{j as n}from"./jsx-runtime-f6d73c06.js";import{c as h}from"./index-e131923d.js";import{r as v}from"./index-8ee6c85d.js";import{U as _}from"./UnstyledButton-f4d497aa.js";const g="_button_dyfp8_17",k="_destructive_dyfp8_99",e={button:g,"has-icon":"_has-icon_dyfp8_55",destructive:k},s=v.forwardRef(function({as:r,kind:a="primary",size:o="lg",children:u,className:d,Icon:t,destructive:l,disabled:c,...p},m){const[b,f]=a==="destructive"?["secondary",!0]:[a,l],y=h(e.button,d,{[e["has-icon"]]:t,[e.destructive]:f});return n.jsxs(_,{...p,as:r||"button",ref:m,className:y,"data-size":o,"data-kind":b,tabIndex:0,disabled:c,children:[t&&n.jsx(t,{width:20,height:20,className:e.icon,"aria-hidden":!0}),u]})});try{s.displayName="Button",s.__docgenInfo={description:"A button component that can be transformed into a link, but keep the button\nstyling using the `as` property.",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!0,type:{name:"ElementType<any>"}},kind:{defaultValue:null,description:`The type of button.
Note: "destructive" is deprecated, please use the destructive prop in
conjunction with another button kind.`,name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"destructive"'}]}},size:{defaultValue:null,description:"The t-shirt size of the button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},Icon:{defaultValue:null,description:"An icon to display within the button.",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGElement>>"}},destructive:{defaultValue:{value:"false"},description:"Whether this button triggers a destructive action.",name:"destructive",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.\n`aria-disabled` attribute is used to indicate button is disabled.\nEvent handlers are not passed to disabled buttons (onClick, onSubmit, etc.)",name:"disabled",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<ComponentRef<C>>"}}}}}catch{}export{s as B};
//# sourceMappingURL=Button-1d7556c8.js.map