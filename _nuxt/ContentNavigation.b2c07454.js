import{u as f}from"./asyncData.161c4e2f.js";import{i as v,_ as g,e as d,t as l,j as h,k as _,f as y,h as r}from"./entry.799960b2.js";import{q as w,h as p,e as C,j as P}from"./query.c90ff57b.js";import{_ as $}from"./nuxt-link.ee60c1f7.js";import{w as c,s as j,u as N}from"./utils.4f1c5041.js";import{u as T}from"./preview.57af8eb8.js";const D=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(j())return(await g(()=>import("./client-db.5fa8512a.js"),["./client-db.5fa8512a.js","./entry.799960b2.js","./entry.e9d4e487.css","./query.c90ff57b.js","./utils.4f1c5041.js","./preview.57af8eb8.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:P(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},R=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{R as default};