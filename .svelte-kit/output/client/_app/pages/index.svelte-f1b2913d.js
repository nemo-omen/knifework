import{C as Lt,S as je,i as We,s as Xe,e as d,t as E,k as _,c as m,a as p,g as y,d as o,n as g,b as u,f as le,D as s,E as oe,h as ge,Q as dt,R as Ct,G as tt,T as Gt,U as jt,j as q,m as H,o as M,x as w,V as nt,W as rt,X as st,Y as et,u as I,Z as en,v as U,F as kt,_ as tn,r as mt,w as pt,A as nn,$ as Wt,l as Xt,a0 as rn}from"../chunks/vendor-33a2ae70.js";import{I as ne,m as vt}from"../chunks/Icon-61042554.js";const ht=Lt({}),sn=Lt("grid");function Kt(l,e,n){const t=l.slice();return t[4]=e[n],t}function Ft(l){let e,n,t=l[4].name+"",r,i,a,f,c,v=l[4].servings+"",h,$,b,re,z=l[4].preptime+"",V,k,j,W,Z,L=l[4].cooktime+"",B,C,ae,X,K;function ce(){return l[2](l[4])}return{c(){e=d("div"),n=d("h3"),r=E(t),i=_(),a=d("div"),f=d("p"),c=E("Servings: "),h=E(v),$=_(),b=d("p"),re=E("Prep Time: "),V=E(z),k=E(" minutes"),j=_(),W=d("p"),Z=E("Cook Time: "),B=E(L),C=E(" minutes"),ae=_(),this.h()},l(G){e=m(G,"DIV",{class:!0});var O=p(e);n=m(O,"H3",{});var J=p(n);r=y(J,t),J.forEach(o),i=g(O),a=m(O,"DIV",{class:!0});var T=p(a);f=m(T,"P",{});var P=p(f);c=y(P,"Servings: "),h=y(P,v),P.forEach(o),$=g(T),b=m(T,"P",{});var ee=p(b);re=y(ee,"Prep Time: "),V=y(ee,z),k=y(ee," minutes"),ee.forEach(o),j=g(T),W=m(T,"P",{});var x=p(W);Z=y(x,"Cook Time: "),B=y(x,L),C=y(x," minutes"),x.forEach(o),T.forEach(o),ae=g(O),O.forEach(o),this.h()},h(){u(a,"class","recipe-body"),u(e,"class","card")},m(G,O){le(G,e,O),s(e,n),s(n,r),s(e,i),s(e,a),s(a,f),s(f,c),s(f,h),s(a,$),s(a,b),s(b,re),s(b,V),s(b,k),s(a,j),s(a,W),s(W,Z),s(W,B),s(W,C),s(e,ae),X||(K=oe(e,"click",ce),X=!0)},p(G,O){l=G,O&1&&t!==(t=l[4].name+"")&&ge(r,t),O&1&&v!==(v=l[4].servings+"")&&ge(h,v),O&1&&z!==(z=l[4].preptime+"")&&ge(V,z),O&1&&L!==(L=l[4].cooktime+"")&&ge(B,L)},d(G){G&&o(e),X=!1,K()}}}function ln(l){let e,n=Object.values(l[0]),t=[];for(let r=0;r<n.length;r+=1)t[r]=Ft(Kt(l,n,r));return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=m(r,"DIV",{class:!0});var i=p(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(o),this.h()},h(){u(e,"class","card-grid")},m(r,i){le(r,e,i);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(r,[i]){if(i&3){n=Object.values(r[0]);let a;for(a=0;a<n.length;a+=1){const f=Kt(r,n,a);t[a]?t[a].p(f,i):(t[a]=Ft(f),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:dt,o:dt,d(r){r&&o(e),Ct(t,r)}}}function an(l,e,n){let t;tt(l,ht,f=>n(0,t=f));const r=Gt();function i(f){r("open",f)}return[t,i,f=>i(f.id)]}class on extends je{constructor(e){super();We(this,e,an,ln,Xe,{})}}function Qt(l,e,n){const t=l.slice();return t[5]=e[n],t}function Yt(l){let e,n,t;return{c(){e=d("img"),this.h()},l(r){e=m(r,"IMG",{class:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){u(e,"class","recipe-image svelte-1qgyeci"),jt(e.src,n=l[0].photourl)||u(e,"src",n),u(e,"width","600"),u(e,"height","350"),u(e,"alt",t=l[0].name)},m(r,i){le(r,e,i)},p(r,i){i&1&&!jt(e.src,n=r[0].photourl)&&u(e,"src",n),i&1&&t!==(t=r[0].name)&&u(e,"alt",t)},d(r){r&&o(e)}}}function Zt(l){let e,n=l[5].Ingredient.name+"",t;return{c(){e=d("li"),t=E(n),this.h()},l(r){e=m(r,"LI",{class:!0});var i=p(e);t=y(i,n),i.forEach(o),this.h()},h(){u(e,"class","svelte-1qgyeci")},m(r,i){le(r,e,i),s(e,t)},p(r,i){i&1&&n!==(n=r[5].Ingredient.name+"")&&ge(t,n)},d(r){r&&o(e)}}}function cn(l){let e,n,t,r=l[0].name+"",i,a,f,c,v,h,$,b,re,z,V,k,j,W,Z,L,B=l[0].servings+"",C,ae,X,K,ce,G,O=l[0].preptime+"",J,T,P,ee,x,te,ue,ie=l[0].cooktime+"",de,ye,he,Q,Ne,Me,$e,_e,me,fe,Re,pe,se,Ue,Te;v=new ne({props:{name:"edit"}}),b=new ne({props:{name:"close"}});let F=l[0].photourl&&Yt(l),we=l[0].ingredients,Y=[];for(let D=0;D<we.length;D+=1)Y[D]=Zt(Qt(l,we,D));return{c(){e=d("div"),n=d("div"),t=d("h2"),i=E(r),a=_(),f=d("div"),c=d("button"),q(v.$$.fragment),h=_(),$=d("button"),q(b.$$.fragment),re=_(),z=d("div"),F&&F.c(),V=_(),k=d("div"),j=d("h3"),W=E("Serves"),Z=_(),L=d("p"),C=E(B),ae=_(),X=d("h3"),K=E("Prep Time"),ce=_(),G=d("p"),J=E(O),T=E(" minutes"),P=_(),ee=d("h3"),x=E("Cook Time"),te=_(),ue=d("p"),de=E(ie),ye=E(" minutes"),he=_(),Q=d("h3"),Ne=E("Ingredients"),Me=_(),$e=d("ul");for(let D=0;D<Y.length;D+=1)Y[D].c();_e=_(),me=d("div"),fe=d("div"),this.h()},l(D){e=m(D,"DIV",{class:!0});var A=p(e);n=m(A,"DIV",{class:!0});var N=p(n);t=m(N,"H2",{class:!0});var Ve=p(t);i=y(Ve,r),Ve.forEach(o),a=g(N),f=m(N,"DIV",{class:!0});var ve=p(f);c=m(ve,"BUTTON",{class:!0});var Se=p(c);H(v.$$.fragment,Se),Se.forEach(o),h=g(ve),$=m(ve,"BUTTON",{class:!0});var Ke=p($);H(b.$$.fragment,Ke),Ke.forEach(o),ve.forEach(o),N.forEach(o),re=g(A),z=m(A,"DIV",{class:!0});var qe=p(z);F&&F.l(qe),V=g(qe),k=m(qe,"DIV",{class:!0});var R=p(k);j=m(R,"H3",{class:!0});var Fe=p(j);W=y(Fe,"Serves"),Fe.forEach(o),Z=g(R),L=m(R,"P",{});var be=p(L);C=y(be,B),be.forEach(o),ae=g(R),X=m(R,"H3",{class:!0});var Oe=p(X);K=y(Oe,"Prep Time"),Oe.forEach(o),ce=g(R),G=m(R,"P",{});var Be=p(G);J=y(Be,O),T=y(Be," minutes"),Be.forEach(o),P=g(R),ee=m(R,"H3",{class:!0});var Qe=p(ee);x=y(Qe,"Cook Time"),Qe.forEach(o),te=g(R),ue=m(R,"P",{});var ke=p(ue);de=y(ke,ie),ye=y(ke," minutes"),ke.forEach(o),he=g(R),Q=m(R,"H3",{class:!0});var Ye=p(Q);Ne=y(Ye,"Ingredients"),Ye.forEach(o),Me=g(R),$e=m(R,"UL",{class:!0});var Ee=p($e);for(let Ae=0;Ae<Y.length;Ae+=1)Y[Ae].l(Ee);Ee.forEach(o),R.forEach(o),qe.forEach(o),_e=g(A),me=m(A,"DIV",{class:!0});var Ie=p(me);fe=m(Ie,"DIV",{class:!0});var ze=p(fe);ze.forEach(o),Ie.forEach(o),A.forEach(o),this.h()},h(){u(t,"class","svelte-1qgyeci"),u(c,"class","icon-button modal-button svelte-1qgyeci"),u($,"class","icon-button modal-button svelte-1qgyeci"),u(f,"class","modal-control svelte-1qgyeci"),u(n,"class","modal-head svelte-1qgyeci"),u(j,"class","svelte-1qgyeci"),u(X,"class","svelte-1qgyeci"),u(ee,"class","svelte-1qgyeci"),u(Q,"class","svelte-1qgyeci"),u($e,"class","recipe-list svelte-1qgyeci"),u(k,"class","recipe-prep svelte-1qgyeci"),u(z,"class","recipe-hero svelte-1qgyeci"),u(fe,"class","recipe-instructions"),u(me,"class","recipe-info svelte-1qgyeci"),u(e,"class","modal svelte-1qgyeci")},m(D,A){le(D,e,A),s(e,n),s(n,t),s(t,i),s(n,a),s(n,f),s(f,c),M(v,c,null),s(f,h),s(f,$),M(b,$,null),s(e,re),s(e,z),F&&F.m(z,null),s(z,V),s(z,k),s(k,j),s(j,W),s(k,Z),s(k,L),s(L,C),s(k,ae),s(k,X),s(X,K),s(k,ce),s(k,G),s(G,J),s(G,T),s(k,P),s(k,ee),s(ee,x),s(k,te),s(k,ue),s(ue,de),s(ue,ye),s(k,he),s(k,Q),s(Q,Ne),s(k,Me),s(k,$e);for(let N=0;N<Y.length;N+=1)Y[N].m($e,null);s(e,_e),s(e,me),s(me,fe),fe.innerHTML=l[1],se=!0,Ue||(Te=[oe(c,"click",l[3]),oe($,"click",l[4])],Ue=!0)},p(D,[A]){if(l=D,(!se||A&1)&&r!==(r=l[0].name+"")&&ge(i,r),l[0].photourl?F?F.p(l,A):(F=Yt(l),F.c(),F.m(z,V)):F&&(F.d(1),F=null),(!se||A&1)&&B!==(B=l[0].servings+"")&&ge(C,B),(!se||A&1)&&O!==(O=l[0].preptime+"")&&ge(J,O),(!se||A&1)&&ie!==(ie=l[0].cooktime+"")&&ge(de,ie),A&1){we=l[0].ingredients;let N;for(N=0;N<we.length;N+=1){const Ve=Qt(l,we,N);Y[N]?Y[N].p(Ve,A):(Y[N]=Zt(Ve),Y[N].c(),Y[N].m($e,null))}for(;N<Y.length;N+=1)Y[N].d(1);Y.length=we.length}(!se||A&2)&&(fe.innerHTML=l[1])},i(D){se||(w(v.$$.fragment,D),w(b.$$.fragment,D),nt(()=>{pe&&pe.end(1),Re=rt(e,et,{duration:400,easing:st}),Re.start()}),se=!0)},o(D){I(v.$$.fragment,D),I(b.$$.fragment,D),Re&&Re.invalidate(),pe=en(e,et,{duration:400,easing:tn}),se=!1},d(D){D&&o(e),U(v),U(b),F&&F.d(),Ct(Y,D),D&&pe&&pe.end(),Ue=!1,kt(Te)}}}function un(l,e,n){const t=Gt();let{recipe:r}=e,i="";if(r==null?void 0:r.instructions){let c=r.instructions.split(`
`);for(let v of c)i+=`<p>${v}</p>`}const a=()=>t("edit"),f=()=>t("close");return l.$$set=c=>{"recipe"in c&&n(0,r=c.recipe)},[r,i,t,a,f]}class fn extends je{constructor(e){super();We(this,e,un,cn,Xe,{recipe:0})}}function dn(l){let e,n;return e=new on({}),e.$on("open",l[2]),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p:dt,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function mn(l){let e,n;return e=new fn({props:{recipe:l[1]}}),e.$on("close",l[3]),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},p(t,r){const i={};r&2&&(i.recipe=t[1]),e.$set(i)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function pn(l){let e,n,t,r,i,a;const f=[mn,dn],c=[];function v(h,$){return h[0]?0:1}return t=v(l),r=c[t]=f[t](l),{c(){e=d("section"),n=d("div"),r.c(),this.h()},l(h){e=m(h,"SECTION",{class:!0});var $=p(e);n=m($,"DIV",{class:!0});var b=p(n);r.l(b),b.forEach(o),$.forEach(o),this.h()},h(){u(n,"class","page-content"),u(e,"class","page")},m(h,$){le(h,e,$),s(e,n),c[t].m(n,null),a=!0},p(h,[$]){l=h;let b=t;t=v(l),t===b?c[t].p(l,$):(mt(),I(c[b],1,1,()=>{c[b]=null}),pt(),r=c[t],r?r.p(l,$):(r=c[t]=f[t](l),r.c()),w(r,1),r.m(n,null))},i(h){a||(w(r),i||nt(()=>{i=rt(e,et,{duration:400,delay:250,easing:st}),i.start()}),a=!0)},o(h){I(r),a=!1},d(h){h&&o(e),c[t].d()}}}function vn(l,e,n){let t;tt(l,ht,c=>n(4,t=c));let r=!1,i;function a(c){const v=c.detail;n(1,i=t[v]),n(0,r=!0)}return[r,i,a,()=>n(0,r=!1)]}class hn extends je{constructor(e){super();We(this,e,vn,pn,Xe,{})}}function _n(l){let e,n;return{c(){e=d("h2"),n=E("List")},l(t){e=m(t,"H2",{});var r=p(e);n=y(r,"List"),r.forEach(o)},m(t,r){le(t,e,r),s(e,n)},d(t){t&&o(e)}}}function gn(l){let e,n;return{c(){e=d("h2"),n=E("Grid")},l(t){e=m(t,"H2",{});var r=p(e);n=y(r,"Grid"),r.forEach(o)},m(t,r){le(t,e,r),s(e,n)},d(t){t&&o(e)}}}function $n(l){let e,n,t;function r(f,c){if(f[0]==="grid")return gn;if(f[0]==="list")return _n}let i=r(l),a=i&&i(l);return{c(){e=d("section"),n=d("div"),a&&a.c(),this.h()},l(f){e=m(f,"SECTION",{class:!0});var c=p(e);n=m(c,"DIV",{class:!0});var v=p(n);a&&a.l(v),v.forEach(o),c.forEach(o),this.h()},h(){u(n,"class","page-content"),u(e,"class","page")},m(f,c){le(f,e,c),s(e,n),a&&a.m(n,null)},p(f,[c]){l=f,i!==(i=r(l))&&(a&&a.d(1),a=i&&i(l),a&&(a.c(),a.m(n,null)))},i(f){t||nt(()=>{t=rt(e,et,{duration:400,delay:250,easing:st}),t.start()})},o:dt,d(f){f&&o(e),a&&a.d()}}}function bn(l,e,n){let t;return tt(l,sn,r=>n(0,t=r)),[t]}class kn extends je{constructor(e){super();We(this,e,bn,$n,Xe,{})}}function En(l){let e,n,t,r,i,a,f,c,v,h,$,b,re,z,V,k,j,W,Z,L,B,C,ae,X,K,ce,G,O,J;return t=new ne({props:{name:"knife"}}),h=new ne({props:{name:"book"}}),k=new ne({props:{name:"add"}}),C=new ne({props:{name:"cart"}}),{c(){e=d("div"),n=d("div"),q(t.$$.fragment),r=_(),i=d("h1"),a=E("Knifework"),f=_(),c=d("div"),v=d("button"),q(h.$$.fragment),$=_(),b=d("h3"),re=E("Recipes"),z=_(),V=d("button"),q(k.$$.fragment),j=_(),W=d("h3"),Z=E("New Recipe"),L=_(),B=d("button"),q(C.$$.fragment),ae=_(),X=d("h3"),K=E("Shopping"),this.h()},l(T){e=m(T,"DIV",{id:!0,class:!0});var P=p(e);n=m(P,"DIV",{id:!0,class:!0});var ee=p(n);H(t.$$.fragment,ee),ee.forEach(o),r=g(P),i=m(P,"H1",{id:!0,class:!0});var x=p(i);a=y(x,"Knifework"),x.forEach(o),f=g(P),c=m(P,"DIV",{class:!0});var te=p(c);v=m(te,"BUTTON",{class:!0});var ue=p(v);H(h.$$.fragment,ue),$=g(ue),b=m(ue,"H3",{class:!0});var ie=p(b);re=y(ie,"Recipes"),ie.forEach(o),ue.forEach(o),z=g(te),V=m(te,"BUTTON",{class:!0});var de=p(V);H(k.$$.fragment,de),j=g(de),W=m(de,"H3",{class:!0});var ye=p(W);Z=y(ye,"New Recipe"),ye.forEach(o),de.forEach(o),L=g(te),B=m(te,"BUTTON",{class:!0});var he=p(B);H(C.$$.fragment,he),ae=g(he),X=m(he,"H3",{class:!0});var Q=p(X);K=y(Q,"Shopping"),Q.forEach(o),he.forEach(o),te.forEach(o),P.forEach(o),this.h()},h(){u(n,"id","intro-icon"),u(n,"class","svelte-152eyvm"),u(i,"id","intro-heading"),u(i,"class","svelte-152eyvm"),u(b,"class","svelte-152eyvm"),u(v,"class","card card-welcome svelte-152eyvm"),u(W,"class","svelte-152eyvm"),u(V,"class","card card-welcome svelte-152eyvm"),u(X,"class","svelte-152eyvm"),u(B,"class","card card-welcome svelte-152eyvm"),u(c,"class","three-up svelte-152eyvm"),u(e,"id","intro"),u(e,"class","center svelte-152eyvm")},m(T,P){le(T,e,P),s(e,n),M(t,n,null),s(e,r),s(e,i),s(i,a),s(e,f),s(e,c),s(c,v),M(h,v,null),s(v,$),s(v,b),s(b,re),s(c,z),s(c,V),M(k,V,null),s(V,j),s(V,W),s(W,Z),s(c,L),s(c,B),M(C,B,null),s(B,ae),s(B,X),s(X,K),G=!0,O||(J=[oe(v,"click",l[1]),oe(V,"click",l[2]),oe(B,"click",l[3])],O=!0)},p(T,[P]){l=T},i(T){G||(w(t.$$.fragment,T),w(h.$$.fragment,T),w(k.$$.fragment,T),w(C.$$.fragment,T),ce||nt(()=>{ce=rt(e,et,{duration:400,delay:250,easing:st}),ce.start()}),G=!0)},o(T){I(t.$$.fragment,T),I(h.$$.fragment,T),I(k.$$.fragment,T),I(C.$$.fragment,T),G=!1},d(T){T&&o(e),U(t),U(h),U(k),U(C),O=!1,kt(J)}}}function yn(l){function e(i){vt.send({type:"GO",key:i})}return nn(()=>{vt.send("GO",{key:"welcome"})}),[e,()=>e("recipes"),()=>e("postrecipe"),()=>e("shopping")]}class Jt extends je{constructor(e){super();We(this,e,yn,En,Xe,{})}}function Tn(l){let e,n,t,r,i,a,f,c,v,h,$,b,re,z,V,k,j,W,Z,L,B,C,ae,X,K,ce,G,O,J,T,P,ee,x,te,ue,ie,de,ye,he,Q,Ne,Me,$e,_e,me,fe,Re,pe,se,Ue,Te,F,we,Y,D,A,N,Ve,ve,Se,Ke,qe,R,Fe,be,Oe,Be,Qe,ke,Ye,Ee,Ie,ze,Ae,Le,Ce,_t,Ge,gt,Et;return j=new ne({props:{name:"subtract"}}),L=new ne({props:{name:"add2"}}),P=new ne({props:{name:"subtract"}}),te=new ne({props:{name:"add2"}}),fe=new ne({props:{name:"subtract"}}),se=new ne({props:{name:"add2"}}),N=new ne({props:{name:"image"}}),ze=new ne({props:{name:"close"}}),Ce=new ne({props:{name:"save"}}),{c(){e=d("section"),n=d("div"),t=d("div"),r=d("div"),i=d("div"),a=d("label"),f=E("Name"),c=_(),v=d("input"),h=_(),$=d("div"),b=d("span"),re=E("Servings"),z=_(),V=d("div"),k=d("button"),q(j.$$.fragment),W=_(),Z=d("button"),q(L.$$.fragment),B=_(),C=d("span"),ae=E(l[3]),X=_(),K=d("div"),ce=d("span"),G=E("Prep Time"),O=_(),J=d("div"),T=d("button"),q(P.$$.fragment),ee=_(),x=d("button"),q(te.$$.fragment),ue=_(),ie=d("span"),de=E(l[1]),ye=E(" min"),he=_(),Q=d("div"),Ne=d("span"),Me=E("Cook Time"),$e=_(),_e=d("div"),me=d("button"),q(fe.$$.fragment),Re=_(),pe=d("button"),q(se.$$.fragment),Ue=_(),Te=d("span"),F=E(l[2]),we=E(" min"),Y=_(),D=d("div"),A=d("button"),q(N.$$.fragment),Ve=_(),ve=d("div"),Se=d("label"),Ke=E("Instructions"),qe=_(),R=d("textarea"),Fe=_(),be=d("div"),Oe=d("label"),Be=E("Notes"),Qe=_(),ke=d("textarea"),Ye=_(),Ee=d("div"),Ie=d("button"),q(ze.$$.fragment),Ae=_(),Le=d("button"),q(Ce.$$.fragment),this.h()},l(S){e=m(S,"SECTION",{class:!0});var Pe=p(e);n=m(Pe,"DIV",{class:!0});var yt=p(n);t=m(yt,"DIV",{class:!0});var De=p(t);r=m(De,"DIV",{class:!0});var He=p(r);i=m(He,"DIV",{class:!0});var lt=p(i);a=m(lt,"LABEL",{for:!0});var Tt=p(a);f=y(Tt,"Name"),Tt.forEach(o),c=g(lt),v=m(lt,"INPUT",{type:!0,name:!0,id:!0,class:!0}),lt.forEach(o),h=g(He),$=m(He,"DIV",{class:!0});var Ze=p($);b=m(Ze,"SPAN",{});var wt=p(b);re=y(wt,"Servings"),wt.forEach(o),z=g(Ze),V=m(Ze,"DIV",{class:!0});var at=p(V);k=m(at,"BUTTON",{class:!0});var It=p(k);H(j.$$.fragment,It),It.forEach(o),W=g(at),Z=m(at,"BUTTON",{class:!0});var Dt=p(Z);H(L.$$.fragment,Dt),Dt.forEach(o),at.forEach(o),B=g(Ze),C=m(Ze,"SPAN",{class:!0});var Nt=p(C);ae=y(Nt,l[3]),Nt.forEach(o),Ze.forEach(o),X=g(He),K=m(He,"DIV",{class:!0});var Je=p(K);ce=m(Je,"SPAN",{});var Vt=p(ce);G=y(Vt,"Prep Time"),Vt.forEach(o),O=g(Je),J=m(Je,"DIV",{class:!0});var it=p(J);T=m(it,"BUTTON",{class:!0});var St=p(T);H(P.$$.fragment,St),St.forEach(o),ee=g(it),x=m(it,"BUTTON",{class:!0});var Ot=p(x);H(te.$$.fragment,Ot),Ot.forEach(o),it.forEach(o),ue=g(Je),ie=m(Je,"SPAN",{class:!0});var $t=p(ie);de=y($t,l[1]),ye=y($t," min"),$t.forEach(o),Je.forEach(o),he=g(He),Q=m(He,"DIV",{class:!0});var xe=p(Q);Ne=m(xe,"SPAN",{});var zt=p(Ne);Me=y(zt,"Cook Time"),zt.forEach(o),$e=g(xe),_e=m(xe,"DIV",{class:!0});var ot=p(_e);me=m(ot,"BUTTON",{class:!0});var Pt=p(me);H(fe.$$.fragment,Pt),Pt.forEach(o),Re=g(ot),pe=m(ot,"BUTTON",{class:!0});var Rt=p(pe);H(se.$$.fragment,Rt),Rt.forEach(o),ot.forEach(o),Ue=g(xe),Te=m(xe,"SPAN",{class:!0});var bt=p(Te);F=y(bt,l[2]),we=y(bt," min"),bt.forEach(o),xe.forEach(o),He.forEach(o),Y=g(De),D=m(De,"DIV",{class:!0});var qt=p(D);A=m(qt,"BUTTON",{class:!0});var Ht=p(A);H(N.$$.fragment,Ht),Ht.forEach(o),qt.forEach(o),Ve=g(De),ve=m(De,"DIV",{class:!0});var ct=p(ve);Se=m(ct,"LABEL",{for:!0});var Mt=p(Se);Ke=y(Mt,"Instructions"),Mt.forEach(o),qe=g(ct),R=m(ct,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0}),p(R).forEach(o),ct.forEach(o),Fe=g(De),be=m(De,"DIV",{class:!0});var ut=p(be);Oe=m(ut,"LABEL",{for:!0});var Ut=p(Oe);Be=y(Ut,"Notes"),Ut.forEach(o),Qe=g(ut),ke=m(ut,"TEXTAREA",{name:!0,id:!0,rows:!0}),p(ke).forEach(o),ut.forEach(o),Ye=g(De),Ee=m(De,"DIV",{class:!0});var ft=p(Ee);Ie=m(ft,"BUTTON",{class:!0});var Bt=p(Ie);H(ze.$$.fragment,Bt),Bt.forEach(o),Ae=g(ft),Le=m(ft,"BUTTON",{class:!0});var At=p(Le);H(Ce.$$.fragment,At),At.forEach(o),ft.forEach(o),De.forEach(o),yt.forEach(o),Pe.forEach(o),this.h()},h(){u(a,"for","name"),u(v,"type","text"),u(v,"name","name"),u(v,"id","name"),u(v,"class","svelte-1csk0zy"),u(i,"class","input-group svelte-1csk0zy"),u(k,"class","icon-button no-bg svelte-1csk0zy"),u(Z,"class","icon-button no-bg svelte-1csk0zy"),u(V,"class","button-group svelte-1csk0zy"),u(C,"class","servings svelte-1csk0zy"),u($,"class","input-group third svelte-1csk0zy"),u(T,"class","icon-button no-bg svelte-1csk0zy"),u(x,"class","icon-button no-bg svelte-1csk0zy"),u(J,"class","button-group svelte-1csk0zy"),u(ie,"class","servings svelte-1csk0zy"),u(K,"class","input-group third svelte-1csk0zy"),u(me,"class","icon-button no-bg svelte-1csk0zy"),u(pe,"class","icon-button no-bg svelte-1csk0zy"),u(_e,"class","button-group svelte-1csk0zy"),u(Te,"class","servings svelte-1csk0zy"),u(Q,"class","input-group third svelte-1csk0zy"),u(r,"class","form-group svelte-1csk0zy"),u(A,"class","icon-button no-bg huge svelte-1csk0zy"),u(D,"class","form-image svelte-1csk0zy"),u(Se,"for","instructions"),u(R,"name","instructions"),u(R,"id","instructions"),u(R,"cols","30"),u(R,"rows","10"),u(ve,"class","form-group instruction svelte-1csk0zy"),u(Oe,"for","instructions"),u(ke,"name","instructions"),u(ke,"id","instructions"),u(ke,"rows","10"),u(be,"class","form-group notes svelte-1csk0zy"),u(Ie,"class","icon-button no-bg svelte-1csk0zy"),u(Le,"class","icon-button no-bg svelte-1csk0zy"),u(Ee,"class","form-footer svelte-1csk0zy"),u(t,"class","recipe-form svelte-1csk0zy"),u(n,"class","page-content"),u(e,"class","page")},m(S,Pe){le(S,e,Pe),s(e,n),s(n,t),s(t,r),s(r,i),s(i,a),s(a,f),s(i,c),s(i,v),Wt(v,l[0]),s(r,h),s(r,$),s($,b),s(b,re),s($,z),s($,V),s(V,k),M(j,k,null),s(V,W),s(V,Z),M(L,Z,null),s($,B),s($,C),s(C,ae),s(r,X),s(r,K),s(K,ce),s(ce,G),s(K,O),s(K,J),s(J,T),M(P,T,null),s(J,ee),s(J,x),M(te,x,null),s(K,ue),s(K,ie),s(ie,de),s(ie,ye),s(r,he),s(r,Q),s(Q,Ne),s(Ne,Me),s(Q,$e),s(Q,_e),s(_e,me),M(fe,me,null),s(_e,Re),s(_e,pe),M(se,pe,null),s(Q,Ue),s(Q,Te),s(Te,F),s(Te,we),s(t,Y),s(t,D),s(D,A),M(N,A,null),s(t,Ve),s(t,ve),s(ve,Se),s(Se,Ke),s(ve,qe),s(ve,R),s(t,Fe),s(t,be),s(be,Oe),s(Oe,Be),s(be,Qe),s(be,ke),s(t,Ye),s(t,Ee),s(Ee,Ie),M(ze,Ie,null),s(Ee,Ae),s(Ee,Le),M(Ce,Le,null),Ge=!0,gt||(Et=[oe(v,"input",l[11]),oe(k,"click",l[5]),oe(Z,"click",l[4]),oe(T,"click",l[9]),oe(x,"click",l[8]),oe(me,"click",l[7]),oe(pe,"click",l[6]),oe(D,"click",wn),oe(Ie,"click",l[10]),oe(Le,"click",In)],gt=!0)},p(S,[Pe]){l=S,Pe&1&&v.value!==l[0]&&Wt(v,l[0]),(!Ge||Pe&8)&&ge(ae,l[3]),(!Ge||Pe&2)&&ge(de,l[1]),(!Ge||Pe&4)&&ge(F,l[2])},i(S){Ge||(w(j.$$.fragment,S),w(L.$$.fragment,S),w(P.$$.fragment,S),w(te.$$.fragment,S),w(fe.$$.fragment,S),w(se.$$.fragment,S),w(N.$$.fragment,S),w(ze.$$.fragment,S),w(Ce.$$.fragment,S),_t||nt(()=>{_t=rt(e,et,{duration:400,delay:250,easing:st}),_t.start()}),Ge=!0)},o(S){I(j.$$.fragment,S),I(L.$$.fragment,S),I(P.$$.fragment,S),I(te.$$.fragment,S),I(fe.$$.fragment,S),I(se.$$.fragment,S),I(N.$$.fragment,S),I(ze.$$.fragment,S),I(Ce.$$.fragment,S),Ge=!1},d(S){S&&o(e),U(j),U(L),U(P),U(te),U(fe),U(se),U(N),U(ze),U(Ce),gt=!1,kt(Et)}}}function wn(){console.log("TODO!!!")}function In(){console.log("TODO!!!")}function Dn(l,e,n){let t,r,i,a;function f(){n(3,t++,t)}function c(){t>0&&n(3,t--,t)}function v(){n(2,r++,r)}function h(){r>0&&n(2,r--,r)}function $(){n(1,i++,i)}function b(){i>0&&n(1,i--,i)}function re(){vt.send("GO",{key:"recipes"})}function z(){a=this.value,n(0,a)}return n(3,t=0),n(2,r=0),n(1,i=0),[a,i,r,t,f,c,v,h,$,b,re,z]}class Nn extends je{constructor(e){super();We(this,e,Dn,Tn,Xe,{})}}function xt(l){let e,n,t,r;const i=[On,Sn,Vn],a=[];function f(c,v){return c[0].context.currentMenu==="recipes"?0:c[0].context.currentMenu==="shopping"?1:c[0].context.currentMenu==="postrecipe"?2:-1}return~(n=f(l))&&(t=a[n]=i[n](l)),{c(){e=d("div"),t&&t.c(),this.h()},l(c){e=m(c,"DIV",{id:!0,class:!0});var v=p(e);t&&t.l(v),v.forEach(o),this.h()},h(){u(e,"id","content-header"),u(e,"class","content-sub-header")},m(c,v){le(c,e,v),~n&&a[n].m(e,null),r=!0},p(c,v){let h=n;n=f(c),n!==h&&(t&&(mt(),I(a[h],1,1,()=>{a[h]=null}),pt()),~n?(t=a[n],t||(t=a[n]=i[n](c),t.c()),w(t,1),t.m(e,null)):t=null)},i(c){r||(w(t),r=!0)},o(c){I(t),r=!1},d(c){c&&o(e),~n&&a[n].d()}}}function Vn(l){let e,n,t,r,i,a;return n=new ne({props:{name:"add"}}),{c(){e=d("div"),q(n.$$.fragment),t=_(),r=d("h2"),i=E("New Recipe"),this.h()},l(f){e=m(f,"DIV",{class:!0});var c=p(e);H(n.$$.fragment,c),t=g(c),r=m(c,"H2",{});var v=p(r);i=y(v,"New Recipe"),v.forEach(o),c.forEach(o),this.h()},h(){u(e,"class","page-heading")},m(f,c){le(f,e,c),M(n,e,null),s(e,t),s(e,r),s(r,i),a=!0},i(f){a||(w(n.$$.fragment,f),a=!0)},o(f){I(n.$$.fragment,f),a=!1},d(f){f&&o(e),U(n)}}}function Sn(l){let e,n,t,r,i,a;return n=new ne({props:{name:"cart"}}),{c(){e=d("div"),q(n.$$.fragment),t=_(),r=d("h2"),i=E("Shopping Lists"),this.h()},l(f){e=m(f,"DIV",{class:!0});var c=p(e);H(n.$$.fragment,c),t=g(c),r=m(c,"H2",{});var v=p(r);i=y(v,"Shopping Lists"),v.forEach(o),c.forEach(o),this.h()},h(){u(e,"class","page-heading")},m(f,c){le(f,e,c),M(n,e,null),s(e,t),s(e,r),s(r,i),a=!0},i(f){a||(w(n.$$.fragment,f),a=!0)},o(f){I(n.$$.fragment,f),a=!1},d(f){f&&o(e),U(n)}}}function On(l){let e,n,t,r,i,a;return n=new ne({props:{name:"book"}}),{c(){e=d("div"),q(n.$$.fragment),t=_(),r=d("h2"),i=E("Recipes"),this.h()},l(f){e=m(f,"DIV",{class:!0});var c=p(e);H(n.$$.fragment,c),t=g(c),r=m(c,"H2",{});var v=p(r);i=y(v,"Recipes"),v.forEach(o),c.forEach(o),this.h()},h(){u(e,"class","page-heading")},m(f,c){le(f,e,c),M(n,e,null),s(e,t),s(e,r),s(r,i),a=!0},i(f){a||(w(n.$$.fragment,f),a=!0)},o(f){I(n.$$.fragment,f),a=!1},d(f){f&&o(e),U(n)}}}function zn(l){let e,n;return e=new Jt({}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Pn(l){let e,n;return e=new Jt({}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Rn(l){let e,n;return e=new Nn({}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function qn(l){let e,n;return e=new kn({}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Hn(l){let e,n;return e=new hn({}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){M(e,t,r),n=!0},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Mn(l){let e,n,t,r,i,a=l[0].context.currentMenu!=="welcome"&&xt(l);const f=[Hn,qn,Rn,Pn,zn],c=[];function v(h,$){return h[0].context.currentMenu==="recipes"?0:h[0].context.currentMenu==="shopping"?1:h[0].context.currentMenu==="postrecipe"?2:h[0].context.currentMenu==="welcome"?3:4}return n=v(l),t=c[n]=f[n](l),{c(){a&&a.c(),e=_(),t.c(),r=Xt()},l(h){a&&a.l(h),e=g(h),t.l(h),r=Xt()},m(h,$){a&&a.m(h,$),le(h,e,$),c[n].m(h,$),le(h,r,$),i=!0},p(h,[$]){h[0].context.currentMenu!=="welcome"?a?(a.p(h,$),$&1&&w(a,1)):(a=xt(h),a.c(),w(a,1),a.m(e.parentNode,e)):a&&(mt(),I(a,1,1,()=>{a=null}),pt());let b=n;n=v(h),n!==b&&(mt(),I(c[b],1,1,()=>{c[b]=null}),pt(),t=c[n],t||(t=c[n]=f[n](h),t.c()),w(t,1),t.m(r.parentNode,r))},i(h){i||(w(a),w(t),i=!0)},o(h){I(a),I(t),i=!1},d(h){a&&a.d(h),h&&o(e),c[n].d(h),h&&o(r)}}}async function Ln({fetch:l}){const e=await l("/recipes.json");return e.ok?{props:{recipes:await e.json()}}:{status:e.status,error:new Error(e.error.message)}}function Un(l,e,n){let t,r;tt(l,ht,a=>n(3,t=a)),tt(l,vt,a=>n(0,r=a));let{recipes:i}=e;console.log("recipes: ",i);for(const a of i)rn(ht,t[a.id]=a,t);return console.log(t),l.$$set=a=>{"recipes"in a&&n(1,i=a.recipes)},l.$$.update=()=>{l.$$.dirty&1&&r.context.currentMenu},[r,i]}class Cn extends je{constructor(e){super();We(this,e,Un,Mn,Xe,{recipes:1})}}export{Cn as default,Ln as load};
