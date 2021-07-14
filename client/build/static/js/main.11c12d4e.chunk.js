(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(37),r=n.n(a),s=n(14),i=n(2),o=n(4),l=n(11),u=n.n(l),j=n(19),d=n(12),b=n.n(d),x=n(39),p=n(9),O=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,transactions:t.payload});case"GET_TOTAL_BALANCE":return Object(p.a)(Object(p.a)({},e),{},{total_balance:t.payload});case"DELETE_TRANSACTION":return Object(p.a)(Object(p.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(p.a)(Object(p.a)({},e),{},{transactions:[].concat(Object(x.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},h=n(15),f=n.n(h),m=n(0),v={transactions:[],total_balance:0,error:null,loading:!0},g=Object(c.createContext)(v),N=function(e){var t=e.children,n=Object(c.useReducer)(O,v),a=Object(o.a)(n,2),r=a[0],s=a[1];function i(){return(i=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/v1/transactions");case 3:t=e.sent,s({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(){return(l=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/v1/transactions/".concat(t));case 3:s({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,b.a.post("/api/v1/transactions",t,n);case 4:c=e.sent,f.a.fire({title:"success",text:"Transaction Added",icon:"success",showConfirmButton:"true"}),s({type:"ADD_TRANSACTION",payload:c.data.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function x(){return(x=Object(j.a)(u.a.mark((function e(t,n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,b.a.put("/api/v1/transactions/".concat(n),t,c);case 4:f.a.fire({title:"success",text:"Edit",icon:"success",showConfirmButton:"true"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(m.jsx)(g.Provider,{value:{transactions:r.transactions,error:r.error,loading:r.loading,total_balance:r.total_balance,getTransactions:function(){return i.apply(this,arguments)},editTransaction:function(e,t){return x.apply(this,arguments)},deleteTransaction:function(e){return l.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)}},children:t})},y=function(e){var t=e._id;console.log("edit",t);var n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(""),u=Object(o.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(0),x=Object(o.a)(b,2),p=x[0],O=x[1],h=Object(i.f)(),f=Object(c.useContext)(g).editTransaction;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:"text-center",children:"Edit transaction"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f({text:r,description:j,amount:+p},t),h.push("/")},children:[Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"text",children:"Title"}),Object(m.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter text...",required:!0})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"description",children:"Description"}),Object(m.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)},placeholder:"Description",required:!0})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(m.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(m.jsx)("input",{type:"number",value:p,onChange:function(e){return O(e.target.value)},placeholder:"Enter amount...",required:!0})]}),Object(m.jsx)("button",{className:"mt-4 text-center bg-indigo-900 w-full text-white py-4",children:"Update"})]})]})},w=n(16),T=function(e){var t=e.setIsOpen,n=e._id;return Object(m.jsxs)("div",{className:"modal absolute bg-white p-4 rounded-lg",children:[Object(m.jsxs)("div",{className:"flex justify-between",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)(w.c,{size:"25px",onClick:function(){return t(!1)},style:{color:"red"}})]}),Object(m.jsx)(y,{_id:n})]})},C=n.p+"static/media/transactionDetail.68c76404.png",A=n.p+"static/media/plus.ab841166.png",R=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)([]),l=Object(o.a)(s,2),u=l[0],j=l[1],d=Object(i.f)(),x=e.match.params.id,p=Object(c.useContext)(g).deleteTransaction;return Object(c.useEffect)((function(){try{b.a.get("/api/v1/transactions/".concat(x)).then((function(e){return j(e.data.data)}))}catch(e){console.log(e.response.data)}}),[]),Object(m.jsxs)("div",{className:"",style:{height:"100vh"},children:[Object(m.jsxs)("div",{className:"flex justify-between bg-indigo-800 p-4",children:[Object(m.jsx)(w.a,{className:"cursor-pointer",onClick:function(){d.goBack()},style:{color:"white"}}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]}),u.amount>0?Object(m.jsx)("img",{src:A,alt:"header",className:"w-full",style:{height:"250px",objectFit:"cover"}}):Object(m.jsx)("img",{src:C,alt:"header",className:"w-full",style:{height:"250px",objectFit:"cover"}}),u?Object(m.jsxs)("div",{className:"flex justify-between p-4 w-full lg:w-2/4 mx-auto",children:[Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("h1",{className:"text-4xl",children:u.text}),Object(m.jsxs)("h2",{children:["Rp ",u.amount]}),Object(m.jsx)("p",{className:"text-gray-400",children:u.description})]}),Object(m.jsxs)("div",{className:"flex",children:[Object(m.jsx)(w.b,{className:"cursor-pointer mx-2",style:{color:"blue"},onClick:function(){return r(!0)}}),Object(m.jsx)(w.d,{className:"cursor-pointer ",onClick:function(){f.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(p(u._id),f.a.fire("Deleted!","Your file has been deleted.","success"),d.goBack())}))},style:{color:"blue"}})]})]}):Object(m.jsx)("div",{children:Object(m.jsx)("h5",{children:"Loading..."})}),a&&Object(m.jsx)(T,{setIsOpen:r,_id:x})]})},E=function(){return Object(m.jsxs)("div",{className:"bg-indigo-800 text-white text-center p-4 font-bold w-full",children:[Object(m.jsx)("h2",{children:"Expense Tracker"}),Object(m.jsx)("h1",{children:"Ini Saran"})]})};function S(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var _=function(){var e=Object(c.useContext)(g).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return Object(m.jsxs)("div",{className:"bg-indigo-900 w-full p-10 pb-20 text-white",children:[Object(m.jsx)("h4",{children:"Your Balance"}),Object(m.jsxs)("h1",{className:"text-2xl font-bold",children:["Rp ",S(e)]}),Object(m.jsx)("div",{className:"mt-4"})]})},k=function(){var e=Object(c.useContext)(g).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return Object(m.jsxs)("div",{className:"flex justify-evenly text-white text-center w-full",children:[Object(m.jsxs)("div",{className:"bg-green-500 w-1/2 p-4",children:[Object(m.jsx)("h4",{children:"Income"}),Object(m.jsxs)("p",{className:"",children:["Rp ",S(t)]})]}),Object(m.jsxs)("div",{className:"bg-red-500 w-1/2 p-4",children:[Object(m.jsx)("h4",{children:"Expense"}),Object(m.jsxs)("p",{className:"",children:["Rp -",S(n)]})]})]})},I=function(e){var t=e.transaction,n=t.amount<0?"-":"+";return Object(m.jsx)(s.b,{to:"detail/".concat(t._id),children:Object(m.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:t.text}),Object(m.jsx)("p",{className:"text-sm text-gray-400",children:t.description})]}),Object(m.jsxs)("span",{children:[n,S(Math.abs(t.amount))]})]})})},F=function(){var e=Object(c.useContext)(g),t=e.transactions,n=e.getTransactions;return Object(c.useEffect)((function(){n()}),[]),Object(m.jsxs)("div",{className:"p-8",children:[Object(m.jsx)("h3",{children:"History"}),Object(m.jsx)("ul",{className:"list",children:t.map((function(e){return Object(m.jsx)(I,{transaction:e},e.id)}))})]})},D=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],u=Object(c.useState)(0),j=Object(o.a)(u,2),d=j[0],b=j[1],x=Object(c.useContext)(g).addTransaction;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:"text-center",children:"Add new transaction"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,description:i,amount:+d};x(t)},children:[Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"text",children:"Title"}),Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter text...",required:!0})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{htmlFor:"description",children:"Description"}),Object(m.jsx)("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Description",required:!0})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(m.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(m.jsx)("input",{type:"number",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Enter amount...",required:!0})]}),Object(m.jsx)("button",{className:"text-cente mt-4 bg-indigo-900 w-full text-white py-4",children:"Add transaction"})]})]})},B=function(e){var t=e.setIsOpen;return Object(m.jsxs)("div",{className:"modal absolute bg-white shadow-lg p-4 rounded-lg",children:[Object(m.jsx)("div",{className:"text-right",children:Object(m.jsx)("button",{className:"bg-red-400 px-3 py-1 rounded-lg text-white",onClick:function(){return t(!1)},children:"X"})}),Object(m.jsx)(D,{})]})},q=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{class:"p-0 fixed bottom-10 right-10 w-16 h-16 bg-indigo-900 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none",onClick:function(){a(!0)},children:Object(m.jsx)("svg",{viewBox:"0 0 20 20","enable-background":"new 0 0 20 20",class:"w-6 h-6 inline-block",children:Object(m.jsx)("path",{fill:"#FFFFFF",d:"M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399 C15.952,9,16,9.447,16,10z"})})}),n&&Object(m.jsx)(B,{setIsOpen:a})]})},L=function(){return Object(m.jsxs)("div",{className:"w-full",children:[Object(m.jsx)(E,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)(_,{}),Object(m.jsx)(k,{}),Object(m.jsx)(F,{}),Object(m.jsx)(q,{})]})]})};function H(){return Object(m.jsx)(s.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",component:L}),Object(m.jsx)(i.a,{path:"/detail/:id",component:R})]})})}n(81);var M=function(){return Object(m.jsx)(N,{className:"",children:Object(m.jsx)(H,{})})};n(82);r.a.render(Object(m.jsx)(M,{}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.11c12d4e.chunk.js.map