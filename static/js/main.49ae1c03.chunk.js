(this["webpackJsonpicons-for-wiki-articles"]=this["webpackJsonpicons-for-wiki-articles"]||[]).push([[0],{12:function(e,r,t){"use strict";t.r(r);var n=t(1),i=t(5),c=t(6),a=t(4),o=t(0),s={default:"\u2753",museum:"\ud83d\uddbc\ufe0f",bridge:"\ud83c\udf09",cathedral:"\u26ea",church:"\u26ea",street:"\ud83d\udee3\ufe0f",village:"\ud83c\udf3b",residence:"\ud83c\udfe0",castle:"\ud83c\udff0",park:"\ud83c\udf33",synagogue:"\ud83d\udd4d",power:"\u26a1",cemetery:"\u26b0\ufe0f",metro:"\ud83d\ude87",university:"\ud83c\udf93",architectural:"\ud83c\udfdb\ufe0f",railway:"\ud83d\ude82"},l=[52.247744131869645,21.015043804607192];var u=Object.keys(s);function d(e){var r,t=Object(c.a)(u);try{for(t.s();!(r=t.n()).done;){var n=r.value;if(-1!==e.toLowerCase().indexOf(n))return n}}catch(i){t.e(i)}finally{t.f()}return null}function h(e,r){return Math.random()*(r-e)+e}var f=function(){var e=n.useState(l),r=Object(a.a)(e,2),t=r[0],i=r[1],c=n.useState([]),u=Object(a.a)(c,2),f=u[0],j=u[1];return n.useEffect((function(){fetch("https://en.wikipedia.org/w/api.php?"+new URLSearchParams({origin:"*",action:"query",format:"json",prop:"pageterms",generator:"geosearch",ggscoord:t.join("|"),ggsradius:2e3})).then((function(e){return e.json()})).then((function(e){var r,t=Object.values((null===(r=e.query)||void 0===r?void 0:r.pages)||[]).map((function(e){var r;return{id:e.pageid.toString(),label:e.terms.label[0],description:null===(r=e.terms.description)||void 0===r?void 0:r[0]}}));t.forEach((function(e){var r,t=e.label,n=e.description;n&&(r=d(n)),r||(r=d(t)),r||(r="default"),e.keyword=r})),j(t)})).catch(console.log)}),[t]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Icons For Wiki Articles"}),Object(o.jsx)("button",{onClick:function(){return i([h(52.156111,52.24903),h(21.004021,21.105173)])},children:"Random"}),Object(o.jsx)("ul",{children:f.map((function(e){var r=e.id,t=e.label,n=e.keyword;return Object(o.jsx)("li",{children:Object(o.jsxs)("h2",{children:[s[n]," ",t]})},r)}))}),Object(o.jsx)("pre",{children:JSON.stringify(f,null,2)})]})};i.render(Object(o.jsx)(n.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.49ae1c03.chunk.js.map