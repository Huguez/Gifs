(this.webpackJsonpseccion6_gif_expert_app=this.webpackJsonpseccion6_gif_expert_app||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),o=n(8),u=n.n(o),j=n(0),d=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&t((function(e){return[r].concat(Object(s.a)(e))}))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"categoria"})})};d.prototype={setCategories:u.a.func.isRequired};var l=n(11),p=function(e){var t=e.imagen,n=e.title;e.id;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsxs)("p",{children:[" ",n," "]}),Object(j.jsx)("img",{alt:n,src:t})]})},f=n(6),b=n.n(f),g=n(9),m=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"IqIIolx2W325nKcvPuEzq2JV8yUlgnUz",n="https://api.giphy.com/v1/stickers/search?api_key=".concat("IqIIolx2W325nKcvPuEzq2JV8yUlgnUz","&q=").concat(t,"&limit=25&offset=0&rating=g&lang=en"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,imagen:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),2e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:[" ",t," "]}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash ",children:" Loading... "}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(p,Object(l.a)({},e),e.id)}))})]})},O=function(){var e=Object(a.useState)(["tacos"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e,t){return Object(j.jsx)(h,{category:e},"".concat(e))}))})]})};n(20);r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2e95554c.chunk.js.map