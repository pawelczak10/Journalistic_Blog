(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,s){e.exports={item:"QuoteItem_item__1Y6dY"}},50:function(e,t,s){e.exports={list:"QuoteList_list__Tnboo",sorting:"QuoteList_sorting__2tRyP"}},51:function(e,t,s){e.exports={noquotes:"NoQuotesFound_noquotes__3ZTPC"}},53:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(2),i=s(8),o=s(49),r=s.n(o),u=s(1),a=function(e){return Object(u.jsxs)("li",{className:r.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(i.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},d=s(50),j=s.n(d),l=function(e){var t,s,i=Object(n.h)(),o=Object(n.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),d=(t=e.quotes,s=r,t.sort((function(e,t){return s?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("div",{className:j.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){i.push("/quotes?sort="+(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(u.jsx)("div",{className:j.a.sorting}),Object(u.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(u.jsx)(a,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=s(14),h=s(51),x=s.n(h),O=function(){return Object(u.jsxs)("div",{className:x.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},f=s(35),m=s(36);t.default=function(){var e=Object(f.a)(m.d,!0),t=e.sendRequest,s=e.status,n=e.data,i=e.error;return Object(c.useEffect)((function(){t()}),[t]),"pending"===s?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(b.a,{})}):i?Object(u.jsx)("p",{className:"centered focused",children:i}):"completed"!==s||n&&0!==n.length?Object(u.jsx)(l,{quotes:n}):Object(u.jsx)(O,{})}}}]);
//# sourceMappingURL=5.9da342ec.chunk.js.map