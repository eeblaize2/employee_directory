(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(12),n(7)),i=n(4),j=(n(13),n(0)),l=function(e){var t=e.employee;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.name.first}),Object(j.jsx)("td",{children:t.name.last}),Object(j.jsx)("td",{children:t.dob.age}),Object(j.jsx)("td",{children:t.gender}),Object(j.jsx)("td",{children:t.location.state})]})};var u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(i.a)(s,2),u=a[0],b=a[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),O=h[0],f=h[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=30&nat=us").then((function(e){return e.json()})).then((function(e){console.log(e),r(e.results),b(e.results)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Employee Directory"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.filter((function(e){return e.location.state.toLowerCase()===O.toLowerCase()}));b(t)},children:[Object(j.jsx)("input",{type:"text",value:O,onChange:function(e){f(e.target.value),0===O.length&&b(n)},placeholder:"Search Employee by State"}),Object(j.jsx)("button",{type:"submit",children:"Search"})]}),Object(j.jsx)("button",{type:"button",onClick:function(e){e.preventDefault();var t=Object(o.a)(n);t.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0})),console.log(t),b(t)},children:"Sort by Last Name"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"First Name"}),Object(j.jsx)("th",{children:"Last Name"}),Object(j.jsx)("th",{children:"Age"}),Object(j.jsx)("th",{children:"Gender"}),Object(j.jsx)("th",{children:"State"})]})}),Object(j.jsx)("tbody",{children:u.map((function(e){return Object(j.jsx)(l,{employee:e},e.id.value)}))})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.d379bba7.chunk.js.map