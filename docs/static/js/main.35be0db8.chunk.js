(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(16),n(2)),u=(n(17),n(10)),o=n(0),j=function(t){var e=t.setNombres,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(u.a)(t))})),i(""))},children:Object(o.jsx)("input",{type:"text",onChange:function(t){i(t.target.value)},value:r})})},d=n(11),f=n(6),m=n.n(f),l=n(9),b=function(){var t=Object(l.a)(m.a.mark((function t(e){var n,a,c,r,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=T3EPuJUBmYs22aFAGdHgkHQy8SPuynU2&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=(n(7),function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"animate__animated animate__fadeIn animate_duration-1s card",children:[Object(o.jsx)("img",{src:n,alt:""}),Object(o.jsx)("h4",{children:e})]})}),h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){return r({data:t,loading:!1})}))}),[t]),c}(e),c=n.loading,r=n.data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeInDown animate__duration-500ms",children:e}),c&&Object(o.jsx)("p",{className:"animate__animated animate__flash animate__infinite",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(p,Object(d.a)({},t),t.id)}))})]})};var O=function(){var t=Object(a.useState)(["Saitama"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Gift expert App"}),Object(o.jsx)(j,{setNombres:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t,e){return Object(o.jsx)(h,{category:t},t)}))})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),g()},7:function(t,e,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.35be0db8.chunk.js.map