(this["webpackJsonpicons-for-wiki-articles"]=this["webpackJsonpicons-for-wiki-articles"]||[]).push([[0],{20:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(9),a=r(5),s=r(1);function i(e){var t=e.children,r=n.useState(!1),c=Object(a.a)(r,2),i=c[0],o=c[1];return Object(s.jsx)("button",{onClick:function(){return o(!i)},style:{border:"none",outline:"none",background:"none",color:i?"cornflowerblue":"black",fontSize:30},children:t})}var o=r(3),j=r(4),l=r(11),b=r(10),u=r(13),d=r(7),O=r(12),x={architectural:Object(s.jsx)(b.a,{}),bank:Object(s.jsx)(o.g,{}),battle:Object(s.jsx)(j.f,{}),bridge:Object(s.jsx)(j.e,{}),castle:Object(s.jsx)(j.a,{}),cathedral:Object(s.jsx)(j.b,{}),cemetery:Object(s.jsx)(j.c,{}),church:Object(s.jsx)(o.b,{}),default:Object(s.jsx)(o.c,{}),department:Object(s.jsx)(o.a,{}),district:Object(s.jsx)(d.b,{}),metro:Object(s.jsx)(o.i,{}),monument:Object(s.jsx)(o.e,{}),museum:Object(s.jsx)(o.d,{}),neighborhood:Object(s.jsx)(d.a,{}),neighbourhood:Object(s.jsx)(d.a,{}),palace:Object(s.jsx)(j.d,{}),park:Object(s.jsx)(o.l,{}),"power station":Object(s.jsx)(l.a,{}),railway:Object(s.jsx)(o.k,{}),"radio station":Object(s.jsx)(O.a,{}),"record label":Object(s.jsx)(o.f,{}),research:Object(s.jsx)(u.a,{}),residence:Object(s.jsx)(j.d,{}),street:Object(s.jsx)(o.h,{}),synagogue:Object(s.jsx)(o.j,{}),university:Object(s.jsx)(o.m,{}),village:Object(s.jsx)(j.g,{})},h=r(14),f=Object.keys(x);function g(e){var t,r=Object(h.a)(f);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.toLowerCase().indexOf(n))return n}}catch(c){r.e(c)}finally{r.f()}return null}function p(e,t){return Math.random()*(t-e)+e}var v={lat:52.247744131869645,lng:21.015043804607192};var m=function(){var e=n.useState(v),t=Object(a.a)(e,2),r=t[0],c=t[1],o=n.useState([]),j=Object(a.a)(o,2),l=j[0],b=j[1];return n.useEffect((function(){fetch("https://en.wikipedia.org/w/api.php?"+new URLSearchParams({origin:"*",action:"query",format:"json",prop:"pageterms",generator:"geosearch",ggscoord:r.lat+"|"+r.lng,ggsradius:2e3})).then((function(e){return e.json()})).then((function(e){var t,r=Object.values((null===(t=e.query)||void 0===t?void 0:t.pages)||[]).map((function(e){var t;return{id:e.pageid.toString(),label:e.terms.label[0],description:null===(t=e.terms.description)||void 0===t?void 0:t[0]}}));r.forEach((function(e){var t,r=e.label,n=e.description;n&&(t=g(n)),t||(t=g(r)),t||(t="default"),e.keyword=t})),b(r)})).catch(console.log)}),[r]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Icons For Wiki Articles"}),Object(s.jsx)("button",{onClick:function(){return c(function(e){var t=e.lat,r=e.lng,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3)/1e5;return{lat:p(t-n,t+n),lng:p(r-n,r+n)}}(v))},children:"Get random coordinates in Warsaw"}),l.map((function(e){var t=e.id,r=e.label,n=e.keyword;return Object(s.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(s.jsx)(i,{children:x[n]}),Object(s.jsx)("h2",{children:r})]},t)})),Object(s.jsx)("pre",{children:JSON.stringify(l,null,2)})]})};c.render(Object(s.jsx)(n.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e63f5449.chunk.js.map