import{X as $,ab as z,l as P,Y as U,R as W}from"./entry.6dad9207.js";import{g as B,a as _,b as E,s as T,c as C,w as J,d as H,f as b}from"./query.f5804dcc.js";import{p as q}from"./index.a6ef77ff.js";import{u as L}from"./preview.585ad63c.js";import"./utils.cd6b6d8d.js";const k="memory",G=()=>{const r=new Map;return{name:k,options:{},hasItem(t){return r.has(t)},getItem(t){return r.get(t)||null},getItemRaw(t){return r.get(t)||null},setItem(t,n){r.set(t,n)},setItemRaw(t,n){r.set(t,n)},removeItem(t){r.delete(t)},getKeys(){return Array.from(r.keys())},clear(){r.clear()},dispose(){r.clear()}}};function Z(r){return!r||typeof r.then!="function"?Promise.resolve(r):r}function p(r,...t){try{return Z(r(...t))}catch(n){return Promise.reject(n)}}function F(r){const t=typeof r;return r===null||t!=="object"&&t!=="function"}function V(r){const t=Object.getPrototypeOf(r);return!t||t.isPrototypeOf(Object)}function S(r){if(F(r))return String(r);if(V(r)||Array.isArray(r))return JSON.stringify(r);if(typeof r.toJSON=="function")return S(r.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function N(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const R="base64:";function X(r){if(typeof r=="string")return r;N();const t=Buffer.from(r).toString("base64");return R+t}function Q(r){return typeof r!="string"||!r.startsWith(R)?r:(N(),Buffer.from(r.slice(R.length),"base64"))}const ee=["hasItem","getItem","getItemRaw","setItem","setItemRaw","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function te(r,t){if(t=A(t),!t)return r;const n={...r};for(const i of ee)n[i]=(o="",...u)=>r[i](t+o,...u);return n.getKeys=(i="",...o)=>r.getKeys(t+i,...o).then(u=>u.map(f=>f.slice(t.length))),n}function y(r){return r?r.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function re(...r){return y(r.join(":"))}function A(r){return r=y(r),r?r+":":""}const ne="memory",ie=()=>{const r=new Map;return{name:ne,options:{},hasItem(t){return r.has(t)},getItem(t){return r.get(t)||null},getItemRaw(t){return r.get(t)||null},setItem(t,n){r.set(t,n)},setItemRaw(t,n){r.set(t,n)},removeItem(t){r.delete(t)},getKeys(){return Array.from(r.keys())},clear(){r.clear()},dispose(){r.clear()}}};function ae(r={}){const t={mounts:{"":r.driver||ie()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=e=>{for(const a of t.mountpoints)if(e.startsWith(a))return{base:a,relativeKey:e.slice(a.length),driver:t.mounts[a]};return{base:"",relativeKey:e,driver:t.mounts[""]}},i=(e,a)=>t.mountpoints.filter(s=>s.startsWith(e)||a&&e.startsWith(s)).map(s=>({relativeBase:e.length>s.length?e.slice(s.length):void 0,mountpoint:s,driver:t.mounts[s]})),o=(e,a)=>{if(t.watching){a=y(a);for(const s of t.watchListeners)s(e,a)}},u=async()=>{if(!t.watching){t.watching=!0;for(const e in t.mounts)t.unwatch[e]=await M(t.mounts[e],o,e)}},f=async()=>{if(t.watching){for(const e in t.unwatch)await t.unwatch[e]();t.unwatch={},t.watching=!1}},g=(e,a,s)=>{const c=new Map,l=m=>{let d=c.get(m.base);return d||(d={driver:m.driver,base:m.base,items:[]},c.set(m.base,d)),d};for(const m of e){const d=typeof m=="string",v=y(d?m:m.key),w=d?void 0:m.value,I=d||!m.options?a:{...a,...m.options},O=n(v);l(O).items.push({key:v,value:w,relativeKey:O.relativeKey,options:I})}return Promise.all([...c.values()].map(m=>s(m))).then(m=>m.flat())},h={hasItem(e,a={}){e=y(e);const{relativeKey:s,driver:c}=n(e);return p(c.hasItem,s,a)},getItem(e,a={}){e=y(e);const{relativeKey:s,driver:c}=n(e);return p(c.getItem,s,a).then(l=>$(l))},getItems(e,a){return g(e,a,s=>s.driver.getItems?p(s.driver.getItems,s.items.map(c=>({key:c.relativeKey,options:c.options})),a).then(c=>c.map(l=>({key:re(s.base,l.key),value:$(l.value)}))):Promise.all(s.items.map(c=>p(s.driver.getItem,c.relativeKey,c.options).then(l=>({key:c.key,value:$(l)})))))},getItemRaw(e,a={}){e=y(e);const{relativeKey:s,driver:c}=n(e);return c.getItemRaw?p(c.getItemRaw,s,a):p(c.getItem,s,a).then(l=>Q(l))},async setItem(e,a,s={}){if(a===void 0)return h.removeItem(e);e=y(e);const{relativeKey:c,driver:l}=n(e);l.setItem&&(await p(l.setItem,c,S(a),s),l.watch||o("update",e))},async setItems(e,a){await g(e,a,async s=>{s.driver.setItems&&await p(s.driver.setItems,s.items.map(c=>({key:c.relativeKey,value:S(c.value),options:c.options})),a),s.driver.setItem&&await Promise.all(s.items.map(c=>p(s.driver.setItem,c.relativeKey,S(c.value),c.options)))})},async setItemRaw(e,a,s={}){if(a===void 0)return h.removeItem(e,s);e=y(e);const{relativeKey:c,driver:l}=n(e);if(l.setItemRaw)await p(l.setItemRaw,c,a,s);else if(l.setItem)await p(l.setItem,c,X(a),s);else return;l.watch||o("update",e)},async removeItem(e,a={}){typeof a=="boolean"&&(a={removeMata:a}),e=y(e);const{relativeKey:s,driver:c}=n(e);c.removeItem&&(await p(c.removeItem,s,a),a.removeMata&&await p(c.removeItem,s+"$",a),c.watch||o("remove",e))},async getMeta(e,a={}){typeof a=="boolean"&&(a={nativeOnly:a}),e=y(e);const{relativeKey:s,driver:c}=n(e),l=Object.create(null);if(c.getMeta&&Object.assign(l,await p(c.getMeta,s,a)),!a.nativeOnly){const m=await p(c.getItem,s+"$",a).then(d=>$(d));m&&typeof m=="object"&&(typeof m.atime=="string"&&(m.atime=new Date(m.atime)),typeof m.mtime=="string"&&(m.mtime=new Date(m.mtime)),Object.assign(l,m))}return l},setMeta(e,a,s={}){return this.setItem(e+"$",a,s)},removeMeta(e,a={}){return this.removeItem(e+"$",a)},async getKeys(e,a={}){e=A(e);const s=i(e,!0);let c=[];const l=[];for(const m of s){const v=(await p(m.driver.getKeys,m.relativeBase,a)).map(w=>m.mountpoint+y(w)).filter(w=>!c.some(I=>w.startsWith(I)));l.push(...v),c=[m.mountpoint,...c.filter(w=>!w.startsWith(m.mountpoint))]}return e?l.filter(m=>m.startsWith(e)&&!m.endsWith("$")):l.filter(m=>!m.endsWith("$"))},async clear(e,a={}){e=A(e),await Promise.all(i(e,!1).map(async s=>{if(s.driver.clear)return p(s.driver.clear,s.relativeBase,a);if(s.driver.removeItem){const c=await s.driver.getKeys(s.relativeBase||"",a);return Promise.all(c.map(l=>s.driver.removeItem(l,a)))}}))},async dispose(){await Promise.all(Object.values(t.mounts).map(e=>x(e)))},async watch(e){return await u(),t.watchListeners.push(e),async()=>{t.watchListeners=t.watchListeners.filter(a=>a!==e),t.watchListeners.length===0&&await f()}},async unwatch(){t.watchListeners=[],await f()},mount(e,a){if(e=A(e),e&&t.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(t.mountpoints.push(e),t.mountpoints.sort((s,c)=>c.length-s.length)),t.mounts[e]=a,t.watching&&Promise.resolve(M(a,o,e)).then(s=>{t.unwatch[e]=s}).catch(console.error),h},async unmount(e,a=!0){e=A(e),!(!e||!t.mounts[e])&&(t.watching&&e in t.unwatch&&(t.unwatch[e](),delete t.unwatch[e]),a&&await x(t.mounts[e]),t.mountpoints=t.mountpoints.filter(s=>s!==e),delete t.mounts[e])},getMount(e=""){e=y(e)+":";const a=n(e);return{driver:a.driver,base:a.base}},getMounts(e="",a={}){return e=y(e),i(e,a.parents).map(c=>({driver:c.driver,base:c.mountpoint}))}};return h}function M(r,t,n){return r.watch?r.watch((i,o)=>t(i,n+o)):()=>{}}async function x(r){typeof r.dispose=="function"&&await p(r.dispose)}function se(r={}){const t=oe(n,r.operators);function n(i,o){return typeof o!="object"||o instanceof RegExp?t.$eq(i,o):Object.keys(o||{}).every(u=>{const f=o[u];if(u.startsWith("$")&&t[u]){const g=t[u];return typeof g=="function"?g(i,f):!1}return n(B(i,u),f)})}return n}function oe(r,t={}){return{$match:(n,i)=>r(n,i),$eq:(n,i)=>i instanceof RegExp?i.test(n):n===i,$ne:(n,i)=>i instanceof RegExp?!i.test(n):n!==i,$not:(n,i)=>!r(n,i),$and:(n,i)=>(_(i,"$and requires an array as condition"),i.every(o=>r(n,o))),$or:(n,i)=>(_(i,"$or requires an array as condition"),i.some(o=>r(n,o))),$in:(n,i)=>E(i).some(o=>Array.isArray(n)?r(n,{$contains:o}):r(n,o)),$contains:(n,i)=>(n=Array.isArray(n)?n:String(n),E(i).every(o=>n.includes(o))),$icontains:(n,i)=>{if(typeof i!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),E(i).every(o=>n.includes(o.toLocaleLowerCase()))},$containsAny:(n,i)=>(_(i,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),i.some(o=>n.includes(o))),$exists:(n,i)=>i?typeof n<"u":typeof n>"u",$type:(n,i)=>typeof n===String(i),$regex:(n,i)=>{if(!(i instanceof RegExp)){const o=String(i).match(/\/(.*)\/([dgimsuy]*)$/);i=o?new RegExp(o[1],o[2]||""):new RegExp(i)}return i.test(String(n||""))},$lt:(n,i)=>n<i,$lte:(n,i)=>n<=i,$gt:(n,i)=>n>i,$gte:(n,i)=>n>=i,...t||{}}}function D(r){const t=se(),n=(o,{query:u,before:f,after:g})=>{const h=typeof u=="string"?{_path:u}:u,e=o.findIndex(s=>t(s,h));f=f??1,g=g??1;const a=new Array(f+g).fill(null,0);return e===-1?a:a.map((s,c)=>o[e-f+c+ +(c>=f)]||null)},i=[(o,u)=>o.filter(f=>E(u.where).every(g=>t(f,g))),(o,u)=>E(u.sort).forEach(f=>T(o,f)),(o,u)=>u.surround?n(o,u.surround):o,(o,u)=>u.skip?o.slice(u.skip):o,(o,u)=>u.limit?o.slice(0,u.limit):o,(o,u)=>C(J(u.without))(o),(o,u)=>C(H(u.only))(o)];return async o=>{const u=await r(),f=o.params(),g=i.reduce((h,e)=>e(h,f)||h,u);return f.first?g[0]:g}}var ue={exports:{}};(function(r,t){(function(n,i,o){r.exports=o(),r.exports.default=o()})("slugify",z,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function o(u,f){if(typeof u!="string")throw new Error("slugify: string argument expected");f=typeof f=="string"?{replacement:f}:f||{};var g=i[f.locale]||{},h=f.replacement===void 0?"-":f.replacement,e=f.trim===void 0?!0:f.trim,a=u.normalize().split("").reduce(function(s,c){var l=g[c];return l===void 0&&(l=n[c]),l===void 0&&(l=c),l===h&&(l=" "),s+l.replace(f.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return f.strict&&(a=a.replace(/[^A-Za-z0-9\s]/g,"")),e&&(a=a.trim()),a=a.replace(/\s+/g,h),f.lower&&(a=a.toLowerCase()),a}return o.extend=function(u){Object.assign(n,u)},o})})(ue);const ce=r=>r.split(/[\s-]/g).map(q).join(" ");function le(r,t){const{navigation:n}=P().public.content,i=u=>({...me(["title",...n.fields])(u),...he(u==null?void 0:u.navigation)?u.navigation:{}}),o=r.sort((u,f)=>u._path.localeCompare(f._path)).reduce((u,f)=>{const g=f._path.substring(1).split("/"),h=f._id.split(":").slice(1),e=!!h[h.length-1].match(/([1-9][0-9]*\.)?index.md/g),a=l=>({title:l.title,_path:l._path,_file:l._file,children:[],...i(l),...l._draft?{_draft:!0}:{}}),s=a(f);if(e){const l=t[s._path];if(typeof(l==null?void 0:l.navigation)<"u"&&!(l!=null&&l.navigation))return u;if(f._path!=="/"){const m=a(f);s.children.push(m)}Object.assign(s,i(l))}return g.length===1?(u.push(s),u):(g.slice(0,-1).reduce((l,m,d)=>{const v="/"+g.slice(0,d+1).join("/"),w=t[v];if(typeof(w==null?void 0:w.navigation)<"u"&&!w.navigation)return[];let I=l.find(O=>O._path===v);return I||(I={title:ce(m),_path:v,_file:f._file,children:[],...i(w)},l.push(I)),I.children},u).push(s),u)},[]);return Y(o)}const fe=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function Y(r){var n;const t=r.sort((i,o)=>fe.compare(i._file,o._file));for(const i of t)(n=i.children)!=null&&n.length?Y(i.children):delete i.children,delete i._file;return r}function me(r){return t=>(t=t||{},r&&r.length?r.filter(n=>typeof t[n]<"u").reduce((n,i)=>Object.assign(n,{[i]:t[i]}),{}):t)}function he(r){return Object.prototype.toString.call(r)==="[object Object]"}const ge=r=>U(r,P().public.content.api.baseURL),pe=te(ae({driver:G()}),"@content");function ye(r){async function t(){const n=new Set(await r.getKeys("cache:")),i=L().getPreviewToken();if(i){const u=await r.getItem(`${i}$`).then(h=>h||{});if(Array.isArray(u.ignoreSources)){const h=u.ignoreSources.map(e=>`cache:${e.trim()}:`);for(const e of n)h.some(a=>e.startsWith(a))&&n.delete(e)}const f=await r.getKeys(`${i}:`),g=await Promise.all(f.map(h=>r.getItem(h)));for(const h of g)n.delete(`cache:${h._id}`),h.__deleted||n.add(`${i}:${h._id}`)}return await Promise.all(Array.from(n).map(u=>r.getItem(u)))}return{storage:r,fetch:D(t),query:n=>b(D(t),n)}}let j=null,K=null;async function de(){return K?await K:j||(K=we(),j=await K),j}async function we(){const r=W(),{content:t}=P().public,n=ye(pe),i=await n.storage.getItem("integrity");if(t.integrity!==+(i||0)){const{contents:o,navigation:u}=await $fetch(ge(t.integrity?`cache.${t.integrity}.json`:"cache.json"));await Promise.all(o.map(f=>n.storage.setItem(`cache:${f._id}`,f))),await n.storage.setItem("navigation",u),await n.storage.setItem("integrity",t.integrity)}return await r.callHook("content:storage",n.storage),n}async function $e(r){const t=await de();if(!L().getPreviewToken()&&Object.keys(r||{}).length===0)return t.storage.getItem("navigation");const n=await t.query(r).where({_partial:!1,navigation:{$ne:!1}}).find(),o=(await t.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((u,f)=>{var h;((h=f.title)==null?void 0:h.toLowerCase())==="dir"&&(f.title=void 0);const g=f._path.split("/").slice(0,-1).join("/")||"/";return u[g]={...f,...f.body},u},{});return le(n,o)}export{pe as contentStorage,ye as createDB,$e as generateNavigation,de as useContentDatabase};
