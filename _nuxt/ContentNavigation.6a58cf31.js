import{u as f}from"./asyncData.0c65dc75.js";import{i as v,_ as d,e as l,t as _,j as g,k as h,f as y,h as r}from"./entry.9913744b.js";import{q as w,h as u,e as C,j as $}from"./query.884f41b4.js";import{_ as j}from"./nuxt-link.49a31275.js";import{w as c,s as N,u as P,a as T}from"./utils.2457703b.js";import"./Icon.vue.fb491838.js";/* empty css                      *//* empty css                    */const x=async n=>{const{content:t}=v().public;typeof(n==null?void 0:n.params)!="function"&&(n=w(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(N())return(await d(()=>import("./client-db.c4ce67cf.js"),["./client-db.c4ce67cf.js","./entry.9913744b.js","./entry.0a5b3c1d.css","./utils.2457703b.js","./query.884f41b4.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:P("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const k=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=_(n),a=g(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await f(`content-navigation-${u(a.value)}`,()=>x(a.value));return{navigation:s}},render(n){const t=y(),{navigation:a}=n,s=o=>r(j,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,p+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{k as default};
