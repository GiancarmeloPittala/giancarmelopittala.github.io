import{e as r,i as f,o,a as i,u as h,b as c}from"./entry.6a4a4e5a.js";function d(t){let s,n=t[0],l=1;for(;l<t.length;){const e=t[l],a=t[l+1];if(l+=2,(e==="optionalAccess"||e==="optionalCall")&&n==null)return;e==="access"||e==="optionalAccess"?(s=n,n=a(n)):(e==="call"||e==="optionalCall")&&(n=a((...u)=>n.call(s,...u)),s=void 0)}return n}const p=["id"],m=["href"],k=r({__name:"ProseH1",props:{id:null},setup(t){const{anchorLinks:n}=f().public.content,l=d([n,"optionalAccess",e=>e.depth])>=1&&!d([n,"optionalAccess",e=>e.exclude,"access",e=>e.includes,"call",e=>e(1)]);return(e,a)=>(o(),i("h1",{id:t.id},[t.id&&h(l)?(o(),i("a",{key:0,href:`#${t.id}`},[c(e.$slots,"default")],8,m)):c(e.$slots,"default",{key:1})],8,p))}});export{k as default};
