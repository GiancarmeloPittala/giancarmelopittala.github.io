import{f,k as p,o as a,c,j as h,C as i}from"./entry.6ffa044e.js";function d(t){let o,n=t[0],e=1;for(;e<t.length;){const s=t[e],l=t[e+1];if(e+=2,(s==="optionalAccess"||s==="optionalCall")&&n==null)return;s==="access"||s==="optionalAccess"?(o=n,n=l(n)):(s==="call"||s==="optionalCall")&&(n=l((...u)=>n.call(o,...u)),o=void 0)}return n}const _=["id"],m=["href"],r=3,C=f({__name:"ProseH3",props:{id:{}},setup(t){const{anchorLinks:o}=p().public.content,n=d([o,"optionalAccess",e=>e.depth])>=r&&!d([o,"optionalAccess",e=>e.exclude,"access",e=>e.includes,"call",e=>e(r)]);return(e,s)=>(a(),c("h3",{id:e.id},[e.id&&h(n)?(a(),c("a",{key:0,href:`#${e.id}`},[i(e.$slots,"default")],8,m)):i(e.$slots,"default",{key:1})],8,_))}});export{C as default};
