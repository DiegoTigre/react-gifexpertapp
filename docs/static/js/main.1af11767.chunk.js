(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(10),u=n(8),j=n.n(u),o=n(0),p=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],u=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){u(e.target.value)}})})};p.prototype={setCategories:j.a.func.isRequired};var b=n(11),f=n(6),d=n.n(f),O=n(9),l=function(){var e=Object(O.a)(d.a.mark((function e(t){var n,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=50&q=".concat(encodeURI(t),"&api_key=DH1rPSfR880I8R1L9ZeqMEPeQrVgA458"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},x=function(e){var t=e.category,n=Object(r.useState)([]),c=Object(i.a)(n,2),a=c[0],s=c[1],u=Object(r.useState)(0),j=Object(i.a)(u,2);j[0],j[1];return Object(r.useEffect)((function(){l(t).then((function(e){return s(e)}))}),[t]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(o.jsx)(h,Object(b.a)({},e),e.id)}))})]})},g=function(){var e=Object(r.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(p,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(x,{category:e},e)}))})]})};n(20);a.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1af11767.chunk.js.map