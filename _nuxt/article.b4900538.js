import x from"./Icon.7e6b85dc.js";import{_ as f}from"./Card.7973934f.js";import{_ as g}from"./Link.a996c632.js";import{_ as h}from"./SideMenu.vue.a6a1b415.js";import{q as v,i as k,s as y,u as b,o,c as _,a as t,I as w,b as r,t as $,F as A,r as B,k as C,v as S,w as q}from"./entry.bd341837.js";import{q as I}from"./query.19ca5425.js";import"./preview.49832828.js";const L={class:"dark:bg-black dark:text-gray-200 text-black min-h-screen"},F={class:"flex flex-col gap-8 xl:flex-row relative pt-16 xl:pt-20 transition-all px-8 xl:pl-14"},H={class:"flex-1 pr-0 sm:pr-24 xl:pr-0"},N={class:"xl:pr-24 max-w-[600px]"},V={class:"grid gap-8"},D={class:"flex gap-2 items-center border border-gray-400 rounded-3xl px-3 py-1.5"},Q={__name:"article",async setup(E){let e,n;const{locale:a}=v();async function l(){return await I(`${a.value==="it"?"":`/${a.value}`}/blog`,"articles").only(["_path","title","description","img","categories","alt"]).sort({cAt:-1}).limit(5).find()}let i=([e,n]=k(()=>l()),e=await e,n(),e);return y(a,async()=>i=await l()),b({htmlAttrs:{lang:a}}),(c,M)=>{const p=x,m=f,d=g,u=h;return o(),_("div",null,[t("main",L,[t("div",F,[t("div",H,[w(c.$slots,"default")]),t("div",N,[t("div",V,[t("div",null,[t("button",D,[r(p,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"material-symbols:drive-file-rename-outline-outline"}),t("span",null,$(c.$t("article.lastArticle")),1)])]),(o(!0),_(A,null,B(C(i),s=>(o(),S(d,{link:{to:`/blog/articles/${String(s._path).split("/").slice(-1)}`},key:s._path},{default:q(()=>[r(m,{class:"hover:text-gray-50 transition-all hover:translate-x-2 hover:bg-black-400 rounded-xl",article:s},null,8,["article"])]),_:2},1032,["link"]))),128))])]),r(u)])])])}}};export{Q as default};