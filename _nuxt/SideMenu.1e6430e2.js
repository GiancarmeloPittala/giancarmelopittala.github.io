import{a6 as f,j as v,o as p,a as u,a2 as e,w as a,u as i,a4 as b,X as w,a3 as t,U as g,r as k,ae as V,a5 as L,af as S}from"./entry.6a4a4e5a.js";import x from"./Icon.ec685e6a.js";import{_ as y}from"./nuxt-link.72ad2a86.js";import{u as B,_ as $}from"./Link.93dc14dc.js";const j={class:"relative"},C={__name:"LangSwitcher",setup(l){const{locale:r,locales:d}=f(),n=B(),c=v(()=>d.value.filter(o=>o.code!==r.value));return(o,s)=>{const h=x,m=y;return p(),u("div",j,[e(m,{to:i(n)(i(c)[0].code),class:"group flex w-full items-center rounded-md px-2 py-2 text-sm"},{default:a(()=>[e(h,{class:"mr-2 h-5 w-5","aria-hidden":"true",name:i(c)[0].icon},null,8,["name"]),b(" "+w(i(c)[0].name),1)]),_:1},8,["to"])])}}},N={class:"group block transition-colors hover:border-primary text-gray-400 w-12 h-12 relative focus:outline-none border border-gray-400 rounded-full"},P=t("span",{class:"sr-only"},"Open main menu",-1),H={class:"block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"},T={__name:"openButton",props:{modelValue:Boolean},emits:["update:modelValue"],setup(l,{emit:r}){return(d,n)=>(p(),u("button",N,[P,t("div",H,[t("span",{"aria-hidden":"true",class:g(["block absolute h-0.5 w-5 bg-current group-hover:bg-primary transform transition duration-500 ease-in-out",{"rotate-45":l.modelValue," -translate-y-1.5":!l.modelValue}])},null,2),t("span",{"aria-hidden":"true",class:g(["block absolute h-0.5 w-5 bg-current group-hover:bg-primary transform transition duration-500 ease-in-out",{"opacity-0":l.modelValue}])},null,2),t("span",{"aria-hidden":"true",class:g(["block absolute h-0.5 w-5 bg-current group-hover:bg-primary transform transition duration-500 ease-in-out",{"-rotate-45":l.modelValue," translate-y-1.5":!l.modelValue}])},null,2)])]))}},A={class:"fixed top-16 xl:top-20 right-16 transition-all"},I={class:"grid gap-32"},M={class:"hidden border border-gray-200 rounded-full p-2 py-8 gap-6 lg:grid"},z={class:"justify-center flex relative"},D={class:"group flex"},G=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Home",-1),O={class:"justify-center flex relative"},U={class:"group flex"},Z=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"About",-1),E={class:"justify-center flex relative"},R={class:"group flex"},X=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Services",-1),q={class:"justify-center flex relative"},F={class:"group flex"},J=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Skills",-1),K={class:"justify-center flex relative"},Q={class:"group flex"},W=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Portfolio",-1),Y={class:"justify-center flex relative"},tt={class:"group flex"},et=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Blog",-1),ot={class:"justify-center flex relative"},at={class:"group flex"},st=t("span",{class:"group-hover:opacity-100 transition-opacity px-1 text-sm rounded-md absolute -left-[70px] opacity-0 top-1/2 -translate-y-1/2"},"Contact",-1),rt={class:"max-w-[300px] text-gray-400 bg-black h-screen overflow-y-auto ml-auto p-12"},nt=t("h4",{class:"mb-12 text-xl"},"Menu",-1),lt={class:"gap-6 grid"},it={class:"group"},ct=t("span",{class:"group-hover:text-primary"},"Home",-1),pt={class:"group"},ut=t("span",{class:"group-hover:text-primary"},"About",-1),dt={class:"group"},ht=t("span",{class:"group-hover:text-primary"},"Services",-1),mt={class:"group"},_t=t("span",{class:"group-hover:text-primary"},"Skills",-1),gt={class:"group"},xt=t("span",{class:"group-hover:text-primary"},"Portfolio",-1),yt={class:"group"},ft=t("span",{class:"group-hover:text-primary"},"Blog",-1),vt={class:"group"},bt=t("span",{class:"group-hover:text-primary"},"Contact",-1),wt=t("h4",{class:"text-xl mt-12 mb-4"},"Social",-1),kt={class:"flex gap-4"},Vt={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://github.com/GiancarmeloPittala",target:"_blank",rel:"noopener noreferrer"},Lt={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://www.linkedin.com/in/giancarmelo-pittal%C3%A0",target:"_blank",rel:"noopener noreferrer"},St={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://instagram.com/giancarmelopittala?igshid=ZDdkNTZiNTM=",target:"_blank",rel:"noopener noreferrer"},Bt={class:"border border-gray-400 hover:border-primary transition-colors group rounded-full p-4 relative",href:"https://t.me/Giancarmelo_P",target:"_blank",rel:"noopener noreferrer"},$t=t("h4",{class:"text-xl mt-12 mb-4"},"Languages",-1),jt=t("h4",{class:"mt-12 mb-4 text-xl"},"Link",-1),Ct={class:"gap-6 grid"},Nt={class:"group"},Pt=t("span",{class:"group-hover:text-primary"},"Privacy policy",-1),Mt={__name:"SideMenu",setup(l){const r=k(!1);return(d,n)=>{const c=T,o=x,s=y,h=C,m=$;return p(),u("header",A,[t("div",I,[t("div",{onClick:n[1]||(n[1]=_=>r.value=!i(r))},[e(c,{modelValue:i(r),"onUpdate:modelValue":n[0]||(n[0]=_=>V(r)?r.value=_:null)},null,8,["modelValue"])]),t("nav",null,[t("ul",M,[t("li",z,[e(s,{to:{path:"/",hash:"#introduce"}},{default:a(()=>[t("div",D,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"ic:twotone-house"}),G])]),_:1})]),t("li",O,[e(s,{to:{path:"/",hash:"#about"}},{default:a(()=>[t("div",U,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"material-symbols:person-2-outline-rounded"}),Z])]),_:1})]),t("li",E,[e(s,{to:{path:"/",hash:"#service"}},{default:a(()=>[t("div",R,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"ri:file-paper-2-fill"}),X])]),_:1})]),t("li",q,[e(s,{to:{path:"/",hash:"#skils"}},{default:a(()=>[t("div",F,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"ic:sharp-code"}),J])]),_:1})]),t("li",K,[e(s,{to:{path:"/",hash:"#portfolio"}},{default:a(()=>[t("div",Q,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"gala:terminal"}),W])]),_:1})]),t("li",Y,[e(s,{to:{path:"/",hash:"#blog"}},{default:a(()=>[t("div",tt,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"carbon:blog"}),et])]),_:1})]),t("li",ot,[e(s,{to:{path:"/",hash:"#contact"}},{default:a(()=>[t("div",at,[e(o,{class:"w-6 h-6 text-gray-400 group-hover:text-primary transition-colors",name:"mdi:email-box"}),st])]),_:1})])])])]),e(S,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform translate-x-full","enter-to-class":"transform translate-x-0","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform translate-x-0","leave-to-class":"transform translate-x-full"},{default:a(()=>[i(r)?(p(),u("div",{key:0,class:"fixed left-0 bottom-0 top-0 right-0 bg-gray-400 bg-opacity-20",onClick:n[2]||(n[2]=_=>r.value=!1)},[t("nav",rt,[nt,t("ul",lt,[t("li",it,[e(s,{to:{path:"/",hash:"#introduce"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"ic:twotone-house"}),ct]),_:1})]),t("li",pt,[e(s,{to:{path:"/",hash:"#about"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"material-symbols:person-2-outline-rounded"}),ut]),_:1})]),t("li",dt,[e(s,{to:{path:"/",hash:"#service"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"ri:file-paper-2-fill"}),ht]),_:1})]),t("li",mt,[e(s,{to:{path:"/",hash:"#skils"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"ic:sharp-code"}),_t]),_:1})]),t("li",gt,[e(s,{to:{path:"/",hash:"#portfolio"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"gala:terminal"}),xt]),_:1})]),t("li",yt,[e(s,{to:{path:"/",hash:"#blog"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"carbon:blog"}),ft]),_:1})]),t("li",vt,[e(s,{to:{path:"/",hash:"#contact"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"mdi:email-box"}),bt]),_:1})])]),wt,t("div",kt,[t("a",Vt,[e(o,{class:"w-4 h-4 group-hover:text-primary absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"bytesize:github"})]),t("a",Lt,[e(o,{class:"w-4 h-4 group-hover:text-primary absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"mdi:linkedin"})]),t("a",St,[e(o,{class:"w-4 h-4 group-hover:text-primary absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"mdi:instagram"})]),t("a",Bt,[e(o,{class:"w-4 h-4 group-hover:text-primary absolute inset-1/2 -translate-x-1/2 -translate-y-1/2",name:"line-md:telegram"})])]),$t,e(h),jt,t("ul",Ct,[t("li",Nt,[e(m,{link:{to:"/privacy-policy"},class:"flex gap-4 items-center"},{default:a(()=>[e(o,{class:"w-6 h-6 group-hover:text-primary transition-colors",name:"iconoir:privacy-policy"}),Pt]),_:1})])])])])):L("",!0)]),_:1})])}}};export{Mt as _,C as a};
