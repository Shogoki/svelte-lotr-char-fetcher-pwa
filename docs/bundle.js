var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function l(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function m(t){p=t}const $=[],g=[],v=[],y=[],x=Promise.resolve();let b=!1;function _(t){v.push(t)}function k(){const t=new Set;do{for(;$.length;){const t=$.shift();m(t),w(t.$$)}for(;g.length;)g.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];t.has(n)||(n(),t.add(n))}v.length=0}while($.length);for(;y.length;)y.pop()();b=!1}function w(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(_))}const C=new Set;function E(t,e){t.$$.dirty||($.push(t),b||(b=!0,x.then(k)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function j(a,o,u,i,s,f){const d=p;m(a);const h=o.props||{},l=a.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:null};let $=!1;var g,v,y;l.ctx=u?u(a,h,(t,e,n=e)=>(l.ctx&&s(l.ctx[t],l.ctx[t]=n)&&(l.bound[t]&&l.bound[t](n),$&&E(a,t)),e)):h,l.update(),$=!0,r(l.before_update),l.fragment=i(l.ctx),o.target&&(o.hydrate?l.fragment.l((y=o.target,Array.from(y.childNodes))):l.fragment.c(),o.intro&&((g=a.$$.fragment)&&g.i&&(C.delete(g),g.i(v))),function(t,n,a){const{fragment:o,on_mount:u,on_destroy:i,after_update:s}=t.$$;o.m(n,a),_(()=>{const n=u.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(_)}(a,o.target,o.anchor),k()),m(d)}class z{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function A(e){var n,r,c,a,p,m,$,g,v,y,x,b,_,k,w,C,E,j,z,A,B,N=e.character.name+"",R=e.character.realm+"",L=e.character.race+"",M=e.character.gender+"";return{c(){var t,o,u,i;(n=s("h1")).textContent="LOTR Character Fetcher",r=d(),c=s("div"),a=s("div"),p=s("h2"),m=f(N),$=d(),g=s("p"),v=f("Realm: "),y=f(R),x=d(),b=s("p"),_=f("Race: "),k=f(L),w=d(),C=s("p"),E=f("gender: "),j=f(M),z=d(),(A=s("button")).textContent="Fetch new Character",h(n,"class","svelte-acpdzx"),h(a,"class","character svelte-acpdzx"),h(c,"class","container svelte-acpdzx"),t=A,o="click",u=e.clickButton,t.addEventListener(o,u,i),B=(()=>t.removeEventListener(o,u,i))},m(t,e){u(t,n,e),u(t,r,e),u(t,c,e),o(c,a),o(a,p),o(p,m),o(a,$),o(a,g),o(g,v),o(g,y),o(a,x),o(a,b),o(b,_),o(b,k),o(a,w),o(a,C),o(C,E),o(C,j),o(a,z),o(a,A)},p(t,e){t.character&&N!==(N=e.character.name+"")&&l(m,N),t.character&&R!==(R=e.character.realm+"")&&l(y,R),t.character&&L!==(L=e.character.race+"")&&l(k,L),t.character&&M!==(M=e.character.gender+"")&&l(j,M)},i:t,o:t,d(t){t&&(i(n),i(r),i(c)),B()}}}async function B(){const t=await fetch("https://the-one-api.herokuapp.com/v1/character",{headers:{Authorization:"Bearer yrayQN-nPvr69xjie5bX"}}),e=await t.json();return e.docs[Math.floor(Math.random()*e.docs.length)]}function N(t,e,n){let{name:r}=e,c={};return B().then(t=>n("character",c=t)),t.$set=(t=>{"name"in t&&n("name",r=t.name)}),{name:r,character:c,clickButton:function(){B().then(t=>n("character",c=t))}}}const R=new class extends z{constructor(t){super(),j(this,t,N,A,a,["name"])}}({target:document.body,props:{name:"User"}});return"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(function(){console.log("Service Worker Registered")}),R}();
//# sourceMappingURL=bundle.js.map
