(this["webpackJsonpallstate-email-app"]=this["webpackJsonpallstate-email-app"]||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},112:function(e,t,c){},117:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(33),i=c.n(n),s=(c(106),c(68)),r=c(79),l=c(12),j=(c(107),c(188)),d=c(181),o=c(189),b=c(190),x=c(191),h=c(193),m=c(192),O=c(187),u=c(182),p=c(179),f=c(196),v=c(195),g=c(194),y=c(184),N=c(89),w=c.n(N),S=c(178),E=c(185),k=(c(108),c(2));var A=function(e){var t=e.selectedEmail;return Object(k.jsx)("div",{children:null!==t&&void 0!==t?Object(k.jsx)("div",{className:"mail",children:Object(k.jsxs)("div",{className:"mail-body",children:[Object(k.jsxs)("div",{className:"mail-bodyHeader",children:[Object(k.jsx)("div",{className:"mail-subject",children:Object(k.jsxs)("h2",{children:["From: ",t.email]})}),Object(k.jsx)(O.a,{}),Object(k.jsx)("div",{className:"mail-subject",children:Object(k.jsxs)("h2",{children:["Subject: ",t.subject]})}),Object(k.jsx)(O.a,{})]}),Object(k.jsx)("div",{className:"mail-message",children:Object(k.jsx)("p",{children:t.message})})]})}):Object(k.jsx)("p",{children:"No email selected."})})},C=c(88),F=c.n(C),D=(c(112),400);function I(e){var t=e.emailData,c=(e.deleteEmail,e.toggleSeen),n=Object(a.useState)(null),i=Object(l.a)(n,2),s=i[0],r=i[1],N=Object(a.useState)(""),C=Object(l.a)(N,2),I=C[0],J=C[1],L=t.filter((function(e){return e.email.toLowerCase().includes(I.toLowerCase())}));return Object(k.jsxs)(j.a,{sx:{display:"flex"},children:[Object(k.jsx)(o.a,{}),Object(k.jsx)(b.a,{position:"fixed",sx:{width:"calc(100% - ".concat(D,"px)"),ml:"".concat(D,"px")},children:Object(k.jsx)(x.a,{children:Object(k.jsx)(m.a,{variant:"h6",noWrap:!0,component:"div",children:"AllState Email Application"})})}),Object(k.jsxs)(d.a,{sx:{width:D,flexShrink:0,"& .MuiDrawer-paper":{width:D,boxSizing:"border-box"}},variant:"permanent",anchor:"left",children:[Object(k.jsx)(x.a,{children:Object(k.jsx)("div",{className:"search",children:Object(k.jsxs)("div",{className:"searchInputs",children:[Object(k.jsx)("input",{type:"search",placeholder:"From: Search here...",onChange:function(e){J(e.target.value)}}),Object(k.jsx)("div",{className:"searchIcon",children:Object(k.jsx)(F.a,{})})]})})}),Object(k.jsx)(O.a,{}),Object(k.jsx)(h.a,{children:L.map((function(e){return Object(k.jsxs)(u.a,{alignItems:"flex-start",children:[Object(k.jsx)(g.a,{children:Object(k.jsx)(S.a,{variant:"dot",color:"primary",invisible:e.seen,children:Object(k.jsx)(y.a,{children:Object(k.jsx)(E.a,{})})})}),Object(k.jsx)(p.a,{onClick:function(){return function(e){r(e),c(e)}(e)},"data-testid":"email-item-".concat(e.id),children:Object(k.jsxs)("div",{children:[Object(k.jsx)(v.a,{primary:e.subject}),Object(k.jsx)(v.a,{primary:Object(k.jsxs)(a.Fragment,{children:[" From: ",e.email]}),secondary:Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(m.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:e.message})})})]})})]},e.id)}))}),Object(k.jsx)(O.a,{}),Object(k.jsx)(h.a,{children:["All mail"].map((function(e,t){return Object(k.jsx)(u.a,{disablePadding:!0,children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(f.a,{children:Object(k.jsx)(w.a,{})}),Object(k.jsx)(v.a,{primary:e})]})},e)}))})]}),Object(k.jsx)(j.a,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",p:1},children:Object(k.jsx)(A,{selectedEmail:s})})]})}var J=c(180);var L=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],i=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.get("/email/getAll");case 2:t=e.sent,c=t.data,n(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(I,{emailData:c,deleteEmail:function(e){fetch("/email/delete/".concat(e.id),{method:"DELETE"}).then((function(e){e.ok&&i()}))},toggleSeen:function(e){if(!1===e.seen){e.seen=!0;var t={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)};fetch("/email/update",t)}}})})};i.a.render(Object(k.jsx)(L,{}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.ffc5b92f.chunk.js.map