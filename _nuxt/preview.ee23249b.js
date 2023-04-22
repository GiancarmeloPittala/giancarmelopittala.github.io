import{r as m,s as v,C as g,v as d}from"./entry.6a4a4e5a.js";const h=decodeURIComponent,S=encodeURIComponent,y=/; */,p=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function k(t,r){if(typeof t!="string")throw new TypeError("argument str must be a string");let i={},e=r||{},n=t.split(y),a=e.decode||h;for(let o=0;o<n.length;o++){let s=n[o],l=s.indexOf("=");if(l<0)continue;let f=s.substr(0,l).trim(),c=s.substr(++l,s.length).trim();c[0]=='"'&&(c=c.slice(1,-1)),i[f]==null&&(i[f]=T(c,a))}return i}function w(t,r,i){let e=i||{},n=e.encode||S;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!p.test(t))throw new TypeError("argument name is invalid");let a=n(r);if(a&&!p.test(a))throw new TypeError("argument val is invalid");let o=t+"="+a;if(e.maxAge!=null){let s=e.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(s)}if(e.domain){if(!p.test(e.domain))throw new TypeError("option domain is invalid");o+="; Domain="+e.domain}if(e.path){if(!p.test(e.path))throw new TypeError("option path is invalid");o+="; Path="+e.path}if(e.expires){if(typeof e.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(o+="; HttpOnly"),e.secure&&(o+="; Secure"),e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function T(t,r){try{return r(t)}catch{return t}}const x={path:"/",watch:!0,decode:t=>g(decodeURIComponent(t)),encode:t=>encodeURIComponent(typeof t=="string"?t:JSON.stringify(t))};function u(t,r){var a;const i={...x,...r},e=C(i)||{},n=m(e[t]??((a=i.default)==null?void 0:a.call(i)));{const o=()=>{b(t,n.value,i)};i.watch?v(n,o,{deep:i.watch!=="shallow"}):o()}return n}function C(t={}){return k(document.cookie,t)}function E(t,r,i={}){return r==null?w(t,r,{...i,maxAge:-1}):w(t,r,i)}function b(t,r,i={}){document.cookie=E(t,r,i)}const R=()=>({isEnabled:()=>{const e=d().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||u("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>u("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{u("previewToken").value=e,d().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{R as u};
