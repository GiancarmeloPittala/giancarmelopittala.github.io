import x from"./Icon.be5f88cf.js";import{_ as f}from"./Card.0e38c4c7.js";import{_ as g}from"./Link.114d09a0.js";import{_ as h}from"./SideMenu.vue.1d56318f.js";import{n as v,i as k,q as y,u as b,c as _,a as t,S as w,b as o,t as $,F as A,r as B,k as S,o as r,s as C,w as q}from"./entry.52bf1381.js";import{q as L}from"./query.62852ff9.js";import"./preview.010a7896.js";const F={class:"dark:bg-black dark:text-gray-200 text-black min-h-screen"},H={class:"flex flex-col gap-8 xl:flex-row relative pt-16 xl:pt-20 transition-all px-8 xl:pl-14"},I={class:"flex-1 pr-0 sm:pr-24 xl:pr-0"},N={class:"xl:pr-24 max-w-[600px]"},V={class:"grid gap-8"},D={class:"flex gap-2 items-center border border-gray-400 rounded-3xl px-3 py-1.5"},Q={__name:"article",async setup(E){let e,n;const{locale:a}=v();async function l(){return await L(`${a.value==="it"?"":`/${a.value}`}/blog`,"articles").only(["_path","title","description","img","categories","alt"]).sort({cAt:-1}).limit(5).find()}let i=([e,n]=k(()=>l()),e=await e,n(),e);return y(a,async()=>i=await l()),b({htmlAttrs:{lang:a}}),(c,M)=>{const p=x,m=f,d=g,u=h;return r(),_("div",null,[t("main",F,[t("div",H,[t("div",I,[w(c.$slots,"default")]),t("div",N,[t("div",V,[t("div",null,[t("button",D,[o(p,{class:"w-6 h-6 dark:text-gray-400 group-hover:text-verde transition-colors",name:"material-symbols:drive-file-rename-outline-outline"}),t("span",null,$(c.$t("article.lastArticle")),1)])]),(r(!0),_(A,null,B(S(i),s=>(r(),C(d,{link:{to:`/blog/articles/${String(s._path).split("/").slice(-1)}`},key:s._path},{default:q(()=>[o(m,{class:"hover:text-gray-50 transition-all hover:translate-x-2 hover:bg-black-400 rounded-xl",article:s},null,8,["article"])]),_:2},1032,["link"]))),128))])]),o(u)])])])}}};export{Q as default};
