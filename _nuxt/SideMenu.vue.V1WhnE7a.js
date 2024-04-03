import{o as d,c as h,a as e,a0 as g,_ as V,v as b,g as w,q as B,aa as L,j as f,b as t,w as s,k as c,t as j,d as C,e as k,z as S,E as N,G as M,ab as P}from"./entry.bLYTfESq.js";import v from"./Icon.zSOim_dr.js";import{_ as I}from"./Link.kjS_1JFO.js";const H={class:"group block transition-colors hover:border-primary dark:text-gray-400 bg-white dark:bg-black xl:w-12 xl:h-12 relative focus:outline-none border border-gray-400 rounded-full w-8 h-8"},T=e("span",{class:"sr-only"},"Open main menu",-1),z={class:"block w-3 xl:w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"},A={__name:"openButton",props:{modelValue:Boolean},emits:["update:modelValue"],setup(n,{emit:l}){return(r,p)=>(d(),h("button",H,[T,e("div",z,[e("span",{"aria-hidden":"true",class:g(["block absolute h-[1px] xl:h-0.5 w-3 xl:w-5 bg-current group-hover:bg-verde transform transition duration-500 ease-in-out",{"rotate-45":n.modelValue," -translate-y-1.5":!n.modelValue}])},null,2),e("span",{"aria-hidden":"true",class:g(["block absolute h-[1px] xl:h-0.5 w-3 xl:w-5 bg-current group-hover:bg-verde transform transition duration-500 ease-in-out",{"opacity-0":n.modelValue}])},null,2),e("span",{"aria-hidden":"true",class:g(["block absolute h-[1px] xl:h-0.5 w-3 xl:w-5 bg-current group-hover:bg-verde transform transition duration-500 ease-in-out",{"-rotate-45":n.modelValue," translate-y-1.5":!n.modelValue}])},null,2)])]))}},D=A,E={},G={class:"rounded-full flex items-center"};function O(n,l){const r=v;return d(),h("button",G,[n.$colorMode.preference=="ligth"?(d(),b(r,{key:0,onClick:l[0]||(l[0]=p=>n.$colorMode.preference="dark"),class:"w-[18px] h-[18px] text-yellow-500",name:"material-symbols:sunny-rounded"})):(d(),b(r,{key:1,onClick:l[1]||(l[1]=p=>n.$colorMode.preference="ligth"),class:"w-[18px] h-[18px]",name:"ri:moon-line"}))])}const Z=V(E,[["render",O]]),q={class:"relative"},R=w({__name:"LangSwitcher",setup(n){const{availableLocales:l,locale:r}=B(),p=L(),i=f(()=>l.find(x=>x!=r.value)||"it"),_={it:"openmoji:flag-italy",en:"twemoji:flag-for-flag-united-states"},m={it:"Italiano",en:"English"},o=f(()=>r.value==="en"?_.it:_.en),a=f(()=>r.value==="en"?m.it:m.en);return(x,y)=>{const u=v,$=k;return d(),h("div",q,[t($,{to:c(p)(c(i)),class:"group flex w-full items-center rounded-md px-2 py-2 text-sm"},{default:s(()=>[t(u,{class:"mr-2 h-5 w-5","aria-hidden":"true",name:c(o)},null,8,["name"]),C(" "+j(c(a)),1)]),_:1},8,["to"])])}}}),U={class:"fixed top-4 xl:top-20 right-4 xl:right-16 transition-all"},F={class:"grid gap-32"},J={class:"flex flex-row-reverse gap-2 items-center xl:flex-col"},K={class:"flex items-center justify-center dark:text-gray-400 w-8 h-8 xl:w-12 xl:h-12 relative focus:outline-none border border-gray-400 rounded-full dark:bg-black bg-white"},Q={class:"hidden border border-gray-400 rounded-full p-2 py-8 gap-6 lg:grid"},W={class:"justify-center flex relative"},X={class:"group flex"},Y=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Home",-1),ee={class:"justify-center flex relative"},te={class:"group flex"},oe=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"About",-1),se={class:"justify-center flex relative"},ae={class:"group flex"},re=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Services",-1),ne={class:"justify-center flex relative"},le={class:"group flex"},ie=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Skills",-1),ce={class:"justify-center flex relative"},de={class:"group flex"},pe=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Portfolio",-1),ue={class:"justify-center flex relative"},he={class:"group flex"},_e=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Blog",-1),me={class:"justify-center flex relative"},xe={class:"group flex"},ge=e("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Contact",-1),fe={class:"max-w-[300px] dark:text-gray-400 bg-white dark:bg-black h-screen overflow-y-auto ml-auto p-12"},ve=e("h4",{class:"mb-12 text-xl"},"Menu",-1),ye={class:"gap-6 grid"},be={class:"group"},we=e("span",{class:"group-hover:text-verde"},"Home",-1),ke={class:"group"},$e=e("span",{class:"group-hover:text-verde"},"About",-1),Ve={class:"group"},Be=e("span",{class:"group-hover:text-verde"},"Services",-1),Le={class:"group"},je=e("span",{class:"group-hover:text-verde"},"Skills",-1),Ce={class:"group"},Se=e("span",{class:"group-hover:text-verde"},"Portfolio",-1),Ne={class:"group"},Me=e("span",{class:"group-hover:text-verde"},"Blog",-1),Pe={class:"group"},Ie=e("span",{class:"group-hover:text-verde"},"Contact",-1),He=e("h4",{class:"text-xl mt-12 mb-4"},"Social",-1),Te={class:"flex gap-4"},ze={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://github.com/GiancarmeloPittala",target:"_blank",rel:"noopener noreferrer"},Ae={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://www.linkedin.com/in/giancarmelo-pittal%C3%A0",target:"_blank",rel:"noopener noreferrer"},De={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://instagram.com/giancarmelopittala?igshid=ZDdkNTZiNTM=",target:"_blank",rel:"noopener noreferrer"},Ee={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://t.me/Giancarmelo_P",target:"_blank",rel:"noopener noreferrer"},Ge=e("h4",{class:"text-xl mt-12 mb-4"},"Languages",-1),Oe=e("h4",{class:"mt-12 mb-4 text-xl"},"Link",-1),Ze={class:"gap-6 grid"},qe={class:"group"},Re=e("span",{class:"group-hover:text-verde"},"Privacy policy",-1),Ke=w({__name:"SideMenu",props:{open:{type:Boolean,default:()=>!1}},setup(n){const r=S(n.open);return(p,i)=>{const _=D,m=Z,o=v,a=k,x=R,y=I;return d(),h("header",U,[e("div",F,[e("div",J,[e("div",{onClick:i[1]||(i[1]=u=>r.value=!c(r))},[t(_,{modelValue:c(r),"onUpdate:modelValue":i[0]||(i[0]=u=>N(r)?r.value=u:null)},null,8,["modelValue"])]),e("span",K,[t(m)])]),e("nav",null,[e("ul",Q,[e("li",W,[t(a,{to:{path:"/",hash:"#introduce"}},{default:s(()=>[e("div",X,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"ic:twotone-house"}),Y])]),_:1})]),e("li",ee,[t(a,{to:{path:"/",hash:"#about"}},{default:s(()=>[e("div",te,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"material-symbols:person-2-outline-rounded"}),oe])]),_:1})]),e("li",se,[t(a,{to:{path:"/",hash:"#service"}},{default:s(()=>[e("div",ae,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"ri:file-paper-2-fill"}),re])]),_:1})]),e("li",ne,[t(a,{to:{path:"/",hash:"#skils"}},{default:s(()=>[e("div",le,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"ic:sharp-code"}),ie])]),_:1})]),e("li",ce,[t(a,{to:{path:"/",hash:"#portfolio"}},{default:s(()=>[e("div",de,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"gala:terminal"}),pe])]),_:1})]),e("li",ue,[t(a,{to:{path:"/",hash:"#blog"}},{default:s(()=>[e("div",he,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"carbon:blog"}),_e])]),_:1})]),e("li",me,[t(a,{to:{path:"/",hash:"#contact"}},{default:s(()=>[e("div",xe,[t(o,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"mdi:email-box"}),ge])]),_:1})])])])]),t(P,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform translate-x-full","enter-to-class":"transform translate-x-0","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform translate-x-0","leave-to-class":"transform translate-x-full"},{default:s(()=>[c(r)?(d(),h("div",{key:0,class:"fixed left-0 bottom-0 top-0 right-0 bg-gray-400 bg-opacity-20",onClick:i[2]||(i[2]=u=>r.value=!1)},[e("nav",fe,[ve,e("ul",ye,[e("li",be,[t(a,{to:{path:"/",hash:"#introduce"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"ic:twotone-house"}),we]),_:1})]),e("li",ke,[t(a,{to:{path:"/",hash:"#about"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"material-symbols:person-2-outline-rounded"}),$e]),_:1})]),e("li",Ve,[t(a,{to:{path:"/",hash:"#service"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"ri:file-paper-2-fill"}),Be]),_:1})]),e("li",Le,[t(a,{to:{path:"/",hash:"#skils"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"ic:sharp-code"}),je]),_:1})]),e("li",Ce,[t(a,{to:{path:"/",hash:"#portfolio"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"gala:terminal"}),Se]),_:1})]),e("li",Ne,[t(a,{to:{path:"/",hash:"#blog"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"carbon:blog"}),Me]),_:1})]),e("li",Pe,[t(a,{to:{path:"/",hash:"#contact"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"mdi:email-box"}),Ie]),_:1})])]),He,e("div",Te,[e("a",ze,[t(o,{class:"w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"bytesize:github"})]),e("a",Ae,[t(o,{class:"w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"mdi:linkedin"})]),e("a",De,[t(o,{class:"w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"mdi:instagram"})]),e("a",Ee,[t(o,{class:"w-4 h-4 group-hover:text-verde absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"line-md:telegram"})])]),Ge,t(x),Oe,e("ul",Ze,[e("li",qe,[t(y,{link:{to:"/privacy-policy"},class:"flex gap-4 items-center"},{default:s(()=>[t(o,{class:"w-6 h-6 group-hover:text-verde transition-colors",name:"iconoir:privacy-policy"}),Re]),_:1})])])])])):M("",!0)]),_:1})])}}});export{Ke as _,R as a};