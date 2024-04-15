function s(i){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];var n=Array.from(typeof i=="string"?[i]:i);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var f=n.reduce(function(t,u){var a=u.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(g){var e,r;return(r=(e=g.match(/[\t ]/g))===null||e===void 0?void 0:e.length)!==null&&r!==void 0?r:0})):t},[]);if(f.length){var d=new RegExp(`
[	 ]{`+Math.min.apply(Math,f)+"}","g");n=n.map(function(t){return t.replace(d,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var c=n[0];return l.forEach(function(t,u){var a=c.match(/(?:^|\n)( *)$/),g=a?a[1]:"",e=t;typeof t=="string"&&t.includes(`
`)&&(e=String(t).split(`
`).map(function(r,h){return h===0?r:""+g+r}).join(`
`)),c+=e+n[u+1]}),c}const p=Object.freeze(Object.defineProperty({__proto__:null,dedent:s,default:s},Symbol.toStringTag,{value:"Module"}));export{s as d,p as e};
//# sourceMappingURL=index-633d3215.js.map
